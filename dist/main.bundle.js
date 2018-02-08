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

/***/ "../../../../../src/app/adminDashbord/adminDashbord.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/img/apoclogo.png\" width=\"180\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        \r\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n          <a class=\"nav-link\" routerLink=\"/notifications\">Create a post</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n            <a class=\"nav-link\" routerLink=\"/expensive\"> Create Expensive</a>\r\n          </li>\r\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n          <a class=\"nav-link\" routerLink=\"/admin\">Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n          <a class=\"nav-link\" (click)=\"logOut()\" href=\"#\">Log Out</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!isLoggedIn\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n\r\n<div class=\"container\" [hidden]=\"isLoggedIn\">\r\n  <div id=\"login\" class=\"signin-card\">\r\n\r\n    <h1 class=\"display1\">Admin Login</h1>\r\n    <!-- <p class=\"subhead\">Login with your andhra pradesh oc association id and password</p> -->\r\n    <form action=\"\" method=\"\" class=\"\" role=\"form\" name=\"firstFormGroup\">\r\n      <div id=\"form-login-username\" class=\"form-group\" ngModelGroup=\"address\">\r\n        <input id=\"username\" class=\"form-control\" [(ngModel)]=\"userName\" name=\"username\" type=\"text\" size=\"18\" alt=\"login\" required\r\n        />\r\n        <span class=\"form-highlight\"></span>\r\n        <span class=\"form-bar\"></span>\r\n        <label for=\"username\" class=\"float-label\">User ID</label>\r\n      </div>\r\n      <div id=\"form-login-password\" class=\"form-group\">\r\n        <input id=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" size=\"18\" alt=\"password\"\r\n          required>\r\n        <span class=\"form-highlight\"></span>\r\n        <span class=\"form-bar\"></span>\r\n        <label for=\"password\" class=\"float-label\">password</label>\r\n      </div>\r\n      <div id=\"form-login-remember\" class=\"form-group\">\r\n        <div class=\"checkbox checkbox-default\">\r\n          <input id=\"remember\" type=\"checkbox\" value=\"yes\" [(ngModel)]=\"rememberME\" alt=\"Remember me\" class=\"\">\r\n          <label for=\"remember\">Remember me</label>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-block btn-info ripple-effect\" (click)=\"login()\" type=\"submit\" name=\"Submit\" alt=\"sign in\">Sign in</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container\" [hidden]=\"!isLoggedIn\">  \r\n  <div class=\"row\" style=\"padding-top:40px;\">\r\n    <div class=\"col-md-2 col-xs-6 offset-md-2 cards\">\r\n      <mat-card>\r\n        <i class=\"material-icons\">account_circle</i>\r\n        <h3>{{totalRegUsers}}</h3>\r\n        <p>Registered Users</p>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-2 col-xs-6\">\r\n      <mat-card class=\"alert alert-success\">\r\n        <i class=\"material-icons\">arrow_downward</i>\r\n        <h3>{{totalPayments}}</h3>\r\n        <p>Recived Money</p>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-2 col-xs-6\">\r\n      <mat-card class=\"alert alert-danger\">\r\n        <i class=\"material-icons\">arrow_upward</i>\r\n        <h3>{{totalSpends}}</h3>\r\n        <p>Spent Money</p>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-2 col-xs-6\">\r\n      <mat-card class=\"alert alert-primary\">\r\n        <i class=\"material-icons\">refresh</i>\r\n        <h3>{{ availableAmount }}</h3>\r\n        <p>Available</p>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-10 offset-md-1 tpBtmSpace\">\r\n\r\n      <div class=\"example-header\">\r\n        <mat-form-field>\r\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"example-container mat-elevation-z8\">\r\n\r\n        <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n          <!-- ID Column -->\r\n          <ng-container matColumnDef=\"ID\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Sr No </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.ID}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Image Column -->\r\n          <ng-container matColumnDef=\"ImageUrl\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">\r\n              <img src={{row.ImageUrl}} width=\"50px\" (click)=\"openUserDetails(row._userid)\" style=\"cursor:pointer;\" height=\"50px\">\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- User Name Column -->\r\n          <ng-container matColumnDef=\"ApocID\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.ApocID}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Date Column -->\r\n          <ng-container matColumnDef=\"FullName\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\r\n              FullName\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">{{ row.FullName}}</mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Name Column -->\r\n          <ng-container matColumnDef=\"AadharCardNum\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Aadhar No </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.AadharCardNum}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Address Column -->\r\n          <ng-container matColumnDef=\"Telephone\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Telephone </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.Telephone}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"JionDate\" class=\"ml-auto\" style=\"float:right;\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header style=\"float:right;\"> joined Date</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> {{row.JoinDate | date : \"dd/MM/yyyy\"}}</mat-cell>\r\n          </ng-container>\r\n\r\n\r\n          <!-- amount Column  -->\r\n          <ng-container matColumnDef=\"Status\" class=\"ml-auto\" style=\"float:right;\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header style=\"float:right;\"> Status </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">\r\n                <span *ngIf=\"row.Status\" style=\"color:green;\">{{row.Status}}</span>\r\n              <span *ngIf=\"row.isPaymentMade\" style=\"color:green;\">Payment Done</span>\r\n              <span *ngIf=\"!row.isPaymentMade\" style=\"color:red;\">Payment Failed</span>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n          </mat-row>\r\n        </mat-table>\r\n\r\n        <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\"></mat-paginator>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/adminDashbord/adminDashbord.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashbordComponent; });
/* unused harmony export UserData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_home_service__ = __webpack_require__("../../../../../src/app/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_payment_service__ = __webpack_require__("../../../../../src/app/service/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_spend_service__ = __webpack_require__("../../../../../src/app/service/spend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_authentication_Service__ = __webpack_require__("../../../../../src/app/service/authentication.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AdminDashbordComponent = (function () {
    function AdminDashbordComponent(router, homeService, paymentService, spendService, authService) {
        var _this = this;
        this.router = router;
        this.homeService = homeService;
        this.paymentService = paymentService;
        this.spendService = spendService;
        this.authService = authService;
        this.displayedColumns = ['ID', 'ImageUrl', 'FullName', 'AadharCardNum', 'Telephone', 'JionDate', 'Status'];
        this.isLoggedIn = false;
        __WEBPACK_IMPORTED_MODULE_8__app_settings__["a" /* AppSettings */].isAdmin = true;
        __WEBPACK_IMPORTED_MODULE_8__app_settings__["a" /* AppSettings */].isUser = false;
        this.paymentService.getTotalPayments()
            .subscribe(function (tot) {
            _this.totalPayments = tot.totalAmount;
            console.log(tot);
            _this.spendService.getTotalSpends()
                .subscribe(function (tot) {
                _this.totalSpends = tot[0].total;
                _this.availableAmount = _this.totalPayments - _this.totalSpends;
            });
        });
        this.homeService.getUsersCount()
            .subscribe(function (tot) {
            _this.totalRegUsers = tot;
        });
        this.homeService.getUsers()
            .subscribe(function (users) {
            var _userdata = [];
            for (var i = 0; i < users.length; i++) {
                var data = new UserData();
                data.ID = i + 1;
                data.ImageUrl = "../../assets/img/" + users[i]._id + ".jpg"; //"../../uploads/" + users[i]._id + ".jpg";
                data.FullName = users[i].FullName;
                data.AadharCardNum = users[i].AadharCardNum;
                data.JoinDate = users[i].Added_Dt;
                data.Telephone = users[i].Telephone;
                data.Status = users[i].Status;
                data.isPaymentMade = users[i].isPaymentMade;
                data.ApocID = users[i].ApocID;
                data._userid = users[i]._id;
                _userdata.push(data);
            }
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](_userdata);
        });
    }
    /**
       * Set the paginator and sort after the view init since this component will
       * be able to query its view for the initialized paginator and sort.
       */
    AdminDashbordComponent.prototype.openUserDetails = function (userid) {
        this.router.navigate(['/userEditProfile/' + userid]);
    };
    AdminDashbordComponent.prototype.ngOnInit = function () {
        var user = this.authService.getCredentials();
        if (user)
            this.isLoggedIn = true;
    };
    AdminDashbordComponent.prototype.login = function () {
        var _this = this;
        this.homeService.checkAdminCredantials(this.userName, this.password).subscribe(function (res) {
            console.log(res);
            if (res[0]) {
                _this.isLoggedIn = true;
                res[0].IsAdmin = true;
                _this.authService.setCredentials(res[0]);
            }
        });
    };
    AdminDashbordComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AdminDashbordComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginator */])
    ], AdminDashbordComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */])
    ], AdminDashbordComponent.prototype, "sort", void 0);
    AdminDashbordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/adminDashbord/adminDashbord.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__service_home_service__["a" /* HomeServices */],
                __WEBPACK_IMPORTED_MODULE_4__service_payment_service__["a" /* PaymentServices */],
                __WEBPACK_IMPORTED_MODULE_5__service_spend_service__["a" /* SpendServices */],
                __WEBPACK_IMPORTED_MODULE_6__service_authentication_Service__["a" /* AuthenticationServices */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_home_service__["a" /* HomeServices */],
            __WEBPACK_IMPORTED_MODULE_4__service_payment_service__["a" /* PaymentServices */],
            __WEBPACK_IMPORTED_MODULE_5__service_spend_service__["a" /* SpendServices */],
            __WEBPACK_IMPORTED_MODULE_6__service_authentication_Service__["a" /* AuthenticationServices */]])
    ], AdminDashbordComponent);
    return AdminDashbordComponent;
}());

var UserData = (function () {
    function UserData() {
    }
    return UserData;
}());



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

module.exports = "<!-- <app-navbar></app-navbar> -->\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_qrcode__ = __webpack_require__("../../../../angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__userDashbord_userDashbord_component__ = __webpack_require__("../../../../../src/app/userDashbord/userDashbord.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__adminDashbord_adminDashbord_component__ = __webpack_require__("../../../../../src/app/adminDashbord/adminDashbord.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_paymentsuccess_component__ = __webpack_require__("../../../../../src/app/common/paymentsuccess.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__editUserProfile_editUserProfile_component__ = __webpack_require__("../../../../../src/app/editUserProfile/editUserProfile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__expensive_expensive_component__ = __webpack_require__("../../../../../src/app/expensive/expensive.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__userDashbord_userDashbord_component__["a" /* UserDashbordComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__adminDashbord_adminDashbord_component__["a" /* AdminDashbordComponent */],
                __WEBPACK_IMPORTED_MODULE_19__common_paymentsuccess_component__["a" /* PaymentsuccesseComponent */],
                __WEBPACK_IMPORTED_MODULE_20__editUserProfile_editUserProfile_component__["a" /* EditUserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_21__expensive_expensive_component__["b" /* ExpensiveComponent */],
                __WEBPACK_IMPORTED_MODULE_21__expensive_expensive_component__["c" /* ExpensiveDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__expensive_expensive_component__["a" /* CreateExpensiveComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */].forRoot([{ path: 'contact', component: __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */] },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */] },
                    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_14__faq_faq_component__["a" /* FaqComponent */] },
                    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__["a" /* NotificationComponent */] },
                    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_16__userDashbord_userDashbord_component__["a" /* UserDashbordComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */] },
                    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_18__adminDashbord_adminDashbord_component__["a" /* AdminDashbordComponent */] },
                    { path: 'success/:id', component: __WEBPACK_IMPORTED_MODULE_19__common_paymentsuccess_component__["a" /* PaymentsuccesseComponent */] },
                    { path: 'userEditProfile/:id', component: __WEBPACK_IMPORTED_MODULE_20__editUserProfile_editUserProfile_component__["a" /* EditUserProfileComponent */] },
                    { path: 'expensive', component: __WEBPACK_IMPORTED_MODULE_21__expensive_expensive_component__["b" /* ExpensiveComponent */] },
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                ]),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_18__adminDashbord_adminDashbord_component__["a" /* AdminDashbordComponent */], __WEBPACK_IMPORTED_MODULE_21__expensive_expensive_component__["b" /* ExpensiveComponent */], __WEBPACK_IMPORTED_MODULE_21__expensive_expensive_component__["c" /* ExpensiveDetailsComponent */], __WEBPACK_IMPORTED_MODULE_21__expensive_expensive_component__["a" /* CreateExpensiveComponent */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);


