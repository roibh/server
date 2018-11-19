webpackJsonp(["main"],{

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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".white {color: white;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n<div>\r\n<nav class=\"navbar  navbar-light bg-light\">\r\n  <div class=\"pull-left navbar-header\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/discount.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> SignNature</a>\r\n\r\n  </div>\r\n  <div id=\"navbarSupportedContent\" class=\"pull-right navbar-header\">\r\n    <ul class=\"navbar-nav\">\r\n      <li>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/dashboard\">dashboard</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_context_service__ = __webpack_require__("../../../../../src/app/user.context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(userService, translate) {
        this.userService = userService;
        this.translate = translate;
        this.title = 'SignNature';
        this.translate.setDefaultLang('he');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('he');
        this.userCheck = userService.getUser();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_context_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideConfig */
/* unused harmony export HttpLoaderFactory */
/* unused harmony export tokenGetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/fesm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/fesm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/fesm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_super_table__ = __webpack_require__("../../../../ngx-super-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_dynamic_forms_ui_bootstrap__ = __webpack_require__("../../../../@ng-dynamic-forms/ui-bootstrap/fesm5/ui-bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_sortable__ = __webpack_require__("../../../../ngx-bootstrap/sortable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_table__ = __webpack_require__("../../../../ng2-table/ng2-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_loaders_css__ = __webpack_require__("../../../../angular2-loaders-css/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_loaders_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_loaders_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__loader_loader_component__ = __webpack_require__("../../../../../src/app/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__manage_manage_component__ = __webpack_require__("../../../../../src/app/manage/manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_select_dropdown__ = __webpack_require__("../../../../ngx-select-dropdown/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__("../../../common/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__auth_auth_intercepter__ = __webpack_require__("../../../../../src/app/auth/auth.intercepter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__user_context_service__ = __webpack_require__("../../../../../src/app/user.context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__user_info_user_info_component__ = __webpack_require__("../../../../../src/app/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__directives_adapt_height__ = __webpack_require__("../../../../../src/app/directives/adapt-height.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__screens_screens_component__ = __webpack_require__("../../../../../src/app/screens/screens.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__timelines_timelines_component__ = __webpack_require__("../../../../../src/app/timelines/timelines.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';






















var config = new __WEBPACK_IMPORTED_MODULE_21_angularx_social_login__["b" /* AuthServiceConfig */]([
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













var appRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_33__signup_signup_component__["a" /* SignupComponent */] },
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_29__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__auth_auth_guard_service__["a" /* AuthGuardService */]], children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_35__timelines_timelines_component__["a" /* TimelinesComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_32__auth_auth_guard_service__["a" /* AuthGuardService */]],
            },
            {
                path: 'screens',
                component: __WEBPACK_IMPORTED_MODULE_34__screens_screens_component__["a" /* ScreensComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_32__auth_auth_guard_service__["a" /* AuthGuardService */]],
            }
        ]
    },
    { path: 'user/details', component: __WEBPACK_IMPORTED_MODULE_26__user_info_user_info_component__["a" /* UserInfoComponent */] },
];
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_31__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__manage_manage_component__["a" /* ManageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_26__user_info_user_info_component__["a" /* UserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_27__directives_adapt_height__["a" /* AdaptHeightDirective */],
                __WEBPACK_IMPORTED_MODULE_29__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_33__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_34__screens_screens_component__["a" /* ScreensComponent */],
                __WEBPACK_IMPORTED_MODULE_35__timelines_timelines_component__["a" /* TimelinesComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_30__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_30__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_5_ngx_super_table__["a" /* SuperTableModule */],
                __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_20_ngx_select_dropdown__["a" /* SelectDropDownModule */],
                __WEBPACK_IMPORTED_MODULE_11__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ng2_table__["Ng2TableModule"],
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_sortable__["a" /* SortableModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_angular2_loaders_css__["LoadersCssModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_17_ng2_ace_editor__["a" /* AceEditorModule */],
                __WEBPACK_IMPORTED_MODULE_28_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_dynamic_forms_ui_bootstrap__["a" /* DynamicFormsBootstrapUIModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularx_social_login__["f" /* SocialLoginModule */],
                __WEBPACK_IMPORTED_MODULE_19__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_25__user_context_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_32__auth_auth_guard_service__["a" /* AuthGuardService */], {
                    provide: __WEBPACK_IMPORTED_MODULE_21_angularx_social_login__["b" /* AuthServiceConfig */],
                    useFactory: provideConfig
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_23__auth_auth_intercepter__["a" /* AuthInterceptor */],
                    multi: true
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_context_service__ = __webpack_require__("../../../../../src/app/user.context.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_context_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.intercepter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var idToken = localStorage.getItem('id_token');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n<a class=\"txt1 bo1 hov1\" href=\"#\"  routerLink=\"screens\">\n\t\t\t\t\t\tScreens\t\t\t\n\t\t\t\t\t\t</a>\n <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/adapt-height.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdaptHeightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('appAdaptHeight'),
        __metadata("design:type", Number)
    ], AdaptHeightDirective.prototype, "appAdaptHeight", void 0);
    AdaptHeightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAdaptHeight]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AdaptHeightDirective);
    return AdaptHeightDirective;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoaderComponent.prototype, "busy", void 0);
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__("../../../../../src/app/loader/loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



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

module.exports = "<div>\n\n\t<div class=\"limiter\">\n\t\t<div class=\"container-login100\">\n\t\t\t<div class=\"wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30\">\n\t\t\t\t<form class=\"login100-form validate-form\">\n\t\t\t\t\t<span class=\"login100-form-title p-b-55\">\n\t\t\t\t\t\t{{\"LOGIN.TITLE\" | translate}}\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" [attr.data-validate]=\"'LOGIN.INSERT_USERNAME' | translate\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"text\" name=\"userName\" placeholder=\"Email\" [(ngModel)]=\"userName\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-envelope\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" >\n\t\t\t\t\t\t<input class=\"input100\" type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-lock\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"contact100-form-checkbox m-l-4\">\n\t\t\t\t\t\t<input class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n\t\t\t\t\t\t<label class=\"label-checkbox100\" for=\"ckb1\">\n\t\t\t\t\t\t\t{{\"LOGIN.REMEMBER_ME\" | translate}}\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"container-login100-form-btn p-t-25\">\n\t\t\t\t\t\t<button class=\"login100-form-btn\" (click)=\"tryLogin()\">\n\t\t\t\t\t\t\t\t{{\"LOGIN.LOGIN_BTN\" | translate}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n <!--\n\t\t\t\t\t<div class=\"text-center w-full p-t-42 p-b-22\">\n\t\t\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t\tOr login with\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<a href=\"#\" class=\"btn-face m-b-10\">\n\t\t\t\t\t\t<i class=\"fa fa-facebook-official\"></i>\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<a href=\"#\" class=\"btn-google m-b-10\">\n\t\t\t\t\t\t<img src=\"images/icons/icon-google.png\" alt=\"GOOGLE\">\n\t\t\t\t\t\tGoogle\n\t\t\t\t\t</a>  \n-->\n\t\t\t\t\t<div class=\"text-center w-full p-t-115\">\n\t\t\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t\tNot a member?\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<a class=\"txt1 bo1 hov1\" href=\"#\"  routerLink=\"/signup\">\n\t\t\t\t\t\t\tSign up now\t\t\t\t\t\t\t\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n\n\n\n\n\n<!-- Simple pop-up dialog box containing a form -->\n<dialog id=\"favDialog\">\n  <form method=\"dialog\">\n    <p><label>Favorite animal:\n      <select>\n        <option></option>\n        <option>Brine shrimp</option>\n        <option>Red panda</option>\n        <option>Spider monkey</option>\n      </select>\n    </label></p>\n    <menu>\n      <button>Cancel</button>\n      <button>Confirm</button>\n    </menu>\n  </form>\n</dialog>\n\n<menu>\n  <button id=\"updateDetails\">Update details</button>\n</menu>\n\n<div id=\"output\"></div>\n\n<script>\n(function() {\n  var updateButton = document.getElementById('updateDetails');\n  var favDialog = document.getElementById('favDialog');\n  var outputBox = document.getElementById(\"output\");\n\n  // “Update details” button opens the <dialog> modally\n  updateButton.addEventListener('click', function() {\n    favDialog.showModal();\n    output.innerHTML += \"<div>\" + favDialog.returnValue + \" button clicked!</div>\";\n  });\n})();\n</script>\n \n\n    <ng-template #share>\n        <div class=\"modal-body text-center\">\n\n            <p>Share your group.</p>\n            <pre>{{group.GroupId}}</pre>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <ng-template #join>\n        <div class=\"modal-body text-center\">\n            <p>Join a group.</p>\n            <div>\n                <label>Group code</label>\n                <input type=\"text\" class=\"form-control\" #group_code />\n            </div>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"JoinConfirm(group_code.value)\">Join</a>\n            <a type=\"button\" class=\"btn btn-default\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <div class=\"float-left dropdown\" *ngIf=\"userData && group\">\n        <a class=\"btn btn-secondary dropdown-toggle white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            {{group.Name}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"position: absolute\">\n            <a class=\"dropdown-item\" (click)=\"setGroup(item)\" *ngFor=\"let item of userData.groups\">{{item.Name}}</a>\n\n            <a class=\"dropdown-item\" (click)=\"JoinGroup(join)\">Join group</a>\n            <a class=\"dropdown-item\" (click)=\"ShareGroup(share)\">Share group</a>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_context_service__ = __webpack_require__("../../../../../src/app/user.context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signnature_client__ = __webpack_require__("../../../../@signnature/client/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signnature_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__signnature_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
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
        this.user = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__signnature_client__["Auth"].token({ userName: this.userName, password: this.password })];
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
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_5_angularx_social_login__["d" /* GoogleLoginProvider */].PROVIDER_ID);
    };
    LoginComponent.prototype.signInWithFB = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_5_angularx_social_login__["c" /* FacebookLoginProvider */].PROVIDER_ID);
    };
    LoginComponent.prototype.signInWithLinkedIn = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_5_angularx_social_login__["e" /* LinkedInLoginProvider */].PROVIDER_ID);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "userData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "user", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_1__user_context_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5_angularx_social_login__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_context_service__ = __webpack_require__("../../../../../src/app/user.context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__("../../../../../src/app/manage/manage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage/manage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_1__user_context_service__["a" /* UserService */]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/screens/screens.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/screens.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  screens works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/screens/screens.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreensComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScreensComponent = /** @class */ (function () {
    function ScreensComponent() {
    }
    ScreensComponent.prototype.ngOnInit = function () {
    };
    ScreensComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-screens',
            template: __webpack_require__("../../../../../src/app/screens/screens.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/screens.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScreensComponent);
    return ScreensComponent;
}());



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

