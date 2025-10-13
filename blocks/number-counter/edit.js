/**
 * Number Counter Block Edit Component
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl, ToggleControl, SelectControl } from '@wordpress/components';
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
        startDelay
    } = attributes;

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
            </InspectorControls>

            <div {...blockProps}>
                <div className={elementClass('number-counter', 'wrapper')}>
                    <div className={elementClass('number-counter', 'display')}>
                        {prefix && (
                            <span className={elementClass('number-counter', 'prefix')}>
                                {prefix}
                            </span>
                        )}
                        <span className={elementClass('number-counter', 'number')}>
                            {number}
                        </span>
                        {suffix && (
                            <span className={elementClass('number-counter', 'suffix')}>
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
