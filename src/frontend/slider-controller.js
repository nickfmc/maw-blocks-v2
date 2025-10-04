/**
 * Slider Controller
 *
 * Handles slider functionality without external dependencies
 */

export class SliderController {
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

