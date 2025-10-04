/**
 * Viewport Observer
 *
 * Detects when elements enter/exit viewport
 */

export class ViewportObserver {
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

        this.observer = new IntersectionObserver((entries) => {
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

