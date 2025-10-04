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
$global_defaults = get_option('maw_blocks_global_defaults', []);
$supabase_url = get_option('maw_blocks_supabase_url', '');
$supabase_key = get_option('maw_blocks_supabase_key', '');

$active_tab = isset($_GET['tab']) ? sanitize_text_field($_GET['tab']) : 'blocks';

if (isset($_POST['maw_blocks_import']) && check_admin_referer('maw_blocks_import')) {
    if (!empty($_POST['maw_blocks_import_data'])) {
        $import_data = json_decode(stripslashes($_POST['maw_blocks_import_data']), true);
        if (MAW_Blocks_Settings_Manager::import_settings($import_data)) {
            echo '<div class="notice notice-success"><p>' . __('Settings imported successfully!', 'maw-blocks') . '</p></div>';
        } else {
            echo '<div class="notice notice-error"><p>' . __('Failed to import settings.', 'maw-blocks') . '</p></div>';
        }
    }
}

$export_data = '';
if (isset($_POST['maw_blocks_export']) && check_admin_referer('maw_blocks_export')) {
    $export_data = json_encode(MAW_Blocks_Settings_Manager::export_settings(), JSON_PRETTY_PRINT);
}
?>

<div class="wrap maw-blocks-settings">
    <h1><?php echo esc_html(get_admin_page_title()); ?></h1>

    <nav class="nav-tab-wrapper">
        <a href="?page=maw-blocks-settings&tab=blocks" class="nav-tab <?php echo $active_tab === 'blocks' ? 'nav-tab-active' : ''; ?>">
            <?php _e('Enable/Disable Blocks', 'maw-blocks'); ?>
        </a>
        <a href="?page=maw-blocks-settings&tab=defaults" class="nav-tab <?php echo $active_tab === 'defaults' ? 'nav-tab-active' : ''; ?>">
            <?php _e('Global Defaults', 'maw-blocks'); ?>
        </a>
        <a href="?page=maw-blocks-settings&tab=supabase" class="nav-tab <?php echo $active_tab === 'supabase' ? 'nav-tab-active' : ''; ?>">
            <?php _e('Supabase Sync', 'maw-blocks'); ?>
        </a>
        <a href="?page=maw-blocks-settings&tab=import-export" class="nav-tab <?php echo $active_tab === 'import-export' ? 'nav-tab-active' : ''; ?>">
            <?php _e('Import/Export', 'maw-blocks'); ?>
        </a>
    </nav>

    <form method="post" action="options.php">
        <?php settings_fields('maw_blocks_settings'); ?>

        <?php if ($active_tab === 'blocks') : ?>
            <h2><?php _e('Available Blocks', 'maw-blocks'); ?></h2>
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

        <?php elseif ($active_tab === 'defaults') : ?>
            <h2><?php _e('Global Block Defaults', 'maw-blocks'); ?></h2>
            <p><?php _e('Set default configurations for each block. These settings will be applied when a new block is added to a page.', 'maw-blocks'); ?></p>

            <div id="maw-blocks-defaults-root"></div>

        <?php elseif ($active_tab === 'supabase') : ?>
            <h2><?php _e('Supabase Configuration', 'maw-blocks'); ?></h2>
            <p><?php _e('Connect to Supabase to sync your block settings across multiple WordPress installations.', 'maw-blocks'); ?></p>

            <table class="form-table">
                <tr>
                    <th scope="row">
                        <label for="maw_blocks_supabase_url"><?php _e('Supabase URL', 'maw-blocks'); ?></label>
                    </th>
                    <td>
                        <input type="url"
                               id="maw_blocks_supabase_url"
                               name="maw_blocks_supabase_url"
                               value="<?php echo esc_attr($supabase_url); ?>"
                               class="regular-text"
                               placeholder="https://your-project.supabase.co">
                        <p class="description"><?php _e('Your Supabase project URL', 'maw-blocks'); ?></p>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label for="maw_blocks_supabase_key"><?php _e('Supabase Anon Key', 'maw-blocks'); ?></label>
                    </th>
                    <td>
                        <input type="text"
                               id="maw_blocks_supabase_key"
                               name="maw_blocks_supabase_key"
                               value="<?php echo esc_attr($supabase_key); ?>"
                               class="regular-text">
                        <p class="description"><?php _e('Your Supabase anon/public key', 'maw-blocks'); ?></p>
                    </td>
                </tr>
            </table>

            <?php if (MAW_Blocks_Settings_Manager::is_supabase_configured()) : ?>
                <div class="notice notice-success inline">
                    <p><?php _e('Supabase is configured. You can now sync your settings.', 'maw-blocks'); ?></p>
                </div>
            <?php endif; ?>

        <?php elseif ($active_tab === 'import-export') : ?>
            <h2><?php _e('Import/Export Settings', 'maw-blocks'); ?></h2>

            <h3><?php _e('Export Settings', 'maw-blocks'); ?></h3>
            <p><?php _e('Export your current block settings to use on another site or as a backup.', 'maw-blocks'); ?></p>
            <form method="post">
                <?php wp_nonce_field('maw_blocks_export'); ?>
                <button type="submit" name="maw_blocks_export" class="button"><?php _e('Generate Export', 'maw-blocks'); ?></button>
            </form>

            <?php if (!empty($export_data)) : ?>
                <div style="margin-top: 20px;">
                    <textarea readonly class="large-text code" rows="10"><?php echo esc_textarea($export_data); ?></textarea>
                    <p class="description"><?php _e('Copy this data and save it. You can import it on another site.', 'maw-blocks'); ?></p>
                </div>
            <?php endif; ?>

            <hr>

            <h3><?php _e('Import Settings', 'maw-blocks'); ?></h3>
            <p><?php _e('Import settings from another MAW Blocks installation.', 'maw-blocks'); ?></p>
            <form method="post">
                <?php wp_nonce_field('maw_blocks_import'); ?>
                <textarea name="maw_blocks_import_data" class="large-text code" rows="10" placeholder='{"enabled_blocks":[],...}'></textarea>
                <p>
                    <button type="submit" name="maw_blocks_import" class="button button-primary"><?php _e('Import Settings', 'maw-blocks'); ?></button>
                </p>
            </form>

        <?php endif; ?>

        <?php if ($active_tab !== 'import-export') : ?>
            <?php submit_button(); ?>
        <?php endif; ?>
    </form>
</div>

<style>
.maw-blocks-settings .nav-tab-wrapper {
    margin: 20px 0;
}
.maw-blocks-settings .form-table th {
    width: 300px;
}
.maw-blocks-settings .dashicons {
    margin-right: 5px;
}
</style>