/***/ }),

/***/ "../../../../../src/app/app.settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = 'http://localhost:3000/api';
    AppSettings.Server = 'http://localhost:3000/';
    AppSettings.destinationFolder = 'uploads';
    AppSettings.isAdmin = false;
    AppSettings.isUser = false;
    return AppSettings;
}());



/***/ }),

/***/ "../../../../../src/app/common/paymentsuccess.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsuccesseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_home_service__ = __webpack_require__("../../../../../src/app/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaymentsuccesseComponent = (function () {
    function PaymentsuccesseComponent(_formBuilder, http, homeService, router, route) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.http = http;
        this.homeService = homeService;
        this.router = router;
        this.route = route;
        var id = this.route.params.subscribe(function (params) {
            _this.userid = params['id'];
            console.log(_this.userid);
            _this.homeService.getUser(_this.userid)
                .subscribe(function (user) {
                console.log(user);
                _this.userDetail = user;
            });
        });
    }
    PaymentsuccesseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-paymentsuccess',
            template: __webpack_require__("../../../../../src/app/common/success.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_home_service__["a" /* HomeServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__service_home_service__["a" /* HomeServices */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PaymentsuccesseComponent);
    return PaymentsuccesseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/success.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <div class=\"row text-center success-template\">\r\n            <div class=\"col-md-6 offset-md-3\">\r\n            <img src=\"../../assets/img/success.png\" width=\"15%\"><br><br>\r\n            <h3>Dear, {{userDetail.FullName}}</h3>\r\n            <p style=\"font-size:20px;color:#5C5C5C;\">\r\n                Thank you for registration, now you can get andhrapradesh oc association benfits\r\n                and you can login with ap oc association id <b>{{userDetail.ApocID}}</b> and password.    \r\n            </p>\r\n            <!-- <a class=\"nav-link\" routerLink=\"/home\" mat-raised-button >\r\n                Back to Home </a> -->\r\n                <a class=\"nav-link\" routerLink=\"/login\" mat-raised-button color=\"primary\">\r\n                    Login </a>\r\n        <br><br>\r\n            </div>\r\n            \r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n        <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"#\">\r\n                        <img src=\"assets/img/apoclogo.png\" width=\"180\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n\r\n                </a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n                        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n\r\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                                <li class=\"nav-item active\">\r\n                                        <a class=\"nav-link\" routerLink=\"/home\" *ngIf=\"!userDetail\">Home\r\n                                                <span class=\"sr-only\">(current)</span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                        <a class=\"nav-link\" routerLink=\"/notifications\">Notifications</a>\r\n                                </li>\r\n\r\n                                <li class=\"nav-item\">\r\n                                        <a class=\"nav-link\" routerLink=\"/faq\">Faq</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                        <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\r\n                                </li>\r\n                                <li class=\"nav-item\" *ngIf=\"userDetail\">\r\n                                        <a class=\"nav-link\" routerLink=\"/user/{{userid}}\">Dashboard</a>\r\n                                </li>\r\n                                <li class=\"nav-item\" *ngIf=\"userDetail\">\r\n                                        <a class=\"nav-link\" routerLink=\"/userEditProfile/{{userid}}\">Edit profile</a>\r\n                                </li>\r\n                                <li class=\"nav-item\" *ngIf=\"userDetail\">\r\n                                        <a class=\"nav-link\" (click)=\"logOut()\" href=\"#\">Log Out</a>\r\n                                </li>\r\n                                <li class=\"nav-item\" *ngIf=\"!userDetail\">\r\n                                        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n                                </li>\r\n\r\n                        </ul>\r\n                </div>\r\n        </div>\r\n</nav>\r\n\r\n<div class=\"container bgwhite\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-6 offset-md-3 tpBtmSpace\">\r\n            <h1 class=\"text-center\">Contact us</h1>\r\n                <p class=\"text-center\">Mussum ipsum cacilds, vidis litro abertis.</p>\r\n                <mat-card>\r\n                        <div class=\"example-container\">\r\n                                <mat-form-field>\r\n                                  <input matInput placeholder=\"Full name\" required>\r\n                                </mat-form-field>\r\n                              \r\n                                <mat-form-field>\r\n                                        <input matInput placeholder=\"AP OC Association ID No\" required>\r\n                                </mat-form-field>\r\n                              \r\n                                <mat-form-field>\r\n                                        <input matInput placeholder=\"Email\" required>\r\n                                </mat-form-field>\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                        <span matPrefix>+91 &nbsp;</span>\r\n                                        <input type=\"tel\" matInput placeholder=\"Telephone\"  maxlength=\"10\" required>\r\n                                        <!-- <mat-icon matSuffix>phone</mat-icon> -->\r\n                                </mat-form-field>\r\n                                <mat-form-field class=\"txtArea\">\r\n                                        <textarea matInput placeholder=\"Feedback / Message\"></textarea>\r\n                                </mat-form-field>\r\n                                <div class=\"btnTop mx-auto\">\r\n                                        <button mat-raised-button color=\"primary\">Submit</button>\r\n                                      </div>\r\n                              </div>\r\n                              \r\n                </mat-card>    \r\n                      \r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n\r\n\r\n      "

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_home_service__ = __webpack_require__("../../../../../src/app/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authentication_Service__ = __webpack_require__("../../../../../src/app/service/authentication.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_apocuser__ = __webpack_require__("../../../../../src/app/model/apocuser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = (function () {
    function ContactComponent(homeService, authService, router) {
        this.homeService = homeService;
        this.authService = authService;
        this.router = router;
        this.userDetail = this.authService.getCredentials();
        if (this.userDetail) {
            // this.userDetail = user;
            this.userid = this.userDetail._id;
        }
    }
    ContactComponent.prototype.logOut = function () {
        this.authService.logout();
        var defUser = new __WEBPACK_IMPORTED_MODULE_4__model_apocuser__["a" /* ApocUser */]();
        this.authService.setCredentials(defUser);
        this.router.navigate(['/login']);
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__service_authentication_Service__["a" /* AuthenticationServices */],
                __WEBPACK_IMPORTED_MODULE_1__service_home_service__["a" /* HomeServices */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_home_service__["a" /* HomeServices */],
            __WEBPACK_IMPORTED_MODULE_2__service_authentication_Service__["a" /* AuthenticationServices */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/editUserProfile/editUserProfile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/img/apoclogo.png\" width=\"180\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <!-- Admin section   -->\r\n        <li class=\"nav-item\" *ngIf=\"isAdmin\">\r\n          <a class=\"nav-link\" routerLink=\"/notifications\">Create a post</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isAdmin\">\r\n          <a class=\"nav-link\" routerLink=\"/expensive\"> Create Expensive</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isAdmin\">\r\n          <a class=\"nav-link\" routerLink=\"/admin\">Dashboard</a>\r\n        </li>\r\n        <!-- Admin section   -->\r\n        <li class=\"nav-item active\" *ngIf=\"!isAdmin\">\r\n          <a class=\"nav-link\" routerLink=\"/home\" *ngIf=\"!userDetail\">Home\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!isAdmin\">\r\n          <a class=\"nav-link\" routerLink=\"/notifications\">Notifications</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\" *ngIf=\"!isAdmin\">\r\n          <a class=\"nav-link\" routerLink=\"/faq\">Faq</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!isAdmin\">\r\n          <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"userDetail && !isAdmin\">\r\n          <a class=\"nav-link\" routerLink=\"/user/{{userid}}\">Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"userDetail && !isAdmin\">\r\n          <a class=\"nav-link\" routerLink=\"/userEditProfile/{{userid}}\">Edit profile</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"userDetail || isAdmin\">\r\n          <a class=\"nav-link\" (click)=\"logOut()\" href=\"#\">Log Out</a>\r\n        </li>\r\n\r\n\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-lg-8 userEditProfile\">\r\n      <h3>Hi {{userDetail.FullName}},\r\n        <span class=\"pending\"> {{userDetail.Status}}</span>\r\n      </h3>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3\">\r\n          <h6>APOCID</h6>\r\n          <h4>{{userDetail.ApocID}}</h4>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <h6>Reference ID</h6>\r\n          <h4>{{userDetail.RefID}}</h4>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <h6>Aadhar No</h6>\r\n          <h4>{{userDetail.AadharCardNum}}</h4>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <h6>Joined Date</h6>\r\n          <h4>{{userDetail.Added_Dt | date : \"dd/MM/yyyy\"}}</h4>\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-lg-4\">\r\n          <div *ngIf=\"isAdmin\">\r\n            <span>Full Name</span>\r\n            <h6>{{userDetail.FullName}}</h6>\r\n          </div>\r\n          <mat-form-field *ngIf=\"!isAdmin\">\r\n            <input matInput placeholder=\"Enter full name\" [(ngModel)]=\"userDetail.FullName\" required>\r\n          </mat-form-field>\r\n          <div *ngIf=\"isAdmin\">\r\n            <span>Aadhar No</span>\r\n            <h6>{{userDetail.AadharCardNum}}</h6>\r\n          </div>\r\n          <mat-form-field *ngIf=\"!isAdmin\">\r\n            <input matInput placeholder=\"Enter Aadhar Number\" [(ngModel)]=\"userDetail.AadharCardNum\" required>\r\n          </mat-form-field>\r\n          <div *ngIf=\"isAdmin\">\r\n            <span>Address 1</span>\r\n            <h6>{{userDetail.Addr1}}</h6>\r\n          </div>\r\n          <mat-form-field *ngIf=\"!isAdmin\">\r\n            <input matInput placeholder=\"Enter Address 1\" [(ngModel)]=\"userDetail.Addr1\" required>\r\n          </mat-form-field>\r\n          <div *ngIf=\"isAdmin\">\r\n            <span>State</span>\r\n            <h6>{{userDetail.State}}</h6>\r\n          </div>\r\n          <mat-form-field *ngIf=\"!isAdmin\">\r\n            <input matInput placeholder=\"Enter State\" [(ngModel)]=\"userDetail.State\" required>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-xs-12 col-lg-4\">\r\n          <div *ngIf=\"isAdmin\">\r\n            <span>Father Name</span>\r\n            <h6>{{userDetail.FatherName}}</h6>\r\n          </div>\r\n\r\n          <mat-form-field *ngIf=\"!isAdmin\">\r\n            <input matInput placeholder=\"Enter Father Name\" [(ngModel)]=\"userDetail.FatherName\" required>\r\n          </mat-form-field>\r\n          <div *ngIf=\"isAdmin\">\r\n            <span>Date of birth</span>\r\n            <h6>{{userDetail.DOB | date : \"dd/MM/yyyy\"}}</h6>\r\n          </div>\r\n          <mat-form-field class=\"example-full-width\" *ngIf=\"!isAdmin\">\r\n            <input matInput placeholder=\"Date of birth\" [(ngModel)]=\"userDetail.DOB\" required>\r\n          </mat-form-field>\r\n          <div *ngIf=\"isAdmin\">\r\n            <span>Address 1</span>\r\n            <h6>{{userDetail.Addr2}}</h6>\r\n          </div>\r\n          <mat-form-field *ngIf=\"!isAdmin\">\r\n            <input matInput placeholder=\"Enter Address 1\" [(ngModel)]=\"userDetail.Addr2\" required>\r\n          </mat-form-field>\r\n          <div *ngIf=\"isAdmin\">\r\n            <span>Pincode</span>\r\n            <h6>{{userDetail.PostalCode}}</h6>\r\n          </div>\r\n          <mat-form-field *ngIf=\"!isAdmin\">\r\n            <input matInput placeholder=\"Enter Pincode\" [(ngModel)]=\"userDetail.PostalCode\" required>\r\n          </mat-form-field>\r\n          <div class=\"btnTop\">\r\n              <button mat-raised-button color=\"primary\" *ngIf=\"!isAdmin\" (click)=\"updUser()\">Update</button>\r\n              <button mat-raised-button color=\"warn\" *ngIf=\"!isAdmin\" (click)=\"back()\">Back</button>\r\n              <button mat-raised-button color=\"primary\" *ngIf=\"isAdmin\" (click)=\"UpdateStatus('Verified')\">Verified</button>\r\n              <button mat-raised-button color=\"warn\" *ngIf=\"isAdmin\" (click)=\"UpdateStatus('Block')\">Block</button>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-lg-4\">\r\n          <div *ngIf=\"isAdmin\">\r\n            <span>Email</span>\r\n            <h6>{{userDetail.EmainID}}</h6>\r\n          </div>\r\n          <mat-form-field *ngIf=\"!isAdmin\">\r\n            <input matInput placeholder=\"EmainID\" [(ngModel)]=\"userDetail.EmainID\" required>\r\n          </mat-form-field>\r\n          <div *ngIf=\"isAdmin\">\r\n            <span>Cast</span>\r\n            <h6>{{userDetail.Cast}}</h6>\r\n          </div>\r\n          <!-- <mat-form-field *ngIf=\"!isAdmin\">\r\n            <input matInput placeholder=\"Cast\" [(ngModel)]=\"userDetail.Cast\" required>\r\n          </mat-form-field> -->\r\n\r\n          <mat-form-field  *ngIf=\"!isAdmin\">             \r\n              <input matInput placeholder=\"Cast\" [(ngModel)]=\"userDetail.Cast\" required>\r\n            </mat-form-field>\r\n\r\n          <div *ngIf=\"isAdmin\">\r\n            <span>Distict</span>\r\n            <h6>{{userDetail.Distict}}</h6>\r\n          </div>\r\n          <mat-form-field *ngIf=\"!isAdmin\">\r\n            <input matInput placeholder=\"Distict\" [(ngModel)]=\"userDetail.Distict\" required>\r\n          </mat-form-field>\r\n          <div *ngIf=\"isAdmin\">\r\n            <span>Mobile</span>\r\n            <h6>+91 {{userDetail.Telephone}}</h6>\r\n          </div>\r\n          <mat-form-field *ngIf=\"!isAdmin\">\r\n            <input matInput placeholder=\"Telephone\" [(ngModel)]=\"userDetail.Telephone\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-lg-4\">\r\n\r\n      <div class=\"row card\">\r\n        <div class=\"row\">\r\n          <img src=\"../../assets/img/apoclogo.png\" width=\"160px\" height=\"50px\" style=\"margin:0px 10px\">\r\n          <!-- <img src=\"../../assets/img/qrcode.png\" alt=\"\" class=\"qrcode ml-auto\"> -->\r\n\r\n        </div>\r\n        <hr>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-4\">\r\n            <div class=\"img-thumbnail\">\r\n              <img src=\"../../assets/img/{{userDetail._id}}.jpg\" width=\"80px\" height=\"80px\">\r\n            </div>\r\n            <div class=\"sign\">\r\n              <img src=\"../../assets/img/sign.png\" style=\"margin:0px 10px\">\r\n            </div>\r\n            <div class=\"designation\">General Secretary</div>\r\n            <!-- <p>General Secratery</p> -->\r\n          </div>\r\n          <div class=\"col-xs-8\">\r\n\r\n            <p>\r\n              <span [hidden]=\"userDetail.FullName\">YOUR NAME</span>{{ userDetail.FullName }}\r\n              <br>\r\n              <span [hidden]=\"userDetail.FatherName\">FATHER NAME</span>{{userDetail.FatherName}}\r\n              <br>\r\n              <span [hidden]=\"userDetail.AadharCardNum\">0000 0000 0000</span>{{userDetail.AadharCardNum}}\r\n              <br>\r\n              <span [hidden]=\"userDetail.DOB\">DD/MM/YYYY</span> {{userDetail.DOB | date : \"dd/MM/yyyy\"}}\r\n              <br>\r\n              <span [hidden]=\"userDetail.Gender\">Gender</span>{{userDetail.Gender}}\r\n              <span [hidden]=\"userDetail.Cast\" class=\"pdlft\">Cast</span>\r\n              <span class=\"pdlft\">{{userDetail.Cast}}</span>\r\n            </p>\r\n            <h4>{{userDetail.ApocID}}</h4>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row card\">\r\n        <div class=\"row\">\r\n          <img src=\"../../assets/img/apoclogo.png\" width=\"160px\" height=\"50px\" style=\"margin:0px 10px\">\r\n\r\n\r\n        </div>\r\n        <hr>\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-xs-8\">\r\n\r\n            <p class=\"pdlft\">\r\n              <span [hidden]=\"userDetail.Addr1\">1-3-123</span>{{userDetail.Addr1}}\r\n              <br>\r\n              <span [hidden]=\"userDetail.Addr2\">Madhapur</span>{{userDetail.Addr2}}\r\n              <br>\r\n              <span [hidden]=\"userDetail.Distict\">KADAPA</span>{{userDetail.Distict}},\r\n              <span [hidden]=\"userDetail.State\">AP</span>{{userDetail.State}},\r\n              <span [hidden]=\"userDetail.PostalCode\">500072</span>{{userDetail.PostalCode}}\r\n              <br> Ref Id:\r\n              <span [hidden]=\"userDetail.RefID\">APOC00000000</span>{{userDetail.RefID}}\r\n              <br> +91\r\n              <span [hidden]=\"userDetail.Telephone\">98000 98000</span>{{userDetail.Telephone}}</p>\r\n            <h4>{{userDetail.ApocID}}</h4>\r\n          </div>\r\n          <div class=\"col-xs-4 ml-auto\">\r\n            <qr-code [value]=\"userDetail.ApocID\" [size]=\"120\"></qr-code>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/editUserProfile/editUserProfile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserProfileComponent; });
/* unused harmony export TestApocUser */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_home_service__ = __webpack_require__("../../../../../src/app/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_authentication_Service__ = __webpack_require__("../../../../../src/app/service/authentication.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_apocuser__ = __webpack_require__("../../../../../src/app/model/apocuser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditUserProfileComponent = (function () {
    function EditUserProfileComponent(_formBuilder, http, router, route, homeService, authService) {
        this._formBuilder = _formBuilder;
        this.http = http;
        this.router = router;
        this.route = route;
        this.homeService = homeService;
        this.authService = authService;
        this.isAdmin = false;
    }
    EditUserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.authService.getCredentials();
        if (!user) {
            this.router.navigate(['/login']);
        }
        else {
            if (user.IsAdmin) {
                this.isAdmin = true;
            }
        }
        var id = this.route.params.subscribe(function (params) {
            _this.userid = params['id'];
            console.log(_this.userid);
            _this.homeService.getUser(_this.userid)
                .subscribe(function (user) {
                console.log(user);
                _this.userDetail = user;
                _this.userDetail.DOB = new Date(_this.userDetail.DOB).toLocaleDateString();
            });
        });
    };
    EditUserProfileComponent.prototype.updUser = function () {
        var _this = this;
        //   let uss = new TestApocUser();
        //   uss.AadharCardNum =  this.userDetail.AadharCardNum;
        //   uss.Addr1 =  this.userDetail.Addr1;
        //   uss.Addr2 =  this.userDetail.Addr2;
        //   uss.Cast =  this.userDetail.Cast;
        //   uss.Distict =  this.userDetail.Distict;
        //   uss.EmainID =  this.userDetail.EmainID;
        //   uss.FullName =  this.userDetail.FullName;
        this.homeService.updateUser(this.userDetail, this.userid)
            .subscribe(function (user) {
            console.log(user);
            //this.userDetail = user;
            //this.userDetail.DOB = new Date(this.userDetail.DOB).toLocaleDateString();
            if (user.n > 0) {
                alert('Updated Successful');
                console.log(_this.userDetail._id);
                _this.router.navigate(['/user/' + _this.userid]);
            }
            else {
                alert('No Changes');
            }
        });
    };
    EditUserProfileComponent.prototype.UpdateStatus = function (status) {
        var _this = this;
        this.userDetail.Status = status;
        this.homeService.updateUser(this.userDetail, this.userid)
            .subscribe(function (user) {
            console.log(user);
            //this.userDetail = user;
            //this.userDetail.DOB = new Date(this.userDetail.DOB).toLocaleDateString();
            if (user.n > 0) {
                alert('Updated Successful');
                console.log(_this.userDetail._id);
                _this.router.navigate(['/admin']);
            }
            else {
                alert('No Changes');
            }
        });
    };
    EditUserProfileComponent.prototype.logOut = function () {
        this.authService.logout();
        var defUser = new __WEBPACK_IMPORTED_MODULE_7__model_apocuser__["a" /* ApocUser */]();
        this.authService.setCredentials(defUser);
        this.router.navigate(['/login']);
    };
    EditUserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editUserProfile',
            template: __webpack_require__("../../../../../src/app/editUserProfile/editUserProfile.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_home_service__["a" /* HomeServices */], __WEBPACK_IMPORTED_MODULE_5__service_authentication_Service__["a" /* AuthenticationServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__service_home_service__["a" /* HomeServices */],
            __WEBPACK_IMPORTED_MODULE_5__service_authentication_Service__["a" /* AuthenticationServices */]])
    ], EditUserProfileComponent);
    return EditUserProfileComponent;
}());

var TestApocUser = (function () {
    function TestApocUser() {
    }
    return TestApocUser;
}());



/***/ }),

/***/ "../../../../../src/app/expensive/createExpensive.Component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Creating Expensive</h3>\r\n<mat-dialog-content>\r\n<mat-form-field>\r\n        <input matInput placeholder=\"Name\" [(ngModel)]=\"FullName\">\r\n</mat-form-field>\r\n<mat-form-field>\r\n        <input matInput placeholder=\"APOC ID\" type=\"text\" [(ngModel)]=\"ApocId\">\r\n</mat-form-field><br>\r\n<mat-form-field>\r\n        <input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\" [(ngModel)]=\"ExpAmount\">\r\n        <span matPrefix>₹&nbsp;</span>\r\n        <span matSuffix>.00</span>\r\n</mat-form-field><br>\r\n<mat-form-field>\r\n        <textarea matInput placeholder=\"Perpose\" [(ngModel)]=\"Purpose\"></textarea>\r\n</mat-form-field><br>\r\n        <button mat-raised-button color=\"primary\" (click)=\"saveExpensive()\">Submit Expensive</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onClose()\">Close</button>\r\n\r\n\r\n\r\n</mat-dialog-content>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/expensive/expensive.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/img/apoclogo.png\" width=\"180\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        \r\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n          <a class=\"nav-link\" routerLink=\"/notifications\">Create a post</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n            <a class=\"nav-link\" routerLink=\"/expensive\"> Create Expensive</a>\r\n          </li>\r\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n          <a class=\"nav-link\" routerLink=\"/admin\">Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n          <a class=\"nav-link\" (click)=\"logOut()\" href=\"#\">Log Out</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!isLoggedIn\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"openExpensive()\">Add Expensive</button>\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-10 offset-md-1 tpBtmSpace\">\r\n            \r\n                <div class=\"example-header\">\r\n                        <mat-form-field>\r\n                          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      \r\n                      <div class=\"example-container mat-elevation-z8\">\r\n                      \r\n                        <mat-table [dataSource]=\"dataSource\" matSort>\r\n                      \r\n                          <!-- ID Column -->\r\n                          <ng-container matColumnDef=\"SrNo\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Sr No </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\"> {{row.SrNo}} </mat-cell>\r\n                          </ng-container>\r\n\r\n                          <!-- Date Column -->\r\n                      <ng-container matColumnDef=\"ImageUrl\">\r\n                            <mat-header-cell *matHeaderCellDef\r\n                              mat-sort-header>\r\n                              Image\r\n                            </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\">\r\n                                    <img src={{row.ImageUrl}} width=\"50px\" (click)=\"openUserDetails(row._userid)\" style=\"cursor:pointer;\" height=\"50px\">\r\n                            </mat-cell>\r\n                            </ng-container>\r\n                                            \r\n                          <!-- Name Column -->\r\n                          <ng-container matColumnDef=\"Name\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\">\r\n                                {{row.Name}}\r\n                            </mat-cell>\r\n                          </ng-container>\r\n\r\n                          <!-- Address Column -->\r\n                          <ng-container matColumnDef=\"Purpose\">\r\n                              <mat-header-cell *matHeaderCellDef mat-sort-header> Purpose </mat-header-cell>\r\n                              <mat-cell *matCellDef=\"let row\"> {{row.Purpose}} </mat-cell>\r\n                            </ng-container>\r\n\r\n                        <!-- Address Column -->\r\n                      <ng-container matColumnDef=\"spend_dt\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Date </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\"> {{row.spend_dt | date }} </mat-cell>\r\n                          </ng-container>\r\n\r\n                          <!-- Purpose Column -->\r\n                          <ng-container matColumnDef=\"amount\">\r\n                              <mat-header-cell *matHeaderCellDef mat-sort-header> Amount </mat-header-cell>\r\n                              <mat-cell *matCellDef=\"let row\"> {{row.amount}} </mat-cell>\r\n                            </ng-container>\r\n\r\n                          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                          <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                          </mat-row>\r\n                        </mat-table>\r\n                      \r\n                        <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\"></mat-paginator>\r\n                      </div>\r\n                      \r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/expensive/expensive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExpensiveComponent; });
/* unused harmony export SpendData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ExpensiveDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateExpensiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_home_service__ = __webpack_require__("../../../../../src/app/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_payment_service__ = __webpack_require__("../../../../../src/app/service/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_spend_service__ = __webpack_require__("../../../../../src/app/service/spend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_spend__ = __webpack_require__("../../../../../src/app/model/spend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_authentication_Service__ = __webpack_require__("../../../../../src/app/service/authentication.Service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ExpensiveComponent = (function () {
    function ExpensiveComponent(dialog, router, homeService, paymentService, spendService, authService) {
        // Create 100 users
        this.dialog = dialog;
        this.router = router;
        this.homeService = homeService;
        this.paymentService = paymentService;
        this.spendService = spendService;
        this.authService = authService;
        this.displayedColumns = ['SrNo', 'ImageUrl', 'Name', 'Purpose', 'spend_dt', 'amount'];
        this.isLoggedIn = false;
        // Assign the data to the data source for the table to render
    }
    ExpensiveComponent.prototype.ngOnInit = function () {
        var user = this.authService.getCredentials();
        if (user)
            this.isLoggedIn = true;
        this.loadExpensives();
    };
    ExpensiveComponent.prototype.loadExpensives = function () {
        var _this = this;
        var spendArray = [];
        this.spendService.getSpends().subscribe(function (spends) {
            for (var i = 0; i < spends.length; i++) {
                var cspend = spends[i];
                var spp = new SpendData();
                spp.SrNo = i + 1;
                spp.ImageUrl = "../../assets/img/" + cspend.userid + ".jpg";
                spp.Name = cspend.username;
                spp.Purpose = cspend.purpose;
                spp.spend_dt = cspend.added_dt;
                spp.amount = cspend.amount;
                spendArray.push(spp);
            }
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](spendArray);
        });
    };
    ExpensiveComponent.prototype.openDialog = function () {
        this.dialog.open(ExpensiveDetailsComponent, {
            data: {
                animal: 'panda'
            }
        });
    };
    ExpensiveComponent.prototype.saveExpensive = function () {
        alert('hu');
    };
    ExpensiveComponent.prototype.openExpensive = function () {
        var _this = this;
        var dialogRef = this.dialog.open(CreateExpensiveComponent, {
            data: {
                animal: 'panda'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            //this.dialogResult = result;
            _this.loadExpensives();
        });
    };
    /**
       * Set the paginator and sort after the view init since this component will
       * be able to query its view for the initialized paginator and sort.
       */
    ExpensiveComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ExpensiveComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginator */])
    ], ExpensiveComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */])
    ], ExpensiveComponent.prototype, "sort", void 0);
    ExpensiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-expensive',
            template: __webpack_require__("../../../../../src/app/expensive/expensive.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__service_home_service__["a" /* HomeServices */],
                __WEBPACK_IMPORTED_MODULE_4__service_payment_service__["a" /* PaymentServices */],
                __WEBPACK_IMPORTED_MODULE_5__service_spend_service__["a" /* SpendServices */],
                __WEBPACK_IMPORTED_MODULE_7__service_authentication_Service__["a" /* AuthenticationServices */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_home_service__["a" /* HomeServices */],
            __WEBPACK_IMPORTED_MODULE_4__service_payment_service__["a" /* PaymentServices */],
            __WEBPACK_IMPORTED_MODULE_5__service_spend_service__["a" /* SpendServices */],
            __WEBPACK_IMPORTED_MODULE_7__service_authentication_Service__["a" /* AuthenticationServices */]])
    ], ExpensiveComponent);
    return ExpensiveComponent;
}());

