/**
 * Save component for Google Map block
 *
 * @package MAW_Blocks
 */

import { useBlockProps } from '@wordpress/block-editor';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';

export default function save({ attributes }) {
    const {
        latitude,
        longitude,
        zoom,
        height,
        address,
        mapType,
        showMarker,
        markerTitle,
        customStyles,
        disableDefaultUI,
        zoomControl,
        streetViewControl,
        mapTypeControl,
        fullscreenControl
    } = attributes;

    const blockProps = useBlockProps.save({
        className: blockClass('google-map', {
            'has-marker': showMarker,
            'ui-disabled': disableDefaultUI
        }),
        style: {
            height: height + 'px'
        }
    });

    return (
        <div {...blockProps}>
            <div
                className={elementClass('google-map', 'container')}
                data-latitude={latitude}
                data-longitude={longitude}
                data-zoom={zoom}
                data-map-type={mapType}
                data-show-marker={showMarker}
                data-marker-title={markerTitle}
                data-custom-styles={customStyles}
                data-disable-default-ui={disableDefaultUI}
                data-zoom-control={zoomControl}
                data-street-view-control={streetViewControl}
                data-map-type-control={mapTypeControl}
                data-fullscreen-control={fullscreenControl}
                data-address={address}
            >
                {/* Loading placeholder */}
                <div className={elementClass('google-map', 'loading')}>
                    <div className={elementClass('google-map', 'loading-content')}>
                        <div className={elementClass('google-map', 'spinner')}></div>
                        <p>Loading map...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}