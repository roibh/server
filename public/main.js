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
/* harmony import */ var _user_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.context.service */ "./src/app/user.context.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




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
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_context_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
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
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/manage/manage.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_intercepter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/auth.intercepter */ "./src/app/auth/auth.intercepter.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_context_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user.context.service */ "./src/app/user.context.service.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _directives_adapt_height__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/adapt-height */ "./src/app/directives/adapt-height.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _screens_screens_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./screens/screens.module */ "./src/app/screens/screens.module.ts");
/* harmony import */ var _library_library_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./library/library.module */ "./src/app/library/library.module.ts");
/* harmony import */ var _playlists_playlists_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./playlists/playlists.module */ "./src/app/playlists/playlists.module.ts");
/* harmony import */ var _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./timelines/timelines.component */ "./src/app/timelines/timelines.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./language.service */ "./src/app/language.service.ts");
/* harmony import */ var _library_editor_toolbar_editor_toolbar_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./library/editor-toolbar/editor-toolbar.component */ "./src/app/library/editor-toolbar/editor-toolbar.component.ts");
/* harmony import */ var _bread_crumbs_bread_crumbs_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./bread-crumbs/bread-crumbs.component */ "./src/app/bread-crumbs/bread-crumbs.component.ts");




// import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';




































var appRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'signin', component: _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_28__["SignupComponent"] },
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuardService"]], children: [
            {
                path: '',
                component: _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_32__["TimelinesComponent"],
            }
        ].concat(_screens_screens_module__WEBPACK_IMPORTED_MODULE_29__["screenRoutes"], _library_library_module__WEBPACK_IMPORTED_MODULE_30__["libraryRoutes"], _playlists_playlists_module__WEBPACK_IMPORTED_MODULE_31__["playlistsRoutes"], [
            {
                path: 'settings',
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_33__["SettingsComponent"],
            },
        ])
    },
    { path: 'user/details', component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_20__["UserInfoComponent"] },
];
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_26__["TranslateHttpLoader"](http);
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
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_13__["LoaderComponent"],
                _manage_manage_component__WEBPACK_IMPORTED_MODULE_14__["ManageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_20__["UserInfoComponent"],
                _directives_adapt_height__WEBPACK_IMPORTED_MODULE_21__["AdaptHeightDirective"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_28__["SignupComponent"],
                _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_32__["TimelinesComponent"],
                _library_editor_toolbar_editor_toolbar_component__WEBPACK_IMPORTED_MODULE_36__["EditorToolbarComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_33__["SettingsComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_34__["DialogComponent"],
                _bread_crumbs_bread_crumbs_component__WEBPACK_IMPORTED_MODULE_37__["BreadCrumbsComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"]]
                    }
                }),
                _shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"],
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
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_22__["OrderModule"],
                _ng_dynamic_forms_ui_bootstrap__WEBPACK_IMPORTED_MODULE_6__["DynamicFormsBootstrapUIModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _screens_screens_module__WEBPACK_IMPORTED_MODULE_29__["ScreensModule"],
                _library_library_module__WEBPACK_IMPORTED_MODULE_30__["LibraryModule"],
                _playlists_playlists_module__WEBPACK_IMPORTED_MODULE_31__["PlaylistsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            providers: [_user_context_service__WEBPACK_IMPORTED_MODULE_19__["UserService"], _language_service__WEBPACK_IMPORTED_MODULE_35__["LanguageService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuardService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_intercepter__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
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
/* harmony import */ var _user_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.context.service */ "./src/app/user.context.service.ts");




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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_context_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

/***/ "./src/app/bread-crumbs/bread-crumbs.component.html":
/*!**********************************************************!*\
  !*** ./src/app/bread-crumbs/bread-crumbs.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar-fixed-top dashboard-nav\">\nHome >> {{crumbs | json}}\n\n     </nav>"

/***/ }),

/***/ "./src/app/bread-crumbs/bread-crumbs.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/bread-crumbs/bread-crumbs.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyZWFkLWNydW1icy9icmVhZC1jcnVtYnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bread-crumbs/bread-crumbs.component.ts":
/*!********************************************************!*\
  !*** ./src/app/bread-crumbs/bread-crumbs.component.ts ***!
  \********************************************************/
