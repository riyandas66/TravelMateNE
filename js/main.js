import {
  ALL_STATES,
  CATEGORIES,
  DESTINATIONS,
  formatINR,
  refreshIcons,
  safeStorageGet,
  safeStorageSet,
  showToast
} from './data.js';
import { addStateToPlanner, initTripArchitect, loadStatesIntoPlanner } from './planner.js';
import { initPermitChecker, setPermitState } from './permits.js';
import { initMateAI, isChatOpen, toggleChat } from './chat.js';

/**
 * Creates a debounced wrapper around a callback function.
 * @param {Function} fn - Callback to delay.
 * @param {number} [delay=250] - Delay in milliseconds.
 * @returns {Function} Debounced function.
 */
export function debounce(fn, delay = 250) {
  let timerId = null;
  return (...args) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

/**
 * Safely loads bookmarked destination IDs from localStorage.
 * @returns {string[]} Array of saved destination IDs.
 */
export function loadFavorites() {
  try {
    const raw = safeStorageGet('travelmate_favorites');
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Safely persists the current list of favorite destination IDs to localStorage.
 * @param {string[]} favorites - Destination IDs to store.
 * @returns {void}
 */
export function saveFavorites(favorites) {
  try {
    safeStorageSet('travelmate_favorites', JSON.stringify(favorites));
  } catch {}
}

const appState = {
  search: '',
  selectedState: 'All',
  selectedCategory: 'All',
  favorites: loadFavorites(),
  activeDetailId: null,
  weather: {}
};

function decodeWmoWeather(code) {
  if (code === 0) return { label: 'Clear Sky', icon: 'sun' };
  if (code >= 1 && code <= 3) return { label: code === 3 ? 'Overcast' : 'Partly Cloudy', icon: 'cloud-sun' };
  if (code === 45 || code === 48) return { label: 'Misty / Foggy', icon: 'cloud-fog' };
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return { label: 'Light Rain / Showers', icon: 'cloud-rain' };
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return { label: 'Snowfall', icon: 'snowflake' };
  if (code >= 95) return { label: 'Thunderstorm', icon: 'cloud-lightning' };
  return { label: 'Mild Conditions', icon: 'cloud-sun' };
}

function getCardWeatherMarkup(d) {
  const entry = appState.weather[d.id];
  if (entry && entry.status === 'ok') {
    return `<i data-lucide="${entry.icon}" class="w-3.5 h-3.5 text-terracotta-dark dark:text-terracotta-light shrink-0"></i><span class="tabular-nums">${entry.temp}°C · ${entry.label}</span>`;
  }
  if (entry && entry.status === 'offline') {
    return `<i data-lucide="cloud-off" class="w-3.5 h-3.5 text-pine/45 dark:text-[#8E9F98] shrink-0"></i><span>Weather unavailable offline</span>`;
  }
  return `<i data-lucide="cloud-sun" class="w-3.5 h-3.5 text-pine/45 dark:text-[#8E9F98] shrink-0"></i><span>Checking live weather…</span>`;
}

function updateDetailWeatherUI(d) {
  if (appState.activeDetailId !== d.id) return;
  const textEl = document.getElementById('detail-weather-text');
  const iconWrap = document.getElementById('detail-weather-icon-wrap');
  const coordsEl = document.getElementById('detail-coords');
  if (!textEl || !coordsEl) return;

  coordsEl.textContent = `${d.lat.toFixed(2)}°N, ${d.lon.toFixed(2)}°E`;
  const entry = appState.weather[d.id];

  let iconName = 'cloud-sun';
  let iconClass = 'w-4 h-4 text-terracotta-dark dark:text-terracotta-light';

  if (entry && entry.status === 'ok') {
    textEl.textContent = `Live Weather: ${entry.temp}°C · ${entry.label} · Wind ${entry.wind} km/h`;
    iconName = entry.icon;
  } else if (entry && entry.status === 'offline') {
    textEl.textContent = `Live weather unavailable offline · Best visited ${d.season}`;
    iconName = 'cloud-off';
    iconClass = 'w-4 h-4 text-pine/55 dark:text-[#8E9F98]';
  } else {
    textEl.textContent = 'Checking live weather…';
  }

  if (iconWrap) {
    iconWrap.innerHTML = `<i data-lucide="${iconName}" class="${iconClass}"></i>`;
  }
  refreshIcons();
}

function syncAllCardWeatherUI() {
  DESTINATIONS.forEach((d) => {
    const el = document.querySelector(`[data-weather-id="${d.id}"]`);
    if (el) el.innerHTML = getCardWeatherMarkup(d);
  });
  if (appState.activeDetailId) {
    const activeDest = DESTINATIONS.find((item) => item.id === appState.activeDetailId);
    if (activeDest) updateDetailWeatherUI(activeDest);
  }
  refreshIcons();
}

async function fetchSingleWeather(d) {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    appState.weather[d.id] = { status: 'offline' };
    syncAllCardWeatherUI();
    return;
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${d.lat}&longitude=${d.lon}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`;
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error('Weather fetch failed');
    const data = await res.json();
    const cur = data && data.current;
    if (!cur || typeof cur.temperature_2m !== 'number') throw new Error('Invalid weather payload');
    const info = decodeWmoWeather(cur.weather_code);
    appState.weather[d.id] = {
      status: 'ok',
      temp: Math.round(cur.temperature_2m),
      wind: Math.round(cur.wind_speed_10m || 0),
      label: info.label,
      icon: info.icon
    };
  } catch {
    appState.weather[d.id] = { status: 'offline' };
  } finally {
    clearTimeout(timer);
    syncAllCardWeatherUI();
  }
}

/**
 * Fetches live Open-Meteo weather in a single batched request for all destinations with offline fallback.
 * @returns {Promise<void>}
 */
export async function fetchAllWeather() {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    DESTINATIONS.forEach((d) => {
      appState.weather[d.id] = { status: 'offline' };
    });
    syncAllCardWeatherUI();
    return;
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    const lats = DESTINATIONS.map((d) => d.lat).join(',');
    const lons = DESTINATIONS.map((d) => d.lon).join(',');
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`;
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error('Batch weather failed');
    const payload = await res.json();
    const list = Array.isArray(payload) ? payload : [payload];
    DESTINATIONS.forEach((d, idx) => {
      const cur = list[idx] && list[idx].current;
      if (cur && typeof cur.temperature_2m === 'number') {
        const info = decodeWmoWeather(cur.weather_code);
        appState.weather[d.id] = {
          status: 'ok',
          temp: Math.round(cur.temperature_2m),
          wind: Math.round(cur.wind_speed_10m || 0),
          label: info.label,
          icon: info.icon
        };
      } else {
        appState.weather[d.id] = { status: 'offline' };
      }
    });
  } catch {
    DESTINATIONS.forEach((d) => {
      appState.weather[d.id] = { status: 'offline' };
    });
  } finally {
    clearTimeout(timer);
    syncAllCardWeatherUI();
  }
}

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    safeStorageSet('travelmate_theme', isDark ? 'dark' : 'light');
    showToast(isDark ? 'Dark mode enabled' : 'Light mode enabled');
  });
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  const closeMenu = () => {
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', () => {
    const isHidden = menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!isHidden));
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a, button')) closeMenu();
  });
}

