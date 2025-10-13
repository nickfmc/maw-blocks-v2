import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <rect x="2" y="3" width="6" height="8" rx="1" fill="#9333ea" />
        <rect x="2" y="13" width="6" height="8" rx="1" fill="#9333ea" opacity="0.3" />
        <rect x="10" y="3" width="6" height="5" rx="1" fill="#9333ea" opacity="0.5" />
        <rect x="10" y="10" width="6" height="11" rx="1" fill="#9333ea" />
        <rect x="18" y="3" width="4" height="12" rx="1" fill="#9333ea" opacity="0.3" />
        <rect x="18" y="17" width="4" height="4" rx="1" fill="#9333ea" />
    </svg>
);

registerBlockType(metadata.name, {
	...metadata,
	icon: icon,
	edit,
	save,
});
