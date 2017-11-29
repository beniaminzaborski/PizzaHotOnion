webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1>Pizza Hot Onion</h1>\r\n  <p>Hungry? Choose your favorite room and grab the slice!</p>\r\n  <p>Anytime! Anywhere!</p>\r\n  <p>\r\n    <a class=\"btn btn-primary btn-lg\" routerLink=\"/orders\" role=\"button\">Grab it!</a>\r\n  </p>\r\n  <br>\r\n  <p>\r\n    <small class=\"text-muted\">Powered by: .NET Core, SingulaR, Angular 4, MongoDB</small>\r\n  </p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(router /*,
        private authenticationService: AuthenticationService*/) {
        this.router = router; /*,
        private authenticationService: AuthenticationService*/
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/about/about.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] /*,
        private authenticationService: AuthenticationService*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] /*,
        private authenticationService: AuthenticationService*/) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rooms_rooms_component__ = __webpack_require__("../../../../../src/app/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_auth_auth_guard__ = __webpack_require__("../../../../../src/app/shared/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_auth_login_guard__ = __webpack_require__("../../../../../src/app/shared/auth/login.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_auth_login_guard__["a" /* LoginGuard */]] },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_3__orders_orders_component__["a" /* OrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__shared_auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'rooms', component: __WEBPACK_IMPORTED_MODULE_5__rooms_rooms_component__["a" /* RoomsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__shared_auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__shared_auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__["a" /* UserProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__shared_auth_auth_guard__["a" /* AuthGuard */]] },
    { path: '', redirectTo: '/orders', pathMatch: 'full' },
    { path: '**', redirectTo: '/orders' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav role=\"navigation\" class=\"navbar navbar-inverse navbar-fixed-top\" *ngIf=\"router.url != '/login'\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n        aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\">Hot Onion</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n          <a routerLink=\"/orders\" [routerLinkActive]=\"['active']\">Orders</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/rooms\" [routerLinkActive]=\"['active']\">Rooms</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a routerLink=\"/about\" [routerLinkActive]=\"['active']\">About</a>\r\n        </li>\r\n        <!--<li class=\"navbar-text pull-left\">{{username}}</li>-->\r\n        <li class=\"dropdown pull-right\">\r\n          <a href=\"#\" data-toggle=\"dropdown\" style=\"color:#777;\" class=\"dropdown-toggle\">\r\n            <span class=\"glyphicon glyphicon-user\"></span>\r\n            <b class=\"caret\"></b>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li>\r\n              <a routerLink=\"/profile\" [routerLinkActive]=\"['active']\" title=\"User profile\">\r\n                <span class=\"fa fa-user\" aria-hidden=\"true\"></span> Profile\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" title=\"Sign Out\" (click)=\"logout(); $event.preventDefault()\">\r\n                <span class=\"fa fa-sign-out\" aria-hidden=\"true\"></span> Sign Out\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<footer class=\"footer navbar-inverse navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <span class=\"text-muted pull-right\">\r\n      <small>&copy; 2017 Biz | ver. 0.7.6-alpha</small>\r\n    </span>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_authentication_service__ = __webpack_require__("../../../../../src/app/shared/auth/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__shared_auth_authentication_service__["a" /* AuthenticationService */]
        ],
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_auth_auth_guard__ = __webpack_require__("../../../../../src/app/shared/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_auth_login_guard__ = __webpack_require__("../../../../../src/app/shared/auth/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__orders_orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rooms_rooms_component__ = __webpack_require__("../../../../../src/app/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_json_content_interceptor__ = __webpack_require__("../../../../../src/app/shared/json-content.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_auth_auth_interceptor__ = __webpack_require__("../../../../../src/app/shared/auth/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_auth_unauthorized_interceptor__ = __webpack_require__("../../../../../src/app/shared/auth/unauthorized.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__rooms_rooms_component__["a" /* RoomsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_17__shared_auth_unauthorized_interceptor__["a" /* UnauthorizedInterceptor */], multi: true },
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_15__shared_json_content_interceptor__["a" /* JsonContentInterceptor */], multi: true },
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_16__shared_auth_auth_interceptor__["a" /* AuthInterceptor */], multi: true },
            __WEBPACK_IMPORTED_MODULE_6__shared_auth_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_7__shared_auth_login_guard__["a" /* LoginGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Specific styles of signin component\r\n */\r\n\r\n/*\r\n * General styles\r\n */\r\n body, html {\r\n  height: 100%;\r\n  /*background-repeat: no-repeat;*/\r\n  /*background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n}\r\n\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n\r\n/*\r\n* Card component\r\n*/\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n\r\n/*\r\n* Form styles\r\n*/\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n\r\n.btn.btn-submit {\r\n  /*background-color: #4d90fe; */\r\n  background-color: #CB1D00; /*rgb(104, 145, 162);*/\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-toggle {\r\n  color: #696969;\r\n  background-color: #DCDCDC;\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n\r\n.btn.btn-submit:hover,\r\n.btn.btn-submit:active,\r\n.btn.btn-submit:focus {\r\n  background-color: #a01b0c;\r\n}\r\n\r\n.btn.btn-toggle:hover,\r\n.btn.btn-toggle:active,\r\n.btn.btn-toggle:focus {\r\n  background-color: #C0C0C0;\r\n}\r\n\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: #5b7783;\r\n}\r\n\r\n.login-header {\r\ntext-align: center;\r\n}\r\n\r\n.login-logo {\r\ncolor: #CD0000;\r\n}\r\n\r\n.login-image {\r\nmargin-right: 10px;\r\nwidth: 50px;\r\nheight: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-header\">\r\n  <h1 class=\"login-logo\">Hot Onion</h1>\r\n  <h3>Sign in to grab your slice</h3>\r\n</div>\r\n<div class=\"card card-container\">\r\n  <!-- <div [ngBusy]=\"{busy: busy, message: 'Proszę czekać...', backdrop: false, delay: 200, minDuration: 600}\"></div> -->\r\n  <img src=\"assets/login_avatar.png\" class=\"profile-img-card\" />\r\n  <p id=\"profile-name\" class=\"profile-name-card\"></p>\r\n  <form class=\"form-signin\" #loginForm=\"ngForm\" (submit)=\"submit()\">\r\n    <span id=\"reauth-email\" class=\"reauth-email\"></span>\r\n    <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"E-mail\" [(ngModel)]=\"user.email\" required autofocus>\r\n    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\" required>\r\n    <!--<div id=\"remember\" class=\"checkbox\">\r\n        <label>\r\n          <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n        </label>\r\n      </div>-->\r\n    <button class=\"btn btn-lg btn-primary btn-block btn-submit\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">{{isLoggingIn ? 'Sign In' : 'Sign Up'}}</button>\r\n    <button class=\"btn btn-lg btn-primary btn-block btn-toggle\" type=\"button\" (click)=\"toggleDisplay()\">{{isLoggingIn ? 'Sign Up' : 'Back to Login'}}</button>\r\n  </form>\r\n  <!--<p>\r\n      <a href=\"#\" class=\"forgot-password\">\r\n        Forgot the password?\r\n      </a>\r\n    </p>-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_user_model__ = __webpack_require__("../../../../../src/app/shared/auth/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_authentication_service__ = __webpack_require__("../../../../../src/app/shared/auth/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.isLoggingIn = true;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__shared_auth_user_model__["a" /* User */]();
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user)
            .subscribe(function () {
            _this.router.navigate(["/orders"]);
        }, function (error) {
            alert("Unfortunately we could not find your account.");
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.authenticationService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        //let container = <View>this.container.nativeElement;
        //container.animate({
        //  backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
        //  duration: 200
        //});
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_auth_authentication_service__["a" /* AuthenticationService */]],
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/orders/order.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order() {
    }
    return Order;
}());

//# sourceMappingURL=order.model.js.map

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n  <li role=\"presentation\" *ngFor=\"let room of rooms\" [ngClass]=\"{ 'active' : room.isActive }\">\r\n    <a href=\"\" (click)=\"selectRoom(room.name)\">{{room.name}}</a>\r\n  </li>\r\n</ul>\r\n\r\n<div *ngIf=\"selectedRoomName\">\r\n  <div>\r\n    <div *ngIf=\"pizzas > 0\">\r\n      <h4>\r\n        <span *ngIf=\"!isApproved\">\r\n          <strong>{{slicesToGet}}</strong> {{ slicesToGet == 1 ? 'slice' : 'slices' }} of\r\n          <strong>{{pizzas}}</strong> {{ pizzas == 1 ? 'pizza' : 'pizzas' }} to get\r\n        </span>\r\n        <span *ngIf=\"isApproved\">\r\n          <strong>{{pizzas}}</strong> {{ pizzas == 1 ? 'pizza' : 'pizzas' }} approved\r\n        </span>\r\n      </h4>\r\n    </div>\r\n    <div *ngIf=\"pizzas == 0\">\r\n      <h4>No orders</h4>\r\n    </div>\r\n\r\n    <form #orderForm=\"ngForm\" (submit)=\"makeOrder()\" class=\"form-inline\">\r\n      <div class=\"form-group\">\r\n        <input type=\"number\" class=\"form-control\" id=\"quantity\" name=\"quantity\" [(ngModel)]=\"order.quantity\" placeholder=\"Number of slices\"\r\n          [disabled]=\"isApproved\" required>\r\n        <button class=\"btn btn-primary btn-submit\" type=\"submit\" [disabled]=\"!orderForm.form.valid || isApproved\">Grab</button>\r\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"cancel()\" [disabled]=\"isApproved\">Cancel</button>\r\n        \r\n        <button class=\"btn btn-warning\" type=\"button\" (click)=\"approveOrders()\" [disabled]=\"isApproved || pizzas == 0\">Approve orders</button>\r\n        <!-- <button class=\"btn btn-success\" type=\"button\" (click)=\"refresh()\">Refresh</button> -->\r\n      </div>\r\n    </form>\r\n    <br>\r\n  </div>\r\n\r\n  <br>\r\n\r\n  <div class=\"col-md-10\" *ngIf=\"pizzas > 0\">\r\n    <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\" [colors]=\"pieChartColours\" \r\n      (chartHover)=\"chartHovered($event)\"\r\n      (chartClick)=\"chartClicked($event)\">\r\n    </canvas>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!selectedRoomName\">\r\n  <h3>Choose your room</h3>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rooms_rooms_service__ = __webpack_require__("../../../../../src/app/rooms/rooms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_model__ = __webpack_require__("../../../../../src/app/orders/order.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_authentication_service__ = __webpack_require__("../../../../../src/app/shared/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orders_service__ = __webpack_require__("../../../../../src/app/orders/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_error_helper__ = __webpack_require__("../../../../../src/app/shared/error-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aspnet_signalr_client__ = __webpack_require__("../../../../@aspnet/signalr-client/dist/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aspnet_signalr_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__aspnet_signalr_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_message_model__ = __webpack_require__("../../../../../src/app/shared/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_config__ = __webpack_require__("../../../../../src/app/shared/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var OrdersComponent = (function () {
    function OrdersComponent(router, roomService, ordersService, authenticationService) {
        this.router = router;
        this.roomService = roomService;
        this.ordersService = ordersService;
        this.authenticationService = authenticationService;
        this.rooms = [];
        this.orderItems = [];
        this.slices = 0;
        this.pizzas = 0;
        this.slicesToGet = 0;
        this.isApproved = false;
        // Pie
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartColours = [{ backgroundColor: ["#FFA1B5", "#7B68EE", "#87CEFA", "#B22222", "#FFE29A", "#D2B48C", "#90EE90", "#FF69B4", "#EE82EE", "#6A5ACD", "#b8436d", "#9ACD32", "#00d9f9", "#800080", "#FF6347", "#DDA0DD", "#a4c73c", "#a4add3", "#008000", "#DAA520", "#00BFFF", "#2F4F4F", "#FF8C00", "#A9A9A9", "#FFB6C1", "#00FFFF", "#6495ED", "#7FFFD4", "#F0F8FF", "#7FFF00", "#008B8B", "#9932CC", "#E9967A", "#8FBC8F", "#483D8B", "#D3D3D3", "#ADD8E6"] }];
        this.pieChartType = 'pie';
        this.order = new __WEBPACK_IMPORTED_MODULE_3__order_model__["a" /* Order */]();
        this.order.who = this.authenticationService.getLoggedUser();
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.registerSignalR();
        this.loadRooms();
    };
    OrdersComponent.prototype.registerSignalR = function () {
        var _this = this;
        var connection = new __WEBPACK_IMPORTED_MODULE_8__aspnet_signalr_client__["HubConnection"](__WEBPACK_IMPORTED_MODULE_10__shared_config__["a" /* Config */].baseUrl + "message");
        connection.on('send', function (data) {
            //console.log(data);
            var message = data;
            if (message) {
                switch (message.operation) {
                    case __WEBPACK_IMPORTED_MODULE_9__shared_message_model__["a" /* OperationType */].RoomCreated:
                    case __WEBPACK_IMPORTED_MODULE_9__shared_message_model__["a" /* OperationType */].RoomDeleted:
                        _this.loadRooms();
                        break;
                    case __WEBPACK_IMPORTED_MODULE_9__shared_message_model__["a" /* OperationType */].SliceGrabbed:
                    case __WEBPACK_IMPORTED_MODULE_9__shared_message_model__["a" /* OperationType */].SliceCancelled:
                    case __WEBPACK_IMPORTED_MODULE_9__shared_message_model__["a" /* OperationType */].OrdersApproved:
                        if (message.context == _this.selectedRoomName)
                            _this.loadOrdersInRoom(_this.selectedRoomName);
                        break;
                }
            }
        });
        connection.start()
            .then(function () {
            //console.log('MessageHub Connected');
        });
    };
    OrdersComponent.prototype.loadRooms = function () {
        var _this = this;
        this.roomService.getRooms()
            .subscribe(function (rooms) { return _this.onLoadRooms(rooms); });
    };
    OrdersComponent.prototype.onLoadRooms = function (rooms) {
        var _this = this;
        this.rooms = rooms;
        if (rooms.length > 0) {
            if (this.selectedRoomName && this.rooms.some(function (r) { return r.name == _this.selectedRoomName; }))
                this.selectRoom(this.selectedRoomName);
            else
                this.selectRoom(rooms[0].name);
        }
    };
    OrdersComponent.prototype.selectRoom = function (roomName) {
        this.rooms.forEach(function (r) {
            r.isActive = r.name == roomName;
        });
        this.selectedRoomName = roomName;
        this.order.room = roomName;
        this.loadOrdersInRoom(this.selectedRoomName);
        return false;
    };
    OrdersComponent.prototype.loadOrdersInRoom = function (roomName) {
        var _this = this;
        this.ordersService.getOrders(roomName)
            .subscribe(function (orderItems) { return _this.onLoadOrderItems(orderItems); }, function (error) { return alert(__WEBPACK_IMPORTED_MODULE_7__shared_error_helper__["a" /* ErrorHelper */].getErrorMessage(error)); });
    };
    OrdersComponent.prototype.onLoadOrderItems = function (orderItems) {
        this.orderItems = orderItems;
        this.slices = 0;
        this.pizzas = 0;
        this.setNumberOfSlices();
        this.checkIsApproved();
        this.preparePizzaChart();
    };
    OrdersComponent.prototype.checkIsApproved = function () {
        this.isApproved = this.orderItems.some(function (item) { return item.isApproved; });
    };
    OrdersComponent.prototype.setNumberOfSlices = function () {
        var _this = this;
        var currentUserEmail = this.authenticationService.getLoggedUser();
        this.orderItems.forEach(function (o) {
            if (o.who == currentUserEmail) {
                _this.order.quantity = o.quantity;
            }
        });
    };
    OrdersComponent.prototype.preparePizzaChart = function () {
        var _this = this;
        var pieChartLabels = [];
        var pieChartData = [];
        this.orderItems.forEach(function (o) {
            _this.slices += o.quantity;
            pieChartLabels.push(o.who);
            pieChartData.push(o.quantity);
        });
        this.pizzas = Math.ceil(this.slices / 8);
        if (this.pizzas == 0)
            return;
        this.slicesToGet = (this.pizzas * 8) - this.slices;
        if (this.slicesToGet > 0) {
            pieChartLabels.push('FREE');
            pieChartData.push(this.slicesToGet);
        }
        this.pieChartLabels = pieChartLabels;
        this.pieChartData = pieChartData;
        setTimeout(function () {
            if (_this.chart && _this.chart.chart && _this.chart.chart.config) {
                _this.chart.chart.config.data.labels = _this.pieChartLabels;
                //this.chart.chart.config.data.datasets = this.pieChartData;
                _this.chart.chart.config.data.colors = _this.pieChartColours;
                _this.chart.chart.update();
            }
        });
    };
    OrdersComponent.prototype.makeOrder = function () {
        var _this = this;
        this.ordersService.makeOrder(this.order)
            .subscribe(function (result) {
            if (result)
                _this.loadOrdersInRoom(_this.selectedRoomName);
        }, function (error) { return alert(__WEBPACK_IMPORTED_MODULE_7__shared_error_helper__["a" /* ErrorHelper */].getErrorMessage(error)); });
        return false;
    };
    OrdersComponent.prototype.cancel = function () {
        var _this = this;
        var orderId = this.getOrderId();
        this.ordersService.removeOrder(this.selectedRoomName, orderId)
            .subscribe(function (result) {
            if (result)
                _this.loadOrdersInRoom(_this.selectedRoomName);
        }, function (error) { return alert(__WEBPACK_IMPORTED_MODULE_7__shared_error_helper__["a" /* ErrorHelper */].getErrorMessage(error)); });
        return false;
    };
    OrdersComponent.prototype.getOrderId = function () {
        var _this = this;
        var orderId;
        this.orderItems.forEach(function (o) {
            if (o.who == _this.authenticationService.getLoggedUser()) {
                orderId = o.id;
            }
        });
        return orderId;
    };
    OrdersComponent.prototype.refresh = function () {
        this.loadOrdersInRoom(this.selectedRoomName);
        return false;
    };
    OrdersComponent.prototype.approveOrders = function () {
        var _this = this;
        this.ordersService.approveOrders(this.selectedRoomName)
            .subscribe(function (result) { return _this.refresh(); }, function (error) { return alert(__WEBPACK_IMPORTED_MODULE_7__shared_error_helper__["a" /* ErrorHelper */].getErrorMessage(error)); });
    };
    // events
    OrdersComponent.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    OrdersComponent.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    return OrdersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__["BaseChartDirective"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["BaseChartDirective"]) === "function" && _a || Object)
], OrdersComponent.prototype, "chart", void 0);
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__rooms_rooms_service__["a" /* RoomService */],
            __WEBPACK_IMPORTED_MODULE_5__orders_service__["a" /* OrdersService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_auth_authentication_service__["a" /* AuthenticationService */]
        ],
        template: __webpack_require__("../../../../../src/app/orders/orders.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__rooms_rooms_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rooms_rooms_service__["a" /* RoomService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__orders_service__["a" /* OrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__orders_service__["a" /* OrdersService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object])
], OrdersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/orders/orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config__ = __webpack_require__("../../../../../src/app/shared/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersService = (function () {
    function OrdersService(http) {
        this.http = http;
    }
    OrdersService.prototype.getOrders = function (room) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_config__["a" /* Config */].apiUrl + "orders/" + room);
    };
    OrdersService.prototype.makeOrder = function (order) {
        var body = JSON.stringify(order);
        var room = order.room;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_config__["a" /* Config */].apiUrl + "orders/" + room, body, { observe: 'response' }).map(function (response) { return response.status == 201; });
    };
    OrdersService.prototype.removeOrder = function (room, id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__shared_config__["a" /* Config */].apiUrl + "orders/" + room + "/" + id, { observe: 'response' }).map(function (response) { return response.status == 204; });
    };
    OrdersService.prototype.approveOrders = function (room) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_config__["a" /* Config */].apiUrl + "orders/" + room + "/approve", null, { observe: 'response' }).map(function (response) { return response.status == 201; });
    };
    return OrdersService;
}());
OrdersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], OrdersService);

