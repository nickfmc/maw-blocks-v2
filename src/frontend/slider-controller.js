/**
 * Slider Controller
 *
 * Handles slider functionality without external dependencies
 */

// Predefined arrow icons
const ARROW_ICONS = {
    chevron: {
        left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
        right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>'
    },
    arrow: {
        left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
        right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
    },
    angle: {
        left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
        right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>'
    }
};

// Default arrows (fallback)
const DEFAULT_ARROWS = ARROW_ICONS.arrow;

/**
 * Get arrows based on icon type
 */
const getArrowsByType = (arrowIcon = 'arrow') => {
    // If arrowIcon is 'custom', use global settings
    if (arrowIcon === 'custom') {
        if (typeof window.mawBlocksArrows !== 'undefined') {
            return window.mawBlocksArrows;
        }
    }
    
    // Use predefined icon or fallback to default
    return ARROW_ICONS[arrowIcon] || DEFAULT_ARROWS;
};

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
            endBehavior: element.getAttribute('data-end-behavior') || 'loop',
            speed: parseInt(element.getAttribute('data-speed')) || 500,
            slidesPerView: parseInt(element.getAttribute('data-slides-per-view')) || 1,
            slidesPerViewTablet: parseInt(element.getAttribute('data-slides-per-view-tablet')) || 1,
            slidesPerViewMobile: parseInt(element.getAttribute('data-slides-per-view-mobile')) || 1,
            spaceBetween: parseInt(element.getAttribute('data-space-between')) || 20,
            effect: element.getAttribute('data-effect') || 'slide',
            slideWidthMode: element.getAttribute('data-slide-width-mode') || 'auto',
            slideWidth: parseInt(element.getAttribute('data-slide-width')) || 300
        };

        this.currentSlidesPerView = this.config.slidesPerView;
        this.breakpoints = {
            mobile: 768,
            tablet: 1024
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

        // Set up responsive breakpoints and CSS custom properties
        this.updateResponsiveSettings();
        this.applyCSSProperties();
    }

    setupNavigation() {
        const prevButton = this.element.querySelector('.maw-slider__arrow--prev, .maw-testimonial-slider__arrow--prev');
        const nextButton = this.element.querySelector('.maw-slider__arrow--next, .maw-testimonial-slider__arrow--next');

        if (prevButton) {
            prevButton.addEventListener('click', () => this.prev());
            // Only update arrow HTML if it's not already using custom arrows from save component
            const arrowIcon = this.element.getAttribute('data-arrow-icon') || 'arrow';
            if (arrowIcon !== 'custom') {
                this.updateArrowHTML(prevButton, 'left');
            }
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => this.next());
            // Only update arrow HTML if it's not already using custom arrows from save component
            const arrowIcon = this.element.getAttribute('data-arrow-icon') || 'arrow';
            if (arrowIcon !== 'custom') {
                this.updateArrowHTML(nextButton, 'right');
            }
        }

        this.updateNavigationState();
    }

    updateArrowHTML(button, direction) {
        const arrowIcon = this.element.getAttribute('data-arrow-icon') || 'arrow';
        const arrows = getArrowsByType(arrowIcon);
        const arrowSpan = button.querySelector('span[aria-hidden="true"]');
        
        if (arrowSpan && arrows[direction]) {
            arrowSpan.innerHTML = arrows[direction];
        }
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

        if (this.config.slideWidthMode === 'fixed') {
            // For fixed width mode, calculate offset in pixels
            const slideWidth = this.config.slideWidth;
            const gap = this.config.spaceBetween;
            const offset = -(this.currentIndex * (slideWidth + gap));
            this.wrapper.style.transform = `translateX(${offset}px)`;
        } else {
            // For auto mode, use pixel-based calculation for accuracy
            const firstSlide = this.slides[0];
            if (firstSlide) {
                const slideWidth = firstSlide.offsetWidth;
                const gap = this.config.spaceBetween;
                const offset = -(this.currentIndex * (slideWidth + gap));
                this.wrapper.style.transform = `translateX(${offset}px)`;
            }
        }
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

        if (prevButton && nextButton) {
            const maxIndex = this.slides.length - this.currentSlidesPerView;

            if (this.config.endBehavior === 'disable') {
                // Disable arrows at ends when endBehavior is 'disable'
                prevButton.disabled = this.currentIndex === 0;
                nextButton.disabled = this.currentIndex >= maxIndex;
            } else {
                // Enable all arrows when looping
                prevButton.disabled = false;
                nextButton.disabled = false;
            }
        }
    }

    next() {
        if (this.isAnimating) return;

        const maxIndex = this.slides.length - this.currentSlidesPerView;

        if (this.currentIndex < maxIndex) {
            this.goTo(this.currentIndex + 1);
        } else if (this.config.endBehavior === 'loop' && this.config.loop) {
            this.goTo(0);
        }
        // If endBehavior is 'disable', do nothing when at the end
    }

    prev() {
        if (this.isAnimating) return;

        if (this.currentIndex > 0) {
            this.goTo(this.currentIndex - 1);
        } else if (this.config.endBehavior === 'loop' && this.config.loop) {
            this.goTo(this.slides.length - this.currentSlidesPerView);
        }
        // If endBehavior is 'disable', do nothing when at the beginning
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

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.updateResponsiveSettings();
                this.applyCSSProperties();
                this.updateSlidePositions();
                this.updateNavigationState();
            }, 150);
        });
    }

    updateResponsiveSettings() {
        const width = window.innerWidth;

        if (this.config.slideWidthMode === 'fixed') {
            // Calculate how many slides fit at the given width
            const containerWidth = this.wrapper.offsetWidth || this.element.offsetWidth;
            const slideWidth = this.config.slideWidth;
            const gap = this.config.spaceBetween;
            
            // Calculate: (containerWidth + gap) / (slideWidth + gap)
            this.currentSlidesPerView = Math.max(1, Math.floor((containerWidth + gap) / (slideWidth + gap)));
        } else {
            // Auto mode - use responsive breakpoints
            if (width < this.breakpoints.mobile) {
                this.currentSlidesPerView = this.config.slidesPerViewMobile;
            } else if (width < this.breakpoints.tablet) {
                this.currentSlidesPerView = this.config.slidesPerViewTablet;
            } else {
                this.currentSlidesPerView = this.config.slidesPerView;
            }
        }

        // Ensure current index doesn't exceed bounds
        const maxIndex = this.slides.length - this.currentSlidesPerView;
        if (this.currentIndex > maxIndex) {
            this.currentIndex = Math.max(0, maxIndex);
        }
    }

    applyCSSProperties() {
        // Apply CSS custom properties for dynamic styling
        this.element.style.setProperty('--maw-slides-per-view', this.currentSlidesPerView);
        this.element.style.setProperty('--maw-slide-gap', `${this.config.spaceBetween}px`);
        this.element.style.setProperty('--maw-transition-speed', `${this.config.speed}ms`);

        if (this.config.slideWidthMode === 'fixed') {
            this.element.style.setProperty('--maw-slide-width', `${this.config.slideWidth}px`);
        }
    }

    destroy() {
        this.stopAutoplay();
        this.element = null;
        this.wrapper = null;
        this.slides = null;
    }
}