function renderFilterBars() {
  const stateBar = document.getElementById('state-filter-bar');
  const catBar = document.getElementById('category-filter-bar');
  if (!stateBar || !catBar) return;

  const stateOptions = ['All', ...ALL_STATES];
  stateBar.innerHTML = stateOptions
    .map((st) => {
      const active = appState.selectedState === st;
      return `<button type="button" data-state-filter="${st}" class="px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
        active
          ? 'bg-terracotta text-white shadow-md'
          : 'bg-white/85 hover:bg-white text-pine/90 dark:bg-pine-card/85 dark:hover:bg-pine-card dark:text-[#E2EAE6] backdrop-blur-sm shadow-sm'
      }">${st === 'All' ? 'All 8 States' : st}</button>`;
    })
    .join('');

  catBar.innerHTML = CATEGORIES.map((cat) => {
    const active = appState.selectedCategory === cat;
    return `<button type="button" data-cat-filter="${cat}" class="px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 border ${
      active
        ? 'bg-terracotta text-white border-terracotta shadow-sm'
        : 'bg-white/90 hover:bg-white text-pine/80 border-pine/10 dark:bg-pine-card dark:hover:bg-pine-soft dark:text-[#CBD5D0] dark:border-white/10'
    }">${cat === 'All' ? 'All Themes' : cat}</button>`;
  }).join('');
}

