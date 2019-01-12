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

module.exports = " \r\n<div>\r\n\r\n\r\n<!-- <nav class=\"navbar  navbar-light bg-light\">\r\n  <div class=\"pull-left navbar-header\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/signnature_icon.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">SignNature</a>\r\n\r\n  </div>\r\n  <div id=\"navbarSupportedContent\" class=\"pull-right navbar-header\">\r\n    <ul class=\"navbar-nav\">\r\n      <li>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/dashboard\">dashboard</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav> -->\r\n <router-outlet></router-outlet>\r\n</div>"

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
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");




































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
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_29__["SettingsComponent"],
                _common_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_30__["DialogComponent"],
            ],
            imports: [
                ng2_dragula__WEBPACK_IMPORTED_MODULE_32__["DragulaModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_33__["ColorPickerModule"],
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

module.exports = "<nav class=\"navbar-fixed-top dashboard-nav\"> \n       \n\n    <button class=\"btn btn-primary btn-sm crumbs\" *ngFor=\"let b of crumbs\">{{\"NAVBAR.\" + b.name.toUpperCase() | translate}}</button>\n</nav>\n"

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

/***/ "./src/app/common/change/change.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/change/change.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{dirtyService.dirty}}"

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



var ChangeComponent = /** @class */ (function () {
    function ChangeComponent(dirtyService) {
        this.dirtyService = dirtyService;
    }
    ChangeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.item && !changes.item.isFirstChange()) {
            this.dirtyService.setDirty();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChangeComponent.prototype, "item", void 0);
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

module.exports = "<ng-template [ngTemplateOutlet]=\"item.template || defaultTemplate\" [ngTemplateOutletContext]=\"{item: item}\">\n</ng-template>\n\n\n<ng-template #defaultTemplate let-item=\"item\">\n  <div class=\"m10\">\n    <span class=\"label\">{{item.Name}}</span>\n  </div>\n</ng-template>\n\n\n<ng-template #imageTemplate let-item=\"item\">\n  <div class=\"fancy-thumb\" [ngStyle]=\"{background: 'url(' + item.thumb + ')'}\">\n    <span class=\"label\">{{item.Name}}</span>\n  </div>\n</ng-template>\n\n<ng-template #playlistTemplate let-item=\"item\">\n  <div class=\"m10\">\n    <span class=\"label\">{{item.Name}}</span>\n    <span class=\"label\">({{item.list.length}})</span>\n  </div>\n</ng-template>\n\n\n<ng-template #slideTemplate let-item=\"item\">\n  <div class=\"canvas-bg\">\n    <app-canvas [item]=\"item\" [width]=\"230\" [height]=\"150\" [scale]=\"0.3\"></app-canvas>\n  </div>\n  <i class=\"{{iconClass}} icon\"></i> <span class=\"label\">{{item.Name}}</span>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/common/lobby.item/lobby.item.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/common/lobby.item/lobby.item.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  margin-right: 5px;\n  margin-left: 5px; }\n\n.sqr-btn {\n  padding: 15px;\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr {\n  opacity: 0.9;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) !important; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 35;\n  background: #fff;\n  margin-bottom: 40px;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2) !important; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn._meta_active, .sqr._meta_active {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(69, 59, 59, 0.2);\n  border-radius: 35;\n  background: #fff;\n  margin-bottom: 40px;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2) !important; }\n\n.sqr-btn._meta_active .sqr-toolbar, .sqr._meta_active .sqr-toolbar {\n    visibility: visible; }\n\n.fancy-thumb {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYmJ5Lml0ZW0vQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxjb21tb25cXGxvYmJ5Lml0ZW1cXGxvYmJ5Lml0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBZ0I7RUFDaEIsaUJBQWUsRUFDbEI7O0FBRUQ7RUFDSSxjQUFZO0VBQ1osZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsdUJBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksYUFBWTtFQUNaLG1DQUEwQjtFQUExQiwyQkFBMEI7RUFBMUIsbURBQTBCO0VBQzFCLHNEQUFvRCxFQUV2RDs7QUFDRDtFQUNJLFdBQVU7RUFFVix1Q0FBOEI7VUFBOUIsK0JBQThCO0VBQzlCLHFDQUFtQztFQUNuQyxrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUVuQix5REFBdUQsRUFNMUQ7O0FBZkQ7SUFZUSxvQkFBbUIsRUFDdEI7O0FBSUw7RUFDSSxXQUFVO0VBRVYsdUNBQThCO1VBQTlCLCtCQUE4QjtFQUM5Qix3Q0FBc0M7RUFDdEMsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFFbkIseURBQXVELEVBTTFEOztBQWZEO0lBWVEsb0JBQW1CLEVBQ3RCOztBQUlMO0VBR0ksbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osT0FBTTtFQUNOLFFBQU8sRUFDViIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9sb2JieS5pdGVtL2xvYmJ5Lml0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG59XHJcblxyXG4uc3FyLWJ0bntcclxuICAgIHBhZGRpbmc6MTVweDtcclxuICAgIGZvbnQtc2l6ZTogODRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnNxcntcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpIWltcG9ydGFudDtcclxuIFxyXG59XHJcbi5zcXItYnRuOmhvdmVyLC5zcXI6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMikhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5zcXItYnRuLl9tZXRhX2FjdGl2ZSwuc3FyLl9tZXRhX2FjdGl2ZXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSg2OSwgNTksIDU5LCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIC5zcXItdG9vbGJhcntcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmZhbmN5LXRodW1iXHJcbnsgICBcclxuICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn0iXX0= */"

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
                        this.item.template = this.playlistTemplate;
                        break;
                }
            }
            if (this.item.type === 'slide' || this.item.elements) {
                this.item.template = this.slideTemplate;
            }
            if (this.item.type === 'image') {
                this.item.template = this.imageTemplate;
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

module.exports = ".icon {\n  margin-right: 5px;\n  margin-left: 5px; }\n\n.sqr-btn {\n  padding: 15px;\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr {\n  opacity: 0.9;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) !important; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 35;\n  background: #fff;\n  margin-bottom: 40px;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2) !important; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn._meta_active, .sqr._meta_active {\n  opacity: 1;\n  -webkit-transform: translate(2px, 2px);\n          transform: translate(2px, 2px);\n  border: 1px solid rgba(69, 59, 59, 0.2);\n  border-radius: 35;\n  background: #fff;\n  margin-bottom: 40px;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2) !important; }\n\n.sqr-btn._meta_active .sqr-toolbar, .sqr._meta_active .sqr-toolbar {\n    visibility: visible; }\n\n.fancy-thumb {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYmJ5L0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcY29tbW9uXFxsb2JieVxcbG9iYnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBZ0I7RUFDaEIsaUJBQWUsRUFDbEI7O0FBRUQ7RUFDSSxjQUFZO0VBQ1osZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsdUJBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksYUFBWTtFQUNaLG1DQUEwQjtFQUExQiwyQkFBMEI7RUFBMUIsbURBQTBCO0VBQzFCLHNEQUFvRCxFQUV2RDs7QUFDRDtFQUNJLFdBQVU7RUFFVix1Q0FBOEI7VUFBOUIsK0JBQThCO0VBQzlCLHFDQUFtQztFQUNuQyxrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUVuQix5REFBdUQsRUFNMUQ7O0FBZkQ7SUFZUSxvQkFBbUIsRUFDdEI7O0FBSUw7RUFDSSxXQUFVO0VBRVYsdUNBQThCO1VBQTlCLCtCQUE4QjtFQUM5Qix3Q0FBc0M7RUFDdEMsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFFbkIseURBQXVELEVBTTFEOztBQWZEO0lBWVEsb0JBQW1CLEVBQ3RCOztBQUlMO0VBR0ksbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osT0FBTTtFQUNOLFFBQU8sRUFDViIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9sb2JieS9sb2JieS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbn1cclxuXHJcbi5zcXItYnRue1xyXG4gICAgcGFkZGluZzoxNXB4O1xyXG4gICAgZm9udC1zaXplOiA4NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uc3Fye1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMykhaW1wb3J0YW50O1xyXG4gXHJcbn1cclxuLnNxci1idG46aG92ZXIsLnNxcjpob3ZlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIC5zcXItdG9vbGJhcntcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLnNxci1idG4uX21ldGFfYWN0aXZlLC5zcXIuX21ldGFfYWN0aXZle1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDY5LCA1OSwgNTksIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSkhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLnNxci10b29sYmFye1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uZmFuY3ktdGh1bWJcclxueyAgIFxyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufSJdfQ== */"

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

module.exports = ".ruler {\n  position: absolute;\n  z-index: -1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3J1bGVycy9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxccnVsZXJzXFxydWxlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBa0I7RUFDbEIsWUFBVyxFQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3J1bGVycy9ydWxlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucnVsZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuXHJcbiAiXX0= */"

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

module.exports = "<div class=\"{{class}} {{className}}\">\n    <i class=\"{{iconClass}} icon\"></i>\n    <h4> {{title | translate}}</h4>\n</div>\n<button *ngIf=\"closeFn\" class=\"close-button-{{class}}\" (click)=\"closeSlider();\"><i class=\"far fa-window-close \"></i></button>\n<button *ngIf=\"enableSave\" class=\"save-btn-{{class}} {{(dirtyService) ? dirtyService.dirty: ''}}\" (click)=\"saveClick($event);\"><i\n        class=\"fas fa-save\"></i></button>\n<div class=\"toolbar\">\n    <ng-template [ngTemplateOutlet]=\"toolbar || defaultTemplate\"></ng-template>\n</div>\n\n<ng-template #defaultTemplate>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/common/slide-header/slide-header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/slide-header/slide-header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  position: absolute;\n  top: 0;\n  left: 110px; }\n\n.inline-topper {\n  pointer-events: none;\n  z-index: 0;\n  height: 51px;\n  opacity: 0.8;\n  padding-top: 10px; }\n\n.inline-topper .icon {\n    margin: 8px;\n    vertical-align: top; }\n\n.inline-topper h4 {\n    display: inline;\n    vertical-align: top; }\n\n.inline-topper .bar-icon {\n    margin-left: 15px; }\n\n.topper {\n  pointer-events: none;\n  z-index: 0;\n  height: 65px;\n  opacity: 0.8;\n  position: absolute;\n  padding-top: 30px;\n  top: -30px;\n  left: -15px;\n  right: -15px; }\n\n.topper .icon {\n    margin: 8px;\n    vertical-align: top; }\n\n.topper h4 {\n    display: inline;\n    vertical-align: top; }\n\n.topper .bar-icon {\n    margin-left: 15px; }\n\n.close-button-topper {\n  position: absolute;\n  z-index: 2000;\n  left: 0;\n  position: absolute;\n  left: -15px;\n  top: -15px;\n  width: 52px;\n  height: 52px;\n  background-color: green;\n  color: white;\n  cursor: pointer;\n  opacity: 0.7; }\n\n.close-button-inline-topper {\n  color: white;\n  cursor: pointer;\n  opacity: 0.5;\n  float: right;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 52px;\n  height: 52px;\n  background-color: green;\n  color: white;\n  cursor: pointer;\n  opacity: 0.7; }\n\n.save-btn-inline-topper {\n  color: white;\n  cursor: pointer;\n  opacity: 0.5;\n  float: right;\n  position: absolute;\n  left: 52px;\n  top: 0px;\n  width: 52px;\n  height: 52px;\n  background-color: orange;\n  color: white;\n  cursor: pointer;\n  opacity: 0.7; }\n\n.close-button-inline-topper:active,\n.close-button-inline-topper:hover,\n.close-button-topper:active,\n.close-button-topper:hover {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NsaWRlLWhlYWRlci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGNvbW1vblxcc2xpZGUtaGVhZGVyXFxzbGlkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsT0FBSztFQUNMLFlBQVcsRUFFZDs7QUFFRDtFQUNJLHFCQUFvQjtFQUNwQixXQUFVO0VBQ1YsYUFBWTtFQUNaLGFBQVk7RUFFWixrQkFBaUIsRUFhcEI7O0FBbkJEO0lBU1EsWUFBVztJQUNYLG9CQUFtQixFQUN0Qjs7QUFYTDtJQWFRLGdCQUFlO0lBQ2Ysb0JBQW1CLEVBQ3RCOztBQWZMO0lBaUJRLGtCQUFpQixFQUNwQjs7QUFHTDtFQUNJLHFCQUFvQjtFQUNwQixXQUFVO0VBQ1YsYUFBWTtFQUNaLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixZQUFXO0VBQ1gsYUFBWSxFQVlmOztBQXJCRDtJQVdRLFlBQVc7SUFDWCxvQkFBbUIsRUFDdEI7O0FBYkw7SUFlUSxnQkFBZTtJQUNmLG9CQUFtQixFQUN0Qjs7QUFqQkw7SUFtQlEsa0JBQWlCLEVBQ3BCOztBQU1EO0VBQ0ksbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixRQUFPO0VBQ1AsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxXQUFVO0VBQ1YsWUFBVztFQUNYLGFBQVk7RUFDWix3QkFBdUI7RUFFdkIsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsYUFBWSxFQUlmOztBQUlHO0VBRUEsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGFBQVk7RUFFWixtQkFBa0I7RUFDZCxVQUFTO0VBQ1QsU0FBUTtFQUNSLFlBQVc7RUFDWCxhQUFZO0VBQ1osd0JBQXVCO0VBRXZCLGFBQVk7RUFDWixnQkFBZTtFQUNmLGFBQVksRUFHbkI7O0FBQ0Q7RUFFSSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixhQUFZO0VBQ1osYUFBWTtFQUVaLG1CQUFrQjtFQUNkLFdBQVU7RUFDVixTQUFRO0VBQ1IsWUFBVztFQUNYLGFBQVk7RUFDWix5QkFBd0I7RUFFeEIsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsYUFBWSxFQUNuQjs7QUFFRDs7OztFQUtJLFdBQVUsRUFFYiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zbGlkZS1oZWFkZXIvc2xpZGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDExMHB4O1xyXG4gICAgIFxyXG59XHJcblxyXG4uaW5saW5lLXRvcHBlcntcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBoZWlnaHQ6IDUxcHg7ICAgXHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBcclxuICAgIC5pY29ue1xyXG4gICAgICAgIG1hcmdpbjogOHB4OyAgICAgIFxyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIC5iYXItaWNvbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRvcHBlcntcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBoZWlnaHQ6IDY1cHg7ICAgXHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICBcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgLmljb257XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7ICAgICAgXHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgLmJhci1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIFxyXG4gICAgXHJcbiAgICAuY2xvc2UtYnV0dG9uLXRvcHBlcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcblxyXG4gICBcclxuICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gXHJcblxyXG4gICAgICAgIC5jbG9zZS1idXR0b24taW5saW5lLXRvcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuXHJcblxyXG4gICAgfVxyXG4gICAgLnNhdmUtYnRuLWlubGluZS10b3BwZXJcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogNTJweDtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG5cclxuICAgIC5jbG9zZS1idXR0b24taW5saW5lLXRvcHBlcjphY3RpdmUsICAgIFxyXG4gICAgLmNsb3NlLWJ1dHRvbi1pbmxpbmUtdG9wcGVyOmhvdmVyLFxyXG4gICAgLmNsb3NlLWJ1dHRvbi10b3BwZXI6YWN0aXZlLFxyXG4gICAgLmNsb3NlLWJ1dHRvbi10b3BwZXI6aG92ZXJcclxuICAgIHsgICBcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgXHJcbiBcclxuIFxyXG4gIl19 */"

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
        this.dirtyService = dirtyService;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.class = 'topper';
    }
    SlideHeaderComponent.prototype.ngOnInit = function () {
        if (this.mode === 'inline') {
            this.class = 'inline-topper';
        }
    };
    SlideHeaderComponent.prototype.saveClick = function (event) {
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

module.exports = "<div class=\"wrapper\">\n    <nav id=\"sidebar\" [class]=\"activeClass\">\n        <div class=\"sidebar-header\">\n            <h3>Sign-Nature</h3>\n            <ul class=\"mr-auto\">\n                <li class=\"nav-item\" class=\"language-bar\" >\n                    <app-language-bar></app-language-bar>\n                </li>\n                <li class=\"nav-item\">\n                    <button type=\"button\" (click)=\"toggleSidebar()\" id=\"sidebarCollapse\" class=\"btn btn-sm btn-info\">\n                        <i class=\"fas fa-align-left\"></i>\n                    </button>\n                </li>\n            </ul>\n            <strong>SN</strong>\n        </div>\n        <ul class=\"list-unstyled components\">\n            <li>\n                <a routerLink=\"/\">\n                    <i class=\"fas fa-home\"></i>\n                    {{\"NAVBAR.HOME\" | translate}}\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"screens\" routerLinkActive=\"orange-cat\">\n                    <i class=\"fas fa-desktop\"></i>\n                    {{\"NAVBAR.SCREENS\" | translate}}\n\n                </a></li>\n            <li>\n                <a routerLink=\"screen-groups\" routerLinkActive=\"green-cat\">\n                    <i class=\"fas fa-clone\"></i>\n                    {{\"NAVBAR.SCREEN-GROUPS\" | translate}}\n\n                </a></li>\n            <li>\n                <a routerLinkActive=\"lemon-cat\" routerLink=\"library\">\n                    <i class=\"fas fa-copy\"></i>\n                    {{\"NAVBAR.LIBRARY\" | translate}}\n                </a>\n                <!-- <ul class=\"{{subMenuState}} list-unstyled\" id=\"LibrarySubmenu\">\n                    <li>\n                        <a routerLink=\"library/images\" routerLinkActive=\"lemon-cat\"><i class=\"fas fa-images\"></i> {{\"NAVBAR.IMAGES\" | translate}}</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"library/videos\" routerLinkActive=\"lemon-cat\"><i class=\"fas fa-video\"></i> {{\"NAVBAR.VIDEOS\" | translate}}</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"library/slides\" routerLinkActive=\"lemon-cat\"><i class=\"far fa-object-group\"></i> {{\"NAVBAR.SLIDES\" | translate}}</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"library/fonts\" routerLinkActive=\"lemon-cat\"><i class=\"fas fa-font\"></i> {{\"NAVBAR.FONTS\" | translate}}</a>\n                    </li>\n                </ul> -->\n            </li>\n            <li>\n                <a routerLink=\"playlists\" routerLinkActive=\"purple-cat\">\n                    <i class=\"fas fa-step-forward\"></i>\n                    {{\"NAVBAR.PLAYLISTS\" | translate}}\n\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"schedules\" routerLinkActive=\"active-link\">\n                    <i class=\"fas fa-calendar-alt\"></i>\n                    {{\"NAVBAR.SCHEDULES\" | translate}}\n\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"settings\" routerLinkActive=\"active-link\">\n                    <i class=\"fas fa-cogs\"></i>\n                    {{\"NAVBAR.SETTINGS\" | translate}}\n\n                </a>\n            </li>\n        </ul>\n    </nav>\n    <!-- Page Content  -->\n    <div id=\"content\">\n        <app-bread-crumbs (Toggled)=\"toggleSidebar($event)\"></app-bread-crumbs>\n        <router-outlet></router-outlet>\n    </div>\n    <footer class=\"footer closed\">\n        {{'DASHBOARD.FOOTER' | translate}}\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-link {\n  color: #c5c5c5;\n  background: #3f5efb;\n  background: radial-gradient(circle, #3f5efb 0%, #fc466b 100%); }\n  .active-link #LibrarySubmenu {\n    display: block !important; }\n  .language-bar {\n  width: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2Qsb0JBQTBCO0VBQzFCLDhEQUFrRixFQUlyRjtFQVBEO0lBS1EsMEJBQXdCLEVBQzNCO0VBR0w7RUFFSSxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1saW5re1xyXG4gICAgY29sb3I6ICNjNWM1YzU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjMsOTQsMjUxKTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoNjMsOTQsMjUxLDEpIDAlLCByZ2JhKDI1Miw3MCwxMDcsMSkgMTAwJSk7XHJcbiAgICAjTGlicmFyeVN1Ym1lbnV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGFuZ3VhZ2UtYmFyXHJcbntcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuIl19 */"

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
    DashboardComponent.prototype.toggleSidebar = function (toggleState) {
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

module.exports = ".cube-container {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.cube {\n  width: 60px;\n  height: 60px;\n  background: #f45c41;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n  transition: background 0.2s; }\n\n.plus-vertical,\n.plus-horizontal {\n  background: #fff;\n  border-radius: 4px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 10; }\n\n.plus-vertical {\n  height: 50%;\n  width: 5px; }\n\n.plus-horizontal {\n  width: 50%;\n  height: 5px; }\n\n.quadrant {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.quadrant__item {\n  width: 50%;\n  height: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f45c41;\n  border-radius: 6px;\n  position: relative; }\n\n.quadrant__item__content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg);\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.arrow-down,\n.arrow-left,\n.arrow-right,\n.arrow-up {\n  opacity: 0;\n  color: white;\n  font-size: 24px; }\n\n.arrow-up {\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px); }\n\n.arrow-down {\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px); }\n\n.arrow-left {\n  -webkit-transform: translateX(10px);\n          transform: translateX(10px); }\n\n.arrow-right {\n  -webkit-transform: translateX(-10px);\n          transform: translateX(-10px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2FkZC9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGVkaXRvclxcYWRkXFxhZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBa0I7RUFDbEIsUUFBTztFQUNQLE9BQUssRUFDUjs7QUFJRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZiw0QkFBMkIsRUFDNUI7O0FBRUQ7O0VBRUUsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFVBQVM7RUFDVCx5Q0FBZ0M7VUFBaEMsaUNBQWdDO0VBQ2hDLFlBQVcsRUFDWjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsWUFBVyxFQUNaOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osY0FBYTtFQUNiLGdCQUFlO0VBQ2YsU0FBUTtFQUNSLFVBQVM7RUFDVCx5Q0FBZ0M7VUFBaEMsaUNBQWdDLEVBQ2pDOztBQUVEO0VBQ0UsV0FBVTtFQUNWLFlBQVc7RUFDWCxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1Qsd0RBQStDO1VBQS9DLGdEQUErQztFQUMvQyxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QixFQUN4Qjs7QUFFRDs7OztFQUlHLFdBQVU7RUFDVixhQUFZO0VBQ1osZ0JBQWUsRUFDakI7O0FBRUQ7RUFDRSxvQ0FBMkI7VUFBM0IsNEJBQTJCLEVBQzVCOztBQUVEO0VBQ0UscUNBQTRCO1VBQTVCLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUNFLG9DQUEyQjtVQUEzQiw0QkFBMkIsRUFDNUI7O0FBRUQ7RUFDRSxxQ0FBNEI7VUFBNUIsNkJBQTRCLEVBQzdCIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbi5jdWJlLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6MDtcclxufVxyXG5cclxuXHJcblxyXG4uY3ViZSB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmNDVjNDE7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcclxufVxyXG5cclxuLnBsdXMtdmVydGljYWwsXHJcbi5wbHVzLWhvcml6b250YWwge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5wbHVzLXZlcnRpY2FsIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG4ucGx1cy1ob3Jpem9udGFsIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNXB4O1xyXG59XHJcblxyXG4ucXVhZHJhbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ucXVhZHJhbnRfX2l0ZW0ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmNDVjNDE7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnF1YWRyYW50X19pdGVtX19jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcnJvdy1kb3duLFxyXG4uYXJyb3ctbGVmdCxcclxuLmFycm93LXJpZ2h0LFxyXG4uYXJyb3ctdXAge1xyXG4gICBvcGFjaXR5OiAwO1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmFycm93LXVwIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbn1cclxuXHJcbi5hcnJvdy1kb3duIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG59XHJcblxyXG4uYXJyb3ctbGVmdCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xyXG59XHJcblxyXG4uYXJyb3ctcmlnaHQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XHJcbn0iXX0= */"

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

module.exports = "<div *ngIf=\"item\" [ngStyle]=\"{'background-color': bgColor}\">      \r\n    <object #thumbObject type=\"image/svg+xml\" style=\"width: {{width}}px;height: {{height}}px;\"></object>\r\n</div>\r\n"

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
    // if (item.bgColor) {
    //   ctx.fillStyle = item.bgColor;
    //   ctx.fillRect(0, 0, width, height);
    // }
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
            styles: [__webpack_require__(/*! ./canvas.component.css */ "./src/app/editor/canvas/canvas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], CanvasComponent);
    return CanvasComponent;
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
        this.propValueAccessor = 'textContent';
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
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selection.service */ "./src/app/editor/selection.service.ts");
/* harmony import */ var _fonts_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fonts.service */ "./src/app/editor/fonts.service.ts");
/* harmony import */ var _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slide-editor/slide-editor.component */ "./src/app/editor/slide-editor/slide-editor.component.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/editor/panel/panel.component.ts");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add/add.component */ "./src/app/editor/add/add.component.ts");














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
                ng5_slider__WEBPACK_IMPORTED_MODULE_12__["Ng5SliderModule"]
            ],
            declarations: [_contenteditable_directive__WEBPACK_IMPORTED_MODULE_7__["ContenteditableDirective"], _element_element_component__WEBPACK_IMPORTED_MODULE_6__["ElementComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_13__["AddComponent"], _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_10__["SlideEditorComponent"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_11__["PanelComponent"]],
            providers: [_fonts_service__WEBPACK_IMPORTED_MODULE_9__["FontsService"], _selection_service__WEBPACK_IMPORTED_MODULE_8__["SelectionService"]]
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

module.exports = "<div  ngDraggable [zIndex]=\"element.zIndex\" [handle]=\"ElementHandle\" [position]=\"element.position\" class=\"drag-block element {{element.selected}}\"\n  (edge)=\"checkEdge($event)\" [bounds]=\"myBounds\" [inBounds]=\"inBounds\" (started)=\"onStart($event)\" (stopped)=\"onStop($event)\"\n  (movingOffset)=\"onMoving($event)\" [preventDefaultEvent]=\"false\" (endOffset)=\"onMoveEnd($event)\" (click)=\"focus($event, element)\">\n  <button class=\"del-button\" (click)=\"remove(element);\"><i class=\"far fa-window-close \"></i></button>\n\n  <div [ngStyle]=\"{'font-family': element.font ? element.font: 'arial',\n   'font-size': element.fontSize +'px',\n  'color': element.color }\" contenteditable=\"true\" (updateComplete)=\"updateComplete($event)\" [(ngModel)]=\"element.text\"\n    *ngIf=\"element.type === 'text'\"></div>\n\n  <img [src]=\"element.src\" ngResizable class=\"image-element shadow\" [ngStyle]=\"{'width': element.width+'px','height': element.height+'px', 'opacity': element.opacity }\"\n    *ngIf=\"element.type === 'image'\" /> {{element.position | json}}\n</div>\n\n<!-- <div [hidden]=\"!layers\" class=\"layer\" (click)=\"focus($event, element)\">\n \n  <div class=\"row\">\n    <div class=\"col-6\">\n     <input type=\"text\" [(ngModel)]=\"element.text\" class=\"form-control\"> \n      <ul class=\"toolbox\" *ngIf=\"element.selected && element.type==='text'\">\n          <li>\n            <select [(ngModel)]=\"element.font\" (change)=\"selectFont($event)\">\n              <option *ngFor=\"let c of fonts\" [ngValue]=\"c\">{{c}}</option>\n            </select>\n          </li>\n          <li>\n            <select [(ngModel)]=\"element.fontSize\">\n              <option *ngFor=\"let c of sizes\" [ngValue]=\"c\">{{c}}</option>\n            </select>\n          </li>\n          <li>\n            <input [(colorPicker)]=\"element.color\" [style.background]=\"element.color\" />\n          </li>\n        </ul>\n      \n      \n        <ul class=\"toolbox\" *ngIf=\"element.selected && element.type==='image'\">\n          <li>\n            <img [src]=\"element.src\">\n          </li>\n          <li>\n            <span>Width:</span>\n            <input type=\"number\" [(ngModel)]=\"element.width\" />\n            <span>Height:</span> <input type=\"number\" [(ngModel)]=\"element.height\" />\n            <span>Opacity:</span> <input type=\"number\" [(ngModel)]=\"element.opacity\" />\n          </li>\n          <li>\n      \n          </li>\n        </ul>\n\n    </div>\n    <div class=\"col-6\">     \n      <div style=\"border: 1px inset #ccddcc;\">\n        <canvas width=\"115\" height=\"115\" #thumbCanvas></canvas>\n      </div>\n      <div #htmlElement id=\"htmlElement\" style=\"visibility: hidden\"> \n        <div [ngStyle]=\"{'font-family': element.font ? element.font: 'arial','position': 'absolute', 'top':element.position.y + 'px','left':element.position.x + 'px',  \n         'font-size': element.fontSize +'px',\n        'color': element.color }\">{{element.text}}</div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n</div> -->\n"

/***/ }),

