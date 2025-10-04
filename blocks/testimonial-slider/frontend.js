/**
 * Testimonial Slider Block Frontend
 * Updated for build tracking
 */

import { SliderController } from '../../src/frontend/slider-controller';

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
        this.sliderController = new SliderController();
        const sliders = document.querySelectorAll('.maw-testimonial-slider');
        console.log('MAW Testimonial Slider: Found ' + sliders.length + ' sliders');
        sliders.forEach(slider => {
            console.log('MAW Testimonial Slider: Initializing slider', slider);
            this.sliderController.init(slider);
        });
    }
}

new MAWTestimonialSliderBlock();
