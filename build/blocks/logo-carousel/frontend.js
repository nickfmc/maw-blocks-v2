/******/ (() => { // webpackBootstrap
/*!******************************************!*\
  !*** ./blocks/logo-carousel/frontend.js ***!
  \******************************************/
/**
 * Logo Carousel Frontend Controller
 * Calculates precise widths and creates seamless infinite loop
 */

class LogoCarouselController {
  constructor(element) {
    this.element = element;
    this.container = element.querySelector('.maw-logo-carousel__container');
    this.wrapper = element.querySelector('.maw-logo-carousel__wrapper');
    this.track = element.querySelector('.maw-logo-carousel__track');
    this.originalItems = Array.from(element.querySelectorAll('.maw-logo-carousel__item'));
    if (!this.track || this.originalItems.length === 0) {
      return;
    }
    this.config = {
      speed: parseFloat(element.dataset.speed) || 30,
      direction: element.dataset.direction || 'left',
      pauseOnHover: element.dataset.pauseOnHover === 'true',
      logosInView: parseInt(element.dataset.logosInView) || 5,
      logosInViewTablet: parseInt(element.dataset.logosInViewTablet) || 3,
      logosInViewMobile: parseInt(element.dataset.logosInViewMobile) || 2,
      logoHeight: parseInt(element.dataset.logoHeight) || 60,
      spacing: parseInt(element.dataset.spacing) || 40
    };
    this.init();
  }
  init() {
    this.setupStyles();
    this.calculateAndDuplicate();
    window.addEventListener('resize', this.debounce(() => {
      this.calculateAndDuplicate();
    }, 250));
  }
  setupStyles() {
    this.element.style.setProperty('--maw-carousel-speed', `${this.config.speed}s`);
    this.element.style.setProperty('--maw-carousel-logo-height', `${this.config.logoHeight}px`);
    this.element.style.setProperty('--maw-carousel-spacing', `${this.config.spacing}px`);
  }
  calculateAndDuplicate() {
    const currentWidth = this.wrapper.offsetWidth;
    this.track.innerHTML = '';
    this.originalItems.forEach(item => {
      this.track.appendChild(item.cloneNode(true));
    });
    this.track.offsetHeight;
    const singleSetWidth = this.track.scrollWidth;
    const totalCopiesNeeded = Math.ceil(currentWidth * 3 / singleSetWidth);
    for (let i = 0; i < totalCopiesNeeded; i++) {
      this.originalItems.forEach(item => {
        this.track.appendChild(item.cloneNode(true));
      });
    }
  }
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.maw-logo-carousel');
  carousels.forEach(carousel => {
    new LogoCarouselController(carousel);
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map