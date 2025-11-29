/**
 * Shared Arrow Components
 * 
 * Provides consistent arrow rendering across all slider blocks
 * using global arrow settings from the admin panel
 */

import { __ } from '@wordpress/i18n';

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

/**
 * Get global arrow settings from WordPress (legacy function for backward compatibility)
 */
const getGlobalArrows = () => {
    if (typeof window.mawBlocksArrows !== 'undefined') {
        return window.mawBlocksArrows;
    }
    return DEFAULT_ARROWS;
};

/**
 * Render a left arrow component
 */
export const LeftArrow = ({ className = '', arrowIcon = 'arrow', ...props }) => {
    const arrows = getArrowsByType(arrowIcon);
    
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
export const RightArrow = ({ className = '', arrowIcon = 'arrow', ...props }) => {
    const arrows = getArrowsByType(arrowIcon);
    
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
    arrowIcon = 'arrow',
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
                <LeftArrow arrowIcon={arrowIcon} />
            </button>
            <button
                type="button"
                className="maw-slider__arrow maw-slider__arrow--next"
                onClick={onNext}
                disabled={nextDisabled}
                aria-label={__('Next slide', 'maw-blocks')}
            >
                <RightArrow arrowIcon={arrowIcon} />
            </button>
        </div>
    );
};

/**
 * Get arrow HTML for server-side rendering
 */
export const getArrowHTML = (direction, arrowIcon = 'arrow') => {
    const arrows = getArrowsByType(arrowIcon);
    return arrows[direction] || DEFAULT_ARROWS[direction];
};