/**
 * Slider Block Save Component
 */

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';
import { getArrowHTML } from '../../src/shared/components/Arrows';

export default function save({ attributes }) {
    const {
        showArrows,
        arrowIcon,
        showDots,
        dotsPosition,
        autoplay,
        autoplaySpeed,
        loop,
        speed,
        slidesPerView,
        slidesPerViewTablet,
        slidesPerViewMobile,
        spaceBetween,
        effect
    } = attributes;

    const blockProps = useBlockProps.save({
        className: blockClass('slider', {
            'arrows-visible': showArrows,
            'dots-visible': showDots,
            [`dots-${dotsPosition}`]: showDots && dotsPosition,
            [`effect-${effect}`]: effect
        }),
        'data-autoplay': autoplay,
        'data-autoplay-speed': autoplaySpeed,
        'data-loop': loop,
        'data-speed': speed,
        'data-slides-per-view': slidesPerView,
        'data-slides-per-view-tablet': slidesPerViewTablet,
        'data-slides-per-view-mobile': slidesPerViewMobile,
        'data-space-between': spaceBetween,
        'data-effect': effect,
        'data-arrow-icon': arrowIcon
    });

    return (
        <div {...blockProps}>
            <div className={elementClass('slider', 'container')}>
                <div className={elementClass('slider', 'wrapper')}>
                    <InnerBlocks.Content />
                </div>
                {showArrows && (
                    <div className={elementClass('slider', 'navigation')}>
                        <button
                            className={`${elementClass('slider', 'arrow')} ${elementClass('slider', 'arrow', { prev: true })}`}
                            type="button"
                            aria-label="Previous slide"
                        >
                            <span 
                                aria-hidden="true"
                                dangerouslySetInnerHTML={{ __html: getArrowHTML('left') }}
                            />
                        </button>
                        <button
                            className={`${elementClass('slider', 'arrow')} ${elementClass('slider', 'arrow', { next: true })}`}
                            type="button"
                            aria-label="Next slide"
                        >
                            <span 
                                aria-hidden="true"
                                dangerouslySetInnerHTML={{ __html: getArrowHTML('right') }}
                            />
                        </button>
                    </div>
                )}
                {showDots && (
                    <div className={`${elementClass('slider', 'dots')} ${elementClass('slider', 'dots', { [dotsPosition]: true })}`}>
                    </div>
                )}
            </div>
        </div>
    );
}