/*! exports provided: BreadCrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbsComponent", function() { return BreadCrumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BreadCrumbsComponent = /** @class */ (function () {
    function BreadCrumbsComponent(_ngZone, router, route, changeDetector) {
        this._ngZone = _ngZone;
        this.router = router;
        this.route = route;
        this.changeDetector = changeDetector;
    }
    BreadCrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (val) {
            _this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.crumbs = val.urlAfterRedirects;
                    this.changeDetector.detectChanges();
                    return [2 /*return*/];
                });
            }); });
        });
    };
    BreadCrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bread-crumbs',
            template: __webpack_require__(/*! ./bread-crumbs.component.html */ "./src/app/bread-crumbs/bread-crumbs.component.html"),
            styles: [__webpack_require__(/*! ./bread-crumbs.component.scss */ "./src/app/bread-crumbs/bread-crumbs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BreadCrumbsComponent);
    return BreadCrumbsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <nav id=\"sidebar\" [class]=\"activeClass\">\n        <div class=\"sidebar-header\">\n            <h3>Sign-Nature</h3>\n            <ul class=\"mr-auto\">\n                <li class=\"nav-item\"><button type=\"button\" (click)=\"toggleSidebar()\" id=\"sidebarCollapse\" class=\"btn btn-sm btn-info\">\n                        <i class=\"fas fa-align-left\"></i>\n                    </button></li>\n                <li class=\"nav-item\" class=\"language-bar\">\n                    <app-language-bar></app-language-bar>\n                </li>\n            </ul>\n            <strong>SN</strong>\n        </div>\n        <ul class=\"list-unstyled components\">\n            <li class=\"active\">\n                <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                    <i class=\"fas fa-home\"></i>\n                    {{\"NAVBAR.HOME\" | translate}}\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"screens\">\n                    <i class=\"fas fa-desktop\"></i>\n                    {{\"NAVBAR.SCREENS\" | translate}}\n\n                </a></li>\n            <li>\n                <a routerLink=\"screen-groups\">\n                    <i class=\"fas fa-clone\"></i>\n                    {{\"NAVBAR.SCREEN-GROUPS\" | translate}}\n\n                </a></li>\n            <li>\n                <a href=\"#LibrarySubmenu\" (click)=\"toggleSubmenu()\" routerLink=\"library\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                    <i class=\"fas fa-copy\"></i>\n                    {{\"NAVBAR.LIBRARY\" | translate}}\n                </a>\n                <ul class=\"{{subMenuState}} list-unstyled\" id=\"LibrarySubmenu\">\n                    <li>\n                        <a routerLink=\"library/images\"> {{\"NAVBAR.IMAGES\" | translate}}</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"library/videos\"> {{\"NAVBAR.VIDEOS\" | translate}}</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"library/sounds\"> {{\"NAVBAR.SOUNDS\" | translate}}</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"library/slides\"> {{\"NAVBAR.SLIDES\" | translate}}</a>\n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a routerLink=\"playlists\">\n                    <i class=\"fas fa-step-forward\"></i>\n                    {{\"NAVBAR.PLAYLISTS\" | translate}}\n\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"schedules\">\n                    <i class=\"fas fa-calendar-alt\"></i>\n                    {{\"NAVBAR.SCHEDULES\" | translate}}\n\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"settings\">\n                    <i class=\"fas fa-cogs\"></i>\n                    {{\"NAVBAR.SETTINGS\" | translate}}\n\n                </a>\n            </li>\n        </ul>\n    </nav>\n    <!-- Page Content  -->\n    <div id=\"content\">\n        <app-bread-crumbs></app-bread-crumbs>\n\n        <div id=\"scroller\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <footer class=\"footer closed\">\n        {{'DASHBOARD.FOOTER' | translate}}\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

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
    DashboardComponent.prototype.toggleSidebar = function () {
        this.toggled = !this.toggled;
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

/***/ "./src/app/dialog/dialog.component.css":
/*!*********************************************!*\
  !*** ./src/app/dialog/dialog.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dialog class=\"my-dialog\" (close)=\"handleClose($event)\" #leDialog>\n  <h3>{{notification.title}}</h3>\n  <p>{{notification.message}}</p>\n  <div class=\"inline-components\">\n    <button class=\"btn\" (click)=\"okClicked()\">ok</button>\n    <button class=\"btn\" (click)=\"cancelClicked()\">cancel</button>\n  </div>\n</dialog>"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/dialog/dialog.component.css")]
        })
    ], DialogComponent);
    return DialogComponent;
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

/***/ "./src/app/language-bar/language-bar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/language-bar/language-bar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmd1YWdlLWJhci9sYW5ndWFnZS1iYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/language-bar/language-bar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/language-bar/language-bar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" [href]='sanitizer.bypassSecurityTrustResourceUrl(this.languageService.cssUrl)' />\n\n<select [(ngModel)]=\"selectedLanguage\" (change)=\"selectLanguage()\" [compareWith]=\"compareFn\">\n  <option *ngFor=\"let c of languages\" [ngValue]=\"c\">{{c.name}}</option>\n</select>"

/***/ }),

/***/ "./src/app/language-bar/language-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/language-bar/language-bar.component.ts ***!
  \********************************************************/
/*! exports provided: LanguageBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageBarComponent", function() { return LanguageBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language.service */ "./src/app/language.service.ts");




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
            template: __webpack_require__(/*! ./language-bar.component.html */ "./src/app/language-bar/language-bar.component.html"),
            styles: [__webpack_require__(/*! ./language-bar.component.css */ "./src/app/language-bar/language-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Sanitizer"]])
    ], LanguageBarComponent);
    return LanguageBarComponent;
}());



/***/ }),

/***/ "./src/app/language.service.ts":
/*!*************************************!*\
  !*** ./src/app/language.service.ts ***!
  \*************************************/
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

module.exports = "<div *ngIf=\"element.position\"  ngDraggable [zIndex]=\"element.zIndex\" [handle]=\"ElementHandle\" [position]=\"element.position\"\n  class=\"drag-block element\" (edge)=\"checkEdge($event)\" [bounds]=\"myBounds\" [inBounds]=\"inBounds\" (started)=\"onStart($event)\"\n  (stopped)=\"onStop($event)\" (movingOffset)=\"onMoving($event)\" [preventDefaultEvent]=\"false\" (endOffset)=\"onMoveEnd($event)\"\n  (click)=\"focus($event, element)\" >   \n \n<div *ngIf=\"element.type === 'text' && element.selected\">\n\n<select [(ngModel)]=\"font\">\n  <option *ngFor=\"let c of fonts\" [ngValue]=\"c\">{{c.name}}</option>\n</select>\n\n<select [(ngModel)]=\"fontSize\">\n  <option *ngFor=\"let c of sizes\" [ngValue]=\"c\">{{c}}</option>\n</select>\n\n\n</div>\n\n    <span [ngStyle]=\"{'font-family': font.id, 'font-size': fontSize +'px' }\"\n      contenteditable=\"true\"   \n      [(ngModel)]=\"element.name\"\n      *ngIf=\"element.type === 'text'\"></span> \n\n    <img [src]=\"element.src\" *ngIf=\"element.type === 'image'\"     />    \n  \n</div>\n"

/***/ }),

