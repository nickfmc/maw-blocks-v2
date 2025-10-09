/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/testimonial-slider/block.json":
/*!**********************************************!*\
  !*** ./blocks/testimonial-slider/block.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"maw-blocks/testimonial-slider","version":"1.0.0","title":"MAW Testimonial Slider","category":"maw-blocks","icon":"format-quote","description":"Testimonial slider with configurable fields and ordering","keywords":["testimonial","review","slider","rating"],"textdomain":"maw-blocks","editorScript":"file:../../build/blocks/testimonial-slider/index.js","editorStyle":"file:../../build/blocks/testimonial-slider/editor.css","style":"file:../../build/blocks/testimonial-slider/style-style.css","viewScript":"maw-blocks-testimonial-slider-view","attributes":{"testimonials":{"type":"array","default":[]},"fieldOrder":{"type":"array","default":["image","rating","quote","title","citation"]},"enabledFields":{"type":"object","default":{"image":true,"rating":true,"quote":true,"title":true,"citation":true}},"alignment":{"type":"string","default":"center"},"ratingStyle":{"type":"string","default":"stars"},"showArrows":{"type":"boolean","default":true},"arrowIcon":{"type":"string","default":"chevron"},"showDots":{"type":"boolean","default":true},"dotsPosition":{"type":"string","default":"below"},"autoplay":{"type":"boolean","default":false},"autoplaySpeed":{"type":"number","default":5000},"loop":{"type":"boolean","default":true},"speed":{"type":"number","default":500}},"supports":{"html":false,"anchor":true,"customClassName":true,"spacing":{"margin":true,"padding":true}}}');

/***/ }),

/***/ "./blocks/testimonial-slider/edit.js":
/*!*******************************************!*\
  !*** ./blocks/testimonial-slider/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/shared/utils/classnames */ "./src/shared/utils/classnames.js");
/* harmony import */ var _src_shared_components_BlockControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/shared/components/BlockControls */ "./src/shared/components/BlockControls.js");

/**
 * Testimonial Slider Block Edit Component
 */






