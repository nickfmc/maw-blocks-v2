import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl, SelectControl, Button } from '@wordpress/components';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';

export default function Edit({ attributes, setAttributes }) {
    const {
        logos,
        speed,
        direction,
        pauseOnHover,
        logosInView,
        logosInViewTablet,
        logosInViewMobile,
        logoHeight,
        spacing
    } = attributes;

    const blockProps = useBlockProps({
        className: blockClass('logo-carousel', {
            'pause-on-hover': pauseOnHover,
            [`direction-${direction}`]: true
        })
    });

    const addLogo = (media) => {
        const newLogos = [...logos, {
            id: media.id,
            url: media.url,
            alt: media.alt || ''
        }];
        setAttributes({ logos: newLogos });
    };

    const removeLogo = (index) => {
        const newLogos = logos.filter((_, i) => i !== index);
        setAttributes({ logos: newLogos });
    };

    const moveLogo = (fromIndex, toIndex) => {
        if (toIndex < 0 || toIndex >= logos.length) return;
        
        const newLogos = [...logos];
        const [movedLogo] = newLogos.splice(fromIndex, 1);
        newLogos.splice(toIndex, 0, movedLogo);
        setAttributes({ logos: newLogos });
    };

    const moveLogoUp = (index) => {
        moveLogo(index, index - 1);
    };

    const moveLogoDown = (index) => {
        moveLogo(index, index + 1);
    };

    const updateLogoAlt = (index, alt) => {
        const newLogos = [...logos];
        newLogos[index] = { ...newLogos[index], alt };
        setAttributes({ logos: newLogos });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Carousel Settings', 'maw-blocks')} initialOpen={true}>
                    <RangeControl
                        label={__('Animation Speed (seconds)', 'maw-blocks')}
                        value={speed}
                        onChange={(value) => setAttributes({ speed: value })}
                        min={5}
                        max={120}
                        step={5}
                        help={__('Time for one complete loop', 'maw-blocks')}
                    />
                    <SelectControl
                        label={__('Direction', 'maw-blocks')}
                        value={direction}
                        options={[
                            { label: __('Left', 'maw-blocks'), value: 'left' },
                            { label: __('Right', 'maw-blocks'), value: 'right' }
                        ]}
                        onChange={(value) => setAttributes({ direction: value })}
                    />
                    <ToggleControl
                        label={__('Pause on Hover', 'maw-blocks')}
                        checked={pauseOnHover}
                        onChange={(value) => setAttributes({ pauseOnHover: value })}
                    />
                    <RangeControl
                        label={__('Logo Height (px)', 'maw-blocks')}
                        value={logoHeight}
                        onChange={(value) => setAttributes({ logoHeight: value })}
                        min={30}
                        max={200}
                        step={5}
                    />
                    <RangeControl
                        label={__('Spacing Between Logos (px)', 'maw-blocks')}
                        value={spacing}
                        onChange={(value) => setAttributes({ spacing: value })}
                        min={10}
                        max={100}
                        step={5}
                    />
                </PanelBody>
                <PanelBody title={__('Responsive Settings', 'maw-blocks')} initialOpen={false}>
                    <RangeControl
                        label={__('Logos in View (Desktop)', 'maw-blocks')}
                        value={logosInView}
                        onChange={(value) => setAttributes({ logosInView: value })}
                        min={2}
                        max={10}
                        step={1}
                        help={__('Number of logos visible at once on desktop', 'maw-blocks')}
                    />
                    <RangeControl
                        label={__('Logos in View (Tablet)', 'maw-blocks')}
                        value={logosInViewTablet}
                        onChange={(value) => setAttributes({ logosInViewTablet: value })}
                        min={2}
                        max={6}
                        step={1}
                    />
                    <RangeControl
                        label={__('Logos in View (Mobile)', 'maw-blocks')}
                        value={logosInViewMobile}
                        onChange={(value) => setAttributes({ logosInViewMobile: value })}
                        min={1}
                        max={4}
                        step={1}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div className={elementClass('logo-carousel', 'container')}>
                    <div className={elementClass('logo-carousel', 'admin-controls')}>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={addLogo}
                                allowedTypes={['image']}
                                multiple={false}
                                render={({ open }) => (
                                    <Button variant="primary" onClick={open}>
                                        {__('Add Logo', 'maw-blocks')}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                        <p className={elementClass('logo-carousel', 'help-text')}>
                            {logos.length} {logos.length === 1 ? __('logo', 'maw-blocks') : __('logos', 'maw-blocks')} {__('added', 'maw-blocks')}
                        </p>
                    </div>

                    {logos.length > 0 ? (
                        <>
                            <div className={elementClass('logo-carousel', 'preview-wrapper')}>
                                <div className={elementClass('logo-carousel', 'preview-track')}>
                                    {logos.map((logo, index) => (
                                        <div key={`${logo.id}-${index}`} className={elementClass('logo-carousel', 'preview-item')}>
                                            <img
                                                src={logo.url}
                                                alt={logo.alt}
                                                style={{ height: `${logoHeight}px` }}
                                            />
                                            <div className={elementClass('logo-carousel', 'item-controls')}>
                                                <div className={elementClass('logo-carousel', 'reorder-controls')}>
                                                    <Button
                                                        isSmall
                                                        variant="secondary"
                                                        onClick={() => moveLogoUp(index)}
                                                        disabled={index === 0}
                                                        className={elementClass('logo-carousel', 'move-btn')}
                                                        icon="arrow-up-alt2"
                                                        label={__('Move Up', 'maw-blocks')}
                                                    />
                                                    <Button
                                                        isSmall
                                                        variant="secondary"
                                                        onClick={() => moveLogoDown(index)}
                                                        disabled={index === logos.length - 1}
                                                        className={elementClass('logo-carousel', 'move-btn')}
                                                        icon="arrow-down-alt2"
                                                        label={__('Move Down', 'maw-blocks')}
                                                    />
                                                </div>
                                                <Button
                                                    isDestructive
                                                    isSmall
                                                    onClick={() => removeLogo(index)}
                                                    className={elementClass('logo-carousel', 'remove-btn')}
                                                >
                                                    {__('Remove', 'maw-blocks')}
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={elementClass('logo-carousel', 'settings-info')}>
                                <p><strong>{__('Preview Settings:', 'maw-blocks')}</strong></p>
                                <p>{__('Desktop:', 'maw-blocks')} {logosInView} {__('logos visible', 'maw-blocks')}</p>
                                <p>{__('Tablet:', 'maw-blocks')} {logosInViewTablet} {__('logos visible', 'maw-blocks')}</p>
                                <p>{__('Mobile:', 'maw-blocks')} {logosInViewMobile} {__('logos visible', 'maw-blocks')}</p>
                                <p>{__('Direction:', 'maw-blocks')} {direction === 'left' ? __('→', 'maw-blocks') : __('←', 'maw-blocks')}</p>
                            </div>
                        </>
                    ) : (
                        <div className={elementClass('logo-carousel', 'empty-state')}>
                            <p>{__('Add logos to create your infinite carousel', 'maw-blocks')}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
