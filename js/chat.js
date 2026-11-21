import { DESTINATIONS, formatINR, showToast } from './data.js';

let chatOpen = false;

/**
 * Generates a keyword-matched North East India travel reply for the MateAI assistant.
 * @param {string} query - User question or starter chip text.
 * @returns {string} Structured assistant response.
 */
export function getMateAIReply(query) {
  const q = query.toLowerCase().trim();

  if (q.includes('meghalaya') || (q.includes('5-day') && (q.includes('route') || q.includes('shillong')))) {
    return 'Ideal 5-Day Meghalaya Loop (from Guwahati Airport):\n• Day 1: Guwahati → Umiam Lake → Shillong (Police Bazar & Ward’s Lake).\n• Day 2: Shillong → Laitlum Canyons → Sohra (Nohkalikai Falls & Mawsmai Cave).\n• Day 3: Nongriat Double-Decker Living Root Bridge trek (start 7 AM).\n• Day 4: Sohra → Mawlynnong Village → Dawki & Shnongpdeng riverside camp.\n• Day 5: Morning Umngot boating → Krang Suri Falls → return to Guwahati.\nNo ILP required; best clarity in Dawki is Nov–Mar.';
  }

  if (q.includes('tawang') || (q.includes('ilp') && q.includes('arunachal'))) {
    return 'Tawang Permit Rules:\n• Indian Citizens: Online e-ILP via eilp.arunachal.gov.in (₹100–₹400, 1–24 hrs). Mention Bhalukpong checkpost, West Kameng & Tawang districts.\n• Foreign Nationals: Protected Area Permit (PAP) needed 7–14 days in advance via an approved local tour operator (group of 2+).\n• Tip: Break the drive from Guwahati at Dirang (Day 1) to acclimatize before crossing 13,700 ft Sela Pass.';
  }

  if (q.includes('kaziranga') || q.includes('rhino') || q.includes('safari')) {
    return 'Best Time for Kaziranga National Park:\n• Open window: November 1 to April 30 (closed May–Oct due to Brahmaputra monsoon floods).\n• Peak sightings: Mid-January to March after controlled grass burning improves visibility.\n• Safari tip: Pair an early 5:30 AM Elephant Safari in Bagori/Kohora with an afternoon Jeep Safari in Western or Central range. Nearest airport: Jorhat (96 km) or Guwahati (215 km).';
  }

  if (q.includes('food') || q.includes('eat') || q.includes('dish') || q.includes('cuisine')) {
    return 'Must-Try North East India Dishes:\n• Assam: Masor Tenga (sour fish curry), Khar & Duck with Ash Gourd.\n• Meghalaya: Jadoh (red rice cooked in pork/chicken stock) & Dohneiiong (black sesame gravy).\n• Nagaland: Smoked Pork with Akhuni (fermented soybean) & Bamboo Shoot.\n• Manipur: Eromba & Chak-hao (black rice kheer).\n• Sikkim & Tawang: Phagshapa, Thukpa, Zan & freshly steamed Momos.\n• Mizoram & Tripura: Mizo Bai stew and Tripuri Mui Borok.';
  }

  if (q.includes('permit') || q.includes('ilp') || q.includes('pap')) {
    return 'Quick Permit Summary (Indian Citizens):\n• ILP Required: Arunachal Pradesh, Nagaland, Manipur, Mizoram.\n• No State ILP: Assam, Meghalaya, Tripura.\n• Sikkim: Open for Gangtok/Pelling; Protected Area Permit required only for Tsomgo Lake, Nathula Pass & North Sikkim (apply 24 hrs prior via Gangtok agent with Voter ID/Passport—not Aadhaar).';
  }

  if (q.includes('budget') || q.includes('cost') || q.includes('inr') || q.includes('cheap')) {
    return 'Typical Daily Per-Person Budgets in North East India:\n• Backpacker: ₹2,000–₹2,800/day (homestays, shared Sumos, local meals).\n• Comfort: ₹3,200–₹4,800/day (boutique lodges, private cab split between 2–4).\n• Boutique: ₹6,000–₹8,500/day (tea bungalows, Innova SUV, private guides).\nUse the Trip & Budget Architect above to get an exact INR breakdown.';
  }

  if (q.includes('airport') || q.includes('flight') || q.includes('reach')) {
    return 'Primary Regional Gateways:\n• Guwahati (GAU): Main hub for Assam, Meghalaya & Western Arunachal.\n• Bagdogra (IXB) / Pakyong (PYG): Best for Gangtok & Sikkim.\n• Dimapur (DMU): Nagaland & Dzukou Valley.\n• Imphal (IMF): Manipur & Loktak Lake.\n• Lengpui (AJL): Aizawl, Mizoram.\n• Agartala (IXA): Tripura & Unakoti.';
  }

  const matchedDest = DESTINATIONS.find(
    (d) => q.includes(d.id) || q.includes(d.name.toLowerCase()) || q.includes(d.state.toLowerCase())
  );
  if (matchedDest) {
    return `${matchedDest.name} (${matchedDest.state}):\n• Best Season: ${matchedDest.season} (${matchedDest.days})\n• Est. Budget: ${formatINR(matchedDest.budgetINR)}/day | Permit: ${matchedDest.permit === 'ILP' ? 'ILP Required' : 'No state entry ILP'}\n• Top Highlight: ${matchedDest.highlights[0]}\n• Try Local Food: ${matchedDest.food}\n• Nearest Airport: ${matchedDest.airport}`;
  }

  return 'I can help you plan across all 8 North East states! Ask me about a specific place (e.g. "Ziro", "Dzukou", "Loktak", "Gangtok", "Majuli", "Unakoti", "Aizawl"), ILP/PAP permits, airports, best seasons, INR budgets, or tap one of the starter questions below.';
}