function Edit({
  attributes,
  setAttributes
}) {
  const {
    testimonials,
    fieldOrder,
    enabledFields,
    alignment,
    ratingStyle,
    showArrows,
    arrowIcon,
    showDots,
    dotsPosition,
    autoplay,
    autoplaySpeed,
    loop,
    speed
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.blockClass)('testimonial-slider', {
      [`align-${alignment}`]: alignment
    }),
    'data-block-version': '1.0.0'
  });
  const addTestimonial = () => {
    const newTestimonials = [...testimonials, {
      id: Date.now(),
      image: '',
      imageId: null,
      rating: 5,
      title: '',
      quote: '',
      citation: ''
    }];
    setAttributes({
      testimonials: newTestimonials
    });
  };
  const updateTestimonial = (index, field, value) => {
    const newTestimonials = [...testimonials];
    newTestimonials[index][field] = value;
    setAttributes({
      testimonials: newTestimonials
    });
  };
  const removeTestimonial = index => {
    const newTestimonials = testimonials.filter((_, i) => i !== index);
    setAttributes({
      testimonials: newTestimonials
    });
  };
  const toggleField = field => {
    setAttributes({
      enabledFields: {
        ...enabledFields,
        [field]: !enabledFields[field]
      }
    });
  };
  const navigationSettings = {
    showArrows,
    arrowIcon,
    showDots,
    dotsPosition
  };
  const behaviorSettings = {
    autoplay,
    autoplaySpeed,
    loop,
    speed,
    slidesPerView: 1,
    spaceBetween: 20
  };
  const renderStars = rating => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Field Settings', 'maw-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Image', 'maw-blocks'),
    checked: enabledFields.image,
    onChange: () => toggleField('image')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Rating', 'maw-blocks'),
    checked: enabledFields.rating,
    onChange: () => toggleField('rating')
  }), enabledFields.rating && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rating Style', 'maw-blocks'),
    value: ratingStyle,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stars', 'maw-blocks'),
      value: 'stars'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Number', 'maw-blocks'),
      value: 'number'
    }],
    onChange: value => setAttributes({
      ratingStyle: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Title', 'maw-blocks'),
    checked: enabledFields.title,
    onChange: () => toggleField('title')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Quote', 'maw-blocks'),
    checked: enabledFields.quote,
    onChange: () => toggleField('quote')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Citation', 'maw-blocks'),
    checked: enabledFields.citation,
    onChange: () => toggleField('citation')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_shared_components_BlockControls__WEBPACK_IMPORTED_MODULE_5__.AlignmentPanel, {
    alignment: alignment,
    onChange: value => setAttributes({
      alignment: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_shared_components_BlockControls__WEBPACK_IMPORTED_MODULE_5__.NavigationPanel, {
    settings: navigationSettings,
    onChange: newSettings => setAttributes(newSettings)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_shared_components_BlockControls__WEBPACK_IMPORTED_MODULE_5__.SliderBehaviorPanel, {
    settings: behaviorSettings,
    onChange: newSettings => setAttributes(newSettings)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('testimonial-slider', 'wrapper')
  }, testimonials.length === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('testimonial-slider', 'placeholder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No testimonials yet. Add one below.', 'maw-blocks'))) : testimonials.map((testimonial, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: testimonial.id,
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('testimonial-slider', 'item')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('testimonial-slider', 'item-header')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Testimonial', 'maw-blocks'), " ", index + 1), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => removeTestimonial(index),
    isDestructive: true,
    isSmall: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove', 'maw-blocks'))), enabledFields.image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('testimonial-slider', 'field')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'maw-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      updateTestimonial(index, 'image', media.url);
      updateTestimonial(index, 'imageId', media.id);
    },
    allowedTypes: ['image'],
    value: testimonial.imageId,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary"
    }, testimonial.image ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change', 'maw-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select', 'maw-blocks')), testimonial.image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: testimonial.image,
      alt: "",
      style: {
        maxWidth: '100px',
        marginTop: '10px'
      }
    }))
  }))), enabledFields.rating && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('testimonial-slider', 'field')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rating', 'maw-blocks'),
    value: testimonial.rating,
    onChange: value => updateTestimonial(index, 'rating', value),
    min: 1,
    max: 5,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, renderStars(testimonial.rating))), enabledFields.title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title', 'maw-blocks'),
    value: testimonial.title,
    onChange: value => updateTestimonial(index, 'title', value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('e.g., Great Service!', 'maw-blocks')
  }), enabledFields.quote && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Quote', 'maw-blocks'),
    value: testimonial.quote,
    onChange: value => updateTestimonial(index, 'quote', value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The testimonial text...', 'maw-blocks'),
    rows: 4
  }), enabledFields.citation && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Citation', 'maw-blocks'),
    value: testimonial.citation,
    onChange: value => updateTestimonial(index, 'citation', value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('e.g., John Doe, CEO', 'maw-blocks')
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: addTestimonial,
    variant: "primary",
    style: {
      marginTop: '20px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Testimonial', 'maw-blocks'))));
}

/***/ }),

/***/ "./blocks/testimonial-slider/save.js":
/*!*******************************************!*\
  !*** ./blocks/testimonial-slider/save.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/shared/utils/classnames */ "./src/shared/utils/classnames.js");

/**
 * Testimonial Slider Block Save Component
 */



