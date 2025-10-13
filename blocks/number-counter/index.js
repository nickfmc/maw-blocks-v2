/**
 * Number Counter Block Registration
 */

import { registerBlockType } from '@wordpress/blocks';
import './editor.scss';
import './style.scss';

import Edit from './edit';
import Save from './save';
import metadata from './block.json';

const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M3 4h18c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="#9333ea" opacity="0.3" />
        <path d="M8 10v1h2v1H8v1h2v1H8v1h3v-5H8z" fill="#9333ea" />
        <path d="M13 10h2v1h-2v1h1.5c.8 0 1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5H13v-1h2v-1h-2v-3z" fill="#9333ea" />
        <circle cx="6" cy="8" r="1" fill="#9333ea" opacity="0.5" />
        <circle cx="18" cy="8" r="1" fill="#9333ea" opacity="0.5" />
        <path d="M12 6l1 1-1 1-1-1z" fill="#9333ea" />
    </svg>
);

registerBlockType(metadata.name, {
    ...metadata,
    icon: icon,
    edit: Edit,
    save: Save,
});
