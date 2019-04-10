(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/common/change/change.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/change/change.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n"

/***/ }),

/***/ "./src/app/common/change/change.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/change/change.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jaGFuZ2UvY2hhbmdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/change/change.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/change/change.component.ts ***!
  \***************************************************/
/*! exports provided: ChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeComponent", function() { return ChangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");
/* harmony import */ var fast_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-stringify */ "./node_modules/fast-stringify/es/index.js");




var ChangeComponent = /** @class */ (function () {
    function ChangeComponent(dirtyService) {
        var _this = this;
        this.dirtyService = dirtyService;
        this.dirtyDetected = false;
        this.orgItem = {};
        this.dirtyService.detect.subscribe(function (data) {
            _this.detectChanges();
        });
    }
    ChangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dirtyService.dirty.subscribe(function (state) {
            _this.dirtyDetected = state;
            if (!state) {
                _this.orgItem = JSON.parse(Object(fast_stringify__WEBPACK_IMPORTED_MODULE_3__["default"])(_this.item));
            }
        });
        this.dirtyService.saving.subscribe(function (state) {
        });
        // setInterval(this.detectChanges.bind(this), 10 * 1000);
        // if (changes.item && !changes.item.isFirstChange()) {
        //   this.orgItem = JSON.parse(stringify(this.item));
        //   this.dirtyService.setDirty();
        // }
    };
    ChangeComponent.prototype.ngOnDestroy = function () {
        // try {
        //   this.dirtyService.dirty.unsubscribe();
        //   this.dirtyService.saving.unsubscribe();
        // } catch (ex) {
        //   console.error(ex);
        // }
    };
    ChangeComponent.prototype.canDeactivate = function () {
        return !this.dirtyDetected;
    };
    ChangeComponent.prototype.detectChanges = function () {
        if (!this.dirtyDetected) {
            var org = Object(fast_stringify__WEBPACK_IMPORTED_MODULE_3__["default"])(this.orgItem);
            var current = Object(fast_stringify__WEBPACK_IMPORTED_MODULE_3__["default"])(this.item);
            if (org !== current) {
                this.dirtyDetected = true;
                this.dirtyService.setDirty();
            }
        }
    };
    ChangeComponent.prototype.ngOnChanges = function (changes) {
        if (this.item) {
            this.orgItem = JSON.parse(Object(fast_stringify__WEBPACK_IMPORTED_MODULE_3__["default"])(this.item));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChangeComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Boolean)
    ], ChangeComponent.prototype, "canDeactivate", null);
    ChangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changes',
            template: __webpack_require__(/*! ./change.component.html */ "./src/app/common/change/change.component.html"),
            styles: [__webpack_require__(/*! ./change.component.scss */ "./src/app/common/change/change.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dirty_service__WEBPACK_IMPORTED_MODULE_2__["DirtyService"]])
    ], ChangeComponent);
    return ChangeComponent;
}());



/***/ }),

/***/ "./src/app/common/language-bar/language-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/common/language-bar/language-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" [href]='cleanCssUrl' />\r\n<div class=\"input-group mb-3\">\r\n  <div class=\"input-group-prepend\">\r\n    <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"icon-language\"></i></span>\r\n  </div>\r\n  <select [(ngModel)]=\"selectedLanguage\" class=\"form-control\" (change)=\"selectLanguage()\" [compareWith]=\"compareFn\">\r\n    <option *ngFor=\"let c of languages\" [ngValue]=\"c\">{{c.name}}</option>\r\n  </select>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/language-bar/language-bar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/language-bar/language-bar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  padding: 1px;\n  height: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xhbmd1YWdlLWJhci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxcbGFuZ3VhZ2UtYmFyXFxsYW5ndWFnZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2xhbmd1YWdlLWJhci9sYW5ndWFnZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9se1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59Il19 */"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var LanguageBarComponent = /** @class */ (function () {
    function LanguageBarComponent(translate, languageService, sanitizer) {
        this.translate = translate;
        this.languageService = languageService;
        this.sanitizer = sanitizer;
    }
    LanguageBarComponent.prototype.ngOnInit = function () {
        this.languages = this.languageService.languages;
        this.selectedLanguage = this.languageService.getLanguage();
        this.cleanCssUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.languageService.cssUrl);
    };
    LanguageBarComponent.prototype.selectLanguage = function () {
        this.languageService.setLanguage(this.selectedLanguage);
        this.cleanCssUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.languageService.cssUrl);
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
            styles: [__webpack_require__(/*! ./language-bar.component.scss */ "./src/app/common/language-bar/language-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], LanguageBarComponent);
    return LanguageBarComponent;
}());



/***/ }),

/***/ "./src/app/common/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/loader/loader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"busy\"></div>\r\n"

/***/ }),

/***/ "./src/app/common/loader/loader.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/loader/loader.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\n  height: 4px;\n  width: 100%;\n  overflow: hidden;\n  background-color: lightskyblue; }\n  .loader:before {\n    display: block;\n    position: absolute;\n    content: \"\";\n    left: -200px;\n    width: 200px;\n    height: 4px;\n    background-color: #2980b9;\n    -webkit-animation: loading 2s linear infinite;\n            animation: loading 2s linear infinite; }\n  @-webkit-keyframes loading {\n  from {\n    left: -200px;\n    width: 30%; }\n  50% {\n    width: 30%; }\n  70% {\n    width: 70%; }\n  80% {\n    left: 50%; }\n  95% {\n    left: 120%; }\n  to {\n    left: 100%; } }\n  @keyframes loading {\n  from {\n    left: -200px;\n    width: 30%; }\n  50% {\n    width: 30%; }\n  70% {\n    width: 70%; }\n  80% {\n    left: 50%; }\n  95% {\n    left: 120%; }\n  to {\n    left: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYWRlci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxcbG9hZGVyXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiw4QkFQOEIsRUFBQTtFQUdoQztJQU1JLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLHlCQWQ4QjtJQWU5Qiw2Q0FBcUM7WUFBckMscUNBQXFDLEVBQUE7RUFHekM7RUFDRTtJQUNFLFlBQVk7SUFDWixVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxTQUFTLEVBQUE7RUFFWDtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7RUFsQmQ7RUFDRTtJQUNFLFlBQVk7SUFDWixVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxTQUFTLEVBQUE7RUFFWDtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29sb3JzXHJcbiRjb2xvcl9hbHRvX2FwcHJveDogbGlnaHRza3libHVlO1xyXG4kY29sb3JfYm9zdG9uX2JsdWVfYXBwcm94OiAjMjk4MGI5O1xyXG5cclxuLmxvYWRlciB7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgd2lkdGg6IDEwMCU7ICBcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9hbHRvX2FwcHJveDtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBsZWZ0OiAtMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9ib3N0b25fYmx1ZV9hcHByb3g7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmcgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xyXG4gIGZyb20ge1xyXG4gICAgbGVmdDogLTIwMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gIDcwJSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxuICA5NSUge1xyXG4gICAgbGVmdDogMTIwJTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgbGVmdDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loader.service */ "./src/app/services/loader.service.ts");



var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(_ngZone, loaderService) {
        this._ngZone = _ngZone;
        this.loaderService = loaderService;
        this.busy = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.name) {
            this.subscription = this.loaderService.getSubscription(this.name).subscribe(function (value) {
                _this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        console.log('busy', value);
                        this.busy = value;
                        return [2 /*return*/];
                    });
                }); });
            });
            this.loaderService.sync();
        }
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LoaderComponent.prototype, "name", void 0);
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/common/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/common/loader/loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/common/lobby.item/lobby.item.component.html":
/*!*************************************************************!*\
  !*** ./src/app/common/lobby.item/lobby.item.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngTemplateOutlet]=\"template || defaultTemplate\" [ngTemplateOutletContext]=\"{item: item}\">\n</ng-template>\n\n<ng-template #defaultTemplate let-item=\"item\">\n  <div class=\"m10\">\n    <span class=\"fancy-thumb-label\">{{item.Name}}</span>\n  </div>\n</ng-template>\n\n\n<ng-template #imageTemplate let-item=\"item\">\n  <img class=\"fancy-thumb\" [src]=\"item.resource\" [width]=\"width\" [height]=\"height\" alt=\"{{item.Name}}\" />\n  <span class=\"fancy-thumb-label\"><em class=\"icon-image\"></em> {{item.Name}}</span>\n</ng-template>\n\n<ng-template #videoTemplate let-item=\"item\">\n  <span class=\"fancy-thumb-label\"><em class=\"icon-play\"></em> {{item.Name}}</span>\n  <app-media-preview [item]=\"item\"></app-media-preview>\n</ng-template>\n\n<ng-template #urlTemplate let-item=\"item\">\n  <span class=\"fancy-thumb-label\"><em class=\"icon-chain\"></em> {{item.Name}}</span>\n  <app-media-preview [item]=\"item\"></app-media-preview>\n</ng-template>\n\n\n<ng-template #playlistTemplate let-item=\"item\">\n  <div class=\"m10\">\n    <span class=\"label\">{{item.Name}}</span>\n    <span class=\"label\">({{item.list.length}})</span>\n    <span class=\"label\">{{item.Date | date}}</span>\n  </div>\n</ng-template>\n\n\n<ng-template #slideTemplate let-item=\"item\">\n  <div class=\"canvas-bg\">\n    <app-canvas [item]=\"item\" [width]=\"width\" [height]=\"height\" [scale]=\"0.25\"></app-canvas>\n    <span class=\"fancy-thumb-label\">{{item.Name}}</span>\n  </div>\n</ng-template>\n\n \n\n"

/***/ }),

/***/ "./src/app/common/lobby.item/lobby.item.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/common/lobby.item/lobby.item.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  margin-right: 5px;\n  margin-left: 5px; }\n\n.sqr-btn {\n  padding: 15px;\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr {\n  opacity: 0.9;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) !important; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 35;\n  background: #fff; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn._meta_active, .sqr._meta_active {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(69, 59, 59, 0.2);\n  border-radius: 35;\n  background: #fff; }\n\n.sqr-btn._meta_active .sqr-toolbar, .sqr._meta_active .sqr-toolbar {\n    visibility: visible; }\n\n.fancy-thumb {\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYmJ5Lml0ZW0vQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxjb21tb25cXGxvYmJ5Lml0ZW1cXGxvYmJ5Lml0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFHbkI7RUFDSSxhQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxZQUFZO0VBQ1osa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUExQixrREFBMEI7RUFDMUIscURBQW9ELEVBQUE7O0FBR3hEO0VBQ0ksVUFBVTtFQUVWLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsb0NBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFOcEI7SUFVUSxtQkFBbUIsRUFBQTs7QUFLM0I7RUFDSSxVQUFVO0VBRVYsc0NBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix1Q0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQU5wQjtJQVVRLG1CQUFtQixFQUFBOztBQU0zQjtFQUVJLFVBQVM7RUFDVCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9sb2JieS5pdGVtL2xvYmJ5Lml0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG59XHJcblxyXG4uc3FyLWJ0bntcclxuICAgIHBhZGRpbmc6MTVweDtcclxuICAgIGZvbnQtc2l6ZTogODRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnNxcntcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpIWltcG9ydGFudDtcclxuIFxyXG59XHJcbi5zcXItYnRuOmhvdmVyLC5zcXI6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIFxyXG4gIFxyXG4gICAgLnNxci10b29sYmFye1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uc3FyLWJ0bi5fbWV0YV9hY3RpdmUsLnNxci5fbWV0YV9hY3RpdmV7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoNjksIDU5LCA1OSwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIFxyXG4gXHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiBcclxuLmZhbmN5LXRodW1iXHJcbnsgICBcclxuICAgIHotaW5kZXg6MTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgXHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/common/lobby.item/lobby.item.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/lobby.item/lobby.item.component.ts ***!
  \***********************************************************/
