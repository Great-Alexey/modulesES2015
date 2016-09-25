(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Class1 = function () {
	function Class1(name) {
		_classCallCheck(this, Class1);

		this.name = name;

		this.showName();
	}

	_createClass(Class1, [{
		key: "showName",
		value: function showName() {
			console.log(this.name);
		}
	}]);

	return Class1;
}();

exports.default = Class1;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Class2 = function () {
	function Class2(name) {
		_classCallCheck(this, Class2);

		this.name = name;

		this.showName();
	}

	_createClass(Class2, [{
		key: "showName",
		value: function showName() {
			console.log(this.name);
		}
	}]);

	return Class2;
}();

exports.default = Class2;

},{}],3:[function(require,module,exports){
'use strict';

var _module = require('./modules/module1');

var _module2 = _interopRequireDefault(_module);

var _module3 = require('./modules/module2');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module2.default)();
(0, _module4.default)();

},{"./modules/module1":4,"./modules/module2":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _Class = require('../classes/Class1');

var _Class2 = _interopRequireDefault(_Class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
	var name = 'modules1';

	console.log(name);

	new _Class2.default(name);
}

exports.default = main;

},{"../classes/Class1":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _Class = require('../classes/Class2');

var _Class2 = _interopRequireDefault(_Class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
	var name = 'modules2';

	console.log(name);

	new _Class2.default(name);
}

exports.default = main;

},{"../classes/Class2":2}]},{},[3]);

//# sourceMappingURL=main.js.map
