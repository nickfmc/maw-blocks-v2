<?php
/**
 * Block Registry
 *
 * Manages block registration and tracking
 *
 * @package MAW_Blocks
 */

if (!defined('ABSPATH')) {
    exit;
}

class MAW_Blocks_Registry {

    /**
     * Registered blocks
     */
    private static $blocks = [];

    /**
     * Register a block
     */
    public static function register($block_id, $config) {
        self::$blocks[$block_id] = $config;
    }

    /**
     * Get all registered blocks
     */
    public static function get_all() {
        return self::$blocks;
    }

    /**
     * Get a specific block
     */
    public static function get($block_id) {
        return isset(self::$blocks[$block_id]) ? self::$blocks[$block_id] : null;
    }

    /**
     * Check if block exists
     */
    public static function exists($block_id) {
        return isset(self::$blocks[$block_id]);
    }
}

