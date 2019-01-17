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
        this.orgItem = JSON.parse(Object(fast_stringify__WEBPACK_IMPORTED_MODULE_3__["default"])(this.item));
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

module.exports = "<link rel=\"stylesheet\" [href]='cleanCssUrl' />\n<div class=\"input-group mb-3\">\n  <div class=\"input-group-prepend\">\n    <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-globe\"></i></span>\n  </div>\n  <select [(ngModel)]=\"selectedLanguage\" class=\"form-control\" (change)=\"selectLanguage()\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let c of languages\" [ngValue]=\"c\">{{c.name}}</option>\n  </select>\n</div>\n"

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
            styles: [__webpack_require__(/*! ./language-bar.component.css */ "./src/app/common/language-bar/language-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], LanguageBarComponent);
    return LanguageBarComponent;
}());



/***/ }),

/***/ "./src/app/common/lobby.item/lobby.item.component.html":
/*!*************************************************************!*\
  !*** ./src/app/common/lobby.item/lobby.item.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngTemplateOutlet]=\"template || defaultTemplate\" [ngTemplateOutletContext]=\"{item: item}\">\n</ng-template>\n\n\n<ng-template #defaultTemplate let-item=\"item\">\n  <div class=\"m10\">\n    <span class=\"label\">{{item.Name}}</span>\n  </div>\n</ng-template>\n\n\n<ng-template #imageTemplate let-item=\"item\">\n  <div class=\"fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n    <span class=\"label\">{{item.Name}}</span>\n  </div>\n</ng-template>\n\n<ng-template #playlistTemplate let-item=\"item\">\n  <div class=\"m10\">\n    <span class=\"label\">{{item.Name}}</span>\n    <span class=\"label\">({{item.list.length}})</span>\n  </div>\n</ng-template>\n\n\n<ng-template #slideTemplate let-item=\"item\">\n  <div class=\"canvas-bg\">\n    <app-canvas [item]=\"item\" [width]=\"230\" [height]=\"150\" [scale]=\"0.3\"></app-canvas>\n  </div>\n  <i class=\"{{iconClass}} icon\"></i> <span class=\"label\">{{item.Name}}</span>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/common/lobby.item/lobby.item.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/common/lobby.item/lobby.item.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  margin-right: 5px;\n  margin-left: 5px; }\n\n.sqr-btn {\n  padding: 15px;\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr {\n  opacity: 0.9;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) !important; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 35;\n  background: #fff;\n  margin-bottom: 40px;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2) !important; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn._meta_active, .sqr._meta_active {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(69, 59, 59, 0.2);\n  border-radius: 35;\n  background: #fff;\n  margin-bottom: 40px;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2) !important; }\n\n.sqr-btn._meta_active .sqr-toolbar, .sqr._meta_active .sqr-toolbar {\n    visibility: visible; }\n\n.fancy-thumb {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYmJ5Lml0ZW0vQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxjb21tb25cXGxvYmJ5Lml0ZW1cXGxvYmJ5Lml0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFHbkI7RUFDSSxhQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxZQUFZO0VBQ1osa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUExQixrREFBMEI7RUFDMUIscURBQW9ELEVBQUE7O0FBR3hEO0VBQ0ksVUFBVTtFQUVWLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsb0NBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBRW5CLHdEQUF1RCxFQUFBOztBQVQzRDtJQVlRLG1CQUFtQixFQUFBOztBQUszQjtFQUNJLFVBQVU7RUFFVixzQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHVDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUVuQix3REFBdUQsRUFBQTs7QUFUM0Q7SUFZUSxtQkFBbUIsRUFBQTs7QUFLM0I7RUFHSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2xvYmJ5Lml0ZW0vbG9iYnkuaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbn1cclxuXHJcbi5zcXItYnRue1xyXG4gICAgcGFkZGluZzoxNXB4O1xyXG4gICAgZm9udC1zaXplOiA4NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uc3Fye1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMykhaW1wb3J0YW50O1xyXG4gXHJcbn1cclxuLnNxci1idG46aG92ZXIsLnNxcjpob3ZlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIC5zcXItdG9vbGJhcntcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLnNxci1idG4uX21ldGFfYWN0aXZlLC5zcXIuX21ldGFfYWN0aXZle1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDY5LCA1OSwgNTksIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSkhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLnNxci10b29sYmFye1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uZmFuY3ktdGh1bWJcclxueyAgIFxyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufSJdfQ== */"

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
        if (this.item) {
            if (this.model) {
                switch (this.model) {
                    case 'playlist':
                        this.template = this.playlistTemplate;
                        break;
                }
            }
            if (this.item.type === 'slide' || this.item.elements) {
                this.template = this.slideTemplate;
            }
            if (this.item.type === 'image') {
                this.template = this.imageTemplate;
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
    LobbyItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lobby-item',
            template: __webpack_require__(/*! ./lobby.item.component.html */ "./src/app/common/lobby.item/lobby.item.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./lobby.item.component.scss */ "./src/app/common/lobby.item/lobby.item.component.scss")]
        })
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

module.exports = "<div class=\"lobby mt10\" *ngIf=\"mode==='media'\">\n  <div *ngIf=\"!noNew\" class=\"sqr shadow sqr-btn\" (click)=\"newItemHandler()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{item._meta_active}}\"  (click)=\"selectItemHandler(item)\">\n     \n    <app-lobby-item [item]=\"item\" [model]=\"model\"></app-lobby-item>\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\" aria-label=\"Basic example\">\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-danger\" (click)=\"deleteItemHandler(item);\"> <i class=\"fas fa-trash\"></i>\n        </button>\n      </li>\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"editItemHandler(item);\"> <i class=\"fas fa-edit\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"lobby \" *ngIf=\"mode==='media-finder'\">\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{item._meta_active}}\">\n    <app-lobby-item [item]=\"item\" [model]=\"model\"></app-lobby-item>\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"selectItemHandler(item);\"> <i class=\"fas fa-plus-square\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"lobby \" *ngIf=\"mode==='object-finder'\">\n  <div *ngFor=\"let item of items\" class=\"sqr shadow\">\n    <app-lobby-item [item]=\"item\" [model]=\"model\"></app-lobby-item>\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"selectItemHandler(item);\"> <i class=\"fas fa-plus-square\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"lobby  mt10\" *ngIf=\"mode==='object'\">\n  <div *ngIf=\"!noNew\" class=\"sqr shadow sqr-btn\" (click)=\"newItemHandler()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{item._meta_active}}\" (click)=\"selectItemHandler(item)\">\n    <app-lobby-item [item]=\"item\" [model]=\"model\"></app-lobby-item>\n\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-danger\" (click)=\"deleteItemHandler(item);\"> <i class=\"fas fa-trash\"></i>\n        </button>\n      </li>\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"editItemHandler(item);\"> <i class=\"fas fa-edit\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n "

/***/ }),

