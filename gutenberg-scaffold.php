<?php
/*
* Plugin Name: theme-blocks
* Plugin URI: https://github.com/kishanjasani/gutenberg-scaffold
* Description: Blocks for theme.
* Author: Kishan Jasani
* Author URI: http://kishanjasani.wordpress.com/
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function mytheme_blocks_register_block_type( $block, $options = array() ) {
	register_block_type(
		'mytheme-blocks/' . $block,
		array_merge(
			[
				'editor_script' => 'mytheme-blocks-editor-script',
				'editor_style'  => 'mytheme-blocks-editor-style',
				'script'        => 'mytheme-blocks-script',
				'style'         => 'mytheme-blocks-style',
			],
			$options
		)
	);
}

function mytheme_blocks_register() {

	wp_register_script(
		'mytheme-blocks-editor-script',
		plugins_url( 'dist/editor.js', __FILE__ ),
		[ 'wp-blocks', 'wp-i18n' ]
	);

	wp_register_script(
		'mytheme-blocks-script',
		plugins_url( 'dist/script.js', __FILE__ ),
		[ 'jquery' ]
	);

	wp_register_style(
		'mytheme-blocks-editor-style',
		plugins_url( 'dist/editor.css', __FILE__ ),
		[ 'wp-edit-blocks' ]
	);

	wp_register_style(
		'mytheme-blocks-style',
		plugins_url( 'dist/style.css', __FILE__ )
	);

	mytheme_blocks_register_block_type( 'firstblock' );
	mytheme_blocks_register_block_type( 'secondblock' );
}

add_action( 'init', 'mytheme_blocks_register' );
