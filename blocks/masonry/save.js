import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { blockClass, elementClass } from '../../src/shared/utils/classnames';

export default function Save({ attributes }) {
	const {
		columns,
		columnsMobile,
		columnsTablet,
		gap,
		gapMobile,
		gapTablet,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: blockClass('masonry'),
		'data-columns': columns,
		'data-columns-mobile': columnsMobile,
		'data-columns-tablet': columnsTablet,
		'data-gap': gap,
		'data-gap-mobile': gapMobile,
		'data-gap-tablet': gapTablet,
	});

	return (
		<div {...blockProps}>
			<div className={elementClass('masonry', 'grid')}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
