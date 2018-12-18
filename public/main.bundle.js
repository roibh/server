webpackJsonp(["main"],{

/***/ "../../../../../../../methodus/methodus-client/dist/methodus-client.js":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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

/***/ "../../../../../../@signnature/client/contracts/authcontroller.js":
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
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sat Dec 15 2018 18:07:03 GMT+0200 (Israel Standard Time)
var M = __webpack_require__("../../../../../../../methodus/methodus-client/dist/methodus-client.js");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.signup = function (userOptions) {
        return {};
    };
    AuthController.token = function (userOptions) {
        return {};
    };
    AuthController.verify = function () {
        return {};
    };
    AuthController.decode = function (token) {
        return {};
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

/***/ "../../../../../../@signnature/client/contracts/datacontroller.js":
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
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sat Dec 15 2018 18:07:03 GMT+0200 (Israel Standard Time)
var M = __webpack_require__("../../../../../../../methodus/methodus-client/dist/methodus-client.js");
var DataController = /** @class */ (function () {
    function DataController() {
    }
    DataController.get = function (id) {
        return {};
    };
    DataController.create = function (record) {
        return {};
    };
    DataController.update = function (id, record) {
        return {};
    };
    DataController.delete = function (id) {
        return {};
    };
    DataController.query = function (queryObject) {
        return {};
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

/***/ "../../../../../../@signnature/client/contracts/librarydatacontroller.js":
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
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sat Dec 15 2018 18:07:03 GMT+0200 (Israel Standard Time)
var M = __webpack_require__("../../../../../../../methodus/methodus-client/dist/methodus-client.js");
/*start custom*/
var datacontroller_1 = __webpack_require__("../../../../../../@signnature/client/contracts/datacontroller.js");
var LibraryDataController = /** @class */ (function (_super) {
    __extends(LibraryDataController, _super);
    function LibraryDataController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LibraryDataController.capture = function (files, actionGuid) {
        return {};
    };
    __decorate([
        M.Method(M.Verbs.Post, '/upload'),
        __param(0, M.Files()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String]),
        __metadata("design:returntype", Promise)
    ], LibraryDataController, "capture", null);
    LibraryDataController = __decorate([
        M.MethodConfig('LibraryDataController'),
        M.MethodConfigExtend(datacontroller_1.DataController)
    ], LibraryDataController);
    return LibraryDataController;
}(datacontroller_1.DataController));
exports.LibraryDataController = LibraryDataController;
//# sourceMappingURL=librarydatacontroller.js.map

/***/ }),

/***/ "../../../../../../@signnature/client/contracts/playlist.js":
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sat Dec 15 2018 18:07:03 GMT+0200 (Israel Standard Time)
var M = __webpack_require__("../../../../../../../methodus/methodus-client/dist/methodus-client.js");
/*start custom*/
var datacontroller_1 = __webpack_require__("../../../../../../@signnature/client/contracts/datacontroller.js");
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

/***/ "../../../../../../@signnature/client/contracts/screensdatacontroller.js":
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sat Dec 15 2018 18:07:03 GMT+0200 (Israel Standard Time)
var M = __webpack_require__("../../../../../../../methodus/methodus-client/dist/methodus-client.js");
/*start custom*/
var datacontroller_1 = __webpack_require__("../../../../../../@signnature/client/contracts/datacontroller.js");
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

/***/ "../../../../../../@signnature/client/contracts/slidesdatacontroller.js":
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sat Dec 15 2018 18:07:03 GMT+0200 (Israel Standard Time)
var M = __webpack_require__("../../../../../../../methodus/methodus-client/dist/methodus-client.js");
/*start custom*/
var datacontroller_1 = __webpack_require__("../../../../../../@signnature/client/contracts/datacontroller.js");
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

/***/ "../../../../../../@signnature/client/contracts/upload.js":
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
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sat Dec 15 2018 18:07:03 GMT+0200 (Israel Standard Time)
var M = __webpack_require__("../../../../../../../methodus/methodus-client/dist/methodus-client.js");
var Upload = /** @class */ (function () {
    function Upload() {
    }
    Upload.capture = function (files) {
        return {};
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

/***/ "../../../../../../@signnature/client/contracts/usercontroller.js":
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sat Dec 15 2018 18:07:03 GMT+0200 (Israel Standard Time)
var M = __webpack_require__("../../../../../../../methodus/methodus-client/dist/methodus-client.js");
/*start custom*/
var datacontroller_1 = __webpack_require__("../../../../../../@signnature/client/contracts/datacontroller.js");
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

/***/ "../../../../../../@signnature/client/includes/usermock.js":
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

/***/ "../../../../../../@signnature/client/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// TMLA methodus contract.
// Generated at: Sat Dec 15 2018 18:07:03 GMT+0200 (Israel Standard Time)
/**/
var usermock_1 = __webpack_require__("../../../../../../@signnature/client/includes/usermock.js");
exports.UserMock = usermock_1.UserMock;
var datacontroller_1 = __webpack_require__("../../../../../../@signnature/client/contracts/datacontroller.js");
var datacontroller_2 = __webpack_require__("../../../../../../@signnature/client/contracts/datacontroller.js");
exports.DataController = datacontroller_2.DataController;
var upload_1 = __webpack_require__("../../../../../../@signnature/client/contracts/upload.js");
var upload_2 = __webpack_require__("../../../../../../@signnature/client/contracts/upload.js");
exports.Upload = upload_2.Upload;
var usercontroller_1 = __webpack_require__("../../../../../../@signnature/client/contracts/usercontroller.js");
var usercontroller_2 = __webpack_require__("../../../../../../@signnature/client/contracts/usercontroller.js");
exports.UserController = usercontroller_2.UserController;
var authcontroller_1 = __webpack_require__("../../../../../../@signnature/client/contracts/authcontroller.js");
var authcontroller_2 = __webpack_require__("../../../../../../@signnature/client/contracts/authcontroller.js");
exports.AuthController = authcontroller_2.AuthController;
var screensdatacontroller_1 = __webpack_require__("../../../../../../@signnature/client/contracts/screensdatacontroller.js");
var screensdatacontroller_2 = __webpack_require__("../../../../../../@signnature/client/contracts/screensdatacontroller.js");
exports.ScreensDataController = screensdatacontroller_2.ScreensDataController;
var librarydatacontroller_1 = __webpack_require__("../../../../../../@signnature/client/contracts/librarydatacontroller.js");
var librarydatacontroller_2 = __webpack_require__("../../../../../../@signnature/client/contracts/librarydatacontroller.js");
exports.LibraryDataController = librarydatacontroller_2.LibraryDataController;
var playlist_1 = __webpack_require__("../../../../../../@signnature/client/contracts/playlist.js");
var playlist_2 = __webpack_require__("../../../../../../@signnature/client/contracts/playlist.js");
exports.Playlist = playlist_2.Playlist;
var slidesdatacontroller_1 = __webpack_require__("../../../../../../@signnature/client/contracts/slidesdatacontroller.js");
var slidesdatacontroller_2 = __webpack_require__("../../../../../../@signnature/client/contracts/slidesdatacontroller.js");
exports.SlidesDataController = slidesdatacontroller_2.SlidesDataController;
function getAll() {
    return ['DataController', 'Upload', 'UserController', 'AuthController', 'ScreensDataController', 'LibraryDataController', 'Playlist', 'SlidesDataController'];
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
        case 'Playlist':
            return playlist_1.Playlist;
        case 'SlidesDataController':
            return slidesdatacontroller_1.SlidesDataController;
    }
}
exports.get = get;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n<div>\r\n\r\n\r\n<!-- <nav class=\"navbar  navbar-light bg-light\">\r\n  <div class=\"pull-left navbar-header\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/discount.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> SignNature</a>\r\n\r\n  </div>\r\n  <div id=\"navbarSupportedContent\" class=\"pull-right navbar-header\">\r\n    <ul class=\"navbar-nav\">\r\n      <li>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/dashboard\">dashboard</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav> -->\r\n <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".white {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var user_context_service_1 = __webpack_require__("../../../../../src/app/user.context.service.ts");
var core_2 = __webpack_require__("../../../../@ngx-translate/core/fesm5/ngx-translate-core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(userService, translate) {
        // this.translate.setDefaultLang('he');
        this.userService = userService;
        this.translate = translate;
        this.title = 'SignNature';
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        //this.translate.use('he');
        this.userCheck = userService.getUser();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [user_context_service_1.UserService, core_2.TranslateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var animations_1 = __webpack_require__("../../../platform-browser/fesm5/animations.js");
// import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
var forms_1 = __webpack_require__("../../../forms/fesm5/forms.js");
var ngx_toastr_1 = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var ui_bootstrap_1 = __webpack_require__("../../../../@ng-dynamic-forms/ui-bootstrap/fesm5/ui-bootstrap.js");
var sortable_1 = __webpack_require__("../../../../ngx-bootstrap/sortable/index.js");
var modal_1 = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var tabs_1 = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var forms_2 = __webpack_require__("../../../forms/fesm5/forms.js");
var router_1 = __webpack_require__("../../../router/fesm5/router.js");
var angular2_loaders_css_1 = __webpack_require__("../../../../angular2-loaders-css/index.js");
var loader_component_1 = __webpack_require__("../../../../../src/app/loader/loader.component.ts");
var manage_component_1 = __webpack_require__("../../../../../src/app/manage/manage.component.ts");
var angular_jwt_1 = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var angularx_social_login_1 = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
var http_1 = __webpack_require__("../../../common/fesm5/http.js");
var auth_intercepter_1 = __webpack_require__("../../../../../src/app/auth/auth.intercepter.ts");
var config = new angularx_social_login_1.AuthServiceConfig([
// {
//   id: GoogleLoginProvider.PROVIDER_ID,
//   provider: new GoogleLoginProvider('Google-OAuth-Client-Id')
// },
// {
//   id: FacebookLoginProvider.PROVIDER_ID,
//   provider: new FacebookLoginProvider('Facebook-App-Id')
// },
// {
//   id: LinkedInLoginProvider.PROVIDER_ID,
//   provider: new LinkedInLoginProvider('LinkedIn-client-Id', false, 'en_US')
// }
]);
function provideConfig() {
    return config;
}
exports.provideConfig = provideConfig;
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var user_context_service_1 = __webpack_require__("../../../../../src/app/user.context.service.ts");
var user_info_component_1 = __webpack_require__("../../../../../src/app/user-info/user-info.component.ts");
var adapt_height_1 = __webpack_require__("../../../../../src/app/directives/adapt-height.ts");
var ngx_order_pipe_1 = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
var shared_module_1 = __webpack_require__("../../../../../src/app/shared.module.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var core_2 = __webpack_require__("../../../../@ngx-translate/core/fesm5/ngx-translate-core.js");
var http_loader_1 = __webpack_require__("../../../../@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
var http_2 = __webpack_require__("../../../common/fesm5/http.js");
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
var signup_component_1 = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var screens_module_1 = __webpack_require__("../../../../../src/app/screens/screens.module.ts");
var library_module_1 = __webpack_require__("../../../../../src/app/library/library.module.ts");
var timelines_component_1 = __webpack_require__("../../../../../src/app/timelines/timelines.component.ts");
var playlists_component_1 = __webpack_require__("../../../../../src/app/playlists/playlists.component.ts");
var schedules_component_1 = __webpack_require__("../../../../../src/app/schedules/schedules.component.ts");
var settings_component_1 = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
var language_bar_component_1 = __webpack_require__("../../../../../src/app/language-bar/language-bar.component.ts");
var dialog_component_1 = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
var language_service_1 = __webpack_require__("../../../../../src/app/language.service.ts");
var library_component_1 = __webpack_require__("../../../../../src/app/library/library.component.ts");
var appRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'signin', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    {
        path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_service_1.AuthGuardService], children: [
            {
                path: '',
                component: timelines_component_1.TimelinesComponent,
            },
            {
                path: 'screens',
                component: screens_module_1.ScreensComponent,
            }, {
                path: 'library', component: library_component_1.LibraryComponent,
                children: library_module_1.libraryRoutes.slice()
            },
            {
                path: 'playlists',
                component: playlists_component_1.PlaylistsComponent,
                canActivate: [auth_guard_service_1.AuthGuardService],
            },
            {
                path: 'schedules',
                component: schedules_component_1.SchedulesComponent,
            },
            {
                path: 'settings',
                component: settings_component_1.SettingsComponent,
            },
        ]
    },
    { path: 'user/details', component: user_info_component_1.UserInfoComponent },
];
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http);
}
exports.HttpLoaderFactory = HttpLoaderFactory;
function tokenGetter() {
    return localStorage.getItem('access_token');
}
exports.tokenGetter = tokenGetter;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                loader_component_1.LoaderComponent,
                manage_component_1.ManageComponent,
                login_component_1.LoginComponent,
                user_info_component_1.UserInfoComponent,
                adapt_height_1.AdaptHeightDirective,
                dashboard_component_1.DashboardComponent,
                signup_component_1.SignupComponent,
                timelines_component_1.TimelinesComponent,
                playlists_component_1.PlaylistsComponent,
                schedules_component_1.SchedulesComponent,
                settings_component_1.SettingsComponent,
                language_bar_component_1.LanguageBarComponent,
                dialog_component_1.DialogComponent,
            ],
            imports: [
                http_2.HttpClientModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_2.HttpClient]
                    }
                }),
                shared_module_1.SharedModule,
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true } // <-- debugging purposes only
                ),
                tabs_1.TabsModule.forRoot(),
                modal_1.ModalModule.forRoot(),
                sortable_1.SortableModule.forRoot(),
                ngx_toastr_1.ToastrModule.forRoot(),
                angular2_loaders_css_1.LoadersCssModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                ngx_order_pipe_1.OrderModule,
                ui_bootstrap_1.DynamicFormsBootstrapUIModule,
                animations_1.BrowserAnimationsModule,
                angularx_social_login_1.SocialLoginModule,
                screens_module_1.ScreensModule,
                library_module_1.LibraryModule,
                angular_jwt_1.JwtModule.forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            providers: [user_context_service_1.UserService, language_service_1.LanguageService, auth_guard_service_1.AuthGuardService, {
                    provide: angularx_social_login_1.AuthServiceConfig,
                    useFactory: provideConfig
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_intercepter_1.AuthInterceptor,
                    multi: true
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var router_1 = __webpack_require__("../../../router/fesm5/router.js");
var user_context_service_1 = __webpack_require__("../../../../../src/app/user.context.service.ts");
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
    AuthGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_context_service_1.UserService, router_1.Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;


/***/ }),

