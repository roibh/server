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
// Generated at: Tue Jan 01 2019 19:42:35 GMT+0200 (Israel Standard Time)
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
// Generated at: Tue Jan 01 2019 19:42:35 GMT+0200 (Israel Standard Time)
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
// Generated at: Tue Jan 01 2019 19:42:35 GMT+0200 (Israel Standard Time)
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
// Generated at: Tue Jan 01 2019 19:42:35 GMT+0200 (Israel Standard Time)
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
// Generated at: Tue Jan 01 2019 19:42:35 GMT+0200 (Israel Standard Time)
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
// Generated at: Tue Jan 01 2019 19:42:35 GMT+0200 (Israel Standard Time)
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
// Generated at: Tue Jan 01 2019 19:42:35 GMT+0200 (Israel Standard Time)
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
// Generated at: Tue Jan 01 2019 19:42:35 GMT+0200 (Israel Standard Time)
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
// Generated at: Tue Jan 01 2019 19:42:35 GMT+0200 (Israel Standard Time)
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
// Generated at: Tue Jan 01 2019 19:42:35 GMT+0200 (Israel Standard Time)
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
// Generated at: Tue Jan 01 2019 19:42:35 GMT+0200 (Israel Standard Time)
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
// Generated at: Tue Jan 01 2019 19:42:35 GMT+0200 (Israel Standard Time)
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

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _player_player_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player/player.module */ "./src/player/player.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
window.METHODUS_CONFIG = { methodType: 'Http' };




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_player_player_module__WEBPACK_IMPORTED_MODULE_2__["PlayerModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/player/player-entry.component.html":
/*!************************************************!*\
  !*** ./src/player/player-entry.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "xxxxxxxxxxxxxxxx\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/player/player.component.html":
/*!******************************************!*\
  !*** ./src/player/player.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{bodyClass}}\">\r\n    <label *ngIf=\"!playerPlan\" class=\"huge\">{{Token}}</label>\r\n    <canvas *ngIf=\"playerPlan\"  #playerCanvas id=\"playerCanvas\"></canvas>\r\n</div>\r\n"

/***/ }),

/***/ "./src/player/player.component.scss":
/*!******************************************!*\
  !*** ./src/player/player.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white {\n  color: white; }\n\n.huge {\n  font-size: 70px;\n  padding: 40px;\n  border: 1px solid rgba(6, 19, 19, 0.932);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -400px;\n  width: 800px;\n  height: 200px;\n  text-align: center;\n  font-family: 'Montserrat', 'Roboto', sans-serif;\n  background-color: rgba(255, 255, 255, 0.5); }\n\ncanvas {\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5ZXIvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xccGxheWVyXFxwbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxhQUFZLEVBQUc7O0FBRXZCO0VBQ0ksZ0JBQWU7RUFDZixjQUFZO0VBQ1oseUNBQXdDO0VBQ3hDLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsVUFBUztFQUNULG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsZ0RBQStDO0VBQy9DLDJDQUEwQyxFQUUzQzs7QUFFRDtFQUVFLG1CQUFrQjtFQUNsQixPQUFLO0VBQUMsUUFBTSxFQUNiIiwiZmlsZSI6InNyYy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRlIHtjb2xvcjogd2hpdGU7fVxyXG4gXHJcbi5odWdlIHtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIHBhZGRpbmc6NDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNiwgMTksIDE5LCAwLjkzMik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDAwcHg7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblxyXG4gIH1cclxuXHJcbiAgY2FudmFze1xyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO2xlZnQ6MDtcclxuICB9XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/player/player.component.ts":
/*!****************************************!*\
  !*** ./src/player/player.component.ts ***!
  \****************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @signnature/client */ "../@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _slide_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slide.service */ "./src/player/slide.service.ts");






