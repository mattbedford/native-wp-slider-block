<?php
/**
 * Plugin Name:       Native WP Slider Block
 * Description:       A container block that turns its inner blocks into Swiper.js slides.
 * Version:           1.0.0
 * Author:            Matt Bedford
 * Author uri:        https://mattbedford.com
 * Text Domain:       devteam
 */

/*
 * TO DO:
 * Only enqueue Swiper assets when the block is used
 * (e.g., use has_block('devteam/native-wp-slider') in wp_enqueue_scripts)
 * Support responsive breakpoints
 * Add UI controls to adjust slidesPerView based on screen size
 * Add block variations or templates
 * Like a default 3-slide template with placeholder content
 * Add keyboard/drag accessibility toggle
 * Swiper supports a lot with just config flags
 * Allow custom transition speed or effect
 * You could expose effect, speed, etc., via block props
 *
 *
 */

defined('ABSPATH') || exit;

function devteam_register_native_wp_slider_block() {
	// Automatically handles both editorScript and style registration
	register_block_type(__DIR__);
}
add_action('init', 'devteam_register_native_wp_slider_block');


function devteam_enqueue_slider_assets() {
	// Always enqueue Swiper CSS (editor + frontend)
	wp_enqueue_style(
		'devteam-swiper-style',
		'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
		[],
		null
	);

	// Swiper JS (CDN), registered for footer
	wp_register_script(
		'devteam-swiper-js',
		'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
		[],
		null,
		true
	);

	// Your block's frontend logic (init + swiper-slide setup)
	wp_register_script(
		'devteam-slider-init',
		plugins_url('build/frontend.js', __FILE__),
		['devteam-swiper-js'],
		filemtime(plugin_dir_path(__FILE__) . 'build/frontend.js'),
		true
	);

	// Only enqueue on frontend
	if ( ! is_admin() ) {
		wp_enqueue_script('devteam-swiper-js');
		wp_enqueue_script('devteam-slider-init');
	}
}
add_action('enqueue_block_assets', 'devteam_enqueue_slider_assets');