/***/ "../../../../../src/app/auth/auth.intercepter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var client_1 = __webpack_require__("../../../../../../../methodus/methodus-client/dist/methodus-client.js");
client_1.Rest.intercept(function (req) {
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
    AuthInterceptor = __decorate([
        core_1.Injectable()
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <!-- Sidebar  -->\n    <nav id=\"sidebar\" [class]=\"activeClass\">\n        <div class=\"sidebar-header\">\n            <h3>Sign-Nature</h3>\n            <strong>BS</strong>\n        </div>\n\n        <ul class=\"list-unstyled components\">\n            <li class=\"active\">\n                <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                    <i class=\"fas fa-home\"></i>\n                    {{\"NAVBAR.HOME\" | translate}}\n                </a>             \n            </li>\n              <li>\n                <a routerLink=\"screens\">\n                    <i class=\"fas fa-desktop\"></i>\n                      {{\"NAVBAR.SCREENS\" | translate}}\n                     \n                </a></li>\n            <li>\n             \n                <a href=\"#LibrarySubmenu\" (click)=\"toggleSubmenu()\"    routerLink=\"library\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                    <i class=\"fas fa-copy\"></i>\n                      {{\"NAVBAR.LIBRARY\" | translate}}\n                     \n                </a>\n                <ul class=\"{{subMenuState}} list-unstyled\" id=\"LibrarySubmenu\">\n                    <li>\n                        <a    routerLink=\"library/images\">  {{\"NAVBAR.IMAGES\" | translate}}</a>\n                    </li>\n                    <li>\n                        <a   routerLink=\"library/videos\">  {{\"NAVBAR.VIDEOS\" | translate}}</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"library/sounds\">  {{\"NAVBAR.SOUNDS\" | translate}}</a>\n                    </li>\n                     <li>\n                        <a routerLink=\"library/slides\">  {{\"NAVBAR.SLIDES\" | translate}}</a>\n                    </li>\n                </ul>\n\n            </li>\n              <li>\n                <a routerLink=\"playlists\">\n                    <i class=\"fas fa-step-forward\"></i>\n                      {{\"NAVBAR.PLAYLISTS\" | translate}}\n                     \n                </a></li>\n\n                  <li>\n                <a routerLink=\"schedules\">\n                    <i class=\"fas fa-calendar-alt\"></i>\n                      {{\"NAVBAR.SCHEDULES\" | translate}}\n                    \n                </a></li>\n\n                  <li>\n                <a routerLink=\"settings\">\n                    <i class=\"fas fa-cogs\"></i>\n                      {{\"NAVBAR.SETTINGS\" | translate}}\n                  \n                </a></li>\n\n        </ul>\n\n    </nav>\n\n    <!-- Page Content  -->\n    <div id=\"content\">\n\n \n    <nav class=\"navbar-fixed-top dashboard-nav\">\n        <div class=\"container no-margin\">\n            <ul class=\"mr-auto\">\n                <li class=\"nav-item\"><button type=\"button\" (click)=\"toggleSidebar()\" id=\"sidebarCollapse\" class=\"btn btn-sm btn-info\">\n                    <i class=\"fas fa-align-left\"></i>                  \n                </button></li>\n             \n                <li class=\"nav-item\">\n                 <app-language-bar></app-language-bar>\n                 </li>\n            </ul>\n        </div>\n    </nav>\n\n\n  \n \n\n \n\n<div id=\"scroller\">\n\n        \n         <router-outlet></router-outlet>\n         </div>\n    </div>\n     <footer class=\"footer closed\">\n     {{'DASHBOARD.FOOTER' | translate}}\n     </footer>\n</div>\n\n\n\n\n "

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
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
    DashboardComponent.prototype.toggleSidebar = function () {
        this.toggled = !this.toggled;
        if (this.toggled) {
            this.activeClass = 'active';
        }
        else {
            this.activeClass = '';
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../src/app/data.component.ts":
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
var DataComponent = /** @class */ (function () {
    function DataComponent(_ngZone) {
        this._ngZone = _ngZone;
    }
    DataComponent.prototype.closeSlider = function () {
        var _this = this;
        this._ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.displayModalNew = 'closing';
                return [2 /*return*/];
            });
        }); });
    };
    DataComponent.prototype.updateItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
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
    DataComponent.prototype.loadItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.DataController.query({})];
                    case 1:
                        _a.items = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataComponent.prototype.deleteItem = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm('delete')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.DataController.delete(item._id)];
                    case 1:
                        _a.sent();
                        this.loadItems();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DataComponent.prototype.createItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
        this._ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
exports.DataComponent = DataComponent;


/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<dialog class=\"my-dialog\" (close)=\"handleClose($event)\" #leDialog>\n  <h3>{{notification.title}}</h3>\n  <p>{{notification.message}}</p>\n  <div class=\"inline-components\">\n    <button class=\"btn\" (click)=\"okClicked()\">ok</button>\n    <button class=\"btn\" (click)=\"cancelClicked()\">cancel</button>\n  </div>\n</dialog>"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.close = new core_1.EventEmitter();
    }
    DialogComponent.prototype.ngOnInit = function () {
        this.nativeDialogElement = this.dialogElement.nativeElement;
        this.nativeDialogElement.showModal();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Notification)
    ], DialogComponent.prototype, "notification", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DialogComponent.prototype, "close", void 0);
    __decorate([
        core_1.ViewChild('leDialog'),
        __metadata("design:type", core_1.ElementRef)
    ], DialogComponent.prototype, "dialogElement", void 0);
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialog/dialog.component.css")]
        })
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;