var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(slideService, translate, _ngZone, route, changeDetector) {
        this.slideService = slideService;
        this.translate = translate;
        this._ngZone = _ngZone;
        this.route = route;
        this.changeDetector = changeDetector;
        this.title = 'SignNature';
        this.Token = '';
        this.bodyClass = 'body-token';
    }
    PlayerComponent.prototype.paint = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.playerCanvas.changes.subscribe(function (data) {
                    var width = window.innerWidth
                        || document.documentElement.clientWidth
                        || document.body.clientWidth;
                    var height = window.innerHeight
                        || document.documentElement.clientHeight
                        || document.body.clientHeight;
                    data.first.nativeElement.width = width;
                    data.first.nativeElement.height = height;
                    var ctx = data.first.nativeElement.getContext('2d');
                    _this.slideService.play(_this.playerPlan, ctx, width, height);
                });
                return [2 /*return*/];
            });
        });
    };
    PlayerComponent.prototype.updatePlayerPlan = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["PlayerController"].runPlayer(this.playerInfo.Group._id)];
                    case 1:
                        _a.playerPlan = _b.sent();
                        this.slideService.updatePlayerPlan(this.playerPlan);
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerComponent.prototype.getPlayerPlan = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updatePlayerPlan()];
                    case 1:
                        _a.sent();
                        if (this.playerPlan) {
                            this.bodyClass = 'body-play';
                            this.paint();
                            setInterval(this.updatePlayerPlan.bind(this), 1000 * 10);
                        }
                        else {
                            this.bodyClass = 'body-token';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerComponent.prototype.validateScreen = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var playerInformation;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["PlayerController"].validatePlayer(this.Token)];
                    case 1:
                        playerInformation = _a.sent();
                        if (playerInformation.Status === 'pending') {
                            setTimeout(this.validateScreen.bind(this), 10 * 1000);
                        }
                        else {
                            localStorage.setItem('playerInfo', JSON.stringify(playerInformation));
                            this.getPlayerPlan();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerComponent.prototype.registerScreen = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["PlayerController"].registerPlayer(this.Token)];
                    case 1:
                        _a.sent();
                        setTimeout(this.validateScreen.bind(this), 10 * 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var str, datax;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = localStorage.getItem('playerInfo');
                        if (!str) return [3 /*break*/, 2];
                        this.playerInfo = JSON.parse(str);
                        return [4 /*yield*/, this.getPlayerPlan()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        datax = this.route.snapshot.data;
                        this.route.params.subscribe(function (data) {
                            _this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var xstr;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    if (data && data.id) {
                                        xstr = localStorage.getItem('playerInfo');
                                        if (xstr) {
                                            this.playerInfo = JSON.parse(xstr);
                                            this.getPlayerPlan();
                                        }
                                        else {
                                            this.Token = data.id;
                                            this.registerScreen();
                                        }
                                    }
                                    return [2 /*return*/];
                                });
                            }); });
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('playerCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayerComponent.prototype, "playerCanvas", void 0);
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'player-root',
            template: __webpack_require__(/*! ./player.component.html */ "./src/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/player/player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_slide_service__WEBPACK_IMPORTED_MODULE_5__["SlideService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/player/player.module.ts":
/*!*************************************!*\
  !*** ./src/player/player.module.ts ***!
  \*************************************/
/*! exports provided: HttpLoaderFactory, tokenGetter, PlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerModule", function() { return PlayerModule; });
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
/* harmony import */ var _player_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./player.component */ "./src/player/player.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_loaders_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-loaders-css */ "./node_modules/angular2-loaders-css/index.js");
/* harmony import */ var angular2_loaders_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_loaders_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _slide_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./slide.service */ "./src/player/slide.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./root.component */ "./src/player/root.component.ts");




// import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';















// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http);
}


var appRoutes = [
    { path: ':id', pathMatch: 'full', component: _player_component__WEBPACK_IMPORTED_MODULE_10__["PlayerComponent"] },
];
function tokenGetter() {
    return localStorage.getItem('access_token');
}
var PlayerModule = /** @class */ (function () {
    function PlayerModule() {
    }
    PlayerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _player_component__WEBPACK_IMPORTED_MODULE_10__["PlayerComponent"],
                _root_component__WEBPACK_IMPORTED_MODULE_19__["PlayerEntryComponent"],
            ],
            providers: [_slide_service__WEBPACK_IMPORTED_MODULE_16__["SlideService"]],
            imports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]]
                    }
                }),
                _app_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes, { enableTracing: true, useHash: true } // <-- debugging purposes only
                ),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_7__["SortableModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                angular2_loaders_css__WEBPACK_IMPORTED_MODULE_12__["LoadersCssModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_dynamic_forms_ui_bootstrap__WEBPACK_IMPORTED_MODULE_6__["DynamicFormsBootstrapUIModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            bootstrap: [_root_component__WEBPACK_IMPORTED_MODULE_19__["PlayerEntryComponent"]]
        })
    ], PlayerModule);
    return PlayerModule;
}());



