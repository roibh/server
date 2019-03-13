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
        if (this.userCheck) {
            document.getElementById('api_css_placeholder').setAttribute('href', "/api/css/" + this.userCheck._id);
        }
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
/*! exports provided: getAuthServiceConfigs, appRoutes, HttpLoaderFactory, tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
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
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_loaders_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-loaders-css */ "./node_modules/angular2-loaders-css/index.js");
/* harmony import */ var angular2_loaders_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_loaders_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/loader/loader.component */ "./src/app/common/loader/loader.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_intercepter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.intercepter */ "./src/app/auth/auth.intercepter.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _screens_screens_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./screens/screens.module */ "./src/app/screens/screens.module.ts");
/* harmony import */ var _library_library_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./library/library.module */ "./src/app/library/library.module.ts");
/* harmony import */ var _playlists_playlists_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./playlists/playlists.module */ "./src/app/playlists/playlists.module.ts");
/* harmony import */ var _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./timelines/timelines.component */ "./src/app/timelines/timelines.component.ts");
/* harmony import */ var ngx_joyride__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-joyride */ "./node_modules/ngx-joyride/esm5/ngx-joyride.esm.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _public_public_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./public/public.module */ "./src/app/public/public.module.ts");





























// Configs
function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_27__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_27__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_27__["GoogleLoginProvider"]('30897916955-l5dgu0ltq6tionfta431i0ge7789u95u.apps.googleusercontent.com')
        },
    ]);
    return config;
}




var appRoutes = _public_public_module__WEBPACK_IMPORTED_MODULE_31__["publicRoutes"].concat([
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]], children: [
            {
                path: '',
                component: _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_25__["TimelinesComponent"],
            }
        ].concat(_screens_screens_module__WEBPACK_IMPORTED_MODULE_22__["screenRoutes"], _library_library_module__WEBPACK_IMPORTED_MODULE_23__["libraryRoutes"], _playlists_playlists_module__WEBPACK_IMPORTED_MODULE_24__["playlistsRoutes"])
    },
]);
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__["TranslateHttpLoader"](http);
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
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_25__["TimelinesComponent"],
            ],
            imports: [
                ng2_dragula__WEBPACK_IMPORTED_MODULE_29__["DragulaModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _public_public_module__WEBPACK_IMPORTED_MODULE_31__["PublicModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_27__["SocialLoginModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_30__["ColorPickerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]
                    }
                }),
                ngx_joyride__WEBPACK_IMPORTED_MODULE_26__["JoyrideModule"].forRoot(),
                _shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes, { enableTracing: false, useHash: true } // <-- debugging purposes only
                ),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
                ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_7__["SortableModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                angular2_loaders_css__WEBPACK_IMPORTED_MODULE_11__["LoadersCssModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_16__["OrderModule"],
                _ng_dynamic_forms_ui_bootstrap__WEBPACK_IMPORTED_MODULE_6__["DynamicFormsBootstrapUIModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _screens_screens_module__WEBPACK_IMPORTED_MODULE_22__["ScreensModule"],
                _library_library_module__WEBPACK_IMPORTED_MODULE_23__["LibraryModule"],
                _playlists_playlists_module__WEBPACK_IMPORTED_MODULE_24__["PlaylistsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            providers: [_services_language_service__WEBPACK_IMPORTED_MODULE_28__["LanguageService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_intercepter__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"],
                    multi: true
                },
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_27__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
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

/***/ "./src/app/common/language-bar/language-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/common/language-bar/language-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" [href]='cleanCssUrl' />\n<div class=\"input-group mb-3\">\n  <div class=\"input-group-prepend\">\n    <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"icon-language\"></i></span>\n  </div>\n  <select [(ngModel)]=\"selectedLanguage\" class=\"form-control\" (change)=\"selectLanguage()\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let c of languages\" [ngValue]=\"c\">{{c.name}}</option>\n  </select>\n</div>\n"

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

module.exports = "<ng-template [ngTemplateOutlet]=\"template || defaultTemplate\" [ngTemplateOutletContext]=\"{item: item}\">\n</ng-template>\n\n\n<ng-template #defaultTemplate let-item=\"item\">\n  <div class=\"m10\">\n    <span class=\"fancy-thumb-label\">{{item.Name}}</span>\n  </div>\n</ng-template>\n\n\n<ng-template #imageTemplate let-item=\"item\">\n  <img class=\"fancy-thumb\" [src]=\"item.resource\" style=\"width:100%;height:100%\" />\n  <span class=\"fancy-thumb-label\"><i class=\"icon-image\"></i> {{item.Name}}</span>\n</ng-template>\n\n<ng-template #videoTemplate let-item=\"item\">\n  <span class=\"fancy-thumb-label\"><i class=\"icon-play\"></i> {{item.Name}}</span>\n  <app-media-preview [item]=\"item\"></app-media-preview>\n</ng-template>\n\n<ng-template #urlTemplate let-item=\"item\">\n  <span class=\"fancy-thumb-label\"><i class=\"icon-chain\"></i> {{item.Name}}</span>\n  <app-media-preview [item]=\"item\"></app-media-preview>\n</ng-template>\n\n\n<ng-template #playlistTemplate let-item=\"item\">\n  <div class=\"m10\">\n    <span class=\"label\">{{item.Name}}</span>\n    <span class=\"label\">({{item.list.length}})</span>\n\n    <span class=\"label\">{{item.Date | date}}</span>\n  </div>\n</ng-template>\n\n\n<ng-template #slideTemplate let-item=\"item\">\n  <div class=\"canvas-bg\">\n    <app-canvas [item]=\"item\" [width]=\"230\" [height]=\"150\" [scale]=\"0.25\"></app-canvas>\n    <span class=\"fancy-thumb-label\">{{item.Name}}</span>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/common/lobby.item/lobby.item.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/common/lobby.item/lobby.item.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  margin-right: 5px;\n  margin-left: 5px; }\n\n.sqr-btn {\n  padding: 15px;\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr {\n  opacity: 0.9;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) !important; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 35;\n  background: #fff; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn._meta_active, .sqr._meta_active {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(69, 59, 59, 0.2);\n  border-radius: 35;\n  background: #fff; }\n\n.sqr-btn._meta_active .sqr-toolbar, .sqr._meta_active .sqr-toolbar {\n    visibility: visible; }\n\n.fancy-thumb {\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYmJ5Lml0ZW0vQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxjb21tb25cXGxvYmJ5Lml0ZW1cXGxvYmJ5Lml0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFHbkI7RUFDSSxhQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxZQUFZO0VBQ1osa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUExQixrREFBMEI7RUFDMUIscURBQW9ELEVBQUE7O0FBR3hEO0VBQ0ksVUFBVTtFQUVWLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsb0NBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFOcEI7SUFVUSxtQkFBbUIsRUFBQTs7QUFLM0I7RUFDSSxVQUFVO0VBRVYsc0NBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix1Q0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQU5wQjtJQVVRLG1CQUFtQixFQUFBOztBQU0zQjtFQUVJLFVBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2xvYmJ5Lml0ZW0vbG9iYnkuaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbn1cclxuXHJcbi5zcXItYnRue1xyXG4gICAgcGFkZGluZzoxNXB4O1xyXG4gICAgZm9udC1zaXplOiA4NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uc3Fye1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMykhaW1wb3J0YW50O1xyXG4gXHJcbn1cclxuLnNxci1idG46aG92ZXIsLnNxcjpob3ZlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgXHJcbiAgXHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5zcXItYnRuLl9tZXRhX2FjdGl2ZSwuc3FyLl9tZXRhX2FjdGl2ZXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSg2OSwgNTksIDU5LCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgXHJcbiBcclxuICAgIC5zcXItdG9vbGJhcntcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIFxyXG4uZmFuY3ktdGh1bWJcclxueyAgIFxyXG4gICAgei1pbmRleDoxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59Il19 */"

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

module.exports = "\n \n\n<ng-template #defaultToolbar let-item=\"item\">\n  <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n    <li>\n      <button class=\"btn btn-secondary btn-md btn-primary left\" (click)=\"editItemHandler(item);\"> <i\n          class=\"icon-edit\"></i>\n      </button>\n    </li>\n    <li class=\"date-label\">{{item.Date | date}}</li>\n    <li>\n      <button class=\"btn btn-secondary btn-md btn-danger right\" (click)=\"deleteItemHandler(item);\"> <i\n          class=\"icon-trash-o\"></i>\n      </button>\n    </li>\n\n  </ul>\n</ng-template>\n\n\n\n<div class=\"lobby\" *ngIf=\"mode==='media'\">\n  <div *ngIf=\"!noNew\" class=\"sqr shadow sqr-btn {{itemClass}}\" (click)=\"newItemHandler()\" (next)=\"newItemHandler()\"\n    [joyrideStep]=\"'lobby-add'\" [stepContent]=\"lobbyContent\"><i class=\"icon-plus-alt\"></i>\n  </div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{item._meta_active}}\" (click)=\"selectItemHandler(item)\">\n    <app-lobby-item [item]=\"item\" [model]=\"model\"></app-lobby-item>\n    <ng-template [ngTemplateOutlet]=\"toolbar || defaultToolbar\" [ngTemplateOutletContext]=\"{item: item}\">\n    </ng-template>\n  </div>\n</div>\n\n<div class=\"lobby\" *ngIf=\"mode==='media-finder'\">\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{itemClass}} {{item._meta_active}}\">\n    <app-lobby-item [item]=\"item\" [model]=\"model\"></app-lobby-item>\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"selectItemHandler(item);\"> <i\n            class=\"icon-plus-square\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"lobby\" *ngIf=\"mode==='object-finder'\">\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{itemClass}}\">\n    <app-lobby-item [item]=\"item\" [model]=\"model\"></app-lobby-item>\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary\" (click)=\"selectItemHandler(item);\"> <i\n            class=\"icon-plus-square\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"lobby\" *ngIf=\"mode==='object'\">\n  <div *ngIf=\"!noNew\" class=\"sqr shadow sqr-btn {{itemClass}}\" \n  [joyrideStep]=\"'lobby-add'\" (next)=\"nextTourStep()\" [stepContent]=\"lobbyContent\"\n    (next)=\"newItemHandler()\"\n     (click)=\"newItemHandler()\"><i class=\"icon-plus-alt\"></i>\n  </div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow {{item._meta_active}}\" (click)=\"selectItemHandler(item)\">\n    <app-lobby-item [item]=\"item\" [model]=\"model\"></app-lobby-item>\n\n    <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-primary left\" (click)=\"editItemHandler(item);\"> <i\n            class=\"icon-edit\"></i>\n        </button>\n      </li>\n      <li class=\"date-label\">{{item.Date | date}}</li>\n      <li>\n        <button class=\"btn btn-secondary btn-md btn-danger right\" (click)=\"deleteItemHandler(item);\"> <i\n            class=\"icon-trash-o\"></i>\n        </button>\n      </li>\n\n    </ul>\n  </div>\n</div>\n<ng-template #lobbyContent>\n    <h5> {{'TOUR.ADD.TITLE' | translate}}</h5>\n    <p>\n        {{'TOUR.ADD.CONTENT' | translate}}\n    </p>\n</ng-template>"

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

module.exports = ".inline-topper {\n  pointer-events: none;\n  z-index: 0;\n  height: 51px;\n  padding-top: 10px; }\n  .inline-topper .icon {\n    margin: 8px;\n    vertical-align: top; }\n  .inline-topper h4 {\n    display: inline;\n    vertical-align: top; }\n  .inline-topper .bar-icon {\n    margin-left: 15px; }\n  .topper {\n  pointer-events: none;\n  z-index: 0;\n  height: 65px;\n  position: absolute;\n  padding-top: 30px;\n  top: -30px;\n  left: -15px;\n  right: -15px; }\n  .topper .icon {\n    margin: 8px;\n    vertical-align: top; }\n  .topper h4 {\n    display: inline;\n    vertical-align: top; }\n  .topper .bar-icon {\n    margin-left: 15px; }\n  :host-context(.ltr) .close-button-topper {\n  right: -15px; }\n  :host-context(.rtl) .close-button-topper {\n  left: -15px; }\n  .close-button-topper {\n  position: absolute;\n  z-index: 2000;\n  top: -15px;\n  width: 50px;\n  height: 50px;\n  background-color: #96ff00;\n  color: white;\n  cursor: pointer; }\n  .close-button-inline-topper {\n  color: white;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  width: 50px;\n  height: 50px;\n  background-color: green; }\n  .save-btn-inline-topper:hover {\n  font-size: 1.5em; }\n  .save-btn-inline-topper {\n  transition: all .2s ease;\n  color: white;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  width: 50px;\n  height: 50px;\n  background-color: orange;\n  color: white;\n  cursor: pointer; }\n  .save-btn-inline-topper.true {\n    background-color: red;\n    color: black; }\n  .toolbar {\n  position: absolute;\n  top: 0;\n  transition: all .2s ease; }\n  :host-context(.rtl) .toolbar {\n  left: 100px; }\n  :host-context(.rtl) .save-btn-topper {\n  left: 35px; }\n  :host-context(.rtl) .save-btn-inline-topper {\n  float: right;\n  left: 50px; }\n  :host-context(.rtl) .close-button-inline-topper {\n  float: right;\n  left: 0px; }\n  :host-context(.ltr) .toolbar {\n  right: 100px; }\n  :host-context(.ltr) .save-btn-topper {\n  right: 35px; }\n  :host-context(.ltr) .save-btn-inline-topper {\n  float: left;\n  right: 50px; }\n  :host-context(.ltr) .close-button-inline-topper {\n  float: right;\n  right: 0px; }\n  .save-btn-topper {\n  color: white;\n  position: absolute;\n  top: -15px;\n  width: 50px;\n  height: 50px;\n  background-color: #fc6600;\n  cursor: pointer; }\n  .save-btn-topper.true {\n    background-color: red;\n    color: black; }\n  .save-btn-inline-topper:active,\n.save-btn-inline-topper:hover,\n.save-btn-topper:active,\n.save-btn-topper:hover,\n.btn-tool:hover,\n.btn-tool:active {\n  font-size: 1.5em; }\n  .close-button-inline-topper:active,\n.close-button-inline-topper:hover,\n.close-button-topper:active,\n.close-button-topper:hover {\n  font-size: 1.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NsaWRlLWhlYWRlci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxcc2xpZGUtaGVhZGVyXFxzbGlkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9zbGlkZS1oZWFkZXIvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixZQUFZO0VBRVosaUJBQWlCLEVBQUE7RUFMckI7SUFPUSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUFSM0I7SUFXUSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUFaM0I7SUFlUSxpQkFBaUIsRUFBQTtFQUl6QjtFQUNJLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsWUFBWTtFQUVaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFUaEI7SUFXUSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUFaM0I7SUFlUSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUFoQjNCO0lBbUJRLGlCQUFpQixFQUFBO0VBSXpCO0VBSVEsWUFBWSxFQUFBO0VBR25CO0VBR08sV0FBVyxFQUFBO0VBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQ3JEYTtFRHVEYixZQUFZO0VBQ1osZUFBZSxFQUFBO0VBU3ZCO0VBQ0EsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFFbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7RUFPbkI7RUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtFQUlJLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZUFBZTtFQUdmLGtCQUFrQjtFQUVsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFFeEIsWUFBWTtFQUNaLGVBQWUsRUFBQTtFQWpCbkI7SUFvQlEscUJBQXFCO0lBQ3JCLFlBQVksRUFBQTtFQUlwQjtFQUNJLGtCQUFrQjtFQUNsQixNQUFLO0VBR0wsd0JBQXdCLEVBQUE7RUFNNUI7RUFHUSxXQUFXLEVBQUE7RUFIbkI7RUFRUSxVQUFVLEVBQUE7RUFSbEI7RUFZUSxZQUFZO0VBQ1osVUFBVSxFQUFBO0VBYmxCO0VBa0JRLFlBQVk7RUFHWixTQUFTLEVBQUE7RUFLakI7RUFHUSxZQUFZLEVBQUE7RUFIcEI7RUFRUSxXQUFXLEVBQUE7RUFSbkI7RUFZUSxXQUFXO0VBQ1gsV0FBVyxFQUFBO0VBYm5CO0VBaUJRLFlBQVk7RUFDWixVQUFVLEVBQUE7RUFLbEI7RUFFSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQ3RMYztFRHVMZCxlQUFlLEVBQUE7RUFSbkI7SUFXUSxxQkFBcUI7SUFDckIsWUFBWSxFQUFBO0VBS3BCOzs7Ozs7RUFRSSxnQkFBZ0IsRUFBQTtFQUlwQjs7OztFQU1JLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3NsaWRlLWhlYWRlci9zbGlkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zYXNzL192YXJpYWJsZXMnO1xyXG5cclxuXHJcblxyXG5cclxuLmlubGluZS10b3BwZXJ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgaGVpZ2h0OiA1MXB4OyAgIFxyXG4gICAgICAgXHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgICAgXHJcbiAgICAuaWNvbntcclxuICAgICAgICBtYXJnaW46IDhweDsgICAgICBcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbiAgICAuYmFyLWljb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b3BwZXJ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgaGVpZ2h0OiA2NXB4OyAgIFxyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICBcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgLmljb257XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7ICAgICAgXHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgLmJhci1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5sdHIpXHJcbiB7XHJcbiAgIFxyXG4gICAgLmNsb3NlLWJ1dHRvbi10b3BwZXJ7XHJcbiAgICAgICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgfVxyXG4gfVxyXG4gOmhvc3QtY29udGV4dCgucnRsKVxyXG4ge1xyXG4gICAgLmNsb3NlLWJ1dHRvbi10b3BwZXJ7XHJcbiAgICAgICAgbGVmdDogLTE1cHg7XHJcbiAgICB9XHJcbiB9XHJcbiAgICAuY2xvc2UtYnV0dG9uLXRvcHBlcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjAwMDsgICAgICBcclxuICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JlZW47XHJcblxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgXHJcblxyXG4gICBcclxuICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gXHJcblxyXG4uY2xvc2UtYnV0dG9uLWlubGluZS10b3BwZXIgeyAgICBcclxuY29sb3I6IHdoaXRlO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbnRvcDogMHB4O1xyXG53aWR0aDogNTBweDtcclxuaGVpZ2h0OiA1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHJcbiBcclxuIFxyXG5cclxuXHJcbn1cclxuICAgIC5zYXZlLWJ0bi1pbmxpbmUtdG9wcGVyOmhvdmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9IFxyXG4gICAgLnNhdmUtYnRuLWlubGluZS10b3BwZXJcclxuICAgIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgXHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAmLnRydWV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudG9vbGJhcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIDpob3N0LWNvbnRleHQoLnJ0bClcclxuICAgIHtcclxuICAgICAgICAudG9vbGJhcnsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZWZ0OiAxMDBweDsgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNhdmUtYnRuLXRvcHBlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGVmdDogMzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNhdmUtYnRuLWlubGluZS10b3BwZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jbG9zZS1idXR0b24taW5saW5lLXRvcHBlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIDpob3N0LWNvbnRleHQoLmx0cilcclxuICAgIHtcclxuICAgICAgICAudG9vbGJhcnsgICAgICAgICAgIFxyXG4gICAgICAgICAgICByaWdodDogMTAwcHg7ICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zYXZlLWJ0bi10b3BwZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2F2ZS1idG4taW5saW5lLXRvcHBlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xvc2UtYnV0dG9uLWlubGluZS10b3BwZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zYXZlLWJ0bi10b3BwZXJcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1vcmFuZ2U7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgICYudHJ1ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuc2F2ZS1idG4taW5saW5lLXRvcHBlcjphY3RpdmUsICAgIFxyXG4gICAgLnNhdmUtYnRuLWlubGluZS10b3BwZXI6aG92ZXIsXHJcbiAgICAuc2F2ZS1idG4tdG9wcGVyOmFjdGl2ZSxcclxuICAgIC5zYXZlLWJ0bi10b3BwZXI6aG92ZXIsXHJcbiAgICAuYnRuLXRvb2w6aG92ZXIsXHJcbiAgICAuYnRuLXRvb2w6YWN0aXZlLFxyXG4gICAgeyAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2UtYnV0dG9uLWlubGluZS10b3BwZXI6YWN0aXZlLCAgICBcclxuICAgIC5jbG9zZS1idXR0b24taW5saW5lLXRvcHBlcjpob3ZlcixcclxuICAgIC5jbG9zZS1idXR0b24tdG9wcGVyOmFjdGl2ZSxcclxuICAgIC5jbG9zZS1idXR0b24tdG9wcGVyOmhvdmVyXHJcbiAgICB7ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIFxyXG4gXHJcbiBcclxuICIsIlxyXG4kY29sb3ItZ3JheTogI2UzZTRlNTtcclxuJGNvbG9yLWRhcmtibHVlMTogIzE2MjQzMztcclxuJGNvbG9yLWRhcmtibHVlMjogIzJhNDU2MztcclxuJGNvbG9yLWxpZ2h0Ymx1ZTE6ICMyNjQzNTY7XHJcbiRjb2xvci1saWdodGJsdWUyOiAjM2M3Mzk5O1xyXG4kY29sb3Itb3JhbmdlOiAjZmM2NjAwO1xyXG4kY29sb3ItY3lhbjogIzAwZmZmNjtcclxuJGNvbG9yLXNjcmVlbjogIzAwY2ZmZjtcclxuJGNvbG9yLXNjcmVlbi1ncm91cDogIzAwZmZmNjtcclxuJGNvbG9yLWxpYnJhcnk6ICM5NmZmMDA7XHJcbiRjb2xvci15ZWxsb3c6ICNmZmZmMDA7XHJcbiRjb2xvci1wdXJwbGU6ICNmM2I3ZWI7XHJcbiRjb2xvci1ncmVlbjogIzk2ZmYwMDtcclxuJGNvbG9yLWJsYWNrOiAjMjIyO1xyXG4kY29sb3ItZ3JheXdoaXRlOiAjRkZFO1xyXG4kY29sb3ItdG9vbGJhcjogI2Y4ZjlmYTtcclxuIFxyXG5cclxuIFxyXG5cclxuICJdfQ== */"

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

module.exports = " \n<div class=\"wrapper\">\n    <nav id=\"sidebar\" [class]=\"activeClass\">\n        <div class=\"sidebar-header\">\n            <h3>Sign-Nature</h3>\n            <ul class=\"sidebar-header-bar\">\n                <li class=\"nav-item\" class=\"language-bar\">\n                    <app-language-bar></app-language-bar>\n                </li>\n                <li class=\"nav-item\">\n                    <button type=\"button\" (click)=\"toggleSidebar()\" id=\"sidebarCollapse\" class=\"btn-collapse\">\n                        <i class=\"icon-menu\"></i>\n                    </button>\n                </li>\n            </ul>\n            <strong>\n                <img src=\"assets/signnature_icon.png\" width=\"40\">\n            </strong>\n        </div>\n        <ul class=\"list-unstyled components\">\n            <li>\n                <a routerLink=\"/dashboard\" title=\"{{'NAVBAR.HOME' | translate}}\">\n                    <i class=\"icon-home\"></i>&nbsp;\n                    <span class=\"nav-text\">\n                        {{\"NAVBAR.HOME\" | translate}}</span>\n                </a>\n            </li>\n            <li [joyrideStep]=\"'screens'\" [stepContent]=\"screensContent\">\n                <a routerLink=\"screen\" routerLinkActive=\"screen-cat\" title=\"{{'NAVBAR.SCREENS' | translate}}\">\n                    <i class=\"icon-display\"></i>&nbsp;\n                    <span class=\"nav-text\">\n                        {{\"NAVBAR.SCREENS\" | translate}}</span>\n\n                </a></li>\n\n            <li>\n                <a routerLinkActive=\"library-cat\" routerLink=\"library\" title=\"{{'NAVBAR.LIBRARY' | translate}}\">\n                    <i class=\"icon-archive\"></i>&nbsp; <span class=\"nav-text\">\n                        {{\"NAVBAR.LIBRARY\" | translate}}</span>\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"playlists\" routerLinkActive=\"playlist-cat\" title=\"{{'NAVBAR.PLAYLISTS' | translate}}\">\n                    <i class=\"icon-video\"></i>&nbsp; <span class=\"nav-text\">\n                        {{\"NAVBAR.PLAYLISTS\" | translate}}</span>\n\n                </a>\n            </li>\n\n        </ul>\n    </nav>\n\n    <div id=\"content\" class=\"content-bg\">\n        <div class=\"library-cat\">\n            <ul class=\"nav user-menu\">\n                <li class=\"nav-item\">\n                    <div class=\"usercapsule\" *ngIf=\"user\"><span class=\"icon-user2\"></span><span class=\"name\">\n                            {{user.Email}}</span><a (click)=\"signOut()\"><span class=\"icon-sign-out\"></span></a></div>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" style=\"padding-top:4px;\" (click)=\"help()\">\n                        <span class=\"icon-help-with-circle\">\n                        </span></a>\n                </li>\n            </ul>\n        </div>\n        <router-outlet></router-outlet>\n    </div>\n    <footer class=\"footer closed\">\n        {{'DASHBOARD.FOOTER' | translate}}\n\n    </footer>\n</div>\n\n<div [joyrideStep]=\"'welcome'\" [stepContent]=\"welcomeContent\" stepPosition=\"center\"></div>\n<ng-template #welcomeContent>\n    <h5> {{'TOUR.WELCOME.TITLE' | translate}}</h5>\n    <p>\n        {{'TOUR.WELCOME.CONTENT' | translate}}\n    </p>\n</ng-template>\n\n<ng-template #screensContent>\n    <h5> {{'TOUR.SCREENS.TITLE' | translate}}</h5>\n    <p>\n        {{'TOUR.SCREENS.CONTENT' | translate}}\n    </p>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar .nav-text {\n  display: inline-block; }\n\n:host-context(.rtl) .user-menu {\n  float: left; }\n\n:host-context(.rtl) .user-menu .usercapsule {\n    direction: rtl; }\n\n:host-context(.rtl) .user-menu .usercapsule .icon-user2 {\n      padding-left: 10px;\n      padding-right: 0px; }\n\n.user-menu {\n  color: white;\n  font-size: 20px;\n  float: right;\n  margin-top: 12px;\n  display: flex;\n  vertical-align: middle; }\n\n.user-menu .usercapsule {\n    height: 30px;\n    border-radius: 30px;\n    background-color: #3c7399;\n    max-width: 250px;\n    width: 250px;\n    font-size: 14px;\n    line-height: 30px;\n    padding-right: 10px;\n    padding-left: 10px;\n    vertical-align: middle;\n    display: flex; }\n\n.user-menu .usercapsule .icon-user2 {\n      line-height: 30px;\n      padding-right: 10px; }\n\n.user-menu .usercapsule .name {\n      max-width: 180px;\n      overflow: hidden; }\n\n.user-menu .nav-link {\n    cursor: pointer; }\n\n.user-menu .icon-sign-out {\n    float: right;\n    cursor: pointer;\n    margin-top: 9px;\n    margin-left: 10px; }\n\n.user-menu .icon-sign-out:hover {\n    color: #fc6600; }\n\n#sidebar.active .nav-text {\n  display: none; }\n\n.active-link {\n  color: #c5c5c5;\n  background: #3f5efb;\n  background: radial-gradient(circle, #3f5efb 0%, #fc466b 100%); }\n\n.active-link #LibrarySubmenu {\n    display: block !important; }\n\n.sidebar-header-bar {\n  clear: both;\n  background-color: #162433; }\n\n.sidebar-header-bar li {\n    float: right; }\n\n.sidebar-header-bar li.language-bar {\n    width: 150px; }\n\n.btn-collapse {\n  color: #3c7399;\n  background-color: transparent;\n  margin-right: 7px;\n  width: 40px;\n  height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxxQkFBcUIsRUFBQTs7QUFJN0I7RUFHUSxXQUFXLEVBQUE7O0FBSG5CO0lBS1ksY0FBYyxFQUFBOztBQUwxQjtNQU9nQixrQkFBa0I7TUFDbEIsa0JBQWtCLEVBQUE7O0FBTWxDO0VBQ0EsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFOdEI7SUFVSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQzdCc0I7SUQ4QnRCLGdCQUFnQjtJQUNoQixZQUFZO0lBSVosZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhLEVBQUE7O0FBdkJqQjtNQXlCWSxpQkFBaUI7TUFDakIsbUJBQW1CLEVBQUE7O0FBMUIvQjtNQTZCWSxnQkFBZ0I7TUFDaEIsZ0JBQWdCLEVBQUE7O0FBOUI1QjtJQWtDUSxlQUFlLEVBQUE7O0FBbEN2QjtJQXFDUSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUIsRUFBQTs7QUF4Q3pCO0lBMkNZLGNDM0RVLEVBQUE7O0FEZ0V0QjtFQUVZLGFBQWEsRUFBQTs7QUFJekI7RUFDSSxjQUFjO0VBQ2QsbUJBQTBCO0VBQzFCLDZEQUFrRixFQUFBOztBQUh0RjtJQUtRLHlCQUF3QixFQUFBOztBQUtoQztFQUNJLFdBQVc7RUFDWCx5QkN0RnFCLEVBQUE7O0FEb0Z6QjtJQUlRLFlBQVksRUFBQTs7QUFKcEI7SUFPUSxZQUFZLEVBQUE7O0FBR3BCO0VBR0ksY0M5RnNCO0VEK0Z0Qiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Fzcy9fdmFyaWFibGVzJztcclxuXHJcbiNzaWRlYmFyIHtcclxuICAgIC5uYXYtdGV4dHsgICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLnJ0bClcclxue1xyXG4gICAgLnVzZXItbWVudXsgICAgICAgXHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLnVzZXJjYXBzdWxle1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgICAgICAgICAgLmljb24tdXNlcjJ7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udXNlci1tZW51e1xyXG5jb2xvcjogd2hpdGU7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxuZmxvYXQ6IHJpZ2h0O1xyXG5tYXJnaW4tdG9wOiAxMnB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgIC51c2VyY2Fwc3VsZXtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodGJsdWUyO1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5pY29uLXVzZXIye1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2LWxpbmt7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmljb24tc2lnbi1vdXR7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbi1zaWduLW91dDpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1vcmFuZ2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4jc2lkZWJhci5hY3RpdmUge1xyXG4gICAgICAgIC5uYXYtdGV4dHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgIFxyXG59XHJcbi5hY3RpdmUtbGlua3tcclxuICAgIGNvbG9yOiAjYzVjNWM1O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDYzLDk0LDI1MSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYzLDk0LDI1MSwxKSAwJSwgcmdiYSgyNTIsNzAsMTA3LDEpIDEwMCUpO1xyXG4gICAgI0xpYnJhcnlTdWJtZW51e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuIFxyXG4uc2lkZWJhci1oZWFkZXItYmFye1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGFya2JsdWUxO1xyXG4gICAgbGl7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgbGkubGFuZ3VhZ2UtYmFye1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxufVxyXG4uYnRuLWNvbGxhcHNleyAgXHJcbiAgIFxyXG4gICAgXHJcbiAgICBjb2xvcjokY29sb3ItbGlnaHRibHVlMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuIiwiXHJcbiRjb2xvci1ncmF5OiAjZTNlNGU1O1xyXG4kY29sb3ItZGFya2JsdWUxOiAjMTYyNDMzO1xyXG4kY29sb3ItZGFya2JsdWUyOiAjMmE0NTYzO1xyXG4kY29sb3ItbGlnaHRibHVlMTogIzI2NDM1NjtcclxuJGNvbG9yLWxpZ2h0Ymx1ZTI6ICMzYzczOTk7XHJcbiRjb2xvci1vcmFuZ2U6ICNmYzY2MDA7XHJcbiRjb2xvci1jeWFuOiAjMDBmZmY2O1xyXG4kY29sb3Itc2NyZWVuOiAjMDBjZmZmO1xyXG4kY29sb3Itc2NyZWVuLWdyb3VwOiAjMDBmZmY2O1xyXG4kY29sb3ItbGlicmFyeTogIzk2ZmYwMDtcclxuJGNvbG9yLXllbGxvdzogI2ZmZmYwMDtcclxuJGNvbG9yLXB1cnBsZTogI2YzYjdlYjtcclxuJGNvbG9yLWdyZWVuOiAjOTZmZjAwO1xyXG4kY29sb3ItYmxhY2s6ICMyMjI7XHJcbiRjb2xvci1ncmF5d2hpdGU6ICNGRkU7XHJcbiRjb2xvci10b29sYmFyOiAjZjhmOWZhO1xyXG4gXHJcblxyXG4gXHJcblxyXG4gIl19 */"

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
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.context.service */ "./src/app/services/user.context.service.ts");
/* harmony import */ var _services_tour_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/tour.service */ "./src/app/services/tour.service.ts");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route, responsiveService, tourService, userService, router) {
        this.route = route;
        this.responsiveService = responsiveService;
        this.tourService = tourService;
        this.userService = userService;
        this.router = router;
        this.subMenuState = 'collapse';
        this.toggled = false;
        this.activeClass = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getUser();
    };
    DashboardComponent.prototype.toggleSubmenu = function () {
        if (this.subMenuState) {
            this.subMenuState = '';
        }
        else {
            this.subMenuState = 'collapse';
        }
    };
    DashboardComponent.prototype.signOut = function () {
        this.userService.clear();
        this.router.navigate(['/']);
    };
    DashboardComponent.prototype.help = function () {
        this.tourService.start();
        // (
        //   { steps: ['welcome', 'screens@/dashboard/screen/screens', 'screengroups@/dashboard/screen/screen-group'] } // Your steps order
        // );
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_responsive_service__WEBPACK_IMPORTED_MODULE_3__["ResponsiveService"],
            _services_tour_service__WEBPACK_IMPORTED_MODULE_5__["TourService"],
            _services_user_context_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var DataComponent = /** @class */ (function () {
    function DataComponent(_ngZone, translateService, dirtyService, changeDetectorRef, formBuilder) {
        this._ngZone = _ngZone;
        this.translateService = translateService;
        this.dirtyService = dirtyService;
        this.changeDetectorRef = changeDetectorRef;
        this.formBuilder = formBuilder;
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
    };
    DataComponent.prototype.closeSlider = function () {
        var _this = this;
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
                            case 4:
                                this.items = this.items.map(function (item) {
                                    var obj = {};
                                    Object.assign(obj, item);
                                    return obj;
                                });
                                this.changeDetectorRef.detectChanges();
                                return [2 /*return*/];
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

/***/ "./src/app/editor/add/add.component.html":
/*!***********************************************!*\
  !*** ./src/app/editor/add/add.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cube-container\">\r\n    <div class=\"cube\">\r\n        <div class=\"plus\">\r\n            <div class=\"plus-horizontal\"></div>\r\n            <div class=\"plus-vertical\"></div>\r\n        </div>\r\n        <div class=\"quadrant\">\r\n            <div class=\"quadrant__item\">\r\n                <div class=\"quadrant__item__content\">\r\n                    <button class=\"arrow-up\" (click)=\"add('text')\">\r\n                        <i class=\"icon-text-color\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"quadrant__item\">\r\n                <div class=\"quadrant__item__content\">\r\n                    <button class=\"arrow-right\" (click)=\"add('image')\">\r\n                        <i class=\"icon-images\"></i>\r\n                    </button>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"quadrant__item\">\r\n                <div class=\"quadrant__item__content\">\r\n                    <button class=\"arrow-left\" (click)=\"add('video')\">\r\n                        <i class=\"icon-video\"></i>\r\n                    </button>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"quadrant__item\">\r\n                <div class=\"quadrant__item__content\">\r\n                    <button class=\"arrow-down\" (click)=\"add('plugin')\">\r\n                        <i class=\"icon-plugin\"></i>\r\n                    </button>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/editor/add/add.component.scss":
/*!***********************************************!*\
  !*** ./src/app/editor/add/add.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cube-container {\n  position: absolute;\n  top: -16px;\n  z-index: 1050;\n  left: 8px;\n  z-index: 1050; }\n\n.cube {\n  width: 30px;\n  height: 30px;\n  background: #f45c41;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n  transition: background 0.2s; }\n\n.plus-vertical,\n.plus-horizontal {\n  background: #fff;\n  border-radius: 4px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 10; }\n\n.plus-vertical {\n  height: 50%;\n  width: 5px; }\n\n.plus-horizontal {\n  width: 50%;\n  height: 5px; }\n\n.quadrant {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.quadrant__item {\n  width: 50%;\n  height: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f45c41;\n  border-radius: 6px;\n  position: relative; }\n\n.quadrant__item__content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg);\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.arrow-down,\n.arrow-left,\n.arrow-right,\n.arrow-up {\n  opacity: 0;\n  color: white;\n  font-size: 24px; }\n\n.arrow-up {\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px); }\n\n.arrow-down {\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px); }\n\n.arrow-left {\n  -webkit-transform: translateX(10px);\n          transform: translateX(10px); }\n\n.arrow-right {\n  -webkit-transform: translateX(-10px);\n          transform: translateX(-10px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2FkZC9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGVkaXRvclxcYWRkXFxhZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixTQUFTO0VBQ1QsYUFBYSxFQUFBOztBQWlCakI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwyQkFBMkIsRUFBQTs7QUFHN0I7O0VBRUUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx1REFBK0M7VUFBL0MsK0NBQStDO0VBQy9DLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBR3pCOzs7O0VBSUcsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2xCO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLG9DQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0Usb0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbi5jdWJlLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTE2cHg7XHJcbiAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgbGVmdDogOHB4OyAgIFxyXG4gICAgei1pbmRleDogMTA1MDtcclxufVxyXG5cclxuLy8gOmhvc3QtY29udGV4dCgubHRyKVxyXG4vLyB7XHJcbi8vICAgLmN1YmUtY29udGFpbmVyXHJcbi8vICAgICB7XHJcbi8vICAgICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICA6aG9zdC1jb250ZXh0KC5ydGwpXHJcbi8vICAge1xyXG4vLyAgICAgLmN1YmUtY29udGFpbmVyXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi5jdWJlIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y0NWM0MTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xyXG59XHJcblxyXG4ucGx1cy12ZXJ0aWNhbCxcclxuLnBsdXMtaG9yaXpvbnRhbCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnBsdXMtdmVydGljYWwge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbi5wbHVzLWhvcml6b250YWwge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5xdWFkcmFudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5xdWFkcmFudF9faXRlbSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2Y0NWM0MTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucXVhZHJhbnRfX2l0ZW1fX2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFycm93LWRvd24sXHJcbi5hcnJvdy1sZWZ0LFxyXG4uYXJyb3ctcmlnaHQsXHJcbi5hcnJvdy11cCB7XHJcbiAgIG9wYWNpdHk6IDA7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uYXJyb3ctdXAge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxufVxyXG5cclxuLmFycm93LWRvd24ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbn1cclxuXHJcbi5hcnJvdy1sZWZ0IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbn1cclxuXHJcbi5hcnJvdy1yaWdodCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcclxufSJdfQ== */"

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
/* harmony import */ var gsap_TweenMax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/TweenMax */ "./node_modules/gsap/TweenMax.js");




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
        var tl = new gsap_TweenMax__WEBPACK_IMPORTED_MODULE_3__["TimelineLite"]({ paused: true });
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

module.exports = "<div *ngIf=\"item\" [ngStyle]=\"{'background-color': bgColor}\" style=\"position: relative;\">\r\n    <div #gridObject style=\"position: absolute;\"></div>\r\n    <canvas #thumbObject height=\"{{height}}\" width=\"{{width}}\" style=\"position: absolute;\"></canvas>\r\n</div>\r\n"

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
                    var element, grid, ctx;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        if (this.thumbObject.first) {
                            element = this.thumbObject.first.nativeElement;
                            element.width = this.width;
                            element.height = this.height;
                            grid = this.gridObject.first.nativeElement;
                            grid.width = this.width;
                            grid.height = this.height;
                            ctx = element.getContext('2d');
                            this.slideService.play({ canvas: element, grid: grid }, [this.item], ctx, this.width, this.height, 'single');
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
        this.propValueAccessor = 'innerHTML';
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('contenteditable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ContenteditableDirective.prototype, "contentEditable", void 0);
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
/* harmony import */ var _panel_horizontal_panel_horizontal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panel-horizontal/panel-horizontal.component */ "./src/app/editor/panel-horizontal/panel-horizontal.component.ts");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add/add.component */ "./src/app/editor/add/add.component.ts");
/* harmony import */ var _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fonts/fonts.component */ "./src/app/editor/fonts/fonts.component.ts");
/* harmony import */ var _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./code-editor/code-editor.component */ "./src/app/editor/code-editor/code-editor.component.ts");
/* harmony import */ var _screen_size_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./screen-size.service */ "./src/app/editor/screen-size.service.ts");
/* harmony import */ var _share_window_share_window_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./share-window/share-window.component */ "./src/app/editor/share-window/share-window.component.ts");
/* harmony import */ var ngx_scroll_event__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-scroll-event */ "./node_modules/ngx-scroll-event/index.js");
/* harmony import */ var ngx_scroll_event__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ngx_scroll_event__WEBPACK_IMPORTED_MODULE_19__);




