var _a;
//# sourceMappingURL=orders.service.js.map

/***/ }),

/***/ "../../../../../src/app/rooms/room.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
var Room = (function () {
    function Room() {
    }
    return Room;
}());

//# sourceMappingURL=room.model.js.map

/***/ }),

/***/ "../../../../../src/app/rooms/rooms.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <br>\r\n  <form #roomForm=\"ngForm\" (submit)=\"addRoom()\" class=\"form-inline\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Room name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"room.name\" required>\r\n    </div>\r\n    <button class=\"btn btn-primary btn-submit\" type=\"submit\" [disabled]=\"!roomForm.form.valid\">Add</button>\r\n    <button class=\"btn btn-danger\" type=\"button\" [disabled]=\"!selectedRoom\" (click)=\"removeRoom()\">Remove selected</button>\r\n  </form>\r\n  <br>\r\n</div>\r\n\r\n<div class=\"list-group\">\r\n  <a href=\"#\" class=\"list-group-item\" *ngFor=\"let room of rooms\" (click)=\"selectRoom(room)\" \r\n    [ngClass]=\"{ 'active' : selectedRoom?.name == room.name }\">{{room.name}}</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/rooms/rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_model__ = __webpack_require__("../../../../../src/app/rooms/room.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rooms_service__ = __webpack_require__("../../../../../src/app/rooms/rooms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_error_helper__ = __webpack_require__("../../../../../src/app/shared/error-helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomsComponent = (function () {
    function RoomsComponent(router, roomService) {
        this.router = router;
        this.roomService = roomService;
        this.rooms = [];
        this.selectedRoom = null;
        this.room = new __WEBPACK_IMPORTED_MODULE_2__room_model__["a" /* Room */]();
    }
    RoomsComponent.prototype.ngOnInit = function () {
        this.loadRooms();
    };
    RoomsComponent.prototype.loadRooms = function () {
        var _this = this;
        this.roomService.getRooms()
            .subscribe(function (rooms) { return _this.rooms = rooms; }, function (error) { return alert(__WEBPACK_IMPORTED_MODULE_4__shared_error_helper__["a" /* ErrorHelper */].getErrorMessage(error)); });
    };
    RoomsComponent.prototype.addRoom = function () {
        var _this = this;
        this.roomService.addRoom(this.room)
            .subscribe(function (result) {
            if (result) {
                _this.room.name = '';
                _this.selectedRoom = null;
                _this.loadRooms();
            }
        }, function (error) { return alert(__WEBPACK_IMPORTED_MODULE_4__shared_error_helper__["a" /* ErrorHelper */].getErrorMessage(error)); });
    };
    RoomsComponent.prototype.selectRoom = function (room) {
        if (this.selectedRoom == room)
            this.selectedRoom = null;
        else
            this.selectedRoom = room;
        return false;
    };
    RoomsComponent.prototype.removeRoom = function () {
        var _this = this;
        if (!this.selectedRoom)
            return false;
        this.roomService.removeRoom(this.selectedRoom.name)
            .subscribe(function (result) {
            if (result) {
                _this.selectedRoom = null;
                _this.loadRooms();
            }
        }, function (error) { return alert(__WEBPACK_IMPORTED_MODULE_4__shared_error_helper__["a" /* ErrorHelper */].getErrorMessage(error)); });
        return false;
    };
    return RoomsComponent;
}());
RoomsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__rooms_service__["a" /* RoomService */]
        ],
        template: __webpack_require__("../../../../../src/app/rooms/rooms.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__rooms_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__rooms_service__["a" /* RoomService */]) === "function" && _b || Object])
], RoomsComponent);

