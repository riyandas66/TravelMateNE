import {
  ALL_STATES,
  DESTINATIONS,
  PERMIT_DATA,
  STATE_GATEWAYS,
  TIER_CONFIG,
  formatINR,
  refreshIcons,
  showToast
} from './data.js';

const plannerState = {
  states: ['Assam', 'Meghalaya'],
  days: 5,
  travelers: 2,
  tier: 'Comfort',
  lastGeneratedText: ''
};

/**
 * Renders the Trip & Budget Architect state toggles, duration, travelers, and budget tier controls.
 * @returns {void}
 */
export function renderPlannerControls() {
  const container = document.getElementById('planner-state-selector');
  const countEl = document.getElementById('selected-states-count');
  if (!container || !countEl) return;

  countEl.textContent = `${plannerState.states.length} selected`;

  container.innerHTML = ALL_STATES.map((st) => {
    const active = plannerState.states.includes(st);
    return `<button type="button" data-plan-state="${st}" aria-pressed="${active}" class="px-3 py-2 rounded-lg text-xs font-medium text-left border transition-colors flex items-center justify-between gap-2 ${
      active
        ? 'bg-pine text-mist border-pine dark:bg-terracotta-dark dark:border-terracotta-dark dark:text-white'
        : 'bg-mist/50 dark:bg-pine-deep text-pine/85 dark:text-[#CBD5D0] border-pine/15 dark:border-white/15 hover:border-terracotta'
    }">
      <span class="truncate">${st}</span>
      <i data-lucide="${active ? 'check' : 'plus'}" class="w-3.5 h-3.5 shrink-0"></i>
    </button>`;
  }).join('');

  document.getElementById('duration-slider').value = String(plannerState.days);
  document.getElementById('duration-display').textContent = `${plannerState.days} Days`;
  document.getElementById('travelers-display').textContent = `${plannerState.travelers} Traveler${plannerState.travelers > 1 ? 's' : ''}`;

  document.querySelectorAll('.tier-btn').forEach((btn) => {
    const active = btn.dataset.tier === plannerState.tier;
    btn.setAttribute('aria-checked', String(active));
    btn.className = `tier-btn py-2 px-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
      active
        ? 'bg-white dark:bg-pine-card text-pine dark:text-white shadow-sm border border-pine/10 dark:border-white/15'
        : 'text-pine/70 dark:text-[#A6B5AE] hover:text-pine dark:hover:text-white'
    }`;
  });
  document.getElementById('tier-caption').textContent = TIER_CONFIG[plannerState.tier].caption;

  refreshIcons();
}

/**
 * Generates and renders the Trip Highlights summary card, INR budget breakdown, and day-by-day itinerary.
 * @param {boolean} [notify=true] - Whether to display a toast confirmation upon generation.
 * @returns {void}
 */
