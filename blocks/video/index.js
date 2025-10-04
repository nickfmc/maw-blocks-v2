/**
 * MAW Video Block
 *
 * Viewport-aware video with autoplay functionality
 */

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="#9333ea" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
        <path fill="#9333ea" d="M9 8l6 4-6 4z" />
    </svg>
);

registerBlockType(metadata.name, {
    ...metadata,
    icon: icon,
    edit: Edit,
    save: save,
});