function getFilteredDestinations() {
  const q = appState.search.trim().toLowerCase();
  return DESTINATIONS.filter((d) => {
    const matchState = appState.selectedState === 'All' || d.state === appState.selectedState;
    const matchCat = appState.selectedCategory === 'All' || d.category === appState.selectedCategory;
    if (!matchState || !matchCat) return false;
    if (!q) return true;
    const haystack = [d.name, d.state, d.category, d.season, d.food, d.airport, d.permit, ...d.highlights]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

function renderDestinations() {
  const grid = document.getElementById('destinations-grid');
  const empty = document.getElementById('empty-state');
  const summary = document.getElementById('results-summary');
  const resetInline = document.getElementById('reset-filters-inline');
  if (!grid || !empty || !summary) return;

  const list = getFilteredDestinations();
  const hasFilters = appState.search.trim() !== '' || appState.selectedState !== 'All' || appState.selectedCategory !== 'All';

  summary.textContent = `Showing ${list.length} of ${DESTINATIONS.length} destinations`;
  resetInline.classList.toggle('hidden', !hasFilters);

  if (list.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    refreshIcons();
    return;
  }

  empty.classList.add('hidden');
  grid.innerHTML = list
    .map((d) => {
      const isFav = appState.favorites.includes(d.id);
      const permitLabel = d.permit === 'ILP' ? 'ILP Required' : 'No State ILP';
      return `
        <article data-dest-id="${d.id}" tabindex="0" role="button" aria-label="View details for ${d.name}, ${d.state}" class="destination-card group cursor-pointer bg-white dark:bg-pine-card rounded-2xl border border-pine/10 dark:border-white/10 shadow-sm hover:shadow-md overflow-hidden flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta">
          <div class="relative aspect-[4/3] overflow-hidden img-fallback-bg" style="background-image:${d.fallbackGradient}">
            <img
              src="${d.image}"
              alt="${d.name} in ${d.state}, North East India"
              loading="lazy"
              decoding="async"
              referrerpolicy="no-referrer"
              class="card-img w-full h-full object-cover"
              onerror="this.style.display='none'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 pointer-events-none"></div>
            <span class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm inline-flex items-center gap-1.5 ${
              d.permit === 'ILP'
                ? 'bg-[#FDF0E6]/95 text-[#9C3F0E] dark:bg-terracotta-dark/95 dark:text-white'
                : 'bg-[#E2F3EA]/95 text-[#0F4D37] dark:bg-[#163D2E]/95 dark:text-[#A7E6CB]'
            }">
              <span>${permitLabel}</span>
            </span>
            <button
              type="button"
              data-fav-toggle="${d.id}"
              aria-label="${isFav ? 'Remove from saved trips' : 'Save destination'}"
              aria-pressed="${isFav}"
              class="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 hover:bg-white dark:bg-pine-card/90 dark:hover:bg-pine-card text-pine dark:text-white backdrop-blur-sm shadow-sm inline-flex items-center justify-center transition-colors"
            >
              <i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-[#D96B27] text-[#D96B27]' : ''}"></i>
            </button>
            <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/95 font-medium">
              <span>${d.state}</span>
              <span class="tabular-nums">${formatINR(d.budgetINR)} / day</span>
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col">
            <p class="text-xs text-pine/60 dark:text-[#A6B5AE]">
              ${d.category} <span aria-hidden="true">·</span> ${d.season} <span aria-hidden="true">·</span> ${d.days}
            </p>
            <h3 class="mt-1.5 font-serif text-xl font-semibold text-pine dark:text-[#F4F1EA] group-hover:text-terracotta-dark dark:group-hover:text-terracotta-light transition-colors">
              ${d.name}
            </h3>
            <p data-weather-id="${d.id}" class="mt-1.5 inline-flex items-center gap-1.5 text-xs text-pine/65 dark:text-[#A6B5AE]">
              ${getCardWeatherMarkup(d)}
            </p>
            <p class="mt-2 mb-4 text-sm text-pine/75 dark:text-[#CBD5D0] leading-relaxed line-clamp-2">
              ${d.summary}
            </p>

            <div class="mt-auto pt-4 border-t border-pine/10 dark:border-white/10 flex items-center justify-between text-xs">
              <span class="inline-flex items-center gap-1.5 font-medium ${
                d.permit === 'ILP'
                  ? 'text-terracotta-dark dark:text-terracotta-light'
                  : 'text-pine/75 dark:text-[#A6B5AE]'
              }">
                <i data-lucide="${d.permit === 'ILP' ? 'file-check-2' : 'check-circle-2'}" class="w-3.5 h-3.5"></i>
                <span>${permitLabel}</span>
              </span>
              <span class="inline-flex items-center gap-1 font-semibold text-pine dark:text-[#F4F1EA] group-hover:text-terracotta-dark dark:group-hover:text-terracotta-light transition-colors">
                <span>View Guide</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
              </span>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  refreshIcons();
}

function updateSavedCounters() {
  const count = appState.favorites.length;
  const navEl = document.getElementById('saved-count-nav');
  const mobEl = document.getElementById('saved-count-mobile');
  if (navEl) navEl.textContent = `(${count})`;
  if (mobEl) mobEl.textContent = `${count} saved`;
}

function syncDetailFavoriteIcon(id) {
  const btn = document.getElementById('detail-fav-btn');
  if (!btn) return;
  const isFav = appState.favorites.includes(id);
  btn.setAttribute('aria-pressed', String(isFav));
  btn.innerHTML = `<i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-[#E67E3B] text-[#E67E3B]' : ''}"></i>`;
  refreshIcons();
}

function toggleFavorite(id) {
  const dest = DESTINATIONS.find((d) => d.id === id);
  if (!dest) return;
  const idx = appState.favorites.indexOf(id);
  if (idx >= 0) {
    appState.favorites.splice(idx, 1);
    showToast(`Removed ${dest.name} from Saved Trips`);
  } else {
    appState.favorites.push(id);
    showToast(`Saved ${dest.name} to your shortlist`);
  }
  saveFavorites(appState.favorites);
  updateSavedCounters();
  renderDestinations();
  if (appState.activeDetailId === id) {
    syncDetailFavoriteIcon(id);
  }
  if (!document.getElementById('saved-modal').classList.contains('hidden')) {
    renderSavedModal();
  }
}

function openDetailModal(id) {
  const d = DESTINATIONS.find((item) => item.id === id);
  if (!d) return;
  appState.activeDetailId = id;

  const modal = document.getElementById('detail-modal');
  const img = document.getElementById('detail-img');
  img.style.display = 'block';
  img.src = d.image;
  img.alt = `${d.name}, ${d.state}`;
  img.parentElement.style.backgroundImage = d.fallbackGradient;
  img.onerror = () => {
    img.style.display = 'none';
  };

  document.getElementById('detail-kicker').textContent = `${d.state} · ${d.category} · Best: ${d.season}`;
  document.getElementById('detail-modal-title').textContent = d.name;
  document.getElementById('detail-budget').textContent = formatINR(d.budgetINR);
  document.getElementById('detail-days').textContent = d.days;
  document.getElementById('detail-summary').textContent = d.summary;
  document.getElementById('detail-food').textContent = d.food;
  document.getElementById('detail-airport').textContent = d.airport;

  const permitLine = document.getElementById('detail-permit-line');
  if (d.permit === 'ILP') {
    permitLine.className = 'inline-flex items-center gap-2 text-sm font-semibold text-terracotta-dark dark:text-terracotta-light';
    permitLine.innerHTML = `<i data-lucide="file-check-2" class="w-4 h-4"></i><span>ILP Required (${d.state})</span>`;
  } else {
    permitLine.className = 'inline-flex items-center gap-2 text-sm font-semibold text-pine dark:text-[#84C3AA]';
    permitLine.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4"></i><span>No State Entry Permit Required</span>`;
  }

  document.getElementById('detail-highlights').innerHTML = d.highlights
    .map(
      (h, idx) => `
      <li class="flex items-start gap-2.5">
        <span class="text-xs font-semibold text-terracotta-dark dark:text-terracotta-light tabular-nums mt-0.5">0${idx + 1}.</span>
        <span>${h}</span>
      </li>`
    )
    .join('');

  syncDetailFavoriteIcon(id);
  updateDetailWeatherUI(d);
  if (!appState.weather[d.id] || appState.weather[d.id].status === 'offline') {
    fetchSingleWeather(d);
  }
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  refreshIcons();
}

function closeModals() {
  ['detail-modal', 'saved-modal'].forEach((modalId) => {
    const m = document.getElementById(modalId);
    if (m) {
      m.classList.add('hidden');
      m.classList.remove('flex');
    }
  });
  appState.activeDetailId = null;
  document.body.style.overflow = '';
}

function renderSavedModal() {
  const listEl = document.getElementById('saved-modal-list');
  const subtitle = document.getElementById('saved-modal-subtitle');
  const footer = document.getElementById('saved-modal-footer');
  const totalEl = document.getElementById('saved-total-estimate');
  if (!listEl) return;

  const savedItems = DESTINATIONS.filter((d) => appState.favorites.includes(d.id));
  subtitle.textContent = `${savedItems.length} destination${savedItems.length === 1 ? '' : 's'} bookmarked`;

  if (savedItems.length === 0) {
    footer.classList.add('hidden');
    footer.classList.remove('flex');
    listEl.innerHTML = `
      <div class="py-10 text-center">
        <i data-lucide="heart" class="w-8 h-8 mx-auto text-pine/30 dark:text-[#8E9F98]"></i>
        <p class="mt-3 text-sm font-medium text-pine dark:text-[#F4F1EA]">No saved destinations yet</p>
        <p class="mt-1 text-xs text-pine/65 dark:text-[#A6B5AE]">Tap the heart icon on any destination card to build your shortlist.</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  const combined = savedItems.reduce((sum, item) => sum + item.budgetINR * 2, 0);
  totalEl.textContent = `${formatINR(combined)} (est. 2 days each)`;
  footer.classList.remove('hidden');
  footer.classList.add('flex');

  listEl.innerHTML = savedItems
    .map(
      (d) => `
      <div class="flex items-center gap-3.5 p-3 rounded-lg border border-pine/10 dark:border-white/10 bg-mist/50 dark:bg-pine-deep">
        <img src="${d.image}" alt="${d.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer" class="w-16 h-14 rounded-md object-cover shrink-0 bg-pine" onerror="this.style.display='none'" />
        <div class="min-w-0 flex-1">
          <button type="button" data-open-saved="${d.id}" class="text-left font-serif text-base font-semibold text-pine dark:text-[#F4F1EA] hover:text-terracotta-dark dark:hover:text-terracotta-light truncate block w-full">
            ${d.name}
          </button>
          <p class="text-xs text-pine/65 dark:text-[#A6B5AE] tabular-nums">${d.state} · ${formatINR(d.budgetINR)}/day</p>
        </div>
        <button type="button" data-remove-saved="${d.id}" aria-label="Remove ${d.name}" class="w-9 h-9 rounded-md inline-flex items-center justify-center text-pine/60 dark:text-[#A6B5AE] hover:text-terracotta-dark hover:bg-pine/10 dark:hover:bg-white/10 transition-colors shrink-0">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `
    )
    .join('');

  refreshIcons();
}

function openSavedModal() {
  renderSavedModal();
  const modal = document.getElementById('saved-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function initExplorerAndModals() {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  const grid = document.getElementById('destinations-grid');
  const stateBar = document.getElementById('state-filter-bar');
  const catBar = document.getElementById('category-filter-bar');
  const savedList = document.getElementById('saved-modal-list');

  const debouncedSearchRender = debounce(() => {
    appState.search = searchInput.value;
    renderDestinations();
  }, 250);

  searchInput.addEventListener('input', () => {
    const hasValue = searchInput.value.length > 0;
    clearBtn.classList.toggle('hidden', !hasValue);
    clearBtn.classList.toggle('inline-flex', hasValue);
    debouncedSearchRender();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    appState.search = '';
    clearBtn.classList.add('hidden');
    clearBtn.classList.remove('inline-flex');
    renderDestinations();
    searchInput.focus();
  });

  stateBar.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-state-filter]');
    if (!btn) return;
    appState.selectedState = btn.dataset.stateFilter;
    renderFilterBars();
    renderDestinations();
  });

  catBar.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cat-filter]');
    if (!btn) return;
    appState.selectedCategory = btn.dataset.catFilter;
    renderFilterBars();
    renderDestinations();
  });

  grid.addEventListener('click', (e) => {
    const favBtn = e.target.closest('[data-fav-toggle]');
    if (favBtn) {
      e.stopPropagation();
      toggleFavorite(favBtn.dataset.favToggle);
      return;
    }
    const card = e.target.closest('[data-dest-id]');
    if (card) {
      openDetailModal(card.dataset.destId);
    }
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    if (e.target.closest('[data-fav-toggle]')) return;
    const card = e.target.closest('[data-dest-id]');
    if (card) {
      e.preventDefault();
      openDetailModal(card.dataset.destId);
    }
  });

  savedList.addEventListener('click', (e) => {
    const openBtn = e.target.closest('[data-open-saved]');
    if (openBtn) {
      closeModals();
      openDetailModal(openBtn.dataset.openSaved);
      return;
    }
    const removeBtn = e.target.closest('[data-remove-saved]');
    if (removeBtn) {
      toggleFavorite(removeBtn.dataset.removeSaved);
    }
  });

  const resetAll = () => {
    appState.search = '';
    appState.selectedState = 'All';
    appState.selectedCategory = 'All';
    searchInput.value = '';
    clearBtn.classList.add('hidden');
    clearBtn.classList.remove('inline-flex');
    renderFilterBars();
    renderDestinations();
  };

  document.getElementById('reset-filters-inline').addEventListener('click', resetAll);
  document.getElementById('reset-filters-empty').addEventListener('click', resetAll);

  document.getElementById('open-saved-nav').addEventListener('click', openSavedModal);
  document.getElementById('open-saved-mobile').addEventListener('click', openSavedModal);
  document.getElementById('close-detail-modal').addEventListener('click', closeModals);
  document.getElementById('close-saved-modal').addEventListener('click', closeModals);

  document.getElementById('detail-fav-btn').addEventListener('click', () => {
    if (appState.activeDetailId) toggleFavorite(appState.activeDetailId);
  });

  document.getElementById('detail-check-permit-btn').addEventListener('click', () => {
    const dest = DESTINATIONS.find((d) => d.id === appState.activeDetailId);
    if (!dest) return;
    closeModals();
    setPermitState(dest.state);
    document.getElementById('permits').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('detail-add-planner-btn').addEventListener('click', () => {
    const dest = DESTINATIONS.find((d) => d.id === appState.activeDetailId);
    if (!dest) return;
    closeModals();
    addStateToPlanner(dest.state);
    document.getElementById('architect').scrollIntoView({ behavior: 'smooth' });
    showToast(`Added ${dest.name} (${dest.state}) to Trip Architect`);
  });

  document.getElementById('load-saved-into-planner').addEventListener('click', () => {
    const savedStates = [...new Set(DESTINATIONS.filter((d) => appState.favorites.includes(d.id)).map((d) => d.state))].slice(0, 4);
    if (savedStates.length === 0) return;
    closeModals();
    loadStatesIntoPlanner(savedStates);
    document.getElementById('architect').scrollIntoView({ behavior: 'smooth' });
    showToast(`Loaded ${savedStates.length} saved state${savedStates.length > 1 ? 's' : ''} into Trip Architect`);
  });

  ['detail-modal', 'saved-modal'].forEach((id) => {
    const modal = document.getElementById(id);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModals();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModals();
      if (isChatOpen()) toggleChat(false);
    }
  });
}

/**
 * Bootstraps all TravelMateNE modules, UI interactions, and live weather fetching.
 * @returns {void}
 */
export function initApp() {
  initTheme();
  initMobileMenu();
  renderFilterBars();
  renderDestinations();
  updateSavedCounters();
  initExplorerAndModals();
  initTripArchitect();
  initPermitChecker();
  initMateAI();
  fetchAllWeather();

  window.addEventListener('online', () => fetchAllWeather());
  window.addEventListener('offline', () => {
    DESTINATIONS.forEach((d) => {
      if (!appState.weather[d.id] || appState.weather[d.id].status !== 'ok') {
        appState.weather[d.id] = { status: 'offline' };
      }
    });
    syncAllCardWeatherUI();
  });

  refreshIcons();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