/*! exports provided: LobbyItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyItemComponent", function() { return LobbyItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LobbyItemComponent = /** @class */ (function () {
    function LobbyItemComponent() {
    }
    LobbyItemComponent.prototype.ngOnInit = function () {
        if (!this.width) {
            this.width = 230;
            this.height = 150;
        }
    };
    LobbyItemComponent.prototype.ngOnChanges = function (changes) {
        if (this.item) {
            if (!this.item.template) {
                if (this.item.type === 'slide' || this.item.elements) {
                    this.template = this.slideTemplate;
                }
                if (this.item.type === 'image' || this.item.MediaType === 'image') {
                    this.template = this.imageTemplate;
                }
                if (this.item.MediaType === 'video') {
                    this.template = this.videoTemplate;
                }
                if (this.item.MediaType === 'url') {
                    this.template = this.urlTemplate;
                }
            }
            else {
                this.template = this.item.template;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('playlistTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], LobbyItemComponent.prototype, "playlistTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], LobbyItemComponent.prototype, "imageTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], LobbyItemComponent.prototype, "slideTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('urlTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], LobbyItemComponent.prototype, "urlTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], LobbyItemComponent.prototype, "videoTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], LobbyItemComponent.prototype, "template", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LobbyItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LobbyItemComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LobbyItemComponent.prototype, "iconClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LobbyItemComponent.prototype, "itemClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LobbyItemComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LobbyItemComponent.prototype, "height", void 0);
    LobbyItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lobby-item',
            template: __webpack_require__(/*! ./lobby.item.component.html */ "./src/app/common/lobby.item/lobby.item.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
            styles: [__webpack_require__(/*! ./lobby.item.component.scss */ "./src/app/common/lobby.item/lobby.item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LobbyItemComponent);
    return LobbyItemComponent;
}());



/***/ }),

/***/ "./src/app/common/lobby/lobby.component.html":
/*!***************************************************!*\
  !*** ./src/app/common/lobby/lobby.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #defaultToolbar let-item=\"item\">\r\n  <ul class=\"sqr-toolbar btn-group\" role=\"group\">\r\n    <li>\r\n      <button class=\"btn btn-secondary btn-md btn-primary left\" (click)=\"editItemHandler(item);\"> <em\r\n          class=\"icon-edit\"></em>\r\n      </button>\r\n    </li>\r\n    <li class=\"date-label\">{{item.Date | date}}</li>\r\n    <li>\r\n      <button class=\"btn btn-secondary btn-md btn-danger right\" (click)=\"deleteItemHandler(item);\"> <em\r\n          class=\"icon-trash-o\"></em>\r\n      </button>\r\n    </li>\r\n\r\n  </ul>\r\n</ng-template>\r\n\r\n\r\n\r\n<div class=\"lobby\" *ngIf=\"mode==='media'\">\r\n  <div *ngIf=\"!noNew\" class=\"sqr shadow sqr-btn {{itemClass}}\" (click)=\"newItemHandler()\" (next)=\"newItemHandler()\"\r\n    [joyrideStep]=\"'lobby-add'\" [stepContent]=\"lobbyContent\"><em class=\"icon-plus-alt\"></em>\r\n  </div>\r\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{item._meta_active}}\" (click)=\"selectItemHandler(item)\">\r\n    <app-lobby-item [item]=\"item\" [model]=\"model\" [width]=\"itemWidth\" [height]=\"itemHeight\"></app-lobby-item>\r\n    <ng-template [ngTemplateOutlet]=\"toolbar || defaultToolbar\" [ngTemplateOutletContext]=\"{item: item}\">\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"lobby\" *ngIf=\"mode==='media-finder'\">\r\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{itemClass}} {{item._meta_active}}\">\r\n    <app-lobby-item [item]=\"item\" [model]=\"model\" [width]=\"itemWidth\" [height]=\"itemHeight\"></app-lobby-item>\r\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\r\n      <li>\r\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"selectItemHandler(item);\"> <em\r\n            class=\"icon-plus-square\"></em>\r\n        </button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"lobby\" *ngIf=\"mode==='object-finder'\">\r\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{itemClass}}\">\r\n    <app-lobby-item [item]=\"item\" [model]=\"model\" [width]=\"itemWidth\" [height]=\"itemHeight\"></app-lobby-item>\r\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\r\n      <li>\r\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"selectItemHandler(item);\"> <em\r\n            class=\"icon-plus-square\"></em>\r\n        </button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"lobby\" *ngIf=\"mode==='object'\">\r\n  <div *ngIf=\"!noNew\" class=\"sqr shadow sqr-btn {{itemClass}}\" \r\n  [joyrideStep]=\"'lobby-add'\" (next)=\"nextTourStep()\" [stepContent]=\"lobbyContent\"\r\n    (next)=\"newItemHandler()\"\r\n     (click)=\"newItemHandler()\"><em class=\"icon-plus-alt\"></em>\r\n  </div>\r\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{item._meta_active}}\" (click)=\"selectItemHandler(item)\">\r\n    <app-lobby-item [item]=\"item\" [model]=\"model\" [width]=\"itemWidth\" [height]=\"itemHeight\"></app-lobby-item>\r\n\r\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\r\n      <li>\r\n        <button class=\"btn btn-secondary btn-md btn-primary left\" (click)=\"editItemHandler(item);\"> <em\r\n            class=\"icon-edit\"></em>\r\n        </button>\r\n      </li>\r\n      <li class=\"date-label\">{{item.Date | date}}</li>\r\n      <li>\r\n        <button class=\"btn btn-secondary btn-md btn-danger right\" (click)=\"deleteItemHandler(item);\"> <em\r\n            class=\"icon-trash-o\"></em>\r\n        </button>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<ng-template #lobbyContent>\r\n    <h5> {{'TOUR.ADD.TITLE' | translate}}</h5>\r\n    <p>\r\n        {{'TOUR.ADD.CONTENT' | translate}}\r\n    </p>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/common/lobby/lobby.component.scss":
/*!***************************************************!*\
  !*** ./src/app/common/lobby/lobby.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  margin-right: 5px;\n  margin-left: 5px; }\n\n.sqr-btn {\n  padding: 15px;\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr {\n  opacity: 0.9;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) !important; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 35;\n  background: #fff;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2) !important; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn._meta_active, .sqr._meta_active {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(69, 59, 59, 0.2);\n  border-radius: 35;\n  background: #fff;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2) !important; }\n\n.sqr-btn._meta_active .sqr-toolbar, .sqr._meta_active .sqr-toolbar {\n    visibility: visible; }\n\n.fancy-thumb {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n\n.date-label {\n  float: right;\n  font-style: italic;\n  font-size: 11px; }\n\n:host-context(.rtl) .right {\n  float: right; }\n\n:host-context(.rtl) .left {\n  float: left; }\n\n:host-context(.ltr) .right {\n  float: left; }\n\n:host-context(.ltr) .left {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYmJ5L0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcY29tbW9uXFxsb2JieVxcbG9iYnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFHbkI7RUFDSSxhQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxZQUFZO0VBQ1osa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUExQixrREFBMEI7RUFDMUIscURBQW9ELEVBQUE7O0FBR3hEO0VBQ0ksVUFBVTtFQUVWLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsb0NBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFHaEIscURBQW9ELEVBQUE7O0FBVHhEO0lBWVEsbUJBQW1CLEVBQUE7O0FBSzNCO0VBQ0ksVUFBVTtFQUVWLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsdUNBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFHaEIscURBQW9ELEVBQUE7O0FBVHhEO0lBYVEsbUJBQW1CLEVBQUE7O0FBSzNCO0VBR0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU8sRUFBQTs7QUFHWDtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUdJLFlBQVksRUFBQTs7QUFIaEI7RUFRRyxXQUFXLEVBQUE7O0FBS2Q7RUFHSSxXQUFXLEVBQUE7O0FBSGY7RUFRSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbG9iYnkvbG9iYnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG59XHJcblxyXG4uc3FyLWJ0bntcclxuICAgIHBhZGRpbmc6MTVweDtcclxuICAgIGZvbnQtc2l6ZTogODRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnNxcntcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpIWltcG9ydGFudDtcclxuIFxyXG59XHJcbi5zcXItYnRuOmhvdmVyLC5zcXI6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMikhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5zcXItYnRuLl9tZXRhX2FjdGl2ZSwuc3FyLl9tZXRhX2FjdGl2ZXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSg2OSwgNTksIDU5LCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMikhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICAgIFxyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uZmFuY3ktdGh1bWJcclxueyAgIFxyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLmRhdGUtbGFiZWx7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIFxyXG46aG9zdC1jb250ZXh0KC5ydGwpXHJcbntcclxuLnJpZ2h0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICBcclxufVxyXG5cclxuLmxlZnR7XHJcbiAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5sdHIpXHJcbntcclxuLnJpZ2h0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgIFxyXG59XHJcblxyXG4ubGVmdHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgXHJcbn1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/lobby/lobby.component.ts":
/*!*************************************************!*\
  !*** ./src/app/common/lobby/lobby.component.ts ***!
  \*************************************************/
/*! exports provided: LobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyComponent", function() { return LobbyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LobbyComponent = /** @class */ (function () {
    function LobbyComponent() {
        this.noNew = false;
        this.itemClass = '';
        this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LobbyComponent.prototype.deleteItemHandler = function (item) {
        this.deleteItem.emit(item);
    };
    LobbyComponent.prototype.editItemHandler = function (item) {
        this.clearSelection();
        item._meta_active = '_meta_active';
        this.editItem.emit(item);
    };
    LobbyComponent.prototype.newItemHandler = function (item) {
        this.newItem.emit(item);
    };
    LobbyComponent.prototype.clearSelection = function () {
        this.items.forEach(function (it) {
            delete it._meta_active;
        });
    };
    LobbyComponent.prototype.selectItemHandler = function (item) {
        this.clearSelection();
        item._meta_active = '_meta_active';
        this.selectItem.emit(item);
    };
    LobbyComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['items']) { // && !changes['items'].isFirstChange()
            if (this.items) {
                this.items.forEach(function (item) {
                    if (_this.template) {
                        item.template = _this.template;
                    }
                });
            }
        }
    };
    LobbyComponent.prototype.nextTourStep = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 2000);
        });
    };
    LobbyComponent.prototype.ngOnInit = function () {
        // if (this.items) {
        //   this.items.forEach((item) => {
        //     if (this.template) {
        //       item.template = this.template;
        //     }
        //   });
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], LobbyComponent.prototype, "imageTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], LobbyComponent.prototype, "slideTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('playlistTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], LobbyComponent.prototype, "playlistTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], LobbyComponent.prototype, "toolbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], LobbyComponent.prototype, "template", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], LobbyComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LobbyComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LobbyComponent.prototype, "noNew", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LobbyComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LobbyComponent.prototype, "iconClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LobbyComponent.prototype, "itemClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LobbyComponent.prototype, "itemWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LobbyComponent.prototype, "itemHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LobbyComponent.prototype, "deleteItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LobbyComponent.prototype, "editItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LobbyComponent.prototype, "newItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LobbyComponent.prototype, "selectItem", void 0);
    LobbyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lobby',
            template: __webpack_require__(/*! ./lobby.component.html */ "./src/app/common/lobby/lobby.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./lobby.component.scss */ "./src/app/common/lobby/lobby.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LobbyComponent);
    return LobbyComponent;
}());



/***/ }),

/***/ "./src/app/common/slide-footer/slide-footer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/common/slide-footer/slide-footer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n    <div class=\"footer\" [ngClass]=\"{'error': error, className: !error}\">\n\n    </div>\n \n"

/***/ }),

/***/ "./src/app/common/slide-footer/slide-footer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/slide-footer/slide-footer.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n  background-color: red !important; }\n\n:host-context(.active) .footer {\n  pointer-events: none;\n  z-index: 0;\n  width: 500px;\n  position: fixed;\n  padding-top: 10px;\n  bottom: 18px; }\n\n:host-context(.rtl) .footer {\n  left: 0; }\n\n:host-context(.ltr) .footer {\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NsaWRlLWZvb3Rlci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxcc2xpZGUtZm9vdGVyXFxzbGlkZS1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQ0FBK0IsRUFBQTs7QUFFbkM7RUFJUSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFlBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFLcEI7RUFHSSxPQUFNLEVBQUE7O0FBR1Y7RUFHUSxRQUFPLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vc2xpZGUtZm9vdGVyL3NsaWRlLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmVycm9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkIWltcG9ydGFudDtcclxufVxyXG46aG9zdC1jb250ZXh0KC5hY3RpdmUpXHJcbntcclxuIFxyXG4gICAgLmZvb3RlcntcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICB3aWR0aDo1MDBweDsgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgICAgIFxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbjpob3N0LWNvbnRleHQoLnJ0bClcclxue1xyXG4gICAgLmZvb3RlcntcclxuICAgIGxlZnQ6MDtcclxuICAgIH1cclxufVxyXG46aG9zdC1jb250ZXh0KC5sdHIpXHJcbntcclxuICAgIC5mb290ZXJ7XHJcbiAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/common/slide-footer/slide-footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/slide-footer/slide-footer.component.ts ***!
  \***************************************************************/
/*! exports provided: SlideFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideFooterComponent", function() { return SlideFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");



var SlideFooterComponent = /** @class */ (function () {
    function SlideFooterComponent(dirtyService) {
        var _this = this;
        this.dirtyService = dirtyService;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        dirtyService.error.subscribe(function (error) {
            _this.error = error ? 'error' : '';
        });
    }
    SlideFooterComponent.prototype.ngOnInit = function () {
    };
    SlideFooterComponent.prototype.closeSlider = function () {
        this.closed.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SlideFooterComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SlideFooterComponent.prototype, "className", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SlideFooterComponent.prototype, "iconClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], SlideFooterComponent.prototype, "closeFn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SlideFooterComponent.prototype, "closed", void 0);
    SlideFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slide-footer',
            template: __webpack_require__(/*! ./slide-footer.component.html */ "./src/app/common/slide-footer/slide-footer.component.html"),
            styles: [__webpack_require__(/*! ./slide-footer.component.scss */ "./src/app/common/slide-footer/slide-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dirty_service__WEBPACK_IMPORTED_MODULE_2__["DirtyService"]])
    ], SlideFooterComponent);
    return SlideFooterComponent;
}());



/***/ }),

/***/ "./src/app/common/slide-header/slide-header.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/common/slide-header/slide-header.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{class}} {{className}}\">\n    <i class=\"{{iconClass}} icon\"></i>\n    <h4> {{title | translate}}</h4>\n</div>\n<button *ngIf=\"closeFn\" class=\"close-button-{{class}}\" (click)=\"closeSlider();\"><i\n        class=\"icon-times-rectangle-o\"></i></button>\n<button *ngIf=\"enableSave\" class=\"save-btn-{{class}} {{dirty}}\" (click)=\"saveClick($event);\" (next)=\"saveClick($event);\" [joyrideStep]=\"'save'\"\n    [stepContent]=\"saveBtnContent\" stepPosition=\"bottom\"><i class=\"icon-floppy-o\"></i></button>\n<div class=\"toolbar\">\n    <ng-template [ngTemplateOutlet]=\"toolbar || defaultTemplate\"></ng-template>\n</div>\n\n\n<ng-template #saveBtnContent>\n        <h5> {{'TOUR.SCREENS.TITLE' | translate}}</h5>\n        <p>\n            {{'TOUR.SCREENS.CONTENT' | translate}}\n        </p>\n    </ng-template>\n\n    \n\n<ng-template #defaultTemplate>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/common/slide-header/slide-header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/slide-header/slide-header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inline-topper {\n  pointer-events: none;\n  z-index: 0;\n  height: 51px;\n  padding-top: 10px; }\n  .inline-topper .icon {\n    margin: 8px;\n    vertical-align: top; }\n  .inline-topper h4 {\n    display: inline;\n    vertical-align: top; }\n  .inline-topper .bar-icon {\n    margin-left: 15px; }\n  .topper {\n  pointer-events: none;\n  z-index: 0;\n  height: 65px;\n  position: absolute;\n  padding-top: 30px;\n  top: -30px;\n  left: -15px;\n  right: -15px; }\n  .topper .icon {\n    margin: 8px;\n    vertical-align: top; }\n  .topper h4 {\n    display: inline;\n    vertical-align: top; }\n  .topper .bar-icon {\n    margin-left: 15px; }\n  :host-context(.ltr) .close-button-topper {\n  right: -15px; }\n  :host-context(.rtl) .close-button-topper {\n  left: -15px; }\n  .close-button-topper {\n  position: absolute;\n  z-index: 2000;\n  top: -15px;\n  width: 50px;\n  height: 50px;\n  background-color: #96ff00;\n  color: white;\n  cursor: pointer; }\n  .close-button-inline-topper {\n  color: white;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  width: 50px;\n  height: 50px;\n  background-color: green; }\n  .save-btn-inline-topper:hover {\n  font-size: 1.5em; }\n  .save-btn-inline-topper {\n  transition: all .2s ease;\n  color: white;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  width: 50px;\n  height: 50px;\n  background-color: orange;\n  color: white;\n  cursor: pointer; }\n  .save-btn-inline-topper.true {\n    background-color: red;\n    color: black; }\n  .toolbar {\n  position: absolute;\n  top: 0;\n  transition: all .2s ease; }\n  :host-context(.rtl) .toolbar {\n  left: 100px; }\n  :host-context(.rtl) .save-btn-topper {\n  left: 35px; }\n  :host-context(.rtl) .save-btn-inline-topper {\n  float: right;\n  left: 50px; }\n  :host-context(.rtl) .close-button-inline-topper {\n  float: right;\n  left: 0px; }\n  :host-context(.ltr) .toolbar {\n  right: 100px; }\n  :host-context(.ltr) .save-btn-topper {\n  right: 35px; }\n  :host-context(.ltr) .save-btn-inline-topper {\n  float: left;\n  right: 50px; }\n  :host-context(.ltr) .close-button-inline-topper {\n  float: right;\n  right: 0px; }\n  .save-btn-topper {\n  color: white;\n  position: absolute;\n  top: -15px;\n  width: 50px;\n  height: 50px;\n  background-color: #fc6600;\n  cursor: pointer; }\n  .save-btn-topper.true {\n    background-color: red;\n    color: black; }\n  .save-btn-inline-topper:active,\n.save-btn-inline-topper:hover,\n.save-btn-topper:active,\n.save-btn-topper:hover,\n.btn-tool:hover,\n.btn-tool:active {\n  font-size: 1.5em; }\n  .close-button-inline-topper:active,\n.close-button-inline-topper:hover,\n.close-button-topper:active,\n.close-button-topper:hover {\n  font-size: 1.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NsaWRlLWhlYWRlci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxcc2xpZGUtaGVhZGVyXFxzbGlkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9zbGlkZS1oZWFkZXIvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixZQUFZO0VBRVosaUJBQWlCLEVBQUE7RUFMckI7SUFPUSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUFSM0I7SUFXUSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUFaM0I7SUFlUSxpQkFBaUIsRUFBQTtFQUl6QjtFQUNJLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsWUFBWTtFQUVaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFUaEI7SUFXUSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUFaM0I7SUFlUSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUFoQjNCO0lBbUJRLGlCQUFpQixFQUFBO0VBSXpCO0VBSVEsWUFBWSxFQUFBO0VBR25CO0VBR08sV0FBVyxFQUFBO0VBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQ2hEYTtFRGtEYixZQUFZO0VBQ1osZUFBZSxFQUFBO0VBU3ZCO0VBQ0EsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFFbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7RUFPbkI7RUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtFQUlJLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZUFBZTtFQUdmLGtCQUFrQjtFQUVsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFFeEIsWUFBWTtFQUNaLGVBQWUsRUFBQTtFQWpCbkI7SUFvQlEscUJBQXFCO0lBQ3JCLFlBQVksRUFBQTtFQUlwQjtFQUNJLGtCQUFrQjtFQUNsQixNQUFLO0VBR0wsd0JBQXdCLEVBQUE7RUFNNUI7RUFHUSxXQUFXLEVBQUE7RUFIbkI7RUFRUSxVQUFVLEVBQUE7RUFSbEI7RUFZUSxZQUFZO0VBQ1osVUFBVSxFQUFBO0VBYmxCO0VBa0JRLFlBQVk7RUFHWixTQUFTLEVBQUE7RUFLakI7RUFHUSxZQUFZLEVBQUE7RUFIcEI7RUFRUSxXQUFXLEVBQUE7RUFSbkI7RUFZUSxXQUFXO0VBQ1gsV0FBVyxFQUFBO0VBYm5CO0VBaUJRLFlBQVk7RUFDWixVQUFVLEVBQUE7RUFLbEI7RUFFSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQ3RMYztFRHVMZCxlQUFlLEVBQUE7RUFSbkI7SUFXUSxxQkFBcUI7SUFDckIsWUFBWSxFQUFBO0VBS3BCOzs7Ozs7RUFRSSxnQkFBZ0IsRUFBQTtFQUlwQjs7OztFQU1JLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3NsaWRlLWhlYWRlci9zbGlkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zYXNzL192YXJpYWJsZXMnO1xyXG5cclxuXHJcblxyXG5cclxuLmlubGluZS10b3BwZXJ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgaGVpZ2h0OiA1MXB4OyAgIFxyXG4gICAgICAgXHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgICAgXHJcbiAgICAuaWNvbntcclxuICAgICAgICBtYXJnaW46IDhweDsgICAgICBcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbiAgICAuYmFyLWljb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b3BwZXJ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgaGVpZ2h0OiA2NXB4OyAgIFxyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICBcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgLmljb257XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7ICAgICAgXHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgLmJhci1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5sdHIpXHJcbiB7XHJcbiAgIFxyXG4gICAgLmNsb3NlLWJ1dHRvbi10b3BwZXJ7XHJcbiAgICAgICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgfVxyXG4gfVxyXG4gOmhvc3QtY29udGV4dCgucnRsKVxyXG4ge1xyXG4gICAgLmNsb3NlLWJ1dHRvbi10b3BwZXJ7XHJcbiAgICAgICAgbGVmdDogLTE1cHg7XHJcbiAgICB9XHJcbiB9XHJcbiAgICAuY2xvc2UtYnV0dG9uLXRvcHBlcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjAwMDsgICAgICBcclxuICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JlZW47XHJcblxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgXHJcblxyXG4gICBcclxuICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gXHJcblxyXG4uY2xvc2UtYnV0dG9uLWlubGluZS10b3BwZXIgeyAgICBcclxuY29sb3I6IHdoaXRlO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbnRvcDogMHB4O1xyXG53aWR0aDogNTBweDtcclxuaGVpZ2h0OiA1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHJcbiBcclxuIFxyXG5cclxuXHJcbn1cclxuICAgIC5zYXZlLWJ0bi1pbmxpbmUtdG9wcGVyOmhvdmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9IFxyXG4gICAgLnNhdmUtYnRuLWlubGluZS10b3BwZXJcclxuICAgIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgXHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAmLnRydWV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudG9vbGJhcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIDpob3N0LWNvbnRleHQoLnJ0bClcclxuICAgIHtcclxuICAgICAgICAudG9vbGJhcnsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZWZ0OiAxMDBweDsgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNhdmUtYnRuLXRvcHBlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGVmdDogMzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNhdmUtYnRuLWlubGluZS10b3BwZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jbG9zZS1idXR0b24taW5saW5lLXRvcHBlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIDpob3N0LWNvbnRleHQoLmx0cilcclxuICAgIHtcclxuICAgICAgICAudG9vbGJhcnsgICAgICAgICAgIFxyXG4gICAgICAgICAgICByaWdodDogMTAwcHg7ICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zYXZlLWJ0bi10b3BwZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2F2ZS1idG4taW5saW5lLXRvcHBlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xvc2UtYnV0dG9uLWlubGluZS10b3BwZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zYXZlLWJ0bi10b3BwZXJcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1vcmFuZ2U7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgICYudHJ1ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuc2F2ZS1idG4taW5saW5lLXRvcHBlcjphY3RpdmUsICAgIFxyXG4gICAgLnNhdmUtYnRuLWlubGluZS10b3BwZXI6aG92ZXIsXHJcbiAgICAuc2F2ZS1idG4tdG9wcGVyOmFjdGl2ZSxcclxuICAgIC5zYXZlLWJ0bi10b3BwZXI6aG92ZXIsXHJcbiAgICAuYnRuLXRvb2w6aG92ZXIsXHJcbiAgICAuYnRuLXRvb2w6YWN0aXZlLFxyXG4gICAgeyAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2UtYnV0dG9uLWlubGluZS10b3BwZXI6YWN0aXZlLCAgICBcclxuICAgIC5jbG9zZS1idXR0b24taW5saW5lLXRvcHBlcjpob3ZlcixcclxuICAgIC5jbG9zZS1idXR0b24tdG9wcGVyOmFjdGl2ZSxcclxuICAgIC5jbG9zZS1idXR0b24tdG9wcGVyOmhvdmVyXHJcbiAgICB7ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIFxyXG4gXHJcbiBcclxuICIsIlxyXG4kY29sb3ItZ3JheTogI2UzZTRlNTtcclxuJGNvbG9yLWRhcmtibHVlMTogIzE2MjQzMztcclxuJGNvbG9yLWRhcmtibHVlMjogIzJhNDU2MztcclxuJGNvbG9yLWxpZ2h0Ymx1ZTE6ICMyNjQzNTY7XHJcbiRjb2xvci1saWdodGJsdWUyOiAjM2M3Mzk5O1xyXG4kY29sb3Itb3JhbmdlOiAjZmM2NjAwO1xyXG4kY29sb3ItY3lhbjogIzAwZmZmNjtcclxuJGNvbG9yLXNjcmVlbjogIzAwY2ZmZjtcclxuJGNvbG9yLXNjcmVlbi1ncm91cDogIzAwZmZmNjtcclxuJGNvbG9yLWxpYnJhcnk6ICM5NmZmMDA7XHJcbiRjb2xvci15ZWxsb3c6ICNmZmZmMDA7XHJcblxyXG5cclxuXHJcbiRjb2xvci1wdXJwbGU6ICM2MzJhNjI7XHJcblxyXG5cclxuJGNvbG9yLWdyZWVuOiAjOTZmZjAwO1xyXG4kY29sb3ItYmxhY2s6ICMyMjI7XHJcbiRjb2xvci1ncmF5d2hpdGU6ICNGRkU7XHJcbiRjb2xvci10b29sYmFyOiAjZjhmOWZhO1xyXG4gXHJcblxyXG4gXHJcblxyXG4gIl19 */"

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
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");