var monacoConfig = {
    baseUrl: '/assets/',
    defaultOptions: { scrollBeyondLastLine: false } // pass default options to be used
    //   onMonacoLoad: function() => {
    //     const _monaco = (<any>window).monaco;
    //     // validation settings
    //     _monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
    //       noSemanticValidation: false,
    //       noSyntaxValidation: false
    //     });
    //     // compiler options
    //     _monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    //       target: monaco.languages.typescript.ScriptTarget.ES5,
    //       allowNonTsExtensions: true
    //     });
    //   } // here monaco object will be available as window.monaco use this function to extend monaco editor functionality.
    //
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
                ngx_scroll_event__WEBPACK_IMPORTED_MODULE_19__["ScrollEventModule"],
                ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_8__["MonacoEditorModule"].forRoot(monacoConfig)
            ],
            entryComponents: [
                _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_15__["FontsSelectComponent"],
                _share_window_share_window_component__WEBPACK_IMPORTED_MODULE_18__["ShareWindowComponent"],
            ],
            declarations: [
                _contenteditable_directive__WEBPACK_IMPORTED_MODULE_7__["ContenteditableDirective"],
                _element_element_component__WEBPACK_IMPORTED_MODULE_6__["ElementComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_14__["AddComponent"],
                _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_11__["SlideEditorComponent"],
                _panel_horizontal_panel_horizontal_component__WEBPACK_IMPORTED_MODULE_12__["PanelHorizontalComponent"],
                _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_15__["FontsSelectComponent"],
                _share_window_share_window_component__WEBPACK_IMPORTED_MODULE_18__["ShareWindowComponent"],
                _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_16__["CodeEditorComponent"]
            ],
            providers: [_fonts_service__WEBPACK_IMPORTED_MODULE_10__["FontsService"], _selection_service__WEBPACK_IMPORTED_MODULE_9__["SelectionService"], _screen_size_service__WEBPACK_IMPORTED_MODULE_17__["ScreenSizeService"]]
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

module.exports = "<div [ngDraggable]=\"dragActive\" #dragblock=\"ngDraggable\" #draggable [zIndex]=\"zIndex\" [position]=\"position\"\n  class=\"drag-block element {{isSelected}}\" (movingOffset)=\"onMoving($event)\" [preventDefaultEvent]=\"false\"\n  (endOffset)=\"onMoveEnd($event)\" (click)=\"focus($event, element)\">\n\n  <div class=\"drag-tag\" style=\"transform: translate(0, 0);\">\n    {{element.varName}} (<small>{{element.type}}</small>) {{zIndex}}\n    <button class=\"del-button\" (click)=\"remove(element);\"><i class=\"icon-times-rectangle-o\"></i></button>\n  </div>\n\n\n  <div (mouseup)=\"resizeStop()\" (mousemove)=\"resizeMaybe($event)\" class=\"element-container\" #block\n    [ngStyle]=\"{'transform':  'rotate('+element.rotation+'deg)'}\">\n\n\n    <div [ngStyle]=\"{\n      'font-family': element.font ? '\\''+element.font+'\\'': 'arial',\n      'opacity': element.opacity,\n      'font-size.px': element.fontSize ,\n      'text-align': element.align,\n      'color': element.color\n   }\" *ngIf=\"isSelected\">\n\n      <div contenteditable *ngIf=\"element.type === 'text'\" (callOnChange)=\"updateComplete($event)\"\n        (updateComplete)=\"updateComplete($event)\" [(ngModel)]=\"element.text\"> </div>\n\n\n      <div *ngIf=\"element.type === 'image'\"><img [src]=\"element.src\" class=\"image-element\"\n          (load)=\"setDimensions($event)\" [ngStyle]=\"{'width.px': element.width,'height.px': element.height, \n        'opacity': element.opacity   }\" /></div>\n\n\n      <img [src]=\"videoPreview\" *ngIf=\"!isSelected && element.type === 'video'\" class=\"image-element\"\n        (load)=\"setDimensions($event)\" [ngStyle]=\"{'width.px': element.width,'height.px': element.height, \n     'opacity': element.opacity   }\" />\n\n      <div class=\"side side-r\">\n        <div class=\"corner-pad\" (mouseenter)=\"cursor($event, element.rotation, 'r')\" (mouseup)=\"resizeStop()\"\n          (mousedown)=\"resizeStart($event, 'r')\">\n        </div>\n      </div>\n      <div class=\"side side-b\">\n        <div class=\"corner-pad\" (mouseenter)=\"cursor($event, element.rotation, 'b')\" (mouseup)=\"resizeStop()\"\n          (mousedown)=\"resizeStart($event, 'b')\">\n        </div>\n      </div>\n\n      <!-- <div class=\"corner corner-lb\">\n        <div class=\"corner-pad\" (mouseenter)=\"cursor($event, element.rotation, 'lb')\" (mouseup)=\"resizeStop()\"\n          (mousedown)=\"resizeStart($event, 'lb')\">\n        </div>\n      </div> -->\n      <div class=\"corner corner-rb\">\n        <div class=\"corner-pad\" (mouseenter)=\"cursor($event, element.rotation, 'rb')\" (mouseup)=\"resizeStop()\"\n          (mousedown)=\"resizeStart($event, 'rb')\">\n        </div>\n      </div>\n    </div>\n\n    <div [ngStyle]=\"{\n      'font-family': element.font ? '\\''+element.font+'\\'': 'arial',\n      'opacity': element.opacity,\n      'font-size.px': element.fontSize , \n      'text-align': element.align,\n      'color': element.color\n     }\" *ngIf=\"!isSelected && element.type === 'text'\" [innerHTML]=\"element.text\">\n\n    </div>\n\n    <img [src]=\"element.src\" *ngIf=\"!isSelected && element.type === 'image'\" class=\"image-element\"\n      (load)=\"setDimensions($event)\" [ngStyle]=\"{'width.px': element.width,'height.px': element.height, \n   'opacity': element.opacity   }\" />\n\n\n    <img [src]=\"videoPreview\" *ngIf=\"!isSelected && element.type === 'video'\" class=\"image-element\"\n      (load)=\"setDimensions($event)\" [ngStyle]=\"{'width.px': element.width,'height.px': element.height, \n   'opacity': element.opacity   }\" />\n\n    <div class=\"rotate\" *ngIf=\"isSelected\" (mouseup)=\"dragRotate($event, false);\"\n      (mousedown)=\"dragRotate($event, true);\" (mousemove)=\"dragRotateChange($event);\"><img\n        src=\"assets/editor/rotateIcon.svg\" /></div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/element/element.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/editor/element/element.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".value-label {\n  position: absolute; }\n\n.consolelog {\n  position: absolute;\n  top: 150px;\n  left: 150px;\n  background-color: black;\n  color: white;\n  width: 200px;\n  height: 200px;\n  font-size: 10px; }\n\n.drag-block {\n  min-width: 50px;\n  position: absolute; }\n\n.drag-block .image-rotate {\n    background-color: black;\n    height: 10px;\n    width: 10px;\n    position: absolute;\n    top: 20px;\n    cursor: e-resize; }\n\n.drag-block .drag-tag {\n    opacity: 0;\n    position: absolute;\n    top: -20px;\n    background-color: #f3b7eb;\n    text-transform: capitalize;\n    height: 20px;\n    background-color: #f3b7eb;\n    left: -2px;\n    min-width: 100px;\n    color: white;\n    padding: 3px;\n    padding-left: 25px; }\n\n.drag-block span {\n    cursor: text;\n    display: inline; }\n\n.element-container {\n  position: relative; }\n\n.element {\n  white-space: nowrap;\n  line-height: 1;\n  line-break: loose; }\n\n.element .del-button {\n    opacity: 0; }\n\n.element .selected, .element .true {\n    border: 1px solid black; }\n\n.side {\n  width: 10px;\n  height: 10px;\n  background-color: #a599a3;\n  position: absolute; }\n\n.side-l {\n  top: 45%;\n  left: -10px;\n  cursor: ew-resize; }\n\n.side-t {\n  top: -10px;\n  left: 45%;\n  cursor: ns-resize; }\n\n.side-r {\n  top: 45%;\n  right: -10px;\n  cursor: ew-resize; }\n\n.side-b {\n  left: 45%;\n  bottom: -10px;\n  cursor: ns-resize; }\n\n.nomouse {\n  pointer-events: none; }\n\n.corner {\n  width: 10px;\n  height: 10px;\n  background-color: #a599a3;\n  border-radius: 30px;\n  position: absolute;\n  z-index: 999; }\n\n.corner-pad {\n  position: absolute;\n  top: -20px;\n  left: -20px;\n  bottom: -20px;\n  right: -20px;\n  z-index: 1000; }\n\n.corner-lt {\n  top: -10px;\n  left: -10px; }\n\n.corner-rt {\n  top: -10px;\n  right: -10px;\n  cursor: sw-resize; }\n\n.corner-lb {\n  bottom: -10px;\n  left: -10px;\n  cursor: sw-resize; }\n\n.corner-rb {\n  bottom: -10px;\n  right: -10px;\n  cursor: nw-resize; }\n\n.selected .drag-tag, .true .drag-tag {\n  opacity: 1;\n  cursor: move; }\n\n.selected .del-button, .true .del-button {\n  opacity: 1;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 20px;\n  height: 20px;\n  color: white;\n  cursor: pointer; }\n\n.del-button:active,\n.del-button:hover {\n  opacity: 1; }\n\n.form-control {\n  height: 15px; }\n\n.position {\n  position: absolute; }\n\n.t-bar {\n  position: absolute;\n  font-size: 9px; }\n\n.t-bar input {\n    width: 50px; }\n\n.t-bar select {\n    width: 100px; }\n\n.position {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100px;\n  font-size: 9px; }\n\n.layer {\n  height: 130px;\n  background-color: white; }\n\n.layer .toolbox select, .layer .toolbox input {\n    font-size: 10px; }\n\n.layer .toolbox input {\n    width: 30px; }\n\n.layer .toolbox img {\n    float: right;\n    width: 50px;\n    height: 50px; }\n\n.layer .toolbox.active {\n    display: block; }\n\n.value-input {\n  border: none;\n  width: 50px;\n  height: 20px;\n  color: white;\n  padding: 2px;\n  background-color: black;\n  border-radius: 50px; }\n\n.rotate {\n  cursor: url(\"/assets/editor/cursors/rotate.webp\"), pointer;\n  position: absolute;\n  bottom: -60px;\n  left: 48%;\n  background: none;\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2VsZW1lbnQvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxlZGl0b3JcXGVsZW1lbnRcXGVsZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXRvci9lbGVtZW50L0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLGtCQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVTtFQUNWLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBVztFQUNYLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBSW5CO0VBNkJJLGVBQWU7RUFHZixrQkFBa0IsRUFBQTs7QUFoQ3RCO0lBR1EsdUJBQXVCO0lBQ3ZCLFlBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZSxFQUFBOztBQVJ2QjtJQVlRLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHlCQ3RCYztJRHVCZCwwQkFBMEI7SUFDMUIsWUFBVztJQUVYLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCLEVBQUE7O0FBeEIxQjtJQWtDUSxZQUFZO0lBQ1osZUFBZSxFQUFBOztBQUd2QjtFQUNBLGtCQUFrQixFQUFBOztBQUdsQjtFQUNJLG1CQUFtQjtFQUNwQixjQUFhO0VBRWIsaUJBQWlCLEVBQUE7O0FBSnBCO0lBUVksVUFBVSxFQUFBOztBQVJ0QjtJQVdRLHVCQUF1QixFQUFBOztBQVMvQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFFBQVE7RUFDUixXQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksVUFBVTtFQUNWLFNBQVM7RUFDVCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxRQUFRO0VBQ1IsWUFBVztFQUNYLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFNBQVM7RUFDVCxhQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0csb0JBQW9CLEVBQUE7O0FBR3ZCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBSWhCO0VBQ0ksa0JBQWtCO0VBRWxCLFVBQVU7RUFDVixXQUFVO0VBQ1YsYUFBWTtFQUNaLFlBQVc7RUFDWCxhQUFhLEVBQUE7O0FBTWpCO0VBQ0ksVUFBVTtFQUNWLFdBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVU7RUFDVixZQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksYUFBYTtFQUNiLFdBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxhQUFhO0VBQ2IsWUFBVztFQUNYLGlCQUFpQixFQUFBOztBQUlyQjtFQUVRLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBSHBCO0VBT1EsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBR1osWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFLdkI7O0VBR0ksVUFBVSxFQUFBOztBQUlkO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRmxCO0lBSVEsV0FBVSxFQUFBOztBQUpsQjtJQU9RLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUTtFQUNSLE9BQU07RUFDTixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUlsQjtFQUNJLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFGM0I7SUFRWSxlQUFlLEVBQUE7O0FBUjNCO0lBVWUsV0FBVyxFQUFBOztBQVYxQjtJQVlZLFlBQVk7SUFDWixXQUFXO0lBQUMsWUFBVyxFQUFBOztBQWJuQztJQWlCUSxjQUFjLEVBQUE7O0FBS3RCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksMERBQXlEO0VBQ3pELGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvZWxlbWVudC9lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc2Fzcy9fdmFyaWFibGVzJztcclxuXHJcbi52YWx1ZS1sYWJlbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuXHJcbi5jb25zb2xlbG9ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjE1MHB4O1xyXG4gICAgbGVmdDoxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmRyYWctYmxvY2tcclxueyAgICAgXHJcbiAgICAuaW1hZ2Utcm90YXRle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGhlaWdodDoxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgY3Vyc29yOmUtcmVzaXplO1xyXG4gICAgfVxyXG4gICAgLmRyYWctdGFnXHJcbiAgICB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHVycGxlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGhlaWdodDoyMHB4O1xyXG4gICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzYjdlYjtcclxuICAgICAgICBsZWZ0OiAtMnB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAvL3BhZGRpbmc6IDFweDtcclxuICAgLy8gY3Vyc29yOiBjcm9zc2hhaXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lOyAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuLmVsZW1lbnQtY29udGFpbmVye1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG59XHJcbi5lbGVtZW50e1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgbGluZS1oZWlnaHQ6MTtcclxuIFxyXG4gICBsaW5lLWJyZWFrOiBsb29zZTsgXHJcbiAgICBcclxuICAgIC5kZWwtYnV0dG9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwOyAgIFxyXG4gICAgICAgIH1cclxuICAgIC5zZWxlY3RlZCwgLnRydWV7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblxyXG5cclxuICAgICAgIFxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5zaWRle1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTU5OWEzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zaWRlLWx7XHJcbiAgICB0b3A6IDQ1JTtcclxuICAgIGxlZnQ6LTEwcHg7XHJcbiAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcclxufVxyXG4uc2lkZS10e1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGxlZnQ6IDQ1JTtcclxuICAgIGN1cnNvcjogbnMtcmVzaXplO1xyXG59XHJcbi5zaWRlLXJ7XHJcbiAgICB0b3A6IDQ1JTtcclxuICAgIHJpZ2h0Oi0xMHB4O1xyXG4gICAgY3Vyc29yOiBldy1yZXNpemU7XHJcbn1cclxuXHJcbi5zaWRlLWJ7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgICBib3R0b206LTEwcHg7XHJcbiAgICBjdXJzb3I6IG5zLXJlc2l6ZTtcclxufVxyXG5cclxuLm5vbW91c2V7XHJcbiAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uY29ybmVye1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTU5OWEzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICBcclxuICAgIHotaW5kZXg6IDk5OTsgXHJcblxyXG59XHJcblxyXG4uY29ybmVyLXBhZHsgICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxyXG4gICBcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBsZWZ0Oi0yMHB4O1xyXG4gICAgYm90dG9tOi0yMHB4O1xyXG4gICAgcmlnaHQ6LTIwcHg7ICAgIFxyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uY29ybmVyLWx0e1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGxlZnQ6LTEwcHg7XHJcbiAgICAvLyBjdXJzb3I6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoNDUsIDE2LCAxNilcIj48cGF0aCBkPVwiTTI1Ljk5IDYuMDQybC0wLjAwNCA5LjczNS0zLjczMi0zLjczMy00LjQ1NCA0LjQ1NS0yLjY2NS0yLjY2NSA0LjQ1NC00LjQ1NC0zLjM4NC0zLjM4MyA5Ljc4NSAwLjA0NXpNMTEuNDk0IDIyLjgwNWwzLjIzOCAzLjE4Mi05LjcyMiAwLjAxNyAwLjAwNC05LjY4IDMuODE1IDMuODE1IDQuOTI1LTQuOTI0IDIuNjY1IDIuNjY1LTQuOTI1IDQuOTI1elwiPjwvcGF0aD48L2c+PC9zdmc+JyksIGF1dG87XHJcbn1cclxuLmNvcm5lci1ydHtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICByaWdodDotMTBweDtcclxuICAgIGN1cnNvcjogc3ctcmVzaXplO1xyXG59XHJcblxyXG5cclxuLmNvcm5lci1sYntcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICBsZWZ0Oi0xMHB4O1xyXG4gICAgY3Vyc29yOiBzdy1yZXNpemU7XHJcbn1cclxuLmNvcm5lci1yYntcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICByaWdodDotMTBweDtcclxuICAgIGN1cnNvcjogbnctcmVzaXplO1xyXG59XHJcblxyXG5cclxuLnNlbGVjdGVkLCAudHJ1ZXtcclxuICAgIC5kcmFnLXRhZ3tcclxuICAgICAgICBvcGFjaXR5OiAxOyAgXHJcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgfVxyXG4gICAgLmRlbC1idXR0b25cclxuICAgIHsgICBcclxuICAgICAgICBvcGFjaXR5OiAxOyAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi5kZWwtYnV0dG9uOmFjdGl2ZSxcclxuLmRlbC1idXR0b246aG92ZXJcclxueyAgIFxyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIFxyXG59XHJcblxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgaGVpZ2h0OiAxNXB4OyBcclxufVxyXG4ucG9zaXRpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnQtYmFye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDo1MHB4O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuLnBvc2l0aW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxufVxyXG4gXHJcblxyXG4ubGF5ZXJ7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIC50b29sYm94XHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2VsZWN0LCBpbnB1dHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7d2lkdGg6IDMwcHg7fVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtoZWlnaHQ6NTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudG9vbGJveC5hY3RpdmV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbi52YWx1ZS1pbnB1dHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzoycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuIFxyXG4ucm90YXRle1xyXG4gICAgY3Vyc29yOiB1cmwoJy9hc3NldHMvZWRpdG9yL2N1cnNvcnMvcm90YXRlLndlYnAnKSxwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtNjBweDtcclxuICAgIGxlZnQ6IDQ4JTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuIiwiXHJcbiRjb2xvci1ncmF5OiAjZTNlNGU1O1xyXG4kY29sb3ItZGFya2JsdWUxOiAjMTYyNDMzO1xyXG4kY29sb3ItZGFya2JsdWUyOiAjMmE0NTYzO1xyXG4kY29sb3ItbGlnaHRibHVlMTogIzI2NDM1NjtcclxuJGNvbG9yLWxpZ2h0Ymx1ZTI6ICMzYzczOTk7XHJcbiRjb2xvci1vcmFuZ2U6ICNmYzY2MDA7XHJcbiRjb2xvci1jeWFuOiAjMDBmZmY2O1xyXG4kY29sb3Itc2NyZWVuOiAjMDBjZmZmO1xyXG4kY29sb3Itc2NyZWVuLWdyb3VwOiAjMDBmZmY2O1xyXG4kY29sb3ItbGlicmFyeTogIzk2ZmYwMDtcclxuJGNvbG9yLXllbGxvdzogI2ZmZmYwMDtcclxuJGNvbG9yLXB1cnBsZTogI2YzYjdlYjtcclxuJGNvbG9yLWdyZWVuOiAjOTZmZjAwO1xyXG4kY29sb3ItYmxhY2s6ICMyMjI7XHJcbiRjb2xvci1ncmF5d2hpdGU6ICNGRkU7XHJcbiRjb2xvci10b29sYmFyOiAjZjhmOWZhO1xyXG4gXHJcblxyXG4gXHJcblxyXG4gIl19 */"

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
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");
/* harmony import */ var youtube_thumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! youtube-thumbnail */ "./node_modules/youtube-thumbnail/index.js");
/* harmony import */ var youtube_thumbnail__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(youtube_thumbnail__WEBPACK_IMPORTED_MODULE_4__);





var ElementComponent = /** @class */ (function () {
    function ElementComponent(_ngZone, selectionService, sanitizer, dirtyService, renderer) {
        var _this = this;
        this._ngZone = _ngZone;
        this.selectionService = selectionService;
        this.sanitizer = sanitizer;
        this.dirtyService = dirtyService;
        this.renderer = renderer;
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.transform = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.zIndex = 0;
        this.inBounds = true;
        this.dragActive = true;
        this.rotateActive = false;
        this.edge = {
            top: true,
            bottom: true,
            left: true,
            right: true
        };
        this.lastclientX = 0;
        this.coners = {
            'lt': 90,
            'rt': 0,
            'lb': 0,
            'rb': 90,
            't': 135,
            'b': 135,
            'l': 45,
            'r': 45,
        };
        this.activeResizeHandle = '';
        this.selectionService.onResetDrag.subscribe(function (element) {
            _this.dragActive = true;
            _this.activeResizeHandle = null;
        });
        this.selectionService.selectElement.subscribe(function (element) {
            _this.isSelected = (_this.element === element);
            // if (!this.isSelected) {
            //   this.zIndex = this.element.zIndex;
            // }
        });
    }
    ElementComponent.prototype.ngOnChanges = function (changes) {
        var style = getComputedStyle(this.blockElement.nativeElement);
        // this.element.width = Number(style.width.replace('px', ''));
        // this.element.height = Number(style.height.replace('px', ''));
        this.zIndex = this.element.zIndex;
        this.position = this.element.position;
        if (this.element.type === 'video') {
            var yimage = youtube_thumbnail__WEBPACK_IMPORTED_MODULE_4__("https://www.youtube.com/watch?v=" + this.element.embed);
            this.videoPreview = yimage.medium.url;
            // this.embed.nativeElement.innerHTML = '<div id="playerEmbedInner"></div>';
            // this.ytPlayer = YouTubePlayer('playerEmbedInner', {
            //   width: this.element.width,
            //   height: this.element.height,
            // });
            // // 'loadVideoById' is queued until the player is ready to receive API calls.
            // this.ytPlayer.loadVideoById(this.element.embed);
            // this.ytPlayer.stopVideo();
        }
    };
    ElementComponent.prototype.cursor = function (event, angle, corner) {
        var finalAngle = angle + this.coners[corner];
        console.log('finalAngle', finalAngle);
        var svg = "data:image/svg+xml;utf8,<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><g transform=\"rotate(" + finalAngle + " 16 16)\"><path d=\"M25.99 6.042l-0.004 9.735-3.732-3.733-4.454 4.455-2.665-2.665 4.454-4.454-3.384-3.383 9.785 0.045zM11.494 22.805l3.238 3.182-9.722 0.017 0.004-9.68 3.815 3.815 4.925-4.924 2.665 2.665-4.925 4.925z\"></path></g></svg>";
        event.target.style.cursor = "url('" + svg + "') -16 -16, auto";
    };
    ElementComponent.prototype.resizeMaybe = function (event) {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.activeResizeHandle) {
                    switch (this.activeResizeHandle) {
                        case 'lb':
                            if (!this.constraint) {
                                this.element.height += event.movementY;
                            }
                            else {
                                this.element.height += event.movementX;
                            }
                            this.element.position.x += event.movementX;
                            this.blockElement.nativeElement.style.left = this.element.position.x + 'px';
                            this.element.width += -event.movementX;
                            this.blockElement.nativeElement.style.height = this.element.height + 'px';
                            this.blockElement.nativeElement.style.width = this.element.width + 'px';
                            break;
                        case 'rb':
                            if (!this.constraint) {
                                this.element.height += event.movementY;
                            }
                            else {
                                this.element.height += event.movementX;
                            }
                            this.element.width += event.movementX;
                            this.blockElement.nativeElement.style.height = this.element.height + 'px';
                            this.blockElement.nativeElement.style.width = this.element.width + 'px';
                            break;
                        case 't':
                            this.element.position.y += event.movementY;
                            this.blockElement.nativeElement.style.top = this.element.position.y + 'px';
                            this.element.height += -event.movementY;
                            this.blockElement.nativeElement.style.height = this.element.height + 'px';
                            break;
                        case 'b':
                            this.element.height += event.movementY;
                            this.blockElement.nativeElement.style.height = this.element.height + 'px';
                            break;
                        case 'r':
                            this.element.width += event.movementX;
                            this.blockElement.nativeElement.style.width = this.element.width + 'px';
                            break;
                        case 'l':
                            this.element.position.x += event.movementX;
                            this.blockElement.nativeElement.style.left = this.element.position.x + 'px';
                            this.element.width += -event.movementX;
                            this.blockElement.nativeElement.style.width = this.element.width + 'px';
                            break;
                    }
                    this.changed.emit(this.element);
                }
                return [2 /*return*/];
            });
        }); });
    };
    ElementComponent.prototype.resizeStart = function (event, corner) {
        this.activePadElement = event.currentTarget;
        this.activePadElement.style.width = '100px';
        this.activePadElement.style.height = '100px';
        // this.dragActive = false;
        event.preventDefault();
        event.stopPropagation();
        this.activeResizeHandle = corner;
        this.constraint = event.shiftKey;
    };
    ElementComponent.prototype.resizeStop = function () {
        this.dragActive = true;
        this.activeResizeHandle = null;
        if (this.activePadElement) {
            this.activePadElement.style.width = '50px';
            this.activePadElement.style.height = '50px';
        }
    };
    ElementComponent.prototype.updateComplete = function (textElement) {
        clearTimeout(this.updateTimeout);
    };
    ElementComponent.prototype.paint = function () {
    };
    ElementComponent.prototype.ngOnInit = function () {
        if (this.element) {
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
            this.isSelected = this.element.isSelected;
        }
    };
    ElementComponent.prototype.remove = function (element) {
        this.selectionService.remove(element);
        this.dirtyService.detectChanges();
        this.removed.emit(element);
    };
    ElementComponent.prototype.dragRotateChange = function (event) {
    };
    ElementComponent.prototype.dragRotate = function (event, off) {
        var _this = this;
        var listener;
        var killer;
        if (off) {
            this.dirtyService.setDirty();
            killer = this.renderer.listen('document', 'mouseup', function (e) {
                _this.rotateActive = false;
                _this.transform.emit({ action: 'off', value: 0 });
                _this.dragActive = true;
            });
            listener = this.renderer.listen('document', 'mousemove', function (e) {
                if (_this.element) {
                    if (_this.rotateActive && e.movementX !== 0) {
                        if (!_this.element.rotation) {
                            _this.element.rotation = 0;
                        }
                        // get mouse x movement
                        var val = _this.lastclientX - e.clientX;
                        //  console.log('valx', this.lastclientX, e.movementX);
                        if (val === 0) {
                            return;
                        }
                        _this.lastclientX = e.clientX;
                        var rotation = _this.element.rotation - e.movementX;
                        if (rotation > 360) {
                            rotation = 0; // rotation % 360;
                        }
                        if (rotation < -360) {
                            // rotation = -(rotation % 360);
                            rotation = 0;
                        }
                        // console.log('rotationx', rotation);
                        _this.element.rotation = rotation;
                    }
                }
            });
            this.lastclientX = event.clientX;
            this.transform.emit({ action: 'rotate', value: this.lastclientX });
            this.dragActive = false;
            this.rotateActive = true;
        }
        else {
            this.transform.emit({ action: 'off', value: 0 });
            this.dragActive = true;
            this.rotateActive = false;
            if (listener) {
                listener();
            }
            if (killer) {
                killer();
            }
        }
        event.stopPropagation();
        event.preventDefault();
    };
    ElementComponent.prototype.setDimensions = function (event) {
        if (!this.element.width) {
            this.element.width = event.target.width;
            this.element.widthOriginal = event.target.width;
        }
        if (!this.element.height) {
            this.element.height = event.target.height;
            this.element.heightOriginal = event.target.height;
        }
    };
    ElementComponent.prototype.focus = function (event, element) {
        var style = getComputedStyle(event.currentTarget, null);
        if (!this.element.width) {
            this.element.width = Math.round(Number(style.width.replace('px', '')));
            this.element.height = Math.round(Number(style.height.replace('px', '')));
        }
        this.isSelected = true;
        if (!this.element.rotation) {
            this.element.rotation = 0;
        }
        // this.selected.emit(element);
        this.selectionService.focus(event, element);
        event.stopPropagation();
    };
    ElementComponent.prototype.compareFn = function (a, b) {
        if (b) {
            return a.id === b.id;
        }
    };
    ElementComponent.prototype.onMoving = function (event) {
        this.element.position = event;
        this.dirtyService.detectChanges();
    };
    ElementComponent.prototype.onMoveEnd = function (event) {
        this.position = this.element.position;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ElementComponent.prototype, "transform", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ElementComponent.prototype, "changed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('thumbCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], ElementComponent.prototype, "thumbCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dragblock'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ElementComponent.prototype, "dragblock", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('embed'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ElementComponent.prototype, "embed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('block'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ElementComponent.prototype, "blockElement", void 0);
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
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_3__["DirtyService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
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
        this.user_id = userService.getUser()._id;
    }
    FontsService.prototype.getFonts = function () {
        return this.fonts;
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
                                if (!_this.loadedFonts[item]) {
                                    finalFontsForLoad.push(item);
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
                                    families: finalFontsForLoad
                                }
                            });
                        }
                        else {
                            return resolve(_this.fonts);
                        }
                    })];
            });
        });
    };
    FontsService.prototype.loadLocalFonts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var finalFontsForLoad;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["Font"].query('Font', {})];
                                case 1:
                                    finalFontsForLoad = (_a.sent()).map(function (item) { return ({ 'name': item.Name }); });
                                    document.getElementById('api_css_placeholder').setAttribute('href', "/api/css/" + this.user_id);
                                    resolve(finalFontsForLoad);
                                    return [2 /*return*/];
                            }
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
                        // if (this.fonts.length > 0) {
                        //   return resolve(this.fonts);
                        // }
                        _this.http.get(url).subscribe(function (data) {
                            _this.fonts = data.items.map(function (font) {
                                return font;
                            });
                            if (lng) {
                                _this.fonts = _this.fonts.filter(function (font) {
                                    return font.subsets.indexOf(lng.subset) > -1;
                                });
                            }
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

/***/ "./src/app/editor/fonts/fonts.component.html":
/*!***************************************************!*\
  !*** ./src/app/editor/fonts/fonts.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n\r\n    <div class=\"search input-group\">\r\n\r\n        <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">{{'PANEL.FONT_SEARCH' | translate}}</span>\r\n        </div>\r\n\r\n        <input type=\"text\" [(ngModel)]=\"searchTerm\" name=\"searchTerm\" class=\"searchTerm form-control\">\r\n\r\n        <div class=\"input-group-prepend\">\r\n            <div ngbDropdown class=\"language-menu\">\r\n                <button class=\"btn btn-default btn-white\" ngbDropdownToggle>{{selectedLanguage.name}}</button>\r\n                <div ngbDropdownMenu>\r\n                    <button *ngFor=\"let lng of languages\" class=\"dropdown-item\"\r\n                        (click)=\"filterLanguage(lng)\">{{lng.name}}</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"input-group-append\">\r\n            <button type=\"submit\" class=\"searchButton\">\r\n                <em class=\"icon-search\"></em>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\" style=\"height: 350px;\">\r\n\r\n\r\n    <ul class=\"source-selector\">\r\n        <li><label><input type=\"radio\" name=\"fontSource\" value=\"google\" (click)=\"loadFonts($event)\"\r\n            [(ngModel)]=\"fontSource\" /> Google</label>\r\n        </li>\r\n        <li><label><input type=\"radio\" name=\"fontSource\" value=\"local\" (click)=\"loadFonts($event)\"\r\n            [(ngModel)]=\"fontSource\" /> Local</label>  </li>\r\n    </ul>\r\n\r\n\r\n    <div class=\"font-scroll\" detect-scroll (onScroll)=\"handleScroll($event)\">\r\n        <ul *ngIf=\"fonts\">\r\n            <li *ngFor=\"let font of fonts | filter : searchTerm\" [ngStyle]=\"{'font-family':font.name}\"\r\n                (click)=\"applyFont(font)\">{{font.name}}\r\n                <i *ngIf=\"font.selected\" class=\"icon-check\"></i>\r\n            </li>\r\n        </ul>\r\n\r\n\r\n\r\n    </div>\r\n    <div *ngIf=\"font\" class=\"right-col\">\r\n\r\n        <div class=\"fontbar\">\r\n            <div class=\"first\">{{font.name}}</div>\r\n            <div class=\"second\">\r\n                <button class=\"btn btn-primary btn-md\" *ngIf=\"!font.selected\" (click)=\"addToSlide(font)\"\r\n                    title=\"{{'PANEL.PICK' | translate}}\"><i class=\"icon-plus-square\"></i></button>\r\n                <button class=\"btn btn-danger btn-md\" *ngIf=\"font.selected\" (click)=\"removeFromSlide(font)\"\r\n                    title=\"{{'PANEL.REMOVE' | translate}}\"><i class=\"icon-trash-o\"></i></button>\r\n            </div>\r\n        </div>\r\n\r\n        <div [ngStyle]=\"{'font-family': '\\'' + font.name +'\\'' , 'font-size.px':previewFontSize}\" class=\"font-Preview\">\r\n\r\n\r\n            {{text}}\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"previewFontSize\">{{ \"PANEL.FONTSIZE\" | translate }}:</label>\r\n            {{previewFontSize }}\r\n            <ng5-slider [detectChanges]=\"true\" [(value)]=\"previewFontSize\" [options]=\"sliderOptions\"></ng5-slider>\r\n            <small id=\"fontSize\" class=\"form-text text-muted\">{{ \"PANEL.FONTSIZE_HELP\" | translate }}</small>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-Preview\">\r\n        <!-- <textarea [(ngModel)]=\"text\" class=\"font-text\"></textarea> -->\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/editor/fonts/fonts.component.scss":
/*!***************************************************!*\
  !*** ./src/app/editor/fonts/fonts.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font-scroll {\n  width: 50%;\n  height: 250px;\n  overflow-y: auto;\n  float: left;\n  font-size: 16px;\n  border: 1px solid gray;\n  padding: 2px; }\n\n.font-Preview {\n  padding: 10px;\n  width: 100%;\n  height: 150px;\n  overflow-y: auto; }\n\n.fontbar {\n  clear: both;\n  margin: 0;\n  padding: 0;\n  text-decoration: underline;\n  height: 25px;\n  width: 300px; }\n\n.fontbar div.first {\n    width: 200px;\n    float: right; }\n\n.fontbar div.second {\n    width: 100px;\n    float: left; }\n\n.right-col {\n  width: 350px;\n  height: 250px;\n  float: right;\n  padding: 2px; }\n\n.ng5-slider {\n  width: 300px; }\n\n.search {\n  width: 90%;\n  position: relative; }\n\n.searchTerm {\n  border: 1px solid #666;\n  height: 40px;\n  width: 65%;\n  padding: 5px;\n  outline: none; }\n\n.source-selector {\n  width: 50%;\n  height: 30px;\n  clear: both; }\n\n.source-selector li {\n    float: left; }\n\n.source-selector li label {\n      padding: 5px;\n      font-size: 14px; }\n\n.source-selector li label input {\n        margin: 5px; }\n\n.searchButton {\n  position: absolute;\n  right: -50px;\n  width: 40px;\n  height: 36px;\n  border: 1px solid #00B4CC;\n  background: #00B4CC;\n  text-align: center;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 20px; }\n\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 5px 5px;\n  border-bottom: 1px solid #e9ecef; }\n\n.font-text {\n  border: none;\n  border-top: 1px solid #e9ecef;\n  border-bottom: 1px solid #e9ecef;\n  width: 400px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2ZvbnRzL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcZWRpdG9yXFxmb250c1xcZm9udHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBR2Q7RUFFRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFOZDtJQVFNLFlBQVk7SUFDWixZQUFZLEVBQUE7O0FBVGxCO0lBWU0sWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFJakI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFFWixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFVO0VBQ1Ysa0JBQ0YsRUFBQTs7QUFFQTtFQUNJLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2pCO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBSGI7SUFLTSxXQUFXLEVBQUE7O0FBTGpCO01BT1EsWUFBWTtNQUNaLGVBQWUsRUFBQTs7QUFSdkI7UUFVVSxXQUFXLEVBQUE7O0FBU3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsZ0NBQWdDLEVBQUE7O0FBTWhDO0VBQ0UsWUFBVztFQUNYLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUVaLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9mb250cy9mb250cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5mb250LXNjcm9sbHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDE2cHg7ICBcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuLmZvbnQtUHJldmlld3tcclxuIFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvOyAgXHJcbiAgXHJcbn1cclxuXHJcbi5mb250YmFye1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAgIFxyXG4gIGhlaWdodDogMjVweDsgXHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZGl2LmZpcnN0e1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIGRpdi5zZWNvbmR7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgXHJcbiAgICB9XHJcbn1cclxuLnJpZ2h0LWNvbHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgXHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4ubmc1LXNsaWRlcntcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5zZWFyY2hUZXJtIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XHJcbiAgICBoZWlnaHQ6IDQwcHg7IFxyXG4gICAgd2lkdGg6IDY1JTsgIFxyXG4gICAgcGFkZGluZzogNXB4OyAgIFxyXG4gICAgb3V0bGluZTogbm9uZTsgXHJcbn1cclxuIFxyXG4uc291cmNlLXNlbGVjdG9ye1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gICAgbGkge1xyXG4gICAgICBmbG9hdDogbGVmdDsgICAgIFxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLnNlYXJjaEJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyAgXHJcbiAgcmlnaHQ6IC01MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCNENDO1xyXG4gIGJhY2tncm91bmQ6ICMwMEI0Q0M7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIFxyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgLmZvbnQtdGV4dHtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICBcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH0iXX0= */"

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
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");






var FontsSelectComponent = /** @class */ (function () {
    function FontsSelectComponent(_ngZone, sanitizer, fontsService, bsModalRef, languageService) {
        this._ngZone = _ngZone;
        this.sanitizer = sanitizer;
        this.fontsService = fontsService;
        this.bsModalRef = bsModalRef;
        this.languageService = languageService;
        this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
            ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi' +
            ' ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ' +
            'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
            'mollit anim id est laborum.';
        this.list = [];
        this.previewFontSize = 14;
        this.loadCounter = 0;
        this.fontSource = 'google';
        this.languages = [];
        this.sliderOptions = {
            floor: 0,
            ceil: 250
        };
    }
    FontsSelectComponent.prototype.filterLanguage = function (language) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.selectedLanguage = language;
                        _a = this;
                        return [4 /*yield*/, this.fontsService.loadFontsForLanguage(language)];
                    case 1:
                        _a.fonts = (_b.sent()).map(function (item) {
                            return {
                                name: item.family,
                                selected: _this.selectedFonts && _this.selectedFonts.indexOf(item) > -1,
                            };
                        });
                        return [4 /*yield*/, this.fontsService.loadFontsForRender(this.fonts.slice(0, 10).map(function (item) { return item.name; }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FontsSelectComponent.prototype.loadFonts = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(event.currentTarget.value === 'google')) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.fontsService.loadFontsForLanguage()];
                    case 1:
                        _a.fonts = _c.sent();
                        this.fonts = this.fonts.map(function (item) {
                            return {
                                name: item.family,
                                selected: _this.selectedFonts && _this.selectedFonts.indexOf(item) > -1,
                            };
                        });
                        return [4 /*yield*/, this.fontsService.loadFontsForRender(this.fonts.slice(this.loadCounter, 30).map(function (item) { return item.name; }))];
                    case 2:
                        _c.sent();
                        this.loadCounter += 30;
                        this.font = this.fonts[0];
                        return [3 /*break*/, 5];
                    case 3:
                        _b = this;
                        return [4 /*yield*/, this.fontsService.loadLocalFonts()];
                    case 4:
                        _b.fonts = _c.sent();
                        this.fonts = this.fonts.map(function (item) {
                            return {
                                name: item.name,
                                selected: _this.selectedFonts && _this.selectedFonts.indexOf(item.name) > -1,
                            };
                        });
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FontsSelectComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.languages = this.languageService.languages;
                        this.selectedLanguage = this.languageService.getLanguage();
                        _a = this;
                        return [4 /*yield*/, this.fontsService.loadFontsForLanguage()];
                    case 1:
                        _a.fonts = _b.sent();
                        this.fonts = this.fonts.map(function (item) {
                            return {
                                name: item.family,
                                selected: _this.selectedFonts && _this.selectedFonts.indexOf(item) > -1,
                            };
                        });
                        return [4 /*yield*/, this.fontsService.loadFontsForRender(this.fonts.slice(this.loadCounter, 30).map(function (item) { return item.name; }))];
                    case 2:
                        _b.sent();
                        this.loadCounter += 30;
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
    FontsSelectComponent.prototype.handleScroll = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loadCounter < this.fonts.length)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fontsService.loadFontsForRender(this.fonts.slice(this.loadCounter, this.loadCounter + 30).map(function (item) { return item.name; }))];
                    case 1:
                        _a.sent();
                        this.loadCounter += 30;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    FontsSelectComponent.prototype.applyFont = function (font) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(this.fontSource === 'google')) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.fontsService.loadFontsForRender([font.name])];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2:
                                this.font = font;
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
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
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"], _services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]])
    ], FontsSelectComponent);
    return FontsSelectComponent;
}());



