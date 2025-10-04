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
     * Get Supabase configuration
     */
    public static function get_supabase_config() {
        return [
            'url' => get_option('maw_blocks_supabase_url', ''),
            'key' => get_option('maw_blocks_supabase_key', '')
        ];
    }

    /**
     * Check if Supabase is configured
     */
    public static function is_supabase_configured() {
        $config = self::get_supabase_config();
        return !empty($config['url']) && !empty($config['key']);
    }

    /**
     * Export settings
     */
    public static function export_settings() {
        return [
            'enabled_blocks' => get_option('maw_blocks_enabled', []),
            'global_defaults' => get_option('maw_blocks_global_defaults', []),
            'version' => MAW_BLOCKS_VERSION,
            'exported_at' => current_time('mysql')
        ];
    }

    /**
     * Import settings
     */
    public static function import_settings($settings) {
        if (!is_array($settings)) {
            return false;
        }

        if (isset($settings['enabled_blocks'])) {
            update_option('maw_blocks_enabled', $settings['enabled_blocks']);
        }

        if (isset($settings['global_defaults'])) {
            update_option('maw_blocks_global_defaults', $settings['global_defaults']);
        }

        return true;
    }
}