export function generateItinerary(notify = true) {
  const { states, days, travelers, tier } = plannerState;
  const tierCfg = TIER_CONFIG[tier];
  const matched = DESTINATIONS.filter((d) => states.includes(d.state));
  const pool = matched.length ? matched : [DESTINATIONS[0]];

  const avgDailyBase = pool.reduce((sum, d) => sum + d.budgetINR, 0) / pool.length;
  const permitStates = states.filter((st) => PERMIT_DATA[st].indian.tone === 'required');
  const permitExtra = permitStates.length * 250 * travelers;

  const groupScale = travelers === 1 ? 1.15 : travelers <= 3 ? 0.96 : 0.88;
  const totalBudget = Math.round((avgDailyBase * tierCfg.multiplier * days * travelers * groupScale + permitExtra) / 100) * 100;
  const stayCost = Math.round((totalBudget * tierCfg.stayShare) / 50) * 50;
  const transportCost = Math.round((totalBudget * tierCfg.transportShare) / 50) * 50;
  const foodCost = Math.max(0, totalBudget - stayCost - transportCost);

  const stayPct = Math.round((stayCost / totalBudget) * 100);
  const transportPct = Math.round((transportCost / totalBudget) * 100);
  const foodPct = 100 - stayPct - transportPct;

  const titleStates = states.length <= 2 ? states.join(' & ') : `${states.slice(0, 2).join(', ')} + ${states.length - 2} More`;
  document.getElementById('plan-title').textContent = `${titleStates} Expedition`;
  document.getElementById('plan-meta').textContent = `${days} Days · ${travelers} Traveler${travelers > 1 ? 's' : ''} · ${tier} Tier`;
  document.getElementById('plan-gateway').textContent = STATE_GATEWAYS[states[0]] || 'Guwahati (GAU)';

  document.getElementById('budget-total').textContent = formatINR(totalBudget);
  document.getElementById('budget-per-person').textContent = formatINR(totalBudget / travelers);
  document.getElementById('budget-permit-note').textContent = permitStates.length
    ? `Includes e-ILP estimate (${permitStates.join(', ')})`
    : 'No state entry ILP required';

  document.getElementById('cost-stay').textContent = formatINR(stayCost);
  document.getElementById('cost-transport').textContent = formatINR(transportCost);
  document.getElementById('cost-food').textContent = formatINR(foodCost);
  document.getElementById('pct-stay').textContent = `(${stayPct}%)`;
  document.getElementById('pct-transport').textContent = `(${transportPct}%)`;
  document.getElementById('pct-food').textContent = `(${foodPct}%)`;
  document.getElementById('bar-stay').style.width = `${stayPct}%`;
  document.getElementById('bar-transport').style.width = `${transportPct}%`;
  document.getElementById('bar-food').style.width = `${foodPct}%`;

  const dayPlans = [];
  for (let i = 0; i < days; i++) {
    const dest = pool[Math.min(Math.floor((i * pool.length) / days), pool.length - 1)];
    const prevDest = i > 0 ? pool[Math.min(Math.floor(((i - 1) * pool.length) / days), pool.length - 1)] : null;
    const isFirst = i === 0;
    const isLast = i === days - 1;

    let headline = '';
    let detail = '';

    if (isFirst) {
      headline = `Arrival & Transfer to ${dest.name}`;
      detail = `Land via ${dest.airport.split('/')[0].trim()}. Check into your ${tier.toLowerCase()} stay in ${dest.state}. Evening orientation: ${dest.highlights[2]}. Dinner recommendation: ${dest.food}.`;
    } else if (isLast) {
      headline = `Sunrise Walk in ${dest.name} & Departure`;
      detail = `Early morning wrap-up around ${dest.name} (${dest.highlights[0]}). Pick up regional spices, handloom crafts, and depart comfortably toward ${STATE_GATEWAYS[dest.state]}.`;
    } else if (prevDest && prevDest.id !== dest.id) {
      headline = `Scenic Road Transfer: ${prevDest.name} → ${dest.name}`;
      detail = `Drive through ${dest.state}’s mountain and river corridors. Afternoon exploration: ${dest.highlights[0]}. Sample ${dest.food} before sunset.`;
    } else {
      const highlight = dest.highlights[i % dest.highlights.length];
      headline = `Full Day Exploring ${dest.name}`;
      detail = `Start at 7:00 AM for ${highlight}. Afternoon slow-travel break: ${dest.highlights[(i + 1) % dest.highlights.length]}. Evening tasting of ${dest.food}.`;
    }

    dayPlans.push({
      day: i + 1,
      state: dest.state,
      headline,
      detail,
      permit: dest.permit
    });
  }

  const perDestCount = pool.length === 1 ? 3 : pool.length === 2 ? 2 : 1;
  const parsedHighlights = [];
  pool.forEach((dest) => {
    dest.highlights.slice(0, perDestCount).forEach((activity) => {
      parsedHighlights.push({
        activity,
        destination: dest.name,
        state: dest.state
      });
    });
  });
  if (pool.length === 3 && pool[0].highlights[1]) {
    parsedHighlights.push({
      activity: pool[0].highlights[1],
      destination: pool[0].name,
      state: pool[0].state
    });
  }
  const summaryHighlights = parsedHighlights.slice(0, 6);

  const highlightsMetaEl = document.getElementById('trip-highlights-meta');
  const highlightsListEl = document.getElementById('trip-highlights-list');
  if (highlightsMetaEl && highlightsListEl) {
    highlightsMetaEl.textContent = `${pool.length} destination${pool.length === 1 ? '' : 's'} · ${summaryHighlights.length} key activities`;
    highlightsListEl.innerHTML = summaryHighlights
      .map(
        (h, idx) => `
        <li class="flex items-start gap-2.5 text-xs sm:text-sm">
          <span class="font-semibold text-terracotta-dark dark:text-terracotta-light tabular-nums shrink-0 mt-0.5">0${idx + 1}.</span>
          <div class="min-w-0">
            <p class="text-pine dark:text-[#F4F1EA] leading-snug">${h.activity}</p>
            <p class="mt-0.5 text-[11px] text-pine/60 dark:text-[#A6B5AE]">${h.destination} · ${h.state}</p>
          </div>
        </li>
      `
      )
      .join('');
  }

  document.getElementById('itinerary-days').innerHTML = dayPlans
    .map(
      (item) => `
      <li class="p-4 rounded-lg border border-pine/10 dark:border-white/10 bg-mist/55 dark:bg-pine-deep">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xs font-semibold uppercase tracking-wider text-terracotta-dark dark:text-terracotta-light tabular-nums">
            Day 0${item.day} · ${item.state}
          </span>
          ${item.permit === 'ILP' ? '<span class="text-[11px] font-medium text-pine/65 dark:text-[#A6B5AE]">Carry printed e-ILP</span>' : ''}
        </div>
        <h5 class="mt-1 font-serif text-base sm:text-lg font-semibold text-pine dark:text-[#F4F1EA]">${item.headline}</h5>
        <p class="mt-1.5 text-xs sm:text-sm text-pine/75 dark:text-[#CBD5D0] leading-relaxed">${item.detail}</p>
      </li>
    `
    )
    .join('');

  plannerState.lastGeneratedText = [
    `TravelMateNE Itinerary: ${titleStates} Expedition`,
    `${days} Days | ${travelers} Traveler(s) | ${tier} Tier | Gateway: ${STATE_GATEWAYS[states[0]]}`,
    '',
    'Trip Highlights:',
    ...summaryHighlights.map((h) => `• ${h.activity} (${h.destination}, ${h.state})`),
    '',
    `Total Budget: ${formatINR(totalBudget)} (${formatINR(totalBudget / travelers)}/person)`,
    `- Stay: ${formatINR(stayCost)} (${stayPct}%)`,
    `- Transport: ${formatINR(transportCost)} (${transportPct}%)`,
    `- Food, Entries & Permits: ${formatINR(foodCost)} (${foodPct}%)`,
    '',
    ...dayPlans.map((p) => `Day ${p.day} (${p.state}): ${p.headline}\n${p.detail}`)
  ].join('\n');

  refreshIcons();

  if (notify) {
    showToast(`Generated ${days}-day ${titleStates} itinerary`);
  }
}

