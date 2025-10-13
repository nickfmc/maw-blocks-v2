/**
 * MAW Icon List Block
 *
 * Create lists with custom icons for each item
 */

import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <circle cx="4" cy="6" r="2" fill="#9333ea" />
        <rect x="8" y="5" width="12" height="2" rx="1" fill="#9333ea" opacity="0.3" />
        <circle cx="4" cy="12" r="2" fill="#9333ea" opacity="0.5" />
        <rect x="8" y="11" width="14" height="2" rx="1" fill="#9333ea" />
        <circle cx="4" cy="18" r="2" fill="#9333ea" />
        <rect x="8" y="17" width="10" height="2" rx="1" fill="#9333ea" opacity="0.3" />
    </svg>
);

registerBlockType(metadata.name, {
    ...metadata,
    icon: icon,
    edit,
    save,
});