/***/ }),

/***/ "../../../../../src/app/directives/adapt-height.ts":
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
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var AdaptHeightDirective = /** @class */ (function () {
    function AdaptHeightDirective(el) {
        this.el = el;
    }
    AdaptHeightDirective.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var view;
            return __generator(this, function (_a) {
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
    __decorate([
        core_1.Input('appAdaptHeight'),
        __metadata("design:type", Number)
    ], AdaptHeightDirective.prototype, "appAdaptHeight", void 0);
    AdaptHeightDirective = __decorate([
        core_1.Directive({
            selector: '[appAdaptHeight]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], AdaptHeightDirective);
    return AdaptHeightDirective;
}());
exports.AdaptHeightDirective = AdaptHeightDirective;


/***/ }),

/***/ "../../../../../src/app/language-bar/language-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/language-bar/language-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" [href]='sanitizer.bypassSecurityTrustResourceUrl(this.languageService.cssUrl)' />\n\n<select [(ngModel)]=\"selectedLanguage\" (change)=\"selectLanguage()\">\n  <option *ngFor=\"let c of languages\" [ngValue]=\"c\">{{c.name}}</option>\n</select>"

/***/ }),

/***/ "../../../../../src/app/language-bar/language-bar.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var core_2 = __webpack_require__("../../../../@ngx-translate/core/fesm5/ngx-translate-core.js");
var language_service_1 = __webpack_require__("../../../../../src/app/language.service.ts");
var LanguageBarComponent = /** @class */ (function () {
    function LanguageBarComponent(translate, languageService, sanitizer) {
        this.translate = translate;
        this.languageService = languageService;
        this.sanitizer = sanitizer;
    }
    LanguageBarComponent.prototype.ngOnInit = function () {
        this.languages = this.languageService.languages;
    };
    LanguageBarComponent.prototype.selectLanguage = function () {
        this.languageService.setLanguage(this.selectedLanguage);
    };
    LanguageBarComponent = __decorate([
        core_1.Component({
            selector: 'app-language-bar',
            template: __webpack_require__("../../../../../src/app/language-bar/language-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/language-bar/language-bar.component.css")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService, language_service_1.LanguageService, core_1.Sanitizer])
    ], LanguageBarComponent);
    return LanguageBarComponent;
}());
exports.LanguageBarComponent = LanguageBarComponent;


/***/ }),

/***/ "../../../../../src/app/language.service.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var core_2 = __webpack_require__("../../../../@ngx-translate/core/fesm5/ngx-translate-core.js");
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
    LanguageService.prototype.setLanguage = function (language) {
        this.language = language;
        localStorage.setItem('lng', JSON.stringify(language));
        this.translate.use(language.key);
        document.getElementsByTagName('body')[0].className = language.dir;
        this.cssUrl = "/assets/i18n/" + language.dir + ".css?k=" + Math.random();
    };
    LanguageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.TranslateService])
    ], LanguageService);
    return LanguageService;
}());
exports.LanguageService = LanguageService;


/***/ }),

/***/ "../../../../../src/app/library/contenteditable.directive.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var forms_1 = __webpack_require__("../../../forms/fesm5/forms.js");
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ContenteditableDirective.prototype, "propValueAccessor", void 0);
    __decorate([
        core_1.HostListener('input'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ContenteditableDirective.prototype, "callOnChange", null);
    __decorate([
        core_1.HostListener('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ContenteditableDirective.prototype, "callOnTouched", null);
    ContenteditableDirective = ContenteditableDirective_1 = __decorate([
        core_1.Directive({
            selector: '[contenteditable]',
            providers: [
                { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return ContenteditableDirective_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], ContenteditableDirective);
    return ContenteditableDirective;
}());
exports.ContenteditableDirective = ContenteditableDirective;


/***/ }),

/***/ "../../../../../src/app/library/element/element.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"element.position\"  ngDraggable [zIndex]=\"element.zIndex\" [handle]=\"ElementHandle\" [position]=\"element.position\"\n  class=\"drag-block element\" (edge)=\"checkEdge($event)\" [bounds]=\"myBounds\" [inBounds]=\"inBounds\" (started)=\"onStart($event)\"\n  (stopped)=\"onStop($event)\" (movingOffset)=\"onMoving($event)\" [preventDefaultEvent]=\"false\" (endOffset)=\"onMoveEnd($event)\"\n  (click)=\"focus($event)\" >   \n \n    <span\n      contenteditable=\"true\"   \n      [(ngModel)]=\"element.name\"\n      *ngIf=\"element.type === 'text'\"></span> \n    <img [src]=\"element.src\" *ngIf=\"element.type === 'image'\"     />    \n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/library/element/element.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".drag-block {\n  background-color: #ddd;\n  padding: 15px;\n  cursor: crosshair;\n  position: relative; }\n  .drag-block span {\n    cursor: text;\n    display: inline;\n    position: relative; }\n  .element {\n  min-width: 150px; }\n  .element .active {\n    border: 1px solid black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/element/element.component.ts":
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
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var selection_service_1 = __webpack_require__("../../../../../src/app/library/selection.service.ts");
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
    }
    ElementComponent.prototype.ngOnInit = function () {
    };
    ElementComponent.prototype.onStart = function (event) {
    };
    ElementComponent.prototype.focus = function (element) {
        this._selectionService.focus(element);
    };
    ElementComponent.prototype.checkEdge = function (event) {
        this.edge = event;
        console.log('edge:', event);
    };
    ElementComponent.prototype.onStop = function (event) {
    };
    ElementComponent.prototype.onMoving = function (event) {
        var _this = this;
        this._ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.position = event;
                return [2 /*return*/];
            });
        }); });
    };
    ElementComponent.prototype.onMoveEnd = function (event) {
        this.element.position = event;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ElementComponent.prototype, "element", void 0);
    ElementComponent = __decorate([
        core_1.Component({
            selector: 'app-element',
            template: __webpack_require__("../../../../../src/app/library/element/element.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library/element/element.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.NgZone, selection_service_1.SelectionService])
    ], ElementComponent);
    return ElementComponent;
}());
exports.ElementComponent = ElementComponent;


/***/ }),

/***/ "../../../../../src/app/library/finder/finder.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n\n<input type=\"text\" name=\"searchPhrase\" /><button class=\"btn btn-primary\"></button>\n\n\n <div class=\"container no-margin\"> \n    <div *ngFor=\"let item of items\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\" >\n    {{item.Name}}\n      <ul class=\"sqr-toolbar\">\n        <li>\n          <button class=\"btn btn-xs btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n        </li>\n        <li>\n          <button class=\"btn btn-xs btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n        </li>\n      </ul>\n    </div>\n</div>\n\n \n\n</div>"

/***/ }),

/***/ "../../../../../src/app/library/finder/finder.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/finder/finder.component.ts":
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var data_component_1 = __webpack_require__("../../../../../src/app/data.component.ts");
var client_1 = __webpack_require__("../../../../../../@signnature/client/index.js");
var FinderComponent = /** @class */ (function (_super) {
    __extends(FinderComponent, _super);
    function FinderComponent(_ngZone) {
        var _this = _super.call(this, _ngZone) || this;
        _this._ngZone = _ngZone;
        _this.DataController = client_1.LibraryDataController;
        return _this;
    }
    FinderComponent.prototype.ngOnInit = function () {
        this.loadItems();
    };
    FinderComponent = __decorate([
        core_1.Component({
            selector: 'app-finder',
            template: __webpack_require__("../../../../../src/app/library/finder/finder.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library/finder/finder.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], FinderComponent);
    return FinderComponent;
}(data_component_1.DataComponent));
exports.FinderComponent = FinderComponent;


/***/ }),

/***/ "../../../../../src/app/library/images/images.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container no-margin\">\n<div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n    <div *ngFor=\"let item of items\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\" >\n    {{item.Name}}\n      <ul class=\"sqr-toolbar\">\n        <li>\n          <button class=\"btn btn-xs btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n        </li>\n        <li>\n          <button class=\"btn btn-xs btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n        </li>\n      </ul>\n    </div>\n</div>\n<div class=\"slider-container {{displayModalNew}} shadow \">\n<dialog open={{displayModalNew}}>\n<a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\" ></i></a>\n<div class=\"scroller\">\n <form *ngIf=\"item\">\n  <div class=\"form-group\">\n    <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n    <input type=\"text\" name=\"libraryName\"  class=\"form-control\" id=\"screenName\"   [(ngModel)]=\"item.Name\">\n    <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"libraryFile\">{{ \"LIBRARY.RESOURCE\" | translate }}</label>\n<app-upload [item]=\"item\"></app-upload>\n</div>\n   \n</form>\n </div>\n  <button   *ngIf=\"item && item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"LIBRARY.UPDATE\" | translate }}</button>\n  <button   *ngIf=\"!item || !item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"LIBRARY.CREATE\" | translate }}</button>\n</dialog>\n</div>\n "

/***/ }),

/***/ "../../../../../src/app/library/images/images.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fancy-thumb {\n  background-position: 50%;\n  background-repeat: no-repeat !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/images/images.component.ts":
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var data_component_1 = __webpack_require__("../../../../../src/app/data.component.ts");
var client_1 = __webpack_require__("../../../../../../@signnature/client/index.js");
var ImagesComponent = /** @class */ (function (_super) {
    __extends(ImagesComponent, _super);
    function ImagesComponent(_ngZone) {
        var _this = _super.call(this, _ngZone) || this;
        _this._ngZone = _ngZone;
        _this.DataController = client_1.LibraryDataController;
        return _this;
        // this.DataModel = PlaylistModel;
    }
    ImagesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loadItems();
                return [2 /*return*/];
            });
        });
    };
    ImagesComponent = __decorate([
        core_1.Component({
            selector: 'app-images',
            template: __webpack_require__("../../../../../src/app/library/images/images.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library/images/images.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], ImagesComponent);
    return ImagesComponent;
}(data_component_1.DataComponent));
exports.ImagesComponent = ImagesComponent;


/***/ }),

/***/ "../../../../../src/app/library/inline-edit/inline-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold {\n  font-weight: 700;\n}\n\n.block {\n  display: inline-block;\n}\n\ndiv.inline-edit {\n  text-decoration: none;\n  border-bottom: #A8B9CE dashed 1px;\n  cursor: pointer;\n  text-align: left;\n  padding: .5em 0;\n  color: #444 !important;\n  width: auto;\n}\n\ninput {\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  padding: 4px 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/inline-edit/inline-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngIf=\"editing\">\n    <input #inlineEditControl [required]=\"required\" (blur)=\"onBlur($event)\" [name]=\"value\" [(ngModel)]=\"value\" [type]=\"type\" [placeholder]=\"label\" />\n  </div>\n  <div *ngIf=\"!editing\">\n    <label class=\"block bold\">{{label}}</label>\n    <div title=\"Click to edit\" (click)=\"edit(value)\" (focus)=\"edit(value);\" tabindex=\"0\" class=\"inline-edit\">{{value}}&nbsp;</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/library/inline-edit/inline-edit.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var forms_1 = __webpack_require__("../../../forms/fesm5/forms.js");
var INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return InlineEditComponent; }),
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
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.preValue = value;
        this.editing = true;
        // Focus on the input element just as the editing begins
        setTimeout(function (_) { return _this._renderer.invokeElementMethod(_this.inlineEditControl, 'focus', []); });
    };
    InlineEditComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild('inlineEditControl'),
        __metadata("design:type", core_1.ElementRef)
    ], InlineEditComponent.prototype, "inlineEditControl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InlineEditComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InlineEditComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InlineEditComponent.prototype, "required", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InlineEditComponent.prototype, "disabled", void 0);
    InlineEditComponent = __decorate([
        core_1.Component({
            selector: 'app-inline-edit',
            template: __webpack_require__("../../../../../src/app/library/inline-edit/inline-edit.component.html"),
            providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
            styles: [__webpack_require__("../../../../../src/app/library/inline-edit/inline-edit.component.css")]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
    ], InlineEditComponent);
    return InlineEditComponent;
}());
exports.InlineEditComponent = InlineEditComponent;