/***/ "./src/app/library/element/element.component.scss":
/*!********************************************************!*\
  !*** ./src/app/library/element/element.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drag-block {\n  background-color: #ddd;\n  padding: 15px;\n  cursor: crosshair;\n  position: relative; }\n  .drag-block span {\n    cursor: text;\n    display: inline;\n    position: relative; }\n  .element {\n  min-width: 150px; }\n  .element .active {\n    border: 1px solid black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9lbGVtZW50L0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcbGlicmFyeVxcZWxlbWVudFxcZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2Isa0JBQWlCO0VBQ2pCLG1CQUFrQixFQU1yQjtFQVhEO0lBT1EsYUFBWTtJQUNaLGdCQUFlO0lBQ2YsbUJBQ0osRUFBQztFQUdMO0VBQ0ksaUJBQWdCLEVBSW5CO0VBTEQ7SUFHUSx3QkFBdUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L2VsZW1lbnQvZWxlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcmFnLWJsb2NrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlXHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbGVtZW50e1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIC5hY3RpdmV7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = "\n\n<div class=\"slider-container-wide {{active}} shadow\">\n\n<dialog open={{active}}>\n<a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\" ></i></a>\n<input type=\"text\" name=\"searchPhrase\" /><button class=\"btn btn-primary\"></button>\n\n <div class=\"container no-margin\"> \n    <div *ngFor=\"let item of items\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\" >\n    {{item.Name}}\n      <ul class=\"sqr-toolbar\">\n    \n        <li>\n          <button class=\"btn btn-xs btn-primary\" (click)=\"selectItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n        </li>\n      </ul>\n    </div>\n</div>\n\n </dialog>\n\n</div>\n"

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
        _this.selectItem = function (item) {
            _this.selector(item);
        };
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_3__["LibraryDataController"];
        return _this;
    }
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
        this.loadItems();
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

module.exports = "<div class=\"container no-margin\">\n  <div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n    {{item.Name}}\n    <ul class=\"sqr-toolbar\">\n      <li>\n        <button class=\"btn btn-xs btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n      </li>\n      <li>\n        <button class=\"btn btn-xs btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open= {{displayModalNew}}>\n    <a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\"></i></a>\n    <div class=\"scroller\">\n      <form *ngIf=\"item\">\n        <div class=\"form-group\">\n          <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n          <input type=\"text\" name=\"libraryName\" class=\"form-control\" id=\"screenName\" [(ngModel)]=\"item.Name\">\n          <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"libraryFile\">{{ \"LIBRARY.RESOURCE\" | translate }}</label>\n          <div *ngIf=\"item.thumb\" [ngStyle]=\"{'background-image': 'url(' + item.thumb + ')'}\" class=\"fancy-image\"></div>\n          <p><a href=\"{{item.thumb}}\" target=\"_blank\" class=\"form-text text-muted\"><small>{{item.thumb}}</small></a></p>\n          <app-upload [item]=\"item\"></app-upload>\n          <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.IMAGE_DESCRIPTION\" | translate }}</small>\n        </div>\n      </form>\n    </div>\n    <button *ngIf=\"item && item._id\" class=\"btn btn-primary\" (click)=\"saveLibrary()\">{{ \"LIBRARY.UPDATE\" | translate }}</button>\n    <button *ngIf=\"!item || !item._id\" class=\"btn btn-primary\" (click)=\"createLibrary()\">{{ \"LIBRARY.CREATE\" | translate }}</button>\n  </dialog>\n</div>\n"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
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

module.exports = "<div>\n  <div *ngIf=\"editing\">\n    <input #inlineEditControl [required]=\"required\" (blur)=\"onBlur($event)\" [name]=\"value\" [(ngModel)]=\"value\" [type]=\"type\" [placeholder]=\"label\" />\n  </div>\n  <div *ngIf=\"!editing\">\n    <label class=\"block bold\">{{label}}</label>\n    <div title=\"Click to edit\" (click)=\"edit(value)\" (focus)=\"edit(value);\" tabindex=\"0\" class=\"inline-edit\">{{value}}&nbsp;</div>\n  </div>\n</div>\n"

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

module.exports = "<router-outlet></router-outlet>\n"

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
/*! exports provided: MainComponent, libraryRoutes, LibraryModule */
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
    {
        path: 'library', component: _library_component__WEBPACK_IMPORTED_MODULE_9__["LibraryComponent"],
        children: [{ path: 'images', component: _images_images_component__WEBPACK_IMPORTED_MODULE_5__["ImagesComponent"] },
            { path: 'videos', component: _videos_videos_component__WEBPACK_IMPORTED_MODULE_6__["VideosComponent"] },
            { path: 'sounds', component: _sounds_sounds_component__WEBPACK_IMPORTED_MODULE_7__["SoundsComponent"] },
            { path: 'slides', component: _slides_slides_component__WEBPACK_IMPORTED_MODULE_8__["SlidesComponent"] },
            { path: 'slides/:id', component: _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_14__["SlideEditorComponent"] }]
    },
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

module.exports = "<p>\n  main works!\n</p>\n"

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


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/library/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/library/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



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
    SelectionService.prototype.load = function (elements) {
        this.elements = elements;
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

module.exports = "<div *ngIf=\"item\">\n  <nav class=\"navbar-fixed-top dashboard-nav\">\n    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n      <label class=\"btn btn-secondary\" (click)=\"setEditorMode('Designer');\">\n        <input type=\"radio\" name=\"options\" id=\"designer\" autocomplete=\"off\" checked> Designer\n      </label>\n      <label class=\"btn btn-secondary\" (click)=\"setEditorMode('Source');\">\n        <input type=\"radio\" name=\"options\" id=\"source\" autocomplete=\"off\"> Source\n      </label>\n    </div>\n <div class=\"btn-group\" data-toggle=\"buttons\">\n    <button (click)=\"newTextBlockElement()\" class=\"btn btn-md btn-default\"><i class=\"fas fa-font\"></i></button>\n        <button (click)=\"newImageBlockElement()\" class=\"btn btn-md btn-default\"><i class=\"far fa-image\"></i></button>\n        <button (click)=\"newVideoBlockElement()\" class=\"btn btn-md btn-default\"><i class=\"fas fa-video\"></i></button>\n        <button (click)=\"newPluginBlockElement()\" class=\"btn btn-md btn-default\"><i class=\"fas fa-plug\"></i></button>\n</div>\n    <ul>\n      <li class=\"nav-item\">\n       </li>\n      <li class=\"nav-item\">\n        <button class=\"btn btn-primary\" (click)=\"resetItem()\">{{ \"SLIDES.RESET\" | translate }}</button>\n        <button *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">\n          <span class=\"btn-spinner-host\"> <i class=\"btn-spinner\" *ngIf=\"updateItemRunning\"></i> {{ \"SLIDES.UPDATE\" | translate }}\n          </span>\n        </button>\n        <button *ngIf=\"!item._id\" class=\"btn btn-primary btn-spinner-host\" (click)=\"createItem()\"><i class=\"btn-spinner\"></i>\n          {{ \"SLIDES.CREATE\" | translate }}</button>\n      </li>\n    </ul>\n  </nav>\n</div>\n\n<div *ngIf=\"editorMode==='Designer'\">\n\n\n\n\n  <p contenteditable=\"true\" [(ngModel)]=\"item.name\"></p>\n\n  <app-alloy></app-alloy>\n\n\n  <div class=\"row slide-editor\">\n    <div class=\"col-md-9\">\n      <div class=\"slide-canvas drag-boundary\" class=\"drag-boundary\" [ngClass]=\"{ 'top-b': !edge?.top, 'bottom-b': !edge?.bottom, 'left-b': !edge?.left, 'right-b': !edge?.right }\"\n        #myBounds>\n        <app-element *ngFor=\"let el of selectionService.elements\" (click)=\"designerFocus($event)\" [element]=\"el\"></app-element>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <ul class=\"list-group\">\n        <ol class=\"list-group-item\" *ngFor=\"let el of selectionService.elements\">\n          <app-inline-edit [(ngModel)]=\"el.name\" label=\"Name\" [required]=\"true\" type=\"text\">\n          </app-inline-edit>\n        </ol>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div *ngIf=\"editorMode==='Source'\">\n  <pre> {{item.elements | json}}</pre>\n</div>\n\n\n<div class=\"slider-container-wide {{displayModalNew}} shadow\">\n  <app-finder></app-finder>\n</div>\n"

/***/ }),

