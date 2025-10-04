/**
 * MAW Testimonial Slider Block
 *
 * Testimonial slider with flexible field management
 */

import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M7 9.5C7 8.67 7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5zM16.5 11c.83 0 1.5-.67 1.5-1.5S17.33 8 16.5 8 15 8.67 15 9.5s.67 1.5 1.5 1.5z" fill="#9333ea" />
        <path d="M6 15l2-3h2l2 3-2 3H8l-2-3zm8 0l2-3h2l2 3-2 3h-2l-2-3z" fill="#9333ea" opacity="0.6" />
        <path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="#9333ea" opacity="0.3" />
        <circle cx="4" cy="22" r="1" fill="#9333ea" opacity="0.5" />
        <circle cx="12" cy="22" r="1" fill="#9333ea" />
        <circle cx="20" cy="22" r="1" fill="#9333ea" opacity="0.5" />
    </svg>
);

registerBlockType(metadata.name, {
    ...metadata,
    icon: icon,
    edit: Edit,
    save: save,
});