/***/ }),

/***/ "../../../../../src/app/library/library.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/library.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  library works!\n</p>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/library/library.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var LibraryComponent = /** @class */ (function () {
    function LibraryComponent() {
    }
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = __decorate([
        core_1.Component({
            selector: 'app-library',
            template: __webpack_require__("../../../../../src/app/library/library.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library/library.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LibraryComponent);
    return LibraryComponent;
}());
exports.LibraryComponent = LibraryComponent;


/***/ }),

/***/ "../../../../../src/app/library/library.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var common_1 = __webpack_require__("../../../common/fesm5/common.js");
var router_1 = __webpack_require__("../../../router/fesm5/router.js");
var shared_module_1 = __webpack_require__("../../../../../src/app/shared.module.ts");
var images_component_1 = __webpack_require__("../../../../../src/app/library/images/images.component.ts");
var videos_component_1 = __webpack_require__("../../../../../src/app/library/videos/videos.component.ts");
var sounds_component_1 = __webpack_require__("../../../../../src/app/library/sounds/sounds.component.ts");
var slides_component_1 = __webpack_require__("../../../../../src/app/library/slides/slides.component.ts");
var library_component_1 = __webpack_require__("../../../../../src/app/library/library.component.ts");
var forms_1 = __webpack_require__("../../../forms/fesm5/forms.js");
var upload_component_1 = __webpack_require__("../../../../../src/app/library/upload/upload.component.ts");
var element_component_1 = __webpack_require__("../../../../../src/app/library/element/element.component.ts");
var contenteditable_directive_1 = __webpack_require__("../../../../../src/app/library/contenteditable.directive.ts");
var slide_editor_component_1 = __webpack_require__("../../../../../src/app/library/slide-editor/slide-editor.component.ts");
var inline_edit_component_1 = __webpack_require__("../../../../../src/app/library/inline-edit/inline-edit.component.ts");
var finder_component_1 = __webpack_require__("../../../../../src/app/library/finder/finder.component.ts");
var selection_service_1 = __webpack_require__("../../../../../src/app/library/selection.service.ts");
__export(__webpack_require__("../../../../../src/app/library/main/main.component.ts"));
exports.libraryRoutes = [
    { path: 'images', component: images_component_1.ImagesComponent },
    { path: 'videos', component: videos_component_1.VideosComponent },
    { path: 'sounds', component: sounds_component_1.SoundsComponent },
    { path: 'slides', component: slides_component_1.SlidesComponent },
    { path: 'slides/:id', component: slide_editor_component_1.SlideEditorComponent },
];
var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                common_1.CommonModule,
                shared_module_1.SharedModule,
                forms_1.FormsModule
            ],
            exports: [library_component_1.LibraryComponent, router_1.RouterModule],
            entryComponents: [library_component_1.LibraryComponent],
            declarations: [inline_edit_component_1.InlineEditComponent, contenteditable_directive_1.ContenteditableDirective, images_component_1.ImagesComponent,
                slide_editor_component_1.SlideEditorComponent,
                videos_component_1.VideosComponent, sounds_component_1.SoundsComponent, slides_component_1.SlidesComponent,
                library_component_1.LibraryComponent, upload_component_1.UploadComponent, element_component_1.ElementComponent,
                slide_editor_component_1.SlideEditorComponent, finder_component_1.FinderComponent],
            providers: [selection_service_1.SelectionService]
        })
    ], LibraryModule);
    return LibraryModule;
}());
exports.LibraryModule = LibraryModule;


/***/ }),

/***/ "../../../../../src/app/library/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  main works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/library/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/main/main.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/library/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;


/***/ }),

/***/ "../../../../../src/app/library/selection.service.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var SelectionService = /** @class */ (function () {
    function SelectionService() {
        this.selection = [];
    }
    SelectionService.prototype.focus = function (element) {
        var all = document.querySelectorAll('.element');
        for (var i = 0; i < all.length; i++) {
            all[i].className = all[i].className.replace('selected', '');
        }
        element.currentTarget.className = element.currentTarget.className + ' selected';
    };
    SelectionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SelectionService);
    return SelectionService;
}());
exports.SelectionService = SelectionService;


/***/ }),

/***/ "../../../../../src/app/library/slide-editor/slide-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item\">\n  <div>\n    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n      <label class=\"btn btn-secondary\" (click)=\"setEditorMode('Designer');\">\n        <input type=\"radio\" name=\"options\" id=\"designer\" autocomplete=\"off\" checked> Designer\n      </label>\n      <label class=\"btn btn-secondary\" (click)=\"setEditorMode('Source');\">\n        <input type=\"radio\" name=\"options\" id=\"source\" autocomplete=\"off\"> Source\n      </label>\n    </div>\n  </div>\n  <div *ngIf=\"editorMode==='Designer'\">\n    <button class=\"btn btn-primary\" (click)=\"resetItem()\">{{ \"SLIDES.RESET\" | translate }}</button>\n    <button *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">\n      <div class=\"btn-spinner-host\"> <i class=\"btn-spinner\" *ngIf=\"updateItemRunning\"></i> {{ \"SLIDES.UPDATE\" | translate }} </div>\n    </button>\n    <button *ngIf=\"!item._id\" class=\"btn btn-primary btn-spinner-host\" (click)=\"createItem()\"><i class=\"btn-spinner\"></i>\n      {{ \"SLIDES.CREATE\" | translate }}</button>\n\n    <button (click)=\"newTextBlockElement()\" class=\"btn btn-md btn-default\"><i class=\"fas fa-font\"></i></button>\n    <button (click)=\"newImageBlockElement()\" class=\"btn btn-md btn-default\"><i class=\"far fa-image\"></i></button>\n    <button (click)=\"newVideoBlockElement()\" class=\"btn btn-md btn-default\"><i class=\"fas fa-video\"></i></button>\n  <button (click)=\"newPluginBlockElement()\" class=\"btn btn-md btn-default\"><i class=\"fas fa-plug\"></i></button>\n  <p\n    contenteditable=\"true\"\n   \n    [(ngModel)]=\"item.name\"\n    ></p>\n    \n\n    <div class=\"row slide-editor\">\n      <div class=\"col-md-9\">\n        <div class=\"slide-canvas drag-boundary\" class=\"drag-boundary\" [ngClass]=\"{ 'top-b': !edge?.top, 'bottom-b': !edge?.bottom, 'left-b': !edge?.left, 'right-b': !edge?.right }\"\n          #myBounds>\n          <app-element *ngFor=\"let el of item.elements\" (click)=\"designerFocus($event)\" [element]=\"el\"></app-element>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <ul class=\"list-group\">\n          <ol class=\"list-group-item\" *ngFor=\"let el of item.elements\">\n            <app-inline-edit [(ngModel)]=\"el.name\" label=\"Name\" [required]=\"true\" type=\"text\">\n            </app-inline-edit>\n          </ol>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"editorMode==='Source'\">\n    <pre> {{item.elements | json}}</pre>\n  </div>\n</div>\n<app-finder></app-finder>\n"

/***/ }),

