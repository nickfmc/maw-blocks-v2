/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend/viewport-observer.js":
/*!*******************************************!*\
  !*** ./src/frontend/viewport-observer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewportObserver: () => (/* binding */ ViewportObserver)
/* harmony export */ });
/**
 * Viewport Observer
 *
 * Detects when elements enter/exit viewport
 */

class ViewportObserver {
  constructor(options = {}) {
    this.options = {
      threshold: options.threshold || 0.5,
      rootMargin: options.rootMargin || '0px'
    };
    this.observer = null;
    this.callbacks = new WeakMap();
    this.createObserver();
  }
  createObserver() {
    if (!('IntersectionObserver' in window)) {
      console.warn('MAW Blocks: IntersectionObserver not supported');
      return;
    }
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const callback = this.callbacks.get(entry.target);
        if (callback) {
          callback(entry.isIntersecting, entry);
        }
      });
    }, this.options);
  }
  observe(element, callback) {
    if (!this.observer) {
      return;
    }
    this.callbacks.set(element, callback);
    this.observer.observe(element);
  }
  unobserve(element) {
    if (!this.observer) {
      return;
    }
    this.callbacks.delete(element);
    this.observer.unobserve(element);
  }
  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
      this.callbacks = new WeakMap();
    }
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
/*!**********************************!*\
  !*** ./blocks/video/frontend.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_frontend_viewport_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/frontend/viewport-observer */ "./src/frontend/viewport-observer.js");
/**
 * Video Block Frontend
 * Updated for build tracking
 */


class MAWVideoBlock {
  constructor() {
    this.viewportObserver = null;
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
    this.viewportObserver = new _src_frontend_viewport_observer__WEBPACK_IMPORTED_MODULE_0__.ViewportObserver();
    this.initVideos();
  }
  initVideos() {
    const videos = document.querySelectorAll('.maw-video[data-autoplay="true"] video');
    videos.forEach(video => {
      const container = video.closest('.maw-video');
      const playOnce = container.getAttribute('data-play-once') === 'true';
      let hasPlayed = false;
      this.viewportObserver.observe(container, isIntersecting => {
        if (isIntersecting) {
          if (!playOnce || !hasPlayed) {
            video.play().catch(err => {
              console.warn('MAW Blocks: Video autoplay failed', err);
            });
            hasPlayed = true;
          }
        } else {
          video.pause();
        }
      });
    });
  }
}
new MAWVideoBlock();
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map