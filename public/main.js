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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n<div>\r\n <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUge2NvbG9yOiB3aGl0ZTt9Il19 */"

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
        this.userService = userService;
        this.translate = translate;
        this.title = 'SignNature';
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
/*! exports provided: appRoutes, HttpLoaderFactory, tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
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
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _screens_screens_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./screens/screens.module */ "./src/app/screens/screens.module.ts");
/* harmony import */ var _library_library_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./library/library.module */ "./src/app/library/library.module.ts");
/* harmony import */ var _playlists_playlists_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./playlists/playlists.module */ "./src/app/playlists/playlists.module.ts");
/* harmony import */ var _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./timelines/timelines.component */ "./src/app/timelines/timelines.component.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");

































var appRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
].concat(_user_user_module__WEBPACK_IMPORTED_MODULE_19__["userRoutes"], [
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_23__["AuthGuardService"]], children: [
            {
                path: '',
                component: _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_27__["TimelinesComponent"],
            }
        ].concat(_screens_screens_module__WEBPACK_IMPORTED_MODULE_24__["screenRoutes"], _library_library_module__WEBPACK_IMPORTED_MODULE_25__["libraryRoutes"], _playlists_playlists_module__WEBPACK_IMPORTED_MODULE_26__["playlistsRoutes"])
    },
]);
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__["TranslateHttpLoader"](http);
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
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
                _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_27__["TimelinesComponent"]
            ],
            imports: [
                ng2_dragula__WEBPACK_IMPORTED_MODULE_29__["DragulaModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_30__["ColorPickerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]
                    }
                }),
                _shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
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
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_17__["OrderModule"],
                _ng_dynamic_forms_ui_bootstrap__WEBPACK_IMPORTED_MODULE_6__["DynamicFormsBootstrapUIModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_19__["UserModule"],
                _screens_screens_module__WEBPACK_IMPORTED_MODULE_24__["ScreensModule"],
                _library_library_module__WEBPACK_IMPORTED_MODULE_25__["LibraryModule"],
                _playlists_playlists_module__WEBPACK_IMPORTED_MODULE_26__["PlaylistsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            providers: [_services_language_service__WEBPACK_IMPORTED_MODULE_28__["LanguageService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_23__["AuthGuardService"],
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

/***/ "./src/app/common/lobby.item/lobby.item.component.html":
/*!*************************************************************!*\
  !*** ./src/app/common/lobby.item/lobby.item.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngTemplateOutlet]=\"template || defaultTemplate\" [ngTemplateOutletContext]=\"{item: item}\">\n</ng-template>\n\n\n<ng-template #defaultTemplate let-item=\"item\">\n  <div class=\"m10\">\n    <span class=\"label\">{{item.Name}}</span>\n  </div>\n</ng-template>\n\n\n<ng-template #imageTemplate let-item=\"item\">\n  <div class=\"fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n    <span class=\"label\">{{item.Name}}</span>\n  </div>\n</ng-template>\n\n<ng-template #playlistTemplate let-item=\"item\">\n  <div class=\"m10\">\n    <span class=\"label\">{{item.Name}}</span>\n    <span class=\"label\">({{item.list.length}})</span>\n  </div>\n</ng-template>\n\n\n<ng-template #slideTemplate let-item=\"item\">\n  <div class=\"canvas-bg\">\n    <app-canvas [item]=\"item\" [width]=\"230\" [height]=\"150\" [scale]=\"0.25\"></app-canvas>\n    <span class=\"label\">{{item.Name}}</span>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/common/lobby.item/lobby.item.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/common/lobby.item/lobby.item.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  margin-right: 5px;\n  margin-left: 5px; }\n\n.sqr-btn {\n  padding: 15px;\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr {\n  opacity: 0.9;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) !important; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 35;\n  background: #fff;\n  margin-bottom: 40px; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn._meta_active, .sqr._meta_active {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(69, 59, 59, 0.2);\n  border-radius: 35;\n  background: #fff;\n  margin-bottom: 40px; }\n\n.sqr-btn._meta_active .sqr-toolbar, .sqr._meta_active .sqr-toolbar {\n    visibility: visible; }\n\n.fancy-thumb {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYmJ5Lml0ZW0vQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxjb21tb25cXGxvYmJ5Lml0ZW1cXGxvYmJ5Lml0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFHbkI7RUFDSSxhQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxZQUFZO0VBQ1osa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUExQixrREFBMEI7RUFDMUIscURBQW9ELEVBQUE7O0FBR3hEO0VBQ0ksVUFBVTtFQUVWLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsb0NBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBUHZCO0lBVVEsbUJBQW1CLEVBQUE7O0FBSzNCO0VBQ0ksVUFBVTtFQUVWLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsdUNBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBUHZCO0lBVVEsbUJBQW1CLEVBQUE7O0FBSzNCO0VBR0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9sb2JieS5pdGVtL2xvYmJ5Lml0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG59XHJcblxyXG4uc3FyLWJ0bntcclxuICAgIHBhZGRpbmc6MTVweDtcclxuICAgIGZvbnQtc2l6ZTogODRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnNxcntcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpIWltcG9ydGFudDtcclxuIFxyXG59XHJcbi5zcXItYnRuOmhvdmVyLC5zcXI6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgXHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5zcXItYnRuLl9tZXRhX2FjdGl2ZSwuc3FyLl9tZXRhX2FjdGl2ZXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSg2OSwgNTksIDU5LCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuIFxyXG4gICAgLnNxci10b29sYmFye1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uZmFuY3ktdGh1bWJcclxueyAgIFxyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufSJdfQ== */"

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

module.exports = "<ng-template #defaultToolbar let-item=\"item\">\n  <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n    <li>\n      <button class=\"btn btn-secondary btn-md btn-danger\" (click)=\"deleteItemHandler(item);\"> <i class=\"fas fa-trash\"></i>\n      </button>\n    </li>\n    <li>\n      <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"editItemHandler(item);\"> <i class=\"fas fa-edit\"></i>\n      </button>\n    </li>\n  </ul>\n</ng-template>\n\n\n<div class=\"lobby mt10\" *ngIf=\"mode==='media'\">\n  <div *ngIf=\"!noNew\" class=\"sqr shadow sqr-btn\" (click)=\"newItemHandler()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{item._meta_active}}\" (click)=\"selectItemHandler(item)\">\n    <app-lobby-item [item]=\"item\" [model]=\"model\"></app-lobby-item>\n    <ng-template [ngTemplateOutlet]=\"toolbar || defaultToolbar\" [ngTemplateOutletContext]=\"{item: item}\">\n    </ng-template>\n  </div>\n</div>\n\n<div class=\"lobby \" *ngIf=\"mode==='media-finder'\">\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{item._meta_active}}\">\n    <app-lobby-item [item]=\"item\" [model]=\"model\"></app-lobby-item>\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"selectItemHandler(item);\"> <i class=\"fas fa-plus-square\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"lobby \" *ngIf=\"mode==='object-finder'\">\n  <div *ngFor=\"let item of items\" class=\"sqr shadow\">\n    <app-lobby-item [item]=\"item\" [model]=\"model\"></app-lobby-item>\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"selectItemHandler(item);\"> <i class=\"fas fa-plus-square\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"lobby  mt10\" *ngIf=\"mode==='object'\">\n  <div *ngIf=\"!noNew\" class=\"sqr shadow sqr-btn\" (click)=\"newItemHandler()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{item._meta_active}}\" (click)=\"selectItemHandler(item)\">\n    <app-lobby-item [item]=\"item\" [model]=\"model\"></app-lobby-item>\n\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-danger\" (click)=\"deleteItemHandler(item);\"> <i class=\"fas fa-trash\"></i>\n        </button>\n      </li>\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"editItemHandler(item);\"> <i class=\"fas fa-edit\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/lobby/lobby.component.scss":
/*!***************************************************!*\
  !*** ./src/app/common/lobby/lobby.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  margin-right: 5px;\n  margin-left: 5px; }\n\n.sqr-btn {\n  padding: 15px;\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr {\n  opacity: 0.9;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) !important; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 35;\n  background: #fff;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2) !important; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn._meta_active, .sqr._meta_active {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(69, 59, 59, 0.2);\n  border-radius: 35;\n  background: #fff;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2) !important; }\n\n.sqr-btn._meta_active .sqr-toolbar, .sqr._meta_active .sqr-toolbar {\n    visibility: visible; }\n\n.fancy-thumb {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYmJ5L0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcY29tbW9uXFxsb2JieVxcbG9iYnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFHbkI7RUFDSSxhQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxZQUFZO0VBQ1osa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUExQixrREFBMEI7RUFDMUIscURBQW9ELEVBQUE7O0FBR3hEO0VBQ0ksVUFBVTtFQUVWLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsb0NBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBRW5CLHFEQUFvRCxFQUFBOztBQVR4RDtJQVlRLG1CQUFtQixFQUFBOztBQUszQjtFQUNJLFVBQVU7RUFFVixzQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHVDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUVuQixxREFBb0QsRUFBQTs7QUFUeEQ7SUFZUSxtQkFBbUIsRUFBQTs7QUFLM0I7RUFHSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2xvYmJ5L2xvYmJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG5cclxuLnNxci1idG57XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICBmb250LXNpemU6IDg0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5zcXJ7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKSFpbXBvcnRhbnQ7XHJcbiBcclxufVxyXG4uc3FyLWJ0bjpob3Zlciwuc3FyOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSkhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLnNxci10b29sYmFye1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uc3FyLWJ0bi5fbWV0YV9hY3RpdmUsLnNxci5fbWV0YV9hY3RpdmV7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoNjksIDU5LCA1OSwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMikhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5mYW5jeS10aHVtYlxyXG57ICAgXHJcbiAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59Il19 */"

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

module.exports = ".inline-topper {\n  pointer-events: none;\n  z-index: 0;\n  height: 51px;\n  padding-top: 10px; }\n  .inline-topper .icon {\n    margin: 8px;\n    vertical-align: top; }\n  .inline-topper h4 {\n    display: inline;\n    vertical-align: top; }\n  .inline-topper .bar-icon {\n    margin-left: 15px; }\n  .topper {\n  pointer-events: none;\n  z-index: 0;\n  height: 65px;\n  position: absolute;\n  padding-top: 30px;\n  top: -30px;\n  left: -15px;\n  right: -15px; }\n  .topper .icon {\n    margin: 8px;\n    vertical-align: top; }\n  .topper h4 {\n    display: inline;\n    vertical-align: top; }\n  .topper .bar-icon {\n    margin-left: 15px; }\n  :host-context(.ltr) .close-button-topper {\n  right: -15px; }\n  :host-context(.rtl) .close-button-topper {\n  left: -15px; }\n  .close-button-topper {\n  position: absolute;\n  z-index: 2000;\n  top: -15px;\n  width: 52px;\n  height: 52px;\n  background-color: #96ff00;\n  color: white;\n  cursor: pointer; }\n  .close-button-inline-topper {\n  color: white;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  width: 52px;\n  height: 52px;\n  background-color: green; }\n  .save-btn-inline-topper:hover {\n  font-size: 1.5em; }\n  .save-btn-inline-topper {\n  transition: all .2s ease;\n  color: white;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  width: 52px;\n  height: 52px;\n  background-color: orange;\n  color: white;\n  cursor: pointer; }\n  .save-btn-inline-topper.true {\n    background-color: red;\n    color: black; }\n  .toolbar {\n  position: absolute;\n  top: 0;\n  transition: all .2s ease; }\n  :host-context(.rtl) .toolbar {\n  left: 110px; }\n  :host-context(.rtl) .save-btn-topper {\n  left: 37px; }\n  :host-context(.rtl) .save-btn-inline-topper {\n  float: right;\n  left: 52px; }\n  :host-context(.rtl) .close-button-inline-topper {\n  float: right;\n  left: 0px; }\n  :host-context(.ltr) .toolbar {\n  right: 110px; }\n  :host-context(.ltr) .save-btn-topper {\n  right: 37px; }\n  :host-context(.ltr) .save-btn-inline-topper {\n  float: left;\n  right: 52px; }\n  :host-context(.ltr) .close-button-inline-topper {\n  float: right;\n  right: 0px; }\n  .save-btn-topper {\n  color: white;\n  position: absolute;\n  top: -15px;\n  width: 52px;\n  height: 52px;\n  background-color: #fc6600;\n  cursor: pointer; }\n  .save-btn-inline-topper:active,\n.save-btn-inline-topper:hover,\n.save-btn-topper:active,\n.save-btn-topper:hover,\n.btn-tool:hover,\n.btn-tool:active {\n  font-size: 1.5em; }\n  .close-button-inline-topper:active,\n.close-button-inline-topper:hover,\n.close-button-topper:active,\n.close-button-topper:hover {\n  font-size: 1.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NsaWRlLWhlYWRlci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxcc2xpZGUtaGVhZGVyXFxzbGlkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9zbGlkZS1oZWFkZXIvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixZQUFZO0VBRVosaUJBQWlCLEVBQUE7RUFMckI7SUFPUSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUFSM0I7SUFXUSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUFaM0I7SUFlUSxpQkFBaUIsRUFBQTtFQUl6QjtFQUNJLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsWUFBWTtFQUVaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFUaEI7SUFXUSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUFaM0I7SUFlUSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUFoQjNCO0lBbUJRLGlCQUFpQixFQUFBO0VBSXpCO0VBSVEsWUFBWSxFQUFBO0VBR25CO0VBR08sV0FBVyxFQUFBO0VBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQ3JEYTtFRHVEYixZQUFZO0VBQ1osZUFBZSxFQUFBO0VBU3ZCO0VBQ0EsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFFbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7RUFPbkI7RUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtFQUlJLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZUFBZTtFQUdmLGtCQUFrQjtFQUVsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFFeEIsWUFBWTtFQUNaLGVBQWUsRUFBQTtFQWpCbkI7SUFvQlEscUJBQXFCO0lBQ3JCLFlBQVksRUFBQTtFQUlwQjtFQUNJLGtCQUFrQjtFQUNsQixNQUFLO0VBR0wsd0JBQXdCLEVBQUE7RUFNNUI7RUFHUSxXQUFXLEVBQUE7RUFIbkI7RUFRUSxVQUFVLEVBQUE7RUFSbEI7RUFZUSxZQUFZO0VBQ1osVUFBVSxFQUFBO0VBYmxCO0VBa0JRLFlBQVk7RUFHWixTQUFTLEVBQUE7RUFLakI7RUFHUSxZQUFZLEVBQUE7RUFIcEI7RUFRUSxXQUFXLEVBQUE7RUFSbkI7RUFZUSxXQUFXO0VBQ1gsV0FBVyxFQUFBO0VBYm5CO0VBaUJRLFlBQVk7RUFDWixVQUFVLEVBQUE7RUFLbEI7RUFFSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQ3RMYztFRHVMZCxlQUFlLEVBQUE7RUFLbkI7Ozs7OztFQVFJLGdCQUFnQixFQUFBO0VBSXBCOzs7O0VBTUksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vc2xpZGUtaGVhZGVyL3NsaWRlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3Nhc3MvX3ZhcmlhYmxlcyc7XHJcblxyXG5cclxuXHJcblxyXG4uaW5saW5lLXRvcHBlcntcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBoZWlnaHQ6IDUxcHg7ICAgXHJcbiAgICAgICBcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4OyAgICBcclxuICAgIC5pY29ue1xyXG4gICAgICAgIG1hcmdpbjogOHB4OyAgICAgIFxyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIC5iYXItaWNvbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRvcHBlcntcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBoZWlnaHQ6IDY1cHg7ICAgXHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG4gICAgbGVmdDogLTE1cHg7XHJcbiAgICByaWdodDogLTE1cHg7XHJcbiAgICAuaWNvbntcclxuICAgICAgICBtYXJnaW46IDhweDsgICAgICBcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbiAgICAuYmFyLWljb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmx0cilcclxuIHtcclxuICAgXHJcbiAgICAuY2xvc2UtYnV0dG9uLXRvcHBlcntcclxuICAgICAgICByaWdodDogLTE1cHg7XHJcbiAgICB9XHJcbiB9XHJcbiA6aG9zdC1jb250ZXh0KC5ydGwpXHJcbiB7XHJcbiAgICAuY2xvc2UtYnV0dG9uLXRvcHBlcntcclxuICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgIH1cclxuIH1cclxuICAgIC5jbG9zZS1idXR0b24tdG9wcGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAyMDAwOyAgICAgIFxyXG4gICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDUycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmVlbjtcclxuXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBcclxuXHJcbiAgIFxyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiBcclxuXHJcbi5jbG9zZS1idXR0b24taW5saW5lLXRvcHBlciB7ICAgIFxyXG5jb2xvcjogd2hpdGU7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5cclxudG9wOiAwcHg7XHJcbndpZHRoOiA1MnB4O1xyXG5oZWlnaHQ6IDUycHg7XHJcbmJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG5cclxuIFxyXG4gXHJcblxyXG5cclxufVxyXG4gICAgLnNhdmUtYnRuLWlubGluZS10b3BwZXI6aG92ZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH0gXHJcbiAgICAuc2F2ZS1idG4taW5saW5lLXRvcHBlclxyXG4gICAge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICBcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICB3aWR0aDogNTJweDtcclxuICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG5cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgICYudHJ1ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b29sYmFye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgOmhvc3QtY29udGV4dCgucnRsKVxyXG4gICAge1xyXG4gICAgICAgIC50b29sYmFyeyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxlZnQ6IDExMHB4OyAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2F2ZS1idG4tdG9wcGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZWZ0OiAzN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2F2ZS1idG4taW5saW5lLXRvcHBlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBsZWZ0OiA1MnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlLWJ1dHRvbi1pbmxpbmUtdG9wcGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG5cclxuICAgICAgICAgICAgbGVmdDogMHB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgOmhvc3QtY29udGV4dCgubHRyKVxyXG4gICAge1xyXG4gICAgICAgIC50b29sYmFyeyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMTBweDsgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNhdmUtYnRuLXRvcHBlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDM3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zYXZlLWJ0bi1pbmxpbmUtdG9wcGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgcmlnaHQ6IDUycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbG9zZS1idXR0b24taW5saW5lLXRvcHBlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnNhdmUtYnRuLXRvcHBlclxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICB3aWR0aDogNTJweDtcclxuICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW9yYW5nZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zYXZlLWJ0bi1pbmxpbmUtdG9wcGVyOmFjdGl2ZSwgICAgXHJcbiAgICAuc2F2ZS1idG4taW5saW5lLXRvcHBlcjpob3ZlcixcclxuICAgIC5zYXZlLWJ0bi10b3BwZXI6YWN0aXZlLFxyXG4gICAgLnNhdmUtYnRuLXRvcHBlcjpob3ZlcixcclxuICAgIC5idG4tdG9vbDpob3ZlcixcclxuICAgIC5idG4tdG9vbDphY3RpdmUsXHJcbiAgICB7ICAgXHJcbiAgICAgICBcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5jbG9zZS1idXR0b24taW5saW5lLXRvcHBlcjphY3RpdmUsICAgIFxyXG4gICAgLmNsb3NlLWJ1dHRvbi1pbmxpbmUtdG9wcGVyOmhvdmVyLFxyXG4gICAgLmNsb3NlLWJ1dHRvbi10b3BwZXI6YWN0aXZlLFxyXG4gICAgLmNsb3NlLWJ1dHRvbi10b3BwZXI6aG92ZXJcclxuICAgIHsgICBcclxuICAgICAgICBcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgXHJcbiBcclxuIFxyXG4gIiwiXHJcbiRjb2xvci1ncmF5OiAjZTNlNGU1O1xyXG4kY29sb3ItZGFya2JsdWUxOiAjMTYyNDMzO1xyXG4kY29sb3ItZGFya2JsdWUyOiAjMmE0NTYzO1xyXG4kY29sb3ItbGlnaHRibHVlMTogIzI2NDM1NjtcclxuJGNvbG9yLWxpZ2h0Ymx1ZTI6ICMzYzczOTk7XHJcbiRjb2xvci1vcmFuZ2U6ICNmYzY2MDA7XHJcbiRjb2xvci1jeWFuOiAjMDBmZmY2O1xyXG4kY29sb3Itc2NyZWVuOiAjMDBjZmZmO1xyXG4kY29sb3Itc2NyZWVuLWdyb3VwOiAjMDBmZmY2O1xyXG4kY29sb3ItbGlicmFyeTogIzk2ZmYwMDtcclxuJGNvbG9yLXllbGxvdzogI2ZmZmYwMDtcclxuJGNvbG9yLXB1cnBsZTogI2YzYjdlYjtcclxuJGNvbG9yLWdyZWVuOiAjOTZmZjAwO1xyXG4gXHJcblxyXG4gIl19 */"

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

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <nav id=\"sidebar\" [class]=\"activeClass\">\n        <div class=\"sidebar-header\">\n            <h3>Sign-Nature</h3>\n            <ul class=\"sidebar-header-bar\">\n                <li class=\"nav-item\" class=\"language-bar\">\n                    <app-language-bar></app-language-bar>\n                </li>\n                <li class=\"nav-item\">\n                    <button type=\"button\" (click)=\"toggleSidebar()\" id=\"sidebarCollapse\" class=\"btn-collapse\">\n                        <i class=\"fas fa-align-justify\"></i>\n                    </button>\n                </li>\n            </ul>\n            <strong>\n                <img src=\"assets/signnature_icon.png\" width=\"40\">\n            </strong>\n        </div>\n        <ul class=\"list-unstyled components\">\n            <li>\n                <a routerLink=\"/\" title=\"{{'NAVBAR.HOME' | translate}}\">\n                    <i class=\"fas fa-home\"></i>&nbsp;\n                    <span>\n                        {{\"NAVBAR.HOME\" | translate}}</span>\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"screens\" routerLinkActive=\"screen-cat\" title=\"{{'NAVBAR.SCREENS' | translate}}\">\n                    <i class=\"fas fa-desktop\"></i>&nbsp;\n                    <span class=\"nav-text\">\n                        {{\"NAVBAR.SCREENS\" | translate}}</span>\n\n                </a></li>\n            <li>\n                <a routerLink=\"screen-groups\" routerLinkActive=\"screen-group-cat\" title=\"{{'NAVBAR.SCREEN-GROUPS' | translate}}\">\n                    <i class=\"fas fa-clone\"></i>&nbsp;  <span class=\"nav-text\">\n                        {{\"NAVBAR.SCREEN-GROUPS\" | translate}}</span>\n\n                </a></li>\n            <li>\n                <a routerLinkActive=\"library-cat\" routerLink=\"library\" title=\"{{'NAVBAR.LIBRARY' | translate}}\">\n                    <i class=\"fas fa-copy\"></i>&nbsp;   <span class=\"nav-text\">\n                        {{\"NAVBAR.LIBRARY\" | translate}}</span>\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"playlists\" routerLinkActive=\"playlist-cat\" title=\"{{'NAVBAR.PLAYLISTS' | translate}}\">\n                    <i class=\"fas fa-step-forward\"></i>&nbsp;  <span class=\"nav-text\">\n                        {{\"NAVBAR.PLAYLISTS\" | translate}}</span>\n\n                </a>\n            </li>\n\n        </ul>\n    </nav>\n\n    <div id=\"content\" class=\"content-bg\">\n        <div class=\"library-cat\"></div>\n        <router-outlet></router-outlet>\n    </div>\n    <footer class=\"footer closed\">\n        {{'DASHBOARD.FOOTER' | translate}}\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar .nav-text {\n  display: inline-block; }\n\n#sidebar.active .nav-text {\n  display: none; }\n\n.active-link {\n  color: #c5c5c5;\n  background: #3f5efb;\n  background: radial-gradient(circle, #3f5efb 0%, #fc466b 100%); }\n\n.active-link #LibrarySubmenu {\n    display: block !important; }\n\n.sidebar-header-bar {\n  clear: both;\n  background-color: #162433; }\n\n.sidebar-header-bar li {\n    float: right; }\n\n.sidebar-header-bar li.language-bar {\n    width: 150px; }\n\n.btn-collapse {\n  color: #3c7399;\n  background-color: transparent;\n  margin-right: 7px;\n  width: 40px;\n  height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFHUSxxQkFBcUIsRUFBQTs7QUFPN0I7RUFHWSxhQUFhLEVBQUE7O0FBSXpCO0VBQ0ksY0FBYztFQUNkLG1CQUEwQjtFQUMxQiw2REFBa0YsRUFBQTs7QUFIdEY7SUFLUSx5QkFBd0IsRUFBQTs7QUFLaEM7RUFDSSxXQUFXO0VBQ1gseUJDN0JxQixFQUFBOztBRDJCekI7SUFJUSxZQUFZLEVBQUE7O0FBSnBCO0lBT1EsWUFBWSxFQUFBOztBQUdwQjtFQUdJLGNDckNzQjtFRHNDdEIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Nhc3MvX3ZhcmlhYmxlcyc7XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgICAubmF2LXRleHR7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcblxyXG5cclxuI3NpZGViYXIuYWN0aXZlIHtcclxuICAgXHJcbiAgICAgICAgLm5hdi10ZXh0e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgXHJcbn1cclxuLmFjdGl2ZS1saW5re1xyXG4gICAgY29sb3I6ICNjNWM1YzU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjMsOTQsMjUxKTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoNjMsOTQsMjUxLDEpIDAlLCByZ2JhKDI1Miw3MCwxMDcsMSkgMTAwJSk7XHJcbiAgICAjTGlicmFyeVN1Ym1lbnV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4gXHJcbi5zaWRlYmFyLWhlYWRlci1iYXJ7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYXJrYmx1ZTE7XHJcbiAgICBsaXtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBsaS5sYW5ndWFnZS1iYXJ7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG59XHJcbi5idG4tY29sbGFwc2V7ICBcclxuICAgXHJcbiAgICBcclxuICAgIGNvbG9yOiRjb2xvci1saWdodGJsdWUyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4iLCJcclxuJGNvbG9yLWdyYXk6ICNlM2U0ZTU7XHJcbiRjb2xvci1kYXJrYmx1ZTE6ICMxNjI0MzM7XHJcbiRjb2xvci1kYXJrYmx1ZTI6ICMyYTQ1NjM7XHJcbiRjb2xvci1saWdodGJsdWUxOiAjMjY0MzU2O1xyXG4kY29sb3ItbGlnaHRibHVlMjogIzNjNzM5OTtcclxuJGNvbG9yLW9yYW5nZTogI2ZjNjYwMDtcclxuJGNvbG9yLWN5YW46ICMwMGZmZjY7XHJcbiRjb2xvci1zY3JlZW46ICMwMGNmZmY7XHJcbiRjb2xvci1zY3JlZW4tZ3JvdXA6ICMwMGZmZjY7XHJcbiRjb2xvci1saWJyYXJ5OiAjOTZmZjAwO1xyXG4kY29sb3IteWVsbG93OiAjZmZmZjAwO1xyXG4kY29sb3ItcHVycGxlOiAjZjNiN2ViO1xyXG4kY29sb3ItZ3JlZW46ICM5NmZmMDA7XHJcbiBcclxuXHJcbiAiXX0= */"

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
/* harmony import */ var _services_responsive_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/responsive.service */ "./src/app/services/responsive.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route, responsiveService) {
        this.route = route;
        this.responsiveService = responsiveService;
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
        this.responsiveService.toggle(this.toggled);
        if (this.toggled) {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_responsive_service__WEBPACK_IMPORTED_MODULE_3__["ResponsiveService"]])
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
    DataComponent.prototype.createItem = function (obj) {
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
    DataComponent.prototype.newItem = function (obj) {
        this.item = obj || {};
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
                this.el.nativeElement.style.overflowY = 'auto';
                this.el.nativeElement.style.overflowX = 'hidden';
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
            _this.el.nativeElement.style.overflowX = 'hidden';
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

/***/ "./src/app/editor/add/add.component.html":
/*!***********************************************!*\
  !*** ./src/app/editor/add/add.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cube-container\">\r\n    <div class=\"cube\">\r\n        <div class=\"plus\">\r\n            <div class=\"plus-horizontal\"></div>\r\n            <div class=\"plus-vertical\"></div>\r\n        </div>\r\n        <div class=\"quadrant\">\r\n            <div class=\"quadrant__item\">\r\n                <div class=\"quadrant__item__content\">\r\n                    <button class=\"arrow-up\" (click)=\"add('text')\">\r\n                        <i class=\"fas fa-font\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"quadrant__item\">\r\n                <div class=\"quadrant__item__content\">\r\n                    <button class=\"arrow-right\" (click)=\"add('image')\">\r\n                        <i class=\"fas fa-images\"></i>\r\n                    </button>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"quadrant__item\">\r\n                <div class=\"quadrant__item__content\">\r\n                    <button class=\"arrow-left\" (click)=\"add('video')\">\r\n                        <i class=\"fas fa-video\"></i>\r\n                    </button>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"quadrant__item\">\r\n                <div class=\"quadrant__item__content\">\r\n                    <button class=\"arrow-down\" (click)=\"add('plugin')\">\r\n                        <i class=\"fas fa-plug\"></i>\r\n                    </button>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/editor/add/add.component.scss":
/*!***********************************************!*\
  !*** ./src/app/editor/add/add.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cube-container {\n  position: absolute;\n  top: 70;\n  z-index: 1050; }\n\n.cube {\n  width: 40px;\n  height: 40px;\n  background: #f45c41;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n  transition: background 0.2s; }\n\n.plus-vertical,\n.plus-horizontal {\n  background: #fff;\n  border-radius: 4px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 10; }\n\n.plus-vertical {\n  height: 50%;\n  width: 5px; }\n\n.plus-horizontal {\n  width: 50%;\n  height: 5px; }\n\n.quadrant {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.quadrant__item {\n  width: 50%;\n  height: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f45c41;\n  border-radius: 6px;\n  position: relative; }\n\n.quadrant__item__content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg);\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.arrow-down,\n.arrow-left,\n.arrow-right,\n.arrow-up {\n  opacity: 0;\n  color: white;\n  font-size: 24px; }\n\n.arrow-up {\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px); }\n\n.arrow-down {\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px); }\n\n.arrow-left {\n  -webkit-transform: translateX(10px);\n          transform: translateX(10px); }\n\n.arrow-right {\n  -webkit-transform: translateX(-10px);\n          transform: translateX(-10px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2FkZC9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGVkaXRvclxcYWRkXFxhZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsT0FBTTtFQUVOLGFBQWEsRUFBQTs7QUFpQmpCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRzdCOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsdURBQStDO1VBQS9DLCtDQUErQztFQUMvQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUd6Qjs7OztFQUlHLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdsQjtFQUNFLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxvQ0FBNEI7VUFBNUIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLG9DQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxyXG4uY3ViZS1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NzA7XHJcbiAgIFxyXG4gICAgei1pbmRleDogMTA1MDtcclxufVxyXG5cclxuLy8gOmhvc3QtY29udGV4dCgubHRyKVxyXG4vLyB7XHJcbi8vICAgLmN1YmUtY29udGFpbmVyXHJcbi8vICAgICB7XHJcbi8vICAgICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICA6aG9zdC1jb250ZXh0KC5ydGwpXHJcbi8vICAge1xyXG4vLyAgICAgLmN1YmUtY29udGFpbmVyXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi5jdWJlIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y0NWM0MTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xyXG59XHJcblxyXG4ucGx1cy12ZXJ0aWNhbCxcclxuLnBsdXMtaG9yaXpvbnRhbCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnBsdXMtdmVydGljYWwge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbi5wbHVzLWhvcml6b250YWwge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5xdWFkcmFudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5xdWFkcmFudF9faXRlbSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2Y0NWM0MTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucXVhZHJhbnRfX2l0ZW1fX2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFycm93LWRvd24sXHJcbi5hcnJvdy1sZWZ0LFxyXG4uYXJyb3ctcmlnaHQsXHJcbi5hcnJvdy11cCB7XHJcbiAgIG9wYWNpdHk6IDA7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uYXJyb3ctdXAge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxufVxyXG5cclxuLmFycm93LWRvd24ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbn1cclxuXHJcbi5hcnJvdy1sZWZ0IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbn1cclxuXHJcbi5hcnJvdy1yaWdodCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/editor/add/add.component.ts":
/*!*********************************************!*\
  !*** ./src/app/editor/add/add.component.ts ***!
  \*********************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var AddComponent = /** @class */ (function () {
    function AddComponent(_ngZone, sanitizer) {
        this._ngZone = _ngZone;
        this.sanitizer = sanitizer;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddComponent.prototype.add = function (type) {
        this.selected.emit(type);
    };
    AddComponent.prototype.ngOnInit = function () {
        var quadrantItems = document.querySelectorAll('.quadrant__item');
        var svgs = document.querySelectorAll('svg');
        var cube = document.querySelector('.cube');
        var closeButton = document.querySelector('.quadrant__item__content--close');
        var isInside = false;
        var tl = new window.TimelineLite({ paused: true });
        tl.timeScale(1.6);
        tl.to('.cube', 0.4, { rotation: 45, width: '120px', height: '120px', ease: window.Expo.easeOut }, 'first');
        tl.to('.plus .plus-vertical', 0.3, { height: '0', backgroundColor: '#f45c41', ease: window.Power1.easeIn }, 'first');
        tl.to('.plus .plus-horizontal', 0.3, { width: '0', backgroundColor: '#f45c41', ease: window.Power1.easeIn }, 'first');
        tl.to('.cube', 0, { backgroundColor: 'transparent' });
        tl.to(quadrantItems[0], 0.15, { x: -5, y: -5 }, 'seperate');
        tl.to('.arrow-up', 0.2, { opacity: 1, y: 0 }, 'seperate+=0.2');
        tl.to(quadrantItems[1], 0.15, { x: 5, y: -5 }, 'seperate');
        tl.to('.arrow-right', 0.2, { opacity: 1, x: 0 }, 'seperate+=0.2');
        tl.to(quadrantItems[3], 0.15, { x: 5, y: 5 }, 'seperate');
        tl.to('.arrow-down', 0.2, { opacity: 1, y: 0 }, 'seperate+=0.2');
        tl.to(quadrantItems[2], 0.15, { x: -5, y: 5 }, 'seperate');
        tl.to('.arrow-left', 0.2, { opacity: 1, x: 0 }, 'seperate+=0.2');
        cube.addEventListener('mouseenter', playTimeline);
        cube.addEventListener('mouseleave', reverseTimeline);
        function playTimeline(e) {
            e.stopPropagation();
            tl.play();
        }
        function reverseTimeline(e) {
            e.stopPropagation();
            tl.timeScale(1.8);
            tl.reverse();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddComponent.prototype, "selected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('thumbObject'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], AddComponent.prototype, "thumbObject", void 0);
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/editor/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/editor/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/editor/canvas/canvas.component.html":
/*!*****************************************************!*\
  !*** ./src/app/editor/canvas/canvas.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item\" [ngStyle]=\"{'background-color': bgColor}\">      \r\n    <!-- <object #thumbObject type=\"image/svg+xml\"></object> -->\r\n    <canvas #thumbObject height=\"{{height}}\" width=\"{{width}}\"></canvas>\r\n</div>\r\n"

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
                    var element, ctx;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        element = this.thumbObject.first.nativeElement;
                        element.width = this.width;
                        element.height = this.height;
                        ctx = element.getContext('2d');
                        this.slideService.play([this.item], ctx, this.width, this.height, 'single');
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

/***/ "./src/app/editor/code-editor/code-editor.component.html":
/*!***************************************************************!*\
  !*** ./src/app/editor/code-editor/code-editor.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<ngx-monaco-editor (onInit)=\"onInit($event)\" class=\"high my-code-editor\" [options]=\"editorOptions\" [(ngModel)]=\"_code\">\n</ngx-monaco-editor>\n \n"

/***/ }),

/***/ "./src/app/editor/code-editor/code-editor.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/editor/code-editor/code-editor.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-code-editor {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  width: 100%;\n  height: 100%; }\n\n.my-code-editor .editorContainer {\n  height: calc(100vh - 100px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2NvZGUtZWRpdG9yL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcZWRpdG9yXFxjb2RlLWVkaXRvclxcY29kZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVkO0VBRUksMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvY29kZS1lZGl0b3IvY29kZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY29kZS1lZGl0b3Ige1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAubXktY29kZS1lZGl0b3Ige1xyXG4gICAgLmVkaXRvckNvbnRhaW5lciB7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/editor/code-editor/code-editor.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/editor/code-editor/code-editor.component.ts ***!
  \*************************************************************/
/*! exports provided: CodeEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeEditorComponent", function() { return CodeEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CodeEditorComponent = /** @class */ (function () {
    function CodeEditorComponent() {
        var _this = this;
        this.dummy = true;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.options = { printMargin: false };
        this.onChange = function (data) {
            _this.code = data;
        };
    }
    Object.defineProperty(CodeEditorComponent.prototype, "code", {
        set: function (code) {
            if (code !== this._code) {
                this._code = code;
            }
        },
        enumerable: true,
        configurable: true
    });
    CodeEditorComponent.prototype.ngOnChanges = function (changes) {
        this.notify.emit(changes.currentValue);
    };
    CodeEditorComponent.prototype.fullEdit = function () {
        window.open('assets/monaco.html');
    };
    CodeEditorComponent.prototype.onInit = function (editor) {
        var _this = this;
        this.editor = editor;
        this.editor.onKeyUp(function (change) {
            console.log(_this.editor.getValue());
            _this.notify.emit(_this.editor.getValue());
        });
    };
    CodeEditorComponent.prototype.ngOnInit = function () {
        this.editorOptions = { automaticLayout: true, theme: 'vs-dark', language: 'javascript' };
        // const interval = setInterval(() => {
        //   if (!(window as any).monaco) {
        //     return;
        //   }
        //   clearInterval(interval);
        // const fileName = `types/${this.scriptName}.d.ts`;
        // const javascriptDefaults = (window as any).monaco.languages.typescript.javascriptDefaults;
        // javascriptDefaults._extraLibs = {};
        // // extra libraries
        // if (!javascriptDefaults._extraLibs[fileName]) {
        //   if (!this.variables || !Array.isArray(this.variables)) {
        //     this.variables = [];
        //   }
        //   javascriptDefaults.addExtraLib([
        //     'declare class SkriboEnv {',
        //     ...this.variables.map((item) => {
        //       return `public static ${item.name}:any;`;
        //     }),
        //     'declare class Logger {',
        //     'static log(item:any, item1?:any, item2?:any, item3?:any):void;',
        //     '}',
        //     'declare class Util {',
        //     'static timespanToRange(timespan:string):{start: string, end:string};',
        //     '}',
        //     'declare class MccApp {',
        //     'static accounts();',
        //     'static select(account);',
        //     '}',
        //     'declare class Analytics {',
        //     'static Management: any ;',
        //     '};',
        //     'declare class AdWordsApp {',
        //     'static ads();',
        //     'static adGroups();',
        //     'static campaigns();',
        //     'static keywords();',
        //     'static report(query: string, options?:any);',
        //     'static currentAccount();',
        //     'static createLabel(label: string, description: string);',
        //     '};',
        //     'declare function SkriboPostResults(objectString:string);',
        //     'declare function SkriboLog(obj: any);',
        //     'declare function SkriboForAccounts(cb: Function, limit: number);',
        //     'declare const SkriboSyncUrl:string;',
        //     'declare class UrlFetchApp {',
        //     'static fetch(url:string, options: any)',
        //     '}',
        //     'declare class Utilities {',
        //     'static formatDate(date, timeZone, format)',
        //     '}',
        //     'declare class SpreadsheetApp {',
        //     'static create(name:string, cols?:number,rows?:number)',
        //     'static open(name:string)',
        //     'static openByUrl(SPREADSHEET_URL);',
        //     '}',
        //     'declare class DriveApp {',
        //     'static getFileById(name:string)',
        //     'static getRootFolder()',
        //     '}',
        //     'declare class Charts {',
        //     'static Position:any',
        //     '}'
        //   ].join('\n'), fileName);
        // }
        // this.editor = (window as any).monaco.editor.create(document.getElementById('monacocontainer'), {
        //   value: this._code,
        //   language: 'javascript',
        //   automaticLayout: true, theme: 'vs-dark',
        // });
        // this.editor.onKeyUp((change) => {
        //   console.log(this.editor.getValue());
        //   this.notify.emit(this.editor.getValue());
        // });
        // }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('script-name'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CodeEditorComponent.prototype, "scriptName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CodeEditorComponent.prototype, "notify", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], CodeEditorComponent.prototype, "code", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CodeEditorComponent.prototype, "variables", void 0);
    CodeEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code-editor',
            template: __webpack_require__(/*! ./code-editor.component.html */ "./src/app/editor/code-editor/code-editor.component.html"),
            styles: [__webpack_require__(/*! ./code-editor.component.scss */ "./src/app/editor/code-editor/code-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CodeEditorComponent);
    return CodeEditorComponent;
}());



/***/ }),

/***/ "./src/app/editor/contenteditable.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/editor/contenteditable.directive.ts ***!
  \*****************************************************/
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
        this.propValueAccessor = 'innerText';
        this.updateComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ContenteditableDirective_1 = ContenteditableDirective;
    ContenteditableDirective.prototype.callOnChange = function () {
        if (typeof this.onChange === 'function') {
            this.onChange(this.elementRef.nativeElement[this.propValueAccessor]);
            this.updateComplete.emit(this.elementRef.nativeElement);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ContenteditableDirective.prototype, "updateComplete", void 0);
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

/***/ "./src/app/editor/editor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/editor/editor.module.ts ***!
  \*****************************************/
/*! exports provided: EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _element_element_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./element/element.component */ "./src/app/editor/element/element.component.ts");
/* harmony import */ var _contenteditable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contenteditable.directive */ "./src/app/editor/contenteditable.directive.ts");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/index.js");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selection.service */ "./src/app/editor/selection.service.ts");
/* harmony import */ var _fonts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fonts.service */ "./src/app/editor/fonts.service.ts");
/* harmony import */ var _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slide-editor/slide-editor.component */ "./src/app/editor/slide-editor/slide-editor.component.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/editor/panel/panel.component.ts");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add/add.component */ "./src/app/editor/add/add.component.ts");
/* harmony import */ var _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fonts/fonts.component */ "./src/app/editor/fonts/fonts.component.ts");
/* harmony import */ var _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./code-editor/code-editor.component */ "./src/app/editor/code-editor/code-editor.component.ts");

















var monacoConfig = {
    baseUrl: '/assets/',
    defaultOptions: { scrollBeyondLastLine: false },
    onMonacoLoad: function () {
        var _monaco = window.monaco;
        // validation settings
        _monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: false
        });
        // compiler options
        _monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ES5,
            allowNonTsExtensions: true
        });
    } // here monaco object will be available as window.monaco use this function to extend monaco editor functionality.
};
var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_13__["Ng5SliderModule"],
                ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_8__["MonacoEditorModule"].forRoot(monacoConfig)
            ],
            entryComponents: [_fonts_fonts_component__WEBPACK_IMPORTED_MODULE_15__["FontsSelectComponent"]],
            declarations: [_contenteditable_directive__WEBPACK_IMPORTED_MODULE_7__["ContenteditableDirective"], _element_element_component__WEBPACK_IMPORTED_MODULE_6__["ElementComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_14__["AddComponent"],
                _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_11__["SlideEditorComponent"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_12__["PanelComponent"], _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_15__["FontsSelectComponent"],
                _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_16__["CodeEditorComponent"]],
            providers: [_fonts_service__WEBPACK_IMPORTED_MODULE_10__["FontsService"], _selection_service__WEBPACK_IMPORTED_MODULE_9__["SelectionService"]]
        })
    ], EditorModule);
    return EditorModule;
}());