function save({
  attributes
}) {
  const {
    testimonials,
    fieldOrder,
    enabledFields,
    alignment,
    ratingStyle,
    showArrows,
    arrowIcon,
    showDots,
    dotsPosition,
    autoplay,
    autoplaySpeed,
    loop,
    speed
  } = attributes;
  if (!testimonials || testimonials.length === 0) {
    return null;
  }
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.blockClass)('testimonial-slider', {
      [`align-${alignment}`]: alignment,
      'arrows-visible': showArrows,
      'dots-visible': showDots
    }),
    'data-autoplay': autoplay,
    'data-autoplay-speed': autoplaySpeed,
    'data-loop': loop,
    'data-speed': speed,
    'data-arrow-icon': arrowIcon
  });
  const renderStars = rating => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };
  const renderField = (field, testimonial) => {
    if (!enabledFields[field]) return null;
    switch (field) {
      case 'image':
        return testimonial.image ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'image')
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: testimonial.image,
          alt: testimonial.citation || ''
        })) : null;
      case 'rating':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'rating'),
          "aria-label": `Rating: ${testimonial.rating} out of 5`
        }, ratingStyle === 'stars' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'stars'),
          "aria-hidden": "true"
        }, renderStars(testimonial.rating)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'number')
        }, testimonial.rating, "/5"));
      case 'title':
        return testimonial.title ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
          className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'title')
        }, testimonial.title) : null;
      case 'quote':
        return testimonial.quote ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("blockquote", {
          className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'quote')
        }, testimonial.quote) : null;
      case 'citation':
        return testimonial.citation ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("cite", {
          className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'citation')
        }, testimonial.citation) : null;
      default:
        return null;
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'container')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'wrapper')
  }, testimonials.map(testimonial => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: testimonial.id,
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'slide'),
    itemScope: true,
    itemType: "https://schema.org/Review"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'content')
  }, fieldOrder.map(field => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: field
  }, renderField(field, testimonial)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("meta", {
    itemProp: "reviewRating",
    content: testimonial.rating
  })))), showArrows && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'navigation')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${(0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'arrow')} ${(0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'arrow', {
      prev: true
    })}`,
    type: "button",
    "aria-label": "Previous testimonial"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, "\u2039")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${(0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'arrow')} ${(0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'arrow', {
      next: true
    })}`,
    type: "button",
    "aria-label": "Next testimonial"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, "\u203A"))), showDots && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${(0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'dots')} ${(0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('testimonial-slider', 'dots', {
      [dotsPosition]: true
    })}`
  })));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
}());


/***/ }),

/***/ "./src/shared/components/BlockControls.js":
/*!************************************************!*\
  !*** ./src/shared/components/BlockControls.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignmentPanel: () => (/* binding */ AlignmentPanel),
/* harmony export */   NavigationPanel: () => (/* binding */ NavigationPanel),
/* harmony export */   ResponsivePanel: () => (/* binding */ ResponsivePanel),
/* harmony export */   SliderBehaviorPanel: () => (/* binding */ SliderBehaviorPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Shared Block Control Components
 * Reusable inspector control panels for blocks
 * Updated for tracking
 */



const AlignmentPanel = ({
  alignment,
  onChange
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alignment', 'maw-blocks'),
  initialOpen: false
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Alignment', 'maw-blocks'),
  value: alignment,
  options: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'maw-blocks'),
    value: 'left'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'maw-blocks'),
    value: 'center'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'maw-blocks'),
    value: 'right'
  }],
  onChange: onChange
}));
const NavigationPanel = ({
  settings,
  onChange
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation', 'maw-blocks'),
  initialOpen: true
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Arrow Buttons', 'maw-blocks'),
  checked: settings.showArrows,
  onChange: value => onChange({
    ...settings,
    showArrows: value
  })
}), settings.showArrows && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Arrow Icon', 'maw-blocks'),
  value: settings.arrowIcon,
  options: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Chevron', 'maw-blocks'),
    value: 'chevron'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Arrow', 'maw-blocks'),
    value: 'arrow'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Angle', 'maw-blocks'),
    value: 'angle'
  }],
  onChange: value => onChange({
    ...settings,
    arrowIcon: value
  })
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Dots', 'maw-blocks'),
  checked: settings.showDots,
  onChange: value => onChange({
    ...settings,
    showDots: value
  })
}), settings.showDots && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dots Position', 'maw-blocks'),
  value: settings.dotsPosition,
  options: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Below Slider', 'maw-blocks'),
    value: 'below'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inside Bottom', 'maw-blocks'),
    value: 'inside-bottom'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Side', 'maw-blocks'),
    value: 'side'
  }],
  onChange: value => onChange({
    ...settings,
    dotsPosition: value
  })
}));
const SliderBehaviorPanel = ({
  settings,
  onChange
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slider Behavior', 'maw-blocks'),
  initialOpen: true
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Autoplay', 'maw-blocks'),
  checked: settings.autoplay,
  onChange: value => onChange({
    ...settings,
    autoplay: value
  })
}), settings.autoplay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Autoplay Speed (ms)', 'maw-blocks'),
  value: settings.autoplaySpeed,
  onChange: value => onChange({
    ...settings,
    autoplaySpeed: value
  }),
  min: 1000,
  max: 10000,
  step: 500
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Loop', 'maw-blocks'),
  checked: settings.loop,
  onChange: value => onChange({
    ...settings,
    loop: value
  })
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Transition Speed (ms)', 'maw-blocks'),
  value: settings.speed,
  onChange: value => onChange({
    ...settings,
    speed: value
  }),
  min: 200,
  max: 2000,
  step: 100
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slides Per View', 'maw-blocks'),
  value: settings.slidesPerView,
  onChange: value => onChange({
    ...settings,
    slidesPerView: value
  }),
  min: 1,
  max: 6,
  step: 1
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Space Between Slides (px)', 'maw-blocks'),
  value: settings.spaceBetween,
  onChange: value => onChange({
    ...settings,
    spaceBetween: value
  }),
  min: 0,
  max: 100,
  step: 5
}));
const ResponsivePanel = ({
  settings,
  onChange
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive Settings', 'maw-blocks'),
  initialOpen: false
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slides Per View (Tablet)', 'maw-blocks'),
  value: settings.slidesPerViewTablet,
  onChange: value => onChange({
    ...settings,
    slidesPerViewTablet: value
  }),
  min: 1,
  max: 4,
  step: 1
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slides Per View (Mobile)', 'maw-blocks'),
  value: settings.slidesPerViewMobile,
  onChange: value => onChange({
    ...settings,
    slidesPerViewMobile: value
  }),
  min: 1,
  max: 2,
  step: 1
}));

/***/ }),

/***/ "./src/shared/utils/classnames.js":
/*!****************************************!*\
  !*** ./src/shared/utils/classnames.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockClass: () => (/* binding */ blockClass),
/* harmony export */   elementClass: () => (/* binding */ elementClass),
/* harmony export */   validateClassNames: () => (/* binding */ validateClassNames)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Shared utility functions for generating CSS class names
 * Updated for tracking
 */


const blockClass = (blockName, modifiers = {}) => {
  const baseClass = `maw-${blockName}`;
  const classes = {
    [baseClass]: true
  };
  Object.keys(modifiers).forEach(key => {
    if (modifiers[key]) {
      classes[`${baseClass}--${key}`] = true;
    }
  });
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classes);
};
const elementClass = (blockName, element, modifiers = {}) => {
  const baseClass = `maw-${blockName}__${element}`;
  const classes = {
    [baseClass]: true
  };
  Object.keys(modifiers).forEach(key => {
    if (modifiers[key]) {
      classes[`${baseClass}--${key}`] = true;
    }
  });
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classes);
};
const validateClassNames = className => {
  const classes = className.split(' ');
  const invalidClasses = classes.filter(cls => {
    return cls && !cls.startsWith('maw-') && !cls.startsWith('wp-');
  });
  if (invalidClasses.length > 0) {
    console.warn('Invalid class names detected (should start with maw- or wp-):', invalidClasses.join(', '));
    return false;
  }
  return true;
};

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************************!*\
  !*** ./blocks/testimonial-slider/index.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/testimonial-slider/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./blocks/testimonial-slider/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./blocks/testimonial-slider/block.json");

/**
 * MAW Testimonial Slider Block
 *
 * Testimonial slider with flexible field management
 */





const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7 9.5C7 8.67 7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5zM16.5 11c.83 0 1.5-.67 1.5-1.5S17.33 8 16.5 8 15 8.67 15 9.5s.67 1.5 1.5 1.5z",
  fill: "#9333ea"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6 15l2-3h2l2 3-2 3H8l-2-3zm8 0l2-3h2l2 3-2 3h-2l-2-3z",
  fill: "#9333ea",
  opacity: "0.6"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z",
  fill: "#9333ea",
  opacity: "0.3"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "4",
  cy: "22",
  r: "1",
  fill: "#9333ea",
  opacity: "0.5"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "12",
  cy: "22",
  r: "1",
  fill: "#9333ea"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "20",
  cy: "22",
  r: "1",
  fill: "#9333ea",
  opacity: "0.5"
}));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_4__,
  icon: icon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map