module.exports = "<div>\n\t<div class=\"limiter\">\n\t\t<div class=\"container-login100\">\n\t\t\t<div class=\"wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30\">\n\t\t\t\t<form class=\"login100-form validate-form\">\n\t\t\t\t\t<span class=\"login100-form-title p-b-55\">\n\t\t\t\t\t\t{{\"SIGNUP.TITLE\" | translate}}\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" [attr.data-validate]=\"'LOGIN.INSERT_USERNAME' | translate\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"text\" name=\"userName\" placeholder=\"Email\" [(ngModel)]=\"userName\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-envelope\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" >\n\t\t\t\t\t\t<input class=\"input100\" type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-lock\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"contact100-form-checkbox m-l-4\">\n\t\t\t\t\t\t<input class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n\t\t\t\t\t\t<label class=\"label-checkbox100\" for=\"ckb1\">\n\t\t\t\t\t\t\t{{\"LOGIN.REMEMBER_ME\" | translate}}\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"container-login100-form-btn p-t-25\">\n\t\t\t\t\t\t<button class=\"login100-form-btn\" (click)=\"tryLogin\">\n\t\t\t\t\t\t\t\t{{\"LOGIN.LOGIN_BTN\" | translate}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n \n\n\t\t\t\t<div class=\"text-center w-full p-t-115\">\n\t\t\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t\tAlready a member?\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<a class=\"txt1 bo1 hov1\" href=\"#\"  routerLink=\"/signin\">\n\t\t\t\t\t\t\tSign in now\t\t\t\t\t\t\t\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n\n\n\n\n\n<!-- Simple pop-up dialog box containing a form -->\n<dialog id=\"favDialog\">\n  <form method=\"dialog\">\n    <p><label>Favorite animal:\n      <select>\n        <option></option>\n        <option>Brine shrimp</option>\n        <option>Red panda</option>\n        <option>Spider monkey</option>\n      </select>\n    </label></p>\n    <menu>\n      <button>Cancel</button>\n      <button>Confirm</button>\n    </menu>\n  </form>\n</dialog>\n\n<menu>\n  <button id=\"updateDetails\">Update details</button>\n</menu>\n\n<div id=\"output\"></div>\n\n<script>\n(function() {\n  var updateButton = document.getElementById('updateDetails');\n  var favDialog = document.getElementById('favDialog');\n  var outputBox = document.getElementById(\"output\");\n\n  // “Update details” button opens the <dialog> modally\n  updateButton.addEventListener('click', function() {\n    favDialog.showModal();\n    output.innerHTML += \"<div>\" + favDialog.returnValue + \" button clicked!</div>\";\n  });\n})();\n</script>\n \n\n    <ng-template #share>\n        <div class=\"modal-body text-center\">\n\n            <p>Share your group.</p>\n            <pre>{{group.GroupId}}</pre>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <ng-template #join>\n        <div class=\"modal-body text-center\">\n            <p>Join a group.</p>\n            <div>\n                <label>Group code</label>\n                <input type=\"text\" class=\"form-control\" #group_code />\n            </div>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"JoinConfirm(group_code.value)\">Join</a>\n            <a type=\"button\" class=\"btn btn-default\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <div class=\"float-left dropdown\" *ngIf=\"userData && group\">\n        <a class=\"btn btn-secondary dropdown-toggle white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            {{group.Name}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"position: absolute\">\n            <a class=\"dropdown-item\" (click)=\"setGroup(item)\" *ngFor=\"let item of userData.groups\">{{item.Name}}</a>\n\n            <a class=\"dropdown-item\" (click)=\"JoinGroup(join)\">Join group</a>\n            <a class=\"dropdown-item\" (click)=\"ShareGroup(share)\">Share group</a>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelinesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelinesComponent = /** @class */ (function () {
    function TimelinesComponent() {
    }
    TimelinesComponent.prototype.ngOnInit = function () {
    };
    TimelinesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timelines',
            template: __webpack_require__("../../../../../src/app/timelines/timelines.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timelines/timelines.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelinesComponent);
    return TimelinesComponent;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_context_service__ = __webpack_require__("../../../../../src/app/user.context.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/fesm5/router.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__("../../../../../src/app/user-info/user-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-info/user-info.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__user_context_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1__user_context_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.context.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserService.prototype, "group", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserService.prototype, "user", void 0);
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methodus_client__ = __webpack_require__("../../../../@methodus/client/dist/methodus-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methodus_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__methodus_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

window.METHODUS_CONFIG = { methodType: __WEBPACK_IMPORTED_MODULE_0__methodus_client__["MethodType"].Http };




if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map