/***/ }),

/***/ "./src/app/editor/element/element.component.html":
/*!*******************************************************!*\
  !*** ./src/app/editor/element/element.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ngDraggable [zIndex]=\"element.zIndex\" [position]=\"element.position\" class=\"drag-block element {{isSelected}}\" (edge)=\"checkEdge($event)\"\n  (started)=\"onStart($event)\" (stopped)=\"onStop($event)\" (movingOffset)=\"onMoving($event)\" [preventDefaultEvent]=\"false\" (endOffset)=\"onMoveEnd($event)\"\n  (click)=\"focus($event, element)\">\n\n  <div class=\"drag-tag\">\n    {{element.varName}} (<small>{{element.type}}</small>)\n    <button class=\"del-button\" (click)=\"remove(element);\"><i class=\"far fa-window-close \"></i></button>\n  </div>\n\n  <div [ngStyle]=\"{'font-family': element.font ? element.font: 'arial', 'opacity': element.opacity,\n   'font-size': element.fontSize +'px',\n  'color': element.color }\" contenteditable=\"true\" (callOnChange)=\"updateComplete($event)\" (updateComplete)=\"updateComplete($event)\"\n    [(ngModel)]=\"element.text\" *ngIf=\"element.type === 'text'\"></div>\n\n  <img [src]=\"element.src\" ngResizable class=\"image-element shadow\" [ngStyle]=\"{'width': element.width+'px','height': element.height+'px', 'opacity': element.opacity }\"\n    *ngIf=\"element.type === 'image'\" />\n\n</div>\n"

/***/ }),