var _a, _b;
//# sourceMappingURL=rooms.component.js.map

/***/ }),

/***/ "../../../../../src/app/rooms/rooms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config__ = __webpack_require__("../../../../../src/app/shared/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomService = (function () {
    function RoomService(http) {
        this.http = http;
    }
    RoomService.prototype.getRooms = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_config__["a" /* Config */].apiUrl + "rooms");
    };
    RoomService.prototype.addRoom = function (room) {
        var body = JSON.stringify(room);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_config__["a" /* Config */].apiUrl + "rooms", body, { observe: 'response' }).map(function (response) { return response.status == 201; });
    };
    RoomService.prototype.removeRoom = function (room) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__shared_config__["a" /* Config */].apiUrl + "rooms/" + room, { observe: 'response' }).map(function (response) { return response.status == 204; });
    };
    return RoomService;
}());
RoomService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], RoomService);

var _a;
//# sourceMappingURL=rooms.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jwt_helper__ = __webpack_require__("../../../../../src/app/shared/auth/jwt-helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.isLoggedAndNotExpired()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard.prototype.isLoggedAndNotExpired = function () {
        var token = localStorage.getItem('token');
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_2__jwt_helper__["a" /* JwtHelper */]();
        return token != null && !jwtHelper.isTokenExpired(token);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthInterceptor = (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var token = localStorage.getItem('token');
        if (!token)
            return next.handle(req);
        var authReq = req.clone({
            headers: req.headers
                .set('Authorization', "Bearer " + token)
        });
        return next.handle(authReq);
    };
    return AuthInterceptor;
}());
AuthInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AuthInterceptor);