/***/ "./src/app/library/slide-editor/slide-editor.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/library/slide-editor/slide-editor.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-editor {\n  width: 100%;\n  border: 1px solid black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9zbGlkZS1lZGl0b3IvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxsaWJyYXJ5XFxzbGlkZS1lZGl0b3JcXHNsaWRlLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCx3QkFBdUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L3NsaWRlLWVkaXRvci9zbGlkZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGUtZWRpdG9ye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufSJdfQ== */"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selection.service */ "./src/app/library/selection.service.ts");







var SlideEditorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SlideEditorComponent, _super);
    function SlideEditorComponent(_ngZone, translateService, selectionService, route) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.selectionService = selectionService;
        _this.route = route;
        _this.editorMode = 'Designer';
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_4__["SlidesDataController"];
        return _this;
    }
    SlideEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.item) {
            this.route.params.subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _a;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, _signnature_client__WEBPACK_IMPORTED_MODULE_4__["SlidesDataController"].get(data.id)];
                        case 1:
                            _a.item = _b.sent();
                            this.selectionService.load(this.item.elements);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
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

module.exports = "<div class=\"container no-margin\">\n  <div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow\">\n    <i class=\"fas fa-desktop\"></i>\n    {{item.Name}}\n    <ul class=\"sqr-toolbar\">\n      <li>\n        <button class=\"btn btn-xs btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n      </li>\n      <li>\n        <button class=\"btn btn-xs btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n      </li>\n      <li>\n        <button class=\"btn btn-xs btn-primary\" [routerLink]=\"[item._id]\"> <i class=\"fas fa-edit\"></i> </button>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"slider-container-wide {{displayModalNew}} shadow\">\n  <dialog open= {{displayModalNew}}>\n    <a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\"></i></a>\n    <form *ngIf=\"item\">\n      <div class=\"form-group\">\n        <label for=\"screenName\">{{ \"SLIDES.NAME\" | translate }}:</label>\n        <input type=\"text\" name=\"slideName\" class=\"form-control\" id=\"screenName\" [(ngModel)]=\"item.Name\">\n        <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SLIDES.NAME_HELP\" | translate }}</small>\n      </div>\n      <button *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"SLIDES.UPDATE\" | translate }}</button>\n      <button *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"SLIDES.CREATE\" | translate }}</button>\n      <div class=\"form-group\">\n        <app-slide-editor></app-slide-editor>\n      </div>\n    </form>\n  </dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/library/slides/slides.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/slides/slides.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-canvas {\n  position: absolute;\n  border: 2px solid black; }\n\n.h1 {\n  font-size: 24px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9zbGlkZXMvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxsaWJyYXJ5XFxzbGlkZXNcXHNsaWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFDeEI7O0FBR0Q7RUFDRSxnQkFBZTtFQUNmLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZS1jYW52YXN7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuLmgxe1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

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

module.exports = "   \n    \n    \n    <div class=\"container no-margin\">\n<div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n    <div *ngFor=\"let item of items\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\" >\n    {{item.Name}}\n      <ul class=\"sqr-toolbar\">\n        <li>\n          <button class=\"btn btn-xs btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n        </li>\n        <li>\n          <button class=\"btn btn-xs btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n        </li>\n      </ul>\n    </div>\n</div>\n<div class=\"slider-container {{displayModalNew}} shadow \">\n<dialog open={{displayModalNew}}>\n<a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\" ></i></a>\n<div class=\"scroller\">\n <form *ngIf=\"item\">\n  <div class=\"form-group\">\n    <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n    <input type=\"text\" name=\"libraryName\"  class=\"form-control\" id=\"screenName\"   [(ngModel)]=\"item.Name\">\n    <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"libraryFile\">{{ \"LIBRARY.RESOURCE\" | translate }}</label>\n<app-upload [item]=\"item\"></app-upload>\n</div>\n   \n</form>\n </div>\n  <button   *ngIf=\"item && item._id\" class=\"btn btn-primary\" (click)=\"saveLibrary()\">{{ \"LIBRARY.UPDATE\" | translate }}</button>\n  <button   *ngIf=\"!item || !item._id\" class=\"btn btn-primary\" (click)=\"createLibrary()\">{{ \"LIBRARY.CREATE\" | translate }}</button>\n</dialog>\n</div>\n "

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

module.exports = "<div (click)=\"addFiles()\" class=\"btn btn-default\">\n    <file-drop headertext=\"Drop files here\" customstyle=\"dropzone\" (onFileDrop)=\"dropped($event)\">\n    </file-drop>\n    </div>\n <input type=\"file\" #file style=\"display: none\" (change)=\"selected()\" />  \n\n\n<div *ngIf=\"item\"> \n  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n  <img *ngIf=\"item.thumb\" [src]=\"item.thumb\" (load)=\"clearUpload()\" #imgIndicator id=\"imgIndicator\" /> \n \n </div>\n"

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
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
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

