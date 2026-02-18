/**
 * Edit component for Google Map block
 *
 * @package MAW_Blocks
 */

import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    RangeControl,
    ToggleControl,
    SelectControl,
    TextareaControl,
    Notice
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';

export default function Edit({ attributes, setAttributes }) {
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
        disableUI,
        disableDefaultUI,
        zoomControl,
        streetViewControl,
        mapTypeControl,
        fullscreenControl
    } = attributes;

    const [geocodeError, setGeocodeError] = useState('');

    const blockProps = useBlockProps({
        className: blockClass('google-map', {
            'has-marker': showMarker,
            'ui-disabled': disableUI || disableDefaultUI
        }),
        style: {
            height: height + 'px',
            minHeight: '300px'
        }
    });

    // Handle address geocoding
    const handleAddressChange = async (newAddress) => {
        setAttributes({ address: newAddress });
        
        if (newAddress && window.google && window.google.maps) {
            const geocoder = new window.google.maps.Geocoder();
            try {
                const results = await new Promise((resolve, reject) => {
                    geocoder.geocode({ address: newAddress }, (results, status) => {
                        if (status === 'OK') {
                            resolve(results);
                        } else {
                            reject(status);
                        }
                    });
                });

                if (results && results[0]) {
                    const location = results[0].geometry.location;
                    setAttributes({
                        latitude: String(location.lat()),
                        longitude: String(location.lng())
                    });
                    setGeocodeError('');
                }
            } catch (error) {
                setGeocodeError(__('Could not find address. Please try a different address or set coordinates manually.', 'maw-blocks'));
            }
        }
    };

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={__('Map Location', 'maw-blocks')} initialOpen={true}>
                    <TextControl
                        label={__('Address', 'maw-blocks')}
                        value={address}
                        onChange={handleAddressChange}
                        help={__('Enter an address to automatically set coordinates, or leave blank to use manual coordinates.', 'maw-blocks')}
                    />
                    
                    {geocodeError && (
                        <Notice status="warning" isDismissible={false}>
                            {geocodeError}
                        </Notice>
                    )}

                    <div style={{ display: 'flex', gap: '10px' }}>
                        <TextControl
                            label={__('Latitude', 'maw-blocks')}
                            type="text"
                            value={latitude}
                            onChange={(value) => setAttributes({ latitude: value })}
                            placeholder="40.7589 or {{mpg_lat}}"
                            help={__('Supports MPG variables', 'maw-blocks')}
                        />
                        <TextControl
                            label={__('Longitude', 'maw-blocks')}
                            type="text"
                            value={longitude}
                            onChange={(value) => setAttributes({ longitude: value })}
                            placeholder="-73.9851 or {{mpg_long}}"
                            help={__('Supports MPG variables', 'maw-blocks')}
                        />
                    </div>

                    <RangeControl
                        label={__('Zoom Level', 'maw-blocks')}
                        value={zoom}
                        onChange={(value) => setAttributes({ zoom: value })}
                        min={1}
                        max={20}
                        step={1}
                        help={__('1 = World view, 20 = Building view', 'maw-blocks')}
                    />
                </PanelBody>

                <PanelBody title={__('Map Appearance', 'maw-blocks')} initialOpen={false}>
                    <RangeControl
                        label={__('Height (px)', 'maw-blocks')}
                        value={height}
                        onChange={(value) => setAttributes({ height: value })}
                        min={200}
                        max={800}
                        step={10}
                    />

                    <SelectControl
                        label={__('Map Type', 'maw-blocks')}
                        value={mapType}
                        options={[
                            { label: __('Roadmap', 'maw-blocks'), value: 'roadmap' },
                            { label: __('Satellite', 'maw-blocks'), value: 'satellite' },
                            { label: __('Hybrid', 'maw-blocks'), value: 'hybrid' },
                            { label: __('Terrain', 'maw-blocks'), value: 'terrain' }
                        ]}
                        onChange={(value) => setAttributes({ mapType: value })}
                    />

                    <TextareaControl
                        label={__('Custom Map Styles (JSON)', 'maw-blocks')}
                        value={customStyles}
                        onChange={(value) => setAttributes({ customStyles: value })}
                        help={__('Enter Snazzy Maps JSON styles to customize the map appearance. Leave blank to use default styles from plugin settings.', 'maw-blocks')}
                        rows={4}
                    />
                </PanelBody>

                <PanelBody title={__('Marker Settings', 'maw-blocks')} initialOpen={false}>
                    <ToggleControl
                        label={__('Show Marker', 'maw-blocks')}
                        checked={showMarker}
                        onChange={(value) => setAttributes({ showMarker: value })}
                    />

                    {showMarker && (
                        <TextControl
                            label={__('Marker Title', 'maw-blocks')}
                            value={markerTitle}
                            onChange={(value) => setAttributes({ markerTitle: value })}
                            help={__('Text to display when the marker is clicked.', 'maw-blocks')}
                        />
                    )}
                </PanelBody>

                <PanelBody title={__('Map Controls', 'maw-blocks')} initialOpen={false}>
                    <ToggleControl
                        label={__('Disable All UI', 'maw-blocks')}
                        checked={disableDefaultUI}
                        onChange={(value) => setAttributes({ disableDefaultUI: value })}
                        help={__('Disable all default map controls and UI elements.', 'maw-blocks')}
                    />

                    {!disableDefaultUI && (
                        <>
                            <ToggleControl
                                label={__('Show Zoom Controls', 'maw-blocks')}
                                checked={zoomControl}
                                onChange={(value) => setAttributes({ zoomControl: value })}
                            />

                            <ToggleControl
                                label={__('Show Street View Control', 'maw-blocks')}
                                checked={streetViewControl}
                                onChange={(value) => setAttributes({ streetViewControl: value })}
                            />

                            <ToggleControl
                                label={__('Show Map Type Control', 'maw-blocks')}
                                checked={mapTypeControl}
                                onChange={(value) => setAttributes({ mapTypeControl: value })}
                            />

                            <ToggleControl
                                label={__('Show Fullscreen Control', 'maw-blocks')}
                                checked={fullscreenControl}
                                onChange={(value) => setAttributes({ fullscreenControl: value })}
                            />
                        </>
                    )}
                </PanelBody>
            </InspectorControls>

            <div className={elementClass('google-map', 'preview')}>
                <div className={elementClass('google-map', 'placeholder')}>
                    <div className={elementClass('google-map', 'placeholder-content')}>
                        <span className={elementClass('google-map', 'icon')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                        </span>
                        <h3>{__('Google Map Preview', 'maw-blocks')}</h3>
                        {(String(latitude).includes('{{') || String(longitude).includes('{{')) ? (
                            <div className={elementClass('google-map', 'details')}>
                                <p style={{ color: '#10b981', fontWeight: '500', marginBottom: '8px' }}>
                                    ✓ {__('MPG Variables Detected', 'maw-blocks')}
                                </p>
                                <p><strong>{__('Latitude:', 'maw-blocks')}</strong> {latitude}</p>
                                <p><strong>{__('Longitude:', 'maw-blocks')}</strong> {longitude}</p>
                                <p style={{ fontSize: '12px', color: '#666', marginTop: '12px' }}>
                                    {__('The map will display with actual coordinates when Multiple Pages Generator processes this page.', 'maw-blocks')}
                                </p>
                            </div>
                        ) : (
                            <div className={elementClass('google-map', 'details')}>
                                {address && (
                                    <p><strong>{__('Address:', 'maw-blocks')}</strong> {address}</p>
                                )}
                                <p><strong>{__('Coordinates:', 'maw-blocks')}</strong> {parseFloat(latitude).toFixed(4)}, {parseFloat(longitude).toFixed(4)}</p>
                                <p><strong>{__('Zoom:', 'maw-blocks')}</strong> {zoom}</p>
                                <p><strong>{__('Type:', 'maw-blocks')}</strong> {mapType}</p>
                                {showMarker && markerTitle && (
                                    <p><strong>{__('Marker:', 'maw-blocks')}</strong> {markerTitle}</p>
                                )}
                            </div>
                        )}
                        <p className={elementClass('google-map', 'note')}>
                            {__('The interactive map will be displayed on the frontend when Google Maps API key is configured.', 'maw-blocks')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}