/***/ "./src/app/common/lobby/lobby.component.scss":
/*!***************************************************!*\
  !*** ./src/app/common/lobby/lobby.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  margin-right: 5px;\n  margin-left: 5px; }\n\n.sqr-btn {\n  padding: 15px;\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr {\n  opacity: 0.9;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) !important; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 35;\n  background: #fff;\n  margin-bottom: 40px;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2) !important; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn._meta_active, .sqr._meta_active {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(69, 59, 59, 0.2);\n  border-radius: 35;\n  background: #fff;\n  margin-bottom: 40px;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2) !important; }\n\n.sqr-btn._meta_active .sqr-toolbar, .sqr._meta_active .sqr-toolbar {\n    visibility: visible; }\n\n.fancy-thumb {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYmJ5L0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcY29tbW9uXFxsb2JieVxcbG9iYnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFHbkI7RUFDSSxhQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxZQUFZO0VBQ1osa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUExQixrREFBMEI7RUFDMUIscURBQW9ELEVBQUE7O0FBR3hEO0VBQ0ksVUFBVTtFQUVWLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsb0NBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBRW5CLHdEQUF1RCxFQUFBOztBQVQzRDtJQVlRLG1CQUFtQixFQUFBOztBQUszQjtFQUNJLFVBQVU7RUFFVixzQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHVDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUVuQix3REFBdUQsRUFBQTs7QUFUM0Q7SUFZUSxtQkFBbUIsRUFBQTs7QUFLM0I7RUFHSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2xvYmJ5L2xvYmJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG5cclxuLnNxci1idG57XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICBmb250LXNpemU6IDg0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5zcXJ7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKSFpbXBvcnRhbnQ7XHJcbiBcclxufVxyXG4uc3FyLWJ0bjpob3Zlciwuc3FyOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSkhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLnNxci10b29sYmFye1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uc3FyLWJ0bi5fbWV0YV9hY3RpdmUsLnNxci5fbWV0YV9hY3RpdmV7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoNjksIDU5LCA1OSwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMikhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5mYW5jeS10aHVtYlxyXG57ICAgXHJcbiAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59Il19 */"

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
    LobbyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.items) {
            this.items.forEach(function (item) {
                if (_this.model) {
                    item.template = _this.playlistTemplate;
                }
            });
        }
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
        })
    ], LobbyComponent);
    return LobbyComponent;
}());

// else {
//   if (item.type === 'slide' || item.elements) {
//     item.template = this.slideTemplate;
//   }
//   if (item.type === 'image') {
//     item.template = this.imageTemplate;
//   }
// }


/***/ }),

/***/ "./src/app/common/rulers/rulers.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/rulers/rulers.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><canvas class='ruler' id='ruler'></canvas></div>\r\n"

/***/ }),

/***/ "./src/app/common/rulers/rulers.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/rulers/rulers.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ruler {\n  position: absolute;\n  z-index: -1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3J1bGVycy9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxccnVsZXJzXFxydWxlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3J1bGVycy9ydWxlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucnVsZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/common/rulers/rulers.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/rulers/rulers.component.ts ***!
  \***************************************************/