//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_config__ = __webpack_require__("../../../../../src/app/shared/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5_app_shared_config__["a" /* Config */].apiUrl + "token", JSON.stringify({
            username: user.email,
            password: user.password,
            grant_type: "password"
        }), { observe: 'response' })
            .map(function (response) {
            var data = response.body;
            return { token: data['Result']['access_token'], login: user.email };
        })
            .do(function (authData) {
            localStorage.setItem('token', authData.token);
            localStorage.setItem('username', authData.login);
        })
            .catch(this.handleErrors);
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
    };
    AuthenticationService.prototype.getLoggedUser = function () {
        return localStorage.getItem('username');
    };
    AuthenticationService.prototype.changePassword = function (changePassword) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5_app_shared_config__["a" /* Config */].apiUrl + "user/changepassword", JSON.stringify({
            email: changePassword.email,
            currentPasswd: changePassword.currentPassword,
            Passwd: changePassword.newPassword,
            Passwd2: changePassword.newPassword2,
        }), { observe: 'response' })
            .catch(this.handleErrors);
    };
    AuthenticationService.prototype.register = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5_app_shared_config__["a" /* Config */].apiUrl + "user/register", JSON.stringify({
            email: user.email,
            passwd: user.password
        }), { observe: 'response' })
            .catch(this.handleErrors);
    };
    AuthenticationService.prototype.getUserProfile = function (email) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_app_shared_config__["a" /* Config */].apiUrl + "user/" + email);
    };
    AuthenticationService.prototype.editUserProfile = function (userProfile) {
        var body = JSON.stringify(userProfile);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5_app_shared_config__["a" /* Config */].apiUrl + "user/profile/" + userProfile.email, body, { observe: 'response' }).map(function (response) { return response.status == 204; });
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthenticationService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/change-password.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePassword; });
var ChangePassword = (function () {
    function ChangePassword() {
    }
    return ChangePassword;
}());

