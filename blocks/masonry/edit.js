import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { blockClass } from '../../src/shared/utils/classnames';

export default function Edit({ attributes, setAttributes }) {
	const {
		columns,
		columnsMobile,
		columnsTablet,
		gap,
		gapMobile,
		gapTablet,
	} = attributes;

	const blockProps = useBlockProps({
		className: blockClass('masonry'),
		style: {
			'--maw-masonry-columns': columns,
			'--maw-masonry-gap': `${gap}px`,
		},
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Layout Settings', 'maw-blocks')} initialOpen={true}>
					<RangeControl
						label={__('Columns (Desktop)', 'maw-blocks')}
						value={columns}
						onChange={(value) => setAttributes({ columns: value })}
						min={1}
						max={6}
						step={1}
					/>
					<RangeControl
						label={__('Columns (Tablet)', 'maw-blocks')}
						value={columnsTablet}
						onChange={(value) => setAttributes({ columnsTablet: value })}
						min={1}
						max={4}
						step={1}
					/>
					<RangeControl
						label={__('Columns (Mobile)', 'maw-blocks')}
						value={columnsMobile}
						onChange={(value) => setAttributes({ columnsMobile: value })}
						min={1}
						max={3}
						step={1}
					/>
				</PanelBody>

				<PanelBody title={__('Spacing Settings', 'maw-blocks')} initialOpen={false}>
					<RangeControl
						label={__('Gap (Desktop)', 'maw-blocks')}
						value={gap}
						onChange={(value) => setAttributes({ gap: value })}
						min={0}
						max={100}
						step={1}
					/>
					<RangeControl
						label={__('Gap (Tablet)', 'maw-blocks')}
						value={gapTablet}
						onChange={(value) => setAttributes({ gapTablet: value })}
						min={0}
						max={80}
						step={1}
					/>
					<RangeControl
						label={__('Gap (Mobile)', 'maw-blocks')}
						value={gapMobile}
						onChange={(value) => setAttributes({ gapMobile: value })}
						min={0}
						max={60}
						step={1}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="maw-masonry__grid">
					<InnerBlocks
						renderAppender={InnerBlocks.ButtonBlockAppender}
					/>
				</div>
			</div>
		</>
	);
}
