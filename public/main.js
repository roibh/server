(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../methodus/methodus-client/dist/methodus-client.js":
/*!********************************************************************!*\
  !*** C:/projects/methodus/methodus-client/dist/methodus-client.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(10));
__export(__webpack_require__(11));
__export(__webpack_require__(12));
__export(__webpack_require__(13));
__export(__webpack_require__(14));
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rest = /** @class */ (function () {
    function Rest(uri, verb, paramsMap, args) {
        this.options = {};
        this.uri = uri;
        this.options = this.parse(verb, paramsMap, args);
        if (Rest.interceptor) {
            this.options = Rest.interceptor(this.options);
        }
        this.request = new Request(this.uri);
    }
    Rest.intercept = function (interceptor) {
        this.interceptor = interceptor;
    };
    Rest.prototype.prepare = function (url, method, params, body, query, headers) {
        if (params && url) {
            params.forEach(function (param) {
                if (url) {
                    url = url.replace(":" + param.id, param.value);
                }
            });
        }
        if (query && query.length > 0) {
            url = url + "?" + query.join("&");
        }
        var formData = new FormData();
        Object.keys(body).forEach(function (key) {
            formData.append(key, body[key]);
        });
        if (window.RELATIVE_CONTRACTS) {
            url = '.' + url;
        }
        this.uri = url;
        this.request = new Request(url);
        var options = {
            cache: "default",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            method: method,
            mode: "cors",
        };
        if (body && Object.keys(body).length > 0) {
            Object.assign(options, { body: JSON.stringify(body) });
        }
        return options;
    };
    Rest.prototype.parse = function (verb, paramsMap, args) {
        var _this = this;
        var queryString = [];
        var body = {};
        var formData;
        var headers = {};
        var options = {
            cache: "default",
            credentials: "include",
            headers: Object.assign(headers, {
                "Content-Type": "application/json",
            }),
            method: verb,
            mode: "cors",
            redirect: "follow",
        };
        paramsMap.forEach(function (param) {
            if (param.index !== undefined) {
                switch (param.from) {
                    case "params":
                        if (_this.uri) {
                            _this.uri = _this.uri.replace(":" + param.name, args[param.index]);
                        }
                        break;
                    case "query":
                        if (param.name) {
                            queryString.push({ name: param.name, value: args[param.index] });
                        }
                        else {
                            var queryObject_1 = args[param.index];
                            Object.keys(queryObject_1).forEach(function (key) {
                                if (Array.isArray(queryObject_1[key])) {
                                    queryObject_1[key].forEach(function (item) {
                                        queryString.push({ name: key, value: item });
                                    });
                                }
                                else {
                                    queryString.push({ name: key, value: queryObject_1[key] });
                                }
                            });
                        }
                        break;
                    case "body":
                        if (param.name) {
                            body[param.name] = args[param.index];
                        }
                        else {
                            Object.assign(body, args[param.index]);
                        }
                        break;
                    case "files":
                        // create a new multipart-form for every file
                        var formData_1 = new FormData();
                        var argus = args[param.index];
                        if (!Array.isArray(args[param.index])) {
                            argus = [args[param.index]];
                        }
                        argus.forEach(function (file) {
                            formData_1.append(param.name || 'files', file, file.name);
                        });
                        Object.assign(options, { body: formData_1 });
                        delete options.headers['Content-Type'];
                        break;
                    case "headers":
                        if (param.name) {
                            headers[param.name] = args[param.index];
                        }
                        else {
                            Object.assign(headers, args[param.index]);
                        }
                        break;
                }
            }
        });
        if (queryString.length > 0) {
            this.uri = this.uri + "?" + queryString.map(function (item) {
                if (typeof item.value === "object") {
                    return item.name + "=" + encodeURIComponent(JSON.stringify(item.value));
                }
                else {
                    return item.name + "=" + encodeURIComponent(item.value);
                }
            }).join("&");
        }
        if (body && Object.keys(body).length > 0) {
            Object.assign(options, { body: JSON.stringify(body) });
        }
        return options;
    };
    Rest.prototype.send = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.request, this.options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    Rest.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.request, this.options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    return Rest;
}());
exports.Rest = Rest;
//# sourceMappingURL=rest.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib___ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__lib___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__lib___[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(15));
__export(__webpack_require__(20));
__export(__webpack_require__(0));
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(5));
__export(__webpack_require__(6));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
__export(__webpack_require__(9));
//# sourceMappingURL=index.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** the MethodConfig decorator registers the controller as a router
 *  @param {string} name - the identifier of the controller in the resolver.
 *  @param {Function[]} middlewares - an array of middlewares to apply to this controller}
 */
function MethodConfigBase(name) {
    return function (target) {
        var proto = target.prototype || target.__proto__;
        // means its a static class , no prototype
        if (target.methodus) {
            proto = target;
        }
        proto.methodus_base = JSON.parse(JSON.stringify(target.methodus[name]));
    };
}
exports.MethodConfigBase = MethodConfigBase;
//# sourceMappingURL=method-config-base.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/** the MethodConfig decorator registers the controller as a router
 *  @param {string} name - the identifier of the controller in the resolver.
 *  @param {Function[]} middlewares - an array of middlewares to apply to this controller}
 */
function MethodConfigExtend(extendTarget) {
    var _this = this;
    return function (target) {
        var filterKeys = ['length', 'prototype', 'name', 'methodus', 'methodus_base'];
        target.methodus[target.name] = JSON.parse(JSON.stringify(extendTarget.methodus_base));
        Object.getOwnPropertyNames(extendTarget.prototype.constructor).forEach(function (key) {
            if (filterKeys.indexOf(key) === -1) {
                var func = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    args.push({ target: target, instruct: true });
                                    return [4 /*yield*/, extendTarget.prototype.constructor[key].apply(target, args)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                target.prototype.constructor[key] = func.bind(target);
            }
        });
        var mTarget = target.methodus[target.name];
        var routePrefix = target.name.toLocaleLowerCase();
        Object.keys(mTarget._descriptors).forEach(function (desciptorKey) {
            var route = mTarget._descriptors[desciptorKey].route;
            mTarget._descriptors[desciptorKey].route = '/' + routePrefix + route;
        });
    };
}
exports.MethodConfigExtend = MethodConfigExtend;
//# sourceMappingURL=method-config-extend.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** the MethodConfig decorator registers the controller as a router
 *  @param {string} name - the identifier of the controller in the resolver.
 *  @param {Function[]} middlewares - an array of middlewares to apply to this controller}
 */
function MethodConfig(name) {
    return function (target) {
        var proto = target.prototype || target.__proto__;
        // means its a static class , no prototype
        if (target.methodus) {
            proto = target;
        }
        target.methodus[name] = target.methodus[name] || { _events: {}, _descriptors: {} };
        proto.methodus[name].name = name;
    };
}
exports.MethodConfig = MethodConfig;
//# sourceMappingURL=method-config.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function pushParams(target, propertyKey, param) {
    // const methodus = fp.maybeMethodus(target);
    target.methodus = target.methodus || {};
    var name = target.name || target.constructor.name;
    target.methodus[name] = target.methodus[name] || { _events: {}, _descriptors: {} };
    var mTarget = target.methodus[name];
    mTarget._descriptors[propertyKey] = mTarget._descriptors[propertyKey] || { params: [] };
    mTarget._descriptors[propertyKey].params.push(Object.assign({}, param, { type: "any" }));
}
function build(from, name, type) {
    return function (target, propertyKey, parameterIndex) {
        if (name) {
            pushParams(target, propertyKey, {
                from: from, index: parameterIndex,
                name: name,
            });
        }
        else {
            pushParams(target, propertyKey, { from: from, index: parameterIndex });
        }
    };
}
function Body(name, type) {
    return build("body", name, type);
}
exports.Body = Body;
function Param(name) {
    return build("params", name);
}
exports.Param = Param;
function Files(name) {
    return build("files", name);
}
exports.Files = Files;
function Headers(name) {
    return build("headers", name);
}
exports.Headers = Headers;
function Cookies(name) {
    return build("cookies", name);
}
exports.Cookies = Cookies;
function Query(name) {
    return build("query", name);
}
exports.Query = Query;
function Request(name) {
    return function () { return false; };
}
exports.Request = Request;
function Response(name) {
    return function () { return false; };
}
exports.Response = Response;
//# sourceMappingURL=params.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var excludedProps = ["constructor"];
var commons_1 = __webpack_require__(0);
var rest_1 = __webpack_require__(1);
var methodMetadataKey = "methodus";
var metadataKey = "params";
/** the @Method decorator registers the model with the odm
 *  @param {Verbs} verb - the HTTP verb for the route.
 *  @param {string} route - express route string.
 *  @param {Function[]} middlewares - an array of middlewares to apply to this function}
 */
var METHODLOG = "methodus::Method";
function Method(verb, route) {
    var _this = this;
    return function (target, propertyKey, descriptor) {
        target.methodus = target.methodus || {};
        var name = target.name || target.constructor.name;
        target.methodus[name] = target.methodus[name] || { _events: {}, _descriptors: {} };
        var mTarget = target.methodus[name];
        var metaObject = Object.assign({}, { verb: verb, route: route, propertyKey: propertyKey, params: [] });
        if (mTarget._descriptors[propertyKey]) {
            metaObject = Object.assign(metaObject, { params: mTarget._descriptors[propertyKey].params });
        }
        mTarget._descriptors[propertyKey] = metaObject; // as MethodDescriptor;
        var paramsMap;
        if (metaObject.params) {
            paramsMap = metaObject.params;
            paramsMap.sort(function (a, b) {
                return a.index - b.index;
            });
        }
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(_this, void 0, void 0, function () {
                var config, methodus, completeConfiguration, _a, finalRoute, request, result;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            config = { methodType: commons_1.MethodType.Http };
                            if (window.METHODUS_CONFIG) {
                                config = window.METHODUS_CONFIG;
                            }
                            if (args && args[args.length - 1] && args[args.length - 1].instruct) {
                                target = args[args.length - 1].target;
                                target.methodus = target.methodus || {};
                                name = target.name || target.constructor.name;
                                target.methodus[name] = target.methodus[name] || { _events: {}, _descriptors: {} };
                                mTarget = target.methodus[name];
                                metaObject = mTarget._descriptors[propertyKey];
                                paramsMap = metaObject.params;
                                paramsMap.sort(function (a, b) {
                                    return a.index - b.index;
                                });
                            }
                            methodus = mTarget;
                            // merge the configuration object
                            Object.assign(methodus, methodus._descriptors[propertyKey]);
                            completeConfiguration = Object.assign({}, methodus, config);
                            _a = config.methodType;
                            switch (_a) {
                                case commons_1.MethodType.Mock: return [3 /*break*/, 1];
                                case commons_1.MethodType.Http: return [3 /*break*/, 3];
                            }
                            return [3 /*break*/, 5];
                        case 1: return [4 /*yield*/, originalMethod.apply(target, args)];
                        case 2: return [2 /*return*/, _b.sent()];
                        case 3:
                            finalRoute = completeConfiguration.route;
                            if (target.base !== undefined) {
                                finalRoute = target.base + finalRoute;
                            }
                            else if (window.RELATIVE_CONTRACTS) {
                                finalRoute = '.' + finalRoute;
                            }
                            request = new rest_1.Rest(finalRoute, completeConfiguration.verb, paramsMap, args);
                            return [4 /*yield*/, request.send()];
                        case 4:
                            result = _b.sent();
                            return [2 /*return*/, result];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        return descriptor;
    };
}
exports.Method = Method;
//# sourceMappingURL=method.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Verbs;
(function (Verbs) {
    Verbs["Get"] = "GET";
    Verbs["Post"] = "POST";
    Verbs["Put"] = "PUT";
    Verbs["Patch"] = "PATCH";
    Verbs["Head"] = "HEAD";
    Verbs["Delete"] = "DELETE";
})(Verbs = exports.Verbs || (exports.Verbs = {}));
var MethodType;
(function (MethodType) {
    MethodType["Local"] = "Local";
    MethodType["Http"] = "Http";
    MethodType["MQ"] = "MQ";
    MethodType["Redis"] = "Redis";
    MethodType["Socket"] = "Socket";
    MethodType["Kafka"] = "Kafka";
    MethodType["Mock"] = "Mock";
})(MethodType = exports.MethodType || (exports.MethodType = {}));
//# sourceMappingURL=enums.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Prototyped = /** @class */ (function () {
    function Prototyped() {
    }
    return Prototyped;
}());
exports.Prototyped = Prototyped;
//# sourceMappingURL=prototyped.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MethodDescriptor = /** @class */ (function () {
    function MethodDescriptor() {
    }
    return MethodDescriptor;
}());
exports.MethodDescriptor = MethodDescriptor;
//# sourceMappingURL=method-descriptor.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MethodusClass = /** @class */ (function () {
    function MethodusClass() {
    }
    return MethodusClass;
}());
exports.MethodusClass = MethodusClass;
//# sourceMappingURL=methodus-class.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ParamsMap = /** @class */ (function () {
    function ParamsMap() {
    }
    return ParamsMap;
}());
exports.ParamsMap = ParamsMap;
//# sourceMappingURL=params-map.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(16));
__export(__webpack_require__(17));
__export(__webpack_require__(18));
__export(__webpack_require__(19));
function generateUuid() {
    return Math.random().toString() +
        Math.random().toString() +
        Math.random().toString();
}
exports.generateUuid = generateUuid;
//# sourceMappingURL=index.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MethodError = /** @class */ (function (_super) {
    __extends(MethodError, _super);
    function MethodError(error, statusCode, additional) {
        var _this = this;
        var message = error;
        if (typeof error === "object") {
            message = error.message;
        }
        _this = _super.call(this, message) || this;
        _this.error = error;
        _this.statusCode = statusCode || 500;
        if (additional) {
            _this.additional = additional;
        }
        return _this;
    }
    return MethodError;
}(Error));
exports.MethodError = MethodError;
//# sourceMappingURL=methodError.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MethodEvent = /** @class */ (function () {
    function MethodEvent(name, value, exchangeName) {
        this.value = value;
        this.name = name;
        if (exchangeName) {
            this.exchanges = Array.isArray(exchangeName) ? (exchangeName) : [exchangeName];
        }
    }
    MethodEvent.emit = function (name, value, exchangeName) {
        var eventResult = new MethodEvent(name, value, exchangeName);
        eventResult.result = eventResult;
    };
    return MethodEvent;
}());
exports.MethodEvent = MethodEvent;
//# sourceMappingURL=methodEvent.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MethodResult = /** @class */ (function () {
    function MethodResult(result, total, page) {
        this.result = result;
        if (total) {
            this.total = total;
        }
        if (page) {
            this.page = page;
        }
    }
    MethodResult.prototype.pipe = function (streamToPipe) {
        this.stream = streamToPipe;
    };
    return MethodResult;
}());
exports.MethodResult = MethodResult;
//# sourceMappingURL=methodResult.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MethodMessage = /** @class */ (function () {
    function MethodMessage(to, message, metadata, args, correlationId) {
        this.to = to;
        this.message = message;
        this.metadata = metadata;
        this.args = args;
        this.correlationId = correlationId;
    }
    return MethodMessage;
}());
exports.MethodMessage = MethodMessage;
//# sourceMappingURL=methodMessage.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));
//# sourceMappingURL=index.js.map

/***/ })
/******/ ]);
});

/***/ }),