var SlideHeaderComponent = /** @class */ (function () {
    function SlideHeaderComponent(dirtyService) {
        var _this = this;
        this.dirtyService = dirtyService;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.class = 'topper';
        dirtyService.dirty.subscribe(function (state) {
            _this.dirty = state;
        });
        dirtyService.saving.subscribe(function (state) {
            _this.saving = state;
        });
    }
    SlideHeaderComponent.prototype.ngOnInit = function () {
        if (this.mode === 'inline') {
            this.class = 'inline-topper';
        }
    };
    SlideHeaderComponent.prototype.saveClick = function (event) {
        this.dirtyService.setSaving();
        this.save.emit();
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SlideHeaderComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SlideHeaderComponent.prototype, "enableSave", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SlideHeaderComponent.prototype, "iconClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SlideHeaderComponent.prototype, "closeFn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SlideHeaderComponent.prototype, "toolbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SlideHeaderComponent.prototype, "closed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SlideHeaderComponent.prototype, "save", void 0);
    SlideHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slide-header',
            template: __webpack_require__(/*! ./slide-header.component.html */ "./src/app/common/slide-header/slide-header.component.html"),
            styles: [__webpack_require__(/*! ./slide-header.component.scss */ "./src/app/common/slide-header/slide-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dirty_service__WEBPACK_IMPORTED_MODULE_2__["DirtyService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var DataComponent = /** @class */ (function () {
    function DataComponent(_ngZone, translateService, dirtyService, changeDetectorRef, formBuilder) {
        this._ngZone = _ngZone;
        this.translateService = translateService;
        this.dirtyService = dirtyService;
        this.changeDetectorRef = changeDetectorRef;
        this.formBuilder = formBuilder;
        this.subscriptions = {};
    }
    Object.defineProperty(DataComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.itemForm.controls; },
        enumerable: true,
        configurable: true
    });
    DataComponent.prototype.afterLoad = function (item) {
    };
    DataComponent.prototype.beforeUpdate = function (item) {
    };
    DataComponent.prototype.afterUpdate = function (item) {
        this.closeComponent();
    };
    DataComponent.prototype.closeComponent = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DataComponent.prototype.closeSlider = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                if (this.dirtyService._dirty) {
                                    this.translateService.get('DATA.FORM_NOTSAVED').subscribe(function (confirmMessage) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            if (confirm("" + confirmMessage)) {
                                                this.displayModalNew = 'closing';
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); });
                                }
                                else {
                                    this.displayModalNew = 'closing';
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [4 /*yield*/, this.closeComponent()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataComponent.prototype.clearMeta = function () {
        var _this = this;
        Object.keys(this.item).forEach(function (key) {
            if (key.indexOf('_meta_') === 0 || key === 'template') {
                delete _this.item[key];
            }
        });
    };
    DataComponent.prototype.validate = function () {
        this.submitted = true;
        if (this.itemForm.invalid) {
            this.dirtyService.setError();
            return false;
        }
        this.dirtyService.clearError();
        var controls = this.itemForm.controls;
        for (var name_1 in controls) {
            this.item[name_1] = controls[name_1].value;
        }
        return true;
    };
    DataComponent.prototype.saveProxy = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!this.validate()) {
                                    return [2 /*return*/];
                                }
                                if (!this.item._id) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.updateItem()];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, this.createItem()];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    DataComponent.prototype.getFormFields = function () {
        return [];
    };
    DataComponent.prototype.buildFormFields = function () {
        var _this = this;
        var group = {};
        this.getFormFields().forEach(function (field) {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', field.validator || null);
            if (_this.item && _this.item[field.name]) {
                if (field.name === 'img') {
                    control.setValue('');
                }
                else {
                    control.setValue(_this.item[field.name] || '');
                }
            }
            group[field.name] = control;
        });
        this.itemForm = this.formBuilder.group(group);
        this.itemForm.valueChanges.subscribe(function () {
            _this.dirtyService.setDirty();
        });
    };
    DataComponent.prototype.updateItem = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clearMeta();
                        this.beforeUpdate(this.item);
                        this.updateItemRunning = true;
                        this.item.Date = new Date();
                        return [4 /*yield*/, this.DataController.update(this.Model, this.item._id, this.item)];
                    case 1:
                        _a.sent();
                        if (this.dirtyService) {
                            this.dirtyService.clearDirty();
                        }
                        this.afterUpdate(this.item);
                        this.dirtyService.refresh();
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
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _a;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (Object.keys(query).length) {
                                    this.query = query;
                                }
                                else {
                                    this.query = {};
                                }
                                _a = this;
                                return [4 /*yield*/, this.DataController.query(this.Model, this.query)];
                            case 1:
                                _a.items = _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
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
                                return [4 /*yield*/, this.DataController.delete(this.Model, item._id)];
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
    DataComponent.prototype.createItem = function (obj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.clearMeta();
                        this.beforeUpdate(this.item);
                        _a = this;
                        return [4 /*yield*/, this.DataController.create(this.Model, this.item)];
                    case 1:
                        _a.item = _b.sent();
                        if (this.dirtyService) {
                            this.dirtyService.clearDirty();
                        }
                        return [4 /*yield*/, this.loadItems()];
                    case 2:
                        _b.sent();
                        this.displayModalNew = '';
                        this.afterUpdate(this.item);
                        this.dirtyService.refresh();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataComponent.prototype.newItem = function (obj) {
        this.submitted = false;
        this.item = obj || {};
        this.dirtyService.clearDirty();
        this.buildFormFields();
        this.displayModalNew = 'active';
    };
    DataComponent.prototype.editItem = function (item) {
        var _this = this;
        this.submitted = false;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.dirtyService.clearDirty();
                if (item) {
                    this.item = item;
                }
                else {
                    this.item = {};
                }
                this.buildFormFields();
                this.dirtyService.init();
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
                this.el.nativeElement.style.overflowY = 'auto';
                // this.el.nativeElement.style.overflowX = 'auto';
                this.adapt();
                return [2 /*return*/];
            });
        });
    };
    AdaptHeightDirective.prototype.adapt = function () {
        var _this = this;
        setTimeout(function () {
            var view = _this.viewport();
            _this.el.nativeElement.style.height = (view.height - _this.appAdaptHeight) + "px";
            _this.el.nativeElement.style.overflowY = 'auto';
            // this.el.nativeElement.style.overflowX = 'hidden';
            _this.adapt();
        }, 1000);
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

/***/ "./src/app/directives/adapt-width.ts":
/*!*******************************************!*\
  !*** ./src/app/directives/adapt-width.ts ***!
  \*******************************************/
/*! exports provided: AdaptWidthDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdaptWidthDirective", function() { return AdaptWidthDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdaptWidthDirective = /** @class */ (function () {
    function AdaptWidthDirective(el) {
        this.el = el;
    }
    AdaptWidthDirective.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var view;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                view = this.viewport();
                this.el.nativeElement.style.width = (view.width - this.appAdaptWidth) + "px";
                this.el.nativeElement.style.overflowX = 'auto';
                return [2 /*return*/];
            });
        });
    };
    AdaptWidthDirective.prototype.viewport = function () {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width: e[a + 'Width'], height: e[a + 'Height'] };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appAdaptWidth'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AdaptWidthDirective.prototype, "appAdaptWidth", void 0);
    AdaptWidthDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAdaptWidth]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AdaptWidthDirective);
    return AdaptWidthDirective;
}());



/***/ }),

/***/ "./src/app/directives/change.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/change.directive.ts ***!
  \************************************************/
/*! exports provided: DetectChangesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectChangesDirective", function() { return DetectChangesDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dirty.service */ "./src/app/services/dirty.service.ts");



var DetectChangesDirective = /** @class */ (function () {
    function DetectChangesDirective(dirtyService) {
        this.dirtyService = dirtyService;
    }
    DetectChangesDirective.prototype.onChange = function (event) {
        this.dirtyService.detectChanges();
    };
    DetectChangesDirective.prototype.onKeyup = function (event) {
        this.dirtyService.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('detectChanges'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DetectChangesDirective.prototype, "detectChanges", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DetectChangesDirective.prototype, "onChange", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DetectChangesDirective.prototype, "onKeyup", null);
    DetectChangesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[detectChanges]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dirty_service__WEBPACK_IMPORTED_MODULE_2__["DirtyService"]])
    ], DetectChangesDirective);
    return DetectChangesDirective;
}());



/***/ }),

/***/ "./src/app/directives/resizable.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/resizable.directive.ts ***!
  \***************************************************/
/*! exports provided: ResizableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableDirective", function() { return ResizableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResizableDirective = /** @class */ (function () {
    function ResizableDirective(el) {
        this.el = el;
    }
    ResizableDirective.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ResizableDirective.prototype.viewport = function () {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width: e[a + 'Width'], height: e[a + 'Height'] };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('resizable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ResizableDirective.prototype, "resizable", void 0);
    ResizableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[resizable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ResizableDirective);
    return ResizableDirective;
}());



/***/ }),

/***/ "./src/app/directives/stop-prop.ts":
/*!*****************************************!*\
  !*** ./src/app/directives/stop-prop.ts ***!
  \*****************************************/
/*! exports provided: ClickStopPropagationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickStopPropagationDirective", function() { return ClickStopPropagationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClickStopPropagationDirective = /** @class */ (function () {
    function ClickStopPropagationDirective() {
    }
    ClickStopPropagationDirective.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ClickStopPropagationDirective.prototype, "onClick", null);
    ClickStopPropagationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[click-stop-propagation]'
        })
    ], ClickStopPropagationDirective);
    return ClickStopPropagationDirective;
}());



/***/ }),

/***/ "./src/app/editor/canvas/canvas.component.html":
/*!*****************************************************!*\
  !*** ./src/app/editor/canvas/canvas.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item\" [ngStyle]=\"{'background-color': bgColor}\" style=\"position: relative;width: 100%;height: 100%\">\r\n\r\n\r\n    <div #gridObject style=\"position: absolute;overflow: hidden;z-index: 0;top:0;left:0;width: 100%;height: 100%\">\r\n\r\n    </div>\r\n\r\n    <div #embedObject style=\"position: absolute;overflow: hidden;z-index: 0;top:0;left:0;width: 100%;height: 100%\">\r\n\r\n        </div>\r\n\r\n    <iframe class=\"frame\" #playerIframe height=\"{{height}}\" width=\"{{width}}\" style=\"position: absolute;\"></iframe>\r\n    <canvas #thumbObject height=\"{{height}}\" width=\"{{width}}\" style=\"position: absolute;\"></canvas>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/editor/canvas/canvas.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/editor/canvas/canvas.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/editor/canvas/canvas.component.ts":
/*!***************************************************!*\
  !*** ./src/app/editor/canvas/canvas.component.ts ***!
  \***************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_slide_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../player/slide.service */ "./src/player/slide.service.ts");



