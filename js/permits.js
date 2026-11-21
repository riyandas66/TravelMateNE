import { ALL_STATES, PERMIT_DATA, refreshIcons } from './data.js';

const permitState = {
  state: 'Arunachal Pradesh',
  traveler: 'indian',
  checkedDocs: {}
};

/**
 * Updates the active state in the ILP/PAP permit checker and re-renders the panel.
 * @param {string} stateName - Name of the North East state to inspect.
 * @returns {void}
 */
export function setPermitState(stateName) {
  if (!PERMIT_DATA[stateName]) return;
  permitState.state = stateName;
  renderPermitChecker();
}

/**
 * Renders the permit status, processing details, and interactive 3-item document checklist.
 * @returns {void}
 */
export function renderPermitChecker() {
  const st = permitState.state;
  const trav = permitState.traveler;
  const info = PERMIT_DATA[st][trav];
  const key = `${st}_${trav}`;
  if (!permitState.checkedDocs[key]) {
    permitState.checkedDocs[key] = [false, false, false];
  }
  const checks = permitState.checkedDocs[key];

  document.getElementById('permit-state-select').value = st;

  document.querySelectorAll('.traveler-type-btn').forEach((btn) => {
    const active = btn.dataset.traveler === trav;
    btn.setAttribute('aria-checked', String(active));
    btn.className = `traveler-type-btn py-2.5 px-3 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
      active
        ? 'bg-white dark:bg-pine-card text-pine dark:text-white shadow-sm border border-pine/10 dark:border-white/15'
        : 'text-pine/70 dark:text-[#A6B5AE] hover:text-pine dark:hover:text-white'
    }`;
  });

  const quickWrap = document.getElementById('permit-quick-states');
  quickWrap.innerHTML = ALL_STATES.map((item) => {
    const active = item === st;
    return `<button type="button" data-quick-permit="${item}" class="px-2.5 py-1.5 rounded-md text-xs font-medium border transition-colors whitespace-nowrap ${
      active
        ? 'bg-pine text-mist border-pine dark:bg-terracotta-dark dark:border-terracotta-dark dark:text-white'
        : 'border-pine/15 dark:border-white/15 text-pine/80 dark:text-[#CBD5D0] hover:border-terracotta'
    }">${item}</button>`;
  }).join('');

  document.getElementById('permit-context-line').textContent = `${st} · ${trav === 'indian' ? 'Indian Citizen' : 'Foreign National'}`;
  document.getElementById('permit-status-heading').textContent = info.required;
  document.getElementById('permit-processing').textContent = info.processing;
  document.getElementById('permit-fee').textContent = info.fee;
  document.getElementById('permit-channel').textContent = info.channel;
  document.getElementById('permit-advisory').textContent = info.advisory;

  const indicator = document.getElementById('permit-status-indicator');
  if (info.tone === 'none') {
    indicator.className = 'inline-flex items-center gap-2 text-sm font-semibold text-pine dark:text-[#84C3AA]';
    indicator.innerHTML = '<i data-lucide="check-circle-2" class="w-4 h-4"></i><span>Open Entry</span>';
  } else if (info.tone === 'conditional') {
    indicator.className = 'inline-flex items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-300';
    indicator.innerHTML = '<i data-lucide="info" class="w-4 h-4"></i><span>Conditional / Zone Rules</span>';
  } else {
    indicator.className = 'inline-flex items-center gap-2 text-sm font-semibold text-terracotta-dark dark:text-terracotta-light';
    indicator.innerHTML = '<i data-lucide="shield-alert" class="w-4 h-4"></i><span>Advance Permit Needed</span>';
  }

  const doneCount = checks.filter(Boolean).length;
  document.getElementById('checklist-progress').textContent = `${doneCount} of ${info.docs.length} checked`;

  const listEl = document.getElementById('permit-checklist');
  listEl.innerHTML = info.docs
    .map(
      (doc, idx) => `
      <label class="flex items-start gap-3 p-3 rounded-lg border border-pine/10 dark:border-white/10 bg-mist/55 dark:bg-pine-deep cursor-pointer hover:border-terracotta/50 transition-colors">
        <input type="checkbox" data-doc-idx="${idx}" ${checks[idx] ? 'checked' : ''} class="mt-0.5 w-4 h-4 rounded accent-[#D96B27] cursor-pointer shrink-0" />
        <span class="text-xs sm:text-sm leading-snug ${checks[idx] ? 'line-through text-pine/50 dark:text-[#7E9289]' : 'text-pine dark:text-[#F4F1EA]'}">${doc}</span>
      </label>
    `
    )
    .join('');

  refreshIcons();
}

/**
 * Initializes event listeners for the ILP/PAP permit checker using delegated handlers.
 * @returns {void}
 */
export function initPermitChecker() {
  document.getElementById('permit-state-select').addEventListener('change', (e) => {
    permitState.state = e.target.value;
    renderPermitChecker();
  });

  document.querySelectorAll('.traveler-type-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      permitState.traveler = btn.dataset.traveler;
      renderPermitChecker();
    });
  });

  document.getElementById('permit-quick-states').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-quick-permit]');
    if (!btn) return;
    permitState.state = btn.dataset.quickPermit;
    renderPermitChecker();
  });

  document.getElementById('permit-checklist').addEventListener('change', (e) => {
    const cb = e.target.closest('input[type="checkbox"][data-doc-idx]');
    if (!cb) return;
    const key = `${permitState.state}_${permitState.traveler}`;
    const checks = permitState.checkedDocs[key] || [false, false, false];
    const idx = Number(cb.dataset.docIdx);
    checks[idx] = cb.checked;
    permitState.checkedDocs[key] = checks;

    const labelText = cb.nextElementSibling;
    if (labelText) {
      labelText.className = `text-xs sm:text-sm leading-snug ${cb.checked ? 'line-through text-pine/50 dark:text-[#7E9289]' : 'text-pine dark:text-[#F4F1EA]'}`;
    }
    const doneCount = checks.filter(Boolean).length;
    document.getElementById('checklist-progress').textContent = `${doneCount} of ${checks.length} checked`;
  });

  renderPermitChecker();
}
