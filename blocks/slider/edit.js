/**
 * Slider Block Edit Component
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { blockClass } from '../../src/shared/utils/classnames';
import { NavigationPanel, SliderBehaviorPanel, ResponsivePanel } from '../../src/shared/components/BlockControls';
import { NavigationArrows } from '../../src/shared/components/Arrows';

const ALLOWED_BLOCKS = ['core/group', 'core/image', 'core/paragraph', 'core/heading', 'core/columns'];

const TEMPLATE = [
    ['core/group', { className: 'maw-slider__slide' }, [
        ['core/heading', { placeholder: __('Slide 1 Heading', 'maw-blocks') }],
        ['core/paragraph', { placeholder: __('Add your content...', 'maw-blocks') }]
    ]],
    ['core/group', { className: 'maw-slider__slide' }, [
        ['core/heading', { placeholder: __('Slide 2 Heading', 'maw-blocks') }],
        ['core/paragraph', { placeholder: __('Add your content...', 'maw-blocks') }]
    ]],
    ['core/group', { className: 'maw-slider__slide' }, [
        ['core/heading', { placeholder: __('Slide 3 Heading', 'maw-blocks') }],
        ['core/paragraph', { placeholder: __('Add your content...', 'maw-blocks') }]
    ]]
];

export default function Edit({ attributes, setAttributes }) {
    const {
        showArrows,
        arrowIcon,
        showDots,
        dotsPosition,
        dotsAlignment,
        arrowPosition,
        autoplay,
        autoplaySpeed,
        loop,
        endBehavior,
        speed,
        slidesPerView,
        slidesPerViewTablet,
        slidesPerViewMobile,
        spaceBetween,
        effect
    } = attributes;

    const blockProps = useBlockProps({
        className: blockClass('slider', {
            'arrows-visible': showArrows,
            'dots-visible': showDots,
            [`dots-${dotsPosition}`]: showDots && dotsPosition,
            [`dots-align-${dotsAlignment}`]: showDots && dotsAlignment,
            [`arrows-${arrowPosition}`]: showArrows && arrowPosition
        }),
        'data-block-version': '1.0.0'
    });

    const navigationSettings = {
        showArrows,
        arrowIcon,
        arrowPosition,
        showDots,
        dotsPosition,
        dotsAlignment
    };

    const behaviorSettings = {
        autoplay,
        autoplaySpeed,
        loop,
        endBehavior,
        speed,
        slidesPerView,
        spaceBetween
    };

    const responsiveSettings = {
        slidesPerViewTablet,
        slidesPerViewMobile
    };

    return (
        <>
            <InspectorControls>
                <NavigationPanel
                    settings={navigationSettings}
                    onChange={(newSettings) => setAttributes(newSettings)}
                />
                <SliderBehaviorPanel
                    settings={behaviorSettings}
                    onChange={(newSettings) => setAttributes(newSettings)}
                />
                <ResponsivePanel
                    settings={responsiveSettings}
                    onChange={(newSettings) => setAttributes(newSettings)}
                />
                <PanelBody title={__('Effects', 'maw-blocks')} initialOpen={false}>
                    <SelectControl
                        label={__('Transition Effect', 'maw-blocks')}
                        value={effect}
                        options={[
                            { label: __('Slide', 'maw-blocks'), value: 'slide' },
                            { label: __('Fade', 'maw-blocks'), value: 'fade' }
                        ]}
                        onChange={(value) => setAttributes({ effect: value })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div className="maw-slider__wrapper">
                    <InnerBlocks
                        allowedBlocks={ALLOWED_BLOCKS}
                        template={TEMPLATE}
                        renderAppender={InnerBlocks.ButtonBlockAppender}
                    />
                </div>
                <NavigationArrows showArrows={showArrows} arrowIcon={arrowIcon} />
                {showDots && (
                    <div className={`maw-slider__dots maw-slider__dots--${dotsPosition}`}>
                        <span className="maw-slider__dot maw-slider__dot--active"></span>
                        <span className="maw-slider__dot"></span>
                        <span className="maw-slider__dot"></span>
                    </div>
                )}
            </div>
        </>
    );
}