var SpendData = (function () {
    function SpendData() {
    }
    return SpendData;
}());

var ExpensiveDetailsComponent = (function () {
    function ExpensiveDetailsComponent(data) {
        this.data = data;
    }
    ExpensiveDetailsComponent.prototype.saveme = function () {
        alert('huuuuuu');
    };
    ExpensiveDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-expensiveDetails',
            template: __webpack_require__("../../../../../src/app/expensive/expensiveDetails.Component.html"),
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], ExpensiveDetailsComponent);
    return ExpensiveDetailsComponent;
}());

var CreateExpensiveComponent = (function () {
    function CreateExpensiveComponent(data, dialogRef, spendService, router) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.spendService = spendService;
        this.router = router;
    }
    CreateExpensiveComponent.prototype.onClose = function () {
        console.log(this.dialogRef.disableClose); // Returns false
        this.dialogRef.close(); // does not close the dialog
    };
    CreateExpensiveComponent.prototype.saveExpensive = function () {
        var _this = this;
        var spend = new __WEBPACK_IMPORTED_MODULE_6__model_spend__["a" /* Spend */]();
        spend.ApocId = this.ApocId.toUpperCase();
        spend.amount = this.ExpAmount;
        spend.added_dt = Date.now();
        spend.purpose = this.Purpose;
        // userid:string;
        spend.username = this.FullName;
        this.spendService.saveSpend(spend).subscribe(function (spends) {
            console.log(spends);
            _this.router.navigate(['/expensive']);
            _this.onClose();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('closeBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], CreateExpensiveComponent.prototype, "closeBtn", void 0);
    CreateExpensiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-createExpensive',
            template: __webpack_require__("../../../../../src/app/expensive/createExpensive.Component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__service_spend_service__["a" /* SpendServices */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_5__service_spend_service__["a" /* SpendServices */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CreateExpensiveComponent);
    return CreateExpensiveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/expensive/expensiveDetails.Component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n    <div class=\"img-thumbnail\" style=\"float:left\"><img src=\"../../assets/img/avatar.jpg\" width=\"80px\" height=\"80px\" style=\"margin:0px 10px\"></div>\r\n    <button mat-raised-button color=\"primary\">Verify</button>\r\n    <button mat-raised-button color=\"warn\">Block</button>\r\n    <table class=\"table ml-auto\">\r\n        <tbody>\r\n          <tr>\r\n            <th>Name</th>\r\n            <td>Venkat reddy puthan </td>\r\n            <th>Father's Name</th>\r\n            <td>Subramanyam Reddy</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">Aadhar No</th>\r\n            <td>1234 5678 9876</td>\r\n            <th scope=\"row\">Date of Birth</th>\r\n            <td>22.11.1986 </td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">Gender</th>\r\n            <td>Male</td>\r\n            <th scope=\"row\">Mobile</th>\r\n            <td>+91 9800098000 </td>\r\n          </tr>\r\n          <tr>\r\n              <th scope=\"row\">Cast</th>\r\n              <td>Reddy</td>\r\n              <th scope=\"row\">AP OC ID</th>\r\n              <td>APOC000000001 </td>\r\n            </tr>\r\n            <tr>\r\n                <th scope=\"row\">Address 1</th>\r\n                <td>1/22, Addagutta socity</td>\r\n                <th scope=\"row\">Address 2</th>\r\n                <td> Kphb, Opp Jntu </td>\r\n              </tr>\r\n              <tr>\r\n                  <th scope=\"row\">Address 3</th>\r\n                  <td>Hyderabad -500072</td>\r\n                  <th scope=\"row\">Reference Id</th>\r\n                  <td> AP2211P1986 </td>\r\n                </tr>\r\n        </tbody>\r\n      </table>\r\n  </mat-dialog-content>"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/img/apoclogo.png\" width=\"180\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/home\" *ngIf=\"!userDetail\">Home\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/notifications\">Notifications</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/faq\">Faq</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"userDetail\">\r\n          <a class=\"nav-link\" routerLink=\"/user/{{userid}}\">Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"userDetail\">\r\n          <a class=\"nav-link\" routerLink=\"/userEditProfile/{{userid}}\">Edit profile</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"userDetail\">\r\n          <a class=\"nav-link\" (click)=\"logOut()\" href=\"#\">Log Out</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!userDetail\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-8 offset-md-2 tpBtmSpace\">\r\n                <h1 class=\"text-center\">Contact us</h1>\r\n                <p class=\"text-center\">Mussum ipsum cacilds, vidis litro abertis.</p>\r\n                <mat-accordion>\r\n                        <mat-expansion-panel>\r\n                          <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                              <h3>What is the use of this card?</h3>\r\n                            </mat-panel-title>\r\n                            \r\n                          </mat-expansion-panel-header>\r\n                      \r\n                          <p>More than one module matches. Use skip-import option to skip importing the component into the closest module.\r\n                                More than one module matches. Use skip-import option to skip importing the component into the closest module.</p>\r\n                        </mat-expansion-panel>\r\n                        <mat-expansion-panel>\r\n                                <mat-expansion-panel-header>\r\n                                  <mat-panel-title>\r\n                                    <h3>Why should i buy this card?</h3>\r\n                                  </mat-panel-title>\r\n                                  \r\n                                </mat-expansion-panel-header>\r\n                            \r\n                                <p>More than one module matches. Use skip-import option to skip importing the component into the closest module.\r\n                                      More than one module matches. Use skip-import option to skip importing the component into the closest module.</p>\r\n                              </mat-expansion-panel>\r\n                              <mat-expansion-panel>\r\n                                    <mat-expansion-panel-header>\r\n                                      <mat-panel-title>\r\n                                        <h3>What is the use of this card?</h3>\r\n                                      </mat-panel-title>\r\n                                      \r\n                                    </mat-expansion-panel-header>\r\n                                \r\n                                    <p>More than one module matches. Use skip-import option to skip importing the component into the closest module.\r\n                                          More than one module matches. Use skip-import option to skip importing the component into the closest module.</p>\r\n                                  </mat-expansion-panel>\r\n                                  <mat-expansion-panel>\r\n                                          <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                              <h3>Why should i buy this card?</h3>\r\n                                            </mat-panel-title>\r\n                                            \r\n                                          </mat-expansion-panel-header>\r\n                                      \r\n                                          <p>More than one module matches. Use skip-import option to skip importing the component into the closest module.\r\n                                                More than one module matches. Use skip-import option to skip importing the component into the closest module.</p>\r\n                                        </mat-expansion-panel>\r\n                      </mat-accordion>\r\n                      \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_home_service__ = __webpack_require__("../../../../../src/app/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authentication_Service__ = __webpack_require__("../../../../../src/app/service/authentication.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_apocuser__ = __webpack_require__("../../../../../src/app/model/apocuser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FaqComponent = (function () {
    function FaqComponent(homeService, authService, router) {
        this.homeService = homeService;
        this.authService = authService;
        this.router = router;
        this.userDetail = this.authService.getCredentials();
        if (this.userDetail) {
            // this.userDetail = user;
            this.userid = this.userDetail._id;
        }
    }
    FaqComponent.prototype.logOut = function () {
        this.authService.logout();
        var defUser = new __WEBPACK_IMPORTED_MODULE_4__model_apocuser__["a" /* ApocUser */]();
        this.authService.setCredentials(defUser);
        this.router.navigate(['/login']);
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__service_authentication_Service__["a" /* AuthenticationServices */],
                __WEBPACK_IMPORTED_MODULE_1__service_home_service__["a" /* HomeServices */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_home_service__["a" /* HomeServices */],
            __WEBPACK_IMPORTED_MODULE_2__service_authentication_Service__["a" /* AuthenticationServices */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer navbar-light bg-light\">\r\n        <div class=\"container\">\r\n          <span class=\"text-muted\">&copy; Andhra pradesh oc association.</span>\r\n        </div>\r\n      </footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/img/apoclogo.png\" width=\"180\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n      \r\n    </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" *ngIf=\"!isAdmin\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/notifications\">Notifications</a>\r\n      </li>\r\n      \r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/faq\">Faq</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/login\" >Login</a>\r\n      </li>\r\n    </ul>\r\n    <mat-toolbar color=\"primary\" *ngIf=\"isLoggedIn$ | async as isLoggedIn\">\r\n      <!-- more HTML template code -->\r\n      <button mat-button (click)=\"onLogout()\" *ngIf=\"isLoggedIn\">Logout{{isLoggedIn}}</button>\r\n    </mat-toolbar>\r\n  </div>\r\n</div>\r\n</nav>\r\n\r\n<div class=\"clrdBg\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-lg-8\">\r\n        <!-- <button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button> -->\r\n\r\n        <mat-horizontal-stepper [linear]=\"isLinear\">\r\n          <mat-step [stepControl]=\"firstFormGroup\">\r\n            <form [formGroup]=\"firstFormGroup\">\r\n              <div formGroupName=\"address\">\r\n                <!-- <ng-template matStepLabel><h3>Fill your details</h3></ng-template> -->\r\n                <h3>Enter your details</h3>\r\n                <h6>This information will let us know more about you.</h6>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Enter full name\" formControlName=\"fullname\" [(ngModel)]=\"fullName\" required>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Enter Father's name\" formControlName=\"fatherName\" [(ngModel)]=\"fatherName\" required>\r\n                </mat-form-field>\r\n                <br>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Enter your email\" formControlName=\"emailFormControl\" [(ngModel)]=\"userName\" [errorStateMatcher]=\"matcher\">\r\n                  <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                    Please enter a valid email address\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                    Email is\r\n                    <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Enter your password\" formControlName=\"password\" [type]=\"hide ? 'password' : 'password'\" [(ngModel)]=\"password\"\r\n                    required>\r\n                  <!-- <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon> -->\r\n                </mat-form-field>\r\n                <br>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input type=\"text\" matInput placeholder=\"Aadhar No\" formControlName=\"aadhar\" maxlength=\"12\" [(ngModel)]=\"aadharNo\" required>\r\n                  <!-- <mat-icon matSuffix>payment</mat-icon> -->\r\n                </mat-form-field>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput [matDatepicker]=\"picker\" placeholder=\"Date of birth\" formControlName=\"dob\" [(ngModel)]=\"DOB\" required>\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker touchUi=\"true\" #picker></mat-datepicker>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Select Cast\" [(ngModel)]=\"Cast\" [ngModelOptions]=\"{standalone: true}\" required>\r\n                    <mat-option value=\"Brahmana\">Brahmana</mat-option>\r\n                    <mat-option value=\"Chowdary\">Chowdary</mat-option>\r\n                    <mat-option value=\"Kaapu\">Kaapu</mat-option>\r\n                    <mat-option value=\"Komiti\">Komiti</mat-option>\r\n                    <mat-option value=\"Kshatriya\">Kshatriya</mat-option>\r\n                    <mat-option value=\"Reddy\">Reddy</mat-option>\r\n                    <mat-option value=\"Velama\">Velama</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n\r\n                <br>\r\n                <mat-radio-group [(ngModel)]=\"Gender\" [ngModelOptions]=\"{standalone: true}\">\r\n                  <mat-radio-button value=\"Male\">Male</mat-radio-button>\r\n                  <mat-radio-button value=\"Female\">Female</mat-radio-button>\r\n                </mat-radio-group>\r\n                <br>\r\n                <input type=\"file\" #file (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" style=\"display:none\" />\r\n                <button mat-raised-button color=\"primary\" #upload (click)=\"file.click()\">Upload Photo</button>\r\n\r\n                <div class=\"btnTop\">\r\n                  <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </mat-step>\r\n          <mat-step [stepControl]=\"secondFormGroup\">\r\n            <form [formGroup]=\"secondFormGroup\">\r\n              <div formGroupName=\"address2\">\r\n                <h3>Communication address</h3>\r\n                <h6>This information will let us know more about you.</h6>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Address 1\" formControlName=\"addr1\" [(ngModel)]=\"addr1\" required>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Address 2 \" formControlName=\"addr2\" [(ngModel)]=\"addr2\" required>\r\n                </mat-form-field>\r\n\r\n\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                  <tr>\r\n                    <td>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"Distict\" formControlName=\"dist\" [(ngModel)]=\"dist\" required>\r\n                      </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"State\" formControlName=\"state\" [(ngModel)]=\"state\" required>\r\n                      </mat-form-field>\r\n                    </td>\r\n                    <br>\r\n                    <td>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput #postalCode maxlength=\"6\" placeholder=\"Postal Code\" formControlName=\"pin\" [(ngModel)]=\"pin\" required>\r\n                        <!-- <mat-hint align=\"end\">{{postalCode.value.length}} / 6</mat-hint> -->\r\n                      </mat-form-field>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <span matPrefix>+91 &nbsp;</span>\r\n                  <input type=\"tel\" matInput placeholder=\"Telephone\" formControlName=\"mobile\" maxlength=\"10\" [(ngModel)]=\"mobile\" required>\r\n                  <!-- <mat-icon matSuffix>phone</mat-icon> -->\r\n                </mat-form-field>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input type=\"tel\" matInput placeholder=\"Reference Id\" formControlName=\"refId\" [(ngModel)]=\"referenceId\" required>\r\n                  <!-- <mat-icon matSuffix>payment</mat-icon> -->\r\n                </mat-form-field>\r\n                <br>\r\n                <mat-checkbox formControlName=\"marker\" [(ngModel)]=\"marker\" required>Hide required marker</mat-checkbox>\r\n                <div class=\"btnTop\">\r\n                  <button mat-raised-button matStepperPrevious>Back</button>\r\n                  <button mat-raised-button color=\"primary\" (click)=\"saveUser()\" matStepperNext>Next</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </mat-step>\r\n          <mat-step [stepControl]=\"thirdFormGroup\">\r\n            <!-- <ng-template matStepLabel><h3>Payment</h3></ng-template> -->\r\n\r\n            <form [formGroup]=\"thirdFormGroup\">\r\n              <div formGroupName=\"payment\">\r\n                <h3>Confirmation to payment</h3>\r\n                <h6>This will redirect to payment gateway page.</h6>\r\n                <br>\r\n                <br>\r\n                <mat-checkbox formControlName=\"marker\" [(ngModel)]=\"marker\" required>\r\n                  I agree terms & conditions and pay ₹ 650.00 (Membership fee ₹ 500.00 + card ₹ 150.00)</mat-checkbox>\r\n                <div class=\"btnTop\">\r\n\r\n                  <form id=\"PostForm\" name=\"PostForm\" action=\"https://sandboxsecure.payu.in/_payment/_payment\" method=\"POST\">\r\n                    <input type=\"hidden\" name=\"lastname\" value=\"{{lastName}}\">\r\n                    <input type=\"hidden\" name=\"address2\" value=\"\">\r\n                    <input type=\"hidden\" name=\"udf5\" value=\"\">\r\n                    <input type=\"hidden\" name=\"service_provider\" value=\"payu_paisa\">\r\n                    <input type=\"hidden\" name=\"curl\" value=\"\">\r\n                    <input type=\"hidden\" name=\"udf4\" value=\"\">\r\n                    <input type=\"hidden\" name=\"txnid\" value=\"{{txnid}}\">\r\n                    <input type=\"hidden\" name=\"furl\" value=\"{{surl}}\">\r\n                    <input type=\"hidden\" name=\"state\" value=\"\">\r\n                    <input type=\"hidden\" name=\"udf2\" value=\"\">\r\n                    <input type=\"hidden\" name=\"udf1\" value=\"{{id}}\">\r\n                    <input type=\"hidden\" name=\"zipcode\" value=\"\">\r\n                    <input type=\"hidden\" name=\"amount\" value=\"{{amount}}\">\r\n                    <input type=\"hidden\" name=\"email\" value=\"{{email}}\">\r\n                    <input type=\"hidden\" name=\"city\" value=\"\">\r\n                    <input type=\"hidden\" name=\"country\" value=\"\">\r\n                    <input type=\"hidden\" name=\"udf3\" value=\"\">\r\n                    <input type=\"hidden\" name=\"address1\" value=\"tettet\">\r\n                    <input type=\"hidden\" name=\"hash\" value=\"{{hash}}\">\r\n                    <input type=\"hidden\" name=\"key\" value=\"{{mkey}}\">\r\n                    <input type=\"hidden\" name=\"pg\" value=\"\">\r\n                    <input type=\"hidden\" name=\"surl\" value=\"{{surl}}\">\r\n                    <input type=\"hidden\" name=\"firstname\" value=\"{{firstName}}\">\r\n                    <input type=\"hidden\" name=\"productinfo\" value=\"{{productInfo}}\">\r\n                    <input type=\"hidden\" name=\"phone\" value=\"{{phone}}\">\r\n                    <div class=\"pay-now-button-outer\">\r\n                      <button mat-raised-button matStepperPrevious>Back</button>\r\n                      <button mat-raised-button color=\"primary\" onclick=\"javascript:document.getElementById('PostForm').submit();\" type=\"submit\">Pay now</button>\r\n                      <!-- <button class=\"btn btn-primary fontBold\" onclick=\"javascript:document.getElementById('PostForm').submit();\" type=\"submit\">PAY NOW</button> -->\r\n                    </div>\r\n                  </form>\r\n\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </mat-step>\r\n          <mat-step>\r\n            <div class=\"btnTop\">\r\n              <button mat-raised-button matStepperPrevious>Back</button>\r\n\r\n              <input matInput placeholder=\"Enter amount\" [(ngModel)]=\"amount\" required>\r\n\r\n              <button mat-raised-button color=\"primary\" (click)=\"saveUser()\" matStepperNext>Go to Payment</button>\r\n            </div>\r\n          </mat-step>\r\n          <mat-step>\r\n            <div class=\"btnTop\">\r\n              <button mat-raised-button matStepperPrevious>Back</button>\r\n\r\n              <span>Amount :</span>\r\n              <span>{{amount}}</span>\r\n\r\n            </div>\r\n          </mat-step>\r\n        </mat-horizontal-stepper>\r\n\r\n\r\n      </div>\r\n      <div class=\"col-xs-12 col-lg-4\">\r\n\r\n        <div class=\"row card\">\r\n          <div class=\"row\">\r\n            <img src=\"../../assets/img/apoclogo.png\" width=\"160px\" height=\"50px\" style=\"margin:0px 10px\">\r\n            <!-- <img src=\"../../assets/img/qrcode.png\" alt=\"\" class=\"qrcode ml-auto\"> -->\r\n\r\n          </div>\r\n          <hr>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-4\">\r\n              <div class=\"img-thumbnail\">\r\n                <img src=\"../../assets/img/avatar.jpg\" *ngIf=\"!ImageSource\" width=\"80px\" height=\"80px\">\r\n                <img alt=\"no image\" [src]=\"ImageSource\" *ngIf=\"ImageSource\" width=\"80px\" height=\"80px\">\r\n              </div>\r\n              <div class=\"sign\">\r\n                <img src=\"../../assets/img/sign.png\" style=\"margin:0px 10px\">\r\n              </div>\r\n              <div class=\"designation\">General Secretary</div>\r\n\r\n            </div>\r\n            <div class=\"col-xs-8\">\r\n\r\n              <p>\r\n                <span [hidden]=\"fullName\">YOUR NAME</span>{{ fullName }}\r\n                <br>\r\n                <span [hidden]=\"fatherName\">FATHER NAME</span>{{fatherName}}\r\n                <br>\r\n                <span [hidden]=\"aadharNo\">0000 0000 0000</span>{{aadharNo}}\r\n                <br>\r\n                <span [hidden]=\"DOB\">DD/MM/YYYY</span> {{DOB | date : \"dd/MM/yyyy\"}}\r\n                <br>\r\n                <span [hidden]=\"Gender\">GENDER</span>{{Gender}} </p>\r\n              <h4>{{apocid}}</h4>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row card\">\r\n          <div class=\"row\">\r\n            <img src=\"../../assets/img/apoclogo.png\" width=\"160px\" height=\"50px\" style=\"margin:0px 10px\">\r\n\r\n\r\n          </div>\r\n          <hr>\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col-xs-8\">\r\n\r\n              <p>\r\n                <span [hidden]=\"addr1\">1-3-123</span>{{addr1}}\r\n                <br>\r\n                <span [hidden]=\"addr12\">Madhapur</span>{{addr12}}\r\n                <br>\r\n                <span [hidden]=\"dist\">Hyderabad 500072</span>{{dist}}&nbsp;{{state}}&nbsp;{{pin}}\r\n                <br> Ref Id:\r\n                <span [hidden]=\"referenceId\">APOC00000000</span>{{referenceId}}\r\n                <br>\r\n                <span [hidden]=\"mobile\">98000 98000</span>{{mobile}}</p>\r\n\r\n              <h4>{{apocid}}</h4>\r\n            </div>\r\n            <div class=\"col-xs-4 ml-auto\">\r\n              <qr-code [value]=\"apocid\" [size]=\"120\"></qr-code>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_home_service__ = __webpack_require__("../../../../../src/app/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_payment_service__ = __webpack_require__("../../../../../src/app/service/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_apocuser__ = __webpack_require__("../../../../../src/app/model/apocuser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var HomeComponent = (function () {
    function HomeComponent(_formBuilder, http, homeService, paymentService) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.http = http;
        this.homeService = homeService;
        this.paymentService = paymentService;
        this.title = 'app';
        this.isLinear = true;
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.filesToUpload = [];
        __WEBPACK_IMPORTED_MODULE_7__app_settings__["a" /* AppSettings */].isUser = true;
        __WEBPACK_IMPORTED_MODULE_7__app_settings__["a" /* AppSettings */].isAdmin = false;
        this.homeService.getUsers()
            .subscribe(function (users) {
            console.log(users);
        });
        this.apocid = 'APOC0000001';
        this.homeService.getApocID()
            .subscribe(function (res) {
            _this.apocid = res.ApocID;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            address: this._formBuilder.group({
                street: [],
                fullname: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
                fatherName: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
                emailFormControl: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
                password: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
                aadhar: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
                dob: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            }),
        });
        this.secondFormGroup = this._formBuilder.group({
            address2: this._formBuilder.group({
                addr1: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
                addr2: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
                dist: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
                state: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
                pin: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
                mobile: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
                refId: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
                marker: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            }),
        });
        this.thirdFormGroup = this._formBuilder.group({
            payment: this._formBuilder.group({
                marker: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]]
            }),
        });
    };
    HomeComponent.prototype.upload = function (filename) {
        var _this = this;
        //this.makePayment();
        var formData = new FormData();
        var files = this.filesToUpload;
        var extention = this.filesToUpload[0]['name'].split('.')[1];
        formData.append("uploads[]", files[0], (filename + "." + extention));
        //this.filesToUpload[0]['name'] = filename
        this.http.post(__WEBPACK_IMPORTED_MODULE_7__app_settings__["a" /* AppSettings */].Server + 'upload', formData)
            .subscribe(function (files) {
            _this.filesToUpload = null;
            console.log('files', files);
            _this.makePayment(filename);
        });
    };
    HomeComponent.prototype.saveUser = function () {
        var _this = this;
        event.stopPropagation();
        var apocuser = new __WEBPACK_IMPORTED_MODULE_6__model_apocuser__["a" /* ApocUser */]();
        apocuser.FullName = this.fullName;
        apocuser.FatherName = this.fatherName;
        apocuser.EmainID = this.userName;
        apocuser.Password = this.password;
        apocuser.AadharCardNum = this.aadharNo;
        apocuser.DOB = this.DOB.toString();
        apocuser.Gender = this.Gender;
        apocuser.Addr1 = this.addr1;
        apocuser.Addr2 = this.addr2;
        apocuser.Distict = this.dist;
        apocuser.State = this.state;
        apocuser.PostalCode = this.pin;
        apocuser.Telephone = this.mobile;
        apocuser.RefID = this.referenceId;
        apocuser.isPaymentMade = false;
        apocuser.URefID = this.makeid(9);
        apocuser.ApocID = this.apocid;
        apocuser.Cast = this.Cast;
        this.homeService.saveUser(apocuser).subscribe(function (users) {
            console.log(users);
            if (_this.filesToUpload) {
                _this.upload(users._id);
            }
        });
    };
    HomeComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.filesToUpload = fileInput.target.files;
        this.CurrentFile = fileInput.target.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            _this.ImageSource = reader.result;
        };
        reader.readAsDataURL(this.CurrentFile);
        //this.product.photo = this.filesToUpload[0]['name'];
    };
    HomeComponent.prototype.makePayment = function (userid) {
        var _this = this;
        this.mkey = 'aKfpHyXk';
        this.productInfo = 'APOC';
        this.txnid = userid;
        this.amount = '650';
        this.id = '6019692';
        this.email = this.userName;
        this.phone = this.phone;
        this.lastName = this.fullName.split(' ')[1];
        this.firstName = this.fullName.split(' ')[0];
        this.surl = __WEBPACK_IMPORTED_MODULE_7__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/paymentstatus";
        this.hash = '';
        //aKfpHyXk|303c4fc75ab0cd76a809|200|test|tset|test@tset.com|test|test|test|test|test||||||
        var data = { preHashString: this.mkey + '|' + this.txnid + '|' + this.amount + '|' + this.productInfo + '|' + this.firstName + '|' + this.email + '|' + this.id + '||||||||||' };
        //var data = { preHashString:  'aKfpHyXk|303c4fc75ab0cd76a809|200|test|tset|test@tset.com|test|test|test|test|test||||||'};
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.paymentService.makePayment(data)
            .subscribe(function (files) {
            _this.hash = files.hash;
            console.log(files);
        });
    };
    HomeComponent.prototype.makeid = function (count) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < count; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_home_service__["a" /* HomeServices */], __WEBPACK_IMPORTED_MODULE_4__service_payment_service__["a" /* PaymentServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__service_home_service__["a" /* HomeServices */],
            __WEBPACK_IMPORTED_MODULE_4__service_payment_service__["a" /* PaymentServices */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/img/apoclogo.png\" width=\"180\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n      \r\n    </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" *ngIf=\"!isAdmin\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/notifications\">Notifications</a>\r\n      </li>\r\n      \r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/faq\">Faq</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/login\" >Login</a>\r\n      </li>\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/admin\">Dashboard</a>\r\n</li> -->\r\n    </ul>\r\n    <mat-toolbar color=\"primary\" *ngIf=\"isLoggedIn$ | async as isLoggedIn\">\r\n      <!-- more HTML template code -->\r\n      <button mat-button (click)=\"onLogout()\" *ngIf=\"isLoggedIn\">Logout{{isLoggedIn}}</button>\r\n    </mat-toolbar>\r\n  </div>\r\n</div>\r\n</nav>\r\n<div class=\"container\">\r\n        <div id=\"login\" class=\"signin-card\">\r\n          \r\n          <h1 class=\"display1\">User Login</h1>\r\n          <p class=\"subhead\">Login with your andhra pradesh oc association id and password</p>\r\n          <form action=\"\" method=\"\" class=\"\" role=\"form\" name=\"firstFormGroup\">\r\n            <div id=\"form-login-username\" class=\"form-group\" ngModelGroup=\"address\">\r\n              <input id=\"username\" class=\"form-control\" [(ngModel)]=\"Username\" name=\"username\" type=\"text\" size=\"18\" alt=\"login\" required />\r\n              <span class=\"form-highlight\"></span>\r\n              <span class=\"form-bar\"></span>\r\n              <label for=\"username\" class=\"float-label\">APOC Association ID</label>\r\n            </div>\r\n            <div id=\"form-login-password\" class=\"form-group\">\r\n              <input id=\"password\" class=\"form-control\" [(ngModel)]=\"Password\" name=\"password\" type=\"password\" size=\"18\" alt=\"password\" required>\r\n              <span class=\"form-highlight\"></span>\r\n              <span class=\"form-bar\"></span>\r\n              <label for=\"password\" class=\"float-label\">password</label>\r\n            </div>\r\n            <div id=\"form-login-remember\" class=\"form-group\">\r\n              <div class=\"checkbox checkbox-default\">       \r\n                  <input id=\"remember\" type=\"checkbox\" value=\"yes\" [(ngModel)]=\"rememberME\" alt=\"Remember me\" class=\"\">\r\n                  <label for=\"remember\">Remember me</label>      \r\n              </div>\r\n            </div>\r\n            <div>\r\n              <button class=\"btn btn-block btn-info ripple-effect\" (click)=\"login()\" type=\"submit\" name=\"Submit\" alt=\"sign in\">Sign in</button>  \r\n              </div>\r\n            </form>\r\n            </div>\r\n          \r\n        </div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_home_service__ = __webpack_require__("../../../../../src/app/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_authentication_Service__ = __webpack_require__("../../../../../src/app/service/authentication.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_dataService__ = __webpack_require__("../../../../../src/app/service/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_apocuser__ = __webpack_require__("../../../../../src/app/model/apocuser.ts");
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
    function LoginComponent(router, _formBuilder, http, homeService, authService, ref, _dataservice) {
        this.router = router;
        this._formBuilder = _formBuilder;
        this.http = http;
        this.homeService = homeService;
        this.authService = authService;
        this.ref = ref;
        this._dataservice = _dataservice;
        this.messageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.message = "test this asshole";
        this.setUser = function () {
            // this.authService.changeUser("true");
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firstFormGroup = this._formBuilder.group({
            address: this._formBuilder.group({
                Username: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]],
                Password: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]],
            }),
        });
        this._dataservice.currentMessage.subscribe(function (messgae) { return _this.message = messgae; });
    };
    LoginComponent.prototype.newMessage = function () {
        this._dataservice.changeMessage("from login");
    };
    LoginComponent.prototype.login = function () {
        //   this.newMessage();
        var _this = this;
        //   this.messageEvent.emit(this.message);
        this.homeService.checkUserCredantials(this.Username, this.Password).subscribe(function (res) {
            console.log(res);
            if (res[0]) {
                // this.setUser();
                //this.ref.detectChanges()
                var uservice = new __WEBPACK_IMPORTED_MODULE_8__model_apocuser__["a" /* ApocUser */]();
                uservice = res[0];
                // uservice.UserName=this.Username;
                // uservice.IsAdmin=false;
                // uservice.IsAuthenticated=true;
                // uservice.IsUser= true;
                _this.authService.setCredentials(uservice);
                __WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].isAdmin = false;
                __WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].isUser = true;
                //  this.ref.markForCheck();
                _this.authService.login();
                _this.router.navigate(['/user/' + res[0]._id]);
            }
            else {
                alert("Invalid UserName or Password");
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "messageEvent", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_home_service__["a" /* HomeServices */], __WEBPACK_IMPORTED_MODULE_5__service_authentication_Service__["a" /* AuthenticationServices */], __WEBPACK_IMPORTED_MODULE_7__service_dataService__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__service_home_service__["a" /* HomeServices */],
            __WEBPACK_IMPORTED_MODULE_5__service_authentication_Service__["a" /* AuthenticationServices */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_7__service_dataService__["a" /* DataService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatStepperModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatStepperModule */],],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/model/apocuser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApocUser; });
var ApocUser = (function () {
    function ApocUser() {
    }
    return ApocUser;
}());



/***/ }),

/***/ "../../../../../src/app/model/spend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spend; });
var Spend = (function () {
    function Spend() {
    }
    return Spend;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"assets/img/apoclogo.png\" width=\"180\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n        \r\n      </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/home\" *ngIf=\"!isAdmin\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/notifications\">Notifications</a>\r\n        </li>\r\n        \r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/faq\">Faq</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/login\" *ngIf=\"!isAdmin && !isUser\" >Login</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/admin\" *ngIf=\"isAdmin\">Dashboard</a>\r\n  </li>\r\n      </ul>\r\n      <mat-toolbar color=\"primary\" *ngIf=\"isLoggedIn$ | async as isLoggedIn\">\r\n        <!-- more HTML template code -->\r\n        <button mat-button (click)=\"onLogout()\" *ngIf=\"isLoggedIn\">Logout{{isLoggedIn}}</button>\r\n      </mat-toolbar>\r\n    </div>\r\n</div>\r\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_authentication_Service__ = __webpack_require__("../../../../../src/app/service/authentication.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_dataService__ = __webpack_require__("../../../../../src/app/service/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, _dataservice) {
        // this.isAdmin = AppSettings.isAdmin;
        // this.isUser = AppSettings.isUser;
        this.authService = authService;
        this._dataservice = _dataservice;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authService.isLoggedIn;
        // this.authService.currentAdminValue.subscribe(isAdmin => {
        //   console.log("isAdmin:" + isAdmin);
        //   //this.isAdmin = isAdmin
        // });
        // this.authService.currentUserValue.subscribe(isUser => {
        //   this.isUser = isUser
        // });
        // this._dataservice.currentMessage.subscribe(messgae => this.message = messgae);
    };
    NavbarComponent.prototype.recieveMessage = function ($event) {
        this.message = $event;
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout(); // {3}
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_authentication_Service__["a" /* AuthenticationServices */], __WEBPACK_IMPORTED_MODULE_2__service_dataService__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_authentication_Service__["a" /* AuthenticationServices */],
            __WEBPACK_IMPORTED_MODULE_2__service_dataService__["a" /* DataService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/img/apoclogo.png\" width=\"180\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/home\" *ngIf=\"!userDetail\">Home\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/notifications\">Notifications</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/faq\">Faq</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"userDetail\">\r\n          <a class=\"nav-link\" routerLink=\"/user/{{userid}}\">Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"userDetail\">\r\n          <a class=\"nav-link\" routerLink=\"/userEditProfile/{{userid}}\">Edit profile</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"userDetail\">\r\n          <a class=\"nav-link\" (click)=\"logOut()\" href=\"#\">Log Out</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!userDetail\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-8 offset-md-2 tpBtmSpace\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <div mat-card-avatar class=\"example-header-image\"></div>\r\n          <mat-card-title>Shiba Inu</mat-card-title>\r\n          <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n        <mat-card-content>\r\n          <p>\r\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes\r\n            very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\r\n          </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-button>LIKE</button>\r\n          <button mat-button>SHARE</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_home_service__ = __webpack_require__("../../../../../src/app/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authentication_Service__ = __webpack_require__("../../../../../src/app/service/authentication.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_apocuser__ = __webpack_require__("../../../../../src/app/model/apocuser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationComponent = (function () {
    function NotificationComponent(homeService, authService, router) {
        this.homeService = homeService;
        this.authService = authService;
        this.router = router;
        this.userDetail = this.authService.getCredentials();
        if (this.userDetail) {
            // this.userDetail = user;
            this.userid = this.userDetail._id;
        }
    }
    NotificationComponent.prototype.logOut = function () {
        this.authService.logout();
        var defUser = new __WEBPACK_IMPORTED_MODULE_4__model_apocuser__["a" /* ApocUser */]();
        this.authService.setCredentials(defUser);
        this.router.navigate(['/login']);
    };
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notifications',
            template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__service_authentication_Service__["a" /* AuthenticationServices */],
                __WEBPACK_IMPORTED_MODULE_1__service_home_service__["a" /* HomeServices */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_home_service__["a" /* HomeServices */],
            __WEBPACK_IMPORTED_MODULE_2__service_authentication_Service__["a" /* AuthenticationServices */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/authentication.Service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationServices; });
/* unused harmony export UserService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationServices = (function () {
    function AuthenticationServices(http) {
        this.http = http;
        this.isLogIn = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* BehaviorSubject */](false);
        this.isUser = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* BehaviorSubject */]("test");
        //isAdmin:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
        // isUser:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
        //currentAdminValue = this.isAdmin.asObservable();
        this.currentUserValue = this.isUser.asObservable();
    }
    AuthenticationServices_1 = AuthenticationServices;
    Object.defineProperty(AuthenticationServices.prototype, "isLoggedIn", {
        get: function () {
            return this.isLogIn.asObservable(); // {2}
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationServices.prototype.getCredentials = function () {
        return AuthenticationServices_1.UserRole;
    };
    AuthenticationServices.prototype.setCredentials = function (userdata) {
        AuthenticationServices_1.UserRole = userdata;
    };
    // changeUser(data:string) {
    //     this.isUser.next("data");
    //     this.isAdmin.next(true);
    // }
    AuthenticationServices.prototype.login = function () {
        this.isLogIn.next(true);
    };
    AuthenticationServices.prototype.logout = function () {
        this.isLogIn.next(false);
    };
    AuthenticationServices = AuthenticationServices_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthenticationServices);
    return AuthenticationServices;
    var AuthenticationServices_1;
}());

var UserService = (function () {
    function UserService() {
    }
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/service/dataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
        this.messageDatasource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */]("Default messgae");
        this.currentMessage = this.messageDatasource.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageDatasource.next(message);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/service/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeServices = (function () {
    function HomeServices(http) {
        this.http = http;
        console.log('Task Service Initialized..');
    }
    HomeServices.prototype.getUsers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/users')
            .map(function (res) { return res.json(); });
    };
    HomeServices.prototype.getUser = function (userid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/user/' + userid)
            .map(function (res) { return res.json(); });
    };
    HomeServices.prototype.getUsersCount = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/getusercount')
            .map(function (res) { return res.json(); });
    };
    HomeServices.prototype.getApocID = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/getapocid')
            .map(function (res) { return res.json(); });
    };
    HomeServices.prototype.updateUser = function (ApocUser, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        ApocUser.Updated_Dt = Date.now();
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/user/' + id, JSON.stringify(ApocUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ;
    HomeServices.prototype.saveUser = function (ApocUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        ApocUser.Added_Dt = Date.now();
        ApocUser.Updated_Dt = Date.now();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/user', JSON.stringify(ApocUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ;
    HomeServices.prototype.checkUserCredantials = function (userName, Password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var cred = {
            UserName: userName,
            Password: Password
        };
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/checkUserCredantials', JSON.stringify(cred), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ;
    HomeServices.prototype.checkAdminCredantials = function (userName, Password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var cred = {
            UserName: userName,
            Password: Password
        };
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/checkAdminCredantials', JSON.stringify(cred), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ;
    HomeServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HomeServices);
    return HomeServices;
}());



/***/ }),

/***/ "../../../../../src/app/service/payment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentServices = (function () {
    function PaymentServices(http) {
        this.http = http;
        console.log('Task Service Initialized..');
    }
    PaymentServices.prototype.getPayments = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/payments')
            .map(function (res) { return res.json(); });
    };
    PaymentServices.prototype.getPayment = function (paymentid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/payment/' + paymentid)
            .map(function (res) { return res.json(); });
    };
    PaymentServices.prototype.getTotalPayments = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/gettotalpayment')
            .map(function (res) { return res.json(); });
    };
    PaymentServices.prototype.savePayment = function (Payment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        Payment.added_dt = Date.now();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/payment', JSON.stringify(Payment), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ;
    PaymentServices.prototype.makePayment = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/makepayment', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ;
    PaymentServices.prototype.paymentstatus = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/paymentstatus', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ;
    PaymentServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PaymentServices);
    return PaymentServices;
}());



/***/ }),