/***/ "./src/app/editor/element/element.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/editor/element/element.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drag-block {\n  min-width: 50px;\n  cursor: crosshair;\n  position: absolute; }\n  .drag-block span {\n    cursor: text;\n    display: inline; }\n  .element {\n  line-height: 1;\n  line-break: loose;\n  border: 1px solid transparent; }\n  .element .del-button {\n    opacity: 0; }\n  .element .selected, .element .true {\n    border: 1px solid black; }\n  .selected .del-button, .true .del-button {\n  opacity: 1;\n  position: absolute;\n  left: -15px;\n  top: -15px;\n  width: 52px;\n  height: 52px;\n  color: white;\n  cursor: pointer;\n  opacity: 0.7; }\n  .del-button:active,\n.del-button:hover {\n  opacity: 1; }\n  .form-control {\n  height: 15px; }\n  .position {\n  position: absolute; }\n  .t-bar {\n  position: absolute;\n  font-size: 9px; }\n  .t-bar input {\n    width: 50px; }\n  .t-bar select {\n    width: 100px; }\n  .position {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100px;\n  font-size: 9px; }\n  .layer {\n  height: 130px;\n  background-color: white; }\n  .layer .toolbox select, .layer .toolbox input {\n    font-size: 10px; }\n  .layer .toolbox input {\n    width: 30px; }\n  .layer .toolbox img {\n    float: right;\n    width: 50px;\n    height: 50px; }\n  .layer .toolbox.active {\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2VsZW1lbnQvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxlZGl0b3JcXGVsZW1lbnRcXGVsZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJSSxnQkFBZTtFQUVmLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFLckI7RUFaRDtJQVNRLGFBQVk7SUFDWixnQkFBZSxFQUNsQjtFQUdMO0VBQ0csZUFBYTtFQUNiLGtCQUFpQjtFQUNoQiw4QkFBNkIsRUFZaEM7RUFmRDtJQU1ZLFdBQVUsRUFDYjtFQVBUO0lBU1Esd0JBQXVCLEVBSzFCO0VBR0w7RUFHUSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxXQUFVO0VBQ1YsWUFBVztFQUNYLGFBQVk7RUFHWixhQUFZO0VBQ1osZ0JBQWU7RUFDZixhQUFZLEVBRWY7RUFFTDs7RUFHSSxXQUFVLEVBRWI7RUFFRDtFQUNJLGFBQVksRUFDZjtFQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCO0VBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYyxFQVFqQjtFQVZEO0lBSVEsWUFBVSxFQUNiO0VBTEw7SUFPUSxhQUFZLEVBQ2Y7RUFHTDtFQUNJLG1CQUFrQjtFQUNsQixVQUFRO0VBQ1IsUUFBTTtFQUNOLGFBQVk7RUFDWixlQUFjLEVBQ2pCO0VBR0Q7RUFDSSxjQUFhO0VBQ2Isd0JBQXVCLEVBa0IxQjtFQXBCRDtJQVFZLGdCQUFlLEVBQ2xCO0VBVFQ7SUFVZSxZQUFXLEVBQUc7RUFWN0I7SUFZWSxhQUFZO0lBQ1osWUFBVztJQUFDLGFBQVcsRUFDMUI7RUFkVDtJQWlCUSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2VsZW1lbnQvZWxlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcmFnLWJsb2NrXHJcbnsgICAgIFxyXG4gICAgXHJcbiAgICAvLyBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgLy9wYWRkaW5nOiAxcHg7XHJcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7ICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmVsZW1lbnR7XHJcbiAgIGxpbmUtaGVpZ2h0OjE7XHJcbiAgIGxpbmUtYnJlYWs6IGxvb3NlOyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgLmRlbC1idXR0b25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgLnNlbGVjdGVkLCAudHJ1ZXtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuXHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VsZWN0ZWQsIC50cnVle1xyXG4gICAgLmRlbC1idXR0b25cclxuICAgIHsgICBcclxuICAgICAgICBvcGFjaXR5OiAxOyAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuLmRlbC1idXR0b246YWN0aXZlLFxyXG4uZGVsLWJ1dHRvbjpob3ZlclxyXG57ICAgXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6IDE1cHg7IFxyXG59XHJcbi5wb3NpdGlvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4udC1iYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICB9XHJcbiAgICBzZWxlY3R7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4ucG9zaXRpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG59XHJcbiBcclxuXHJcbi5sYXllcntcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgLnRvb2xib3hcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICBzZWxlY3QsIGlucHV0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHt3aWR0aDogMzBweDt9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O2hlaWdodDo1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50b29sYm94LmFjdGl2ZXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuIl19 */"

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




