import { registerBlockType } from '@wordpress/blocks';
import './editor.scss';
import './style.scss';
import edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
    ...metadata,
    edit,
    save,
});
