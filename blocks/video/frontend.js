/**
 * Video Block Frontend
 * Updated for build tracking
 */

import { ViewportObserver } from '../../src/frontend/viewport-observer';

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
        this.viewportObserver = new ViewportObserver();
        this.initVideos();
    }

    initVideos() {
        const videos = document.querySelectorAll('.maw-video[data-autoplay="true"] video');

        videos.forEach(video => {
            const container = video.closest('.maw-video');
            const playOnce = container.getAttribute('data-play-once') === 'true';
            let hasPlayed = false;

            this.viewportObserver.observe(container, (isIntersecting) => {
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