/***/ "./src/app/editor/element/element.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/editor/element/element.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drag-block {\n  min-width: 50px;\n  cursor: crosshair;\n  position: absolute; }\n  .drag-block .drag-tag {\n    opacity: 0;\n    position: absolute;\n    top: -20px;\n    background-color: #f3b7eb;\n    text-transform: capitalize;\n    height: 20px;\n    top: -21px;\n    background-color: #f3b7eb;\n    left: -1px;\n    min-width: 100px;\n    color: white;\n    padding: 3px;\n    padding-left: 25px; }\n  .drag-block span {\n    cursor: text;\n    display: inline; }\n  .element {\n  white-space: nowrap;\n  line-height: 1;\n  line-break: loose;\n  border: 1px solid transparent; }\n  .element .del-button {\n    opacity: 0; }\n  .element .selected, .element .true {\n    border: 1px solid black; }\n  .selected .drag-tag, .true .drag-tag {\n  opacity: 1; }\n  .selected .del-button, .true .del-button {\n  opacity: 1;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 20px;\n  height: 20px;\n  color: white;\n  cursor: pointer; }\n  .del-button:active,\n.del-button:hover {\n  opacity: 1; }\n  .form-control {\n  height: 15px; }\n  .position {\n  position: absolute; }\n  .t-bar {\n  position: absolute;\n  font-size: 9px; }\n  .t-bar input {\n    width: 50px; }\n  .t-bar select {\n    width: 100px; }\n  .position {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100px;\n  font-size: 9px; }\n  .layer {\n  height: 130px;\n  background-color: white; }\n  .layer .toolbox select, .layer .toolbox input {\n    font-size: 10px; }\n  .layer .toolbox input {\n    width: 30px; }\n  .layer .toolbox img {\n    float: right;\n    width: 50px;\n    height: 50px; }\n  .layer .toolbox.active {\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2VsZW1lbnQvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxlZGl0b3JcXGVsZW1lbnRcXGVsZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXRvci9lbGVtZW50L0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQXNCSSxlQUFlO0VBRWYsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBekJ0QjtJQUtRLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHlCQ0RjO0lERWQsMEJBQTBCO0lBQzFCLFlBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQWpCMUI7SUEyQlEsWUFBWTtJQUNaLGVBQWUsRUFBQTtFQUl2QjtFQUNJLG1CQUFtQjtFQUNwQixjQUFhO0VBQ2IsaUJBQWlCO0VBQ2hCLDZCQUE2QixFQUFBO0VBSmpDO0lBT1ksVUFBVSxFQUFBO0VBUHRCO0lBVVEsdUJBQXVCLEVBQUE7RUFRL0I7RUFFUSxVQUFVLEVBQUE7RUFGbEI7RUFNUSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFHWixZQUFZO0VBQ1osZUFBZSxFQUFBO0VBS3ZCOztFQUdJLFVBQVUsRUFBQTtFQUlkO0VBQ0ksWUFBWSxFQUFBO0VBRWhCO0VBQ0ksa0JBQWtCLEVBQUE7RUFFdEI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0VBRmxCO0lBSVEsV0FBVSxFQUFBO0VBSmxCO0lBT1EsWUFBWSxFQUFBO0VBSXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVE7RUFDUixPQUFNO0VBQ04sWUFBWTtFQUNaLGNBQWMsRUFBQTtFQUlsQjtFQUNJLGFBQWE7RUFDYix1QkFBdUIsRUFBQTtFQUYzQjtJQVFZLGVBQWUsRUFBQTtFQVIzQjtJQVVlLFdBQVcsRUFBQTtFQVYxQjtJQVlZLFlBQVk7SUFDWixXQUFXO0lBQUMsWUFBVyxFQUFBO0VBYm5DO0lBaUJRLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9lbGVtZW50L2VsZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zYXNzL192YXJpYWJsZXMnO1xyXG5cclxuXHJcblxyXG5cclxuLmRyYWctYmxvY2tcclxueyAgICAgXHJcbiAgICBcclxuICAgIC5kcmFnLXRhZ1xyXG4gICAge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXB1cnBsZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBoZWlnaHQ6MjBweDtcclxuICAgICAgICB0b3A6IC0yMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2I3ZWI7XHJcbiAgICAgICAgbGVmdDogLTFweDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgLy9wYWRkaW5nOiAxcHg7XHJcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7ICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmVsZW1lbnR7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICBsaW5lLWhlaWdodDoxO1xyXG4gICBsaW5lLWJyZWFrOiBsb29zZTsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIC5kZWwtYnV0dG9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwOyAgIFxyXG4gICAgICAgIH1cclxuICAgIC5zZWxlY3RlZCwgLnRydWV7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblxyXG5cclxuICAgICAgIFxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLnNlbGVjdGVkLCAudHJ1ZXtcclxuICAgIC5kcmFnLXRhZ3tcclxuICAgICAgICBvcGFjaXR5OiAxOyAgXHJcbiAgICB9XHJcbiAgICAuZGVsLWJ1dHRvblxyXG4gICAgeyAgIFxyXG4gICAgICAgIG9wYWNpdHk6IDE7ICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuLmRlbC1idXR0b246YWN0aXZlLFxyXG4uZGVsLWJ1dHRvbjpob3ZlclxyXG57ICAgXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6IDE1cHg7IFxyXG59XHJcbi5wb3NpdGlvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4udC1iYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICB9XHJcbiAgICBzZWxlY3R7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4ucG9zaXRpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG59XHJcbiBcclxuXHJcbi5sYXllcntcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgLnRvb2xib3hcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICBzZWxlY3QsIGlucHV0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHt3aWR0aDogMzBweDt9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O2hlaWdodDo1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50b29sYm94LmFjdGl2ZXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuIiwiXHJcbiRjb2xvci1ncmF5OiAjZTNlNGU1O1xyXG4kY29sb3ItZGFya2JsdWUxOiAjMTYyNDMzO1xyXG4kY29sb3ItZGFya2JsdWUyOiAjMmE0NTYzO1xyXG4kY29sb3ItbGlnaHRibHVlMTogIzI2NDM1NjtcclxuJGNvbG9yLWxpZ2h0Ymx1ZTI6ICMzYzczOTk7XHJcbiRjb2xvci1vcmFuZ2U6ICNmYzY2MDA7XHJcbiRjb2xvci1jeWFuOiAjMDBmZmY2O1xyXG4kY29sb3Itc2NyZWVuOiAjMDBjZmZmO1xyXG4kY29sb3Itc2NyZWVuLWdyb3VwOiAjMDBmZmY2O1xyXG4kY29sb3ItbGlicmFyeTogIzk2ZmYwMDtcclxuJGNvbG9yLXllbGxvdzogI2ZmZmYwMDtcclxuJGNvbG9yLXB1cnBsZTogI2YzYjdlYjtcclxuJGNvbG9yLWdyZWVuOiAjOTZmZjAwO1xyXG4gXHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/editor/element/element.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/editor/element/element.component.ts ***!
  \*****************************************************/
/*! exports provided: ElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementComponent", function() { return ElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selection.service */ "./src/app/editor/selection.service.ts");
/* harmony import */ var _fonts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts.service */ "./src/app/editor/fonts.service.ts");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");





var ElementComponent = /** @class */ (function () {
    function ElementComponent(_ngZone, selectionService, sanitizer, fontService, dirtyService) {
        var _this = this;
        this._ngZone = _ngZone;
        this.selectionService = selectionService;
        this.sanitizer = sanitizer;
        this.fontService = fontService;
        this.dirtyService = dirtyService;
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inBounds = true;
        this.edge = {
            top: true,
            bottom: true,
            left: true,
            right: true
        };
        this.selectionService.selectElement.subscribe(function (element) {
            _this.isSelected = (_this.element === element);
        });
    }
    ElementComponent.prototype.updateComplete = function (textElement) {
        console.log(textElement.innerText);
        // this.element.text = textElement.innerText;
        clearTimeout(this.updateTimeout);
    };
    ElementComponent.prototype.paint = function () {
    };
    ElementComponent.prototype.ngOnInit = function () {
        this.layers = this.mode === 'layers';
        if (this.element && !this.element.style) {
            this.element.style = { font: '' };
        }
        // this.font = this.element.style.font;
        // this.fontSize = this.element.style.fontSize;
        if (this.element.font) {
            window.WebFont.load({
                google: {
                    families: [this.element.font]
                }
            });
        }
    };
    ElementComponent.prototype.onStart = function (event) {
    };
    ElementComponent.prototype.remove = function (element) {
        this.selectionService.remove(element);
        this.dirtyService.detectChanges();
        this.removed.emit(element);
    };
    ElementComponent.prototype.focus = function (event, element) {
        this.isSelected = true;
        // this.selected.emit(element);
        this.selectionService.focus(event, element);
    };
    ElementComponent.prototype.compareFn = function (a, b) {
        if (b) {
            return a.id === b.id;
        }
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
        this.dirtyService.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ElementComponent.prototype, "element", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ElementComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ElementComponent.prototype, "isSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ElementComponent.prototype, "removed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('thumbCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], ElementComponent.prototype, "thumbCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('htmlElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], ElementComponent.prototype, "htmlElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ElementComponent.prototype, "text", void 0);
    ElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-element',
            template: __webpack_require__(/*! ./element.component.html */ "./src/app/editor/element/element.component.html"),
            styles: [__webpack_require__(/*! ./element.component.scss */ "./src/app/editor/element/element.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _selection_service__WEBPACK_IMPORTED_MODULE_2__["SelectionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Sanitizer"],
            _fonts_service__WEBPACK_IMPORTED_MODULE_3__["FontsService"], _services_dirty_service__WEBPACK_IMPORTED_MODULE_4__["DirtyService"]])
    ], ElementComponent);
    return ElementComponent;
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

// 'Almendra', Almendra
var KEY = 'AIzaSyDwRFeD5sLu69-hJ20KICyhh9Huz-o3Ic8';


var log = console.log;
var FontsService = /** @class */ (function () {
    function FontsService(http) {
        this.http = http;
        this.fonts = [];
        this.loadedFonts = {};
    }
    FontsService.prototype.getFonts = function () {
        return this.fonts;
    };
    FontsService.prototype.loadFontsForRender = function (fontsArr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        log('@fonts.service-loadFontsForRender-start');
                        var finalFontsForLoad = [];
                        fontsArr.forEach(function (item) {
                            if (!_this.loadedFonts[item]) {
                                finalFontsForLoad.push(item);
                            }
                        });
                        if (finalFontsForLoad.length > 0) {
                            window.WebFont.load({
                                active: function () {
                                    log('@fonts.service-loadFontsForRender-active');
                                },
                                fontloading: function (item) {
                                    _this.loadedFonts[item] = item;
                                    resolve();
                                },
                                loading: function () {
                                    finalFontsForLoad.forEach(function (item) {
                                        _this.loadedFonts[item] = item;
                                    });
                                    log('@fonts.service-loadFontsForRender-end');
                                },
                                google: {
                                    families: finalFontsForLoad
                                }
                            });
                        }
                        else {
                            log('@fonts.service-loadFontsForRender-skip');
                            return resolve(_this.fonts);
                        }
                    })];
            });
        });
    };
    FontsService.prototype.loadFontsForLanguage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                url = "https://www.googleapis.com/webfonts/v1/webfonts?key=" + KEY;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this.fonts.length > 0) {
                            return resolve(_this.fonts);
                        }
                        _this.http.get(url).subscribe(function (data) {
                            _this.fonts = data.items.map(function (font) {
                                return font.family;
                            });
                            resolve(_this.fonts);
                        });
                    })];
            });
        });
    };
    FontsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FontsService);
    return FontsService;
}());



/***/ }),

/***/ "./src/app/editor/fonts/fonts.component.html":
/*!***************************************************!*\
  !*** ./src/app/editor/fonts/fonts.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n\r\n    <div class=\"search\">\r\n        <input type=\"text\" [(ngModel)]=\"searchTerm\" name=\"searchTerm\" class=\"searchTerm form-control\" placeholder=\"{{'PANEL.FONT_SEARCH' | translate}}\">\r\n        <button type=\"submit\" class=\"searchButton\">\r\n            <i class=\"fa fa-search\"></i>\r\n        </button>\r\n    </div>\r\n\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"font-scroll\">\r\n        <ul *ngIf=\"fonts\">\r\n            <li *ngFor=\"let font of fonts | filter : searchTerm\" [ngStyle]=\"{'font-family':font.name}\" (click)=\"applyFont(font)\">{{font.name}}\r\n                <i *ngIf=\"font.selected\" class=\"fas fa-check\"></i>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div *ngIf=\"font\" class=\"right-col\">\r\n\r\n        <div class=\"fontbar\">\r\n            <div class=\"first\">{{font.name}}</div>\r\n            <div class=\"second\">\r\n                <button class=\"btn btn-primary\" *ngIf=\"!font.selected\" (click)=\"addToSlide(font)\" title=\"{{'PANEL.PICK' | translate}}\"><i class=\"fas fa-plus-square\"></i></button>\r\n                <button class=\"btn btn-danger\" *ngIf=\"font.selected\" (click)=\"removeFromSlide(font)\" title=\"{{'PANEL.REMOVE' | translate}}\"><i class=\"fas fa-trash\"></i></button>\r\n            </div>\r\n        </div>\r\n\r\n        <div [ngStyle]=\"{'font-family':font.name, 'font-size.px':previewFontSize}\" class=\"font-Preview\">\r\n            {{text}}\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"previewFontSize\">{{ \"PANEL.FONTSIZE\" | translate }}:</label>\r\n            {{previewFontSize }}\r\n            <ng5-slider [detectChanges]=\"true\" [(value)]=\"previewFontSize\" [options]=\"sliderOptions\"></ng5-slider>\r\n            <small id=\"fontSize\" class=\"form-text text-muted\">{{ \"PANEL.FONTSIZE_HELP\" | translate }}</small>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-Preview\">\r\n        <textarea [(ngModel)]=\"text\"></textarea>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/editor/fonts/fonts.component.scss":
/*!***************************************************!*\
  !*** ./src/app/editor/fonts/fonts.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font-scroll {\n  width: 50%;\n  height: 350px;\n  overflow-y: auto;\n  float: left;\n  font-size: 14px;\n  font-family: 'Montserrat', 'Roboto', sans-serif;\n  border: 1px solid gray;\n  padding: 2px; }\n\n.font-Preview {\n  padding: 10px;\n  width: 100%;\n  height: 250px;\n  overflow-y: auto;\n  font-size: 44px; }\n\n.fontbar {\n  clear: both;\n  margin: 0;\n  padding: 0;\n  text-decoration: underline;\n  height: 25px;\n  width: 300px; }\n\n.fontbar div.first {\n    width: 200px;\n    float: right; }\n\n.fontbar div.second {\n    width: 100px;\n    float: left; }\n\n.right-col {\n  width: 350px;\n  height: 350px;\n  float: right;\n  border: 1px solid gray;\n  padding: 2px; }\n\n.ng5-slider {\n  width: 300px; }\n\n.search {\n  width: 80%;\n  position: relative; }\n\n.searchTerm {\n  float: left;\n  width: 100%;\n  padding: 5px;\n  height: 37px;\n  border-radius: 5px;\n  outline: none; }\n\n.searchButton {\n  position: absolute;\n  right: -50px;\n  width: 40px;\n  height: 36px;\n  border: 1px solid #00B4CC;\n  background: #00B4CC;\n  text-align: center;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 20px; }\n\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 5px 5px;\n  border-bottom: 1px solid #e9ecef; }\n\n.searchTerm {\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2ZvbnRzL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcZWRpdG9yXFxmb250c1xcZm9udHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLCtDQUErQztFQUMvQyxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFOZDtJQVFNLFlBQVk7SUFDWixZQUFZLEVBQUE7O0FBVGxCO0lBWU0sWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFJakI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsVUFBVTtFQUNWLGtCQUNGLEVBQUE7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFLZjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGdDQUFnQyxFQUFBOztBQUloQztFQUNFLFlBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9mb250cy9mb250cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LXNjcm9sbHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5mb250LVByZXZpZXd7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87ICBcclxuICBmb250LXNpemU6IDQ0cHg7XHJcbn1cclxuXHJcbi5mb250YmFye1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAgIFxyXG4gIGhlaWdodDogMjVweDsgXHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZGl2LmZpcnN0e1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIGRpdi5zZWNvbmR7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgXHJcbiAgICB9XHJcbn1cclxuLnJpZ2h0LWNvbHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5uZzUtc2xpZGVye1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG5cclxuLnNlYXJjaFRlcm0ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlOyAgXHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGhlaWdodDogMzdweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuIFxyXG59XHJcbiBcclxuXHJcbi5zZWFyY2hCdXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxyXG4gIHJpZ2h0OiAtNTBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQjRDQztcclxuICBiYWNrZ3JvdW5kOiAjMDBCNENDO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogNXB4IDVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICBcclxuICB9XHJcblxyXG4gIC5zZWFyY2hUZXJtIHtcclxuICAgIGJvcmRlcjogIG5vbmU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/editor/fonts/fonts.component.ts":
/*!*************************************************!*\
  !*** ./src/app/editor/fonts/fonts.component.ts ***!
  \*************************************************/
/*! exports provided: FontsSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontsSelectComponent", function() { return FontsSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _fonts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts.service */ "./src/app/editor/fonts.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");





var FontsSelectComponent = /** @class */ (function () {
    function FontsSelectComponent(_ngZone, sanitizer, fontsService, bsModalRef) {
        this._ngZone = _ngZone;
        this.sanitizer = sanitizer;
        this.fontsService = fontsService;
        this.bsModalRef = bsModalRef;
        this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        this.list = [];
        this.previewFontSize = 14;
        this.sliderOptions = {
            floor: 0,
            ceil: 250
        };
    }
    FontsSelectComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.fontsService.loadFontsForLanguage()];
                    case 1:
                        _a.fonts = _b.sent();
                        this.fonts = this.fonts.map(function (item) {
                            return { name: item, selected: _this.selectedFonts && _this.selectedFonts.indexOf(item) > -1 };
                        });
                        this.font = this.fonts[0];
                        return [2 /*return*/];
                }
            });
        });
    };
    FontsSelectComponent.prototype.addToSlide = function (font) {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.selectedFonts) {
                    this.selectedFonts = [];
                }
                this.selectedFonts.push(font.name);
                this.fonts[this.fonts.indexOf(font)].selected = true;
                return [2 /*return*/];
            });
        }); });
    };
    FontsSelectComponent.prototype.removeFromSlide = function (font) {
        this.selectedFonts.splice(this.selectedFonts.indexOf(font), 1);
    };
    FontsSelectComponent.prototype.applyFont = function (font) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fontsService.loadFontsForRender([font.name])];
                    case 1:
                        _a.sent();
                        this.font = font;
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FontsSelectComponent.prototype, "selectedFonts", void 0);
    FontsSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fonts-selection',
            template: __webpack_require__(/*! ./fonts.component.html */ "./src/app/editor/fonts/fonts.component.html"),
            styles: [__webpack_require__(/*! ./fonts.component.scss */ "./src/app/editor/fonts/fonts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _fonts_service__WEBPACK_IMPORTED_MODULE_3__["FontsService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]])
    ], FontsSelectComponent);
    return FontsSelectComponent;
}());



/***/ }),