/***/ }),

/***/ "./src/app/editor/panel-horizontal/panel-horizontal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/editor/panel-horizontal/panel-horizontal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-toolbar\">\r\n\r\n    <div *ngIf=\"!element\">\r\n\r\n        <div class=\"input-group bar-padding\" style=\"position:relative;\" title=\"{{'PANEL.BACK_COLOR' | translate}}\">\r\n            <div class=\"input-group-prepend bar-height\">\r\n                <span class=\"input-group-text label-color\"> <i class=\"icon-paint-brush\"\r\n                        (click)=\"toggels.bgColor =!toggels.bgColor\"></i></span>\r\n            </div>\r\n            <input [(colorPicker)]=\"editor.bgColor\" [detectChanges]=\"true\" (colorPickerChange)=\"setBgColor($event)\"\r\n                [cpPosition]=\"'bottom'\" class=\"color-picker form-control form-control-sm bar-height\"\r\n                [style.background]=\"editor.bgColor\" [cpAlphaChannel]=\"'always'\" [cpPresetColors]=\"editor.colors\"\r\n                [cpOKButton]=\"true\" (cpPresetColorsChange)=\"updateColors($event)\" [cpAddColorButton]=\"true\"\r\n                [(cpToggle)]=\"toggels.bgColor\" />\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div *ngIf=\"element\" class=\"full-width\">\r\n\r\n\r\n        <ul class=\"toolbar\">\r\n            <li class=\"w120 btn-cond\">\r\n                <div ngbDropdown class=\"align-menu\" [autoClose]=\"true\">\r\n                    <div class=\"btn btn-default btn-white pixelTop\" ngbDropdownToggle> {{\"PANEL.POSITION\" | translate}}\r\n                    </div>\r\n                    <div ngbDropdownMenu>\r\n\r\n                        <button class=\"dropdown-item\" (click)=\"moveElement($event, 'front', 0)\"><span\r\n                                class=\"icon-level-up\"></span> {{\"PANEL.POSITION_OPTIONS.FRONT\" | translate}}</button>\r\n                        <button class=\"dropdown-item\" (click)=\"moveElement($event, 'front', 1)\"><span\r\n                                class=\"icon-level-up\"></span> {{\"PANEL.POSITION_OPTIONS.FORWARD\" | translate}}</button>\r\n\r\n\r\n                        <button class=\"dropdown-item\" (click)=\"moveElement($event, 'back', 0)\"><span\r\n                                class=\"icon-level-down\"></span> {{\"PANEL.POSITION_OPTIONS.BACK\" | translate}}</button>\r\n                        <button class=\"dropdown-item\" (click)=\"moveElement($event, 'back', 1)\"><span\r\n                                class=\"icon-level-down\"></span>\r\n                            {{\"PANEL.POSITION_OPTIONS.BACKWARD\" | translate}}</button>\r\n\r\n                        <hr />\r\n                        <div *ngIf=\"element.type==='text'\">\r\n                            <button class=\"dropdown-item\" (click)=\"align('left')\"><span\r\n                                    class=\"icon-paragraph-left\"></span>\r\n                                {{\"PANEL.POSITION_OPTIONS.LEFT\" | translate}}</button>\r\n                            <button class=\"dropdown-item\" (click)=\"align('center')\"><span\r\n                                    class=\"icon-paragraph-center\"></span>\r\n                                {{\"PANEL.POSITION_OPTIONS.CENTER\" | translate}}</button>\r\n                            <button class=\"dropdown-item\" (click)=\"align('right')\"><span\r\n                                    class=\"icon-paragraph-right\"></span>\r\n                                {{\"PANEL.POSITION_OPTIONS.RIGHT\" | translate}}</button>\r\n                            <button class=\"dropdown-item\" (click)=\"align('bottom')\"><span class=\"icon-menu3\"></span>\r\n                                {{\"PANEL.POSITION_OPTIONS.BOTTOM\" | translate}}</button>\r\n                            <button class=\"dropdown-item\" (click)=\"align('top')\"><span class=\"icon-menu4\"></span>\r\n                                {{\"PANEL.POSITION_OPTIONS.TOP\" | translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"btn-group\" *ngIf=\"element.type==='text'\">\r\n                <div class=\"input-group bar-padding\" style=\"position:relative;\"\r\n                    title=\"{{'PANEL.FORE_COLOR' | translate}}\">\r\n                    <div class=\"input-group-prepend bar-height\">\r\n                        <span class=\"input-group-text label-color\"> <i class=\"icon-text-color\"\r\n                                (click)=\"toggels.color =!toggels.color\"></i></span>\r\n                    </div>\r\n\r\n\r\n                    <input *ngIf=\"element\" [(colorPicker)]=\"element.color\" [detectChanges]=\"true\"\r\n                        (colorPickerChange)=\"setColor($event)\" [cpPosition]=\"'bottom'\"\r\n                        class=\"color-picker form-control form-control-sm bar-height\" [cpAlphaChannel]=\"'always'\"\r\n                        [style.background]=\"editor.color\" [(cpToggle)]=\"toggels.color\" [cpPresetColors]=\"editor.colors\"\r\n                        [cpOKButton]=\"true\" (cpPresetColorsChange)=\"updateColors($event)\" [cpAddColorButton]=\"true\" />\r\n                </div>\r\n\r\n            </li>\r\n            <li class=\"w90\" *ngIf=\"element.type==='text'\">\r\n                <div class=\"input-group  bar-height\" title=\"{{ 'PANEL.FONTSIZE' | translate }}\">\r\n                    <div class=\"input-group-prepend \">\r\n                        <button class=\"btn label-color btn-cond  bar-height\" type=\"button\"\r\n                            (click)=\"toggels.fontsize =!toggels.fontsize\"><i class=\"icon-font-size\"></i></button>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control form-control-sm bar-height\" [(ngModel)]=\"element.fontSize\">\r\n                    <div class=\"form-group pad4 left small-sliders slider-pop\" [hidden]=\"!toggels.fontsize\">\r\n                        <div class=\"width\" *ngIf=\"element.fontSize\">\r\n                            <ng5-slider [detectChanges]=\"true\" [(value)]=\"element.fontSize\" [options]=\"sliderOptions\">\r\n                            </ng5-slider>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n\r\n            <li class=\"btn-group bar-padding w180\" *ngIf=\"element.type==='text'\">\r\n                <div class=\"input-group   bar-height\" title=\"{{ 'PANEL.FONTNAME' | translate }}\">\r\n                    <div class=\"input-group-prepend bar-height\">\r\n                        <button class=\"btn label-color btn-cond\" type=\"button\"\r\n                            (click)=\"openModalWithComponent()\">{{ \"PANEL.PICK\" | translate }}</button>\r\n                    </div>\r\n                    <select [detectChanges]=\"true\" [ngStyle]=\"{'font-family':element.font, 'font-size.px': 20}\"\r\n                        class=\"form-control fontbox form-control-sm bar-height\" name=\"fontNameTxt\"\r\n                        [(ngModel)]=\"element.font\" (change)=\"selectFont($event)\">\r\n                        <option *ngFor=\"let c of editor.fonts\" [ngValue]=\"c\" [ngStyle]=\"{'font-family': c}\">{{c}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </li>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <li class=\"w120 input-group  bar-height btn-cond\" *ngIf=\"element.type==='image'\">\r\n                <div class=\"input-group-prepend bar-height\">\r\n                    <span for=\"position_x\" class=\"input-group-text\">{{ \"PANEL.POSITIONX\" | translate }}:</span>\r\n                </div>\r\n                <input type=\"number\" class=\"form-control no form-control-sm bar-height input-width\" name=\"position_x\"\r\n                    (change)=\"detect($event)\" [detectChanges]=\"true\" [(ngModel)]=\"element.position.x\" />\r\n            </li>\r\n            <li class=\"w120 input-group  bar-height btn-cond\" *ngIf=\"element.type==='image'\">\r\n                <div class=\"input-group-prepend bar-height no\">\r\n                    <span for=\"position_y\" class=\"input-group-text no\">{{ \"PANEL.POSITIONY\" | translate }}:</span>\r\n                </div>\r\n                <input type=\"number\" class=\"form-control no form-control-sm bar-height input-width\" name=\"position_y\"\r\n                    (change)=\"detect($event)\" [detectChanges]=\"true\" [(ngModel)]=\"element.position.y\" />\r\n            </li>\r\n            <li class=\"w120 input-group  bar-height btn-cond\" *ngIf=\"element.type==='image'\">\r\n                <div class=\"input-group-prepend bar-height no\">\r\n                    <span for=\"rotation\" class=\"input-group-text no\"><span class=\"icon-rotate_right\"></span></span>\r\n                </div>\r\n                <input type=\"number\" class=\"form-control end form-control-sm bar-height input-width\" name=\"rotation\"\r\n                    (change)=\"detect($event)\" [detectChanges]=\"true\" [(ngModel)]=\"element.rotation\" />\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"btn-group\">\r\n        <!-- <div class=\"input-group bar-padding\" style=\"position:relative;\" title=\"{{'PANEL.FORE_COLOR' | translate}}\">\r\n            <div class=\"input-group-prepend bar-height\">\r\n                <span class=\"input-group-text\"> <i class=\"icon-text-color\"\r\n                        (click)=\"toggels.color =!toggels.color\"></i></span>\r\n            </div>\r\n            <input *ngIf=\"!element\" [(colorPicker)]=\"editor.color\" [detectChanges]=\"true\"\r\n                (colorPickerChange)=\"setColor($event)\" [cpPosition]=\"'bottom'\"\r\n                class=\"color-picker form-control form-control-sm bar-height\" [cpAlphaChannel]=\"'always'\"\r\n                [style.background]=\"editor.color\" [(cpToggle)]=\"toggels.color\" [cpPresetColors]=\"editor.colors\"\r\n                [cpOKButton]=\"true\" (cpPresetColorsChange)=\"updateColors($event)\" [cpAddColorButton]=\"true\" />\r\n\r\n\r\n\r\n            <input *ngIf=\"element\" [(colorPicker)]=\"element.color\" [detectChanges]=\"true\"\r\n                (colorPickerChange)=\"setColor($event)\" [cpPosition]=\"'bottom'\"\r\n                class=\"color-picker form-control form-control-sm bar-height\" [cpAlphaChannel]=\"'always'\"\r\n                [style.background]=\"editor.color\" [(cpToggle)]=\"toggels.color\" [cpPresetColors]=\"editor.colors\"\r\n                [cpOKButton]=\"true\" (cpPresetColorsChange)=\"updateColors($event)\" [cpAddColorButton]=\"true\" />\r\n        </div> -->\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"element-bar library-cat\" *ngIf=\"element==='xxx'\">\r\n        <div class=\"btn-group bar-padding\">\r\n            <div class=\"input-group bar-height\">\r\n                <div class=\"input-group-prepend bar-height\" title=\"{{ 'PANEL.DEPTH' | translate }}\">\r\n                    <div class=\"input-group-text btn-md bar-height\" style=\"width: 45px;text-align: center;\"\r\n                        title=\"{{'PANEL.ZPOSITION' | translate}}\">{{element.zIndex}}</div>\r\n                    <div class=\"btn-group\">\r\n                        <button (click)=\"moveIndex(-1)\" class=\"btn btn-secondary btn-md no bar-height\"\r\n                            title=\"{{'PANEL.MOVEFRONT' | translate}}\"><i class=\"icon-level-down\"></i></button>\r\n                        <button (click)=\"moveIndex(1)\" class=\"btn btn-secondary btn-md no bar-height\"\r\n                            title=\"{{'PANEL.MOVEBACK' | translate}}\"><i class=\"icon-level-up\"></i></button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"btn-group bar-padding\" *ngIf=\"element && element.type==='image'\">\r\n            <div class=\"input-group  bar-height\">\r\n                <div class=\"input-group-prepend bar-height\" title=\"{{ 'PANEL.IMAGE_RESET' | translate }}\">\r\n                    <div class=\"input-group-text\">\r\n                        <button class=\"btn btn-white btn-md\" (click)=\"fitDimensions()\"><span\r\n                                class=\"icon-enlarge\"></span></button>\r\n                    </div>\r\n                    <div class=\"input-group-text\">\r\n                        <button class=\"btn btn-white btn-md\" (click)=\"resetDimensions()\"><span\r\n                                class=\"icon-loop\"></span></button>\r\n                    </div>\r\n                    <div class=\"input-group-text\">\r\n                        <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"constraint\"\r\n                            *ngIf=\"element && element.type==='image'\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"input-group-prepend\" style=\"width:65px;\">\r\n\r\n                </div>\r\n\r\n\r\n                <div class=\"input-group  bar-height\">\r\n                    <div class=\"input-group-prepend bar-height\">\r\n                        <span for=\"element_height\"\r\n                            class=\"input-group-text\">{{ \"PANEL.IMAGE_HEIGHT\" | translate }}:</span>\r\n                    </div>\r\n                    <input style=\"width:65px;\" class=\"form-control form-control-sm bar-height\" type=\"text\"\r\n                        [(ngModel)]=\"element.height\" (ngModelChange)=\"onUserChange($event, 'height')\"\r\n                        [ngModelOptions]=\"{updateOn: 'blur'}\">\r\n\r\n                </div>\r\n\r\n                <div class=\"input-group  bar-height\">\r\n                    <div class=\"input-group-prepend bar-height\">\r\n                        <span for=\"element_height\"\r\n                            class=\"input-group-text\">{{ \"PANEL.IMAGE_WIDTH\" | translate }}:</span>\r\n                    </div>\r\n                    <input style=\"width:65px;\" class=\"form-control form-control-sm bar-height\" type=\"text\"\r\n                        (ngModelChange)=\"onUserChange($event, 'width')\" [(ngModel)]=\"element.width\"\r\n                        [ngModelOptions]=\"{updateOn: 'blur'}\">\r\n                </div>\r\n\r\n\r\n                <!-- <div class=\"form-group pad4 left small-sliders\" style=\"width:100px;\">\r\n                    <ng5-slider (userChange)=\"onUserChange($event, 'height')\" [(value)]=\"element.height\" [options]=\"sliderImageOptions\"></ng5-slider>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"btn-group bar-padding\" *ngIf=\"element && element.type==='image'\">\r\n            <div class=\"input-group  bar-height\" title=\"{{ 'PANEL.IMAGE_OPACITY' | translate }}\">\r\n                <div class=\"input-group-prepend\" style=\"width:65px;\">\r\n                    <input class=\"form-control form-control-sm bar-height\" type=\"text\" [(ngModel)]=\"element.opacity\">\r\n                </div>\r\n                <div class=\"form-group pad4 left small-sliders\" style=\"width:100px;\">\r\n                    <ng5-slider [(value)]=\"element.opacity\" [options]=\"sliderImageOpacityOptions\"></ng5-slider>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/editor/panel-horizontal/panel-horizontal.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/editor/panel-horizontal/panel-horizontal.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white {\n  color: white; }\n\n.bar-height {\n  height: 30px; }\n\n.bar-padding {\n  padding: 3px; }\n\n.input-width {\n  width: 70px; }\n\n.btn-toolbar {\n  border-top: 1px solid #e3e4e5;\n  border-right: 1px solid #e3e4e5;\n  border-left: 1px solid #e3e4e5;\n  background-color: #f8f9fa;\n  height: 40px; }\n\n.element-bar {\n  position: absolute;\n  top: 36px;\n  width: 100%;\n  left: -1px;\n  padding: 5px;\n  z-index: 1000;\n  border-top: 1px solid #e3e4e5;\n  border-right: 1px solid #e3e4e5;\n  border-left: 1px solid #e3e4e5;\n  color: #96ff00;\n  background: #264356;\n  background: linear-gradient(90deg, #264356 0%, #3c7399 99%); }\n\n.element-bar .form-group {\n    margin: 0; }\n\n.btn-white {\n  background-color: #fff;\n  color: #666666;\n  border-radius: 4px;\n  border: 1px solid #00000026;\n  height: 30px;\n  padding: 5px;\n  padding-top: 2px;\n  margin: 0; }\n\n.pixelTop {\n  margin-top: -1px; }\n\n.slider-pop {\n  position: absolute;\n  width: 150px;\n  top: 31px;\n  background-color: #455072;\n  border-radius: 4px; }\n\n.label-color {\n  background-color: #455072;\n  color: white; }\n\n.w60 {\n  width: 60px; }\n\n.w90 {\n  width: 90px;\n  padding-top: 3px; }\n\n.w120 {\n  width: 120px; }\n\n.w180 {\n  width: 250px; }\n\n.w180 .input-group {\n    width: 100%; }\n\n.btn-cond {\n  padding: 4px;\n  margin: 0; }\n\n.toolbar {\n  list-style: none; }\n\n.toolbar li {\n    float: left; }\n\n.full-width {\n  width: 100%;\n  clear: both; }\n\n.curtain {\n  height: 200px;\n  width: 100%;\n  padding: 5px;\n  background-color: #999292;\n  border-left: 1px solid black;\n  border-bottom: 1px solid black;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  left: 250px;\n  z-index: 1000; }\n\n.curtain .form-group {\n    margin: 0; }\n\n.pad4 {\n  padding: 4px; }\n\n.left {\n  float: left; }\n\n.color-picker {\n  width: 30px;\n  max-height: 30px;\n  cursor: pointer;\n  z-index: 0; }\n\n.checkbox {\n  width: 15px;\n  height: 15px; }\n\n.curtain-short {\n  background-color: #999292;\n  padding: 5px;\n  height: 68px;\n  width: 100%;\n  border-left: 1px solid black;\n  border-bottom: 1px solid black;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  left: 250px;\n  z-index: 1000; }\n\n.curtain-short label {\n    padding: 2px;\n    font-size: 10px;\n    margin: 0; }\n\n.horizontal-large {\n  width: 200px;\n  float: left;\n  margin-right: 8px; }\n\n.horizontal-small {\n  width: 60px;\n  float: left;\n  margin-right: 8px; }\n\n.position {\n  margin-top: 10px; }\n\n.position .input-group-prepend span {\n    padding: 3px;\n    font-size: 12px;\n    background-color: #e3e4e5; }\n\n.no {\n  border: none;\n  border-radius: 0 !important; }\n\n.start {\n  border-top-right-radius: 5px !important;\n  border-bottom-right-radius: 5px !important; }\n\n.end {\n  border-top-left-radius: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  border-top-right-radius: 5px !important;\n  border-bottom-right-radius: 5px !important; }\n\n.box {\n  width: 250px;\n  height: 200px; }\n\n.box label {\n    font-size: 10px; }\n\n.box .form-control {\n    font-size: 10px;\n    height: 20px;\n    width: 40px; }\n\n.box .box-image {\n    max-width: 230px;\n    max-height: 200px; }\n\n.box .RT {\n    padding: 3px;\n    float: right; }\n\n.box .LT {\n    padding: 3px;\n    float: left; }\n\n.box .RB {\n    float: right; }\n\n.box .LB {\n    float: left; }\n\n.drag-panel {\n  z-index: 1500;\n  position: absolute;\n  width: 300px;\n  margin-right: 20px; }\n\n.drag-panel .form-group {\n    margin: 0; }\n\n.drag-panel .form-control {\n    height: 30px !important;\n    padding: 1px; }\n\n.drag-panel .fontbox {\n    height: 30px !important; }\n\n.drag-panel .name-control {\n    width: 170px; }\n\n.drag-panel label {\n    color: #222; }\n\n.drag-panel .no-selection {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    align-content: stretch;\n    height: 100%; }\n\n.drag-panel .inner {\n    position: relative;\n    top: -1px;\n    height: 100%;\n    border: 1px solid #2a4563;\n    padding: 10px;\n    background: #264356;\n    background: linear-gradient(90deg, #264356 0%, #e3e4e5 99%); }\n\n.drag-panel .inner h2 {\n      text-align: center;\n      margin: auto; }\n\n.nav-link.true {\n  background-color: #e3e4e5;\n  border-color: #2a4563; }\n\n.card-header:first-child {\n  background-color: black;\n  border-radius: 0 !important;\n  padding: 1px !important;\n  margin: 1px !important; }\n\n.modal-lg {\n  width: 70% !important;\n  height: 70%;\n  max-height: 500px;\n  max-width: 1000px !important; }\n\n.panel-accordion .card-header {\n  border-radius: 0 !important;\n  padding: 1px !important;\n  margin: 1px !important; }\n\n.small {\n  padding: 1px !important;\n  margin: 1px !important; }\n\n.ng5-slider .ng5-slider-pointer {\n  top: -7px !important; }\n\n.ng5-slider.ng5-slider-vertical .ng5-slider-pointer {\n  left: -7px !important; }\n\n.small-sliders .ng5-slider .ng5-slider-pointer {\n  top: -7px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3BhbmVsLWhvcml6b250YWwvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxlZGl0b3JcXHBhbmVsLWhvcml6b250YWxcXHBhbmVsLWhvcml6b250YWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXRvci9wYW5lbC1ob3Jpem9udGFsL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDRyxZQUFZLEVBQUE7O0FBR2Y7RUFDSSxZQUFXLEVBQUE7O0FBSWY7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5Qix5QkNSbUI7RURTbkIsWUFBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVE7RUFDUixXQUFXO0VBQ1gsVUFBUztFQUNULFlBQVc7RUFDWCxhQUFZO0VBQ1osNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQiw4QkFBOEI7RUFDOUIsY0M1Qm1CO0VENkJuQixtQkNuQ3NCO0VEb0N0QiwyREFBK0UsRUFBQTs7QUFabkY7SUFjUSxTQUFRLEVBQUE7O0FBSWhCO0VBQ0ksc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixZQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFpQjtFQUFFLFlBQVk7RUFBQyxTQUFTO0VBQ3pDLHlCQUEwQjtFQUMxQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx5QkFBMEI7RUFDMUIsWUFBVyxFQUFBOztBQUVmO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLGdCQUFlLEVBQUE7O0FBRW5CO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFEaEI7SUFHUSxXQUFXLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLFNBQVMsRUFBQTs7QUFJYjtFQUNJLGdCQUFnQixFQUFBOztBQURwQjtJQUtRLFdBQVcsRUFBQTs7QUFJbkI7RUFDSSxXQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUVmO0VBQ0ksYUFBYTtFQUNiLFdBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBWSxFQUFBOztBQWJoQjtJQWVRLFNBQVEsRUFBQTs7QUFJaEI7RUFDSSxZQUFXLEVBQUE7O0FBRWY7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSxXQUFXO0VBQ1gsZ0JBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUdkO0VBQ0ksV0FBVTtFQUNWLFlBQVcsRUFBQTs7QUFFZjtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVU7RUFFViw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQVksRUFBQTs7QUFkaEI7SUFnQlEsWUFBVztJQUNYLGVBQWU7SUFDZixTQUFRLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGdCQUFnQixFQUFBOztBQURwQjtJQU1ZLFlBQVk7SUFDWixlQUFjO0lBQ2QseUJDdExRLEVBQUE7O0FENExwQjtFQUNJLFlBQVk7RUFDWiwyQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSx1Q0FBc0M7RUFDdEMsMENBQXdDLEVBQUE7O0FBRTVDO0VBQ0ksc0NBQXFDO0VBQ3JDLHlDQUF1QztFQUV2Qyx1Q0FBc0M7RUFDdEMsMENBQXdDLEVBQUE7O0FBRzVDO0VBQ0ksWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFGakI7SUFJUSxlQUFlLEVBQUE7O0FBSnZCO0lBT1EsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFVLEVBQUE7O0FBVGxCO0lBWVEsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBOztBQWJ6QjtJQWdCUSxZQUFZO0lBQ1osWUFBWSxFQUFBOztBQWpCcEI7SUFvQlEsWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFyQm5CO0lBd0JRLFlBQVksRUFBQTs7QUF4QnBCO0lBMkJRLFdBQVcsRUFBQTs7QUFJbkI7RUFFSSxhQUFhO0VBQ2Isa0JBQWtCO0VBOEJsQixZQUFZO0VBaUJaLGtCQUFrQixFQUFBOztBQWxEdEI7SUFLUSxTQUFRLEVBQUE7O0FBTGhCO0lBUVEsdUJBQXNCO0lBQ3RCLFlBQVksRUFBQTs7QUFUcEI7SUFhUSx1QkFBc0IsRUFBQTs7QUFiOUI7SUFpQlEsWUFBWSxFQUFBOztBQWpCcEI7SUFvQk0sV0NuUFksRUFBQTs7QUQrTmxCO0lBdUJRLGFBQWE7SUFDcEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ2pCLHNCQUFzQjtJQUN0QixZQUFZLEVBQUE7O0FBN0JoQjtJQW9DUSxrQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFlBQVk7SUFDWix5QkNqUmlCO0lEa1JqQixhQUFhO0lBQ2IsbUJDbFJrQjtJRG1SbEIsMkRBQXlFLEVBQUE7O0FBMUNqRjtNQTRDWSxrQkFBa0I7TUFDbEIsWUFBVyxFQUFBOztBQVF2QjtFQUNJLHlCQ2xTZ0I7RURtU2hCLHFCQ2pTcUIsRUFBQTs7QURvU3pCO0VBQ0ksdUJBQXVCO0VBQ3ZCLDJCQUEwQjtFQUMxQix1QkFBc0I7RUFDdEIsc0JBQXFCLEVBQUE7O0FBR3pCO0VBQ0kscUJBQW9CO0VBQ3BCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsNEJBQTJCLEVBQUE7O0FBSTdCO0VBR00sMkJBQTBCO0VBQzFCLHVCQUFzQjtFQUN0QixzQkFBcUIsRUFBQTs7QUFLM0I7RUFDRSx1QkFBc0I7RUFDdEIsc0JBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksb0JBQW1CLEVBQUE7O0FBRXZCO0VBQ0kscUJBQW9CLEVBQUE7O0FBR3hCO0VBRVksb0JBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvcGFuZWwtaG9yaXpvbnRhbC9wYW5lbC1ob3Jpem9udGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc2Fzcy9fdmFyaWFibGVzJztcclxuXHJcblxyXG4ud2hpdGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5iYXItaGVpZ2h0e1xyXG4gICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5iYXItcGFkZGluZ3tcclxuICAgIHBhZGRpbmc6M3B4O1xyXG59XHJcblxyXG5cclxuLmlucHV0LXdpZHRoe1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbi5idG4tdG9vbGJhcntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTNlNGU1O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UzZTRlNTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UzZTRlNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JGNvbG9yLXRvb2xiYXI7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIFxyXG59XHJcbi5lbGVtZW50LWJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MzZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDotMXB4O1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICB6LWluZGV4OjEwMDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZTRlNTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlM2U0ZTU7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlM2U0ZTU7XHJcbiAgICBjb2xvcjogJGNvbG9yLWxpYnJhcnk7XHJcbiAgICBiYWNrZ3JvdW5kOiRjb2xvci1saWdodGJsdWUxO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkY29sb3ItbGlnaHRibHVlMSAwJSwgJGNvbG9yLWxpZ2h0Ymx1ZTIgOTklKTtcclxuICAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLXdoaXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDI2O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucGl4ZWxUb3B7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG59XHJcblxyXG4uc2xpZGVyLXBvcHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlOyB3aWR0aDogMTUwcHg7dG9wOiAzMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM0NTUwNzI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmxhYmVsLWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM0NTUwNzI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4udzYwe1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbi53OTB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIHBhZGRpbmctdG9wOjNweDtcclxufVxyXG4udzEyMHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLncxODB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAuaW5wdXQtZ3JvdXB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuLmJ0bi1jb25ke1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLnRvb2xiYXJ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgXHJcbiAgICBsaSB7XHJcbiAgICAgIFxyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4uY3VydGFpbntcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTI5MjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICByaWdodDogMXB4O1xyXG4gICAgbGVmdDogMjUwcHg7XHJcbiAgICB6LWluZGV4OjEwMDA7XHJcbiAgICAuZm9ybS1ncm91cHtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgIH1cclxufVxyXG5cclxuLnBhZDR7XHJcbiAgICBwYWRkaW5nOjRweDtcclxufVxyXG4ubGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jb2xvci1waWNrZXJ7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIG1heC1oZWlnaHQ6MzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBcclxufVxyXG4uY2hlY2tib3h7XHJcbiAgICB3aWR0aDoxNXB4O1xyXG4gICAgaGVpZ2h0OjE1cHg7XHJcbn1cclxuLmN1cnRhaW4tc2hvcnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5MjkyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuXHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgcmlnaHQ6IDFweDtcclxuICAgIGxlZnQ6IDI1MHB4O1xyXG4gICAgei1pbmRleDoxMDAwO1xyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgcGFkZGluZzoycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgfVxyXG59XHJcbi5ob3Jpem9udGFsLWxhcmdle1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmhvcml6b250YWwtc21hbGx7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLnBvc2l0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC5pbnB1dC1ncm91cC1wcmVwZW5kXHJcbiAgICB7XHJcbiAgICAgICBcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLm5ve1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGFydHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHghaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NXB4IWltcG9ydGFudDtcclxufVxyXG4uZW5ke1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4IWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MHB4IWltcG9ydGFudDtcclxuXHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4IWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3h7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udHJvbHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICB9XHJcbiAgICAuYm94LWltYWdle1xyXG4gICAgICAgIG1heC13aWR0aDogMjMwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAuUlR7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIC5MVHtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuUkJ7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLkxCe1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHJhZy1wYW5lbFxyXG57XHJcbiAgICB6LWluZGV4OiAxNTAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgIGhlaWdodDogMzBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgfVxyXG4gICAgLmZvbnRib3hcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYW1lLWNvbnRyb2x7XHJcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgfVxyXG4gIGxhYmVse1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWJsYWNrO1xyXG4gIH1cclxuICAgIC5uby1zZWxlY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgIFxyXG4gICAgLmlubmVye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6LTFweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWRhcmtibHVlMjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1saWdodGJsdWUxO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGNvbG9yLWxpZ2h0Ymx1ZTEgMCUsICRjb2xvci1ncmF5IDk5JSk7XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5uYXYtbGluay50cnVle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXk7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1kYXJrYmx1ZTI7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOjFweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOjFweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4ubW9kYWwtbGd7XHJcbiAgICB3aWR0aDogNzAlIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAucGFuZWwtYWNjb3JkaW9uXHJcbiAge1xyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOjFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjoxcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgIFxyXG5cclxuICB9XHJcbiAgLnNtYWxse1xyXG4gICAgcGFkZGluZzoxcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjoxcHggIWltcG9ydGFudDtcclxufVxyXG4ubmc1LXNsaWRlciAubmc1LXNsaWRlci1wb2ludGVye1xyXG4gICAgdG9wOiAtN3B4IWltcG9ydGFudDtcclxufVxyXG4ubmc1LXNsaWRlci5uZzUtc2xpZGVyLXZlcnRpY2FsIC5uZzUtc2xpZGVyLXBvaW50ZXJ7XHJcbiAgICBsZWZ0OiAtN3B4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnNtYWxsLXNsaWRlcnN7XHJcbiAgICAubmc1LXNsaWRlciAubmc1LXNsaWRlci1wb2ludGVye1xyXG4gICAgICAgICAgICB0b3A6IC03cHghaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuIiwiXHJcbiRjb2xvci1ncmF5OiAjZTNlNGU1O1xyXG4kY29sb3ItZGFya2JsdWUxOiAjMTYyNDMzO1xyXG4kY29sb3ItZGFya2JsdWUyOiAjMmE0NTYzO1xyXG4kY29sb3ItbGlnaHRibHVlMTogIzI2NDM1NjtcclxuJGNvbG9yLWxpZ2h0Ymx1ZTI6ICMzYzczOTk7XHJcbiRjb2xvci1vcmFuZ2U6ICNmYzY2MDA7XHJcbiRjb2xvci1jeWFuOiAjMDBmZmY2O1xyXG4kY29sb3Itc2NyZWVuOiAjMDBjZmZmO1xyXG4kY29sb3Itc2NyZWVuLWdyb3VwOiAjMDBmZmY2O1xyXG4kY29sb3ItbGlicmFyeTogIzk2ZmYwMDtcclxuJGNvbG9yLXllbGxvdzogI2ZmZmYwMDtcclxuJGNvbG9yLXB1cnBsZTogI2YzYjdlYjtcclxuJGNvbG9yLWdyZWVuOiAjOTZmZjAwO1xyXG4kY29sb3ItYmxhY2s6ICMyMjI7XHJcbiRjb2xvci1ncmF5d2hpdGU6ICNGRkU7XHJcbiRjb2xvci10b29sYmFyOiAjZjhmOWZhO1xyXG4gXHJcblxyXG4gXHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/editor/panel-horizontal/panel-horizontal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/editor/panel-horizontal/panel-horizontal.component.ts ***!
  \***********************************************************************/