/***/ "../@signnature/client/contracts/authcontroller.js":
/*!*********************************************************!*\
  !*** ../@signnature/client/contracts/authcontroller.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sun Dec 30 2018 13:16:47 GMT+0200 (Israel Standard Time)
var M = __webpack_require__(/*! @methodus/client */ "../../methodus/methodus-client/dist/methodus-client.js");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.signup = function (userOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    AuthController.token = function (userOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    AuthController.verify = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    AuthController.decode = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    __decorate([
        M.Method(M.Verbs.Post, '/api/auth/signup'),
        __param(0, M.Body('userOptions')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthController, "signup", null);
    __decorate([
        M.Method(M.Verbs.Post, '/api/auth/token'),
        __param(0, M.Body('userOptions')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthController, "token", null);
    __decorate([
        M.Method(M.Verbs.Get, '/auth/verify'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AuthController, "verify", null);
    __decorate([
        M.Method(M.Verbs.Get, '/api/auth/verify'),
        __param(0, M.Body('token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AuthController, "decode", null);
    AuthController = __decorate([
        M.MethodConfig('AuthController')
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
//# sourceMappingURL=authcontroller.js.map

/***/ }),

/***/ "../@signnature/client/contracts/datacontroller.js":
/*!*********************************************************!*\
  !*** ../@signnature/client/contracts/datacontroller.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sun Dec 30 2018 13:16:47 GMT+0200 (Israel Standard Time)
var M = __webpack_require__(/*! @methodus/client */ "../../methodus/methodus-client/dist/methodus-client.js");
var DataController = /** @class */ (function () {
    function DataController() {
    }
    DataController.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    DataController.create = function (record) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    DataController.update = function (id, record) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    DataController.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    DataController.query = function (queryObject) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    __decorate([
        M.Method(M.Verbs.Get, '/id/:id'),
        __param(0, M.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], DataController, "get", null);
    __decorate([
        M.Method(M.Verbs.Post, '/insert'),
        __param(0, M.Body('record')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], DataController, "create", null);
    __decorate([
        M.Method(M.Verbs.Post, '/id/:id'),
        __param(0, M.Param('id')), __param(1, M.Body('record')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], DataController, "update", null);
    __decorate([
        M.Method(M.Verbs.Delete, '/id/:id'),
        __param(0, M.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], DataController, "delete", null);
    __decorate([
        M.Method(M.Verbs.Post, '/query'),
        __param(0, M.Body('query')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], DataController, "query", null);
    DataController = __decorate([
        M.MethodConfigBase('DataController')
    ], DataController);
    return DataController;
}());
exports.DataController = DataController;
//# sourceMappingURL=datacontroller.js.map

/***/ }),

/***/ "../@signnature/client/contracts/librarydatacontroller.js":
/*!****************************************************************!*\
  !*** ../@signnature/client/contracts/librarydatacontroller.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sun Dec 30 2018 13:16:47 GMT+0200 (Israel Standard Time)
var M = __webpack_require__(/*! @methodus/client */ "../../methodus/methodus-client/dist/methodus-client.js");
/*start custom*/
var datacontroller_1 = __webpack_require__(/*! ./datacontroller */ "../@signnature/client/contracts/datacontroller.js");
var LibraryDataController = /** @class */ (function (_super) {
    __extends(LibraryDataController, _super);
    function LibraryDataController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LibraryDataController = __decorate([
        M.MethodConfig('LibraryDataController'),
        M.MethodConfigExtend(datacontroller_1.DataController)
    ], LibraryDataController);
    return LibraryDataController;
}(datacontroller_1.DataController));
exports.LibraryDataController = LibraryDataController;
//# sourceMappingURL=librarydatacontroller.js.map

/***/ }),

/***/ "../@signnature/client/contracts/playercontroller.js":
/*!***********************************************************!*\
  !*** ../@signnature/client/contracts/playercontroller.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sun Dec 30 2018 13:16:47 GMT+0200 (Israel Standard Time)
var M = __webpack_require__(/*! @methodus/client */ "../../methodus/methodus-client/dist/methodus-client.js");
var PlayerController = /** @class */ (function () {
    function PlayerController() {
    }
    PlayerController.registerPlayer = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    PlayerController.validatePlayer = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    PlayerController.runPlayer = function (group) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    __decorate([
        M.Method(M.Verbs.Post, '/register-player/:token'),
        __param(0, M.Param('token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], PlayerController, "registerPlayer", null);
    __decorate([
        M.Method(M.Verbs.Post, '/validate-player/:token'),
        __param(0, M.Param('token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], PlayerController, "validatePlayer", null);
    __decorate([
        M.Method(M.Verbs.Post, '/run-player/:group'),
        __param(0, M.Param('group')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], PlayerController, "runPlayer", null);
    PlayerController = __decorate([
        M.MethodConfig('PlayerController')
    ], PlayerController);
    return PlayerController;
}());
exports.PlayerController = PlayerController;
//# sourceMappingURL=playercontroller.js.map

/***/ }),

/***/ "../@signnature/client/contracts/playlist.js":
/*!***************************************************!*\
  !*** ../@signnature/client/contracts/playlist.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sun Dec 30 2018 13:16:47 GMT+0200 (Israel Standard Time)
var M = __webpack_require__(/*! @methodus/client */ "../../methodus/methodus-client/dist/methodus-client.js");
/*start custom*/
var datacontroller_1 = __webpack_require__(/*! ./datacontroller */ "../@signnature/client/contracts/datacontroller.js");
var Playlist = /** @class */ (function (_super) {
    __extends(Playlist, _super);
    function Playlist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Playlist = __decorate([
        M.MethodConfig('Playlist'),
        M.MethodConfigExtend(datacontroller_1.DataController)
    ], Playlist);
    return Playlist;
}(datacontroller_1.DataController));
exports.Playlist = Playlist;
//# sourceMappingURL=playlist.js.map

/***/ }),

/***/ "../@signnature/client/contracts/scheduledatacontroller.js":
/*!*****************************************************************!*\
  !*** ../@signnature/client/contracts/scheduledatacontroller.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sun Dec 30 2018 13:16:47 GMT+0200 (Israel Standard Time)
var M = __webpack_require__(/*! @methodus/client */ "../../methodus/methodus-client/dist/methodus-client.js");
/*start custom*/
var datacontroller_1 = __webpack_require__(/*! ./datacontroller */ "../@signnature/client/contracts/datacontroller.js");
var ScheduleDataController = /** @class */ (function (_super) {
    __extends(ScheduleDataController, _super);
    function ScheduleDataController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScheduleDataController = __decorate([
        M.MethodConfig('ScheduleDataController'),
        M.MethodConfigExtend(datacontroller_1.DataController)
    ], ScheduleDataController);
    return ScheduleDataController;
}(datacontroller_1.DataController));
exports.ScheduleDataController = ScheduleDataController;
//# sourceMappingURL=scheduledatacontroller.js.map

/***/ }),

/***/ "../@signnature/client/contracts/screengroupdatacontroller.js":
/*!********************************************************************!*\
  !*** ../@signnature/client/contracts/screengroupdatacontroller.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sun Dec 30 2018 13:16:47 GMT+0200 (Israel Standard Time)
var M = __webpack_require__(/*! @methodus/client */ "../../methodus/methodus-client/dist/methodus-client.js");
/*start custom*/
var datacontroller_1 = __webpack_require__(/*! ./datacontroller */ "../@signnature/client/contracts/datacontroller.js");
var ScreenGroupDataController = /** @class */ (function (_super) {
    __extends(ScreenGroupDataController, _super);
    function ScreenGroupDataController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScreenGroupDataController = __decorate([
        M.MethodConfig('ScreenGroupDataController'),
        M.MethodConfigExtend(datacontroller_1.DataController)
    ], ScreenGroupDataController);
    return ScreenGroupDataController;
}(datacontroller_1.DataController));
exports.ScreenGroupDataController = ScreenGroupDataController;
//# sourceMappingURL=screengroupdatacontroller.js.map

/***/ }),

/***/ "../@signnature/client/contracts/screensdatacontroller.js":
/*!****************************************************************!*\
  !*** ../@signnature/client/contracts/screensdatacontroller.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sun Dec 30 2018 13:16:47 GMT+0200 (Israel Standard Time)
var M = __webpack_require__(/*! @methodus/client */ "../../methodus/methodus-client/dist/methodus-client.js");
/*start custom*/
var datacontroller_1 = __webpack_require__(/*! ./datacontroller */ "../@signnature/client/contracts/datacontroller.js");
var ScreensDataController = /** @class */ (function (_super) {
    __extends(ScreensDataController, _super);
    function ScreensDataController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScreensDataController = __decorate([
        M.MethodConfig('ScreensDataController'),
        M.MethodConfigExtend(datacontroller_1.DataController)
    ], ScreensDataController);
    return ScreensDataController;
}(datacontroller_1.DataController));
exports.ScreensDataController = ScreensDataController;
//# sourceMappingURL=screensdatacontroller.js.map

/***/ }),

/***/ "../@signnature/client/contracts/slidesdatacontroller.js":
/*!***************************************************************!*\
  !*** ../@signnature/client/contracts/slidesdatacontroller.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sun Dec 30 2018 13:16:47 GMT+0200 (Israel Standard Time)
var M = __webpack_require__(/*! @methodus/client */ "../../methodus/methodus-client/dist/methodus-client.js");
/*start custom*/
var datacontroller_1 = __webpack_require__(/*! ./datacontroller */ "../@signnature/client/contracts/datacontroller.js");
var SlidesDataController = /** @class */ (function (_super) {
    __extends(SlidesDataController, _super);
    function SlidesDataController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlidesDataController = __decorate([
        M.MethodConfig('SlidesDataController'),
        M.MethodConfigExtend(datacontroller_1.DataController)
    ], SlidesDataController);
    return SlidesDataController;
}(datacontroller_1.DataController));
exports.SlidesDataController = SlidesDataController;
//# sourceMappingURL=slidesdatacontroller.js.map

/***/ }),

/***/ "../@signnature/client/contracts/upload.js":
/*!*************************************************!*\
  !*** ../@signnature/client/contracts/upload.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sun Dec 30 2018 13:16:47 GMT+0200 (Israel Standard Time)
var M = __webpack_require__(/*! @methodus/client */ "../../methodus/methodus-client/dist/methodus-client.js");
var Upload = /** @class */ (function () {
    function Upload() {
    }
    Upload.capture = function (files) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    __decorate([
        M.Method(M.Verbs.Post, '/upload'),
        __param(0, M.Files('files')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Upload, "capture", null);
    Upload = __decorate([
        M.MethodConfig('Upload')
    ], Upload);
    return Upload;
}());
exports.Upload = Upload;
//# sourceMappingURL=upload.js.map

/***/ }),

/***/ "../@signnature/client/contracts/usercontroller.js":
/*!*********************************************************!*\
  !*** ../@signnature/client/contracts/usercontroller.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sun Dec 30 2018 13:16:47 GMT+0200 (Israel Standard Time)
var M = __webpack_require__(/*! @methodus/client */ "../../methodus/methodus-client/dist/methodus-client.js");
/*start custom*/
var datacontroller_1 = __webpack_require__(/*! ./datacontroller */ "../@signnature/client/contracts/datacontroller.js");
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserController = __decorate([
        M.MethodConfig('UserController'),
        M.MethodConfigExtend(datacontroller_1.DataController)
    ], UserController);
    return UserController;
}(datacontroller_1.DataController));
exports.UserController = UserController;
//# sourceMappingURL=usercontroller.js.map

/***/ }),

/***/ "../@signnature/client/includes/usermock.js":
/*!**************************************************!*\
  !*** ../@signnature/client/includes/usermock.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserMock = /** @class */ (function () {
    function UserMock() {
    }
    UserMock.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var results, i, user;
            return __generator(this, function (_a) {
                results = [];
                for (i = 0; i < 10; i++) {
                    user = new Object();
                    user.Email = 'info@gmail.com';
                    user.FirstName = 'First name';
                    user.LastName = 'Last name';
                    user.Password = '********';
                    results.push(user);
                }
                return [2 /*return*/, results];
            });
        });
    };
    UserMock.get = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                user = new Object();
                user.Email = 'info@gmail.com';
                user.FirstName = 'First name';
                user.LastName = 'Last name';
                user.Password = '********';
                return [2 /*return*/, user];
            });
        });
    };
    return UserMock;
}());
exports.UserMock = UserMock;
//# sourceMappingURL=usermock.js.map

/***/ }),

/***/ "../@signnature/client/index.js":
/*!**************************************!*\
  !*** ../@signnature/client/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sun Dec 30 2018 13:16:47 GMT+0200 (Israel Standard Time)
/**/
var usermock_1 = __webpack_require__(/*! ./includes/usermock */ "../@signnature/client/includes/usermock.js");
exports.UserMock = usermock_1.UserMock;
var datacontroller_1 = __webpack_require__(/*! ./contracts/datacontroller */ "../@signnature/client/contracts/datacontroller.js");
var datacontroller_2 = __webpack_require__(/*! ./contracts/datacontroller */ "../@signnature/client/contracts/datacontroller.js");
exports.DataController = datacontroller_2.DataController;
var upload_1 = __webpack_require__(/*! ./contracts/upload */ "../@signnature/client/contracts/upload.js");
var upload_2 = __webpack_require__(/*! ./contracts/upload */ "../@signnature/client/contracts/upload.js");
exports.Upload = upload_2.Upload;
var usercontroller_1 = __webpack_require__(/*! ./contracts/usercontroller */ "../@signnature/client/contracts/usercontroller.js");
var usercontroller_2 = __webpack_require__(/*! ./contracts/usercontroller */ "../@signnature/client/contracts/usercontroller.js");
exports.UserController = usercontroller_2.UserController;
var authcontroller_1 = __webpack_require__(/*! ./contracts/authcontroller */ "../@signnature/client/contracts/authcontroller.js");
var authcontroller_2 = __webpack_require__(/*! ./contracts/authcontroller */ "../@signnature/client/contracts/authcontroller.js");
exports.AuthController = authcontroller_2.AuthController;
var screensdatacontroller_1 = __webpack_require__(/*! ./contracts/screensdatacontroller */ "../@signnature/client/contracts/screensdatacontroller.js");
var screensdatacontroller_2 = __webpack_require__(/*! ./contracts/screensdatacontroller */ "../@signnature/client/contracts/screensdatacontroller.js");
exports.ScreensDataController = screensdatacontroller_2.ScreensDataController;
var librarydatacontroller_1 = __webpack_require__(/*! ./contracts/librarydatacontroller */ "../@signnature/client/contracts/librarydatacontroller.js");
var librarydatacontroller_2 = __webpack_require__(/*! ./contracts/librarydatacontroller */ "../@signnature/client/contracts/librarydatacontroller.js");
exports.LibraryDataController = librarydatacontroller_2.LibraryDataController;
var slidesdatacontroller_1 = __webpack_require__(/*! ./contracts/slidesdatacontroller */ "../@signnature/client/contracts/slidesdatacontroller.js");
var slidesdatacontroller_2 = __webpack_require__(/*! ./contracts/slidesdatacontroller */ "../@signnature/client/contracts/slidesdatacontroller.js");
exports.SlidesDataController = slidesdatacontroller_2.SlidesDataController;
var playlist_1 = __webpack_require__(/*! ./contracts/playlist */ "../@signnature/client/contracts/playlist.js");
var playlist_2 = __webpack_require__(/*! ./contracts/playlist */ "../@signnature/client/contracts/playlist.js");
exports.Playlist = playlist_2.Playlist;
var playercontroller_1 = __webpack_require__(/*! ./contracts/playercontroller */ "../@signnature/client/contracts/playercontroller.js");
var playercontroller_2 = __webpack_require__(/*! ./contracts/playercontroller */ "../@signnature/client/contracts/playercontroller.js");
exports.PlayerController = playercontroller_2.PlayerController;
var screengroupdatacontroller_1 = __webpack_require__(/*! ./contracts/screengroupdatacontroller */ "../@signnature/client/contracts/screengroupdatacontroller.js");
var screengroupdatacontroller_2 = __webpack_require__(/*! ./contracts/screengroupdatacontroller */ "../@signnature/client/contracts/screengroupdatacontroller.js");
exports.ScreenGroupDataController = screengroupdatacontroller_2.ScreenGroupDataController;
var scheduledatacontroller_1 = __webpack_require__(/*! ./contracts/scheduledatacontroller */ "../@signnature/client/contracts/scheduledatacontroller.js");
var scheduledatacontroller_2 = __webpack_require__(/*! ./contracts/scheduledatacontroller */ "../@signnature/client/contracts/scheduledatacontroller.js");
exports.ScheduleDataController = scheduledatacontroller_2.ScheduleDataController;
function getAll() {
    return ['DataController', 'Upload', 'UserController', 'AuthController', 'ScreensDataController', 'LibraryDataController', 'SlidesDataController', 'Playlist', 'PlayerController', 'ScreenGroupDataController', 'ScheduleDataController'];
}
exports.getAll = getAll;
function get(contractName) {
    switch (contractName) {
        case 'DataController':
            return datacontroller_1.DataController;
        case 'Upload':
            return upload_1.Upload;
        case 'UserController':
            return usercontroller_1.UserController;
        case 'AuthController':
            return authcontroller_1.AuthController;
        case 'ScreensDataController':
            return screensdatacontroller_1.ScreensDataController;
        case 'LibraryDataController':
            return librarydatacontroller_1.LibraryDataController;
        case 'SlidesDataController':
            return slidesdatacontroller_1.SlidesDataController;
        case 'Playlist':
            return playlist_1.Playlist;
        case 'PlayerController':
            return playercontroller_1.PlayerController;
        case 'ScreenGroupDataController':
            return screengroupdatacontroller_1.ScreenGroupDataController;
        case 'ScheduleDataController':
            return scheduledatacontroller_1.ScheduleDataController;
    }
}
exports.get = get;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n<div>\r\n\r\n\r\n<!-- <nav class=\"navbar  navbar-light bg-light\">\r\n  <div class=\"pull-left navbar-header\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/discount.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> SignNature</a>\r\n\r\n  </div>\r\n  <div id=\"navbarSupportedContent\" class=\"pull-right navbar-header\">\r\n    <ul class=\"navbar-nav\">\r\n      <li>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/dashboard\">dashboard</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav> -->\r\n <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxhQUFZLEVBQUciLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUge2NvbG9yOiB3aGl0ZTt9Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.context.service */ "./src/app/services/user.context.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(userService, translate) {
        // this.translate.setDefaultLang('he');
        this.userService = userService;
        this.translate = translate;
        this.title = 'SignNature';
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        // this.translate.use('he');
        this.userCheck = userService.getUser();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_context_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_dynamic_forms_ui_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-dynamic-forms/ui-bootstrap */ "./node_modules/@ng-dynamic-forms/ui-bootstrap/fesm5/ui-bootstrap.js");
/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/sortable */ "./node_modules/ngx-bootstrap/sortable/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_loaders_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-loaders-css */ "./node_modules/angular2-loaders-css/index.js");
/* harmony import */ var angular2_loaders_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_loaders_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/loader/loader.component */ "./src/app/common/loader/loader.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_intercepter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.intercepter */ "./src/app/auth/auth.intercepter.ts");
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/user.context.service */ "./src/app/services/user.context.service.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _screens_screens_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./screens/screens.module */ "./src/app/screens/screens.module.ts");
/* harmony import */ var _library_library_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./library/library.module */ "./src/app/library/library.module.ts");
/* harmony import */ var _playlists_playlists_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./playlists/playlists.module */ "./src/app/playlists/playlists.module.ts");
/* harmony import */ var _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./timelines/timelines.component */ "./src/app/timelines/timelines.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _common_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./common/dialog/dialog.component */ "./src/app/common/dialog/dialog.component.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _library_editor_toolbar_editor_toolbar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./library/editor-toolbar/editor-toolbar.component */ "./src/app/library/editor-toolbar/editor-toolbar.component.ts");



































var appRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
].concat(_user_user_module__WEBPACK_IMPORTED_MODULE_20__["userRoutes"], [
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"]], children: [
            {
                path: '',
                component: _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_28__["TimelinesComponent"],
            }
        ].concat(_screens_screens_module__WEBPACK_IMPORTED_MODULE_25__["screenRoutes"], _library_library_module__WEBPACK_IMPORTED_MODULE_26__["libraryRoutes"], _playlists_playlists_module__WEBPACK_IMPORTED_MODULE_27__["playlistsRoutes"], [
            {
                path: 'settings',
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_29__["SettingsComponent"],
            },
        ])
    },
]);
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_23__["TranslateHttpLoader"](http);
}
function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__["LoaderComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"],
                _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_28__["TimelinesComponent"],
                _library_editor_toolbar_editor_toolbar_component__WEBPACK_IMPORTED_MODULE_32__["EditorToolbarComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_29__["SettingsComponent"],
                _common_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_30__["DialogComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]
                    }
                }),
                _shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes, { enableTracing: false, useHash: true } // <-- debugging purposes only
                ),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_7__["SortableModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                angular2_loaders_css__WEBPACK_IMPORTED_MODULE_12__["LoadersCssModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_18__["OrderModule"],
                _ng_dynamic_forms_ui_bootstrap__WEBPACK_IMPORTED_MODULE_6__["DynamicFormsBootstrapUIModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_20__["UserModule"],
                _screens_screens_module__WEBPACK_IMPORTED_MODULE_25__["ScreensModule"],
                _library_library_module__WEBPACK_IMPORTED_MODULE_26__["LibraryModule"],
                _playlists_playlists_module__WEBPACK_IMPORTED_MODULE_27__["PlaylistsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            providers: [_services_user_context_service__WEBPACK_IMPORTED_MODULE_17__["UserService"], _services_language_service__WEBPACK_IMPORTED_MODULE_31__["LanguageService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_intercepter__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.context.service */ "./src/app/services/user.context.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/signin']);
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_context_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth/auth.intercepter.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.intercepter.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _methodus_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @methodus/client */ "./node_modules/@methodus/client/dist/methodus-client.js");
/* harmony import */ var _methodus_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_methodus_client__WEBPACK_IMPORTED_MODULE_2__);



_methodus_client__WEBPACK_IMPORTED_MODULE_2__["Rest"].intercept(function (req) {
    var idToken = localStorage.getItem('token');
    if (idToken) {
        req.headers['Authorization'] = 'Bearer ' + idToken;
    }
    return req;
});
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var idToken = localStorage.getItem('token');
        if (idToken) {
            var cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + idToken)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/common/bread-crumbs/bread-crumbs.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/common/bread-crumbs/bread-crumbs.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-fixed-top dashboard-nav\"> \n        <button type=\"button\" (click)=\"toggleSidebar()\" id=\"sidebarCollapse\" class=\"btn btn-sm btn-info\">\n                <i class=\"fas fa-align-left\"></i>\n            </button>\n\n    <button class=\"btn btn-primary btn-sm crumbs\" *ngFor=\"let b of crumbs\">{{\"NAVBAR.\" + b.name.toUpperCase() | translate}}</button>\n</nav>\n"

/***/ }),

/***/ "./src/app/common/bread-crumbs/bread-crumbs.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/bread-crumbs/bread-crumbs.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9icmVhZC1jcnVtYnMvYnJlYWQtY3J1bWJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/bread-crumbs/bread-crumbs.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/bread-crumbs/bread-crumbs.component.ts ***!
  \***************************************************************/
/*! exports provided: BreadCrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbsComponent", function() { return BreadCrumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_name_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/name.service */ "./src/app/services/name.service.ts");




var BreadCrumbsComponent = /** @class */ (function () {
    function BreadCrumbsComponent(_ngZone, router, nameService, route, changeDetector) {
        var _this = this;
        this._ngZone = _ngZone;
        this.router = router;
        this.nameService = nameService;
        this.route = route;
        this.changeDetector = changeDetector;
        this.Toggled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.crumbs = [];
        this.crumbs = [];
        this.router.events.subscribe(function (val) {
            if (val.urlAfterRedirects) {
                _this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.crumbs = [];
                        val.url.split('/').forEach(function (frag) {
                            if (frag && frag !== 'dashbaord') {
                                _this.crumbs.push({ name: frag });
                            }
                        });
                        return [2 /*return*/];
                    });
                }); });
            }
        });
        this.route.params.subscribe(function (val) {
        });
    }
    BreadCrumbsComponent.prototype.ngOnInit = function () {
    };
    BreadCrumbsComponent.prototype.toggleSidebar = function () {
        this.toggled = !this.toggled;
        this.Toggled.emit(this.toggled);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BreadCrumbsComponent.prototype, "Toggled", void 0);
    BreadCrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bread-crumbs',
            template: __webpack_require__(/*! ./bread-crumbs.component.html */ "./src/app/common/bread-crumbs/bread-crumbs.component.html"),
            styles: [__webpack_require__(/*! ./bread-crumbs.component.scss */ "./src/app/common/bread-crumbs/bread-crumbs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_name_service__WEBPACK_IMPORTED_MODULE_3__["NameService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BreadCrumbsComponent);
    return BreadCrumbsComponent;
}());



/***/ }),

/***/ "./src/app/common/dialog/dialog.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/dialog/dialog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/dialog/dialog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/dialog/dialog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dialog class=\"my-dialog\" (close)=\"handleClose($event)\" #leDialog>\n  <h3>{{notification.title}}</h3>\n  <p>{{notification.message}}</p>\n  <div class=\"inline-components\">\n    <button class=\"btn\" (click)=\"okClicked()\">ok</button>\n    <button class=\"btn\" (click)=\"cancelClicked()\">cancel</button>\n  </div>\n</dialog>"

/***/ }),

/***/ "./src/app/common/dialog/dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DialogComponent.prototype.ngOnInit = function () {
        this.nativeDialogElement = this.dialogElement.nativeElement;
        this.nativeDialogElement.showModal();
    };
    DialogComponent.prototype.handleClose = function (e) { };
    DialogComponent.prototype.okClicked = function () {
    };
    DialogComponent.prototype.cancelClicked = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogComponent.prototype, "notification", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DialogComponent.prototype, "close", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DialogComponent.prototype, "dialogElement", void 0);
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/common/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/common/dialog/dialog.component.css")]
        })
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/common/language-bar/language-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/common/language-bar/language-bar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9sYW5ndWFnZS1iYXIvbGFuZ3VhZ2UtYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/language-bar/language-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/common/language-bar/language-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" [href]='sanitizer.bypassSecurityTrustResourceUrl(this.languageService.cssUrl)' />\n\n<select [(ngModel)]=\"selectedLanguage\" (change)=\"selectLanguage()\" [compareWith]=\"compareFn\">\n  <option *ngFor=\"let c of languages\" [ngValue]=\"c\">{{c.name}}</option>\n</select>"

/***/ }),

/***/ "./src/app/common/language-bar/language-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/language-bar/language-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: LanguageBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageBarComponent", function() { return LanguageBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");




var LanguageBarComponent = /** @class */ (function () {
    function LanguageBarComponent(translate, languageService, sanitizer) {
        this.translate = translate;
        this.languageService = languageService;
        this.sanitizer = sanitizer;
    }
    LanguageBarComponent.prototype.ngOnInit = function () {
        this.languages = this.languageService.languages;
        this.selectedLanguage = this.languageService.getLanguage();
    };
    LanguageBarComponent.prototype.selectLanguage = function () {
        this.languageService.setLanguage(this.selectedLanguage);
    };
    LanguageBarComponent.prototype.compareFn = function (a, b) {
        if (b) {
            return a.lcid === b.lcid;
        }
    };
    LanguageBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-language-bar',
            template: __webpack_require__(/*! ./language-bar.component.html */ "./src/app/common/language-bar/language-bar.component.html"),
            styles: [__webpack_require__(/*! ./language-bar.component.css */ "./src/app/common/language-bar/language-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Sanitizer"]])
    ], LanguageBarComponent);
    return LanguageBarComponent;
}());



/***/ }),

/***/ "./src/app/common/loader/loader.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/loader/loader.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/loader/loader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n<div id=\"loader_back\" [hidden]=\"!busy\">\r\n    <div class=\"lds-ellipsis\">\r\n        <div class=\"color1\"></div>\r\n        <div class=\"color2\"></div>\r\n        <div class=\"color3\"></div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/common/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoaderComponent.prototype, "busy", void 0);
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/common/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/common/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/common/slide-header/slide-header.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/common/slide-header/slide-header.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topper {{className}}\"><span class=\"fas fa-clone bar-icon\"></span> <h4> {{title | translate}}</h4>\n</div>\n\n<button class=\"close-button\" (click)=\"closeSlider();\"><i class=\"far fa-window-close\"></i></button>\n\n"

/***/ }),

/***/ "./src/app/common/slide-header/slide-header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/slide-header/slide-header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orange {\n  background: #de4823;\n  background: linear-gradient(90deg, #de4823 0%, #791f09 67%, #00fffc 100%); }\n\n.topper {\n  pointer-events: none;\n  z-index: 0;\n  height: 65px;\n  opacity: 0.8;\n  position: absolute;\n  width: 112%;\n  padding-top: 30px;\n  top: -34px;\n  left: -16px; }\n\n.topper h4 {\n    display: inline; }\n\n.topper .bar-icon {\n    margin-left: 15px; }\n\n.rtl .close-button {\n  position: absolute;\n  z-index: 2000;\n  left: 0; }\n\n.ltr .close-button {\n  position: absolute;\n  z-index: 2000;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NsaWRlLWhlYWRlci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxcc2xpZGUtaGVhZGVyXFxzbGlkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQkFBMEI7RUFDMUIsMEVBQXNHLEVBQ3pHOztBQUVEO0VBQ0kscUJBQW9CO0VBQ3BCLFdBQVU7RUFDVixhQUFZO0VBQ1osYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixZQUFXLEVBT2Q7O0FBaEJEO0lBV1EsZ0JBQWUsRUFDbEI7O0FBWkw7SUFjUSxrQkFBaUIsRUFDcEI7O0FBR0w7RUFHUSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLFFBQU8sRUFDVjs7QUFHTDtFQUVRLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsU0FBUSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3NsaWRlLWhlYWRlci9zbGlkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIyLDcyLDM1KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMjIsNzIsMzUsMSkgMCUsIHJnYmEoMTIxLDMxLDksMSkgNjclLCByZ2JhKDAsMjU1LDI1MiwxKSAxMDAlKTtcclxufVxyXG5cclxuLnRvcHBlcntcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBoZWlnaHQ6IDY1cHg7ICAgXHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTEyJTtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgdG9wOiAtMzRweDtcclxuICAgIGxlZnQ6IC0xNnB4O1xyXG4gICAgaDR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG4gICAgLmJhci1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucnRsXHJcbntcclxuICAgIC5jbG9zZS1idXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmx0cntcclxuICAgIC5jbG9zZS1idXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/slide-header/slide-header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/slide-header/slide-header.component.ts ***!
  \***************************************************************/
/*! exports provided: SlideHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideHeaderComponent", function() { return SlideHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlideHeaderComponent = /** @class */ (function () {
    function SlideHeaderComponent() {
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SlideHeaderComponent.prototype.ngOnInit = function () {
    };
    SlideHeaderComponent.prototype.closeSlider = function () {
        this.closed.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SlideHeaderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SlideHeaderComponent.prototype, "className", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], SlideHeaderComponent.prototype, "closeFn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SlideHeaderComponent.prototype, "closed", void 0);
    SlideHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slide-header',
            template: __webpack_require__(/*! ./slide-header.component.html */ "./src/app/common/slide-header/slide-header.component.html"),
            styles: [__webpack_require__(/*! ./slide-header.component.scss */ "./src/app/common/slide-header/slide-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlideHeaderComponent);
    return SlideHeaderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <nav id=\"sidebar\" [class]=\"activeClass\">\n        <div class=\"sidebar-header\">\n            <h3>Sign-Nature</h3>\n            <ul class=\"mr-auto\">\n                <li class=\"nav-item\" class=\"language-bar\">\n                    <app-language-bar></app-language-bar>\n                </li>\n            </ul>\n            <strong>SN</strong>\n        </div>\n        <ul class=\"list-unstyled components\">\n            <li>\n                <a routerLink=\"/\">\n                    <i class=\"fas fa-home\"></i>\n                    {{\"NAVBAR.HOME\" | translate}}\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"screens\" routerLinkActive=\"active-link\">\n                    <i class=\"fas fa-desktop\"></i>\n                    {{\"NAVBAR.SCREENS\" | translate}}\n\n                </a></li>\n            <li>\n                <a routerLink=\"screen-groups\" routerLinkActive=\"active-link\">\n                    <i class=\"fas fa-clone\"></i>\n                    {{\"NAVBAR.SCREEN-GROUPS\" | translate}}\n\n                </a></li>\n            <li>\n                <a href=\"#LibrarySubmenu\" (click)=\"toggleSubmenu()\"  routerLinkActive=\"active-link\" routerLink=\"library\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                    <i class=\"fas fa-copy\"></i>\n                    {{\"NAVBAR.LIBRARY\" | translate}}\n                </a>\n                <ul class=\"{{subMenuState}} list-unstyled\" id=\"LibrarySubmenu\">\n                    <li>\n                        <a routerLink=\"library/images\"  routerLinkActive=\"active-link\"> {{\"NAVBAR.IMAGES\" | translate}}</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"library/videos\"  routerLinkActive=\"active-link\"> {{\"NAVBAR.VIDEOS\" | translate}}</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"library/sounds\"  routerLinkActive=\"active-link\"> {{\"NAVBAR.SOUNDS\" | translate}}</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"library/slides\"  routerLinkActive=\"active-link\"> {{\"NAVBAR.SLIDES\" | translate}}</a>\n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a routerLink=\"playlists\"  routerLinkActive=\"active-link\">\n                    <i class=\"fas fa-step-forward\"></i>\n                    {{\"NAVBAR.PLAYLISTS\" | translate}}\n\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"schedules\"  routerLinkActive=\"active-link\">\n                    <i class=\"fas fa-calendar-alt\"></i>\n                    {{\"NAVBAR.SCHEDULES\" | translate}}\n\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"settings\"  routerLinkActive=\"active-link\">\n                    <i class=\"fas fa-cogs\"></i>\n                    {{\"NAVBAR.SETTINGS\" | translate}}\n\n                </a>\n            </li>\n        </ul>\n    </nav>\n    <!-- Page Content  -->\n    <div id=\"content\">\n        <app-bread-crumbs (Toggled)=\"toggleSidebar($event)\"></app-bread-crumbs>\n        <div id=\"scroller\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <footer class=\"footer closed\">\n        {{'DASHBOARD.FOOTER' | translate}}\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-link {\n  color: #c5c5c5;\n  background: #3f5efb;\n  background: radial-gradient(circle, #3f5efb 0%, #fc466b 100%); }\n  .active-link #LibrarySubmenu {\n    display: block !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2Qsb0JBQTBCO0VBQzFCLDhEQUFrRixFQUlyRjtFQVBEO0lBS1EsMEJBQXdCLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtbGlua3tcclxuICAgIGNvbG9yOiAjYzVjNWM1O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDYzLDk0LDI1MSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYzLDk0LDI1MSwxKSAwJSwgcmdiYSgyNTIsNzAsMTA3LDEpIDEwMCUpO1xyXG4gICAgI0xpYnJhcnlTdWJtZW51e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route) {
        this.route = route;
        this.subMenuState = 'collapse';
        this.toggled = false;
        this.activeClass = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.toggleSubmenu = function () {
        if (this.subMenuState) {
            this.subMenuState = '';
        }
        else {
            this.subMenuState = 'collapse';
        }
    };
    DashboardComponent.prototype.toggleSidebar = function (toggleState) {
        if (toggleState) {
            this.activeClass = 'active';
        }
        else {
            this.activeClass = '';
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data.component.ts":
/*!***********************************!*\
  !*** ./src/app/data.component.ts ***!
  \***********************************/
/*! exports provided: DataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var DataComponent = /** @class */ (function () {
    function DataComponent(_ngZone, translateService) {
        this._ngZone = _ngZone;
        this.translateService = translateService;
    }
    DataComponent.prototype.closeSlider = function () {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.displayModalNew = 'closing';
                return [2 /*return*/];
            });
        }); });
    };
    DataComponent.prototype.updateItem = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.updateItemRunning = true;
                        this.item.Date = new Date();
                        return [4 /*yield*/, this.DataController.update(this.item._id, this.item)];
                    case 1:
                        _a.sent();
                        this.displayModalNew = '';
                        setTimeout(function () {
                            _this.updateItemRunning = false;
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    };
    DataComponent.prototype.loadItems = function (query) {
        if (query === void 0) { query = {}; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (Object.keys(query).length) {
                            this.query = query;
                        }
                        _a = this;
                        return [4 /*yield*/, this.DataController.query(this.query)];
                    case 1:
                        _a.items = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataComponent.prototype.deleteItem = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.translateService.get('DATA.CONFIRM_DELETE').subscribe(function (confirmMessage) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!confirm("" + confirmMessage)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.DataController.delete(item._id)];
                            case 1:
                                _a.sent();
                                this.loadItems();
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    DataComponent.prototype.createItem = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.DataController.create(this.item)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadItems()];
                    case 2:
                        _a.sent();
                        this.displayModalNew = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    DataComponent.prototype.editItem = function (item) {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (item) {
                    this.item = item;
                }
                else {
                    this.item = {};
                }
                this.displayModalNew = 'active';
                return [2 /*return*/];
            });
        }); });
    };
    return DataComponent;
}());



/***/ }),

/***/ "./src/app/directives/adapt-height.ts":
/*!********************************************!*\
  !*** ./src/app/directives/adapt-height.ts ***!
  \********************************************/
