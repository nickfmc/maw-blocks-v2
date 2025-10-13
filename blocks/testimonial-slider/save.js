/**
 * Testimonial Slider Block Save Component
 */

import { useBlockProps } from '@wordpress/block-editor';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';
import { getArrowHTML } from '../../src/shared/components/Arrows';

export default function save({ attributes }) {
    const {
        testimonials,
        fieldOrder,
        enabledFields,
        alignment,
        ratingStyle,
        showArrows,
        arrowIcon,
        showDots,
        dotsPosition,
        autoplay,
        autoplaySpeed,
        loop,
        speed
    } = attributes;

    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    const blockProps = useBlockProps.save({
        className: blockClass('testimonial-slider', {
            [`align-${alignment}`]: alignment,
            'arrows-visible': showArrows,
            'dots-visible': showDots
        }),
        'data-autoplay': autoplay,
        'data-autoplay-speed': autoplaySpeed,
        'data-loop': loop,
        'data-speed': speed,
        'data-arrow-icon': arrowIcon
    });

    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    const renderField = (field, testimonial) => {
        if (!enabledFields[field]) return null;

        switch (field) {
            case 'image':
                return testimonial.image ? (
                    <div className={elementClass('testimonial-slider', 'image')}>
                        <img src={testimonial.image} alt={testimonial.citation || ''} />
                    </div>
                ) : null;

            case 'rating':
                return (
                    <div className={elementClass('testimonial-slider', 'rating')} aria-label={`Rating: ${testimonial.rating} out of 5`}>
                        {ratingStyle === 'stars' ? (
                            <span className={elementClass('testimonial-slider', 'stars')} aria-hidden="true">
                                {renderStars(testimonial.rating)}
                            </span>
                        ) : (
                            <span className={elementClass('testimonial-slider', 'number')}>
                                {testimonial.rating}/5
                            </span>
                        )}
                    </div>
                );

            case 'title':
                return testimonial.title ? (
                    <h3 className={elementClass('testimonial-slider', 'title')}>
                        {testimonial.title}
                    </h3>
                ) : null;

            case 'quote':
                return testimonial.quote ? (
                    <blockquote className={elementClass('testimonial-slider', 'quote')}>
                        {testimonial.quote}
                    </blockquote>
                ) : null;

            case 'citation':
                return testimonial.citation ? (
                    <cite className={elementClass('testimonial-slider', 'citation')}>
                        {testimonial.citation}
                    </cite>
                ) : null;

            default:
                return null;
        }
    };

    return (
        <div {...blockProps}>
            <div className={elementClass('testimonial-slider', 'container')}>
                <div className={elementClass('testimonial-slider', 'wrapper')}>
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className={elementClass('testimonial-slider', 'slide')}
                            itemScope
                            itemType="https://schema.org/Review"
                        >
                            <div className={elementClass('testimonial-slider', 'content')}>
                                {fieldOrder.map((field) => (
                                    <div key={field}>
                                        {renderField(field, testimonial)}
                                    </div>
                                ))}
                            </div>
                            <meta itemProp="reviewRating" content={testimonial.rating} />
                        </div>
                    ))}
                </div>

                {showArrows && (
                    <div className={elementClass('testimonial-slider', 'navigation')}>
                        <button
                            className={`${elementClass('testimonial-slider', 'arrow')} ${elementClass('testimonial-slider', 'arrow', { prev: true })}`}
                            type="button"
                            aria-label="Previous testimonial"
                        >
                            <span 
                                aria-hidden="true"
                                dangerouslySetInnerHTML={{ __html: getArrowHTML('left') }}
                            />
                        </button>
                        <button
                            className={`${elementClass('testimonial-slider', 'arrow')} ${elementClass('testimonial-slider', 'arrow', { next: true })}`}
                            type="button"
                            aria-label="Next testimonial"
                        >
                            <span 
                                aria-hidden="true"
                                dangerouslySetInnerHTML={{ __html: getArrowHTML('right') }}
                            />
                        </button>
                    </div>
                )}

                {showDots && (
                    <div className={`${elementClass('testimonial-slider', 'dots')} ${elementClass('testimonial-slider', 'dots', { [dotsPosition]: true })}`}>
                    </div>
                )}
            </div>
        </div>
    );
}

