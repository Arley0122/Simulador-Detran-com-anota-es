
const STORAGE_KEYS = {
  QUIZ_STATE: 'detran_quiz_state_v1',
  TIMER_END: 'detran_timer_end_v1',
  NOTES_PREFIX: 'detran_notes_'
};

export function saveJSON(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadJSON(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.warn('Erro ao ler JSON do localStorage', e);
    return fallback;
  }
}

export function setItem(key, val) {
  localStorage.setItem(key, val);
}

export function getItem(key, fallback = null) {
  const v = localStorage.getItem(key);
  return v === null ? fallback : v;
}

export { STORAGE_KEYS };