module.exports = "<div class=\"container no-margin\">\n  <div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n    {{item.Name}}\n    <ul class=\"sqr-toolbar\">\n      <li>\n        <button class=\"btn btn-xs btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n      </li>\n      <li>\n        <button class=\"btn btn-xs btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open= {{displayModalNew}}>\n    <a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\"></i></a>\n    <div class=\"scroller\">\n      <form *ngIf=\"item\">\n        <div class=\"form-group\">\n          <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n          <input type=\"text\" name=\"libraryName\" class=\"form-control\" id=\"screenName\" [(ngModel)]=\"item.Name\">\n          <small id=\"nameHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n        </div>\n        <div class=\"form-group\">\n         <label for=\"embedCode\">{{ \"LIBRARY.EMBED\" | translate }}:</label>\n          <textarea id=\"embedCode\" name=\"embedCode\" class=\"form-control\" [(ngModel)]=\"item.Embed\"></textarea>\n          <small id=\"embedHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.EMBED_HELP\" | translate }}</small>\n        </div>\n      </form>\n    </div>\n    <button *ngIf=\"item && item._id\" class=\"btn btn-primary\" (click)=\"saveLibrary()\">{{ \"LIBRARY.UPDATE\" | translate }}</button>\n    <button *ngIf=\"!item || !item._id\" class=\"btn btn-primary\" (click)=\"createLibrary()\">{{ \"LIBRARY.CREATE\" | translate }}</button>\n  </dialog>\n</div>\n"

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

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n<div id=\"loader_back\" [hidden]=\"!busy\">\r\n    <div class=\"lds-ellipsis\">\r\n        <div class=\"color1\"></div>\r\n        <div class=\"color2\"></div>\r\n        <div class=\"color3\"></div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu a {cursor: pointer;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IsZ0JBQWdCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLW1lbnUgYSB7Y3Vyc29yOiBwb2ludGVyO30iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"limiter\">\n\t\t<div class=\"container-login100\">\n      \n\n\t\t\t<div class=\"wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30\">\n            \n\t\t\t\t<form class=\"login100-form validate-form\">\n\t\t\t\t\t<span class=\"login100-form-title p-b-55\">\n\t\t\t\t\t\t{{\"LOGIN.TITLE\" | translate}}\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" [attr.data-validate]=\"'LOGIN.INSERT_USERNAME' | translate\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"text\" name=\"userName\" placeholder=\"{{'LOGIN.USERNAME' | translate}}\" [(ngModel)]=\"userName\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-envelope\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" >\n\t\t\t\t\t\t<input class=\"input100\" type=\"password\" name=\"password\" placeholder=\"{{'LOGIN.PASSWORD' | translate}}\" [(ngModel)]=\"password\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-lock\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"contact100-form-checkbox m-l-4\">\n\t\t\t\t\t\t<input class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n\t\t\t\t\t\t<label class=\"label-checkbox100\" for=\"ckb1\">\n\t\t\t\t\t\t\t{{\"LOGIN.REMEMBER_ME\" | translate}}\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"container-login100-form-btn p-t-25\">\n\t\t\t\t\t\t<button class=\"login100-form-btn\" (click)=\"tryLogin()\">\n\t\t\t\t\t\t\t\t{{\"LOGIN.LOGIN_BTN\" | translate}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n \n\t\t\t\t\t<div class=\"text-center w-full p-t-25\">\n\t\t\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t{{'LOGIN.NOTAMEMBER' | translate}}\t\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<a class=\"txt1 bo1 hov1\" href=\"#\"  routerLink=\"/signup\">\n\t\t\t\t\t\t{{'LOGIN.SIGNUP' | translate}}\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</a>\n                    </div>\n                    <app-language-bar></app-language-bar>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n\n\n\n\n\n<!-- Simple pop-up dialog box containing a form -->\n<dialog id=\"favDialog\">\n  <form method=\"dialog\">\n    <p><label>Favorite animal:\n      <select>\n        <option></option>\n        <option>Brine shrimp</option>\n        <option>Red panda</option>\n        <option>Spider monkey</option>\n      </select>\n    </label></p>\n    <menu>\n      <button>Cancel</button>\n      <button>Confirm</button>\n    </menu>\n  </form>\n</dialog>\n\n<menu>\n  <button id=\"updateDetails\">Update details</button>\n</menu>\n\n<div id=\"output\"></div>\n\n<script>\n(function() {\n  var updateButton = document.getElementById('updateDetails');\n  var favDialog = document.getElementById('favDialog');\n  var outputBox = document.getElementById(\"output\");\n\n  // “Update details” button opens the <dialog> modally\n  updateButton.addEventListener('click', function() {\n    favDialog.showModal();\n    output.innerHTML += \"<div>\" + favDialog.returnValue + \" button clicked!</div>\";\n  });\n})();\n</script>\n \n\n    <ng-template #share>\n        <div class=\"modal-body text-center\">\n\n            <p>Share your group.</p>\n            <pre>{{group.GroupId}}</pre>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <ng-template #join>\n        <div class=\"modal-body text-center\">\n            <p>Join a group.</p>\n            <div>\n                <label>Group code</label>\n                <input type=\"text\" class=\"form-control\" #group_code />\n            </div>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"JoinConfirm(group_code.value)\">Join</a>\n            <a type=\"button\" class=\"btn btn-default\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <div class=\"float-left dropdown\" *ngIf=\"userData && group\">\n        <a class=\"btn btn-secondary dropdown-toggle white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            {{group.Name}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"position: absolute\">\n            <a class=\"dropdown-item\" (click)=\"setGroup(item)\" *ngFor=\"let item of userData.groups\">{{item.Name}}</a>\n\n            <a class=\"dropdown-item\" (click)=\"JoinGroup(join)\">Join group</a>\n            <a class=\"dropdown-item\" (click)=\"ShareGroup(share)\">Share group</a>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.context.service */ "./src/app/user.context.service.ts");
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
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _user_context_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/manage/manage.component.css":
/*!*********************************************!*\
  !*** ./src/app/manage/manage.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white {color: white;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlL21hbmFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsYUFBYSxDQUFDIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlL21hbmFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRlIHtjb2xvcjogd2hpdGU7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/manage/manage.component.html":
/*!**********************************************!*\
  !*** ./src/app/manage/manage.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [appAdaptHeight]=\"100\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Category</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Description</th>\r\n        <th scope=\"col\">Last run date</th>\r\n        <th scope=\"col\">\r\n          <a class=\"btn btn-primary btn-xs\" routerLink=\"/adscript/manage/create\">\r\n            + New Script</a>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let row of collectionData\">\r\n\r\n        <td>\r\n          {{row.Category}}\r\n\r\n        </td>\r\n        <td>\r\n          <a href=\"#\" [routerLink]=\"[row.ScriptId, 'details']\">{{row.Name}}</a>\r\n        </td>\r\n        <td>\r\n          {{row.Description}}\r\n\r\n        </td>\r\n        <td>\r\n          {{row.LastRunDate | date:'mediumDate'}}\r\n\r\n        </td>\r\n        <td>\r\n          <a class=\"btn btn-danger\" (click)=\"remove(row.ScriptId, template)\">\r\n            <i class=\"oi oi-trash white\"></i>\r\n          </a>\r\n          <a class=\"btn btn-info\" [routerLink]=\"[row.ScriptId, 'details']\">\r\n            <i class=\"oi oi-pencil white\"></i>\r\n          </a>\r\n   \r\n        </td>\r\n\r\n\r\n\r\n\r\n      </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<ng-template #template>\r\n  <div class=\"modal-body text-center\">\r\n    <p>The script will be deleted.</p>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\">Continue</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">Cancel</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<app-loader [busy]=\"busy\">\r\n  Loading\r\n</app-loader>\r\n\r\n<!-- \r\n \r\n<app-dynamic-table [columns]=\"tableColumns\" [tableData]=\"collectionData\"></app-dynamic-table> -->"

/***/ }),

