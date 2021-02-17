<?php
acf_add_local_field_group(array(
	'key' => 'group_602c90f28e5f4',
	'title' => 'Event details',
	'fields' => array(
		array(
			'key' => 'field_602cc9862ab0c',
			'label' => 'Is pinned?',
			'name' => 'is_pinned',
			'type' => 'true_false',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'show_in_graphql' => 1,
			'message' => '',
			'default_value' => 0,
			'ui' => 0,
			'ui_on_text' => '',
			'ui_off_text' => '',
		),
		array(
			'key' => 'field_602ca4756b809',
			'label' => 'Description',
			'name' => 'description',
			'type' => 'wysiwyg',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'show_in_graphql' => 1,
			'default_value' => '',
			'tabs' => 'all',
			'toolbar' => 'full',
			'media_upload' => 1,
			'delay' => 0,
		),
		array(
			'key' => 'field_602ca4876b80a',
			'label' => 'Starting date and time',
			'name' => 'start_time',
			'type' => 'date_time_picker',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'show_in_graphql' => 1,
			'display_format' => 'F j, Y g:i a',
			'return_format' => 'F j, Y g:i a',
			'first_day' => 1,
		),
		array(
			'key' => 'field_602ca49d6b80b',
			'label' => 'Ending date and time',
			'name' => 'end_time',
			'type' => 'date_time_picker',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'show_in_graphql' => 1,
			'display_format' => 'F j, Y g:i a',
			'return_format' => 'F j, Y g:i a',
			'first_day' => 1,
		),
		array(
			'key' => 'field_602ca4f78c666',
			'label' => 'Website Link',
			'name' => 'website_link',
			'type' => 'url',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'show_in_graphql' => 1,
			'default_value' => '',
			'placeholder' => '',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'event',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_graphql' => 1,
	'graphql_field_name' => 'eventDetails',
));