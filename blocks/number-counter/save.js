/**
 * Number Counter Block Save Component
 */

import { useBlockProps, RichText } from '@wordpress/block-editor';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';

export default function Save({ attributes }) {
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

    const blockProps = useBlockProps.save({
        className: blockClass('number-counter', {
            [`align-${alignment}`]: true
        }),
        'data-number': number,
        'data-duration': duration,
        'data-animate-once': animateOnce,
        'data-start-delay': startDelay
    });

    return (
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
                        data-target={number}
                    >
                        0
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
                {label && (
                    <RichText.Content
                        tagName="div"
                        className={elementClass('number-counter', 'label')}
                        value={label}
                    />
                )}
            </div>
        </div>
    );
}
