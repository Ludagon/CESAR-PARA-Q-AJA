(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <h3 class=\"text-center\" style=\"padding-top: -1.5em;\">Productos</h3>\n    <br>\n    <div class=\"row\">\n      <div *ngFor=\"let product of products; let i=index\" class=\"col-md-4\">\n        <div class=\"card card-product\">\n          <div class=\" card-header card-header-image\">\n            <a>\n              <img class=\"img\" src={{product.image}} style=\"\">\n            </a>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">\n              <a>{{product.name}}</a>\n              <br>\n            </h4>\n          <div class=\"card-footer\">\n            <div class=\"price\">\n                  <p *ngIf=\"product.price != null\" style=\"margin-top: 10px; display: inline-flex; font-size: 5vh;\"><i class=\"material-icons\">attach_money</i>{{product.price}}</p>\n            </div> \n            <button mat-raised-button color=\"basic\" (click)=\"VerDetalle(product, i)\">Detalles\n                  <span class=\"example-spacer\"></span>\n                  <i class=\"material-icons\">visibility</i>\n              </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/details/details.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/details/details.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"col-md-12 ml-auto mr-auto\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"card card-testimonial\">\n              <div *ngIf=\"catalogo==='Cerradura'\" class=\"card-header card-header-danger\">\n                <h4  class=\"card-title\">{{product.type}}\n                </h4>\n            </div>\n            <div *ngIf=\"catalogo==='Griferia'\" class=\"card-header card-header-rose\">\n              <h4  class=\"card-title\">{{product.type}}\n              </h4>\n          </div>\n              <div *ngIf=\"product.type!=='Desviador'\" class=\"card-body\">\n                <h5 class=\"card-description\">\n                  <img style=\"max-width: 100%; height: auto; max-height: 700px;\" src=\"{{product.image}}\"\n                   alt=\"productImage\">\n                </h5>\n              </div>\n              <div *ngIf=\"product.type==='Desviador'\" class=\"card-body\">\n                <h5 class=\"card-description\">\n                  <img style=\"max-width: 100%; height: auto; max-height: 460px;\" src=\"{{product.image}}\"\n                   alt=\"productImage\">\n                </h5>\n              </div>\n              <div class=\"card-footer\">\n                <h4 class=\"card-title\">{{product.name}}</h4>\n                <div class=\"card-avatar\">\n                  <a *ngIf=\"catalogo == 'Cerradura' \">\n                    <img class=\"img\" src=\"../../../assets/img/VittoriaLogo1.png\" />\n                  </a>\n                  <a *ngIf=\"catalogo == 'Griferia' \">\n                    <img class=\"img\" src=\"../../../assets/img/VittoriaLogo2.png\" />\n                  </a>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"product.name == 'Modelo5004'\" class=\"page-categories\" style=\"margin-top: 9vh;\">\n              <br />\n              <ul class=\"nav nav-pills nav-pills-danger nav-pills-icons justify-content-center\" role=\"tablist\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\n                    <i class=\"material-icons\">info</i> SET V1\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\n                    <i class=\"material-icons\">info</i> SET V2\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link9\" role=\"tablist\">\n                    <i class=\"material-icons\">info</i> Set V3\n                  </a>\n                </li>\n              </ul>\n              <div class=\"tab-content tab-space tab-subcategories\">\n                <div class=\"tab-pane col-md-10 mr-auto ml-auto\" id=\"link7\">\n                  <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title\">Accesorios del SET V1</h4>\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6 ml-auto mr-auto\">\n                          <mat-card>\n                            <img mat-card-image src=\"../../../assets/img/Recibidor.jpg\" alt=\"Recibidor\">\n                            <mat-card-content>\n                              <p style=\"text-align: center;\">\n                                <b>Recibidor</b>\n                              </p>\n                            </mat-card-content>\n                          </mat-card>\n                        </div>\n                      </div>\n                    </div>\n     \n                  </div>\n                </div>\n                <div class=\"tab-pane active\" id=\"link8\">\n                  <div class=\"tab-pane col-md-10 mr-auto ml-auto\" id=\"link7\">\n                    <div class=\"card\">\n                      <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Accesorios del SET V2</h4>\n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-md-6 ml-auto mr-auto\">\n                            <mat-card>\n                              <img mat-card-image src=\"../../../assets/img/Recibidor.jpg\" alt=\"Recibidor\">\n                              <mat-card-content>\n                                <p style=\"text-align: center;\">\n                                  <b>Recibidor</b>\n                                </p>\n                              </mat-card-content>\n                            </mat-card>\n                          </div>\n\n                          <div class=\"col-md-6 ml-auto mr-auto\">\n                            <mat-card>\n                              <img mat-card-image src=\"../../../assets/img/CilindroSeguridad.jpg\" alt=\"Cilindro\">\n                              <mat-card-content>\n                                <p style=\"text-align: center;\">\n                                  <b>Cilindro de seguridad</b>\n                                </p>\n                              </mat-card-content>\n                            </mat-card>\n                          </div>\n                        </div>\n                      </div>\n       \n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"link9\">\n                  <div class=\"tab-pane col-md-12 mr-auto ml-auto\" id=\"link7\">\n                    <div class=\"card\">\n                      <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Accesorios del SET V2</h4>\n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4 ml-auto mr-auto\">\n                            <mat-card>\n                              <img mat-card-image src=\"../../../assets/img/Recibidor.jpg\" alt=\"Recibidor\">\n                              <mat-card-content>\n                                <p style=\"text-align: center;\">\n                                  <b>Recibidor</b>\n                                </p>\n                              </mat-card-content>\n                            </mat-card>\n                          </div>\n\n                          <div class=\"col-md-4 ml-auto mr-auto\">\n                            <mat-card>\n                              <img mat-card-image src=\"../../../assets/img/CilindroSeguridad.jpg\" alt=\"Cilindro\">\n                              <mat-card-content>\n                                <p style=\"text-align: center;\">\n                                  <b>Cilindro de seguridad</b>\n                                </p>\n                              </mat-card-content>\n                            </mat-card>\n                          </div>\n\n                          \n                          <div class=\"col-md-4 ml-auto mr-auto\">\n                            <mat-card>\n                              <img mat-card-image src=\"../../../assets/img/Protector.jpg\" alt=\"Cilindro\">\n                              <mat-card-content>\n                                <p style=\"text-align: center;\">\n                                  <b>Protector</b>\n                                </p>\n                              </mat-card-content>\n                            </mat-card>\n                          </div>\n                        </div>\n                      </div>\n       \n                    </div>\n                  </div>\n                  \n                </div>\n              </div>\n            </div>\n\n            </div>\n          <div class=\"col-md-4 ml-auto\">\n              <div class=\"card animated slideInUp delay-3\">\n                  <div *ngIf=\"catalogo==='Cerradura'\" class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title text-center\">Especificaciones</h4>\n                  </div>\n\n                  <div *ngIf=\"catalogo==='Griferia'\" class=\"card-header card-header-rose\">\n                    <h4 class=\"card-title text-center\">Especificaciones</h4>\n                </div>\n\n                  <div class=\"card-body\">\n                    <div *ngFor=\"let descripcion of product.descripcion_list\">\n                      <p style=\"font-size: 15px;\"><i class=\"material-icons\" style=\"display: inline-block; font-size: smaller; text-shadow: 2px 2px 1px rgba(000, 0, 0, .2); margin-right: 1rem; color: green;\">done</i>{{descripcion}}</p>\n                      <p *ngIf=\"descripcion==='Sistema anti-robo'\"\n                     style=\"font-size: 15px;\"><i class=\"material-icons\" style=\"display: inline-block; font-size: smaller; text-shadow: 2px 2px 1px rgba(0, 0, 0, .2); margin-right: 1rem; color: green;\">lock</i>Sistema Anti-robo</p>\n                    </div>\n                    \n                  </div>\n              </div>\n\n              <div *ngIf=\"product.Accesorios!=null\" class=\"card animated slideInUp delay-3\">\n                <div class=\"card-header card-header-rose\">\n                  <h4 class=\"card-title text-center\">Accesorios</h4>\n                </div>\n\n                <div class=\"card-body\">\n                  <div *ngFor=\"let accesorios of product.Accesorios\">\n                    <p style=\"font-size: 15px;\"><i class=\"material-icons\" style=\"display: inline-block; font-size: smaller; text-shadow: 2px 2px 1px rgba(000, 0, 0, .2); margin-right: 1rem; color: green;\">done</i>{{accesorios}}</p>\n                  </div>\n                  \n                </div>\n            </div>\n\n              <div class=\"card animated slideInUp delay-3\">\n                <div  *ngIf=\"catalogo==='Cerradura'\" class=\"card-header card-header-danger\">\n                    <h4 class=\"card-title text-center\"> <i (click)=\"Prueba()\"> <img  style= \"filter: brightness(0) saturate(100%) invert(98%) sepia(92%) saturate(0%) hue-rotate(125deg) brightness(108%) contrast(100%);\"src=\"./assets/img/sidebarWS3.png\">Whatsaap</i></h4>\n                </div>\n                <div  *ngIf=\"catalogo==='Griferia'\" class=\"card-header card-header-rose\">\n                  <h4 class=\"card-title text-center\"> <i (click)=\"Prueba()\"> <img  style= \"filter: brightness(0) saturate(100%) invert(98%) sepia(92%) saturate(0%) hue-rotate(125deg) brightness(108%) contrast(100%);\"src=\"./assets/img/sidebarWS3.png\">Whatsaap</i></h4>\n              </div>\n                <div class=\"card-body\">\n                  <p>No dudes en ponerte en contacto con nosotros y enterate de todos los beneficios de los productos Vittoria</p>\n                  <button  *ngIf=\"isCerradura===false\" mat-raised-button color=\"basic\" class=\"btn btn-rose pull-right\" (click)=\"Prueba()\">Enviar Mensaje\n                </button>\n                <button  *ngIf=\"isCerradura===true\" mat-raised-button color=\"basic\" class=\"btn btn-danger pull-right\" (click)=\"Prueba()\">Enviar Mensaje\n                </button>\n            </div>\n          </div>\n      </div>\n      <div>\n\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var DashboardComponent = /** @class */ (function () {
    // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
    function DashboardComponent(router, ProductService, activatedRoute) {
        this.router = router;
        this.ProductService = ProductService;
        this.activatedRoute = activatedRoute;
        this.isCerradura = false;
        this.products = this.ProductService.getGriferia();
    }
    // constructor(private navbarTitleService: NavbarTitleService) { }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var breakCards = true;
        if (breakCards === true) {
            // We break the cards headers if there is too much stress on them :-)
            $('[data-header-animation="true"]').each(function () {
                var $fix_button = $(this);
                var $card = $(this).parent('.card');
                $card.find('.fix-broken-card').click(function () {
                    var $header = $(this).parent().parent().siblings('.card-header, .card-image');
                    $header.removeClass('hinge').addClass('fadeInDown');
                    $card.attr('data-count', 0);
                    setTimeout(function () {
                        $header.removeClass('fadeInDown animate');
                    }, 480);
                });
                $card.mouseenter(function () {
                    var $this = $(this);
                    var hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                    $this.attr('data-count', hover_count);
                    if (hover_count >= 20) {
                        $(this).children('.card-header, .card-image').addClass('hinge animated');
                    }
                });
            });
        }
    };
    DashboardComponent.prototype.VerDetalle = function (productData, index) {
        this.router.navigate(['inicio/detalle', index]);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _md_md_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../md/md.module */ "./src/app/md/md.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details/details.component */ "./src/app/dashboard/details/details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _md_md_module__WEBPACK_IMPORTED_MODULE_4__["MdModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/details.component */ "./src/app/dashboard/details/details.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DashboardRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
            }]
    }, {
        path: '',
        children: [{
                path: 'detalle/:id',
                component: _details_details_component__WEBPACK_IMPORTED_MODULE_1__["DetailsComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/dashboard/details/details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/details/details.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/details/details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/details/details.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(activatedRoute, ProductService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.ProductService = ProductService;
        this.router = router;
        this.isCerradura = this.router.url.includes("Cerraduras");
        this.activatedRoute.params.subscribe(function (params) { _this.index = params['id']; });
        this.product = this.ProductService.getProduct(this.isCerradura, this.index);
        console.log(this.product);
        this.catalogo = this.ProductService.getCatalogo(this.product);
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.prototype.Prueba = function () {
        window.open("https://wa.me/584241654663?text=Estoy%20interesado%20en%20tus%20productos", "blank");
    };
    DetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/details/details.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./details.component.css */ "./src/app/dashboard/details/details.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [
            {
                "id": "1",
                "name": "Modelo7002",
                "image": "assets/img/Modelo7002.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Modelo7002",
                    "Cerradura de triple acción",
                    "Entrada de 64 mm",
                    "Mando para accionar barras verticales",
                    "Pestillon reversible y accionable",
                    "Tapas de hierro reforzadas",
                    "2 anclajes para el uso de barras verticales",
                    "4 pases de llaves doppia mappia",
                    "Pasadores verticales con 40mm de recorrido",
                    "Acabado de acero inoxidable",
                    "Estandar Europeo"
                ],
                "type": "Cerradura de Seguridad",
                "category": "Product",
                "catalogo": "Cerradura"
            },
            {
                "id": "2",
                "name": "Modelo5004",
                "image": "assets/img/Modelo5004.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Modelo5004",
                    "Cerradura de triple acción",
                    "4 pasadores cilindricos laterales",
                    "2 pestillos",
                    "4 anclajes para el uso de barras verticales",
                    "Tapa de hierro reforzada",
                    "Pletina frontal en acero inoxidable",
                    "Acabado de hierro galvanizado",
                    "Acabado de acero inoxidable",
                    "Estandar Europeo",
                    "Sistema anti-robo"
                ],
                "type": "Cerradura de Seguridad",
                "category": "Product",
                "catalogo": "Cerradura"
            },
            {
                "id": "3",
                "name": "Modelo7043",
                "image": "assets/img/Modelo7043.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Modelo7043",
                    "Cerradura de triple acción",
                    "6 pasadores cilindricos laterales",
                    "Pestillon reversible y accionable",
                    "2 anclajes para el uso de barras verticales",
                    "4 pases de llaves doppia mappia",
                    "2 pases de llaves cilindrico",
                    "Tapa de hierro reforzada",
                    "Acabado de acero inoxidable",
                    "Estandar Europeo",
                ],
                "type": "Cerradura de Seguridad",
                "category": "Product",
                "catalogo": "Cerradura"
            },
            {
                "id": "4",
                "name": "Desviador",
                "image": "assets/img/Procducto Cerradura.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Mando para accionar barras verticales",
                    "3 pasadores cilindricos laterales",
                    "Tapa de hierro reforzada",
                    "Pasadores de hierro cromado",
                    "Estandar Europeo",
                ],
                "type": "Desviador",
                "category": "Product",
                "catalogo": "Cerradura"
            },
            {
                "id": "5",
                "name": "Manillas M01",
                "image": "assets/img/Manillas1.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Modelo M 01",
                    "Acero inoxidable",
                    "Acabado satinado",
                    "Estandar Europeo",
                ],
                "type": "Manillas",
                "category": "Product",
                "catalogo": "Cerradura"
            },
            {
                "id": "6",
                "name": "Manillas M02",
                "image": "assets/img/Manillas5.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Modelo M 02",
                    "Acabado cromado",
                    "Estandar Europeo",
                ],
                "type": "Manillas",
                "category": "Product",
                "catalogo": "Cerradura"
            },
            {
                "id": "7",
                "name": "Manillas M03",
                "image": "assets/img/Manillas4.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Modelo M 03",
                    "Acabado cromado",
                    "Estandar Europeo",
                ],
                "type": "Manillas",
                "category": "Product",
                "catalogo": "Cerradura"
            },
            {
                "id": "8",
                "name": "Kit de pomo Manillas",
                "image": "assets/img/Manillas3.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Acabado cromado",
                    "Acabado espejo",
                    "Estandar Europeo",
                ],
                "type": "Manillas",
                "category": "Product",
                "catalogo": "Cerradura"
            },
            {
                "id": "9",
                "name": "Pomo fijo",
                "image": "assets/img/Pomo1.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Acabado cromado",
                    "Acabado espejo",
                    "Estandar Europeo",
                ],
                "type": "Pomo",
                "category": "Product",
                "catalogo": "Cerradura"
            },
            {
                "id": "9",
                "name": "Pomo fijo",
                "image": "assets/img/Pomo2.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Acero inoxidable",
                    "Acabado espejo",
                    "Estandar Europeo",
                ],
                "type": "Pomo",
                "category": "Product",
                "catalogo": "Cerradura"
            },
            {
                "id": "10",
                "name": "Manillon",
                "image": "assets/img/Manillones.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Acero inoxidable",
                    "Acabado satinado",
                    "80 cm x 120 cm",
                    "1mm de espesor",
                    "1 1/4 pulgadas de diámetro",
                    "Estandar Europeo",
                ],
                "type": "Manillon",
                "category": "Product",
                "catalogo": "Cerradura"
            },
            {
                "id": "11",
                "name": "Cilindro de seguridad",
                "image": "assets/img/CilindroSeguridad.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Material: laton",
                    "Acabado satinado",
                    "Medidas: 32.5 +32.5 / 40 + 45",
                    "Estandar Europeo",
                ],
                "type": "Accesorios",
                "category": "Accesory",
                "catalogo": "Cerradura"
            },
            {
                "id": "12",
                "name": "Protector de cilindro",
                "image": "assets/img/Protector.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Acabado espejo",
                    "Estandar Europeo",
                ],
                "type": "Accesorios",
                "category": "Accesory",
                "catalogo": "Cerradura"
            },
            {
                "id": "13",
                "name": "Pivotes Fijos",
                "image": "assets/img/Pivotes.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Material hierro",
                    "Acabado espejo",
                    "Estandar Europeo",
                ],
                "type": "Accesorios",
                "category": "Accesory",
                "catalogo": "Cerradura"
            },
            {
                "id": "14",
                "name": "Llave cilindro",
                "image": "assets/img/Llave.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Material laton",
                    "Estandar Europeo",
                ],
                "type": "Accesorios",
                "category": "Accesory",
                "catalogo": "Cerradura"
            },
            {
                "id": "15",
                "name": "Llave Doppia Mappa",
                "image": "assets/img/LlaveDoppia.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "Material laton",
                    "Estandar Europeo",
                ],
                "type": "Accesorios",
                "category": "Accesory",
                "catalogo": "Cerradura"
            },
            {
                "id": "16",
                "name": "KF 3001",
                "image": "assets/img/KF3001.jpg",
                "description": "una descripcion",
                "price": 50,
                "descripcion_list": [
                    "Grifo cuadrado para cocina",
                    "100% Acero inoxidable 304",
                    "Acabado satinado",
                    "Monomando para agua fria y caliente con conexiones 3/8\"",
                    "Vástago de cerámica de 35 mm",
                    "Resistencias a altas presiones de agua",
                    "Diseño ergonómico",
                    "Peso 1450 G"
                ],
                "type": "Griferia - Cocina",
                "category": "Product",
                "catalogo": "Griferia"
            },
            {
                "id": "16",
                "name": "KF 3002",
                "image": "assets/img/KF3002.jpg",
                "description": "una descripcion",
                "price": 62,
                "descripcion_list": [
                    "Grifo para cocina con mango extraible",
                    "Manguera altamente flexible de 115 cm de largo",
                    "100% Acero inoxidable 304",
                    "Acabado satinado",
                    "Monomando para agua fria y caliente con conexiones 3/8\"",
                    "Vástago de cerámica de 35 mm",
                    "Airador que permite un ahorro de agua y un flujo constante",
                    "Diseño ergonómico",
                    "Peso 1600 G"
                ],
                "type": "Griferia - Cocina",
                "category": "Product",
                "catalogo": "Griferia"
            },
            {
                "id": "16",
                "name": "KF 3003",
                "price": 68,
                "image": "assets/img/KF3003.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Airador que permite un buen flujo de agua",
                    "Sin deformaciones ni salpicaduras",
                    "100% Acero inoxidable 304",
                    "Acabado satinado",
                    "Monomando para agua fria y caliente con conexiones 3/8\"",
                    "Vástago de cerámica de 35 mm",
                    "La parte superior permite un giro de 360 grados",
                    "Peso 2200 G"
                ],
                "type": "Griferia - Cocina",
                "category": "Product",
                "catalogo": "Griferia"
            },
            {
                "id": "17",
                "name": "KF 3004",
                "price": 74,
                "image": "assets/img/KF3004.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Grifo para cocina con mango extraible",
                    "Manguera altamente flexible con 115 cm de largo, revestida de nylon especial para minimizar el ruido",
                    "100% Acero inoxidable 304",
                    "Acabado satinado",
                    "Monomando para agua fria y caliente con conexiones 3/8\"",
                    "Vástago de cerámica de 35 mm",
                    "Airador que permite un ahorro de agua y un flujo constante",
                    "Diseño ergonómico",
                    "Peso 2750 G"
                ],
                "type": "Griferia - Cocina",
                "category": "Product",
                "catalogo": "Griferia"
            },
            {
                "id": "18",
                "name": "KF 3005",
                "price": 70,
                "image": "assets/img/KF3005.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Grifo para cocina",
                    "100% Acero inoxidable 304",
                    "Acabado satinado",
                    "Manguera de goma negra mate",
                    "Monomando para agua fria y caliente con conexiones 3/8\"",
                    "Vástago de cerámica de 35 mm",
                    "Airador que permite un ahorro de agua y un flujo constante, sin deformaciones ni salpicaduras",
                    "Diseño ergonómico",
                    "Peso 2200 G"
                ],
                "type": "Griferia - Cocina",
                "category": "Product",
                "catalogo": "Griferia"
            },
            {
                "id": "19",
                "name": "BF 8006",
                "price": 25,
                "image": "assets/img/BF8006.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Griferia para baños ",
                    "100% Acero inoxidable 304",
                    "Acabado satinado",
                    "Monomando para agua fria y caliente con conexiones 3/8\"",
                    "Vástago de cerámica de 35 mm",
                    "Airador que permite un ahorro de agua y un flujo constante, sin deformaciones ni salpicaduras",
                    "Altura ergonómica",
                    "Peso 1050 G"
                ],
                "type": "Griferia - Baño",
                "category": "Product",
                "catalogo": "Griferia"
            },
            {
                "id": "20",
                "name": "BF 8007",
                "price": 38,
                "image": "assets/img/BF8007.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Grifo para baños tipo cascada ",
                    "100% Acero inoxidable 304",
                    "Acabado satinado",
                    "Monomando para agua fria y caliente con conexiones 3/8\"",
                    "Vástago de cerámica de 35 mm",
                    "Resistente a altas presiones de agua",
                    "Peso 1100 G"
                ],
                "type": "Griferia - Baño",
                "category": "Product",
                "catalogo": "Griferia"
            },
            {
                "id": "21",
                "name": "BF 8008",
                "price": 64,
                "image": "assets/img/BF8008.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Griferia para baño tipo cascada ",
                    "Cuerpo de latón solido",
                    "Acabado cromado",
                    "Monomando para agua fria y caliente con conexiones 3/8\"",
                    "Vástago de cerámica de 35 mm",
                    "Resistente a altas presiones de agua",
                    "Altura precisa y ergonómica",
                    "Peso 3000 G"
                ],
                "type": "Griferia - Baño",
                "category": "Product",
                "catalogo": "Griferia"
            },
            {
                "id": "22",
                "name": "KF 8009",
                "price": 60,
                "image": "assets/img/KF8009.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Griferia para baño tipo cascada ",
                    "Cuerpo de latón solido",
                    "Acabado cromado",
                    "Monomando para agua fria y caliente con conexiones 3/8\"",
                    "Vástago de cerámica de 35 mm",
                    "Resistente a altas presiones de agua",
                    "Altura precisa y ergonómica",
                    "Peso 1370 G"
                ],
                "type": "Griferia - Baño",
                "category": "Product",
                "catalogo": "Griferia"
            },
            {
                "id": "23",
                "name": "SS 9002",
                "price": 68,
                "image": "assets/img/SS9002.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Set de ducha para baño cuadrada ",
                    "Diseño moderno",
                    "Cabeza de ducha de 200 mm en acero inoxidabale 304, acabado tipo espejo",
                    "Brazo con acabado cromado",
                    "Rociadores de silicón",
                    "Monomando para agua fria y caliente en acero inoxidable con embellecedor cromado",
                    "Mezclador en latón solido con vástago de ceramica de 35 mm",
                ],
                "type": "Set de duchas",
                "category": "Product",
                "catalogo": "Griferia"
            },
            {
                "id": "24",
                "price": 117,
                "name": "SS 9004",
                "image": "assets/img/SS9004.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Set de ducha para baño cuadrada ",
                    "Diseño moderno",
                    "Cabeza de ducha de 200 mm en acero inoxidabale 304, acabado tipo espejo",
                    "Brazo con acabado cromado",
                    "Rociadores de silicón",
                    "Monomando para agua fria y caliente en acero inoxidable con embellecedor cromado",
                    "Mezclador en latón solido con vástago de ceramica de 35 mm",
                    "Ducha de teléfono y sus conexiones"
                ],
                "type": "Set de duchas",
                "category": "Product",
                "catalogo": "Griferia"
            },
            {
                "id": "25",
                "name": "KS 2001",
                "price": 148,
                "image": "assets/img/KS2001.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Fregadero doble tina sobre tope",
                    "Elaborados en acero inoxidable",
                    "Acabado satinado",
                    "Revestidos en material que minimiza el ruido",
                    "Esquinas suavemente redondeadas lo que facilita su limpieza",
                    "Profundidad de 200 mm",
                    "Medidas 820 mm x 450 mm x 200 mm",
                ],
                "Accesorios": [
                    "Cesta de goteo(expansible)",
                    "Cesta para fregadero(desagüe)",
                    "Sifón y sus conexiones",
                ],
                "type": "Fregaderos",
                "category": "Product",
                "catalogo": "Griferia"
            },
            {
                "id": "26",
                "name": "KS 2002",
                "price": 190,
                "image": "assets/img/KS2002.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Fregadero doble tina sobre tope",
                    "Elaborados en acero inoxidable",
                    "Acabado satinado",
                    "Revestidos en material que minimiza el ruido",
                    "Esquinas suavemente redondeadas lo que facilita su limpieza",
                    "Profundidad de 200 mm",
                    "Medidas 820 mm x 500 mm x 200 mm",
                ],
                "Accesorios": [
                    "Cesta de goteo(expansible)",
                    "Cesta para fregadero(desagüe)",
                    "Cesta de goteo para cubiertos",
                    "Utensillos para fregaderos",
                    "Sifón y sus conexiones",
                ],
                "type": "Fregaderos",
                "category": "Product",
                "catalogo": "Griferia"
            },
            {
                "id": "27",
                "name": "DG 6001",
                "price": 35,
                "image": "assets/img/DG6001.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "50cm x 10cm",
                    "Material acero inoxidable",
                    "Estandar Europeo",
                ],
                "type": "Rejilla para desague",
                "category": "Accesory",
                "catalogo": "Griferia"
            },
            {
                "id": "28",
                "name": "DG 6002",
                "price": 7,
                "image": "assets/img/DG6002.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "11cm x 8.3cm",
                    "Material acero inoxidable",
                    "Estandar Europeo",
                ],
                "type": "Rejilla para desague",
                "category": "Accesory",
                "catalogo": "Griferia"
            },
            {
                "id": "29",
                "name": "Vástago",
                "price": 3,
                "image": "assets/img/Vástago.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Marca Vittoria",
                    "35 mm",
                    "Resistente a altas presiones",
                    "Material: Ceramica",
                ],
                "type": "Rejilla para desague",
                "category": "Accesory",
                "catalogo": "Griferia"
            },
        ];
    }
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.getGriferia = function () {
        return this.products.filter(function (r) { return r.catalogo == 'Griferia'; });
    };
    ProductService.prototype.getCerradura = function () {
        return this.products.filter(function (r) { return r.catalogo == 'Cerradura'; });
    };
    ProductService.prototype.getCerraduraProductos = function () {
        return this.products.filter(function (r) { return r.category == 'Product' && r.catalogo == 'Cerradura'; });
    };
    ProductService.prototype.getCerraduraAccesorios = function () {
        return this.products.filter(function (r) { return r.category == 'Accesory' && r.catalogo == 'Cerradura'; });
    };
    ProductService.prototype.getProduct = function (isCerradura, index) {
        if (isCerradura) {
            this.filteredproducts = this.products.filter(function (r) { return r.catalogo == 'Cerradura'; });
        }
        else {
            this.filteredproducts = this.products.filter(function (r) { return r.catalogo == 'Griferia'; });
        }
        console.log(this.filteredproducts);
        console.log(index);
        return this.filteredproducts[index];
    };
    ProductService.prototype.getCatalogo = function (product) {
        return product.catalogo;
    };
    ProductService.prototype.updateSelectedProduct = function (product) {
        this.selectedproduct = product;
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map