var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(_ngZone, slideService) {
        this._ngZone = _ngZone;
        this.slideService = slideService;
        this.scale = 0.2;
    }
    CanvasComponent.prototype.paint = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var canvas, grid, embed, iframe, ctx;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        if (this.thumbObject.first) {
                            canvas = this.thumbObject.first.nativeElement;
                            canvas.width = this.width;
                            canvas.height = this.height;
                            grid = this.gridObject.first.nativeElement;
                            grid.width = this.width;
                            grid.height = this.height;
                            embed = this.embedObject.first.nativeElement;
                            embed.width = this.width;
                            embed.height = this.height;
                            iframe = this.playerIframe.first.nativeElement;
                            grid.width = this.width;
                            grid.height = this.height;
                            ctx = canvas.getContext('2d');
                            this.slideService.play({ canvas: canvas, grid: grid, iframe: iframe, embed: embed }, [this.item], ctx, this.width, this.height, 'single');
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    CanvasComponent.prototype.ngAfterViewInit = function () {
        this.paint();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CanvasComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CanvasComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasComponent.prototype, "scale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('thumbObject'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], CanvasComponent.prototype, "thumbObject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('gridObject'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], CanvasComponent.prototype, "gridObject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('playerIframe'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], CanvasComponent.prototype, "playerIframe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('embedObject'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], CanvasComponent.prototype, "embedObject", void 0);
    CanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/editor/canvas/canvas.component.html"),
            styles: [__webpack_require__(/*! ./canvas.component.scss */ "./src/app/editor/canvas/canvas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _player_slide_service__WEBPACK_IMPORTED_MODULE_2__["SlideService"]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/editor/fonts.service.ts":
/*!*****************************************!*\
  !*** ./src/app/editor/fonts.service.ts ***!
  \*****************************************/
/*! exports provided: FontsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontsService", function() { return FontsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.context.service */ "./src/app/services/user.context.service.ts");

// 'Almendra', Almendra
var KEY = 'AIzaSyDwRFeD5sLu69-hJ20KICyhh9Huz-o3Ic8';




var log = console.log;
var FontsService = /** @class */ (function () {
    function FontsService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.fonts = [];
        this.loadedFonts = {};
        if (userService.getUser()) {
            this.user_id = userService.getUser()._id;
        }
    }
    FontsService.prototype.getFonts = function () {
        return this.fonts;
    };
    FontsService.prototype.loadGoogleFonts = function (fontsArr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fonts;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                fonts = {};
                fontsArr.filter(function (font) { return font.source === 'google'; }).forEach(function (font) {
                    fonts[font.name] = font.name;
                });
                this.loadFontsForRender(Object.keys(fonts));
                return [2 /*return*/];
            });
        });
    };
    FontsService.prototype.loadFontsForRender = function (fontsArr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var finalFontsForLoad = [];
                        var counter = fontsArr ? fontsArr.length : 0;
                        if (fontsArr) {
                            fontsArr.forEach(function (item) {
                                if (item.name) {
                                    if (!_this.loadedFonts[item.name]) {
                                        finalFontsForLoad.push(item.name);
                                    }
                                }
                                else if (typeof item === 'string') {
                                    if (!_this.loadedFonts[item]) {
                                        finalFontsForLoad.push(item);
                                    }
                                }
                            });
                        }
                        if (finalFontsForLoad.length > 0) {
                            window.WebFont.load({
                                active: function () {
                                    resolve();
                                },
                                fontloading: function (item) {
                                    _this.loadedFonts[item] = item;
                                    counter--;
                                    if (counter === 0) {
                                    }
                                },
                                loading: function () {
                                    finalFontsForLoad.forEach(function (item) {
                                        _this.loadedFonts[item] = item;
                                    });
                                },
                                google: {
                                    families: finalFontsForLoad,
                                }
                            });
                            console.log("/css?family=" + finalFontsForLoad.join('|'));
                        }
                        else {
                            return resolve(_this.fonts);
                        }
                    })];
            });
        });
    };
    FontsService.prototype.listLocalFonts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var finalFontsForLoad;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["Font"].query('Font', {})];
                    case 1:
                        finalFontsForLoad = (_a.sent()).map(function (item) { return ({
                            'name': item.Name, 'source': 'local'
                        }); });
                        return [2 /*return*/, finalFontsForLoad];
                }
            });
        });
    };
    FontsService.prototype.loadLocalFonts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            // const finalFontsForLoad = (await Font.query('Font', {})).map((item) => ({ 'name': item.Name }));
                            document.getElementById('api_css_placeholder').setAttribute('href', "/api/css/" + this.user_id);
                            resolve(true);
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FontsService.prototype.loadFontsForLanguage = function (lng) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                url = "https://www.googleapis.com/webfonts/v1/webfonts?key=" + KEY;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var fontsStr = localStorage.getItem('GoogleFonts');
                        if (fontsStr) {
                            resolve(JSON.parse(fontsStr));
                        }
                        _this.http.get(url).subscribe(function (data) {
                            _this.fonts = data.items.map(function (font) {
                                return font;
                            });
                            if (lng) {
                                _this.fonts = _this.fonts.filter(function (font) {
                                    return font.subsets.indexOf(lng.subset) > -1;
                                });
                            }
                            localStorage.setItem('GoogleFonts', JSON.stringify(_this.fonts));
                            resolve(_this.fonts);
                        });
                    })];
            });
        });
    };
    FontsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_user_context_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], FontsService);
    return FontsService;
}());



/***/ }),

/***/ "./src/app/library/finder/finder.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/finder/finder.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #toolbar let-item=\"item\">\r\n  <div class=\"btn-group\" data-toggle=\"buttons\">\r\n    <button class=\"btn-tool\" (click)=\"toggleFilterSlider()\"><span class=\"icon-search\"></span></button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #toolbarTemplate let-item=\"item\">\r\n  <ul class=\"sqr-toolbar btn-group\" role=\"group\">\r\n    <li>\r\n      <button class=\"btn btn-secondary btn-md btn-success\" (click)=\"startFromTemplate(item);\"> <i\r\n          class=\"icon-insert-template\"></i>\r\n      </button>\r\n    </li>\r\n    <li>\r\n\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n<div class=\"slider-container-wide {{active}} shadow\">\r\n  <dialog open={{active}}>\r\n    <app-slide-header closeFn=\"true\" [toolbar]=\"toolbar\" title=\"NAVBAR.FINDER\" className=\"library-cat\"\r\n      (closed)=\"closeSlider()\"></app-slide-header>\r\n\r\n  \r\n\r\n    <div class=\"filter-slide {{filterActive}}\">\r\n      <div class=\"input-group pt50\">\r\n        <input type=\"text\" name=\"searchPhrase\" class=\"form-control\" />\r\n        <div class=\"input-group-prepend\">\r\n          <button class=\"btn btn-outline-secondary\" type=\"button\"> <i class=\"icon-search\"></i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ul class=\"nav nav-tabs pt50\">\r\n\r\n      <li class=\"nav-item {{tab.selected ? 'library-cat': ''}} \" *ngFor=\"let tab of tabs\" (click)=\"tabSelect(tab)\">\r\n        <a class=\"nav-link {{tab.selected}} \">\r\n          <h5><i class=\"{{tab.icon}}\"></i> {{tab.name | translate}}</h5>\r\n        </a>\r\n      </li>\r\n\r\n\r\n      <!-- <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\r\n        <a class=\"nav-link {{tab.selected}}\" (click)=\"tabSelect(tab)\">{{tab.name | translate}}</a>\r\n      </li> -->\r\n    </ul>\r\n\r\n    <div class=\"no-margin nohor pt10\" *ngIf=\"selectedTab && selectedTab.alias === 'media'\" [appAdaptHeight]=\"220\">\r\n         <app-lobby [items]=\"items\" itemClass=\"small\" mode=\"media-finder\" (selectItem)=\"selectItem($event)\"\r\n        (deleteItem)=\"deleteItem($event)\"></app-lobby>\r\n    </div>\r\n    <div class=\"no-margin nohor pt10\" *ngIf=\"selectedTab && selectedTab.alias ==='slide'\" [appAdaptHeight]=\"220\">\r\n          <app-lobby [items]=\"slides\" itemClass=\"small\" mode=\"object-finder\" (selectItem)=\"selectItem($event)\"\r\n        (deleteItem)=\"deleteItem($event)\"></app-lobby>\r\n    </div>\r\n    <div class=\"no-margin nohor pt10\" *ngIf=\"selectedTab && selectedTab.alias === 'shares'\" [appAdaptHeight]=\"220\">\r\n        <app-lobby [items]=\"shares\" itemClass=\"small\" mode='media-finder' [toolbar]=\"toolbarTemplate\" [noNew]=\"true\">\r\n      </app-lobby>\r\n    </div>\r\n\r\n    <app-slide-footer className=\"library-cat\"></app-slide-footer>\r\n  </dialog>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/library/finder/finder.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/finder/finder.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-slide {\n  border: 1px solid red;\n  background-color: aquamarine;\n  position: absolute;\n  top: 38px;\n  right: 0px;\n  z-index: 100;\n  bottom: 30px;\n  display: none;\n  padding: 10px; }\n\n.pt10 {\n  padding-top: 10px; }\n\n.filter-slide.active {\n  display: block;\n  position: absolute;\n  top: 38px;\n  right: 0px;\n  bottom: 30px;\n  width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9maW5kZXIvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxsaWJyYXJ5XFxmaW5kZXJcXGZpbmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUVaLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYSxFQUFBOztBQUlqQjtFQUNJLGlCQUFnQixFQUFBOztBQUVwQjtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGlicmFyeS9maW5kZXIvZmluZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1zbGlkZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM4cHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgXHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbn1cclxuXHJcbi5wdDEwe1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG4uZmlsdGVyLXNsaWRlLmFjdGl2ZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzOHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgXHJcbn0iXX0= */"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");






var FinderComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FinderComponent, _super);
    function FinderComponent(_ngZone, translateService, dirtyService, changeDetectorRef) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService, changeDetectorRef) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.dirtyService = dirtyService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.types = ['media', 'slide'];
        _this.tabsCollection = {
            'media': {
                name: 'NAVBAR.MEDIA', icon: 'icon-images'
            },
            'slide': {
                name: 'NAVBAR.SLIDES', icon: 'icon-brush'
            },
            'shares': {
                name: 'NAVBAR.SHARED', icon: 'icon-insert-template'
            },
        };
        _this.tabs = [];
        _this.selectItem = function (item) {
            _this.selector(item);
        };
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["LibraryDataController"];
        _this.Model = 'Library';
        return _this;
    }
    FinderComponent.prototype.tabSelect = function (tab) {
        this.tabs.forEach(function (tabItem) { return tabItem.selected = false; });
        tab.selected = true;
        this.selectedTab = tab;
    };
    FinderComponent.prototype.closeSlider = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.active = 'closing';
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    FinderComponent.prototype.toggleFilterSlider = function () {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.filterActive = this.filterActive !== 'active' ? 'active' : 'closing';
                return [2 /*return*/];
            });
        }); });
    };
    FinderComponent.prototype.closeFilterSlider = function () {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.filterActive = 'closing';
                return [2 /*return*/];
            });
        }); });
    };
    FinderComponent.prototype.filteredItems = function () {
        var _this = this;
        if (this.items && this.items.length) {
            return this.items.filter(function (item) { return item.type === _this.selectedTab.alias; });
        }
        else {
            return [];
        }
    };
    FinderComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.loadItems({});
                        this.tabs = this.types.map(function (item) {
                            return {
                                name: _this.tabsCollection[item].name,
                                icon: _this.tabsCollection[item].icon,
                                alias: item,
                            };
                        });
                        _a = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["SlidesDataController"].query('Slide', this.query)];
                    case 1:
                        _a.slides = _c.sent();
                        _b = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["ShareDataController"].search('Share', {})];
                    case 2:
                        _b.shares = _c.sent();
                        this.selectedTab = this.tabs[0];
                        this.tabs[0].selected = true;
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FinderComponent.prototype, "types", void 0);
    FinderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finder',
            template: __webpack_require__(/*! ./finder.component.html */ "./src/app/library/finder/finder.component.html"),
            styles: [__webpack_require__(/*! ./finder.component.scss */ "./src/app/library/finder/finder.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__["DirtyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], FinderComponent);
    return FinderComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/media-preview/media-preview.component.html":
/*!************************************************************!*\
  !*** ./src/app/media-preview/media-preview.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<div *ngIf=\"item.MediaType==='image' && item.resource\"><img [src]=\"item.resource\"\n                [ngStyle]=\"{'width.px': width, 'height.px': height}\"></div>\n<div *ngIf=\"item.MediaType==='video' && embedFrame\" [ngStyle]=\"{'width.px': width, 'height.px': height}\"><img [src]=\"embedFrame\"\n                style=\"width: 100%; height: 100%;\" /></div>\n<div *ngIf=\"item.MediaType==='url' && urlFrame\" [ngStyle]=\"{'width.px': width, 'height.px': height}\" style=\"pointer-events: none;\"><iframe\n                class=\"frame\" [src]=\"urlFrame\" [ngStyle]=\"{'width.px': width*4, 'height.px': height*4}\"></iframe></div>\n"

/***/ }),

/***/ "./src/app/media-preview/media-preview.component.scss":
/*!************************************************************!*\
  !*** ./src/app/media-preview/media-preview.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".frame {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  -webkit-transform: scale(0.25);\n  transform: scale(0.25);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0; }\n\n.thumb {\n  width: 450px;\n  height: 300px;\n  border: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEtcHJldmlldy9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXG1lZGlhLXByZXZpZXdcXG1lZGlhLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFLVCw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBS3RCLDZCQUE2QjtFQUM3QixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lZGlhLXByZXZpZXcvbWVkaWEtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcmFtZVxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xyXG5cclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG59XHJcblxyXG4udGh1bWJ7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/media-preview/media-preview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/media-preview/media-preview.component.ts ***!
  \**********************************************************/
/*! exports provided: MediaPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPreviewComponent", function() { return MediaPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dirty.service */ "./src/app/services/dirty.service.ts");
/* harmony import */ var youtube_thumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! youtube-thumbnail */ "./node_modules/youtube-thumbnail/index.js");
/* harmony import */ var youtube_thumbnail__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(youtube_thumbnail__WEBPACK_IMPORTED_MODULE_4__);





var MediaPreviewComponent = /** @class */ (function () {
    function MediaPreviewComponent(_ngZone, sanitizer, dirtyService) {
        this._ngZone = _ngZone;
        this.sanitizer = sanitizer;
        this.dirtyService = dirtyService;
        this.width = 300;
        this.height = 150;
        this.subscriptions = {};
    }
    MediaPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions['onInit'] = this.dirtyService.onInit.subscribe(function () {
            _this.activate();
        });
        this.subscriptions['onChange'] = this.dirtyService.onChange.subscribe(function (value) {
            _this.item.resource = value;
        });
        if (this.item) {
            this.activate();
        }
    };
    MediaPreviewComponent.prototype.ngOnDestroy = function () {
        Object.values(this.subscriptions).forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    MediaPreviewComponent.prototype.ngAfterViewInit = function () {
        this.activate();
    };
    MediaPreviewComponent.prototype.activate = function () {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var yimage;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.item.Url) {
                    this.urlFrame = this.sanitizer.bypassSecurityTrustResourceUrl(this.item.Url);
                }
                if (this.item.Embed) {
                    yimage = youtube_thumbnail__WEBPACK_IMPORTED_MODULE_4__("https://www.youtube.com/watch?v=" + this.item.Embed);
                    this.embedFrame = yimage.medium.url;
                }
                return [2 /*return*/];
            });
        }); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MediaPreviewComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MediaPreviewComponent.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MediaPreviewComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MediaPreviewComponent.prototype, "height", void 0);
    MediaPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media-preview',
            template: __webpack_require__(/*! ./media-preview.component.html */ "./src/app/media-preview/media-preview.component.html"),
            styles: [__webpack_require__(/*! ./media-preview.component.scss */ "./src/app/media-preview/media-preview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _services_dirty_service__WEBPACK_IMPORTED_MODULE_3__["DirtyService"]])
    ], MediaPreviewComponent);
    return MediaPreviewComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/order.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/order.pipe.ts ***!
  \*************************************/
/*! exports provided: OrderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPipe", function() { return OrderPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderPipe = /** @class */ (function () {
    function OrderPipe() {
    }
    OrderPipe.prototype.transform = function (items, field) {
        if (!items) {
            return [];
        }
        return items.sort(function (a, b) {
            if (Number(a[field]) < Number(b[field])) {
                return 1;
            }
            else {
                return -1;
            }
        });
    };
    OrderPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'order'
        })
    ], OrderPipe);
    return OrderPipe;
}());



/***/ }),

/***/ "./src/app/services/dirty.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/dirty.service.ts ***!
  \*******************************************/
