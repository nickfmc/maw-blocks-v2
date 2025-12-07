/**
 * Video Modal Block Edit Component
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, Button, TextControl } from '@wordpress/components';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';

// Play icon SVGs
const PlayIcons = {
    filled: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="maw-video-modal__play-icon">
            <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.9" />
            <path fill="#fff" d="M10 8l6 4-6 4V8z" />
        </svg>
    ),
    outline: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="maw-video-modal__play-icon">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <path fill="currentColor" d="M10 8l6 4-6 4V8z" />
        </svg>
    ),
    minimal: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="maw-video-modal__play-icon">
            <path fill="currentColor" d="M8 5v14l11-7L8 5z" />
        </svg>
    )
};

// YouTube URL parser
const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export default function Edit({ attributes, setAttributes }) {
    const {
        videoSource,
        videoUrl,
        videoId,
        youtubeUrl,
        coverImageUrl,
        coverImageId,
        coverImageAlt,
        showPlayIcon,
        playIconStyle,
        playIconSize,
    useInnerBlocks,
    aspectRatio,
    modalSize,
    autoplay,
    overlayColor,
    overlayOpacity
    } = attributes;    const blockProps = useBlockProps({
        className: blockClass('video-modal', {
            'has-cover': coverImageUrl,
            'has-video': videoSource === 'self-hosted' ? videoUrl : youtubeUrl,
            'use-innerblocks': useInnerBlocks,
            [`icon-${playIconSize}`]: showPlayIcon && playIconSize
        }),
        'data-block-version': '1.0.0'
    });

    const onSelectCover = (media) => {
        setAttributes({
            coverImageUrl: media.url,
            coverImageId: media.id,
            coverImageAlt: media.alt || ''
        });
    };

    const onSelectVideo = (media) => {
        setAttributes({
            videoUrl: media.url,
            videoId: media.id
        });
    };

    const youtubeId = getYouTubeId(youtubeUrl);

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Video Source', 'maw-blocks')} initialOpen={true}>
                    <SelectControl
                        label={__('Video Type', 'maw-blocks')}
                        value={videoSource}
                        options={[
                            { label: __('Self-Hosted', 'maw-blocks'), value: 'self-hosted' },
                            { label: __('YouTube', 'maw-blocks'), value: 'youtube' }
                        ]}
                        onChange={(value) => setAttributes({ videoSource: value })}
                    />

                    {videoSource === 'self-hosted' && (
                        <>
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onSelectVideo}
                                    allowedTypes={['video']}
                                    value={videoId}
                                    render={({ open }) => (
                                        <Button
                                            onClick={open}
                                            variant="secondary"
                                            style={{ marginBottom: '10px', width: '100%' }}
                                        >
                                            {videoUrl ? __('Change Video', 'maw-blocks') : __('Select Video', 'maw-blocks')}
                                        </Button>
                                    )}
                                />
                            </MediaUploadCheck>
                            {videoUrl && (
                                <>
                                    <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
                                        {videoUrl.split('/').pop()}
                                    </p>
                                    <Button
                                        onClick={() => setAttributes({ videoUrl: '', videoId: null })}
                                        variant="link"
                                        isDestructive
                                    >
                                        {__('Remove Video', 'maw-blocks')}
                                    </Button>
                                </>
                            )}
                        </>
                    )}

                    {videoSource === 'youtube' && (
                        <>
                            <TextControl
                                label={__('YouTube URL', 'maw-blocks')}
                                help={__('Paste a YouTube video URL', 'maw-blocks')}
                                value={youtubeUrl}
                                onChange={(value) => setAttributes({ youtubeUrl: value })}
                                placeholder="https://www.youtube.com/watch?v=..."
                            />
                            {youtubeId && (
                                <p style={{ fontSize: '12px', color: '#059669', marginTop: '-8px' }}>
                                    ✓ {__('Valid YouTube URL detected', 'maw-blocks')}
                                </p>
                            )}
                        </>
                    )}

                    <ToggleControl
                        label={__('Autoplay in Modal', 'maw-blocks')}
                        help={__('Automatically play video when modal opens', 'maw-blocks')}
                        checked={autoplay}
                        onChange={(value) => setAttributes({ autoplay: value })}
                    />
                </PanelBody>

                <PanelBody title={__('Cover Image', 'maw-blocks')} initialOpen={true}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectCover}
                            allowedTypes={['image']}
                            value={coverImageId}
                            render={({ open }) => (
                                <Button
                                    onClick={open}
                                    variant="secondary"
                                    style={{ marginBottom: '10px', width: '100%' }}
                                >
                                    {coverImageUrl ? __('Change Cover Image', 'maw-blocks') : __('Select Cover Image', 'maw-blocks')}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                    {coverImageUrl && (
                        <>
                            <img src={coverImageUrl} alt="" style={{ maxWidth: '100%', marginBottom: '10px', borderRadius: '4px' }} />
                            <TextControl
                                label={__('Alt Text', 'maw-blocks')}
                                value={coverImageAlt}
                                onChange={(value) => setAttributes({ coverImageAlt: value })}
                            />
                            <Button
                                onClick={() => setAttributes({ coverImageUrl: '', coverImageId: null, coverImageAlt: '' })}
                                variant="link"
                                isDestructive
                            >
                                {__('Remove Cover', 'maw-blocks')}
                            </Button>
                        </>
                    )}
                </PanelBody>

                <PanelBody title={__('Trigger Options', 'maw-blocks')} initialOpen={false}>
                    <ToggleControl
                        label={__('Use Custom Content', 'maw-blocks')}
                        help={__('Add custom blocks on top of the cover image instead of the play icon', 'maw-blocks')}
                        checked={useInnerBlocks}
                        onChange={(value) => setAttributes({ useInnerBlocks: value })}
                    />

                    {!useInnerBlocks && (
                        <>
                            <ToggleControl
                                label={__('Show Play Icon', 'maw-blocks')}
                                checked={showPlayIcon}
                                onChange={(value) => setAttributes({ showPlayIcon: value })}
                            />

                            {showPlayIcon && (
                                <>
                                    <SelectControl
                                        label={__('Icon Style', 'maw-blocks')}
                                        value={playIconStyle}
                                        options={[
                                            { label: __('Filled', 'maw-blocks'), value: 'filled' },
                                            { label: __('Outline', 'maw-blocks'), value: 'outline' },
                                            { label: __('Minimal', 'maw-blocks'), value: 'minimal' }
                                        ]}
                                        onChange={(value) => setAttributes({ playIconStyle: value })}
                                    />
                                    <SelectControl
                                        label={__('Icon Size', 'maw-blocks')}
                                        value={playIconSize}
                                        options={[
                                            { label: __('Small', 'maw-blocks'), value: 'small' },
                                            { label: __('Medium', 'maw-blocks'), value: 'medium' },
                                            { label: __('Large', 'maw-blocks'), value: 'large' }
                                        ]}
                                        onChange={(value) => setAttributes({ playIconSize: value })}
                                    />
                                </>
                            )}
                        </>
                    )}
                </PanelBody>

                <PanelBody title={__('Modal Settings', 'maw-blocks')} initialOpen={false}>
                    <SelectControl
                        label={__('Modal Size', 'maw-blocks')}
                        value={modalSize}
                        options={[
                            { label: __('Medium', 'maw-blocks'), value: 'medium' },
                            { label: __('Large', 'maw-blocks'), value: 'large' },
                            { label: __('Fullscreen', 'maw-blocks'), value: 'fullscreen' }
                        ]}
                        onChange={(value) => setAttributes({ modalSize: value })}
                    />
                    <SelectControl
                        label={__('Video Aspect Ratio', 'maw-blocks')}
                        value={aspectRatio}
                        options={[
                            { label: '16:9', value: '16:9' },
                            { label: '4:3', value: '4:3' },
                            { label: '1:1', value: '1:1' },
                            { label: '9:16', value: '9:16' }
                        ]}
                        onChange={(value) => setAttributes({ aspectRatio: value })}
                    />
                </PanelBody>

                <PanelBody title={__('Overlay Styling', 'maw-blocks')} initialOpen={false}>
                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: 500 }}>
                            {__('Overlay Color', 'maw-blocks')}
                        </label>
                        <input
                            type="color"
                            value={overlayColor}
                            onChange={(e) => setAttributes({ overlayColor: e.target.value })}
                            style={{ width: '100%', height: '40px', cursor: 'pointer', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: 500 }}>
                            {__('Overlay Opacity', 'maw-blocks')}
                        </label>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={overlayOpacity}
                                onChange={(e) => setAttributes({ overlayOpacity: parseFloat(e.target.value) })}
                                style={{ flex: 1 }}
                            />
                            <span style={{ fontSize: '13px', fontWeight: 500, minWidth: '35px' }}>
                                {Math.round(overlayOpacity * 100)}%
                            </span>
                        </div>
                    </div>
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                {!coverImageUrl ? (
                    <div className="maw-video-modal__placeholder">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectCover}
                                allowedTypes={['image']}
                                value={coverImageId}
                                render={({ open }) => (
                                    <Button onClick={open} variant="primary">
                                        {__('Select Cover Image', 'maw-blocks')}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                    </div>
                ) : (
                    <div className={elementClass('video-modal', 'trigger')}>
                        <img
                            className={elementClass('video-modal', 'cover')}
                            src={coverImageUrl}
                            alt={coverImageAlt}
                        />
                        {useInnerBlocks ? (
                            <div className={elementClass('video-modal', 'overlay')}>
                                <InnerBlocks
                                    renderAppender={InnerBlocks.ButtonBlockAppender}
                                />
                            </div>
                        ) : (
                            showPlayIcon && (
                                <div className={elementClass('video-modal', 'overlay')}>
                                    <div className={`${elementClass('video-modal', 'play-button')} ${elementClass('video-modal', 'play-button', { [playIconStyle]: true })}`}>
                                        {PlayIcons[playIconStyle]}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                )}

                {/* Video source indicator */}
                <div className="maw-video-modal__info">
                    {videoSource === 'self-hosted' ? (
                        videoUrl ? `📹 ${videoUrl.split('/').pop()}` : '⚠️ No video selected'
                    ) : (
                        youtubeId ? `▶️ YouTube: ${youtubeId}` : '⚠️ No YouTube URL'
                    )}
                </div>
            </div>
        </>
    );
}
