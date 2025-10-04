<?php
/**
 * Supabase Sync
 *
 * Handles syncing settings with Supabase
 *
 * @package MAW_Blocks
 */

if (!defined('ABSPATH')) {
    exit;
}

class MAW_Blocks_Supabase_Sync {

    /**
     * Push settings to Supabase
     */
    public static function push_settings() {
        if (!MAW_Blocks_Settings_Manager::is_supabase_configured()) {
            return new WP_Error('not_configured', __('Supabase is not configured', 'maw-blocks'));
        }

        $config = MAW_Blocks_Settings_Manager::get_supabase_config();
        $settings = MAW_Blocks_Settings_Manager::export_settings();
        $settings['site_url'] = get_site_url();

        $response = wp_remote_post($config['url'] . '/rest/v1/maw_blocks_settings', [
            'headers' => [
                'apikey' => $config['key'],
                'Authorization' => 'Bearer ' . $config['key'],
                'Content-Type' => 'application/json',
                'Prefer' => 'resolution=merge-duplicates'
            ],
            'body' => json_encode($settings),
            'timeout' => 30
        ]);

        if (is_wp_error($response)) {
            return $response;
        }

        $code = wp_remote_retrieve_response_code($response);
        if ($code !== 200 && $code !== 201) {
            return new WP_Error('sync_failed', __('Failed to push settings to Supabase', 'maw-blocks'));
        }

        return true;
    }

    /**
     * Pull settings from Supabase
     */
    public static function pull_settings() {
        if (!MAW_Blocks_Settings_Manager::is_supabase_configured()) {
            return new WP_Error('not_configured', __('Supabase is not configured', 'maw-blocks'));
        }

        $config = MAW_Blocks_Settings_Manager::get_supabase_config();
        $site_url = urlencode(get_site_url());

        $response = wp_remote_get($config['url'] . '/rest/v1/maw_blocks_settings?site_url=eq.' . $site_url, [
            'headers' => [
                'apikey' => $config['key'],
                'Authorization' => 'Bearer ' . $config['key']
            ],
            'timeout' => 30
        ]);

        if (is_wp_error($response)) {
            return $response;
        }

        $code = wp_remote_retrieve_response_code($response);
        if ($code !== 200) {
            return new WP_Error('sync_failed', __('Failed to pull settings from Supabase', 'maw-blocks'));
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);
        if (empty($body) || !is_array($body)) {
            return new WP_Error('no_data', __('No settings found in Supabase', 'maw-blocks'));
        }

        $settings = $body[0];
        return MAW_Blocks_Settings_Manager::import_settings($settings);
    }
}