/*! exports provided: PanelHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelHorizontalComponent", function() { return PanelHorizontalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/fonts.component */ "./src/app/editor/fonts/fonts.component.ts");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selection.service */ "./src/app/editor/selection.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var PanelHorizontalComponent = /** @class */ (function () {
    function PanelHorizontalComponent(_ngZone, sanitizer, modalService, dirtyService, ngbDropdownConfig, selectionService) {
        var _this = this;
        this._ngZone = _ngZone;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.dirtyService = dirtyService;
        this.ngbDropdownConfig = ngbDropdownConfig;
        this.selectionService = selectionService;
        this.item = {};
        this.editorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.elementChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addElementChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editor = {};
        this.toggels = {
            bgColor: false,
            color: false,
            fontSize: false,
            height: false,
            width: false,
        };
        this.sliderOptions = {
            floor: 0,
            ceil: 250,
            hideLimitLabels: true,
            hidePointerLabels: true,
        };
        this.sliderImageOptions = {
            floor: 0,
            ceil: 1800,
            hideLimitLabels: true,
            hidePointerLabels: true,
        };
        this.sliderImageVertiacalOptions = {
            floor: 0,
            ceil: 1800,
            vertical: true,
            hideLimitLabels: true,
            hidePointerLabels: true,
        };
        this.sliderImageOpacityOptions = {
            floor: 0,
            step: 0.1,
            ceil: 1,
            hideLimitLabels: true,
            hidePointerLabels: true,
        };
        this.tabs = [{ name: 'PANEL.ELEMENT', icon: '', selected: true }, { name: 'PANEL.GENERAL', icon: '', selected: false }];
        this.selectionService.selectElement.subscribe(function (element) {
            if (element) {
                _this.position = JSON.parse(JSON.stringify(element.position));
                if (_this.position.y > 400) {
                    _this.position.y = 400 - _this.position.y;
                }
                _this.position.x = _this.position.x - 300;
            }
        });
        this.ngbDropdownConfig.placement = 'bottom-left';
        this.ngbDropdownConfig.autoClose = true;
    }
    PanelHorizontalComponent.prototype.change = function () {
        this.dirtyService.setDirty();
    };
    PanelHorizontalComponent.prototype.addElement = function (event) {
        this.addElementChanged.emit(event);
    };
    PanelHorizontalComponent.prototype.updateColors = function (colors) {
        this.editor.colors = colors;
        this.editorChanged.emit(this.editor);
    };
    PanelHorizontalComponent.prototype.openModalWithComponent = function () {
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
    PanelHorizontalComponent.prototype.calculateAspectRatioFit = function (srcWidth, srcHeight) {
        var maxWidth = this.element.widthOriginal;
        var maxHeight = this.element.heightOriginal;
        var ratio = [maxWidth / srcWidth, maxHeight / srcHeight];
        console.log(ratio);
        var scale = Math.min(ratio[0], ratio[1]);
        return { width: Math.round(srcWidth * scale), height: Math.round(srcHeight * scale) };
    };
    PanelHorizontalComponent.prototype.resetDimensions = function () {
        this.dirtyService.setDirty();
        this.element.height = this.element.heightOriginal;
        this.element.width = this.element.widthOriginal;
    };
    PanelHorizontalComponent.prototype.fitDimensions = function () {
        this.dirtyService.setDirty();
        this.element.height = this.item.Screen.height;
        this.element.width = this.item.Screen.width;
    };
    PanelHorizontalComponent.prototype.onUserChange = function (event, from) {
        this.dirtyService.setDirty();
        var val = event.value || event;
        if (this.constraint) {
            if (from === 'width') {
                this.element.height = Math.round(this.element.heightOriginal * (val / this.element.widthOriginal));
            }
            else {
                this.element.width = Math.round(this.element.widthOriginal * (val / this.element.heightOriginal));
            }
        }
    };
    PanelHorizontalComponent.prototype.moveElement = function (event, to, step) {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var clone;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.dirtyService.setDirty();
                clone = Object.assign({ isSelected: true }, this.element);
                (to === 'back') ?
                    (step) ? clone.zIndex = this.element - 1 : clone.zIndex = 0 :
                    (step) ? clone.zIndex = this.element + 1 : clone.zIndex = 1100;
                this.selectionService.elements[this.selectionService.elements.indexOf(this.element)] = clone;
                this.element = clone;
                this.selectionService.focus(null, clone);
                // // this.elementChanged.emit(clone);
                return [2 /*return*/, false];
            });
        }); });
    };
    PanelHorizontalComponent.prototype.align = function (to) {
        this.dirtyService.setDirty();
        this.element.align = to;
        this.elementChanged.emit(this.element);
    };
    PanelHorizontalComponent.prototype.alignCanvas = function (to) {
        this.dirtyService.setDirty();
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
    PanelHorizontalComponent.prototype.tabSelect = function (tab) {
        this.tabs.forEach(function (tabItem) { return tabItem.selected = false; });
        tab.selected = true;
        this.selectedTab = tab;
    };
    PanelHorizontalComponent.prototype.setColor = function (color) {
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
    PanelHorizontalComponent.prototype.detect = function (event) {
        this.element.position = { x: Number(this.element.position.x), y: Number(this.element.position.y) };
        this.elementChanged.emit(this.element);
    };
    PanelHorizontalComponent.prototype.setBgColor = function (color) {
        var _this = this;
        this.dirtyService.setDirty();
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
    PanelHorizontalComponent.prototype.selectFont = function (event) {
        window.WebFont.load({
            google: {
                families: [this.element.font]
            }
        });
        this.dirtyService.setDirty();
    };
    PanelHorizontalComponent.prototype.moveIndex = function (delta) {
        this.dirtyService.setDirty();
        this.element.zIndex = this.element.zIndex + delta;
        this.elementChanged.emit(this.element);
    };
    PanelHorizontalComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.selectedTab = this.tabs[0];
                        window.WebFont.load({
                            google: {
                                families: this.editor.fonts
                            }
                        });
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
    ], PanelHorizontalComponent.prototype, "element", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelHorizontalComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PanelHorizontalComponent.prototype, "editorChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PanelHorizontalComponent.prototype, "elementChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelHorizontalComponent.prototype, "addElementChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelHorizontalComponent.prototype, "editor", void 0);
    PanelHorizontalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-panel-horizontal',
            template: __webpack_require__(/*! ./panel-horizontal.component.html */ "./src/app/editor/panel-horizontal/panel-horizontal.component.html"),
            styles: [__webpack_require__(/*! ./panel-horizontal.component.scss */ "./src/app/editor/panel-horizontal/panel-horizontal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__["DirtyService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownConfig"], _selection_service__WEBPACK_IMPORTED_MODULE_6__["SelectionService"]])
    ], PanelHorizontalComponent);
    return PanelHorizontalComponent;
}());



/***/ }),

/***/ "./src/app/editor/screen-size.service.ts":
/*!***********************************************!*\
  !*** ./src/app/editor/screen-size.service.ts ***!
  \***********************************************/
/*! exports provided: ScreenSizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSizeService", function() { return ScreenSizeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var log = console.log;
var ScreenSizeService = /** @class */ (function () {
    function ScreenSizeService() {
        this.screens = [
            { width: 400, height: 300 },
            { width: 800, height: 600 },
            { width: 1024, height: 768 },
            { width: 1280, height: 720 },
            { width: 1280, height: 960 },
            { width: 1360, height: 768 },
            { width: 1600, height: 900 },
        ];
    }
    ScreenSizeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScreenSizeService);
    return ScreenSizeService;
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
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__);



var SelectionService = /** @class */ (function () {
    function SelectionService(_hotkeysService) {
        var _this = this;
        this._hotkeysService = _hotkeysService;
        this.selection = [];
        this.elements = [];
        this.selectElement = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onResetDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('ctrl+c', function (event) {
            _this.clipboard = JSON.parse(JSON.stringify(_this._selectedElement));
            return false; // Prevent bubbling
        }, undefined, 'Copy an element to the clipboard'));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('ctrl+v', function (event) {
            _this.add(_this.clipboard);
            return false; // Prevent bubbling
        }, undefined, 'Paste an element from the clipboard'));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('ctrl+x', function (event) {
            _this.clipboard = JSON.parse(JSON.stringify(_this._selectedElement));
            _this.remove(_this._selectedElement);
            return false; // Prevent bubbling
        }, undefined, 'Cut an element to clipboard'));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('del', function (event) {
            _this.remove(_this._selectedElement);
            return false; // Prevent bubbling
        }, undefined, 'Delete an element'));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('ctrl+z', function (event) {
            return false; // Prevent bubbling
        }, undefined, 'Copy an element to clipboard'));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('ctrl+y', function (event) {
            return false; // Prevent bubbling
        }, undefined, 'Copy an element to clipboard'));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('ctrl+w', function (event) {
            return false; // Prevent bubbling
        }, undefined, 'Copy an element to clipboard'));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('ctrl+u', function (event) {
            return false; // Prevent bubbling
        }, undefined, 'Copy an element to clipboard'));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('ctrl+h', function (event) {
            return false; // Prevent bubbling
        }, undefined, 'Copy an element to clipboard'));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('ctrl+f', function (event) {
            return false; // Prevent bubbling
        }, undefined, 'Copy an element to clipboard'));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('ctrl+d', function (event) {
            return false; // Prevent bubbling
        }, undefined, 'Copy an element to clipboard'));
    }
    SelectionService.prototype.resetDrag = function () {
        this.onResetDrag.emit();
    };
    SelectionService.prototype.unselect = function () {
        var all = document.querySelectorAll('.element');
        for (var i = 0; i < all.length; i++) {
            all[i].className = all[i].className.replace('selected', '');
        }
        this.elements.forEach(function (item) { return item.selected = false; });
    };
    SelectionService.prototype.unfocus = function () {
        this.selectElement.emit(null);
    };
    SelectionService.prototype.focus = function (eventElement, elementItem) {
        this._selectedElement = elementItem;
        this.selectElement.emit(elementItem);
    };
    SelectionService.prototype.load = function (document) {
        this.document = document;
        this.elements = this.document.elements;
        if (this.elements) {
            this.elements.forEach(function (elem, i) {
                if (!elem.zIndex) {
                    elem.zIndex = 1000 + i;
                }
            });
        }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["HotkeysService"]])
    ], SelectionService);
    return SelectionService;
}());



/***/ }),

/***/ "./src/app/editor/share-window/share-window.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/editor/share-window/share-window.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h2 class=\"dialog-header\">{{\"SHARES.TITLE\" | translate }}</h2>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\" style=\"height: 350px;\">\n\n    <div class=\"form-group\">\n        <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n        <input type=\"text\" required [(ngModel)]=\"selectedSlide.Name\" #Name class=\"form-control\">\n        <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n    </div>\n\n\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">{{\"SHARES.VARNAME\" | translate }}</th>\n                <th scope=\"col\">{{\"SHARES.DEFAULTVALUE\" | translate }}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let v of variables;let i=index;\">\n                <td>{{i+1}}</td>\n                <td class=\"w45\"><input type=\"text\" class=\"form-control\" [(ngModel)]=\"v.varName\" /></td>\n                <td class=\"w45\"><input type=\"text\" class=\"form-control\" [(ngModel)]=\"v.text\" /></td>\n            </tr>\n        </tbody>\n    </table>\n\n\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"continue()\">{{closeBtnName}}</button>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/share-window/share-window.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/editor/share-window/share-window.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-header {\n  font-size: 16px;\n  color: #225b77; }\n\n.w45 {\n  width: 45%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3NoYXJlLXdpbmRvdy9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGVkaXRvclxcc2hhcmUtd2luZG93XFxzaGFyZS13aW5kb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdsQjtFQUNJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9zaGFyZS13aW5kb3cvc2hhcmUtd2luZG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzIyNWI3NztcclxufVxyXG5cclxuLnc0NXtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/editor/share-window/share-window.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/editor/share-window/share-window.component.ts ***!
  \***************************************************************/
/*! exports provided: ShareWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareWindowComponent", function() { return ShareWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");




var ShareWindowComponent = /** @class */ (function () {
    function ShareWindowComponent(_ngZone, sanitizer, bsModalRef) {
        this._ngZone = _ngZone;
        this.sanitizer = sanitizer;
        this.bsModalRef = bsModalRef;
        this.share = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.variables = [];
    }
    ShareWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedSlide.elements.forEach(function (element) {
            if (element.varName) {
                _this.variables.push(element);
            }
        });
    };
    ShareWindowComponent.prototype.continue = function () {
        this.share.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShareWindowComponent.prototype, "selectedSlide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShareWindowComponent.prototype, "share", void 0);
    ShareWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share-window',
            template: __webpack_require__(/*! ./share-window.component.html */ "./src/app/editor/share-window/share-window.component.html"),
            styles: [__webpack_require__(/*! ./share-window.component.scss */ "./src/app/editor/share-window/share-window.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]])
    ], ShareWindowComponent);
    return ShareWindowComponent;
}());



/***/ }),

/***/ "./src/app/editor/slide-editor/slide-editor.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/editor/slide-editor/slide-editor.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide-header [title]=\"'NAVBAR.SLIDES'\" mode=\"inline\" iconClass=\"icon-brush\" className=\"library-cat\">\n</app-slide-header>\n\n<div class=\"head-inline\">\n\n\n  <div class=\"data-bar\" *ngIf=\"item\">\n    <div class=\"btn-group\" style=\"width: 50px;\">\n      <div class=\"input-group bar-padding\">\n        <app-add (selected)=\"addElement($event)\"></app-add>\n      </div>\n    </div>\n\n\n    <div class=\"btn-group\">\n      <div class=\"input-group bar-padding\">\n        <div class=\"input-group-prepend bar-height\" title=\"{{'PANEL.SLIDE_NAME' | translate}}\">\n          <span class=\"input-group-text bar-height\">#</span>\n        </div>\n        <input [(ngModel)]=\"item.Name\" name=\"slideName\" (change)=\"change()\"\n          class=\"form-control form-control-sm bar-height\" />\n      </div>\n    </div>\n\n    <div class=\"btn-group\" *ngIf=\"selectedElement\">\n      <div class=\"input-group bar-padding\">\n        <div class=\"input-group-prepend bar-height\" title=\"{{'PANEL.ELEMENT_NAME' | translate}}\">\n          <span class=\"input-group-text bar-height\">#</span>\n        </div>\n        <input [(ngModel)]=\"selectedElement.varName\" name=\"elementName\"\n          placeholder=\"{{'PANEL.ELEMENT_NAME' | translate}}\" [detectChanges]=\"true\"\n          class=\"form-control name-control form-control-sm bar-height\" />\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"action-bar\">\n    <button class=\"close-button right\" (click)=\"closeSlider();\"><i class=\"icon-times-rectangle-o\"></i></button>\n    <button class=\"save-btn {{dirty}} right\" (click)=\"saveProxy();\" (next)=\"saveProxy();\"><i\n        class=\"icon-floppy-o\"></i></button>\n    <button class=\"btn-tool btn-play\" (click)=\"publish()\">\n      <i class=\"icon-insert-template\"></i></button>\n\n  </div>\n\n\n\n</div>\n<app-finder *ngIf=\"finderActive==='active'\" [types]=\"['media','shares']\" [active]=\"finderActive\" [selector]=\"addToList\">\n</app-finder>\n\n<hotkeys-cheatsheet title=\"Shortcuts & Commands\"></hotkeys-cheatsheet>\n\n<div *ngIf=\"item\" style=\"position: relative;width:100%;\" [class]=\"cursorClass\">\n  <app-changes [item]=\"selectionService.elements\"></app-changes>\n\n\n  <app-panel-horizontal [(element)]=\"selectedElement\" [editor]=\"editor\" [item]=\"item\"\n    (elementChanged)=\"setElement(element)\" (addElementChanged)=\"addElement($event)\" (editorChanged)=\"setEditor($event)\">\n  </app-panel-horizontal>\n\n  <div class=\"slide-editor\" (mouseup)=\"resetDrag();\" style=\"direction: ltr;\" [appAdaptWidth]=\"300\"\n    [appAdaptHeight]=\"140\" (click)=\"unfocus();\">\n\n    <div class=\"editor-plate\" [ngStyle]=\"{\n    'width.px': screenSize.width,\n    'height.px': screenSize.height, \n    'transform': 'scale(' + zoomLevel +')',\n    'background-color': editor.bgColor \n    }\">\n      <app-element *ngFor=\"let el of selectionService.elements\" [element]=\"el\" (changed)=\"elementChanged($event)\"\n        (removed)=\"clearSelection()\" (transform)=\"indicateTransform($event)\"></app-element>\n    </div>\n  </div>\n\n  <div ngbDropdown class=\"zoom-menu\" [placement]=\"'top-right'\" >\n    <div class=\"btn btn-default btn-white\" ngbDropdownToggle> {{zoomLevel*100 | number}}% </div>\n    <button class=\"btn btn-white\" (click)=\"zoomChange(true)\"> <span class=\"icon-zoom-in\"></span></button>\n    <button class=\"btn btn-white\" (click)=\"zoomChange(false)\"> <span class=\"icon-zoom-out\"></span></button>\n    <div ngbDropdownMenu>\n      <button *ngFor=\"let z of zooms\" class=\"dropdown-item\" (click)=\"zoom(z)\">{{z*100}}%</button>\n    </div>\n  </div>\n\n  <div ngbDropdown class=\"screen-menu\" [placement]=\"'top-right'\" >\n    <button class=\"btn btn-default btn-white\" ngbDropdownToggle>{{screenSize.width}}*{{screenSize.height}}</button>\n    <div ngbDropdownMenu>\n      <button *ngFor=\"let screen of screenSizes\" class=\"dropdown-item\"\n        (click)=\"setScreen(screen)\">{{screen.width}}*{{screen.height}}</button>\n    </div>\n  </div>\n\n</div>\n\n\n\n<!-- \n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\" *ngFor=\"let tab of tabs\" (click)=\"tabSelect(tab)\">\n      <a class=\"nav-link {{tab.selected}}\"><h6><i class=\"{{tab.icon}}\"></i> {{tab.name | translate}}</h6></a>\n    </li>\n    <li class=\"nav-item addbox\">\n     \n    </li>\n  </ul> -->\n<!-- \n  <div *ngIf=\"tabs[1].selected\" [appAdaptHeight]=\"100\">\n    <div style=\"height: 50%;padding: 10px;\">\n      <app-code-editor [code]=\"slideScript\" (notify)=\"onCode($event, 'script')\" [script-name]=\"'script.js'\" [variables]=\"item.elements\"></app-code-editor>\n    </div>\n    <div style=\"height: 50%;padding: 10px;\">\n      <app-code-editor [code]=\"slidePlayer\" (notify)=\"onCode($event,'player')\" [script-name]=\"'player.js'\" [variables]=\"item.elements\"></app-code-editor>\n    </div>\n  </div>\n\n  <div class=\"row p10\" *ngIf=\"tabs[0].selected\"> -->\n"

/***/ }),

/***/ "./src/app/editor/slide-editor/slide-editor.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/editor/slide-editor/slide-editor.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zoom-menu {\n  position: absolute;\n  bottom: 17px;\n  left: 4px;\n  z-index: 1500; }\n\n.screen-menu {\n  position: absolute;\n  bottom: 17px;\n  left: 190px;\n  z-index: 1500; }\n\n.btn-white {\n  background-color: #fff;\n  color: #666666;\n  border-radius: 4px;\n  border: 1px solid #667766; }\n\n.dropdown-menu {\n  min-width: 0; }\n\n.save-btn.true {\n  background-color: red;\n  color: black; }\n\n.slide-editor {\n  padding: 8%; }\n\n.slide-editor .editor-plate {\n    border: 1px solid #000000;\n    margin: auto; }\n\n.toolbar-end {\n  float: left; }\n\n.selected {\n  border: 1px dotted #cc66dd !important; }\n\n.true {\n  background-color: #3c7399; }\n\n.addbox {\n  padding: 3px; }\n\n.layers {\n  z-index: 2000;\n  background-color: gray;\n  position: absolute;\n  width: 300px;\n  height: 400px; }\n\n.right {\n  float: right; }\n\n.bar-height {\n  height: 30px; }\n\n.data-bar {\n  width: 100%;\n  position: relative; }\n\n.head-inline {\n  padding-top: 10px;\n  height: 50px;\n  width: 100%;\n  position: relative; }\n\n.close-button {\n  color: white;\n  cursor: pointer;\n  width: 50px;\n  height: 50px;\n  background-color: green; }\n\n.save-btn {\n  transition: all .2s ease;\n  color: white;\n  cursor: pointer;\n  top: 0px;\n  width: 50px;\n  height: 50px;\n  background-color: orange;\n  color: white;\n  cursor: pointer; }\n\n.action-bar {\n  position: absolute;\n  right: 1px;\n  top: 1px; }\n\n.click-back {\n  z-index: 0;\n  position: absolute;\n  background-color: darkviolet;\n  width: 100%;\n  height: 100%; }\n\n.btn-tool {\n  color: white;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  float: right;\n  width: 52px;\n  height: 52px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3NsaWRlLWVkaXRvci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGVkaXRvclxcc2xpZGUtZWRpdG9yXFxzbGlkZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXRvci9zbGlkZS1lZGl0b3IvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsYUFBYSxFQUFBOztBQUVqQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFJaEI7RUFDSSxXQUFXLEVBQUE7O0FBRGY7SUFJUSx5QkFBeUI7SUFDekIsWUFBWSxFQUFBOztBQU1wQjtFQUNJLFdBQVcsRUFBQTs7QUFJZjtFQUNJLHFDQUFvQyxFQUFBOztBQUV4QztFQUVJLHlCQ2pEc0IsRUFBQTs7QURtRDFCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLGFBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFFZixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUkzQjtFQUNJLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZUFBZTtFQUVmLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUlsQjtFQUNHLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUSxFQUFBOztBQUlaO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFFSSxZQUFZO0VBQ1osZUFBZTtFQUNkLHNCQUFxQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3Ivc2xpZGUtZWRpdG9yL3NsaWRlLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3Nhc3MvX3ZhcmlhYmxlcyc7XHJcblxyXG5cclxuLnpvb20tbWVudXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTdweDtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgIHotaW5kZXg6IDE1MDA7XHJcbn1cclxuLnNjcmVlbi1tZW51e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxN3B4O1xyXG4gICAgbGVmdDogMTkwcHg7XHJcbiAgICB6LWluZGV4OiAxNTAwO1xyXG59XHJcbiBcclxuLmJ0bi13aGl0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2Njc3NjY7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51e1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uc2F2ZS1idG4udHJ1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcblxyXG59XHJcblxyXG4uc2xpZGUtZWRpdG9ye1xyXG4gICAgcGFkZGluZzogOCU7XHJcbiAgICAuZWRpdG9yLXBsYXRlXHJcbiAgICB7ICAgICAgIFxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7ICAgICAgXHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIFxyXG4udG9vbGJhci1lbmR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuIFxyXG4uc2VsZWN0ZWR7XHJcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgI2NjNjZkZCFpbXBvcnRhbnQ7XHJcbn1cclxuLnRydWV7XHJcbiAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0Ymx1ZTI7XHJcbn1cclxuLmFkZGJveHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG4ubGF5ZXJze1xyXG4gICAgei1pbmRleDoyMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5yaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmJhci1oZWlnaHR7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLmRhdGEtYmFye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhlYWQtaW5saW5le1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgXHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG5cclxufVxyXG5cclxuLnNhdmUtYnRuIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICBcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4gLmFjdGlvbi1iYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMXB4O1xyXG4gICAgdG9wOiAxcHg7XHJcblxyXG4gfVxyXG4gXHJcbi5jbGljay1iYWNre1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmt2aW9sZXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJ0bi10b29sXHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICBib3JkZXI6MXB4IHNvbGlkICNiYmI7XHJcbiAgICBmbG9hdDogcmlnaHQ7ICAgIFxyXG4gICAgd2lkdGg6IDUycHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7ICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxufVxyXG4iLCJcclxuJGNvbG9yLWdyYXk6ICNlM2U0ZTU7XHJcbiRjb2xvci1kYXJrYmx1ZTE6ICMxNjI0MzM7XHJcbiRjb2xvci1kYXJrYmx1ZTI6ICMyYTQ1NjM7XHJcbiRjb2xvci1saWdodGJsdWUxOiAjMjY0MzU2O1xyXG4kY29sb3ItbGlnaHRibHVlMjogIzNjNzM5OTtcclxuJGNvbG9yLW9yYW5nZTogI2ZjNjYwMDtcclxuJGNvbG9yLWN5YW46ICMwMGZmZjY7XHJcbiRjb2xvci1zY3JlZW46ICMwMGNmZmY7XHJcbiRjb2xvci1zY3JlZW4tZ3JvdXA6ICMwMGZmZjY7XHJcbiRjb2xvci1saWJyYXJ5OiAjOTZmZjAwO1xyXG4kY29sb3IteWVsbG93OiAjZmZmZjAwO1xyXG4kY29sb3ItcHVycGxlOiAjZjNiN2ViO1xyXG4kY29sb3ItZ3JlZW46ICM5NmZmMDA7XHJcbiRjb2xvci1ibGFjazogIzIyMjtcclxuJGNvbG9yLWdyYXl3aGl0ZTogI0ZGRTtcclxuJGNvbG9yLXRvb2xiYXI6ICNmOGY5ZmE7XHJcbiBcclxuXHJcbiBcclxuXHJcbiAiXX0= */"

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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _screen_size_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../screen-size.service */ "./src/app/editor/screen-size.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _share_window_share_window_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../share-window/share-window.component */ "./src/app/editor/share-window/share-window.component.ts");















var SlideEditorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SlideEditorComponent, _super);
    function SlideEditorComponent(_ngZone, translateService, nameService, selectionService, fontService, router, route, dirtyService, bsModalRef, previousRouteService, ngbDropdownConfig, modalService, screenSizeService, changeDetectorRef) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService, changeDetectorRef) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.nameService = nameService;
        _this.selectionService = selectionService;
        _this.fontService = fontService;
        _this.router = router;
        _this.route = route;
        _this.dirtyService = dirtyService;
        _this.bsModalRef = bsModalRef;
        _this.previousRouteService = previousRouteService;
        _this.ngbDropdownConfig = ngbDropdownConfig;
        _this.modalService = modalService;
        _this.screenSizeService = screenSizeService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.zooms = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
        _this.zoomLevel = 1;
        _this.dirty = false;
        _this.finderActive = 'closing';
        _this.editor = {
            fonts: ['ABeeZee', 'Abel', 'Abhaya Libre'],
            color: '#000',
            bgColor: '#fff',
            colors: ['#fff', '#eee'],
        };
        _this.addToList = function (resource) {
            switch (_this.finderMode) {
                case 'image':
                    var imageBlock = {
                        type: 'image',
                        position: { x: 0, y: 0 },
                        opacity: 1,
                        src: resource.resource,
                        class: 'img', zIndex: 1000 + _this.item.elements.length + 1
                    };
                    _this.newBlockElement(imageBlock);
                    break;
                case 'video':
                    var videoBlock = {
                        type: 'video',
                        position: { x: 0, y: 0 },
                        opacity: 1,
                        width: 300,
                        height: 200,
                        embed: resource.Embed,
                        name: resource.Name,
                        class: 'video', zIndex: 1000 + _this.item.elements.length + 1
                    };
                    _this.newBlockElement(videoBlock);
                    break;
            }
            _this.dirtyService.detectChanges();
            _this.finderActive = 'closing';
        };
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_4__["SlidesDataController"];
        _this.Model = 'Slide';
        _this.addToList.bind(_this);
        _this.selectionService.selectElement.subscribe(function (element) {
            _this.selectedElement = element;
        });
        dirtyService.dirty.subscribe(function (state) {
            _this.dirty = state;
        });
        _this.ngbDropdownConfig.placement = 'top-left';
        _this.ngbDropdownConfig.autoClose = true;
        _this.screenSizes = _this.screenSizeService.screens;
        return _this;
    }
    SlideEditorComponent.prototype.elementChanged = function (element) {
        this.selectedElement = element;
    };
    SlideEditorComponent.prototype.resetDrag = function () {
        this.selectionService.resetDrag();
    };
    SlideEditorComponent.prototype.zoomChange = function (increment) {
        var level = this.zoomLevel * 100;
        if (increment) {
            level = Math.round(level += 10);
        }
        else {
            level = Math.round(level -= 10);
        }
        this.zoomLevel = level / 100;
    };
    SlideEditorComponent.prototype.zoom = function (level) {
        this.zoomLevel = level;
    };
    SlideEditorComponent.prototype.setElement = function (element) {
        this.selectedElement = element;
    };
    SlideEditorComponent.prototype.setScreen = function (screenSize) {
        this.screenSize = screenSize;
    };
    SlideEditorComponent.prototype.unfocus = function () {
        this.selectedElement = null;
        this.selectionService.unfocus();
    };
    SlideEditorComponent.prototype.setEditor = function (editor) {
        this.item.color = editor.color;
        this.item.bgColor = editor.bgColor;
        console.log(editor.colors);
        if (editor.colors) {
            this.item.colors = editor.colors;
        }
        this.item.fonts = editor.fonts;
        this.dirtyService.setDirty();
    };
    SlideEditorComponent.prototype.saveClick = function (event) {
        this.dirtyService.setSaving();
    };
    SlideEditorComponent.prototype.onCode = function ($event, type) {
        this.item[type] = $event;
    };
    SlideEditorComponent.prototype.publish = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.item.publish_id) {
                    this.openShareModal().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["ShareDataController"].update('Share', this.item.publish_id, this.item)];
                                case 1:
                                    _a.sent();
                                    this.saveProxy();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                else {
                    this.openShareModal().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var sharedItem;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["ShareDataController"].create('Share', this.item)];
                                case 1:
                                    sharedItem = _a.sent();
                                    this.item.publish_id = sharedItem._id;
                                    this.saveProxy();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        });
    };
    SlideEditorComponent.prototype.finder = function (finderMode) {
        this.finderMode = finderMode;
        this.finderActive = 'active';
    };
    SlideEditorComponent.prototype.openShareModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            var initialState = {
                                selectedSlide: _this.item,
                            };
                            _this.bsModalRef = _this.modalService.show(_share_window_share_window_component__WEBPACK_IMPORTED_MODULE_14__["ShareWindowComponent"], { initialState: initialState, class: 'modal-lg' });
                            _this.bsModalRef.content.closeBtnName = 'Share';
                            _this.bsModalRef.content.share.subscribe(function () {
                                _this.bsModalRef.hide();
                                resolve();
                            });
                            _this.modalService.onHidden.subscribe(function (reason) {
                                //   this.editorChanged.emit(this.editor);
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SlideEditorComponent.prototype.indicateTransform = function (event) {
        this.cursorClass = event.action;
    };
    SlideEditorComponent.prototype.noActieElement = function () {
        this.selectionService.unselect();
    };
    SlideEditorComponent.prototype.saveProxy = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.item.elements = this.selectionService.elements;
                        if (!this.item._id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateItem()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.createItem()];
                    case 3:
                        _a.sent();
                        this.router.navigate(['/dashboard/library/slide/', this.item._id]);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SlideEditorComponent.prototype.beforeUpdate = function (item) {
        item.Screen = this.screenSize;
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
                            return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["SlidesDataController"].get(this.Model, data.id)];
                        case 1:
                            _a.item = _c.sent();
                            this.nameService.setName(this.item.Name);
                            if (this.item.fonts) {
                                this.editor.fonts = this.item.fonts;
                            }
                            if (this.item.bgColor) {
                                this.editor.bgColor = this.item.bgColor;
                            }
                            if (this.item.color) {
                                this.editor.color = this.item.color;
                            }
                            if (this.item.colors) {
                                this.editor.colors = this.item.colors;
                            }
                            this.slideScript = this.item.script;
                            this.slidePlayer = this.item.player;
                            this.screenSize = this.item.Screen;
                            return [3 /*break*/, 3];
                        case 2:
                            this.screenSize = this.screenSizes[0];
                            this.item = { elements: [] };
                            _c.label = 3;
                        case 3:
                            if (!data.template) return [3 /*break*/, 5];
                            _b = this;
                            return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["ShareDataController"].get(this.Model, data.template)];
                        case 4:
                            _b.item = _c.sent();
                            this.item.publish_id = this.item._id;
                            delete this.item._id;
                            this.nameService.setName(this.item.Name);
                            this.editor.fonts = this.item.fonts;
                            this.editor.bgColor = this.item.bgColor;
                            this.editor.color = this.item.color;
                            this.editor.colors = this.item.colors;
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
                this.dirtyService.setDirty();
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
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_dirty_service__WEBPACK_IMPORTED_MODULE_9__["DirtyService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalRef"],
            _services_history_service__WEBPACK_IMPORTED_MODULE_10__["PreviousRouteService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownConfig"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"],
            _screen_size_service__WEBPACK_IMPORTED_MODULE_12__["ScreenSizeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SlideEditorComponent);
    return SlideEditorComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_3__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/clipart/clipart.component.html":
/*!********************************************************!*\
  !*** ./src/app/library/clipart/clipart.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-lobby *ngIf=\"items\" [items]=\"items\" mode=\"media\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\"\n  (newItem)=\"newItem({MediaType: 'image'})\"></app-lobby>\n\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open={{displayModalNew}}>\n    <app-slide-header title=\"NAVBAR.MEDIA\" iconClass=\"icon-images\" closeFn=\"true\" [enableSave]='true'\n      (save)=\"saveProxy()\" className=\"library-cat\" (closed)=\"closeSlider()\"></app-slide-header>\n    <div class=\"pt50\"></div>\n    <div class=\"scroller\">\n      <form *ngIf=\"item\" [formGroup]=\"itemForm\">\n\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <div class=\"form-group\">\n              <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n              <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\" required\n                formControlName=\"Name\" #Name class=\"form-control\">\n              <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n            </div>\n\n          </div>\n          <div class=\"col-6\">\n            <label for=\"Pack\">{{ \"LIBRARY.MEDIAPACK\" | translate }}:</label>\n            <div class=\"btn-group\" dropdown>\n              <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\" required\n                formControlName=\"Pack\" #Pack class=\"form-control form-select\">\n              <button id=\"button-split\" type=\"button\" dropdownToggle\n                class=\"btn btn-success dropdown-toggle dropdown-toggle-split form-select-btn\" aria-controls=\"dropdown-split\">\n                <span class=\"caret\"></span>\n                <span class=\"sr-only\">Split button!</span>\n              </button>\n              <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-split\">\n                <li role=\"menuitem\" *ngFor=\"let p of packs\"><a class=\"dropdown-item media-pack-item\"\n                    (click)=\"setPack(p)\">{{p.Name}}</a></li>\n\n              </ul>\n            </div>\n          </div>\n\n        </div>\n\n\n\n\n\n\n        <div class=\"form-group\">\n          <label for=\"libraryName\">{{ \"LIBRARY.MEDIATYPE\" | translate }}:</label>\n          <div class=\"btn-group btn-group-lg\" role=\"group\">\n            <a *ngFor=\"let c of types\" class=\"btn btn-secondary {{item.MediaType === c.name ? 'active': ''}}\"\n              (click)=\"selectType(c)\"> <span class=\"{{c.icon}}\"></span> {{c.name}}</a>\n          </div>\n          <!-- \n          <select formControlName=\"MediaType\" (change)=\"selectType($event)\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.MediaType.errors }\" #MediaType class=\"form-control\">\n            <option *ngFor=\"let c of types\" [ngValue]=\"c.name\">{{c.name}}</option>\n          </select> -->\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"item.MediaType==='image'\">\n          <app-upload [item]=\"item\" (change)=\"change($event)\"></app-upload>\n          <small id=\"screenHelp\" class=\"form-text text-muted \">{{ \"LIBRARY.IMAGE_DESCRIPTION\" | translate }}</small>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"item.MediaType==='video'\">\n          <label for=\"Embed\">{{ \"LIBRARY.EMBED\" | translate }}:</label>\n          <textarea formControlName=\"Embed\" class=\"form-control\"></textarea>\n          <small id=\"embedHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.EMBED_HELP\" | translate }}</small>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"item.MediaType==='url'\">\n          <label for=\"Url\">{{ \"LIBRARY.URL\" | translate }}:</label>\n          <textarea formControlName=\"Url\" class=\"form-control\"></textarea>\n          <small id=\"urlHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.URL_HELP\" | translate }}</small>\n        </div>\n\n        <app-media-preview [item]=\"item\" width=\"450\" height=\"300\"></app-media-preview>\n      </form>\n\n    </div>\n    <app-slide-footer className=\"library-cat\"></app-slide-footer>\n  </dialog>\n</div>\n\n\n<div class=\"filter-slide {{filterActive}}\">\n  <div class=\"form-group pt10\">\n    <label for=\"searchPhrase\">{{ \"LIBRARY.SEARCHTERM\" | translate }}:</label>\n    <div class=\"input-group \">\n      <input type=\"text\" name=\"searchPhrase\" id=\"searchPhrase\" [(ngModel)]=\"filter.term\" class=\"form-control\" />\n      <div class=\"input-group-prepend\">\n        <button class=\"btn btn-outline-secondary\" type=\"button\"> <i class=\"icon-search\"></i></button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"filterMediaType\">{{ \"LIBRARY.MEDIAPACK\" | translate }}:</label>\n    <select [(ngModel)]=\"filter.pack\" name=\"filterMediaPack\" id=\"filterMediaPack\" (change)=\"applyFilter()\"\n      class=\"form-control\">\n      <option [ngValue]=\"'All'\">All</option>\n      <option *ngFor=\"let c of packs\" [ngValue]=\"c.Name\">{{c.Name}}</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"filterMediaType\">{{ \"LIBRARY.MEDIATYPE\" | translate }}:</label>\n\n\n    <select [(ngModel)]=\"filter.type\" name=\"filterMediaType\" id=\"filterMediaType\" (change)=\"applyFilter()\"\n      class=\"form-control\">\n      <option [ngValue]=\"'All'\">All</option>\n      <option *ngFor=\"let c of types\" [ngValue]=\"c.name\">{{c.name}}</option>\n    </select>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/library/clipart/clipart.component.scss":
/*!********************************************************!*\
  !*** ./src/app/library/clipart/clipart.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvY2xpcGFydC9jbGlwYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/library/clipart/clipart.component.ts":
/*!******************************************************!*\
  !*** ./src/app/library/clipart/clipart.component.ts ***!
  \******************************************************/
/*! exports provided: ClipartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipartComponent", function() { return ClipartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/services/filter.service.ts");








var ClipartComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClipartComponent, _super);
    function ClipartComponent(_ngZone, filterService, translateService, dirtyService, formBuilder, changeDetectorRef) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService, changeDetectorRef, formBuilder) || this;
        _this._ngZone = _ngZone;
        _this.filterService = filterService;
        _this.translateService = translateService;
        _this.dirtyService = dirtyService;
        _this.formBuilder = formBuilder;
        _this.changeDetectorRef = changeDetectorRef;
        _this.filterActive = 'closing';
        _this.types = [{ name: 'image', icon: 'icon-image' },
            { name: 'video', icon: 'icon-play' },
            { name: 'url', icon: 'icon-chain' }];
        _this.uploading = false;
        _this.filter = {};
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["ClipArt"];
        _this.Model = 'ClipArt';
        _this.filterService.filter.subscribe(function () {
            _this.filterActive = (_this.filterActive === 'closing') ? 'active' : 'closing';
        });
        return _this;
    }
    ClipartComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadItems({});
                        _a = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["MediaPack"].query('MediaPack', {})];
                    case 1:
                        _a.packs = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClipartComponent.prototype.applyFilter = function () {
        var filter = {};
        if (this.filter.type && this.filter.type !== 'All') {
            Object.assign(filter, { MediaType: this.filter.type });
        }
        if (this.filter.pack && this.filter.pack !== 'All') {
            Object.assign(filter, { Pack: this.filter.pack });
        }
        this.loadItems(filter);
    };
    ClipartComponent.prototype.setPack = function (pack) {
        this.itemForm.controls['Pack'].setValue(pack.Name);
    };
    ClipartComponent.prototype.saveLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.updateItem();
                return [2 /*return*/];
            });
        });
    };
    ClipartComponent.prototype.getFormFields = function () {
        var fields = [{
                name: 'Name',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            },
            {
                name: 'MediaType',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            },
            {
                name: 'Pack',
                validator: []
            },
            {
                name: 'Embed',
                validator: []
            },
            {
                name: 'Url',
                validator: []
            }
        ];
        return fields;
    };
    ClipartComponent.prototype.saveProxy = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var pack, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.validate()) {
                            return [2 /*return*/];
                        }
                        pack = this.packs.filter(function (item) {
                            return item.Name === _this.item.Pack;
                        });
                        if (!(!pack || pack.length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["MediaPack"].create('MediaPack', { Name: this.item.Pack })];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["MediaPack"].query('MediaPack', {})];
                    case 2:
                        _a.packs = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (!this.item._id) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.updateItem()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.createItem()];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        this.items = this.items.map(function (item) {
                            var obj = {};
                            Object.assign(obj, item);
                            return obj;
                        });
                        this.changeDetectorRef.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClipartComponent.prototype.createLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.createItem();
                return [2 /*return*/];
            });
        });
    };
    ClipartComponent.prototype.compareFn = function (a, b) {
        if (b) {
            return a.name === b.name;
        }
    };
    ClipartComponent.prototype.selectType = function (change) {
        this.itemForm.controls['MediaType'].setValue(change.name);
        this.item.MediaType = change.name;
    };
    ClipartComponent.prototype.change = function (state) {
        if (typeof state === 'string') {
            this.uploading = false;
            this.uploadResult = state;
        }
        else {
            this.uploading = true;
            if (!this.itemForm.controls.Name.value) {
                var arr = state.target.value.split('\\');
                this.itemForm.controls.Name.setValue(arr[arr.length - 1]);
            }
        }
        //   this.dirtyService.change({ img: state });
    };
    ClipartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clipart',
            template: __webpack_require__(/*! ./clipart.component.html */ "./src/app/library/clipart/clipart.component.html"),
            styles: [__webpack_require__(/*! ./clipart.component.scss */ "./src/app/library/clipart/clipart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _services_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__["DirtyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ClipartComponent);
    return ClipartComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/finder/finder.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/finder/finder.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #toolbar let-item=\"item\">\n  <div class=\"btn-group\" data-toggle=\"buttons\">\n    <button class=\"btn-tool\" (click)=\"toggleFilterSlider()\"><span class=\"icon-search\"></span></button>\n  </div>\n</ng-template>\n\n<ng-template #toolbarTemplate let-item=\"item\">\n  <ul class=\"sqr-toolbar btn-group\" role=\"group\">\n    <li>\n      <button class=\"btn btn-secondary btn-md btn-success\" (click)=\"startFromTemplate(item);\"> <i\n          class=\"icon-insert-template\"></i>\n      </button>\n    </li>\n    <li>\n\n    </li>\n  </ul>\n</ng-template>\n\n\n\n\n<div class=\"slider-container-wide {{active}} shadow\">\n  <dialog open={{active}}>\n    <app-slide-header closeFn=\"true\" [toolbar]=\"toolbar\" title=\"NAVBAR.FINDER\" className=\"library-cat\"\n      (closed)=\"closeSlider()\"></app-slide-header>\n\n  \n\n    <div class=\"filter-slide {{filterActive}}\">\n      <div class=\"input-group pt50\">\n        <input type=\"text\" name=\"searchPhrase\" class=\"form-control\" />\n        <div class=\"input-group-prepend\">\n          <button class=\"btn btn-outline-secondary\" type=\"button\"> <i class=\"icon-search\"></i></button>\n        </div>\n      </div>\n    </div>\n\n    <ul class=\"nav nav-tabs pt50\">\n\n      <li class=\"nav-item {{tab.selected ? 'library-cat': ''}} \" *ngFor=\"let tab of tabs\" (click)=\"tabSelect(tab)\">\n        <a class=\"nav-link {{tab.selected}} \">\n          <h5><i class=\"{{tab.icon}}\"></i> {{tab.name | translate}}</h5>\n        </a>\n      </li>\n\n\n      <!-- <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a class=\"nav-link {{tab.selected}}\" (click)=\"tabSelect(tab)\">{{tab.name | translate}}</a>\n      </li> -->\n    </ul>\n\n    <div class=\"no-margin nohor pt10\" *ngIf=\"selectedTab && selectedTab.alias === 'media'\" [appAdaptHeight]=\"220\">\n         <app-lobby [items]=\"items\" itemClass=\"small\" mode=\"media-finder\" (selectItem)=\"selectItem($event)\"\n        (deleteItem)=\"deleteItem($event)\"></app-lobby>\n    </div>\n    <div class=\"no-margin nohor pt10\" *ngIf=\"selectedTab && selectedTab.alias ==='slide'\" [appAdaptHeight]=\"220\">\n          <app-lobby [items]=\"slides\" itemClass=\"small\" mode=\"object-finder\" (selectItem)=\"selectItem($event)\"\n        (deleteItem)=\"deleteItem($event)\"></app-lobby>\n    </div>\n    <div class=\"no-margin nohor pt10\" *ngIf=\"selectedTab && selectedTab.alias === 'shares'\" [appAdaptHeight]=\"220\">\n        <app-lobby [items]=\"shares\" itemClass=\"small\" mode='media-finder' [toolbar]=\"toolbarTemplate\" [noNew]=\"true\">\n      </app-lobby>\n    </div>\n\n    <app-slide-footer className=\"library-cat\"></app-slide-footer>\n  </dialog>\n</div>\n"

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
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.active = 'closing';
                return [2 /*return*/];
            });
        }); });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__["DirtyService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], FinderComponent);
    return FinderComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/library.component.html":
/*!************************************************!*\
  !*** ./src/app/library/library.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide-header title=\"NAVBAR.LIBRARY\" mode=\"inline\" iconClass=\"icon-archive\" className=\"library-cat\">\n</app-slide-header>\n<div style=\"padding: 10px;\">\n    <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item\" *ngFor=\"let tab of tabs\" [routerLink]=\"['/dashboard/library/', tab.alias]\"\n            routerLinkActive=\"library-cat\">\n            <a class=\"nav-link {{tab.selected}}\">\n                <h5><i class=\"{{tab.icon}}\"></i> {{tab.name | translate}}</h5>\n            </a>\n        </li>\n\n        <li class=\"nav-item filter-tab\">\n            <a class=\"nav-link true\"  (click)=\"toggleFilter()\">\n                <h5><span class=\"icon-search\"></span></h5>\n            </a>\n        </li>\n    </ul>\n    <div class=\"nav-tabs-bar\"></div>\n    <div [appAdaptHeight]=\"130\" class=\"nohor\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/library/library.component.scss":
/*!************************************************!*\
  !*** ./src/app/library/library.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\n  float: right; }\n\n:host-context(.rtl) .filter-tab {\n  float: left;\n  position: absolute;\n  left: 10px; }\n\n:host-context(.ltr) .filter-tab {\n  float: right;\n  position: absolute;\n  right: 10px; }\n\n.nav.nav-tabs {\n  height: 40px;\n  width: 100%; }\n\n.nav-tabs-bar {\n  margin-bottom: 10px;\n  width: 100%;\n  height: 4px;\n  background: #264356;\n  background: linear-gradient(90deg, #264356 0%, #3c7399 99%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGxpYnJhcnlcXGxpYnJhcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpYnJhcnkvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksWUFBWSxFQUFBOztBQU1oQjtFQUdRLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUlsQjtFQUdRLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUluQjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFFSSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkNsQ3NCO0VEbUN0QiwyREFBK0UsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbGlicmFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuQGltcG9ydCAnLi4vLi4vc2Fzcy9fdmFyaWFibGVzJztcclxuXHJcbi5yaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4udGFiLWFwcGVuZHtcclxuICAgIFxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5ydGwpXHJcbntcclxuICAgIC5maWx0ZXItdGFie1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5sdHIpXHJcbntcclxuICAgIC5maWx0ZXItdGFie1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXYubmF2LXRhYnN7XHJcbiAgICBoZWlnaHQ6IDQwcHg7IFxyXG4gICAgd2lkdGg6IDEwMCU7ICAgXHJcbn1cclxuLm5hdi10YWJzLWJhclxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6JGNvbG9yLWxpZ2h0Ymx1ZTE7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRjb2xvci1saWdodGJsdWUxIDAlLCAkY29sb3ItbGlnaHRibHVlMiA5OSUpO1xyXG59XHJcblxyXG4iLCJcclxuJGNvbG9yLWdyYXk6ICNlM2U0ZTU7XHJcbiRjb2xvci1kYXJrYmx1ZTE6ICMxNjI0MzM7XHJcbiRjb2xvci1kYXJrYmx1ZTI6ICMyYTQ1NjM7XHJcbiRjb2xvci1saWdodGJsdWUxOiAjMjY0MzU2O1xyXG4kY29sb3ItbGlnaHRibHVlMjogIzNjNzM5OTtcclxuJGNvbG9yLW9yYW5nZTogI2ZjNjYwMDtcclxuJGNvbG9yLWN5YW46ICMwMGZmZjY7XHJcbiRjb2xvci1zY3JlZW46ICMwMGNmZmY7XHJcbiRjb2xvci1zY3JlZW4tZ3JvdXA6ICMwMGZmZjY7XHJcbiRjb2xvci1saWJyYXJ5OiAjOTZmZjAwO1xyXG4kY29sb3IteWVsbG93OiAjZmZmZjAwO1xyXG4kY29sb3ItcHVycGxlOiAjZjNiN2ViO1xyXG4kY29sb3ItZ3JlZW46ICM5NmZmMDA7XHJcbiRjb2xvci1ibGFjazogIzIyMjtcclxuJGNvbG9yLWdyYXl3aGl0ZTogI0ZGRTtcclxuJGNvbG9yLXRvb2xiYXI6ICNmOGY5ZmE7XHJcbiBcclxuXHJcbiBcclxuXHJcbiAiXX0= */"

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
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/dirty.service */ "./src/app/services/dirty.service.ts");








var LibraryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LibraryComponent, _super);
    function LibraryComponent(_ngZone, translateService, router, filterService, dirtyService, changeDetectorRef) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService, changeDetectorRef) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.router = router;
        _this.filterService = filterService;
        _this.dirtyService = dirtyService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.types = ['media', 'slide', 'fonts', 'clipart', 'shares'];
        _this.tabsCollection = {
            'media': {
                name: 'NAVBAR.MEDIA', icon: 'icon-images'
            },
            'slide': {
                name: 'NAVBAR.SLIDES', icon: 'icon-brush'
            },
            'fonts': {
                name: 'NAVBAR.FONTS', icon: 'icon-text-color'
            },
            'clipart': {
                name: 'NAVBAR.CLIPART', icon: 'icon-colours'
            },
            'shares': {
                name: 'NAVBAR.SHARED', icon: 'icon-insert-template'
            },
        };
        _this.tabs = [];
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_4__["LibraryDataController"];
        _this.Model = 'Library';
        return _this;
    }
    LibraryComponent.prototype.tabSelect = function (tab) {
        this.router.navigate(['/dashboard/library/', tab.alias]);
        this.tabs.forEach(function (tabItem) { return tabItem.selected = false; });
        tab.selected = true;
        this.selectedTab = tab;
    };
    LibraryComponent.prototype.toggleFilter = function () {
        this.filterService.toggleFilter();
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
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["SlidesDataController"].query(this.Model, this.query)];
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
            styles: [__webpack_require__(/*! ./library.component.scss */ "./src/app/library/library.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_filter_service__WEBPACK_IMPORTED_MODULE_6__["FilterService"],
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_7__["DirtyService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
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
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slides/slides.component */ "./src/app/library/slides/slides.component.ts");
/* harmony import */ var _library_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _editor_editor_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../editor/editor.module */ "./src/app/editor/editor.module.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/library/upload/upload.component.ts");
/* harmony import */ var _editor_slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../editor/slide-editor/slide-editor.component */ "./src/app/editor/slide-editor/slide-editor.component.ts");
/* harmony import */ var _shares_shares_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shares/shares.component */ "./src/app/library/shares/shares.component.ts");
/* harmony import */ var _myfonts_myfonts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./myfonts/myfonts.component */ "./src/app/library/myfonts/myfonts.component.ts");
/* harmony import */ var _clipart_clipart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clipart/clipart.component */ "./src/app/library/clipart/clipart.component.ts");
















var libraryRoutes = [
    {
        path: 'library', component: _library_component__WEBPACK_IMPORTED_MODULE_8__["LibraryComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'media'
            },
            { path: 'media', component: _media_media_component__WEBPACK_IMPORTED_MODULE_6__["MediaComponent"] },
            { path: 'fonts', component: _myfonts_myfonts_component__WEBPACK_IMPORTED_MODULE_13__["MyfontsComponent"] },
            { path: 'clipart', component: _clipart_clipart_component__WEBPACK_IMPORTED_MODULE_14__["ClipartComponent"] },
            { path: 'shares', component: _shares_shares_component__WEBPACK_IMPORTED_MODULE_12__["SharesComponent"] },
            { path: 'slide', component: _slides_slides_component__WEBPACK_IMPORTED_MODULE_7__["SlidesComponent"] },
        ]
    },
    { path: 'library/slide/:id', component: _editor_slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_11__["SlideEditorComponent"] },
    { path: 'library/slide/:id/template/:template', component: _editor_slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_11__["SlideEditorComponent"] },
];
var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _editor_editor_module__WEBPACK_IMPORTED_MODULE_9__["EditorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            exports: [
                _library_component__WEBPACK_IMPORTED_MODULE_8__["LibraryComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            ],
            entryComponents: [
                _library_component__WEBPACK_IMPORTED_MODULE_8__["LibraryComponent"],
            ],
            declarations: [
                _media_media_component__WEBPACK_IMPORTED_MODULE_6__["MediaComponent"],
                _slides_slides_component__WEBPACK_IMPORTED_MODULE_7__["SlidesComponent"],
                _library_component__WEBPACK_IMPORTED_MODULE_8__["LibraryComponent"],
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_10__["UploadComponent"],
                _shares_shares_component__WEBPACK_IMPORTED_MODULE_12__["SharesComponent"],
                _myfonts_myfonts_component__WEBPACK_IMPORTED_MODULE_13__["MyfontsComponent"],
                _clipart_clipart_component__WEBPACK_IMPORTED_MODULE_14__["ClipartComponent"],
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

module.exports = "<app-lobby *ngIf=\"items\" [items]=\"items\" mode=\"media\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\"\n  (newItem)=\"newItem({MediaType: 'image'})\"></app-lobby>\n\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open={{displayModalNew}}>\n    <app-slide-header title=\"NAVBAR.MEDIA\" iconClass=\"icon-images\" closeFn=\"true\" [enableSave]='true'\n      (save)=\"saveProxy()\" className=\"library-cat\" (closed)=\"closeSlider()\"></app-slide-header>\n    <div class=\"pt50\"></div>\n    <div class=\"scroller\">\n      <form *ngIf=\"item\" [formGroup]=\"itemForm\">\n\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <div class=\"form-group\">\n              <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n              <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\" required\n                formControlName=\"Name\" #Name class=\"form-control\">\n              <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n            </div>\n\n          </div>\n          <div class=\"col-6\">\n            <label for=\"Pack\">{{ \"LIBRARY.MEDIAPACK\" | translate }}:</label>\n            <div class=\"btn-group\" dropdown>\n              <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\" required\n                formControlName=\"Pack\" #Pack class=\"form-control form-select\">\n              <button id=\"button-split\" type=\"button\" dropdownToggle\n                class=\"btn btn-success dropdown-toggle dropdown-toggle-split form-select-btn\" aria-controls=\"dropdown-split\">\n                <span class=\"caret\"></span>\n                <span class=\"sr-only\">Split button!</span>\n              </button>\n              <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-split\">\n                <li role=\"menuitem\" *ngFor=\"let p of packs\"><a class=\"dropdown-item media-pack-item\"\n                    (click)=\"setPack(p)\">{{p.Name}}</a></li>\n\n              </ul>\n            </div>\n          </div>\n\n        </div>\n\n\n\n\n\n\n        <div class=\"form-group\">\n          <label for=\"libraryName\">{{ \"LIBRARY.MEDIATYPE\" | translate }}:</label>\n          <div class=\"btn-group btn-group-lg\" role=\"group\">\n            <a *ngFor=\"let c of types\" class=\"btn btn-secondary {{item.MediaType === c.name ? 'active': ''}}\"\n              (click)=\"selectType(c)\"> <span class=\"{{c.icon}}\"></span> {{c.name}}</a>\n          </div>\n          <!-- \n          <select formControlName=\"MediaType\" (change)=\"selectType($event)\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.MediaType.errors }\" #MediaType class=\"form-control\">\n            <option *ngFor=\"let c of types\" [ngValue]=\"c.name\">{{c.name}}</option>\n          </select> -->\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"item.MediaType==='image'\">\n          <app-upload [item]=\"item\" (change)=\"change($event)\"></app-upload>\n          <small id=\"screenHelp\" class=\"form-text text-muted \">{{ \"LIBRARY.IMAGE_DESCRIPTION\" | translate }}</small>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"item.MediaType==='video'\">\n          <label for=\"Embed\">{{ \"LIBRARY.EMBED\" | translate }}:</label>\n          <textarea formControlName=\"Embed\" class=\"form-control\"></textarea>\n          <small id=\"embedHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.EMBED_HELP\" | translate }}</small>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"item.MediaType==='url'\">\n          <label for=\"Url\">{{ \"LIBRARY.URL\" | translate }}:</label>\n          <textarea formControlName=\"Url\" class=\"form-control\"></textarea>\n          <small id=\"urlHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.URL_HELP\" | translate }}</small>\n        </div>\n\n        <app-media-preview [item]=\"item\" width=\"450\" height=\"300\"></app-media-preview>\n      </form>\n\n    </div>\n    <app-slide-footer className=\"library-cat\"></app-slide-footer>\n  </dialog>\n</div>\n\n\n<div class=\"filter-slide {{filterActive}}\">\n  <div class=\"form-group pt10\">\n    <label for=\"searchPhrase\">{{ \"LIBRARY.SEARCHTERM\" | translate }}:</label>\n    <div class=\"input-group \">\n      <input type=\"text\" name=\"searchPhrase\" id=\"searchPhrase\" [(ngModel)]=\"filter.term\" class=\"form-control\" />\n      <div class=\"input-group-prepend\">\n        <button class=\"btn btn-outline-secondary\" type=\"button\"> <i class=\"icon-search\"></i></button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"filterMediaType\">{{ \"LIBRARY.MEDIAPACK\" | translate }}:</label>\n    <select [(ngModel)]=\"filter.pack\" name=\"filterMediaPack\" id=\"filterMediaPack\" (change)=\"applyFilter()\"\n      class=\"form-control\">\n      <option [ngValue]=\"'All'\">All</option>\n      <option *ngFor=\"let c of packs\" [ngValue]=\"c.Name\">{{c.Name}}</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"filterMediaType\">{{ \"LIBRARY.MEDIATYPE\" | translate }}:</label>\n\n\n    <select [(ngModel)]=\"filter.type\" name=\"filterMediaType\" id=\"filterMediaType\" (change)=\"applyFilter()\"\n      class=\"form-control\">\n      <option [ngValue]=\"'All'\">All</option>\n      <option *ngFor=\"let c of types\" [ngValue]=\"c.name\">{{c.name}}</option>\n    </select>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/library/media/media.component.scss":
/*!****************************************************!*\
  !*** ./src/app/library/media/media.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fancy-thumb {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n\n.form-select {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.form-select-btn {\n  margin: 0;\n  border: 0; }\n\n.fancy-image {\n  width: 100%;\n  height: 250px;\n  background-size: cover !important;\n  background-repeat: no-repeat !important; }\n\n.media-pack-item {\n  cursor: pointer;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9tZWRpYS9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGxpYnJhcnlcXG1lZGlhXFxtZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPLEVBQUE7O0FBR1g7RUFFSSw2QkFBNkI7RUFDN0IsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksU0FBUTtFQUNSLFNBQVEsRUFBQTs7QUFHWjtFQUVJLFdBQVU7RUFDVixhQUFhO0VBQ2IsaUNBQWdDO0VBQ2hDLHVDQUFzQyxFQUFBOztBQUkxQztFQUNJLGVBQWU7RUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L21lZGlhL21lZGlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZmFuY3ktdGh1bWJcclxueyAgIFxyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLmZvcm0tc2VsZWN0e1xyXG4gICAgIFxyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmZvcm0tc2VsZWN0LWJ0bntcclxuICAgIG1hcmdpbjowO1xyXG4gICAgYm9yZGVyOjA7ICAgIFxyXG4gfVxyXG5cclxuLmZhbmN5LWltYWdlXHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciFpbXBvcnRhbnQ7ICAgICBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gXHJcbi5tZWRpYS1wYWNrLWl0ZW17XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG59XHJcbiBcclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/services/filter.service.ts");








var MediaComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MediaComponent, _super);
    function MediaComponent(_ngZone, filterService, translateService, dirtyService, formBuilder, changeDetectorRef) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService, changeDetectorRef, formBuilder) || this;
        _this._ngZone = _ngZone;
        _this.filterService = filterService;
        _this.translateService = translateService;
        _this.dirtyService = dirtyService;
        _this.formBuilder = formBuilder;
        _this.changeDetectorRef = changeDetectorRef;
        _this.filterActive = 'closing';
        _this.types = [{ name: 'image', icon: 'icon-image' },
            { name: 'video', icon: 'icon-play' },
            { name: 'url', icon: 'icon-chain' }];
        _this.uploading = false;
        _this.filter = {};
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["LibraryDataController"];
        _this.Model = 'Library';
        _this.filterService.filter.subscribe(function () {
            _this.filterActive = (_this.filterActive === 'closing') ? 'active' : 'closing';
        });
        return _this;
    }
    MediaComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadItems({});
                        _a = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["MediaPack"].query('MediaPack', {})];
                    case 1:
                        _a.packs = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MediaComponent.prototype.applyFilter = function () {
        var filter = {};
        if (this.filter.type && this.filter.type !== 'All') {
            Object.assign(filter, { MediaType: this.filter.type });
        }
        if (this.filter.pack && this.filter.pack !== 'All') {
            Object.assign(filter, { Pack: this.filter.pack });
        }
        this.loadItems(filter);
    };
    MediaComponent.prototype.setPack = function (pack) {
        this.itemForm.controls['Pack'].setValue(pack.Name);
    };
    MediaComponent.prototype.saveLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.updateItem();
                return [2 /*return*/];
            });
        });
    };
    MediaComponent.prototype.getFormFields = function () {
        var fields = [{
                name: 'Name',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            },
            {
                name: 'MediaType',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            },
            {
                name: 'Pack',
                validator: []
            },
            {
                name: 'Embed',
                validator: []
            },
            {
                name: 'Url',
                validator: []
            }
        ];
        return fields;
    };
    MediaComponent.prototype.saveProxy = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var pack, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.validate()) {
                            return [2 /*return*/];
                        }
                        pack = this.packs.filter(function (item) {
                            return item.Name === _this.item.Pack;
                        });
                        if (!(!pack || pack.length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["MediaPack"].create('MediaPack', { Name: this.item.Pack })];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["MediaPack"].query('MediaPack', {})];
                    case 2:
                        _a.packs = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (!this.item._id) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.updateItem()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.createItem()];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        this.items = this.items.map(function (item) {
                            var obj = {};
                            Object.assign(obj, item);
                            return obj;
                        });
                        this.changeDetectorRef.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    MediaComponent.prototype.createLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.createItem();
                return [2 /*return*/];
            });
        });
    };
    MediaComponent.prototype.compareFn = function (a, b) {
        if (b) {
            return a.name === b.name;
        }
    };
    MediaComponent.prototype.selectType = function (change) {
        this.itemForm.controls['MediaType'].setValue(change.name);
        this.item.MediaType = change.name;
    };
    MediaComponent.prototype.change = function (state) {
        if (typeof state === 'string') {
            this.uploading = false;
            this.uploadResult = state;
        }
        else {
            this.uploading = true;
            if (!this.itemForm.controls.Name.value) {
                var arr = state.target.value.split('\\');
                this.itemForm.controls.Name.setValue(arr[arr.length - 1]);
            }
        }
        //   this.dirtyService.change({ img: state });
    };
    MediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.component.html */ "./src/app/library/media/media.component.html"),
            styles: [__webpack_require__(/*! ./media.component.scss */ "./src/app/library/media/media.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _services_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__["DirtyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], MediaComponent);
    return MediaComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/myfonts/myfonts.component.html":
/*!********************************************************!*\
  !*** ./src/app/library/myfonts/myfonts.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-lobby *ngIf=\"items\" [items]=\"items\" mode=\"media\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\"\n  (newItem)=\"newItem()\"></app-lobby>\n\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open={{displayModalNew}}>\n    <app-slide-header title=\"NAVBAR.FONTS\" iconClass=\"icon-fonts\" closeFn=\"true\" [enableSave]='true'\n      (save)=\"saveProxy()\" className=\"library-cat\" (closed)=\"closeSlider()\"></app-slide-header>\n    <div class=\"pt50\"></div>\n    <div class=\"scroller\">\n      <form *ngIf=\"item\" [formGroup]=\"itemForm\">\n\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <div class=\"form-group\">\n              <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n              <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\" required\n                formControlName=\"Name\" #Name class=\"form-control\">\n              <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n            </div>\n\n          </div>\n          <div class=\"col-6\">\n            <label for=\"Pack\">{{ \"LIBRARY.MEDIAPACK\" | translate }}:</label>\n            <div class=\"btn-group\" dropdown>\n              <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\" required\n                formControlName=\"Pack\" #Pack class=\"form-control form-select\">\n              <button id=\"button-split\" type=\"button\" dropdownToggle\n                class=\"btn btn-success dropdown-toggle dropdown-toggle-split form-select-btn\"\n                aria-controls=\"dropdown-split\">\n                <span class=\"caret\"></span>\n                <span class=\"sr-only\">Split button!</span>\n              </button>\n              <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-split\">\n                <li role=\"menuitem\" *ngFor=\"let p of packs\"><a class=\"dropdown-item media-pack-item\"\n                    (click)=\"setPack(p)\">{{p.Name}}</a></li>\n\n              </ul>\n            </div>\n          </div>\n\n        </div>\n        {{item| json}}\n        <div class=\"form-group\">\n          <app-upload [item]=\"item\" fileType=\"font\" (change)=\"change($event)\"></app-upload>\n          <small id=\"screenHelp\" class=\"form-text text-muted \">{{ \"LIBRARY.IMAGE_DESCRIPTION\" | translate }}</small>\n        </div>\n\n        <app-media-preview [item]=\"item\" width=\"450\" height=\"300\"></app-media-preview>\n      </form>\n\n    </div>\n    <app-slide-footer className=\"library-cat\"></app-slide-footer>\n  </dialog>\n</div>\n\n\n<div class=\"filter-slide {{filterActive}}\">\n  <div class=\"form-group pt10\">\n    <label for=\"searchPhrase\">{{ \"LIBRARY.SEARCHTERM\" | translate }}:</label>\n    <div class=\"input-group \">\n      <input type=\"text\" name=\"searchPhrase\" id=\"searchPhrase\" [(ngModel)]=\"filter.term\" class=\"form-control\" />\n      <div class=\"input-group-prepend\">\n        <button class=\"btn btn-outline-secondary\" type=\"button\"> <i class=\"icon-search\"></i></button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"filterMediaType\">{{ \"LIBRARY.MEDIAPACK\" | translate }}:</label>\n    <select [(ngModel)]=\"filter.pack\" name=\"filterMediaPack\" id=\"filterMediaPack\" (change)=\"applyFilter()\"\n      class=\"form-control\">\n      <option [ngValue]=\"'All'\">All</option>\n      <option *ngFor=\"let c of packs\" [ngValue]=\"c.Name\">{{c.Name}}</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"filterMediaType\">{{ \"LIBRARY.MEDIATYPE\" | translate }}:</label>\n\n\n    <select [(ngModel)]=\"filter.type\" name=\"filterMediaType\" id=\"filterMediaType\" (change)=\"applyFilter()\"\n      class=\"form-control\">\n      <option [ngValue]=\"'All'\">All</option>\n      <option *ngFor=\"let c of types\" [ngValue]=\"c.name\">{{c.name}}</option>\n    </select>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/library/myfonts/myfonts.component.scss":
/*!********************************************************!*\
  !*** ./src/app/library/myfonts/myfonts.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbXlmb250cy9teWZvbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/library/myfonts/myfonts.component.ts":
/*!******************************************************!*\
  !*** ./src/app/library/myfonts/myfonts.component.ts ***!
  \******************************************************/
/*! exports provided: MyfontsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfontsComponent", function() { return MyfontsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.component */ "./src/app/data.component.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/services/filter.service.ts");








var MyfontsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyfontsComponent, _super);
    function MyfontsComponent(_ngZone, filterService, translateService, dirtyService, formBuilder, changeDetectorRef) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService, changeDetectorRef, formBuilder) || this;
        _this._ngZone = _ngZone;
        _this.filterService = filterService;
        _this.translateService = translateService;
        _this.dirtyService = dirtyService;
        _this.formBuilder = formBuilder;
        _this.changeDetectorRef = changeDetectorRef;
        _this.filterActive = 'closing';
        _this.types = [{ name: 'image', icon: 'icon-image' },
            { name: 'video', icon: 'icon-play' },
            { name: 'url', icon: 'icon-chain' }];
        _this.uploading = false;
        _this.filter = {};
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["Font"];
        _this.Model = 'Font';
        _this.filterService.filter.subscribe(function () {
            _this.filterActive = (_this.filterActive === 'closing') ? 'active' : 'closing';
        });
        return _this;
    }
    MyfontsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadItems({});
                        _a = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["MediaPack"].query('MediaPack', {})];
                    case 1:
                        _a.packs = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyfontsComponent.prototype.applyFilter = function () {
        var filter = {};
        if (this.filter.type && this.filter.type !== 'All') {
            Object.assign(filter, { MediaType: this.filter.type });
        }
        if (this.filter.pack && this.filter.pack !== 'All') {
            Object.assign(filter, { Pack: this.filter.pack });
        }
        this.loadItems(filter);
    };
    MyfontsComponent.prototype.setPack = function (pack) {
        this.itemForm.controls['Pack'].setValue(pack.Name);
    };
    MyfontsComponent.prototype.saveLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.updateItem();
                return [2 /*return*/];
            });
        });
    };
    MyfontsComponent.prototype.getFormFields = function () {
        var fields = [{
                name: 'Name',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            },
            {
                name: 'Pack',
                validator: []
            }
        ];
        return fields;
    };
    MyfontsComponent.prototype.saveProxy = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var pack, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.validate()) {
                            return [2 /*return*/];
                        }
                        pack = this.packs.filter(function (item) {
                            return item.Name === _this.item.Pack;
                        });
                        if (!(!pack || pack.length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["MediaPack"].create('MediaPack', { Name: this.item.Pack })];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["MediaPack"].query('MediaPack', {})];
                    case 2:
                        _a.packs = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (!this.item._id) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.updateItem()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.createItem()];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        this.items = this.items.map(function (item) {
                            var obj = {};
                            Object.assign(obj, item);
                            return obj;
                        });
                        this.changeDetectorRef.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyfontsComponent.prototype.createLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.createItem();
                return [2 /*return*/];
            });
        });
    };
    MyfontsComponent.prototype.compareFn = function (a, b) {
        if (b) {
            return a.name === b.name;
        }
    };
    MyfontsComponent.prototype.selectType = function (change) {
        this.itemForm.controls['MediaType'].setValue(change.name);
        this.item.MediaType = change.name;
    };
    MyfontsComponent.prototype.change = function (state) {
        if (typeof state === 'string') {
            this.uploading = false;
            this.uploadResult = state;
        }
        else {
            this.uploading = true;
            if (!this.itemForm.controls.Name.value) {
                var arr = state.target.value.split('\\');
                this.itemForm.controls.Name.setValue(arr[arr.length - 1]);
            }
        }
        //   this.dirtyService.change({ img: state });
    };
    MyfontsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myfonts',
            template: __webpack_require__(/*! ./myfonts.component.html */ "./src/app/library/myfonts/myfonts.component.html"),
            styles: [__webpack_require__(/*! ./myfonts.component.scss */ "./src/app/library/myfonts/myfonts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _services_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__["DirtyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], MyfontsComponent);
    return MyfontsComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/shares/shares.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/shares/shares.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #toolbarTemplate let-item=\"item\">\n   \n    <ul *ngIf=\"item.user_id !== user_id\" class=\"sqr-toolbar btn-group\"  role=\"group\">\n        <li>\n            <button class=\"btn btn-secondary btn-md btn-success\" (click)=\"startFromTemplate(item);\"> <i\n                    class=\"icon-insert-template\"></i>\n            </button>\n        </li>\n        <li>\n\n        </li>\n    </ul>\n\n    <ul *ngIf=\"item.user_id === user_id\" class=\"sqr-toolbar btn-group\" role=\"group\">\n        <li>  \n            <button class=\"btn btn-secondary btn-md btn-primary left\" (click)=\"editItem(item);\"> <i\n                    class=\"icon-edit\"></i>\n            </button>\n        </li>\n        <li>\n            <button class=\"btn btn-secondary btn-md btn-danger right\" (click)=\"deleteItemHandler(item);\"> <i\n                    class=\"icon-trash-o\"></i>\n            </button>\n        </li>\n    </ul>\n\n\n</ng-template>\n\n \n\n<app-lobby [items]=\"items\" mode='media' [toolbar]=\"toolbarTemplate\" [noNew]=\"true\">\n\n</app-lobby>\n\n\n<div class=\"filter-slide {{filterActive}}\">\n    <div class=\"form-group pt10\">\n        <label for=\"searchPhrase\">{{ \"LIBRARY.SEARCHTERM\" | translate }}:</label>\n        <div class=\"input-group \">\n            <input type=\"text\" name=\"searchPhrase\" id=\"searchPhrase\" [(ngModel)]=\"filter.term\" class=\"form-control\" />\n            <div class=\"input-group-prepend\">\n                <button class=\"btn btn-outline-secondary\" type=\"button\"> <i class=\"icon-search\"></i></button>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n"

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
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.context.service */ "./src/app/services/user.context.service.ts");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");









var SharesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SharesComponent, _super);
    function SharesComponent(_ngZone, translateService, filterService, router, userService, dirtyService, changeDetectorRef) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService, changeDetectorRef) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.filterService = filterService;
        _this.router = router;
        _this.userService = userService;
        _this.dirtyService = dirtyService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.filterActive = 'closing';
        _this.filter = {};
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["ShareDataController"];
        _this.Model = 'Share';
        _this.filterService.filter.subscribe(function () {
            _this.filterActive = (_this.filterActive === 'closing') ? 'active' : 'closing';
        });
        var user = _this.userService.getUser();
        if (user) {
            _this.user_id = user._id;
        }
        return _this;
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
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["ShareDataController"].search('Share', {})];
                    case 1:
                        _a.items = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SharesComponent.prototype.applyFilter = function () {
        var filter = {};
        // if (this.filter.type && this.filter.type !== 'All') {
        //   Object.assign(filter, { MediaType: this.filter.type });
        // }
        console.log(filter);
        this.loadItems(filter);
    };
    SharesComponent.prototype.editItem = function (item) {
        // Absolute route - Goes up to root level with route params
        this.router.navigate(['/dashboard/library/slide/', item._id]);
    };
    SharesComponent.prototype.newItem = function () {
        this.router.navigate(['/dashboard/library/slide/', 0]);
    };
    SharesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shares',
            template: __webpack_require__(/*! ./shares.component.html */ "./src/app/library/shares/shares.component.html"),
            styles: [__webpack_require__(/*! ./shares.component.scss */ "./src/app/library/shares/shares.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_filter_service__WEBPACK_IMPORTED_MODULE_6__["FilterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_user_context_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_8__["DirtyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
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

module.exports = "<app-lobby [items]=\"items\" mode='media' (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\"\n    (newItem)=\"newItem()\"></app-lobby>\n\n\n<div class=\"filter-slide {{filterActive}}\">\n    <div class=\"form-group pt10\">\n        <label for=\"searchPhrase\">{{ \"LIBRARY.SEARCHTERM\" | translate }}:</label>\n        <div class=\"input-group \">\n            <input type=\"text\" name=\"searchPhrase\" id=\"searchPhrase\" [(ngModel)]=\"filter.term\" class=\"form-control\" />\n            <div class=\"input-group-prepend\">\n                <button class=\"btn btn-outline-secondary\" type=\"button\"> <i class=\"icon-search\"></i></button>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n"

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
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");









var SlidesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SlidesComponent, _super);
    function SlidesComponent(_ngZone, translateService, router, previousRouteService, filterService, dirtyService, changeDetectorRef) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService, changeDetectorRef) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.router = router;
        _this.previousRouteService = previousRouteService;
        _this.filterService = filterService;
        _this.dirtyService = dirtyService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.filterActive = 'closing';
        _this.filter = {};
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["SlidesDataController"];
        _this.Model = 'Slide';
        _this.filterService.filter.subscribe(function () {
            _this.filterActive = (_this.filterActive === 'closing') ? 'active' : 'closing';
        });
        return _this;
    }
    SlidesComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadItems();
                return [2 /*return*/];
            });
        });
    };
    SlidesComponent.prototype.applyFilter = function () {
        var filter = {};
        // if (this.filter.type && this.filter.type !== 'All') {
        //   Object.assign(filter, { MediaType: this.filter.type });
        // }
        console.log(filter);
        this.loadItems(filter);
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
            _services_history_service__WEBPACK_IMPORTED_MODULE_6__["PreviousRouteService"],
            _services_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"],
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_8__["DirtyService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SlidesComponent);
    return SlidesComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_2__["DataComponent"]));



/***/ }),

/***/ "./src/app/library/upload/upload.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/upload/upload.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n  <img [src]=\"thumb\" (load)=\"clearUpload()\" #imgIndicator id=\"imgIndicator\" \n  style=\"width:1px;height:1px;\" />\n</div>\n\n\n<div class=\"upload-group\">\n  <!-- <file-drop headertext=\"Drop files here\" customstyle=\"dropzone\" (onFileDrop)=\"dropped($event)\">\n  </file-drop>\n -->\n\n  <label for=\"libraryFile\">{{ \"LIBRARY.RESOURCE\" | translate }}</label>\n\n  <div class=\"custom-file\">\n    <input type=\"file\" #file class=\"custom-file-input\" (change)=\"selected()\" />\n    <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n  </div>\n</div>\n"

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
                this.change.emit(this.item.key);
                return [2 /*return*/];
            });
        }); });
    };
    UploadComponent.prototype.waitUpload = function (src) {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // this.change.emit('start');
                if (!this.uploadComplete) {
                    this.count++;
                    this.loading = true;
                    if (this.fileType !== 'font') {
                        if (this.imgIndicator.nativeElement && src) {
                            this.imgIndicator.nativeElement.src = src;
                        }
                        else {
                            this.imgIndicator.src = src;
                        }
                        setTimeout(function () { _this.waitUpload(src); }, 3000);
                    }
                }
                else {
                    this.item.resource = src;
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
                        if (this.fileType !== 'font') {
                            this.item.resource = s3Path.url;
                            this.item.thumb = s3Path.thumb;
                            this.thumb = s3Path.url;
                            this.waitUpload(s3Path.url);
                        }
                        else {
                            this.item.key = s3Path.key;
                        }
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
                                if (this.fileType !== 'font') {
                                    this.item.resource = s3Path.url;
                                    this.item.thumb = s3Path.url;
                                    this.thumb = s3Path.url;
                                }
                                else {
                                    this.item.resource = s3Path.url;
                                }
                                this.waitUpload(s3Path.url);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadComponent.prototype, "fileType", void 0);
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

/***/ "./src/app/media-preview/media-preview.component.html":
/*!************************************************************!*\
  !*** ./src/app/media-preview/media-preview.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item.MediaType==='image' && item.resource\"><img [src]=\"item.resource\"\n                [ngStyle]=\"{'width.px': width, 'height.px': height}\"></div>\n<div *ngIf=\"item.MediaType==='video' && embedFrame\" [ngStyle]=\"{'width.px': width, 'height.px': height}\"><img [src]=\"embedFrame\"\n                style=\"width: 100%; height: 100%;\" /></div>\n<div *ngIf=\"item.MediaType==='url' && urlFrame\" [ngStyle]=\"{'width.px': width, 'height.px': height}\"><iframe\n                class=\"frame\" [src]=\"urlFrame\" [ngStyle]=\"{'width.px': width*4, 'height.px': height*4}\"></iframe></div>\n"

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
        this.subscribers = [];
    }
    MediaPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribers.push(this.dirtyService.onInit.subscribe(function () {
            _this.activate();
        }));
        this.subscribers.push(this.dirtyService.onChange.subscribe(function (value) {
            _this.item.resource = value;
        }));
        if (this.item) {
            this.activate();
        }
    };
    MediaPreviewComponent.prototype.ngOnDestroy = function () {
        this.subscribers.forEach(function (item) { return item.unsubscribe(); });
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

/***/ "./src/app/playlists/playlist.item/playlist.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/playlists/playlist.item/playlist.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide-header [title]=\"'NAVBAR.PLAYLISTS'\" mode=\"inline\" iconClass=\"icon-video\" className=\"playlist-cat\">\n</app-slide-header>\n<app-finder [types]=\"['media','slide','shares']\" [active]=\"finderActive\" *ngIf=\"finderActive==='active'\"\n  [selector]=\"addToList\">\n</app-finder>\n<div style=\"position: relative;\" class=\"playlist\">\n  <ng-template #toolbar let-item=\"item\">\n    <div class=\"btn-group\" data-toggle=\"buttons\">\n      <button class=\"btn-tool btn-play\" (click)=\"preview()\"> <i class=\"icon-eye1\"></i></button>\n    </div>\n  </ng-template>\n\n\n  <app-slide-header mode=\"inline\" [enableSave]='true' (save)=\"saveProxy()\" className=\"playlist-cat\" [closeFn]=\"true\"\n    [toolbar]=\"toolbar\" (closed)=\"closeSlider()\">\n  </app-slide-header>\n  <form *ngIf=\"item\" class=\"pad nohor\" [appAdaptHeight]=\"150\">\n    <app-changes [item]=\"item\"></app-changes>\n\n    <div [ngDraggable]=\"true\" style=\"position: absolute;top:10%;left: 10%; background-color: #fff;z-index:1500;\"\n      *ngIf=\"previewOn\">\n      <app-playlist-player [playerPlan]=\"item\"></app-playlist-player>\n    </div>\n\n    <div class=\"nohor\">\n      <div class=\"form-group\">\n        <label for=\"itemName\">{{ \"PLAYLISTS.NAME\" | translate }}:</label>\n        <input type=\"text\" name=\"itemName\" class=\"form-control\" id=\"itemName\" [(ngModel)]=\"item.Name\">\n        <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"PLAYLISTS.NAME_HELP\" | translate }}</small>\n      </div>\n      <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item {{tab.class}}\" *ngFor=\"let tab of tabs\">\n          <a class=\"nav-link\" (click)=\"tabSelect(tab)\">{{tab.name | translate}}</a>\n        </li>\n      </ul>\n      <div *ngIf=\"tabs[0].selected\">\n\n        <div class=\"form-group\" class=\"sortable\">\n\n          <div class=\"shadow btn-long\" (click)=\"finder()\"><i class=\"icon-plus-alt\"></i>\n            {{\"PLAYLISTS.ADDTOLIST\" | translate}}</div>\n          <div *ngIf=\"playlistMode==='normal'\" [class]=\"playlistMode\">\n\n            <div class=\"horizontal-scroller playlist-cat\" dragula=\"DRAGULA_FACTS\" [(dragulaModel)]=\"item.list\"\n              (dropModel)=\"drop($event)\" style=\"direction: ltr;\">\n              <div *ngFor=\"let listitem of item.list; let i = index\" class=\"slot shadow\"\n                [ngStyle]=\"{'left.px': (20 + (i)*320) , 'top.px':20}\">\n\n                <app-lobby-item *ngIf=\"listitem\" [item]=\"listitem\"></app-lobby-item>\n\n                <ul class=\"sqr-toolbar btn-group direction\" role=\"group\">\n                  <li>\n                    <button class=\"btn btn-secondary btn-md btn-default\" (click)=\"editListItem(listitem);\"> <i\n                        class=\"icon-edit\"></i>\n                    </button>\n                    <button class=\"btn btn-secondary btn-md btn-danger\" (click)=\"removeListItem(listitem);\"> <i\n                        class=\"icon-trash-o\"></i>\n                    </button>\n                  </li>\n                  <li>\n                    <input type=\"text\" [(ngModel)]=\"listitem.duration\" [ngModelOptions]=\"{'standalone': true}\">\n                  </li>\n                  <li>\n                    <select [detectChanges]=\"true\" [(ngModel)]=\"listitem.transition\"\n                      [ngModelOptions]=\"{'standalone': true}\">\n                      <option *ngFor=\"let c of effects\" [ngValue]=\"c\">{{c}}</option>\n                    </select>\n                  </li>\n                </ul>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"tabs[1].selected\">\n        <div class=\"form-group shadow\">\n          <div class=\"btn-long\" (click)=\"schedule()\"><i class=\"icon-plus-alt\"></i>\n            {{\"PLAYLISTS.ADDTIME\" | translate}}</div>\n          <div id=\"timeSlots\" *ngIf=\"editTime && selectedTimeEl\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"itemName\">{{ \"PLAYLISTS.SCHEDULE\" | translate }}:</label>\n                <select [(ngModel)]=\"selectedTimeEl.timeslot\" name=\"timeSlotOptions\" [compareWith]=\"compareFnId\"\n                  class=\"form-control\">\n                  <option *ngFor=\"let c of timeSlotOptions\" [ngValue]=\"c\">{{c.name | translate}}</option>\n                </select>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"ScreenGroup\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n                <select [(ngModel)]=\"selectedTimeEl.screenGroup\" name=\"ScreenGroup\" [compareWith]=\"compareFn_id\"\n                  class=\"form-control\">\n                  <option *ngFor=\"let c of groups\" [ngValue]=\"c\">{{c.Name}}</option>\n                </select>\n              </div>\n              <button class=\"btn btn-primary\" (click)=\"addTimeSlot()\">{{ \"PLAYLISTS.SETTIME\" | translate}}</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"container\">\n          <div *ngFor=\"let timeslotEl of item.TimeSlots\" class=\"sqr short shadow\">\n            <label>{{timeslotEl.timeslot.name | translate}}</label>\n            <small>{{timeslotEl.screenGroup.Name}}</small>\n            <ul class=\"sqr-toolbar\">\n              <li>\n                <button class=\"btn btn-md btn-danger\" (click)=\"deleteTimeslot(timeslotEl);\"> <i\n                    class=\"icon-trash-o\"></i>\n                </button>\n              </li>\n              <li>\n                <button class=\"btn btn-md btn-primary\" (click)=\"editTimeslot(timeslotEl);\"> <i class=\"icon-edit\"></i>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr />\n  </form>\n  <app-slide-footer className=\"playlist-cat\"></app-slide-footer>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/playlists/playlist.item/playlist.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/playlists/playlist.item/playlist.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad {\n  padding-top: 20px;\n  padding-right: 30px;\n  padding-left: 30px; }\n\n.short {\n  height: 90px; }\n\n.box-container {\n  position: relative;\n  height: 150px;\n  padding: 45px 0; }\n\n.box-swap {\n  position: absolute;\n  text-align: center;\n  width: 150px;\n  height: 60px;\n  padding: 15px 35px;\n  line-height: 30px; }\n\n.box-swap.static-block {\n    transition: all 0.3s ease-out; }\n\n/* in-flight clone */\n\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  pointer-events: none; }\n\n/* high-performance display:none; helper */\n\n.gu-hide {\n  left: -9999px !important; }\n\n/* added to mirrorContainer (default = body) while dragging */\n\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important; }\n\n/* added to the source element while its mirror is dragged */\n\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20); }\n\n.horizontal-scroller {\n  margin-right: 4px;\n  margin-left: 4px;\n  width: 100%;\n  overflow-y: hidden;\n  overflow-x: auto;\n  direction: ltr;\n  position: relative;\n  height: 250px; }\n\n.slot {\n  position: absolute;\n  width: 300px;\n  height: 200px; }\n\n.slot .sqr-toolbar {\n    background-color: #e3e4e5;\n    visibility: visible; }\n\n.slot .sqr-toolbar input {\n      width: 50px;\n      height: 24px; }\n\n.slot .sqr-toolbar select {\n      width: 100px;\n      height: 24px; }\n\n.canvas-bg {\n  position: absolute;\n  z-index: 0; }\n\n.sqr-btn {\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr-btn .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn:hover .sqr-toolbar input, .sqr:hover .sqr-toolbar input {\n      width: 50px;\n      height: 30px; }\n\n.sqr-btn:hover .sqr-toolbar select, .sqr:hover .sqr-toolbar select {\n      height: 30px; }\n\n.fancy-thumb {\n  z-index: 1000; }\n\n.extended-padding {\n  padding: 50px; }\n\n.extended {\n  overflow: hidden;\n  padding: 30px;\n  height: 400px;\n  background-color: white;\n  position: absolute;\n  top: 200px;\n  right: 50px;\n  left: 50px;\n  border: 1px solid red; }\n\n.extended .topper {\n    pointer-events: none;\n    z-index: 0;\n    height: 65px;\n    opacity: 0.8;\n    position: absolute;\n    padding-top: 30px;\n    top: -30px;\n    left: 0;\n    right: 0; }\n\n.extended .topper .icon {\n      margin: 8px;\n      vertical-align: top; }\n\n.extended .topper h4 {\n      display: inline;\n      vertical-align: top; }\n\n.extended .topper .bar-icon {\n      margin-left: 15px; }\n\n:host-context(.ltr) .btn-play {\n  float: left; }\n\n:host-context(.ltr) .sqr-toolbar li {\n  text-align: right; }\n\n:host-context(.rtl) .btn-play {\n  float: right; }\n\n:host-context(.rtl) .sqr-toolbar li {\n  text-align: left; }\n\n.btn-play {\n  width: 50px;\n  height: 50px;\n  background-color: #f3b7eb;\n  color: white;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0Lml0ZW0vQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxwbGF5bGlzdHNcXHBsYXlsaXN0Lml0ZW1cXHBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5bGlzdHMvcGxheWxpc3QuaXRlbS9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNLLFlBQVcsRUFBQTs7QUFHZjtFQUNHLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBTm5CO0lBU0ksNkJBQTZCLEVBQUE7O0FBS2pDLG9CQUFBOztBQUNGO0VBQ0ksMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGlFQUFpRTtFQUNqRSx5QkFBeUI7RUFDekIsb0JBQW9CLEVBQUE7O0FBRXRCLDBDQUFBOztBQUNBO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRTFCLDZEQUFBOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlDQUFpQztFQUNqQyxnQ0FBZ0M7RUFDaEMsNEJBQTRCLEVBQUE7O0FBRTlCLDREQUFBOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGlFQUFpRTtFQUNqRSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUVmO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBSGpCO0lBS00seUJDMUVjO0lEMkVkLG1CQUFtQixFQUFBOztBQU56QjtNQU9hLFdBQVc7TUFBQyxZQUFXLEVBQUE7O0FBUHBDO01BUWMsWUFBWTtNQUFFLFlBQVksRUFBQTs7QUFJeEM7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUlWO0VBSUUsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFOeEI7SUFFRSxtQkFBbUIsRUFBQTs7QUFNdkI7RUFDSSxVQUFVLEVBQUE7O0FBRGQ7SUFHUSxtQkFBbUIsRUFBQTs7QUFIM0I7TUFJZSxXQUFXO01BQUMsWUFBVyxFQUFBOztBQUp0QztNQUtpQixZQUFZLEVBQUE7O0FBRzdCO0VBRUUsYUFBWSxFQUFBOztBQUlkO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UsZ0JBQWdCO0VBRWhCLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBRXZCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixxQkFBcUIsRUFBQTs7QUFYdkI7SUFjSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsT0FBTztJQUNQLFFBQVEsRUFBQTs7QUF0Qlo7TUF3QlEsV0FBVztNQUNYLG1CQUFtQixFQUFBOztBQXpCM0I7TUE0QlEsZUFBZTtNQUNmLG1CQUFtQixFQUFBOztBQTdCM0I7TUFnQ1EsaUJBQWlCLEVBQUE7O0FBTXpCO0VBR0ksV0FBVyxFQUFBOztBQUhmO0VBT0ksaUJBQ0YsRUFBQTs7QUFHRjtFQUdJLFlBQVksRUFBQTs7QUFIaEI7RUFNSSxnQkFDRixFQUFBOztBQUdGO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkNuS29CO0VEb0twQixZQUFZO0VBQ1osZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0Lml0ZW0vcGxheWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zYXNzL192YXJpYWJsZXMnO1xyXG5cclxuXHJcbi5wYWR7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDsgXHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4OyBcclxufVxyXG5cclxuLnNob3J0e1xyXG4gICAgIGhlaWdodDo5MHB4O1xyXG4gfVxyXG5cclxuIC5ib3gtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA0NXB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3gtc3dhcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDM1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICBcclxuICAgICYuc3RhdGljLWJsb2NrIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogaW4tZmxpZ2h0IGNsb25lICovXHJcbi5ndS1taXJyb3Ige1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9ODApXCI7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIC8qIGhpZ2gtcGVyZm9ybWFuY2UgZGlzcGxheTpub25lOyBoZWxwZXIgKi9cclxuICAuZ3UtaGlkZSB7XHJcbiAgICBsZWZ0OiAtOTk5OXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGFkZGVkIHRvIG1pcnJvckNvbnRhaW5lciAoZGVmYXVsdCA9IGJvZHkpIHdoaWxlIGRyYWdnaW5nICovXHJcbiAgLmd1LXVuc2VsZWN0YWJsZSB7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGFkZGVkIHRvIHRoZSBzb3VyY2UgZWxlbWVudCB3aGlsZSBpdHMgbWlycm9yIGlzIGRyYWdnZWQgKi9cclxuICAuZ3UtdHJhbnNpdCB7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTIwKVwiO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcclxuICB9XHJcbi5ob3Jpem9udGFsLXNjcm9sbGVye1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgZGlyZWN0aW9uOiBsdHI7ICBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG4uc2xvdHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5OyAgICAgIFxyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICBpbnB1dHsgd2lkdGg6IDUwcHg7aGVpZ2h0OjI0cHg7fVxyXG4gICAgICBzZWxlY3Qge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAyNHB4O31cclxuICB9XHJcbn1cclxuXHJcbi5jYW52YXMtYmd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbiBcclxuICAuc3FyLWJ0bntcclxuICAgIC5zcXItdG9vbGJhcntcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgICBmb250LXNpemU6IDg0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5zcXItYnRuOmhvdmVyLC5zcXI6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLnNxci10b29sYmFye1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgaW5wdXR7IHdpZHRoOiA1MHB4O2hlaWdodDozMHB4O31cclxuICAgICAgICBzZWxlY3QgeyBoZWlnaHQ6IDMwcHg7fVxyXG4gICAgfVxyXG59XHJcbi5mYW5jeS10aHVtYlxyXG57XHJcbiAgei1pbmRleDoxMDAwO1xyXG59XHJcbiBcclxuIFxyXG4uZXh0ZW5kZWQtcGFkZGluZ3tcclxuICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcbi5leHRlbmRlZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gXHJcbiAgcGFkZGluZzogMzBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwMHB4O1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG5cclxuICAudG9wcGVye1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxyXG4gICAgei1pbmRleDogMDtcclxuICAgIGhlaWdodDogNjVweDsgICBcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLmljb257XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7ICAgICAgXHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgLmJhci1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59ICBcclxuXHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmx0cilcclxue1xyXG4gIC5idG4tcGxheXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLnNxci10b29sYmFyIGxpe1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxuICB9XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLnJ0bClcclxue1xyXG4gIC5idG4tcGxheXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLnNxci10b29sYmFyIGxpe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1wbGF5e1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHVycGxlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7IFxyXG59XHJcbiAiLCJcclxuJGNvbG9yLWdyYXk6ICNlM2U0ZTU7XHJcbiRjb2xvci1kYXJrYmx1ZTE6ICMxNjI0MzM7XHJcbiRjb2xvci1kYXJrYmx1ZTI6ICMyYTQ1NjM7XHJcbiRjb2xvci1saWdodGJsdWUxOiAjMjY0MzU2O1xyXG4kY29sb3ItbGlnaHRibHVlMjogIzNjNzM5OTtcclxuJGNvbG9yLW9yYW5nZTogI2ZjNjYwMDtcclxuJGNvbG9yLWN5YW46ICMwMGZmZjY7XHJcbiRjb2xvci1zY3JlZW46ICMwMGNmZmY7XHJcbiRjb2xvci1zY3JlZW4tZ3JvdXA6ICMwMGZmZjY7XHJcbiRjb2xvci1saWJyYXJ5OiAjOTZmZjAwO1xyXG4kY29sb3IteWVsbG93OiAjZmZmZjAwO1xyXG4kY29sb3ItcHVycGxlOiAjZjNiN2ViO1xyXG4kY29sb3ItZ3JlZW46ICM5NmZmMDA7XHJcbiRjb2xvci1ibGFjazogIzIyMjtcclxuJGNvbG9yLWdyYXl3aGl0ZTogI0ZGRTtcclxuJGNvbG9yLXRvb2xiYXI6ICNmOGY5ZmE7XHJcbiBcclxuXHJcbiBcclxuXHJcbiAiXX0= */"

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
    function PlaylistComponent(_ngZone, translateService, dragulaService, route, router, dirtyService, previousRouteService, changeDetectorRef) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService, changeDetectorRef) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.dragulaService = dragulaService;
        _this.route = route;
        _this.router = router;
        _this.dirtyService = dirtyService;
        _this.previousRouteService = previousRouteService;
        _this.changeDetectorRef = changeDetectorRef;
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
        _this.Model = 'Playlist';
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
                                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["Playlist"].get(this.Model, data.id)];
                                    case 1:
                                        _a.item = _b.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        this.item = { list: [] };
                                        _b.label = 3;
                                    case 3:
                                        if (!this.item) return [3 /*break*/, 6];
                                        return [4 /*yield*/, this.item.list.map(function (item) { return item._id; })];
                                    case 4:
                                        idsArr = _b.sent();
                                        if (!(idsArr && idsArr.length > 0)) return [3 /*break*/, 6];
                                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["SlidesDataController"].getSet('Slide', idsArr)];
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
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["ScreenGroupDataController"].query('ScreenGroup', {})];
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
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_8__["DirtyService"], _services_history_service__WEBPACK_IMPORTED_MODULE_9__["PreviousRouteService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
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

module.exports = "<!-- <select [(ngModel)]=\"ScreenSize\" name=\"ScreenSize\" [compareWith]=\"compareFn\" (change)=\"redraw($event)\"\r\n    class=\"form-control\">\r\n    <option *ngFor=\"let c of screenSizes\" [ngValue]=\"c\">{{c.width}}*{{c.height}}</option>\r\n</select> -->\r\n\r\n<div ngbDropdown class=\"screen-menu\">\r\n    <button class=\"btn btn-default btn-white\" ngbDropdownToggle>{{ScreenSize.width}}*{{ScreenSize.height}}</button>\r\n    <div ngbDropdownMenu>\r\n        <button *ngFor=\"let screen of screenSizes\" class=\"dropdown-item\"\r\n            (click)=\"redraw(screen)\">{{screen.width}}*{{screen.height}}</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"screen-monitor\">\r\n    <div class=\"screen\" [ngStyle]=\"{'width.px': ScreenSize.width,'height.px': ScreenSize.height }\">\r\n        <div class=\"counter\" #counter></div>\r\n        <canvas *ngIf=\"playerPlan\" #playerCanvas id=\"playerCanvas\" height=\"{{ScreenSize.height}}\"\r\n            width=\"{{ScreenSize.width}}\"></canvas>\r\n        <iframe class=\"frame\" #playerIframe height=\"{{ScreenSize.height}}\" width=\"{{ScreenSize.width}}\"></iframe>\r\n        <div #playerEmbed style=\"width:100%;height:100%;\">\r\n            <div id=\"playerEmbedInner\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/playlists/playlist.player/playlist.player.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/playlists/playlist.player/playlist.player.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".screen-monitor {\n  position: relative;\n  display: inline-block;\n  border: 4px solid black; }\n\n.counter {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2000;\n  font-size: 36px;\n  color: #fff;\n  background-color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0LnBsYXllci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXHBsYXlsaXN0c1xccGxheWxpc3QucGxheWVyXFxwbGF5bGlzdC5wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGtCQUFpQjtFQUNqQixNQUFLO0VBQ0wsUUFBTztFQUNQLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0LnBsYXllci9wbGF5bGlzdC5wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NyZWVuLW1vbml0b3J7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmNvdW50ZXJ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _player_slide_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../player/slide.service */ "./src/player/slide.service.ts");




var PlaylistPlayerComponent = /** @class */ (function () {
    function PlaylistPlayerComponent(_ngZone, slideService, route, router) {
        this._ngZone = _ngZone;
        this.slideService = slideService;
        this.route = route;
        this.router = router;
        this.screenSizes = [{ width: 400, height: 300 }, { width: 800, height: 600 }, { width: 1200, height: 800 }];
    }
    PlaylistPlayerComponent.prototype.redraw = function (event) {
        this.ScreenSize = event;
    };
    PlaylistPlayerComponent.prototype.compareFn = function (a, b) {
        if (b) {
            return a.width === b.width && a.height === b.height;
        }
    };
    PlaylistPlayerComponent.prototype.paint = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var width, height, ctx;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                width = this.ScreenSize.width;
                height = this.ScreenSize.height;
                if (this.playerCanvas.first) {
                    this.surfaces = {
                        canvas: this.playerCanvas.first.nativeElement,
                        iframe: this.playerIframe.first.nativeElement,
                        embed: this.playerEmbed.first.nativeElement,
                        counter: this.playerCounter.first.nativeElement,
                    };
                    this.surfaces.canvas.width = width;
                    this.surfaces.canvas.height = height;
                    ctx = this.surfaces.canvas.getContext('2d');
                    this.slideService.play(this.surfaces, [this.playerPlan], ctx, width, height);
                }
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('playerIframe'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlaylistPlayerComponent.prototype, "playerIframe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('playerEmbed'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlaylistPlayerComponent.prototype, "playerEmbed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('counter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlaylistPlayerComponent.prototype, "playerCounter", void 0);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _player_slide_service__WEBPACK_IMPORTED_MODULE_3__["SlideService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "<app-slide-header title=\"NAVBAR.PLAYLISTS\" mode=\"inline\" iconClass=\"icon-video\" className=\"playlist-cat\">\n</app-slide-header>\n\n<ng-template #playlistTemplate let-item=\"item\">\n    <div class=\"m10\">\n        <div class=\"fancy-thumb-label\">{{item.Name}} ({{item.list.length}})</div>\n        <div *ngIf=\"item.list\" class=\"thumbs\">\n            <div class=\"thumb-small\" style=\"width:50px;height:50px;\" *ngFor=\"let listItem of item.list\">\n                <app-media-preview width=\"50\" height=\"50\" [item]=\"listItem\"></app-media-preview>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<div [appAdaptHeight]=\"130\" class=\"nohor\">\n    <div style=\"padding: 10px;\">\n        <app-lobby [items]=\"items\" mode=\"object\" [template]=\"playlistTemplate\" model=\"playlist\"\n            (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem()\"></app-lobby>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/playlists/playlist/playlists.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/playlists/playlist/playlists.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".short {\n  height: 90px; }\n\n.thumb-small {\n  float: left; }\n\n.thumbs {\n  margin-top: 20px; }\n\n.box-container {\n  position: relative;\n  height: 150px;\n  padding: 45px 0; }\n\n.box-swap {\n  position: absolute;\n  text-align: center;\n  width: 150px;\n  height: 60px;\n  padding: 15px 35px;\n  line-height: 30px; }\n\n.box-swap.static-block {\n    transition: all 0.3s ease-out; }\n\n/* in-flight clone */\n\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  pointer-events: none; }\n\n/* high-performance display:none; helper */\n\n.gu-hide {\n  left: -9999px !important; }\n\n/* added to mirrorContainer (default = body) while dragging */\n\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important; }\n\n/* added to the source element while its mirror is dragged */\n\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20); }\n\n.slot {\n  position: relative;\n  width: 200px;\n  height: 200px; }\n\n.slot .sqr-toolbar {\n    width: 192px;\n    visibility: visible; }\n\n.slot .sqr-toolbar input {\n      width: 50px;\n      height: 24px; }\n\n.slot .sqr-toolbar select {\n      width: 100px;\n      height: 24px; }\n\n.canvas-bg {\n  position: absolute;\n  z-index: 0; }\n\n.sqr-btn {\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr-btn .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn:hover .sqr-toolbar input, .sqr:hover .sqr-toolbar input {\n      width: 50px;\n      height: 30px; }\n\n.sqr-btn:hover .sqr-toolbar select, .sqr:hover .sqr-toolbar select {\n      height: 30px; }\n\n.fancy-thumb {\n  z-index: 1000; }\n\n.normal {\n  width: 500px;\n  overflow: auto;\n  border: 1px solid blue; }\n\n.extended-padding {\n  padding: 50px; }\n\n.extended {\n  overflow: hidden;\n  padding: 30px;\n  height: 400px;\n  background-color: white;\n  position: absolute;\n  top: 200px;\n  right: 50px;\n  left: 50px;\n  border: 1px solid red; }\n\n.extended .topper {\n    pointer-events: none;\n    z-index: 0;\n    height: 65px;\n    opacity: 0.8;\n    position: absolute;\n    padding-top: 30px;\n    top: -30px;\n    left: 0;\n    right: 0; }\n\n.extended .topper .icon {\n      margin: 8px;\n      vertical-align: top; }\n\n.extended .topper h4 {\n      display: inline;\n      vertical-align: top; }\n\n.extended .topper .bar-icon {\n      margin-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0L0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxccGxheWxpc3RzXFxwbGF5bGlzdFxccGxheWxpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0ksWUFBVyxFQUFBOztBQUlmO0VBQ0UsV0FBVyxFQUFBOztBQUVkO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0csa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFObkI7SUFTSSw2QkFBNkIsRUFBQTs7QUFLakMsb0JBQUE7O0FBQ0Y7RUFDSSwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osaUVBQWlFO0VBQ2pFLHlCQUF5QjtFQUN6QixvQkFBb0IsRUFBQTs7QUFFdEIsMENBQUE7O0FBQ0E7RUFDRSx3QkFBd0IsRUFBQTs7QUFFMUIsNkRBQUE7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyw0QkFBNEIsRUFBQTs7QUFFOUIsNERBQUE7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUVBQWlFO0VBQ2pFLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUhqQjtJQUtNLFlBQVk7SUFDWixtQkFBbUIsRUFBQTs7QUFOekI7TUFPYSxXQUFXO01BQUMsWUFBVyxFQUFBOztBQVBwQztNQVFjLFlBQVk7TUFBRSxZQUFZLEVBQUE7O0FBSXhDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFJVjtFQUlFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBTnhCO0lBRUUsbUJBQW1CLEVBQUE7O0FBTXZCO0VBQ0ksVUFBVSxFQUFBOztBQURkO0lBR1EsbUJBQW1CLEVBQUE7O0FBSDNCO01BSWUsV0FBVztNQUFDLFlBQVcsRUFBQTs7QUFKdEM7TUFLaUIsWUFBWSxFQUFBOztBQUc3QjtFQUVFLGFBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVk7RUFBQyxjQUFjO0VBQzNCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLGdCQUFnQjtFQUVoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUV2QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQXFCLEVBQUE7O0FBWHZCO0lBY0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLE9BQU87SUFDUCxRQUFRLEVBQUE7O0FBdEJaO01Bd0JRLFdBQVc7TUFDWCxtQkFBbUIsRUFBQTs7QUF6QjNCO01BNEJRLGVBQWU7TUFDZixtQkFBbUIsRUFBQTs7QUE3QjNCO01BZ0NRLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0L3BsYXlsaXN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuc2hvcnR7XHJcbiAgICAgaGVpZ2h0OjkwcHg7XHJcbiB9XHJcblxyXG5cclxuIC50aHVtYi1zbWFsbHtcclxuICAgZmxvYXQ6IGxlZnQ7XHJcbiB9XHJcbi50aHVtYnN7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuIC5ib3gtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA0NXB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3gtc3dhcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDM1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICBcclxuICAgICYuc3RhdGljLWJsb2NrIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogaW4tZmxpZ2h0IGNsb25lICovXHJcbi5ndS1taXJyb3Ige1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9ODApXCI7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIC8qIGhpZ2gtcGVyZm9ybWFuY2UgZGlzcGxheTpub25lOyBoZWxwZXIgKi9cclxuICAuZ3UtaGlkZSB7XHJcbiAgICBsZWZ0OiAtOTk5OXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGFkZGVkIHRvIG1pcnJvckNvbnRhaW5lciAoZGVmYXVsdCA9IGJvZHkpIHdoaWxlIGRyYWdnaW5nICovXHJcbiAgLmd1LXVuc2VsZWN0YWJsZSB7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGFkZGVkIHRvIHRoZSBzb3VyY2UgZWxlbWVudCB3aGlsZSBpdHMgbWlycm9yIGlzIGRyYWdnZWQgKi9cclxuICAuZ3UtdHJhbnNpdCB7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTIwKVwiO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcclxuICB9XHJcblxyXG4uc2xvdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICAgIHdpZHRoOiAxOTJweDtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgaW5wdXR7IHdpZHRoOiA1MHB4O2hlaWdodDoyNHB4O31cclxuICAgICAgc2VsZWN0IHt3aWR0aDogMTAwcHg7IGhlaWdodDogMjRweDt9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FudmFzLWJne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4gXHJcbiAgLnNxci1idG57XHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gICAgZm9udC1zaXplOiA4NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uc3FyLWJ0bjpob3Zlciwuc3FyOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC5zcXItdG9vbGJhcntcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIGlucHV0eyB3aWR0aDogNTBweDtoZWlnaHQ6MzBweDt9XHJcbiAgICAgICAgc2VsZWN0IHsgaGVpZ2h0OiAzMHB4O31cclxuICAgIH1cclxufVxyXG4uZmFuY3ktdGh1bWJcclxue1xyXG4gIHotaW5kZXg6MTAwMDtcclxufVxyXG4gXHJcbi5ub3JtYWx7XHJcbiAgd2lkdGg6IDUwMHB4O292ZXJmbG93OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbn1cclxuLmV4dGVuZGVkLXBhZGRpbmd7XHJcbiAgcGFkZGluZzogNTBweDtcclxufVxyXG4uZXh0ZW5kZWR7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuIFxyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuIFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwMHB4O1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG5cclxuICAudG9wcGVye1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxyXG4gICAgei1pbmRleDogMDtcclxuICAgIGhlaWdodDogNjVweDsgICBcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLmljb257XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7ICAgICAgXHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgLmJhci1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59ICBcclxuXHJcbn1cclxuXHJcbiAiXX0= */"

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
    function PlaylistsComponent(_ngZone, translateService, router, dirtyService, changeDetectorRef) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService, changeDetectorRef) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.router = router;
        _this.dirtyService = dirtyService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_2__["Playlist"];
        _this.Model = 'Playlist';
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
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_dirty_service__WEBPACK_IMPORTED_MODULE_6__["DirtyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ],
            entryComponents: [_playlist_playlists_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistsComponent"]],
            declarations: [
                _playlist_playlists_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistsComponent"],
                _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_5__["SchedulesComponent"],
                _playlist_item_playlist_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistComponent"],
                _playlist_player_playlist_player_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistPlayerComponent"],
            ]
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

module.exports = "<app-lobby [items]=\"items\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem()\" ></app-lobby>\n\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n<dialog open={{displayModalNew}}>\n<a (click)=\"closeSlider();\"><i class=\"icon-times-rectangle-oclose-button\" ></i></a>\n <form *ngIf=\"item\">\n  <div class=\"form-group\">\n    <label for=\"itemName\">{{ \"PLAYLISTS.NAME\" | translate }}:</label>\n    <input type=\"text\" name=\"itemName\" class=\"form-control\" id=\"itemName\"   [(ngModel)]=\"item.Name\">\n    <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"PLAYLISTS.NAME_HELP\" | translate }}</small>\n  </div>\n \n  <button   *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"PLAYLISTS.UPDATE\" | translate }}</button>\n  <button   *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"PLAYLISTS.CREATE\" | translate }}</button>\n</form>\n</dialog>\n</div>\n "

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
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");






var SchedulesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchedulesComponent, _super);
    function SchedulesComponent(_ngZone, translateService, dirtyService, changeDetectorRef) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService, changeDetectorRef) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.dirtyService = dirtyService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_2__["ScheduleDataController"];
        _this.Model = 'Schedule';
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__["DirtyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SchedulesComponent);
    return SchedulesComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_3__["DataComponent"]));



/***/ }),

/***/ "./src/app/public/features/features.component.html":
/*!*********************************************************!*\
  !*** ./src/app/public/features/features.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light \">\n  <div class=\"mx-auto\">\n    <h1 class=\"display-4 font-weight-normal\">{{\"PUBLIC.FEATURES.TITLE\" | translate}}</h1>\n    <p class=\"lead font-weight-normal\">{{\"PUBLIC.FEATURES.SUBHEADER\" | translate}}</p>\n    <a class=\"btn btn-outline-secondary\" href=\"#\">{{\"PUBLIC.FEATURES.STARTFORFREE\" | translate}}</a>\n  </div>\n  <div class=\"product-device shadow-sm d-none d-md-block\"></div>\n  <div class=\"product-device product-device-2 shadow-sm d-none d-md-block\"></div>\n</div>\n\n\n\n\n\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 \">\n  <div class=\"bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden w-50\">\n    <div class=\"my-3 py-3\">\n      <h2 class=\"display-5\">{{\"PUBLIC.FEATURES.HEADER1\" | translate}}</h2>\n      <p class=\"lead\">{{\"PUBLIC.FEATURES.CONTENT1\" | translate}}</p>\n    </div>\n    <div class=\"bg-light shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"></div>\n  </div>\n  <div class=\"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden w-50\">\n    <div class=\"my-3 p-3\">\n      <h2 class=\"display-5\">{{\"PUBLIC.FEATURES.HEADER2\" | translate}}</h2>\n      <p class=\"lead\">{{\"PUBLIC.FEATURES.CONTENT2\" | translate}}</p>\n    </div>\n    <div class=\"bg-dark shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"></div>\n  </div>\n</div>\n\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\n  <div class=\"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden w-50\">\n    <div class=\"my-3 p-3\">\n        <h2 class=\"display-5\">{{\"PUBLIC.FEATURES.HEADER3\" | translate}}</h2>\n        <p class=\"lead\">{{\"PUBLIC.FEATURES.CONTENT3\" | translate}}</p>\n    </div>\n    <div class=\"bg-dark shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"></div>\n  </div>\n  <div class=\"bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden w-50\">\n    <div class=\"my-3 py-3\">\n        <h2 class=\"display-5\">{{\"PUBLIC.FEATURES.HEADER4\" | translate}}</h2>\n        <p class=\"lead\">{{\"PUBLIC.FEATURES.CONTENT4\" | translate}}</p>\n    </div>\n    <div class=\"bg-light shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"></div>\n  </div>\n</div>\n\n "

/***/ }),

