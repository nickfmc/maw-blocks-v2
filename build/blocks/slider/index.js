/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/slider/block.json":
/*!**********************************!*\
  !*** ./blocks/slider/block.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"maw-blocks/slider","version":"1.0.0","title":"MAW Slider","category":"maw-blocks","icon":"images-alt2","description":"General purpose slider with flexible content using InnerBlocks","keywords":["slider","carousel","slideshow"],"textdomain":"maw-blocks","editorScript":"file:../../build/blocks/slider/index.js","editorStyle":"file:../../build/blocks/slider/editor.css","style":"file:../../build/blocks/slider/style-style.css","viewScript":"maw-blocks-slider-view","attributes":{"showArrows":{"type":"boolean","default":true},"arrowIcon":{"type":"string","default":"chevron"},"showDots":{"type":"boolean","default":true},"dotsPosition":{"type":"string","default":"below"},"autoplay":{"type":"boolean","default":false},"autoplaySpeed":{"type":"number","default":3000},"loop":{"type":"boolean","default":true},"speed":{"type":"number","default":500},"slidesPerView":{"type":"number","default":1},"slidesPerViewTablet":{"type":"number","default":1},"slidesPerViewMobile":{"type":"number","default":1},"spaceBetween":{"type":"number","default":20},"effect":{"type":"string","default":"slide"}},"supports":{"html":false,"anchor":true,"customClassName":true,"spacing":{"margin":true,"padding":true}}}');

/***/ }),

/***/ "./blocks/slider/edit.js":
/*!*******************************!*\
  !*** ./blocks/slider/edit.js ***!
  \*******************************/
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
 * Slider Block Edit Component
 */






const ALLOWED_BLOCKS = ['core/group', 'core/image', 'core/paragraph', 'core/heading', 'core/columns'];
const TEMPLATE = [['core/group', {
  className: 'maw-slider__slide'
}, [['core/heading', {
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide 1 Heading', 'maw-blocks')
}], ['core/paragraph', {
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your content...', 'maw-blocks')
}]]], ['core/group', {
  className: 'maw-slider__slide'
}, [['core/heading', {
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide 2 Heading', 'maw-blocks')
}], ['core/paragraph', {
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your content...', 'maw-blocks')
}]]], ['core/group', {
  className: 'maw-slider__slide'
}, [['core/heading', {
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide 3 Heading', 'maw-blocks')
}], ['core/paragraph', {
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your content...', 'maw-blocks')
}]]]];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    showArrows,
    arrowIcon,
    showDots,
    dotsPosition,
    autoplay,
    autoplaySpeed,
    loop,
    speed,
    slidesPerView,
    slidesPerViewTablet,
    slidesPerViewMobile,
    spaceBetween,
    effect
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.blockClass)('slider', {
      'arrows-visible': showArrows,
      'dots-visible': showDots,
      [`dots-${dotsPosition}`]: showDots && dotsPosition
    }),
    'data-block-version': '1.0.0'
  });
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
    slidesPerView,
    spaceBetween
  };
  const responsiveSettings = {
    slidesPerViewTablet,
    slidesPerViewMobile
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_shared_components_BlockControls__WEBPACK_IMPORTED_MODULE_5__.NavigationPanel, {
    settings: navigationSettings,
    onChange: newSettings => setAttributes(newSettings)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_shared_components_BlockControls__WEBPACK_IMPORTED_MODULE_5__.SliderBehaviorPanel, {
    settings: behaviorSettings,
    onChange: newSettings => setAttributes(newSettings)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_shared_components_BlockControls__WEBPACK_IMPORTED_MODULE_5__.ResponsivePanel, {
    settings: responsiveSettings,
    onChange: newSettings => setAttributes(newSettings)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Effects', 'maw-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Transition Effect', 'maw-blocks'),
    value: effect,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide', 'maw-blocks'),
      value: 'slide'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade', 'maw-blocks'),
      value: 'fade'
    }],
    onChange: value => setAttributes({
      effect: value
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "maw-slider__wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender
  })), showArrows && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "maw-slider__navigation"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "maw-slider__arrow maw-slider__arrow--prev",
    type: "button"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Previous', 'maw-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "maw-slider__arrow maw-slider__arrow--next",
    type: "button"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Next', 'maw-blocks'))), showDots && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `maw-slider__dots maw-slider__dots--${dotsPosition}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "maw-slider__dot maw-slider__dot--active"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "maw-slider__dot"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "maw-slider__dot"
  }))));
}

/***/ }),

/***/ "./blocks/slider/save.js":
/*!*******************************!*\
  !*** ./blocks/slider/save.js ***!
  \*******************************/
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
 * Slider Block Save Component
 */



function save({
  attributes
}) {
  const {
    showArrows,
    arrowIcon,
    showDots,
    dotsPosition,
    autoplay,
    autoplaySpeed,
    loop,
    speed,
    slidesPerView,
    slidesPerViewTablet,
    slidesPerViewMobile,
    spaceBetween,
    effect
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.blockClass)('slider', {
      'arrows-visible': showArrows,
      'dots-visible': showDots,
      [`dots-${dotsPosition}`]: showDots && dotsPosition,
      [`effect-${effect}`]: effect
    }),
    'data-autoplay': autoplay,
    'data-autoplay-speed': autoplaySpeed,
    'data-loop': loop,
    'data-speed': speed,
    'data-slides-per-view': slidesPerView,
    'data-slides-per-view-tablet': slidesPerViewTablet,
    'data-slides-per-view-mobile': slidesPerViewMobile,
    'data-space-between': spaceBetween,
    'data-effect': effect,
    'data-arrow-icon': arrowIcon
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('slider', 'container')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('slider', 'wrapper')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)), showArrows && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('slider', 'navigation')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${(0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('slider', 'arrow')} ${(0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('slider', 'arrow', {
      prev: true
    })}`,
    type: "button",
    "aria-label": "Previous slide"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, "\u2039")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${(0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('slider', 'arrow')} ${(0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('slider', 'arrow', {
      next: true
    })}`,
    type: "button",
    "aria-label": "Next slide"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, "\u203A"))), showDots && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${(0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('slider', 'dots')} ${(0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('slider', 'dots', {
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
/*!********************************!*\
  !*** ./blocks/slider/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/slider/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./blocks/slider/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./blocks/slider/block.json");

/**
 * MAW Slider Block
 *
 * General purpose slider with InnerBlocks
 */





const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "2",
  y: "5",
  width: "6",
  height: "14",
  rx: "1",
  fill: "#9333ea",
  opacity: "0.3"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "9",
  y: "5",
  width: "6",
  height: "14",
  rx: "1",
  fill: "#9333ea"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "16",
  y: "5",
  width: "6",
  height: "14",
  rx: "1",
  fill: "#9333ea",
  opacity: "0.3"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "12",
  cy: "21",
  r: "1",
  fill: "#9333ea"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "8",
  cy: "21",
  r: "1",
  fill: "#9333ea",
  opacity: "0.5"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "16",
  cy: "21",
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