/***/ "./src/app/manage/manage.component.ts":
/*!********************************************!*\
  !*** ./src/app/manage/manage.component.ts ***!
  \********************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.context.service */ "./src/app/user.context.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");




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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.userService.onGroupChange(function (group) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                    this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var group_id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modalResult, group_id, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    ManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__(/*! ./manage.component.html */ "./src/app/manage/manage.component.html"),
            styles: [__webpack_require__(/*! ./manage.component.css */ "./src/app/manage/manage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _user_context_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/playlists/playlist/playlists.component.html":
/*!*************************************************************!*\
  !*** ./src/app/playlists/playlist/playlists.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-margin\">\n  <div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n  <div *ngFor=\"let item of items\" class=\"sqr shadow\">\n    <i class=\"fas fa-desktop\"></i>\n    {{item.Name}} <span *ngIf=\"item.list\">({{item.list.length}})</span>\n    <ul class=\"sqr-toolbar\">\n      <li>\n        <button class=\"btn btn-xs btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n      </li>\n      <li>\n        <button class=\"btn btn-xs btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n  <dialog open= {{displayModalNew}}>\n    <a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\"></i></a>\n    <form *ngIf=\"item\">\n      <div class=\"form-group\">\n        <label for=\"itemName\">{{ \"PLAYLISTS.NAME\" | translate }}:</label>\n        <input type=\"text\" name=\"itemName\" class=\"form-control\" id=\"itemName\" [(ngModel)]=\"item.Name\">\n        <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"PLAYLISTS.NAME_HELP\" | translate }}</small>\n      </div>\n      <div class=\"form-group\">\n        <button (click)=\"schedule()\">+</button>\n\n      </div>\n      <div class=\"form-group\" class=\"sortable\">\n        <button (click)=\"finder()\">+</button>\n        <ngx-sortable *ngIf=\"item.list\" [listStyle]=\"listStyle\" [items]=\"item.list\" [name]=\"'List'\" (listSorted)=\"listOrderChanged($event)\">\n          <ng-template let-item>\n            <div class=\"sortable-list-item\">\n              <div class=\"sqr shadow fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n                {{item.Name}}\n\n              </div>\n            </div>\n          </ng-template>\n        </ngx-sortable>\n      </div>\n      <button *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"PLAYLISTS.UPDATE\" | translate }}</button>\n      <button *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"PLAYLISTS.CREATE\" | translate }}</button>\n    </form>\n  </dialog>\n</div>\n\n\n<div class=\"slider-container-drawer {{displayDrawer}} shadow\">\n  <dialog open= {{displayDrawer}}>\n    <a (click)=\"closeDrawer();\"><i class=\"far fa-window-close close-button\"></i></a>\n    <button (click)=\"addTime()\">Add time +</button>\n    <div *ngIf=\"item\">\n      <div *ngFor=\"let timeslot of item.TimeSlots\" class=\"sqr shadow\">\n\n      </div>\n    </div>\n  </dialog>\n</div>\n\n\n<app-finder [active]=\"finderActive\" [selector]=\"addToList\"></app-finder>\n"

/***/ }),

/***/ "./src/app/playlists/playlist/playlists.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/playlists/playlist/playlists.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0cy9wbGF5bGlzdC9wbGF5bGlzdHMuY29tcG9uZW50LnNjc3MifQ== */"

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
    PlaylistsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadItems();
                return [2 /*return*/];
            });
        });
    };
    PlaylistsComponent.prototype.closeDrawer = function () {
        this.displayDrawer = 'closing';
    };
    PlaylistsComponent.prototype.closeSlider = function () {
        this.displayModalNew = 'closing';
    };
    PlaylistsComponent.prototype.finder = function () {
        this.finderActive = 'active';
    };
    PlaylistsComponent.prototype.schedule = function () {
        this.displayDrawer = 'active';
    };
    PlaylistsComponent.prototype.addTime = function () {
        if (!this.item.TimeSlots) {
            this.item.TimeSlots = [];
        }
        this.item.TimeSlots.push({ Name: 'asdasdasd' });
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

module.exports = " <div class=\"container no-margin\">\n<div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n    <div *ngFor=\"let item of items\" class=\"sqr shadow\" >\n    <i class=\"fas fa-desktop\"></i>\n    {{item.Name}}  \n      <ul class=\"sqr-toolbar\">    \n        <li>\n          <button class=\"btn btn-xs btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n        </li>\n        <li>\n          <button class=\"btn btn-xs btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n        </li>\n      </ul>\n    </div>    \n</div>\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n<dialog open={{displayModalNew}}>\n<a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\" ></i></a>\n <form *ngIf=\"item\">\n  <div class=\"form-group\">\n    <label for=\"itemName\">{{ \"PLAYLISTS.NAME\" | translate }}:</label>\n    <input type=\"text\" name=\"itemName\" class=\"form-control\" id=\"itemName\"   [(ngModel)]=\"item.Name\">\n    <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"PLAYLISTS.NAME_HELP\" | translate }}</small>\n  </div>\n \n  <button   *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"PLAYLISTS.UPDATE\" | translate }}</button>\n  <button   *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"PLAYLISTS.CREATE\" | translate }}</button>\n</form>\n</dialog>\n</div>\n "

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

module.exports = " <div class=\"container no-margin\">\n<div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n    <div *ngFor=\"let item of items\" class=\"sqr shadow\" >\n    <i class=\"fas fa-desktop\"></i>\n    {{item.Name}}\n       \n    <ul class=\"sqr-toolbar\">\n        <li>\n    <button class=\"btn btn-xs btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n</li>\n    <li>\n    <button class=\"btn btn-xs btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n</li>\n</ul>\n    \n    </div>    \n</div>\n\n \n<div class=\"slider-container {{displayModalNew}} shadow\">\n<dialog open={{displayModalNew}}>\n<a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\" ></i></a>\n <form *ngIf=\"item\">\n  <div class=\"form-group\">\n    <label for=\"screenName\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n    <input type=\"text\" name=\"screenName\"  class=\"form-control\" id=\"screenName\"   [(ngModel)]=\"item.Name\">\n    <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SCREENS.NAME_HELP\" | translate }}</small>\n  </div>\n  <button   *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"SCREENS.UPDATE\" | translate }}</button>\n  <button   *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"SCREENS.CREATE\" | translate }}</button>\n\n</form>\n</dialog>\n</div>\n "

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

module.exports = "<div class=\"container no-margin\">\n    <div class=\"sqr shadow sqr-btn\" (click)=\"editItem()\"><i class=\"fas fa-plus-circle\"></i></div>\n    <div *ngFor=\"let item of items\" class=\"sqr shadow\">\n        <i class=\"fas fa-desktop\"></i>\n        {{item.Name}}\n        <ul class=\"sqr-toolbar\">\n            <li>\n                <button class=\"btn btn-xs btn-danger\" (click)=\"deleteItem(item);\"> <i class=\"fas fa-trash\"></i> </button>\n            </li>\n            <li>\n                <button class=\"btn btn-xs btn-primary\" (click)=\"editItem(item);\"> <i class=\"fas fa-edit\"></i> </button>\n            </li>\n        </ul>\n    </div>\n</div>\n\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n    <dialog open= {{displayModalNew}}>\n        <a (click)=\"closeSlider();\" class=\"close-button\"><i class=\"far fa-window-close\"></i></a>\n        <form *ngIf=\"item\">\n            <div class=\"form-group\">\n                <label for=\"screenName\">{{ \"SCREENS.NAME\" | translate }}:</label>\n                <input type=\"text\" name=\"screenName\" class=\"form-control\" id=\"screenName\" [(ngModel)]=\"item.Name\">\n                <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SCREENS.NAME_HELP\" | translate }}</small>\n            </div>          \n            <div class=\"form-group\">\n                <label for=\"ScreenGroup\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n                <select [(ngModel)]=\"item.Group\" name=\"ScreenGroup\" [compareWith]=\"compareFn\" class=\"form-control\">\n                    <option *ngFor=\"let c of groups\" [ngValue]=\"c\">{{c.Name}}</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">{{ \"SCREENS.TOKEN\" | translate }}</label>\n                <input type=\"text\" [(ngModel)]=\"item.Token\" name=\"txtToken\" class=\"form-control\" id=\"txtToken\" placeholder=\"{{'SCREENS.TOKEN' | translate}}\">\n            </div>\n            <button *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"SCREENS.UPDATE\" | translate }}</button>\n            <button *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"SCREENS.CREATE\" | translate }}</button>\n        </form>\n    </dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/screens/screens.component.scss":
/*!********************************************************!*\
  !*** ./src/app/screens/screens/screens.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%; }\n\n.container div {\n  margin-right: 8px;\n  margin-bottom: 1em;\n  box-sizing: border-box;\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); }\n\n.modal {\n  margin: auto;\n  width: 50%;\n  height: 50%; }\n\n.ltr .slider-container.active {\n  right: 0;\n  overflow-y: hidden;\n  max-width: 80%;\n  /* approximate max height */\n  transition-property: all;\n  transition-duration: .5s;\n  transition-timing-function: cubic-bezier(0, 1, 0.5, 1); }\n\n.ltr .slider-container {\n  max-width: 0;\n  padding: 15px;\n  height: 100%;\n  position: fixed;\n  top: 10px;\n  bottom: 40px;\n  right: -50%; }\n\n.rtl .slider-container.active {\n  left: 0;\n  overflow-y: hidden;\n  max-width: 80%;\n  /* approximate max height */\n  transition-property: all;\n  transition-duration: .5s;\n  transition-timing-function: cubic-bezier(0, 1, 0.5, 1); }\n\n.rtl .slider-container {\n  background-color: black;\n  max-width: 0;\n  padding: 15px;\n  height: 100%;\n  position: fixed;\n  top: 10px;\n  bottom: 40px;\n  left: -50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9zY3JlZW5zL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcc2NyZWVuc1xcc2NyZWVuc1xcc2NyZWVucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsWUFBVyxFQUVkOztBQUNEO0VBR0ksa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUVuQiwyQ0FBMEMsRUFFN0M7O0FBT0Q7RUFDSSxhQUFZO0VBQ1osV0FBVTtFQUNWLFlBQVcsRUFDZDs7QUFHRDtFQUNJLFNBQVE7RUFDUixtQkFBa0I7RUFDbEIsZUFBYztFQUFFLDRCQUE0QjtFQUM1Qyx5QkFBd0I7RUFDeEIseUJBQXdCO0VBQ3hCLHVEQUFzRCxFQUN6RDs7QUFHRDtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsVUFBUTtFQUNSLGFBQVk7RUFDWixZQUFXLEVBQ2Q7O0FBR0Q7RUFDSSxRQUFPO0VBQ1AsbUJBQWtCO0VBQ2xCLGVBQWM7RUFBRSw0QkFBNEI7RUFDNUMseUJBQXdCO0VBQ3hCLHlCQUF3QjtFQUN4Qix1REFBc0QsRUFDekQ7O0FBRUQ7RUFDSSx3QkFBdUI7RUFDdkIsYUFBWTtFQUNaLGNBQWE7RUFDYixhQUFZO0VBQ1osZ0JBQWU7RUFDZixVQUFRO0VBQ1IsYUFBWTtFQUNaLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy9zY3JlZW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbn1cclxuLmNvbnRhaW5lciBkaXYge1xyXG4gIFxyXG4gIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG59XHJcblxyXG5cclxuLy8gLmNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDRuKSB7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6MDtcclxuLy8gfVxyXG5cclxuLm1vZGFse1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4gXHJcbi5sdHIgLnNsaWRlci1jb250YWluZXIuYWN0aXZlIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7IC8qIGFwcHJveGltYXRlIG1heCBoZWlnaHQgKi9cclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMC41LCAxKTtcclxufVxyXG5cclxuXHJcbi5sdHIgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAwOyAgIFxyXG4gICAgcGFkZGluZzogMTVweDsgICBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDoxMHB4O1xyXG4gICAgYm90dG9tOiA0MHB4O1xyXG4gICAgcmlnaHQ6IC01MCU7XHJcbn1cclxuXHJcblxyXG4ucnRsIC5zbGlkZXItY29udGFpbmVyLmFjdGl2ZSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7IC8qIGFwcHJveGltYXRlIG1heCBoZWlnaHQgKi9cclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMC41LCAxKTtcclxufVxyXG5cclxuLnJ0bCAuc2xpZGVyLWNvbnRhaW5lciB7ICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgbWF4LXdpZHRoOiAwOyAgIFxyXG4gICAgcGFkZGluZzogMTVweDsgICBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDoxMHB4O1xyXG4gICAgYm90dG9tOiA0MHB4O1xyXG4gICAgbGVmdDogLTUwJTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/fesm5/angular2-draggable.js");
/* harmony import */ var _language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./language-bar/language-bar.component */ "./src/app/language-bar/language-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./library/finder/finder.component */ "./src/app/library/finder/finder.component.ts");











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
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(), ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__["FileDropModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_5__["DragAndDropModule"], angular2_draggable__WEBPACK_IMPORTED_MODULE_6__["AngularDraggableModule"]],
            declarations: [_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_7__["LanguageBarComponent"], _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_10__["FinderComponent"]],
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_language_dictionary_service__WEBPACK_IMPORTED_MODULE_3__["DictionaryService"]],
            exports: [_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_7__["LanguageBarComponent"], _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_10__["FinderComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__["FileDropModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_5__["DragAndDropModule"], angular2_draggable__WEBPACK_IMPORTED_MODULE_6__["AngularDraggableModule"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <div class=\"limiter\">\n\n        <div class=\"container-login100\">\n\n            <div class=\"wrap-login100\" style=\"padding: 50px 50px 30px 30px\">\n\n                <form class=\"login100-form validate-form\">\n                    <span class=\"login100-form-title p-b-55\">\n                        {{\"SIGNUP.TITLE\" | translate}}\n                    </span>\n\n                    <div class=\"wrap-input100 validate-input m-b-16\" [attr.data-validate]=\"'SIGNUP.INSERT_USERNAME' | translate\">\n                        <input class=\"input100\" type=\"text\" name=\"userName\" placeholder=\"{{'SIGNUP.USERNAME' | translate}}\" [(ngModel)]=\"userName\">\n                        <span class=\"focus-input100\"></span>\n                        <span class=\"symbol-input100\">\n                            <span class=\"lnr lnr-envelope\"></span>\n                        </span>\n                    </div>\n\n                    <div class=\"wrap-input100 validate-input m-b-16\">\n                        <input class=\"input100\" type=\"password\" name=\"password\" placeholder=\"{{'SIGNUP.PASSWORD' | translate}}\" [(ngModel)]=\"password\">\n                        <span class=\"focus-input100\"></span>\n                        <span class=\"symbol-input100\">\n                            <span class=\"lnr lnr-lock\"></span>\n                        </span>\n                    </div>\n\n\n                    <div class=\"wrap-input100 validate-input m-b-16\">\n                        <input class=\"input100\" type=\"password\" name=\"passwordRepeat\" placeholder=\"{{'SIGNUP.RPTPASSWORD' | translate}}\" [(ngModel)]=\"passwordRepeat\">\n                        <span class=\"focus-input100\"></span>\n                        <span class=\"symbol-input100\">\n                            <span class=\"lnr lnr-lock\"></span>\n                        </span>\n                    </div>\n\n\n\n                    <div class=\"container-login100-form-btn p-t-25\">\n                        <button class=\"login100-form-btn\" (click)=\"trySignup()\">\n                            {{\"SIGNUP.SIGNUP_BTN\" | translate}}\n                        </button>\n                    </div>\n\n\n                    <div class=\"text-center w-full p-t-25\">\n                        <span class=\"txt1\">\n                            {{'SIGNUP.ALREADYMEMBER' | translate}}\n                        </span>\n\n                        <a class=\"txt1 bo1 hov1\" href=\"#\" routerLink=\"/signin\">\n                            {{'SIGNUP.SIGNIN' | translate}}\n                        </a>\n                    </div>\n                    <app-language-bar></app-language-bar>\n                </form>\n            </div>\n\n\n\n        </div>\n    </div>\n\n\n\n\n\n\n\n\n    <!-- Simple pop-up dialog box containing a form -->\n    <dialog id=\"favDialog\">\n        <form method=\"dialog\">\n            <p><label>Favorite animal:\n                    <select>\n                        <option></option>\n                        <option>Brine shrimp</option>\n                        <option>Red panda</option>\n                        <option>Spider monkey</option>\n                    </select>\n                </label></p>\n            <menu>\n                <button>Cancel</button>\n                <button>Confirm</button>\n            </menu>\n        </form>\n    </dialog>\n\n    <menu>\n        <button id=\"updateDetails\">Update details</button>\n    </menu>\n\n    <div id=\"output\"></div>\n\n    <script>\n        (function () {\n            var updateButton = document.getElementById('updateDetails');\n            var favDialog = document.getElementById('favDialog');\n            var outputBox = document.getElementById(\"output\");\n\n            // “Update details” button opens the <dialog> modally\n            updateButton.addEventListener('click', function () {\n                favDialog.showModal();\n                output.innerHTML += \"<div>\" + favDialog.returnValue + \" button clicked!</div>\";\n            });\n        })();\n    </script>\n\n\n    <ng-template #share>\n        <div class=\"modal-body text-center\">\n\n            <p>Share your group.</p>\n            <pre>{{group.GroupId}}</pre>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <ng-template #join>\n        <div class=\"modal-body text-center\">\n            <p>Join a group.</p>\n            <div>\n                <label>Group code</label>\n                <input type=\"text\" class=\"form-control\" #group_code />\n            </div>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"JoinConfirm(group_code.value)\">Join</a>\n            <a type=\"button\" class=\"btn btn-default\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <div class=\"float-left dropdown\" *ngIf=\"userData && group\">\n        <a class=\"btn btn-secondary dropdown-toggle white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            {{group.Name}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"position: absolute\">\n            <a class=\"dropdown-item\" (click)=\"setGroup(item)\" *ngFor=\"let item of userData.groups\">{{item.Name}}</a>\n\n            <a class=\"dropdown-item\" (click)=\"JoinGroup(join)\">Join group</a>\n            <a class=\"dropdown-item\" (click)=\"ShareGroup(share)\">Share group</a>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @signnature/client */ "./node_modules/@signnature/client/index.js");
/* harmony import */ var _signnature_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signnature_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.context.service */ "./src/app/user.context.service.ts");
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
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_context_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
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

module.exports = "<p>\n  timelines works!\n</p>\n"

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


var TimelinesComponent = /** @class */ (function () {
    function TimelinesComponent() {
    }
    TimelinesComponent.prototype.ngOnInit = function () {
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

/***/ "./src/app/user-info/user-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-info/user-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-info/user-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form #infoForm=\"ngForm\"> -->\n\n<div class=\"container\">\n\n  <div class=\"form-group\" *ngIf=\"userData\">\n    <label for=\"NameInput\">User Name:</label>\n\n    {{userData.name}}\n\n  </div>\n  <div class=\"form-group\" *ngIf=\"userData\">\n    <label for=\"NameInput\">Group token:</label>\n    <textarea class=\"form-control\" name=\"DescriptionInput\" [(ngModel)]=\"userData.Description\" id=\"DescriptionInput\" aria-describedby=\"DescriptionHelp\"\n      placeholder=\"Enter a description\"></textarea>\n\n    <small id=\"emailHelp\" class=\"form-text text-muted\">it will help you understand what you're doing.</small>\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"userData\">\n    <label for=\"NameInput\">Groups:</label>\n    <table class=\"table table-sm\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Value</th>\n\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let variable of userData.groups\">\n          <td scope=\"row\">\n            {{variable.Name}} </td>\n          <td>\n            {{variable.GroupId}}\n          </td>\n\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n\n</div>\n\n<!-- \n</form> -->"

/***/ }),

/***/ "./src/app/user-info/user-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.context.service */ "./src/app/user.context.service.ts");
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
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user-info/user-info.component.html"),
            providers: [_user_context_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/user-info/user-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _user_context_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/user.context.service.ts":
/*!*****************************************!*\
  !*** ./src/app/user.context.service.ts ***!
  \*****************************************/
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
/* harmony import */ var _methodus_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @methodus/client */ "./node_modules/@methodus/client/dist/methodus-client.js");
/* harmony import */ var _methodus_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_methodus_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");

window.METHODUS_CONFIG = { methodType: _methodus_client__WEBPACK_IMPORTED_MODULE_0__["MethodType"].Http };




if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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