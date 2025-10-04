/**
 * Testimonial Slider Block Edit Component
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
    PanelBody,
    ToggleControl,
    SelectControl,
    Button,
    TextControl,
    TextareaControl,
    RangeControl
} from '@wordpress/components';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';
import { AlignmentPanel, NavigationPanel, SliderBehaviorPanel } from '../../src/shared/components/BlockControls';

export default function Edit({ attributes, setAttributes }) {
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

    const blockProps = useBlockProps({
        className: blockClass('testimonial-slider', {
            [`align-${alignment}`]: alignment
        }),
        'data-block-version': '1.0.0'
    });

    const addTestimonial = () => {
        const newTestimonials = [...testimonials, {
            id: Date.now(),
            image: '',
            imageId: null,
            rating: 5,
            title: '',
            quote: '',
            citation: ''
        }];
        setAttributes({ testimonials: newTestimonials });
    };

    const updateTestimonial = (index, field, value) => {
        const newTestimonials = [...testimonials];
        newTestimonials[index][field] = value;
        setAttributes({ testimonials: newTestimonials });
    };

    const removeTestimonial = (index) => {
        const newTestimonials = testimonials.filter((_, i) => i !== index);
        setAttributes({ testimonials: newTestimonials });
    };

    const toggleField = (field) => {
        setAttributes({
            enabledFields: {
                ...enabledFields,
                [field]: !enabledFields[field]
            }
        });
    };

    const navigationSettings = {
        showArrows,
        arrowIcon,
        showDots,
        dotsPosition
    };

    const behaviorSettings = {
        autoplay,
        autoplaySpeed,
        loop,
        speed,
        slidesPerView: 1,
        spaceBetween: 20
    };

    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Field Settings', 'maw-blocks')} initialOpen={true}>
                    <ToggleControl
                        label={__('Show Image', 'maw-blocks')}
                        checked={enabledFields.image}
                        onChange={() => toggleField('image')}
                    />
                    <ToggleControl
                        label={__('Show Rating', 'maw-blocks')}
                        checked={enabledFields.rating}
                        onChange={() => toggleField('rating')}
                    />
                    {enabledFields.rating && (
                        <SelectControl
                            label={__('Rating Style', 'maw-blocks')}
                            value={ratingStyle}
                            options={[
                                { label: __('Stars', 'maw-blocks'), value: 'stars' },
                                { label: __('Number', 'maw-blocks'), value: 'number' }
                            ]}
                            onChange={(value) => setAttributes({ ratingStyle: value })}
                        />
                    )}
                    <ToggleControl
                        label={__('Show Title', 'maw-blocks')}
                        checked={enabledFields.title}
                        onChange={() => toggleField('title')}
                    />
                    <ToggleControl
                        label={__('Show Quote', 'maw-blocks')}
                        checked={enabledFields.quote}
                        onChange={() => toggleField('quote')}
                    />
                    <ToggleControl
                        label={__('Show Citation', 'maw-blocks')}
                        checked={enabledFields.citation}
                        onChange={() => toggleField('citation')}
                    />
                </PanelBody>

                <AlignmentPanel
                    alignment={alignment}
                    onChange={(value) => setAttributes({ alignment: value })}
                />

                <NavigationPanel
                    settings={navigationSettings}
                    onChange={(newSettings) => setAttributes(newSettings)}
                />

                <SliderBehaviorPanel
                    settings={behaviorSettings}
                    onChange={(newSettings) => setAttributes(newSettings)}
                />
            </InspectorControls>

            <div {...blockProps}>
                <div className={elementClass('testimonial-slider', 'wrapper')}>
                    {testimonials.length === 0 ? (
                        <div className={elementClass('testimonial-slider', 'placeholder')}>
                            <p>{__('No testimonials yet. Add one below.', 'maw-blocks')}</p>
                        </div>
                    ) : (
                        testimonials.map((testimonial, index) => (
                            <div key={testimonial.id} className={elementClass('testimonial-slider', 'item')}>
                                <div className={elementClass('testimonial-slider', 'item-header')}>
                                    <h4>{__('Testimonial', 'maw-blocks')} {index + 1}</h4>
                                    <Button
                                        onClick={() => removeTestimonial(index)}
                                        isDestructive
                                        isSmall
                                    >
                                        {__('Remove', 'maw-blocks')}
                                    </Button>
                                </div>

                                {enabledFields.image && (
                                    <div className={elementClass('testimonial-slider', 'field')}>
                                        <label>{__('Image', 'maw-blocks')}</label>
                                        <MediaUploadCheck>
                                            <MediaUpload
                                                onSelect={(media) => {
                                                    updateTestimonial(index, 'image', media.url);
                                                    updateTestimonial(index, 'imageId', media.id);
                                                }}
                                                allowedTypes={['image']}
                                                value={testimonial.imageId}
                                                render={({ open }) => (
                                                    <>
                                                        <Button onClick={open} variant="secondary">
                                                            {testimonial.image ? __('Change', 'maw-blocks') : __('Select', 'maw-blocks')}
                                                        </Button>
                                                        {testimonial.image && (
                                                            <img src={testimonial.image} alt="" style={{ maxWidth: '100px', marginTop: '10px' }} />
                                                        )}
                                                    </>
                                                )}
                                            />
                                        </MediaUploadCheck>
                                    </div>
                                )}

                                {enabledFields.rating && (
                                    <div className={elementClass('testimonial-slider', 'field')}>
                                        <RangeControl
                                            label={__('Rating', 'maw-blocks')}
                                            value={testimonial.rating}
                                            onChange={(value) => updateTestimonial(index, 'rating', value)}
                                            min={1}
                                            max={5}
                                            step={1}
                                        />
                                        <div>{renderStars(testimonial.rating)}</div>
                                    </div>
                                )}

                                {enabledFields.title && (
                                    <TextControl
                                        label={__('Title', 'maw-blocks')}
                                        value={testimonial.title}
                                        onChange={(value) => updateTestimonial(index, 'title', value)}
                                        placeholder={__('e.g., Great Service!', 'maw-blocks')}
                                    />
                                )}

                                {enabledFields.quote && (
                                    <TextareaControl
                                        label={__('Quote', 'maw-blocks')}
                                        value={testimonial.quote}
                                        onChange={(value) => updateTestimonial(index, 'quote', value)}
                                        placeholder={__('The testimonial text...', 'maw-blocks')}
                                        rows={4}
                                    />
                                )}

                                {enabledFields.citation && (
                                    <TextControl
                                        label={__('Citation', 'maw-blocks')}
                                        value={testimonial.citation}
                                        onChange={(value) => updateTestimonial(index, 'citation', value)}
                                        placeholder={__('e.g., John Doe, CEO', 'maw-blocks')}
                                    />
                                )}
                            </div>
                        ))
                    )}
                </div>

                <Button onClick={addTestimonial} variant="primary" style={{ marginTop: '20px' }}>
                    {__('Add Testimonial', 'maw-blocks')}
                </Button>
            </div>
        </>
    );
}

