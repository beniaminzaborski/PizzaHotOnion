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

module.exports = "<h1>About component</h1>"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { AuthGuard } from './shared/auth/auth.guard';
// import { LoginGuard } from './shared/auth/login.guard';
var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] /*, canActivate: [LoginGuard]*/ },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_3__orders_orders_component__["a" /* OrdersComponent */] /*, canActivate: [LoginGuard]*/ },
    { path: 'rooms', component: __WEBPACK_IMPORTED_MODULE_5__rooms_rooms_component__["a" /* RoomsComponent */] /*, canActivate: [LoginGuard]*/ },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] /*, canActivate: [LoginGuard]*/ },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__["a" /* UserProfileComponent */] /*, canActivate: [LoginGuard]*/ },
    { path: '', redirectTo: '/orders', pathMatch: 'full' },
    { path: '**', redirectTo: '/orders' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
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

module.exports = "<nav role=\"navigation\" class=\"navbar navbar-inverse navbar-fixed-top\" *ngIf=\"router.url != '/login'\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n        aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/orders\" routerLinkActive=\"active\">Hot Onion</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\">\r\n          <a routerLink=\"/orders\" routerLinkActive=\"active\">Orders</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/rooms\" routerLinkActive=\"active\">Rooms</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a routerLink=\"/about\" routerLinkActive=\"active\">About</a>\r\n        </li>\r\n        <!--<li class=\"navbar-text pull-left\">{{username}}</li>-->\r\n        <li class=\"dropdown pull-right\">\r\n          <a href=\"#\" data-toggle=\"dropdown\" style=\"color:#777;\" class=\"dropdown-toggle\">\r\n            <span class=\"glyphicon glyphicon-user\"></span>\r\n            <b class=\"caret\"></b>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li>\r\n              <a routerLink=\"/profile\" title=\"User profile\">\r\n                <span class=\"fa fa-user\" aria-hidden=\"true\"></span> Profile\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\" title=\"Sign Out\" (click)=\"logout(); $event.preventDefault()\">\r\n                <span class=\"fa fa-sign-out\" aria-hidden=\"true\"></span> Sign Out\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main': router.url != '/login' }\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<footer class=\"footer navbar-inverse navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <span class=\"text-muted pull-right\">\r\n      <small>&copy; 2017 Biz Development</small>\r\n    </span>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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


var AppComponent = (function () {
    function AppComponent(router /*,
        private authenticationService: AuthenticationService*/) {
        this.router = router; /*,
        private authenticationService: AuthenticationService*/
    }
    AppComponent.prototype.logout = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] /*,
        private authenticationService: AuthenticationService*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] /*,
        private authenticationService: AuthenticationService*/) === "function" && _a || Object])
], AppComponent);

var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__orders_orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rooms_rooms_component__ = __webpack_require__("../../../../../src/app/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__rooms_rooms_component__["a" /* RoomsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
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

module.exports = "<div class=\"login-header\">\r\n  <h1 class=\"login-logo\">Hot Onion</h1>\r\n  <h3>Sign in to grab your slice</h3>\r\n</div>\r\n<div class=\"card card-container\">\r\n  <!-- <div [ngBusy]=\"{busy: busy, message: 'Proszę czekać...', backdrop: false, delay: 200, minDuration: 600}\"></div> -->\r\n  <img src=\"assets/login_avatar.png\" class=\"profile-img-card\" />\r\n  <p id=\"profile-name\" class=\"profile-name-card\"></p>\r\n  <form class=\"form-signin\" (submit)=\"submit()\">\r\n    <span id=\"reauth-email\" class=\"reauth-email\"></span>\r\n    <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"E-mail\" [(ngModel)]=\"user.email\" required autofocus>\r\n    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\" required>\r\n    <!--<div id=\"remember\" class=\"checkbox\">\r\n        <label>\r\n          <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n        </label>\r\n      </div>-->\r\n    <button class=\"btn btn-lg btn-primary btn-block btn-submit\" type=\"submit\">{{isLoggingIn ? 'Sign In' : 'Sign Up'}}</button>\r\n    <button class=\"btn btn-lg btn-primary btn-block btn-toggle\" type=\"button\" (click)=\"toggleDisplay()\">{{isLoggingIn ? 'Sign Up' : 'Back to Login'}}</button>\r\n    <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n  </form>\r\n  <!--<p>\r\n      <a href=\"#\" class=\"forgot-password\">\r\n        Forgot the password?\r\n      </a>\r\n    </p>-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_user_model__ = __webpack_require__("../../../../../src/app/shared/auth/user.model.ts");
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
    function LoginComponent(router /*,
        private authenticationService: AuthenticationService*/) {
        this.router = router; /*,
        private authenticationService: AuthenticationService*/
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
        // this.authenticationService.login(this.user)
        //   .subscribe(
        //   () => {
        //     this.router.navigate(["/order"]);
        //   },
        //   (error) => {
        //     alert("Unfortunately we could not find your account.");
        //   }
        //   );
    };
    LoginComponent.prototype.signUp = function () {
        // this.authenticationService.register(this.user)
        //   .subscribe(
        //   () => {
        //     alert("Your account was successfully created.");
        //     this.toggleDisplay();
        //   },
        //   () => { alert("Unfortunately we were unable to create your account."); }
        //   );
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        // providers: [AuthenticationService],
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] /*,
        private authenticationService: AuthenticationService*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] /*,
        private authenticationService: AuthenticationService*/) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Orders component</h1>\r\n"

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
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


var OrdersComponent = (function () {
    function OrdersComponent(router /*,
        private authenticationService: AuthenticationService*/) {
        this.router = router; /*,
        private authenticationService: AuthenticationService*/
    }
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/orders/orders.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] /*,
        private authenticationService: AuthenticationService*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] /*,
        private authenticationService: AuthenticationService*/) === "function" && _a || Object])
], OrdersComponent);

var _a;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/rooms/rooms.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Rooms component</h1>"

/***/ }),

/***/ "../../../../../src/app/rooms/rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
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


var RoomsComponent = (function () {
    function RoomsComponent(router /*,
        private authenticationService: AuthenticationService*/) {
        this.router = router; /*,
        private authenticationService: AuthenticationService*/
    }
    return RoomsComponent;
}());
RoomsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/rooms/rooms.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] /*,
        private authenticationService: AuthenticationService*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] /*,
        private authenticationService: AuthenticationService*/) === "function" && _a || Object])
], RoomsComponent);

var _a;
//# sourceMappingURL=rooms.component.js.map

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

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>User profile component</h1>"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
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


var UserProfileComponent = (function () {
    function UserProfileComponent(router /*,
        private authenticationService: AuthenticationService*/) {
        this.router = router; /*,
        private authenticationService: AuthenticationService*/
    }
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] /*,
        private authenticationService: AuthenticationService*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] /*,
        private authenticationService: AuthenticationService*/) === "function" && _a || Object])
], UserProfileComponent);

var _a;
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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map