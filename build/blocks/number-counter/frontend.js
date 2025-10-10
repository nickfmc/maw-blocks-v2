/******/ (() => { // webpackBootstrap
/*!*******************************************!*\
  !*** ./blocks/number-counter/frontend.js ***!
  \*******************************************/
/**
 * Number Counter Block Frontend JavaScript
 *
 * Handles animated counting from 0 to target number with viewport detection
 */

class NumberCounter {
  constructor(element) {
    this.element = element;
    this.numberElement = element.querySelector('.maw-number-counter__number');
    this.target = parseFloat(this.numberElement.dataset.target);
    this.duration = parseInt(element.dataset.duration) || 2000;
    this.animateOnce = element.dataset.animateOnce === 'true';
    this.startDelay = parseInt(element.dataset.startDelay) || 0;
    this.hasAnimated = false;
    this.init();
  }
  init() {
    this.setupObserver();
  }
  setupObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.hasAnimated || !this.animateOnce) {
            setTimeout(() => {
              this.animate();
            }, this.startDelay);
          }
        }
      });
    }, options);
    this.observer.observe(this.element);
  }
  animate() {
    if (this.animateOnce) {
      this.hasAnimated = true;
    }
    const start = 0;
    const end = this.target;
    const startTime = performance.now();
    const step = currentTime => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (end - start) * easeOutQuart;

      // Format number to handle decimals
      const decimals = this.countDecimals(end);
      const formattedNumber = decimals > 0 ? current.toFixed(decimals) : Math.floor(current);
      this.numberElement.textContent = formattedNumber;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.numberElement.textContent = this.formatFinalNumber(end);
      }
    };
    requestAnimationFrame(step);
  }
  countDecimals(value) {
    if (Math.floor(value) === value) return 0;
    return value.toString().split('.')[1]?.length || 0;
  }
  formatFinalNumber(num) {
    const decimals = this.countDecimals(num);
    return decimals > 0 ? num.toFixed(decimals) : num.toString();
  }
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Initialize all number counters on page load
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.maw-number-counter');
  const counterInstances = [];
  counters.forEach(counter => {
    counterInstances.push(new NumberCounter(counter));
  });

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    counterInstances.forEach(instance => instance.destroy());
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map