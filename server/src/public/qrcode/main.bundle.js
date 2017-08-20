webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__container_store_login_store_login_component__ = __webpack_require__("../../../../../src/app/container/store-login/store-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_child_login_child_login_component__ = __webpack_require__("../../../../../src/app/container/child-login/child-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_child_check_child_check_component__ = __webpack_require__("../../../../../src/app/container/child-check/child-check.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_qrcode_qrcode_component__ = __webpack_require__("../../../../../src/app/container/qrcode/qrcode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__container_error_error_component__ = __webpack_require__("../../../../../src/app/container/error/error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'storelogin', component: __WEBPACK_IMPORTED_MODULE_2__container_store_login_store_login_component__["a" /* StoreLoginComponent */] },
    { path: 'childlogin', component: __WEBPACK_IMPORTED_MODULE_3__container_child_login_child_login_component__["a" /* ChildLoginComponent */] },
    { path: 'childcheck', component: __WEBPACK_IMPORTED_MODULE_4__container_child_check_child_check_component__["a" /* ChildCheckComponent */] },
    { path: 'qrcode', component: __WEBPACK_IMPORTED_MODULE_5__container_qrcode_qrcode_component__["a" /* QrcodeComponent */] },
    { path: 'qrcode/:id', component: __WEBPACK_IMPORTED_MODULE_5__container_qrcode_qrcode_component__["a" /* QrcodeComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__container_error_error_component__["a" /* ErrorComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__container_error_error_component__["a" /* ErrorComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
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

module.exports = "<div class=\"container\">\n\n  <app-nav></app-nav>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__container_footer_footer_component__ = __webpack_require__("../../../../../src/app/container/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__container_nav_nav_component__ = __webpack_require__("../../../../../src/app/container/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__container_store_login_store_login_component__ = __webpack_require__("../../../../../src/app/container/store-login/store-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__container_child_login_child_login_component__ = __webpack_require__("../../../../../src/app/container/child-login/child-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__container_child_check_child_check_component__ = __webpack_require__("../../../../../src/app/container/child-check/child-check.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__container_qrcode_qrcode_component__ = __webpack_require__("../../../../../src/app/container/qrcode/qrcode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__container_error_error_component__ = __webpack_require__("../../../../../src/app/container/error/error.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_6__container_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__container_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_8__container_store_login_store_login_component__["a" /* StoreLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__container_child_login_child_login_component__["a" /* ChildLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__container_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_10__container_child_check_child_check_component__["a" /* ChildCheckComponent */],
            __WEBPACK_IMPORTED_MODULE_11__container_qrcode_qrcode_component__["a" /* QrcodeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/container/child-check/child-check.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/child-check/child-check.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row content\">\n  <div class=\"col-6 text-center\">\n    <label class=\"col-form-label\">學童編號：</label>\n  </div>\n  <div class=\"col-6 text-left\">\n    <label class=\"col-form-label\">{{ childId }}</label>\n  </div>\n</div>\n<div class=\"row content\">\n  <div class=\"col-6 text-center\">\n    <label class=\"col-form-label\">學童點數：</label>\n  </div>\n  <div class=\"col-6 text-left\">\n    <label class=\"col-form-label\">{{ childPoint }}</label>\n  </div>\n</div>\n<div class=\"row content\">\n  <div class=\"col-12 text-center\">\n    <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"chkCheck()\">確定</button>\n  </div>\n</div>\n<div class=\"row content\">\n  <div class=\"col-12 text-center\">\n    <label class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"debug()\" [(ngModel)]=\"isDebug\">\n          <span class=\"custom-control-indicator\"></span>\n          <span class=\"custom-control-description\">情境模擬 - 點數不足</span>\n        </label>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/container/child-check/child-check.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildCheckComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildCheckComponent = (function () {
    function ChildCheckComponent() {
        this.childId = '10606001';
        this.childPoint = 20;
        this.isDebug = false;
    }
    ChildCheckComponent.prototype.ngOnInit = function () {
    };
    ChildCheckComponent.prototype.chkCheck = function () {
        if (this.childPoint >= 20) {
            alert('兌換成功！');
        }
        else {
            alert('點數不足！');
        }
    };
    ChildCheckComponent.prototype.debug = function () {
        if (!this.isDebug) {
            this.childPoint = 0;
        }
        else {
            this.childPoint = 20;
        }
    };
    return ChildCheckComponent;
}());
ChildCheckComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-child-check',
        template: __webpack_require__("../../../../../src/app/container/child-check/child-check.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/child-check/child-check.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChildCheckComponent);

//# sourceMappingURL=child-check.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/child-login/child-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/child-login/child-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row content\">\n  <div class=\"col-lg-6\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"childPWD\">請輸入學童密碼：</label>\n        <input type=\"text\" name=\"childPWD\" id=\"storeId\" class=\"form-control\" placeholder=\"例如 1234\" [(ngModel)]=\"childPWD\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"chkChild()\">確定</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/container/child-login/child-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildLoginComponent; });
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


var ChildLoginComponent = (function () {
    function ChildLoginComponent(router) {
        this.router = router;
        this.childPWD = '';
    }
    ChildLoginComponent.prototype.ngOnInit = function () {
    };
    ChildLoginComponent.prototype.chkChild = function () {
        if (this.childPWD != '1234') {
            alert('密碼錯誤，請重新嘗試！');
        }
        else {
            this.router.navigate(["/childcheck"]);
        }
    };
    return ChildLoginComponent;
}());
ChildLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-child-login',
        template: __webpack_require__("../../../../../src/app/container/child-login/child-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/child-login/child-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], ChildLoginComponent);

var _a;
//# sourceMappingURL=child-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row content\">\n  <div class=\"col-12\">\n    <p class=\"text-danger\"> error！非法網址 </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/container/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/container/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .footer {\r\n   position: fixed;\r\n   bottom: 0;\r\n   left: 0;\r\n   right: 0;\r\n   padding-right: 1rem;\r\n   padding-left: 1rem;\r\n   width: 100%;\r\n   height: 60px;\r\n   color: #777;\r\n   background: #fff;\r\n   border-top: .05rem solid #e5e5e5;\r\n   line-height: 60px;\r\n }\r\n\r\n @media screen and (min-width: 48em) {\r\n   .footer {\r\n     position: relative;\r\n     padding-right: 0;\r\n     padding-left: 0;\r\n   }\r\n }\r\n\r\n .footer p {\r\n   margin: 0;\r\n   padding: 0;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <p>&copy; iShare 2017</p>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/container/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/container/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\r\n  padding-right: 1rem;\r\n  padding-left: 1rem;\r\n  padding-bottom: 1rem;\r\n  border-bottom: .05rem solid #e5e5e5;\r\n}\r\n\r\n.header h3 {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  line-height: 3rem;\r\n}\r\n\r\n\r\n/* Responsive: Portrait tablets and up */\r\n\r\n@media screen and (min-width: 48em) {\r\n  .header {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n  .header {\r\n    margin-bottom: 2rem;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header clearfix\">\n  <nav>\n    <ul class=\"nav nav-pills float-right\">\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-primary\" routerLink=\"/qrcode\">Hi, 鳳城燒臘店！</a>\n      </li>\n    </ul>\n  </nav>\n  <h3 class=\"text-muted\">iShare</h3>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/container/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/container/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/qrcode/qrcode.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/qrcode/qrcode.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row content\">\n  <div class=\"col-lg-6\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"childId\">確認學童帳號：</label>\n        <input type=\"text\" name=\"childId\" id=\"childId\" class=\"form-control\" [(ngModel)]=\"uid\" readonly>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"childName\">確認學童姓名：</label>\n        <input type=\"text\" name=\"childName\" id=\"childName\" class=\"form-control\" [(ngModel)]=\"uname\" readonly>\n        <small *ngIf=\"qrcode_error\" class=\"form-text text-danger\">QR code 解析失敗，請重新掃描！</small>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" routerLink=\"/storelogin\">確定</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/container/qrcode/qrcode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrcodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_child_child_service__ = __webpack_require__("../../../../../src/app/service/child/child.service.ts");
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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


var QrcodeComponent = (function () {
    function QrcodeComponent(childService) {
        this.childService = childService;
        this.uid = '';
        this.uname = '';
        this.qrcode_error = false;
    }
    QrcodeComponent.prototype.ngOnInit = function () {
        this.parseQRcode();
    };
    QrcodeComponent.prototype.parseQRcode = function () {
        var url = new URL(location.href);
        var qr = url.searchParams.get('uid');
        console.log("uid = " + qr);
        if (qr) {
            this.uid = qr;
            this.getChild(this.uid);
            this.qrcode_error = false;
        }
        else {
            this.qrcode_error = true;
        }
    };
    QrcodeComponent.prototype.getChild = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.childService.getChild(id)
                            .subscribe(function (result) {
                            _this.uname = result[0].name;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return QrcodeComponent;
}());
QrcodeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-qrcode',
        template: __webpack_require__("../../../../../src/app/container/qrcode/qrcode.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/qrcode/qrcode.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_child_child_service__["a" /* ChildService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_child_child_service__["a" /* ChildService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_child_child_service__["a" /* ChildService */]) === "function" && _a || Object])
], QrcodeComponent);

var _a;
//# sourceMappingURL=qrcode.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/store-login/store-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/store-login/store-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row content\">\n  <div class=\"col-lg-6\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"storeId\">請輸入店家代號：</label>\n        <input type=\"text\" name=\"storeId\" id=\"storeId\" class=\"form-control\" placeholder=\"例如 1234\" [(ngModel)]=\"storeId\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"chkStore()\">確定</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/container/store-login/store-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreLoginComponent; });
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


var StoreLoginComponent = (function () {
    function StoreLoginComponent(router) {
        this.router = router;
        this.storeId = '';
    }
    StoreLoginComponent.prototype.ngOnInit = function () {
    };
    StoreLoginComponent.prototype.chkStore = function () {
        if (this.storeId != '1234') {
            alert('查無此店家代號，請重新嘗試！');
        }
        else {
            this.router.navigate(["/childlogin"]);
        }
    };
    return StoreLoginComponent;
}());
StoreLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-store-login',
        template: __webpack_require__("../../../../../src/app/container/store-login/store-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/store-login/store-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], StoreLoginComponent);

var _a;
//# sourceMappingURL=store-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/child/child.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChildService = (function () {
    function ChildService(http) {
        this.http = http;
        this.api = '/api/child/';
    }
    ChildService.prototype.getChild = function (id) {
        return this.http.get(this.api + id)
            .map(function (res) {
            return res.json() || {};
        });
    };
    return ChildService;
}());
ChildService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ChildService);

var _a;
//# sourceMappingURL=child.service.js.map

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
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map