/*! exports provided: AdaptHeightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdaptHeightDirective", function() { return AdaptHeightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdaptHeightDirective = /** @class */ (function () {
    function AdaptHeightDirective(el) {
        this.el = el;
    }
    AdaptHeightDirective.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var view;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                view = this.viewport();
                this.el.nativeElement.style.height = (view.height - this.appAdaptHeight) + "px";
                this.el.nativeElement.style.overflow = 'auto';
                return [2 /*return*/];
            });
        });
    };
    AdaptHeightDirective.prototype.viewport = function () {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width: e[a + 'Width'], height: e[a + 'Height'] };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appAdaptHeight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AdaptHeightDirective.prototype, "appAdaptHeight", void 0);
    AdaptHeightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAdaptHeight]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AdaptHeightDirective);
    return AdaptHeightDirective;
}());



/***/ }),

/***/ "./src/app/library/alloy/alloy.component.html":
/*!****************************************************!*\
  !*** ./src/app/library/alloy/alloy.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  alloy works!\n</p>\n"

/***/ }),

/***/ "./src/app/library/alloy/alloy.component.scss":
/*!****************************************************!*\
  !*** ./src/app/library/alloy/alloy.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvYWxsb3kvYWxsb3kuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/library/alloy/alloy.component.ts":
/*!**************************************************!*\
  !*** ./src/app/library/alloy/alloy.component.ts ***!
  \**************************************************/
/*! exports provided: AlloyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlloyComponent", function() { return AlloyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlloyComponent = /** @class */ (function () {
    function AlloyComponent() {
    }
    AlloyComponent.prototype.ngOnInit = function () {
    };
    AlloyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alloy',
            template: __webpack_require__(/*! ./alloy.component.html */ "./src/app/library/alloy/alloy.component.html"),
            styles: [__webpack_require__(/*! ./alloy.component.scss */ "./src/app/library/alloy/alloy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlloyComponent);
    return AlloyComponent;
}());



/***/ }),

/***/ "./src/app/library/contenteditable.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/library/contenteditable.directive.ts ***!
  \******************************************************/
/*! exports provided: ContenteditableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenteditableDirective", function() { return ContenteditableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ContenteditableDirective = /** @class */ (function () {
    function ContenteditableDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.propValueAccessor = 'textContent';
    }
    ContenteditableDirective_1 = ContenteditableDirective;
    ContenteditableDirective.prototype.callOnChange = function () {
        if (typeof this.onChange === 'function') {
            this.onChange(this.elementRef.nativeElement[this.propValueAccessor]);
        }
    };
    ContenteditableDirective.prototype.callOnTouched = function () {
        if (typeof this.onTouched === 'function') {
            this.onTouched();
        }
    };
    /**
     * Writes a new value to the element.
     * This method will be called by the forms API to write
     * to the view when programmatic (model -> view) changes are requested.
     *
     * See: [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor#members)
     */
    ContenteditableDirective.prototype.writeValue = function (value) {
        var normalizedValue = value == null ? '' : value;
        this.renderer.setProperty(this.elementRef.nativeElement, this.propValueAccessor, normalizedValue);
    };
    /**
     * Registers a callback function that should be called when
     * the control's value changes in the UI.
     *
     * This is called by the forms API on initialization so it can update
     * the form model when values propagate from the view (view -> model).
     */
    ContenteditableDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * Registers a callback function that should be called when the control receives a blur event.
     * This is called by the forms API on initialization so it can update the form model on blur.
     */
    ContenteditableDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * This function is called by the forms API when the control status changes to or from "DISABLED".
     * Depending on the value, it should enable or disable the appropriate DOM element.
     */
    ContenteditableDirective.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled) {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'true');
            this.removeDisabledState = this.renderer.listen(this.elementRef.nativeElement, 'keydown', this.listenerDisabledState);
        }
        else {
            if (this.removeDisabledState) {
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
                this.removeDisabledState();
            }
        }
    };
    ContenteditableDirective.prototype.listenerDisabledState = function (e) {
        e.preventDefault();
    };
    var ContenteditableDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContenteditableDirective.prototype, "propValueAccessor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ContenteditableDirective.prototype, "callOnChange", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ContenteditableDirective.prototype, "callOnTouched", null);
    ContenteditableDirective = ContenteditableDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[contenteditable]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ContenteditableDirective_1; }), multi: true }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ContenteditableDirective);
    return ContenteditableDirective;
}());



/***/ }),

/***/ "./src/app/library/editor-toolbar/editor-toolbar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/library/editor-toolbar/editor-toolbar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/library/editor-toolbar/editor-toolbar.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/library/editor-toolbar/editor-toolbar.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvZWRpdG9yLXRvb2xiYXIvZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/library/editor-toolbar/editor-toolbar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/library/editor-toolbar/editor-toolbar.component.ts ***!
  \********************************************************************/
/*! exports provided: EditorToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorToolbarComponent", function() { return EditorToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selection.service */ "./src/app/library/selection.service.ts");



var EditorToolbarComponent = /** @class */ (function () {
    function EditorToolbarComponent(selectionService) {
        this.selectionService = selectionService;
    }
    EditorToolbarComponent.prototype.ngOnInit = function () {
    };
    EditorToolbarComponent.prototype.newTextBlockElement = function () {
        var textBlock = {
            type: 'text',
            position: { x: 0, y: 0 }, class: 'h1',
        };
        this.selectionService.newBlockElement(textBlock);
    };
    EditorToolbarComponent.prototype.newImageBlockElement = function () {
        var imageBlock = {
            type: 'image',
            position: { x: 0, y: 0 },
            src: 'https://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg',
            class: 'img',
        };
        this.selectionService.newBlockElement(imageBlock);
    };
    EditorToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editor-toolbar',
            template: __webpack_require__(/*! ./editor-toolbar.component.html */ "./src/app/library/editor-toolbar/editor-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./editor-toolbar.component.scss */ "./src/app/library/editor-toolbar/editor-toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_selection_service__WEBPACK_IMPORTED_MODULE_2__["SelectionService"]])
    ], EditorToolbarComponent);
    return EditorToolbarComponent;
}());



/***/ }),

/***/ "./src/app/library/element/element.component.html":
/*!********************************************************!*\
  !*** ./src/app/library/element/element.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"element.position\" ngDraggable  [zIndex]=\"element.zIndex\" [handle]=\"ElementHandle\" [position]=\"element.position\"\n  class=\"drag-block element\" (edge)=\"checkEdge($event)\" [bounds]=\"myBounds\" [inBounds]=\"inBounds\" (started)=\"onStart($event)\"\n  (stopped)=\"onStop($event)\" (movingOffset)=\"onMoving($event)\" [preventDefaultEvent]=\"false\" (endOffset)=\"onMoveEnd($event)\"\n  (click)=\"focus($event, element)\">\n\n  <div *ngIf=\"element.type === 'text' && element.selected\">\n    <select [(ngModel)]=\"font\">\n      <option *ngFor=\"let c of fonts\" [ngValue]=\"c\">{{c.name}}</option>\n    </select>\n\n    <select [(ngModel)]=\"fontSize\">\n      <option *ngFor=\"let c of sizes\" [ngValue]=\"c\">{{c}}</option>\n    </select>\n  </div>\n\n  <span [ngStyle]=\"{'font-family': font.id, 'font-size': fontSize +'px' }\" contenteditable=\"true\" [(ngModel)]=\"element.name\"\n    *ngIf=\"element.type === 'text'\"></span>\n  <img [src]=\"element.src\" ngResizable  class=\"image-element shadow\" *ngIf=\"element.type === 'image'\" />\n</div>\n"

/***/ }),

/***/ "./src/app/library/element/element.component.scss":
/*!********************************************************!*\
  !*** ./src/app/library/element/element.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drag-block {\n  background-color: #ddd;\n  padding: 15px;\n  cursor: crosshair;\n  position: absolute; }\n  .drag-block span {\n    cursor: text;\n    display: inline; }\n  .element {\n  border: 1px solid transparent; }\n  .element .active {\n    border: 1px solid black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9lbGVtZW50L0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcbGlicmFyeVxcZWxlbWVudFxcZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2Isa0JBQWlCO0VBQ2pCLG1CQUFrQixFQU1yQjtFQVhEO0lBT1EsYUFBWTtJQUNaLGdCQUFlLEVBRWxCO0VBR0w7RUFDSSw4QkFBNkIsRUFJaEM7RUFMRDtJQUdRLHdCQUF1QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvZWxlbWVudC9lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYWctYmxvY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbGVtZW50e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAuYWN0aXZle1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW1hZ2UtZWxlbWVudHtcclxuICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/library/element/element.component.ts":
/*!******************************************************!*\
  !*** ./src/app/library/element/element.component.ts ***!
  \******************************************************/
/*! exports provided: ElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementComponent", function() { return ElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selection.service */ "./src/app/library/selection.service.ts");



var ElementComponent = /** @class */ (function () {
    function ElementComponent(_ngZone, _selectionService) {
        this._ngZone = _ngZone;
        this._selectionService = _selectionService;
        this.inBounds = true;
        this.edge = {
            top: true,
            bottom: true,
            left: true,
            right: true
        };
        this.sizes = [10, 12, 14, 16, 18, 20, 22, 24, 40, 58, 72, 120];
        this.fonts = [{ id: 'arial', name: 'arial' },
            { id: 'Times New Roman', name: 'Times New Roman' },
            { id: 'david', name: 'david' }];
    }
    ElementComponent.prototype.ngOnInit = function () {
        if (this.element && !this.element.style) {
            this.element.style = { font: '' };
        }
        this.font = this.element.style.font;
        this.fontSize = this.element.style.fontSize;
    };
    ElementComponent.prototype.onStart = function (event) {
    };
    ElementComponent.prototype.focus = function (event, element) {
        this._selectionService.focus(event, element);
    };
    ElementComponent.prototype.checkEdge = function (event) {
        this.edge = event;
        console.log('edge:', event);
    };
    ElementComponent.prototype.onStop = function (event) {
    };
    ElementComponent.prototype.onMoving = function (event) {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.position = event;
                return [2 /*return*/];
            });
        }); });
    };
    ElementComponent.prototype.onMoveEnd = function (event) {
        this.element.position = event;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ElementComponent.prototype, "element", void 0);
    ElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-element',
            template: __webpack_require__(/*! ./element.component.html */ "./src/app/library/element/element.component.html"),
            styles: [__webpack_require__(/*! ./element.component.scss */ "./src/app/library/element/element.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _selection_service__WEBPACK_IMPORTED_MODULE_2__["SelectionService"]])
    ], ElementComponent);
    return ElementComponent;
}());



/***/ }),

/***/ "./src/app/library/finder/finder.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/finder/finder.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-container-wide {{active}} shadow\">\n\n  <dialog open= {{active}}>\n    <a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\"></i></a>\n    <input type=\"text\" name=\"searchPhrase\" /><button class=\"btn btn-primary\"></button>\n\n\n\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a class=\"nav-link {{tab.selected}}\" (click)=\"tabSelect(tab)\">{{tab.name | translate}}</a>\n      </li>\n    </ul>\n    <div class=\"container no-margin\" *ngIf=\"selectedTab && selectedTab.alias !=='slides'\">\n      <div *ngFor=\"let item of items\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n        {{item.Name}}\n        <ul class=\"sqr-toolbar\">\n\n          <li>\n            <button class=\"btn btn-md btn-primary\" (click)=\"selectItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"container no-margin\" *ngIf=\"selectedTab && selectedTab.alias ==='slides'\">\n      <div *ngFor=\"let item of slides\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n        {{item.Name}}\n        <ul class=\"sqr-toolbar\">\n          <li>\n            <button class=\"btn btn-md btn-primary\" (click)=\"selectItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/library/finder/finder.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/finder/finder.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvZmluZGVyL2ZpbmRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/library/finder/finder.component.ts":
/*!****************************************************!*\
  !*** ./src/app/library/finder/finder.component.ts ***!
  \****************************************************/
/*! exports provided: FinderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinderComponent", function() { return FinderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var FinderComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FinderComponent, _super);
    function FinderComponent(_ngZone, translateService) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.tabs = [{ name: 'NAVBAR.IMAGES', selected: true, alias: 'images' },
            { name: 'NAVBAR.VIDEOS', selected: false, alias: 'videos' },
            { name: 'NAVBAR.SLIDES', selected: false, alias: 'slides' }];
        _this.selectItem = function (item) {
            _this.selector(item);
        };
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["LibraryDataController"];
        return _this;
    }
    FinderComponent.prototype.tabSelect = function (tab) {
        this.tabs.forEach(function (tabItem) { return tabItem.selected = false; });
        tab.selected = true;
        this.selectedTab = tab;
    };
    FinderComponent.prototype.closeSlider = function () {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.active = 'closing';
                return [2 /*return*/];
            });
        }); });
    };
    FinderComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadItems();
                        // if (Object.keys(query).length) {
                        //   this.query = query;
                        // }
                        _a = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["SlidesDataController"].query(this.query)];
                    case 1:
                        // if (Object.keys(query).length) {
                        //   this.query = query;
                        // }
                        _a.slides = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FinderComponent.prototype, "active", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], FinderComponent.prototype, "selector", void 0);
    FinderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finder',
            template: __webpack_require__(/*! ./finder.component.html */ "./src/app/library/finder/finder.component.html"),
            styles: [__webpack_require__(/*! ./finder.component.scss */ "./src/app/library/finder/finder.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], FinderComponent);
    return FinderComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/images/images.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/images/images.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin\">\n  <div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n    {{item.Name}}\n    <ul class=\"sqr-toolbar\">\n      <li>\n        <button class=\"btn btn-md btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n      </li>\n      <li>\n        <button class=\"btn btn-md btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open= {{displayModalNew}}>\n    <a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\"></i></a>\n    <div class=\"scroller\">\n      <form *ngIf=\"item\">\n        <div class=\"form-group\">\n          <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n          <input type=\"text\" name=\"libraryName\" class=\"form-control\" id=\"screenName\" [(ngModel)]=\"item.Name\">\n          <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"libraryFile\">{{ \"LIBRARY.RESOURCE\" | translate }}</label>\n          <img *ngIf=\"item.thumb\" [src]=\" item.thumb\" class=\"fancy-image\">\n          <p><a href=\"{{item.thumb}}\" target=\"_blank\" class=\"form-text text-muted\"><small>{{item.thumb}}</small></a></p>\n          <app-upload [item]=\"item\"></app-upload>\n          <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.IMAGE_DESCRIPTION\" | translate }}</small>\n        </div>\n      </form>\n    </div>\n    <button *ngIf=\"item && item._id\" class=\"btn btn-primary\" (click)=\"saveLibrary()\">{{ \"LIBRARY.UPDATE\" | translate }}</button>\n    <button *ngIf=\"!item || !item._id\" class=\"btn btn-primary\" (click)=\"createLibrary()\">{{ \"LIBRARY.CREATE\" | translate }}</button>\n  </dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/library/images/images.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/images/images.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fancy-thumb {\n  background-position: 50%;\n  background-repeat: no-repeat !important; }\n\n.fancy-image {\n  width: 100%;\n  height: 250px;\n  background-size: cover !important;\n  background-repeat: no-repeat !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9pbWFnZXMvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxsaWJyYXJ5XFxpbWFnZXNcXGltYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdJLHlCQUF3QjtFQUN4Qix3Q0FBc0MsRUFDekM7O0FBRUQ7RUFFSSxZQUFVO0VBQ1YsY0FBYTtFQUNiLGtDQUFnQztFQUNoQyx3Q0FBc0MsRUFDekMiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L2ltYWdlcy9pbWFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mYW5jeS10aHVtYlxyXG57ICAgXHJcbiAgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlOyAgICBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmFuY3ktaW1hZ2Vcclxue1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIWltcG9ydGFudDsgICAgIFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/library/images/images.component.ts":
/*!****************************************************!*\
  !*** ./src/app/library/images/images.component.ts ***!
  \****************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var ImagesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ImagesComponent, _super);
    function ImagesComponent(_ngZone, translateService) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["LibraryDataController"];
        return _this;
        // this.DataModel = PlaylistModel;
    }
    ImagesComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadItems({ type: 'image' });
                return [2 /*return*/];
            });
        });
    };
    ImagesComponent.prototype.saveLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.type = 'image';
                this.updateItem();
                return [2 /*return*/];
            });
        });
    };
    ImagesComponent.prototype.createLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.type = 'image';
                this.createItem();
                return [2 /*return*/];
            });
        });
    };
    ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/library/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.scss */ "./src/app/library/images/images.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ImagesComponent);
    return ImagesComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/inline-edit/inline-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/library/inline-edit/inline-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bold {\n  font-weight: 700;\n}\n\n.block {\n  display: inline-block;\n}\n\ndiv.inline-edit {\n  text-decoration: none;\n  border-bottom: #A8B9CE dashed 1px;\n  cursor: pointer;\n  text-align: left;\n  padding: .5em 0;\n  color: #444 !important;\n  width: auto;\n}\n\ninput {\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  padding: 4px 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9pbmxpbmUtZWRpdC9pbmxpbmUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L2lubGluZS1lZGl0L2lubGluZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuZGl2LmlubGluZS1lZGl0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItYm90dG9tOiAjQThCOUNFIGRhc2hlZCAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogLjVlbSAwO1xuICBjb2xvcjogIzQ0NCAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0bztcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/library/inline-edit/inline-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/library/inline-edit/inline-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngIf=\"editing\">\n    <input #inlineEditControl [required]=\"required\" (blur)=\"onBlur($event)\" [name]=\"value\" [(ngModel)]=\"value\" [type]=\"type\" [placeholder]=\"label\" />\n  </div>\n  <div *ngIf=\"!editing\">\n    <label class=\"block bold\">{{label}}</label>\n    <div title=\"Click to edit\" (click)=\"edit(value)\" tabindex=\"0\" class=\"inline-edit\">{{value}}&nbsp;</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/library/inline-edit/inline-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/library/inline-edit/inline-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: InlineEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineEditComponent", function() { return InlineEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return InlineEditComponent; }),
    multi: true
};
var InlineEditComponent = /** @class */ (function () {
    function InlineEditComponent(element, _renderer) {
        this._renderer = _renderer;
        this.label = ''; // Label value for input element
        this.type = 'text'; // The type of input element
        this.required = false; // Is input requried?
        this.disabled = false; // Is input disabled?
        this._value = ''; // Private variable for input value
        this.preValue = ''; // The value before clicking to edit
        this.editing = false; // Is Component in edit mode?
        this.onChange = Function.prototype; // Trascend the onChange event
        this.onTouched = Function.prototype; // Trascend the onTouch event
    }
    Object.defineProperty(InlineEditComponent.prototype, "value", {
        // Control Value Accessors for ngModel
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // Required for ControlValueAccessor interface
    InlineEditComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    // Required forControlValueAccessor interface
    InlineEditComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    // Required forControlValueAccessor interface
    InlineEditComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // Do stuff when the input element loses focus
    InlineEditComponent.prototype.onBlur = function ($event) {
        this.editing = false;
    };
    // Start the editting process for the input element
    InlineEditComponent.prototype.edit = function (value) {
        if (this.disabled) {
            return;
        }
        this.preValue = value;
        this.editing = true;
        // // Focus on the input element just as the editing begins
        // setTimeout(_ => this._renderer.invokeElementMethod(this.inlineEditControl,
        //   'focus', []));
    };
    InlineEditComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inlineEditControl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InlineEditComponent.prototype, "inlineEditControl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InlineEditComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InlineEditComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InlineEditComponent.prototype, "required", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InlineEditComponent.prototype, "disabled", void 0);
    InlineEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inline-edit',
            template: __webpack_require__(/*! ./inline-edit.component.html */ "./src/app/library/inline-edit/inline-edit.component.html"),
            providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
            styles: [__webpack_require__(/*! ./inline-edit.component.css */ "./src/app/library/inline-edit/inline-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], InlineEditComponent);
    return InlineEditComponent;
}());



/***/ }),

/***/ "./src/app/library/library.component.css":
/*!***********************************************!*\
  !*** ./src/app/library/library.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbGlicmFyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/library/library.component.html":
/*!************************************************!*\
  !*** ./src/app/library/library.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/library/library.component.ts":
/*!**********************************************!*\
  !*** ./src/app/library/library.component.ts ***!
  \**********************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LibraryComponent = /** @class */ (function () {
    function LibraryComponent() {
    }
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.component.html */ "./src/app/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/library/library.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/library/library.module.ts":
/*!*******************************************!*\
  !*** ./src/app/library/library.module.ts ***!
  \*******************************************/
/*! exports provided: libraryRoutes, LibraryModule, MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "libraryRoutes", function() { return libraryRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryModule", function() { return LibraryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/images.component */ "./src/app/library/images/images.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/library/videos/videos.component.ts");
/* harmony import */ var _sounds_sounds_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sounds/sounds.component */ "./src/app/library/sounds/sounds.component.ts");
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slides/slides.component */ "./src/app/library/slides/slides.component.ts");
/* harmony import */ var _library_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/library/upload/upload.component.ts");
/* harmony import */ var _element_element_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./element/element.component */ "./src/app/library/element/element.component.ts");
/* harmony import */ var _contenteditable_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contenteditable.directive */ "./src/app/library/contenteditable.directive.ts");
/* harmony import */ var _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./slide-editor/slide-editor.component */ "./src/app/library/slide-editor/slide-editor.component.ts");
/* harmony import */ var _inline_edit_inline_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inline-edit/inline-edit.component */ "./src/app/library/inline-edit/inline-edit.component.ts");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./selection.service */ "./src/app/library/selection.service.ts");
/* harmony import */ var _alloy_alloy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./alloy/alloy.component */ "./src/app/library/alloy/alloy.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/main.component */ "./src/app/library/main/main.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return _main_main_component__WEBPACK_IMPORTED_MODULE_18__["MainComponent"]; });





















