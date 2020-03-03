(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <h3 class=\"text-center\" style=\"padding-top: -1.5em;\">Productos</h3>\n    <br>\n    <div class=\"row\">\n      <div *ngFor=\"let product of products; let i=index\" class=\"col-md-4\">\n        <div class=\"card card-product\">\n          <div class=\" card-header card-header-image\">\n            <a>\n              <img class=\"img\" src={{product.image}} style=\"\">\n            </a>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">\n              <a>{{product.name}}</a>\n              <br>\n            </h4>\n          <div class=\"card-footer\">\n            <div class=\"price\">\n                  <p *ngIf=\"product.price != null\" style=\"margin-top: 10px; display: inline-flex;\"><i class=\"material-icons\">attach_money</i>{{product.price}}</p>\n            </div> \n            <button mat-raised-button color=\"basic\" (click)=\"VerDetalle(product, i)\">Detalles\n                  <span class=\"example-spacer\"></span>\n                  <i class=\"material-icons\">visibility</i>\n              </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/details/details.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/details/details.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"col-md-12 ml-auto mr-auto\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"card card-testimonial\">\n              <div *ngIf=\"catalogo==='Cerradura'\" class=\"card-header card-header-danger\">\n                <h4  class=\"card-title\">{{product.type}}\n                </h4>\n            </div>\n            <div *ngIf=\"catalogo==='Griferia'\" class=\"card-header card-header-rose\">\n              <h4  class=\"card-title\">{{product.type}}\n              </h4>\n          </div>\n              <div *ngIf=\"product.type!=='Desviador'\" class=\"card-body\">\n                <h5 class=\"card-description\">\n                  <img style=\"max-width: 100%; height: auto; max-height: 700px;\" src=\"{{product.image}}\"\n                   alt=\"productImage\">\n                </h5>\n              </div>\n              <div *ngIf=\"product.type==='Desviador'\" class=\"card-body\">\n                <h5 class=\"card-description\">\n                  <img style=\"max-width: 100%; height: auto; max-height: 460px;\" src=\"{{product.image}}\"\n                   alt=\"productImage\">\n                </h5>\n              </div>\n              <div class=\"card-footer\">\n                <h4 class=\"card-title\">{{product.name}}</h4>\n                <div class=\"card-avatar\">\n                  <a *ngIf=\"catalogo == 'Cerradura' \">\n                    <img class=\"img\" src=\"../../../assets/img/VittoriaLogo1.png\" />\n                  </a>\n                  <a *ngIf=\"catalogo == 'Griferia' \">\n                    <img class=\"img\" src=\"../../../assets/img/VittoriaLogo2.png\" />\n                  </a>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"product.name == 'Modelo5004'\" class=\"page-categories\" style=\"margin-top: 9vh;\">\n              <br />\n              <ul class=\"nav nav-pills nav-pills-danger nav-pills-icons justify-content-center\" role=\"tablist\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\n                    <i class=\"material-icons\">info</i> SET V1\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\n                    <i class=\"material-icons\">info</i> SET V2\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link9\" role=\"tablist\">\n                    <i class=\"material-icons\">info</i> Set V3\n                  </a>\n                </li>\n              </ul>\n              <div class=\"tab-content tab-space tab-subcategories\">\n                <div class=\"tab-pane col-md-10 mr-auto ml-auto\" id=\"link7\">\n                  <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title\">Accesorios del SET V1</h4>\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6 ml-auto mr-auto\">\n                          <mat-card>\n                            <img mat-card-image src=\"../../../assets/img/Recibidor.jpg\" alt=\"Recibidor\">\n                            <mat-card-content>\n                              <p style=\"text-align: center;\">\n                                <b>Recibidor</b>\n                              </p>\n                            </mat-card-content>\n                          </mat-card>\n                        </div>\n                      </div>\n                    </div>\n     \n                  </div>\n                </div>\n                <div class=\"tab-pane active\" id=\"link8\">\n                  <div class=\"tab-pane col-md-10 mr-auto ml-auto\" id=\"link7\">\n                    <div class=\"card\">\n                      <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Accesorios del SET V2</h4>\n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-md-6 ml-auto mr-auto\">\n                            <mat-card>\n                              <img mat-card-image src=\"../../../assets/img/Recibidor.jpg\" alt=\"Recibidor\">\n                              <mat-card-content>\n                                <p style=\"text-align: center;\">\n                                  <b>Recibidor</b>\n                                </p>\n                              </mat-card-content>\n                            </mat-card>\n                          </div>\n\n                          <div class=\"col-md-6 ml-auto mr-auto\">\n                            <mat-card>\n                              <img mat-card-image src=\"../../../assets/img/CilindroSeguridad.jpg\" alt=\"Cilindro\">\n                              <mat-card-content>\n                                <p style=\"text-align: center;\">\n                                  <b>Cilindro de seguridad</b>\n                                </p>\n                              </mat-card-content>\n                            </mat-card>\n                          </div>\n                        </div>\n                      </div>\n       \n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"link9\">\n                  <div class=\"tab-pane col-md-12 mr-auto ml-auto\" id=\"link7\">\n                    <div class=\"card\">\n                      <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Accesorios del SET V2</h4>\n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4 ml-auto mr-auto\">\n                            <mat-card>\n                              <img mat-card-image src=\"../../../assets/img/Recibidor.jpg\" alt=\"Recibidor\">\n                              <mat-card-content>\n                                <p style=\"text-align: center;\">\n                                  <b>Recibidor</b>\n                                </p>\n                              </mat-card-content>\n                            </mat-card>\n                          </div>\n\n                          <div class=\"col-md-4 ml-auto mr-auto\">\n                            <mat-card>\n                              <img mat-card-image src=\"../../../assets/img/CilindroSeguridad.jpg\" alt=\"Cilindro\">\n                              <mat-card-content>\n                                <p style=\"text-align: center;\">\n                                  <b>Cilindro de seguridad</b>\n                                </p>\n                              </mat-card-content>\n                            </mat-card>\n                          </div>\n\n                          \n                          <div class=\"col-md-4 ml-auto mr-auto\">\n                            <mat-card>\n                              <img mat-card-image src=\"../../../assets/img/Protector.jpg\" alt=\"Cilindro\">\n                              <mat-card-content>\n                                <p style=\"text-align: center;\">\n                                  <b>Protector</b>\n                                </p>\n                              </mat-card-content>\n                            </mat-card>\n                          </div>\n                        </div>\n                      </div>\n       \n                    </div>\n                  </div>\n                  \n                </div>\n              </div>\n            </div>\n\n            </div>\n          <div class=\"col-md-4 ml-auto\">\n              <div class=\"card animated slideInUp delay-3\">\n                  <div *ngIf=\"catalogo==='Cerradura'\" class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title text-center\">Especificaciones</h4>\n                  </div>\n\n                  <div *ngIf=\"catalogo==='Griferia'\" class=\"card-header card-header-rose\">\n                    <h4 class=\"card-title text-center\">Especificaciones</h4>\n                </div>\n\n                  <div class=\"card-body\">\n                    <!--Modelo7002-->\n                    <div *ngIf =\"product.name =='Modelo7002'\" id=\"tripleAccion\">\n                      <h4 style=\"text-align: center; margin-bottom: 1.5vh;\"><b>Cerradura Triple Acción</b></h4>\n                      <div *ngFor=\"let descripcion of product.descripcion_list\">\n                        <p style=\"font-size: 15px; text-align: justify;\"><i class=\"material-icons\" style=\"display: inline-block; font-size: smaller; text-shadow: 2px 2px 1px rgba(000, 0, 0, .2); margin-right: 1rem; color: green;\">done</i>{{descripcion}}</p>\n                      </div>\n                      <h4 style=\"text-align: center; margin-top: 1.5vh; margin-bottom: 2vh;\"><b>Sistema Principal</b></h4>\n                      <div *ngFor=\"let principal of product.principal\">\n                        <p style=\"font-size: 15px; text-align: justify;\"><i class=\"material-icons\" style=\"display: inline-block; font-size: smaller; text-shadow: 2px 2px 1px rgba(000, 0, 0, .2); margin-right: 1rem; color: green;\">done</i>{{principal}}</p>\n                      </div>\n                    </div>\n                      <!--Modelo7043-->\n                      <div *ngIf =\"product.name =='Modelo7043'\" id=\"tripleAccion\">\n                        <h4 style=\"text-align: center; margin-bottom: 1.5vh;\"><b>Cerradura Triple Acción</b></h4>\n                        <div *ngFor=\"let descripcion of product.descripcion_list\">\n                          <p style=\"font-size: 15px; text-align: justify;\"><i class=\"material-icons\" style=\"display: inline-block; font-size: smaller; text-shadow: 2px 2px 1px rgba(000, 0, 0, .2); margin-right: 1rem; color: green;\">done</i>{{descripcion}}</p>\n                        </div>\n                        <h4 style=\"text-align: center; margin-top: 1.5vh; margin-bottom: 2vh;\"><b>Sistema Principal</b></h4>\n                        <div *ngFor=\"let principal of product.principal\">\n                          <p style=\"font-size: 15px; text-align: justify;\"><i class=\"material-icons\" style=\"display: inline-block; font-size: smaller; text-shadow: 2px 2px 1px rgba(000, 0, 0, .2); margin-right: 1rem; color: green;\">done</i>{{principal}}</p>\n                        </div>\n                        <h4 style=\"text-align: center; margin-top: 1.5vh; margin-bottom: 2vh;\"><b>Sistema Secundario</b></h4>\n                        <div *ngFor=\"let secundario of product.secundario\">\n                          <p style=\"font-size: 15px; text-align: justify;\"><i class=\"material-icons\" style=\"display: inline-block; font-size: smaller; text-shadow: 2px 2px 1px rgba(000, 0, 0, .2); margin-right: 1rem; color: green;\">done</i>{{secundario}}</p>\n                        </div>\n                  </div>\n\n                  <!--Modelo 5004-->\n                  <div *ngIf =\"product.name =='Modelo5004'\" id=\"tripleAccion\">\n                    <h4 style=\"text-align: center; margin-top: 1.5vh; margin-bottom: 2vh;\"><b>Sistema Principal</b></h4>\n                    <div *ngFor=\"let principal of product.principal\">\n                      <p style=\"font-size: 15px; text-align: justify;\"><i class=\"material-icons\" style=\"display: inline-block; font-size: smaller; text-shadow: 2px 2px 1px rgba(000, 0, 0, .2); margin-right: 1rem; color: green;\">done</i>{{principal}}</p>\n                    </div>\n                    <h4 style=\"text-align: center; margin-top: 1.5vh; margin-bottom: 2vh;\"><b>Sistema Antirobo</b></h4>\n                      <p style=\"font-size: 15px; text-align: justify;\"><i class=\"material-icons\" style=\"display: inline-block; font-size: smaller; text-shadow: 2px 2px 1px rgba(000, 0, 0, .2); margin-right: 1rem; color: green;\">lock</i>{{product.antirobo}}</p>\n                  </div>\n\n                  <!--Cualquier otro-->\n                  <div *ngIf =\"product.name !='Modelo5004' && product.name!='Modelo7002' && product.name!= 'Modelo7043' \" id=\"tripleAccion\">\n                    <div *ngFor=\"let descripcion of product.descripcion_list\">\n                      <p style=\"font-size: 15px; text-align: justify;\"><i class=\"material-icons\" style=\"display: inline-block; font-size: smaller; text-shadow: 2px 2px 1px rgba(000, 0, 0, .2); margin-right: 1rem; color: green;\">done</i>{{descripcion}}</p>\n                    </div>\n              </div>\n              </div>\n              </div>\n              <div class=\"card animated slideInUp delay-3\">\n                <div  *ngIf=\"catalogo==='Cerradura'\" class=\"card-header card-header-danger\">\n                    <h4 class=\"card-title text-center\"> <i (click)=\"Prueba()\"> <img  style= \"filter: brightness(0) saturate(100%) invert(98%) sepia(92%) saturate(0%) hue-rotate(125deg) brightness(108%) contrast(100%);\"src=\"./assets/img/sidebarWS3.png\">Whatsaap</i></h4>\n                </div>\n                <div  *ngIf=\"catalogo==='Griferia'\" class=\"card-header card-header-rose\">\n                  <h4 class=\"card-title text-center\"> <i (click)=\"Prueba()\"> <img  style= \"filter: brightness(0) saturate(100%) invert(98%) sepia(92%) saturate(0%) hue-rotate(125deg) brightness(108%) contrast(100%);\"src=\"./assets/img/sidebarWS3.png\">Whatsaap</i></h4>\n              </div>\n                <div class=\"card-body\">\n                  <p>No dudes en ponerte en contacto con nosotros y enterate de todos los beneficios de los productos Vittoria</p>\n                  <button  *ngIf=\"isCerradura===false\" mat-raised-button color=\"basic\" class=\"btn btn-rose pull-right\" (click)=\"Prueba()\">Enviar Mensaje\n                </button>\n                <button  *ngIf=\"isCerradura===true\" mat-raised-button color=\"basic\" class=\"btn btn-danger pull-right\" (click)=\"Prueba()\">Enviar Mensaje\n                </button>\n            </div>\n          </div>\n    </div>\n  </div>\n</div>\n");

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
        this.isCerradura = true;
        this.products = this.ProductService.getCerradura();
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
        this.isCerradura = true;
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
                    "Entrada de 64 mm",
                    "Mando arriba y abajo para accionar barras verticales",
                    "Pestillon(resbalón) reversible y accionable con sus llaves Doppia Mappa",
                    "Tapa de hierro reforzada, espesor superior que brinda mayor seguridad",
                    "Acabado de acero inoxidable",
                ],
                "principal": [
                    "2 Anclajes barras verticales",
                    "4 Pases de llaves Doppia Mappa",
                    "Pasadores laterales con un recorrido de 40mm",
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
                "principal": [
                    "Cerradura de triple acción",
                    "4 Pasadores cilindricos laterales con recorrido de 29 mm",
                    "2 Anclajes para el uso de barras verticales con recorrido de 20 mm",
                    "Pestillo de 20 mm de diámetro",
                    "Tapa reforzada de 2 mm de espesor",
                    "Platina frontal de acero inoxidable de 3 mm de espesor",
                ],
                "antirobo": "En caso de extracción del cilindro, la cerradura cuenta con un mecanismo de bloqueo que evitara su apertura.",
                "type": "Cerradura de Seguridad",
                "category": "Product",
                "catalogo": "Cerradura"
            },
            {
                "id": "3",
                "name": "Modelo7043",
                "image": "assets/img/7043.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Mando arriba y abajo para accionar barras verticales",
                    "6 Pasadores cilindricos laterales con 18mm de diametro",
                    "Pestillon(resbalón) reversible y accionable con las llaves del cilindro de alta seguridad o con sus llaves Doppia Mappa, este tiene un diámetro de 20mm",
                    "Acabado de acero inoxidable",
                ],
                "principal": [
                    "2 Anclajes para barras verticales",
                    "4 Pases de llaves Doppia Mappa",
                    "Pasadores laterales con un recorrido de 40mm",
                ],
                "secundario": [
                    "Entrada de 64,1 mm",
                    "2 Pases de llave, cilindrico de seguridad",
                ],
                "type": "Cerradura de Seguridad",
                "category": "Product",
                "catalogo": "Cerradura"
            },
            {
                "id": "4",
                "name": "Desviador",
                "image": "assets/img/Desviador.jpg",
                "description": "una descripcion",
                "descripcion_list": [
                    "Mando arriba y abajo para accionar barras verticales",
                    "3 Pasadores cilíndricos laterales",
                    "Pasadores laterales con un recorrido de 36 mm",
                    "Tapa de hierro reforzada de 2mm, espesor superior a otras marcas en el mercado, que brindan mayor seguridad",
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
                    "Marca: Vittoria",
                    "Producto: Manillas",
                    "Modelo: M 01",
                    "Material: Acero inoxidable",
                    "Acabado: Satinado",
                    "Diseño y calidad: Estándar Europeo",
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
                    "Marca: Vittoria",
                    "Producto: Manillas",
                    "Modelo: M 02",
                    "Acabado: Cromado",
                    "Diseño y calidad: Estándar Europeo",
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
                    "Marca: Vittoria",
                    "Producto: Set de Manillas",
                    "Modelo: M 03",
                    "Acabado: Cromado",
                    "Diseño y calidad: Estándar Europeo",
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
                    "Marca: Vittoria",
                    "Producto: Kit de pomo manillas",
                    "Acabado: Cromado/Espejo",
                    "Diseño y calidad: Estándar Europeo",
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
                    "Marca: Vittoria",
                    "Producto: Pomo Fijo",
                    "Acabado: Cromado/Espejo",
                    "Diseño y calidad: Estándar Europeo",
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
                    "Marca: Vittoria",
                    "Producto: Pomo Fijo",
                    "Material: Acero inoxidable",
                    "Acabado: Espejo",
                    "Diseño y calidad: Estándar Europeo",
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
                    "Marca: Vittoria",
                    "Producto: Manillon o tirador",
                    "Material: Acero inoxidable",
                    "Acabado: Satinado/Espejo",
                    "Medidas: 80cm / 120cm",
                    "Espesor: 1,0mm ",
                    "Diámetro: 1 \"1/4 pulgadas de diámetro",
                    "Diseño y calidad: Estándar Europeo",
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
                    "Marca: Vittoria",
                    "Producto: Cilindro de seguridad de 14 pines",
                    "Medidas: 32.5 + 32.5 / 40+45",
                    "Material: Latón",
                    "Acabado: Satinado",
                    "Diseño y calidad: Estándar Europeo",
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
                    "Marca: Vittoria",
                    "Producto: Protector de cilindro",
                    "Acabado: Espejo",
                    "Diseño y calidad: Estándar Europeo",
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
                    "Marca: Vittoria",
                    "Producto: Pivotes Fijos",
                    "Material: Hierro",
                    "Acabado: Espejo",
                    "Diseño y calidad: Estándar Europeo",
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
                    "Marca: Vittoria",
                    "Producto: LLave cilindro",
                    "Material: Latón",
                    "Diseño y calidad: Estándar Europeo",
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
                    "Marca: Vittoria",
                    "Producto: Llave Doppia Mappa",
                    "Material: Latón",
                    "Diseño y calidad: Estándar Europeo",
                ],
                "type": "Accesorios",
                "category": "Accesory",
                "catalogo": "Cerradura"
            }
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