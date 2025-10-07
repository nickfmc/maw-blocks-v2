<?php
/**
 * Plugin Name: MAW Blocks
 * Plugin URI: https://github.com/yourusername/maw-blocks
 * Description: Feature-rich, style-light Gutenberg blocks for custom WordPress solutions. Enable only what you need, style everything your way.
 * Version: 1.0.0
 * Author: Nick M
 * Author URI: https://yourwebsite.com
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: maw-blocks
 * Domain Path: /languages
 *
 * @package MAW_Blocks
 */
 
if (!defined('ABSPATH')) {
    exit;
}

define('MAW_BLOCKS_VERSION', '1.0.0');
define('MAW_BLOCKS_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('MAW_BLOCKS_PLUGIN_URL', plugin_dir_url(__FILE__));
define('MAW_BLOCKS_PLUGIN_FILE', __FILE__);

/**
 * Main MAW_Blocks class
 */
class MAW_Blocks {

    /**
     * Instance of this class
     */
    private static $instance = null;

    /**
     * Available blocks registry
     */
    private $available_blocks = [];

    /**
     * Enabled blocks cache
     */
    private $enabled_blocks = null;

    /**
     * Get instance
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor
     */
    private function __construct() {
        $this->init_hooks();
        $this->load_dependencies();
        $this->register_available_blocks();
    }

    /**
     * Initialize hooks
     */
    private function init_hooks() {
        add_filter('block_categories_all', [$this, 'register_block_category'], 10, 1);
        add_action('init', [$this, 'register_blocks']);
        add_action('enqueue_block_assets', [$this, 'enqueue_block_assets']);
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets']);
        add_action('admin_menu', [$this, 'add_settings_page']);
        add_action('admin_init', [$this, 'register_settings']);
        add_action('wp_footer', [$this, 'debug_enqueued_scripts'], 999);
    }

    /**
     * Load plugin dependencies
     */
    private function load_dependencies() {
        require_once MAW_BLOCKS_PLUGIN_DIR . 'includes/class-block-registry.php';
        require_once MAW_BLOCKS_PLUGIN_DIR . 'includes/class-settings-manager.php';
        require_once MAW_BLOCKS_PLUGIN_DIR . 'includes/class-asset-loader.php';
        require_once MAW_BLOCKS_PLUGIN_DIR . 'includes/class-supabase-sync.php';
    }

    /**
     * Register block category
     */
    public function register_block_category($categories) {
        return array_merge(
            $categories,
            [
                [
                    'slug' => 'maw-blocks',
                    'title' => __('MAW Blocks', 'maw-blocks'),
                    'icon' => null,
                ],
            ]
        );
    }

    /**
     * Register available blocks in the plugin
     */
    private function register_available_blocks() {
        $this->available_blocks = [
            'video' => [
                'name' => 'maw-blocks/video',
                'title' => 'MAW Video',
                'description' => 'Viewport-aware video player with autoplay on scroll',
                'icon' => 'video-alt3',
                'category' => 'maw-blocks',
                'path' => 'blocks/video'
            ],
            'slider' => [
                'name' => 'maw-blocks/slider',
                'title' => 'MAW Slider',
                'description' => 'General purpose slider with flexible content',
                'icon' => 'images-alt2',
                'category' => 'maw-blocks',
                'path' => 'blocks/slider'
            ],
            'testimonial-slider' => [
                'name' => 'maw-blocks/testimonial-slider',
                'title' => 'MAW Testimonial Slider',
                'description' => 'Testimonial slider with configurable fields',
                'icon' => 'format-quote',
                'category' => 'maw-blocks',
                'path' => 'blocks/testimonial-slider'
            ],
            'logo-carousel' => [
                'name' => 'maw-blocks/logo-carousel',
                'title' => 'MAW Logo Carousel',
                'description' => 'Infinite NASCAR-style logo/image carousel',
                'icon' => 'images-alt',
                'category' => 'maw-blocks',
                'path' => 'blocks/logo-carousel'
            ]
        ];

        $this->available_blocks = apply_filters('maw_blocks_available_blocks', $this->available_blocks);
    }

    /**
     * Get enabled blocks
     */
    public function get_enabled_blocks() {
        if (null === $this->enabled_blocks) {
            $enabled = get_option('maw_blocks_enabled', array_keys($this->available_blocks));
            $this->enabled_blocks = is_array($enabled) ? $enabled : [];
        }
        return $this->enabled_blocks;
    }

    /**
     * Check if a block is enabled
     */
    public function is_block_enabled($block_id) {
        return in_array($block_id, $this->get_enabled_blocks(), true);
    }

    /**
     * Register blocks with WordPress
     */
    public function register_blocks() {
        foreach ($this->available_blocks as $block_id => $block_config) {
            if (!$this->is_block_enabled($block_id)) {
                continue;
            }

            $block_path = trailingslashit(MAW_BLOCKS_PLUGIN_DIR) . $block_config['path'];
            $base_dir = rtrim(MAW_BLOCKS_PLUGIN_DIR, '/\\');
            $build_path = $base_dir . DIRECTORY_SEPARATOR . 'build' . DIRECTORY_SEPARATOR . 'blocks' . DIRECTORY_SEPARATOR . $block_id;

            // Register frontend script if it exists
            $frontend_js = $build_path . DIRECTORY_SEPARATOR . 'frontend.js';

            error_log('MAW Blocks: Checking frontend.js for ' . $block_id . ': ' . $frontend_js . ' - ' . (file_exists($frontend_js) ? 'EXISTS' : 'NOT FOUND'));

            if (file_exists($frontend_js)) {
                $asset_file = $build_path . DIRECTORY_SEPARATOR . 'frontend.asset.php';
                $asset_data = file_exists($asset_file) ? require($asset_file) : ['dependencies' => [], 'version' => MAW_BLOCKS_VERSION];

                $script_handle = 'maw-blocks-' . $block_id . '-view';
                $registered = wp_register_script(
                    $script_handle,
                    trailingslashit(MAW_BLOCKS_PLUGIN_URL) . 'build/blocks/' . $block_id . '/frontend.js',
                    $asset_data['dependencies'],
                    $asset_data['version'],
                    true
                );

                error_log('MAW Blocks: Registering script ' . $script_handle . ' - ' . ($registered ? 'SUCCESS' : 'FAILED'));
                error_log('MAW Blocks: Script URL: ' . trailingslashit(MAW_BLOCKS_PLUGIN_URL) . 'build/blocks/' . $block_id . '/frontend.js');
            }

            if (file_exists($block_path . '/block.json')) {
                $registered_block = register_block_type($block_path, [
                    'render_callback' => function($attributes, $content) use ($block_id) {
                        // Enqueue the frontend script when block is rendered
                        $script_handle = 'maw-blocks-' . $block_id . '-view';
                        if (wp_script_is($script_handle, 'registered')) {
                            wp_enqueue_script($script_handle);
                        }
                        return $content;
                    }
                ]);
                error_log('MAW Blocks: Registered block ' . $block_id . ' - Type: ' . get_class($registered_block));
            }
        }
    }

    /**
     * Enqueue block assets for frontend and editor
     */
    public function enqueue_block_assets() {
        $asset_loader = new MAW_Blocks_Asset_Loader();
        $asset_loader->enqueue_frontend_assets($this->get_enabled_blocks(), $this->available_blocks);
    }

    /**
     * Enqueue editor-specific assets
     */
    public function enqueue_editor_assets() {
        wp_enqueue_style(
            'maw-blocks-editor',
            MAW_BLOCKS_PLUGIN_URL . 'build/editor.css',
            [],
            MAW_BLOCKS_VERSION
        );
    }

    /**
     * Add settings page to admin menu
     */
    public function add_settings_page() {
        add_options_page(
            __('MAW Blocks Settings', 'maw-blocks'),
            __('MAW Blocks', 'maw-blocks'),
            'manage_options',
            'maw-blocks-settings',
            [$this, 'render_settings_page']
        );
    }

    /**
     * Register plugin settings
     */
    public function register_settings() {
        register_setting('maw_blocks_settings', 'maw_blocks_enabled');
        register_setting('maw_blocks_settings', 'maw_blocks_global_defaults');
        register_setting('maw_blocks_settings', 'maw_blocks_supabase_url');
        register_setting('maw_blocks_settings', 'maw_blocks_supabase_key');
    }

    /**
     * Render settings page
     */
    public function render_settings_page() {
        require_once MAW_BLOCKS_PLUGIN_DIR . 'includes/admin/settings-page.php';
    }

    /**
     * Get available blocks
     */
    public function get_available_blocks() {
        return $this->available_blocks;
    }

    /**
     * Debug enqueued scripts
     */
    public function debug_enqueued_scripts() {
        global $wp_scripts;
        $maw_scripts = [];
        foreach ($wp_scripts->queue as $handle) {
            if (strpos($handle, 'maw-blocks') !== false) {
                $maw_scripts[] = $handle;
            }
        }
        if (!empty($maw_scripts)) {
            echo '<!-- MAW Blocks Scripts Enqueued: ' . implode(', ', $maw_scripts) . ' -->';
        } else {
            echo '<!-- MAW Blocks: No scripts enqueued -->';
        }
    }
}

/**
 * Initialize plugin
 */
function maw_blocks_init() {
    return MAW_Blocks::get_instance();
}
add_action('plugins_loaded', 'maw_blocks_init');

