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

module.exports = "<link rel=\"stylesheet\" [href]='sanitizer.bypassSecurityTrustResourceUrl(this.languageService.cssUrl)' />\n\n\n<div class=\"input-group mb-3\">\n  <div class=\"input-group-prepend\">\n    <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-globe\"></i></span>\n  </div>\n  <select [(ngModel)]=\"selectedLanguage\" class=\"form-control\" (change)=\"selectLanguage()\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let c of languages\" [ngValue]=\"c\">{{c.name}}</option>\n  </select>\n</div>\n"

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

/***/ "./src/app/common/lobby/lobby.component.html":
/*!***************************************************!*\
  !*** ./src/app/common/lobby/lobby.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin\" *ngIf=\"mode==='media'\">\n  <div *ngIf=\"!noNew\" class=\"sqr shadow sqr-btn\" (click)=\"newItemHandler()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n    <span class=\"label\">{{item.Name}}</span>\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\" aria-label=\"Basic example\">\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-danger\" (click)=\"deleteItemHandler(item);\"> <i class=\"fas fa-trash\"></i>\n        </button>\n      </li>\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"editItemHandler(item);\"> <i class=\"fas fa-edit\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"container no-margin\" *ngIf=\"mode==='media-finder'\">\n\n  <div *ngFor=\"let item of items\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n    <span class=\"label\">{{item.Name}}</span>\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"selectItemHandler(item);\"> <i class=\"fas fa-plus-square\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"container no-margin\" *ngIf=\"mode==='object-finder'\">\n\n  <div *ngFor=\"let item of items\" class=\"sqr shadow\">\n    <span class=\"label\">{{item.Name}}</span>\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"selectItemHandler(item);\"> <i class=\"fas fa-plus-square\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"container no-margin\" *ngIf=\"mode==='object'\">\n  <div *ngIf=\"!noNew\" class=\"sqr shadow sqr-btn\" (click)=\"newItemHandler()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow\">\n    <i class=\"{{iconClass}} icon\"></i> <span class=\"label\">{{item.Name}}</span>\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-danger\" (click)=\"deleteItemHandler(item);\"> <i class=\"fas fa-trash\"></i>\n        </button>\n      </li>\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"editItemHandler(item);\"> <i class=\"fas fa-edit\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"container no-margin\" *ngIf=\"mode==='slide'\">\n  <div *ngIf=\"!noNew\" class=\"sqr shadow sqr-btn\" (click)=\"newItemHandler()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow\">\n    <div class=\"canvas-bg\">\n      <app-canvas [item]=\"item\" [width]=\"120\" [height]=\"120\"></app-canvas>\n    </div>\n    <i class=\"{{iconClass}} icon\"></i> <span class=\"label\">{{item.Name}}</span>\n\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-danger\" (click)=\"deleteItemHandler(item);\"> <i class=\"fas fa-trash\"></i>\n        </button>\n      </li>\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"editItemHandler(item);\"> <i class=\"fas fa-edit\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/lobby/lobby.component.scss":
/*!***************************************************!*\
  !*** ./src/app/common/lobby/lobby.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  margin-right: 5px;\n  margin-left: 5px; }\n\n.sqr-btn {\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYmJ5L0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcY29tbW9uXFxsb2JieVxcbG9iYnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBZ0I7RUFDaEIsaUJBQWUsRUFDbEI7O0FBRUQ7RUFFSSxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQix1QkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxXQUFVLEVBSWI7O0FBTEQ7SUFHUSxvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbG9iYnkvbG9iYnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG59XHJcblxyXG4uc3FyLWJ0bntcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiA4NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uc3FyLWJ0bjpob3Zlciwuc3FyOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC5zcXItdG9vbGJhcntcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG59Il19 */"

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
        this.editItem.emit(item);
    };
    LobbyComponent.prototype.newItemHandler = function (item) {
        this.newItem.emit(item);
    };
    LobbyComponent.prototype.selectItemHandler = function (item) {
        this.selectItem.emit(item);
    };
    LobbyComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LobbyComponent.prototype, "items", void 0);
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
            styles: [__webpack_require__(/*! ./lobby.component.scss */ "./src/app/common/lobby/lobby.component.scss")]
        })
    ], LobbyComponent);
    return LobbyComponent;
}());