var ElementComponent = /** @class */ (function () {
    function ElementComponent(_ngZone, _selectionService, sanitizer, fontService) {
        this._ngZone = _ngZone;
        this._selectionService = _selectionService;
        this.sanitizer = sanitizer;
        this.fontService = fontService;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inBounds = true;
        this.edge = {
            top: true,
            bottom: true,
            left: true,
            right: true
        };
    }
    ElementComponent.prototype.updateComplete = function (event) {
        clearTimeout(this.updateTimeout);
        if (!this.lastSvg) {
            this.lastSvg = '';
        }
        // if (this.domElement.innerHTML !== this.lastSvg) {
        //   this.lastSvg = this.domElement.innerHTML;
        //   this.updateTimeout = setTimeout(render.bind(this), 1000);
        // }
        function render() {
            this.render_html_to_canvas(this.domElement.innerHTML, 0, 0, 85, 85);
        }
    };
    ElementComponent.prototype.paint = function () {
        // this.thumbCanvas.changes.subscribe((data) => {
        //   if (data.first) {
        //     const ctx: CanvasRenderingContext2D = data.first.nativeElement.getContext('2d');
        //     this.ctx = ctx;
        //     this.htmlElement.notifyOnChanges();
        //   }
        // });
        // this.htmlElement.changes.subscribe((data) => {
        //   if (data.first) {
        //     const el: any = data.first.nativeElement;
        //     if (el) {
        //       this.domElement = el;
        //       this.render_html_to_canvas(el.innerHTML, 0, 0, 85, 85);
        //     }
        //   }
        // });
        // this.thumbCanvas.notifyOnChanges();
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
        this.removed.emit(element);
    };
    ElementComponent.prototype.focus = function (event, element) {
        this.selected.emit(element);
        this._selectionService.focus(event, element);
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
    };
    ElementComponent.prototype.render_html_to_canvas = function (html, x, y, width, height) {
        var _this = this;
        var data = 'data:image/svg+xml;charset=utf-8,' + '<svg xmlns="http://www.w3.org/2000/svg" width="'
            + width + '" height="' + height + '">' +
            '<g transform="scale(0.1)">' +
            '<foreignObject width="800" height="600">' +
            this.html_to_xml(html) +
            '</foreignObject>' +
            '</g>' +
            '</svg>';
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var img;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.svg = data;
                img = new Image();
                img.onload = function () {
                    _this.ctx.clearRect(0, 0, 85, 85);
                    _this.ctx.drawImage(img, x, y);
                    _this.thumbCanvas.notifyOnChanges();
                };
                img.src = data;
                return [2 /*return*/];
            });
        }); });
    };
    ElementComponent.prototype.html_to_xml = function (html) {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ElementComponent.prototype, "element", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ElementComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ElementComponent.prototype, "selected", void 0);
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
            _fonts_service__WEBPACK_IMPORTED_MODULE_3__["FontsService"]])
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


