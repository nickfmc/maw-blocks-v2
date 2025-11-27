/**
 * Google Map Block - Frontend JavaScript
 *
 * @package MAW_Blocks
 */

class MAWGoogleMapController {
    constructor() {
        this.maps = [];
        this.apiLoaded = false;
        this.apiKey = '';
        this.defaultStyles = '';
        
        this.init();
    }

    async init() {
        // Get API settings from PHP
        await this.loadSettings();
        
        if (!this.apiKey) {
            this.showError('Google Maps API key not configured. Please check plugin settings.');
            return;
        }

        // Load Google Maps API
        await this.loadGoogleMapsAPI();
        
        // Initialize all maps on the page
        this.initializeMaps();
    }

    async loadSettings() {
        try {
            // Try to get settings from localized script
            if (window.mawGoogleMapsSettings) {
                this.apiKey = window.mawGoogleMapsSettings.apiKey;
                this.defaultStyles = window.mawGoogleMapsSettings.defaultStyles;
            } else {
                // Fallback: make AJAX request to get settings
                const response = await fetch(window.location.origin + '/wp-admin/admin-ajax.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: 'action=maw_blocks_get_google_maps_settings'
                });
                
                if (response.ok) {
                    const data = await response.json();
                    if (data.success) {
                        this.apiKey = data.data.apiKey;
                        this.defaultStyles = data.data.defaultStyles;
                    }
                }
            }
        } catch (error) {
            console.error('MAW Google Map: Failed to load settings', error);
        }
    }

    async loadGoogleMapsAPI() {
        return new Promise((resolve, reject) => {
            // Check if Google Maps is already loaded
            if (window.google && window.google.maps) {
                this.apiLoaded = true;
                resolve();
                return;
            }

            // Check if script is already being loaded
            if (document.querySelector('script[src*="maps.googleapis.com"]')) {
                // Wait for it to load
                const checkLoaded = setInterval(() => {
                    if (window.google && window.google.maps) {
                        this.apiLoaded = true;
                        clearInterval(checkLoaded);
                        resolve();
                    }
                }, 100);
                return;
            }

            // Load the API
            window.mawGoogleMapsInit = () => {
                this.apiLoaded = true;
                resolve();
            };

            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=mawGoogleMapsInit`;
            script.onerror = () => {
                reject(new Error('Failed to load Google Maps API'));
            };
            
            document.head.appendChild(script);
        });
    }

    initializeMaps() {
        const mapContainers = document.querySelectorAll('.maw-google-map__container');
        
        mapContainers.forEach((container, index) => {
            try {
                this.initializeMap(container, index);
            } catch (error) {
                console.error('MAW Google Map: Failed to initialize map', error);
                this.showError('Failed to initialize map', container);
            }
        });
    }

    initializeMap(container, index) {
        // Get map configuration from data attributes
        const config = {
            latitude: parseFloat(container.dataset.latitude) || 40.7589,
            longitude: parseFloat(container.dataset.longitude) || -73.9851,
            zoom: parseInt(container.dataset.zoom) || 13,
            mapType: container.dataset.mapType || 'roadmap',
            showMarker: container.dataset.showMarker === 'true',
            markerTitle: container.dataset.markerTitle || '',
            customStyles: container.dataset.customStyles || '',
            disableDefaultUI: container.dataset.disableDefaultUi === 'true',
            zoomControl: container.dataset.zoomControl !== 'false',
            streetViewControl: container.dataset.streetViewControl !== 'false',
            mapTypeControl: container.dataset.mapTypeControl !== 'false',
            fullscreenControl: container.dataset.fullscreenControl !== 'false',
            address: container.dataset.address || ''
        };

        // Create map container div
        const mapDiv = document.createElement('div');
        mapDiv.className = 'google-map';
        mapDiv.id = `maw-google-map-${index}`;
        mapDiv.style.width = '100%';
        mapDiv.style.height = '100%';

        // Parse custom styles
        let styles = [];
        if (config.customStyles) {
            try {
                styles = JSON.parse(config.customStyles);
            } catch (error) {
                console.warn('MAW Google Map: Invalid custom styles JSON', error);
            }
        } else if (this.defaultStyles) {
            try {
                styles = JSON.parse(this.defaultStyles);
            } catch (error) {
                console.warn('MAW Google Map: Invalid default styles JSON', error);
            }
        }

        // Map options
        const mapOptions = {
            center: { lat: config.latitude, lng: config.longitude },
            zoom: config.zoom,
            mapTypeId: config.mapType,
            disableDefaultUI: config.disableDefaultUI,
            zoomControl: config.disableDefaultUI ? false : config.zoomControl,
            streetViewControl: config.disableDefaultUI ? false : config.streetViewControl,
            mapTypeControl: config.disableDefaultUI ? false : config.mapTypeControl,
            fullscreenControl: config.disableDefaultUI ? false : config.fullscreenControl,
            styles: styles.length > 0 ? styles : undefined
        };

        // Create the map
        const map = new google.maps.Map(mapDiv, mapOptions);

        // Add marker if requested
        if (config.showMarker) {
            const marker = new google.maps.Marker({
                position: { lat: config.latitude, lng: config.longitude },
                map: map,
                title: config.markerTitle
            });

            // Add info window if marker title is provided
            if (config.markerTitle) {
                const infoWindow = new google.maps.InfoWindow({
                    content: config.markerTitle
                });

                marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                });
            }
        }

        // Replace loading placeholder with map
        container.innerHTML = '';
        container.appendChild(mapDiv);

        // Store map instance
        this.maps.push({
            container: container,
            map: map,
            config: config
        });

        // Trigger resize to ensure proper rendering
        setTimeout(() => {
            google.maps.event.trigger(map, 'resize');
        }, 100);
    }

    showError(message, container = null) {
        const errorHTML = `
            <div class="maw-google-map__error">
                <p>${message}</p>
            </div>
        `;

        if (container) {
            container.innerHTML = errorHTML;
        } else {
            // Show error in all map containers
            document.querySelectorAll('.maw-google-map__container').forEach(container => {
                container.innerHTML = errorHTML;
            });
        }
    }

    // Public method to refresh all maps (useful for dynamic content)
    refreshMaps() {
        this.maps.forEach(mapInstance => {
            if (mapInstance.map) {
                google.maps.event.trigger(mapInstance.map, 'resize');
            }
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.mawGoogleMapController = new MAWGoogleMapController();
    });
} else {
    window.mawGoogleMapController = new MAWGoogleMapController();
}

// Initialize for dynamically added maps
window.mawInitializeGoogleMaps = () => {
    if (window.mawGoogleMapController) {
        window.mawGoogleMapController.initializeMaps();
    }
};