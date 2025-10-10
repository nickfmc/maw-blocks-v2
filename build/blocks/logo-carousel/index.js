/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/logo-carousel/block.json":
/*!*****************************************!*\
  !*** ./blocks/logo-carousel/block.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"maw-blocks/logo-carousel","version":"1.0.0","title":"MAW Logo Carousel","category":"maw-blocks","icon":"images-alt","description":"Infinite NASCAR-style logo/image carousel with responsive settings","keywords":["logo","carousel","infinite","marquee"],"textdomain":"maw-blocks","editorScript":"file:../../build/blocks/logo-carousel/index.js","editorStyle":"file:../../build/blocks/logo-carousel/editor.css","style":"file:../../build/blocks/logo-carousel/style-index.css","viewScript":"maw-blocks-logo-carousel-view","attributes":{"logos":{"type":"array","default":[]},"speed":{"type":"number","default":30},"direction":{"type":"string","default":"left"},"pauseOnHover":{"type":"boolean","default":true},"logosInView":{"type":"number","default":5},"logosInViewTablet":{"type":"number","default":3},"logosInViewMobile":{"type":"number","default":2},"logoHeight":{"type":"number","default":60},"spacing":{"type":"number","default":40}},"supports":{"html":false,"anchor":true,"customClassName":true,"spacing":{"margin":true,"padding":true}}}');

/***/ }),

/***/ "./blocks/logo-carousel/edit.js":
/*!**************************************!*\
  !*** ./blocks/logo-carousel/edit.js ***!
  \**************************************/
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





function Edit({
  attributes,
  setAttributes
}) {
  const {
    logos,
    speed,
    direction,
    pauseOnHover,
    logosInView,
    logosInViewTablet,
    logosInViewMobile,
    logoHeight,
    spacing
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.blockClass)('logo-carousel', {
      'pause-on-hover': pauseOnHover,
      [`direction-${direction}`]: true
    })
  });
  const addLogo = media => {
    const newLogos = [...logos, {
      id: media.id,
      url: media.url,
      alt: media.alt || ''
    }];
    setAttributes({
      logos: newLogos
    });
  };
  const removeLogo = index => {
    const newLogos = logos.filter((_, i) => i !== index);
    setAttributes({
      logos: newLogos
    });
  };
  const updateLogoAlt = (index, alt) => {
    const newLogos = [...logos];
    newLogos[index] = {
      ...newLogos[index],
      alt
    };
    setAttributes({
      logos: newLogos
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Carousel Settings', 'maw-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Animation Speed (seconds)', 'maw-blocks'),
    value: speed,
    onChange: value => setAttributes({
      speed: value
    }),
    min: 5,
    max: 120,
    step: 5,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Time for one complete loop', 'maw-blocks')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Direction', 'maw-blocks'),
    value: direction,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'maw-blocks'),
      value: 'left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'maw-blocks'),
      value: 'right'
    }],
    onChange: value => setAttributes({
      direction: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pause on Hover', 'maw-blocks'),
    checked: pauseOnHover,
    onChange: value => setAttributes({
      pauseOnHover: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Logo Height (px)', 'maw-blocks'),
    value: logoHeight,
    onChange: value => setAttributes({
      logoHeight: value
    }),
    min: 30,
    max: 200,
    step: 5
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spacing Between Logos (px)', 'maw-blocks'),
    value: spacing,
    onChange: value => setAttributes({
      spacing: value
    }),
    min: 10,
    max: 100,
    step: 5
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive Settings', 'maw-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Logos in View (Desktop)', 'maw-blocks'),
    value: logosInView,
    onChange: value => setAttributes({
      logosInView: value
    }),
    min: 2,
    max: 10,
    step: 1,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Number of logos visible at once on desktop', 'maw-blocks')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Logos in View (Tablet)', 'maw-blocks'),
    value: logosInViewTablet,
    onChange: value => setAttributes({
      logosInViewTablet: value
    }),
    min: 2,
    max: 6,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Logos in View (Mobile)', 'maw-blocks'),
    value: logosInViewMobile,
    onChange: value => setAttributes({
      logosInViewMobile: value
    }),
    min: 1,
    max: 4,
    step: 1
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('logo-carousel', 'container')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('logo-carousel', 'admin-controls')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: addLogo,
    allowedTypes: ['image'],
    multiple: false,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "primary",
      onClick: open
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Logo', 'maw-blocks'))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('logo-carousel', 'help-text')
  }, logos.length, " ", logos.length === 1 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('logo', 'maw-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('logos', 'maw-blocks'), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('added', 'maw-blocks'))), logos.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('logo-carousel', 'preview-wrapper')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('logo-carousel', 'preview-track')
  }, logos.map((logo, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: `${logo.id}-${index}`,
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('logo-carousel', 'preview-item')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: logo.url,
    alt: logo.alt,
    style: {
      height: `${logoHeight}px`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isDestructive: true,
    isSmall: true,
    onClick: () => removeLogo(index),
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('logo-carousel', 'remove-btn')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove', 'maw-blocks')))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('logo-carousel', 'settings-info')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preview Settings:', 'maw-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop:', 'maw-blocks'), " ", logosInView, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('logos visible', 'maw-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet:', 'maw-blocks'), " ", logosInViewTablet, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('logos visible', 'maw-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile:', 'maw-blocks'), " ", logosInViewMobile, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('logos visible', 'maw-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Direction:', 'maw-blocks'), " ", direction === 'left' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('→', 'maw-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('←', 'maw-blocks')))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_4__.elementClass)('logo-carousel', 'empty-state')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add logos to create your infinite carousel', 'maw-blocks'))))));
}