/***/ "./src/app/public/features/features.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/public/features/features.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w-50 {\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2ZlYXR1cmVzL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxccHVibGljXFxmZWF0dXJlc1xcZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudy01MHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/public/features/features.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/public/features/features.component.ts ***!
  \*******************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/public/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.scss */ "./src/app/public/features/features.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/public/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/public/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"container py-5\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"d-block mb-2\" role=\"img\" viewBox=\"0 0 24 24\" focusable=\"false\"><title>Product</title><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94\"/></svg>\n      <small class=\"d-block mb-3 text-muted\">&copy; 2017-2019</small>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>Features</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Cool stuff</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Random feature</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Team feature</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Stuff for developers</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Another one</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Last time</a></li>\n      </ul>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>Resources</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Resource</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Resource name</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Another resource</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Final resource</a></li>\n      </ul>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>Resources</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Business</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Education</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Government</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Gaming</a></li>\n      </ul>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>About</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Team</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Locations</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Privacy</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Terms</a></li>\n      </ul>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/public/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/public/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/public/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/public/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/public/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/public/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/public/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/public/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n <div class=\"main\">\n   <div class=\"bg\"></div>\n   <div class=\"text-bg\">\n   <div class=\"text\">\n      Signs\n   </div>\n</div>\n\n   <div class=\"learnmore\"><a class=\"btn btn-primary btn-lg\" routerLink=\"learn\">Learn more</a></div>\n   <div class=\"manage\"><a class=\"btn btn-success btn-lg\" routerLink=\"dashboard\">Manage</a></div>\n</div>\n "

/***/ }),

/***/ "./src/app/public/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/public/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Righteous', cursive; }\n\n.main {\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.text {\n  height: 100vh;\n  width: 100%;\n  background-image: url(\"/assets/elements/joshua-earle-454963-unsplash.png\");\n  background-size: 100% 100%;\n  background-position: center;\n  font-size: 110px;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 172px;\n  position: absolute;\n  top: 3%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  padding-top: 250px;\n  -webkit-background-clip: text;\n  color: transparent;\n  transition: all 2.5s ease-in-out; }\n\n.text-bg {\n  background-color: White;\n  width: 100%;\n  padding: 10px; }\n\n.main:hover .text {\n  background-size: 80% 80%; }\n\n.bg {\n  height: 100vh;\n  width: 100%;\n  background-image: url(\"/assets/elements/joshua-earle-454963-unsplash.png\");\n  background-size: 100% 100%;\n  background-position: center;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  transition: all 2.5s ease-in-out; }\n\n.main:hover .bg {\n  background-size: 150% 150%; }\n\n.btn-success {\n  background-color: #3c7399;\n  border-color: #3c7399;\n  color: white; }\n\n.btn-primary {\n  background-color: #2a4563;\n  border-color: #2a4563;\n  color: white; }\n\n.btn-lg {\n  padding: 2px;\n  color: white; }\n\n.learnmore {\n  position: absolute;\n  top: 200px;\n  left: 200px;\n  z-index: 100; }\n\n.manage {\n  position: absolute;\n  top: 200px;\n  left: 400px;\n  z-index: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2hlYWRlci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXHB1YmxpY1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3B1YmxpYy9oZWFkZXIvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksU0FBUztFQUNULFVBQVU7RUFDVixpQ0FBaUMsRUFBQTs7QUFHcEM7RUFDRyxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7O0FBR25DO0VBQ0csYUFBYTtFQUNiLFdBQVc7RUFDWCwwRUFBMEU7RUFDMUUsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1Qsd0NBQXdDO0VBQ3hDLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixnQ0FBZ0MsRUFBQTs7QUFHbkM7RUFDRyx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFFaEI7RUFDRyx3QkFBd0IsRUFBQTs7QUFHM0I7RUFDRyxhQUFhO0VBQ2IsV0FBVztFQUNYLDBFQUEwRTtFQUMxRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsZ0NBQWdDLEVBQUE7O0FBR25DO0VBQ0csMEJBQTBCLEVBQUE7O0FBRzdCO0VBQ0kseUJDNURxQjtFRDZEckIscUJDN0RxQjtFRDhEckIsWUFBWSxFQUFBOztBQUVoQjtFQUNHLHlCQ25FcUI7RURvRXJCLHFCQ3BFcUI7RURxRXJCLFlBQVksRUFBQTs7QUFNZjtFQUNJLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2hCO0VBQ0csa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdmO0VBQ0csa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHVibGljL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zYXNzL192YXJpYWJsZXMnO1xyXG5cclxuXHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiB9XHJcbiBcclxuIC5tYWluIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gfVxyXG4gLy9QaG90byBieSBKb3NodWEgRWFybGUgb24gVW5zcGxhc2hcclxuIC50ZXh0IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9lbGVtZW50cy9qb3NodWEtZWFybGUtNDU0OTYzLXVuc3BsYXNoLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDExMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNzJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMyU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMjUwcHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyLjVzIGVhc2UtaW4tb3V0O1xyXG4gfVxyXG4gXHJcbiAudGV4dC1iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gfVxyXG4gLm1haW46aG92ZXIgLnRleHQge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCUgODAlO1xyXG4gfVxyXG4gXHJcbiAuYmcge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2VsZW1lbnRzL2pvc2h1YS1lYXJsZS00NTQ5NjMtdW5zcGxhc2gucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIuNXMgZWFzZS1pbi1vdXQ7XHJcbiB9XHJcbiBcclxuIC5tYWluOmhvdmVyIC5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MCUgMTUwJTtcclxuIH1cclxuXHJcbiAuYnRuLXN1Y2Nlc3N7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0Ymx1ZTI7XHJcbiAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItbGlnaHRibHVlMjtcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiB9XHJcbiAuYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJGNvbG9yLWRhcmtibHVlMjtcclxuICAgIGJvcmRlci1jb2xvcjogICRjb2xvci1kYXJrYmx1ZTI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiAuYnRuLWxne1xyXG4gICAgIHBhZGRpbmc6IDJweDtcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiB9XHJcblxyXG4gLmxlYXJubW9yZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAwcHg7XHJcbiAgICBsZWZ0OiAyMDBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuXHJcbiB9XHJcbiAubWFuYWdle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIGxlZnQ6IDQwMHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gfSIsIlxyXG4kY29sb3ItZ3JheTogI2UzZTRlNTtcclxuJGNvbG9yLWRhcmtibHVlMTogIzE2MjQzMztcclxuJGNvbG9yLWRhcmtibHVlMjogIzJhNDU2MztcclxuJGNvbG9yLWxpZ2h0Ymx1ZTE6ICMyNjQzNTY7XHJcbiRjb2xvci1saWdodGJsdWUyOiAjM2M3Mzk5O1xyXG4kY29sb3Itb3JhbmdlOiAjZmM2NjAwO1xyXG4kY29sb3ItY3lhbjogIzAwZmZmNjtcclxuJGNvbG9yLXNjcmVlbjogIzAwY2ZmZjtcclxuJGNvbG9yLXNjcmVlbi1ncm91cDogIzAwZmZmNjtcclxuJGNvbG9yLWxpYnJhcnk6ICM5NmZmMDA7XHJcbiRjb2xvci15ZWxsb3c6ICNmZmZmMDA7XHJcbiRjb2xvci1wdXJwbGU6ICNmM2I3ZWI7XHJcbiRjb2xvci1ncmVlbjogIzk2ZmYwMDtcclxuJGNvbG9yLWJsYWNrOiAjMjIyO1xyXG4kY29sb3ItZ3JheXdoaXRlOiAjRkZFO1xyXG4kY29sb3ItdG9vbGJhcjogI2Y4ZjlmYTtcclxuIFxyXG5cclxuIFxyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/public/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/public/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/public/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/public/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/public/main/main.component.html":
/*!*************************************************!*\
  !*** ./src/app/public/main/main.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"Features\" class=\"Features\"></a>\n<app-features></app-features>\n<a name=\"Enterprise\" class=\"Enterprise\"></a>\n\n<a name=\"Pricing\" class=\"Pricing\"></a>\n<app-pricing></app-pricing>"

/***/ }),

/***/ "./src/app/public/main/main.component.scss":
/*!*************************************************!*\
  !*** ./src/app/public/main/main.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9tYWluL21haW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/main/main.component.ts":
/*!***********************************************!*\
  !*** ./src/app/public/main/main.component.ts ***!
  \***********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/public/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/public/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/public/pricing/pricing.component.html":
/*!*******************************************************!*\
  !*** ./src/app/public/pricing/pricing.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n  <h1 class=\"display-4\">{{\"PUBLIC.PRICING.TITLE\"|translate}}</h1>\n  <p class=\"lead\">{{\"PUBLIC.PRICING.CONTENT\"|translate}}</p>\n</div>\n\n<div class=\"container\">\n  <div class=\"card-deck mb-3 text-center\">\n    <div class=\"card mb-4 shadow-sm\">\n      <div class=\"card-header\">\n        <h4 class=\"my-0 font-weight-normal\">{{\"PUBLIC.PRICING.PRICES.FREE.NAME\"|translate}}</h4>\n      </div>\n      <div class=\"card-body\">\n        <h1 class=\"card-title pricing-card-title\">{{\"PUBLIC.PRICING.PRICES.FREE.PRICE\"|translate}} <small\n            class=\"text-muted\">/ mo</small></h1>\n        <ul class=\"list-unstyled mt-3 mb-4\">\n          <li>{{\"PUBLIC.PRICING.PRICES.FREE.LINE1\"|translate}}</li>\n          <li>{{\"PUBLIC.PRICING.PRICES.FREE.LINE2\"|translate}}</li>\n          <li>{{\"PUBLIC.PRICING.PRICES.FREE.LINE3\"|translate}}</li>\n         \n        </ul>\n        <button type=\"button\" [routerLink]=\"['/signup']\"\n          class=\"btn btn-lg btn-block btn-outline-primary btn-bottom\">{{\"PUBLIC.PRICING.PRICES.FREE.SIGNUPBTN\"|translate}}</button>\n      </div>\n    </div>\n    <div class=\"card mb-4 shadow-sm\">\n      <div class=\"card-header\">\n        <h4 class=\"my-0 font-weight-normal\">{{\"PUBLIC.PRICING.PRICES.BASIC.NAME\"|translate}}</h4>\n      </div>\n      <div class=\"card-body\">\n        <h1 class=\"card-title pricing-card-title\">{{\"PUBLIC.PRICING.PRICES.BASIC.PRICE\"|translate}} <small class=\"text-muted\">/ mo</small></h1>\n        <ul class=\"list-unstyled mt-3 mb-4\">\n            <li>{{\"PUBLIC.PRICING.PRICES.BASIC.LINE1\"|translate}}</li>\n            <li>{{\"PUBLIC.PRICING.PRICES.BASIC.LINE2\"|translate}}</li>\n            <li>{{\"PUBLIC.PRICING.PRICES.BASIC.LINE3\"|translate}}</li>\n        </ul>\n        <button type=\"button\" class=\"btn btn-lg btn-block btn-primary btn-bottom\">{{\"PUBLIC.PRICING.PRICES.BASIC.SIGNUPBTN\"|translate}}</button>\n      </div>\n    </div>\n    <div class=\"card mb-4 shadow-sm\">\n      <div class=\"card-header\">\n        <h4 class=\"my-0 font-weight-normal\">{{\"PUBLIC.PRICING.PRICES.UNLIMITED.NAME\"|translate}}</h4>\n      </div>\n      <div class=\"card-body\">\n        <h1 class=\"card-title pricing-card-title\">{{\"PUBLIC.PRICING.PRICES.UNLIMITED.PRICE\"|translate}} <small class=\"text-muted\">/ mo</small></h1>\n        <ul class=\"list-unstyled mt-3 mb-4\">\n            <li>{{\"PUBLIC.PRICING.PRICES.UNLIMITED.LINE1\"|translate}}</li>\n            <li>{{\"PUBLIC.PRICING.PRICES.UNLIMITED.LINE2\"|translate}}</li>\n            <li>{{\"PUBLIC.PRICING.PRICES.UNLIMITED.LINE3\"|translate}}</li>\n        </ul>\n        <button type=\"button\" class=\"btn btn-lg btn-block btn-primary btn-bottom\">{{\"PUBLIC.PRICING.PRICES.UNLIMITED.SIGNUPBTN\"|translate}}</button>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/public/pricing/pricing.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/public/pricing/pricing.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-bottom {\n  position: absolute;\n  bottom: 15px;\n  width: 80%; }\n\n.card-body {\n  position: relative;\n  height: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3ByaWNpbmcvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxwdWJsaWNcXHByaWNpbmdcXHByaWNpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHZDtFQUNHLGtCQUFrQjtFQUNsQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5idG4tYm90dG9te1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgd2lkdGg6IDgwJTtcclxuIH1cclxuXHJcbiAuY2FyZC1ib2R5e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/public/pricing/pricing.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/public/pricing/pricing.component.ts ***!
  \*****************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/public/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.scss */ "./src/app/public/pricing/pricing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/public/public.component.html":
/*!**********************************************!*\
  !*** ./src/app/public/public.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\r\n    <h5 class=\"my-0 mr-md-auto font-weight-normal\"><a [routerLink]=\"['/']\">SignNature</a></h5>\r\n    <nav class=\"my-2 my-md-0 mr-md-3\">\r\n        <a class=\"p-2 text-dark link\" [routerLink]=\"['/']\" (click)=\"scrollTo('.Features')\">{{\"PUBLIC.LINKS.FEATURES\"|translate}}</a>\r\n        <a class=\"p-2 text-dark link\" [routerLink]=\"['/']\" (click)=\"scrollTo('.Enterprise')\">Enterprise</a>\r\n        <a class=\"p-2 text-dark link\" [routerLink]=\"['/']\" (click)=\"scrollTo('.Support')\">Support</a>\r\n        <a class=\"p-2 text-dark link\" [routerLink]=\"['/']\" (click)=\"scrollTo('.Pricing')\">Pricing</a>\r\n        <a class=\"language-container\">\r\n            <app-language-bar></app-language-bar>\r\n        </a>\r\n    </nav>\r\n    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/signin']\">Sign in</a>\r\n</div>\r\n<div class=\"container-fluid gap\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"clear\"></div>\r\n<a name=\"Support\" class=\"Support\"></a>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/public/public.component.scss":
/*!**********************************************!*\
  !*** ./src/app/public/public.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".html, body {\n  overflow: auto !important; }\n\n.gap {\n  padding-top: 80px; }\n\n.fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000; }\n\n.link {\n  cursor: pointer; }\n\n.link:hover {\n  border-bottom: 4px solid #815cdf; }\n\n.link:active {\n  border-bottom: 4px solid #432c7d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxccHVibGljXFxwdWJsaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZ0NBQWdDLEVBQUE7O0FBRXBDO0VBQ0ksZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvcHVibGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh0bWwsIGJvZHl7XHJcbiAgICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbiAgIFxyXG59XHJcbi5nYXB7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxufVxyXG5cclxuLmZpeGVkIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG4ubGlua3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxpbms6aG92ZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzgxNWNkZjtcclxufVxyXG4ubGluazphY3RpdmV7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzQzMmM3ZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/public/public.component.ts":
/*!********************************************!*\
  !*** ./src/app/public/public.component.ts ***!
  \********************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/scroll.service */ "./src/app/services/scroll.service.ts");



var PublicComponent = /** @class */ (function () {
    function PublicComponent(scrollService) {
        this.scrollService = scrollService;
    }
    PublicComponent.prototype.ngOnInit = function () {
    };
    PublicComponent.prototype.scrollTo = function (elementSelector) {
        this.scrollService.scrollTo(elementSelector);
    };
    PublicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public',
            template: __webpack_require__(/*! ./public.component.html */ "./src/app/public/public.component.html"),
            styles: [__webpack_require__(/*! ./public.component.scss */ "./src/app/public/public.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_scroll_service__WEBPACK_IMPORTED_MODULE_2__["ScrollService"]])
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "./src/app/public/public.module.ts":
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/*! exports provided: publicRoutes, PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicRoutes", function() { return publicRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/public/header/header.component.ts");
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/public/pricing/pricing.component.ts");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/fesm5/ngx-page-scroll-core.js");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/fesm5/ngx-page-scroll.js");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/features.component */ "./src/app/public/features/features.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/public/footer/footer.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/main.component */ "./src/app/public/main/main.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user.module */ "./src/app/public/user/user.module.ts");















var publicRoutes = [
    {
        path: '', component: _public_component__WEBPACK_IMPORTED_MODULE_7__["PublicComponent"], children: [
            {
                path: '',
                component: _main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"],
            }
        ].concat(_user_user_module__WEBPACK_IMPORTED_MODULE_14__["userRoutes"])
    },
];
var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_14__["UserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_9__["NgxPageScrollCoreModule"],
                ngx_page_scroll__WEBPACK_IMPORTED_MODULE_10__["NgxPageScrollModule"],
            ],
            entryComponents: [_public_component__WEBPACK_IMPORTED_MODULE_7__["PublicComponent"]],
            declarations: [
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"],
                _public_component__WEBPACK_IMPORTED_MODULE_7__["PublicComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _features_features_component__WEBPACK_IMPORTED_MODULE_11__["FeaturesComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"]
            ],
            providers: []
        })
    ], PublicModule);
    return PublicModule;
}());



/***/ }),

/***/ "./src/app/public/user/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/public/user/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <span class=\"login100-form-title\">\n        {{\"LOGIN.TITLE\" | translate}}\n    </span>\n\n    <div class=\"text-center w-full p-t-25\">\n        <span class=\"txt1\">\n            {{'LOGIN.NOTAMEMBER' | translate}}\n        </span>\n\n        <a class=\"txt1 bo1 hov1\" href=\"/#/signup\">\n            {{'LOGIN.SIGNUP' | translate}}\n        </a>\n    </div>\n\n    <div style=\"float:left;margin: 10px;\" class=\"wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30\">\n        <form class=\"login100-form validate-form\">\n\n            <div class=\"wrap-input100 validate-input m-b-16\" [attr.data-validate]=\"'LOGIN.INSERT_USERNAME' | translate\">\n                <input class=\"input100\" type=\"text\" autocomplete=\"username\" name=\"userName\"\n                    placeholder=\"{{'LOGIN.USERNAME' | translate}}\" [(ngModel)]=\"userName\">\n                <span class=\"focus-input100\"></span>\n                <span class=\"symbol-input100\">\n                    <span class=\"lnr lnr-envelope\"></span>\n                </span>\n            </div>\n\n            <div class=\"wrap-input100 validate-input m-b-16\">\n                <input class=\"input100\" autocomplete=\"current-password\" type=\"password\" name=\"password\"\n                    placeholder=\"{{'LOGIN.PASSWORD' | translate}}\" [(ngModel)]=\"password\">\n                <span class=\"focus-input100\"></span>\n                <span class=\"symbol-input100\">\n                    <span class=\"lnr lnr-lock\"></span>\n                </span>\n            </div>\n\n            <div class=\"contact100-form-checkbox m-l-4\">\n                <input class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n                <label class=\"label-checkbox100\" for=\"ckb1\">\n                    {{\"LOGIN.REMEMBER_ME\" | translate}}\n                </label>\n            </div>\n\n            <div class=\"container-login100-form-btn p-t-25\">\n                <button class=\"login100-form-btn\" (click)=\"tryLogin()\">\n                    {{\"LOGIN.LOGIN_BTN\" | translate}}\n                </button>\n            </div>\n\n        </form>\n    </div>\n\n    <div style=\"float:left\" class=\"wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30\">\n        <form class=\"login100-form validate-form\">\n            <div class=\"container-login100-form-btn p-t-25\">\n                <button class=\"login100-form-btn\" (click)=\"socialSignIn('google')\">\n                    <span class=\"icon-google\"></span> {{\"LOGIN.GOOGLE_SIGNIN\" | translate}}\n                </button>\n            </div>\n        </form>\n    </div>\n    <div style=\"clear: both;\"></div>\n</div>\n<div style=\"clear: both;\"></div>\n"

/***/ }),