/***/ "./src/app/editor/panel/panel.component.html":
/*!***************************************************!*\
  !*** ./src/app/editor/panel/panel.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"drag-panel\" ngDraggable [position]=\"position\">   \r\n    <div  [appAdaptHeight]=\"175\">\r\n        <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\" class=\"panel-accordion\">\r\n            <ngb-panel>\r\n                <ng-template ngbPanelTitle class=\"small\">\r\n                    <span>{{tabs[0].name | translate}}</span>\r\n                </ng-template>\r\n                <ng-template ngbPanelContent>\r\n                    <div *ngIf=\"!element\">\r\n                        <div class=\"no-selection\">\r\n                            <h2> {{'PANEL.SELECT_ELEMENT' | translate}}</h2>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"element\">\r\n                        <div class=\"form-group\">\r\n                            <label>{{'PANEL.ELEMENT_NAME' | translate}}</label>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <input [(ngModel)]=\"element.varName\" name=\"elementName\" [detectChanges]=\"true\" class=\"form-control name-control\" />\r\n                                </div>\r\n                                <div class=\"btn-group\">\r\n                                    <button class=\"input-group-text btn-md\" id=\"\">{{element.zIndex}}</button>\r\n                                    <button (click)=\"moveIndex(-1)\" class=\"btn btn-secondary btn-md\"><i class=\"fas fa-level-down-alt\"></i></button>\r\n                                    <button (click)=\"moveIndex(1)\" class=\"btn btn-secondary btn-md\"><i class=\"fas fa-level-up-alt\"></i></button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>{{ \"PANEL.IMAGE_OPACITY\" | translate }}:</label>\r\n                            <ng5-slider [(value)]=\"element.opacity\" [options]=\"sliderImageOpacityOptions\"></ng5-slider>\r\n                        </div>\r\n                        <div *ngIf=\"element.type === 'image'\" class=\"t-bar\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"IMAGE_WIDTH\">{{ \"PANEL.IMAGE_WIDTH\" | translate }}:</label>\r\n                                <ng5-slider [(value)]=\"element.width\" [options]=\"sliderImageOptions\"></ng5-slider>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"IMAGE_HEIGHT\">{{ \"PANEL.IMAGE_HEIGHT\" | translate }}:</label>\r\n                                <ng5-slider [(value)]=\"element.height\" [options]=\"sliderImageOptions\"></ng5-slider>\r\n\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <div class=\"col-5\">\r\n                                    <label for=\"position_x\">{{ \"PANEL.POSITIONX\" | translate }}:</label>\r\n                                    <input class=\"form-control\" name=\"position_x\" (change)=\"detect($event)\" [detectChanges]=\"true\" [(ngModel)]=\"element.position.x\"\r\n                                    />\r\n                                </div>\r\n                                <div class=\"col-5\">\r\n                                    <label for=\"position_y\">{{ \"PANEL.POSITIONY\" | translate }}:</label>\r\n                                    <input class=\"form-control\" name=\"position_y\" (change)=\"detect($event)\" [detectChanges]=\"true\" [(ngModel)]=\"element.position.y\"\r\n                                    />\r\n                                </div>\r\n                                <div class=\"col-2\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"element.type === 'text'\" class=\"t-bar\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"fontName\">{{ \"PANEL.FONTNAME\" | translate }}:</label>\r\n                                <div class=\"input-group mb-3\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <button class=\"btn btn-success btn-md\" type=\"button\" (click)=\"openModalWithComponent()\">{{ \"PANEL.PICK\" | translate }}</button>\r\n                                    </div>\r\n                                    <select [detectChanges]=\"true\" class=\"form-control fontbox\" name=\"fontNameTxt\" [(ngModel)]=\"element.font\" (change)=\"selectFont($event)\">\r\n                                        <option *ngFor=\"let c of editor.fonts\" [ngValue]=\"c\" [ngStyle]=\"{'font-family': c}\">{{c}}</option>\r\n                                    </select>\r\n                                </div>\r\n                                <small id=\"fontHelp\" class=\"form-text text-muted\">{{ \"PANEL.FONTNAME_HELP\" | translate }}</small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"fontName\">{{ \"PANEL.FONTSIZE\" | translate }}:</label>\r\n                                <ng5-slider [detectChanges]=\"true\" [(value)]=\"element.fontSize\" [options]=\"sliderOptions\"></ng5-slider>\r\n                                <small id=\"fontSize\" class=\"form-text text-muted\">{{ \"PANEL.FONTSIZE_HELP\" | translate }}</small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"fontColor\">{{ \"PANEL.FONTCOLOR\" | translate }}:</label>\r\n                                <input [detectChanges]=\"true\" class=\"form-control\" name=\"fontColorTxt\" [cpPosition]=\"'top'\" [(colorPicker)]=\"element.color\"\r\n                                    [style.background]=\"element.color\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group mb-3 position\">\r\n                                    <div class=\"input-group-prepend \">\r\n                                        <span for=\"position_x\" class=\"start\">{{ \"PANEL.POSITIONX\" | translate }}:</span>\r\n                                    </div>\r\n                                    <input type=\"number\" class=\"form-control no\" name=\"position_x\" (change)=\"detect($event)\" [detectChanges]=\"true\" [(ngModel)]=\"element.position.x\"\r\n                                    />\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span for=\"position_y\">{{ \"PANEL.POSITIONY\" | translate }}:</span>\r\n                                    </div>\r\n                                    <input type=\"number\" class=\"form-control end\" name=\"position_y\" (change)=\"detect($event)\" [detectChanges]=\"true\" [(ngModel)]=\"element.position.y\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group mb-3 position\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-success btn-md\" type=\"button\" (click)=\"align('right')\" title=\"{{ 'PANEL.RIGHT' | translate }}\"><i\r\n                                                class=\"fas fa-align-right\"></i></button>\r\n                                    </div>\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-success btn-md\" type=\"button\" (click)=\"align('center')\" title=\"{{ 'PANEL.CENTER' | translate }}\"><i\r\n                                                class=\"fas fa-align-center\"></i></button>\r\n                                    </div>\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-success btn-md\" type=\"button\" (click)=\"align('left')\" title=\"{{ 'PANEL.LEFT' | translate }}\"><i\r\n                                                class=\"fas fa-align-left\"></i></button>\r\n                                    </div>\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-success btn-md\" type=\"button\" (click)=\"align('top')\" title=\"{{ 'PANEL.LEFT' | translate }}\"><i\r\n                                                class=\"fas fa-angle-double-up\"></i></button>\r\n                                    </div>\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-success btn-md\" type=\"button\" (click)=\"align('bottom')\" title=\"{{ 'PANEL.LEFT' | translate }}\"><i\r\n                                                class=\"fas fa-angle-double-down\"></i></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel>\r\n                <ng-template ngbPanelTitle>\r\n                    <span>{{tabs[1].name | translate}}</span>\r\n                </ng-template>\r\n                <ng-template ngbPanelContent>\r\n                    <div class=\"form-group\">\r\n                        <label>{{'PANEL.SLIDE_NAME' | translate}}</label>\r\n                        <input [(ngModel)]=\"item.Name\" name=\"slideName\" [detectChanges]=\"true\" class=\"form-control\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>{{'PANEL.FORE_COLOR' | translate}}</label>\r\n                        <input [(colorPicker)]=\"editor.color\" [detectChanges]=\"true\" (colorPickerChange)=\"setColor($event)\" [cpPosition]=\"'bottom'\"\r\n                            class=\"form-control\" [style.background]=\"editor.color\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>{{'PANEL.BACK_COLOR' | translate}}</label>\r\n                        <input [(colorPicker)]=\"editor.bgColor\" [detectChanges]=\"true\" (colorPickerChange)=\"setBgColor($event)\" [cpPosition]=\"'bottom'\"\r\n                            class=\"form-control\" [style.background]=\"editor.bgColor\" />\r\n                    </div>\r\n                </ng-template>\r\n            </ngb-panel>\r\n        </ngb-accordion>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/editor/panel/panel.component.scss":
/*!***************************************************!*\
  !*** ./src/app/editor/panel/panel.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".position {\n  margin-top: 10px; }\n  .position .input-group-prepend span {\n    padding: 3px;\n    font-size: 12px;\n    background-color: #e3e4e5; }\n  .position .form-control.no {\n    border-radius: 0 !important; }\n  .start {\n  border-top-right-radius: 5px !important;\n  border-bottom-right-radius: 5px !important; }\n  .end {\n  border-top-left-radius: 5px !important;\n  border-bottom-left-radius: 5px !important; }\n  .drag-panel {\n  z-index: 1500;\n  position: absolute;\n  width: 300px;\n  margin-right: 20px; }\n  .drag-panel .form-group {\n    margin: 0; }\n  .drag-panel .form-control {\n    height: 30px !important;\n    padding: 1px; }\n  .drag-panel .fontbox {\n    height: 30px !important; }\n  .drag-panel .name-control {\n    width: 204px; }\n  .drag-panel label {\n    color: #e3e4e5; }\n  .drag-panel .no-selection {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    align-content: stretch;\n    height: 100%; }\n  .drag-panel .inner {\n    position: relative;\n    top: -1px;\n    height: 100%;\n    border: 1px solid #2a4563;\n    padding: 10px;\n    background: #264356;\n    background: linear-gradient(90deg, #264356 0%, #e3e4e5 99%); }\n  .drag-panel .inner h2 {\n      text-align: center;\n      margin: auto; }\n  .nav-link.true {\n  background-color: #e3e4e5;\n  border-color: #2a4563; }\n  .modal-lg {\n  width: 70% !important;\n  max-width: 1000px !important; }\n  .panel-accordion .card-header {\n  padding: 1px !important;\n  margin: 1px !important; }\n  .small {\n  padding: 1px !important;\n  margin: 1px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3BhbmVsL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcZWRpdG9yXFxwYW5lbFxccGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXRvci9wYW5lbC9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxnQkFBZ0IsRUFBQTtFQURwQjtJQUtZLFlBQVk7SUFDWixlQUFjO0lBQ2QseUJDVlEsRUFBQTtFREdwQjtJQVdRLDJCQUEwQixFQUFBO0VBR2xDO0VBQ0ksdUNBQXNDO0VBQ3RDLDBDQUF3QyxFQUFBO0VBRTVDO0VBQ0ksc0NBQXFDO0VBQ3JDLHlDQUF1QyxFQUFBO0VBRTNDO0VBRUksYUFBYTtFQUNiLGtCQUFrQjtFQThCbEIsWUFBWTtFQWlCWixrQkFBa0IsRUFBQTtFQWxEdEI7SUFLUSxTQUFRLEVBQUE7RUFMaEI7SUFRUSx1QkFBc0I7SUFDdEIsWUFBWSxFQUFBO0VBVHBCO0lBYVEsdUJBQXNCLEVBQUE7RUFiOUI7SUFpQlEsWUFBWSxFQUFBO0VBakJwQjtJQW9CTSxjQzdDYyxFQUFBO0VEeUJwQjtJQXVCUSxhQUFhO0lBQ3BCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNqQixzQkFBc0I7SUFDdEIsWUFBWSxFQUFBO0VBN0JoQjtJQW9DUSxrQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFlBQVk7SUFDWix5QkM5RGlCO0lEK0RqQixhQUFhO0lBQ2IsbUJDL0RrQjtJRGdFbEIsMkRBQXlFLEVBQUE7RUExQ2pGO01BNENZLGtCQUFrQjtNQUNsQixZQUFXLEVBQUE7RUFRdkI7RUFDSSx5QkMvRWdCO0VEZ0ZoQixxQkM5RXFCLEVBQUE7RURpRnpCO0VBQ0kscUJBQW9CO0VBQ3BCLDRCQUEyQixFQUFBO0VBSTdCO0VBR00sdUJBQXNCO0VBQ3RCLHNCQUFxQixFQUFBO0VBSzNCO0VBQ0UsdUJBQXNCO0VBQ3RCLHNCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc2Fzcy9fdmFyaWFibGVzJztcclxuXHJcblxyXG5cclxuLnBvc2l0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC5pbnB1dC1ncm91cC1wcmVwZW5kXHJcbiAgICB7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udHJvbC5ub3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uc3RhcnR7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4IWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweCFpbXBvcnRhbnQ7XHJcbn1cclxuLmVuZHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweCFpbXBvcnRhbnQ7XHJcbn1cclxuLmRyYWctcGFuZWxcclxue1xyXG4gICAgei1pbmRleDogMTUwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udHJvbHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgIH1cclxuICAgIC5mb250Ym94XHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZS1jb250cm9se1xyXG4gICAgICAgIHdpZHRoOiAyMDRweDtcclxuICAgIH1cclxuICBsYWJlbHtcclxuICAgICAgY29sb3I6ICRjb2xvci1ncmF5O1xyXG4gIH1cclxuICAgIC5uby1zZWxlY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgIFxyXG4gICAgLmlubmVye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6LTFweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWRhcmtibHVlMjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1saWdodGJsdWUxO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGNvbG9yLWxpZ2h0Ymx1ZTEgMCUsICRjb2xvci1ncmF5IDk5JSk7XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5uYXYtbGluay50cnVle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXk7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1kYXJrYmx1ZTI7XHJcbn1cclxuXHJcbi5tb2RhbC1sZ3tcclxuICAgIHdpZHRoOiA3MCUhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuXHJcbiAgLnBhbmVsLWFjY29yZGlvblxyXG4gIHtcclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzoxcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46MXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICBcclxuXHJcbiAgfVxyXG4gIC5zbWFsbHtcclxuICAgIHBhZGRpbmc6MXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46MXB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJcclxuJGNvbG9yLWdyYXk6ICNlM2U0ZTU7XHJcbiRjb2xvci1kYXJrYmx1ZTE6ICMxNjI0MzM7XHJcbiRjb2xvci1kYXJrYmx1ZTI6ICMyYTQ1NjM7XHJcbiRjb2xvci1saWdodGJsdWUxOiAjMjY0MzU2O1xyXG4kY29sb3ItbGlnaHRibHVlMjogIzNjNzM5OTtcclxuJGNvbG9yLW9yYW5nZTogI2ZjNjYwMDtcclxuJGNvbG9yLWN5YW46ICMwMGZmZjY7XHJcbiRjb2xvci1zY3JlZW46ICMwMGNmZmY7XHJcbiRjb2xvci1zY3JlZW4tZ3JvdXA6ICMwMGZmZjY7XHJcbiRjb2xvci1saWJyYXJ5OiAjOTZmZjAwO1xyXG4kY29sb3IteWVsbG93OiAjZmZmZjAwO1xyXG4kY29sb3ItcHVycGxlOiAjZjNiN2ViO1xyXG4kY29sb3ItZ3JlZW46ICM5NmZmMDA7XHJcbiBcclxuXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/editor/panel/panel.component.ts":
/*!*************************************************!*\
  !*** ./src/app/editor/panel/panel.component.ts ***!
  \*************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/fonts.component */ "./src/app/editor/fonts/fonts.component.ts");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selection.service */ "./src/app/editor/selection.service.ts");







var PanelComponent = /** @class */ (function () {
    function PanelComponent(_ngZone, sanitizer, modalService, dirtyService, selectionService) {
        var _this = this;
        this._ngZone = _ngZone;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.dirtyService = dirtyService;
        this.selectionService = selectionService;
        this.sliderOptions = {
            floor: 0,
            ceil: 250
        };
        this.sliderImageOptions = {
            floor: 0,
            ceil: 1800
        };
        this.sliderImageOpacityOptions = {
            floor: 0,
            step: 0.1,
            ceil: 1
        };
        this.editorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.elementChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editor = {
            fonts: ['arial'],
            color: '#fff',
            bgColor: '#000'
        };
        this.tabs = [{ name: 'PANEL.ELEMENT', icon: '', selected: true }, { name: 'PANEL.GENERAL', icon: '', selected: false }];
        this.selectionService.selectElement.subscribe(function (element) {
            _this.position = JSON.parse(JSON.stringify(element.position));
            _this.position.x = _this.position.x - 300;
        });
    }
    PanelComponent.prototype.openModalWithComponent = function () {
        var _this = this;
        var initialState = {
            selectedFonts: this.editor.fonts
        };
        this.bsModalRef = this.modalService.show(_fonts_fonts_component__WEBPACK_IMPORTED_MODULE_4__["FontsSelectComponent"], { initialState: initialState, class: 'modal-lg' });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.modalService.onHide.subscribe(function (reason) {
            _this.editorChanged.emit(_this.editor);
        });
    };
    PanelComponent.prototype.align = function (to) {
        switch (to) {
            case 'center':
                this.element.position = {
                    x: (Number(this.item.Screen.width) / 2) - (this.element.width / 2),
                    y: (Number(this.item.Screen.height) / 2) - (this.element.height / 2)
                };
                break;
            case 'right':
                this.element.position = { x: Number(this.item.Screen.width) - this.element.width, y: this.element.position.y };
                break;
            case 'left':
                this.element.position = { x: 0, y: this.element.position.y };
                break;
            case 'top':
                this.element.position = { x: this.element.position.x, y: 0 };
                break;
            case 'bottom':
                this.element.position = { x: this.element.position.x, y: this.item.Screen.height - this.element.height };
                break;
        }
        this.elementChanged.emit(this.element);
    };
    PanelComponent.prototype.tabSelect = function (tab) {
        this.tabs.forEach(function (tabItem) { return tabItem.selected = false; });
        tab.selected = true;
        this.selectedTab = tab;
    };
    PanelComponent.prototype.setColor = function (color) {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.editor.color = color;
                if (this.editorChanged) {
                    this.editorChanged.emit(this.editor);
                }
                return [2 /*return*/];
            });
        }); });
    };
    PanelComponent.prototype.detect = function (event) {
        this.element.position = { x: Number(this.element.position.x), y: Number(this.element.position.y) };
        this.elementChanged.emit(this.element);
    };
    PanelComponent.prototype.setBgColor = function (color) {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.editor.bgColor = color;
                if (this.editorChanged) {
                    this.editorChanged.emit(this.editor);
                }
                return [2 /*return*/];
            });
        }); });
    };
    PanelComponent.prototype.selectFont = function (event) {
        window.WebFont.load({
            google: {
                families: [this.element.font]
            }
        });
        this.dirtyService.setDirty();
    };
    PanelComponent.prototype.moveIndex = function (delta) {
        this.element.zIndex = this.element.zIndex + delta;
    };
    PanelComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.selectedTab = this.tabs[0];
                        if (this.element) {
                            this.positionProjection = { 'top': this.element.position.y + 'px', 'left': (this.element.position.x * 1) + 300 + 'px' };
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelComponent.prototype, "element", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PanelComponent.prototype, "editorChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PanelComponent.prototype, "elementChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelComponent.prototype, "editor", void 0);
    PanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/editor/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.scss */ "./src/app/editor/panel/panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__["DirtyService"], _selection_service__WEBPACK_IMPORTED_MODULE_6__["SelectionService"]])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/editor/selection.service.ts":
/*!*********************************************!*\
  !*** ./src/app/editor/selection.service.ts ***!
  \*********************************************/
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
        this.selectElement = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SelectionService.prototype.unselect = function () {
        var all = document.querySelectorAll('.element');
        for (var i = 0; i < all.length; i++) {
            all[i].className = all[i].className.replace('selected', '');
        }
        this.elements.forEach(function (item) { return item.selected = false; });
    };
    SelectionService.prototype.focus = function (eventElement, elementItem) {
        if (eventElement) {
            var style = getComputedStyle(eventElement.currentTarget, null);
            elementItem.width = Math.round(Number(style.width.replace('px', '')));
            elementItem.height = Math.round(Number(style.height.replace('px', '')));
        }
        console.log(elementItem.width, elementItem.height);
        this.selectElement.emit(elementItem);
    };
    SelectionService.prototype.load = function (document) {
        this.document = document;
        this.elements = this.document.elements;
        this.elements.forEach(function (elem, i) {
            if (!elem.zIndex) {
                elem.zIndex = 1000 + i;
            }
        });
    };
    SelectionService.prototype.reset = function () {
        this.elements = [];
    };
    SelectionService.prototype.add = function (element) {
        this.elements.push(element);
    };
    SelectionService.prototype.remove = function (element) {
        var found = this.elements.indexOf(element);
        this.elements.splice(found, 1);
    };
    SelectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectionService);
    return SelectionService;
}());



/***/ }),

/***/ "./src/app/editor/slide-editor/slide-editor.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/editor/slide-editor/slide-editor.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #toolbar let-item=\"item\">\n  <div class=\"btn-group\" data-toggle=\"buttons\">\n    <button class=\"btn-tool btn-play\" (click)=\"publish()\"> <i class=\"fas fa-bolt\"></i></button>\n  </div>\n</ng-template>\n\n\n<div *ngIf=\"item\" style=\"position: relative;\">\n  <app-changes [item]=\"selectionService.elements\"></app-changes>\n  <app-slide-header [title]=\"'NAVBAR.SLIDES'\" [toolbar]=\"toolbar\" closeFn=\"true\" mode=\"inline\" [enableSave]='true' (save)=\"saveProxy($event)\"\n    iconClass=\"far fa-object-group\" className=\"library-cat\" (closed)=\"closeSlider()\"></app-slide-header>\n\n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\" *ngFor=\"let tab of tabs\" (click)=\"tabSelect(tab)\">\n      <a class=\"nav-link {{tab.selected}}\"><h6><i class=\"{{tab.icon}}\"></i> {{tab.name | translate}}</h6></a>\n    </li>\n    <li>\n      <app-add (selected)=\"addElement($event)\"></app-add>\n\n    </li>\n  </ul>\n\n  <div *ngIf=\"tabs[1].selected\" [appAdaptHeight]=\"100\">\n    <div style=\"height: 50%;padding: 10px;\">\n      <app-code-editor [code]=\"slideScript\" (notify)=\"onCode($event, 'script')\" [script-name]=\"'script.js'\" [variables]=\"item.elements\"></app-code-editor>\n    </div>\n    <div style=\"height: 50%;padding: 10px;\">\n      <app-code-editor [code]=\"slidePlayer\" (notify)=\"onCode($event,'player')\" [script-name]=\"'player.js'\" [variables]=\"item.elements\"></app-code-editor>\n    </div>\n  </div>\n\n  <div class=\"row p10\" *ngIf=\"tabs[0].selected\">\n\n    <div class=\"row slide-editor\" id=\"worksapce\" style=\"direction: ltr;\">\n      <app-panel [(element)]=\"selectedElement\" [hidden]=\"!selectedElement\" [editor]=\"editor\" [item]=\"item\" (elementChanged)=\"setElement(element)\"\n        (editorChanged)=\"setEditor($event)\"></app-panel>\n\n      <app-rulers [appAdaptHeight]=\"150\"></app-rulers>\n\n      <div class=\"editor-plate small\" [ngStyle]=\"{'background-color': item.bgColor }\" [appAdaptHeight]=\"150\">\n        <app-element *ngFor=\"let el of selectionService.elements\" [element]=\"el\" (removed)=\"clearSelection()\"></app-element>\n      </div>\n    </div>\n  </div>\n</div>\n<app-finder [active]=\"finderActive\" [selector]=\"addToList\"></app-finder>\n"

/***/ }),

