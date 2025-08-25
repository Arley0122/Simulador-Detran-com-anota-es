
import { STORAGE_KEYS, setItem, getItem } from './storage.js';


export class ExamTimer {
  constructor(displayEl, totalSeconds = 45 * 60, { persist = false } = {}) {
    this.displayEl = displayEl;
    this.totalSeconds = totalSeconds;
    this.persist = persist;
    this.interval = null;

    if (this.persist) {
      const savedDeadline = getItem(STORAGE_KEYS.TIMER_END, null);
      if (savedDeadline) {
        this.deadline = new Date(parseInt(savedDeadline, 10));
      } else {
        this.deadline = new Date(Date.now() + totalSeconds * 1000);
        setItem(STORAGE_KEYS.TIMER_END, String(this.deadline.getTime()));
      }
    } else {
      
      this.deadline = new Date(Date.now() + totalSeconds * 1000);
    }

    this.tick(); 
    this.start();
  }

  remainingSeconds() {
    const now = new Date();
    const diff = Math.max(0, Math.floor((this.deadline - now) / 1000));
    return diff;
  }

  format(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  updateStyles(sec) {
    this.displayEl.classList.remove('warn', 'urgent');
    if (sec <= 5 * 60 && sec > 2 * 60) this.displayEl.classList.add('warn');
    if (sec <= 2 * 60) this.displayEl.classList.add('urgent');
  }

  tick() {
    const sec = this.remainingSeconds();
    this.displayEl.textContent = this.format(sec);
    this.updateStyles(sec);
    if (sec <= 0) {
      this.stop();
      this.onFinish?.();
    }
  }

  start() {
    if (this.interval) return;
    this.interval = setInterval(() => this.tick(), 1000);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  reset() {
    this.deadline = new Date(Date.now() + this.totalSeconds * 1000);
    if (this.persist) {
      setItem(STORAGE_KEYS.TIMER_END, String(this.deadline.getTime()));
    }
    this.tick();
  }
}