/***/ }),

/***/ "./src/app/common/rulers/rulers.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/rulers/rulers.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 1px solid red;\"><canvas class='ruler' id='ruler'></canvas></div>\r\n"

/***/ }),

/***/ "./src/app/common/rulers/rulers.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/rulers/rulers.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ruler {\n  position: absolute;\n  z-index: -1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3J1bGVycy9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxccnVsZXJzXFxydWxlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBa0I7RUFFbEIsWUFBVyxFQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3J1bGVycy9ydWxlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucnVsZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIFxyXG5cdHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4gIl19 */"

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

module.exports = ".footer {\n  pointer-events: none;\n  z-index: 0;\n  width: 110%;\n  opacity: 0.8;\n  position: absolute;\n  padding-top: 30px;\n  bottom: -15px;\n  right: -15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NsaWRlLWZvb3Rlci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxcc2xpZGUtZm9vdGVyXFxzbGlkZS1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxxQkFBb0I7RUFDcEIsV0FBVTtFQUNWLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixjQUFhO0VBRWIsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3NsaWRlLWZvb3Rlci9zbGlkZS1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uZm9vdGVye1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxyXG4gICAgei1pbmRleDogMDtcclxuICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgXHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGJvdHRvbTogLTE1cHg7XHJcbiAgICBcclxuICAgIHJpZ2h0OiAtMTVweDsgIFxyXG59XHJcblxyXG4gIl19 */"

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

module.exports = "<div class=\"topper {{className}}\">\n    <i class=\"{{iconClass}} icon\"></i>\n    <h4> {{title | translate}}</h4>\n</div>\n<button class=\"close-button\" (click)=\"closeSlider();\"><i class=\"far fa-window-close \"></i></button>\n"

/***/ }),

/***/ "./src/app/common/slide-header/slide-header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/slide-header/slide-header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topper {\n  pointer-events: none;\n  z-index: 0;\n  height: 65px;\n  opacity: 0.8;\n  position: absolute;\n  padding-top: 30px;\n  top: -30px;\n  left: -15px;\n  right: -15px; }\n  .topper .icon {\n    margin: 8px;\n    vertical-align: top; }\n  .topper h4 {\n    display: inline;\n    vertical-align: top; }\n  .topper .bar-icon {\n    margin-left: 15px; }\n  .rtl .close-button {\n  position: absolute;\n  z-index: 2000;\n  left: 0; }\n  .ltr .close-button {\n  position: absolute;\n  z-index: 2000;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NsaWRlLWhlYWRlci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxcc2xpZGUtaGVhZGVyXFxzbGlkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxxQkFBb0I7RUFDcEIsV0FBVTtFQUNWLGFBQVk7RUFDWixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsWUFBVztFQUNYLGFBQVksRUFZZjtFQXJCRDtJQVdRLFlBQVc7SUFDWCxvQkFBbUIsRUFDdEI7RUFiTDtJQWVRLGdCQUFlO0lBQ2Ysb0JBQW1CLEVBQ3RCO0VBakJMO0lBbUJRLGtCQUFpQixFQUNwQjtFQUtMO0VBR1EsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixRQUFPLEVBQ1Y7RUFHTDtFQUVRLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsU0FBUSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3NsaWRlLWhlYWRlci9zbGlkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxuLnRvcHBlcntcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBoZWlnaHQ6IDY1cHg7ICAgXHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICBcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgLmljb257XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7ICAgICAgXHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgLmJhci1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5ydGxcclxue1xyXG4gICAgLmNsb3NlLWJ1dHRvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubHRye1xyXG4gICAgLmNsb3NlLWJ1dHRvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxufSJdfQ== */"

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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SlideHeaderComponent.prototype, "iconClass", void 0);
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