/***/ }),

/***/ "./blocks/logo-carousel/editor.scss":
/*!******************************************!*\
  !*** ./blocks/logo-carousel/editor.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./blocks/logo-carousel/index.js":
/*!***************************************!*\
  !*** ./blocks/logo-carousel/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./blocks/logo-carousel/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./blocks/logo-carousel/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/logo-carousel/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./blocks/logo-carousel/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./blocks/logo-carousel/block.json");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_5__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./blocks/logo-carousel/save.js":
/*!**************************************!*\
  !*** ./blocks/logo-carousel/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/shared/utils/classnames */ "./src/shared/utils/classnames.js");



function Save({
  attributes
}) {
  const {
    logos,
    speed,
    direction,
    pauseOnHover,
    logosInView,
    logosInViewTablet,
    logosInViewMobile,
    logoHeight,
    spacing
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.blockClass)('logo-carousel', {
      'pause-on-hover': pauseOnHover,
      [`direction-${direction}`]: true
    }),
    'data-speed': speed,
    'data-direction': direction,
    'data-pause-on-hover': pauseOnHover,
    'data-logos-in-view': logosInView,
    'data-logos-in-view-tablet': logosInViewTablet,
    'data-logos-in-view-mobile': logosInViewMobile,
    'data-logo-height': logoHeight,
    'data-spacing': spacing
  });
  if (logos.length === 0) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('logo-carousel', 'container')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('logo-carousel', 'wrapper')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('logo-carousel', 'track')
  }, logos.map((logo, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: `${logo.id}-${index}`,
    className: (0,_src_shared_utils_classnames__WEBPACK_IMPORTED_MODULE_2__.elementClass)('logo-carousel', 'item')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: logo.url,
    alt: logo.alt,
    loading: "lazy"
  })))))));
}

/***/ }),

/***/ "./blocks/logo-carousel/style.scss":
/*!*****************************************!*\
  !*** ./blocks/logo-carousel/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/logo-carousel/index": 0,
/******/ 			"blocks/logo-carousel/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmaw_blocks"] = globalThis["webpackChunkmaw_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/logo-carousel/style-index"], () => (__webpack_require__("./blocks/logo-carousel/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map