/*! exports provided: DirtyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirtyService", function() { return DirtyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DirtyService = /** @class */ (function () {
    function DirtyService() {
        this.detect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dirty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saving = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DirtyService.prototype.refresh = function () {
        this.onRefresh.emit();
    };
    DirtyService.prototype.init = function () {
        this.onInit.emit(true);
    };
    DirtyService.prototype.change = function (map) {
        this.onChange.emit(map);
    };
    DirtyService.prototype.setDirty = function () {
        this._dirty = true;
        this.dirty.emit(true);
    };
    DirtyService.prototype.clearDirty = function () {
        this._dirty = false;
        this.dirty.emit(false);
        this.clearError();
    };
    DirtyService.prototype.setError = function () {
        this._error = true;
        this.error.emit(true);
    };
    DirtyService.prototype.clearError = function () {
        this._error = false;
        this.error.emit(false);
    };
    DirtyService.prototype.setSaving = function () {
        this._saving = false;
        this.saving.emit(true);
    };
    DirtyService.prototype.clearSaving = function () {
        this._saving = false;
        this.saving.emit(false);
    };
    DirtyService.prototype.detectChanges = function () {
        if (!this._dirty) {
            this.detect.emit();
        }
    };
    DirtyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DirtyService);
    return DirtyService;
}());



/***/ }),

/***/ "./src/app/services/dottoimage.ts":
/*!****************************************!*\
  !*** ./src/app/services/dottoimage.ts ***!
  \****************************************/
/*! exports provided: DotToImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotToImage", function() { return DotToImage; });
// Default impl options
var defaultOptions = {
    // Default is to fail on error, no placeholder
    imagePlaceholder: undefined,
    // Default cache bust is false, it will use the cache
    cacheBust: true
};
// const domtoimage = {
//     toSvg: toSvg,
//     toPng: toPng,
//     toJpeg: toJpeg,
//     toBlob: toBlob,
//     toPixelData: toPixelData,
//     impl: {
//         fontFaces: fontFaces,
//         images: images,
//         util: util,
//         inliner: inliner,
//         options: {}
//     }
// };
var DotToImage = /** @class */ (function () {
    function DotToImage() {
    }
    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options
     * @param {Function} options.filter - Should return true if passed node should be included in the output
     *          (excluding node means excluding it's children as well). Not called on the root node.
     * @param {String} options.bgcolor - color for the background, any valid CSS color value.
     * @param {Number} options.width - width to be applied to node before rendering.
     * @param {Number} options.height - height to be applied to node before rendering.
     * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
     * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
                defaults to 1.0.
     * @param {String} options.imagePlaceholder - dataURL to use as lt behaviour is to fail fast on images we can't fetch
     * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
     * @return {Promise} - A promise that is fulfilled with a SVG image data URL
     * */
    DotToImage.prototype.toSvg = function (node, options) {
        var _this = this;
        options = options || {};
        this.copyOptions(options);
        return Promise.resolve(node)
            .then(function (nodex) {
            return _this.cloneNode(nodex, options.filter, true);
        })
            .then(embedFonts)
            .then(inlineImages)
            .then(applyOptions)
            .then(function (clone) {
            return makeSvgDataUri(clone, options.width || util.width(node), options.height || util.height(node));
        });
        function applyOptions(clone) {
            if (options.bgcolor) {
                clone.style.backgroundColor = options.bgcolor;
            }
            if (options.width) {
                clone.style.width = options.width + 'px';
            }
            if (options.height) {
                clone.style.height = options.height + 'px';
            }
            if (options.style) {
                Object.keys(options.style).forEach(function (property) {
                    clone.style[property] = options.style[property];
                });
            }
            return clone;
        }
        function embedFonts(Fontnode) {
            return fontFaces.resolveAll()
                .then(function (cssText) {
                var styleNode = document.createElement('style');
                Fontnode.appendChild(styleNode);
                styleNode.appendChild(document.createTextNode(cssText));
                return Fontnode;
            });
        }
        function makeSvgDataUri(nodeSvg, width, height) {
            return Promise.resolve(nodeSvg)
                .then(function (nodeSvg) {
                nodeSvg.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
                return new XMLSerializer().serializeToString(nodeSvg);
            })
                .then(util.escapeXhtml)
                .then(function (xhtml) {
                return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
            })
                .then(function (foreignObject) {
                return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
                    foreignObject + '</svg>';
            })
                .then(function (svg) {
                return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
            });
        }
        function inlineImages(nodeImage) {
            return images.inlineAll(nodeImage)
                .then(function () {
                return nodeImage;
            });
        }
    };
    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image data URL
     * */
    DotToImage.prototype.toPng = function (node, options) {
        return this.draw(node, options || {})
            .then(function (canvas) {
            return canvas.toDataURL();
        });
    };
    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
     * */
    DotToImage.prototype.toJpeg = function (node, options) {
        options = options || {};
        return this.draw(node, options)
            .then(function (canvas) {
            return canvas.toDataURL('image/jpeg', options.quality || 1.0);
        });
    };
    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image blob
     * */
    DotToImage.prototype.toBlob = function (node, options) {
        return this.draw(node, options || {})
            .then(util.canvasToBlob);
    };
    DotToImage.prototype.copyOptions = function (options) {
        // Copy options to impl options for use in impl
        if (typeof (options.imagePlaceholder) === 'undefined') {
            options.imagePlaceholder = defaultOptions.imagePlaceholder;
        }
        if (typeof (options.cacheBust) === 'undefined') {
            options.cacheBust = defaultOptions.cacheBust;
        }
        return options;
    };
    DotToImage.prototype.draw = function (domNode, options) {
        return this.toSvg(domNode, options)
            .then(util.makeImage)
            .then(util.delay(100))
            .then(function (image) {
            var canvas = newCanvas(domNode);
            canvas.getContext('2d').drawImage(image, 0, 0);
            return canvas;
        });
        function newCanvas(elementNode) {
            var canvas = document.createElement('canvas');
            canvas.width = options.width || util.width(elementNode);
            canvas.height = options.height || util.height(elementNode);
            if (options.bgcolor) {
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = options.bgcolor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            return canvas;
        }
    };
    DotToImage.prototype.cloneNode = function (node, filter, root) {
        var _this = this;
        if (!root && filter && !filter(node)) {
            return Promise.resolve();
        }
        function makeNodeCopy(nodeCopy) {
            if (nodeCopy instanceof HTMLCanvasElement) {
                return util.makeImage(nodeCopy.toDataURL());
            }
            return nodeCopy.cloneNode(false);
        }
        var cloneChildren = function (original, clone, cloneFilter) {
            var children = original.childNodes;
            if (children.length === 0) {
                return Promise.resolve(clone);
            }
            var cloneChildrenInOrder = function (parent, childrenOf, filterX) {
                var done = Promise.resolve();
                childrenOf.forEach(function (child) {
                    done = done
                        .then(function () {
                        return _this.cloneNode(child, filterX);
                    })
                        .then(function (childClone) {
                        if (childClone) {
                            parent.appendChild(childClone);
                        }
                    });
                });
                return done;
            };
            return cloneChildrenInOrder(clone, util.asArray(children), cloneFilter)
                .then(function () {
                return clone;
            });
        };
        function processClone(original, clone) {
            if (!(clone instanceof Element)) {
                return clone;
            }
            return Promise.resolve()
                .then(cloneStyle)
                .then(clonePseudoElements)
                .then(copyUserInput)
                .then(fixSvg)
                .then(function () {
                return clone;
            });
            function cloneStyle() {
                copyStyle(window.getComputedStyle(original), clone.style);
                function copyStyle(source, target) {
                    if (source.cssText) {
                        target.cssText = source.cssText;
                    }
                    else {
                        copyProperties(source, target);
                    }
                    function copyProperties(sourceCopy, targetCopy) {
                        util.asArray(sourceCopy).forEach(function (name) {
                            targetCopy.setProperty(name, sourceCopy.getPropertyValue(name), sourceCopy.getPropertyPriority(name));
                        });
                    }
                }
            }
            function clonePseudoElements() {
                [':before', ':after'].forEach(function (element) {
                    clonePseudoElement(element);
                });
                function clonePseudoElement(element) {
                    var style = window.getComputedStyle(original, element);
                    var content = style.getPropertyValue('content');
                    if (content === '' || content === 'none') {
                        return;
                    }
                    var className = util.uid();
                    clone.className = clone.className + ' ' + className;
                    var styleElement = document.createElement('style');
                    styleElement.appendChild(formatPseudoElementStyle(className, element, style));
                    clone.appendChild(styleElement);
                    function formatPseudoElementStyle(className, element, style) {
                        var selector = '.' + className + ':' + element;
                        var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                        return document.createTextNode(selector + '{' + cssText + '}');
                        function formatCssText(style) {
                            var content = style.getPropertyValue('content');
                            return style.cssText + ' content: ' + content + ';';
                        }
                        function formatCssProperties(style) {
                            return util.asArray(style)
                                .map(formatProperty)
                                .join('; ') + ';';
                            function formatProperty(name) {
                                return name + ': ' +
                                    style.getPropertyValue(name) +
                                    (style.getPropertyPriority(name) ? ' !important' : '');
                            }
                        }
                    }
                }
            }
            function copyUserInput() {
                if (original instanceof HTMLTextAreaElement) {
                    clone.innerHTML = original.value;
                }
                if (original instanceof HTMLInputElement) {
                    clone.setAttribute('value', original.value);
                }
            }
            function fixSvg() {
                if (!(clone instanceof SVGElement)) {
                    return;
                }
                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                if (!(clone instanceof SVGRectElement)) {
                    return;
                }
                ['width', 'height'].forEach(function (attribute) {
                    var value = clone.getAttribute(attribute);
                    if (!value) {
                        return;
                    }
                    clone.style.setProperty(attribute, value);
                });
            }
        }
        return Promise.resolve(node)
            .then(makeNodeCopy.bind(this))
            .then(function (clone) {
            return cloneChildren.bind(_this)(node, clone, filter);
        })
            .then(function (clone) {
            return processClone.bind(_this)(node, clone);
        });
    };
    return DotToImage;
}());

function newUtil() {
    return {
        escape: escape,
        parseExtension: parseExtension,
        mimeType: mimeType,
        dataAsUrl: dataAsUrl,
        isDataUrl: isDataUrl,
        canvasToBlob: canvasToBlob,
        resolveUrl: resolveUrl,
        getAndEncode: getAndEncode,
        uid: uid(),
        delay: delay,
        asArray: asArray,
        escapeXhtml: escapeXhtml,
        makeImage: makeImage,
        width: width,
        height: height
    };
    function mimes() {
        /*
         * Only WOFF and EOT mime types for fonts are 'real'
         * see http://www.iana.org/assignments/media-types/media-types.xhtml
         */
        var WOFF = 'application/font-woff';
        var JPEG = 'image/jpeg';
        return {
            'woff': WOFF,
            'woff2': WOFF,
            'ttf': 'application/font-truetype',
            'eot': 'application/vnd.ms-fontobject',
            'png': 'image/png',
            'jpg': JPEG,
            'jpeg': JPEG,
            'gif': 'image/gif',
            'tiff': 'image/tiff',
            'svg': 'image/svg+xml'
        };
    }
    function parseExtension(url) {
        var match = /\.([^\.\/]*?)$/g.exec(url);
        if (match) {
            return match[1];
        }
        else {
            return '';
        }
    }
    function mimeType(url) {
        var extension = parseExtension(url).toLowerCase();
        return mimes()[extension] || '';
    }
    function isDataUrl(url) {
        return url.search(/^(data:)/) !== -1;
    }
    function toBlob(canvas) {
        return new Promise(function (resolve) {
            var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
            var length = binaryString.length;
            var binaryArray = new Uint8Array(length);
            for (var i = 0; i < length; i++) {
                binaryArray[i] = binaryString.charCodeAt(i);
            }
            resolve(new Blob([binaryArray], {
                type: 'image/png'
            }));
        });
    }
    function canvasToBlob(canvas) {
        if (canvas.toBlob) {
            return new Promise(function (resolve) {
                canvas.toBlob(resolve);
            });
        }
        return toBlob(canvas);
    }
    function resolveUrl(url, baseUrl) {
        var doc = document.implementation.createHTMLDocument();
        var base = doc.createElement('base');
        doc.head.appendChild(base);
        var a = doc.createElement('a');
        doc.body.appendChild(a);
        base.href = baseUrl;
        a.href = url;
        return a.href;
    }
    function uid() {
        var index = 0;
        return function () {
            return 'u' + fourRandomChars() + index++;
            function fourRandomChars() {
                /* see http://stackoverflow.com/a/6248722/2519373 */
                return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
            }
        };
    }
    function makeImage(uri) {
        return new Promise(function (resolve, reject) {
            var image = new Image();
            image.onload = function () {
                resolve(image);
            };
            image.onerror = reject;
            image.src = uri;
        });
    }
    function getAndEncode(url) {
        var TIMEOUT = 30000;
        if (defaultOptions.cacheBust) {
            // Cache bypass so we dont have CORS issues with cached images
            // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
            url += ((/\?/).test(url) ? '&' : '?') + (new Date()).getTime();
        }
        return new Promise(function (resolve) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = done;
            request.ontimeout = timeout;
            request.responseType = 'blob';
            request.timeout = TIMEOUT;
            request.open('GET', url, true);
            request.send();
            var placeholder;
            if (defaultOptions.imagePlaceholder) {
                var split = defaultOptions.imagePlaceholder.split(/,/);
                if (split && split[1]) {
                    placeholder = split[1];
                }
            }
            function done() {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status !== 200) {
                    if (placeholder) {
                        resolve(placeholder);
                    }
                    else {
                        fail('cannot fetch resource: ' + url + ', status: ' + request.status);
                    }
                    return;
                }
                var encoder = new FileReader();
                encoder.onloadend = function () {
                    var content = encoder.result.split(/,/)[1];
                    resolve(content);
                };
                encoder.readAsDataURL(request.response);
            }
            function timeout() {
                if (placeholder) {
                    resolve(placeholder);
                }
                else {
                    fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
                }
            }
            function fail(message) {
                console.error(message);
                resolve('');
            }
        });
    }
    function dataAsUrl(content, type) {
        return 'data:' + type + ';base64,' + content;
    }
    function escape(string) {
        return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
    }
    function delay(ms) {
        return function (arg) {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(arg);
                }, ms);
            });
        };
    }
    function asArray(arrayLike) {
        var array = [];
        var length = arrayLike.length;
        for (var i = 0; i < length; i++) {
            array.push(arrayLike[i]);
        }
        return array;
    }
    function escapeXhtml(string) {
        return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
    }
    function width(node) {
        var leftBorder = px(node, 'border-left-width');
        var rightBorder = px(node, 'border-right-width');
        return node.scrollWidth + leftBorder + rightBorder;
    }
    function height(node) {
        var topBorder = px(node, 'border-top-width');
        var bottomBorder = px(node, 'border-bottom-width');
        return node.scrollHeight + topBorder + bottomBorder;
    }
    function px(node, styleProperty) {
        var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
        return parseFloat(value.replace('px', ''));
    }
}
function newInliner() {
    var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;
    return {
        inlineAll: inlineAll,
        shouldProcess: shouldProcess,
        impl: {
            readUrls: readUrls,
            inline: inline
        }
    };
    function shouldProcess(string) {
        return string.search(URL_REGEX) !== -1;
    }
    function readUrls(string) {
        var result = [];
        var match;
        while ((match = URL_REGEX.exec(string)) !== null) {
            result.push(match[1]);
        }
        return result.filter(function (url) {
            return !util.isDataUrl(url);
        });
    }
    function inline(string, url, baseUrl, get) {
        return Promise.resolve(url)
            .then(function (urlx) {
            return baseUrl ? util.resolveUrl(urlx, baseUrl) : urlx;
        })
            .then(get || util.getAndEncode)
            .then(function (data) {
            return util.dataAsUrl(data, util.mimeType(url));
        })
            .then(function (dataUrl) {
            return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
        });
        function urlAsRegex(urlX) {
            return new RegExp('(url\\([\'"]?)(' + util.escape(urlX) + ')([\'"]?\\))', 'g');
        }
    }
    function inlineAll(string, baseUrl, get) {
        if (nothingToInline()) {
            return Promise.resolve(string);
        }
        return Promise.resolve(string)
            .then(readUrls)
            .then(function (urls) {
            var done = Promise.resolve(string);
            urls.forEach(function (url) {
                done = done.then(function (stringX) {
                    return inline(stringX, url, baseUrl, get);
                });
            });
            return done;
        });
        function nothingToInline() {
            return !shouldProcess(string);
        }
    }
}
function newFontFaces() {
    var readAll = function (document) {
        var selectWebFontRules = function (cssRules) {
            return cssRules
                .filter(function (rule) {
                return rule.type === CSSRule.FONT_FACE_RULE;
            })
                .filter(function (rule) {
                return inliner.shouldProcess(rule.style.getPropertyValue('src'));
            });
        };
        var getCssRules = function (styleSheets) {
            var cssRules = [];
            styleSheets.forEach(function (sheet) {
                try {
                    util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                }
                catch (e) {
                    // console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
                }
            });
            return cssRules;
        };
        var newWebFont = function (webFontRule) {
            return {
                resolve: function resolve() {
                    var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                    return inliner.inlineAll(webFontRule.cssText, baseUrl);
                },
                src: function () {
                    return webFontRule.style.getPropertyValue('src');
                }
            };
        };
        return Promise.resolve(util.asArray(document.styleSheets))
            .then(getCssRules)
            .then(selectWebFontRules)
            .then(function (rules) {
            return rules.map(newWebFont);
        });
    };
    function resolveAll() {
        return readAll(document)
            .then(function (webFonts) {
            return Promise.all(webFonts.map(function (webFont) {
                return webFont.resolve();
            }));
        })
            .then(function (cssStrings) {
            return cssStrings.join('\n');
        });
    }
    return {
        resolveAll: resolveAll,
        impl: {
            readAll: readAll
        }
    };
}
var newImages = function () {
    var newImage = function (element) {
        return {
            inline: inline
        };
        function inline(get) {
            if (util.isDataUrl(element.src)) {
                return Promise.resolve();
            }
            return Promise.resolve(element.src)
                .then(get || util.getAndEncode)
                .then(function (data) {
                return util.dataAsUrl(data, util.mimeType(element.src));
            })
                .then(function (dataUrl) {
                return new Promise(function (resolve, reject) {
                    element.onload = resolve;
                    element.onerror = reject;
                    element.src = dataUrl;
                });
            });
        }
    };
    function inlineAll(nodeInlineAll) {
        var _this = this;
        if (!(nodeInlineAll instanceof Element)) {
            return Promise.resolve(nodeInlineAll);
        }
        return inlineBackground(nodeInlineAll)
            .then(function () {
            if (nodeInlineAll instanceof HTMLImageElement) {
                return _this.newImage(nodeInlineAll).inline();
            }
            else {
                return Promise.all(util.asArray(nodeInlineAll.childNodes).map(function (child) {
                    return inlineAll(child);
                }));
            }
        });
        function inlineBackground(nodeInline) {
            var background = nodeInline.style.getPropertyValue('background');
            if (!background) {
                return Promise.resolve(nodeInline);
            }
            return inliner.inlineAll(background)
                .then(function (inlined) {
                nodeInline.style.setProperty('background', inlined, nodeInline.style.getPropertyPriority('background'));
            })
                .then(function () {
                return nodeInline;
            });
        }
    }
    return {
        inlineAll: inlineAll,
        impl: {
            newImage: newImage
        }
    };
};
var util = newUtil();
var inliner = newInliner();
var fontFaces = newFontFaces();
var images = newImages();