/***/ "./src/app/public/user/login/login.component.scss":
/*!********************************************************!*\
  !*** ./src/app/public/user/login/login.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu a {\n  cursor: pointer; }\n\n.scaler, .scaler- {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  transition: all 0.3s; }\n\n.scaler-full {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  transition: all 0.3s; }\n\n.icon-google {\n  margin-right: 10px;\n  margin-left: 10px; }\n\n.container-login100 {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  position: relative;\n  z-index: 1; }\n\n.container-login100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n\n.wrap-login100 {\n  width: 370px;\n  background: #fff;\n  border-radius: 3px; }\n\n/*------------------------------------------------------------------\r\n  [  ]*/\n\n.login100-form {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n\n.login100-form-title {\n  font-size: 30px;\n  color: #333333;\n  line-height: 1.2;\n  text-transform: uppercase;\n  text-align: center;\n  width: 100%;\n  display: block; }\n\n/*---------------------------------------------*/\n\n.wrap-input100 {\n  position: relative;\n  width: 100%;\n  z-index: 1; }\n\n.input100 {\n  font-size: 18px;\n  line-height: 1.2;\n  color: #686868;\n  display: block;\n  width: 100%;\n  background: #e6e6e6;\n  height: 35px;\n  border-radius: 3px;\n  padding: 0 30px 0 30px; }\n\n/*------------------------------------------------------------------\r\n  [ Focus ]*/\n\n.focus-input100 {\n  display: block;\n  position: absolute;\n  border-radius: 3px;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 0px 0px 0px;\n  color: rgba(211, 63, 141, 0.6); }\n\n.input100:focus + .focus-input100 {\n  -webkit-animation: anim-shadow 0.5s ease-in-out forwards;\n  animation: anim-shadow 0.5s ease-in-out forwards; }\n\n@-webkit-keyframes anim-shadow {\n  to {\n    box-shadow: 0px 0px 60px 20px;\n    opacity: 0; } }\n\n@keyframes anim-shadow {\n  to {\n    box-shadow: 0px 0px 60px 20px;\n    opacity: 0; } }\n\n.symbol-input100 {\n  font-size: 24px;\n  color: #999999;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  border-radius: 25px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding-left: 23px;\n  padding-bottom: 5px;\n  pointer-events: none;\n  transition: all 0.4s; }\n\n.input100:focus + .focus-input100 + .symbol-input100 {\n  color: #d33f8d;\n  padding-left: 18px; }\n\n/*==================================================================\r\n  [ Restyle Checkbox ]*/\n\n.input-checkbox100 {\n  display: none; }\n\n.label-checkbox100 {\n  font-size: 16px;\n  color: #999999;\n  line-height: 1.2;\n  display: block;\n  position: relative;\n  padding-left: 26px;\n  cursor: pointer; }\n\n.label-checkbox100::before {\n  content: \"\\f00c\";\n  font-family: FontAwesome;\n  font-size: 13px;\n  color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  border-radius: 3px;\n  background: #fff;\n  border: 2px solid #d33f8d;\n  left: 0;\n  top: 48%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.input-checkbox100:checked + .label-checkbox100::before {\n  color: #d33f8d; }\n\n/*------------------------------------------------------------------\r\n  [ Button ]*/\n\n.container-login100-form-btn {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.login100-form-btn {\n  font-size: 16px;\n  line-height: 1.5;\n  color: #fff;\n  text-transform: uppercase;\n  width: 100%;\n  height: 35px;\n  border-radius: 3px;\n  background: #d33f8d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 25px;\n  transition: all 0.4s; }\n\n.login100-form-btn:hover {\n  background: #333333; }\n\n/*------------------------------------------------------------------\r\n  [ Button sign in with ]*/\n\n.btn-face,\n.btn-google {\n  font-size: 16px;\n  line-height: 1.2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: calc((100% - 10px) / 2);\n  height: 40px;\n  border-radius: 3px;\n  border: 1px solid #e6e6e6;\n  background-color: #fff;\n  transition: all 0.4s; }\n\n.btn-face {\n  color: #3b5998; }\n\n.btn-face i {\n  font-size: 20px;\n  margin-right: 10px;\n  padding-bottom: 1px; }\n\n.btn-google {\n  color: #555555; }\n\n.btn-google img {\n  width: 19px;\n  margin-right: 10px;\n  padding-bottom: 1px; }\n\n.btn-face:hover,\n.btn-google:hover {\n  border-color: #d33f8d; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3VzZXIvbG9naW4vQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxwdWJsaWNcXHVzZXJcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHVibGljL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBa0IsZUFBZSxFQUFBOztBQUdqQztFQUNJLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsb0JBQW9CLEVBQUE7O0FBSXhCO0VBQ0ksMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUtqQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUViLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUVQLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFNcEI7T0NYSzs7QURhTDtFQUNFLFdBQVc7RUFLWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBRWxCLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBSWhCLGdEQUFBOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1o7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFFZCxjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQUl4QjtZQ3BCVTs7QURzQlY7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw4QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx3REFBd0Q7RUFDeEQsZ0RBQWdELEVBQUE7O0FBR2xEO0VBQ0U7SUFDRSw2QkFBNkI7SUFDN0IsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRTtJQUNFLDZCQUE2QjtJQUM3QixVQUFVLEVBQUEsRUFBQTs7QUFJZDtFQUNFLGVBQWU7RUFDZixjQUFjO0VBTWQsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUtwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO3VCQzlCcUI7O0FEaUNyQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUVFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBRWhCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixrQkFBa0I7RUFNbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsT0FBTztFQUNQLFFBQVE7RUFDUixtQ0FBbUM7RUFJbkMsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsY0FBYyxFQUFBOztBQUloQjthQ3ZDVzs7QUR5Q1g7RUFDRSxXQUFXO0VBS1gsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUFHekI7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFFekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBS25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFLZixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7MEJDN0N3Qjs7QUQrQ3hCOztFQUdFLGVBQWU7RUFDZixnQkFBZ0I7RUFNaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUt0QixvQkFBb0IsRUFBQTs7QUFJdEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFJckI7O0VBRUUscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51IGEge2N1cnNvcjogcG9pbnRlcjt9XHJcblxyXG5cclxuLnNjYWxlciwuc2NhbGVyLXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4gXHJcbi5zY2FsZXItZnVsbHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmljb24tZ29vZ2xle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItbG9naW4xMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7ICBcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXItbG9naW4xMDA6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwLWxvZ2luMTAwIHtcclxuICAgIHdpZHRoOiAzNzBweDsgICBcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbICBdKi9cclxuICAubG9naW4xMDAtZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbjEwMC1mb3JtLXRpdGxlIHsgXHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC53cmFwLWlucHV0MTAwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0MTAwIHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGNvbG9yOiAjNjg2ODY4O1xyXG4gIFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFsgRm9jdXMgXSovXHJcbiAgLmZvY3VzLWlucHV0MTAwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgyMTEsNjMsMTQxLCAwLjYpO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQxMDA6Zm9jdXMgKyAuZm9jdXMtaW5wdXQxMDAge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW0tc2hhZG93IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb246IGFuaW0tc2hhZG93IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltLXNoYWRvdyB7XHJcbiAgICB0byB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNjBweCAyMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGFuaW0tc2hhZG93IHtcclxuICAgIHRvIHtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA2MHB4IDIwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zeW1ib2wtaW5wdXQxMDAge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMCArIC5zeW1ib2wtaW5wdXQxMDAge1xyXG4gICAgY29sb3I6ICNkMzNmOGQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgWyBSZXN0eWxlIENoZWNrYm94IF0qL1xyXG4gIFxyXG4gIC5pbnB1dC1jaGVja2JveDEwMCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAubGFiZWwtY2hlY2tib3gxMDAge1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjAwY1wiO1xyXG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIFxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkMzNmOGQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA0OCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWNoZWNrYm94MTAwOmNoZWNrZWQgKyAubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XHJcbiAgICBjb2xvcjogI2QzM2Y4ZDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIEJ1dHRvbiBdKi9cclxuICAuY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubG9naW4xMDAtZm9ybS1idG4ge1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNkMzNmOGQ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG4gIFxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIH1cclxuICBcclxuICAubG9naW4xMDAtZm9ybS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIEJ1dHRvbiBzaWduIGluIHdpdGggXSovXHJcbiAgLmJ0bi1mYWNlLFxyXG4gIC5idG4tZ29vZ2xlIHtcclxuICAgXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIFxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTBweCkgLyAyKTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIFxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuYnRuLWZhY2Uge1xyXG4gICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZmFjZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZ29vZ2xlIHtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gIH1cclxuICBcclxuICAuYnRuLWdvb2dsZSBpbWcge1xyXG4gICAgd2lkdGg6IDE5cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuYnRuLWZhY2U6aG92ZXIsXHJcbiAgLmJ0bi1nb29nbGU6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDMzZjhkO1xyXG4gIH1cclxuICBcclxuICAiLCIuZHJvcGRvd24tbWVudSBhIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5zY2FsZXIsIC5zY2FsZXItIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zczsgfVxuXG4uc2NhbGVyLWZ1bGwge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zczsgfVxuXG4uaWNvbi1nb29nbGUge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XG5cbi5jb250YWluZXItbG9naW4xMDAge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxOyB9XG5cbi5jb250YWluZXItbG9naW4xMDA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuXG4ud3JhcC1sb2dpbjEwMCB7XG4gIHdpZHRoOiAzNzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgWyAgXSovXG4ubG9naW4xMDAtZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwOyB9XG5cbi5sb2dpbjEwMC1mb3JtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLndyYXAtaW5wdXQxMDAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxOyB9XG5cbi5pbnB1dDEwMCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICM2ODY4Njg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDAgMzBweCAwIDMwcHg7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIEZvY3VzIF0qL1xuLmZvY3VzLWlucHV0MTAwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XG4gIGNvbG9yOiByZ2JhKDIxMSwgNjMsIDE0MSwgMC42KTsgfVxuXG4uaW5wdXQxMDA6Zm9jdXMgKyAuZm9jdXMtaW5wdXQxMDAge1xuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbS1zaGFkb3cgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBhbmltLXNoYWRvdyAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzOyB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyBhbmltLXNoYWRvdyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDYwcHggMjBweDtcbiAgICBvcGFjaXR5OiAwOyB9IH1cblxuQGtleWZyYW1lcyBhbmltLXNoYWRvdyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDYwcHggMjBweDtcbiAgICBvcGFjaXR5OiAwOyB9IH1cblxuLnN5bWJvbC1pbnB1dDEwMCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjNweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40czsgfVxuXG4uaW5wdXQxMDA6Zm9jdXMgKyAuZm9jdXMtaW5wdXQxMDAgKyAuc3ltYm9sLWlucHV0MTAwIHtcbiAgY29sb3I6ICNkMzNmOGQ7XG4gIHBhZGRpbmctbGVmdDogMThweDsgfVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIFsgUmVzdHlsZSBDaGVja2JveCBdKi9cbi5pbnB1dC1jaGVja2JveDEwMCB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmxhYmVsLWNoZWNrYm94MTAwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmxhYmVsLWNoZWNrYm94MTAwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwY1wiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2QzM2Y4ZDtcbiAgbGVmdDogMDtcbiAgdG9wOiA0OCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cblxuLmlucHV0LWNoZWNrYm94MTAwOmNoZWNrZWQgKyAubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XG4gIGNvbG9yOiAjZDMzZjhkOyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgWyBCdXR0b24gXSovXG4uY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4ubG9naW4xMDAtZm9ybS1idG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNkMzNmOGQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzOyB9XG5cbi5sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIEJ1dHRvbiBzaWduIGluIHdpdGggXSovXG4uYnRuLWZhY2UsXG4uYnRuLWdvb2dsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMHB4KSAvIDIpO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzOyB9XG5cbi5idG4tZmFjZSB7XG4gIGNvbG9yOiAjM2I1OTk4OyB9XG5cbi5idG4tZmFjZSBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7IH1cblxuLmJ0bi1nb29nbGUge1xuICBjb2xvcjogIzU1NTU1NTsgfVxuXG4uYnRuLWdvb2dsZSBpbWcge1xuICB3aWR0aDogMTlweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4OyB9XG5cbi5idG4tZmFjZTpob3Zlcixcbi5idG4tZ29vZ2xlOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZDMzZjhkOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/public/user/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/public/user/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.context.service */ "./src/app/services/user.context.service.ts");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__);






var LoginComponent = /** @class */ (function () {
    /**
     *
     */
    function LoginComponent(socialAuthService, userService, router, _ngZone) {
        var _this = this;
        this.socialAuthService = socialAuthService;
        this.userService = userService;
        this.router = router;
        this._ngZone = _ngZone;
        this.user = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    LoginComponent.prototype.scale = function (element, clsname) {
        element.className = "scaler-" + clsname;
    };
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
                            this.userService.setUser(result.user);
                            this.router.navigate(['dashboard']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform === 'facebook') {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform === 'google') {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_3__["AuthController"].token(userData)];
                    case 1:
                        result = _a.sent();
                        this.userService.setToken(result.token);
                        this.userService.setUser(result.user);
                        this.router.navigate(['dashboard']);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    LoginComponent.prototype.signOut = function () {
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
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/public/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/public/user/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_user_context_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/public/user/signup/signup.component.html":
/*!**********************************************************!*\
  !*** ./src/app/public/user/signup/signup.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div pageScroll>\n    <div class=\"limiter\">\n        <span class=\"login100-form-title\">\n            <h1>{{\"SIGNUP.TITLE\" | translate}}</h1>\n        </span>\n        <div class=\"text-center w-full p-t-25\">\n            <span class=\"txt1\">\n                {{'SIGNUP.ALREADYMEMBER' | translate}}\n            </span>\n\n            <a class=\"txt1 bo1 hov1\" href=\"/#/signin\">\n                {{'SIGNUP.SIGNIN' | translate}}\n            </a>\n        </div>\n        <div class=\"container-login100\">\n\n\n\n            <div class=\"wrap-login100\" style=\"float:left;margin:10px;padding: 50px 50px 30px 30px\">\n\n                <form class=\"login100-form validate-form\">\n\n\n                    <div class=\"wrap-input100 validate-input m-b-16\"\n                        [attr.data-validate]=\"'SIGNUP.INSERT_USERNAME' | translate\">\n                        <input class=\"input100\" type=\"text\" name=\"userName\"\n                            placeholder=\"{{'SIGNUP.USERNAME' | translate}}\" [(ngModel)]=\"userName\">\n                        <span class=\"focus-input100\"></span>\n                        <span class=\"symbol-input100\">\n                            <span class=\"lnr lnr-envelope\"></span>\n                        </span>\n                    </div>\n\n                    <div class=\"wrap-input100 validate-input m-b-16\">\n                        <input class=\"input100\" type=\"password\" name=\"password\"\n                            placeholder=\"{{'SIGNUP.PASSWORD' | translate}}\" [(ngModel)]=\"password\">\n                        <span class=\"focus-input100\"></span>\n                        <span class=\"symbol-input100\">\n                            <span class=\"lnr lnr-lock\"></span>\n                        </span>\n                    </div>\n\n\n                    <div class=\"wrap-input100 validate-input m-b-16\">\n                        <input class=\"input100\" type=\"password\" name=\"passwordRepeat\"\n                            placeholder=\"{{'SIGNUP.RPTPASSWORD' | translate}}\" [(ngModel)]=\"passwordRepeat\">\n                        <span class=\"focus-input100\"></span>\n                        <span class=\"symbol-input100\">\n                            <span class=\"lnr lnr-lock\"></span>\n                        </span>\n                    </div>\n\n\n\n                    <div class=\"container-login100-form-btn p-t-25\">\n                        <button class=\"login100-form-btn\" (click)=\"trySignup()\">\n                            {{\"SIGNUP.SIGNUP_BTN\" | translate}}\n                        </button>\n                    </div>\n\n\n\n\n                </form>\n            </div>\n\n            <div style=\"float:left\" class=\"wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30\">\n\n                <form class=\"login100-form validate-form\">\n\n                    <div class=\"container-login100-form-btn p-t-25\">\n                        <button class=\"login100-form-btn\" (click)=\"socialSignUp('google')\">\n                            <span class=\"icon-google\"></span> {{\"LOGIN.GOOGLE_SIGNUP\" | translate}}\n                        </button>\n                    </div>\n                    <div class=\"result-output\">\n                        {{resultOutput}}\n\n                    </div>\n\n\n\n\n\n\n\n\n\n\n                </form>\n            </div>\n\n        </div>\n    </div>\n\n\n\n\n\n\n\n\n    <div id=\"output\"></div>\n\n    <script>\n        (function () {\n            var updateButton = document.getElementById('updateDetails');\n            var favDialog = document.getElementById('favDialog');\n            var outputBox = document.getElementById(\"output\");\n\n            // “Update details” button opens the <dialog> modally\n            updateButton.addEventListener('click', function () {\n                favDialog.showModal();\n                output.innerHTML += \"<div>\" + favDialog.returnValue + \" button clicked!</div>\";\n            });\n        })();\n    </script>\n\n\n    <ng-template #share>\n        <div class=\"modal-body text-center\">\n\n            <p>Share your group.</p>\n            <pre>{{group.GroupId}}</pre>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <ng-template #join>\n        <div class=\"modal-body text-center\">\n            <p>Join a group.</p>\n            <div>\n                <label>Group code</label>\n                <input type=\"text\" class=\"form-control\" #group_code />\n            </div>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"JoinConfirm(group_code.value)\">Join</a>\n            <a type=\"button\" class=\"btn btn-default\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <div class=\"float-left dropdown\" *ngIf=\"userData && group\">\n        <a class=\"btn btn-secondary dropdown-toggle white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{group.Name}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"position: absolute\">\n            <a class=\"dropdown-item\" (click)=\"setGroup(item)\" *ngFor=\"let item of userData.groups\">{{item.Name}}</a>\n\n            <a class=\"dropdown-item\" (click)=\"JoinGroup(join)\">Join group</a>\n            <a class=\"dropdown-item\" (click)=\"ShareGroup(share)\">Share group</a>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/public/user/signup/signup.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/public/user/signup/signup.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu a {\n  cursor: pointer; }\n\n.scaler, .scaler- {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  transition: all 0.3s; }\n\n.scaler-full {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  transition: all 0.3s; }\n\n.icon-google {\n  margin-right: 10px;\n  margin-left: 10px; }\n\n.container-login100 {\n  height: 100px;\n  width: 100%;\n  min-height: 100vh;\n  display: -ms-flexbox;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  position: relative;\n  z-index: 1; }\n\n.container-login100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n\n.wrap-login100 {\n  width: 370px;\n  background: #fff;\n  border-radius: 3px; }\n\n/*------------------------------------------------------------------\r\n  [  ]*/\n\n.login100-form {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n\n.login100-form-title {\n  font-size: 30px;\n  color: #333333;\n  line-height: 1.2;\n  text-transform: uppercase;\n  text-align: center;\n  width: 100%;\n  display: block; }\n\n/*---------------------------------------------*/\n\n.wrap-input100 {\n  position: relative;\n  width: 100%;\n  z-index: 1; }\n\n.input100 {\n  font-size: 18px;\n  line-height: 1.2;\n  color: #686868;\n  display: block;\n  width: 100%;\n  background: #e6e6e6;\n  height: 35px;\n  border-radius: 3px;\n  padding: 0 30px 0 30px; }\n\n/*------------------------------------------------------------------\r\n  [ Focus ]*/\n\n.focus-input100 {\n  display: block;\n  position: absolute;\n  border-radius: 3px;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 0px 0px 0px;\n  color: rgba(211, 63, 141, 0.6); }\n\n.input100:focus + .focus-input100 {\n  -webkit-animation: anim-shadow 0.5s ease-in-out forwards;\n  animation: anim-shadow 0.5s ease-in-out forwards; }\n\n@-webkit-keyframes anim-shadow {\n  to {\n    box-shadow: 0px 0px 60px 20px;\n    opacity: 0; } }\n\n@keyframes anim-shadow {\n  to {\n    box-shadow: 0px 0px 60px 20px;\n    opacity: 0; } }\n\n.symbol-input100 {\n  font-size: 24px;\n  color: #999999;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  border-radius: 25px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding-left: 23px;\n  padding-bottom: 5px;\n  pointer-events: none;\n  transition: all 0.4s; }\n\n.input100:focus + .focus-input100 + .symbol-input100 {\n  color: #d33f8d;\n  padding-left: 18px; }\n\n/*==================================================================\r\n  [ Restyle Checkbox ]*/\n\n.input-checkbox100 {\n  display: none; }\n\n.label-checkbox100 {\n  font-size: 16px;\n  color: #999999;\n  line-height: 1.2;\n  display: block;\n  position: relative;\n  padding-left: 26px;\n  cursor: pointer; }\n\n.label-checkbox100::before {\n  content: \"\\f00c\";\n  font-family: FontAwesome;\n  font-size: 13px;\n  color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  border-radius: 3px;\n  background: #fff;\n  border: 2px solid #d33f8d;\n  left: 0;\n  top: 48%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.input-checkbox100:checked + .label-checkbox100::before {\n  color: #d33f8d; }\n\n/*------------------------------------------------------------------\r\n  [ Button ]*/\n\n.container-login100-form-btn {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.login100-form-btn {\n  font-size: 16px;\n  line-height: 1.5;\n  color: #fff;\n  text-transform: uppercase;\n  width: 100%;\n  height: 35px;\n  border-radius: 3px;\n  background: #d33f8d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 25px;\n  transition: all 0.4s; }\n\n.login100-form-btn:hover {\n  background: #333333; }\n\n/*------------------------------------------------------------------\r\n  [ Button sign in with ]*/\n\n.btn-face,\n.btn-google {\n  font-size: 16px;\n  line-height: 1.2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: calc((100% - 10px) / 2);\n  height: 40px;\n  border-radius: 3px;\n  border: 1px solid #e6e6e6;\n  background-color: #fff;\n  transition: all 0.4s; }\n\n.btn-face {\n  color: #3b5998; }\n\n.btn-face i {\n  font-size: 20px;\n  margin-right: 10px;\n  padding-bottom: 1px; }\n\n.btn-google {\n  color: #555555; }\n\n.btn-google img {\n  width: 19px;\n  margin-right: 10px;\n  padding-bottom: 1px; }\n\n.btn-face:hover,\n.btn-google:hover {\n  border-color: #d33f8d; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3VzZXIvc2lnbnVwL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxccHVibGljXFx1c2VyXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHVibGljL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFrQixlQUFlLEVBQUE7O0FBR2pDO0VBQ0ksNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixvQkFBb0IsRUFBQTs7QUFJeEI7RUFDSSwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtFQUlqQixvQkFBb0I7RUFFcEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUViLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUVQLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFNcEI7T0NaSzs7QURjTDtFQUNFLFdBQVc7RUFLWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBRWxCLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBSWhCLGdEQUFBOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1o7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFFZCxjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQUl4QjtZQ3JCVTs7QUR1QlY7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw4QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx3REFBd0Q7RUFDeEQsZ0RBQWdELEVBQUE7O0FBR2xEO0VBQ0U7SUFDRSw2QkFBNkI7SUFDN0IsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRTtJQUNFLDZCQUE2QjtJQUM3QixVQUFVLEVBQUEsRUFBQTs7QUFJZDtFQUNFLGVBQWU7RUFDZixjQUFjO0VBTWQsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUtwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO3VCQy9CcUI7O0FEa0NyQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUVFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBRWhCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixrQkFBa0I7RUFNbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsT0FBTztFQUNQLFFBQVE7RUFDUixtQ0FBbUM7RUFJbkMsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsY0FBYyxFQUFBOztBQUloQjthQ3hDVzs7QUQwQ1g7RUFDRSxXQUFXO0VBS1gsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUFHekI7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFFekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBS25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFLZixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7MEJDOUN3Qjs7QURnRHhCOztFQUdFLGVBQWU7RUFDZixnQkFBZ0I7RUFNaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUt0QixvQkFBb0IsRUFBQTs7QUFJdEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFJckI7O0VBRUUscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLW1lbnUgYSB7Y3Vyc29yOiBwb2ludGVyO31cclxuXHJcblxyXG4uc2NhbGVyLC5zY2FsZXIte1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbiBcclxuLnNjYWxlci1mdWxse1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uaWNvbi1nb29nbGV7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1sb2dpbjEwMCB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7ICBcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICBcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXItbG9naW4xMDA6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwLWxvZ2luMTAwIHtcclxuICAgIHdpZHRoOiAzNzBweDsgICBcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbICBdKi9cclxuICAubG9naW4xMDAtZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbjEwMC1mb3JtLXRpdGxlIHsgXHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC53cmFwLWlucHV0MTAwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0MTAwIHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGNvbG9yOiAjNjg2ODY4O1xyXG4gIFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFsgRm9jdXMgXSovXHJcbiAgLmZvY3VzLWlucHV0MTAwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgyMTEsNjMsMTQxLCAwLjYpO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQxMDA6Zm9jdXMgKyAuZm9jdXMtaW5wdXQxMDAge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW0tc2hhZG93IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb246IGFuaW0tc2hhZG93IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltLXNoYWRvdyB7XHJcbiAgICB0byB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNjBweCAyMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGFuaW0tc2hhZG93IHtcclxuICAgIHRvIHtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA2MHB4IDIwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zeW1ib2wtaW5wdXQxMDAge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMCArIC5zeW1ib2wtaW5wdXQxMDAge1xyXG4gICAgY29sb3I6ICNkMzNmOGQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgWyBSZXN0eWxlIENoZWNrYm94IF0qL1xyXG4gIFxyXG4gIC5pbnB1dC1jaGVja2JveDEwMCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAubGFiZWwtY2hlY2tib3gxMDAge1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjAwY1wiO1xyXG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIFxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkMzNmOGQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA0OCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWNoZWNrYm94MTAwOmNoZWNrZWQgKyAubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XHJcbiAgICBjb2xvcjogI2QzM2Y4ZDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIEJ1dHRvbiBdKi9cclxuICAuY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubG9naW4xMDAtZm9ybS1idG4ge1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNkMzNmOGQ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG4gIFxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIH1cclxuICBcclxuICAubG9naW4xMDAtZm9ybS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIEJ1dHRvbiBzaWduIGluIHdpdGggXSovXHJcbiAgLmJ0bi1mYWNlLFxyXG4gIC5idG4tZ29vZ2xlIHtcclxuICAgXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIFxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTBweCkgLyAyKTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIFxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuYnRuLWZhY2Uge1xyXG4gICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZmFjZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZ29vZ2xlIHtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gIH1cclxuICBcclxuICAuYnRuLWdvb2dsZSBpbWcge1xyXG4gICAgd2lkdGg6IDE5cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuYnRuLWZhY2U6aG92ZXIsXHJcbiAgLmJ0bi1nb29nbGU6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDMzZjhkO1xyXG4gIH1cclxuICBcclxuICAiLCIuZHJvcGRvd24tbWVudSBhIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5zY2FsZXIsIC5zY2FsZXItIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zczsgfVxuXG4uc2NhbGVyLWZ1bGwge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zczsgfVxuXG4uaWNvbi1nb29nbGUge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XG5cbi5jb250YWluZXItbG9naW4xMDAge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxOyB9XG5cbi5jb250YWluZXItbG9naW4xMDA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuXG4ud3JhcC1sb2dpbjEwMCB7XG4gIHdpZHRoOiAzNzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgWyAgXSovXG4ubG9naW4xMDAtZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwOyB9XG5cbi5sb2dpbjEwMC1mb3JtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLndyYXAtaW5wdXQxMDAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxOyB9XG5cbi5pbnB1dDEwMCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICM2ODY4Njg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDAgMzBweCAwIDMwcHg7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIEZvY3VzIF0qL1xuLmZvY3VzLWlucHV0MTAwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XG4gIGNvbG9yOiByZ2JhKDIxMSwgNjMsIDE0MSwgMC42KTsgfVxuXG4uaW5wdXQxMDA6Zm9jdXMgKyAuZm9jdXMtaW5wdXQxMDAge1xuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbS1zaGFkb3cgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBhbmltLXNoYWRvdyAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzOyB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyBhbmltLXNoYWRvdyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDYwcHggMjBweDtcbiAgICBvcGFjaXR5OiAwOyB9IH1cblxuQGtleWZyYW1lcyBhbmltLXNoYWRvdyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDYwcHggMjBweDtcbiAgICBvcGFjaXR5OiAwOyB9IH1cblxuLnN5bWJvbC1pbnB1dDEwMCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjNweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40czsgfVxuXG4uaW5wdXQxMDA6Zm9jdXMgKyAuZm9jdXMtaW5wdXQxMDAgKyAuc3ltYm9sLWlucHV0MTAwIHtcbiAgY29sb3I6ICNkMzNmOGQ7XG4gIHBhZGRpbmctbGVmdDogMThweDsgfVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIFsgUmVzdHlsZSBDaGVja2JveCBdKi9cbi5pbnB1dC1jaGVja2JveDEwMCB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmxhYmVsLWNoZWNrYm94MTAwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmxhYmVsLWNoZWNrYm94MTAwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwY1wiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2QzM2Y4ZDtcbiAgbGVmdDogMDtcbiAgdG9wOiA0OCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cblxuLmlucHV0LWNoZWNrYm94MTAwOmNoZWNrZWQgKyAubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XG4gIGNvbG9yOiAjZDMzZjhkOyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgWyBCdXR0b24gXSovXG4uY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4ubG9naW4xMDAtZm9ybS1idG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNkMzNmOGQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzOyB9XG5cbi5sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIEJ1dHRvbiBzaWduIGluIHdpdGggXSovXG4uYnRuLWZhY2UsXG4uYnRuLWdvb2dsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMHB4KSAvIDIpO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzOyB9XG5cbi5idG4tZmFjZSB7XG4gIGNvbG9yOiAjM2I1OTk4OyB9XG5cbi5idG4tZmFjZSBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7IH1cblxuLmJ0bi1nb29nbGUge1xuICBjb2xvcjogIzU1NTU1NTsgfVxuXG4uYnRuLWdvb2dsZSBpbWcge1xuICB3aWR0aDogMTlweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4OyB9XG5cbi5idG4tZmFjZTpob3Zlcixcbi5idG4tZ29vZ2xlOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZDMzZjhkOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/public/user/signup/signup.component.ts":
/*!********************************************************!*\
  !*** ./src/app/public/user/signup/signup.component.ts ***!
  \********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.context.service */ "./src/app/services/user.context.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/scroll.service */ "./src/app/services/scroll.service.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, socialAuthService, scrollService, translateService, router) {
        this.userService = userService;
        this.socialAuthService = socialAuthService;
        this.scrollService = scrollService;
        this.translateService = translateService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.scrollService.scrollTo('body');
    };
    SignupComponent.prototype.trySignup = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userRequest, result, ex_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRequest = { Email: this.userName, Password: this.password };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["AuthController"].signup(userRequest)];
                    case 2:
                        result = _a.sent();
                        if (result.token) {
                            this.userService.setToken(result.token);
                            this.router.navigate(['/dashboard']);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        this.translateService.get('SIGNUP.GOOGLE_SIGNUP_ERROR').subscribe(function (label) {
                            _this.resultOutput = label;
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SignupComponent.prototype.socialSignUp = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform === 'facebook') {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform === 'google') {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, ex_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["AuthController"].signup(userData)];
                    case 1:
                        result = _a.sent();
                        if (result.error) {
                            this.translateService.get("ERRORS." + result.error).subscribe(function (label) {
                                _this.resultOutput = label;
                            });
                            return [2 /*return*/];
                        }
                        if (result.token) {
                            this.userService.setToken(result.token);
                            this.router.navigate(['/dashboard']);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_2 = _a.sent();
                        this.translateService.get('SIGNUP.GOOGLE_SIGNUP_ERROR').subscribe(function (label) {
                            _this.resultOutput = label;
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignupComponent.prototype, "userData", void 0);
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/public/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/public/user/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_context_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_scroll_service__WEBPACK_IMPORTED_MODULE_5__["ScrollService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/public/user/user.module.ts":
/*!********************************************!*\
  !*** ./src/app/public/user/user.module.ts ***!
  \********************************************/
/*! exports provided: userRoutes, UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/public/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/public/user/signup/signup.component.ts");
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.context.service */ "./src/app/services/user.context.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");









var userRoutes = [
    { path: 'signin', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
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
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]],
            entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
            providers: [_services_user_context_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtHelperService"]],
            exports: []
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/screens/screen-group/screen-group.component.html":
/*!******************************************************************!*\
  !*** ./src/app/screens/screen-group/screen-group.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<ng-template #lobbyTemplate let-item=\"item\">\n        <span class=\"fancy-thumb-label\"><i class=\"icon-layers\"></i> {{item.Name}}</span>\n    \n     \n    </ng-template>\n\n\n<app-lobby [items]=\"items\" [template]=\"lobbyTemplate\" [mode]=\"'object'\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem()\"></app-lobby>\n\n<div [joyrideStep]=\"'screengroups'\" [stepContent]=\"screengroupsContent\" stepPosition=\"center\"></div>\n<ng-template #screengroupsContent>\n    <h5> {{'TOUR.SCREENGROUPS.TITLE' | translate}}</h5>\n    <p>\n        {{'TOUR.SCREENGROUPS.CONTENT' | translate}}\n    </p>\n</ng-template>\n \n<ng-template #groupnameContent>\n        <h5> {{'TOUR.SCREENGROUPS.TITLE' | translate}}</h5>\n        <p>\n            {{'TOUR.SCREENGROUPS.CONTENT' | translate}}\n        </p>\n    </ng-template>\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n    <dialog open= {{displayModalNew}}>\n        <app-slide-header *ngIf=\"item\" [title]=\"item.Name\" closeFn=\"true\" [iconClass]=\"'icon-layers'\" [enableSave]='true' (save)=\"saveProxy($event)\"\n            [className]=\"'screen-group-cat'\" (closed)=\"close()\"></app-slide-header>\n        <form *ngIf=\"item\" class=\"pt50\" [formGroup]=\"itemForm\">\n            <div class=\"form-group\"  >\n                <label for=\"screenName\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n                <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\"\n                 class=\"form-control\" formControlName=\"Name\" #Name [joyrideStep]=\"'group-name'\"  [stepContent]=\"groupnameContent\">\n                <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SCREENS.NAME_HELP\" | translate }}</small>\n            </div>\n        </form>\n        <app-slide-footer [iconClass]=\"'icon-layers'\" [className]=\"'screen-group-cat'\"></app-slide-footer>\n\n    </dialog>\n</div>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");







var ScreenGroupComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ScreenGroupComponent, _super);
    function ScreenGroupComponent(_ngZone, translateService, dirtyService, changeDetectorRef, formBuilder) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService, changeDetectorRef, formBuilder) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.dirtyService = dirtyService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.formBuilder = formBuilder;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_2__["ScreenGroupDataController"];
        _this.Model = 'ScreenGroup';
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
    ScreenGroupComponent.prototype.getFormFields = function () {
        var fields = [{
                name: 'Name',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            }
        ];
        return fields;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _services_dirty_service__WEBPACK_IMPORTED_MODULE_6__["DirtyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ScreenGroupComponent);
    return ScreenGroupComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_3__["DataComponent"]));



/***/ }),

/***/ "./src/app/screens/screen.component.html":
/*!***********************************************!*\
  !*** ./src/app/screens/screen.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide-header title=\"NAVBAR.SCREENS\" mode=\"inline\" iconClass=\"icon-display\" className=\"screen-cat\"></app-slide-header>\n<div style=\"padding: 10px;\">\n    <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item\" *ngFor=\"let tab of tabs\" [routerLink]=\"[tab.alias]\" routerLinkActive=\"screen-group-cat\">\n            <a class=\"nav-link {{tab.selected}}\"><h5><i class=\"{{tab.icon}}\"></i> {{tab.name | translate}}</h5></a>\n        </li>\n    </ul>\n    <div class=\"nav-tabs-bar\"></div>\n    <div [appAdaptHeight]=\"120\" class=\"nohor\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/screens/screen.component.scss":
/*!***********************************************!*\
  !*** ./src/app/screens/screen.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav.nav-tabs {\n  height: 40px; }\n\n.nav-tabs-bar {\n  margin-bottom: 10px;\n  width: 100%;\n  height: 4px;\n  background: #264356;\n  background: linear-gradient(90deg, #264356 0%, #3c7399 99%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXHNjcmVlbnNcXHNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBRUksbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJDVHNCO0VEVXRCLDJEQUErRSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBpbXBvcnQgJy4uLy4uL3Nhc3MvX3ZhcmlhYmxlcyc7XHJcblxyXG5cclxuLm5hdi5uYXYtdGFic3tcclxuICAgIGhlaWdodDogNDBweDsgICAgXHJcbn1cclxuLm5hdi10YWJzLWJhclxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6JGNvbG9yLWxpZ2h0Ymx1ZTE7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRjb2xvci1saWdodGJsdWUxIDAlLCAkY29sb3ItbGlnaHRibHVlMiA5OSUpO1xyXG59IiwiXHJcbiRjb2xvci1ncmF5OiAjZTNlNGU1O1xyXG4kY29sb3ItZGFya2JsdWUxOiAjMTYyNDMzO1xyXG4kY29sb3ItZGFya2JsdWUyOiAjMmE0NTYzO1xyXG4kY29sb3ItbGlnaHRibHVlMTogIzI2NDM1NjtcclxuJGNvbG9yLWxpZ2h0Ymx1ZTI6ICMzYzczOTk7XHJcbiRjb2xvci1vcmFuZ2U6ICNmYzY2MDA7XHJcbiRjb2xvci1jeWFuOiAjMDBmZmY2O1xyXG4kY29sb3Itc2NyZWVuOiAjMDBjZmZmO1xyXG4kY29sb3Itc2NyZWVuLWdyb3VwOiAjMDBmZmY2O1xyXG4kY29sb3ItbGlicmFyeTogIzk2ZmYwMDtcclxuJGNvbG9yLXllbGxvdzogI2ZmZmYwMDtcclxuJGNvbG9yLXB1cnBsZTogI2YzYjdlYjtcclxuJGNvbG9yLWdyZWVuOiAjOTZmZjAwO1xyXG4kY29sb3ItYmxhY2s6ICMyMjI7XHJcbiRjb2xvci1ncmF5d2hpdGU6ICNGRkU7XHJcbiRjb2xvci10b29sYmFyOiAjZjhmOWZhO1xyXG4gXHJcblxyXG4gXHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/screens/screen.component.ts":
/*!*********************************************!*\
  !*** ./src/app/screens/screen.component.ts ***!
  \*********************************************/
/*! exports provided: ScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenComponent", function() { return ScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ScreenComponent = /** @class */ (function () {
    function ScreenComponent(_ngZone, translateService, router) {
        this._ngZone = _ngZone;
        this.translateService = translateService;
        this.router = router;
        this.tabs = [{
                alias: 'screens',
                name: 'NAVBAR.SCREENS', icon: 'icon-display', selected: true
            },
            {
                alias: 'screen-group',
                name: 'NAVBAR.SCREEN-GROUPS', icon: 'icon-layers', selected: false
            }];
    }
    // tabSelect(tab) {
    //   this.router.navigate([tab.alias]);
    //   this.tabs.forEach(tabItem => tabItem.selected = false);
    //   tab.selected = true;
    //   this.selectedTab = tab;
    // }
    ScreenComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-screen',
            template: __webpack_require__(/*! ./screen.component.html */ "./src/app/screens/screen.component.html"),
            styles: [__webpack_require__(/*! ./screen.component.scss */ "./src/app/screens/screen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ScreenComponent);
    return ScreenComponent;
}());



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

/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _screen_group_screen_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screen-group/screen-group.component */ "./src/app/screens/screen-group/screen-group.component.ts");
/* harmony import */ var _screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screen.component */ "./src/app/screens/screen.component.ts");
/* harmony import */ var ngx_joyride__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-joyride */ "./node_modules/ngx-joyride/esm5/ngx-joyride.esm.js");












var screenRoutes = [
    {
        path: 'screen', component: _screen_component__WEBPACK_IMPORTED_MODULE_8__["ScreenComponent"],
        children: [
            { path: '', redirectTo: 'screens', pathMatch: 'full' },
            { path: 'screens', component: _screens_screens_component__WEBPACK_IMPORTED_MODULE_3__["ScreensComponent"] },
            { path: 'screen-group', component: _screen_group_screen_group_component__WEBPACK_IMPORTED_MODULE_7__["ScreenGroupComponent"] }
        ]
    },
];
var ScreensModule = /** @class */ (function () {
    function ScreensModule() {
    }
    ScreensModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_joyride__WEBPACK_IMPORTED_MODULE_9__["JoyrideModule"].forChild(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [_screens_screens_component__WEBPACK_IMPORTED_MODULE_3__["ScreensComponent"], _screen_group_screen_group_component__WEBPACK_IMPORTED_MODULE_7__["ScreenGroupComponent"], _screen_component__WEBPACK_IMPORTED_MODULE_8__["ScreenComponent"]],
            entryComponents: [_screens_screens_component__WEBPACK_IMPORTED_MODULE_3__["ScreensComponent"]],
            exports: [_screens_screens_component__WEBPACK_IMPORTED_MODULE_3__["ScreensComponent"], _screen_group_screen_group_component__WEBPACK_IMPORTED_MODULE_7__["ScreenGroupComponent"]]
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

module.exports = "<app-lobby [items]=\"items\" [template]=\"lobbyTemplate\" [iconClass]=\"'icon-display'\" [mode]=\"'object'\"\n    (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem()\"></app-lobby>\n\n<ng-template #lobbyTemplate let-item=\"item\">\n    <span class=\"fancy-thumb-label\"><i class=\"icon-display\"></i> {{item.Name}}</span>\n\n    <div class=\"description\">\n        <div>{{\"SCREENS.GROUP_NAME\" | translate}}: <small *ngIf=\"item.Group\">({{item.Group.Name}})</small></div>\n        <div>{{\"SCREENS.TOKEN\" | translate}}: <small>({{item.Token}})</small></div>\n    </div>\n\n</ng-template>\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n    <dialog open={{displayModalNew}}>\n\n        <app-slide-header *ngIf=\"item\" [title]=\"item.Name\" closeFn=\"true\" [enableSave]='true' (save)=\"saveProxy($event)\"\n            [iconClass]=\"'icon-display'\" className=\"screen-cat\" (closed)=\"closeSlider()\"></app-slide-header>\n\n        <form *ngIf=\"item\" class=\"pt50\" [formGroup]=\"itemForm\">\n\n            <div class=\"form-group\">\n                <label for=\"Name\">{{ \"SCREENS.NAME\" | translate }}:</label>\n                <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\" required\n                    formControlName=\"Name\" #Name class=\"form-control\" [detectChanges]=\"true\">\n                <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SCREENS.NAME_HELP\" | translate }}</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"Group\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n                <select [ngClass]=\"{ 'is-invalid': submitted && f.Group.errors }\" formControlName=\"Group\" #Group\n                    [compareWith]=\"compareFn\" class=\"form-control\">\n                    <option>Select</option>\n                    <option *ngFor=\"let c of groups\" [ngValue]=\"c\">{{c.Name}}</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">{{ \"SCREENS.TOKEN\" | translate }}</label>\n                <input type=\"text\" name=\"Token\" [ngClass]=\"{ 'is-invalid': submitted && f.Token.errors }\"\n                    class=\"form-control\" formControlName=\"Token\" #Token id=\"txtToken\"\n                    placeholder=\"{{'SCREENS.TOKEN' | translate}}\">\n            </div>\n        </form>\n        <app-slide-footer [title]=\"'NAVBAR.SCREENS'\" [iconClass]=\"'icon-display'\" [className]=\"'screen-cat'\">\n        </app-slide-footer>\n    </dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/screens/screens.component.scss":
/*!********************************************************!*\
  !*** ./src/app/screens/screens/screens.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  margin-right: 10px;\n  margin-left: 10px; }\n\n.description {\n  margin-top: 30px;\n  clear: both;\n  padding: 10px;\n  font-size: 11px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9zY3JlZW5zL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcc2NyZWVuc1xcc2NyZWVuc1xcc2NyZWVucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL3NjcmVlbnMvc2NyZWVucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb257XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOjExcHg7XHJcblxyXG59Il19 */"

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
/* harmony import */ var _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dirty.service */ "./src/app/services/dirty.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ScreensComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ScreensComponent, _super);
    function ScreensComponent(_ngZone, translateService, dirtyService, changeDetectorRef, formBuilder) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService, changeDetectorRef, formBuilder) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.dirtyService = dirtyService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.formBuilder = formBuilder;
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_2__["ScreensDataController"];
        _this.Model = 'Screen';
        return _this;
    }
    ScreensComponent.prototype.compareFn = function (a, b) {
        if (b) {
            return a._id === b._id;
        }
    };
    ScreensComponent.prototype.getFormFields = function () {
        var fields = [{
                name: 'Name',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            },
            {
                name: 'Group',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            },
            {
                name: 'Token',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            }
        ];
        return fields;
    };
    ScreensComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var groups;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadItems();
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["ScreenGroupDataController"].query('ScreenGroup', {})];
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_5__["DirtyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
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
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dirty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saving = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
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
                console.log(svg);
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
        this.languages.push({ key: 'de', lcid: 1037, name: 'Dutche', dir: 'ltr', subset: 'latin' });
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
/* harmony import */ var _services_history_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/history.service */ "./src/app/services/history.service.ts");
/* harmony import */ var _media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./media-preview/media-preview.component */ "./src/app/media-preview/media-preview.component.ts");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _directives_resizable_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./directives/resizable.directive */ "./src/app/directives/resizable.directive.ts");
/* harmony import */ var ngx_joyride__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-joyride */ "./node_modules/ngx-joyride/esm5/ngx-joyride.esm.js");
/* harmony import */ var _services_tour_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/tour.service */ "./src/app/services/tour.service.ts");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/scroll.service */ "./src/app/services/scroll.service.ts");






































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
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["FileDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"].forRoot(),
                angular2_hotkeys__WEBPACK_IMPORTED_MODULE_8__["HotkeyModule"].forRoot(),
                ngx_joyride__WEBPACK_IMPORTED_MODULE_34__["JoyrideModule"].forChild(),
                angular2_draggable__WEBPACK_IMPORTED_MODULE_9__["AngularDraggableModule"]
            ],
            declarations: [_editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_20__["CanvasComponent"],
                _directives_adapt_height__WEBPACK_IMPORTED_MODULE_17__["AdaptHeightDirective"],
                _directives_resizable_directive__WEBPACK_IMPORTED_MODULE_33__["ResizableDirective"],
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
                _media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_31__["MediaPreviewComponent"]],
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
                _services_language_dictionary_service__WEBPACK_IMPORTED_MODULE_5__["DictionaryService"],
                _services_name_service__WEBPACK_IMPORTED_MODULE_6__["NameService"],
                _player_slide_service__WEBPACK_IMPORTED_MODULE_21__["SlideService"],
                _services_dirty_service__WEBPACK_IMPORTED_MODULE_24__["DirtyService"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"],
                _services_responsive_service__WEBPACK_IMPORTED_MODULE_26__["ResponsiveService"],
                _services_history_service__WEBPACK_IMPORTED_MODULE_30__["PreviousRouteService"],
                angular2_hotkeys__WEBPACK_IMPORTED_MODULE_8__["HotkeysService"],
                _services_filter_service__WEBPACK_IMPORTED_MODULE_32__["FilterService"],
                _services_tour_service__WEBPACK_IMPORTED_MODULE_35__["TourService"],
                _services_scroll_service__WEBPACK_IMPORTED_MODULE_36__["ScrollService"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
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
                _directives_resizable_directive__WEBPACK_IMPORTED_MODULE_33__["ResizableDirective"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_9__["AngularDraggableModule"],
                _directives_change_directive__WEBPACK_IMPORTED_MODULE_28__["DetectChangesDirective"],
                _common_change_change_component__WEBPACK_IMPORTED_MODULE_27__["ChangeComponent"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAccordion"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanel"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelContent"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelTitle"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_18__["DragulaDirective"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_29__["FilterPipe"],
                _media_preview_media_preview_component__WEBPACK_IMPORTED_MODULE_31__["MediaPreviewComponent"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                angular2_hotkeys__WEBPACK_IMPORTED_MODULE_8__["HotkeyModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"],
            ],
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

module.exports = "<app-slide-header mode=\"inline\" [className]=\"'screen-cat'\" [title]=\"'NAVBAR.HOME'\" [iconClass]=\"'fas fa-bullseye'\">\n</app-slide-header>\n\n<div class=\"p10\">\n  <app-lobby [items]=\"screenGroups\" [template]=\"lobbyTemplate\" [mode]=\"'object'\" [noNew]=\"true\"></app-lobby>\n</div>\n\n<ng-template #lobbyTemplate let-item=\"item\">\n  <span class=\"fancy-thumb-label\"><i class=\"icon-display\"></i> {{item.Name}}</span>\n\n  <div><small *ngIf=\"item.Group\">({{item.Group.Name}})</small></div>\n</ng-template>\n"

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
                        return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_2__["ScreenGroupDataController"].query('ScreenGroup', {})];
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
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__);
var methodType = 'Http';
if (window.location.host === 'localhost:4200') {
    methodType = 'Mock';
}
window.METHODUS_CONFIG = { transport: methodType, methodType: methodType };






 // You can also use <link> for styles
// ..
aos__WEBPACK_IMPORTED_MODULE_5___default.a.init();
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
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
    SlideService.prototype.play = function (surfaces, playerPlan, ctx, width, height, mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var playX;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                playX = new _slide_worker__WEBPACK_IMPORTED_MODULE_3__["SlideWorker"](surfaces, this.fontService, playerPlan, ctx, width, height, mode);
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
/* harmony import */ var youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! youtube-player */ "./node_modules/youtube-player/dist/index.js");
/* harmony import */ var youtube_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(youtube_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_services_dottoimage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/services/dottoimage */ "./src/app/services/dottoimage.ts");





var Eval = eval;
var log = console.log;
var SlideWorker = /** @class */ (function () {
    function SlideWorker(surfaces, fontService, playerPlan, ctx, width, height, mode) {
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
    SlideWorker.prototype.factorPosition = function (screen, x, y) {
        return { x: x * (this.width / screen.width), y: y * (this.height / screen.height) };
    };
    SlideWorker.prototype.factor = function (screen, x, y) {
        if (!y) {
            return Math.floor(x * (this.width / screen.width));
        }
        else {
            return { x: x * (this.width / screen.width), y: y * (this.height / screen.height) };
        }
    };
    SlideWorker.prototype.prerender = function (item, duration) {
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
    SlideWorker.prototype.render_frame = function (url, x, y, width, height) {
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
    SlideWorker.prototype.render_embededPlayer = function (embed, x, y, width, height) {
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
    SlideWorker.prototype.startCounter = function (duration) {
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
    SlideWorker.prototype.playDefaultPlan = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.ctx.font = "120px arial";
                this.ctx.fillStyle = "red";
                this.ctx.fillText('Nothing to play', this.width / 4, this.height / 2);
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
    SlideWorker.prototype.renderElementsToTags = function (item) {
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
    SlideWorker.prototype.render_text_to_canvas = function (item, element) {
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
    SlideWorker.prototype.playScreenError = function () {
        this.ctx.font = "120px arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText('Screen error', this.width, this.height);
    };
    SlideWorker.prototype.play = function () {
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
                        if (!(this.mode !== 'single')) return [3 /*break*/, 7];
                        this.list = this.playerPlan[0].list;
                        frameDuration = (this.list[this.itemIndex].duration) ? this.list[this.itemIndex].duration * 1000 : 5000;
                        _a.label = 4;
                    case 4:
                        if (false) {}
                        return [4 /*yield*/, this.fontService.loadFontsForRender(this.list[this.itemIndex].fonts)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.prerender(this.list[this.itemIndex], frameDuration)];
                    case 6:
                        _a.sent();
                        this.itemIndex++;
                        if (this.itemIndex === this.list.length) {
                            this.itemIndex = 0;
                        }
                        return [3 /*break*/, 4];
                    case 7: return [2 /*return*/];
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