var libraryRoutes = [
    { path: 'library', component: _main_main_component__WEBPACK_IMPORTED_MODULE_18__["MainComponent"] },
    { path: 'library/images', component: _images_images_component__WEBPACK_IMPORTED_MODULE_5__["ImagesComponent"] },
    { path: 'library/videos', component: _videos_videos_component__WEBPACK_IMPORTED_MODULE_6__["VideosComponent"] },
    { path: 'library/sounds', component: _sounds_sounds_component__WEBPACK_IMPORTED_MODULE_7__["SoundsComponent"] },
    { path: 'library/slides', component: _slides_slides_component__WEBPACK_IMPORTED_MODULE_8__["SlidesComponent"] },
    { path: 'library/slides/:id', component: _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_14__["SlideEditorComponent"] },
];
var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            exports: [_library_component__WEBPACK_IMPORTED_MODULE_9__["LibraryComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            entryComponents: [_library_component__WEBPACK_IMPORTED_MODULE_9__["LibraryComponent"]],
            declarations: [_inline_edit_inline_edit_component__WEBPACK_IMPORTED_MODULE_15__["InlineEditComponent"], _contenteditable_directive__WEBPACK_IMPORTED_MODULE_13__["ContenteditableDirective"], _images_images_component__WEBPACK_IMPORTED_MODULE_5__["ImagesComponent"],
                _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_14__["SlideEditorComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_18__["MainComponent"],
                _videos_videos_component__WEBPACK_IMPORTED_MODULE_6__["VideosComponent"], _sounds_sounds_component__WEBPACK_IMPORTED_MODULE_7__["SoundsComponent"], _slides_slides_component__WEBPACK_IMPORTED_MODULE_8__["SlidesComponent"],
                _library_component__WEBPACK_IMPORTED_MODULE_9__["LibraryComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_11__["UploadComponent"], _element_element_component__WEBPACK_IMPORTED_MODULE_12__["ElementComponent"],
                _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_14__["SlideEditorComponent"], _alloy_alloy_component__WEBPACK_IMPORTED_MODULE_17__["AlloyComponent"]],
            providers: [_selection_service__WEBPACK_IMPORTED_MODULE_16__["SelectionService"]]
        })
    ], LibraryModule);
    return LibraryModule;
}());



/***/ }),

/***/ "./src/app/library/main/main.component.html":
/*!**************************************************!*\
  !*** ./src/app/library/main/main.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin\">\n    <div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n    <div *ngFor=\"let item of items\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n      {{item.Name}}\n      <ul class=\"sqr-toolbar\">\n        <li>\n          <button class=\"btn btn-md btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n        </li>\n        <li>\n          <button class=\"btn btn-md btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"slider-container {{displayModalNew}} shadow \">\n    <dialog open= {{displayModalNew}}>\n      <a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\"></i></a>\n      <div class=\"scroller\">\n        <form *ngIf=\"item\">\n          <div class=\"form-group\">\n            <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n            <input type=\"text\" name=\"libraryName\" class=\"form-control\" id=\"screenName\" [(ngModel)]=\"item.Name\">\n            <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"libraryFile\">{{ \"LIBRARY.RESOURCE\" | translate }}</label>\n            <img *ngIf=\"item.thumb\" [src]=\" item.thumb\" class=\"fancy-image\">\n            <p><a href=\"{{item.thumb}}\" target=\"_blank\" class=\"form-text text-muted\"><small>{{item.thumb}}</small></a></p>\n            <app-upload [item]=\"item\"></app-upload>\n            <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.IMAGE_DESCRIPTION\" | translate }}</small>\n          </div>\n        </form>\n      </div>\n      <button *ngIf=\"item && item._id\" class=\"btn btn-primary\" (click)=\"saveLibrary()\">{{ \"LIBRARY.UPDATE\" | translate }}</button>\n      <button *ngIf=\"!item || !item._id\" class=\"btn btn-primary\" (click)=\"createLibrary()\">{{ \"LIBRARY.CREATE\" | translate }}</button>\n    </dialog>\n  </div>\n  "

/***/ }),

/***/ "./src/app/library/main/main.component.scss":
/*!**************************************************!*\
  !*** ./src/app/library/main/main.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/library/main/main.component.ts":
/*!************************************************!*\
  !*** ./src/app/library/main/main.component.ts ***!
  \************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var MainComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MainComponent, _super);
    function MainComponent(_ngZone, translateService) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["LibraryDataController"];
        return _this;
        // this.DataModel = PlaylistModel;
    }
    MainComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadItems({});
                return [2 /*return*/];
            });
        });
    };
    MainComponent.prototype.saveLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.type = 'image';
                this.updateItem();
                return [2 /*return*/];
            });
        });
    };
    MainComponent.prototype.createLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.type = 'image';
                this.createItem();
                return [2 /*return*/];
            });
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/library/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/library/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], MainComponent);
    return MainComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/selection.service.ts":
/*!**********************************************!*\
  !*** ./src/app/library/selection.service.ts ***!
  \**********************************************/
/*! exports provided: SelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionService", function() { return SelectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectionService = /** @class */ (function () {
    function SelectionService() {
        this.selection = [];
        this.elements = [];
    }
    SelectionService.prototype.focus = function (eventElement, elementItem) {
        var all = document.querySelectorAll('.element');
        for (var i = 0; i < all.length; i++) {
            all[i].className = all[i].className.replace('selected', '');
        }
        this.elements.forEach(function (item) { return item.selected = false; });
        elementItem.selected = true;
        eventElement.currentTarget.className = eventElement.currentTarget.className + ' selected';
    };
    SelectionService.prototype.load = function (document) {
        this.document = document;
        this.elements = this.document.elements;
    };
    SelectionService.prototype.reset = function () {
        this.elements = [];
    };
    SelectionService.prototype.newBlockElement = function (newElement) {
        this.elements.push(newElement);
    };
    SelectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectionService);
    return SelectionService;
}());



/***/ }),

/***/ "./src/app/library/slide-editor/slide-editor.component.html":
/*!******************************************************************!*\
  !*** ./src/app/library/slide-editor/slide-editor.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n      <a class=\"nav-link {{tab.selected}}\" (click)=\"tabSelect(tab)\">{{tab.name | translate}}</a>\n    </li>\n    <li *ngIf=\"tabs[0].selected\">\n      <div class=\"btn-group\" data-toggle=\"buttons\">\n        <button (click)=\"newTextBlockElement()\" class=\"btn btn-md btn-primary\"><i class=\"fas fa-font\"></i></button>\n        <button (click)=\"finder('image')\" class=\"btn btn-md btn-primary\"><i class=\"far fa-image\"></i></button>\n        <button (click)=\"finder('video')\" class=\"btn btn-md btn-primary\"><i class=\"fas fa-video\"></i></button>\n        <button (click)=\"newPluginBlockElement()\" class=\"btn btn-md btn-primary\"><i class=\"fas fa-plug\"></i></button>\n      </div>\n    </li>\n    <li class=\"toolbar-end\">\n      <button class=\"btn btn-primary btn-sm\" (click)=\"resetItem()\">{{ \"SLIDES.RESET\" | translate }}</button>\n      <button *ngIf=\"item._id\" class=\"btn btn-primary btn-sm\" (click)=\"updateItem()\">\n        <span class=\"btn-spinner-host\"> <i class=\"btn-spinner\" *ngIf=\"updateItemRunning\"></i> {{ \"SLIDES.UPDATE\" | translate }}\n        </span>\n      </button>\n      <button *ngIf=\"!item._id\" class=\"btn btn-primary btn-sm\" (click)=\"createItem()\">\n        <span class=\"btn-spinner-host\"> <i class=\"btn-spinner\" *ngIf=\"updateItemRunning\">\n          </i> {{ \"SLIDES.CREATE\" | translate }}\n        </span>\n      </button>\n    </li>\n  </ul>\n  <div *ngIf=\"tabs[0].selected\" [appAdaptHeight]=\"300\">\n    <div class=\"row slide-editor\">\n      <div class=\"col-md-9\">\n        <div class=\"slide-canvas drag-boundary\" [appAdaptHeight]=\"300\" class=\"drag-boundary\" [ngClass]=\"{ 'top-b': !edge?.top, 'bottom-b': !edge?.bottom, 'left-b': !edge?.left, 'right-b': !edge?.right }\"\n          #myBounds>\n          <app-element *ngFor=\"let el of selectionService.elements\" (click)=\"designerFocus($event)\" [element]=\"el\"></app-element>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <ul class=\"list-group\">\n          <ol class=\"list-group-item\" *ngFor=\"let el of selectionService.elements\">\n            <app-inline-edit [(ngModel)]=\"el.name\" label=\"Name\" [required]=\"true\" type=\"text\">\n            </app-inline-edit>\n          </ol>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"tabs[1].selected\">\n    <pre> {{item.elements | json}}</pre>\n  </div>\n</div>\n<app-finder [active]=\"finderActive\" [selector]=\"addToList\"></app-finder>\n"

/***/ }),

/***/ "./src/app/library/slide-editor/slide-editor.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/library/slide-editor/slide-editor.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-editor {\n  width: 100%;\n  border: 1px solid black;\n  height: 100%;\n  min-height: 300px; }\n\n.toolbar-end {\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9zbGlkZS1lZGl0b3IvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxsaWJyYXJ5XFxzbGlkZS1lZGl0b3JcXHNsaWRlLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCx3QkFBdUI7RUFDdkIsYUFBWTtFQUNaLGtCQUFpQixFQUNwQjs7QUFHRDtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvc2xpZGUtZWRpdG9yL3NsaWRlLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZS1lZGl0b3J7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbiBcclxuLnRvb2xiYXItZW5ke1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/library/slide-editor/slide-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/library/slide-editor/slide-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: SlideEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideEditorComponent", function() { return SlideEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selection.service */ "./src/app/library/selection.service.ts");
/* harmony import */ var _services_name_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/name.service */ "./src/app/services/name.service.ts");








var SlideEditorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SlideEditorComponent, _super);
    function SlideEditorComponent(_ngZone, translateService, nameService, selectionService, route) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.nameService = nameService;
        _this.selectionService = selectionService;
        _this.route = route;
        _this.tabs = [{ name: 'PLAYLISTS.DESIGNER', selected: true }, { name: 'PLAYLISTS.SOURCE', selected: false }];
        _this.finderActive = 'closing';
        _this.addToList = function (resource) {
            switch (_this.finderMode) {
                case 'image':
                    var imageBlock = {
                        type: 'image',
                        position: { x: 0, y: 0 },
                        src: resource.resource,
                        class: 'img', zIndex: 1000 + _this.item.elements.length + 1
                    };
                    _this.newBlockElement(imageBlock);
                    break;
                case 'video':
                    break;
            }
            _this.finderActive = 'closing';
        };
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_4__["SlidesDataController"];
        _this.addToList.bind(_this);
        return _this;
    }
    SlideEditorComponent.prototype.finder = function (finderMode) {
        this.finderMode = finderMode;
        this.finderActive = 'active';
    };
    SlideEditorComponent.prototype.tabSelect = function (tab) {
        this.tabs.forEach(function (tabItem) { return tabItem.selected = false; });
        tab.selected = true;
    };
    SlideEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.item) {
            this.route.params.subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _a;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(data.id !== '0')) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["SlidesDataController"].get(data.id)];
                        case 1:
                            _a.item = _b.sent();
                            this.nameService.setName(this.item.Name);
                            return [3 /*break*/, 3];
                        case 2:
                            this.item = { elements: [] };
                            _b.label = 3;
                        case 3:
                            this.selectionService.load(this.item);
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    SlideEditorComponent.prototype.resetItem = function () {
        this.item = { name: this.item.name, _id: this.item._id };
        this.item.elements = [];
        this.selectionService.reset();
    };
    SlideEditorComponent.prototype.newTextBlockElement = function () {
        var textBlock = {
            type: 'text',
            position: { x: 0, y: 0 }, class: 'h1', zIndex: 1000 + this.item.elements.length + 1
        };
        this.newBlockElement(textBlock);
    };
    SlideEditorComponent.prototype.newImageBlockElement = function () {
        var imageBlock = {
            type: 'image',
            position: { x: 0, y: 0 },
            src: 'https://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg',
            class: 'img', zIndex: 1000 + this.item.elements.length + 1
        };
        this.newBlockElement(imageBlock);
    };
    SlideEditorComponent.prototype.newBlockElement = function (block) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.item) {
                    this.item = [];
                }
                if (!this.item.elements) {
                    this.item.elements = [];
                }
                this.selectionService.elements.push(block);
                return [2 /*return*/];
            });
        });
    };
    SlideEditorComponent.prototype.designerFocus = function (element) {
        document.querySelector('.element'); // .removeClass('active');
        // window.$('.element').removeClass('active');
        // window.$(element).addClass('active');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SlideEditorComponent.prototype, "item", void 0);
    SlideEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slide-editor',
            template: __webpack_require__(/*! ./slide-editor.component.html */ "./src/app/library/slide-editor/slide-editor.component.html"),
            styles: [__webpack_require__(/*! ./slide-editor.component.scss */ "./src/app/library/slide-editor/slide-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _services_name_service__WEBPACK_IMPORTED_MODULE_7__["NameService"],
            _selection_service__WEBPACK_IMPORTED_MODULE_6__["SelectionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SlideEditorComponent);
    return SlideEditorComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_3__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/slides/slides.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/slides/slides.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin\">\n  <div class=\"sqr shadow sqr-btn\" [routerLink]=\"0\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow\">\n    <i class=\"fas fa-desktop\"></i>\n    {{item.Name}}\n    <ul class=\"sqr-toolbar\">\n      <li>\n        <button class=\"btn btn-md btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n      </li>\n      <li>\n        <button class=\"btn btn-md btn-primary\" [routerLink]=\"[item._id]\"> <i class=\"fas fa-edit\"></i> </button>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/library/slides/slides.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/slides/slides.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-canvas {\n  position: relative;\n  border: 2px solid black; }\n\n.h1 {\n  font-size: 24px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9zbGlkZXMvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxsaWJyYXJ5XFxzbGlkZXNcXHNsaWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFDeEI7O0FBR0Q7RUFDRSxnQkFBZTtFQUNmLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZS1jYW52YXN7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuLmgxe1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/library/slides/slides.component.ts":
/*!****************************************************!*\
  !*** ./src/app/library/slides/slides.component.ts ***!
  \****************************************************/
/*! exports provided: SlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesComponent", function() { return SlidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var SlidesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SlidesComponent, _super);
    function SlidesComponent(_ngZone, translateService) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["SlidesDataController"];
        return _this;
        // this.DataModel = PlaylistModel;
    }
    SlidesComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadItems();
                return [2 /*return*/];
            });
        });
    };
    SlidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides',
            template: __webpack_require__(/*! ./slides.component.html */ "./src/app/library/slides/slides.component.html"),
            styles: [__webpack_require__(/*! ./slides.component.scss */ "./src/app/library/slides/slides.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], SlidesComponent);
    return SlidesComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/sounds/sounds.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/sounds/sounds.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n    \n    \n    <div class=\"container no-margin\">\n<div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n    <div *ngFor=\"let item of items\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\" >\n    {{item.Name}}\n      <ul class=\"sqr-toolbar\">\n        <li>\n          <button class=\"btn btn-md btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n        </li>\n        <li>\n          <button class=\"btn btn-md btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n        </li>\n      </ul>\n    </div>\n</div>\n<div class=\"slider-container {{displayModalNew}} shadow \">\n<dialog open={{displayModalNew}}>\n<a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\" ></i></a>\n<div class=\"scroller\">\n <form *ngIf=\"item\">\n  <div class=\"form-group\">\n    <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n    <input type=\"text\" name=\"libraryName\"  class=\"form-control\" id=\"screenName\"   [(ngModel)]=\"item.Name\">\n    <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"libraryFile\">{{ \"LIBRARY.RESOURCE\" | translate }}</label>\n<app-upload [item]=\"item\"></app-upload>\n</div>\n   \n</form>\n </div>\n  <button   *ngIf=\"item && item._id\" class=\"btn btn-primary\" (click)=\"saveLibrary()\">{{ \"LIBRARY.UPDATE\" | translate }}</button>\n  <button   *ngIf=\"!item || !item._id\" class=\"btn btn-primary\" (click)=\"createLibrary()\">{{ \"LIBRARY.CREATE\" | translate }}</button>\n</dialog>\n</div>\n "

/***/ }),