/***/ "../../../../../src/app/service/spend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpendServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpendServices = (function () {
    function SpendServices(http) {
        this.http = http;
        console.log('Task Service Initialized..');
    }
    SpendServices.prototype.getSpends = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/spends')
            .map(function (res) { return res.json(); });
    };
    SpendServices.prototype.getSpend = function (spendid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/spend/' + spendid)
            .map(function (res) { return res.json(); });
    };
    SpendServices.prototype.getTotalSpends = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/gettotalspend')
            .map(function (res) { return res.json(); });
    };
    SpendServices.prototype.saveSpend = function (Spend) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        Spend.added_dt = Date.now();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/spend', JSON.stringify(Spend), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ;
    SpendServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SpendServices);
    return SpendServices;
}());



/***/ }),

/***/ "../../../../../src/app/userDashbord/userDashbord.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/img/apoclogo.png\" width=\"180\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n      \r\n    </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">     \r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/notifications\">Notifications</a>\r\n      </li>\r\n      \r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/faq\">Faq</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\r\n      </li>   \r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/user/{{userid}}\">Dashboard</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"/userEditProfile/{{userid}}\">Edit profile</a>\r\n  </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" (click)=\"logOut()\" href=\"#\">Log Out</a>\r\n  </li>\r\n\r\n    </ul>   \r\n  </div>\r\n</div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\" style=\"padding-top:40px;\">\r\n        <div class=\"col-md-2 col-xs-6 offset-md-2 cards\">\r\n            <mat-card>\r\n                <i class=\"material-icons\">account_circle</i>\r\n                <h3>{{totalRegUsers}}</h3>\r\n              <p>Registered Users</p>\r\n            </mat-card>            \r\n          </div>\r\n          <div class=\"col-md-2 col-xs-6\">\r\n              <mat-card class=\"alert alert-success\">\r\n                  <i class=\"material-icons\">arrow_downward</i>\r\n                  <h3>{{totalPayments}}</h3>\r\n                  <p>Recived Money</p>\r\n                </mat-card>\r\n          </div>\r\n          <div class=\"col-md-2 col-xs-6\">\r\n              <mat-card class=\"alert alert-danger\">\r\n                  <i class=\"material-icons\">arrow_upward</i>\r\n                  <h3>{{totalSpends}}</h3>\r\n                  <p>Spent Money</p>\r\n                </mat-card>\r\n          </div>\r\n          <div class=\"col-md-2 col-xs-6\">\r\n              <mat-card class=\"alert alert-primary\">\r\n                  <i class=\"material-icons\">refresh</i>\r\n                  <h3>{{availableAmount}}</h3>\r\n                  <p>Available</p>\r\n                </mat-card>\r\n          </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-10 offset-md-1 tpBtmSpace\">\r\n          \r\n              <div class=\"example-header\">\r\n                      <mat-form-field>\r\n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    \r\n                    <div class=\"example-container mat-elevation-z8\">\r\n                    \r\n                      <mat-table [dataSource]=\"dataSource\" matSort>\r\n                    \r\n                        <!-- ID Column -->\r\n                        <ng-container matColumnDef=\"SrNo\">\r\n                          <mat-header-cell *matHeaderCellDef mat-sort-header> Sr No </mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let row\"> {{row.SrNo}} </mat-cell>\r\n                        </ng-container>\r\n\r\n                        <!-- Date Column -->\r\n                    <ng-container matColumnDef=\"ImageUrl\">\r\n                          <mat-header-cell *matHeaderCellDef\r\n                            mat-sort-header>\r\n                            Image\r\n                          </mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let row\">\r\n                                  <img src={{row.ImageUrl}} width=\"50px\" style=\"cursor:pointer;\" height=\"50px\">\r\n                          </mat-cell>\r\n                          </ng-container>\r\n                                          \r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"Name\">\r\n                          <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let row\">\r\n                              {{row.Name}}\r\n                          </mat-cell>\r\n                        </ng-container>\r\n\r\n                        <!-- Address Column -->\r\n                        <ng-container matColumnDef=\"Purpose\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Purpose </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\"> {{row.Purpose}} </mat-cell>\r\n                          </ng-container>\r\n\r\n                      <!-- Address Column -->\r\n                    <ng-container matColumnDef=\"spend_dt\">\r\n                          <mat-header-cell *matHeaderCellDef mat-sort-header> Date </mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let row\"> {{row.spend_dt | date }} </mat-cell>\r\n                        </ng-container>\r\n\r\n                        <!-- Purpose Column -->\r\n                        <ng-container matColumnDef=\"amount\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Amount </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\"> {{row.amount}} </mat-cell>\r\n                          </ng-container>\r\n\r\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                        </mat-row>\r\n                      </mat-table>\r\n                    \r\n                      <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\"></mat-paginator>\r\n                    </div>\r\n                    \r\n      </div>\r\n  </div>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/userDashbord/userDashbord.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDashbordComponent; });
/* unused harmony export SpendData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_home_service__ = __webpack_require__("../../../../../src/app/service/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_payment_service__ = __webpack_require__("../../../../../src/app/service/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_spend_service__ = __webpack_require__("../../../../../src/app/service/spend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_authentication_Service__ = __webpack_require__("../../../../../src/app/service/authentication.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_apocuser__ = __webpack_require__("../../../../../src/app/model/apocuser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserDashbordComponent = (function () {
    function UserDashbordComponent(homeService, paymentService, spendService, router, route, authService) {
        var _this = this;
        this.homeService = homeService;
        this.paymentService = paymentService;
        this.spendService = spendService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.displayedColumns = ['SrNo', 'ImageUrl', 'Name', 'Purpose', 'spend_dt', 'amount'];
        // Create 100 users
        this.paymentService.getTotalPayments()
            .subscribe(function (tot) {
            _this.totalPayments = tot.totalAmount;
            console.log(tot);
            _this.spendService.getTotalSpends()
                .subscribe(function (tot) {
                _this.totalSpends = tot[0].total;
                _this.availableAmount = _this.totalPayments - _this.totalSpends;
            });
        });
        this.homeService.getUsersCount()
            .subscribe(function (tot) {
            _this.totalRegUsers = tot;
        });
        var id = this.route.params.subscribe(function (params) {
            _this.userid = params['id'];
            console.log(_this.userid);
            _this.homeService.getUser(_this.userid)
                .subscribe(function (user) {
                console.log(user);
                _this.userDetail = user;
            });
        });
    }
    /**
       * Set the paginator and sort after the view init since this component will
       * be able to query its view for the initialized paginator and sort.
       */
    UserDashbordComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authService.isLoggedIn;
        var user = this.authService.getCredentials();
        if (user) {
            this.loadExpensives();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    UserDashbordComponent.prototype.openUserDetails = function (userid) {
        this.router.navigate(['/userEditProfile/' + userid]);
    };
    UserDashbordComponent.prototype.loadExpensives = function () {
        var _this = this;
        var spendArray = [];
        this.spendService.getSpends().subscribe(function (spends) {
            for (var i = 0; i < spends.length; i++) {
                var cspend = spends[i];
                var spp = new SpendData();
                spp.SrNo = i + 1;
                spp.ImageUrl = "../../assets/img/" + cspend.userid + ".jpg";
                spp.Name = cspend.username;
                spp.Purpose = cspend.purpose;
                spp.spend_dt = cspend.added_dt;
                spp.amount = cspend.amount;
                spp._userid = cspend.userid;
                spendArray.push(spp);
            }
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatTableDataSource */](spendArray);
        });
    };
    UserDashbordComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    UserDashbordComponent.prototype.logOut = function () {
        this.authService.logout();
        var defUser = new __WEBPACK_IMPORTED_MODULE_7__model_apocuser__["a" /* ApocUser */]();
        this.authService.setCredentials(defUser);
        this.router.navigate(['/login']);
    };
    UserDashbordComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginator */])
    ], UserDashbordComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatSort */])
    ], UserDashbordComponent.prototype, "sort", void 0);
    UserDashbordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userDashbord',
            template: __webpack_require__("../../../../../src/app/userDashbord/userDashbord.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__service_home_service__["a" /* HomeServices */],
                __WEBPACK_IMPORTED_MODULE_3__service_payment_service__["a" /* PaymentServices */],
                __WEBPACK_IMPORTED_MODULE_4__service_spend_service__["a" /* SpendServices */],
                __WEBPACK_IMPORTED_MODULE_6__service_authentication_Service__["a" /* AuthenticationServices */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_home_service__["a" /* HomeServices */],
            __WEBPACK_IMPORTED_MODULE_3__service_payment_service__["a" /* PaymentServices */],
            __WEBPACK_IMPORTED_MODULE_4__service_spend_service__["a" /* SpendServices */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__service_authentication_Service__["a" /* AuthenticationServices */]])
    ], UserDashbordComponent);
    return UserDashbordComponent;
}());

var SpendData = (function () {
    function SpendData() {
    }
    return SpendData;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map