/***/ "../../../../../src/app/library/slide-editor/slide-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slide-editor {\n  width: 100%;\n  border: 1px solid black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/slide-editor/slide-editor.component.ts":
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var router_1 = __webpack_require__("../../../router/fesm5/router.js");
var data_component_1 = __webpack_require__("../../../../../src/app/data.component.ts");
var client_1 = __webpack_require__("../../../../../../@signnature/client/index.js");
var SlideEditorComponent = /** @class */ (function (_super) {
    __extends(SlideEditorComponent, _super);
    function SlideEditorComponent(_ngZone, route) {
        var _this = _super.call(this, _ngZone) || this;
        _this._ngZone = _ngZone;
        _this.route = route;
        _this.editorMode = 'Designer';
        _this.DataController = client_1.SlidesDataController;
        return _this;
    }
    SlideEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.item) {
            this.route.params.subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, client_1.SlidesDataController.get(data.id)];
                        case 1:
                            _a.item = _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    SlideEditorComponent.prototype.resetItem = function () {
        this.item = { name: this.item.name, _id: this.item._id };
        this.item.elements = [];
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.item) {
                    this.item = [];
                }
                if (!this.item.elements) {
                    this.item.elements = [];
                }
                this.item.elements.push(block);
                return [2 /*return*/];
            });
        });
    };
    SlideEditorComponent.prototype.setEditorMode = function (editorMode) {
        this.editorMode = editorMode;
    };
    SlideEditorComponent.prototype.designerFocus = function (element) {
        document.querySelector('.element'); // .removeClass('active');
        // window.$('.element').removeClass('active');
        // window.$(element).addClass('active');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SlideEditorComponent.prototype, "item", void 0);
    SlideEditorComponent = __decorate([
        core_1.Component({
            selector: 'app-slide-editor',
            template: __webpack_require__("../../../../../src/app/library/slide-editor/slide-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library/slide-editor/slide-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.NgZone, router_1.ActivatedRoute])
    ], SlideEditorComponent);
    return SlideEditorComponent;
}(data_component_1.DataComponent));
exports.SlideEditorComponent = SlideEditorComponent;


/***/ }),

/***/ "../../../../../src/app/library/slides/slides.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin\">\n  <div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow\">\n    <i class=\"fas fa-desktop\"></i>\n    {{item.Name}}\n    <ul class=\"sqr-toolbar\">\n      <li>\n        <button class=\"btn btn-xs btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n      </li>\n      <li>\n        <button class=\"btn btn-xs btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n      </li>\n      <li>\n        <button class=\"btn btn-xs btn-primary\" [routerLink]=\"[item._id]\"> <i class=\"fas fa-edit\"></i> </button>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"slider-container-wide {{displayModalNew}} shadow\">\n  <dialog open= {{displayModalNew}}>\n    <a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\"></i></a>\n    <form *ngIf=\"item\">\n      <div class=\"form-group\">\n        <label for=\"screenName\">{{ \"SLIDES.NAME\" | translate }}:</label>\n        <input type=\"text\" name=\"slideName\" class=\"form-control\" id=\"screenName\" [(ngModel)]=\"item.Name\">\n        <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SLIDES.NAME_HELP\" | translate }}</small>\n      </div>\n      <button *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"SLIDES.UPDATE\" | translate }}</button>\n      <button *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"SLIDES.CREATE\" | translate }}</button>\n      <div class=\"form-group\">\n\n        <app-slide-editor></app-slide-editor>\n\n\n      </div>\n    </form>\n  </dialog>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/library/slides/slides.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slide-canvas {\n  position: absolute;\n  border: 2px solid black; }\n\n.h1 {\n  font-size: 24px;\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/slides/slides.component.ts":
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var data_component_1 = __webpack_require__("../../../../../src/app/data.component.ts");
var client_1 = __webpack_require__("../../../../../../@signnature/client/index.js");
var SlidesComponent = /** @class */ (function (_super) {
    __extends(SlidesComponent, _super);
    function SlidesComponent(_ngZone) {
        var _this = _super.call(this, _ngZone) || this;
        _this._ngZone = _ngZone;
        _this.DataController = client_1.SlidesDataController;
        return _this;
        // this.DataModel = PlaylistModel;
    }
    SlidesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loadItems();
                return [2 /*return*/];
            });
        });
    };
    SlidesComponent = __decorate([
        core_1.Component({
            selector: 'app-slides',
            template: __webpack_require__("../../../../../src/app/library/slides/slides.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library/slides/slides.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], SlidesComponent);
    return SlidesComponent;
}(data_component_1.DataComponent));
exports.SlidesComponent = SlidesComponent;


/***/ }),

/***/ "../../../../../src/app/library/sounds/sounds.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sounds works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/library/sounds/sounds.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/sounds/sounds.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var SoundsComponent = /** @class */ (function () {
    function SoundsComponent() {
    }
    SoundsComponent.prototype.ngOnInit = function () {
    };
    SoundsComponent = __decorate([
        core_1.Component({
            selector: 'app-sounds',
            template: __webpack_require__("../../../../../src/app/library/sounds/sounds.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library/sounds/sounds.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SoundsComponent);
    return SoundsComponent;
}());
exports.SoundsComponent = SoundsComponent;


/***/ }),

/***/ "../../../../../src/app/library/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"addFiles()\" class=\"btn btn-default\">\n    <file-drop headertext=\"Drop files here\" customstyle=\"dropzone\" (onFileDrop)=\"dropped($event)\">\n    </file-drop>\n    </div>\n <input type=\"file\" #file style=\"display: none\" (change)=\"selected()\" />  \n     <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.RESOURCE_DESCRIPTION\" | translate }}</small>\n<div *ngIf=\"item\"> \n  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n  <img [src]=\"item.thumb\" (load)=\"clearUpload()\" #imgIndicator id=\"imgIndicator\" /> \n  <div *ngIf=\"item.resource && !loading\" [ngStyle]=\"{'background-image': 'url(' + item.resource + ')'}\" class=\"fancy-image\"></div>\n </div>\n"

/***/ }),