/***/ "./src/app/library/sounds/sounds.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/sounds/sounds.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvc291bmRzL3NvdW5kcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/library/sounds/sounds.component.ts":
/*!****************************************************!*\
  !*** ./src/app/library/sounds/sounds.component.ts ***!
  \****************************************************/
/*! exports provided: SoundsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundsComponent", function() { return SoundsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var SoundsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SoundsComponent, _super);
    function SoundsComponent(_ngZone, translateService) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["LibraryDataController"];
        return _this;
    }
    SoundsComponent.prototype.saveLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.type = 'audio';
                this.updateItem();
                return [2 /*return*/];
            });
        });
    };
    SoundsComponent.prototype.createLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.type = 'audio';
                this.createItem();
                return [2 /*return*/];
            });
        });
    };
    SoundsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadItems({ type: 'audio' });
                return [2 /*return*/];
            });
        });
    };
    SoundsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sounds',
            template: __webpack_require__(/*! ./sounds.component.html */ "./src/app/library/sounds/sounds.component.html"),
            styles: [__webpack_require__(/*! ./sounds.component.scss */ "./src/app/library/sounds/sounds.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], SoundsComponent);
    return SoundsComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/upload/upload.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/upload/upload.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"addFiles()\" class=\"btn btn-default\">\n  <file-drop headertext=\"Drop files here\" customstyle=\"dropzone\" (onFileDrop)=\"dropped($event)\">\n  </file-drop>\n</div>\n<input type=\"file\" #file style=\"display: none\" (change)=\"selected()\" />\n\n\n<div>\n  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n  <img [src]=\"thumb\" (load)=\"clearUpload()\" #imgIndicator id=\"imgIndicator\" />\n\n</div>\n"

/***/ }),

/***/ "./src/app/library/upload/upload.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/upload/upload.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader,\n.loader:before,\n.loader:after {\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load7 1.8s infinite ease-in-out;\n  animation: load7 1.8s infinite ease-in-out; }\n\n.loader {\n  color: #ca2e2e;\n  font-size: 10px;\n  margin: 80px auto;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n.loader:before,\n.loader:after {\n  content: '';\n  position: absolute;\n  top: 0; }\n\n.loader:before {\n  left: -3.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.loader:after {\n  left: 3.5em; }\n\n@-webkit-keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em; }\n  40% {\n    box-shadow: 0 2.5em 0 0; } }\n\n@keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em; }\n  40% {\n    box-shadow: 0 2.5em 0 0; } }\n\n.dropzone {\n  height: 30px; }\n\n.dropzone .content {\n    height: 30px; }\n\n#imgIndicator {\n  visibility: hidden;\n  width: 1px;\n  height: 1px; }\n\n.fancy-image {\n  width: 100%;\n  height: 250px;\n  background-size: cover !important;\n  background-repeat: no-repeat !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS91cGxvYWQvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxsaWJyYXJ5XFx1cGxvYWRcXHVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0UsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixjQUFhO0VBQ2Isa0NBQWlDO0VBQ2pDLDBCQUF5QjtFQUN6QixtREFBa0Q7RUFDbEQsMkNBQTBDLEVBQzNDOztBQUNEO0VBQ0UsZUFBYztFQUNkLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixxQkFBb0I7RUFDcEIsaUNBQWdDO0VBRWhDLHlCQUF3QjtFQUN4QixnQ0FBK0I7RUFDL0Isd0JBQXVCLEVBQ3hCOztBQUNEOztFQUVFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsT0FBTSxFQUNQOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGdDQUErQjtFQUMvQix3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRTs7O0lBR0UsNkJBQTRCLEVBQUE7RUFFOUI7SUFDRSx3QkFBdUIsRUFBQSxFQUFBOztBQUczQjtFQUNFOzs7SUFHRSw2QkFBNEIsRUFBQTtFQUU5QjtJQUNFLHdCQUF1QixFQUFBLEVBQUE7O0FBSTNCO0VBQ0UsYUFBWSxFQUliOztBQUxEO0lBR0ksYUFBWSxFQUNiOztBQUdIO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFXLEVBQ1o7O0FBRUQ7RUFFSSxZQUFVO0VBQ1YsY0FBYTtFQUNiLGtDQUFnQztFQUNoQyx3Q0FBc0MsRUFDekMiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLFxyXG4ubG9hZGVyOmJlZm9yZSxcclxuLmxvYWRlcjphZnRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAyLjVlbTtcclxuICBoZWlnaHQ6IDIuNWVtO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNyAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbjogbG9hZDcgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG4ubG9hZGVyIHtcclxuICBjb2xvcjogI2NhMmUyZTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWFyZ2luOiA4MHB4IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbn1cclxuLmxvYWRlcjpiZWZvcmUsXHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbn1cclxuLmxvYWRlcjpiZWZvcmUge1xyXG4gIGxlZnQ6IC0zLjVlbTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG59XHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gIGxlZnQ6IDMuNWVtO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkNyB7XHJcbiAgMCUsXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIC0xLjNlbTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAwO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWQ3IHtcclxuICAwJSxcclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgLTEuM2VtO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZHJvcHpvbmV7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIC5jb250ZW50IHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbiNpbWdJbmRpY2F0b3J7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbi5mYW5jeS1pbWFnZVxyXG57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIhaW1wb3J0YW50OyAgICAgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0IWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/library/upload/upload.component.ts":
/*!****************************************************!*\
  !*** ./src/app/library/upload/upload.component.ts ***!
  \****************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_2__);



var UploadComponent = /** @class */ (function () {
    function UploadComponent(_ngZone) {
        this._ngZone = _ngZone;
        this.count = 0;
        this.files = new Set();
        this.uploadComplete = false;
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    UploadComponent.prototype.clearUpload = function () {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.uploadComplete = true;
                this.loading = false;
                return [2 /*return*/];
            });
        }); });
    };
    UploadComponent.prototype.waitUpload = function (src) {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.uploadComplete) {
                    this.count++;
                    this.loading = true;
                    if (this.imgIndicator.nativeElement && src) {
                        this.imgIndicator.nativeElement.src = src;
                    }
                    else {
                        this.imgIndicator.src = src;
                    }
                    setTimeout(function () { _this.waitUpload(src); }, 1000);
                }
                else {
                    this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            this.item.thumb = this.item.thumb.split('?____')[0] + '?____' + this.count;
                            this.thumb = this.item.thumb;
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        }); });
    };
    UploadComponent.prototype.selected = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var files, _a, _b, _i, key, s3Path;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        files = this.file.nativeElement.files;
                        _a = [];
                        for (_b in files)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        key = _a[_i];
                        if (!!isNaN(parseInt(key, 2))) return [3 /*break*/, 3];
                        this.uploadComplete = false;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["Upload"].capture(files[key])];
                    case 2:
                        s3Path = _c.sent();
                        this.item.resource = s3Path.url;
                        this.item.thumb = s3Path.thumb;
                        this.thumb = this.item.thumb;
                        this.waitUpload(s3Path.thumb);
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UploadComponent.prototype.dropped = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var s3Path;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.uploadComplete = false;
                                return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["Upload"].capture(file)];
                            case 1:
                                s3Path = _a.sent();
                                this.item.resource = s3Path.url;
                                this.item.thumb = s3Path.thumb;
                                this.thumb = this.item.thumb;
                                this.waitUpload(s3Path.thumb);
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UploadComponent.prototype, "file", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imgIndicator'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UploadComponent.prototype, "imgIndicator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UploadComponent.prototype, "item", void 0);
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/library/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/library/upload/upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/library/videos/videos.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/videos/videos.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin\">\n  <div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n    {{item.Name}}\n    <ul class=\"sqr-toolbar\">\n      <li>\n        <button class=\"btn btn-md btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n      </li>\n      <li>\n        <button class=\"btn btn-md btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open= {{displayModalNew}}>\n    <a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\"></i></a>\n    <div class=\"scroller\">\n      <form *ngIf=\"item\">\n        <div class=\"form-group\">\n          <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n          <input type=\"text\" name=\"libraryName\" class=\"form-control\" id=\"screenName\" [(ngModel)]=\"item.Name\">\n          <small id=\"nameHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n        </div>\n        <div class=\"form-group\">\n         <label for=\"embedCode\">{{ \"LIBRARY.EMBED\" | translate }}:</label>\n          <textarea id=\"embedCode\" name=\"embedCode\" class=\"form-control\" [(ngModel)]=\"item.Embed\"></textarea>\n          <small id=\"embedHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.EMBED_HELP\" | translate }}</small>\n        </div>\n      </form>\n    </div>\n    <button *ngIf=\"item && item._id\" class=\"btn btn-primary\" (click)=\"saveLibrary()\">{{ \"LIBRARY.UPDATE\" | translate }}</button>\n    <button *ngIf=\"!item || !item._id\" class=\"btn btn-primary\" (click)=\"createLibrary()\">{{ \"LIBRARY.CREATE\" | translate }}</button>\n  </dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/library/videos/videos.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/videos/videos.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvdmlkZW9zL3ZpZGVvcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/library/videos/videos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/library/videos/videos.component.ts ***!
  \****************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var VideosComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VideosComponent, _super);
    function VideosComponent(_ngZone, translateService) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["LibraryDataController"];
        return _this;
        // this.DataModel = PlaylistModel;
    }
    VideosComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadItems({ type: 'video' });
                return [2 /*return*/];
            });
        });
    };
    VideosComponent.prototype.saveLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.type = 'video';
                this.updateItem();
                return [2 /*return*/];
            });
        });
    };
    VideosComponent.prototype.createLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.type = 'video';
                this.createItem();
                return [2 /*return*/];
            });
        });
    };
    VideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/library/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.scss */ "./src/app/library/videos/videos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], VideosComponent);
    return VideosComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/playlists/playlist/playlists.component.html":
/*!*************************************************************!*\
  !*** ./src/app/playlists/playlist/playlists.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin\">\n  <div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow\">\n    <i class=\"fas fa-desktop\"></i>\n    {{item.Name}} <span *ngIf=\"item.list\">({{item.list.length}})</span>\n    <ul class=\"sqr-toolbar\">\n      <li>\n        <button class=\"btn btn-md btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n      </li>\n      <li>\n        <button class=\"btn btn-md btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n  <dialog open= {{displayModalNew}}>\n    <app-slide-header [title]=\"'NAVBAR.PLAYLISTS'\" [className]=\"'orange'\" (closed)=\"closeSlider($event)\"></app-slide-header>\n    <form *ngIf=\"item\" class=\"pt50\">\n      <div class=\"form-group\">\n        <label for=\"itemName\">{{ \"PLAYLISTS.NAME\" | translate }}:</label>\n        <input type=\"text\" name=\"itemName\" class=\"form-control\" id=\"itemName\" [(ngModel)]=\"item.Name\">\n        <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"PLAYLISTS.NAME_HELP\" | translate }}</small>\n      </div>\n      <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n          <a class=\"nav-link {{tab.selected}}\" (click)=\"tabSelect(tab)\">{{tab.name | translate}}</a>\n        </li>\n      </ul>\n      <div *ngIf=\"tabs[0].selected\">\n        <div class=\"form-group\" class=\"sortable\">\n          <div class=\"shadow btn-long\" (click)=\"finder()\"><i class=\"fas fa-plus-circle\"></i> {{\"PLAYLISTS.ADDTOLIST\" | translate}}</div>\n          <ngx-sortable *ngIf=\"item.list\" [listStyle]=\"listStyle\" [items]=\"item.list\">\n            <ng-template let-item>\n              <div class=\"sortable-list-item\">\n                <div class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n                  {{item.Name}}\n                </div>\n              </div>\n            </ng-template>\n          </ngx-sortable>\n        </div>\n\n      </div>\n      <div *ngIf=\"tabs[1].selected\">\n        <div class=\"form-group shadow\">\n          <div class=\"btn-long\" (click)=\"schedule()\"><i class=\"fas fa-plus-circle\"></i> {{\"PLAYLISTS.ADDTIME\" | translate}}</div>\n          <div id=\"timeSlots\" *ngIf=\"editTime && selectedTimeEl\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"itemName\">{{ \"PLAYLISTS.SCHEDULE\" | translate }}:</label>\n                <select [(ngModel)]=\"selectedTimeEl.timeslot\" name=\"timeSlotOptions\" [compareWith]=\"compareFnId\" class=\"form-control\">\n                  <option *ngFor=\"let c of timeSlotOptions\" [ngValue]=\"c\">{{c.name | translate}}</option>\n                </select>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"ScreenGroup\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n                <select [(ngModel)]=\"selectedTimeEl.screenGroup\" name=\"ScreenGroup\" [compareWith]=\"compareFn_id\" class=\"form-control\">\n                  <option *ngFor=\"let c of groups\" [ngValue]=\"c\">{{c.Name}}</option>\n                </select>\n              </div>\n              <button class=\"btn btn-primary\" (click)=\"addTimeSlot()\">{{ \"PLAYLISTS.SETTIME\" | translate}}</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"container\">\n\n          <div *ngFor=\"let timeslotEl of item.TimeSlots\" class=\"sqr short shadow\">\n            <label>{{timeslotEl.timeslot.name | translate}}</label>\n            <small>{{timeslotEl.screenGroup.Name}}</small>\n            <ul class=\"sqr-toolbar\">\n              <li>\n                <button class=\"btn btn-md btn-danger\" (click)=\"deleteTimeslot(timeslotEl);\"> <i class=\"fas fa-trash\"></i>\n                </button>\n              </li>\n              <li>\n                <button class=\"btn btn-md btn-primary\" (click)=\"editTimeslot(timeslotEl);\"> <i class=\"fas fa-edit\"></i> </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <hr />\n      <button *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"PLAYLISTS.UPDATE\" | translate }}</button>\n      <button *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"PLAYLISTS.CREATE\" | translate }}</button>\n\n    </form>\n  </dialog>\n</div>\n\n<!-- <div class=\"slider-container-drawer {{displayDrawer}} shadow\">\n  <dialog open= {{displayDrawer}}>\n    <app-slide-header [title]=\"'NAVBAR.SCHEDULES'\" [className]=\"'orange'\" (closed)=\"closeDrawer($event)\"></app-slide-header>\n    <div *ngIf=\"item\" class=\"pt50\">\n      <div class=\"sqr shadow sqr-btn\" (click)=\"addTime()\"><i class=\"fas fa-plus-circle\"></i></div>\n      <div *ngFor=\"let timeslot of item.TimeSlots\" class=\"sqr shadow\">\n        <ul class=\"sqr-toolbar\">\n          <li>\n            <button class=\"btn btn-md btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n          </li>\n          <li>\n            <button class=\"btn btn-md btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </dialog>\n</div> -->\n\n<app-finder [active]=\"finderActive\" [selector]=\"addToList\"></app-finder>\n"

/***/ }),