/*! exports provided: RulersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulersComponent", function() { return RulersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RulersComponent = /** @class */ (function () {
    function RulersComponent() {
    }
    RulersComponent.prototype.ngOnInit = function () {
        var myCanvas = document.getElementById('ruler');
        var worksapce = document.getElementById('worksapce');
        var style = getComputedStyle(worksapce, null);
        myCanvas.width = Number(style.width.replace('px', '')) + 15;
        myCanvas.height = Number(style.height.replace('px', '')) + 15;
        var ruler = new Ruler('ruler');
        ruler.render('#aaa', 'pixels', 100);
        window.onresize = function () {
            worksapce = document.getElementById('worksapce');
            style = getComputedStyle(worksapce, null);
            myCanvas.width = style.width.replace('px', '');
            myCanvas.height = style.height.replace('px', '');
            ruler.render('#aaa', 'pixels', 100);
        };
    };
    RulersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rulers',
            template: __webpack_require__(/*! ./rulers.component.html */ "./src/app/common/rulers/rulers.component.html"),
            styles: [__webpack_require__(/*! ./rulers.component.scss */ "./src/app/common/rulers/rulers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RulersComponent);
    return RulersComponent;
}());

var MAJOR_INTERVAL_RATIO = 0.5, MINOR_INTERVAL_RATIO = 0.2, TICKS_PER_MAJOR_INTERVAL = 10, CURSOR_FPS = 48, GUTTER_SIZE = 15;
function Ruler(canvas) {
    /*global document, window, Blob, setInterval*/
    this.canvas = (canvas.getContext) ? canvas : document.getElementById(canvas);
    this.ctx = this.canvas.getContext('2d');
    this.cursor = document.createElement('canvas');
    this.cursor_ctx = this.cursor.getContext('2d');
    document.body.appendChild(this.cursor);
    this.cursor.width = this.canvas.width;
    this.cursor.height = this.canvas.height;
    this.cursor.className = this.canvas.className;
    this.cursor.style.zIndex = (this.canvas.style.zIndex + 1) || 1;
    this.cursor.x = this.cursor.currentX = 0;
    this.cursor.y = this.cursor.currentY = 0;
    var refreshCursor = setInterval(function () {
        if (this.cursor.y !== this.cursor.currentY) {
            this.cursor_ctx.clearRect(0, 0, GUTTER_SIZE, window.innerHeight);
            this.cursor_ctx.beginPath();
            this.cursor_ctx.moveTo(0, this.cursor.y);
            this.cursor_ctx.lineTo(GUTTER_SIZE, this.cursor.y);
            this.cursor_ctx.stroke();
            this.cursor.currentY = this.cursor.y;
        }
        if (this.cursor.x !== this.cursor.currentX) {
            this.cursor_ctx.clearRect(0, 0, window.innerWidth, GUTTER_SIZE);
            this.cursor_ctx.beginPath();
            this.cursor_ctx.moveTo(this.cursor.x, 0);
            this.cursor_ctx.lineTo(this.cursor.x, GUTTER_SIZE);
            this.cursor_ctx.stroke();
            this.cursor.currentX = this.cursor.x;
        }
    }.bind(this), 1000 / CURSOR_FPS);
    this.cursor.onmousemove = function (ev) {
        if (ev.clientX > GUTTER_SIZE) {
            this.cursor.x = ev.clientX;
        }
        if (ev.clientY > GUTTER_SIZE) {
            this.cursor.y = ev.clientY;
        }
    }.bind(this);
    function fillContextWithRuler(context, ruler, width, height) {
        var pattern_holder = document.createElement('canvas'), pattern_ctx = pattern_holder.getContext('2d');
        context.fillStyle = context.createPattern(ruler, 'repeat-x');
        context.fillRect(GUTTER_SIZE, 0, width, height);
        pattern_holder.width = width;
        pattern_holder.height = 100;
        pattern_ctx.translate(0, 0);
        pattern_ctx.scale(-1, 1);
        pattern_ctx.rotate(Math.PI / 4 * 2);
        pattern_ctx.drawImage(ruler, 0, 0);
        context.fillStyle = context.createPattern(pattern_holder, 'repeat-y');
        context.fillRect(0, GUTTER_SIZE, width, width);
    }
    function constructSVGData(color, units, major) {
        var majorHeight = parseInt((GUTTER_SIZE * MAJOR_INTERVAL_RATIO).toString(), 10), minorHeight = parseInt((GUTTER_SIZE * MINOR_INTERVAL_RATIO).toString(), 10);
        var tickWidth = parseInt((major / 10).toString(), 10);
        var html = '', i;
        for (i = 0; i < TICKS_PER_MAJOR_INTERVAL; i += 1) {
            html += '<div xmlns=\'http://www.w3.org/1999/xhtml\' style=\'position: absolute; bottom: 0px; width: ' +
                tickWidth + 'px; border-bottom: 1px solid #555; border-left: 1px solid #999;  height: ' +
                ((i % 5 === 0) ? majorHeight : minorHeight) + 'px; left: ' + i * tickWidth + 'px\'></div>';
        }
        // https://developer.mozilla.org/en-US/docs/HTML/Canvas/Drawing_DOM_objects_into_a_canvas
        return '<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + major + '\' height=\'' + GUTTER_SIZE +
            '\'><foreignObject width=\'100%\' height=\'100%\'>' + html + '</foreignObject></svg>';
    }
    this.render = function (color, units, major, width, height, options) {
        var svg, svgdata, ruler, url, DOMURL;
        options = options || {};
        this.ctx.fillStyle = options.backgroundColor || '#474747';
        this.ctx.strokeStyle = '#ffffff';
        this.cursor_ctx.strokeStyle = options.cursorColor || '#ffffff';
        this.ctx.fillRect(0, 0, this.canvas.width, GUTTER_SIZE);
        this.ctx.fillRect(0, 0, GUTTER_SIZE, this.canvas.height);
        svgdata = constructSVGData.apply(this, arguments);
        ruler = document.createElement('img');
        DOMURL = window.URL || window.webkitURL || window;
        ruler.onload = function () {
            DOMURL.revokeObjectURL(url);
            fillContextWithRuler(this.ctx, ruler, this.canvas.width, this.canvas.height);
        }.bind(this);
        svg = new Blob([svgdata], {
            type: 'image/svg+xml;charset=utf-8'
        });
        url = DOMURL.createObjectURL(svg);
        ruler.src = url;
    };
    // window.onresize = this.render;
}


/***/ }),

/***/ "./src/app/common/slide-footer/slide-footer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/common/slide-footer/slide-footer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer {{className}}\">\n   \n</div> "

/***/ }),

/***/ "./src/app/common/slide-footer/slide-footer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/slide-footer/slide-footer.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  pointer-events: none;\n  z-index: 0;\n  width: 110%;\n  opacity: 0.8;\n  position: absolute;\n  padding-top: 30px;\n  bottom: -15px;\n  right: -15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NsaWRlLWZvb3Rlci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxcc2xpZGUtZm9vdGVyXFxzbGlkZS1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0VBRWIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3NsaWRlLWZvb3Rlci9zbGlkZS1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uZm9vdGVye1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxyXG4gICAgei1pbmRleDogMDtcclxuICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgXHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGJvdHRvbTogLTE1cHg7XHJcbiAgICBcclxuICAgIHJpZ2h0OiAtMTVweDsgIFxyXG59XHJcblxyXG4gIl19 */"

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


