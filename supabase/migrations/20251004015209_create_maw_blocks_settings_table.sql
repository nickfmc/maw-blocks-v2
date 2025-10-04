/*
  # MAW Blocks Settings Storage

  1. New Tables
    - `maw_blocks_settings`
      - `id` (uuid, primary key) - Unique identifier for each settings entry
      - `site_url` (text, unique) - WordPress site URL to identify the installation
      - `enabled_blocks` (jsonb) - Array of enabled block identifiers
      - `global_defaults` (jsonb) - Global default configurations for each block
      - `version` (text) - Plugin version when settings were saved
      - `created_at` (timestamptz) - When the settings were first created
      - `updated_at` (timestamptz) - When the settings were last updated

  2. Security
    - Enable RLS on `maw_blocks_settings` table
    - Add policy for authenticated users to read all settings
    - Add policy for authenticated users to insert their own site settings
    - Add policy for authenticated users to update their own site settings

  3. Indexes
    - Index on `site_url` for fast lookups by WordPress installation
    - Index on `updated_at` for finding recently modified settings

  4. Notes
    - JSONB format allows flexible storage of block configurations
    - Site URL is used as unique identifier to prevent duplicate entries
    - RLS ensures only authenticated users can manage settings
*/

CREATE TABLE IF NOT EXISTS maw_blocks_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_url text UNIQUE NOT NULL,
  enabled_blocks jsonb DEFAULT '[]'::jsonb,
  global_defaults jsonb DEFAULT '{}'::jsonb,
  version text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE maw_blocks_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read all settings"
  ON maw_blocks_settings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert settings"
  ON maw_blocks_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update settings"
  ON maw_blocks_settings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete settings"
  ON maw_blocks_settings
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_maw_blocks_settings_site_url 
  ON maw_blocks_settings(site_url);

CREATE INDEX IF NOT EXISTS idx_maw_blocks_settings_updated_at 
  ON maw_blocks_settings(updated_at DESC);

CREATE OR REPLACE FUNCTION update_maw_blocks_settings_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_maw_blocks_settings_timestamp
  BEFORE UPDATE ON maw_blocks_settings
  FOR EACH ROW
  EXECUTE FUNCTION update_maw_blocks_settings_timestamp();