/**
 * Adds a state into the active planner selection (up to 4 states) and refreshes the itinerary.
 * @param {string} stateName - North East state name to include in the route.
 * @returns {void}
 */
export function addStateToPlanner(stateName) {
  if (!plannerState.states.includes(stateName)) {
    if (plannerState.states.length >= 4) {
      plannerState.states.shift();
    }
    plannerState.states.push(stateName);
  }
  renderPlannerControls();
  generateItinerary(false);
}

/**
 * Replaces the planner's selected states with a curated list (up to 4) and refreshes the itinerary.
 * @param {string[]} stateList - Array of state names to load into the planner.
 * @returns {void}
 */
export function loadStatesIntoPlanner(stateList) {
  if (!Array.isArray(stateList) || stateList.length === 0) return;
  plannerState.states = stateList.slice(0, 4);
  renderPlannerControls();
  generateItinerary(false);
}

/**
 * Initializes all Trip & Budget Architect event listeners and renders the initial itinerary.
 * @returns {void}
 */
export function initTripArchitect() {
  renderPlannerControls();
  generateItinerary(false);

  const stateSelector = document.getElementById('planner-state-selector');
  if (stateSelector) {
    stateSelector.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-plan-state]');
      if (!btn) return;
      const st = btn.dataset.planState;
      const idx = plannerState.states.indexOf(st);
      if (idx >= 0) {
        if (plannerState.states.length === 1) {
          showToast('Keep at least one state selected');
          return;
        }
        plannerState.states.splice(idx, 1);
      } else {
        if (plannerState.states.length >= 4) {
          showToast('Select up to 4 states for a realistic 2–7 day route');
          return;
        }
        plannerState.states.push(st);
      }
      renderPlannerControls();
    });
  }

  const slider = document.getElementById('duration-slider');
  slider.addEventListener('input', () => {
    plannerState.days = Number(slider.value);
    document.getElementById('duration-display').textContent = `${plannerState.days} Days`;
  });

  document.getElementById('travelers-minus').addEventListener('click', () => {
    if (plannerState.travelers > 1) {
      plannerState.travelers -= 1;
      renderPlannerControls();
    }
  });

  document.getElementById('travelers-plus').addEventListener('click', () => {
    if (plannerState.travelers < 8) {
      plannerState.travelers += 1;
      renderPlannerControls();
    }
  });

  document.querySelectorAll('.tier-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      plannerState.tier = btn.dataset.tier;
      renderPlannerControls();
    });
  });

  document.querySelectorAll('.circuit-preset').forEach((btn) => {
    btn.addEventListener('click', () => {
      plannerState.states = btn.dataset.circuit.split(',');
      plannerState.days = Number(btn.dataset.days);
      renderPlannerControls();
      generateItinerary(true);
    });
  });

  document.getElementById('generate-itinerary-btn').addEventListener('click', () => {
    generateItinerary(true);
  });

  document.getElementById('copy-plan-btn').addEventListener('click', async () => {
    const text = plannerState.lastGeneratedText;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      showToast('Itinerary & INR budget copied to clipboard');
    } catch {
      showToast('Plan ready — select and copy text if clipboard is restricted');
    }
  });
}