/***/ "./src/app/editor/slide-editor/slide-editor.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/editor/slide-editor/slide-editor.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-editor {\n  position: absolute;\n  left: 10%;\n  z-index: 100; }\n  .slide-editor .editor-plate {\n    position: relative;\n    top: 15px;\n    left: 15px; }\n  .slide-editor .small {\n    width: 800px;\n    height: 600px;\n    overflow: hidden; }\n  .slide-editor .small-portrait {\n    width: 600px;\n    height: 800px; }\n  .toolbar-end {\n  float: left; }\n  .p10 {\n  padding: 10px; }\n  .selected, .true {\n  border: 1px dotted #cc66dd !important; }\n  .layers {\n  z-index: 2000;\n  background-color: gray;\n  position: absolute;\n  width: 300px;\n  height: 400px; }\n  .click-back {\n  z-index: 0;\n  position: absolute;\n  background-color: darkviolet;\n  width: 100%;\n  height: 100%; }\n  .btn-tool {\n  color: white;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  float: right;\n  width: 52px;\n  height: 52px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3NsaWRlLWVkaXRvci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGVkaXRvclxcc2xpZGUtZWRpdG9yXFxzbGlkZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFpQkksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZLEVBQUE7RUFuQmhCO0lBSVEsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVLEVBQUE7RUFObEI7SUFTUSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQixFQUFBO0VBWHhCO0lBY1EsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQVFyQjtFQUNJLFdBQVcsRUFBQTtFQUVmO0VBQ0ksYUFBYSxFQUFBO0VBS2pCO0VBQ0kscUNBQW9DLEVBQUE7RUFHeEM7RUFDSSxhQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYSxFQUFBO0VBS2pCO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdoQjtFQUVJLFlBQVk7RUFDWixlQUFlO0VBQ2Qsc0JBQXFCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9zbGlkZS1lZGl0b3Ivc2xpZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlLWVkaXRvcntcclxuXHJcbiAgICAuZWRpdG9yLXBsYXRlXHJcbiAgICB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnNtYWxse1xyXG4gICAgICAgIHdpZHRoOiA4MDBweDsgICBcclxuICAgICAgICBoZWlnaHQ6IDYwMHB4OyAgXHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5zbWFsbC1wb3J0cmFpdHtcclxuICAgICAgICB3aWR0aDogNjAwcHg7ICAgXHJcbiAgICAgICAgaGVpZ2h0OiA4MDBweDsgIFxyXG4gICAgfVxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4gXHJcbi50b29sYmFyLWVuZHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5wMTB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiN3b3Jrc2FwY2V7XHJcbiAgICAvL3BhZGRpbmc6MzBweDtcclxufVxyXG4uc2VsZWN0ZWQsLnRydWV7XHJcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgI2NjNjZkZCFpbXBvcnRhbnQ7XHJcbn1cclxuIFxyXG4ubGF5ZXJze1xyXG4gICAgei1pbmRleDoyMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbiBcclxuIFxyXG4uY2xpY2stYmFja3tcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrdmlvbGV0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5idG4tdG9vbFxyXG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgYm9yZGVyOjFweCBzb2xpZCAjYmJiO1xyXG4gICAgZmxvYXQ6IHJpZ2h0OyAgICBcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgaGVpZ2h0OiA1MnB4OyAgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/editor/slide-editor/slide-editor.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/editor/slide-editor/slide-editor.component.ts ***!
  \***************************************************************/
/*! exports provided: SlideEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideEditorComponent", function() { return SlideEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selection.service */ "./src/app/editor/selection.service.ts");
/* harmony import */ var _services_name_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/name.service */ "./src/app/services/name.service.ts");
/* harmony import */ var _fonts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fonts.service */ "./src/app/editor/fonts.service.ts");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");
/* harmony import */ var _services_history_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/history.service */ "./src/app/services/history.service.ts");











var SlideEditorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SlideEditorComponent, _super);
    function SlideEditorComponent(_ngZone, translateService, nameService, selectionService, fontService, router, route, dirtyService, previousRouteService) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.nameService = nameService;
        _this.selectionService = selectionService;
        _this.fontService = fontService;
        _this.router = router;
        _this.route = route;
        _this.dirtyService = dirtyService;
        _this.previousRouteService = previousRouteService;
        _this.tabs = [{ name: 'SLIDES.DESIGNER', selected: true }, { name: 'SLIDES.SOURCE', selected: false }];
        _this.finderActive = 'closing';
        _this.editor = {
            fonts: ['arial'],
            color: '#fff',
            bgColor: '#000'
        };
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
            _this.dirtyService.detectChanges();
            _this.finderActive = 'closing';
        };
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_4__["SlidesDataController"];
        _this.addToList.bind(_this);
        _this.selectionService.selectElement.subscribe(function (element) {
            _this.selectedElement = element;
        });
        return _this;
    }
    SlideEditorComponent.prototype.setElement = function (element) {
    };
    SlideEditorComponent.prototype.setEditor = function (editor) {
        this.item.color = editor.color;
        this.item.bgColor = editor.bgColor;
        this.item.fonts = editor.fonts;
        this.dirtyService.setDirty();
    };
    SlideEditorComponent.prototype.onCode = function ($event, type) {
        this.item[type] = $event;
    };
    SlideEditorComponent.prototype.publish = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sharedItem;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.item.publish_id) return [3 /*break*/, 2];
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["ShareDataController"].update(this.item.publish_id, this.item)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["ShareDataController"].create(this.item)];
                    case 3:
                        sharedItem = _a.sent();
                        this.item.publish_id = sharedItem._id;
                        this.saveProxy();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SlideEditorComponent.prototype.finder = function (finderMode) {
        this.finderMode = finderMode;
        this.finderActive = 'active';
    };
    SlideEditorComponent.prototype.tabSelect = function (tab) {
        this.tabs.forEach(function (tabItem) { return tabItem.selected = false; });
        tab.selected = true;
    };
    SlideEditorComponent.prototype.noActieElement = function () {
        this.selectionService.unselect();
    };
    SlideEditorComponent.prototype.saveProxy = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.elements = this.selectionService.elements;
                if (this.item._id) {
                    this.updateItem();
                }
                else {
                    this.createItem();
                }
                return [2 /*return*/];
            });
        });
    };
    SlideEditorComponent.prototype.beforeUpdate = function (item) {
        item.Screen = { width: 800, height: 600 };
    };
    SlideEditorComponent.prototype.closeSlider = function () {
        this.router.navigate([this.previousRouteService.getPreviousUrl()]);
        this.displayModalNew = 'closing';
    };
    SlideEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.item) {
            this.route.params.subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _a, _b;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!(data.id !== '0')) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["SlidesDataController"].get(data.id)];
                        case 1:
                            _a.item = _c.sent();
                            this.nameService.setName(this.item.Name);
                            this.editor.fonts = this.item.fonts;
                            this.editor.bgColor = this.item.bgColor;
                            this.editor.color = this.item.color;
                            this.slideScript = this.item.script;
                            this.slidePlayer = this.item.player;
                            return [3 /*break*/, 3];
                        case 2:
                            this.item = { elements: [] };
                            _c.label = 3;
                        case 3:
                            if (!data.template) return [3 /*break*/, 5];
                            _b = this;
                            return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["ShareDataController"].get(data.template)];
                        case 4:
                            _b.item = _c.sent();
                            this.item.publish_id = this.item._id;
                            delete this.item._id;
                            this.nameService.setName(this.item.Name);
                            this.editor.fonts = this.item.fonts;
                            this.editor.bgColor = this.item.bgColor;
                            this.editor.color = this.item.color;
                            this.item.Screen = { width: 800, height: 600 };
                            _c.label = 5;
                        case 5:
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
    SlideEditorComponent.prototype.clearSelection = function () {
        this.selectedElement = null;
    };
    SlideEditorComponent.prototype.addElement = function (type) {
        switch (type) {
            case 'text':
                var textBlock = {
                    type: 'text',
                    position: { x: 100, y: 100 },
                    class: 'h1',
                    opacity: 1,
                    font: this.fontService.getFonts()[0],
                    color: this.editor.color,
                    fontSize: 42,
                    text: 'Text line',
                    zIndex: 1000 + this.item.elements.length + 1
                };
                this.newBlockElement(textBlock);
                break;
            case 'image':
            case 'video':
            case 'plugin':
                this.finder(type);
                break;
        }
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
                this.selectionService.add(block);
                this.selectionService.focus(null, block);
                this.dirtyService.detectChanges();
                return [2 /*return*/];
            });
        });
    };
    SlideEditorComponent.prototype.afterUpdate = function (item) {
        this.selectionService.load(item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SlideEditorComponent.prototype, "item", void 0);
    SlideEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slide-editor',
            template: __webpack_require__(/*! ./slide-editor.component.html */ "./src/app/editor/slide-editor/slide-editor.component.html"),
            styles: [__webpack_require__(/*! ./slide-editor.component.scss */ "./src/app/editor/slide-editor/slide-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _services_name_service__WEBPACK_IMPORTED_MODULE_7__["NameService"],
            _selection_service__WEBPACK_IMPORTED_MODULE_6__["SelectionService"], _fonts_service__WEBPACK_IMPORTED_MODULE_8__["FontsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_dirty_service__WEBPACK_IMPORTED_MODULE_9__["DirtyService"], _services_history_service__WEBPACK_IMPORTED_MODULE_10__["PreviousRouteService"]])
    ], SlideEditorComponent);
    return SlideEditorComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_3__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/finder/finder.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/finder/finder.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-container-wide {{active}} shadow\">\n\n  <dialog open= {{active}}>\n    <app-slide-header  closeFn=\"true\" title=\"NAVBAR.FINDER\" className=\"library-cat\" (closed)=\"closeSlider()\"></app-slide-header>\n    <div class=\"input-group pt50\">\n      <input type=\"text\" name=\"searchPhrase\" class=\"form-control\" />\n      <div class=\"input-group-prepend\">\n        <button class=\"btn btn-outline-secondary\" type=\"button\"> <i class=\"fas fa-search\"></i></button>\n      </div>\n    </div>\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a class=\"nav-link {{tab.selected}}\" (click)=\"tabSelect(tab)\">{{tab.name | translate}}</a>\n      </li>\n    </ul>\n    <div class=\"container no-margin\" *ngIf=\"selectedTab && selectedTab.alias !=='slide'\"  [appAdaptHeight]=\"220\">\n      <app-lobby [items]=\"items\" mode=\"media-finder\" (selectItem)=\"selectItem($event)\" (deleteItem)=\"deleteItem($event)\"\n        ></app-lobby>\n    </div>\n    <div class=\"container no-margin\" *ngIf=\"selectedTab && selectedTab.alias ==='slide'\"  [appAdaptHeight]=\"220\">\n      <app-lobby [items]=\"slides\" mode=\"object-finder\" (selectItem)=\"selectItem($event)\" (deleteItem)=\"deleteItem($event)\"\n       ></app-lobby>\n    </div>\n    <app-slide-footer className=\"library-cat\"></app-slide-footer>\n  </dialog>\n</div>\n"

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
        _this.types = ['media', 'slide'];
        _this.tabsCollection = {
            'media': 'NAVBAR.MEDIA',
            'slide': 'NAVBAR.SLIDES',
        };
        _this.tabs = [];
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

/***/ "./src/app/library/fonts/fonts.component.html":
/*!****************************************************!*\
  !*** ./src/app/library/fonts/fonts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-lobby [items]=\"items\" [iconClass]=\"'fas fa-font'\" [mode]=\"'object'\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\"\n  (newItem)=\"newItem()\"></app-lobby>\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open= {{displayModalNew}}>\n    <app-slide-header title=\"NAVBAR.FONTS\" closeFn=\"true\" iconClass=\"fas fa-images\" [enableSave]='true' (save)=\"saveProxy()\"\n      className=\"library-cat\" (closed)=\"closeSlider()\"></app-slide-header>\n    <div class=\"pt50\"></div>\n    <div class=\"scroller\">\n      <form *ngIf=\"item\">\n        <div class=\"form-group\">\n          <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n          <input type=\"text\" name=\"libraryName\" class=\"form-control\" [(ngModel)]=\"item.Name\">\n          <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"embedCode\">{{ \"LIBRARY.EMBED\" | translate }}:</label>\n          <textarea id=\"embedCode\" name=\"embedCode\" class=\"form-control\" [(ngModel)]=\"item.Embed\"></textarea>\n          <small id=\"embedHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.EMBED_HELP\" | translate }}</small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"libraryFile\">{{ \"LIBRARY.RESOURCE\" | translate }}</label>\n          <app-upload [item]=\"item\" (change)=\"change($event)\"></app-upload>\n        </div>\n      </form>\n    </div>\n    <app-slide-footer className=\"library-cat\"></app-slide-footer>\n  </dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/library/fonts/fonts.component.scss":
/*!****************************************************!*\
  !*** ./src/app/library/fonts/fonts.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvZm9udHMvZm9udHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/library/fonts/fonts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/library/fonts/fonts.component.ts ***!
  \**************************************************/
/*! exports provided: FontsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontsComponent", function() { return FontsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var FontsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FontsComponent, _super);
    function FontsComponent(_ngZone, translateService) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["LibraryDataController"];
        return _this;
    }
    FontsComponent.prototype.saveLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.type = 'fonts';
                this.updateItem();
                return [2 /*return*/];
            });
        });
    };
    FontsComponent.prototype.createLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.type = 'fonts';
                this.createItem();
                return [2 /*return*/];
            });
        });
    };
    FontsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadItems({ type: 'fonts' });
                return [2 /*return*/];
            });
        });
    };
    FontsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fonts',
            template: __webpack_require__(/*! ./fonts.component.html */ "./src/app/library/fonts/fonts.component.html"),
            styles: [__webpack_require__(/*! ./fonts.component.scss */ "./src/app/library/fonts/fonts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], FontsComponent);
    return FontsComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/library.component.css":
/*!***********************************************!*\
  !*** ./src/app/library/library.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav.nav-tabs{\r\n    height: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9saWJyYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbGlicmFyeS9saWJyYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2Lm5hdi10YWJze1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/library/library.component.html":
/*!************************************************!*\
  !*** ./src/app/library/library.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide-header title=\"NAVBAR.LIBRARY\" mode=\"inline\" iconClass=\"fas fa-clone\" className=\"library-cat\"></app-slide-header>\n<div style=\"padding: 3px;\">\n    <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item\" *ngFor=\"let tab of tabs\" [routerLink]=\"['/dashboard/library/', tab.alias]\" routerLinkActive=\"library-cat\">\n            <a class=\"nav-link {{tab.selected}}\"><h5><i class=\"{{tab.icon}}\"></i> {{tab.name | translate}}</h5></a>\n        </li>\n    </ul>\n    <div [appAdaptHeight]=\"120\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

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
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LibraryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LibraryComponent, _super);
    function LibraryComponent(_ngZone, translateService, router) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.router = router;
        _this.types = ['media', 'slide', 'shares'];
        _this.tabsCollection = {
            'media': {
                name: 'NAVBAR.MEDIA', icon: 'fas fa-images'
            },
            'slide': {
                name: 'NAVBAR.SLIDES', icon: 'far fa-object-group'
            }, 'shares': {
                name: 'NAVBAR.SHARED', icon: 'fas fa-bolt'
            },
        };
        _this.tabs = [];
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_4__["LibraryDataController"];
        return _this;
    }
    LibraryComponent.prototype.tabSelect = function (tab) {
        this.router.navigate(['/dashboard/library/', tab.alias]);
        this.tabs.forEach(function (tabItem) { return tabItem.selected = false; });
        tab.selected = true;
        this.selectedTab = tab;
    };
    LibraryComponent.prototype.filteredItems = function () {
        var _this = this;
        if (this.items && this.items.length) {
            return this.items.filter(function (item) { return item.type === _this.selectedTab.alias; });
        }
        else {
            return [];
        }
    };
    LibraryComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadItems({});
                        this.tabs = this.types.map(function (item) {
                            return {
                                name: _this.tabsCollection[item].name,
                                icon: _this.tabsCollection[item].icon,
                                alias: item,
                            };
                        });
                        // if (Object.keys(query).length) {
                        //   this.query = query;
                        // }
                        _a = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["SlidesDataController"].query(this.query)];
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LibraryComponent.prototype, "types", void 0);
    LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.component.html */ "./src/app/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/library/library.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LibraryComponent);
    return LibraryComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/library.module.ts":
/*!*******************************************!*\
  !*** ./src/app/library/library.module.ts ***!
  \*******************************************/
/*! exports provided: libraryRoutes, LibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "libraryRoutes", function() { return libraryRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryModule", function() { return LibraryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media/media.component */ "./src/app/library/media/media.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/library/videos/videos.component.ts");
/* harmony import */ var _sounds_sounds_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sounds/sounds.component */ "./src/app/library/sounds/sounds.component.ts");
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slides/slides.component */ "./src/app/library/slides/slides.component.ts");
/* harmony import */ var _library_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _editor_editor_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../editor/editor.module */ "./src/app/editor/editor.module.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/library/upload/upload.component.ts");
/* harmony import */ var _editor_slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../editor/slide-editor/slide-editor.component */ "./src/app/editor/slide-editor/slide-editor.component.ts");
/* harmony import */ var _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fonts/fonts.component */ "./src/app/library/fonts/fonts.component.ts");
/* harmony import */ var _shares_shares_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shares/shares.component */ "./src/app/library/shares/shares.component.ts");
















var libraryRoutes = [
    {
        path: 'library', component: _library_component__WEBPACK_IMPORTED_MODULE_10__["LibraryComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'media'
            },
            { path: 'media', component: _media_media_component__WEBPACK_IMPORTED_MODULE_6__["MediaComponent"] },
            { path: 'shares', component: _shares_shares_component__WEBPACK_IMPORTED_MODULE_15__["SharesComponent"] },
            { path: 'slide', component: _slides_slides_component__WEBPACK_IMPORTED_MODULE_9__["SlidesComponent"] },
        ]
    },
    { path: 'library/slide/:id', component: _editor_slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_13__["SlideEditorComponent"] },
    { path: 'library/slide/:id/template/:template', component: _editor_slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_13__["SlideEditorComponent"] },
];
var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _editor_editor_module__WEBPACK_IMPORTED_MODULE_11__["EditorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [_library_component__WEBPACK_IMPORTED_MODULE_10__["LibraryComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            entryComponents: [_library_component__WEBPACK_IMPORTED_MODULE_10__["LibraryComponent"]],
            declarations: [_media_media_component__WEBPACK_IMPORTED_MODULE_6__["MediaComponent"],
                _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_14__["FontsComponent"],
                _videos_videos_component__WEBPACK_IMPORTED_MODULE_7__["VideosComponent"], _sounds_sounds_component__WEBPACK_IMPORTED_MODULE_8__["SoundsComponent"], _slides_slides_component__WEBPACK_IMPORTED_MODULE_9__["SlidesComponent"],
                _library_component__WEBPACK_IMPORTED_MODULE_10__["LibraryComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_12__["UploadComponent"], _shares_shares_component__WEBPACK_IMPORTED_MODULE_15__["SharesComponent"]
            ],
            providers: []
        })
    ], LibraryModule);
    return LibraryModule;
}());



/***/ }),

/***/ "./src/app/library/media/media.component.html":
/*!****************************************************!*\
  !*** ./src/app/library/media/media.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-lobby *ngIf=\"items\" [items]=\"items\" mode=\"media\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem({type:'image'})\"></app-lobby>\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open= {{displayModalNew}}>\n    <app-slide-header title=\"NAVBAR.MEDIA\" iconClass=\"fas fa-images\" closeFn=\"true\" [enableSave]='true' (save)=\"saveProxy()\"\n      className=\"library-cat\" (closed)=\"closeSlider()\"></app-slide-header>\n    <div class=\"pt50\"></div>\n    <div class=\"scroller\">\n      <form *ngIf=\"item\">\n        <div class=\"form-group\">\n          <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n          <input type=\"text\" [detectChanges]=\"true\" name=\"libraryName\" class=\"form-control\" [(ngModel)]=\"item.Name\">\n          <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n        </div>\n        <div class=\"form-group\">\n          <app-upload [item]=\"item\" [detectChanges]=\"true\" (change)=\"change($event)\"></app-upload>\n          <small id=\" screenHelp \" class=\"form-text text-muted \">{{ \"LIBRARY.IMAGE_DESCRIPTION\" | translate }}</small>\n        </div>\n      </form>\n\n      <!-- <img *ngIf=\"item.thumb && !uploading\" [src]=\"item.thumb\" class=\"fancy-image\">\n      <p><a href=\"{{item.thumb}}\" target=\"_blank\" class=\"form-text text-muted\"><small>{{item.thumb}}</small></a></p> -->\n\n\n    </div>\n    <app-slide-footer className=\"library-cat\"></app-slide-footer>\n  </dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/library/media/media.component.scss":
/*!****************************************************!*\
  !*** ./src/app/library/media/media.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fancy-thumb {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n\n.fancy-image {\n  width: 100%;\n  height: 250px;\n  background-size: cover !important;\n  background-repeat: no-repeat !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9tZWRpYS9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGxpYnJhcnlcXG1lZGlhXFxtZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPLEVBQUE7O0FBR1g7RUFFSSxXQUFVO0VBQ1YsYUFBYTtFQUNiLGlDQUFnQztFQUNoQyx1Q0FBc0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbWVkaWEvbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mYW5jeS10aHVtYlxyXG57ICAgXHJcbiAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uZmFuY3ktaW1hZ2Vcclxue1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIWltcG9ydGFudDsgICAgIFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/library/media/media.component.ts":
/*!**************************************************!*\
  !*** ./src/app/library/media/media.component.ts ***!
  \**************************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var MediaComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MediaComponent, _super);
    function MediaComponent(_ngZone, translateService) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.uploading = false;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["LibraryDataController"];
        return _this;
        // this.DataModel = PlaylistModel;
    }
    MediaComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadItems({});
                return [2 /*return*/];
            });
        });
    };
    MediaComponent.prototype.saveLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.type = 'image';
                this.updateItem();
                return [2 /*return*/];
            });
        });
    };
    MediaComponent.prototype.createLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.type = 'image';
                this.createItem();
                return [2 /*return*/];
            });
        });
    };
    MediaComponent.prototype.change = function (state) {
        this.uploading = state === 'start' ? true : false;
    };
    MediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.component.html */ "./src/app/library/media/media.component.html"),
            styles: [__webpack_require__(/*! ./media.component.scss */ "./src/app/library/media/media.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], MediaComponent);
    return MediaComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/shares/shares.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/shares/shares.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #toolbarTemplate let-item=\"item\">\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n        <li>\n            <button class=\"btn btn-secondary btn-md btn-success\" (click)=\"startFromTemplate(item);\"> <i class=\"fas fa-bolt\"></i>\n            </button>\n        </li>\n        <li>\n          \n        </li>\n    </ul>\n</ng-template>\n\n<app-lobby [items]=\"items\" mode='media' [toolbar]=\"toolbarTemplate\" [noNew]=\"true\">\n\n</app-lobby>\n"

/***/ }),

