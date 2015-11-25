(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.cssModules = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {"heading":"_body__heading","container":"_body__container","article":"_body__article","footer":"_body__footer"}
},{}],2:[function(require,module,exports){
module.exports = {"heading":"_header__heading","container":"_header__container","logo":"_header__logo","site-name":"_header__site-name _common__heading"}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.body = exports.header = undefined;

var _header = require('./header.css');

var _header2 = _interopRequireDefault(_header);

var _body = require('./body.css');

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.header = _header2.default;
exports.body = _body2.default;

},{"./body.css":1,"./header.css":2}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2xvanVyZXNjcmlwdF9jc3NfbW9kdWxlc19kZW1vL2Nzcy9ib2R5LmNzcyIsInNyYy9jbG9qdXJlc2NyaXB0X2Nzc19tb2R1bGVzX2RlbW8vY3NzL2hlYWRlci5jc3MiLCJzcmMvY2xvanVyZXNjcmlwdF9jc3NfbW9kdWxlc19kZW1vL2Nzcy9zZXR0aW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDSUksTUFBTTtRQUFFLElBQUkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJoZWFkaW5nXCI6XCJfYm9keV9faGVhZGluZ1wiLFwiY29udGFpbmVyXCI6XCJfYm9keV9fY29udGFpbmVyXCIsXCJhcnRpY2xlXCI6XCJfYm9keV9fYXJ0aWNsZVwiLFwiZm9vdGVyXCI6XCJfYm9keV9fZm9vdGVyXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJoZWFkaW5nXCI6XCJfaGVhZGVyX19oZWFkaW5nXCIsXCJjb250YWluZXJcIjpcIl9oZWFkZXJfX2NvbnRhaW5lclwiLFwibG9nb1wiOlwiX2hlYWRlcl9fbG9nb1wiLFwic2l0ZS1uYW1lXCI6XCJfaGVhZGVyX19zaXRlLW5hbWUgX2NvbW1vbl9faGVhZGluZ1wifSIsImltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXIuY3NzJztcbmltcG9ydCBib2R5IGZyb20gJy4vYm9keS5jc3MnO1xuXG5leHBvcnQge1xuICAgIGhlYWRlciwgYm9keVxufSJdfQ==
