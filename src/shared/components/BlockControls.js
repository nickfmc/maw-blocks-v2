/**
 * Shared Block Control Components
 * Reusable inspector control panels for blocks
 * Updated for tracking
 */

import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';

export const AlignmentPanel = ({ alignment, onChange }) => (
    <PanelBody title={__('Alignment', 'maw-blocks')} initialOpen={false}>
        <SelectControl
            label={__('Content Alignment', 'maw-blocks')}
            value={alignment}
            options={[
                { label: __('Left', 'maw-blocks'), value: 'left' },
                { label: __('Center', 'maw-blocks'), value: 'center' },
                { label: __('Right', 'maw-blocks'), value: 'right' }
            ]}
            onChange={onChange}
        />
    </PanelBody>
);

export const NavigationPanel = ({ settings, onChange }) => (
    <PanelBody title={__('Navigation', 'maw-blocks')} initialOpen={true}>
        <ToggleControl
            label={__('Show Arrow Buttons', 'maw-blocks')}
            checked={settings.showArrows}
            onChange={(value) => onChange({ ...settings, showArrows: value })}
        />
        {settings.showArrows && (
            <>
                <SelectControl
                    label={__('Arrow Icon', 'maw-blocks')}
                    value={settings.arrowIcon}
                    options={[
                        { label: __('Chevron', 'maw-blocks'), value: 'chevron' },
                        { label: __('Arrow', 'maw-blocks'), value: 'arrow' },
                        { label: __('Angle', 'maw-blocks'), value: 'angle' }
                    ]}
                    onChange={(value) => onChange({ ...settings, arrowIcon: value })}
                />
                <SelectControl
                    label={__('Arrow Position', 'maw-blocks')}
                    value={settings.arrowPosition}
                    options={[
                        { label: __('Sides', 'maw-blocks'), value: 'sides' },
                        { label: __('Below Slider', 'maw-blocks'), value: 'below' }
                    ]}
                    onChange={(value) => onChange({ ...settings, arrowPosition: value })}
                />
            </>
        )}
        <ToggleControl
            label={__('Show Dots', 'maw-blocks')}
            checked={settings.showDots}
            onChange={(value) => onChange({ ...settings, showDots: value })}
        />
        {settings.showDots && (
            <>
                <SelectControl
                    label={__('Dots Position', 'maw-blocks')}
                    value={settings.dotsPosition}
                    options={[
                        { label: __('Below Slider', 'maw-blocks'), value: 'below' },
                        { label: __('Inside Bottom', 'maw-blocks'), value: 'inside-bottom' },
                        { label: __('Side', 'maw-blocks'), value: 'side' }
                    ]}
                    onChange={(value) => onChange({ ...settings, dotsPosition: value })}
                />
                <SelectControl
                    label={__('Dots Alignment', 'maw-blocks')}
                    value={settings.dotsAlignment}
                    options={[
                        { label: __('Left', 'maw-blocks'), value: 'left' },
                        { label: __('Center', 'maw-blocks'), value: 'center' },
                        { label: __('Right', 'maw-blocks'), value: 'right' }
                    ]}
                    onChange={(value) => onChange({ ...settings, dotsAlignment: value })}
                />
            </>
        )}
    </PanelBody>
);

export const SliderBehaviorPanel = ({ settings, onChange }) => (
    <PanelBody title={__('Slider Behavior', 'maw-blocks')} initialOpen={true}>
        <ToggleControl
            label={__('Autoplay', 'maw-blocks')}
            checked={settings.autoplay}
            onChange={(value) => onChange({ ...settings, autoplay: value })}
        />
        {settings.autoplay && (
            <RangeControl
                label={__('Autoplay Speed (ms)', 'maw-blocks')}
                value={settings.autoplaySpeed}
                onChange={(value) => onChange({ ...settings, autoplaySpeed: value })}
                min={1000}
                max={10000}
                step={500}
            />
        )}
        <ToggleControl
            label={__('Loop', 'maw-blocks')}
            checked={settings.loop}
            onChange={(value) => onChange({ ...settings, loop: value })}
        />
        <SelectControl
            label={__('End Behavior', 'maw-blocks')}
            value={settings.endBehavior}
            options={[
                { label: __('Loop to Beginning', 'maw-blocks'), value: 'loop' },
                { label: __('Disable Arrow', 'maw-blocks'), value: 'disable' }
            ]}
            onChange={(value) => onChange({ ...settings, endBehavior: value })}
            help={__('What happens when reaching the first/last slide', 'maw-blocks')}
        />
        <RangeControl
            label={__('Transition Speed (ms)', 'maw-blocks')}
            value={settings.speed}
            onChange={(value) => onChange({ ...settings, speed: value })}
            min={200}
            max={2000}
            step={100}
        />
        <RangeControl
            label={__('Slides Per View', 'maw-blocks')}
            value={settings.slidesPerView}
            onChange={(value) => onChange({ ...settings, slidesPerView: value })}
            min={1}
            max={6}
            step={1}
        />
        <RangeControl
            label={__('Space Between Slides (px)', 'maw-blocks')}
            value={settings.spaceBetween}
            onChange={(value) => onChange({ ...settings, spaceBetween: value })}
            min={0}
            max={100}
            step={5}
        />
    </PanelBody>
);

export const ResponsivePanel = ({ settings, onChange }) => (
    <PanelBody title={__('Responsive Settings', 'maw-blocks')} initialOpen={false}>
        <RangeControl
            label={__('Slides Per View (Tablet)', 'maw-blocks')}
            value={settings.slidesPerViewTablet}
            onChange={(value) => onChange({ ...settings, slidesPerViewTablet: value })}
            min={1}
            max={4}
            step={1}
        />
        <RangeControl
            label={__('Slides Per View (Mobile)', 'maw-blocks')}
            value={settings.slidesPerViewMobile}
            onChange={(value) => onChange({ ...settings, slidesPerViewMobile: value })}
            min={1}
            max={2}
            step={1}
        />
    </PanelBody>
);
