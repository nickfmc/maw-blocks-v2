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
        startDelay
    } = attributes;

    const blockProps = useBlockProps.save({
        className: blockClass('number-counter', {
            [`align-${alignment}`]: alignment
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
                        <span className={elementClass('number-counter', 'prefix')}>
                            {prefix}
                        </span>
                    )}
                    <span
                        className={elementClass('number-counter', 'number')}
                        data-target={number}
                    >
                        0
                    </span>
                    {suffix && (
                        <span className={elementClass('number-counter', 'suffix')}>
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