var FontsService = /** @class */ (function () {
    function FontsService(http) {
        this.http = http;
        this.fonts = [];
    }
    FontsService.prototype.getFonts = function () {
        return this.fonts;
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

//
// 'Almendra+Display', Almendra Display
// 'Almendra+SC', Almendra SC
// 'Amarante', Amarante
// 'Amaranth', Amaranth
// 'Amatic+SC', Amatic SC
// 'Amatica+SC', Amatica SC
// 'Amethysta', Amethysta
// 'Amiko', Amiko
// 'Amiri', Amiri
// 'Amita', Amita
// 'Anaheim', Anaheim
// 'Andada', Andada
// 'Andika', Andika
// 'Angkor', Angkor
// 'Annie+Use+Your+Telescope', Annie Use Your Telescope
// 'Anonymous+Pro', Anonymous Pro
// 'Antic', Antic
// 'Antic+Didone', Antic Didone
// 'Antic+Slab', Antic Slab
// 'Anton', Anton
// 'Arapey', Arapey
// 'Arbutus', Arbutus
// 'Arbutus+Slab', Arbutus Slab
// 'Architects+Daughter', Architects Daughter
// 'Archivo', Archivo
// 'Archivo+Black', Archivo Black
// 'Archivo+Narrow', Archivo Narrow
// 'Aref+Ruqaa', Aref Ruqaa
// 'Arima+Madurai', Arima Madurai
// 'Arimo', Arimo
// 'Arizonia', Arizonia
// 'Armata', Armata
// 'Arsenal', Arsenal
// 'Artifika', Artifika
// 'Arvo', Arvo
// 'Arya', Arya
// 'Asap', Asap
// 'Asap+Condensed', Asap Condensed
// 'Asar', Asar
// 'Asset', Asset
// 'Assistant', Assistant
// 'Astloch', Astloch
// 'Asul', Asul
// 'Athiti', Athiti
// 'Atma', Atma
// 'Atomic+Age', Atomic Age
// 'Aubrey', Aubrey
// 'Audiowide', Audiowide
// 'Autour+One', Autour One
// 'Average', Average
// 'Average+Sans', Average Sans
// 'Averia+Gruesa+Libre', Averia Gruesa Libre
// 'Averia+Libre', Averia Libre
// 'Averia+Sans+Libre', Averia Sans Libre
// 'Averia+Serif+Libre', Averia Serif Libre
// 'Bad+Script', Bad Script
// 'Bahiana', Bahiana
// 'Baloo', Baloo
// 'Baloo+Bhai', Baloo Bhai
// 'Baloo+Bhaijaan', Baloo Bhaijaan
// 'Baloo+Bhaina', Baloo Bhaina
// 'Baloo+Chettan', Baloo Chettan
// 'Baloo+Da', Baloo Da
// 'Baloo+Paaji', Baloo Paaji
// 'Baloo+Tamma', Baloo Tamma
// 'Baloo+Tammudu', Baloo Tammudu
// 'Baloo+Thambi', Baloo Thambi
// 'Balthazar', Balthazar
// 'Bangers', Bangers
// 'Barrio', Barrio
// 'Basic', Basic
// 'Battambang', Battambang
// 'Baumans', Baumans
// 'Bayon', Bayon
// 'Belgrano', Belgrano
// 'Bellefair', Bellefair
// 'Belleza', Belleza
// 'BenchNine', BenchNine
// 'Bentham', Bentham
// 'Berkshire+Swash', Berkshire Swash
// 'Bevan', Bevan
// 'Bigelow+Rules', Bigelow Rules
// 'Bigshot+One', Bigshot One
// 'Bilbo', Bilbo
// 'Bilbo+Swash+Caps', Bilbo Swash Caps
// 'BioRhyme', BioRhyme
// 'BioRhyme+Expanded', BioRhyme Expanded
// 'Biryani', Biryani
// 'Bitter', Bitter
// 'Black+Ops+One', Black Ops One
// 'Bokor', Bokor
// 'Bonbon', Bonbon
// 'Boogaloo', Boogaloo
// 'Bowlby+One', Bowlby One
// 'Bowlby+One+SC', Bowlby One SC
// 'Brawler', Brawler
// 'Bree+Serif', Bree Serif
// 'Bubblegum+Sans', Bubblegum Sans
// 'Bubbler+One', Bubbler One
// 'Buda', Buda
// 'Buenard', Buenard
// 'Bungee', Bungee
// 'Bungee+Hairline', Bungee Hairline
// 'Bungee+Inline', Bungee Inline
// 'Bungee+Outline', Bungee Outline
// 'Bungee+Shade', Bungee Shade
// 'Butcherman', Butcherman
// 'Butterfly+Kids', Butterfly Kids
// 'Cabin', Cabin
// 'Cabin+Condensed', Cabin Condensed
// 'Cabin+Sketch', Cabin Sketch
// 'Caesar+Dressing', Caesar Dressing
// 'Cagliostro', Cagliostro
// 'Cairo', Cairo
// 'Calligraffitti', Calligraffitti
// 'Cambay', Cambay
// 'Cambo', Cambo
// 'Candal', Candal
// 'Cantarell', Cantarell
// 'Cantata+One', Cantata One
// 'Cantora+One', Cantora One
// 'Capriola', Capriola
// 'Cardo', Cardo
// 'Carme', Carme
// 'Carrois+Gothic', Carrois Gothic
// 'Carrois+Gothic+SC', Carrois Gothic SC
// 'Carter+One', Carter One
// 'Catamaran', Catamaran
// 'Caudex', Caudex
// 'Caveat', Caveat
// 'Caveat+Brush', Caveat Brush
// 'Cedarville+Cursive', Cedarville Cursive
// 'Ceviche+One', Ceviche One
// 'Changa', Changa
// 'Changa+One', Changa One
// 'Chango', Chango
// 'Chathura', Chathura
// 'Chau+Philomene+One', Chau Philomene One
// 'Chela+One', Chela One
// 'Chelsea+Market', Chelsea Market
// 'Chenla', Chenla
// 'Cherry+Cream+Soda', Cherry Cream Soda
// 'Cherry+Swash', Cherry Swash
// 'Chewy', Chewy
// 'Chicle', Chicle
// 'Chivo', Chivo
// 'Chonburi', Chonburi
// 'Cinzel', Cinzel
// 'Cinzel+Decorative', Cinzel Decorative
// 'Clicker+Script', Clicker Script
// 'Coda', Coda
// 'Coda+Caption', Coda Caption
// 'Codystar', Codystar
// 'Coiny', Coiny
// 'Combo', Combo
// 'Comfortaa', Comfortaa
// 'Coming+Soon', Coming Soon
// 'Concert+One', Concert One
// 'Condiment', Condiment
// 'Content', Content
// 'Contrail+One', Contrail One
// 'Convergence', Convergence
// 'Cookie', Cookie
// 'Copse', Copse
// 'Corben', Corben
// 'Cormorant', Cormorant
// 'Cormorant+Garamond', Cormorant Garamond
// 'Cormorant+Infant', Cormorant Infant
// 'Cormorant+SC', Cormorant SC
// 'Cormorant+Unicase', Cormorant Unicase
// 'Cormorant+Upright', Cormorant Upright
// 'Courgette', Courgette
// 'Cousine', Cousine
// 'Coustard', Coustard
// 'Covered+By+Your+Grace', Covered By Your Grace
// 'Crafty+Girls', Crafty Girls
// 'Creepster', Creepster
// 'Crete+Round', Crete Round
// 'Crimson+Text', Crimson Text
// 'Croissant+One', Croissant One
// 'Crushed', Crushed
// 'Cuprum', Cuprum
// 'Cutive', Cutive
// 'Cutive+Mono', Cutive Mono
// 'Damion', Damion
// 'Dancing+Script', Dancing Script
// 'Dangrek', Dangrek
// 'David+Libre', David Libre
// 'Dawning+of+a+New+Day', Dawning of a New Day
// 'Days+One', Days One
// 'Dekko', Dekko
// 'Delius', Delius
// 'Delius+Swash+Caps', Delius Swash Caps
// 'Delius+Unicase', Delius Unicase
// 'Della+Respira', Della Respira
// 'Denk+One', Denk One
// 'Devonshire', Devonshire
// 'Dhurjati', Dhurjati
// 'Didact+Gothic', Didact Gothic
// 'Diplomata', Diplomata
// 'Diplomata+SC', Diplomata SC
// 'Domine', Domine
// 'Donegal+One', Donegal One
// 'Doppio+One', Doppio One
// 'Dorsa', Dorsa
// 'Dosis', Dosis
// 'Dr+Sugiyama', Dr Sugiyama
// 'Droid+Sans', Droid Sans
// 'Droid+Sans+Mono', Droid Sans Mono
// 'Droid+Serif', Droid Serif
// 'Duru+Sans', Duru Sans
// 'Dynalight', Dynalight
// 'EB+Garamond', EB Garamond
// 'Eagle+Lake', Eagle Lake
// 'Eater', Eater
// 'Economica', Economica
// 'Eczar', Eczar
// 'El+Messiri', El Messiri
// 'Electrolize', Electrolize
// 'Elsie', Elsie
// 'Elsie+Swash+Caps', Elsie Swash Caps
// 'Emblema+One', Emblema One
// 'Emilys+Candy', Emilys Candy
// 'Encode+Sans', Encode Sans
// 'Encode+Sans+Condensed', Encode Sans Condensed
// 'Encode+Sans+Expanded', Encode Sans Expanded
// 'Encode+Sans+Semi+Condensed', Encode Sans Semi Condensed
// 'Encode+Sans+Semi+Expanded', Encode Sans Semi Expanded
// 'Engagement', Engagement
// 'Englebert', Englebert
// 'Enriqueta', Enriqueta
// 'Erica+One', Erica One
// 'Esteban', Esteban
// 'Euphoria+Script', Euphoria Script
// 'Ewert', Ewert
// 'Exo', Exo
// 'Exo+2', Exo 2
// 'Expletus+Sans', Expletus Sans
// 'Fanwood+Text', Fanwood Text
// 'Farsan', Farsan
// 'Fascinate', Fascinate
// 'Fascinate+Inline', Fascinate Inline
// 'Faster+One', Faster One
// 'Fasthand', Fasthand
// 'Fauna+One', Fauna One
// 'Faustina', Faustina
// 'Federant', Federant
// 'Federo', Federo
// 'Felipa', Felipa
// 'Fenix', Fenix
// 'Finger+Paint', Finger Paint
// 'Fira+Mono', Fira Mono
// 'Fira+Sans', Fira Sans
// 'Fira+Sans+Condensed', Fira Sans Condensed
// 'Fira+Sans+Extra+Condensed', Fira Sans Extra Condensed
// 'Fjalla+One', Fjalla One
// 'Fjord+One', Fjord One
// 'Flamenco', Flamenco
// 'Flavors', Flavors
// 'Fondamento', Fondamento
// 'Fontdiner+Swanky', Fontdiner Swanky
// 'Forum', Forum
// 'Francois+One', Francois One
// 'Frank+Ruhl+Libre', Frank Ruhl Libre
// 'Freckle+Face', Freckle Face
// 'Fredericka+the+Great', Fredericka the Great
// 'Fredoka+One', Fredoka One
// 'Freehand', Freehand
// 'Fresca', Fresca
// 'Frijole', Frijole
// 'Fruktur', Fruktur
// 'Fugaz+One', Fugaz One
// 'GFS+Didot', GFS Didot
// 'GFS+Neohellenic', GFS Neohellenic
// 'Gabriela', Gabriela
// 'Gafata', Gafata
// 'Galada', Galada
// 'Galdeano', Galdeano
// 'Galindo', Galindo
// 'Gentium+Basic', Gentium Basic
// 'Gentium+Book+Basic', Gentium Book Basic
// 'Geo', Geo
// 'Geostar', Geostar
// 'Geostar+Fill', Geostar Fill
// 'Germania+One', Germania One
// 'Gidugu', Gidugu
// 'Gilda+Display', Gilda Display
// 'Give+You+Glory', Give You Glory
// 'Glass+Antiqua', Glass Antiqua
// 'Glegoo', Glegoo
// 'Gloria+Hallelujah', Gloria Hallelujah
// 'Goblin+One', Goblin One
// 'Gochi+Hand', Gochi Hand
// 'Gorditas', Gorditas
// 'Goudy+Bookletter+1911', Goudy Bookletter 1911
// 'Graduate', Graduate
// 'Grand+Hotel', Grand Hotel
// 'Gravitas+One', Gravitas One
// 'Great+Vibes', Great Vibes
// 'Griffy', Griffy
// 'Gruppo', Gruppo
// 'Gudea', Gudea
// 'Gurajada', Gurajada
// 'Habibi', Habibi
// 'Halant', Halant
// 'Hammersmith+One', Hammersmith One
// 'Hanalei', Hanalei
// 'Hanalei+Fill', Hanalei Fill
// 'Handlee', Handlee
// 'Hanuman', Hanuman
// 'Happy+Monkey', Happy Monkey
// 'Harmattan', Harmattan
// 'Headland+One', Headland One
// 'Heebo', Heebo
// 'Henny+Penny', Henny Penny
// 'Herr+Von+Muellerhoff', Herr Von Muellerhoff
// 'Hind', Hind
// 'Hind+Guntur', Hind Guntur
// 'Hind+Madurai', Hind Madurai
// 'Hind+Siliguri', Hind Siliguri
// 'Hind+Vadodara', Hind Vadodara
// 'Holtwood+One+SC', Holtwood One SC
// 'Homemade+Apple', Homemade Apple
// 'Homenaje', Homenaje
// 'IM+Fell+DW+Pica', IM Fell DW Pica
// 'IM+Fell+DW+Pica+SC', IM Fell DW Pica SC
// 'IM+Fell+Double+Pica', IM Fell Double Pica
// 'IM+Fell+Double+Pica+SC', IM Fell Double Pica SC
// 'IM+Fell+English', IM Fell English
// 'IM+Fell+English+SC', IM Fell English SC
// 'IM+Fell+French+Canon', IM Fell French Canon
// 'IM+Fell+French+Canon+SC', IM Fell French Canon SC
// 'IM+Fell+Great+Primer', IM Fell Great Primer
// 'IM+Fell+Great+Primer+SC', IM Fell Great Primer SC
// 'Iceberg', Iceberg
// 'Iceland', Iceland
// 'Imprima', Imprima
// 'Inconsolata', Inconsolata
// 'Inder', Inder
// 'Indie+Flower', Indie Flower
// 'Inika', Inika
// 'Inknut+Antiqua', Inknut Antiqua
// 'Irish+Grover', Irish Grover
// 'Istok+Web', Istok Web
// 'Italiana', Italiana
// 'Italianno', Italianno
// 'Itim', Itim
// 'Jacques+Francois', Jacques Francois
// 'Jacques+Francois+Shadow', Jacques Francois Shadow
// 'Jaldi', Jaldi
// 'Jim+Nightshade', Jim Nightshade
// 'Jockey+One', Jockey One
// 'Jolly+Lodger', Jolly Lodger
// 'Jomhuria', Jomhuria
// 'Josefin+Sans', Josefin Sans
// 'Josefin+Slab', Josefin Slab
// 'Joti+One', Joti One
// 'Judson', Judson
// 'Julee', Julee
// 'Julius+Sans+One', Julius Sans One
// 'Junge', Junge
// 'Jura', Jura
// 'Just+Another+Hand', Just Another Hand
// 'Just+Me+Again+Down+Here', Just Me Again Down Here
// 'Kadwa', Kadwa
// 'Kalam', Kalam
// 'Kameron', Kameron
// 'Kanit', Kanit
// 'Kantumruy', Kantumruy
// 'Karla', Karla
// 'Karma', Karma
// 'Katibeh', Katibeh
// 'Kaushan+Script', Kaushan Script
// 'Kavivanar', Kavivanar
// 'Kavoon', Kavoon
// 'Kdam+Thmor', Kdam Thmor
// 'Keania+One', Keania One
// 'Kelly+Slab', Kelly Slab
// 'Kenia', Kenia
// 'Khand', Khand
// 'Khmer', Khmer
// 'Khula', Khula
// 'Kite+One', Kite One
// 'Knewave', Knewave
// 'Kotta+One', Kotta One
// 'Koulen', Koulen
// 'Kranky', Kranky
// 'Kreon', Kreon
// 'Kristi', Kristi
// 'Krona+One', Krona One
// 'Kumar+One', Kumar One
// 'Kumar+One+Outline', Kumar One Outline
// 'Kurale', Kurale
// 'La+Belle+Aurore', La Belle Aurore
// 'Laila', Laila
// 'Lakki+Reddy', Lakki Reddy
// 'Lalezar', Lalezar
// 'Lancelot', Lancelot
// 'Lateef', Lateef
// 'Lato', Lato
// 'League+Script', League Script
// 'Leckerli+One', Leckerli One
// 'Ledger', Ledger
// 'Lekton', Lekton
// 'Lemon', Lemon
// 'Lemonada', Lemonada
// 'Libre+Barcode+128', Libre Barcode 128
// 'Libre+Barcode+128+Text', Libre Barcode 128 Text
// 'Libre+Barcode+39', Libre Barcode 39
// 'Libre+Barcode+39+Extended', Libre Barcode 39 Extended
// 'Libre+Barcode+39+Extended+Text', Libre Barcode 39 Extended Text
// 'Libre+Barcode+39+Text', Libre Barcode 39 Text
// 'Libre+Baskerville', Libre Baskerville
// 'Libre+Franklin', Libre Franklin
// 'Life+Savers', Life Savers
// 'Lilita+One', Lilita One
// 'Lily+Script+One', Lily Script One
// 'Limelight', Limelight
// 'Linden+Hill', Linden Hill
// 'Lobster', Lobster
// 'Lobster+Two', Lobster Two
// 'Londrina+Outline', Londrina Outline
// 'Londrina+Shadow', Londrina Shadow
// 'Londrina+Sketch', Londrina Sketch
// 'Londrina+Solid', Londrina Solid
// 'Lora', Lora
// 'Love+Ya+Like+A+Sister', Love Ya Like A Sister
// 'Loved+by+the+King', Loved by the King
// 'Lovers+Quarrel', Lovers Quarrel
// 'Luckiest+Guy', Luckiest Guy
// 'Lusitana', Lusitana
// 'Lustria', Lustria
// 'Macondo', Macondo
// 'Macondo+Swash+Caps', Macondo Swash Caps
// 'Mada', Mada
// 'Magra', Magra
// 'Maiden+Orange', Maiden Orange
// 'Maitree', Maitree
// 'Mako', Mako
// 'Mallanna', Mallanna
// 'Mandali', Mandali
// 'Manuale', Manuale
// 'Marcellus', Marcellus
// 'Marcellus+SC', Marcellus SC
// 'Marck+Script', Marck Script
// 'Margarine', Margarine
// 'Marko+One', Marko One
// 'Marmelad', Marmelad
// 'Martel', Martel
// 'Martel+Sans', Martel Sans
// 'Marvel', Marvel
// 'Mate', Mate
// 'Mate+SC', Mate SC
// 'Maven+Pro', Maven Pro
// 'McLaren', McLaren
// 'Meddon', Meddon
// 'MedievalSharp', MedievalSharp
// 'Medula+One', Medula One
// 'Meera+Inimai', Meera Inimai
// 'Megrim', Megrim
// 'Meie+Script', Meie Script
// 'Merienda', Merienda
// 'Merienda+One', Merienda One
// 'Merriweather', Merriweather
// 'Merriweather+Sans', Merriweather Sans
// 'Metal', Metal
// 'Metal+Mania', Metal Mania
// 'Metamorphous', Metamorphous
// 'Metrophobic', Metrophobic
// 'Michroma', Michroma
// 'Milonga', Milonga
// 'Miltonian', Miltonian
// 'Miltonian+Tattoo', Miltonian Tattoo
// 'Miniver', Miniver
// 'Miriam+Libre', Miriam Libre
// 'Mirza', Mirza
// 'Miss+Fajardose', Miss Fajardose
// 'Mitr', Mitr
// 'Modak', Modak
// 'Modern+Antiqua', Modern Antiqua
// 'Mogra', Mogra
// 'Molengo', Molengo
// 'Molle', Molle
// 'Monda', Monda
// 'Monofett', Monofett
// 'Monoton', Monoton
// 'Monsieur+La+Doulaise', Monsieur La Doulaise
// 'Montaga', Montaga
// 'Montez', Montez
// 'Montserrat', Montserrat
// 'Montserrat+Alternates', Montserrat Alternates
// 'Montserrat+Subrayada', Montserrat Subrayada
// 'Moul', Moul
// 'Moulpali', Moulpali
// 'Mountains+of+Christmas', Mountains of Christmas
// 'Mouse+Memoirs', Mouse Memoirs
// 'Mr+Bedfort', Mr Bedfort
// 'Mr+Dafoe', Mr Dafoe
// 'Mr+De+Haviland', Mr De Haviland
// 'Mrs+Saint+Delafield', Mrs Saint Delafield
// 'Mrs+Sheppards', Mrs Sheppards
// 'Mukta', Mukta
// 'Mukta+Mahee', Mukta Mahee
// 'Mukta+Malar', Mukta Malar
// 'Mukta+Vaani', Mukta Vaani
// 'Muli', Muli
// 'Mystery+Quest', Mystery Quest
// 'NTR', NTR
// 'Neucha', Neucha
// 'Neuton', Neuton
// 'New+Rocker', New Rocker
// 'News+Cycle', News Cycle
// 'Niconne', Niconne
// 'Nixie+One', Nixie One
// 'Nobile', Nobile
// 'Nokora', Nokora
// 'Norican', Norican
// 'Nosifer', Nosifer
// 'Nothing+You+Could+Do', Nothing You Could Do
// 'Noticia+Text', Noticia Text
// 'Noto+Sans', Noto Sans
// 'Noto+Serif', Noto Serif
// 'Nova+Cut', Nova Cut
// 'Nova+Flat', Nova Flat
// 'Nova+Mono', Nova Mono
// 'Nova+Oval', Nova Oval
// 'Nova+Round', Nova Round
// 'Nova+Script', Nova Script
// 'Nova+Slim', Nova Slim
// 'Nova+Square', Nova Square
// 'Numans', Numans
// 'Nunito', Nunito
// 'Nunito+Sans', Nunito Sans
// 'Odor+Mean+Chey', Odor Mean Chey
// 'Offside', Offside
// 'Old+Standard+TT', Old Standard TT
// 'Oldenburg', Oldenburg
// 'Oleo+Script', Oleo Script
// 'Oleo+Script+Swash+Caps', Oleo Script Swash Caps
// 'Open+Sans', Open Sans
// 'Open+Sans+Condensed', Open Sans Condensed
// 'Oranienbaum', Oranienbaum
// 'Orbitron', Orbitron
// 'Oregano', Oregano
// 'Orienta', Orienta
// 'Original+Surfer', Original Surfer
// 'Oswald', Oswald
// 'Over+the+Rainbow', Over the Rainbow
// 'Overlock', Overlock
// 'Overlock+SC', Overlock SC
// 'Overpass', Overpass
// 'Overpass+Mono', Overpass Mono
// 'Ovo', Ovo
// 'Oxygen', Oxygen
// 'Oxygen+Mono', Oxygen Mono
// 'PT+Mono', PT Mono
// 'PT+Sans', PT Sans
// 'PT+Sans+Caption', PT Sans Caption
// 'PT+Sans+Narrow', PT Sans Narrow
// 'PT+Serif', PT Serif
// 'PT+Serif+Caption', PT Serif Caption
// 'Pacifico', Pacifico
// 'Padauk', Padauk
// 'Palanquin', Palanquin
// 'Palanquin+Dark', Palanquin Dark
// 'Pangolin', Pangolin
// 'Paprika', Paprika
// 'Parisienne', Parisienne
// 'Passero+One', Passero One
// 'Passion+One', Passion One
// 'Pathway+Gothic+One', Pathway Gothic One
// 'Patrick+Hand', Patrick Hand
// 'Patrick+Hand+SC', Patrick Hand SC
// 'Pattaya', Pattaya
// 'Patua+One', Patua One
// 'Pavanam', Pavanam
// 'Paytone+One', Paytone One
// 'Peddana', Peddana
// 'Peralta', Peralta
// 'Permanent+Marker', Permanent Marker
// 'Petit+Formal+Script', Petit Formal Script
// 'Petrona', Petrona
// 'Philosopher', Philosopher
// 'Piedra', Piedra
// 'Pinyon+Script', Pinyon Script
// 'Pirata+One', Pirata One
// 'Plaster', Plaster
// 'Play', Play
// 'Playball', Playball
// 'Playfair+Display', Playfair Display
// 'Playfair+Display+SC', Playfair Display SC
// 'Podkova', Podkova
// 'Poiret+One', Poiret One
// 'Poller+One', Poller One
// 'Poly', Poly
// 'Pompiere', Pompiere
// 'Pontano+Sans', Pontano Sans
// 'Poppins', Poppins
// 'Port+Lligat+Sans', Port Lligat Sans
// 'Port+Lligat+Slab', Port Lligat Slab
// 'Pragati+Narrow', Pragati Narrow
// 'Prata', Prata
// 'Preahvihear', Preahvihear
// 'Press+Start+2P', Press Start 2P
// 'Pridi', Pridi
// 'Princess+Sofia', Princess Sofia
// 'Prociono', Prociono
// 'Prompt', Prompt
// 'Prosto+One', Prosto One
// 'Proza+Libre', Proza Libre
// 'Puritan', Puritan
// 'Purple+Purse', Purple Purse
// 'Quando', Quando
// 'Quantico', Quantico
// 'Quattrocento', Quattrocento
// 'Quattrocento+Sans', Quattrocento Sans
// 'Questrial', Questrial
// 'Quicksand', Quicksand
// 'Quintessential', Quintessential
// 'Qwigley', Qwigley
// 'Racing+Sans+One', Racing Sans One
// 'Radley', Radley
// 'Rajdhani', Rajdhani
// 'Rakkas', Rakkas
// 'Raleway', Raleway
// 'Raleway+Dots', Raleway Dots
// 'Ramabhadra', Ramabhadra
// 'Ramaraja', Ramaraja
// 'Rambla', Rambla
// 'Rammetto+One', Rammetto One
// 'Ranchers', Ranchers
// 'Rancho', Rancho
// 'Ranga', Ranga
// 'Rasa', Rasa
// 'Rationale', Rationale
// 'Ravi+Prakash', Ravi Prakash
// 'Redressed', Redressed
// 'Reem+Kufi', Reem Kufi
// 'Reenie+Beanie', Reenie Beanie
// 'Revalia', Revalia
// 'Rhodium+Libre', Rhodium Libre
// 'Ribeye', Ribeye
// 'Ribeye+Marrow', Ribeye Marrow
// 'Righteous', Righteous
// 'Risque', Risque
// 'Roboto', Roboto
// 'Roboto+Condensed', Roboto Condensed
// 'Roboto+Mono', Roboto Mono
// 'Roboto+Slab', Roboto Slab
// 'Rochester', Rochester
// 'Rock+Salt', Rock Salt
// 'Rokkitt', Rokkitt
// 'Romanesco', Romanesco
// 'Ropa+Sans', Ropa Sans
// 'Rosario', Rosario
// 'Rosarivo', Rosarivo
// 'Rouge+Script', Rouge Script
// 'Rozha+One', Rozha One
// 'Rubik', Rubik
// 'Rubik+Mono+One', Rubik Mono One
// 'Ruda', Ruda
// 'Rufina', Rufina
// 'Ruge+Boogie', Ruge Boogie
// 'Ruluko', Ruluko
// 'Rum+Raisin', Rum Raisin
// 'Ruslan+Display', Ruslan Display
// 'Russo+One', Russo One
// 'Ruthie', Ruthie
// 'Rye', Rye
// 'Sacramento', Sacramento
// 'Sahitya', Sahitya
// 'Sail', Sail
// 'Saira', Saira
// 'Saira+Condensed', Saira Condensed
// 'Saira+Extra+Condensed', Saira Extra Condensed
// 'Saira+Semi+Condensed', Saira Semi Condensed
// 'Salsa', Salsa
// 'Sanchez', Sanchez
// 'Sancreek', Sancreek
// 'Sansita', Sansita
// 'Sarala', Sarala
// 'Sarina', Sarina
// 'Sarpanch', Sarpanch
// 'Satisfy', Satisfy
// 'Scada', Scada
// 'Scheherazade', Scheherazade
// 'Schoolbell', Schoolbell
// 'Scope+One', Scope One
// 'Seaweed+Script', Seaweed Script
// 'Secular+One', Secular One
// 'Sedgwick+Ave', Sedgwick Ave
// 'Sedgwick+Ave+Display', Sedgwick Ave Display
// 'Sevillana', Sevillana
// 'Seymour+One', Seymour One
// 'Shadows+Into+Light', Shadows Into Light
// 'Shadows+Into+Light+Two', Shadows Into Light Two
// 'Shanti', Shanti
// 'Share', Share
// 'Share+Tech', Share Tech
// 'Share+Tech+Mono', Share Tech Mono
// 'Shojumaru', Shojumaru
// 'Short+Stack', Short Stack
// 'Shrikhand', Shrikhand
// 'Siemreap', Siemreap
// 'Sigmar+One', Sigmar One
// 'Signika', Signika
// 'Signika+Negative', Signika Negative
// 'Simonetta', Simonetta
// 'Sintony', Sintony
// 'Sirin+Stencil', Sirin Stencil
// 'Six+Caps', Six Caps
// 'Skranji', Skranji
// 'Slabo+13px', Slabo 13px
// 'Slabo+27px', Slabo 27px
// 'Slackey', Slackey
// 'Smokum', Smokum
// 'Smythe', Smythe
// 'Sniglet', Sniglet
// 'Snippet', Snippet
// 'Snowburst+One', Snowburst One
// 'Sofadi+One', Sofadi One
// 'Sofia', Sofia
// 'Sonsie+One', Sonsie One
// 'Sorts+Mill+Goudy', Sorts Mill Goudy
// 'Source+Code+Pro', Source Code Pro
// 'Source+Sans+Pro', Source Sans Pro
// 'Source+Serif+Pro', Source Serif Pro
// 'Space+Mono', Space Mono
// 'Special+Elite', Special Elite
// 'Spectral', Spectral
// 'Spicy+Rice', Spicy Rice
// 'Spinnaker', Spinnaker
// 'Spirax', Spirax
// 'Squada+One', Squada One
// 'Sree+Krushnadevaraya', Sree Krushnadevaraya
// 'Sriracha', Sriracha
// 'Stalemate', Stalemate
// 'Stalinist+One', Stalinist One
// 'Stardos+Stencil', Stardos Stencil
// 'Stint+Ultra+Condensed', Stint Ultra Condensed
// 'Stint+Ultra+Expanded', Stint Ultra Expanded
// 'Stoke', Stoke
// 'Strait', Strait
// 'Sue+Ellen+Francisco', Sue Ellen Francisco
// 'Suez+One', Suez One
// 'Sumana', Sumana
// 'Sunshiney', Sunshiney
// 'Supermercado+One', Supermercado One
// 'Sura', Sura
// 'Suranna', Suranna
// 'Suravaram', Suravaram
// 'Suwannaphum', Suwannaphum
// 'Swanky+and+Moo+Moo', Swanky and Moo Moo
// 'Syncopate', Syncopate
// 'Tangerine', Tangerine
// 'Taprom', Taprom
// 'Tauri', Tauri
// 'Taviraj', Taviraj
// 'Teko', Teko
// 'Telex', Telex
// 'Tenali+Ramakrishna', Tenali Ramakrishna
// 'Tenor+Sans', Tenor Sans
// 'Text+Me+One', Text Me One
// 'The+Girl+Next+Door', The Girl Next Door
// 'Tienne', Tienne
// 'Tillana', Tillana
// 'Timmana', Timmana
// 'Tinos', Tinos
// 'Titan+One', Titan One
// 'Titillium+Web', Titillium Web
// 'Trade+Winds', Trade Winds
// 'Trirong', Trirong
// 'Trocchi', Trocchi
// 'Trochut', Trochut
// 'Trykker', Trykker
// 'Tulpen+One', Tulpen One
// 'Ubuntu', Ubuntu
// 'Ubuntu+Condensed', Ubuntu Condensed
// 'Ubuntu+Mono', Ubuntu Mono
// 'Ultra', Ultra
// 'Uncial+Antiqua', Uncial Antiqua
// 'Underdog', Underdog
// 'Unica+One', Unica One
// 'UnifrakturCook', UnifrakturCook
// 'UnifrakturMaguntia', UnifrakturMaguntia
// 'Unkempt', Unkempt
// 'Unlock', Unlock
// 'Unna', Unna
// 'VT323', VT323
// 'Vampiro+One', Vampiro One
// 'Varela', Varela
// 'Varela+Round', Varela Round
// 'Vast+Shadow', Vast Shadow
// 'Vesper+Libre', Vesper Libre
// 'Vibur', Vibur
// 'Vidaloka', Vidaloka
// 'Viga', Viga
// 'Voces', Voces
// 'Volkhov', Volkhov
// 'Vollkorn', Vollkorn
// 'Voltaire', Voltaire
// 'Waiting+for+the+Sunrise', Waiting; for the Sunrise
// 'Wallpoet', Wallpoet  {
//   {
//     {
//       {
//         {
//           'Walter+Turncoat', Walter;
//         }
//       }
//     }
//   }
// } Turncoat;
// 'Warnes', Warnes;
// 'Wellfleet', Wellfleet;
// 'Wendy+One', Wendy; One;
// 'Wire+One', Wire; One;
// 'Work+Sans', Work; Sans;
// 'Yanone+Kaffeesatz', Yanone; Kaffeesatz;
// 'Yantramanav', Yantramanav;
// 'Yatra+One', Yatra; One;
// 'Yellowtail', Yellowtail;
// 'Yeseva+One', Yeseva; One;
// 'Yesteryear', Yesteryear;
// 'Yrsa', Yrsa;
// 'Zeyada', Zeyada;
// 'Zilla+Slab', Zilla; Slab;
// 'Zilla+Slab+Highlight', Zilla; Slab; Highlight
//   < /select>;


/***/ }),

/***/ "./src/app/editor/panel/panel.component.html":
/*!***************************************************!*\
  !*** ./src/app/editor/panel/panel.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"element\" class=\"drag-panel\">\r\n    <form>\r\n        <div class=\"form-group\">\r\n\r\n\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\" id=\"\">{{element.zIndex}}</span>\r\n                </div>\r\n                <div class=\"btn-group\">\r\n                    <button (click)=\"moveIndex(-1)\" class=\"btn btn-secondary\"><i class=\"fas fa-level-down-alt\"></i></button>\r\n                    <button (click)=\"moveIndex(1)\" class=\"btn btn-secondary\"><i class=\"fas fa-level-up-alt\"></i></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"element.type === 'text'\" class=\"t-bar\">\r\n            <div class=\"form-group\">\r\n                <label for=\"fontName\">{{ \"PANEL.FONTNAME\" | translate }}:</label>\r\n                <select class=\"form-control\" name=\"fontNameTxt\" [(ngModel)]=\"element.font\" (change)=\"selectFont($event)\">\r\n                    <option *ngFor=\"let c of fonts\" [ngValue]=\"c\">{{c}}</option>\r\n                </select>\r\n                <small id=\"fontHelp\" class=\"form-text text-muted\">{{ \"PANEL.FONTNAME_HELP\" | translate }}</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"fontName\">{{ \"PANEL.FONTSIZE\" | translate }}:</label>\r\n                <ng5-slider [(value)]=\"element.fontSize\" [options]=\"sliderOptions\"></ng5-slider>\r\n                <small id=\"fontSize\" class=\"form-text text-muted\">{{ \"PANEL.FONTSIZE_HELP\" | translate }}</small>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"fontColor\">{{ \"PANEL.FONTCOLOR\" | translate }}:</label>\r\n                <input class=\"form-control\" name=\"fontColorTxt\" [cpPosition]=\"'left'\" [(colorPicker)]=\"element.color\" [style.background]=\"element.color\"\r\n                />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"fontColor\">{{ \"PANEL.POSITIONX\" | translate }}:</label>\r\n                <input class=\"form-control\" name=\"position_x\" [(ngModel)]=\"element.position.x\" />\r\n\r\n                <label for=\"fontColor\">{{ \"PANEL.POSITIONY\" | translate }}:</label>\r\n                <input class=\"form-control\" name=\"position_y\" [(ngModel)]=\"element.position.y\" />\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/editor/panel/panel.component.scss":
/*!***************************************************!*\
  !*** ./src/app/editor/panel/panel.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drag-panel {\n  background-color: #faf3fa;\n  border: 1px solid #00cfff;\n  width: 300px;\n  height: 600px;\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3BhbmVsL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcZWRpdG9yXFxwYW5lbFxccGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXRvci9wYW5lbC9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFHSSwwQkFBeUI7RUFDekIsMEJDQ2dCO0VEQWhCLGFBQVk7RUFDWixjQUFZO0VBQ1osY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9wYW5lbC9wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3Nhc3MvX3ZhcmlhYmxlcyc7XHJcblxyXG5cclxuLmRyYWctcGFuZWxcclxue1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmM2ZhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJsdWU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6NjAwcHg7ICAgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59IiwiXHJcbiRjb2xvci1ncmF5OiAjZTNlNGU1O1xyXG4kY29sb3ItZGFya2JsdWUxOiAjMTYyNDMzO1xyXG4kY29sb3ItZGFya2JsdWUyOiAjMmE0NTYzO1xyXG4kY29sb3ItbGlnaHRibHVlMTogIzI2NDM1NjtcclxuJGNvbG9yLWxpZ2h0Ymx1ZTI6ICMzYzczOTk7XHJcbiRjb2xvci1vcmFuZ2U6ICNmYzY2MDA7XHJcbiRjb2xvci1jeWFuOiAjMDBmZmY2O1xyXG4kY29sb3ItYmx1ZTogIzAwY2ZmZjtcclxuJGNvbG9yLWdyZWVuOiAjOTZmZjAwO1xyXG4kY29sb3IteWVsbG93OiAjZmZmZjAwO1xyXG4kY29sb3ItcHVycGxlOiAjZmYwMGRiO1xyXG5cclxuIFxyXG5cclxuICJdfQ== */"

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
/* harmony import */ var _fonts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts.service */ "./src/app/editor/fonts.service.ts");




