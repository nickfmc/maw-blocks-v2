<?php
/**
 * Settings Manager
 *
 * Handles plugin settings and global defaults
 *
 * @package MAW_Blocks
 */

if (!defined('ABSPATH')) {
    exit;
}

class MAW_Blocks_Settings_Manager {

    /**
     * Get global defaults for a block
     */
    public static function get_block_defaults($block_id) {
        $all_defaults = get_option('maw_blocks_global_defaults', []);
        return isset($all_defaults[$block_id]) ? $all_defaults[$block_id] : [];
    }

    /**
     * Update global defaults for a block
     */
    public static function update_block_defaults($block_id, $defaults) {
        $all_defaults = get_option('maw_blocks_global_defaults', []);
        $all_defaults[$block_id] = $defaults;
        update_option('maw_blocks_global_defaults', $all_defaults);
    }

    /**
     * Get global arrow settings
     */
    public static function get_arrow_settings() {
        $defaults = [
            'left_arrow' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
            'right_arrow' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
        ];
        
        $saved_settings = get_option('maw_blocks_arrow_settings', []);
        return wp_parse_args($saved_settings, $defaults);
    }

    /**
     * Update global arrow settings
     */
    public static function update_arrow_settings($settings) {
        return update_option('maw_blocks_arrow_settings', $settings);
    }

    /**
     * Get Google Maps configuration
     */
    public static function get_google_maps_config() {
        return [
            'api_key' => get_option('maw_blocks_google_maps_api_key', ''),
            'snazzy_styles' => get_option('maw_blocks_google_maps_snazzy_styles', '')
        ];
    }

    /**
     * Check if Google Maps is configured
     */
    public static function is_google_maps_configured() {
        $config = self::get_google_maps_config();
        return !empty($config['api_key']);
    }

    /**
     * Update Google Maps configuration
     */
    public static function update_google_maps_config($config) {
        update_option('maw_blocks_google_maps_api_key', sanitize_text_field($config['api_key']));
        update_option('maw_blocks_google_maps_snazzy_styles', wp_kses_post($config['snazzy_styles']));
        return true;
    }
}

