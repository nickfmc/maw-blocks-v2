/**
 * Video Block Edit Component
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, Button, TextControl } from '@wordpress/components';
import { blockClass } from '../../src/shared/utils/classnames';

export default function Edit({ attributes, setAttributes }) {
    const {
        videoUrl,
        videoId,
        posterUrl,
        posterId,
        autoplay,
        loop,
        muted,
        controls,
        playOnce,
        aspectRatio
    } = attributes;

    const blockProps = useBlockProps({
        className: blockClass('video', {
            'has-video': videoUrl,
            'has-poster': posterUrl
        }),
        'data-block-version': '1.0.0'
    });

    const onSelectVideo = (media) => {
        setAttributes({
            videoUrl: media.url,
            videoId: media.id
        });
    };

    const onSelectPoster = (media) => {
        setAttributes({
            posterUrl: media.url,
            posterId: media.id
        });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Video Settings', 'maw-blocks')} initialOpen={true}>
                    <ToggleControl
                        label={__('Autoplay on Viewport', 'maw-blocks')}
                        help={__('Play video when it enters the viewport', 'maw-blocks')}
                        checked={autoplay}
                        onChange={(value) => setAttributes({ autoplay: value })}
                    />
                    {autoplay && (
                        <ToggleControl
                            label={__('Play Once', 'maw-blocks')}
                            help={__('Play video only once (not on every scroll)', 'maw-blocks')}
                            checked={playOnce}
                            onChange={(value) => setAttributes({ playOnce: value })}
                        />
                    )}
                    <ToggleControl
                        label={__('Loop', 'maw-blocks')}
                        checked={loop}
                        onChange={(value) => setAttributes({ loop: value })}
                    />
                    <ToggleControl
                        label={__('Muted', 'maw-blocks')}
                        help={__('Recommended for autoplay', 'maw-blocks')}
                        checked={muted}
                        onChange={(value) => setAttributes({ muted: value })}
                    />
                    <ToggleControl
                        label={__('Show Controls', 'maw-blocks')}
                        checked={controls}
                        onChange={(value) => setAttributes({ controls: value })}
                    />
                    <SelectControl
                        label={__('Aspect Ratio', 'maw-blocks')}
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

                <PanelBody title={__('Poster Image', 'maw-blocks')} initialOpen={false}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectPoster}
                            allowedTypes={['image']}
                            value={posterId}
                            render={({ open }) => (
                                <Button
                                    onClick={open}
                                    variant="secondary"
                                    style={{ marginBottom: '10px', width: '100%' }}
                                >
                                    {posterUrl ? __('Change Poster', 'maw-blocks') : __('Select Poster', 'maw-blocks')}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                    {posterUrl && (
                        <>
                            <img src={posterUrl} alt="" style={{ maxWidth: '100%', marginBottom: '10px' }} />
                            <Button
                                onClick={() => setAttributes({ posterUrl: '', posterId: null })}
                                variant="link"
                                isDestructive
                            >
                                {__('Remove Poster', 'maw-blocks')}
                            </Button>
                        </>
                    )}
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                {!videoUrl ? (
                    <div>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectVideo}
                                allowedTypes={['video']}
                                value={videoId}
                                render={({ open }) => (
                                    <div className="maw-video__placeholder">
                                        <Button onClick={open} variant="primary">
                                            {__('Select Video', 'maw-blocks')}
                                        </Button>
                                    </div>
                                )}
                            />
                        </MediaUploadCheck>
                        <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #ddd' }}>
                            <TextControl
                                label={__('Or enter video URL manually', 'maw-blocks')}
                                value={videoUrl}
                                onChange={(value) => setAttributes({ videoUrl: value, videoId: null })}
                                placeholder="https://example.com/video.mp4 or {{mpg_video_url}}"
                                help={__('Supports MPG variables for dynamic content', 'maw-blocks')}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="maw-video__wrapper">
                        <video
                            className="maw-video__element"
                            src={videoUrl}
                            poster={posterUrl}
                            controls={controls}
                            loop={loop}
                            muted={muted}
                            playsInline
                        />
                        <Button
                            onClick={() => setAttributes({ videoUrl: '', videoId: null })}
                            variant="link"
                            isDestructive
                            style={{ marginTop: '10px' }}
                        >
                            {__('Remove Video', 'maw-blocks')}
                        </Button>
                        <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #ddd' }}>
                            <TextControl
                                label={__('Or enter video URL manually', 'maw-blocks')}
                                value={videoUrl}
                                onChange={(value) => setAttributes({ videoUrl: value, videoId: null })}
                                placeholder="https://example.com/video.mp4 or {{mpg_video_url}}"
                                help={__('Supports MPG variables for dynamic content', 'maw-blocks')}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

