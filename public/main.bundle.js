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

module.exports = " \r\n<div>\r\n\r\n\r\n<!-- <nav class=\"navbar  navbar-light bg-light\">\r\n  <div class=\"pull-left navbar-header\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/discount.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> SignNature</a>\r\n\r\n  </div>\r\n  <div id=\"navbarSupportedContent\" class=\"pull-right navbar-header\">\r\n    <ul class=\"navbar-nav\">\r\n      <li>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/dashboard\">dashboard</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav> -->\r\n <router-outlet></router-outlet>\r\n</div>"

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
        this.userService = userService;
        this.translate = translate;
        this.title = 'SignNature';
        this.translate.setDefaultLang('he');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('he');
        this.userCheck = userService.getUser();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
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
var ngx_super_table_1 = __webpack_require__("../../../../ngx-super-table/index.js");
var ui_bootstrap_1 = __webpack_require__("../../../../@ng-dynamic-forms/ui-bootstrap/fesm5/ui-bootstrap.js");
var sortable_1 = __webpack_require__("../../../../ngx-bootstrap/sortable/index.js");
var modal_1 = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var tabs_1 = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var forms_2 = __webpack_require__("../../../forms/fesm5/forms.js");
var ngx_datatable_1 = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
var ngx_charts_1 = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
var router_1 = __webpack_require__("../../../router/fesm5/router.js");
var ng2_table_1 = __webpack_require__("../../../../ng2-table/ng2-table.js");
var angular2_loaders_css_1 = __webpack_require__("../../../../angular2-loaders-css/index.js");
var loader_component_1 = __webpack_require__("../../../../../src/app/loader/loader.component.ts");
var ng2_ace_editor_1 = __webpack_require__("../../../../ng2-ace-editor/index.js");
var manage_component_1 = __webpack_require__("../../../../../src/app/manage/manage.component.ts");
var angular_jwt_1 = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var ngx_select_dropdown_1 = __webpack_require__("../../../../ngx-select-dropdown/dist/index.js");
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
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var core_2 = __webpack_require__("../../../../@ngx-translate/core/fesm5/ngx-translate-core.js");
var http_loader_1 = __webpack_require__("../../../../@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
var http_2 = __webpack_require__("../../../common/fesm5/http.js");
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
var signup_component_1 = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var screens_module_1 = __webpack_require__("../../../../../src/app/screens/screens.module.ts");
var timelines_component_1 = __webpack_require__("../../../../../src/app/timelines/timelines.component.ts");
var playlists_component_1 = __webpack_require__("../../../../../src/app/playlists/playlists.component.ts");
var library_component_1 = __webpack_require__("../../../../../src/app/library/library.component.ts");
var schedules_component_1 = __webpack_require__("../../../../../src/app/schedules/schedules.component.ts");
var settings_component_1 = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
var language_bar_component_1 = __webpack_require__("../../../../../src/app/language-bar/language-bar.component.ts");
var appRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'signin', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    {
        path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_service_1.AuthGuardService], children: [
            {
                path: '',
                component: timelines_component_1.TimelinesComponent,
                canActivate: [auth_guard_service_1.AuthGuardService],
            },
            {
                path: 'screens',
                component: screens_module_1.ScreensComponent,
                canActivate: [auth_guard_service_1.AuthGuardService],
            },
            {
                path: 'library',
                component: library_component_1.LibraryComponent,
                canActivate: [auth_guard_service_1.AuthGuardService],
            },
            {
                path: 'playlists',
                component: playlists_component_1.PlaylistsComponent,
                canActivate: [auth_guard_service_1.AuthGuardService],
            },
            {
                path: 'schedules',
                component: schedules_component_1.SchedulesComponent,
                canActivate: [auth_guard_service_1.AuthGuardService],
            },
            {
                path: 'settings',
                component: settings_component_1.SettingsComponent,
                canActivate: [auth_guard_service_1.AuthGuardService],
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
                library_component_1.LibraryComponent,
                schedules_component_1.SchedulesComponent,
                settings_component_1.SettingsComponent,
                language_bar_component_1.LanguageBarComponent,
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
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true } // <-- debugging purposes only
                ),
                ngx_super_table_1.SuperTableModule,
                ngx_charts_1.NgxChartsModule,
                ngx_select_dropdown_1.SelectDropDownModule,
                ngx_datatable_1.NgxDatatableModule,
                tabs_1.TabsModule.forRoot(),
                modal_1.ModalModule.forRoot(),
                ng2_table_1.Ng2TableModule,
                sortable_1.SortableModule.forRoot(),
                ngx_toastr_1.ToastrModule.forRoot(),
                angular2_loaders_css_1.LoadersCssModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                ng2_ace_editor_1.AceEditorModule,
                ngx_order_pipe_1.OrderModule,
                ui_bootstrap_1.DynamicFormsBootstrapUIModule,
                animations_1.BrowserAnimationsModule,
                angularx_social_login_1.SocialLoginModule,
                screens_module_1.ScreensModule,
                angular_jwt_1.JwtModule.forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            providers: [user_context_service_1.UserService, auth_guard_service_1.AuthGuardService, {
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
        core_1.Injectable()
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;


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

module.exports = "<div class=\"wrapper\">\n    <!-- Sidebar  -->\n    <nav id=\"sidebar\">\n        <div class=\"sidebar-header\">\n            <h3>Sign-Nature</h3>\n            <strong>BS</strong>\n        </div>\n\n        <ul class=\"list-unstyled components\">\n            <li class=\"active\">\n                <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                    <i class=\"fas fa-home\"></i>\n                    Home\n                </a>             \n            </li>\n              <li>\n                <a routerLink=\"screens\">\n                    <i class=\"fas fa-desktop\"></i>\n                    Screens\n                </a></li>\n            <li>\n             \n                <a href=\"#LibrarySubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\n                    <i class=\"fas fa-copy\"></i>\n                    Library\n                </a>\n                <ul class=\"collapse list-unstyled\" id=\"LibrarySubmenu\">\n                    <li>\n                        <a href=\"#\">Page 1</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">Page 2</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">Page 3</a>\n                    </li>\n                </ul>\n\n            </li>\n              <li>\n                <a routerLink=\"playlists\">\n                    <i class=\"fas fa-step-forward\"></i>\n                    Playlists\n                </a></li>\n\n                  <li>\n                <a routerLink=\"schedules\">\n                    <i class=\"fas fa-calendar-alt\"></i>\n                    Schedules\n                </a></li>\n\n                  <li>\n                <a routerLink=\"settings\">\n                    <i class=\"fas fa-cogs\"></i>\n                    Settings\n                </a></li>\n\n        </ul>\n\n    </nav>\n\n    <!-- Page Content  -->\n    <div id=\"content\">\n\n \n    <nav class=\"navbar navbar-default navbar-fixed-top\">\n        <div class=\"container\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\"><button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\">\n                    <i class=\"fas fa-align-left\"></i>                  \n                </button></li>\n                <li class=\"nav-item\"><a href=\"../navbar-static-top/\">Static top</a></li>\n                <li class=\"nav-item\"> <app-language-bar></app-language-bar></li>\n            </ul>\n        </div>\n    </nav>\n\n\n  \n \n\n \n\n\n\n        \n         <router-outlet></router-outlet>\n    </div>\n</div>\n\n\n\n\n "

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
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


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

module.exports = "<select [(ngModel)]=\"selectedLanguage\" (change)=\"selectLanguage()\">\n  <option *ngFor=\"let c of languages\" [ngValue]=\"c\">{{c.name}}</option>\n</select>"

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
var LanguageBarComponent = /** @class */ (function () {
    function LanguageBarComponent(translate) {
        this.translate = translate;
    }
    LanguageBarComponent.prototype.ngOnInit = function () {
        this.languages = [];
        this.languages.push({ key: 'he', lcid: 1037, name: 'עברית', dir: 'rtl' });
        this.languages.push({ key: 'en', lcid: 1025, name: 'English', dir: 'ltr' });
        this.languages.push({ key: 'de', lcid: 1037, name: 'Dutche', dir: 'ltr' });
    };
    LanguageBarComponent.prototype.selectLanguage = function () {
        this.translate.use(this.selectedLanguage.key);
    };
    LanguageBarComponent = __decorate([
        core_1.Component({
            selector: 'app-language-bar',
            template: __webpack_require__("../../../../../src/app/language-bar/language-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/language-bar/language-bar.component.css")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService])
    ], LanguageBarComponent);
    return LanguageBarComponent;
}());
exports.LanguageBarComponent = LanguageBarComponent;


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

module.exports = "<p>\n  library works!\n</p>\n"

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

module.exports = "<div>\n<app-language-bar></app-language-bar>\n\t<div class=\"limiter\">\n\t\t<div class=\"container-login100\">\n\t\t\t<div class=\"wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30\">\n\t\t\t\t<form class=\"login100-form validate-form\">\n\t\t\t\t\t<span class=\"login100-form-title p-b-55\">\n\t\t\t\t\t\t{{\"LOGIN.TITLE\" | translate}}\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" [attr.data-validate]=\"'LOGIN.INSERT_USERNAME' | translate\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"text\" name=\"userName\" placeholder=\"Email\" [(ngModel)]=\"userName\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-envelope\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-16\" >\n\t\t\t\t\t\t<input class=\"input100\" type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n\t\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t\t\t<span class=\"symbol-input100\">\n\t\t\t\t\t\t\t<span class=\"lnr lnr-lock\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"contact100-form-checkbox m-l-4\">\n\t\t\t\t\t\t<input class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n\t\t\t\t\t\t<label class=\"label-checkbox100\" for=\"ckb1\">\n\t\t\t\t\t\t\t{{\"LOGIN.REMEMBER_ME\" | translate}}\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"container-login100-form-btn p-t-25\">\n\t\t\t\t\t\t<button class=\"login100-form-btn\" (click)=\"tryLogin()\">\n\t\t\t\t\t\t\t\t{{\"LOGIN.LOGIN_BTN\" | translate}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n \n\t\t\t\t\t<div class=\"text-center w-full p-t-25\">\n\t\t\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t\tNot a member?\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<a class=\"txt1 bo1 hov1\" href=\"#\"  routerLink=\"/signup\">\n\t\t\t\t\t\t\tSign up now\t\t\t\t\t\t\t\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n\n\n\n\n\n<!-- Simple pop-up dialog box containing a form -->\n<dialog id=\"favDialog\">\n  <form method=\"dialog\">\n    <p><label>Favorite animal:\n      <select>\n        <option></option>\n        <option>Brine shrimp</option>\n        <option>Red panda</option>\n        <option>Spider monkey</option>\n      </select>\n    </label></p>\n    <menu>\n      <button>Cancel</button>\n      <button>Confirm</button>\n    </menu>\n  </form>\n</dialog>\n\n<menu>\n  <button id=\"updateDetails\">Update details</button>\n</menu>\n\n<div id=\"output\"></div>\n\n<script>\n(function() {\n  var updateButton = document.getElementById('updateDetails');\n  var favDialog = document.getElementById('favDialog');\n  var outputBox = document.getElementById(\"output\");\n\n  // “Update details” button opens the <dialog> modally\n  updateButton.addEventListener('click', function() {\n    favDialog.showModal();\n    output.innerHTML += \"<div>\" + favDialog.returnValue + \" button clicked!</div>\";\n  });\n})();\n</script>\n \n\n    <ng-template #share>\n        <div class=\"modal-body text-center\">\n\n            <p>Share your group.</p>\n            <pre>{{group.GroupId}}</pre>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <ng-template #join>\n        <div class=\"modal-body text-center\">\n            <p>Join a group.</p>\n            <div>\n                <label>Group code</label>\n                <input type=\"text\" class=\"form-control\" #group_code />\n            </div>\n            <a type=\"button\" class=\"btn btn-primary\" (click)=\"JoinConfirm(group_code.value)\">Join</a>\n            <a type=\"button\" class=\"btn btn-default\" (click)=\"decline()\">Cancel</a>\n        </div>\n    </ng-template>\n\n    <div class=\"float-left dropdown\" *ngIf=\"userData && group\">\n        <a class=\"btn btn-secondary dropdown-toggle white\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            {{group.Name}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"position: absolute\">\n            <a class=\"dropdown-item\" (click)=\"setGroup(item)\" *ngFor=\"let item of userData.groups\">{{item.Name}}</a>\n\n            <a class=\"dropdown-item\" (click)=\"JoinGroup(join)\">Join group</a>\n            <a class=\"dropdown-item\" (click)=\"ShareGroup(share)\">Share group</a>\n        </div>\n\n    </div>\n</div>"

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
var client_1 = __webpack_require__("../../../../@signnature/client/index.js");
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
                    case 0: return [4 /*yield*/, client_1.Auth.token({ Email: this.userName, Password: this.password })];
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

/***/ "../../../../../src/app/playlists/playlists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/playlists/playlists.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  playlists works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/playlists/playlists.component.ts":
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
var PlaylistsComponent = /** @class */ (function () {
    function PlaylistsComponent() {
    }
    PlaylistsComponent.prototype.ngOnInit = function () {
    };
    PlaylistsComponent = __decorate([
        core_1.Component({
            selector: 'app-playlists',
            template: __webpack_require__("../../../../../src/app/playlists/playlists.component.html"),
            styles: [__webpack_require__("../../../../../src/app/playlists/playlists.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlaylistsComponent);
    return PlaylistsComponent;
}());
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

/***/ "../../../../../src/app/screens/screen/screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/screen/screen.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  screen works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/screens/screen/screen.component.ts":
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
var ScreenComponent = /** @class */ (function () {
    function ScreenComponent() {
    }
    ScreenComponent.prototype.ngOnInit = function () {
    };
    ScreenComponent = __decorate([
        core_1.Component({
            selector: 'app-screen',
            template: __webpack_require__("../../../../../src/app/screens/screen/screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/screen/screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScreenComponent);
    return ScreenComponent;
}());
exports.ScreenComponent = ScreenComponent;


/***/ }),

/***/ "../../../../../src/app/screens/screens.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n    width: 100%;\r\n    background: blue;\r\n}\r\n.container div {\r\n    width: 24.25%;\r\n    height: 2.5em;\r\n    background-color: red;\r\n    margin-right: 1%;\r\n    margin-bottom: 1em;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n.container div:nth-child(4n) {\r\n    margin-right:0;\r\n}\r\n.modal{\r\n    margin: auto;\r\n    width: 50%;\r\n    height: 50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screens/screens.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  screens works!\n</p>\n\n\n<button (click)=\"modalNew()\">+</button>\n{{displayModalNew}}\n\n\n\n<dialog  class=\"modal\">\n<div class=\"container\">\ndialog</div>\n</dialog>\n\n\n<div class=\"container\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n</div>\n\n\n<!--\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">First</th>\n      <th scope=\"col\">Last</th>\n      <th scope=\"col\">Handle</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">3</th>\n      <td>Larry</td>\n      <td>the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>\n\n<table class=\"table\">\n  <thead class=\"thead-light\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">First</th>\n      <th scope=\"col\">Last</th>\n      <th scope=\"col\">Handle</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">3</th>\n      <td>Larry</td>\n      <td>the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>\n-->"

/***/ }),

/***/ "../../../../../src/app/screens/screens.component.ts":
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
var client_1 = __webpack_require__("../../../../@signnature/client/index.js");
var ScreensComponent = /** @class */ (function () {
    function ScreensComponent(_ngZone) {
        this._ngZone = _ngZone;
    }
    ScreensComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        debugger;
                        _a = this;
                        return [4 /*yield*/, client_1.ScreensDataController.query({})];
                    case 1:
                        _a.screens = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScreensComponent.prototype.modalNew = function () {
        var _this = this;
        this._ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                debugger;
                this.displayModalNew = true;
                return [2 /*return*/];
            });
        }); });
    };
    ScreensComponent = __decorate([
        core_1.Component({
            selector: 'app-screens',
            template: __webpack_require__("../../../../../src/app/screens/screens.component.html"),
            styles: [__webpack_require__("../../../../../src/app/screens/screens.component.css")]
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], ScreensComponent);
    return ScreensComponent;
}());
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
var screen_component_1 = __webpack_require__("../../../../../src/app/screens/screen/screen.component.ts");
var ScreensModule = /** @class */ (function () {
    function ScreensModule() {
    }
    ScreensModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [screens_component_1.ScreensComponent, screen_component_1.ScreenComponent],
            entryComponents: [screens_component_1.ScreensComponent],
            exports: [screens_component_1.ScreensComponent]
        })
    ], ScreensModule);
    return ScreensModule;
}());
exports.ScreensModule = ScreensModule;


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
var client_1 = __webpack_require__("../../../../@signnature/client/index.js");
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
                        return [4 /*yield*/, client_1.Auth.signup(userRequest)];
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
var client_1 = __webpack_require__("../../../../@methodus/client/dist/methodus-client.js");
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