//# sourceMappingURL=change-password.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/jwt-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtHelper; });
var JwtHelper = (function () {
    function JwtHelper() {
    }
    JwtHelper.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw 'Illegal base64url string!';
            }
        }
        return this.b64DecodeUnicode(output);
    };
    // credits for decoder goes to https://github.com/atk
    JwtHelper.prototype.b64decode = function (str) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var output = '';
        str = String(str).replace(/=+$/, '');
        if (str.length % 4 == 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
        // initialize result and counters
        var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
        // get next character
        buffer = str.charAt(idx++); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            // and if not first of each 4 characters,
            // convert the first 8 bits to one ascii character
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    };
    // https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
    JwtHelper.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map.call(this.b64decode(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    JwtHelper.prototype.decodeToken = function (token) {
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    };
    JwtHelper.prototype.getTokenExpirationDate = function (token) {
        var decoded;
        decoded = this.decodeToken(token);
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
        var date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date == null) {
            return false;
        }
        // Token expired?
        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    return JwtHelper;
}());

//# sourceMappingURL=jwt-helper.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jwt_helper__ = __webpack_require__("../../../../../src/app/shared/auth/jwt-helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = (function () {
    function LoginGuard(router) {
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function () {
        if (this.isLoggedAndNotExpired()) {
            this.router.navigate(['/orders']);
            return false;
        }
        return true;
    };
    LoginGuard.prototype.isLoggedAndNotExpired = function () {
        var token = localStorage.getItem('token');
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_2__jwt_helper__["a" /* JwtHelper */]();
        return token != null && !jwtHelper.isTokenExpired(token);
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], LoginGuard);

