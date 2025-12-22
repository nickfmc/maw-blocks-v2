/**
 * Video Modal Block Save Component
 */

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';

// Play icon SVG markup for save (as raw strings for dangerouslySetInnerHTML)
const PlayIconMarkup = {
    filled: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="maw-video-modal__play-icon"><circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.9"/><path fill="#fff" d="M10 8l6 4-6 4V8z"/></svg>`,
    outline: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="maw-video-modal__play-icon"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path fill="currentColor" d="M10 8l6 4-6 4V8z"/></svg>`,
    minimal: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="maw-video-modal__play-icon"><path fill="currentColor" d="M8 5v14l11-7L8 5z"/></svg>`
};

// YouTube URL parser
const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export default function save({ attributes }) {
    const {
        videoSource,
        videoUrl,
        youtubeUrl,
        embedCode,
        coverImageUrl,
        coverImageAlt,
        showPlayIcon,
        playIconStyle,
        playIconSize,
        useInnerBlocks,
        aspectRatio,
        modalSize,
        autoplay,
        overlayColor,
        overlayOpacity,
        externalTriggerId,
        disableCoverTrigger
    } = attributes;

    // Don't render if no cover image
    if (!coverImageUrl) {
        return null;
    }

    // Don't render if no video source
    const hasVideo = videoSource === 'self-hosted' ? videoUrl : (videoSource === 'youtube' ? getYouTubeId(youtubeUrl) : embedCode);
    if (!hasVideo) {
        return null;
    }

    const youtubeId = getYouTubeId(youtubeUrl);

    const blockProps = useBlockProps.save({
        className: blockClass('video-modal', {
            'has-cover': coverImageUrl,
            [`icon-${playIconSize}`]: showPlayIcon && playIconSize,
            [`modal-${modalSize}`]: modalSize
        }),
        'data-video-source': videoSource,
        'data-video-url': videoSource === 'self-hosted' ? videoUrl : '',
        'data-youtube-id': youtubeId || '',
        'data-embed-code': videoSource === 'embed' ? embedCode : '',
        'data-aspect-ratio': aspectRatio,
        'data-modal-size': modalSize,
        'data-autoplay': autoplay,
        'data-overlay-color': overlayColor,
        'data-overlay-opacity': overlayOpacity,
        'data-external-trigger-id': externalTriggerId || '',
        'data-disable-cover-trigger': disableCoverTrigger
    });

    return (
        <div {...blockProps}>
            <div
                className={elementClass('video-modal', 'trigger')}
                role="button"
                tabIndex="0"
                aria-label="Play video"
            >
                <img
                    className={elementClass('video-modal', 'cover')}
                    src={coverImageUrl}
                    alt={coverImageAlt || 'Video thumbnail'}
                    loading="lazy"
                    draggable="false"
                />
                {useInnerBlocks ? (
                    <div className={elementClass('video-modal', 'overlay')}>
                        <InnerBlocks.Content />
                    </div>
                ) : (
                    showPlayIcon && (
                        <div className={elementClass('video-modal', 'overlay')}>
                            <span
                                className={`${elementClass('video-modal', 'play-button')} ${elementClass('video-modal', 'play-button', { [playIconStyle]: true })}`}
                                dangerouslySetInnerHTML={{ __html: PlayIconMarkup[playIconStyle] }}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
