/**
 * Google Map Block Deprecations
 * 
 * Handles backward compatibility when block attributes change
 * 
 * @package MAW_Blocks
 */

import { useBlockProps } from '@wordpress/block-editor';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';

/**
 * Version 1: Original block with number type for latitude/longitude
 * Deprecated to support MPG variables (requires string type)
 */
const v1 = {
    attributes: {
        latitude: {
            type: 'number',
            default: 40.7589
        },
        longitude: {
            type: 'number',
            default: -73.9851
        },
        zoom: {
            type: 'number',
            default: 13
        },
        height: {
            type: 'number',
            default: 400
        },
        address: {
            type: 'string',
            default: ''
        },
        mapType: {
            type: 'string',
            default: 'roadmap',
            enum: ['roadmap', 'satellite', 'hybrid', 'terrain']
        },
        showMarker: {
            type: 'boolean',
            default: true
        },
        markerTitle: {
            type: 'string',
            default: ''
        },
        customStyles: {
            type: 'string',
            default: ''
        },
        disableUI: {
            type: 'boolean',
            default: false
        },
        disableDefaultUI: {
            type: 'boolean',
            default: false
        },
        zoomControl: {
            type: 'boolean',
            default: true
        },
        streetViewControl: {
            type: 'boolean',
            default: true
        },
        mapTypeControl: {
            type: 'boolean',
            default: true
        },
        fullscreenControl: {
            type: 'boolean',
            default: true
        }
    },
    
    save({ attributes }) {
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
                    data-address={address}
                    data-map-type={mapType}
                    data-show-marker={showMarker}
                    data-marker-title={markerTitle}
                    data-custom-styles={customStyles}
                    data-disable-default-ui={disableDefaultUI}
                    data-zoom-control={zoomControl}
                    data-street-view-control={streetViewControl}
                    data-map-type-control={mapTypeControl}
                    data-fullscreen-control={fullscreenControl}
                >
                    <div className={elementClass('google-map', 'placeholder')}>
                        <span className={elementClass('google-map', 'icon')}>📍</span>
                        <p>{address || `${latitude}, ${longitude}`}</p>
                    </div>
                </div>
            </div>
        );
    },
    
    migrate(attributes) {
        // Convert number coordinates to strings for MPG compatibility
        return {
            ...attributes,
            latitude: String(attributes.latitude),
            longitude: String(attributes.longitude)
        };
    }
};

export default [v1];
