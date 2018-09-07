/**
 * BLOCK: gutenberg-by-numbers
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
//const createElement = wp.element.createElement; // The wp.element.createElement() function to create elements.
//const RichText = wp.editor.RichText; // For creating editable elements.

/*
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { createBlock, getPhrasingContentSchema } from '@wordpress/blocks';
import {
	BlockControls,
	AlignmentToolbar,
	RichText,
} from '@wordpress/editor';
*/

const attributes = {
	number: { type: 'integer' },
	unit: { type: 'string' },
	description: { type: 'string' },
};

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'gutenberg-by-numbers/stat-number', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Stat Number' ), // Block title.
	icon: 'dashboard', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'formatting', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'gutenberg-by-numbers' ),
		__( 'number' ),
		__( 'stat' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		// Creates a <p class='wp-block-cgb-block-gutenberg-by-numbers'></p>.
		const { setAttributes } = props;
		const { currentNumber, currentUnit, currentDescription } = props.attributes;

		const setNumber = ( event ) => {
			setAttributes(
				{ currentNumber: event.target.value }
			);
		};

		const setUnit = ( event ) => {
			setAttributes(
				{ currentUnit: event.target.value }
			);
		};

		const setDescription = ( event ) => {
			setAttributes(
				{ currentDescription: event.target.value }
			);
		};

		return (
			<div className={ props.className }>
				<label>Number:
					<input onChange={ setNumber } value={ currentNumber } />
				</label>
				<label>Unit:
					<input onChange={ setUnit } value={ currentUnit } />
				</label>
				<label>Description:
					<input onChange={ setDescription } value={ currentDescription } />
				</label>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		const { currentNumber, currentUnit, currentDescription } = props.attributes;
		return (
			<div>
				<span class="number">{ currentNumber }</span>
				<span class="unit">{ currentUnit }</span>
				<span class="description">{ currentDescription }</span>
			</div>
		);
	},
} );
