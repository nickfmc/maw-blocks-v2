/**
 * MAW Slider Block
 *
 * General purpose slider with InnerBlocks
 */

import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <rect x="2" y="5" width="6" height="14" rx="1" fill="#9333ea" opacity="0.3" />
        <rect x="9" y="5" width="6" height="14" rx="1" fill="#9333ea" />
        <rect x="16" y="5" width="6" height="14" rx="1" fill="#9333ea" opacity="0.3" />
        <circle cx="12" cy="21" r="1" fill="#9333ea" />
        <circle cx="8" cy="21" r="1" fill="#9333ea" opacity="0.5" />
        <circle cx="16" cy="21" r="1" fill="#9333ea" opacity="0.5" />
    </svg>
);

registerBlockType(metadata.name, {
    ...metadata,
    icon: icon,
    edit: Edit,
    save: save,
});

