/**
 * Video Modal Block Frontend
 *
 * Handles modal creation and video playback
 */

// Prevent duplicate initialization
if (window.MAWVideoModalInitialized) {
    // Already initialized, skip
} else {
    window.MAWVideoModalInitialized = true;

    class MAWVideoModal {
        constructor() {
            this.modals = new Map();
            this.activeModal = null;
            this.isOpening = false;
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
        this.initVideoModals();
        this.bindGlobalEvents();
    }

    initVideoModals() {
        const triggers = document.querySelectorAll('.maw-video-modal');

        triggers.forEach((block, index) => {
            const trigger = block.querySelector('.maw-video-modal__trigger');
            if (!trigger) return;

            const modalId = `maw-video-modal-${index}`;
            const config = {
                videoSource: block.dataset.videoSource || 'self-hosted',
                videoUrl: block.dataset.videoUrl || '',
                youtubeId: block.dataset.youtubeId || '',
                embedCode: block.dataset.embedCode || '',
                aspectRatio: block.dataset.aspectRatio || '16:9',
                modalSize: block.dataset.modalSize || 'large',
                autoplay: block.dataset.autoplay === 'true',
                overlayColor: block.dataset.overlayColor || '#000000',
                overlayOpacity: parseFloat(block.dataset.overlayOpacity) || 0.6
            };

            // Store configuration
            this.modals.set(modalId, config);

            // Check if cover trigger should be disabled
            const disableCoverTrigger = block.dataset.disableCoverTrigger === 'true';

            // Bind click event to the cover image trigger (unless disabled)
            if (!disableCoverTrigger) {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Prevent opening multiple modals or opening while already opening
                    if (!this.isOpening && !this.activeModal) {
                        this.openModal(modalId, config);
                    }
                });

                // Bind keyboard events for accessibility
                trigger.addEventListener('keydown', (e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && !this.isOpening && !this.activeModal) {
                        e.preventDefault();
                        e.stopPropagation();
                        this.openModal(modalId, config);
                    }
                });
            }

            // Bind external trigger if specified
            const externalTriggerId = block.dataset.externalTriggerId;
            if (externalTriggerId) {
                const externalTrigger = document.getElementById(externalTriggerId);
                if (externalTrigger) {
                    externalTrigger.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (!this.isOpening && !this.activeModal) {
                            this.openModal(modalId, config);
                        }
                    });

                    externalTrigger.addEventListener('keydown', (e) => {
                        if ((e.key === 'Enter' || e.key === ' ') && !this.isOpening && !this.activeModal) {
                            e.preventDefault();
                            e.stopPropagation();
                            this.openModal(modalId, config);
                        }
                    });
                } else {
                    console.warn(`MAW Video Modal: External trigger element with ID "${externalTriggerId}" not found.`);
                }
            }
        });
    }

    bindGlobalEvents() {
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.closeModal();
            }
        });
    }

    hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    createModalElement(config) {
        const aspectClass = `maw-video-modal-overlay--aspect-${config.aspectRatio.replace(':', '-')}`;
        const sizeClass = `maw-video-modal-overlay--${config.modalSize}`;

        const modal = document.createElement('div');
        modal.className = `maw-video-modal-overlay ${aspectClass} ${sizeClass}`;
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Video player');
        modal.style.backgroundColor = this.hexToRgba(config.overlayColor, config.overlayOpacity);

        let videoElement = '';

        if (config.videoSource === 'youtube' && config.youtubeId) {
            const autoplayParam = config.autoplay ? '1' : '0';
            videoElement = `
                <iframe 
                    class="maw-video-modal-overlay__iframe"
                    src="https://www.youtube.com/embed/${config.youtubeId}?autoplay=${autoplayParam}&rel=0&modestbranding=1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            `;
        } else if (config.videoSource === 'embed' && config.embedCode) {
            // Use the embed code directly, but ensure it has the proper class
            videoElement = config.embedCode.replace('<iframe', '<iframe class="maw-video-modal-overlay__iframe"');
        } else if (config.videoUrl) {
            const autoplayAttr = config.autoplay ? 'autoplay' : '';
            videoElement = `
                <video 
                    class="maw-video-modal-overlay__video"
                    src="${config.videoUrl}"
                    controls
                    ${autoplayAttr}
                    playsinline
                ></video>
            `;
        }

        modal.innerHTML = `
            <div class="maw-video-modal-overlay__content">
                <button 
                    class="maw-video-modal-overlay__close" 
                    type="button" 
                    aria-label="Close video"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                </button>
                <div class="maw-video-modal-overlay__video-wrapper">
                    ${videoElement}
                </div>
            </div>
        `;

        return modal;
    }

    openModal(modalId, config) {
        // Prevent opening if already opening or modal is active
        if (this.isOpening || this.activeModal) {
            return;
        }

        this.isOpening = true;

        // Close any existing modal
        if (this.activeModal) {
            this.closeModal();
        }

        // Create and append modal
        const modal = this.createModalElement(config);
        document.body.appendChild(modal);
        document.body.classList.add('maw-video-modal-open');

        // Store reference
        this.activeModal = {
            id: modalId,
            element: modal
        };

        // Trigger animation
        requestAnimationFrame(() => {
            modal.classList.add('maw-video-modal-overlay--open');
            this.isOpening = false;
        });

        // Bind close events
        const closeButton = modal.querySelector('.maw-video-modal-overlay__close');
        closeButton.addEventListener('click', () => this.closeModal());

        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Focus close button for accessibility
        closeButton.focus();

        // Start video if self-hosted and autoplay
        if (config.videoSource === 'self-hosted' && config.autoplay) {
            const video = modal.querySelector('video');
            if (video) {
                video.play().catch((err) => {
                    console.warn('MAW Video Modal: Autoplay failed', err);
                });
            }
        }
    }

    closeModal() {
        if (!this.activeModal) return;

        const modal = this.activeModal.element;

        // Stop video playback
        const video = modal.querySelector('video');
        const iframe = modal.querySelector('iframe');

        if (video) {
            video.pause();
            video.src = '';
        }

        if (iframe) {
            iframe.src = '';
        }

        // Animate out
        modal.classList.remove('maw-video-modal-overlay--open');

        // Remove after animation
        setTimeout(() => {
            modal.remove();
            document.body.classList.remove('maw-video-modal-open');
        }, 300);

        this.activeModal = null;
    }
}

    // Initialize
    new MAWVideoModal();
} // End guard