/***/ }),

/***/ "./src/app/services/filter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/filter.service.ts ***!
  \********************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterService = /** @class */ (function () {
    function FilterService() {
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._on = false;
    }
    FilterService.prototype.toggleFilter = function () {
        this._on = !this._on;
        this.filter.emit(this._on);
    };
    FilterService.prototype.showFilter = function () {
        this.filter.emit(true);
    };
    FilterService.prototype.hideFilter = function () {
        this.filter.emit(false);
    };
    FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/services/history.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/history.service.ts ***!
  \*********************************************/
/*! exports provided: PreviousRouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousRouteService", function() { return PreviousRouteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PreviousRouteService = /** @class */ (function () {
    function PreviousRouteService(router) {
        var _this = this;
        this.router = router;
        this.currentUrl = this.router.url;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.previousUrl = _this.currentUrl;
                _this.currentUrl = event.url;
            }
        });
    }
    PreviousRouteService.prototype.getPreviousUrl = function () {
        return this.previousUrl;
    };
    PreviousRouteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PreviousRouteService);
    return PreviousRouteService;
}());



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
        this.languages.push({ key: 'en', lcid: 1025, name: 'English', dir: 'ltr', subset: 'latin' });
        this.languages.push({ key: 'he', lcid: 1037, name: 'עברית', dir: 'rtl', subset: 'hebrew' });
        // this.languages.push({ key: 'de', lcid: 1037, name: 'Dutche', dir: 'ltr', subset: 'latin' });
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

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.waiting = [];
        this.subs = {};
    }
    LoaderService.prototype.setBusy = function (name) {
        if (name === void 0) { name = 'main'; }
        if (!this.subs[name]) {
            this.waiting.push({ name: name, state: true });
        }
        else {
            var emitter = this.validateEmitter(name);
            emitter.emit(true);
        }
        console.log('setBusy', name);
    };
    LoaderService.prototype.clearBusy = function (name) {
        if (name === void 0) { name = 'main'; }
        var emitter = this.validateEmitter(name);
        emitter.emit(false);
    };
    LoaderService.prototype.sync = function () {
        var _this = this;
        this.waiting.forEach(function (waitingItem) {
            _this.subs[waitingItem.name].emit(waitingItem.state);
        });
        this.waiting = [];
    };
    LoaderService.prototype.getSubscription = function (name) {
        return this.validateEmitter(name);
    };
    LoaderService.prototype.validateEmitter = function (name) {
        if (!this.subs[name]) {
            this.subs[name] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        return this.subs[name];
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
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

/***/ "./src/app/services/responsive.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/responsive.service.ts ***!
  \************************************************/
/*! exports provided: ResponsiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveService", function() { return ResponsiveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var ResponsiveService = /** @class */ (function () {
    function ResponsiveService(translate) {
        this.translate = translate;
    }
    ResponsiveService.prototype.toggle = function (state) {
        this.responsive = state;
    };
    ResponsiveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ResponsiveService);
    return ResponsiveService;
}());



/***/ }),

/***/ "./src/app/services/scroll.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/scroll.service.ts ***!
  \********************************************/
/*! exports provided: ScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollService", function() { return ScrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/fesm5/ngx-page-scroll-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var ScrollService = /** @class */ (function () {
    function ScrollService(pageScrollService, document) {
        this.pageScrollService = pageScrollService;
        this.document = document;
    }
    ScrollService.prototype.scrollTo = function (elementSelector) {
        this.pageScrollService.scroll({
            document: this.document,
            scrollTarget: elementSelector,
        });
    };
    ScrollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__["PageScrollService"], Object])
    ], ScrollService);
    return ScrollService;
}());



/***/ }),

/***/ "./src/app/services/tour.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tour.service.ts ***!
  \******************************************/
/*! exports provided: TourService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourService", function() { return TourService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_joyride__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-joyride */ "./node_modules/ngx-joyride/esm5/ngx-joyride.esm.js");



var TourService = /** @class */ (function () {
    function TourService(joyrideService) {
        this.joyrideService = joyrideService;
        // (
        //   { steps: ['welcome', 'screens@/dashboard/screen/screens', 'screengroups@/dashboard/screen/screen-group'] } // Your steps order
        // );
        this.tours = {
            welcome: ['welcome'],
            screengroups: ['screengroups@/dashboard/screen/screen-group', 'lobby-add', 'group-name', 'save'],
            screens: ['screens@/dashboard/screen/screens', 'lobby-add', 'screen-name', 'screen-group', 'save'],
        };
        this.tour = {
            logsEnabled: true,
            steps: this.tours.welcome.concat(this.tours.screengroups, this.tours.screens)
        };
    }
    TourService.prototype.start = function () {
        this.joyrideService.startTour(this.tour);
    };
    TourService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_joyride__WEBPACK_IMPORTED_MODULE_2__["JoyrideService"]])
    ], TourService);
    return TourService;
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
    UserService.prototype.clear = function () {
        localStorage.removeItem('token');
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
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_language_dictionary_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/language/dictionary.service */ "./src/app/services/language/dictionary.service.ts");
/* harmony import */ var _services_name_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/name.service */ "./src/app/services/name.service.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/fesm5/angular2-draggable.js");
/* harmony import */ var _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/language-bar/language-bar.component */ "./src/app/common/language-bar/language-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./library/finder/finder.component */ "./src/app/library/finder/finder.component.ts");
/* harmony import */ var _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/slide-header/slide-header.component */ "./src/app/common/slide-header/slide-header.component.ts");
/* harmony import */ var _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/slide-footer/slide-footer.component */ "./src/app/common/slide-footer/slide-footer.component.ts");
/* harmony import */ var _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/lobby/lobby.component */ "./src/app/common/lobby/lobby.component.ts");
/* harmony import */ var _directives_adapt_height__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/adapt-height */ "./src/app/directives/adapt-height.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./editor/canvas/canvas.component */ "./src/app/editor/canvas/canvas.component.ts");
/* harmony import */ var _player_slide_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../player/slide.service */ "./src/player/slide.service.ts");
/* harmony import */ var _directives_stop_prop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/stop-prop */ "./src/app/directives/stop-prop.ts");
/* harmony import */ var _common_lobby_item_lobby_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./common/lobby.item/lobby.item.component */ "./src/app/common/lobby.item/lobby.item.component.ts");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/dirty.service */ "./src/app/services/dirty.service.ts");
/* harmony import */ var _directives_adapt_width__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/adapt-width */ "./src/app/directives/adapt-width.ts");
/* harmony import */ var _services_responsive_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/responsive.service */ "./src/app/services/responsive.service.ts");
/* harmony import */ var _common_change_change_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./common/change/change.component */ "./src/app/common/change/change.component.ts");
/* harmony import */ var _directives_change_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./directives/change.directive */ "./src/app/directives/change.directive.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _pipes_order_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/order.pipe */ "./src/app/pipes/order.pipe.ts");
/* harmony import */ var _services_history_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/history.service */ "./src/app/services/history.service.ts");
/* harmony import */ var _media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./media-preview/media-preview.component */ "./src/app/media-preview/media-preview.component.ts");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _directives_resizable_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./directives/resizable.directive */ "./src/app/directives/resizable.directive.ts");
/* harmony import */ var ngx_joyride__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-joyride */ "./node_modules/ngx-joyride/esm5/ngx-joyride.esm.js");
/* harmony import */ var _services_tour_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/tour.service */ "./src/app/services/tour.service.ts");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/scroll.service */ "./src/app/services/scroll.service.ts");
/* harmony import */ var angular_md2__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! angular-md2 */ "./node_modules/angular-md2/fesm5/angular-md2.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./common/loader/loader.component */ "./src/app/common/loader/loader.component.ts");











































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
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAccordionModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_18__["DragulaModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_19__["ColorPickerModule"],
                angular_md2__WEBPACK_IMPORTED_MODULE_38__["Md2Module"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["FileDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"].forRoot(),
                angular2_hotkeys__WEBPACK_IMPORTED_MODULE_8__["HotkeyModule"].forRoot(),
                ngx_joyride__WEBPACK_IMPORTED_MODULE_35__["JoyrideModule"].forChild(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_39__["NgxPaginationModule"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_9__["AngularDraggableModule"]
            ],
            declarations: [_editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_20__["CanvasComponent"],
                _directives_adapt_height__WEBPACK_IMPORTED_MODULE_17__["AdaptHeightDirective"],
                _directives_resizable_directive__WEBPACK_IMPORTED_MODULE_34__["ResizableDirective"],
                _directives_adapt_width__WEBPACK_IMPORTED_MODULE_25__["AdaptWidthDirective"],
                _directives_stop_prop__WEBPACK_IMPORTED_MODULE_22__["ClickStopPropagationDirective"],
                _directives_change_directive__WEBPACK_IMPORTED_MODULE_28__["DetectChangesDirective"],
                _common_change_change_component__WEBPACK_IMPORTED_MODULE_27__["ChangeComponent"],
                _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_10__["LanguageBarComponent"],
                _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_13__["FinderComponent"],
                _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_14__["SlideHeaderComponent"],
                _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_15__["SlideFooterComponent"],
                _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_16__["LobbyComponent"],
                _common_lobby_item_lobby_item_component__WEBPACK_IMPORTED_MODULE_23__["LobbyItemComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_29__["FilterPipe"],
                _pipes_order_pipe__WEBPACK_IMPORTED_MODULE_30__["OrderPipe"],
                _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_41__["LoaderComponent"],
                _media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_32__["MediaPreviewComponent"]],
            providers: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
                _services_language_dictionary_service__WEBPACK_IMPORTED_MODULE_5__["DictionaryService"],
                _services_name_service__WEBPACK_IMPORTED_MODULE_6__["NameService"],
                _player_slide_service__WEBPACK_IMPORTED_MODULE_21__["SlideService"],
                _services_dirty_service__WEBPACK_IMPORTED_MODULE_24__["DirtyService"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"],
                _services_responsive_service__WEBPACK_IMPORTED_MODULE_26__["ResponsiveService"],
                _services_history_service__WEBPACK_IMPORTED_MODULE_31__["PreviousRouteService"],
                angular2_hotkeys__WEBPACK_IMPORTED_MODULE_8__["HotkeysService"],
                _services_filter_service__WEBPACK_IMPORTED_MODULE_33__["FilterService"],
                _services_tour_service__WEBPACK_IMPORTED_MODULE_36__["TourService"],
                _services_scroll_service__WEBPACK_IMPORTED_MODULE_37__["ScrollService"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
                _services_loader_service__WEBPACK_IMPORTED_MODULE_40__["LoaderService"],
            ],
            exports: [
                _editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_20__["CanvasComponent"],
                _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_10__["LanguageBarComponent"],
                _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_16__["LobbyComponent"],
                _common_lobby_item_lobby_item_component__WEBPACK_IMPORTED_MODULE_23__["LobbyItemComponent"],
                _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_13__["FinderComponent"],
                _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_14__["SlideHeaderComponent"],
                _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_15__["SlideFooterComponent"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["FileDropModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_19__["ColorPickerModule"],
                _directives_adapt_height__WEBPACK_IMPORTED_MODULE_17__["AdaptHeightDirective"],
                _directives_adapt_width__WEBPACK_IMPORTED_MODULE_25__["AdaptWidthDirective"],
                _directives_resizable_directive__WEBPACK_IMPORTED_MODULE_34__["ResizableDirective"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_9__["AngularDraggableModule"],
                _directives_change_directive__WEBPACK_IMPORTED_MODULE_28__["DetectChangesDirective"],
                _common_change_change_component__WEBPACK_IMPORTED_MODULE_27__["ChangeComponent"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAccordion"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanel"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelContent"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelTitle"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_18__["DragulaDirective"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_29__["FilterPipe"],
                _pipes_order_pipe__WEBPACK_IMPORTED_MODULE_30__["OrderPipe"],
                _media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_32__["MediaPreviewComponent"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                angular2_hotkeys__WEBPACK_IMPORTED_MODULE_8__["HotkeyModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_39__["NgxPaginationModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"],
                angular_md2__WEBPACK_IMPORTED_MODULE_38__["Md2Module"],
                _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_41__["LoaderComponent"],
            ],
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
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_4__);
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

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/player/player.component.html":
/*!******************************************!*\
  !*** ./src/player/player.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{bodyClass}} {{bodyStateClass}}\">\r\n    <div class=\"counter\" #counter></div>\r\n    <div class=\"screenDicator\" #screenDicator></div>\r\n    <label *ngIf=\"!playerPlan\" class=\"huge\">{{Token}}</label>\r\n\r\n    <div class=\"screen\">\r\n        <div id=\"animation_container\">\r\n            <div #gridObject id=\"gridObject\" style=\"position: absolute;height: 100%;width: 100%;\"></div>\r\n            <canvas #playerCanvas id=\"playerCanvas\" width=\"100%\" height=\"100%\"\r\n                style=\"position: absolute; display: block; background-color:rgba(0, 0, 0, 1.00);\"></canvas>\r\n            <iframe class=\"frame\" #playerIframe></iframe>\r\n            <div #playerEmbed>\r\n                <div id=\"playerEmbedInner\"></div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/player/player.component.scss":
/*!******************************************!*\
  !*** ./src/player/player.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white {\n  color: white; }\n\n.screen {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.not-active .screen {\n  top: 1000000px; }\n\n#playerCanvas {\n  width: 100%;\n  height: 100%; }\n\n.huge {\n  font-size: 70px;\n  padding: 40px;\n  border: 1px solid rgba(6, 19, 19, 0.932);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -400px;\n  width: 800px;\n  height: 200px;\n  text-align: center;\n  font-family: 'Montserrat', 'Roboto', sans-serif;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.counter {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2000;\n  font-size: 36px;\n  color: #fff;\n  background-color: #000; }\n\n.screenDicator {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 2000;\n  font-size: 36px;\n  color: #fff;\n  background-color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5ZXIvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xccGxheWVyXFxwbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxZQUFZLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFRO0VBQ1IsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFJWDtFQUVJLGNBQWMsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVkO0VBQ0ksZUFBZTtFQUNmLGFBQVk7RUFDWix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwrQ0FBK0M7RUFDL0MsMENBQTBDLEVBQUE7O0FBSTVDO0VBQ0Usa0JBQWlCO0VBQ2pCLE1BQUs7RUFDTCxRQUFPO0VBQ1AsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBSXhCO0VBQ0Usa0JBQWlCO0VBQ2pCLFNBQVE7RUFDUixRQUFPO0VBQ1AsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUge2NvbG9yOiB3aGl0ZTt9XHJcbiBcclxuLnNjcmVlbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0IDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiBcclxufVxyXG5cclxuLm5vdC1hY3RpdmV7XHJcbiAgLnNjcmVlbntcclxuICAgIHRvcDogMTAwMDAwMHB4O1xyXG4gIH1cclxufVxyXG4jcGxheWVyQ2FudmFze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uaHVnZSB7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBwYWRkaW5nOjQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYsIDE5LCAxOSwgMC45MzIpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQwMHB4O1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cclxuICB9XHJcblxyXG4gIC5jb3VudGVye1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIH1cclxuXHJcblxyXG4gIC5zY3JlZW5EaWNhdG9ye1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBib3R0b206MDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _slide_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slide.service */ "./src/player/slide.service.ts");






var log = console.log;
var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(slideService, translate, _ngZone, router, route, changeDetector) {
        this.slideService = slideService;
        this.translate = translate;
        this._ngZone = _ngZone;
        this.router = router;
        this.route = route;
        this.changeDetector = changeDetector;
        this.title = 'SignNature';
        this.Token = '';
        this.bodyClass = 'body-token';
        this.bodyStateClass = 'not-active';
    }
    PlayerComponent.prototype.paint = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var width, height, ctx;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                width = window.innerWidth
                    || document.documentElement.clientWidth
                    || document.body.clientWidth;
                height = window.innerHeight
                    || document.documentElement.clientHeight
                    || document.body.clientHeight;
                this.playerCanvas.first.nativeElement.width = width;
                this.playerCanvas.first.nativeElement.height = height;
                this.playerIframe.first.nativeElement.style.width = width + 'px';
                this.playerIframe.first.nativeElement.style.height = height + 'px';
                this.playerEmbed.first.nativeElement.width = width;
                this.playerEmbed.first.nativeElement.height = height;
                this.surfaces = {
                    grid: this.gridObject.first.nativeElement,
                    canvas: this.playerCanvas.first.nativeElement,
                    iframe: this.playerIframe.first.nativeElement,
                    embed: this.playerEmbed.first.nativeElement,
                    counter: this.playerCounter.first.nativeElement,
                    screenDicator: this.screenDicator.first.nativeElement,
                };
                this.surfaces.screenDicator.innerHTML = width + "*" + height;
                ctx = this.surfaces.canvas.getContext('2d');
                this.slideService.play(this.surfaces, this.playerPlan, ctx, width, height);
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
                        log('@updatePlayerPlan');
                        _a = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["PlayerController"].runPlayer(this.playerInfo.Group._id)];
                    case 1:
                        _a.playerPlan = _b.sent();
                        return [4 /*yield*/, this.slideService.updatePlayerPlan(this.playerPlan)];
                    case 2:
                        _b.sent();
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
                            // setInterval(this.getPlayerPlan.bind(this), 1000 * 30);
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
                            this.bodyStateClass = 'not-active';
                            setTimeout(this.validateScreen.bind(this), 10 * 1000);
                        }
                        else {
                            this.bodyStateClass = 'active';
                            localStorage.setItem('playerInfo', JSON.stringify(playerInformation));
                            this.playerInfo = playerInformation;
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
                    case 0:
                        log('@registerScreen');
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["PlayerController"].registerPlayer(this.Token)];
                    case 1:
                        _a.sent();
                        setTimeout(this.validateScreen.bind(this), 10 * 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerComponent.prototype.makeid = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    PlayerComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var str;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log('@start player');
                        str = localStorage.getItem('playerInfo');
                        if (!str) return [3 /*break*/, 2];
                        this.playerInfo = JSON.parse(str);
                        return [4 /*yield*/, this.getPlayerPlan()];
                    case 1:
                        _a.sent();
                        this.bodyStateClass = 'active';
                        return [3 /*break*/, 3];
                    case 2:
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
                                    else {
                                        this.router.navigate([this.makeid()]);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('gridObject'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayerComponent.prototype, "gridObject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('playerCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayerComponent.prototype, "playerCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('playerIframe'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayerComponent.prototype, "playerIframe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('playerEmbed'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayerComponent.prototype, "playerEmbed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('counter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayerComponent.prototype, "playerCounter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('screenDicator'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayerComponent.prototype, "screenDicator", void 0);
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'player-root',
            template: __webpack_require__(/*! ./player.component.html */ "./src/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/player/player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_slide_service__WEBPACK_IMPORTED_MODULE_5__["SlideService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
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
/* harmony import */ var _app_editor_fonts_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app/editor/fonts.service */ "./src/app/editor/fonts.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./root.component */ "./src/player/root.component.ts");
/* harmony import */ var _app_services_user_context_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../app/services/user.context.service */ "./src/app/services/user.context.service.ts");




// import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';















// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http);
}



var appRoutes = [
    { path: '', pathMatch: 'full', component: _player_component__WEBPACK_IMPORTED_MODULE_10__["PlayerComponent"] },
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
                _root_component__WEBPACK_IMPORTED_MODULE_20__["PlayerEntryComponent"],
            ],
            providers: [
                _slide_service__WEBPACK_IMPORTED_MODULE_16__["SlideService"],
                _app_editor_fonts_service__WEBPACK_IMPORTED_MODULE_17__["FontsService"],
                _app_services_user_context_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
            ],
            imports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"]]
                    }
                }),
                _app_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes, { enableTracing: false, useHash: true } // <-- debugging purposes only
                ),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_7__["SortableModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                angular2_loaders_css__WEBPACK_IMPORTED_MODULE_12__["LoadersCssModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_dynamic_forms_ui_bootstrap__WEBPACK_IMPORTED_MODULE_6__["DynamicFormsBootstrapUIModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            bootstrap: [_root_component__WEBPACK_IMPORTED_MODULE_20__["PlayerEntryComponent"]]
        })
    ], PlayerModule);
    return PlayerModule;
}());



/***/ }),

/***/ "./src/player/renderers/canvas.ts":
/*!****************************************!*\
  !*** ./src/player/renderers/canvas.ts ***!
  \****************************************/
/*! exports provided: CanvasRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasRenderer", function() { return CanvasRenderer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var image_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! image-promise */ "./node_modules/image-promise/dist/image-promise.common-js.js");
/* harmony import */ var image_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(image_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _createjs_easeljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @createjs/easeljs */ "./node_modules/@createjs/easeljs/src/main.js");
/* harmony import */ var youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! youtube-player */ "./node_modules/youtube-player/dist/index.js");
/* harmony import */ var youtube_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(youtube_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_services_dottoimage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/dottoimage */ "./src/app/services/dottoimage.ts");