/***/ "../../../../../src/app/library/upload/upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader,\n.loader:before,\n.loader:after {\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load7 1.8s infinite ease-in-out;\n  animation: load7 1.8s infinite ease-in-out; }\n\n.loader {\n  color: #ca2e2e;\n  font-size: 10px;\n  margin: 80px auto;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n.loader:before,\n.loader:after {\n  content: '';\n  position: absolute;\n  top: 0; }\n\n.loader:before {\n  left: -3.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.loader:after {\n  left: 3.5em; }\n\n@-webkit-keyframes load7 {\n  0%,\n  80%,\n  100% {\n    -webkit-box-shadow: 0 2.5em 0 -1.3em;\n            box-shadow: 0 2.5em 0 -1.3em; }\n  40% {\n    -webkit-box-shadow: 0 2.5em 0 0;\n            box-shadow: 0 2.5em 0 0; } }\n\n@keyframes load7 {\n  0%,\n  80%,\n  100% {\n    -webkit-box-shadow: 0 2.5em 0 -1.3em;\n            box-shadow: 0 2.5em 0 -1.3em; }\n  40% {\n    -webkit-box-shadow: 0 2.5em 0 0;\n            box-shadow: 0 2.5em 0 0; } }\n\n.dropzone {\n  height: 30px; }\n\n.dropzone .content {\n    height: 30px; }\n\n#imgIndicator {\n  visibility: hidden;\n  width: 1px;\n  height: 1px; }\n\n.fancy-image {\n  width: 100%;\n  height: 250px;\n  background-size: cover !important;\n  background-repeat: no-repeat !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/upload/upload.component.ts":
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
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var client_1 = __webpack_require__("../../../../../../@signnature/client/index.js");
var UploadComponent = /** @class */ (function () {
    function UploadComponent(_ngZone) {
        this._ngZone = _ngZone;
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
        this._ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.uploadComplete = true;
                this.loading = false;
                return [2 /*return*/];
            });
        }); });
    };
    UploadComponent.prototype.waitUpload = function (src) {
        var _this = this;
        this._ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.uploadComplete) {
                    this.loading = true;
                    if (this.imgIndicator.nativeElement && src) {
                        this.imgIndicator.nativeElement.src = src;
                    }
                    else {
                        this.imgIndicator.src = src;
                    }
                    setTimeout(function () { _this.waitUpload(src); }, 1000);
                }
                return [2 /*return*/];
            });
        }); });
    };
    UploadComponent.prototype.selected = function () {
        return __awaiter(this, void 0, void 0, function () {
            var files, _a, _b, _i, key, s3Path;
            return __generator(this, function (_c) {
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
                        return [4 /*yield*/, client_1.Upload.capture(files[key])];
                    case 2:
                        s3Path = _c.sent();
                        this.item.resource = s3Path.url;
                        this.item.thumb = s3Path.thumb;
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
                fileEntry.file(function (file) { return __awaiter(_this, void 0, void 0, function () {
                    var s3Path;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.uploadComplete = false;
                                return [4 /*yield*/, client_1.Upload.capture(file)];
                            case 1:
                                s3Path = _a.sent();
                                this.item.resource = s3Path.url;
                                this.item.thumb = s3Path.thumb;
                                this.waitUpload(s3Path.thumb);
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        }
    };
    __decorate([
        core_1.ViewChild('file'),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "file", void 0);
    __decorate([
        core_1.ViewChild('imgIndicator'),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "imgIndicator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "item", void 0);
    UploadComponent = __decorate([
        core_1.Component({
            selector: 'app-upload',
            template: __webpack_require__("../../../../../src/app/library/upload/upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library/upload/upload.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], UploadComponent);
    return UploadComponent;
}());
exports.UploadComponent = UploadComponent;


/***/ }),

/***/ "../../../../../src/app/library/videos/videos.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  videos works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/library/videos/videos.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/videos/videos.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var VideosComponent = /** @class */ (function () {
    function VideosComponent() {
    }
    VideosComponent.prototype.ngOnInit = function () {
    };
    VideosComponent = __decorate([
        core_1.Component({
            selector: 'app-videos',
            template: __webpack_require__("../../../../../src/app/library/videos/videos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library/videos/videos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VideosComponent);
    return VideosComponent;
}());
exports.VideosComponent = VideosComponent;


/***/ }),

/***/ "../../../../../src/app/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n<div id=\"loader_back\" [hidden]=\"!busy\">\r\n    <div class=\"lds-ellipsis\">\r\n        <div class=\"color1\"></div>\r\n        <div class=\"color2\"></div>\r\n        <div class=\"color3\"></div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], LoaderComponent.prototype, "busy", void 0);
    LoaderComponent = __decorate([
        core_1.Component({
            selector: 'app-loader',
            template: __webpack_require__("../../../../../src/app/loader/loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-menu a {cursor: pointer;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"limiter\">\n\t\t<div class=\"container-login100\">\n      \n\n\t\t\t<div class=\"wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30\">\n              <div><app-language-bar></app-language-bar></div>\n\t\t\t\t<form class=\"login100-form validate-form\">\n\t\t\t\t\t<span class=\"login100-form-title p-b-55\">\n\t\t\t\t\t\t{{\"LOGIN.TITLE\" | translate}}\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" [attr.data-validate]=\"'LOGIN.INSERT_USERNAME' | translate\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"text\" name=\"userName\" placeholder=\"Email\" [(ngModel)]=\"userName\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-envelope\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" >\n\t\t\t\t\t\t<input class=\"input100\" type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-lock\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"contact100-form-checkbox m-l-4\">\n\t\t\t\t\t\t<input class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n\t\t\t\t\t\t<label class=\"label-checkbox100\" for=\"ckb1\">\n\t\t\t\t\t\t\t{{\"LOGIN.REMEMBER_ME\" | translate}}\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"container-login100-form-btn p-t-25\">\n\t\t\t\t\t\t<button class=\"login100-form-btn\" (click)=\"tryLogin()\">\n\t\t\t\t\t\t\t\t{{\"LOGIN.LOGIN_BTN\" | translate}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n \n\t\t\t\t\t<div class=\"text-center w-full p-t-25\">\n\t\t\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t\tNot a member?\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<a class=\"txt1 bo1 hov1\" href=\"#\"  routerLink=\"/signup\">\n\t\t\t\t\t\t\tSign up now\t\t\t\t\t\t\t\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n\n\n\n\n\n<!-- Simple pop-up dialog box containing a form -->\n<dialog id=\"favDialog\">\n  <form method=\"dialog\">\n    <p><label>Favorite animal:\n      <select>\n        <option></option>\n        <option>Brine shrimp</option>\n        <option>Red panda</option>\n        <option>Spider monkey</option>\n      </select>\n    </label></p>\n    <menu>\n      <button>Cancel</button>\n      <button>Confirm</button>\n    </menu>\n  </form>\n</dialog>\n\n<menu>\n  <button id=\"updateDetails\">Update details</button>\n</menu>\n\n<div id=\"output\"></div>\n\n<script>\n(function() {\n  var updateButton = document.getElementById('updateDetails');\n  var favDialog = document.getElementById('favDialog');\n  var outputBox = document.getElementById(\"output\");\n\n  // “Update details” button opens the <dialog> modally\n  updateButton.addEventListener('click', function() {\n    favDialog.showModal();\n    output.innerHTML += \"<div>\" + favDialog.returnValue + \" button clicked!</div>\";\n  });\n})();\n</script>\n \n\n    <ng-template #share>\n        <div class=\"modal-body text-center\">\n\n            <p>Share your group.</p>\n            <pre>{{group.GroupId}}</pre>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <ng-template #join>\n        <div class=\"modal-body text-center\">\n            <p>Join a group.</p>\n            <div>\n                <label>Group code</label>\n                <input type=\"text\" class=\"form-control\" #group_code />\n            </div>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"JoinConfirm(group_code.value)\">Join</a>\n            <a type=\"button\" class=\"btn btn-default\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <div class=\"float-left dropdown\" *ngIf=\"userData && group\">\n        <a class=\"btn btn-secondary dropdown-toggle white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            {{group.Name}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"position: absolute\">\n            <a class=\"dropdown-item\" (click)=\"setGroup(item)\" *ngFor=\"let item of userData.groups\">{{item.Name}}</a>\n\n            <a class=\"dropdown-item\" (click)=\"JoinGroup(join)\">Join group</a>\n            <a class=\"dropdown-item\" (click)=\"ShareGroup(share)\">Share group</a>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
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
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var user_context_service_1 = __webpack_require__("../../../../../src/app/user.context.service.ts");
var client_1 = __webpack_require__("../../../../../../@signnature/client/index.js");
var router_1 = __webpack_require__("../../../router/fesm5/router.js");
var modal_1 = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var angularx_social_login_1 = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
var angularx_social_login_2 = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
var LoginComponent = /** @class */ (function () {
    /**
     *
     */
    function LoginComponent(ref, modalService, userService, authService, router, _ngZone) {
        var _this = this;
        this.ref = ref;
        this.modalService = modalService;
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this._ngZone = _ngZone;
        this.user = new core_1.EventEmitter();
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
        this.user.subscribe(function ($event) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
    }
    LoginComponent.prototype.tryLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client_1.AuthController.token({ Email: this.userName, Password: this.password })];
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
    LoginComponent.prototype.signInWithGoogle = function () {
        this.authService.signIn(angularx_social_login_2.GoogleLoginProvider.PROVIDER_ID);
    };
    LoginComponent.prototype.signInWithFB = function () {
        this.authService.signIn(angularx_social_login_2.FacebookLoginProvider.PROVIDER_ID);
    };
    LoginComponent.prototype.signInWithLinkedIn = function () {
        this.authService.signIn(angularx_social_login_2.LinkedInLoginProvider.PROVIDER_ID);
    };
    LoginComponent.prototype.signOut = function () {
        this.authService.signOut();
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
        return __awaiter(this, void 0, void 0, function () {
            var user_id;
            return __generator(this, function (_a) {
                user_id = this.userService.getUser().id;
                return [2 /*return*/];
            });
        });
    };
    LoginComponent.prototype.ShareGroup = function (template) {
        var _this = this;
        this._ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.modalRef = this.modalService.show(template, { class: 'modal-md' });
                return [2 /*return*/];
            });
        }); });
    };
    LoginComponent.prototype.onGoogleSignInSuccess = function (event) {
        // alert(parent.document.location.href);
        // let googleUser: gapi.auth2.GoogleUser = event.googleUser;
        // let id: string = googleUser.getId();
        // let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
        // this.user.emit({ id: profile.getId(), name: profile.getName() });
        // //this.user.name = profile.getName();
        // console.log('ID: ' +
        //   profile
        //     .getId()); // Do not send to your backend! Use an ID token instead.
        // console.log('Name: ' + profile.getName());
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "userData", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "user", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            modal_1.BsModalService,
            user_context_service_1.UserService, angularx_social_login_1.AuthService, router_1.Router, core_1.NgZone])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/manage/manage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".white {color: white;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage/manage.component.html":
/***/ (function(module, exports) {

module.exports = "<div [appAdaptHeight]=\"100\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Category</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Description</th>\r\n        <th scope=\"col\">Last run date</th>\r\n        <th scope=\"col\">\r\n          <a class=\"btn btn-primary btn-xs\" routerLink=\"/adscript/manage/create\">\r\n            + New Script</a>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let row of collectionData\">\r\n\r\n        <td>\r\n          {{row.Category}}\r\n\r\n        </td>\r\n        <td>\r\n          <a href=\"#\" [routerLink]=\"[row.ScriptId, 'details']\">{{row.Name}}</a>\r\n        </td>\r\n        <td>\r\n          {{row.Description}}\r\n\r\n        </td>\r\n        <td>\r\n          {{row.LastRunDate | date:'mediumDate'}}\r\n\r\n        </td>\r\n        <td>\r\n          <a class=\"btn btn-danger\" (click)=\"remove(row.ScriptId, template)\">\r\n            <i class=\"oi oi-trash white\"></i>\r\n          </a>\r\n          <a class=\"btn btn-info\" [routerLink]=\"[row.ScriptId, 'details']\">\r\n            <i class=\"oi oi-pencil white\"></i>\r\n          </a>\r\n   \r\n        </td>\r\n\r\n\r\n\r\n\r\n      </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<ng-template #template>\r\n  <div class=\"modal-body text-center\">\r\n    <p>The script will be deleted.</p>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\">Continue</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">Cancel</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<app-loader [busy]=\"busy\">\r\n  Loading\r\n</app-loader>\r\n\r\n<!-- \r\n \r\n<app-dynamic-table [columns]=\"tableColumns\" [tableData]=\"collectionData\"></app-dynamic-table> -->"

/***/ }),

/***/ "../../../../../src/app/manage/manage.component.ts":
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
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var user_context_service_1 = __webpack_require__("../../../../../src/app/user.context.service.ts");
var modal_1 = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var ManageComponent = /** @class */ (function () {
    function ManageComponent(_ngZone, modalService, userService) {
        this._ngZone = _ngZone;
        this.modalService = modalService;
        this.userService = userService;
        this.modalPromise = null;
        this.collectionData = [];
        this.user = userService.getUser();
    }
    ManageComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.userService.onGroupChange(function (group) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        this._ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.busy = true;
                                // this.collectionData = await Scripts.list(group.GroupId);
                                this.busy = false;
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); });
                if (this.collectionData.length === 0 && this.userService.getGroup()) {
                    this._ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.busy = true;
                            // this.collectionData = await Scripts.list(this.userService.getGroup().GroupId);
                            this.busy = false;
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        });
    };
    ManageComponent.prototype.openModal = function (template) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.modalPromise = resolve;
                        _this.modalRef = _this.modalService.show(template, { class: 'modal-md' });
                    })];
            });
        });
    };
    ManageComponent.prototype.confirm = function () {
        this.modalPromise(true);
        this.message = 'Confirmed!';
        this.modalRef.hide();
    };
    ManageComponent.prototype.decline = function () {
        this.modalPromise(false);
        this.message = 'Declined!';
        this.modalRef.hide();
    };
    ManageComponent.prototype.spreadsheet = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var group_id;
            return __generator(this, function (_a) {
                try {
                    group_id = this.userService.getGroup().GroupId;
                    // await Scripts.remove(group_id, id);
                }
                catch (error) {
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
    ManageComponent.prototype.remove = function (id, template) {
        return __awaiter(this, void 0, void 0, function () {
            var modalResult, group_id, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.openModal(template)];
                    case 1:
                        modalResult = _a.sent();
                        if (modalResult) {
                            if (this.userService.getGroup()) {
                                group_id = this.userService.getGroup().GroupId;
                                // await Scripts.remove(group_id, id);
                                // this.collectionData = await Scripts.list(group_id);
                            }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ManageComponent = __decorate([
        core_1.Component({
            selector: 'app-manage',
            template: __webpack_require__("../../../../../src/app/manage/manage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage/manage.component.css")]
        }),
        __metadata("design:paramtypes", [core_1.NgZone, modal_1.BsModalService, user_context_service_1.UserService])
    ], ManageComponent);
    return ManageComponent;
}());
exports.ManageComponent = ManageComponent;


/***/ }),

/***/ "../../../../../src/app/playlists/playlists.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container no-margin\">\n<div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n    <div *ngFor=\"let item of items\" class=\"sqr shadow\" >\n    <i class=\"fas fa-desktop\"></i>\n    {{item.Name}}    \n      <ul class=\"sqr-toolbar\">    \n        <li>\n          <button class=\"btn btn-xs btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n        </li>\n        <li>\n          <button class=\"btn btn-xs btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n        </li>\n      </ul>\n    </div>    \n</div>\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n<dialog open={{displayModalNew}}>\n<a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\" ></i></a>\n <form *ngIf=\"item\">\n  <div class=\"form-group\">\n    <label for=\"screenName\">{{ \"SCREENS.NAME\" | translate }}:</label>\n    <input type=\"text\" name=\"screenName\"  class=\"form-control\" id=\"screenName\"   [(ngModel)]=\"item.Name\">\n    <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SCREENS.NAME_HELP\" | translate }}</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">{{ \"SCREENS.TOKEN\" | translate }}</label>\n    <input type=\"text\" [(ngModel)]=\"item.Token\" name=\"txtToken\" class=\"form-control\" id=\"txtToken\" placeholder=\"{{'SCREENS.TOKEN' | translate}}\">\n  </div>  \n  <button   *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"SCREENS.UPDATE\" | translate }}</button>\n  <button   *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"SCREENS.CREATE\" | translate }}</button>\n</form>\n</dialog>\n</div>\n\n<!--\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">First</th>\n      <th scope=\"col\">Last</th>\n      <th scope=\"col\">Handle</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">3</th>\n      <td>Larry</td>\n      <td>the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>\n\n<table class=\"table\">\n  <thead class=\"thead-light\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">First</th>\n      <th scope=\"col\">Last</th>\n      <th scope=\"col\">Handle</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">3</th>\n      <td>Larry</td>\n      <td>the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>\n-->"

/***/ }),

/***/ "../../../../../src/app/playlists/playlists.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  width: 100%; }\n\n.container div {\n  margin-right: 8px;\n  margin-bottom: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); }\n\n.modal {\n  margin: auto;\n  width: 50%;\n  height: 50%; }\n\n.ltr .slider-container.active {\n  right: 0;\n  overflow-y: hidden;\n  max-width: 80%;\n  /* approximate max height */\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: .5s;\n          transition-duration: .5s;\n  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n          transition-timing-function: cubic-bezier(0, 1, 0.5, 1); }\n\n.ltr .slider-container {\n  max-width: 0;\n  padding: 15px;\n  height: 100%;\n  position: fixed;\n  top: 10px;\n  bottom: 40px;\n  right: -50%; }\n\n.rtl .slider-container.active {\n  left: 0;\n  overflow-y: hidden;\n  max-width: 80%;\n  /* approximate max height */\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: .5s;\n          transition-duration: .5s;\n  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n          transition-timing-function: cubic-bezier(0, 1, 0.5, 1); }\n\n.rtl .slider-container {\n  background-color: black;\n  max-width: 0;\n  padding: 15px;\n  height: 100%;\n  position: fixed;\n  top: 10px;\n  bottom: 40px;\n  left: -50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/playlists/playlists.component.ts":
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var client_1 = __webpack_require__("../../../../../../@signnature/client/index.js");
var data_component_1 = __webpack_require__("../../../../../src/app/data.component.ts");
var PlaylistsComponent = /** @class */ (function (_super) {
    __extends(PlaylistsComponent, _super);
    function PlaylistsComponent(_ngZone) {
        var _this = _super.call(this, _ngZone) || this;
        _this._ngZone = _ngZone;
        _this.DataController = client_1.Playlist;
        return _this;
        // this.DataModel = PlaylistModel;
    }
    PlaylistsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loadItems();
                return [2 /*return*/];
            });
        });
    };
    PlaylistsComponent = __decorate([
        core_1.Component({
            selector: 'app-playlists',
            template: __webpack_require__("../../../../../src/app/playlists/playlists.component.html"),
            styles: [__webpack_require__("../../../../../src/app/playlists/playlists.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], PlaylistsComponent);
    return PlaylistsComponent;
}(data_component_1.DataComponent));
exports.PlaylistsComponent = PlaylistsComponent;


/***/ }),

/***/ "../../../../../src/app/schedules/schedules.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/schedules/schedules.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  schedules works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/schedules/schedules.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var SchedulesComponent = /** @class */ (function () {
    function SchedulesComponent() {
    }
    SchedulesComponent.prototype.ngOnInit = function () {
    };
    SchedulesComponent = __decorate([
        core_1.Component({
            selector: 'app-schedules',
            template: __webpack_require__("../../../../../src/app/schedules/schedules.component.html"),
            styles: [__webpack_require__("../../../../../src/app/schedules/schedules.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SchedulesComponent);
    return SchedulesComponent;
}());
exports.SchedulesComponent = SchedulesComponent;


/***/ }),

/***/ "../../../../../src/app/screens/screens.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container no-margin\">\n<div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n    <div *ngFor=\"let item of items\" class=\"sqr shadow\" >\n    <i class=\"fas fa-desktop\"></i>\n    {{item.Name}}\n       \n    <ul class=\"sqr-toolbar\">\n        <li>\n    <button class=\"btn btn-xs btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n</li>\n    <li>\n    <button class=\"btn btn-xs btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n</li>\n</ul>\n    \n    </div>    \n</div>\n\n \n<div class=\"slider-container {{displayModalNew}} shadow\">\n<dialog open={{displayModalNew}}>\n<a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\" ></i></a>\n <form *ngIf=\"item\">\n  <div class=\"form-group\">\n    <label for=\"screenName\">{{ \"SCREENS.NAME\" | translate }}:</label>\n    <input type=\"text\" name=\"screenName\"  class=\"form-control\" id=\"screenName\"   [(ngModel)]=\"item.Name\">\n    <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SCREENS.NAME_HELP\" | translate }}</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">{{ \"SCREENS.TOKEN\" | translate }}</label>\n    <input type=\"text\" [(ngModel)]=\"item.Token\" name=\"txtToken\" class=\"form-control\" id=\"txtToken\" placeholder=\"{{'SCREENS.TOKEN' | translate}}\">\n  </div>\n  \n  <button   *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"SCREENS.UPDATE\" | translate }}</button>\n\n   <button   *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"SCREENS.CREATE\" | translate }}</button>\n\n</form>\n</dialog>\n</div>\n "

/***/ }),

/***/ "../../../../../src/app/screens/screens.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  width: 100%; }\n\n.container div {\n  margin-right: 8px;\n  margin-bottom: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); }\n\n.modal {\n  margin: auto;\n  width: 50%;\n  height: 50%; }\n\n.ltr .slider-container.active {\n  right: 0;\n  overflow-y: hidden;\n  max-width: 80%;\n  /* approximate max height */\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: .5s;\n          transition-duration: .5s;\n  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n          transition-timing-function: cubic-bezier(0, 1, 0.5, 1); }\n\n.ltr .slider-container {\n  max-width: 0;\n  padding: 15px;\n  height: 100%;\n  position: fixed;\n  top: 10px;\n  bottom: 40px;\n  right: -50%; }\n\n.rtl .slider-container.active {\n  left: 0;\n  overflow-y: hidden;\n  max-width: 80%;\n  /* approximate max height */\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: .5s;\n          transition-duration: .5s;\n  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n          transition-timing-function: cubic-bezier(0, 1, 0.5, 1); }\n\n.rtl .slider-container {\n  background-color: black;\n  max-width: 0;\n  padding: 15px;\n  height: 100%;\n  position: fixed;\n  top: 10px;\n  bottom: 40px;\n  left: -50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/screens.component.ts":
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var client_1 = __webpack_require__("../../../../../../@signnature/client/index.js");
var data_component_1 = __webpack_require__("../../../../../src/app/data.component.ts");
var ScreensComponent = /** @class */ (function (_super) {
    __extends(ScreensComponent, _super);
    function ScreensComponent(_ngZone) {
        var _this = _super.call(this, _ngZone) || this;
        _this._ngZone = _ngZone;
        _this.DataController = client_1.ScreensDataController;
        return _this;
    }
    ScreensComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loadItems();
                return [2 /*return*/];
            });
        });
    };
    ScreensComponent = __decorate([
        core_1.Component({
            selector: 'app-screens',
            template: __webpack_require__("../../../../../src/app/screens/screens.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/screens.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], ScreensComponent);
    return ScreensComponent;
}(data_component_1.DataComponent));
exports.ScreensComponent = ScreensComponent;


/***/ }),

/***/ "../../../../../src/app/screens/screens.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var common_1 = __webpack_require__("../../../common/fesm5/common.js");
var screens_component_1 = __webpack_require__("../../../../../src/app/screens/screens.component.ts");
var screens_component_2 = __webpack_require__("../../../../../src/app/screens/screens.component.ts");
exports.ScreensComponent = screens_component_2.ScreensComponent;
var shared_module_1 = __webpack_require__("../../../../../src/app/shared.module.ts");
var forms_1 = __webpack_require__("../../../forms/fesm5/forms.js");
var ScreensModule = /** @class */ (function () {
    function ScreensModule() {
    }
    ScreensModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [screens_component_1.ScreensComponent],
            entryComponents: [screens_component_1.ScreensComponent],
            exports: [screens_component_1.ScreensComponent]
        })
    ], ScreensModule);
    return ScreensModule;
}());
exports.ScreensModule = ScreensModule;