/***/ "./src/app/library/shares/shares.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/shares/shares.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-canvas {\n  border: 1px solid #66cc66; }\n\n.h1 {\n  font-size: 24px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9zaGFyZXMvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxsaWJyYXJ5XFxzaGFyZXNcXHNoYXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHlCQUF5QixFQUFBOztBQUkzQjtFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvc2hhcmVzL3NoYXJlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZS1jYW52YXN7XHJcbiAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2Y2M2NjtcclxufVxyXG5cclxuXHJcbi5oMXtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/library/shares/shares.component.ts":
/*!****************************************************!*\
  !*** ./src/app/library/shares/shares.component.ts ***!
  \****************************************************/
/*! exports provided: SharesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesComponent", function() { return SharesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SharesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SharesComponent, _super);
    function SharesComponent(_ngZone, translateService, router) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.router = router;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["ShareDataController"];
        return _this;
        // this.DataModel = PlaylistModel;
    }
    SharesComponent.prototype.startFromTemplate = function (item) {
        this.router.navigate(['/dashboard/library/slide/0/template/', item._id]);
    };
    SharesComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["ShareDataController"].search({})];
                    case 1:
                        _a.items = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SharesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shares',
            template: __webpack_require__(/*! ./shares.component.html */ "./src/app/library/shares/shares.component.html"),
            styles: [__webpack_require__(/*! ./shares.component.scss */ "./src/app/library/shares/shares.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SharesComponent);
    return SharesComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/slides/slides.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/slides/slides.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n<app-lobby   [items]=\"items\" mode='media' (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" \n(newItem)=\"newItem()\" ></app-lobby>\n \n"

/***/ }),

/***/ "./src/app/library/slides/slides.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/slides/slides.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-canvas {\n  border: 1px solid #66cc66; }\n\n.h1 {\n  font-size: 24px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9zbGlkZXMvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxsaWJyYXJ5XFxzbGlkZXNcXHNsaWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHlCQUF5QixFQUFBOztBQUkzQjtFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZS1jYW52YXN7XHJcbiAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2Y2M2NjtcclxufVxyXG5cclxuXHJcbi5oMXtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_history_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/history.service */ "./src/app/services/history.service.ts");







var SlidesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SlidesComponent, _super);
    function SlidesComponent(_ngZone, translateService, router, previousRouteService) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.router = router;
        _this.previousRouteService = previousRouteService;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["SlidesDataController"];
        console.log(_this.previousRouteService.getPreviousUrl());
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
    SlidesComponent.prototype.editItem = function (item) {
        // Absolute route - Goes up to root level with route params
        this.router.navigate(['/dashboard/library/slide/', item._id]);
    };
    SlidesComponent.prototype.newItem = function () {
        this.router.navigate(['/dashboard/library/slide/', 0]);
    };
    SlidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides',
            template: __webpack_require__(/*! ./slides.component.html */ "./src/app/library/slides/slides.component.html"),
            styles: [__webpack_require__(/*! ./slides.component.scss */ "./src/app/library/slides/slides.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_history_service__WEBPACK_IMPORTED_MODULE_6__["PreviousRouteService"]])
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

module.exports = "<app-lobby [items]=\"items\" mode=\"object\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem({type:'sound'})\"></app-lobby>\n\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open= {{displayModalNew}}>\n    <app-slide-header title=\"NAVBAR.FONTS\" closeFn=\"true\" iconClass=\"fas fa-images\" [enableSave]='true' (save)=\"saveProxy()\"\n      className=\"library-cat\" (closed)=\"closeSlider()\"></app-slide-header>\n    <div class=\"scroller\">\n      <form *ngIf=\"item\">\n        <div class=\"form-group\">\n          <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n          <input type=\"text\" name=\"libraryName\" class=\"form-control\" [(ngModel)]=\"item.Name\">\n          <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"libraryFile\">{{ \"LIBRARY.RESOURCE\" | translate }}</label>\n          <app-upload [item]=\"item\"></app-upload>\n        </div>\n\n      </form>\n    </div>\n    <button *ngIf=\"item && item._id\" class=\"btn btn-primary\" (click)=\"saveLibrary()\">{{ \"LIBRARY.UPDATE\" | translate }}</button>\n    <button *ngIf=\"!item || !item._id\" class=\"btn btn-primary\" (click)=\"createLibrary()\">{{ \"LIBRARY.CREATE\" | translate }}</button>\n  </dialog>\n</div>\n"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
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

module.exports = "<!-- <div (click)=\"addFiles()\" class=\"btn btn-default\">\n  <file-drop headertext=\"Drop files here\" customstyle=\"dropzone\" (onFileDrop)=\"dropped($event)\">\n  </file-drop>\n</div> -->\n\n\n\n<div>\n  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n  <img [src]=\"thumb\" (load)=\"clearUpload()\" #imgIndicator id=\"imgIndicator\" style=\"display: none;\" />\n\n</div>\n\n\n<div class=\"input-group\">\n  <file-drop headertext=\"Drop files here\" customstyle=\"dropzone\" (onFileDrop)=\"dropped($event)\">\n  </file-drop>\n\n  <div class=\"input-group-prepend\">\n    <label for=\"libraryFile\" class=\"input-group-text\" (click)=\"addFiles()\">{{ \"LIBRARY.RESOURCE\" | translate }}</label>\n  </div>\n  <div class=\"custom-file\">\n    <input type=\"file\" #file class=\"custom-file-input\" (change)=\"selected()\" />\n\n    <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/library/upload/upload.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/upload/upload.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader,\n.loader:before,\n.loader:after {\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load7 1.8s infinite ease-in-out;\n  animation: load7 1.8s infinite ease-in-out; }\n\n.loader {\n  color: #ca2e2e;\n  font-size: 10px;\n  margin: 80px auto;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n.loader:before,\n.loader:after {\n  content: '';\n  position: absolute;\n  top: 0; }\n\n.loader:before {\n  left: -3.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.loader:after {\n  left: 3.5em; }\n\n@-webkit-keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em; }\n  40% {\n    box-shadow: 0 2.5em 0 0; } }\n\n@keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em; }\n  40% {\n    box-shadow: 0 2.5em 0 0; } }\n\n.dropzone {\n  height: 30px; }\n\n.dropzone .content {\n    height: 30px; }\n\n#imgIndicator {\n  visibility: hidden;\n  width: 1px;\n  height: 1px; }\n\n.fancy-image {\n  width: 100%;\n  height: 250px;\n  background-size: cover !important;\n  background-repeat: no-repeat !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS91cGxvYWQvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxsaWJyYXJ5XFx1cGxvYWRcXHVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixrREFBa0Q7RUFDbEQsMENBQTBDLEVBQUE7O0FBRTVDO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFFaEMsd0JBQXdCO0VBQ3hCLCtCQUErQjtFQUMvQix1QkFBdUIsRUFBQTs7QUFFekI7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNLEVBQUE7O0FBRVI7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFOzs7SUFHRSw0QkFBNEIsRUFBQTtFQUU5QjtJQUNFLHVCQUF1QixFQUFBLEVBQUE7O0FBRzNCO0VBQ0U7OztJQUdFLDRCQUE0QixFQUFBO0VBRTlCO0lBQ0UsdUJBQXVCLEVBQUEsRUFBQTs7QUFJM0I7RUFDRSxZQUFZLEVBQUE7O0FBRGQ7SUFHSSxZQUFZLEVBQUE7O0FBSWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2I7RUFFSSxXQUFVO0VBQ1YsYUFBYTtFQUNiLGlDQUFnQztFQUNoQyx1Q0FBc0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIsXHJcbi5sb2FkZXI6YmVmb3JlLFxyXG4ubG9hZGVyOmFmdGVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDIuNWVtO1xyXG4gIGhlaWdodDogMi41ZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ3IDEuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBsb2FkNyAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5sb2FkZXIge1xyXG4gIGNvbG9yOiAjY2EyZTJlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBtYXJnaW46IDgwcHggYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxufVxyXG4ubG9hZGVyOmJlZm9yZSxcclxuLmxvYWRlcjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxufVxyXG4ubG9hZGVyOmJlZm9yZSB7XHJcbiAgbGVmdDogLTMuNWVtO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbn1cclxuLmxvYWRlcjphZnRlciB7XHJcbiAgbGVmdDogMy41ZW07XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ3IHtcclxuICAwJSxcclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgLTEuM2VtO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbG9hZDcge1xyXG4gIDAlLFxyXG4gIDgwJSxcclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAtMS4zZW07XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgMDtcclxuICB9XHJcbn1cclxuXHJcbi5kcm9wem9uZXtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuI2ltZ0luZGljYXRvcntcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgd2lkdGg6IDFweDtcclxuICBoZWlnaHQ6IDFweDtcclxufVxyXG5cclxuLmZhbmN5LWltYWdlXHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciFpbXBvcnRhbnQ7ICAgICBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_2__);



var UploadComponent = /** @class */ (function () {
    function UploadComponent(_ngZone) {
        this._ngZone = _ngZone;
        this.count = 0;
        this.files = new Set();
        this.uploadComplete = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
                this.change.emit('end');
                return [2 /*return*/];
            });
        }); });
    };
    UploadComponent.prototype.waitUpload = function (src) {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.change.emit('start');
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UploadComponent.prototype, "change", void 0);
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

module.exports = "<app-lobby [items]=\"items\" mode=\"media\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem({type:'video'})\"></app-lobby>\n\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open= {{displayModalNew}}>\n    <app-slide-header title=\"NAVBAR.VIDEOS\" closeFn=\"true\" iconClass=\"fas fa-video\" \n    [enableSave]='true' (save)=\"saveProxy($event)\"\n    className=\"library-cat\" (closed)=\"closeSlider()\"></app-slide-header>\n    <div class=\"pt50\"></div>\n    <div class=\"scroller\">\n      <form *ngIf=\"item\">\n        <div class=\"form-group\">\n          <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n          <input type=\"text\" name=\"libraryName\" class=\"form-control\"   [(ngModel)]=\"item.Name\">\n          <small id=\"nameHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"embedCode\">{{ \"LIBRARY.EMBED\" | translate }}:</label>\n          <textarea id=\"embedCode\" name=\"embedCode\" class=\"form-control\" [(ngModel)]=\"item.Embed\"></textarea>\n          <small id=\"embedHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.EMBED_HELP\" | translate }}</small>\n        </div>\n      </form>\n    </div>\n       <app-slide-footer className=\"library-cat\"></app-slide-footer>\n\n  </dialog>\n</div>\n"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
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

/***/ "./src/app/playlists/playlist.item/playlist.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/playlists/playlist.item/playlist.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dialog open style=\"position: relative;\" class=\"playlist\">\n  <ng-template #toolbar let-item=\"item\">\n    <div class=\"btn-group\" data-toggle=\"buttons\">\n      <button class=\"btn-tool btn-play\" (click)=\"preview()\"> <i class=\"fas fa-play\"></i></button>\n    </div>\n  </ng-template>\n\n\n  <app-slide-header [title]=\"'NAVBAR.PLAYLISTS'\" mode=\"inline\" [enableSave]='true' (save)=\"saveProxy()\" iconClass=\"fas fa-step-forward\"\n    className=\"playlist-cat\" [closeFn]=\"true\" [toolbar]=\"toolbar\" (closed)=\"closeSlider()\"></app-slide-header>\n  <form *ngIf=\"item\" class=\"pad\">\n    <app-changes [item]=\"item\"></app-changes>\n\n    <app-playlist-player *ngIf=\"previewOn\" [playerPlan]=\"item\"></app-playlist-player>\n    <div [appAdaptHeight]=\"previewHeight\">\n      <div class=\"form-group\">\n        <label for=\"itemName\">{{ \"PLAYLISTS.NAME\" | translate }}:</label>\n        <input type=\"text\" name=\"itemName\" class=\"form-control\" id=\"itemName\" [(ngModel)]=\"item.Name\">\n        <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"PLAYLISTS.NAME_HELP\" | translate }}</small>\n      </div>\n      <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item {{tab.class}}\" *ngFor=\"let tab of tabs\">\n          <a class=\"nav-link\" (click)=\"tabSelect(tab)\">{{tab.name | translate}}</a>\n        </li>\n      </ul>\n      <div *ngIf=\"tabs[0].selected\">\n\n        <div class=\"form-group\" class=\"sortable\">\n          <div class=\"shadow btn-long\" (click)=\"finder()\"><i class=\"fas fa-plus-circle\"></i> {{\"PLAYLISTS.ADDTOLIST\" | translate}}</div>\n          <div *ngIf=\"playlistMode==='normal'\" [class]=\"playlistMode\">\n\n            <div class=\"horizontal-scroller playlist-cat\" dragula=\"DRAGULA_FACTS\" [(dragulaModel)]=\"item.list\" (dropModel)=\"drop($event)\"\n              style=\"direction: ltr;\">\n              <div *ngFor=\"let listitem of item.list; let i = index\" class=\"slot shadow\" [ngStyle]=\"{'left': (20 + (i)*240) + 'px', 'top':'20px'}\">\n                <app-lobby-item *ngIf=\"listitem\" [item]=\"listitem\"></app-lobby-item>\n                <ul class=\"sqr-toolbar btn-group direction\" role=\"group\">\n                  <li>\n\n                    <button class=\"btn btn-secondary btn-md btn-default\" (click)=\"editListItem(listitem);\"> <i class=\"fas fa-edit\"></i>\n                    </button>\n\n\n                    <button class=\"btn btn-secondary btn-md btn-danger\" (click)=\"removeListItem(listitem);\"> <i class=\"fas fa-trash\"></i>\n                    </button>\n\n\n\n                  </li>\n                  <li>\n                    <input type=\"number\" [detectChanges]=\"true\" [(ngModel)]=\"listitem.duration\" name=\"duration\">\n                  </li>\n                  <li>\n                    <select [detectChanges]=\"true\" [(ngModel)]=\"listitem.transition\" name=\"transition\">\n                      <option *ngFor=\"let c of effects\" [ngValue]=\"c\">{{c}}</option>\n                    </select>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"tabs[1].selected\">\n        <div class=\"form-group shadow\">\n          <div class=\"btn-long\" (click)=\"schedule()\"><i class=\"fas fa-plus-circle\"></i> {{\"PLAYLISTS.ADDTIME\" | translate}}</div>\n          <div id=\"timeSlots\" *ngIf=\"editTime && selectedTimeEl\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"itemName\">{{ \"PLAYLISTS.SCHEDULE\" | translate }}:</label>\n                <select [(ngModel)]=\"selectedTimeEl.timeslot\" name=\"timeSlotOptions\" [compareWith]=\"compareFnId\" class=\"form-control\">\n                  <option *ngFor=\"let c of timeSlotOptions\" [ngValue]=\"c\">{{c.name | translate}}</option>\n                </select>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"ScreenGroup\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n                <select [(ngModel)]=\"selectedTimeEl.screenGroup\" name=\"ScreenGroup\" [compareWith]=\"compareFn_id\" class=\"form-control\">\n                  <option *ngFor=\"let c of groups\" [ngValue]=\"c\">{{c.Name}}</option>\n                </select>\n              </div>\n              <button class=\"btn btn-primary\" (click)=\"addTimeSlot()\">{{ \"PLAYLISTS.SETTIME\" | translate}}</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"container\">\n\n          <div *ngFor=\"let timeslotEl of item.TimeSlots\" class=\"sqr short shadow\">\n            <label>{{timeslotEl.timeslot.name | translate}}</label>\n            <small>{{timeslotEl.screenGroup.Name}}</small>\n            <ul class=\"sqr-toolbar\">\n              <li>\n                <button class=\"btn btn-md btn-danger\" (click)=\"deleteTimeslot(timeslotEl);\"> <i class=\"fas fa-trash\"></i>\n                </button>\n              </li>\n              <li>\n                <button class=\"btn btn-md btn-primary\" (click)=\"editTimeslot(timeslotEl);\"> <i class=\"fas fa-edit\"></i> </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <hr />\n\n  </form>\n\n  <app-slide-footer className=\"playlist-cat\"></app-slide-footer>\n</dialog>\n\n\n\n\n\n<app-finder [types]=\"['image','video','slide']\" [active]=\"finderActive\" [selector]=\"addToList\"></app-finder>\n"

/***/ }),

/***/ "./src/app/playlists/playlist.item/playlist.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/playlists/playlist.item/playlist.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad {\n  padding-top: 20px;\n  padding-right: 30px;\n  padding-left: 30px; }\n\n.short {\n  height: 90px; }\n\n.box-container {\n  position: relative;\n  height: 150px;\n  padding: 45px 0; }\n\n.box-swap {\n  position: absolute;\n  text-align: center;\n  width: 150px;\n  height: 60px;\n  padding: 15px 35px;\n  line-height: 30px; }\n\n.box-swap.static-block {\n    transition: all 0.3s ease-out; }\n\n/* in-flight clone */\n\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  pointer-events: none; }\n\n/* high-performance display:none; helper */\n\n.gu-hide {\n  left: -9999px !important; }\n\n/* added to mirrorContainer (default = body) while dragging */\n\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important; }\n\n/* added to the source element while its mirror is dragged */\n\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20); }\n\n.horizontal-scroller {\n  margin-right: 4px;\n  margin-left: 4px;\n  width: 100%;\n  overflow-y: hidden;\n  overflow-x: auto;\n  direction: ltr;\n  position: relative;\n  height: 250px; }\n\n.slot {\n  position: absolute;\n  width: 230px;\n  height: 200px; }\n\n.slot .sqr-toolbar {\n    background-color: #e3e4e5;\n    width: 222px;\n    visibility: visible; }\n\n.slot .sqr-toolbar input {\n      width: 50px;\n      height: 24px; }\n\n.slot .sqr-toolbar select {\n      width: 100px;\n      height: 24px; }\n\n.canvas-bg {\n  position: absolute;\n  z-index: 0; }\n\n.sqr-btn {\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr-btn .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn:hover .sqr-toolbar input, .sqr:hover .sqr-toolbar input {\n      width: 50px;\n      height: 30px; }\n\n.sqr-btn:hover .sqr-toolbar select, .sqr:hover .sqr-toolbar select {\n      height: 30px; }\n\n.fancy-thumb {\n  z-index: 1000; }\n\n.extended-padding {\n  padding: 50px; }\n\n.extended {\n  overflow: hidden;\n  padding: 30px;\n  height: 400px;\n  background-color: white;\n  position: absolute;\n  top: 200px;\n  right: 50px;\n  left: 50px;\n  border: 1px solid red; }\n\n.extended .topper {\n    pointer-events: none;\n    z-index: 0;\n    height: 65px;\n    opacity: 0.8;\n    position: absolute;\n    padding-top: 30px;\n    top: -30px;\n    left: 0;\n    right: 0; }\n\n.extended .topper .icon {\n      margin: 8px;\n      vertical-align: top; }\n\n.extended .topper h4 {\n      display: inline;\n      vertical-align: top; }\n\n.extended .topper .bar-icon {\n      margin-left: 15px; }\n\n:host-context(.ltr) .btn-play {\n  float: left; }\n\n:host-context(.ltr) .btn-play {\n  float: right; }\n\n.btn-play {\n  width: 52px;\n  height: 52px;\n  background-color: #f3b7eb;\n  color: white;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0Lml0ZW0vQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxwbGF5bGlzdHNcXHBsYXlsaXN0Lml0ZW1cXHBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5bGlzdHMvcGxheWxpc3QuaXRlbS9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNLLFlBQVcsRUFBQTs7QUFHZjtFQUNHLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBTm5CO0lBU0ksNkJBQTZCLEVBQUE7O0FBS2pDLG9CQUFBOztBQUNGO0VBQ0ksMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGlFQUFpRTtFQUNqRSx5QkFBeUI7RUFDekIsb0JBQW9CLEVBQUE7O0FBRXRCLDBDQUFBOztBQUNBO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRTFCLDZEQUFBOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlDQUFpQztFQUNqQyxnQ0FBZ0M7RUFDaEMsNEJBQTRCLEVBQUE7O0FBRTlCLDREQUFBOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGlFQUFpRTtFQUNqRSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUVmO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBSGpCO0lBS00seUJDMUVjO0lEMkVkLFlBQVk7SUFDWixtQkFBbUIsRUFBQTs7QUFQekI7TUFRYSxXQUFXO01BQUMsWUFBVyxFQUFBOztBQVJwQztNQVNjLFlBQVk7TUFBRSxZQUFZLEVBQUE7O0FBSXhDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFJVjtFQUlFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBTnhCO0lBRUUsbUJBQW1CLEVBQUE7O0FBTXZCO0VBQ0ksVUFBVSxFQUFBOztBQURkO0lBR1EsbUJBQW1CLEVBQUE7O0FBSDNCO01BSWUsV0FBVztNQUFDLFlBQVcsRUFBQTs7QUFKdEM7TUFLaUIsWUFBWSxFQUFBOztBQUc3QjtFQUVFLGFBQVksRUFBQTs7QUFJZDtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLGdCQUFnQjtFQUVoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUV2QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQXFCLEVBQUE7O0FBWHZCO0lBY0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLE9BQU87SUFDUCxRQUFRLEVBQUE7O0FBdEJaO01Bd0JRLFdBQVc7TUFDWCxtQkFBbUIsRUFBQTs7QUF6QjNCO01BNEJRLGVBQWU7TUFDZixtQkFBbUIsRUFBQTs7QUE3QjNCO01BZ0NRLGlCQUFpQixFQUFBOztBQU16QjtFQUdJLFdBQVcsRUFBQTs7QUFJZjtFQUdJLFlBQVksRUFBQTs7QUFJaEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQzdKb0I7RUQ4SnBCLFlBQVk7RUFDWixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGF5bGlzdHMvcGxheWxpc3QuaXRlbS9wbGF5bGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3Nhc3MvX3ZhcmlhYmxlcyc7XHJcblxyXG5cclxuLnBhZHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyBcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7IFxyXG59XHJcblxyXG4uc2hvcnR7XHJcbiAgICAgaGVpZ2h0OjkwcHg7XHJcbiB9XHJcblxyXG4gLmJveC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDQ1cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmJveC1zd2FwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIFxyXG4gICAgJi5zdGF0aWMtYmxvY2sge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKiBpbi1mbGlnaHQgY2xvbmUgKi9cclxuLmd1LW1pcnJvciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT04MClcIjtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgLyogaGlnaC1wZXJmb3JtYW5jZSBkaXNwbGF5Om5vbmU7IGhlbHBlciAqL1xyXG4gIC5ndS1oaWRlIHtcclxuICAgIGxlZnQ6IC05OTk5cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogYWRkZWQgdG8gbWlycm9yQ29udGFpbmVyIChkZWZhdWx0ID0gYm9keSkgd2hpbGUgZHJhZ2dpbmcgKi9cclxuICAuZ3UtdW5zZWxlY3RhYmxlIHtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogYWRkZWQgdG8gdGhlIHNvdXJjZSBlbGVtZW50IHdoaWxlIGl0cyBtaXJyb3IgaXMgZHJhZ2dlZCAqL1xyXG4gIC5ndS10cmFuc2l0IHtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MjApXCI7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xyXG4gIH1cclxuLmhvcml6b250YWwtc2Nyb2xsZXJ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBkaXJlY3Rpb246IGx0cjsgIFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcbi5zbG90e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIC5zcXItdG9vbGJhcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXk7XHJcbiAgICAgIHdpZHRoOiAyMjJweDtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgaW5wdXR7IHdpZHRoOiA1MHB4O2hlaWdodDoyNHB4O31cclxuICAgICAgc2VsZWN0IHt3aWR0aDogMTAwcHg7IGhlaWdodDogMjRweDt9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FudmFzLWJne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4gXHJcbiAgLnNxci1idG57XHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gICAgZm9udC1zaXplOiA4NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uc3FyLWJ0bjpob3Zlciwuc3FyOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC5zcXItdG9vbGJhcntcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIGlucHV0eyB3aWR0aDogNTBweDtoZWlnaHQ6MzBweDt9XHJcbiAgICAgICAgc2VsZWN0IHsgaGVpZ2h0OiAzMHB4O31cclxuICAgIH1cclxufVxyXG4uZmFuY3ktdGh1bWJcclxue1xyXG4gIHotaW5kZXg6MTAwMDtcclxufVxyXG4gXHJcbiBcclxuLmV4dGVuZGVkLXBhZGRpbmd7XHJcbiAgcGFkZGluZzogNTBweDtcclxufVxyXG4uZXh0ZW5kZWR7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuIFxyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMDBweDtcclxuICByaWdodDogNTBweDtcclxuICBsZWZ0OiA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuXHJcbiAgLnRvcHBlcntcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBoZWlnaHQ6IDY1cHg7ICAgXHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICBcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIC5pY29ue1xyXG4gICAgICAgIG1hcmdpbjogOHB4OyAgICAgIFxyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIC5iYXItaWNvbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxufSAgXHJcblxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5sdHIpXHJcbntcclxuICAuYnRuLXBsYXl7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmx0cilcclxue1xyXG4gIC5idG4tcGxheXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tcGxheXtcclxuICB3aWR0aDogNTJweDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXB1cnBsZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyBcclxufVxyXG4gIiwiXHJcbiRjb2xvci1ncmF5OiAjZTNlNGU1O1xyXG4kY29sb3ItZGFya2JsdWUxOiAjMTYyNDMzO1xyXG4kY29sb3ItZGFya2JsdWUyOiAjMmE0NTYzO1xyXG4kY29sb3ItbGlnaHRibHVlMTogIzI2NDM1NjtcclxuJGNvbG9yLWxpZ2h0Ymx1ZTI6ICMzYzczOTk7XHJcbiRjb2xvci1vcmFuZ2U6ICNmYzY2MDA7XHJcbiRjb2xvci1jeWFuOiAjMDBmZmY2O1xyXG4kY29sb3Itc2NyZWVuOiAjMDBjZmZmO1xyXG4kY29sb3Itc2NyZWVuLWdyb3VwOiAjMDBmZmY2O1xyXG4kY29sb3ItbGlicmFyeTogIzk2ZmYwMDtcclxuJGNvbG9yLXllbGxvdzogI2ZmZmYwMDtcclxuJGNvbG9yLXB1cnBsZTogI2YzYjdlYjtcclxuJGNvbG9yLWdyZWVuOiAjOTZmZjAwO1xyXG4gXHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/playlists/playlist.item/playlist.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/playlists/playlist.item/playlist.component.ts ***!
  \***************************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");