var SlideFooterComponent = /** @class */ (function () {
    function SlideFooterComponent() {
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<div class=\"{{class}} {{className}}\">\n    <i class=\"{{iconClass}} icon\"></i>\n    <h4> {{title | translate}}</h4>\n</div>\n<button *ngIf=\"closeFn\" class=\"close-button-{{class}}\" (click)=\"closeSlider();\"><i class=\"far fa-window-close \"></i></button>\n<button *ngIf=\"enableSave\" class=\"save-btn-{{class}} {{dirty}}\" (click)=\"saveClick($event);\"><i\n        class=\"fas fa-save \"></i></button>\n<div class=\"toolbar\">\n    <ng-template [ngTemplateOutlet]=\"toolbar || defaultTemplate\"></ng-template>\n</div>\n\n<ng-template #defaultTemplate>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/common/slide-header/slide-header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/slide-header/slide-header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  position: absolute;\n  top: 0;\n  left: 110px; }\n\n.inline-topper {\n  pointer-events: none;\n  z-index: 0;\n  height: 51px;\n  padding-top: 10px; }\n\n.inline-topper .icon {\n    margin: 8px;\n    vertical-align: top; }\n\n.inline-topper h4 {\n    display: inline;\n    vertical-align: top; }\n\n.inline-topper .bar-icon {\n    margin-left: 15px; }\n\n.topper {\n  pointer-events: none;\n  z-index: 0;\n  height: 65px;\n  position: absolute;\n  padding-top: 30px;\n  top: -30px;\n  left: -15px;\n  right: -15px; }\n\n.topper .icon {\n    margin: 8px;\n    vertical-align: top; }\n\n.topper h4 {\n    display: inline;\n    vertical-align: top; }\n\n.topper .bar-icon {\n    margin-left: 15px; }\n\n:host-context(.ltr) .close-button-topper {\n  right: -15px; }\n\n:host-context(.rtl) .close-button-topper {\n  left: -15px; }\n\n.close-button-topper {\n  position: absolute;\n  z-index: 2000;\n  top: -15px;\n  width: 52px;\n  height: 52px;\n  background-color: #96ff00;\n  color: white;\n  cursor: pointer; }\n\n.close-button-inline-topper {\n  color: white;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  width: 52px;\n  height: 52px;\n  background-color: green; }\n\n.save-btn-inline-topper:hover {\n  font-size: 1.5em; }\n\n.save-btn-inline-topper {\n  transition: all .2s ease;\n  color: white;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  width: 52px;\n  height: 52px;\n  background-color: orange;\n  color: white;\n  cursor: pointer; }\n\n.save-btn-inline-topper.true {\n    background-color: red;\n    color: black; }\n\n:host-context(.rtl) .save-btn-topper {\n  left: 37px; }\n\n:host-context(.rtl) .save-btn-inline-topper {\n  float: right;\n  left: 52px; }\n\n:host-context(.rtl) .close-button-inline-topper {\n  float: right;\n  left: 0px; }\n\n:host-context(.ltr) .save-btn-topper {\n  right: 37px; }\n\n:host-context(.ltr) .save-btn-inline-topper {\n  float: left;\n  right: 52px; }\n\n:host-context(.ltr) .close-button-inline-topper {\n  float: right;\n  right: 0px; }\n\n.save-btn-topper {\n  color: white;\n  position: absolute;\n  top: -15px;\n  width: 52px;\n  height: 52px;\n  background-color: #fc6600;\n  cursor: pointer; }\n\n.save-btn-inline-topper:active,\n.save-btn-inline-topper:hover,\n.save-btn-topper:active,\n.save-btn-topper:hover {\n  font-size: 1.5em; }\n\n.close-button-inline-topper:active,\n.close-button-inline-topper:hover,\n.close-button-topper:active,\n.close-button-topper:hover {\n  font-size: 1.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NsaWRlLWhlYWRlci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxcc2xpZGUtaGVhZGVyXFxzbGlkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9zbGlkZS1oZWFkZXIvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQUs7RUFDTCxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFlBQVk7RUFFWixpQkFBaUIsRUFBQTs7QUFMckI7SUFPUSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7O0FBUjNCO0lBV1EsZUFBZTtJQUNmLG1CQUFtQixFQUFBOztBQVozQjtJQWVRLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsWUFBWTtFQUVaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBVGhCO0lBV1EsV0FBVztJQUNYLG1CQUFtQixFQUFBOztBQVozQjtJQWVRLGVBQWU7SUFDZixtQkFBbUIsRUFBQTs7QUFoQjNCO0lBbUJRLGlCQUFpQixFQUFBOztBQUl6QjtFQUlRLFlBQVksRUFBQTs7QUFHbkI7RUFHTyxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQzFEYTtFRDREYixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQVN2QjtFQUNBLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBRWxCLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQU9uQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUlJLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZUFBZTtFQUdmLGtCQUFrQjtFQUVsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFFeEIsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFqQm5CO0lBb0JRLHFCQUFxQjtJQUNyQixZQUFZLEVBQUE7O0FBSXBCO0VBSVEsVUFBVSxFQUFBOztBQUpsQjtFQVFRLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBVGxCO0VBY1EsWUFBWTtFQUdaLFNBQVMsRUFBQTs7QUFLakI7RUFJUSxXQUFXLEVBQUE7O0FBSm5CO0VBUVEsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFUbkI7RUFhUSxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUtsQjtFQUVJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJDeEtjO0VEeUtkLGVBQWUsRUFBQTs7QUFLbkI7Ozs7RUFNSSxnQkFBZ0IsRUFBQTs7QUFJcEI7Ozs7RUFNSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zbGlkZS1oZWFkZXIvc2xpZGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc2Fzcy9fdmFyaWFibGVzJztcclxuXHJcblxyXG5cclxuLnRvb2xiYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDExMHB4OyAgICAgXHJcbn1cclxuXHJcbi5pbmxpbmUtdG9wcGVye1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxyXG4gICAgei1pbmRleDogMDtcclxuICAgIGhlaWdodDogNTFweDsgICBcclxuICAgICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7ICAgIFxyXG4gICAgLmljb257XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7ICAgICAgXHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgLmJhci1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9wcGVye1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxyXG4gICAgei1pbmRleDogMDtcclxuICAgIGhlaWdodDogNjVweDsgICBcclxuICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgXHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHRvcDogLTMwcHg7XHJcbiAgICBsZWZ0OiAtMTVweDtcclxuICAgIHJpZ2h0OiAtMTVweDtcclxuICAgIC5pY29ue1xyXG4gICAgICAgIG1hcmdpbjogOHB4OyAgICAgIFxyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIC5iYXItaWNvbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QtY29udGV4dCgubHRyKVxyXG4ge1xyXG4gICBcclxuICAgIC5jbG9zZS1idXR0b24tdG9wcGVye1xyXG4gICAgICAgIHJpZ2h0OiAtMTVweDtcclxuICAgIH1cclxuIH1cclxuIDpob3N0LWNvbnRleHQoLnJ0bClcclxuIHtcclxuICAgIC5jbG9zZS1idXR0b24tdG9wcGVye1xyXG4gICAgICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgfVxyXG4gfVxyXG4gICAgLmNsb3NlLWJ1dHRvbi10b3BwZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDIwMDA7ICAgICAgXHJcbiAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICB3aWR0aDogNTJweDtcclxuICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZWVuO1xyXG5cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIFxyXG5cclxuICAgXHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuIFxyXG5cclxuLmNsb3NlLWJ1dHRvbi1pbmxpbmUtdG9wcGVyIHsgICAgXHJcbmNvbG9yOiB3aGl0ZTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG50b3A6IDBweDtcclxud2lkdGg6IDUycHg7XHJcbmhlaWdodDogNTJweDtcclxuYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcblxyXG4gXHJcbiBcclxuXHJcblxyXG59XHJcbiAgICAuc2F2ZS1idG4taW5saW5lLXRvcHBlcjpob3ZlcntcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgfSBcclxuICAgIC5zYXZlLWJ0bi1pbmxpbmUtdG9wcGVyXHJcbiAgICB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIFxyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcblxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi50cnVle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgOmhvc3QtY29udGV4dCgucnRsKVxyXG4gICAge1xyXG4gICAgICAgIC5zYXZlLWJ0bi10b3BwZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDM3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zYXZlLWJ0bi1pbmxpbmUtdG9wcGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2UtYnV0dG9uLWlubGluZS10b3BwZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuXHJcblxyXG4gICAgICAgICAgICBsZWZ0OiAwcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICA6aG9zdC1jb250ZXh0KC5sdHIpXHJcbiAgICB7XHJcbiAgICAgICAgLnNhdmUtYnRuLXRvcHBlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDM3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zYXZlLWJ0bi1pbmxpbmUtdG9wcGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgcmlnaHQ6IDUycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbG9zZS1idXR0b24taW5saW5lLXRvcHBlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnNhdmUtYnRuLXRvcHBlclxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICB3aWR0aDogNTJweDtcclxuICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW9yYW5nZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zYXZlLWJ0bi1pbmxpbmUtdG9wcGVyOmFjdGl2ZSwgICAgXHJcbiAgICAuc2F2ZS1idG4taW5saW5lLXRvcHBlcjpob3ZlcixcclxuICAgIC5zYXZlLWJ0bi10b3BwZXI6YWN0aXZlLFxyXG4gICAgLnNhdmUtYnRuLXRvcHBlcjpob3ZlclxyXG4gICAgeyAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2UtYnV0dG9uLWlubGluZS10b3BwZXI6YWN0aXZlLCAgICBcclxuICAgIC5jbG9zZS1idXR0b24taW5saW5lLXRvcHBlcjpob3ZlcixcclxuICAgIC5jbG9zZS1idXR0b24tdG9wcGVyOmFjdGl2ZSxcclxuICAgIC5jbG9zZS1idXR0b24tdG9wcGVyOmhvdmVyXHJcbiAgICB7ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIFxyXG4gXHJcbiBcclxuICIsIlxyXG4kY29sb3ItZ3JheTogI2UzZTRlNTtcclxuJGNvbG9yLWRhcmtibHVlMTogIzE2MjQzMztcclxuJGNvbG9yLWRhcmtibHVlMjogIzJhNDU2MztcclxuJGNvbG9yLWxpZ2h0Ymx1ZTE6ICMyNjQzNTY7XHJcbiRjb2xvci1saWdodGJsdWUyOiAjM2M3Mzk5O1xyXG4kY29sb3Itb3JhbmdlOiAjZmM2NjAwO1xyXG4kY29sb3ItY3lhbjogIzAwZmZmNjtcclxuJGNvbG9yLXNjcmVlbjogIzAwY2ZmZjtcclxuJGNvbG9yLXNjcmVlbi1ncm91cDogIzAwZmZmNjtcclxuJGNvbG9yLWxpYnJhcnk6ICM5NmZmMDA7XHJcbiRjb2xvci15ZWxsb3c6ICNmZmZmMDA7XHJcbiRjb2xvci1wdXJwbGU6ICNmM2I3ZWI7XHJcbiRjb2xvci1ncmVlbjogIzk2ZmYwMDtcclxuIFxyXG5cclxuICJdfQ== */"

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

var DataComponent = /** @class */ (function () {
    function DataComponent(_ngZone, translateService, dirtyService) {
        this._ngZone = _ngZone;
        this.translateService = translateService;
        this.dirtyService = dirtyService;
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
    DataComponent.prototype.beforeUpdate = function (item) {
    };
    DataComponent.prototype.afterUpdate = function (item) {
    };
    DataComponent.prototype.clearMeta = function () {
        var _this = this;
        Object.keys(this.item).forEach(function (key) {
            if (key.indexOf('_meta_') === 0) {
                delete _this.item[key];
            }
        });
    };
    DataComponent.prototype.saveProxy = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        return [4 /*yield*/, this.DataController.update(this.item._id, this.item)];
                    case 1:
                        _a.sent();
                        if (this.dirtyService) {
                            this.dirtyService.clearDirty();
                        }
                        this.beforeUpdate(this.item);
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
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.clearMeta();
                        this.beforeUpdate(this.item);
                        _a = this;
                        return [4 /*yield*/, this.DataController.create(this.item)];
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
                        return [2 /*return*/];
                }
            });
        });
    };
    DataComponent.prototype.newItem = function () {
        this.item = {};
        this.displayModalNew = 'active';
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
            _this.el.nativeElement.style.overflow = 'auto';
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
    DetectChangesDirective.prototype.onBlur = function (event) {
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
    ], DetectChangesDirective.prototype, "onBlur", null);
    DetectChangesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[detectChanges]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dirty_service__WEBPACK_IMPORTED_MODULE_2__["DirtyService"]])
    ], DetectChangesDirective);
    return DetectChangesDirective;
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

