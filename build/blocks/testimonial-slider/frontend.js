/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend/slider-controller.js":
/*!*******************************************!*\
  !*** ./src/frontend/slider-controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderController: () => (/* binding */ SliderController)
/* harmony export */ });
/**
 * Slider Controller
 *
 * Handles slider functionality without external dependencies
 */

class SliderController {
  constructor() {
    this.instances = [];
  }
  init(element) {
    const instance = new SliderInstance(element);
    this.instances.push(instance);
    return instance;
  }
  destroy(element) {
    const index = this.instances.findIndex(i => i.element === element);
    if (index > -1) {
      this.instances[index].destroy();
      this.instances.splice(index, 1);
    }
  }
}
class SliderInstance {
  constructor(element) {
    this.element = element;
    this.wrapper = element.querySelector('.maw-slider__wrapper, .maw-testimonial-slider__wrapper');
    this.slides = null;
    this.currentIndex = 0;
    this.autoplayTimer = null;
    this.isAnimating = false;
    this.config = {
      autoplay: element.getAttribute('data-autoplay') === 'true',
      autoplaySpeed: parseInt(element.getAttribute('data-autoplay-speed')) || 3000,
      loop: element.getAttribute('data-loop') === 'true',
      speed: parseInt(element.getAttribute('data-speed')) || 500,
      slidesPerView: parseInt(element.getAttribute('data-slides-per-view')) || 1,
      slidesPerViewTablet: parseInt(element.getAttribute('data-slides-per-view-tablet')) || 1,
      slidesPerViewMobile: parseInt(element.getAttribute('data-slides-per-view-mobile')) || 1,
      spaceBetween: parseInt(element.getAttribute('data-space-between')) || 20,
      effect: element.getAttribute('data-effect') || 'slide'
    };
    this.init();
  }
  init() {
    if (!this.wrapper) {
      console.warn('MAW Blocks: Slider wrapper not found');
      return;
    }
    this.slides = Array.from(this.wrapper.children);
    if (this.slides.length === 0) {
      return;
    }
    this.setupSlides();
    this.setupNavigation();
    this.setupDots();
    this.updateSlidePositions();
    if (this.config.autoplay) {
      this.startAutoplay();
    }
    this.setupEventListeners();
  }
  setupSlides() {
    this.slides.forEach(slide => {
      slide.classList.add('maw-slider__slide');
    });
    if (this.config.effect === 'fade') {
      this.slides[0].classList.add('is-active');
    }
  }
  setupNavigation() {
    const prevButton = this.element.querySelector('.maw-slider__arrow--prev, .maw-testimonial-slider__arrow--prev');
    const nextButton = this.element.querySelector('.maw-slider__arrow--next, .maw-testimonial-slider__arrow--next');
    if (prevButton) {
      prevButton.addEventListener('click', () => this.prev());
    }
    if (nextButton) {
      nextButton.addEventListener('click', () => this.next());
    }
    this.updateNavigationState();
  }
  setupDots() {
    const dotsContainer = this.element.querySelector('.maw-slider__dots, .maw-testimonial-slider__dots');
    if (!dotsContainer) {
      return;
    }
    dotsContainer.innerHTML = '';
    this.slides.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = index === 0 ? 'maw-slider__dot maw-slider__dot--active' : 'maw-slider__dot';
      dot.addEventListener('click', () => this.goTo(index));
      dotsContainer.appendChild(dot);
    });
  }
  updateSlidePositions() {
    if (this.config.effect === 'fade') {
      return;
    }
    const slideWidth = 100 / this.config.slidesPerView;
    const offset = -(this.currentIndex * slideWidth);
    this.wrapper.style.transform = `translateX(${offset}%)`;
  }
  updateDots() {
    const dots = this.element.querySelectorAll('.maw-slider__dot, .maw-testimonial-slider__dot');
    dots.forEach((dot, index) => {
      if (index === this.currentIndex) {
        dot.classList.add('maw-slider__dot--active');
      } else {
        dot.classList.remove('maw-slider__dot--active');
      }
    });
  }
  updateNavigationState() {
    const prevButton = this.element.querySelector('.maw-slider__arrow--prev, .maw-testimonial-slider__arrow--prev');
    const nextButton = this.element.querySelector('.maw-slider__arrow--next, .maw-testimonial-slider__arrow--next');
    if (!this.config.loop) {
      if (prevButton) {
        prevButton.disabled = this.currentIndex === 0;
      }
      if (nextButton) {
        nextButton.disabled = this.currentIndex >= this.slides.length - this.config.slidesPerView;
      }
    }
  }
  next() {
    if (this.isAnimating) return;
    const maxIndex = this.slides.length - this.config.slidesPerView;
    if (this.currentIndex < maxIndex) {
      this.goTo(this.currentIndex + 1);
    } else if (this.config.loop) {
      this.goTo(0);
    }
  }
  prev() {
    if (this.isAnimating) return;
    if (this.currentIndex > 0) {
      this.goTo(this.currentIndex - 1);
    } else if (this.config.loop) {
      this.goTo(this.slides.length - this.config.slidesPerView);
    }
  }
  goTo(index) {
    if (this.isAnimating || index === this.currentIndex) return;
    this.isAnimating = true;
    const previousIndex = this.currentIndex;
    this.currentIndex = Math.max(0, Math.min(index, this.slides.length - 1));
    if (this.config.effect === 'fade') {
      this.slides[previousIndex].classList.remove('is-active');
      this.slides[this.currentIndex].classList.add('is-active');
    } else {
      this.updateSlidePositions();
    }
    this.updateDots();
    this.updateNavigationState();
    setTimeout(() => {
      this.isAnimating = false;
    }, this.config.speed);
    if (this.config.autoplay) {
      this.resetAutoplay();
    }
  }
  startAutoplay() {
    this.autoplayTimer = setInterval(() => {
      this.next();
    }, this.config.autoplaySpeed);
  }
  stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }
  resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
  setupEventListeners() {
    this.element.addEventListener('mouseenter', () => {
      if (this.config.autoplay) {
        this.stopAutoplay();
      }
    });
    this.element.addEventListener('mouseleave', () => {
      if (this.config.autoplay) {
        this.startAutoplay();
      }
    });
    window.addEventListener('resize', () => {
      this.updateSlidePositions();
    });
  }
  destroy() {
    this.stopAutoplay();
    this.element = null;
    this.wrapper = null;
    this.slides = null;
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************************************!*\
  !*** ./blocks/testimonial-slider/frontend.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_frontend_slider_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/frontend/slider-controller */ "./src/frontend/slider-controller.js");
/**
 * Testimonial Slider Block Frontend
 * Updated for build tracking
 */


class MAWTestimonialSliderBlock {
  constructor() {
    console.log('MAW Testimonial Slider: Frontend script loaded');
    this.sliderController = null;
    this.init();
  }
  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.onReady());
    } else {
      this.onReady();
    }
  }
  onReady() {
    console.log('MAW Testimonial Slider: DOM ready, initializing...');
    this.sliderController = new _src_frontend_slider_controller__WEBPACK_IMPORTED_MODULE_0__.SliderController();
    const sliders = document.querySelectorAll('.maw-testimonial-slider');
    console.log('MAW Testimonial Slider: Found ' + sliders.length + ' sliders');
    sliders.forEach(slider => {
      console.log('MAW Testimonial Slider: Initializing slider', slider);
      this.sliderController.init(slider);
    });
  }
}
new MAWTestimonialSliderBlock();
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map