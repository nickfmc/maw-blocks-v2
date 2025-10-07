import { useBlockProps } from '@wordpress/block-editor';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';

export default function Save({ attributes }) {
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

    const blockProps = useBlockProps.save({
        className: blockClass('logo-carousel', {
            'pause-on-hover': pauseOnHover,
            [`direction-${direction}`]: true
        }),
        'data-speed': speed,
        'data-direction': direction,
        'data-pause-on-hover': pauseOnHover,
        'data-logos-in-view': logosInView,
        'data-logos-in-view-tablet': logosInViewTablet,
        'data-logos-in-view-mobile': logosInViewMobile,
        'data-logo-height': logoHeight,
        'data-spacing': spacing
    });

    if (logos.length === 0) {
        return null;
    }

    return (
        <div {...blockProps}>
            <div className={elementClass('logo-carousel', 'container')}>
                <div className={elementClass('logo-carousel', 'wrapper')}>
                    <div className={elementClass('logo-carousel', 'track')}>
                        {logos.map((logo, index) => (
                            <div
                                key={`${logo.id}-${index}`}
                                className={elementClass('logo-carousel', 'item')}
                            >
                                <img
                                    src={logo.url}
                                    alt={logo.alt}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