var _a;
//# sourceMappingURL=login.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/unauthorized.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnauthorizedInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnauthorizedInterceptor = (function () {
    function UnauthorizedInterceptor(router) {
        this.router = router;
    }
    UnauthorizedInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req)
            .catch(function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    // JWT expired, go to login
                    _this.router.navigate(['/login']);
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].empty();
                }
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    return UnauthorizedInterceptor;
}());
UnauthorizedInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object])
], UnauthorizedInterceptor);

var _a;
//# sourceMappingURL=unauthorized.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/user-profile.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfile; });
var UserProfile = (function () {
    function UserProfile(email, emailNotification) {
        if (emailNotification === void 0) { emailNotification = false; }
        this.email = email;
        this.emailNotification = emailNotification;
    }
    return UserProfile;
}());

//# sourceMappingURL=user-profile.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var Config = (function () {
    function Config() {
    }
    return Config;
}());

Config.baseUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].restBaseUrl;
Config.apiUrl = Config.baseUrl + "api/";
Config.title = "Hot Onion";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/app/shared/error-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHelper; });
var ErrorHelper = (function () {
    function ErrorHelper() {
    }
    ErrorHelper.getErrorMessage = function (error) {
        //console.log('error', error);
        var errorMessage = '';
        if (error._body)
            errorMessage = error._body;
        else if (error.error)
            errorMessage = error.error;
        else if (error.statusText)
            errorMessage = error.statusText;
        if (error.status == 403)
            errorMessage = 'You do not have enought priviliges';
        return errorMessage;
    };
    return ErrorHelper;
}());