/* harmony import */ var _services_history_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/history.service */ "./src/app/services/history.service.ts");










var PlaylistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlaylistComponent, _super);
    function PlaylistComponent(_ngZone, translateService, dragulaService, route, router, dirtyService, previousRouteService) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.dragulaService = dragulaService;
        _this.route = route;
        _this.router = router;
        _this.dirtyService = dirtyService;
        _this.previousRouteService = previousRouteService;
        _this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        _this.effects = ['slide-in', 'slide-out'];
        _this.playlistMode = 'normal';
        _this.listStyle = {
            width: '100%',
            height: '400px',
        };
        _this.tabs = [{ name: 'PLAYLISTS.LIST', selected: true, class: 'playlist-cat' }, { name: 'PLAYLISTS.TIME', selected: false }];
        _this.timeSlotOptions = [{ id: 'ALL', name: 'TIMES.ALL' }, { id: '8TO8', name: 'TIMES.8TO8' }];
        _this.displayDrawer = 'closing';
        _this.finderActive = 'closing';
        _this.previewHeight = 100;
        _this.freshSlides = {};
        _this.addToList = function (resource) {
            if (!_this.item.list) {
                _this.item.list = [];
            }
            _this.item.list.push(resource);
            _this.dirtyService.setDirty();
            _this.finderActive = 'closing';
        };
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_2__["Playlist"];
        _this.addToList.bind(_this);
        _this.subs.add(_this.dragulaService.dropModel('DRAGULA_FACTS')
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, target = _a.target, source = _a.source, sibling = _a.sibling, sourceModel = _a.sourceModel, targetModel = _a.targetModel, item = _a.item;
        }));
        return _this;
    }
    PlaylistComponent.prototype.tabSelect = function (tab) {
        this.tabs.forEach(function (tabItem) { tabItem.selected = false; tabItem.class = ''; });
        tab.selected = true;
        tab.class = 'playlist-cat';
    };
    PlaylistComponent.prototype.compareFnId = function (a, b) {
        if (b) {
            return a.id === b.id;
        }
    };
    PlaylistComponent.prototype.compareFn_id = function (a, b) {
        if (b) {
            return a._id === b._id;
        }
    };
    PlaylistComponent.prototype.drop = function (event) {
    };
    PlaylistComponent.prototype.preview = function () {
        this.previewOn = !this.previewOn;
        if (this.previewOn) {
            this.previewHeight = 400;
        }
        else {
            this.previewHeight = 100;
        }
    };
    PlaylistComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var groups;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.route.params.subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a, idsArr, set, index;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!(data.id !== '0')) return [3 /*break*/, 2];
                                        _a = this;
                                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["Playlist"].get(data.id)];
                                    case 1:
                                        _a.item = _b.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        this.item = { list: [] };
                                        _b.label = 3;
                                    case 3: return [4 /*yield*/, this.item.list.map(function (item) { return item._id; })];
                                    case 4:
                                        idsArr = _b.sent();
                                        if (!(idsArr && idsArr.length > 0)) return [3 /*break*/, 6];
                                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["SlidesDataController"].getSet(idsArr)];
                                    case 5:
                                        set = _b.sent();
                                        set.forEach(function (item) {
                                            _this.freshSlides[item._id] = item;
                                        });
                                        for (index = 0; index < this.item.list.length; index++) {
                                            if (this.freshSlides[this.item.list[index]._id]) {
                                                this.item.list[index] = this.freshSlides[this.item.list[index]._id];
                                            }
                                        }
                                        _b.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["ScreenGroupDataController"].query({})];
                    case 1:
                        groups = _a.sent();
                        this.groups = groups;
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaylistComponent.prototype.closeDrawer = function () {
        this.displayDrawer = 'closing';
    };
    PlaylistComponent.prototype.closeSlider = function () {
        this.router.navigate(['/dashboard/playlists']);
        this.displayModalNew = 'closing';
    };
    PlaylistComponent.prototype.finder = function (finderMode) {
        this.finderMode = finderMode;
        this.finderActive = 'active';
    };
    PlaylistComponent.prototype.schedule = function () {
        this.selectedTimeEl = {};
        this.editTime = true;
        this.displayDrawer = 'active';
    };
    PlaylistComponent.prototype.addTimeSlot = function () {
        if (!this.item.TimeSlots) {
            this.item.TimeSlots = [];
        }
        if (!this.selectedTimeEl.id) {
            Object.assign(this.selectedTimeEl, { id: new Date().valueOf() });
            this.item.TimeSlots.push(this.selectedTimeEl);
        }
        this.dirtyService.setDirty();
        this.selectedTimeEl = null;
    };
    PlaylistComponent.prototype.deleteTimeslot = function (timeslot) {
        var _this = this;
        this.translateService.get('DATA.CONFIRM_DELETE').subscribe(function (confirmMessage) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (confirm("" + confirmMessage)) {
                    this.item.TimeSlots.splice(this.item.TimeSlots.indexOf(timeslot), 1);
                    this.dirtyService.setDirty();
                }
                return [2 /*return*/];
            });
        }); });
    };
    PlaylistComponent.prototype.editListItem = function (item) {
        if (item.type === 'slide') {
            this.router.navigate(['/dashboard/library/slide/', item._id]);
        }
    };
    PlaylistComponent.prototype.removeListItem = function (item) {
        this.item.list.splice(this.item.list.indexOf(item), 1);
        this.dirtyService.setDirty();
    };
    PlaylistComponent.prototype.editTimeslot = function (timeslotEL) {
        this.editTime = true;
        this.selectedTimeEl = timeslotEL;
    };
    PlaylistComponent.prototype.saveProxy = function () {
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
    PlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlist',
            template: __webpack_require__(/*! ./playlist.component.html */ "./src/app/playlists/playlist.item/playlist.component.html"),
            styles: [__webpack_require__(/*! ./playlist.component.scss */ "./src/app/playlists/playlist.item/playlist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ng2_dragula__WEBPACK_IMPORTED_MODULE_6__["DragulaService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_8__["DirtyService"], _services_history_service__WEBPACK_IMPORTED_MODULE_9__["PreviousRouteService"]])
    ], PlaylistComponent);
    return PlaylistComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_3__["DataComponent"]));



/***/ }),

/***/ "./src/app/playlists/playlist.player/playlist.player.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/playlists/playlist.player/playlist.player.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select [(ngModel)]=\"ScreenSize\" name=\"ScreenSize\" [compareWith]=\"compareFn\" (change)=\"redraw($event)\" class=\"form-control\">\r\n        <option *ngFor=\"let c of screenSizes\" [ngValue]=\"c\">{{c.width}}*{{c.height}}</option>\r\n    </select>\r\n\r\n\r\n<div class=\"screen-monitor\">\r\n    <div class=\"screen\">\r\n        <canvas *ngIf=\"playerPlan\" #playerCanvas id=\"playerCanvas\" height=\"{{ScreenSize.height}}\" width=\"{{ScreenSize.width}}\"></canvas>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/playlists/playlist.player/playlist.player.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/playlists/playlist.player/playlist.player.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".screen-monitor {\n  display: inline-block;\n  border: 4px solid black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0LnBsYXllci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXHBsYXlsaXN0c1xccGxheWxpc3QucGxheWVyXFxwbGF5bGlzdC5wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGF5bGlzdHMvcGxheWxpc3QucGxheWVyL3BsYXlsaXN0LnBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4tbW9uaXRvcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/playlists/playlist.player/playlist.player.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/playlists/playlist.player/playlist.player.component.ts ***!
  \************************************************************************/
/*! exports provided: PlaylistPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistPlayerComponent", function() { return PlaylistPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _player_slide_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../player/slide.service */ "./src/player/slide.service.ts");





var PlaylistPlayerComponent = /** @class */ (function () {
    function PlaylistPlayerComponent(_ngZone, translateService, slideService, route, router) {
        this._ngZone = _ngZone;
        this.translateService = translateService;
        this.slideService = slideService;
        this.route = route;
        this.router = router;
        this.screenSizes = [{ width: 800, height: 600 }, { width: 1200, height: 800 }];
    }
    PlaylistPlayerComponent.prototype.redraw = function (event) {
    };
    PlaylistPlayerComponent.prototype.compareFn = function (a, b) {
        if (b) {
            return a.width === b.width && a.height === b.height;
        }
    };
    PlaylistPlayerComponent.prototype.paint = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var width, height, element, ctx;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                width = this.ScreenSize.width;
                height = this.ScreenSize.height;
                element = this.playerCanvas.first.nativeElement;
                element.width = width;
                element.height = height;
                ctx = element.getContext('2d');
                this.slideService.play([this.playerPlan], ctx, width, height);
                return [2 /*return*/];
            });
        });
    };
    PlaylistPlayerComponent.prototype.ngAfterViewInit = function () {
        this.paint();
    };
    PlaylistPlayerComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.ScreenSize = this.screenSizes[0];
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('playerCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlaylistPlayerComponent.prototype, "playerCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlaylistPlayerComponent.prototype, "playerPlan", void 0);
    PlaylistPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlist-player',
            template: __webpack_require__(/*! ./playlist.player.component.html */ "./src/app/playlists/playlist.player/playlist.player.component.html"),
            styles: [__webpack_require__(/*! ./playlist.player.component.scss */ "./src/app/playlists/playlist.player/playlist.player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _player_slide_service__WEBPACK_IMPORTED_MODULE_4__["SlideService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PlaylistPlayerComponent);
    return PlaylistPlayerComponent;
}());



/***/ }),

/***/ "./src/app/playlists/playlist/playlists.component.html":
/*!*************************************************************!*\
  !*** ./src/app/playlists/playlist/playlists.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide-header title=\"NAVBAR.PLAYLISTS\" mode=\"inline\"  iconClass=\"fas fa-step-forward\"\nclassName=\"playlist-cat\"></app-slide-header>\n\n\n\n<app-lobby [items]=\"items\" mode=\"object\" model=\"playlist\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" \n(newItem)=\"newItem()\"></app-lobby>\n\n \n\n\n "

/***/ }),

/***/ "./src/app/playlists/playlist/playlists.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/playlists/playlist/playlists.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".short {\n  height: 90px; }\n\n.box-container {\n  position: relative;\n  height: 150px;\n  padding: 45px 0; }\n\n.box-swap {\n  position: absolute;\n  text-align: center;\n  width: 150px;\n  height: 60px;\n  padding: 15px 35px;\n  line-height: 30px; }\n\n.box-swap.static-block {\n    transition: all 0.3s ease-out; }\n\n/* in-flight clone */\n\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  pointer-events: none; }\n\n/* high-performance display:none; helper */\n\n.gu-hide {\n  left: -9999px !important; }\n\n/* added to mirrorContainer (default = body) while dragging */\n\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important; }\n\n/* added to the source element while its mirror is dragged */\n\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20); }\n\n.slot {\n  position: relative;\n  width: 200px;\n  height: 200px; }\n\n.slot .sqr-toolbar {\n    width: 192px;\n    visibility: visible; }\n\n.slot .sqr-toolbar input {\n      width: 50px;\n      height: 24px; }\n\n.slot .sqr-toolbar select {\n      width: 100px;\n      height: 24px; }\n\n.canvas-bg {\n  position: absolute;\n  z-index: 0; }\n\n.sqr-btn {\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr-btn .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn:hover .sqr-toolbar input, .sqr:hover .sqr-toolbar input {\n      width: 50px;\n      height: 30px; }\n\n.sqr-btn:hover .sqr-toolbar select, .sqr:hover .sqr-toolbar select {\n      height: 30px; }\n\n.fancy-thumb {\n  z-index: 1000; }\n\n.normal {\n  width: 500px;\n  overflow: auto;\n  border: 1px solid blue; }\n\n.extended-padding {\n  padding: 50px; }\n\n.extended {\n  overflow: hidden;\n  padding: 30px;\n  height: 400px;\n  background-color: white;\n  position: absolute;\n  top: 200px;\n  right: 50px;\n  left: 50px;\n  border: 1px solid red; }\n\n.extended .topper {\n    pointer-events: none;\n    z-index: 0;\n    height: 65px;\n    opacity: 0.8;\n    position: absolute;\n    padding-top: 30px;\n    top: -30px;\n    left: 0;\n    right: 0; }\n\n.extended .topper .icon {\n      margin: 8px;\n      vertical-align: top; }\n\n.extended .topper h4 {\n      display: inline;\n      vertical-align: top; }\n\n.extended .topper .bar-icon {\n      margin-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0L0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxccGxheWxpc3RzXFxwbGF5bGlzdFxccGxheWxpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0ksWUFBVyxFQUFBOztBQUlmO0VBQ0csa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFObkI7SUFTSSw2QkFBNkIsRUFBQTs7QUFLakMsb0JBQUE7O0FBQ0Y7RUFDSSwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osaUVBQWlFO0VBQ2pFLHlCQUF5QjtFQUN6QixvQkFBb0IsRUFBQTs7QUFFdEIsMENBQUE7O0FBQ0E7RUFDRSx3QkFBd0IsRUFBQTs7QUFFMUIsNkRBQUE7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyw0QkFBNEIsRUFBQTs7QUFFOUIsNERBQUE7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUVBQWlFO0VBQ2pFLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUhqQjtJQUtNLFlBQVk7SUFDWixtQkFBbUIsRUFBQTs7QUFOekI7TUFPYSxXQUFXO01BQUMsWUFBVyxFQUFBOztBQVBwQztNQVFjLFlBQVk7TUFBRSxZQUFZLEVBQUE7O0FBSXhDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFJVjtFQUlFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBTnhCO0lBRUUsbUJBQW1CLEVBQUE7O0FBTXZCO0VBQ0ksVUFBVSxFQUFBOztBQURkO0lBR1EsbUJBQW1CLEVBQUE7O0FBSDNCO01BSWUsV0FBVztNQUFDLFlBQVcsRUFBQTs7QUFKdEM7TUFLaUIsWUFBWSxFQUFBOztBQUc3QjtFQUVFLGFBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVk7RUFBQyxjQUFjO0VBQzNCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLGdCQUFnQjtFQUVoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUV2QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQXFCLEVBQUE7O0FBWHZCO0lBY0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLE9BQU87SUFDUCxRQUFRLEVBQUE7O0FBdEJaO01Bd0JRLFdBQVc7TUFDWCxtQkFBbUIsRUFBQTs7QUF6QjNCO01BNEJRLGVBQWU7TUFDZixtQkFBbUIsRUFBQTs7QUE3QjNCO01BZ0NRLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0L3BsYXlsaXN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuc2hvcnR7XHJcbiAgICAgaGVpZ2h0OjkwcHg7XHJcbiB9XHJcblxyXG5cclxuIC5ib3gtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA0NXB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3gtc3dhcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDM1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICBcclxuICAgICYuc3RhdGljLWJsb2NrIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogaW4tZmxpZ2h0IGNsb25lICovXHJcbi5ndS1taXJyb3Ige1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9ODApXCI7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIC8qIGhpZ2gtcGVyZm9ybWFuY2UgZGlzcGxheTpub25lOyBoZWxwZXIgKi9cclxuICAuZ3UtaGlkZSB7XHJcbiAgICBsZWZ0OiAtOTk5OXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGFkZGVkIHRvIG1pcnJvckNvbnRhaW5lciAoZGVmYXVsdCA9IGJvZHkpIHdoaWxlIGRyYWdnaW5nICovXHJcbiAgLmd1LXVuc2VsZWN0YWJsZSB7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGFkZGVkIHRvIHRoZSBzb3VyY2UgZWxlbWVudCB3aGlsZSBpdHMgbWlycm9yIGlzIGRyYWdnZWQgKi9cclxuICAuZ3UtdHJhbnNpdCB7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTIwKVwiO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcclxuICB9XHJcblxyXG4uc2xvdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICAgIHdpZHRoOiAxOTJweDtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgaW5wdXR7IHdpZHRoOiA1MHB4O2hlaWdodDoyNHB4O31cclxuICAgICAgc2VsZWN0IHt3aWR0aDogMTAwcHg7IGhlaWdodDogMjRweDt9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FudmFzLWJne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4gXHJcbiAgLnNxci1idG57XHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gICAgZm9udC1zaXplOiA4NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uc3FyLWJ0bjpob3Zlciwuc3FyOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC5zcXItdG9vbGJhcntcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIGlucHV0eyB3aWR0aDogNTBweDtoZWlnaHQ6MzBweDt9XHJcbiAgICAgICAgc2VsZWN0IHsgaGVpZ2h0OiAzMHB4O31cclxuICAgIH1cclxufVxyXG4uZmFuY3ktdGh1bWJcclxue1xyXG4gIHotaW5kZXg6MTAwMDtcclxufVxyXG4gXHJcbi5ub3JtYWx7XHJcbiAgd2lkdGg6IDUwMHB4O292ZXJmbG93OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbn1cclxuLmV4dGVuZGVkLXBhZGRpbmd7XHJcbiAgcGFkZGluZzogNTBweDtcclxufVxyXG4uZXh0ZW5kZWR7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuIFxyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuIFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwMHB4O1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG5cclxuICAudG9wcGVye1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxyXG4gICAgei1pbmRleDogMDtcclxuICAgIGhlaWdodDogNjVweDsgICBcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLmljb257XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7ICAgICAgXHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgLmJhci1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59ICBcclxuXHJcbn1cclxuXHJcbiAiXX0= */"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");







var PlaylistsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlaylistsComponent, _super);
    function PlaylistsComponent(_ngZone, translateService, router, dirtyService) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.router = router;
        _this.dirtyService = dirtyService;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_2__["Playlist"];
        return _this;
    }
    PlaylistsComponent.prototype.editItem = function (item) {
        // Absolute route - Goes up to root level with route params
        this.router.navigate(['/dashboard/playlists/', item._id]);
    };
    PlaylistsComponent.prototype.newItem = function () {
        this.router.navigate(['/dashboard/playlists/', 0]);
    };
    PlaylistsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadItems();
                return [2 /*return*/];
            });
        });
    };
    PlaylistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlists',
            template: __webpack_require__(/*! ./playlists.component.html */ "./src/app/playlists/playlist/playlists.component.html"),
            styles: [__webpack_require__(/*! ./playlists.component.scss */ "./src/app/playlists/playlist/playlists.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_dirty_service__WEBPACK_IMPORTED_MODULE_6__["DirtyService"]])
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
/* harmony import */ var _playlist_item_playlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playlist.item/playlist.component */ "./src/app/playlists/playlist.item/playlist.component.ts");
/* harmony import */ var _playlist_player_playlist_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./playlist.player/playlist.player.component */ "./src/app/playlists/playlist.player/playlist.player.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var playlistsRoutes = [
    {
        path: 'playlists', component: _playlist_playlists_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistsComponent"],
    },
    {
        path: 'playlists/:id', component: _playlist_item_playlist_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistComponent"]
    },
    {
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
                _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                ngx_sortable__WEBPACK_IMPORTED_MODULE_3__["NgxSortableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            entryComponents: [_playlist_playlists_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistsComponent"]],
            declarations: [_playlist_playlists_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistsComponent"], _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_5__["SchedulesComponent"],
                _playlist_item_playlist_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistComponent"], _playlist_player_playlist_player_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistPlayerComponent"]]
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

