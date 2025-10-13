/**
 * Shared Arrow Components
 * 
 * Provides consistent arrow rendering across all slider blocks
 * using global arrow settings from the admin panel
 */

import { __ } from '@wordpress/i18n';

// Default arrows (fallback if global settings fail)
const DEFAULT_ARROWS = {
    left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
    right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
};

/**
 * Get global arrow settings from WordPress
 * This will be populated via wp_localize_script
 */
const getGlobalArrows = () => {
    // Check if global settings are available (will be set via PHP)
    if (typeof window.mawBlocksArrows !== 'undefined') {
        return window.mawBlocksArrows;
    }
    return DEFAULT_ARROWS;
};

/**
 * Render a left arrow component
 */
export const LeftArrow = ({ className = '', ...props }) => {
    const arrows = getGlobalArrows();
    
    return (
        <span 
            className={`maw-arrow maw-arrow--left ${className}`}
            dangerouslySetInnerHTML={{ __html: arrows.left }}
            {...props}
        />
    );
};

/**
 * Render a right arrow component
 */
export const RightArrow = ({ className = '', ...props }) => {
    const arrows = getGlobalArrows();
    
    return (
        <span 
            className={`maw-arrow maw-arrow--right ${className}`}
            dangerouslySetInnerHTML={{ __html: arrows.right }}
            {...props}
        />
    );
};

/**
 * Navigation arrows component for sliders
 */
export const NavigationArrows = ({ 
    showArrows = true, 
    onPrevious, 
    onNext, 
    className = '',
    prevDisabled = false,
    nextDisabled = false
}) => {
    if (!showArrows) {
        return null;
    }

    return (
        <div className={`maw-slider__navigation ${className}`}>
            <button
                type="button"
                className="maw-slider__arrow maw-slider__arrow--prev"
                onClick={onPrevious}
                disabled={prevDisabled}
                aria-label={__('Previous slide', 'maw-blocks')}
            >
                <LeftArrow />
            </button>
            <button
                type="button"
                className="maw-slider__arrow maw-slider__arrow--next"
                onClick={onNext}
                disabled={nextDisabled}
                aria-label={__('Next slide', 'maw-blocks')}
            >
                <RightArrow />
            </button>
        </div>
    );
};

/**
 * Get arrow HTML for server-side rendering
 */
export const getArrowHTML = (direction) => {
    const arrows = getGlobalArrows();
    return arrows[direction] || DEFAULT_ARROWS[direction];
};