//# sourceMappingURL=error-helper.js.map

/***/ }),

/***/ "../../../../../src/app/shared/json-content.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonContentInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JsonContentInterceptor = (function () {
    function JsonContentInterceptor() {
    }
    JsonContentInterceptor.prototype.intercept = function (req, next) {
        var jsonReq = req.clone({
            headers: req.headers.set('Content-Type', 'application/json')
        });
        return next.handle(jsonReq);
    };
    return JsonContentInterceptor;
}());
JsonContentInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], JsonContentInterceptor);

//# sourceMappingURL=json-content.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/shared/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Message */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationType; });
var Message = (function () {
    function Message(operation, context) {
        this.operation = operation;
        this.context = context;
    }
    return Message;
}());

var OperationType;
(function (OperationType) {
    OperationType[OperationType["RoomCreated"] = 1] = "RoomCreated";
    OperationType[OperationType["RoomDeleted"] = 2] = "RoomDeleted";
    OperationType[OperationType["SliceGrabbed"] = 3] = "SliceGrabbed";
    OperationType[OperationType["SliceCancelled"] = 4] = "SliceCancelled";
    OperationType[OperationType["OrdersApproved"] = 5] = "OrdersApproved";
})(OperationType || (OperationType = {}));
//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card\">\r\n    <div class=\"card-block\"> -->\r\n<div class=\"col-xs-12 col-sm-6 offset-sm-3\">\r\n\r\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n    <li class=\"nav-item active\">\r\n      <a class=\"nav-link\" href=\"#profile\" role=\"tab\" data-toggle=\"tab\">User profile</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#password\" role=\"tab\" data-toggle=\"tab\">Change password</a>\r\n    </li>\r\n  </ul>\r\n\r\n  <!-- Tab panes -->\r\n  <div class=\"tab-content\">\r\n    <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"profile\">\r\n\r\n      <br/>\r\n      <form #profileForm=\"ngForm\" (submit)=\"saveProfile()\">\r\n        <fieldset>\r\n          <legend>User profile of {{model.email}}</legend>\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"emailNotification\" name=\"emailNotification\" [(ngModel)]=\"userProfileModel.emailNotification\"> E-mail notification\r\n            </label>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <br />\r\n        <div class=\"text-right\">\r\n          <button class=\"btn btn-primary btn-submit\" type=\"submit\" [disabled]=\"!profileForm.form.valid\">Save profile</button>\r\n        </div>\r\n\r\n      </form>\r\n\r\n\r\n    </div>\r\n    <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"password\">\r\n\r\n      <br/>\r\n      <form #changePasswdForm=\"ngForm\" (submit)=\"changePassword()\">\r\n        <fieldset>\r\n          <legend>Change password of {{model.email}}</legend>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Current password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"currentPassword\" name=\"currentPassword\" [(ngModel)]=\"model.currentPassword\"\r\n              required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">New password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"newPassword\" name=\"newPassword\" [(ngModel)]=\"model.newPassword\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">New password (again)</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"newPassword2\" name=\"newPassword2\" [(ngModel)]=\"model.newPassword2\" required>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <br />\r\n        <div class=\"text-right\">\r\n          <button class=\"btn btn-primary btn-submit\" type=\"submit\" [disabled]=\"!changePasswdForm.form.valid\">Change password</button>\r\n        </div>\r\n\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<!-- </div>\r\n  </div> -->"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_change_password_model__ = __webpack_require__("../../../../../src/app/shared/auth/change-password.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_authentication_service__ = __webpack_require__("../../../../../src/app/shared/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_user_profile_model__ = __webpack_require__("../../../../../src/app/shared/auth/user-profile.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfileComponent = (function () {
    function UserProfileComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__shared_auth_change_password_model__["a" /* ChangePassword */]();
        this.userProfileModel = new __WEBPACK_IMPORTED_MODULE_4__shared_auth_user_profile_model__["a" /* UserProfile */]('');
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.titleService.setTitle(Config.title + " - Profil użytkownika");
        this.model.email = this.getUsername();
        this.authenticationService.getUserProfile(this.model.email)
            .subscribe(function (profile) { return _this.userProfileModel = profile; });
    };
    UserProfileComponent.prototype.changePassword = function () {
        this.authenticationService.changePassword(this.model)
            .subscribe(function () {
            alert("Your password was successfully changed.");
        }, function (error) {
            alert("Unfortunately we could not change your password. Please try again.");
        });
    };
    UserProfileComponent.prototype.saveProfile = function () {
        this.authenticationService.editUserProfile(this.userProfileModel)
            .subscribe();
    };
    UserProfileComponent.prototype.getUsername = function () {
        return this.authenticationService.getLoggedUser();
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__shared_auth_authentication_service__["a" /* AuthenticationService */]
        ],
        template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], UserProfileComponent);

var _a, _b;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    restBaseUrl: "http://localhost:8666/"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map