/***/ "./src/app/playlists/playlist/playlists.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/playlists/playlist/playlists.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".short {\n  height: 90px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0L0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxccGxheWxpc3RzXFxwbGF5bGlzdFxccGxheWxpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0ksYUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0L3BsYXlsaXN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuc2hvcnR7XHJcbiAgICAgaGVpZ2h0OjkwcHg7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/playlists/playlist/playlists.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/playlists/playlist/playlists.component.ts ***!
  \***********************************************************/
/*! exports provided: PlaylistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistsComponent", function() { return PlaylistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var PlaylistsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlaylistsComponent, _super);
    function PlaylistsComponent(_ngZone, translateService) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.listStyle = {
            width: '100%',
            height: '400px',
        };
        _this.tabs = [{ name: 'PLAYLISTS.LIST', selected: true }, { name: 'PLAYLISTS.TIME', selected: false }];
        _this.timeSlotOptions = [{ id: 'ALL', name: 'TIMES.ALL' }, { id: '8TO8', name: 'TIMES.8TO8' }];
        _this.displayDrawer = 'closing';
        _this.finderActive = 'closing';
        _this.addToList = function (resource) {
            if (!_this.item.list) {
                _this.item.list = [];
            }
            _this.item.list.push(resource);
            _this.finderActive = 'closing';
        };
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_2__["Playlist"];
        _this.addToList.bind(_this);
        return _this;
        // this.DataModel = PlaylistModel;
    }
    PlaylistsComponent.prototype.tabSelect = function (tab) {
        this.tabs.forEach(function (tabItem) { return tabItem.selected = false; });
        tab.selected = true;
    };
    PlaylistsComponent.prototype.compareFnId = function (a, b) {
        if (b) {
            return a.id === b.id;
        }
    };
    PlaylistsComponent.prototype.compareFn_id = function (a, b) {
        if (b) {
            return a._id === b._id;
        }
    };
    PlaylistsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var groups;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadItems();
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["ScreenGroupDataController"].query({})];
                    case 1:
                        groups = _a.sent();
                        this.groups = groups;
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaylistsComponent.prototype.closeDrawer = function () {
        this.displayDrawer = 'closing';
    };
    PlaylistsComponent.prototype.closeSlider = function () {
        this.displayModalNew = 'closing';
    };
    PlaylistsComponent.prototype.finder = function (finderMode) {
        this.finderMode = finderMode;
        this.finderActive = 'active';
    };
    PlaylistsComponent.prototype.schedule = function () {
        this.selectedTimeEl = {};
        this.editTime = true;
        this.displayDrawer = 'active';
    };
    PlaylistsComponent.prototype.addTimeSlot = function () {
        if (!this.item.TimeSlots) {
            this.item.TimeSlots = [];
        }
        if (!this.selectedTimeEl.id) {
            Object.assign(this.selectedTimeEl, { id: new Date().valueOf() });
            this.item.TimeSlots.push(this.selectedTimeEl);
        }
        this.selectedTimeEl = null;
    };
    PlaylistsComponent.prototype.deleteTimeslot = function (timeslot) {
        var _this = this;
        this.translateService.get('DATA.CONFIRM_DELETE').subscribe(function (confirmMessage) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (confirm("" + confirmMessage)) {
                    this.item.TimeSlots.splice(this.item.TimeSlots.indexOf(timeslot), 1);
                }
                return [2 /*return*/];
            });
        }); });
    };
    PlaylistsComponent.prototype.editTimeslot = function (timeslotEL) {
        this.editTime = true;
        this.selectedTimeEl = timeslotEL;
    };
    PlaylistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlists',
            template: __webpack_require__(/*! ./playlists.component.html */ "./src/app/playlists/playlist/playlists.component.html"),
            styles: [__webpack_require__(/*! ./playlists.component.scss */ "./src/app/playlists/playlist/playlists.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], PlaylistsComponent);
    return PlaylistsComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_3__["DataComponent"]));



/***/ }),

/***/ "./src/app/playlists/playlists.module.ts":
/*!***********************************************!*\
  !*** ./src/app/playlists/playlists.module.ts ***!
  \***********************************************/
/*! exports provided: playlistsRoutes, PlaylistsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playlistsRoutes", function() { return playlistsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistsModule", function() { return PlaylistsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_sortable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-sortable */ "./node_modules/ngx-sortable/dist/index.js");
/* harmony import */ var _playlist_playlists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playlist/playlists.component */ "./src/app/playlists/playlist/playlists.component.ts");
/* harmony import */ var _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedules/schedules.component */ "./src/app/playlists/schedules/schedules.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var playlistsRoutes = [
    {
        path: 'playlists', component: _playlist_playlists_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistsComponent"],
    }, {
        path: 'schedules', component: _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_5__["SchedulesComponent"],
    }
];
var PlaylistsModule = /** @class */ (function () {
    function PlaylistsModule() {
    }
    PlaylistsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ngx_sortable__WEBPACK_IMPORTED_MODULE_3__["NgxSortableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            entryComponents: [_playlist_playlists_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistsComponent"]],
            declarations: [_playlist_playlists_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistsComponent"], _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_5__["SchedulesComponent"]]
        })
    ], PlaylistsModule);
    return PlaylistsModule;
}());



/***/ }),

/***/ "./src/app/playlists/schedules/schedules.component.css":
/*!*************************************************************!*\
  !*** ./src/app/playlists/schedules/schedules.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0cy9zY2hlZHVsZXMvc2NoZWR1bGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/playlists/schedules/schedules.component.html":
/*!**************************************************************!*\
  !*** ./src/app/playlists/schedules/schedules.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container no-margin\">\n<div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n    <div *ngFor=\"let item of items\" class=\"sqr shadow\" >\n    <i class=\"fas fa-desktop\"></i>\n    {{item.Name}}  \n      <ul class=\"sqr-toolbar\">    \n        <li>\n          <button class=\"btn btn-md btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n        </li>\n        <li>\n          <button class=\"btn btn-md btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n        </li>\n      </ul>\n    </div>    \n</div>\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n<dialog open={{displayModalNew}}>\n<a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\" ></i></a>\n <form *ngIf=\"item\">\n  <div class=\"form-group\">\n    <label for=\"itemName\">{{ \"PLAYLISTS.NAME\" | translate }}:</label>\n    <input type=\"text\" name=\"itemName\" class=\"form-control\" id=\"itemName\"   [(ngModel)]=\"item.Name\">\n    <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"PLAYLISTS.NAME_HELP\" | translate }}</small>\n  </div>\n \n  <button   *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"PLAYLISTS.UPDATE\" | translate }}</button>\n  <button   *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"PLAYLISTS.CREATE\" | translate }}</button>\n</form>\n</dialog>\n</div>\n "

/***/ }),

/***/ "./src/app/playlists/schedules/schedules.component.ts":
/*!************************************************************!*\
  !*** ./src/app/playlists/schedules/schedules.component.ts ***!
  \************************************************************/
/*! exports provided: SchedulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesComponent", function() { return SchedulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var SchedulesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchedulesComponent, _super);
    function SchedulesComponent(_ngZone, translateService) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_2__["ScheduleDataController"];
        return _this;
    }
    SchedulesComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadItems();
                return [2 /*return*/];
            });
        });
    };
    SchedulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedules',
            template: __webpack_require__(/*! ./schedules.component.html */ "./src/app/playlists/schedules/schedules.component.html"),
            styles: [__webpack_require__(/*! ./schedules.component.css */ "./src/app/playlists/schedules/schedules.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], SchedulesComponent);
    return SchedulesComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_3__["DataComponent"]));



/***/ }),

/***/ "./src/app/screens/screen-group/screen-group.component.html":
/*!******************************************************************!*\
  !*** ./src/app/screens/screen-group/screen-group.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin\">\n    <div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n    <div *ngFor=\"let item of items\" class=\"sqr shadow\">\n        <i class=\"fas fa-desktop\"></i> {{item.Name}}\n        <ul class=\"sqr-toolbar\">\n            <li>\n                <button class=\"btn btn-md btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n            </li>\n            <li>\n                <button class=\"btn btn-md btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n            </li>\n        </ul>\n    </div>\n</div>\n\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n    <dialog open= {{displayModalNew}}>\n        <app-slide-header [title]=\"'NAVBAR.SCREEN-GROUPS'\" [className]=\"'orange'\" (closed)=\"close($event)\"></app-slide-header>\n        <form *ngIf=\"item\" class=\"pt50\">\n            <div class=\"form-group\">\n                <label for=\"screenName\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n                <input type=\"text\" name=\"screenName\" class=\"form-control\" id=\"screenName\" [(ngModel)]=\"item.Name\">\n                <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SCREENS.NAME_HELP\" | translate }}</small>\n            </div>\n            <button *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"SCREENS.UPDATE\" | translate }}</button>\n            <button *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"SCREENS.CREATE\" | translate }}</button>\n        </form>\n    </dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/screen-group/screen-group.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/screens/screen-group/screen-group.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVuLWdyb3VwL3NjcmVlbi1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/screens/screen-group/screen-group.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/screens/screen-group/screen-group.component.ts ***!
  \****************************************************************/
/*! exports provided: ScreenGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenGroupComponent", function() { return ScreenGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var ScreenGroupComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ScreenGroupComponent, _super);
    function ScreenGroupComponent(_ngZone, translateService) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_2__["ScreenGroupDataController"];
        return _this;
    }
    ScreenGroupComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadItems();
                return [2 /*return*/];
            });
        });
    };
    ScreenGroupComponent.prototype.close = function () {
        this.displayModalNew = 'closing';
    };
    ScreenGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-screen-group',
            template: __webpack_require__(/*! ./screen-group.component.html */ "./src/app/screens/screen-group/screen-group.component.html"),
            styles: [__webpack_require__(/*! ./screen-group.component.scss */ "./src/app/screens/screen-group/screen-group.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ScreenGroupComponent);
    return ScreenGroupComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_3__["DataComponent"]));



/***/ }),

/***/ "./src/app/screens/screens.module.ts":
/*!*******************************************!*\
  !*** ./src/app/screens/screens.module.ts ***!
  \*******************************************/
/*! exports provided: ScreensComponent, screenRoutes, ScreensModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenRoutes", function() { return screenRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreensModule", function() { return ScreensModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _screens_screens_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/screens.component */ "./src/app/screens/screens/screens.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreensComponent", function() { return _screens_screens_component__WEBPACK_IMPORTED_MODULE_3__["ScreensComponent"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _screen_group_screen_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screen-group/screen-group.component */ "./src/app/screens/screen-group/screen-group.component.ts");








var screenRoutes = [
    { path: 'screens', component: _screens_screens_component__WEBPACK_IMPORTED_MODULE_3__["ScreensComponent"] },
    { path: 'screen-groups', component: _screen_group_screen_group_component__WEBPACK_IMPORTED_MODULE_6__["ScreenGroupComponent"] }
];
var ScreensModule = /** @class */ (function () {
    function ScreensModule() {
    }
    ScreensModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [_screens_screens_component__WEBPACK_IMPORTED_MODULE_3__["ScreensComponent"], _screen_group_screen_group_component__WEBPACK_IMPORTED_MODULE_6__["ScreenGroupComponent"]],
            entryComponents: [_screens_screens_component__WEBPACK_IMPORTED_MODULE_3__["ScreensComponent"]],
            exports: [_screens_screens_component__WEBPACK_IMPORTED_MODULE_3__["ScreensComponent"], _screen_group_screen_group_component__WEBPACK_IMPORTED_MODULE_6__["ScreenGroupComponent"]]
        })
    ], ScreensModule);
    return ScreensModule;
}());



/***/ }),

/***/ "./src/app/screens/screens/screens.component.html":
/*!********************************************************!*\
  !*** ./src/app/screens/screens/screens.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin\">\n    <div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n    <div *ngFor=\"let item of items\" class=\"sqr shadow\">\n        <i class=\"fas fa-desktop\"></i>\n        {{item.Name}}\n        <ul class=\"sqr-toolbar\">\n            <li>\n                <button class=\"btn btn-md btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n            </li>\n            <li>\n                <button class=\"btn btn-md btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n            </li>\n        </ul>\n    </div>\n</div>\n\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n    <dialog open= {{displayModalNew}}>\n        <app-slide-header [title]=\"'NAVBAR.SCREENS'\" [className]=\"'orange'\" (closed)=\"close($event)\"></app-slide-header>\n        <!-- <div class=\"topper\"><span class=\"fas fa-clone bar-icon\"></span> <h4> {{\"NAVBAR.SCREENS\" | translate}}</h4>\n        </div>\n        <a (click)=\"closeSlider();\" class=\"close-button\"><i class=\"far fa-window-close\"></i></a> -->\n\n\n        <form *ngIf=\"item\" class=\"pt50\">\n            <div class=\"form-group\">\n                <label for=\"screenName\">{{ \"SCREENS.NAME\" | translate }}:</label>\n                <input type=\"text\" name=\"screenName\" class=\"form-control\" id=\"screenName\" [(ngModel)]=\"item.Name\">\n                <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SCREENS.NAME_HELP\" | translate }}</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"ScreenGroup\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n                <select [(ngModel)]=\"item.Group\" name=\"ScreenGroup\" [compareWith]=\"compareFn\" class=\"form-control\">\n                    <option *ngFor=\"let c of groups\" [ngValue]=\"c\">{{c.Name}}</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">{{ \"SCREENS.TOKEN\" | translate }}</label>\n                <input type=\"text\" [(ngModel)]=\"item.Token\" name=\"txtToken\" class=\"form-control\" id=\"txtToken\" placeholder=\"{{'SCREENS.TOKEN' | translate}}\">\n            </div>\n            <button *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"SCREENS.UPDATE\" | translate }}</button>\n            <button *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"SCREENS.CREATE\" | translate }}</button>\n        </form>\n    </dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/screens/screens.component.scss":
/*!********************************************************!*\
  !*** ./src/app/screens/screens/screens.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%; }\n\n.container div {\n  margin-right: 8px;\n  margin-bottom: 1em;\n  box-sizing: border-box;\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); }\n\n.modal {\n  margin: auto;\n  width: 50%;\n  height: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9zY3JlZW5zL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcc2NyZWVuc1xcc2NyZWVuc1xcc2NyZWVucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsWUFBVyxFQUVkOztBQUNEO0VBR0ksa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUVuQiwyQ0FBMEMsRUFFN0M7O0FBT0Q7RUFDSSxhQUFZO0VBQ1osV0FBVTtFQUNWLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy9zY3JlZW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbn1cclxuLmNvbnRhaW5lciBkaXYge1xyXG4gIFxyXG4gIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG59XHJcblxyXG5cclxuLy8gLmNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDRuKSB7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6MDtcclxuLy8gfVxyXG5cclxuLm1vZGFse1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/screens/screens/screens.component.ts":
/*!******************************************************!*\
  !*** ./src/app/screens/screens/screens.component.ts ***!
  \******************************************************/
/*! exports provided: ScreensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreensComponent", function() { return ScreensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var ScreensComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ScreensComponent, _super);
    function ScreensComponent(_ngZone, translateService) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_2__["ScreensDataController"];
        return _this;
    }
    ScreensComponent.prototype.compareFn = function (a, b) {
        if (b) {
            return a._id === b._id;
        }
    };
    ScreensComponent.prototype.close = function () {
        this.displayModalNew = 'closing';
    };
    ScreensComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var groups;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadItems();
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["ScreenGroupDataController"].query({})];
                    case 1:
                        groups = _a.sent();
                        this.groups = groups;
                        return [2 /*return*/];
                }
            });
        });
    };
    ScreensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-screens',
            template: __webpack_require__(/*! ./screens.component.html */ "./src/app/screens/screens/screens.component.html"),
            styles: [__webpack_require__(/*! ./screens.component.scss */ "./src/app/screens/screens/screens.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ScreensComponent);
    return ScreensComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_3__["DataComponent"]));



/***/ }),

/***/ "./src/app/services/language.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var LanguageService = /** @class */ (function () {
    function LanguageService(translate) {
        this.translate = translate;
        this.languages = [];
        this.languages.push({ key: 'en', lcid: 1025, name: 'English', dir: 'ltr' });
        this.languages.push({ key: 'he', lcid: 1037, name: 'עברית', dir: 'rtl' });
        this.languages.push({ key: 'de', lcid: 1037, name: 'Dutche', dir: 'ltr' });
        var lngstr = localStorage.getItem('lng');
        if (lngstr) {
            this.language = JSON.parse(lngstr);
        }
        else {
            this.language = this.languages[0];
        }
        document.getElementsByTagName('body')[0].className = this.language.dir;
        this.cssUrl = "/assets/i18n/" + this.language.dir + ".css?k=" + Math.random();
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(this.language.key);
    }
    LanguageService.prototype.getLanguage = function () {
        var str = localStorage.getItem('lng');
        if (str) {
            this.language = JSON.parse(str);
        }
        return this.language;
    };
    LanguageService.prototype.setLanguage = function (language) {
        this.language = language;
        localStorage.setItem('lng', JSON.stringify(language));
        this.translate.use(language.key);
        document.getElementsByTagName('body')[0].className = language.dir;
        this.cssUrl = "/assets/i18n/" + language.dir + ".css?k=" + Math.random();
    };
    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/services/language/dictionary.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/language/dictionary.service.ts ***!
  \*********************************************************/
/*! exports provided: DictionaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryService", function() { return DictionaryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var DictionaryService = /** @class */ (function () {
    function DictionaryService(translate) {
        this.translate = translate;
    }
    DictionaryService.prototype.generateDictionary = function (objectWithKeys, options) {
        var _this = this;
        var keys = Object.keys(objectWithKeys);
        if (options && options.ns) {
            keys = keys.map(function (key) { return options.ns + "." + key; });
        }
        return new Promise(function (resolve, reject) {
            var dictionary = {};
            _this.translate.get(keys).subscribe(function (strings) {
                if (options && options.ns) {
                    keys.forEach(function (key) {
                        dictionary[key.replace(options.ns + ".", '')] = strings[key];
                    });
                }
                else {
                    keys.forEach(function (key) {
                        dictionary[key] = strings[key];
                    });
                }
                resolve(dictionary);
            });
        });
    };
    DictionaryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], DictionaryService);
    return DictionaryService;
}());



/***/ }),

/***/ "./src/app/services/name.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/name.service.ts ***!
  \******************************************/
