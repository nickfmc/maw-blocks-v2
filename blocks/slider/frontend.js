/**
 * Slider Block Frontend
 * Updated for build tracking
 */

import { SliderController } from '../../src/frontend/slider-controller';

class MAWSliderBlock {
    constructor() {
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
        this.sliderController = new SliderController();
        const sliders = document.querySelectorAll('.maw-slider');
        sliders.forEach(slider => {
            this.sliderController.init(slider);
        });
    }
}

new MAWSliderBlock();