/***/ "./src/app/editor/canvas/canvas.component.css":
/*!****************************************************!*\
  !*** ./src/app/editor/canvas/canvas.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/editor/canvas/canvas.component.html":
/*!*****************************************************!*\
  !*** ./src/app/editor/canvas/canvas.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas [width]=\"width\" [height]=\"height\" #thumbCanvas></canvas>"

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


var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(_ngZone) {
        this._ngZone = _ngZone;
    }
    CanvasComponent.prototype.paint = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ctx, html;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                ctx = this.thumbCanvas.first.nativeElement.getContext('2d');
                this.ctx = ctx;
                ctx.clearRect(0, 0, this.width, this.height);
                if (this.item.elements) {
                    this.item.type = 'slide';
                }
                if (this.item.bgColor) {
                    ctx.fillStyle = this.item.bgColor;
                    ctx.fillRect(0, 0, this.width, this.height);
                }
                html = this.renderElementsToTags(this.item.elements).join('');
                this.render_html_to_canvas(html, 0, 0, this.width, this.height);
                return [2 /*return*/];
            });
        });
    };
    CanvasComponent.prototype.ngAfterViewInit = function () {
        this.paint();
    };
    CanvasComponent.prototype.renderElementsToTags = function (elements) {
        return elements.map(function (element) {
            console.log(element.zIndex, element.type);
            switch (element.type) {
                case 'image':
                    return "<image xlink:href=\"" + element.src + "\" x=\"" + element.position.x + "\"\n        y=\"" + element.position.y + "\" height=\"" + element.width + "px\" width=\"" + element.height + "px\"/>";
                // return `<img src="${element.src}" style="position: absolute; top: ${element.position.y}px;left: ${element.position.x}px;" />`;
                case 'text':
                    return "<div style=\"color: " + element.color + ";font-family:" + element.font + ";\n          position: absolute; top: " + element.position.y + "px;left: " + element.position.x + "px;\">" + element.text + "</div>";
            }
        });
    };
    CanvasComponent.prototype.ngOnInit = function () {
    };
    CanvasComponent.prototype.render_html_to_canvas = function (html, x, y, width, height) {
        var _this = this;
        var data = 'data:image/svg+xml;charset=utf-8,' + '<svg xmlns="http://www.w3.org/2000/svg" width="'
            + width + '" height="' + height + '">' +
            '<g transform="scale(1)">' +
            '<foreignObject width="800" height="600">' +
            this.html_to_xml(html) +
            '</foreignObject>' +
            '</g>' +
            '</svg>';
        console.log('SVG', data);
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var img;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                img = new Image();
                img.onload = function () {
                    _this.ctx.clearRect(0, 0, _this.width, _this.height);
                    _this.ctx.drawImage(img, x, y);
                    _this.thumbCanvas.notifyOnChanges();
                };
                img.src = data;
                return [2 /*return*/];
            });
        }); });
    };
    CanvasComponent.prototype.html_to_xml = function (html) {
        var doc = document.implementation.createHTMLDocument('');
        doc.write(html);
        // You must manually set the xmlns if you intend to immediately serialize
        // the HTML document to a string as opposed to appending it to a
        // <foreignObject> in the DOM
        doc.documentElement.setAttribute('xmlns', doc.documentElement.namespaceURI);
        // Get well-formed markup
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('thumbCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], CanvasComponent.prototype, "thumbCanvas", void 0);
    CanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/editor/canvas/canvas.component.html"),
            styles: [__webpack_require__(/*! ./canvas.component.css */ "./src/app/editor/canvas/canvas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
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

module.exports = "<div class=\"slider-container-wide {{active}} shadow\">\n\n  <dialog open= {{active}}>\n    <app-slide-header title=\"NAVBAR.FINDER\" className=\"lemon-cat\" (closed)=\"closeSlider($event)\"></app-slide-header>\n    <div class=\"input-group pt50\">\n      <input type=\"text\" name=\"searchPhrase\" class=\"form-control\" />\n      <div class=\"input-group-prepend\">\n        <button class=\"btn btn-outline-secondary\" type=\"button\"> <i class=\"fas fa-search\"></i></button>\n      </div>\n    </div>\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a class=\"nav-link {{tab.selected}}\" (click)=\"tabSelect(tab)\">{{tab.name | translate}}</a>\n      </li>\n    </ul>\n    <div class=\"container no-margin\" *ngIf=\"selectedTab && selectedTab.alias !=='slide'\">\n      <app-lobby [items]=\"filteredItems()\" mode=\"media-finder\" (selectItem)=\"selectItem($event)\" (deleteItem)=\"deleteItem($event)\"\n        (newItem)=\"newItem($event)\"></app-lobby>\n    </div>\n    <div class=\"container no-margin\" *ngIf=\"selectedTab && selectedTab.alias ==='slide'\">\n      <app-lobby [items]=\"slides\" mode=\"object-finder\" (selectItem)=\"selectItem($event)\" (deleteItem)=\"deleteItem($event)\"\n        (newItem)=\"newItem($event)\"></app-lobby>\n    </div>\n    <app-slide-footer className=\"lemon-cat\"></app-slide-footer>\n  </dialog>\n</div>\n"

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
        var _this = _super.call(this, _ngZone, translateService) || this;
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
        return this.items.filter(function (item) { return item.type === _this.selectedTab.alias; });
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
/* harmony import */ var _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/slide-footer/slide-footer.component */ "./src/app/common/slide-footer/slide-footer.component.ts");
/* harmony import */ var _common_bread_crumbs_bread_crumbs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/bread-crumbs/bread-crumbs.component */ "./src/app/common/bread-crumbs/bread-crumbs.component.ts");
/* harmony import */ var _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/lobby/lobby.component */ "./src/app/common/lobby/lobby.component.ts");
/* harmony import */ var _directives_adapt_height__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/adapt-height */ "./src/app/directives/adapt-height.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _common_rulers_rulers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/rulers/rulers.component */ "./src/app/common/rulers/rulers.component.ts");
/* harmony import */ var _editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./editor/canvas/canvas.component */ "./src/app/editor/canvas/canvas.component.ts");
/* harmony import */ var _player_slide_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../player/slide.service */ "./src/player/slide.service.ts");






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
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_16__["DragulaModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_17__["ColorPickerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(), ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__["FileDropModule"], angular2_draggable__WEBPACK_IMPORTED_MODULE_6__["AngularDraggableModule"]],
            declarations: [_editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_19__["CanvasComponent"], _directives_adapt_height__WEBPACK_IMPORTED_MODULE_15__["AdaptHeightDirective"], _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_7__["LanguageBarComponent"], _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_10__["FinderComponent"], _common_rulers_rulers_component__WEBPACK_IMPORTED_MODULE_18__["RulersComponent"],
                _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_11__["SlideHeaderComponent"], _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_12__["SlideFooterComponent"], _common_bread_crumbs_bread_crumbs_component__WEBPACK_IMPORTED_MODULE_13__["BreadCrumbsComponent"], _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_14__["LobbyComponent"]],
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_language_dictionary_service__WEBPACK_IMPORTED_MODULE_3__["DictionaryService"], _services_name_service__WEBPACK_IMPORTED_MODULE_4__["NameService"], _player_slide_service__WEBPACK_IMPORTED_MODULE_20__["SlideService"]],
            exports: [_editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_19__["CanvasComponent"], _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_7__["LanguageBarComponent"], _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_14__["LobbyComponent"], _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_10__["FinderComponent"], _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_11__["SlideHeaderComponent"], _common_rulers_rulers_component__WEBPACK_IMPORTED_MODULE_18__["RulersComponent"],
                _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_12__["SlideFooterComponent"], _common_bread_crumbs_bread_crumbs_component__WEBPACK_IMPORTED_MODULE_13__["BreadCrumbsComponent"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__["FileDropModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_17__["ColorPickerModule"], _directives_adapt_height__WEBPACK_IMPORTED_MODULE_15__["AdaptHeightDirective"], angular2_draggable__WEBPACK_IMPORTED_MODULE_6__["AngularDraggableModule"],
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

module.exports = ".white {\n  color: white; }\n\n.screen {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.huge {\n  font-size: 70px;\n  padding: 40px;\n  border: 1px solid rgba(6, 19, 19, 0.932);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -400px;\n  width: 800px;\n  height: 200px;\n  text-align: center;\n  font-family: 'Montserrat', 'Roboto', sans-serif;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5ZXIvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xccGxheWVyXFxwbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxhQUFZLEVBQUc7O0FBRXZCO0VBQ0UsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFRO0VBQ1IsU0FBUTtFQUNSLFVBQVMsRUFDVjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsY0FBWTtFQUNaLHlDQUF3QztFQUN4QyxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFVBQVM7RUFDVCxtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGdEQUErQztFQUMvQywyQ0FBMEMsRUFFM0MiLCJmaWxlIjoic3JjL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUge2NvbG9yOiB3aGl0ZTt9XHJcbiBcclxuLnNjcmVlbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0IDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuLmh1Z2Uge1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgcGFkZGluZzo0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2LCAxOSwgMTksIDAuOTMyKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00MDBweDtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fontsArr_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.playerPlan = playerPlan;
                if (this.playerPlan) {
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
                        window.WebFont.load({
                            google: {
                                families: Object.keys(fontsArr_1)
                            }
                        });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    SlideService.prototype.play = function (playerPlan, ctx, width, height, mode) {
        var _this = this;
        this.playerPlan = playerPlan;
        var images = [];
        this.list = this.playerPlan[0].list;
        prerender(this.list[this.itemIndex]);
        this.itemIndex++;
        if (mode !== 'single') {
            setInterval(function () {
                if (_this.itemIndex >= _this.list.length) {
                    _this.itemIndex = 0;
                }
                prerender(_this.list[_this.itemIndex]);
                _this.itemIndex++;
            }, 5000);
        }
        function prerender(item) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var _a;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            ctx.clearRect(0, 0, width, height);
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
                        case 1: return [4 /*yield*/, render_image_to_canvas(item.resource, 0, 0, width, height)];
                        case 2: return [2 /*return*/, _b.sent()];
                        case 3: return [4 /*yield*/, renderElementsToTags(item.elements)];
                        case 4: return [2 /*return*/, _b.sent()];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        }
        function renderElementsToTags(elements) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    elements.forEach(function (element) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _a;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    console.log(element.zIndex, element.type);
                                    _a = element.type;
                                    switch (_a) {
                                        case 'image': return [3 /*break*/, 1];
                                        case 'text': return [3 /*break*/, 3];
                                    }
                                    return [3 /*break*/, 4];
                                case 1: return [4 /*yield*/, render_image_to_canvas(element.src, element.position.x, element.position.y, element.width, element.height)];
                                case 2: return [2 /*return*/, _b.sent()];
                                case 3: return [2 /*return*/, render_text_to_canvas(element)];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        }
        function loadImage(url) {
            return new Promise(function (resolve, reject) {
                var img = new Image();
                img.addEventListener('load', function (e) { return resolve(img); });
                img.addEventListener('error', function () {
                    reject(new Error("Failed to load image's URL: " + url));
                });
                img.src = url;
            });
        }
        function render_text_to_canvas(element) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (element.text) {
                        ctx.font = element.fontSize + "px " + element.font;
                        ctx.fillStyle = "" + element.color;
                        ctx.fillText(element.text, element.position.x, element.position.y + 70);
                    }
                    return [2 /*return*/];
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
                                    case 0: return [4 /*yield*/, loadImage([url])];
                                    case 1:
                                        img = _a.sent();
                                        images.push(img);
                                        ctx.drawImage(img[0], x, y);
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