var Eval = eval;
var log = console.log;
var CanvasRenderer = /** @class */ (function () {
    function CanvasRenderer(surfaces, fontService, playerPlan, ctx, width, height, mode) {
        this.surfaces = surfaces;
        this.fontService = fontService;
        this.playerPlan = playerPlan;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.mode = mode;
        this.start = new Date();
        this.images = [];
        this.itemIndex = 0;
    }
    CanvasRenderer.prototype.factorPosition = function (screen, x, y) {
        return { x: x * (this.width / screen.width), y: y * (this.height / screen.height) };
    };
    CanvasRenderer.prototype.factor = function (screen, x, y) {
        if (!y) {
            return Math.floor(x * (this.width / screen.width));
        }
        else {
            return { x: x * (this.width / screen.width), y: y * (this.height / screen.height) };
        }
    };
    CanvasRenderer.prototype.prerender = function (item, duration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _a;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (item.elements) {
                                        item.type = 'slide';
                                    }
                                    if (!item.MediaType) return [3 /*break*/, 8];
                                    _a = item.MediaType;
                                    switch (_a) {
                                        case 'image': return [3 /*break*/, 1];
                                        case 'video': return [3 /*break*/, 3];
                                        case 'url': return [3 /*break*/, 5];
                                    }
                                    return [3 /*break*/, 7];
                                case 1: return [4 /*yield*/, this.render_fullimage_to_canvas(item.resource, 0, 0, this.width, this.height)];
                                case 2:
                                    _b.sent();
                                    return [3 /*break*/, 7];
                                case 3: return [4 /*yield*/, this.render_embededPlayer(item.Embed, 0, 0, this.width, this.height)];
                                case 4:
                                    _b.sent();
                                    return [3 /*break*/, 7];
                                case 5: return [4 /*yield*/, this.render_frame(item.Url, 0, 0, this.width, this.height)];
                                case 6:
                                    _b.sent();
                                    return [3 /*break*/, 7];
                                case 7: return [3 /*break*/, 10];
                                case 8: return [4 /*yield*/, this.renderElementsToTags(item)];
                                case 9:
                                    _b.sent();
                                    _b.label = 10;
                                case 10:
                                    this.startCounter(duration);
                                    setTimeout(function () {
                                        if (_this.ytPlayer) {
                                            _this.ytPlayer.stopVideo();
                                        }
                                        resolve();
                                    }, duration);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CanvasRenderer.prototype.render_frame = function (url, x, y, width, height) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.surfaces.iframe.onLoad = function () {
                };
                this.surfaces.iframe.src = url;
                this.surfaces.iframe.style.display = 'inline-block';
                this.surfaces.canvas.style.display = 'none';
                this.surfaces.embed.style.display = 'none';
                return [2 /*return*/];
            });
        });
    };
    CanvasRenderer.prototype.render_embededPlayer = function (embed, x, y, width, height) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this.surfaces.embed.innerHTML = "<div id=\"playerEmbedInner\" style=\"position:absolute;top:" + y + "px;left:" + x + "px;\"></div>";
                            _this.ytPlayer = youtube_player__WEBPACK_IMPORTED_MODULE_3___default()('playerEmbedInner', {
                                width: width,
                                height: height,
                            });
                            // 'loadVideoById' is queued until the player is ready to receive API calls.
                            _this.ytPlayer.loadVideoById(embed);
                            // 'playVideo' is queue until the player is ready to received API calls and after 'loadVideoById' has been called.
                            _this.ytPlayer.playVideo().then(function (data) {
                                _this.surfaces.embed.style.display = 'inline-block';
                                _this.surfaces.canvas.style.display = 'none';
                                _this.surfaces.iframe.style.display = 'none';
                                resolve();
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CanvasRenderer.prototype.startCounter = function (duration) {
        var _this = this;
        var counterInterval = setInterval(function () {
            if (_this.surfaces.counter) {
                _this.surfaces.counter.innerHTML = duration / 1000;
            }
            duration -= 1000;
            if (duration === 0) {
                clearInterval(counterInterval);
            }
        }, 1000);
    };
    CanvasRenderer.prototype.playDefaultPlan = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.ctx.font = "120px arial";
                this.ctx.fillStyle = "red";
                this.ctx.fillText('Nothing to play', this.width / 4, this.height / 2);
                return [2 /*return*/];
            });
        });
    };
    CanvasRenderer.prototype.render_fullimage_to_canvas = function (url, x, y, _width, _height) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                log('@slide.service-render_fullimage_to_canvas');
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var img;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, image_promise__WEBPACK_IMPORTED_MODULE_1___default()([url])];
                                case 1:
                                    img = _a.sent();
                                    if (img.length && img.length > 0) {
                                        img = img[0];
                                    }
                                    if (img) {
                                        img.width = this.ctx.canvas.width;
                                        img.height = this.ctx.canvas.height;
                                        this.images.push(img);
                                        this.ctx.clearRect(0, 0, _width, _height);
                                        this.ctx.drawImage(img, x, y, _width, _height);
                                    }
                                    resolve(img);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CanvasRenderer.prototype.render_image_to_canvas = function (item, element) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, x, y, _width, _height;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                url = element.src;
                x = element.position.x;
                y = element.position.y;
                _width = element.width;
                _height = element.height;
                log('@slide.service-render_image_to_canvas');
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var img, sizes, positions;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, image_promise__WEBPACK_IMPORTED_MODULE_1___default()([url])];
                                case 1:
                                    img = _a.sent();
                                    if (img && img.length && img.length > 0) {
                                        img = img[0];
                                    }
                                    this.images.push(img);
                                    sizes = this.factor(item.Screen, _width, _height);
                                    positions = this.factorPosition(item.Screen, x, y);
                                    this.ctx.save();
                                    if (element.opacity) {
                                        this.ctx.globalAlpha = element.opacity;
                                    }
                                    if (element.rotation) {
                                        this.ctx.translate(positions.x + (sizes.x / 2), positions.y + (sizes.y / 2));
                                        this.ctx.rotate(element.rotation * Math.PI / 180);
                                        this.ctx.translate(-(sizes.x / 2), -(sizes.y / 2));
                                    }
                                    this.ctx.drawImage(img, positions.x, positions.y, sizes.x, sizes.y);
                                    this.ctx.restore();
                                    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                                    resolve(img);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CanvasRenderer.prototype.renderElementsToTags = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var shape, index, element, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.stage.clear(0, 0, this.stage.canvas.width, this.stage.canvas.height);
                        if (item.bgColor) {
                            shape = new _createjs_easeljs__WEBPACK_IMPORTED_MODULE_2__["Shape"]();
                            shape.graphics.beginFill(item.bgColor).drawRect(0, 0, this.width, this.height);
                            this.stage.addChild(shape);
                            this.stage.update();
                        }
                        if (item.script && this.mode !== 'single') {
                            Eval(item.script);
                            Eval(item.player);
                            return [2 /*return*/];
                        }
                        item.elements.sort(function (a, b) {
                            return a.zIndex - b.zIndex;
                        });
                        index = 0;
                        _b.label = 1;
                    case 1:
                        if (!(index < item.elements.length)) return [3 /*break*/, 8];
                        element = item.elements[index];
                        _a = element.type;
                        switch (_a) {
                            case 'image': return [3 /*break*/, 2];
                            case 'text': return [3 /*break*/, 4];
                            case 'video': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 2: return [4 /*yield*/, this.render_image_to_canvas(item, element)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        this.render_text_to_canvas(item, element);
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.render_embededPlayer(element.embed, element.position.x, element.position.y, element.width, element.height)];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 7:
                        index++;
                        return [3 /*break*/, 1];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    CanvasRenderer.prototype.render_text_to_canvas = function (item, element) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dotToImage, fontFactor, x, y, _width, _height, sizes, positions_1, node, imageBlob, img_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log('@slide.service-render_text_to_canvas');
                        if (!element.text) return [3 /*break*/, 2];
                        dotToImage = new _app_services_dottoimage__WEBPACK_IMPORTED_MODULE_4__["DotToImage"]();
                        fontFactor = this.factor(item.Screen, element.fontSize);
                        x = element.position.x;
                        y = element.position.y;
                        _width = element.width;
                        _height = element.height;
                        sizes = this.factor(item.Screen, _width, _height);
                        positions_1 = this.factorPosition(item.Screen, x, y);
                        node = this.surfaces.grid;
                        node.innerHTML = element.text;
                        node.style.textAlign = element.align;
                        node.style.color = element.color;
                        node.style.fontFamily = element.font;
                        node.style.fontSize = element.fontSize + 'px';
                        return [4 /*yield*/, dotToImage.toSvg(node)];
                    case 1:
                        imageBlob = _a.sent();
                        img_1 = new Image();
                        img_1.onload = function () {
                            _this.ctx.save();
                            _this.ctx.drawImage(img_1, positions_1.x, positions_1.y, img_1.width, img_1.height);
                            _this.ctx.restore();
                        };
                        img_1.src = imageBlob;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    CanvasRenderer.prototype.playScreenError = function () {
        this.ctx.font = "120px arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText('Screen error', this.width, this.height);
    };
    CanvasRenderer.prototype.play = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var frameDuration;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.surfaces.embed) {
                            this.surfaces.embed.style.display = 'none';
                        }
                        this.stage = new _createjs_easeljs__WEBPACK_IMPORTED_MODULE_2__["Stage"](this.ctx.canvas);
                        if (this.mode === 'single') {
                            // await this.fontService.loadFontsForRender(this.playerPlan[0].fonts);
                            this.prerender(this.playerPlan[0], 0);
                            return [2 /*return*/];
                        }
                        else {
                            if (!this.playerPlan || this.playerPlan.length === 0) {
                                this.playDefaultPlan();
                                return [2 /*return*/];
                            }
                        }
                        if (!(this.mode !== 'single')) return [3 /*break*/, 3];
                        this.list = this.playerPlan[0].list;
                        frameDuration = (this.list[this.itemIndex].duration) ? this.list[this.itemIndex].duration * 1000 : 5000;
                        _a.label = 1;
                    case 1:
                        if (false) {}
                        // await this.fontService.loadFontsForRender(this.list[this.itemIndex].fonts);
                        return [4 /*yield*/, this.prerender(this.list[this.itemIndex], frameDuration)];
                    case 2:
                        // await this.fontService.loadFontsForRender(this.list[this.itemIndex].fonts);
                        _a.sent();
                        this.itemIndex++;
                        if (this.itemIndex === this.list.length) {
                            this.itemIndex = 0;
                        }
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CanvasRenderer;
}());



