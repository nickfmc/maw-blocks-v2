/**
 * Icon List Block Edit Component
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, ColorPicker, Button, Flex, FlexItem, TextareaControl } from '@wordpress/components';
import { plus, trash } from '@wordpress/icons';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';

// Available icons - keeping it simple with common ones
const ICON_OPTIONS = [
    { label: __('Check', 'maw-blocks'), value: 'check' },
    { label: __('Arrow Right', 'maw-blocks'), value: 'arrow-right' },
    { label: __('Star', 'maw-blocks'), value: 'star' },
    { label: __('Heart', 'maw-blocks'), value: 'heart' },
    { label: __('Info', 'maw-blocks'), value: 'info' },
    { label: __('Warning', 'maw-blocks'), value: 'warning' },
    { label: __('Cross', 'maw-blocks'), value: 'cross' },
    { label: __('Plus', 'maw-blocks'), value: 'plus' },
    { label: __('Minus', 'maw-blocks'), value: 'minus' },
    { label: __('Circle', 'maw-blocks'), value: 'circle' },
    { label: __('Custom SVG', 'maw-blocks'), value: 'custom' }
];

const SIZE_OPTIONS = [
    { label: __('Small', 'maw-blocks'), value: 'small' },
    { label: __('Medium', 'maw-blocks'), value: 'medium' },
    { label: __('Large', 'maw-blocks'), value: 'large' }
];

const ALIGNMENT_OPTIONS = [
    { label: __('Left', 'maw-blocks'), value: 'left' },
    { label: __('Center', 'maw-blocks'), value: 'center' },
    { label: __('Right', 'maw-blocks'), value: 'right' }
];

// Simple icon renderer
const renderIcon = (item) => {
    if (item.icon === 'custom' && item.customSvg) {
        return <span dangerouslySetInnerHTML={{ __html: item.customSvg }} />;
    }
    
    const iconMap = {
        'check': '✓',
        'arrow-right': '→',
        'star': '★',
        'heart': '♥',
        'info': 'ℹ',
        'warning': '⚠',
        'cross': '✕',
        'plus': '+',
        'minus': '−',
        'circle': '●'
    };
    
    return iconMap[item.icon] || '●';
};

export default function Edit({ attributes, setAttributes }) {
    const {
        items,
        iconSize,
        iconColor,
        alignment,
        gap
    } = attributes;

    const blockProps = useBlockProps({
        className: blockClass('icon-list', {
            [`align-${alignment}`]: true,
            [`size-${iconSize}`]: true
        }),
        style: {
            '--maw-icon-list-gap': `${gap}px`,
            '--maw-icon-list-color': iconColor || undefined
        }
    });

    const addItem = () => {
        const newItems = [...items, { text: '', icon: 'check', customSvg: '' }];
        setAttributes({ items: newItems });
    };

    const updateItem = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setAttributes({ items: newItems });
    };

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setAttributes({ items: newItems });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Icon Settings', 'maw-blocks')} initialOpen={true}>
                    <SelectControl
                        label={__('Icon Size', 'maw-blocks')}
                        value={iconSize}
                        options={SIZE_OPTIONS}
                        onChange={(value) => setAttributes({ iconSize: value })}
                    />
                    <div>
                        <label>{__('Icon Color', 'maw-blocks')}</label>
                        <ColorPicker
                            color={iconColor}
                            onChange={(value) => setAttributes({ iconColor: value })}
                        />
                    </div>
                </PanelBody>

                <PanelBody title={__('Layout Settings', 'maw-blocks')} initialOpen={false}>
                    <SelectControl
                        label={__('Alignment', 'maw-blocks')}
                        value={alignment}
                        options={ALIGNMENT_OPTIONS}
                        onChange={(value) => setAttributes({ alignment: value })}
                    />
                    <RangeControl
                        label={__('Gap Between Items', 'maw-blocks')}
                        value={gap}
                        onChange={(value) => setAttributes({ gap: value })}
                        min={4}
                        max={40}
                        step={2}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div className={elementClass('icon-list', 'container')}>
                    {items.map((item, index) => (
                        <div key={index} className={elementClass('icon-list', 'item')}>
                            <div className={elementClass('icon-list', 'icon-controls')}>
                                <SelectControl
                                    value={item.icon}
                                    options={ICON_OPTIONS}
                                    onChange={(value) => updateItem(index, 'icon', value)}
                                />
                                {item.icon === 'custom' && (
                                    <TextareaControl
                                        label={__('Custom SVG Code', 'maw-blocks')}
                                        value={item.customSvg || ''}
                                        onChange={(value) => updateItem(index, 'customSvg', value)}
                                        placeholder={__('Paste your SVG code here...', 'maw-blocks')}
                                        rows={3}
                                    />
                                )}
                                {items.length > 1 && (
                                    <Button
                                        icon={trash}
                                        onClick={() => removeItem(index)}
                                        isDestructive
                                        size="small"
                                    />
                                )}
                            </div>
                            <div className={elementClass('icon-list', 'content')}>
                                <span className={elementClass('icon-list', 'icon')}>
                                    {renderIcon(item)}
                                </span>
                                <RichText
                                    tagName="span"
                                    className={elementClass('icon-list', 'text')}
                                    value={item.text}
                                    onChange={(value) => updateItem(index, 'text', value)}
                                    placeholder={__('Add list item...', 'maw-blocks')}
                                    multiline={false}
                                />
                            </div>
                        </div>
                    ))}
                    <Button
                        icon={plus}
                        onClick={addItem}
                        variant="secondary"
                        className={elementClass('icon-list', 'add-button')}
                    >
                        {__('Add Item', 'maw-blocks')}
                    </Button>
                </div>
            </div>
        </>
    );
}