function appendChatMessage(role, text) {
  const container = document.getElementById('mateai-messages');
  if (!container) return;
  const wrap = document.createElement('div');
  wrap.className = role === 'user' ? 'flex justify-end' : 'flex justify-start';

  const bubble = document.createElement('div');
  bubble.className =
    role === 'user'
      ? 'max-w-[85%] rounded-xl rounded-br-sm px-3.5 py-2.5 bg-pine text-mist dark:bg-terracotta-dark dark:text-white text-xs sm:text-sm leading-relaxed whitespace-pre-line'
      : 'max-w-[90%] rounded-xl rounded-bl-sm px-3.5 py-2.5 bg-white dark:bg-pine-card border border-pine/10 dark:border-white/10 text-pine dark:text-[#F4F1EA] text-xs sm:text-sm leading-relaxed whitespace-pre-line';
  bubble.textContent = text;

  wrap.appendChild(bubble);
  container.appendChild(wrap);
  container.scrollTop = container.scrollHeight;
}

/**
 * Opens, closes, or toggles the floating MateAI assistant panel.
 * @param {boolean} [forceState] - Optional explicit open (true) or closed (false) state.
 * @returns {void}
 */
export function toggleChat(forceState) {
  const panel = document.getElementById('mateai-panel');
  const toggleBtn = document.getElementById('mateai-toggle');
  if (!panel || !toggleBtn) return;

  chatOpen = typeof forceState === 'boolean' ? forceState : !chatOpen;
  panel.classList.toggle('hidden', !chatOpen);
  panel.classList.toggle('flex', chatOpen);
  toggleBtn.setAttribute('aria-expanded', String(chatOpen));

  if (chatOpen) {
    setTimeout(() => document.getElementById('mateai-input')?.focus(), 80);
  }
}

/**
 * Returns whether the MateAI assistant panel is currently open.
 * @returns {boolean} Current visibility state of the chat widget.
 */
export function isChatOpen() {
  return chatOpen;
}

/**
 * Clears the MateAI message feed and restores the welcome greeting.
 * @returns {void}
 */
export function resetChat() {
  const container = document.getElementById('mateai-messages');
  if (!container) return;
  container.innerHTML = '';
  appendChatMessage(
    'bot',
    'Namaskar! I am MateAI, your North East India travel desk. Tap a quick question below or ask about any of the 8 states, permits, routes, or local food.'
  );
}

/**
 * Initializes MateAI toggle buttons, starter chips, and form submission handlers.
 * @returns {void}
 */
export function initMateAI() {
  resetChat();

  document.getElementById('mateai-toggle').addEventListener('click', () => toggleChat());
  document.getElementById('mateai-close').addEventListener('click', () => toggleChat(false));
  document.getElementById('mateai-clear').addEventListener('click', () => {
    resetChat();
    showToast('MateAI conversation cleared');
  });

  const handlePrompt = (text) => {
    const clean = text.trim();
    if (!clean) return;
    appendChatMessage('user', clean);
    const reply = getMateAIReply(clean);
    setTimeout(() => appendChatMessage('bot', reply), 140);
  };

  document.getElementById('mateai-chips').addEventListener('click', (e) => {
    const chip = e.target.closest('.mateai-chip');
    if (!chip) return;
    handlePrompt(chip.textContent);
  });

  const form = document.getElementById('mateai-form');
  const input = document.getElementById('mateai-input');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input.value.trim()) return;
    handlePrompt(input.value);
    input.value = '';
  });
}
