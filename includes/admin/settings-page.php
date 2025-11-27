<?php
/**
 * Settings Page Template
 *
 * @package MAW_Blocks
 */

if (!defined('ABSPATH')) {
    exit;
}

$maw_blocks = MAW_Blocks::get_instance();
$available_blocks = $maw_blocks->get_available_blocks();
$enabled_blocks = get_option('maw_blocks_enabled', array_keys($available_blocks));
// Ensure $enabled_blocks is always an array
if (!is_array($enabled_blocks)) {
    $enabled_blocks = array_keys($available_blocks);
}
$global_defaults = get_option('maw_blocks_global_defaults', []);
$google_maps_api_key = get_option('maw_blocks_google_maps_api_key', '');
$google_maps_snazzy_styles = get_option('maw_blocks_google_maps_snazzy_styles', '');
?>

<div class="wrap maw-blocks-settings">
    <h1><?php echo esc_html(get_admin_page_title()); ?></h1>

    <form method="post" action="options.php">
        <?php settings_fields('maw_blocks_settings'); ?>

        <!-- Enable/Disable Blocks Section -->
        <h2><?php _e('Enable/Disable Blocks', 'maw-blocks'); ?></h2>
        <p><?php _e('Enable or disable blocks to control what is loaded on your site. Disabled blocks will not be registered or load any assets.', 'maw-blocks'); ?></p>

        <table class="form-table">
            <?php foreach ($available_blocks as $block_id => $block_config) :
                $is_enabled = in_array($block_id, $enabled_blocks);
            ?>
                <tr>
                    <th scope="row">
                        <label for="block_<?php echo esc_attr($block_id); ?>">
                            <span class="dashicons <?php echo esc_attr($block_config['icon']); ?>"></span>
                            <?php echo esc_html($block_config['title']); ?>
                        </label>
                    </th>
                    <td>
                        <label>
                            <input type="checkbox"
                                   id="block_<?php echo esc_attr($block_id); ?>"
                                   name="maw_blocks_enabled[]"
                                   value="<?php echo esc_attr($block_id); ?>"
                                   <?php checked($is_enabled); ?>>
                            <?php echo esc_html($block_config['description']); ?>
                        </label>
                    </td>
                </tr>
            <?php endforeach; ?>
        </table>

        <hr>

        <!-- Arrow Settings Section -->
        <?php $arrow_settings = MAW_Blocks_Settings_Manager::get_arrow_settings(); ?>
        <h2><?php _e('Arrow Settings', 'maw-blocks'); ?></h2>
        <p><?php _e('Customize the arrow icons used in all slider blocks. These SVG arrows will be used consistently across slider and testimonial-slider blocks.', 'maw-blocks'); ?></p>

        <table class="form-table">
            <tr>
                <th scope="row">
                    <label for="maw_blocks_left_arrow"><?php _e('Left Arrow SVG', 'maw-blocks'); ?></label>
                </th>
                <td>
                    <textarea id="maw_blocks_left_arrow" 
                              name="maw_blocks_arrow_settings[left_arrow]" 
                              class="large-text code" 
                              rows="4"><?php echo esc_textarea($arrow_settings['left_arrow']); ?></textarea>
                    <p class="description"><?php _e('SVG code for the left/previous arrow. Use "currentColor" for the fill/stroke to inherit theme colors.', 'maw-blocks'); ?></p>
                    <div class="arrow-preview">
                        <strong><?php _e('Preview:', 'maw-blocks'); ?></strong>
                        <span class="arrow-preview-icon" style="display: inline-block; width: 24px; height: 24px; margin-left: 10px;"><?php echo $arrow_settings['left_arrow']; ?></span>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <label for="maw_blocks_right_arrow"><?php _e('Right Arrow SVG', 'maw-blocks'); ?></label>
                </th>
                <td>
                    <textarea id="maw_blocks_right_arrow" 
                              name="maw_blocks_arrow_settings[right_arrow]" 
                              class="large-text code" 
                              rows="4"><?php echo esc_textarea($arrow_settings['right_arrow']); ?></textarea>
                    <p class="description"><?php _e('SVG code for the right/next arrow. Use "currentColor" for the fill/stroke to inherit theme colors.', 'maw-blocks'); ?></p>
                    <div class="arrow-preview">
                        <strong><?php _e('Preview:', 'maw-blocks'); ?></strong>
                        <span class="arrow-preview-icon" style="display: inline-block; width: 24px; height: 24px; margin-left: 10px;"><?php echo $arrow_settings['right_arrow']; ?></span>
                    </div>
                </td>
            </tr>
        </table>

        <div class="notice notice-info inline">
            <p><?php _e('<strong>Tips:</strong> Use "currentColor" in your SVG for fill or stroke attributes to automatically inherit text colors from your theme. The arrows will be sized according to your block settings.', 'maw-blocks'); ?></p>
        </div>

        <hr>

        <!-- Google Maps Settings Section -->
        <h2><?php _e('Google Maps Configuration', 'maw-blocks'); ?></h2>
        <p><?php _e('Configure Google Maps API key and Snazzy Map styles for the Google Map embed block.', 'maw-blocks'); ?></p>

        <table class="form-table">
            <tr>
                <th scope="row">
                    <label for="maw_blocks_google_maps_api_key"><?php _e('Google Maps API Key', 'maw-blocks'); ?></label>
                </th>
                <td>
                    <input type="text"
                           id="maw_blocks_google_maps_api_key"
                           name="maw_blocks_google_maps_api_key"
                           value="<?php echo esc_attr($google_maps_api_key); ?>"
                           class="regular-text">
                    <p class="description"><?php _e('Your Google Maps JavaScript API key. Required for the Google Map embed block to function. <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Get your API key here</a>.', 'maw-blocks'); ?></p>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <label for="maw_blocks_google_maps_snazzy_styles"><?php _e('Default Snazzy Map Styles (JSON)', 'maw-blocks'); ?></label>
                </th>
                <td>
                    <textarea id="maw_blocks_google_maps_snazzy_styles" 
                              name="maw_blocks_google_maps_snazzy_styles" 
                              class="large-text code" 
                              rows="10"
                              placeholder='[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36}]}]'><?php echo esc_textarea($google_maps_snazzy_styles); ?></textarea>
                    <p class="description"><?php _e('Default map styling in JSON format from <a href="https://snazzymaps.com/" target="_blank">Snazzy Maps</a>. This will be the default style for new Google Map blocks. Individual blocks can override this setting.', 'maw-blocks'); ?></p>
                </td>
            </tr>
        </table>

        <?php if (MAW_Blocks_Settings_Manager::is_google_maps_configured()) : ?>
            <div class="notice notice-success inline">
                <p><?php _e('Google Maps API is configured. Google Map blocks are ready to use.', 'maw-blocks'); ?></p>
            </div>
        <?php else : ?>
            <div class="notice notice-warning inline">
                <p><?php _e('Google Maps API key is required for the Google Map embed block to function properly.', 'maw-blocks'); ?></p>
            </div>
        <?php endif; ?>

        <?php submit_button(); ?>
    </form>
</div>

<style>
.maw-blocks-settings .form-table th {
    width: 300px;
}
.maw-blocks-settings .dashicons {
    margin-right: 5px;
}
.maw-blocks-settings hr {
    margin: 40px 0;
    border: none;
    border-top: 1px solid #ddd;
}
.maw-blocks-settings h2 {
    margin-top: 0;
}
</style>