var PanelComponent = /** @class */ (function () {
    function PanelComponent(_ngZone, sanitizer, fontService) {
        this._ngZone = _ngZone;
        this.sanitizer = sanitizer;
        this.fontService = fontService;
        this.sliderOptions = {
            floor: 0,
            ceil: 250
        };
        this.sizes = [10, 12, 14, 16, 18, 20, 22, 24, 40, 58, 72, 120];
    }
    PanelComponent.prototype.selectFont = function (event) {
        window.WebFont.load({
            google: {
                families: [this.element.font]
            }
        });
    };
    PanelComponent.prototype.moveIndex = function (delta) {
        this.element.zIndex = this.element.zIndex + delta;
    };
    PanelComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.fontService.loadFontsForLanguage()];
                    case 1:
                        _a.fonts = _b.sent();
                        if (this.element) {
                            this.positionProjection = { 'top': this.element.position.y + 'px', 'left': (this.element.position.x * 1) + 300 + 'px' };
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PanelComponent.prototype, "element", void 0);
    PanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/editor/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.scss */ "./src/app/editor/panel/panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _fonts_service__WEBPACK_IMPORTED_MODULE_3__["FontsService"]])
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
    }
    SelectionService.prototype.unselect = function () {
        var all = document.querySelectorAll('.element');
        for (var i = 0; i < all.length; i++) {
            all[i].className = all[i].className.replace('selected', '');
        }
        this.elements.forEach(function (item) { return item.selected = false; });
    };
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
        this.elements.forEach(function (elem, i) {
            if (!elem.zIndex) {
                elem.zIndex = 1000 + i;
            }
        });
    };
    SelectionService.prototype.reset = function () {
        this.elements = [];
    };
    SelectionService.prototype.newBlockElement = function (newElement) {
        this.elements.push(newElement);
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

module.exports = "<ng-template #toolbar let-item=\"editor\">\n  <div class=\"btn-group\" data-toggle=\"buttons\">\n    <input [(colorPicker)]=\"editor.color\" (colorPickerChange)=\"setColor($event)\" class=\"btn-tool color-tool\" [style.background]=\"editor.color\"\n    />\n    <input [(colorPicker)]=\"editor.bgColor\" (colorPickerChange)=\"setBgColor($event)\" class=\"btn-tool color-tool\" [style.background]=\"editor.bgColor\"\n    />\n  </div>\n</ng-template>\n\n<div *ngIf=\"item\" style=\"position: relative;\">\n  <app-slide-header title=\"NAVBAR.SLIDES\" [toolbar]=\"toolbar\" closeFn=\"true\" mode=\"inline\" [enableSave]='true' (save)=\"saveProxy($event)\"\n    iconClass=\"far fa-object-group\" className=\"lemon-cat\" (closed)=\"closeSlider($event)\"></app-slide-header>\n  <div class=\"row pt50\">\n    <div class=\"col-3\">\n      <app-add (selected)=\"addElement($event)\"></app-add>\n      <app-panel [(element)]=\"selectedElement\"></app-panel>\n    </div>\n    <div class=\"col-9\">\n      <div class=\"row slide-editor\" id=\"worksapce\" style=\"direction: ltr;\">\n\n        <app-rulers></app-rulers><br />\n        <div class=\"editor-plate small\" [ngStyle]=\"{'background-color': item.bgColor }\">\n\n          <app-element *ngFor=\"let el of selectionService.elements\" (selected)=\"designerFocus($event,el)\" (removed)=\"removeBlock(el)\"\n            [element]=\"el\"></app-element>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n<app-finder [active]=\"finderActive\" [selector]=\"addToList\"></app-finder>\n"

/***/ }),

/***/ "./src/app/editor/slide-editor/slide-editor.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/editor/slide-editor/slide-editor.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-editor {\n  position: absolute;\n  left: 10%; }\n  .slide-editor .editor-plate {\n    position: relative;\n    top: 15px;\n    left: 15px; }\n  .slide-editor .small {\n    width: 800px;\n    height: 600px;\n    overflow: hidden; }\n  .slide-editor .small-portrait {\n    width: 600px;\n    height: 800px; }\n  .toolbar-end {\n  float: left; }\n  .selected, .true {\n  border: 1px dotted #cc66dd !important; }\n  .layers {\n  z-index: 2000;\n  background-color: gray;\n  position: absolute;\n  width: 300px;\n  height: 400px; }\n  .click-back {\n  z-index: 0;\n  position: absolute;\n  background-color: darkviolet;\n  width: 100%;\n  height: 100%; }\n  .btn-tool {\n  color: white;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  float: right;\n  width: 52px;\n  height: 52px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3NsaWRlLWVkaXRvci9DOlxccHJvamVjdHNcXHNpZ24tbmF0dXJlXFx3ZWIvc3JjXFxhcHBcXGVkaXRvclxcc2xpZGUtZWRpdG9yXFxzbGlkZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFpQkksbUJBQWtCO0VBQ2xCLFVBQVMsRUFDWjtFQW5CRDtJQUlRLG1CQUFrQjtJQUNsQixVQUFTO0lBQ1QsV0FBVSxFQUNiO0VBUEw7SUFTUSxhQUFZO0lBQ1osY0FBYTtJQUNiLGlCQUFnQixFQUNuQjtFQVpMO0lBY1EsYUFBWTtJQUNaLGNBQWEsRUFDaEI7RUFNTDtFQUNJLFlBQVcsRUFDZDtFQUtEO0VBQ0ksc0NBQW9DLEVBQ3ZDO0VBRUQ7RUFDSSxjQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osY0FBYSxFQUNoQjtFQUlEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQjtFQUNsQiw2QkFBNEI7RUFDNUIsWUFBVztFQUNYLGFBQVksRUFDZjtFQUVEO0VBRUksYUFBWTtFQUNaLGdCQUFlO0VBQ2QsdUJBQXFCO0VBQ3RCLGFBQVk7RUFDWixZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlLEVBRWxCIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL3NsaWRlLWVkaXRvci9zbGlkZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGUtZWRpdG9ye1xyXG5cclxuICAgIC5lZGl0b3ItcGxhdGVcclxuICAgIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc21hbGx7XHJcbiAgICAgICAgd2lkdGg6IDgwMHB4OyAgIFxyXG4gICAgICAgIGhlaWdodDogNjAwcHg7ICBcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLnNtYWxsLXBvcnRyYWl0e1xyXG4gICAgICAgIHdpZHRoOiA2MDBweDsgICBcclxuICAgICAgICBoZWlnaHQ6IDgwMHB4OyAgXHJcbiAgICB9XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbn1cclxuXHJcbiBcclxuLnRvb2xiYXItZW5ke1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiN3b3Jrc2FwY2V7XHJcbiAgICAvL3BhZGRpbmc6MzBweDtcclxufVxyXG4uc2VsZWN0ZWQsLnRydWV7XHJcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgI2NjNjZkZCFpbXBvcnRhbnQ7XHJcbn1cclxuIFxyXG4ubGF5ZXJze1xyXG4gICAgei1pbmRleDoyMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbiBcclxuIFxyXG4uY2xpY2stYmFja3tcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrdmlvbGV0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5idG4tdG9vbFxyXG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgYm9yZGVyOjFweCBzb2xpZCAjYmJiO1xyXG4gICAgZmxvYXQ6IHJpZ2h0OyAgICBcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgaGVpZ2h0OiA1MnB4OyAgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbn1cclxuIl19 */"

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









var SlideEditorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SlideEditorComponent, _super);
    function SlideEditorComponent(_ngZone, translateService, nameService, selectionService, fontService, router, route) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.nameService = nameService;
        _this.selectionService = selectionService;
        _this.fontService = fontService;
        _this.router = router;
        _this.route = route;
        _this.tabs = [{ name: 'SLIDES.DESIGNER', selected: true }, { name: 'SLIDES.SOURCE', selected: false }];
        _this.finderActive = 'closing';
        _this.editor = {
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
            _this.finderActive = 'closing';
        };
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_4__["SlidesDataController"];
        _this.addToList.bind(_this);
        return _this;
    }
    SlideEditorComponent.prototype.setColor = function (color) {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.color = color;
                return [2 /*return*/];
            });
        }); });
    };
    SlideEditorComponent.prototype.setBgColor = function (color) {
        var _this = this;
        this._ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.item.bgColor = color;
                return [2 /*return*/];
            });
        }); });
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
        this.item.elements = this.selectionService.elements;
        if (this.item._id) {
            this.updateItem();
        }
        else {
            this.createItem();
        }
    };
    SlideEditorComponent.prototype.beforeUpdate = function (item) {
        item.Screen = { width: 800, height: 600 };
    };
    SlideEditorComponent.prototype.closeSlider = function () {
        this.router.navigate(['/dashboard/library/slide']);
        this.displayModalNew = 'closing';
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
                            this.editor.bgColor = this.item.bgColor;
                            this.editor.color = this.item.color;
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
    SlideEditorComponent.prototype.addElement = function (type) {
        switch (type) {
            case 'text':
                var textBlock = {
                    type: 'text',
                    position: { x: 100, y: 100 }, class: 'h1',
                    font: this.fontService.getFonts()[0],
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
                this.selectionService.elements.push(block);
                this.selectionService.focus(null, block);
                return [2 /*return*/];
            });
        });
    };
    SlideEditorComponent.prototype.removeBlock = function (block) {
        this.selectionService.remove(block);
    };
    SlideEditorComponent.prototype.designerFocus = function (event, element) {
        this.selectedElement = element;
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
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

/***/ "./src/app/library/fonts/fonts.component.html":
/*!****************************************************!*\
  !*** ./src/app/library/fonts/fonts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-lobby [items]=\"items\" [iconClass]=\"'fas fa-font'\" [mode]=\"'object'\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem($event)\"></app-lobby>\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open= {{displayModalNew}}>\n    <app-slide-header title=\"NAVBAR.FONTS\" closeFn=\"true\" iconClass=\"fas fa-images\" className=\"lemon-cat\" (closed)=\"closeSlider($event)\"></app-slide-header>\n    <div class=\"pt50\"></div>\n    <div class=\"scroller\">\n      <form *ngIf=\"item\">\n        <div class=\"form-group\">\n          <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n          <input type=\"text\" name=\"libraryName\" class=\"form-control\"   [(ngModel)]=\"item.Name\">\n          <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"embedCode\">{{ \"LIBRARY.EMBED\" | translate }}:</label>\n            <textarea id=\"embedCode\" name=\"embedCode\" class=\"form-control\" [(ngModel)]=\"item.Embed\"></textarea>\n            <small id=\"embedHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.EMBED_HELP\" | translate }}</small>\n          </div>\n\n        <div class=\"form-group\">\n          <label for=\"libraryFile\">{{ \"LIBRARY.RESOURCE\" | translate }}</label>          \n          <app-upload [item]=\"item\" (change)=\"change($event)\"></app-upload>\n        </div>\n      </form>\n    </div>\n    <button *ngIf=\"item && item._id\" class=\"btn btn-primary\" (click)=\"saveLibrary()\">{{ \"LIBRARY.UPDATE\" | translate }}</button>\n    <button *ngIf=\"!item || !item._id\" class=\"btn btn-primary\" (click)=\"createLibrary()\">{{ \"LIBRARY.CREATE\" | translate }}</button>\n    <app-slide-footer className=\"lemon-cat\"></app-slide-footer>\n  </dialog>\n</div>\n"

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

/***/ "./src/app/library/images/images.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/images/images.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-lobby *ngIf=\"items\" [items]=\"items\" mode=\"media\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem($event)\"></app-lobby>\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open= {{displayModalNew}}>\n    <app-slide-header title=\"NAVBAR.IMAGES\" iconClass=\"fas fa-images\" closeFn=\"true\" className=\"lemon-cat\" (closed)=\"closeSlider($event)\"></app-slide-header>\n    <div class=\"pt50\"></div>\n\n    <div class=\"scroller\">\n      <form *ngIf=\"item\">\n        <div class=\"form-group\">\n          <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n          <input type=\"text\" name=\"libraryName\" class=\"form-control\"  [(ngModel)]=\"item.Name\">\n          <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"libraryFile\">{{ \"LIBRARY.RESOURCE\" | translate }}</label>\n          <img *ngIf=\"item.thumb && !uploading\" [src]=\"item.thumb\" class=\"fancy-image\">\n          <p><a href=\"{{item.thumb}}\" target=\"_blank\" class=\"form-text text-muted\"><small>{{item.thumb}}</small></a></p>\n          <app-upload [item]=\"item\" (change)=\"change($event)\"></app-upload>\n          <small id=\" screenHelp \" class=\"form-text text-muted \">{{ \"LIBRARY.IMAGE_DESCRIPTION\" | translate }}</small>\n        </div>\n      </form>\n    </div>\n    <button *ngIf=\"item && item._id \" class=\"btn btn-primary \" (click)=\"saveLibrary() \">{{ \"LIBRARY.UPDATE\" | translate }}</button>\n    <button *ngIf=\"!item || !item._id \" class=\"btn btn-primary \" (click)=\"createLibrary() \">{{ \"LIBRARY.CREATE\" | translate }}</button>\n    <app-slide-footer className=\"lemon-cat\"></app-slide-footer>\n  </dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/library/images/images.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/images/images.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fancy-thumb {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n\n.fancy-image {\n  width: 100%;\n  height: 250px;\n  background-size: cover !important;\n  background-repeat: no-repeat !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9pbWFnZXMvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxsaWJyYXJ5XFxpbWFnZXNcXGltYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLE9BQU07RUFDTixRQUFPLEVBQ1Y7O0FBRUQ7RUFFSSxZQUFVO0VBQ1YsY0FBYTtFQUNiLGtDQUFnQztFQUNoQyx3Q0FBc0MsRUFDekMiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L2ltYWdlcy9pbWFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mYW5jeS10aHVtYlxyXG57ICAgXHJcbiAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uZmFuY3ktaW1hZ2Vcclxue1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIWltcG9ydGFudDsgICAgIFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

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
        _this.uploading = false;
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
    ImagesComponent.prototype.change = function (state) {
        this.uploading = state === 'start' ? true : false;
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

module.exports = "<app-slide-header title=\"NAVBAR.LIBRARY\"  mode=\"inline\" iconClass=\"fas fa-clone\" className=\"lemon-cat\"></app-slide-header>\n\n\n<ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a class=\"nav-link {{tab.selected}}\" [routerLink]=\"['/dashboard/library/', tab.alias]\" routerLinkActive=\"lemon-cat\"><i\n                class=\"{{tab.icon}}\"></i> {{tab.name | translate}}</a>\n    </li>\n</ul>\n<div style=\"padding:10px;\">\n    <router-outlet></router-outlet>\n\n</div>\n"

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
        _this.types = ['image', 'video', 'audio', 'slide', 'font'];
        _this.tabsCollection = {
            'image': {
                name: 'NAVBAR.IMAGES', icon: 'fas fa-images'
            },
            'video': {
                name: 'NAVBAR.VIDEOS', icon: 'fas fa-video'
            },
            'audio': {
                name: 'NAVBAR.AUDIO', icon: 'fas fa-music'
            },
            'slide': {
                name: 'NAVBAR.SLIDES', icon: 'far fa-object-group'
            },
            'font': {
                name: 'NAVBAR.FONTS', icon: 'fas fa-font'
            },
        };
        _this.tabs = [];
        _this.DataController = _signnature_client__WEBPACK_IMPORTED_MODULE_4__["LibraryDataController"];
        return _this;
    }
    // [{ name: 'NAVBAR.IMAGES', selected: true, alias: 'image' },
    // { name: 'NAVBAR.VIDEOS', selected: false, alias: 'video' },
    // { name: 'NAVBAR.SLIDES', selected: false, alias: 'slide' }];
    LibraryComponent.prototype.tabSelect = function (tab) {
        this.router.navigate(['/dashboard/library/', tab.alias]);
        this.tabs.forEach(function (tabItem) { return tabItem.selected = false; });
        tab.selected = true;
        this.selectedTab = tab;
    };
    LibraryComponent.prototype.filteredItems = function () {
        var _this = this;
        return this.items.filter(function (item) { return item.type === _this.selectedTab.alias; });
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
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/images.component */ "./src/app/library/images/images.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/library/videos/videos.component.ts");
/* harmony import */ var _sounds_sounds_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sounds/sounds.component */ "./src/app/library/sounds/sounds.component.ts");
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slides/slides.component */ "./src/app/library/slides/slides.component.ts");
/* harmony import */ var _library_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _editor_editor_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../editor/editor.module */ "./src/app/editor/editor.module.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/library/upload/upload.component.ts");
/* harmony import */ var _editor_slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../editor/slide-editor/slide-editor.component */ "./src/app/editor/slide-editor/slide-editor.component.ts");
/* harmony import */ var _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fonts/fonts.component */ "./src/app/library/fonts/fonts.component.ts");















var libraryRoutes = [
    {
        path: 'library', component: _library_component__WEBPACK_IMPORTED_MODULE_10__["LibraryComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'image'
            },
            { path: 'image', component: _images_images_component__WEBPACK_IMPORTED_MODULE_6__["ImagesComponent"] },
            { path: 'video', component: _videos_videos_component__WEBPACK_IMPORTED_MODULE_7__["VideosComponent"] },
            { path: 'audio', component: _sounds_sounds_component__WEBPACK_IMPORTED_MODULE_8__["SoundsComponent"] },
            { path: 'font', component: _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_14__["FontsComponent"] },
            { path: 'slide', component: _slides_slides_component__WEBPACK_IMPORTED_MODULE_9__["SlidesComponent"] },
        ]
    },
    { path: 'slides/:id', component: _editor_slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_13__["SlideEditorComponent"] },
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
            declarations: [_images_images_component__WEBPACK_IMPORTED_MODULE_6__["ImagesComponent"],
                _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_14__["FontsComponent"],
                _videos_videos_component__WEBPACK_IMPORTED_MODULE_7__["VideosComponent"], _sounds_sounds_component__WEBPACK_IMPORTED_MODULE_8__["SoundsComponent"], _slides_slides_component__WEBPACK_IMPORTED_MODULE_9__["SlidesComponent"],
                _library_component__WEBPACK_IMPORTED_MODULE_10__["LibraryComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_12__["UploadComponent"]
            ],
            providers: []
        })
    ], LibraryModule);
    return LibraryModule;
}());



/***/ }),

/***/ "./src/app/library/slides/slides.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/slides/slides.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n<app-lobby   [items]=\"items\" mode='media' (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" \n(newItem)=\"newItem($event)\" ></app-lobby>\n \n"

/***/ }),

/***/ "./src/app/library/slides/slides.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/slides/slides.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-canvas {\n  border: 1px solid #66cc66; }\n\n.h1 {\n  font-size: 24px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9zbGlkZXMvQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxsaWJyYXJ5XFxzbGlkZXNcXHNsaWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDBCQUF5QixFQUMxQjs7QUFHRDtFQUNFLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGlicmFyeS9zbGlkZXMvc2xpZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlLWNhbnZhc3tcclxuICAvL3Bvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNjZjYzY2O1xyXG59XHJcblxyXG5cclxuLmgxe1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

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






var SlidesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SlidesComponent, _super);
    function SlidesComponent(_ngZone, translateService, router) {
        var _this = _super.call(this, _ngZone, translateService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.router = router;
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
    SlidesComponent.prototype.editItem = function (item) {
        // Absolute route - Goes up to root level with route params
        this.router.navigate(['/dashboard/slides/', item._id]);
    };
    SlidesComponent.prototype.newItem = function () {
        this.router.navigate(['/dashboard/slides/', 0]);
    };
    SlidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides',
            template: __webpack_require__(/*! ./slides.component.html */ "./src/app/library/slides/slides.component.html"),
            styles: [__webpack_require__(/*! ./slides.component.scss */ "./src/app/library/slides/slides.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

module.exports = "<app-lobby [items]=\"items\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem($event)\" ></app-lobby>\n\n<div class=\"slider-container {{displayModalNew}} shadow \">\n<dialog open={{displayModalNew}}>\n<a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\" ></i></a>\n<div class=\"scroller\">\n <form *ngIf=\"item\">\n  <div class=\"form-group\">\n    <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n    <input type=\"text\" name=\"libraryName\"  class=\"form-control\"    [(ngModel)]=\"item.Name\">\n    <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"libraryFile\">{{ \"LIBRARY.RESOURCE\" | translate }}</label>\n<app-upload [item]=\"item\"></app-upload>\n</div>\n   \n</form>\n </div>\n  <button   *ngIf=\"item && item._id\" class=\"btn btn-primary\" (click)=\"saveLibrary()\">{{ \"LIBRARY.UPDATE\" | translate }}</button>\n  <button   *ngIf=\"!item || !item._id\" class=\"btn btn-primary\" (click)=\"createLibrary()\">{{ \"LIBRARY.CREATE\" | translate }}</button>\n</dialog>\n</div>\n "

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

module.exports = "<app-lobby [items]=\"items\" mode=\"media\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem($event)\"></app-lobby>\n\n<div class=\"slider-container {{displayModalNew}} shadow \">\n  <dialog open= {{displayModalNew}}>\n    <app-slide-header title=\"NAVBAR.VIDEOS\" closeFn=\"true\" iconClass=\"fas fa-video\" className=\"lemon-cat\" (closed)=\"closeSlider($event)\"></app-slide-header>\n    <div class=\"pt50\"></div>\n    <div class=\"scroller\">\n      <form *ngIf=\"item\">\n        <div class=\"form-group\">\n          <label for=\"libraryName\">{{ \"LIBRARY.NAME\" | translate }}:</label>\n          <input type=\"text\" name=\"libraryName\" class=\"form-control\"   [(ngModel)]=\"item.Name\">\n          <small id=\"nameHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.NAME_HELP\" | translate }}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"embedCode\">{{ \"LIBRARY.EMBED\" | translate }}:</label>\n          <textarea id=\"embedCode\" name=\"embedCode\" class=\"form-control\" [(ngModel)]=\"item.Embed\"></textarea>\n          <small id=\"embedHelp\" class=\"form-text text-muted\">{{ \"LIBRARY.EMBED_HELP\" | translate }}</small>\n        </div>\n      </form>\n    </div>\n    <button *ngIf=\"item && item._id\" class=\"btn btn-primary\" (click)=\"saveLibrary()\">{{ \"LIBRARY.UPDATE\" | translate }}</button>\n    <button *ngIf=\"!item || !item._id\" class=\"btn btn-primary\" (click)=\"createLibrary()\">{{ \"LIBRARY.CREATE\" | translate }}</button>\n    <app-slide-footer className=\"lemon-cat\"></app-slide-footer>\n\n  </dialog>\n</div>\n"

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

/***/ "./src/app/playlists/playlist.item/playlist.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/playlists/playlist.item/playlist.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dialog open style=\"position: relative;\" class=\"playlist\">\n\n  <app-slide-header title=\"NAVBAR.PLAYLISTS\" mode=\"inline\" [enableSave]='true' (save)=\"saveProxy($event)\" iconClass=\"fas fa-step-forward\"\n    className=\"purple-cat\" [closeFn]=\"true\" (closed)=\"closeSlider($event)\"></app-slide-header>\n  <form *ngIf=\"item\" class=\"pad\">\n    <app-changes [item]=\"item\"></app-changes>\n\n\n    <div class=\"form-group\">\n      <label for=\"itemName\">{{ \"PLAYLISTS.NAME\" | translate }}:</label>\n      <input type=\"text\" name=\"itemName\" class=\"form-control\" id=\"itemName\" [(ngModel)]=\"item.Name\">\n      <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"PLAYLISTS.NAME_HELP\" | translate }}</small>\n    </div>\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item {{tab.class}}\" *ngFor=\"let tab of tabs\">\n        <a class=\"nav-link\" (click)=\"tabSelect(tab)\">{{tab.name | translate}}</a>\n      </li>\n    </ul>\n    <div *ngIf=\"tabs[0].selected\">\n      <div class=\"form-group\" class=\"sortable\">\n        <div class=\"shadow btn-long\" (click)=\"finder()\"><i class=\"fas fa-plus-circle\"></i> {{\"PLAYLISTS.ADDTOLIST\" | translate}}</div>\n\n        <div *ngIf=\"playlistMode==='normal'\" [class]=\"playlistMode\">\n\n          <div class=\"horizontal-scroller purple-cat\" dragula=\"DRAGULA_FACTS\" [(dragulaModel)]=\"item.list\" (dropModel)=\"drop($event)\" style=\"direction: ltr;\">\n            <div *ngFor=\"let listitem of item.list; let i = index\" class=\"slot shadow\" [ngStyle]=\"{'left': (i)*260 + 'px', 'top':'20px'}\">\n              <app-lobby-item *ngIf=\"listitem\" [item]=\"listitem\"></app-lobby-item>\n              <ul class=\"sqr-toolbar btn-group direction\" role=\"group\">\n                <li>\n                  <button class=\"btn btn-secondary btn-md btn-danger\" (click)=\"removeListItem(item);\"> <i class=\"fas fa-trash\"></i>\n                  </button>\n                </li>\n                <li>\n                  <input type=\"number\" [(ngModel)]=\"listitem.duration\" name=\"duration\">\n                </li>\n                <li>\n                  <select [(ngModel)]=\"listitem.transition\" name=\"transition\">\n                    <option *ngFor=\"let c of effects\" [ngValue]=\"c\">{{c}}</option>\n                  </select>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"tabs[1].selected\">\n      <div class=\"form-group shadow\">\n        <div class=\"btn-long\" (click)=\"schedule()\"><i class=\"fas fa-plus-circle\"></i> {{\"PLAYLISTS.ADDTIME\" | translate}}</div>\n        <div id=\"timeSlots\" *ngIf=\"editTime && selectedTimeEl\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"itemName\">{{ \"PLAYLISTS.SCHEDULE\" | translate }}:</label>\n              <select [(ngModel)]=\"selectedTimeEl.timeslot\" name=\"timeSlotOptions\" [compareWith]=\"compareFnId\" class=\"form-control\">\n                <option *ngFor=\"let c of timeSlotOptions\" [ngValue]=\"c\">{{c.name | translate}}</option>\n              </select>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"ScreenGroup\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n              <select [(ngModel)]=\"selectedTimeEl.screenGroup\" name=\"ScreenGroup\" [compareWith]=\"compareFn_id\" class=\"form-control\">\n                <option *ngFor=\"let c of groups\" [ngValue]=\"c\">{{c.Name}}</option>\n              </select>\n            </div>\n            <button class=\"btn btn-primary\" (click)=\"addTimeSlot()\">{{ \"PLAYLISTS.SETTIME\" | translate}}</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"container\">\n\n        <div *ngFor=\"let timeslotEl of item.TimeSlots\" class=\"sqr short shadow\">\n          <label>{{timeslotEl.timeslot.name | translate}}</label>\n          <small>{{timeslotEl.screenGroup.Name}}</small>\n          <ul class=\"sqr-toolbar\">\n            <li>\n              <button class=\"btn btn-md btn-danger\" (click)=\"deleteTimeslot(timeslotEl);\"> <i class=\"fas fa-trash\"></i>\n              </button>\n            </li>\n            <li>\n              <button class=\"btn btn-md btn-primary\" (click)=\"editTimeslot(timeslotEl);\"> <i class=\"fas fa-edit\"></i> </button>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <hr />\n\n  </form>\n\n  <app-slide-footer className=\"purple-cat\"></app-slide-footer>\n</dialog>\n\n\n\n\n\n<app-finder [types]=\"['image','video','slide']\" [active]=\"finderActive\" [selector]=\"addToList\"></app-finder>\n"

/***/ }),

/***/ "./src/app/playlists/playlist.item/playlist.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/playlists/playlist.item/playlist.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad {\n  padding-top: 20px;\n  padding-right: 30px;\n  padding-left: 30px; }\n\n.short {\n  height: 90px; }\n\n.box-container {\n  position: relative;\n  height: 150px;\n  padding: 45px 0; }\n\n.box-swap {\n  position: absolute;\n  text-align: center;\n  width: 150px;\n  height: 60px;\n  padding: 15px 35px;\n  line-height: 30px; }\n\n.box-swap.static-block {\n    transition: all 0.3s ease-out; }\n\n/* in-flight clone */\n\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  pointer-events: none; }\n\n/* high-performance display:none; helper */\n\n.gu-hide {\n  left: -9999px !important; }\n\n/* added to mirrorContainer (default = body) while dragging */\n\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important; }\n\n/* added to the source element while its mirror is dragged */\n\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20); }\n\n.horizontal-scroller {\n  margin-right: 4px;\n  margin-left: 4px;\n  width: 100%;\n  overflow-y: hidden;\n  overflow-x: auto;\n  direction: ltr;\n  position: relative;\n  height: 300px; }\n\n.slot {\n  position: absolute;\n  width: 250px;\n  height: 250px; }\n\n.slot .sqr-toolbar {\n    width: 240px;\n    visibility: visible; }\n\n.slot .sqr-toolbar input {\n      width: 50px;\n      height: 24px; }\n\n.slot .sqr-toolbar select {\n      width: 100px;\n      height: 24px; }\n\n.canvas-bg {\n  position: absolute;\n  z-index: 0; }\n\n.sqr-btn {\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr-btn .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn:hover .sqr-toolbar input, .sqr:hover .sqr-toolbar input {\n      width: 50px;\n      height: 30px; }\n\n.sqr-btn:hover .sqr-toolbar select, .sqr:hover .sqr-toolbar select {\n      height: 30px; }\n\n.fancy-thumb {\n  z-index: 1000; }\n\n.extended-padding {\n  padding: 50px; }\n\n.extended {\n  overflow: hidden;\n  padding: 30px;\n  height: 400px;\n  background-color: white;\n  position: absolute;\n  top: 200px;\n  right: 50px;\n  left: 50px;\n  border: 1px solid red; }\n\n.extended .topper {\n    pointer-events: none;\n    z-index: 0;\n    height: 65px;\n    opacity: 0.8;\n    position: absolute;\n    padding-top: 30px;\n    top: -30px;\n    left: 0;\n    right: 0; }\n\n.extended .topper .icon {\n      margin: 8px;\n      vertical-align: top; }\n\n.extended .topper h4 {\n      display: inline;\n      vertical-align: top; }\n\n.extended .topper .bar-icon {\n      margin-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0Lml0ZW0vQzpcXHByb2plY3RzXFxzaWduLW5hdHVyZVxcd2ViL3NyY1xcYXBwXFxwbGF5bGlzdHNcXHBsYXlsaXN0Lml0ZW1cXHBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDSyxhQUFXLEVBQ2Q7O0FBRUQ7RUFDRyxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixrQkFBaUIsRUFLbEI7O0FBWEQ7SUFTSSw4QkFBNkIsRUFDOUI7O0FBSUgscUJBQXFCOztBQUN2QjtFQUNJLDJCQUEwQjtFQUMxQixxQkFBb0I7RUFDcEIseUJBQXdCO0VBQ3hCLGFBQVk7RUFDWixrRUFBaUU7RUFDakUsMEJBQXlCO0VBQ3pCLHFCQUFvQixFQUNyQjs7QUFDRCwyQ0FBMkM7O0FBQzNDO0VBQ0UseUJBQXdCLEVBQ3pCOztBQUNELDhEQUE4RDs7QUFDOUQ7RUFDRSxxQ0FBb0M7RUFDcEMsa0NBQWlDO0VBQ2pDLGlDQUFnQztFQUNoQyw2QkFBNEIsRUFDN0I7O0FBQ0QsNkRBQTZEOztBQUM3RDtFQUNFLGFBQVk7RUFDWixrRUFBaUU7RUFDakUsMEJBQXlCLEVBQzFCOztBQUNIO0VBQ0Usa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixZQUFXO0VBRVgsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixlQUFjO0VBRWQsbUJBQWtCO0VBQ2xCLGNBQWEsRUFDZDs7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osY0FBYSxFQU9oQjs7QUFWRDtJQUtNLGFBQVk7SUFDWixvQkFBbUIsRUFHdEI7O0FBVEg7TUFPYSxZQUFXO01BQUMsYUFBVyxFQUFHOztBQVB2QztNQVFjLGFBQVk7TUFBRSxhQUFZLEVBQUc7O0FBSTNDO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVUsRUFDWDs7QUFHQztFQUlFLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHVCQUFzQixFQUN6Qjs7QUFQQztJQUVFLG9CQUFtQixFQUNsQjs7QUFLTDtFQUNJLFdBQVUsRUFNYjs7QUFQRDtJQUdRLG9CQUFtQixFQUd0Qjs7QUFOTDtNQUllLFlBQVc7TUFBQyxhQUFXLEVBQUc7O0FBSnpDO01BS2lCLGFBQVksRUFBRzs7QUFHaEM7RUFFRSxjQUFZLEVBQ2I7O0FBR0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxpQkFBZ0I7RUFFaEIsY0FBYTtFQUNiLGNBQWE7RUFDYix3QkFBdUI7RUFFdkIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFXO0VBQ1gsV0FBVTtFQUNWLHNCQUFxQixFQXlCdEI7O0FBcENEO0lBY0kscUJBQW9CO0lBQ3BCLFdBQVU7SUFDVixhQUFZO0lBQ1osYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsV0FBVTtJQUNWLFFBQU87SUFDUCxTQUFRLEVBWVg7O0FBbENEO01Bd0JRLFlBQVc7TUFDWCxvQkFBbUIsRUFDdEI7O0FBMUJMO01BNEJRLGdCQUFlO01BQ2Ysb0JBQW1CLEVBQ3RCOztBQTlCTDtNQWdDUSxrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wbGF5bGlzdHMvcGxheWxpc3QuaXRlbS9wbGF5bGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3Nhc3MvX3ZhcmlhYmxlcyc7XHJcblxyXG5cclxuLnBhZHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyBcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7IFxyXG59XHJcblxyXG4uc2hvcnR7XHJcbiAgICAgaGVpZ2h0OjkwcHg7XHJcbiB9XHJcblxyXG4gLmJveC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDQ1cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmJveC1zd2FwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIFxyXG4gICAgJi5zdGF0aWMtYmxvY2sge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKiBpbi1mbGlnaHQgY2xvbmUgKi9cclxuLmd1LW1pcnJvciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT04MClcIjtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgLyogaGlnaC1wZXJmb3JtYW5jZSBkaXNwbGF5Om5vbmU7IGhlbHBlciAqL1xyXG4gIC5ndS1oaWRlIHtcclxuICAgIGxlZnQ6IC05OTk5cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogYWRkZWQgdG8gbWlycm9yQ29udGFpbmVyIChkZWZhdWx0ID0gYm9keSkgd2hpbGUgZHJhZ2dpbmcgKi9cclxuICAuZ3UtdW5zZWxlY3RhYmxlIHtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogYWRkZWQgdG8gdGhlIHNvdXJjZSBlbGVtZW50IHdoaWxlIGl0cyBtaXJyb3IgaXMgZHJhZ2dlZCAqL1xyXG4gIC5ndS10cmFuc2l0IHtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MjApXCI7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xyXG4gIH1cclxuLmhvcml6b250YWwtc2Nyb2xsZXJ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuLnNsb3R7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgLnNxci10b29sYmFye1xyXG4gICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIGlucHV0eyB3aWR0aDogNTBweDtoZWlnaHQ6MjRweDt9XHJcbiAgICAgIHNlbGVjdCB7d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDI0cHg7fVxyXG4gIH1cclxufVxyXG5cclxuLmNhbnZhcy1iZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuIFxyXG4gIC5zcXItYnRue1xyXG4gICAgLnNxci10b29sYmFye1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuICAgIGZvbnQtc2l6ZTogODRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnNxci1idG46aG92ZXIsLnNxcjpob3ZlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAuc3FyLXRvb2xiYXJ7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICBpbnB1dHsgd2lkdGg6IDUwcHg7aGVpZ2h0OjMwcHg7fVxyXG4gICAgICAgIHNlbGVjdCB7IGhlaWdodDogMzBweDt9XHJcbiAgICB9XHJcbn1cclxuLmZhbmN5LXRodW1iXHJcbntcclxuICB6LWluZGV4OjEwMDA7XHJcbn1cclxuIFxyXG4gXHJcbi5leHRlbmRlZC1wYWRkaW5ne1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuLmV4dGVuZGVke1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiBcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjAwcHg7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbiAgbGVmdDogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcblxyXG4gIC50b3BwZXJ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgaGVpZ2h0OiA2NXB4OyAgIFxyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgXHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHRvcDogLTMwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICAuaWNvbntcclxuICAgICAgICBtYXJnaW46IDhweDsgICAgICBcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbiAgICAuYmFyLWljb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn0gIFxyXG5cclxufVxyXG5cclxuICJdfQ== */"

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









var PlaylistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlaylistComponent, _super);
    function PlaylistComponent(_ngZone, translateService, dragulaService, route, router, dirtyService) {
        var _this = _super.call(this, _ngZone, translateService, dirtyService) || this;
        _this._ngZone = _ngZone;
        _this.translateService = translateService;
        _this.dragulaService = dragulaService;
        _this.route = route;
        _this.router = router;
        _this.dirtyService = dirtyService;
        _this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        _this.effects = ['slide-in', 'slide-out'];
        _this.playlistMode = 'normal';
        _this.listStyle = {
            width: '100%',
            height: '400px',
        };
        _this.tabs = [{ name: 'PLAYLISTS.LIST', selected: true, class: 'purple-cat' }, { name: 'PLAYLISTS.TIME', selected: false }];
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
        _this.subs.add(_this.dragulaService.dropModel('DRAGULA_FACTS')
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, target = _a.target, source = _a.source, sibling = _a.sibling, sourceModel = _a.sourceModel, targetModel = _a.targetModel, item = _a.item;
        }));
        return _this;
    }
    PlaylistComponent.prototype.tabSelect = function (tab) {
        this.tabs.forEach(function (tabItem) { tabItem.selected = false; tabItem.class = ''; });
        tab.selected = true;
        tab.class = 'purple-cat';
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
    PlaylistComponent.prototype.beforeUpdate = function (item) {
        item.list.forEach(function (li) {
            delete li.template;
        });
    };
    PlaylistComponent.prototype.afterUpdate = function (item) {
    };
    PlaylistComponent.prototype.drop = function (event) {
    };
    PlaylistComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var groups;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.route.params.subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a;
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
                                    case 3: return [2 /*return*/];
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
        this.selectedTimeEl = null;
    };
    PlaylistComponent.prototype.deleteTimeslot = function (timeslot) {
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
    PlaylistComponent.prototype.onMoving = function (event) {
        var boxWidth = 150;
        var boxHeight = 60;
        // if (this.positionA.x < this.positionB.x &&
        //   event.x + boxWidth >= this.positionB.x + boxWidth / 2 &&
        //   event.x <= this.positionB.x + boxWidth &&
        //   event.y + boxHeight >= this.positionA.y &&
        //   event.y <= this.positionA.y + boxHeight) {
        //   const tmp = this.positionB;
        //   this.positionB = this.positionA;
        //   this.positionA = tmp;
        // } else if (this.positionA.x >= this.positionB.x &&
        //   event.x <= this.positionB.x + boxWidth / 2 &&
        //   event.x + boxWidth >= this.positionB.x &&
        //   event.y + boxHeight >= this.positionA.y &&
        //   event.y <= this.positionA.y + boxHeight) {
        //   const tmp = this.positionB;
        //   this.positionB = this.positionA;
        //   this.positionA = tmp;
        // }
    };
    PlaylistComponent.prototype.editListItem = function () {
    };
    PlaylistComponent.prototype.removeListItem = function (item) {
        this.item.list.splice(this.item.list.indexOf(item), 1);
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
            _services_dirty_service__WEBPACK_IMPORTED_MODULE_8__["DirtyService"]])
    ], PlaylistComponent);
    return PlaylistComponent;
}(_data_component__WEBPACK_IMPORTED_MODULE_3__["DataComponent"]));



/***/ }),

/***/ "./src/app/playlists/playlist/playlists.component.html":
/*!*************************************************************!*\
  !*** ./src/app/playlists/playlist/playlists.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide-header title=\"NAVBAR.PLAYLISTS\" mode=\"inline\"  iconClass=\"fas fa-step-forward\"\nclassName=\"purple-cat\"></app-slide-header>\n\n\n\n<app-lobby [items]=\"items\" mode=\"object\" model=\"playlist\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" \n(newItem)=\"newItem($event)\"></app-lobby>\n\n \n\n\n "

/***/ }),

