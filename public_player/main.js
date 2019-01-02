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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
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

module.exports = "\r\n<router-outlet></router-outlet>"

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