module.exports = "<div *ngIf=\"item\" [ngStyle]=\"{'background-color': bgColor}\">      \r\n    <object #thumbObject type=\"image/svg+xml\" style=\"width: {{width}}px;height: {{height}}px;\"></object>\r\n</div>\r\n"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_3__);




var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(_ngZone, sanitizer) {
        this._ngZone = _ngZone;
        this.sanitizer = sanitizer;
        this.scale = 0.5;
    }
    CanvasComponent.prototype.ngOnInit = function () {
        this.bgColor = this.item.bgColor;
    };
    CanvasComponent.prototype.paint = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var html;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        html = this.renderElementsToTags(this.item.elements).join('');
                        this.render_html_to_canvas(html, 0, 0, this.width, this.height);
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
    CanvasComponent.prototype.downsize = function (size) {
        return size * this.scale;
    };
    CanvasComponent.prototype.renderElementsToTags = function (elements) {
        var _this = this;
        return elements.map(function (element) {
            console.log(element.zIndex, element.type);
            switch (element.type) {
                case 'image':
                    return "<img src=\"" + element.src + "\" style=\"position: absolute; top: " + _this.downsize(element.position.y) + "px;left: " + _this.downsize(element.position.x) + "px;width:" + _this.downsize(element.width) + "px;height:" + _this.downsize(element.height) + "px\"/>";
                // return `<img src="${element.src}" style="position: absolute; top: ${element.position.y}px;left: ${element.position.x}px;" />`;
                case 'text':
                    return "<div style=\"color: " + element.color + ";font-family:'" + element.font + "';position: absolute; top: " + element.position.y + "px;left: " + element.position.x + "px;\">" + element.text + "</div>";
            }
        });
    };
    CanvasComponent.prototype.render_html_to_canvas = function (html, x, y, width, height) {
        var data = 'data:image/svg+xml;base64,' + js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].encode('<svg xmlns="http://www.w3.org/2000/svg" width="'
            + width + '" height="' + height + '">' +
            '<style>' +
            'foreignObject { fill: black }' +
            '</style>' +
            ("<g transform=\"scale(" + this.scale + ")\">") +
            '<foreignObject width="800" height="600">' +
            this.html_to_xml(html) +
            '</foreignObject>' +
            '</g>' +
            '</svg>');
        this.svg = data;
        this.thumbObject.first.nativeElement.data = data;
    };
    CanvasComponent.prototype.html_to_xml = function (html) {
        var doc = document.implementation.createHTMLDocument('');
        doc.write(html);
        // You must manually set the xmlns if you intend to immediately serialize
        // the HTML document to a string as opposed to appending it to a
        // <foreignObject> in the DOM
        doc.documentElement.setAttribute('xmlns', doc.documentElement.namespaceURI);
        // Get well-formed markup
        doc.body.style.backgroundColor = '#000';
        html = (new XMLSerializer).serializeToString(doc.body);
        return html;
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
    CanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/editor/canvas/canvas.component.html"),
            styles: [__webpack_require__(/*! ./canvas.component.scss */ "./src/app/editor/canvas/canvas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/library/finder/finder.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/finder/finder.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-container-wide {{active}} shadow\">\n\n  <dialog open= {{active}}>\n    <app-slide-header  closeFn=\"true\" title=\"NAVBAR.FINDER\" className=\"library-cat\" (closed)=\"closeSlider()\"></app-slide-header>\n    <div class=\"input-group pt50\">\n      <input type=\"text\" name=\"searchPhrase\" class=\"form-control\" />\n      <div class=\"input-group-prepend\">\n        <button class=\"btn btn-outline-secondary\" type=\"button\"> <i class=\"fas fa-search\"></i></button>\n      </div>\n    </div>\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a class=\"nav-link {{tab.selected}}\" (click)=\"tabSelect(tab)\">{{tab.name | translate}}</a>\n      </li>\n    </ul>\n    <div class=\"container no-margin\" *ngIf=\"selectedTab && selectedTab.alias !=='slide'\">\n      <app-lobby [items]=\"filteredItems()\" mode=\"media-finder\" (selectItem)=\"selectItem($event)\" (deleteItem)=\"deleteItem($event)\"\n        (newItem)=\"newItem($event)\"></app-lobby>\n    </div>\n    <div class=\"container no-margin\" *ngIf=\"selectedTab && selectedTab.alias ==='slide'\">\n      <app-lobby [items]=\"slides\" mode=\"object-finder\" (selectItem)=\"selectItem($event)\" (deleteItem)=\"deleteItem($event)\"\n        (newItem)=\"newItem($event)\"></app-lobby>\n    </div>\n    <app-slide-footer className=\"library-cat\"></app-slide-footer>\n  </dialog>\n</div>\n"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var FinderComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FinderComponent, _super);
    function FinderComponent(_ngZone, translateService) {
        var _this = _super.call(this, _ngZone, translateService, null) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.types = ['image', 'video'];
        _this.tabsCollection = {
            'image': 'NAVBAR.IMAGES',
            'video': 'NAVBAR.VIDEOS',
            'slide': 'NAVBAR.SLIDES',
        };
        _this.tabs = [];
        _this.selectItem = function (item) {
            _this.selector(item);
        };
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["LibraryDataController"];
        return _this;
    }
    // [{ name: 'NAVBAR.IMAGES', selected: true, alias: 'image' },
    // { name: 'NAVBAR.VIDEOS', selected: false, alias: 'video' },
    // { name: 'NAVBAR.SLIDES', selected: false, alias: 'slide' }];
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
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadItems({});
                        this.tabs = this.types.map(function (item) {
                            return {
                                name: _this.tabsCollection[item],
                                alias: item,
                            };
                        });
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
                        this.selectedTab = this.tabs[0];
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], FinderComponent);
    return FinderComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



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
        this.dirty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saving = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DirtyService.prototype.setDirty = function () {
        this._dirty = true;
        this.dirty.emit(true);
    };
    DirtyService.prototype.clearDirty = function () {
        this._dirty = false;
        this.dirty.emit(false);
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
/* harmony import */ var _services_language_dictionary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/language/dictionary.service */ "./src/app/services/language/dictionary.service.ts");
/* harmony import */ var _services_name_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/name.service */ "./src/app/services/name.service.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/fesm5/angular2-draggable.js");
/* harmony import */ var _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/language-bar/language-bar.component */ "./src/app/common/language-bar/language-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./library/finder/finder.component */ "./src/app/library/finder/finder.component.ts");
/* harmony import */ var _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/slide-header/slide-header.component */ "./src/app/common/slide-header/slide-header.component.ts");
/* harmony import */ var _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/slide-footer/slide-footer.component */ "./src/app/common/slide-footer/slide-footer.component.ts");
/* harmony import */ var _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/lobby/lobby.component */ "./src/app/common/lobby/lobby.component.ts");
/* harmony import */ var _directives_adapt_height__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/adapt-height */ "./src/app/directives/adapt-height.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _common_rulers_rulers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/rulers/rulers.component */ "./src/app/common/rulers/rulers.component.ts");
/* harmony import */ var _editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./editor/canvas/canvas.component */ "./src/app/editor/canvas/canvas.component.ts");
/* harmony import */ var _player_slide_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../player/slide.service */ "./src/player/slide.service.ts");
/* harmony import */ var _directives_stop_prop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/stop-prop */ "./src/app/directives/stop-prop.ts");
/* harmony import */ var _common_lobby_item_lobby_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./common/lobby.item/lobby.item.component */ "./src/app/common/lobby.item/lobby.item.component.ts");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/dirty.service */ "./src/app/services/dirty.service.ts");
/* harmony import */ var _directives_adapt_width__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/adapt-width */ "./src/app/directives/adapt-width.ts");
/* harmony import */ var _services_responsive_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/responsive.service */ "./src/app/services/responsive.service.ts");
/* harmony import */ var _common_change_change_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./common/change/change.component */ "./src/app/common/change/change.component.ts");
/* harmony import */ var _directives_change_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directives/change.directive */ "./src/app/directives/change.directive.ts");




























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
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_16__["DragulaModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_17__["ColorPickerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_6__["FileDropModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                angular2_draggable__WEBPACK_IMPORTED_MODULE_7__["AngularDraggableModule"]
            ],
            declarations: [_editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_19__["CanvasComponent"],
                _directives_adapt_height__WEBPACK_IMPORTED_MODULE_15__["AdaptHeightDirective"],
                _directives_adapt_width__WEBPACK_IMPORTED_MODULE_24__["AdaptWidthDirective"],
                _directives_stop_prop__WEBPACK_IMPORTED_MODULE_21__["ClickStopPropagationDirective"],
                _directives_change_directive__WEBPACK_IMPORTED_MODULE_27__["DetectChangesDirective"],
                _common_change_change_component__WEBPACK_IMPORTED_MODULE_26__["ChangeComponent"],
                _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_8__["LanguageBarComponent"],
                _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_11__["FinderComponent"],
                _common_rulers_rulers_component__WEBPACK_IMPORTED_MODULE_18__["RulersComponent"],
                _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_12__["SlideHeaderComponent"],
                _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_13__["SlideFooterComponent"],
                _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_14__["LobbyComponent"],
                _common_lobby_item_lobby_item_component__WEBPACK_IMPORTED_MODULE_22__["LobbyItemComponent"]],
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_language_dictionary_service__WEBPACK_IMPORTED_MODULE_4__["DictionaryService"], _services_name_service__WEBPACK_IMPORTED_MODULE_5__["NameService"], _player_slide_service__WEBPACK_IMPORTED_MODULE_20__["SlideService"], _services_dirty_service__WEBPACK_IMPORTED_MODULE_23__["DirtyService"], _services_responsive_service__WEBPACK_IMPORTED_MODULE_25__["ResponsiveService"]],
            exports: [_editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_19__["CanvasComponent"],
                _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_8__["LanguageBarComponent"],
                _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_14__["LobbyComponent"],
                _common_lobby_item_lobby_item_component__WEBPACK_IMPORTED_MODULE_22__["LobbyItemComponent"],
                _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_11__["FinderComponent"],
                _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_12__["SlideHeaderComponent"],
                _common_rulers_rulers_component__WEBPACK_IMPORTED_MODULE_18__["RulersComponent"],
                _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_13__["SlideFooterComponent"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_6__["FileDropModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_17__["ColorPickerModule"],
                _directives_adapt_height__WEBPACK_IMPORTED_MODULE_15__["AdaptHeightDirective"],
                _directives_adapt_width__WEBPACK_IMPORTED_MODULE_24__["AdaptWidthDirective"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_7__["AngularDraggableModule"],
                _directives_change_directive__WEBPACK_IMPORTED_MODULE_27__["DetectChangesDirective"],
                _common_change_change_component__WEBPACK_IMPORTED_MODULE_26__["ChangeComponent"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_16__["DragulaDirective"]],
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

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/player/player.component.html":
/*!******************************************!*\
  !*** ./src/player/player.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{bodyClass}}\">\r\n    <label *ngIf=\"!playerPlan\" class=\"huge\">{{Token}}</label>\r\n    <div class=\"screen\">\r\n        <canvas *ngIf=\"playerPlan\" #playerCanvas id=\"playerCanvas\"></canvas>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/player/player.component.scss":
/*!******************************************!*\
  !*** ./src/player/player.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white {\n  color: white; }\n\n.screen {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff; }\n\n.huge {\n  font-size: 70px;\n  padding: 40px;\n  border: 1px solid rgba(6, 19, 19, 0.932);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -400px;\n  width: 800px;\n  height: 200px;\n  text-align: center;\n  font-family: 'Montserrat', 'Roboto', sans-serif;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5ZXIvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xccGxheWVyXFxwbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxZQUFZLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFRO0VBQ1IsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDSSxlQUFlO0VBQ2YsYUFBWTtFQUNaLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLCtDQUErQztFQUMvQywwQ0FBMEMsRUFBQSIsImZpbGUiOiJzcmMvcGxheWVyL3BsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGl0ZSB7Y29sb3I6IHdoaXRlO31cclxuIFxyXG4uc2NyZWVuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQgOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5odWdlIHtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIHBhZGRpbmc6NDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNiwgMTksIDE5LCAwLjkzMik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDAwcHg7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

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
                            console.log('player is pending');
                            setTimeout(this.validateScreen.bind(this), 10 * 1000);
                        }
                        else {
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
            var str;
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
/* harmony import */ var image_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! image-promise */ "./node_modules/image-promise/dist/image-promise.common-js.js");
/* harmony import */ var image_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(image_promise__WEBPACK_IMPORTED_MODULE_2__);



var SlideService = /** @class */ (function () {
    function SlideService() {
        this.itemIndex = 0;
    }
    SlideService.prototype.updatePlayerPlan = function (playerPlan) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fontsArr_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.playerPlan = playerPlan;
                if (this.playerPlan && this.playerPlan.length > 0) {
                    this.list = this.playerPlan[0].list;
                    fontsArr_1 = {};
                    this.list.forEach(function (item) {
                        if (item.elements) {
                            item.elements.forEach(function (element) {
                                if (element.font) {
                                    fontsArr_1[element.font] = element.font;
                                }
                            });
                        }
                    });
                    if (Object.keys(fontsArr_1).length > 0) {
                        console.log('loading fonts:', Object.keys(fontsArr_1));
                        window.WebFont.load({
                            google: {
                                families: Object.keys(fontsArr_1)
                            }
                        });
                    }
                }
                else {
                }
                return [2 /*return*/];
            });
        });
    };
    SlideService.prototype.play = function (playerPlan, ctx, width, height, mode) {
        var _this = this;
        var player = this;
        function factor(screen, x, y) {
            return { x: x * (width / screen.width), y: y * (height / screen.height) };
        }
        function prerender(item) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var _a;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (item.elements) {
                                item.type = 'slide';
                            }
                            if (item.bgColor) {
                                ctx.fillStyle = item.bgColor;
                                ctx.fillRect(0, 0, width, height);
                            }
                            _a = item.type;
                            switch (_a) {
                                case 'image': return [3 /*break*/, 1];
                                case 'slide': return [3 /*break*/, 3];
                            }
                            return [3 /*break*/, 5];
                        case 1: return [4 /*yield*/, render_fullimage_to_canvas(item.resource, 0, 0, width, height)];
                        case 2: return [2 /*return*/, _b.sent()];
                        case 3: return [4 /*yield*/, renderElementsToTags(item)];
                        case 4: return [2 /*return*/, _b.sent()];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        }
        function playScreenError() {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    ctx.font = "120px arial";
                    ctx.fillStyle = "black";
                    ctx.fillText('Screen error', width, height);
                    return [2 /*return*/];
                });
            });
        }
        function playDefaultPlan() {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    ctx.font = "120px arial";
                    ctx.fillStyle = "black";
                    ctx.fillText('Nothing to play', width / 4, height / 2);
                    setTimeout(function () {
                        player.play(player.playerPlan, ctx, width, height);
                    }, 10 * 1000);
                    return [2 /*return*/];
                });
            });
        }
        function renderElementsToTags(item) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var index, element, _a;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                            item.elements.sort(function (a, b) {
                                return a.zIndex - b.zIndex;
                            });
                            index = 0;
                            _b.label = 1;
                        case 1:
                            if (!(index < item.elements.length)) return [3 /*break*/, 6];
                            element = item.elements[index];
                            console.log(element.zIndex, element.type);
                            _a = element.type;
                            switch (_a) {
                                case 'image': return [3 /*break*/, 2];
                                case 'text': return [3 /*break*/, 4];
                            }
                            return [3 /*break*/, 5];
                        case 2: return [4 /*yield*/, render_image_to_canvas(element.src, element.position.x, element.position.y, element.width, element.height)];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            render_text_to_canvas(item, element);
                            return [3 /*break*/, 5];
                        case 5:
                            index++;
                            return [3 /*break*/, 1];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        }
        function loadImageUrl(url) {
            return new Promise(function (resolve, reject) {
                var img = new Image();
                img.addEventListener('load', function (e) { return resolve(img); });
                img.addEventListener('error', function () {
                    reject(new Error("Failed to load image's URL: " + url));
                });
                img.src = url;
            });
        }
        function render_text_to_canvas(item, element) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var position;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (element.text) {
                        ctx.font = element.fontSize + "px " + element.font;
                        ctx.fillStyle = "" + element.color;
                        position = factor(item.Screen, element.position.x, element.position.y);
                        ctx.fillText(element.text, position.x, position.y);
                    }
                    return [2 /*return*/];
                });
            });
        }
        function render_fullimage_to_canvas(url, x, y, _width, _height) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var img;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, image_promise__WEBPACK_IMPORTED_MODULE_2___default()([url])];
                                    case 1:
                                        img = _a.sent();
                                        if (img.length && img.length > 0) {
                                            img = img[0];
                                        }
                                        if (img) {
                                            img.width = ctx.canvas.width;
                                            img.height = ctx.canvas.height;
                                            images.push(img);
                                            ctx.clearRect(0, 0, _width, _height);
                                            ctx.drawImage(img, x, y, _width, _height);
                                        }
                                        resolve(img);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                });
            });
        }
        function render_image_to_canvas(url, x, y, _width, _height) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var img;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, image_promise__WEBPACK_IMPORTED_MODULE_2___default()([url])];
                                    case 1:
                                        img = _a.sent();
                                        if (img && img.length && img.length > 0) {
                                            img = img[0];
                                        }
                                        images.push(img);
                                        ctx.drawImage(img, x, y);
                                        resolve(img);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                });
            });
        }
        function html_to_xml(html) {
            var doc = document.implementation.createHTMLDocument('');
            doc.write(html);
            doc.documentElement.setAttribute('xmlns', doc.documentElement.namespaceURI);
            // Get well-formed markup
            html = (new XMLSerializer).serializeToString(doc.body);
            return html;
        }
        this.playerPlan = playerPlan;
        var images = [];
        if (!this.playerPlan || this.playerPlan.length === 0) {
            playDefaultPlan();
            return;
        }
        this.list = this.playerPlan[0].list;
        prerender(this.list[this.itemIndex]);
        debugger;
        var frameDuration = (this.list[this.itemIndex].duration) ? this.list[this.itemIndex].duration * 1000 : 5000;
        this.itemIndex++;
        console.log('frame duration', frameDuration);
        if (mode !== 'single') {
            setInterval(function () {
                if (_this.itemIndex >= _this.list.length) {
                    _this.itemIndex = 0;
                }
                console.log('frame duration', frameDuration);
                prerender(_this.list[_this.itemIndex]);
                _this.itemIndex++;
            }, frameDuration);
        }
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