/***/ }),

/***/ "./src/player/renderers/html.ts":
/*!**************************************!*\
  !*** ./src/player/renderers/html.ts ***!
  \**************************************/
/*! exports provided: HtmlRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlRenderer", function() { return HtmlRenderer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var image_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! image-promise */ "./node_modules/image-promise/dist/image-promise.common-js.js");
/* harmony import */ var image_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(image_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _createjs_easeljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @createjs/easeljs */ "./node_modules/@createjs/easeljs/src/main.js");
/* harmony import */ var youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! youtube-player */ "./node_modules/youtube-player/dist/index.js");
/* harmony import */ var youtube_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(youtube_player__WEBPACK_IMPORTED_MODULE_3__);




var Eval = eval;
var log = console.log;
var HtmlRenderer = /** @class */ (function () {
    function HtmlRenderer(surfaces, fontService, playerPlan, ctx, width, height, mode) {
        this.surfaces = surfaces;
        this.fontService = fontService;
        this.playerPlan = playerPlan;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.mode = mode;
        this.start = new Date();
        this.images = [];
        this.itemIndex = 0;
    }
    HtmlRenderer.prototype.factorPosition = function (screen, x, y, width, height) {
        return { x: x * (width / screen.width), y: y * (height / screen.height) };
    };
    HtmlRenderer.prototype.factor = function (screen, x, y) {
        if (!y) {
            return Math.floor(x * (this.width / screen.width));
        }
        else {
            return { x: x * (this.width / screen.width), y: y * (this.height / screen.height) };
        }
    };
    HtmlRenderer.prototype.prerender = function (item, duration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.surfaces.iframe.style.display = 'none';
                this.surfaces.canvas.style.display = 'none';
                this.surfaces.grid.style.display = 'inline-block';
                // this.surfaces.grid.style.width = '100%';
                // this.surfaces.grid.style.height = '100%';
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _a;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (item.elements) {
                                        item.type = 'slide';
                                    }
                                    if (!item.MediaType) return [3 /*break*/, 8];
                                    _a = item.MediaType;
                                    switch (_a) {
                                        case 'image': return [3 /*break*/, 1];
                                        case 'video': return [3 /*break*/, 3];
                                        case 'url': return [3 /*break*/, 5];
                                    }
                                    return [3 /*break*/, 7];
                                case 1: return [4 /*yield*/, this.render_fullimage_to_canvas(item.resource, 0, 0, this.width, this.height)];
                                case 2:
                                    _b.sent();
                                    return [3 /*break*/, 7];
                                case 3: return [4 /*yield*/, this.render_embededPlayer(item.Embed, 0, 0, this.width, this.height)];
                                case 4:
                                    _b.sent();
                                    return [3 /*break*/, 7];
                                case 5: return [4 /*yield*/, this.render_frame(item.Url, 0, 0, this.width, this.height)];
                                case 6:
                                    _b.sent();
                                    return [3 /*break*/, 7];
                                case 7: return [3 /*break*/, 10];
                                case 8: return [4 /*yield*/, this.renderElementsToTags(item, this.surfaces)];
                                case 9:
                                    _b.sent();
                                    _b.label = 10;
                                case 10:
                                    this.startCounter(duration);
                                    setTimeout(function () {
                                        if (_this.ytPlayer) {
                                            _this.ytPlayer.stopVideo();
                                        }
                                        resolve();
                                    }, duration);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    HtmlRenderer.prototype.render_frame = function (url, x, y, width, height) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.surfaces.iframe.onLoad = function () {
                };
                this.surfaces.iframe.src = url;
                this.surfaces.iframe.style.display = 'inline-block';
                this.surfaces.canvas.style.display = 'none';
                this.surfaces.embed.style.display = 'none';
                return [2 /*return*/];
            });
        });
    };
    HtmlRenderer.prototype.render_embededPlayer = function (embed, x, y, width, height) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.surfaces.embed) {
                        }
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.surfaces.embed.innerHTML = "<div id=\"playerEmbedInner\" style=\"position:absolute;top:" + y + "px;left:" + x + "px;\"></div>";
                                _this.ytPlayer = youtube_player__WEBPACK_IMPORTED_MODULE_3___default()('playerEmbedInner', {
                                    width: width,
                                    height: height,
                                });
                                // 'loadVideoById' is queued until the player is ready to receive API calls.
                                _this.ytPlayer.loadVideoById(embed);
                                // 'playVideo' is queue until the player is ready to received API calls and after 'loadVideoById' has been called.
                                _this.ytPlayer.playVideo().then(function (data) {
                                    _this.surfaces.embed.style.display = 'inline-block';
                                    _this.surfaces.canvas.style.display = 'none';
                                    _this.surfaces.iframe.style.display = 'none';
                                    resolve();
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HtmlRenderer.prototype.startCounter = function (duration) {
        var _this = this;
        var counterInterval = setInterval(function () {
            if (_this.surfaces.counter) {
                _this.surfaces.counter.innerHTML = duration / 1000;
            }
            duration -= 1000;
            if (duration === 0) {
                clearInterval(counterInterval);
            }
        }, 1000);
    };
    HtmlRenderer.prototype.playDefaultPlan = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.ctx.font = "120px arial";
                this.ctx.fillStyle = "red";
                this.ctx.fillText('Nothing to play', this.width / 4, this.height / 2);
                return [2 /*return*/];
            });
        });
    };
    HtmlRenderer.prototype.render_fullimage_to_canvas = function (url, x, y, _width, _height) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                log('@slide.service-render_fullimage_to_canvas');
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var img;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, image_promise__WEBPACK_IMPORTED_MODULE_1___default()([url])];
                                case 1:
                                    img = _a.sent();
                                    if (img.length && img.length > 0) {
                                        img = img[0];
                                    }
                                    if (img) {
                                        img.width = this.ctx.canvas.width;
                                        img.height = this.ctx.canvas.height;
                                        this.images.push(img);
                                        img.style.position = 'absolute';
                                        img.style.top = 0;
                                        img.style.left = 0;
                                        this.surfaces.grid.innerHTML = '';
                                        this.surfaces.grid.appendChild(img);
                                    }
                                    resolve(img);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    HtmlRenderer.prototype.render_image_to_canvas = function (item, element, surfaces) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, x, y, _width, _height;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                url = element.src;
                x = element.position.x;
                y = element.position.y;
                _width = element.width;
                _height = element.height;
                log('@slide.service-render_image_to_canvas');
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var img, sizes, positions;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, image_promise__WEBPACK_IMPORTED_MODULE_1___default()([url])];
                                case 1:
                                    img = _a.sent();
                                    if (img && img.length && img.length > 0) {
                                        img = img[0];
                                    }
                                    this.images.push(img);
                                    sizes = this.factor(item.Screen, _width, _height);
                                    positions = this.factorPosition(item.Screen, x, y, _width, _height);
                                    positions.x = x;
                                    positions.y = y;
                                    // this.ctx.save();
                                    if (element.opacity) {
                                        img.style.opacity = element.opacity;
                                    }
                                    if (element.rotation) {
                                        img.style.transform = "rotate(" + element.rotation + "deg)";
                                    }
                                    img.style.width = _width + "px";
                                    img.style.height = _height + "px";
                                    if (element.animation) {
                                        img.className = 'animated ' + element.animation;
                                    }
                                    img.style.zIndex = element.zIndex;
                                    img.style.position = 'absolute';
                                    img.style.top = positions.y + "px";
                                    img.style.left = positions.x + "px";
                                    surfaces.grid.appendChild(img);
                                    // this.ctx.drawImage(img, positions.x, positions.y, sizes.x, sizes.y);
                                    // this.ctx.restore();
                                    // this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                                    resolve(img);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    HtmlRenderer.prototype.renderElementsToTags = function (item, surfaces) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var index, element, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        surfaces.grid.innerHTML = '';
                        if (item.bgColor) {
                            surfaces.grid.style.backgroundColor = item.bgColor;
                        }
                        if (item.script && this.mode !== 'single') {
                            Eval(item.script);
                            Eval(item.player);
                            return [2 /*return*/];
                        }
                        if (!item.elements) return [3 /*break*/, 9];
                        item.elements.sort(function (a, b) {
                            return a.zIndex - b.zIndex;
                        });
                        index = 0;
                        _b.label = 1;
                    case 1:
                        if (!(index < item.elements.length)) return [3 /*break*/, 9];
                        element = item.elements[index];
                        _a = element.type;
                        switch (_a) {
                            case 'image': return [3 /*break*/, 2];
                            case 'text': return [3 /*break*/, 4];
                            case 'slide': return [3 /*break*/, 5];
                            case 'video': return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 8];
                    case 2: return [4 /*yield*/, this.render_image_to_canvas(item, element, surfaces)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        this.render_text_to_canvas(item, element, surfaces);
                        return [3 /*break*/, 8];
                    case 5:
                        this.render_slide_to_canvas(element.slide, element, surfaces);
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.render_embededPlayer(element.embed, element.position.x, element.position.y, element.width, element.height)];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        index++;
                        return [3 /*break*/, 1];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    HtmlRenderer.prototype.render_slide_to_canvas = function (item, element, surfaces) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var node;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                node = document.createElement('DIV');
                if (element.animation) {
                    node.className = 'animated ' + element.animation;
                }
                node.style.border = '1px solid red';
                node.style.height = item.Screen.height + "px";
                node.style.width = item.Screen.width + "px";
                node.style.position = 'absolute';
                node.style.left = element.position.x + "px";
                node.style.top = element.position.y + "px";
                surfaces.grid.appendChild(node);
                this.renderElementsToTags(element.slide, { grid: node });
                return [2 /*return*/];
            });
        });
    };
    HtmlRenderer.prototype.render_text_to_canvas = function (item, element, surfaces) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fontFactor, x, y, _width, _height, sizes, positions, node;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                log('@slide.service-render_text_to_canvas');
                if (element.text) {
                    fontFactor = this.factor(item.Screen, element.fontSize);
                    x = element.position.x;
                    y = element.position.y;
                    _width = element.width;
                    _height = element.height || element.fontSize;
                    sizes = this.factor(item.Screen, _width, _height);
                    positions = this.factorPosition(item.Screen, x, y, _width, _height);
                    positions.x = x;
                    positions.y = y;
                    node = document.createElement('PRE');
                    if (element.animation) {
                        node.className = 'animated ' + element.animation;
                    }
                    node.innerHTML = element.text;
                    node.style.textAlign = element.align;
                    node.style.color = element.color;
                    if (element.font) {
                        node.style.fontFamily = (element.font.name) ? element.font.name : element.font;
                    }
                    node.style.fontSize = element.fontSize + "px";
                    node.style.position = 'absolute';
                    node.style.left = positions.x + "px";
                    node.style.top = positions.y + "px";
                    // node.style.width = `${_width}px`;
                    node.style.overflow = 'visible';
                    // node.style.height = `${_height}px`;
                    node.style.zIndex = element.zIndex;
                    surfaces.grid.appendChild(node);
                    // const imageBlob = await dotToImage.toSvg(node);
                    // const img = new Image();
                    // img.onload = () => {
                    //     this.ctx.save();
                    //     this.ctx.drawImage(img, positions.x, positions.y, img.width, img.height);
                    //     this.ctx.restore();
                    // };
                    // img.src = imageBlob;
                    // this.ctx.font = `${fontFactor}px ${element.font}`;
                    // this.ctx.fillStyle = `${element.color}`;
                    // if (element.opacity) {
                    //     this.ctx.globalAlpha = element.opacity;
                    // }
                    // if (element.rotation) {
                    //     this.ctx.translate(positions.x + (sizes.x / 2), positions.y + (sizes.y / 2));
                    //     this.ctx.rotate(element.rotation * Math.PI / 180);
                    //     this.ctx.translate(-(sizes.x / 2), -(sizes.y / 2));
                    // }
                    // this.ctx.font = `${fontFactor}px ${element.font}`;
                    // let lineIndex = 0;
                    // element.text.split('\n').forEach((line) => {
                    //     const position = this.factor(item.Screen, element.position.x, (Number(element.position.y) + element.fontSize));
                    //     const linePosition = position.y + (lineIndex * fontFactor);
                    //     console.log(linePosition, fontFactor, lineIndex);
                    //     this.ctx.fillText(line, position.x, linePosition);
                    //     lineIndex++;
                    // });
                }
                return [2 /*return*/];
            });
        });
    };
    HtmlRenderer.prototype.playScreenError = function () {
        this.ctx.font = "120px arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText('Screen error', this.width, this.height);
    };
    HtmlRenderer.prototype.play = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var frameDuration;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.surfaces.embed) {
                            this.surfaces.embed.style.display = 'none';
                        }
                        this.stage = new _createjs_easeljs__WEBPACK_IMPORTED_MODULE_2__["Stage"](this.ctx.canvas);
                        if (!(this.mode === 'single')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fontService.loadFontsForRender(this.playerPlan[0].fonts)];
                    case 1:
                        _a.sent();
                        this.prerender(this.playerPlan[0], 0);
                        return [2 /*return*/];
                    case 2:
                        if (!this.playerPlan || this.playerPlan.length === 0) {
                            this.playDefaultPlan();
                            return [2 /*return*/];
                        }
                        _a.label = 3;
                    case 3:
                        if (!(this.mode !== 'single')) return [3 /*break*/, 6];
                        this.list = this.playerPlan[0].list;
                        frameDuration = (this.list[this.itemIndex].duration) ? this.list[this.itemIndex].duration * 1000 : 5000;
                        _a.label = 4;
                    case 4:
                        if (false) {}
                        // await this.fontService.loadFontsForRender(this.list[this.itemIndex].fonts);
                        return [4 /*yield*/, this.prerender(this.list[this.itemIndex], frameDuration)];
                    case 5:
                        // await this.fontService.loadFontsForRender(this.list[this.itemIndex].fonts);
                        _a.sent();
                        this.itemIndex++;
                        if (this.itemIndex === this.list.length) {
                            this.itemIndex = 0;
                        }
                        return [3 /*break*/, 4];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return HtmlRenderer;
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
/* harmony import */ var _app_editor_fonts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/editor/fonts.service */ "./src/app/editor/fonts.service.ts");
/* harmony import */ var _renderers_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderers/canvas */ "./src/player/renderers/canvas.ts");
/* harmony import */ var _renderers_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderers/html */ "./src/player/renderers/html.ts");





// import { Stage, Shape, } from '@createjs/easeljs';
var Eval = eval;
var log = console.log;
var SlideService = /** @class */ (function () {
    function SlideService(fontService) {
        this.fontService = fontService;
        this.itemIndex = 0;
    }
    SlideService.prototype.updatePlayerPlan = function (playerPlan) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fontsArr_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.playerPlan = playerPlan;
                        if (!(this.playerPlan && this.playerPlan.length > 0)) return [3 /*break*/, 3];
                        this.list = this.playerPlan[0].list;
                        this.fontService.user_id = this.playerPlan[0].user_id;
                        fontsArr_1 = {};
                        this.list.forEach(function (item) {
                            if (item.fonts) {
                                item.fonts.filter(function (font) { return font.source === 'google'; }).forEach(function (font) {
                                    fontsArr_1[font.name] = font.name;
                                });
                            }
                        });
                        return [4 /*yield*/, this.fontService.loadLocalFonts()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.fontService.loadFontsForRender(Object.keys(fontsArr_1))];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SlideService.prototype.createWorker = function (playerPlan, ctx, width, height, mode) {
    };
    SlideService.prototype.play = function (surfaces, playerPlan, ctx, width, height, mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (playerPlan.renderer) {
                    playerPlan.renderer = new _renderers_canvas__WEBPACK_IMPORTED_MODULE_3__["CanvasRenderer"](surfaces, this.fontService, playerPlan, ctx, width, height, mode);
                }
                else {
                    playerPlan.renderer = new _renderers_html__WEBPACK_IMPORTED_MODULE_4__["HtmlRenderer"](surfaces, this.fontService, playerPlan, ctx, width, height, mode);
                }
                playerPlan.renderer.play();
                return [2 /*return*/];
            });
        });
    };
    SlideService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_editor_fonts_service__WEBPACK_IMPORTED_MODULE_2__["FontsService"]])
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