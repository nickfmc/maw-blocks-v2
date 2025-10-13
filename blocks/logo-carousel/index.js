import { registerBlockType } from '@wordpress/blocks';
import './editor.scss';
import './style.scss';
import edit from './edit';
import save from './save';
import metadata from './block.json';

const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <rect x="1" y="8" width="4" height="8" rx="1" fill="#9333ea" opacity="0.3" />
        <rect x="6" y="6" width="4" height="12" rx="1" fill="#9333ea" />
        <rect x="11" y="4" width="4" height="16" rx="1" fill="#9333ea" opacity="0.5" />
        <rect x="16" y="6" width="4" height="12" rx="1" fill="#9333ea" />
        <rect x="21" y="8" width="2" height="8" rx="1" fill="#9333ea" opacity="0.3" />
        <path d="M2 21h20" stroke="#9333ea" strokeWidth="1.5" opacity="0.4" />
        <circle cx="12" cy="2" r="1" fill="#9333ea" />
    </svg>
);

registerBlockType(metadata.name, {
    ...metadata,
    icon: icon,
    edit,
    save,
});
