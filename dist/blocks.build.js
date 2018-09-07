/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_stat_number_js__ = __webpack_require__(/*! ./block/stat-number.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9zdGF0LW51bWJlci5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************!*\
  !*** ./src/block/stat-number.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: gutenberg-by-numbers\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n//const createElement = wp.element.createElement; // The wp.element.createElement() function to create elements.\n//const RichText = wp.editor.RichText; // For creating editable elements.\n\n/*\nimport { __ } from '@wordpress/i18n';\nimport { Fragment } from '@wordpress/element';\nimport { createBlock, getPhrasingContentSchema } from '@wordpress/blocks';\nimport {\n\tBlockControls,\n\tAlignmentToolbar,\n\tRichText,\n} from '@wordpress/editor';\n*/\n\nvar attributes = {\n\tnumber: { type: 'integer' },\n\tunit: { type: 'string' },\n\tdescription: { type: 'string' }\n};\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\nregisterBlockType('gutenberg-by-numbers/stat-number', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Stat Number'), // Block title.\n\ticon: 'dashboard', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'formatting', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('gutenberg-by-numbers'), __('number'), __('stat')],\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: function edit(props) {\n\t\t// Creates a <p class='wp-block-cgb-block-gutenberg-by-numbers'></p>.\n\t\tvar setAttributes = props.setAttributes;\n\t\tvar _props$attributes = props.attributes,\n\t\t    currentNumber = _props$attributes.currentNumber,\n\t\t    currentUnit = _props$attributes.currentUnit,\n\t\t    currentDescription = _props$attributes.currentDescription;\n\n\n\t\tvar setNumber = function setNumber(event) {\n\t\t\tsetAttributes({ currentNumber: event.target.value });\n\t\t};\n\n\t\tvar setUnit = function setUnit(event) {\n\t\t\tsetAttributes({ currentUnit: event.target.value });\n\t\t};\n\n\t\tvar setDescription = function setDescription(event) {\n\t\t\tsetAttributes({ currentDescription: event.target.value });\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'label',\n\t\t\t\tnull,\n\t\t\t\t'Number:',\n\t\t\t\twp.element.createElement('input', { onChange: setNumber, value: currentNumber })\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'label',\n\t\t\t\tnull,\n\t\t\t\t'Unit:',\n\t\t\t\twp.element.createElement('input', { onChange: setUnit, value: currentUnit })\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'label',\n\t\t\t\tnull,\n\t\t\t\t'Description:',\n\t\t\t\twp.element.createElement('input', { onChange: setDescription, value: currentDescription })\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save(props) {\n\t\tvar _props$attributes2 = props.attributes,\n\t\t    currentNumber = _props$attributes2.currentNumber,\n\t\t    currentUnit = _props$attributes2.currentUnit,\n\t\t    currentDescription = _props$attributes2.currentDescription;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ 'class': 'number' },\n\t\t\t\tcurrentNumber\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ 'class': 'unit' },\n\t\t\t\tcurrentUnit\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ 'class': 'description' },\n\t\t\t\tcurrentDescription\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdGF0LW51bWJlci5qcz9lZTNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGd1dGVuYmVyZy1ieS1udW1iZXJzXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3Ncbi8vY29uc3QgY3JlYXRlRWxlbWVudCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudDsgLy8gVGhlIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgpIGZ1bmN0aW9uIHRvIGNyZWF0ZSBlbGVtZW50cy5cbi8vY29uc3QgUmljaFRleHQgPSB3cC5lZGl0b3IuUmljaFRleHQ7IC8vIEZvciBjcmVhdGluZyBlZGl0YWJsZSBlbGVtZW50cy5cblxuLypcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IGNyZWF0ZUJsb2NrLCBnZXRQaHJhc2luZ0NvbnRlbnRTY2hlbWEgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5pbXBvcnQge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0b3InO1xuKi9cblxudmFyIGF0dHJpYnV0ZXMgPSB7XG5cdG51bWJlcjogeyB0eXBlOiAnaW50ZWdlcicgfSxcblx0dW5pdDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuXHRkZXNjcmlwdGlvbjogeyB0eXBlOiAnc3RyaW5nJyB9XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2d1dGVuYmVyZy1ieS1udW1iZXJzL3N0YXQtbnVtYmVyJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdTdGF0IE51bWJlcicpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ2Rhc2hib2FyZCcsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdmb3JtYXR0aW5nJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oJ2d1dGVuYmVyZy1ieS1udW1iZXJzJyksIF9fKCdudW1iZXInKSwgX18oJ3N0YXQnKV0sXG5cblx0LyoqXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgKlxuICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHQvLyBDcmVhdGVzIGEgPHAgY2xhc3M9J3dwLWJsb2NrLWNnYi1ibG9jay1ndXRlbmJlcmctYnktbnVtYmVycyc+PC9wPi5cblx0XHR2YXIgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cdFx0dmFyIF9wcm9wcyRhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgY3VycmVudE51bWJlciA9IF9wcm9wcyRhdHRyaWJ1dGVzLmN1cnJlbnROdW1iZXIsXG5cdFx0ICAgIGN1cnJlbnRVbml0ID0gX3Byb3BzJGF0dHJpYnV0ZXMuY3VycmVudFVuaXQsXG5cdFx0ICAgIGN1cnJlbnREZXNjcmlwdGlvbiA9IF9wcm9wcyRhdHRyaWJ1dGVzLmN1cnJlbnREZXNjcmlwdGlvbjtcblxuXG5cdFx0dmFyIHNldE51bWJlciA9IGZ1bmN0aW9uIHNldE51bWJlcihldmVudCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGN1cnJlbnROdW1iZXI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcblx0XHR9O1xuXG5cdFx0dmFyIHNldFVuaXQgPSBmdW5jdGlvbiBzZXRVbml0KGV2ZW50KSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgY3VycmVudFVuaXQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcblx0XHR9O1xuXG5cdFx0dmFyIHNldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24oZXZlbnQpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBjdXJyZW50RGVzY3JpcHRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnbGFiZWwnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnTnVtYmVyOicsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IG9uQ2hhbmdlOiBzZXROdW1iZXIsIHZhbHVlOiBjdXJyZW50TnVtYmVyIH0pXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnbGFiZWwnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnVW5pdDonLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBvbkNoYW5nZTogc2V0VW5pdCwgdmFsdWU6IGN1cnJlbnRVbml0IH0pXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnbGFiZWwnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnRGVzY3JpcHRpb246Jyxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgb25DaGFuZ2U6IHNldERlc2NyaXB0aW9uLCB2YWx1ZTogY3VycmVudERlc2NyaXB0aW9uIH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHQvKipcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgKlxuICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIF9wcm9wcyRhdHRyaWJ1dGVzMiA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIGN1cnJlbnROdW1iZXIgPSBfcHJvcHMkYXR0cmlidXRlczIuY3VycmVudE51bWJlcixcblx0XHQgICAgY3VycmVudFVuaXQgPSBfcHJvcHMkYXR0cmlidXRlczIuY3VycmVudFVuaXQsXG5cdFx0ICAgIGN1cnJlbnREZXNjcmlwdGlvbiA9IF9wcm9wcyRhdHRyaWJ1dGVzMi5jdXJyZW50RGVzY3JpcHRpb247XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdHsgJ2NsYXNzJzogJ251bWJlcicgfSxcblx0XHRcdFx0Y3VycmVudE51bWJlclxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7ICdjbGFzcyc6ICd1bml0JyB9LFxuXHRcdFx0XHRjdXJyZW50VW5pdFxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7ICdjbGFzcyc6ICdkZXNjcmlwdGlvbicgfSxcblx0XHRcdFx0Y3VycmVudERlc2NyaXB0aW9uXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svc3RhdC1udW1iZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);