module.exports = "<app-lobby [items]=\"items\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem()\" ></app-lobby>\n\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n<dialog open={{displayModalNew}}>\n<a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\" ></i></a>\n <form *ngIf=\"item\">\n  <div class=\"form-group\">\n    <label for=\"itemName\">{{ \"PLAYLISTS.NAME\" | translate }}:</label>\n    <input type=\"text\" name=\"itemName\" class=\"form-control\" id=\"itemName\"   [(ngModel)]=\"item.Name\">\n    <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"PLAYLISTS.NAME_HELP\" | translate }}</small>\n  </div>\n \n  <button   *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"PLAYLISTS.UPDATE\" | translate }}</button>\n  <button   *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"PLAYLISTS.CREATE\" | translate }}</button>\n</form>\n</dialog>\n</div>\n "

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
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

module.exports = "<app-slide-header mode=\"inline\" [title]=\"'NAVBAR.SCREEN-GROUPS'\" [iconClass]=\"'fas fa-clone'\" [className]=\"'screen-group-cat'\">\n</app-slide-header>\n\n<app-lobby [items]=\"items\" [mode]=\"'object'\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem()\"></app-lobby>\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n    <dialog open= {{displayModalNew}}>\n        <app-slide-header *ngIf=\"item\" [title]=\"item.Name\" closeFn=\"true\" [iconClass]=\"'fas fa-clone'\" [enableSave]='true' (save)=\"saveProxy($event)\"\n            [className]=\"'screen-group-cat'\" (closed)=\"close()\"></app-slide-header>\n        <form *ngIf=\"item\" class=\"pt50\">\n            <div class=\"form-group\">\n                <label for=\"screenName\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n                <input type=\"text\" name=\"screenName\" class=\"form-control\" [(ngModel)]=\"item.Name\">\n                <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SCREENS.NAME_HELP\" | translate }}</small>\n            </div>\n        </form>\n        <app-slide-footer [iconClass]=\"'fas fa-clone'\" [className]=\"'screen-group-cat'\"></app-slide-footer>\n\n    </dialog>\n</div>\n"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
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

module.exports = "<app-slide-header mode=\"inline\" [title]=\"'NAVBAR.SCREENS'\" [iconClass]=\"'fas fa-desktop'\" [className]=\"'screen-cat'\"></app-slide-header>\n<app-lobby [items]=\"items\" [template]=\"lobbyTemplate\" [iconClass]=\"'fas fa-desktop'\" [mode]=\"'object'\" (editItem)=\"editItem($event)\"\n    (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem()\"></app-lobby>\n\n<ng-template #lobbyTemplate let-item=\"item\">\n    <i class=\"fas fa-desktop icon\"></i> <span class=\"label\">{{item.Name}} </span>\n    <div><small *ngIf=\"item.Group\">({{item.Group.Name}})</small></div>\n</ng-template>\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n    <dialog open= {{displayModalNew}}>\n        <app-slide-header *ngIf=\"item\" [title]=\"item.Name\" closeFn=\"true\" [enableSave]='true' (save)=\"saveProxy($event)\" [iconClass]=\"'fas fa-desktop'\"\n        className=\"screen-cat\" (closed)=\"close()\"></app-slide-header>\n        <form *ngIf=\"item\" class=\"pt50\">\n            <div class=\"form-group\">\n                <label for=\"screenName\">{{ \"SCREENS.NAME\" | translate }}:</label>\n                <input type=\"text\" name=\"screenName\" class=\"form-control\" [(ngModel)]=\"item.Name\">\n                <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SCREENS.NAME_HELP\" | translate }}</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"ScreenGroup\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n                <select [(ngModel)]=\"item.Group\" name=\"ScreenGroup\" [compareWith]=\"compareFn\" class=\"form-control\">\n                    <option *ngFor=\"let c of groups\" [ngValue]=\"c\">{{c.Name}}</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">{{ \"SCREENS.TOKEN\" | translate }}</label>\n                <input type=\"text\" [(ngModel)]=\"item.Token\" name=\"txtToken\" class=\"form-control\" id=\"txtToken\" placeholder=\"{{'SCREENS.TOKEN' | translate}}\">\n            </div>\n        </form>\n        <app-slide-footer [title]=\"'NAVBAR.SCREENS'\" [iconClass]=\"'fas fa-desktop'\" [className]=\"'screen-cat'\" (closed)=\"close()\"></app-slide-footer>\n    </dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/screens/screens.component.scss":
/*!********************************************************!*\
  !*** ./src/app/screens/screens/screens.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  margin-right: 10px;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9zY3JlZW5zL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcc2NyZWVuc1xcc2NyZWVuc1xcc2NyZWVucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy9zY3JlZW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
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
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/fesm5/angular2-draggable.js");
/* harmony import */ var _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/language-bar/language-bar.component */ "./src/app/common/language-bar/language-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./library/finder/finder.component */ "./src/app/library/finder/finder.component.ts");
/* harmony import */ var _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/slide-header/slide-header.component */ "./src/app/common/slide-header/slide-header.component.ts");
/* harmony import */ var _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/slide-footer/slide-footer.component */ "./src/app/common/slide-footer/slide-footer.component.ts");
/* harmony import */ var _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/lobby/lobby.component */ "./src/app/common/lobby/lobby.component.ts");
/* harmony import */ var _directives_adapt_height__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/adapt-height */ "./src/app/directives/adapt-height.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _common_rulers_rulers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common/rulers/rulers.component */ "./src/app/common/rulers/rulers.component.ts");
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
/* harmony import */ var _services_history_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/history.service */ "./src/app/services/history.service.ts");































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
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_17__["DragulaModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_18__["ColorPickerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["FileDropModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                angular2_draggable__WEBPACK_IMPORTED_MODULE_8__["AngularDraggableModule"]
            ],
            declarations: [_editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_20__["CanvasComponent"],
                _directives_adapt_height__WEBPACK_IMPORTED_MODULE_16__["AdaptHeightDirective"],
                _directives_adapt_width__WEBPACK_IMPORTED_MODULE_25__["AdaptWidthDirective"],
                _directives_stop_prop__WEBPACK_IMPORTED_MODULE_22__["ClickStopPropagationDirective"],
                _directives_change_directive__WEBPACK_IMPORTED_MODULE_28__["DetectChangesDirective"],
                _common_change_change_component__WEBPACK_IMPORTED_MODULE_27__["ChangeComponent"],
                _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_9__["LanguageBarComponent"],
                _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_12__["FinderComponent"],
                _common_rulers_rulers_component__WEBPACK_IMPORTED_MODULE_19__["RulersComponent"],
                _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_13__["SlideHeaderComponent"],
                _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_14__["SlideFooterComponent"],
                _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_15__["LobbyComponent"],
                _common_lobby_item_lobby_item_component__WEBPACK_IMPORTED_MODULE_23__["LobbyItemComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_29__["FilterPipe"]],
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_language_dictionary_service__WEBPACK_IMPORTED_MODULE_5__["DictionaryService"], _services_name_service__WEBPACK_IMPORTED_MODULE_6__["NameService"], _player_slide_service__WEBPACK_IMPORTED_MODULE_21__["SlideService"], _services_dirty_service__WEBPACK_IMPORTED_MODULE_24__["DirtyService"], _services_responsive_service__WEBPACK_IMPORTED_MODULE_26__["ResponsiveService"], _services_history_service__WEBPACK_IMPORTED_MODULE_30__["PreviousRouteService"]],
            exports: [_editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_20__["CanvasComponent"],
                _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_9__["LanguageBarComponent"],
                _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_15__["LobbyComponent"],
                _common_lobby_item_lobby_item_component__WEBPACK_IMPORTED_MODULE_23__["LobbyItemComponent"],
                _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_12__["FinderComponent"],
                _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_13__["SlideHeaderComponent"],
                _common_rulers_rulers_component__WEBPACK_IMPORTED_MODULE_19__["RulersComponent"],
                _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_14__["SlideFooterComponent"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["FileDropModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_18__["ColorPickerModule"],
                _directives_adapt_height__WEBPACK_IMPORTED_MODULE_16__["AdaptHeightDirective"],
                _directives_adapt_width__WEBPACK_IMPORTED_MODULE_25__["AdaptWidthDirective"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_8__["AngularDraggableModule"],
                _directives_change_directive__WEBPACK_IMPORTED_MODULE_28__["DetectChangesDirective"],
                _common_change_change_component__WEBPACK_IMPORTED_MODULE_27__["ChangeComponent"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAccordion"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanel"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelContent"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelTitle"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_17__["DragulaDirective"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_29__["FilterPipe"]],
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

module.exports = "<app-slide-header mode=\"inline\" [className]=\"'screen-cat'\" [title]=\"'NAVBAR.HOME'\" [iconClass]=\"'fas fa-bullseye'\">\n</app-slide-header>\n<app-lobby [items]=\"screenGroups\" [template]=\"lobbyTemplate\" [mode]=\"'object'\" [noNew]=\"true\"></app-lobby>\n\n\n<ng-template #lobbyTemplate let-item=\"item\">\n  <i class=\"fas fa-desktop icon\"></i> <span class=\"label\">{{item.Name}} </span>\n  <div><small *ngIf=\"item.Group\">({{item.Group.Name}})</small></div>\n</ng-template>\n"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
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

module.exports = ".dropdown-menu a {cursor: pointer;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixlQUFlLENBQUMiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudSBhIHtjdXJzb3I6IHBvaW50ZXI7fSJdfQ== */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"limiter\">\n        <div class=\"container-login100\">\n\n\n            <div class=\"wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30\">\n\n                <form class=\"login100-form validate-form\">\n                    <span class=\"login100-form-title p-b-55\">\n                        {{\"LOGIN.TITLE\" | translate}}\n                    </span>\n\n                    <div class=\"wrap-input100 validate-input m-b-16\" [attr.data-validate]=\"'LOGIN.INSERT_USERNAME' | translate\">\n                        <input class=\"input100\" type=\"text\" name=\"userName\" placeholder=\"{{'LOGIN.USERNAME' | translate}}\" [(ngModel)]=\"userName\">\n                        <span class=\"focus-input100\"></span>\n                        <span class=\"symbol-input100\">\n                            <span class=\"lnr lnr-envelope\"></span>\n                        </span>\n                    </div>\n\n                    <div class=\"wrap-input100 validate-input m-b-16\">\n                        <input class=\"input100\" type=\"password\" name=\"password\" placeholder=\"{{'LOGIN.PASSWORD' | translate}}\" [(ngModel)]=\"password\">\n                        <span class=\"focus-input100\"></span>\n                        <span class=\"symbol-input100\">\n                            <span class=\"lnr lnr-lock\"></span>\n                        </span>\n                    </div>\n\n                    <div class=\"contact100-form-checkbox m-l-4\">\n                        <input class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n                        <label class=\"label-checkbox100\" for=\"ckb1\">\n                            {{\"LOGIN.REMEMBER_ME\" | translate}}\n                        </label>\n                    </div>\n\n                    <div class=\"container-login100-form-btn p-t-25\">\n                        <button class=\"login100-form-btn\" (click)=\"tryLogin()\">\n                            {{\"LOGIN.LOGIN_BTN\" | translate}}\n                        </button>\n                    </div>\n\n                    <div class=\"text-center w-full p-t-25\">\n                        <span class=\"txt1\">\n                            {{'LOGIN.NOTAMEMBER' | translate}}\n                        </span>\n\n                        <a class=\"txt1 bo1 hov1\" href=\"/#/signup\">\n                            {{'LOGIN.SIGNUP' | translate}}\n                        </a>\n                    </div>\n                    <app-language-bar></app-language-bar>\n                </form>\n            </div>\n        </div>\n    </div>\n\n\n\n\n\n\n\n\n    <!-- Simple pop-up dialog box containing a form -->\n    <dialog id=\"favDialog\">\n        <form method=\"dialog\">\n            <p><label>Favorite animal:\n                    <select>\n                        <option></option>\n                        <option>Brine shrimp</option>\n                        <option>Red panda</option>\n                        <option>Spider monkey</option>\n                    </select>\n                </label></p>\n            <menu>\n                <button>Cancel</button>\n                <button>Confirm</button>\n            </menu>\n        </form>\n    </dialog>\n\n    <menu>\n        <button id=\"updateDetails\">Update details</button>\n    </menu>\n\n    <div id=\"output\"></div>\n\n    <script>\n        (function () {\n            var updateButton = document.getElementById('updateDetails');\n            var favDialog = document.getElementById('favDialog');\n            var outputBox = document.getElementById(\"output\");\n\n            // “Update details” button opens the <dialog> modally\n            updateButton.addEventListener('click', function () {\n                favDialog.showModal();\n                output.innerHTML += \"<div>\" + favDialog.returnValue + \" button clicked!</div>\";\n            });\n        })();\n    </script>\n\n\n    <ng-template #share>\n        <div class=\"modal-body text-center\">\n\n            <p>Share your group.</p>\n            <pre>{{group.GroupId}}</pre>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <ng-template #join>\n        <div class=\"modal-body text-center\">\n            <p>Join a group.</p>\n            <div>\n                <label>Group code</label>\n                <input type=\"text\" class=\"form-control\" #group_code />\n            </div>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"JoinConfirm(group_code.value)\">Join</a>\n            <a type=\"button\" class=\"btn btn-default\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <div class=\"float-left dropdown\" *ngIf=\"userData && group\">\n        <a class=\"btn btn-secondary dropdown-toggle white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            {{group.Name}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"position: absolute\">\n            <a class=\"dropdown-item\" (click)=\"setGroup(item)\" *ngFor=\"let item of userData.groups\">{{item.Name}}</a>\n\n            <a class=\"dropdown-item\" (click)=\"JoinGroup(join)\">Join group</a>\n            <a class=\"dropdown-item\" (click)=\"ShareGroup(share)\">Share group</a>\n        </div>\n\n    </div>\n</div>\n"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
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
                            this.router.navigate(['/dashboard']);
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
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.context.service */ "./src/app/services/user.context.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");










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
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"]
            ],
            declarations: [_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__["UserInfoComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]],
            entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
            providers: [_services_user_context_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtHelperService"]],
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
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_4__);
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
/* harmony import */ var _slide_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide.worker */ "./src/player/slide.worker.ts");




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
                        if (!(this.playerPlan && this.playerPlan.length > 0)) return [3 /*break*/, 2];
                        this.list = this.playerPlan[0].list;
                        fontsArr_1 = {};
                        this.list.forEach(function (item) {
                            if (item.fonts) {
                                item.fonts.forEach(function (font) {
                                    fontsArr_1[font] = font;
                                });
                            }
                        });
                        return [4 /*yield*/, this.fontService.loadFontsForRender(Object.keys(fontsArr_1))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 2];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SlideService.prototype.createWorker = function (playerPlan, ctx, width, height, mode) {
    };
    SlideService.prototype.play = function (playerPlan, ctx, width, height, mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var playX;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                playX = new _slide_worker__WEBPACK_IMPORTED_MODULE_3__["SlideWorker"](this.fontService, playerPlan, ctx, width, height, mode);
                playX.play();
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

/***/ "./src/player/slide.worker.ts":
/*!************************************!*\
  !*** ./src/player/slide.worker.ts ***!
  \************************************/
/*! exports provided: SlideWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideWorker", function() { return SlideWorker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var image_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! image-promise */ "./node_modules/image-promise/dist/image-promise.common-js.js");
/* harmony import */ var image_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(image_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _createjs_easeljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @createjs/easeljs */ "./node_modules/@createjs/easeljs/src/main.js");



var Eval = eval;
var log = console.log;
var SlideWorker = /** @class */ (function () {
    function SlideWorker(fontService, playerPlan, ctx, width, height, mode) {
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
    SlideWorker.prototype.factor = function (screen, x, y) {
        if (!y) {
            return Math.floor(x * (this.width / screen.width));
        }
        else {
            return { x: x * (this.width / screen.width), y: y * (this.height / screen.height) };
        }
    };
    SlideWorker.prototype.prerender = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        log('@slide.service-prerender');
                        if (item.elements) {
                            item.type = 'slide';
                        }
                        _a = item.type;
                        switch (_a) {
                            case 'image': return [3 /*break*/, 1];
                            case 'slide': return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this.render_fullimage_to_canvas(item.resource, 0, 0, this.width, this.height)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, this.renderElementsToTags(item)];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SlideWorker.prototype.playDefaultPlan = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.ctx.font = "120px arial";
                this.ctx.fillStyle = "black";
                this.ctx.fillText('Nothing to play', this.width / 4, this.height / 2);
                setTimeout(function () {
                    _this.player.play(_this.player.playerPlan, _this.ctx, _this.width, _this.height);
                }, 10 * 1000);
                return [2 /*return*/];
            });
        });
    };
    SlideWorker.prototype.render_fullimage_to_canvas = function (url, x, y, _width, _height) {
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
    SlideWorker.prototype.render_image_to_canvas = function (item, element) {
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
                        var img, sizes;
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
                                    this.ctx.save();
                                    if (element.opacity) {
                                        this.ctx.globalAlpha = element.opacity;
                                    }
                                    this.ctx.drawImage(img, x, y, sizes.x, sizes.y);
                                    this.ctx.restore();
                                    resolve(img);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    SlideWorker.prototype.renderElementsToTags = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var shape, index, element, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        log('@slide.service-renderElementsToTags');
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
                        if (!(index < item.elements.length)) return [3 /*break*/, 6];
                        element = item.elements[index];
                        _a = element.type;
                        switch (_a) {
                            case 'image': return [3 /*break*/, 2];
                            case 'text': return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.render_image_to_canvas(item, element)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.render_text_to_canvas(item, element);
                        return [3 /*break*/, 5];
                    case 5:
                        index++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SlideWorker.prototype.render_text_to_canvas = function (item, element) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fontFactor_1, lineIndex_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                log('@slide.service-render_text_to_canvas');
                if (element.text) {
                    fontFactor_1 = this.factor(item.Screen, element.fontSize);
                    this.ctx.font = fontFactor_1 + "px " + element.font;
                    this.ctx.fillStyle = "" + element.color;
                    this.ctx.save();
                    if (element.opacity) {
                        this.ctx.globalAlpha = element.opacity;
                    }
                    lineIndex_1 = 0;
                    element.text.split('\n').forEach(function (line) {
                        var position = _this.factor(item.Screen, element.position.x, (Number(element.position.y) + element.fontSize));
                        var linePosition = position.y + (lineIndex_1 * fontFactor_1);
                        console.log(linePosition, fontFactor_1, lineIndex_1);
                        _this.ctx.fillText(line, position.x, linePosition);
                        lineIndex_1++;
                    });
                    this.ctx.restore();
                }
                return [2 /*return*/];
            });
        });
    };
    SlideWorker.prototype.playScreenError = function () {
        this.ctx.font = "120px arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText('Screen error', this.width, this.height);
    };
    SlideWorker.prototype.play = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var frameDuration;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stage = new _createjs_easeljs__WEBPACK_IMPORTED_MODULE_2__["Stage"](this.ctx.canvas);
                        log('@slide.service-play');
                        if (!(this.mode === 'single')) return [3 /*break*/, 2];
                        console.log(this.playerPlan[0].fonts);
                        return [4 /*yield*/, this.fontService.loadFontsForRender(this.playerPlan[0].fonts)];
                    case 1:
                        _a.sent();
                        console.log(this.playerPlan[0]);
                        this.prerender(this.playerPlan[0]);
                        return [2 /*return*/];
                    case 2:
                        this.playerPlan = this.playerPlan;
                        if (!this.playerPlan || this.playerPlan.length === 0) {
                            this.playDefaultPlan();
                            return [2 /*return*/];
                        }
                        _a.label = 3;
                    case 3:
                        this.list = this.playerPlan[0].list;
                        this.prerender(this.list[this.itemIndex]);
                        frameDuration = (this.list[this.itemIndex].duration) ? this.list[this.itemIndex].duration * 1000 : 5000;
                        this.itemIndex++;
                        if (this.mode !== 'single') {
                            setInterval(function () {
                                if (_this.itemIndex >= _this.list.length) {
                                    _this.itemIndex = 0;
                                }
                                _this.prerender(_this.list[_this.itemIndex]);
                                _this.itemIndex++;
                            }, frameDuration);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return SlideWorker;
}());



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