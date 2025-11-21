/**
 * Number Counter Block Edit Component
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl, ToggleControl, SelectControl, FontSizePicker } from '@wordpress/components';
import { useSetting } from '@wordpress/block-editor';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';

export default function Edit({ attributes, setAttributes }) {
    const {
        number,
        prefix,
        suffix,
        duration,
        label,
        alignment,
        animateOnce,
        startDelay,
        numberFontSize,
        prefixFontSize,
        suffixFontSize,
        numberColor,
        prefixColor,
        suffixColor
    } = attributes;

    // Get theme colors and font sizes
    const themeColors = useSetting('color.palette') || [];
    const themeFontSizes = useSetting('typography.fontSizes') || [
        { name: __('Small', 'maw-blocks'), slug: 'small', size: '14px' },
        { name: __('Medium', 'maw-blocks'), slug: 'medium', size: '18px' },
        { name: __('Large', 'maw-blocks'), slug: 'large', size: '24px' },
        { name: __('Extra Large', 'maw-blocks'), slug: 'x-large', size: '48px' }
    ];

    const blockProps = useBlockProps({
        className: blockClass('number-counter', {
            [`align-${alignment}`]: true
        }),
        'data-block-version': '1.0.0'
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Counter Settings', 'maw-blocks')} initialOpen={true}>
                    <TextControl
                        label={__('Number', 'maw-blocks')}
                        help={__('The target number to count to', 'maw-blocks')}
                        value={number}
                        onChange={(value) => setAttributes({ number: parseFloat(value) || 0 })}
                        type="number"
                    />
                    <TextControl
                        label={__('Prefix', 'maw-blocks')}
                        help={__('Text before the number (e.g., $)', 'maw-blocks')}
                        value={prefix}
                        onChange={(value) => setAttributes({ prefix: value })}
                        placeholder="$"
                    />
                    <TextControl
                        label={__('Suffix', 'maw-blocks')}
                        help={__('Text after the number (e.g., %, +, K)', 'maw-blocks')}
                        value={suffix}
                        onChange={(value) => setAttributes({ suffix: value })}
                        placeholder="%"
                    />
                </PanelBody>

                <PanelBody title={__('Animation Settings', 'maw-blocks')} initialOpen={false}>
                    <RangeControl
                        label={__('Animation Duration (ms)', 'maw-blocks')}
                        value={duration}
                        onChange={(value) => setAttributes({ duration: value })}
                        min={500}
                        max={5000}
                        step={100}
                    />
                    <RangeControl
                        label={__('Start Delay (ms)', 'maw-blocks')}
                        value={startDelay}
                        onChange={(value) => setAttributes({ startDelay: value })}
                        min={0}
                        max={2000}
                        step={100}
                    />
                    <ToggleControl
                        label={__('Animate Once', 'maw-blocks')}
                        help={__('If enabled, animation plays only once. Otherwise, plays each time it enters viewport.', 'maw-blocks')}
                        checked={animateOnce}
                        onChange={(value) => setAttributes({ animateOnce: value })}
                    />
                </PanelBody>

                <PanelBody title={__('Display Settings', 'maw-blocks')} initialOpen={false}>
                    <SelectControl
                        label={__('Alignment', 'maw-blocks')}
                        value={alignment}
                        options={[
                            { label: __('Left', 'maw-blocks'), value: 'left' },
                            { label: __('Center', 'maw-blocks'), value: 'center' },
                            { label: __('Right', 'maw-blocks'), value: 'right' }
                        ]}
                        onChange={(value) => setAttributes({ alignment: value })}
                    />
                </PanelBody>

                <PanelBody title={__('Typography', 'maw-blocks')} initialOpen={false}>
                    <FontSizePicker
                        label={__('Number Font Size', 'maw-blocks')}
                        value={numberFontSize}
                        onChange={(value) => setAttributes({ numberFontSize: value || '48px' })}
                        fontSizes={themeFontSizes}
                        withSlider
                    />
                    <FontSizePicker
                        label={__('Prefix Font Size', 'maw-blocks')}
                        value={prefixFontSize}
                        onChange={(value) => setAttributes({ prefixFontSize: value || '24px' })}
                        fontSizes={themeFontSizes}
                        withSlider
                    />
                    <FontSizePicker
                        label={__('Suffix Font Size', 'maw-blocks')}
                        value={suffixFontSize}
                        onChange={(value) => setAttributes({ suffixFontSize: value || '24px' })}
                        fontSizes={themeFontSizes}
                        withSlider
                    />
                </PanelBody>

                <PanelColorSettings
                    title={__('Colors', 'maw-blocks')}
                    initialOpen={false}
                    colorSettings={[
                        {
                            value: numberColor,
                            onChange: (value) => setAttributes({ numberColor: value }),
                            label: __('Number Color', 'maw-blocks'),
                        },
                        {
                            value: prefixColor,
                            onChange: (value) => setAttributes({ prefixColor: value }),
                            label: __('Prefix Color', 'maw-blocks'),
                        },
                        {
                            value: suffixColor,
                            onChange: (value) => setAttributes({ suffixColor: value }),
                            label: __('Suffix Color', 'maw-blocks'),
                        },
                    ]}
                    colors={themeColors}
                />
            </InspectorControls>

            <div {...blockProps}>
                <div className={elementClass('number-counter', 'wrapper')}>
                    <div className={elementClass('number-counter', 'display')}>
                        {prefix && (
                            <span 
                                className={elementClass('number-counter', 'prefix')}
                                style={{
                                    fontSize: prefixFontSize,
                                    color: prefixColor
                                }}
                            >
                                {prefix}
                            </span>
                        )}
                        <span 
                            className={elementClass('number-counter', 'number')}
                            style={{
                                fontSize: numberFontSize,
                                color: numberColor
                            }}
                        >
                            {number}
                        </span>
                        {suffix && (
                            <span 
                                className={elementClass('number-counter', 'suffix')}
                                style={{
                                    fontSize: suffixFontSize,
                                    color: suffixColor
                                }}
                            >
                                {suffix}
                            </span>
                        )}
                    </div>
                    <RichText
                        tagName="div"
                        className={elementClass('number-counter', 'label')}
                        value={label}
                        onChange={(value) => setAttributes({ label: value })}
                        placeholder={__('Add label text...', 'maw-blocks')}
                    />
                </div>
            </div>
        </>
    );
}
