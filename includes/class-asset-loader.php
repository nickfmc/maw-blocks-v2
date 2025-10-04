<?php
/**
 * Asset Loader
 *
 * Handles conditional loading of block assets
 *
 * @package MAW_Blocks
 */

if (!defined('ABSPATH')) {
    exit;
}

class MAW_Blocks_Asset_Loader {

    /**
     * Blocks used on current page
     */
    private $used_blocks = [];

    /**
     * Detect which blocks are used on the page
     */
    public function detect_used_blocks($content) {
        if (has_blocks($content)) {
            $blocks = parse_blocks($content);
            $this->extract_block_names($blocks);
        }
    }

    /**
     * Recursively extract block names
     */
    private function extract_block_names($blocks) {
        foreach ($blocks as $block) {
            if (!empty($block['blockName']) && strpos($block['blockName'], 'maw-blocks/') === 0) {
                $this->used_blocks[] = str_replace('maw-blocks/', '', $block['blockName']);
            }

            if (!empty($block['innerBlocks'])) {
                $this->extract_block_names($block['innerBlocks']);
            }
        }
    }

    /**
     * Enqueue frontend assets
     */
    public function enqueue_frontend_assets($enabled_blocks, $available_blocks) {
        // Only run on frontend, not in editor
        if (is_admin()) {
            return;
        }

        global $post;

        if ($post && isset($post->post_content)) {
            $this->detect_used_blocks($post->post_content);
        }

        // Debug logging
        error_log('MAW Blocks: Used blocks detected: ' . print_r($this->used_blocks, true));
        error_log('MAW Blocks: Enabled blocks: ' . print_r($enabled_blocks, true));

        foreach ($this->used_blocks as $block_id) {
            if (!in_array($block_id, $enabled_blocks) || !isset($available_blocks[$block_id])) {
                error_log('MAW Blocks: Skipping block ' . $block_id . ' (not enabled or not available)');
                continue;
            }

            $base_dir = rtrim(MAW_BLOCKS_PLUGIN_DIR, '/\\');
            $frontend_js = $base_dir . DIRECTORY_SEPARATOR . 'build' . DIRECTORY_SEPARATOR . 'blocks' . DIRECTORY_SEPARATOR . $block_id . DIRECTORY_SEPARATOR . 'frontend.js';

            error_log('MAW Blocks: Checking for frontend JS: ' . $frontend_js . ' - Exists: ' . (file_exists($frontend_js) ? 'YES' : 'NO'));

            if (file_exists($frontend_js)) {
                wp_enqueue_script(
                    'maw-blocks-' . $block_id . '-frontend',
                    trailingslashit(MAW_BLOCKS_PLUGIN_URL) . 'build/blocks/' . $block_id . '/frontend.js',
                    [],
                    MAW_BLOCKS_VERSION,
                    true
                );
                error_log('MAW Blocks: Enqueued frontend JS for ' . $block_id);
            }
        }
    }
}