/*! exports provided: NameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameService", function() { return NameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var NameService = /** @class */ (function () {
    function NameService(translate) {
        this.translate = translate;
    }
    NameService.prototype.setName = function (name) {
        this.name = name;
    };
    NameService.prototype.getName = function () {
        return this.name;
    };
    NameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], NameService);
    return NameService;
}());



/***/ }),

/***/ "./src/app/services/user.context.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user.context.service.ts ***!
  \**************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");



var UserService = /** @class */ (function () {
    function UserService(jwtHelper) {
        this.jwtHelper = jwtHelper;
        this.groupChanges = [];
    }
    UserService.prototype.setUser = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    };
    UserService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    UserService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        var isExpired = this.jwtHelper.isTokenExpired(token);
        return !isExpired;
    };
    UserService.prototype.getUser = function () {
        var str = localStorage.getItem('user');
        if (str) {
            return JSON.parse(str);
        }
    };
    UserService.prototype.setGroup = function (group) {
        this.group = group;
        this.groupChanges.forEach(function (func) { return func(group); });
    };
    UserService.prototype.onGroupChange = function (callback) {
        this.groupChanges.push(callback);
    };
    UserService.prototype.getGroup = function () {
        return this.group;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserService.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserService.prototype, "user", void 0);
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_language_dictionary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/language/dictionary.service */ "./src/app/services/language/dictionary.service.ts");
/* harmony import */ var _services_name_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/name.service */ "./src/app/services/name.service.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/fesm5/angular2-draggable.js");
/* harmony import */ var _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/language-bar/language-bar.component */ "./src/app/common/language-bar/language-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./library/finder/finder.component */ "./src/app/library/finder/finder.component.ts");
/* harmony import */ var _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/slide-header/slide-header.component */ "./src/app/common/slide-header/slide-header.component.ts");
/* harmony import */ var _common_bread_crumbs_bread_crumbs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/bread-crumbs/bread-crumbs.component */ "./src/app/common/bread-crumbs/bread-crumbs.component.ts");
/* harmony import */ var _directives_adapt_height__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/adapt-height */ "./src/app/directives/adapt-height.ts");






// import { DragAndDropModule } from 'angular-draggable-droppable';








var SharedModule = /** @class */ (function () {
    function SharedModule(translate) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('he');
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function (loader) {
        return {
            ngModule: SharedModule_1,
            providers: [],
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(), ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__["FileDropModule"], angular2_draggable__WEBPACK_IMPORTED_MODULE_6__["AngularDraggableModule"]],
            declarations: [_directives_adapt_height__WEBPACK_IMPORTED_MODULE_13__["AdaptHeightDirective"], _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_7__["LanguageBarComponent"], _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_10__["FinderComponent"], _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_11__["SlideHeaderComponent"], _common_bread_crumbs_bread_crumbs_component__WEBPACK_IMPORTED_MODULE_12__["BreadCrumbsComponent"]],
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_language_dictionary_service__WEBPACK_IMPORTED_MODULE_3__["DictionaryService"], _services_name_service__WEBPACK_IMPORTED_MODULE_4__["NameService"]],
            exports: [_common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_7__["LanguageBarComponent"], _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_10__["FinderComponent"], _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_11__["SlideHeaderComponent"], _common_bread_crumbs_bread_crumbs_component__WEBPACK_IMPORTED_MODULE_12__["BreadCrumbsComponent"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__["FileDropModule"], _directives_adapt_height__WEBPACK_IMPORTED_MODULE_13__["AdaptHeightDirective"], angular2_draggable__WEBPACK_IMPORTED_MODULE_6__["AngularDraggableModule"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/timelines/timelines.component.css":
/*!***************************************************!*\
  !*** ./src/app/timelines/timelines.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVsaW5lcy90aW1lbGluZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timelines/timelines.component.html":
/*!****************************************************!*\
  !*** ./src/app/timelines/timelines.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of screenGroups\">\n  {{item.Name}}\n</div>\n"

/***/ }),

/***/ "./src/app/timelines/timelines.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timelines/timelines.component.ts ***!
  \**************************************************/
/*! exports provided: TimelinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinesComponent", function() { return TimelinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_2__);



var TimelinesComponent = /** @class */ (function () {
    function TimelinesComponent() {
    }
    TimelinesComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["ScreenGroupDataController"].query({})];
                    case 1:
                        _a.screenGroups = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TimelinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timelines',
            template: __webpack_require__(/*! ./timelines.component.html */ "./src/app/timelines/timelines.component.html"),
            styles: [__webpack_require__(/*! ./timelines.component.css */ "./src/app/timelines/timelines.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimelinesComponent);
    return TimelinesComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu a {cursor: pointer;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixnQkFBZ0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51IGEge2N1cnNvcjogcG9pbnRlcjt9Il19 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"limiter\">\n\t\t<div class=\"container-login100\">\n      \n\n\t\t\t<div class=\"wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30\">\n            \n\t\t\t\t<form class=\"login100-form validate-form\">\n\t\t\t\t\t<span class=\"login100-form-title p-b-55\">\n\t\t\t\t\t\t{{\"LOGIN.TITLE\" | translate}}\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" [attr.data-validate]=\"'LOGIN.INSERT_USERNAME' | translate\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"text\" name=\"userName\" placeholder=\"{{'LOGIN.USERNAME' | translate}}\" [(ngModel)]=\"userName\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-envelope\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" >\n\t\t\t\t\t\t<input class=\"input100\" type=\"password\" name=\"password\" placeholder=\"{{'LOGIN.PASSWORD' | translate}}\" [(ngModel)]=\"password\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-lock\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"contact100-form-checkbox m-l-4\">\n\t\t\t\t\t\t<input class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n\t\t\t\t\t\t<label class=\"label-checkbox100\" for=\"ckb1\">\n\t\t\t\t\t\t\t{{\"LOGIN.REMEMBER_ME\" | translate}}\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"container-login100-form-btn p-t-25\">\n\t\t\t\t\t\t<button class=\"login100-form-btn\" (click)=\"tryLogin()\">\n\t\t\t\t\t\t\t\t{{\"LOGIN.LOGIN_BTN\" | translate}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n \n\t\t\t\t\t<div class=\"text-center w-full p-t-25\">\n\t\t\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t{{'LOGIN.NOTAMEMBER' | translate}}\t\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<a class=\"txt1 bo1 hov1\" href=\"#\"  routerLink=\"/signup\">\n\t\t\t\t\t\t{{'LOGIN.SIGNUP' | translate}}\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</a>\n                    </div>\n                    <app-language-bar></app-language-bar>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n\n\n\n\n\n<!-- Simple pop-up dialog box containing a form -->\n<dialog id=\"favDialog\">\n  <form method=\"dialog\">\n    <p><label>Favorite animal:\n      <select>\n        <option></option>\n        <option>Brine shrimp</option>\n        <option>Red panda</option>\n        <option>Spider monkey</option>\n      </select>\n    </label></p>\n    <menu>\n      <button>Cancel</button>\n      <button>Confirm</button>\n    </menu>\n  </form>\n</dialog>\n\n<menu>\n  <button id=\"updateDetails\">Update details</button>\n</menu>\n\n<div id=\"output\"></div>\n\n<script>\n(function() {\n  var updateButton = document.getElementById('updateDetails');\n  var favDialog = document.getElementById('favDialog');\n  var outputBox = document.getElementById(\"output\");\n\n  // “Update details” button opens the <dialog> modally\n  updateButton.addEventListener('click', function() {\n    favDialog.showModal();\n    output.innerHTML += \"<div>\" + favDialog.returnValue + \" button clicked!</div>\";\n  });\n})();\n</script>\n \n\n    <ng-template #share>\n        <div class=\"modal-body text-center\">\n\n            <p>Share your group.</p>\n            <pre>{{group.GroupId}}</pre>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <ng-template #join>\n        <div class=\"modal-body text-center\">\n            <p>Join a group.</p>\n            <div>\n                <label>Group code</label>\n                <input type=\"text\" class=\"form-control\" #group_code />\n            </div>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"JoinConfirm(group_code.value)\">Join</a>\n            <a type=\"button\" class=\"btn btn-default\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <div class=\"float-left dropdown\" *ngIf=\"userData && group\">\n        <a class=\"btn btn-secondary dropdown-toggle white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            {{group.Name}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"position: absolute\">\n            <a class=\"dropdown-item\" (click)=\"setGroup(item)\" *ngFor=\"let item of userData.groups\">{{item.Name}}</a>\n\n            <a class=\"dropdown-item\" (click)=\"JoinGroup(join)\">Join group</a>\n            <a class=\"dropdown-item\" (click)=\"ShareGroup(share)\">Share group</a>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.context.service */ "./src/app/services/user.context.service.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");






var LoginComponent = /** @class */ (function () {
    /**
     *
     */
    function LoginComponent(ref, modalService, userService, router, _ngZone) {
        var _this = this;
        this.ref = ref;
        this.modalService = modalService;
        this.userService = userService;
        this.router = router;
        this._ngZone = _ngZone;
        this.user = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalPromise = null;
        var win = window;
        if (win.chrome) {
            var interval_1 = setInterval(function () {
                if (win.chrome.identity && win.chrome.identity.getProfileUserInfo) {
                    clearInterval(interval_1);
                    win.chrome.identity.getProfileUserInfo(function (profile) {
                        _this.user.emit({ id: profile.id, name: profile.email });
                        // this.userService.setUser(profile);
                    });
                }
            }, 500);
        }
        this.user.subscribe(function ($event) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
    }
    LoginComponent.prototype.tryLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["AuthController"].token({ Email: this.userName, Password: this.password })];
                    case 1:
                        result = _a.sent();
                        if (result.token) {
                            this.userService.setToken(result.token);
                            this.router.navigate(['dashboard']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.signOut = function () {
    };
    LoginComponent.prototype.setGroup = function (group) {
        this.group = group;
        this.userService.setGroup(group);
    };
    LoginComponent.prototype.decline = function () {
        this.modalRef.hide();
    };
    LoginComponent.prototype.JoinGroup = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    };
    LoginComponent.prototype.JoinConfirm = function (group_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                user_id = this.userService.getUser().id;
                return [2 /*return*/];
            });
        });
    };
    LoginComponent.prototype.ShareGroup = function (template) {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalRef = this.modalService.show(template, { class: 'modal-md' });
                return [2 /*return*/];
            });
        }); });
    };
    LoginComponent.prototype.onGoogleSignInSuccess = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "userData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "user", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _services_user_context_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <div class=\"limiter\">\n\n        <div class=\"container-login100\">\n\n            <div class=\"wrap-login100\" style=\"padding: 50px 50px 30px 30px\">\n\n                <form class=\"login100-form validate-form\">\n                    <span class=\"login100-form-title p-b-55\">\n                        {{\"SIGNUP.TITLE\" | translate}}\n                    </span>\n\n                    <div class=\"wrap-input100 validate-input m-b-16\" [attr.data-validate]=\"'SIGNUP.INSERT_USERNAME' | translate\">\n                        <input class=\"input100\" type=\"text\" name=\"userName\" placeholder=\"{{'SIGNUP.USERNAME' | translate}}\" [(ngModel)]=\"userName\">\n                        <span class=\"focus-input100\"></span>\n                        <span class=\"symbol-input100\">\n                            <span class=\"lnr lnr-envelope\"></span>\n                        </span>\n                    </div>\n\n                    <div class=\"wrap-input100 validate-input m-b-16\">\n                        <input class=\"input100\" type=\"password\" name=\"password\" placeholder=\"{{'SIGNUP.PASSWORD' | translate}}\" [(ngModel)]=\"password\">\n                        <span class=\"focus-input100\"></span>\n                        <span class=\"symbol-input100\">\n                            <span class=\"lnr lnr-lock\"></span>\n                        </span>\n                    </div>\n\n\n                    <div class=\"wrap-input100 validate-input m-b-16\">\n                        <input class=\"input100\" type=\"password\" name=\"passwordRepeat\" placeholder=\"{{'SIGNUP.RPTPASSWORD' | translate}}\" [(ngModel)]=\"passwordRepeat\">\n                        <span class=\"focus-input100\"></span>\n                        <span class=\"symbol-input100\">\n                            <span class=\"lnr lnr-lock\"></span>\n                        </span>\n                    </div>\n\n\n\n                    <div class=\"container-login100-form-btn p-t-25\">\n                        <button class=\"login100-form-btn\" (click)=\"trySignup()\">\n                            {{\"SIGNUP.SIGNUP_BTN\" | translate}}\n                        </button>\n                    </div>\n\n\n                    <div class=\"text-center w-full p-t-25\">\n                        <span class=\"txt1\">\n                            {{'SIGNUP.ALREADYMEMBER' | translate}}\n                        </span>\n\n                        <a class=\"txt1 bo1 hov1\" href=\"#\" routerLink=\"/signin\">\n                            {{'SIGNUP.SIGNIN' | translate}}\n                        </a>\n                    </div>\n                    <app-language-bar></app-language-bar>\n                </form>\n            </div>\n\n\n\n        </div>\n    </div>\n\n\n\n\n\n\n\n\n    <!-- Simple pop-up dialog box containing a form -->\n    <dialog id=\"favDialog\">\n        <form method=\"dialog\">\n            <p><label>Favorite animal:\n                    <select>\n                        <option></option>\n                        <option>Brine shrimp</option>\n                        <option>Red panda</option>\n                        <option>Spider monkey</option>\n                    </select>\n                </label></p>\n            <menu>\n                <button>Cancel</button>\n                <button>Confirm</button>\n            </menu>\n        </form>\n    </dialog>\n\n    <menu>\n        <button id=\"updateDetails\">Update details</button>\n    </menu>\n\n    <div id=\"output\"></div>\n\n    <script>\n        (function () {\n            var updateButton = document.getElementById('updateDetails');\n            var favDialog = document.getElementById('favDialog');\n            var outputBox = document.getElementById(\"output\");\n\n            // “Update details” button opens the <dialog> modally\n            updateButton.addEventListener('click', function () {\n                favDialog.showModal();\n                output.innerHTML += \"<div>\" + favDialog.returnValue + \" button clicked!</div>\";\n            });\n        })();\n    </script>\n\n\n    <ng-template #share>\n        <div class=\"modal-body text-center\">\n\n            <p>Share your group.</p>\n            <pre>{{group.GroupId}}</pre>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <ng-template #join>\n        <div class=\"modal-body text-center\">\n            <p>Join a group.</p>\n            <div>\n                <label>Group code</label>\n                <input type=\"text\" class=\"form-control\" #group_code />\n            </div>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"JoinConfirm(group_code.value)\">Join</a>\n            <a type=\"button\" class=\"btn btn-default\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <div class=\"float-left dropdown\" *ngIf=\"userData && group\">\n        <a class=\"btn btn-secondary dropdown-toggle white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            {{group.Name}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"position: absolute\">\n            <a class=\"dropdown-item\" (click)=\"setGroup(item)\" *ngFor=\"let item of userData.groups\">{{item.Name}}</a>\n\n            <a class=\"dropdown-item\" (click)=\"JoinGroup(join)\">Join group</a>\n            <a class=\"dropdown-item\" (click)=\"ShareGroup(share)\">Share group</a>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.context.service */ "./src/app/services/user.context.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.trySignup = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userRequest, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRequest = { Email: this.userName, Password: this.password };
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["AuthController"].signup(userRequest)];
                    case 1:
                        result = _a.sent();
                        if (result.token) {
                            this.userService.setToken(result.token);
                            this.router.navigate(['dashboard']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignupComponent.prototype, "userData", void 0);
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_context_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user-info/user-info.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-info/user-info.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user-info/user-info.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-info/user-info.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form #infoForm=\"ngForm\"> -->\n\n<div class=\"container\">\n\n  <div class=\"form-group\" *ngIf=\"userData\">\n    <label for=\"NameInput\">User Name:</label>\n\n    {{userData.name}}\n\n  </div>\n  <div class=\"form-group\" *ngIf=\"userData\">\n    <label for=\"NameInput\">Group token:</label>\n    <textarea class=\"form-control\" name=\"DescriptionInput\" [(ngModel)]=\"userData.Description\" id=\"DescriptionInput\" aria-describedby=\"DescriptionHelp\"\n      placeholder=\"Enter a description\"></textarea>\n\n    <small id=\"emailHelp\" class=\"form-text text-muted\">it will help you understand what you're doing.</small>\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"userData\">\n    <label for=\"NameInput\">Groups:</label>\n    <table class=\"table table-sm\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Value</th>\n\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let variable of userData.groups\">\n          <td scope=\"row\">\n            {{variable.Name}} </td>\n          <td>\n            {{variable.GroupId}}\n          </td>\n\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n\n</div>\n\n<!-- \n</form> -->"

/***/ }),

/***/ "./src/app/user/user-info/user-info.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-info/user-info.component.ts ***!
  \*******************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.context.service */ "./src/app/services/user.context.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(_ngZone, userService, route, changeDetector) {
        var _this = this;
        this._ngZone = _ngZone;
        this.userService = userService;
        this.route = route;
        this.changeDetector = changeDetector;
        this.userData = false;
        this.route.params.subscribe(function (data) {
            _this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    // const users = await User.list();
                    // const user = await User.get('xxxx');
                    // this.userData = this.userService.getUser();
                    // if (!this.userData.groups || this.userData.groups.length === 0) {
                    //   // await User.attachToGroup(this.userData.id, { 'Name': this.userData.name });
                    //   // this.userData = this.userService.getUser();
                    // }
                    this.changeDetector.detectChanges();
                    return [2 /*return*/];
                });
            }); });
        });
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user/user-info/user-info.component.html"),
            providers: [_services_user_context_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/user/user-info/user-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _services_user_context_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: userRoutes, UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user/user-info/user-info.component.ts");








var userRoutes = [
    { path: 'signin', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'user/details', component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__["UserInfoComponent"] },
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__["UserInfoComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]],
            entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
            exports: []
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
window.METHODUS_CONFIG = { methodType: 'Http' };




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\sign-nature\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map