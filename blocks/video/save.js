/**
 * Video Block Save Component
 */

import { useBlockProps } from '@wordpress/block-editor';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';

export default function save({ attributes }) {
    const {
        videoUrl,
        posterUrl,
        autoplay,
        loop,
        muted,
        controls,
        playOnce,
        aspectRatio
    } = attributes;

    if (!videoUrl) {
        return null;
    }

    const blockProps = useBlockProps.save({
        className: blockClass('video', {
            'has-poster': posterUrl,
            [`aspect-${aspectRatio.replace(':', '-')}`]: aspectRatio
        }),
        'data-autoplay': autoplay,
        'data-play-once': playOnce
    });

    return (
        <div {...blockProps}>
            <div className={elementClass('video', 'wrapper')}>
                <video
                    className={elementClass('video', 'element')}
                    src={videoUrl}
                    poster={posterUrl || undefined}
                    loop={loop}
                    muted={muted}
                    controls={controls}
                    playsInline
                    preload="metadata"
                />
            </div>
        </div>
    );
}