/***/ }),

/***/ "../../../../../src/app/services/language/dictionary.service.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var core_2 = __webpack_require__("../../../../@ngx-translate/core/fesm5/ngx-translate-core.js");
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
    DictionaryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.TranslateService])
    ], DictionaryService);
    return DictionaryService;
}());
exports.DictionaryService = DictionaryService;


/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;


/***/ }),

/***/ "../../../../../src/app/shared.module.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var core_2 = __webpack_require__("../../../../@ngx-translate/core/fesm5/ngx-translate-core.js");
var dictionary_service_1 = __webpack_require__("../../../../../src/app/services/language/dictionary.service.ts");
var ngx_file_drop_1 = __webpack_require__("../../../../ngx-file-drop/fesm5/ngx-file-drop.js");
var angular_draggable_droppable_1 = __webpack_require__("../../../../angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
var angular2_draggable_1 = __webpack_require__("../../../../angular2-draggable/fesm5/angular2-draggable.js");
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
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            imports: [core_2.TranslateModule.forChild(), ngx_file_drop_1.FileDropModule, angular_draggable_droppable_1.DragAndDropModule, angular2_draggable_1.AngularDraggableModule],
            declarations: [],
            providers: [core_2.TranslateService, dictionary_service_1.DictionaryService],
            exports: [core_2.TranslateModule, ngx_file_drop_1.FileDropModule, angular_draggable_droppable_1.DragAndDropModule, angular2_draggable_1.AngularDraggableModule],
        }),
        __metadata("design:paramtypes", [core_2.TranslateService])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<app-language-bar></app-language-bar>\n\t<div class=\"limiter\">\n\t\t<div class=\"container-login100\">\n\t\t\t<div class=\"wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30\">\n\t\t\t\t<form class=\"login100-form validate-form\">\n\t\t\t\t\t<span class=\"login100-form-title p-b-55\">\n\t\t\t\t\t\t{{\"SIGNUP.TITLE\" | translate}}\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" [attr.data-validate]=\"'SIGNUP.INSERT_USERNAME' | translate\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"text\" name=\"userName\" placeholder=\"Email\" [(ngModel)]=\"userName\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-envelope\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" >\n\t\t\t\t\t\t<input class=\"input100\" type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-lock\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\n\t                <div class=\"wrap-input100 validate-input m-b-16\" >\n\t\t\t\t\t\t<input class=\"input100\" type=\"password\" name=\"passwordRepeat\" placeholder=\"Repeat password\" [(ngModel)]=\"passwordRepeat\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-lock\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t \n\t\t\t\t\t\n\t\t\t\t\t<div class=\"container-login100-form-btn p-t-25\">\n\t\t\t\t\t\t<button class=\"login100-form-btn\" (click)=\"trySignup()\">\n\t\t\t\t\t\t\t\t{{\"SIGNUP.SIGNUP_BTN\" | translate}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n \n\n\t\t\t\t<div class=\"text-center w-full p-t-25\">\n\t\t\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t\tAlready a member?\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<a class=\"txt1 bo1 hov1\" href=\"#\"  routerLink=\"/signin\">\n\t\t\t\t\t\t\tSign in now\t\t\t\t\t\t\t\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n\n\n\n\n\n<!-- Simple pop-up dialog box containing a form -->\n<dialog id=\"favDialog\">\n  <form method=\"dialog\">\n    <p><label>Favorite animal:\n      <select>\n        <option></option>\n        <option>Brine shrimp</option>\n        <option>Red panda</option>\n        <option>Spider monkey</option>\n      </select>\n    </label></p>\n    <menu>\n      <button>Cancel</button>\n      <button>Confirm</button>\n    </menu>\n  </form>\n</dialog>\n\n<menu>\n  <button id=\"updateDetails\">Update details</button>\n</menu>\n\n<div id=\"output\"></div>\n\n<script>\n(function() {\n  var updateButton = document.getElementById('updateDetails');\n  var favDialog = document.getElementById('favDialog');\n  var outputBox = document.getElementById(\"output\");\n\n  // “Update details” button opens the <dialog> modally\n  updateButton.addEventListener('click', function() {\n    favDialog.showModal();\n    output.innerHTML += \"<div>\" + favDialog.returnValue + \" button clicked!</div>\";\n  });\n})();\n</script>\n \n\n    <ng-template #share>\n        <div class=\"modal-body text-center\">\n\n            <p>Share your group.</p>\n            <pre>{{group.GroupId}}</pre>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <ng-template #join>\n        <div class=\"modal-body text-center\">\n            <p>Join a group.</p>\n            <div>\n                <label>Group code</label>\n                <input type=\"text\" class=\"form-control\" #group_code />\n            </div>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"JoinConfirm(group_code.value)\">Join</a>\n            <a type=\"button\" class=\"btn btn-default\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <div class=\"float-left dropdown\" *ngIf=\"userData && group\">\n        <a class=\"btn btn-secondary dropdown-toggle white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            {{group.Name}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"position: absolute\">\n            <a class=\"dropdown-item\" (click)=\"setGroup(item)\" *ngFor=\"let item of userData.groups\">{{item.Name}}</a>\n\n            <a class=\"dropdown-item\" (click)=\"JoinGroup(join)\">Join group</a>\n            <a class=\"dropdown-item\" (click)=\"ShareGroup(share)\">Share group</a>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
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
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var client_1 = __webpack_require__("../../../../../../@signnature/client/index.js");
var user_context_service_1 = __webpack_require__("../../../../../src/app/user.context.service.ts");
var router_1 = __webpack_require__("../../../router/fesm5/router.js");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.trySignup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userRequest, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRequest = { Email: this.userName, Password: this.password };
                        return [4 /*yield*/, client_1.AuthController.signup(userRequest)];
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
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [user_context_service_1.UserService, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ "../../../../../src/app/timelines/timelines.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timelines/timelines.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  timelines works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/timelines/timelines.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var TimelinesComponent = /** @class */ (function () {
    function TimelinesComponent() {
    }
    TimelinesComponent.prototype.ngOnInit = function () {
    };
    TimelinesComponent = __decorate([
        core_1.Component({
            selector: 'app-timelines',
            template: __webpack_require__("../../../../../src/app/timelines/timelines.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timelines/timelines.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelinesComponent);
    return TimelinesComponent;
}());
exports.TimelinesComponent = TimelinesComponent;


/***/ }),

/***/ "../../../../../src/app/user-info/user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-info/user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form #infoForm=\"ngForm\"> -->\n\n<div class=\"container\">\n\n  <div class=\"form-group\" *ngIf=\"userData\">\n    <label for=\"NameInput\">User Name:</label>\n\n    {{userData.name}}\n\n  </div>\n  <div class=\"form-group\" *ngIf=\"userData\">\n    <label for=\"NameInput\">Group token:</label>\n    <textarea class=\"form-control\" name=\"DescriptionInput\" [(ngModel)]=\"userData.Description\" id=\"DescriptionInput\" aria-describedby=\"DescriptionHelp\"\n      placeholder=\"Enter a description\"></textarea>\n\n    <small id=\"emailHelp\" class=\"form-text text-muted\">it will help you understand what you're doing.</small>\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"userData\">\n    <label for=\"NameInput\">Groups:</label>\n    <table class=\"table table-sm\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Value</th>\n\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let variable of userData.groups\">\n          <td scope=\"row\">\n            {{variable.Name}} </td>\n          <td>\n            {{variable.GroupId}}\n          </td>\n\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n\n</div>\n\n<!-- \n</form> -->"

/***/ }),

