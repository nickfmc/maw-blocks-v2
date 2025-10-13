/**
 * Icon List Block Save Component
 */

import { useBlockProps, RichText } from '@wordpress/block-editor';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';

// Icon renderer with custom SVG support
const renderIcon = (item) => {
    // Handle object parameter (new format) or string (legacy format)
    const iconType = typeof item === 'string' ? item : item.icon;
    const customSvg = typeof item === 'object' ? item.customSvg : '';
    
    // If custom SVG is provided, use it
    if (iconType === 'custom' && customSvg) {
        return (
            <span dangerouslySetInnerHTML={{ __html: customSvg }} />
        );
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
    
    return iconMap[iconType] || '●';
};

export default function Save({ attributes }) {
    const {
        items,
        iconSize,
        iconColor,
        alignment,
        gap
    } = attributes;

    const blockProps = useBlockProps.save({
        className: blockClass('icon-list', {
            [`align-${alignment}`]: true,
            [`size-${iconSize}`]: true
        }),
        style: {
            '--maw-icon-list-gap': `${gap}px`,
            '--maw-icon-list-color': iconColor || undefined
        }
    });

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div {...blockProps}>
            <ul className={elementClass('icon-list', 'container')}>
                {items.map((item, index) => (
                    <li key={index} className={elementClass('icon-list', 'item')}>
                        <span 
                            className={elementClass('icon-list', 'icon')}
                            aria-hidden="true"
                        >
                            {renderIcon(item)}
                        </span>
                        <RichText.Content
                            tagName="span"
                            className={elementClass('icon-list', 'text')}
                            value={item.text}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}