/***/ }),

/***/ "./src/player/root.component.ts":
/*!**************************************!*\
  !*** ./src/player/root.component.ts ***!
  \**************************************/
/*! exports provided: PlayerEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerEntryComponent", function() { return PlayerEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlayerEntryComponent = /** @class */ (function () {
    function PlayerEntryComponent() {
    }
    PlayerEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'player-entry',
            template: __webpack_require__(/*! ./player-entry.component.html */ "./src/player/player-entry.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/player/player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerEntryComponent);
    return PlayerEntryComponent;
}());



/***/ }),

/***/ "./src/player/slide.service.ts":
/*!*************************************!*\
  !*** ./src/player/slide.service.ts ***!
  \*************************************/
/*! exports provided: SlideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideService", function() { return SlideService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlideService = /** @class */ (function () {
    function SlideService() {
        this.itemIndex = 0;
    }
    SlideService.prototype.updatePlayerPlan = function (playerPlan) {
        this.playerPlan = playerPlan;
        if (this.playerPlan) {
            this.list = this.playerPlan[0].list;
        }
    };
    SlideService.prototype.play = function (playerPlan, ctx, width, height) {
        var _this = this;
        this.playerPlan = playerPlan;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.list = this.playerPlan[0].list;
        this.prerender(this.list[this.itemIndex]);
        this.itemIndex++;
        setInterval(function () {
            if (_this.itemIndex >= _this.list.length) {
                _this.itemIndex = 0;
            }
            _this.prerender(_this.list[_this.itemIndex]);
            _this.itemIndex++;
        }, 5000);
    };
    SlideService.prototype.prerender = function (item) {
        var html = '<div>ELEMENT</div>';
        switch (item.type) {
            case 'image':
                // html = html.replace('ELEMENT', `<img src="${item.resource}" width="${this.width}" height="${this.height}" />`);
                this.render_image_to_canvas(item.resource, 0, 0, this.width, this.height);
                break;
        }
    };
    SlideService.prototype.render_image_to_canvas = function (url, x, y, width, height) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var img;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                img = new Image();
                img.onload = function () {
                    _this.ctx.clearRect(0, 0, _this.width, _this.height);
                    _this.ctx.drawImage(img, x, y);
                };
                img.src = url;
                return [2 /*return*/];
            });
        });
    };
    SlideService.prototype.render_html_to_canvas = function (html, x, y, width, height) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, _a, img;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = 'data:image/svg+xml;charset=utf-8,' + '<svg xmlns="http://www.w3.org/2000/svg" width="'
                            + width + '" height="' + height + '">' +
                            '<foreignObject width="100%" height="100%">';
                        return [4 /*yield*/, this.html_to_xml(html)];
                    case 1:
                        data = _a +
                            (_b.sent()) +
                            '</foreignObject>' +
                            '</svg>';
                        img = new Image();
                        img.onload = function () {
                            _this.ctx.clearRect(0, 0, _this.width, _this.height);
                            _this.ctx.drawImage(img, x, y);
                        };
                        img.src = data;
                        return [2 /*return*/];
                }
            });
        });
    };
    SlideService.prototype.html_to_xml = function (html) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var doc;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                doc = document.implementation.createHTMLDocument('');
                doc.write(html);
                // You must manually set the xmlns if you intend to immediately serialize
                // the HTML document to a string as opposed to appending it to a
                // <foreignObject> in the DOM
                doc.documentElement.setAttribute('xmlns', doc.documentElement.namespaceURI);
                // Get well-formed markup
                html = (new XMLSerializer).serializeToString(doc.body);
                return [2 /*return*/, html];
            });
        });
    };
    SlideService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlideService);
    return SlideService;
}());



/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/player.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\sign-nature\web\src\player.ts */"./src/player.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map