/***/ "../../../../../src/app/user-info/user-info.component.ts":
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
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var user_context_service_1 = __webpack_require__("../../../../../src/app/user.context.service.ts");
var router_1 = __webpack_require__("../../../router/fesm5/router.js");
var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(_ngZone, userService, route, changeDetector) {
        var _this = this;
        this._ngZone = _ngZone;
        this.userService = userService;
        this.route = route;
        this.changeDetector = changeDetector;
        this.userData = false;
        this.route.params.subscribe(function (data) {
            _this._ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
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
    UserInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-user-info',
            template: __webpack_require__("../../../../../src/app/user-info/user-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-info/user-info.component.css")],
            providers: [user_context_service_1.UserService]
        }),
        __metadata("design:paramtypes", [core_1.NgZone,
            user_context_service_1.UserService,
            router_1.ActivatedRoute, core_1.ChangeDetectorRef])
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;


/***/ }),

/***/ "../../../../../src/app/user.context.service.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var angular_jwt_1 = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
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
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserService.prototype, "group", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserService.prototype, "user", void 0);
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular_jwt_1.JwtHelperService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __webpack_require__("../../../../../../../methodus/methodus-client/dist/methodus-client.js");
window.METHODUS_CONFIG = { methodType: client_1.MethodType.Http };
var core_1 = __webpack_require__("../../../core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map