/***/ "./src/app/playlists/playlist/playlists.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/playlists/playlist/playlists.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".short {\n  height: 90px; }\n\n.box-container {\n  position: relative;\n  height: 150px;\n  padding: 45px 0; }\n\n.box-swap {\n  position: absolute;\n  text-align: center;\n  width: 150px;\n  height: 60px;\n  padding: 15px 35px;\n  line-height: 30px; }\n\n.box-swap.static-block {\n    transition: all 0.3s ease-out; }\n\n/* in-flight clone */\n\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  pointer-events: none; }\n\n/* high-performance display:none; helper */\n\n.gu-hide {\n  left: -9999px !important; }\n\n/* added to mirrorContainer (default = body) while dragging */\n\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important; }\n\n/* added to the source element while its mirror is dragged */\n\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20); }\n\n.slot {\n  position: relative;\n  width: 250px;\n  height: 250px; }\n\n.slot .sqr-toolbar {\n    width: 240px;\n    visibility: visible; }\n\n.slot .sqr-toolbar input {\n      width: 50px;\n      height: 24px; }\n\n.slot .sqr-toolbar select {\n      width: 100px;\n      height: 24px; }\n\n.canvas-bg {\n  position: absolute;\n  z-index: 0; }\n\n.sqr-btn {\n  font-size: 84px;\n  text-align: center;\n  vertical-align: middle; }\n\n.sqr-btn .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn:hover, .sqr:hover {\n  opacity: 1; }\n\n.sqr-btn:hover .sqr-toolbar, .sqr:hover .sqr-toolbar {\n    visibility: visible; }\n\n.sqr-btn:hover .sqr-toolbar input, .sqr:hover .sqr-toolbar input {\n      width: 50px;\n      height: 30px; }\n\n.sqr-btn:hover .sqr-toolbar select, .sqr:hover .sqr-toolbar select {\n      height: 30px; }\n\n.fancy-thumb {\n  z-index: 1000; }\n\n.normal {\n  width: 500px;\n  overflow: auto;\n  border: 1px solid blue; }\n\n.extended-padding {\n  padding: 50px; }\n\n.extended {\n  overflow: hidden;\n  padding: 30px;\n  height: 400px;\n  background-color: white;\n  position: absolute;\n  top: 200px;\n  right: 50px;\n  left: 50px;\n  border: 1px solid red; }\n\n.extended .topper {\n    pointer-events: none;\n    z-index: 0;\n    height: 65px;\n    opacity: 0.8;\n    position: absolute;\n    padding-top: 30px;\n    top: -30px;\n    left: 0;\n    right: 0; }\n\n.extended .topper .icon {\n      margin: 8px;\n      vertical-align: top; }\n\n.extended .topper h4 {\n      display: inline;\n      vertical-align: top; }\n\n.extended .topper .bar-icon {\n      margin-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3RzL3BsYXlsaXN0L0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxccGxheWxpc3RzXFxwbGF5bGlzdFxccGxheWxpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0ksYUFBVyxFQUNkOztBQUdEO0VBQ0csbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBS2xCOztBQVhEO0lBU0ksOEJBQTZCLEVBQzlCOztBQUlILHFCQUFxQjs7QUFDdkI7RUFDSSwyQkFBMEI7RUFDMUIscUJBQW9CO0VBQ3BCLHlCQUF3QjtFQUN4QixhQUFZO0VBQ1osa0VBQWlFO0VBQ2pFLDBCQUF5QjtFQUN6QixxQkFBb0IsRUFDckI7O0FBQ0QsMkNBQTJDOztBQUMzQztFQUNFLHlCQUF3QixFQUN6Qjs7QUFDRCw4REFBOEQ7O0FBQzlEO0VBQ0UscUNBQW9DO0VBQ3BDLGtDQUFpQztFQUNqQyxpQ0FBZ0M7RUFDaEMsNkJBQTRCLEVBQzdCOztBQUNELDZEQUE2RDs7QUFDN0Q7RUFDRSxhQUFZO0VBQ1osa0VBQWlFO0VBQ2pFLDBCQUF5QixFQUMxQjs7QUFFSDtFQUNJLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osY0FBYSxFQU9oQjs7QUFWRDtJQUtNLGFBQVk7SUFDWixvQkFBbUIsRUFHdEI7O0FBVEg7TUFPYSxZQUFXO01BQUMsYUFBVyxFQUFHOztBQVB2QztNQVFjLGFBQVk7TUFBRSxhQUFZLEVBQUc7O0FBSTNDO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVUsRUFDWDs7QUFHQztFQUlFLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHVCQUFzQixFQUN6Qjs7QUFQQztJQUVFLG9CQUFtQixFQUNsQjs7QUFLTDtFQUNJLFdBQVUsRUFNYjs7QUFQRDtJQUdRLG9CQUFtQixFQUd0Qjs7QUFOTDtNQUllLFlBQVc7TUFBQyxhQUFXLEVBQUc7O0FBSnpDO01BS2lCLGFBQVksRUFBRzs7QUFHaEM7RUFFRSxjQUFZLEVBQ2I7O0FBRUQ7RUFDRSxhQUFZO0VBQUMsZUFBYztFQUMzQix1QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxpQkFBZ0I7RUFFaEIsY0FBYTtFQUNiLGNBQWE7RUFDYix3QkFBdUI7RUFFdkIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFXO0VBQ1gsV0FBVTtFQUNWLHNCQUFxQixFQXlCdEI7O0FBcENEO0lBY0kscUJBQW9CO0lBQ3BCLFdBQVU7SUFDVixhQUFZO0lBQ1osYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsV0FBVTtJQUNWLFFBQU87SUFDUCxTQUFRLEVBWVg7O0FBbENEO01Bd0JRLFlBQVc7TUFDWCxvQkFBbUIsRUFDdEI7O0FBMUJMO01BNEJRLGdCQUFlO01BQ2Ysb0JBQW1CLEVBQ3RCOztBQTlCTDtNQWdDUSxrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wbGF5bGlzdHMvcGxheWxpc3QvcGxheWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5zaG9ydHtcclxuICAgICBoZWlnaHQ6OTBweDtcclxuIH1cclxuXHJcblxyXG4gLmJveC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDQ1cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmJveC1zd2FwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIFxyXG4gICAgJi5zdGF0aWMtYmxvY2sge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKiBpbi1mbGlnaHQgY2xvbmUgKi9cclxuLmd1LW1pcnJvciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT04MClcIjtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgLyogaGlnaC1wZXJmb3JtYW5jZSBkaXNwbGF5Om5vbmU7IGhlbHBlciAqL1xyXG4gIC5ndS1oaWRlIHtcclxuICAgIGxlZnQ6IC05OTk5cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogYWRkZWQgdG8gbWlycm9yQ29udGFpbmVyIChkZWZhdWx0ID0gYm9keSkgd2hpbGUgZHJhZ2dpbmcgKi9cclxuICAuZ3UtdW5zZWxlY3RhYmxlIHtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogYWRkZWQgdG8gdGhlIHNvdXJjZSBlbGVtZW50IHdoaWxlIGl0cyBtaXJyb3IgaXMgZHJhZ2dlZCAqL1xyXG4gIC5ndS10cmFuc2l0IHtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MjApXCI7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xyXG4gIH1cclxuXHJcbi5zbG90e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIC5zcXItdG9vbGJhcntcclxuICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICBpbnB1dHsgd2lkdGg6IDUwcHg7aGVpZ2h0OjI0cHg7fVxyXG4gICAgICBzZWxlY3Qge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAyNHB4O31cclxuICB9XHJcbn1cclxuXHJcbi5jYW52YXMtYmd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbiBcclxuICAuc3FyLWJ0bntcclxuICAgIC5zcXItdG9vbGJhcntcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgICBmb250LXNpemU6IDg0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5zcXItYnRuOmhvdmVyLC5zcXI6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLnNxci10b29sYmFye1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgaW5wdXR7IHdpZHRoOiA1MHB4O2hlaWdodDozMHB4O31cclxuICAgICAgICBzZWxlY3QgeyBoZWlnaHQ6IDMwcHg7fVxyXG4gICAgfVxyXG59XHJcbi5mYW5jeS10aHVtYlxyXG57XHJcbiAgei1pbmRleDoxMDAwO1xyXG59XHJcbiBcclxuLm5vcm1hbHtcclxuICB3aWR0aDogNTAwcHg7b3ZlcmZsb3c6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxufVxyXG4uZXh0ZW5kZWQtcGFkZGluZ3tcclxuICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcbi5leHRlbmRlZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gXHJcbiAgcGFkZGluZzogMzBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjAwcHg7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbiAgbGVmdDogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcblxyXG4gIC50b3BwZXJ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgaGVpZ2h0OiA2NXB4OyAgIFxyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgXHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHRvcDogLTMwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICAuaWNvbntcclxuICAgICAgICBtYXJnaW46IDhweDsgICAgICBcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbiAgICAuYmFyLWljb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn0gIFxyXG5cclxufVxyXG5cclxuICJdfQ== */"

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
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_change_change_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/change/change.component */ "./src/app/common/change/change.component.ts");










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
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_sortable__WEBPACK_IMPORTED_MODULE_3__["NgxSortableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            entryComponents: [_playlist_playlists_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistsComponent"]],
            declarations: [_common_change_change_component__WEBPACK_IMPORTED_MODULE_9__["ChangeComponent"], _playlist_playlists_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistsComponent"], _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_5__["SchedulesComponent"], _playlist_item_playlist_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistComponent"]]
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

module.exports = "<app-lobby [items]=\"items\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem($event)\" ></app-lobby>\n\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n<dialog open={{displayModalNew}}>\n<a (click)=\"closeSlider();\"><i class=\"far fa-window-close close-button\" ></i></a>\n <form *ngIf=\"item\">\n  <div class=\"form-group\">\n    <label for=\"itemName\">{{ \"PLAYLISTS.NAME\" | translate }}:</label>\n    <input type=\"text\" name=\"itemName\" class=\"form-control\" id=\"itemName\"   [(ngModel)]=\"item.Name\">\n    <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"PLAYLISTS.NAME_HELP\" | translate }}</small>\n  </div>\n \n  <button   *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"PLAYLISTS.UPDATE\" | translate }}</button>\n  <button   *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"PLAYLISTS.CREATE\" | translate }}</button>\n</form>\n</dialog>\n</div>\n "

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

module.exports = " \n<app-slide-header  mode=\"inline\" [title]=\"'NAVBAR.SCREEN-GROUPS'\"  \n[iconClass]=\"'fas fa-clone'\" [className]=\"'green-cat'\"  ></app-slide-header>\n   \n\n<app-lobby [items]=\"items\" [mode]=\"'object'\" (editItem)=\"editItem($event)\" (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem($event)\"></app-lobby>\n\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n    <dialog open= {{displayModalNew}}>\n        <app-slide-header [title]=\"'NAVBAR.SCREEN-GROUPS'\" closeFn=\"true\" [iconClass]=\"'fas fa-clone'\" [className]=\"'green-cat'\" (closed)=\"close($event)\"></app-slide-header>\n        <form *ngIf=\"item\" class=\"pt50\">\n            <div class=\"form-group\">\n                <label for=\"screenName\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n                <input type=\"text\" name=\"screenName\" class=\"form-control\"  [(ngModel)]=\"item.Name\">\n                <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SCREENS.NAME_HELP\" | translate }}</small>\n            </div>\n            <button *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"SCREENS.UPDATE\" | translate }}</button>\n            <button *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"SCREENS.CREATE\" | translate }}</button>\n        </form>\n        <app-slide-footer  [iconClass]=\"'fas fa-clone'\" [className]=\"'green-cat'\"></app-slide-footer>\n\n    </dialog>\n</div>\n"

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

module.exports = "<app-slide-header  mode=\"inline\" [title]=\"'NAVBAR.SCREENS'\"  \n[iconClass]=\"'fas fa-desktop'\" [className]=\"'orange-cat'\"  ></app-slide-header>\n   \n\n\n\n    <app-lobby [items]=\"items\" [template]=\"lobbyTemplate\" [iconClass]=\"'fas fa-desktop'\" [mode]=\"'object'\" (editItem)=\"editItem($event)\"\n        (deleteItem)=\"deleteItem($event)\" (newItem)=\"newItem($event)\"></app-lobby>\n \n\n<ng-template #lobbyTemplate let-item=\"item\">\n   \n        <i class=\"fas fa-desktop icon\"></i> <span class=\"label\">{{item.Name}} </span> \n        <div><small *ngIf=\"item.Group\">({{item.Group.Name}})</small></div>\n    \n</ng-template>\n\n\n<div class=\"slider-container {{displayModalNew}} shadow\">\n    <dialog open= {{displayModalNew}}>\n        <app-slide-header [title]=\"'NAVBAR.SCREENS'\" closeFn=\"true\" [iconClass]=\"'fas fa-desktop'\" [className]=\"'orange-cat'\" (closed)=\"close($event)\"></app-slide-header>\n        <form *ngIf=\"item\" class=\"pt50\">\n            <div class=\"form-group\">\n                <label for=\"screenName\">{{ \"SCREENS.NAME\" | translate }}:</label>\n                <input type=\"text\" name=\"screenName\" class=\"form-control\" [(ngModel)]=\"item.Name\">\n                <small id=\"screenHelp\" class=\"form-text text-muted\">{{ \"SCREENS.NAME_HELP\" | translate }}</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"ScreenGroup\">{{ \"SCREENS.GROUP_NAME\" | translate }}:</label>\n                <select [(ngModel)]=\"item.Group\" name=\"ScreenGroup\" [compareWith]=\"compareFn\" class=\"form-control\">\n                    <option *ngFor=\"let c of groups\" [ngValue]=\"c\">{{c.Name}}</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">{{ \"SCREENS.TOKEN\" | translate }}</label>\n                <input type=\"text\" [(ngModel)]=\"item.Token\" name=\"txtToken\" class=\"form-control\" id=\"txtToken\" placeholder=\"{{'SCREENS.TOKEN' | translate}}\">\n            </div>\n            <button *ngIf=\"item._id\" class=\"btn btn-primary\" (click)=\"updateItem()\">{{ \"SCREENS.UPDATE\" | translate }}</button>\n            <button *ngIf=\"!item._id\" class=\"btn btn-primary\" (click)=\"createItem()\">{{ \"SCREENS.CREATE\" | translate }}</button>\n        </form>\n        <app-slide-footer [title]=\"'NAVBAR.SCREENS'\" [iconClass]=\"'fas fa-desktop'\" [className]=\"'orange-cat'\" (closed)=\"close($event)\"></app-slide-footer>\n\n    </dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/screens/screens.component.scss":
/*!********************************************************!*\
  !*** ./src/app/screens/screens/screens.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  margin-right: 10px;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9zY3JlZW5zL0M6XFxwcm9qZWN0c1xcc2lnbi1uYXR1cmVcXHdlYi9zcmNcXGFwcFxcc2NyZWVuc1xcc2NyZWVuc1xcc2NyZWVucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFpQjtFQUNqQixrQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL3NjcmVlbnMvc2NyZWVucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG59Il19 */"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var DirtyService = /** @class */ (function () {
    function DirtyService(translate) {
        this.translate = translate;
    }
    DirtyService.prototype.setDirty = function () {
        debugger;
        this.dirty = true;
    };
    DirtyService.prototype.clearDirty = function () {
        debugger;
        this.dirty = false;
    };
    DirtyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
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
/* harmony import */ var _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/slide-footer/slide-footer.component */ "./src/app/common/slide-footer/slide-footer.component.ts");
/* harmony import */ var _common_bread_crumbs_bread_crumbs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/bread-crumbs/bread-crumbs.component */ "./src/app/common/bread-crumbs/bread-crumbs.component.ts");
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
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_16__["DragulaModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_17__["ColorPickerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__["FileDropModule"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_6__["AngularDraggableModule"]],
            declarations: [_editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_19__["CanvasComponent"],
                _directives_adapt_height__WEBPACK_IMPORTED_MODULE_15__["AdaptHeightDirective"],
                _directives_adapt_width__WEBPACK_IMPORTED_MODULE_24__["AdaptWidthDirective"],
                _directives_stop_prop__WEBPACK_IMPORTED_MODULE_21__["ClickStopPropagationDirective"],
                _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_7__["LanguageBarComponent"],
                _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_10__["FinderComponent"],
                _common_rulers_rulers_component__WEBPACK_IMPORTED_MODULE_18__["RulersComponent"],
                _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_11__["SlideHeaderComponent"],
                _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_12__["SlideFooterComponent"],
                _common_bread_crumbs_bread_crumbs_component__WEBPACK_IMPORTED_MODULE_13__["BreadCrumbsComponent"],
                _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_14__["LobbyComponent"],
                _common_lobby_item_lobby_item_component__WEBPACK_IMPORTED_MODULE_22__["LobbyItemComponent"]],
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_language_dictionary_service__WEBPACK_IMPORTED_MODULE_3__["DictionaryService"], _services_name_service__WEBPACK_IMPORTED_MODULE_4__["NameService"], _player_slide_service__WEBPACK_IMPORTED_MODULE_20__["SlideService"], _services_dirty_service__WEBPACK_IMPORTED_MODULE_23__["DirtyService"], _services_responsive_service__WEBPACK_IMPORTED_MODULE_25__["ResponsiveService"]],
            exports: [_editor_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_19__["CanvasComponent"],
                _common_language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_7__["LanguageBarComponent"],
                _common_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_14__["LobbyComponent"],
                _common_lobby_item_lobby_item_component__WEBPACK_IMPORTED_MODULE_22__["LobbyItemComponent"],
                _library_finder_finder_component__WEBPACK_IMPORTED_MODULE_10__["FinderComponent"],
                _common_slide_header_slide_header_component__WEBPACK_IMPORTED_MODULE_11__["SlideHeaderComponent"],
                _common_rulers_rulers_component__WEBPACK_IMPORTED_MODULE_18__["RulersComponent"],
                _common_slide_footer_slide_footer_component__WEBPACK_IMPORTED_MODULE_12__["SlideFooterComponent"],
                _common_bread_crumbs_bread_crumbs_component__WEBPACK_IMPORTED_MODULE_13__["BreadCrumbsComponent"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__["FileDropModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_17__["ColorPickerModule"],
                _directives_adapt_height__WEBPACK_IMPORTED_MODULE_15__["AdaptHeightDirective"],
                _directives_adapt_width__WEBPACK_IMPORTED_MODULE_24__["AdaptWidthDirective"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_6__["AngularDraggableModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_16__["DragulaDirective"]],
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
        function playDefaultPlan() {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    ctx.font = "120px arial";
                    ctx.fillStyle = "black";
                    ctx.fillText('Nothing to play', 400, 400);
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
        var frameDuration = (this.list[this.itemIndex].duration) ? this.list[this.itemIndex].duration * 1000 : 5000;
        this.itemIndex++;
        if (mode !== 'single') {
            setInterval(function () {
                if (_this.itemIndex >= _this.list.length) {
                    _this.itemIndex = 0;
                }
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
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\sign-nature\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map