(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isMobile() == false\">\n  <div class=\"skw-pages\">\n    <div class=\"skw-page skw-page-1 active\">\n      <div class=\"skw-page__half skw-page__half--left\" (click)=\"goToGrifferia()\">\n        <div class=\"skw-page__skewed\">\n          <div class=\"skw-page__content\"></div>\n        </div>\n      </div>\n      <div class=\"skw-page__half skw-page__half--right\">\n        <div class=\"skw-page__skewed\">\n          <div class=\"skw-page__content\">\n            <div class=\"prueba-1 textRevealContainer\">\n              <div class=\"prueba2-1 textReveal rotateY\">\n                <div>\n                  <div>\n                       <h3  (click)=\"goToGrifferia()\">Innovando tu hogar</h3>\n                       <p class=\"skw-page__description\" style=\"font-size: smaller;\">desliza hacia abajo</p>\n                    </div>\n                    </div>\n                  </div>\n                  </div>\n  \n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"skw-page skw-page-2\">\n      <div class=\"skw-page__half skw-page__half--left\">\n        <div class=\"skw-page__skewed\">\n          <div class=\"skw-page__content\">\n            <div class=\"prueba-2 \">\n              <div class=\"prueba2-2\">\n                <div>\n                  <div>\n                    <h3 (click)=\"goToCerradura()\">Aliados de tu seguridad</h3>\n                    </div>\n                    </div>\n                  </div>\n                  </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"skw-page__half skw-page__half--right\"  (click)=\"goToCerradura()\">\n        <div class=\"skw-page__skewed\">\n          <div class=\"skw-page__content\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n\n<div *ngIf=\"isMobile() == true\">\n  <div>\n    <img (click)=\"goToGrifferia()\" src=\"/assets/img/landing2.jpg\" style=\"width:100%;\">\n    \n  </div>\n\n  <div class=\"container\" style=\"background-color:#777;text-align:center;padding:50px 40px;text-align: justify;\">\n      <div class=\"box\" style=\"display: flex; align-items: center;\">\n        <img src=\"/assets/img/VittoriaLogo2.png\" style=\"height: 28px; width: 28px;\" alt=\"\">\n        <h3 style=\" color:white; margin-left: 5px;\">Grifferias</h3>\n    </div>\n      <p style=\"color: whitesmoke;\">Conoce nuestros productos e innova tu hogar</p>\n      <p (click)=\"goToGrifferia()\" style=\"text-align: right; color: white;\"><b>navegar</b></p>\n  </div>\n  \n  <img (click)=\"goToCerradura()\" src=\"/assets/img/landing1.jpg\" style=\"width:100%;\">\n  \n  <div class=\"container\" style=\"background-color:#777;text-align:center;padding:50px 40px;text-align: justify;\">\n    <div class=\"box\" style=\"display: flex; align-items: center;\">\n      <img src=\"/assets/img/VittoriaLogo1.png\" style=\"height: 28px; width: 28px;\" alt=\"\">\n      <h3 style=\"text-align:center; color:white; margin-left: 5px;\">Cerraduras</h3>\n  </div>\n      <p style=\"color: whitesmoke;\">Seguridad y comfort al alcance de un click</p>\n      <p (click)=\"goToCerradura()\" style=\"text-align: right; color: white;\"><b>navegar</b></p>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"wrapper\">\n        <div  [hidden]=\"URLNav===true\" class=\"sidebar\" data-color=\"white\" data-background-color=\"blue\" data-image=\"./assets/img/sidebar-1.jpg\">\n            <app-sidebar-cmp></app-sidebar-cmp>\n            <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg)\"></div>\n        </div>\n        <div [hidden]=\"URLNav===false\" class=\"sidebar\" data-color=\"white\" data-background-color=\"red\" data-image=\"./assets/img/sidebar-1.jpg\">\n            <app-sidebar-cmp></app-sidebar-cmp>\n            <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg)\"></div>\n        </div>\n        <div class=\"main-panel\">\n            <app-navbar-cmp></app-navbar-cmp>\n            <router-outlet></router-outlet>\n            <div *ngIf=\"!isMap()\">\n                <app-footer-cmp></app-footer-cmp>\n            </div>\n        </div>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-primary navbar-transparent navbar-absolute\" color-on-scroll=\"500\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <a class=\"navbar-brand d-none d-sm-none d-md-block\" [routerLink]=\"['/dashboard']\">Material Dashboard Pro Angular</a>\n      <a class=\"navbar-brand d-block d-sm-block d-md-none\" [routerLink]=\"['/dashboard']\">MD Pro Angular</a>\n    </div>\n    <button mat-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\n            <i class=\"material-icons\">dashboard</i> Dashboard\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/pages/register']\">\n            <i class=\"material-icons\">person_add</i> Register\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/pages/login']\">\n            <i class=\"material-icons\">fingerprint</i> Login\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/pages/lock']\">\n            <i class=\"material-icons\">lock_open</i> Lock\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n  <router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/md/md-chart/md-chart.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/md/md-chart/md-chart.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">{{ title }}</h4>\n    <p class=\"category\">{{ subtitle }}</p>\n  </div>\n  <div class=\"content\">\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\n\n    <div class=\"footer\">\n      <div class=\"legend\">\n        <span *ngFor=\"let item of legendItems\">\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\n        </span>\n      </div>\n      <hr *ngIf=\"withHr\">\n      <div class=\"stats\">\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/md/md-table/md-table.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/md/md-table/md-table.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"content table-responsive\">\n    <table class=\"table\">\n      <tbody>\n          <tr *ngFor=\"let row of data.dataRows\">\n            <!-- <td *ngFor=\"let cell of row\">{{ cell }}</td> -->\n            <td>\n                <div class=\"flag\">\n                    <img src=\"./assets/img/flags/{{row[0]}}.png\" alt=\"\">\n                </div>\n            </td>\n            <td>\n                {{row[1]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[2]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[3]}}\n            </td>\n          </tr>\n      </tbody>\n    </table>\n\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Fixed Plugin configurator, used just for Demo Purpose -->\n<div class=\"fixed-plugin\">\n    <div class=\"dropdown show-dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n            <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\"> Sidebar Filters</li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                  <div class=\"ml-auto mr-auto\">\n                    <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                    <span class=\"badge filter badge-azure active\" data-color=\"azure\"></span>\n                    <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                    <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                    <span class=\"badge filter badge-danger\" data-color=\"danger\"></span>\n                    <span class=\"badge filter badge-rose\" data-color=\"rose\"></span>\n                  </div>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                    <div class=\"ml-auto mr-auto\">\n                        <span class=\"badge filter badge-white\" data-color=\"white\"></span>\n                        <span class=\"badge filter badge-black\" data-color=\"black\"></span>\n                        <span class=\"badge filter badge-danger active\" data-color=\"red\"></span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"adjustments-line\">\n              <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                  <p>Sidebar Mini</p>\n                  <label class=\"ml-auto\">\n                    <div class=\"togglebutton switch-sidebar-mini\">\n                      <label>\n                          <input type=\"checkbox\">\n                              <span class=\"toggle\"></span>\n                      </label>\n                    </div>\n                  </label>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"ripple-container\"></div>\n              </a>\n            </li>\n            <li class=\"adjustments-line\">\n              <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                  <p>Sidebar Images</p>\n                  <label class=\"switch-mini ml-auto\">\n                    <div class=\"togglebutton switch-sidebar-image\">\n                      <label>\n                          <input type=\"checkbox\" checked=\"\">\n                            <span class=\"toggle\"></span>\n                      </label>\n                    </div>\n                  </label>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"ripple-container\"></div>\n              </a>\n            </li>\n            <li class=\"header-title\">Images</li>\n            <li class=\"active\">\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\" />\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\" />\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\" />\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\" />\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\n  <div class=\"container-fluid\">\n    <nav class=\"pull-left\">\n      <ul>\n        <li>\n          <a (click)=\"direccionar()\">\n            Vittoria\n          </a>\n        </li>\n        <li>\n          <a (click)=\"direccionar1()\">\n            Quienes somos\n          </a>\n        </li>\n        <li>\n          <a (click)=\"direccionar2()\">\n            Contactanos\n          </a>\n        </li>\n        <li>\n            <a (click)=\"direccionar3()\">\n              Ubicanos\n            </a>\n          </li>\n      </ul>\n    </nav>\n    <div class=\"copyright pull-right\">\n       &copy;\n        {{test | date: 'yyyy'}} DISTRIBUIDORA MARVIC 7000, C.A RIF: J-40929091-3<span style=\"visibility: hidden;\">---</span>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav #navbar class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-minimize\">\n        <button mat-raised-button (click)=\"minimizeSidebar()\" class=\"btn btn-just-icon btn-white btn-fab btn-round\">\n          <i class=\"material-icons text_align-center visible-on-sidebar-regular\">more_vert</i>\n          <i class=\"material-icons design_bullet-list-67 visible-on-sidebar-mini\">view_list</i>\n        </button>\n      </div>\n      <a class=\"navbar-brand\"> {{getTitle()}}</a>\n    </div>\n    <button mat-button class=\"navbar-toggler btn-no-ripple\" type=\"button\" (click)=\"sidebarToggle()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <ul class=\"navbar-nav\">\n        <li *ngIf=\"isCerradura === false\" class=\"nav-item\">\n            <button (click)=\"goToCerradura()\" mat-raised-button class=\"btn btn-just-icon btn-link btn-link\">\n              <img src=\"./assets/img/VittoriaLogo1.png\" style=\"width: 24px; height: 24px;\">\n              </button>\n        </li>\n        <li *ngIf=\"isCerradura === true\" class=\"nav-item\">\n          <button (click)=\"goToCerradura()\" mat-raised-button class=\"btn btn-just-icon btn-link btn-link\">\n            <img src=\"./assets/img/VittoriaLogo2.png\" style=\"width: 24px; height: 24px;\">\n            </button>\n      </li>\n        <li class=\"nav-item\">\n          <button (click)=\"twitter()\" mat-raised-button class=\"btn btn-just-icon btn-link btn-twitter\">\n              <i class=\"fa fa-twitter\"></i>\n            </button>\n      </li>\n        <li class=\"nav-item\">\n            <button (click)=\"facebook()\" mat-raised-button class=\"btn btn-just-icon btn-link btn-facebook\">\n                <i class=\"fa fa-facebook\"></i>\n              </button>\n        </li>\n        <li class=\"nav-item\">\n            <button (click)=\"instagram()\" mat-raised-button mat-min-fab class=\"btn btn-just-icon btn-link\">\n                <img src=\"./assets/img/instagram.png\">\n            </button>\n        </li>\n        <li class=\"nav-item\" style=\"margin-right: 3vw;\">\n            <button (click)=\"whatsaap()\" mat-raised-button mat-min-fab class=\"btn btn-just-icon btn-link\">\n                <img src=\"./assets/img/whatsaap.png\">\n            </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("        <div class=\"logo\">\n          <a class=\"simple-text logo-mini\">\n            <div class=\"logo-img\">\n                <img  *ngIf=\"url===true\" src=\"/assets/img/LogoVittoriaLogo1.png\"/>\n                <img  *ngIf=\"url!==true\" src=\"/assets/img/LogoVittoriaGrifferia.png\"/>\n            </div>\n          </a>\n            <a class=\"simple-text logo-normal\">\n              Vittoria\n            </a>\n        </div>\n\n<!--aca se jode-->\n        <div class=\"sidebar-wrapper\">\n\n            <ul class=\"nav\">\n              <div *ngIf=\"url===true\">\n              <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\" class=\"nav-item\">\n                  <!--If is a single link-->\n                  <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\" class=\"nav-link\">\n                      <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                      <p>{{menuitem.title}}</p>\n                  </a>\n                  <!--If it have a submenu-->\n                  <a data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\" *ngIf=\"menuitem.type === 'sub'\" (click)=\"updatePS()\" class=\"nav-link\">\n                      <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                      <p>{{menuitem.title}}<b class=\"caret\"></b></p>\n                  </a>\n\n                  <!--Display the submenu items-->\n                  <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                      <ul class=\"nav\">\n                          <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\" class=\"nav-item\">\n                              <a *ngIf=\"childitem.title=='Correo'\" [routerLink]=\"[menuitem.path, childitem.path]\" class=\"nav-link\">\n                                  <i  class=\"material-icons\">{{childitem.ab}}</i>\n                                  <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                              </a>\n                              <a *ngIf=\"childitem.title!='Correo'\" class=\"nav-link\">\n                                  <i *ngIf=\"childitem.ab=='TW'\" class=\"fa fa-twitter\"></i>\n                                  <i *ngIf=\"childitem.ab=='FB'\" class=\"fa fa-facebook\"></i>\n                                  <i *ngIf=\"childitem.ab=='IG'\"> <img  style= \"filter: brightness(0) saturate(100%) invert(98%) sepia(92%) saturate(0%) hue-rotate(125deg) brightness(108%) contrast(100%);\"src=\"./assets/img/instagram.png\"> </i>\n                                  <i (click)=\"Prueba(childitem.ab)\" *ngIf=\"childitem.ab=='WS'\"> <img  style= \"filter: brightness(0) saturate(100%) invert(98%) sepia(92%) saturate(0%) hue-rotate(125deg) brightness(108%) contrast(100%);\"src=\"./assets/img/sidebarWS3.png\"> </i>\n                                  <span class=\"sidebar-normal\" (click)=\"Prueba(childitem.ab)\">{{childitem.title}}</span>\n                              </a>\n                          </li>\n                      </ul>\n                  </div>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"\" class=\"nav-link\">\n                    <i class=\"material-icons\">exit_to_app</i>\n                    <p>Griferias</p>\n                </a>\n            </li>\n            </div>\n\n\n            <div *ngIf=\"url===false\">\n                <li *ngFor=\"let menuitem of menuItems\" class=\"nav-item\">\n                    <!--If is a single link-->\n                    <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\" class=\"nav-link\">\n                        <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                        <p>{{menuitem.title}}</p>\n                    </a>\n                    <!--If it have a submenu-->\n                    <a data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\" *ngIf=\"menuitem.type === 'sub'\" (click)=\"updatePS()\" class=\"nav-link\">\n                        <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                        <p>{{menuitem.title}}<b class=\"caret\"></b></p>\n                    </a>\n  \n                    <!--Display the submenu items-->\n                    <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                        <ul class=\"nav\">\n                            <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\" class=\"nav-item\">\n                                <a *ngIf=\"childitem.title=='Correo'\" [routerLink]=\"[menuitem.path, childitem.path]\" class=\"nav-link\">\n                                    <i  class=\"material-icons\">{{childitem.ab}}</i>\n                                    <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                                </a>\n                                <a *ngIf=\"childitem.title!='Correo'\" class=\"nav-link\">\n                                    <i *ngIf=\"childitem.ab=='TW'\" class=\"fa fa-twitter\"></i>\n                                    <i *ngIf=\"childitem.ab=='FB'\" class=\"fa fa-facebook\"></i>\n                                    <i *ngIf=\"childitem.ab=='IG'\"> <img  style= \"filter: brightness(0) saturate(100%) invert(98%) sepia(92%) saturate(0%) hue-rotate(125deg) brightness(108%) contrast(100%);\"src=\"./assets/img/instagram.png\"> </i>\n                                    <i (click)=\"Prueba(childitem.ab)\" *ngIf=\"childitem.ab=='WS'\"> <img  style= \"filter: brightness(0) saturate(100%) invert(98%) sepia(92%) saturate(0%) hue-rotate(125deg) brightness(108%) contrast(100%);\"src=\"./assets/img/sidebarWS3.png\"> </i>\n                                    <span class=\"sidebar-normal\" (click)=\"Prueba(childitem.ab)\">{{childitem.title}}</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a (click)=\"goToCerradura()\" class=\"nav-link\">\n                        <i class=\"material-icons\">exit_to_app</i>\n                        <p>Cerraduras</p>\n                    </a>\n                </li>\n              </div>\n          </ul>\n          </div>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./calendar/calendar.module": [
		"./src/app/calendar/calendar.module.ts",
		"default~calendar-calendar-module~forms-forms-module",
		"calendar-calendar-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./forms/forms.module": [
		"./src/app/forms/forms.module.ts",
		"default~calendar-calendar-module~forms-forms-module",
		"forms-forms-module"
	],
	"./widgets/widgets.module": [
		"./src/app/widgets/widgets.module.ts",
		"widgets-widgets-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            var body = document.getElementsByTagName('body')[0];
            var modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
            if (body.classList.contains('modal-open')) {
                body.classList.remove('modal-open');
                modalBackdrop.remove();
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-app',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "./src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]
            ],
            declarations: [],
            imports: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_18__["CarouselModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_16__["AppRoutes"], {
                    useHash: true
                }),
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                MaterialModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_10__["SidebarModule"],
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_12__["NavbarModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_11__["FooterModule"],
                _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_13__["FixedpluginModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"],
                _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_17__["LandingPageComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppRoutes = [
    {
        path: '',
        component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"],
    },
    {
        path: 'inicio',
        component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'contactanos',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'conocenos',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            }, {
                path: 'ubicanos',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
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



var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(router) {
        this.router = router;
    }
    LandingPageComponent.prototype.isMobile = function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() > 1024) {
            return false;
        }
        return true;
    };
    ;
    LandingPageComponent.prototype.onResize = function () {
        this.isMobile();
    };
    LandingPageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            var curPage = 1;
            var numOfPages = jquery__WEBPACK_IMPORTED_MODULE_2__(".skw-page").length;
            var animTime = 1000;
            var scrolling = false;
            var pgPrefix = ".skw-page-";
            var test = ".prueba-";
            var test2 = ".prueba2-";
            function pagination() {
                scrolling = true;
                jquery__WEBPACK_IMPORTED_MODULE_2__(test + curPage).addClass("textRevealContainer");
                jquery__WEBPACK_IMPORTED_MODULE_2__(test2 + curPage).addClass("textReveal").addClass("rotateY");
                jquery__WEBPACK_IMPORTED_MODULE_2__(test + (curPage - 1)).removeClass("textRevealContainer");
                jquery__WEBPACK_IMPORTED_MODULE_2__(test2 + (curPage - 1)).removeClass("textReveal").removeClass("rotateY");
                jquery__WEBPACK_IMPORTED_MODULE_2__(test + (curPage + 1)).removeClass("textRevealContainer");
                jquery__WEBPACK_IMPORTED_MODULE_2__(test2 + (curPage + 1)).removeClass("textReveal").removeClass("rotateY");
                jquery__WEBPACK_IMPORTED_MODULE_2__(pgPrefix + curPage).removeClass("inactive").addClass("active");
                jquery__WEBPACK_IMPORTED_MODULE_2__(pgPrefix + (curPage - 1)).addClass("inactive");
                jquery__WEBPACK_IMPORTED_MODULE_2__(pgPrefix + (curPage + 1)).removeClass("active");
                setTimeout(function () {
                    scrolling = false;
                }, animTime);
            }
            ;
            function navigateUp() {
                if (curPage === 1)
                    return;
                curPage--;
                pagination();
            }
            ;
            function navigateDown() {
                if (curPage === numOfPages)
                    return;
                curPage++;
                pagination();
            }
            ;
            document.addEventListener('wheel', function (event) {
                if (scrolling)
                    return;
                if (event.deltaY < 0 || event.detail < 0) {
                    navigateUp();
                }
                else {
                    navigateDown();
                }
            }, false);
            jquery__WEBPACK_IMPORTED_MODULE_2__(document).on("keydown", function (e) {
                if (scrolling)
                    return;
                if (e.which === 38) {
                    navigateUp();
                }
                else if (e.which === 40) {
                    navigateDown();
                }
            });
        });
    };
    LandingPageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
    };
    LandingPageComponent.prototype.goToGrifferia = function () {
        this.router.navigate(['/inicio']);
    };
    LandingPageComponent.prototype.goToCerradura = function () {
        window.open("http://www.serraturevittoria.com/#/inicio", "blank");
    };
    LandingPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LandingPageComponent.prototype, "onResize", null);
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _md_md_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../md/md.module */ "./src/app/md/md.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
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







var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, location) {
        var _this = this;
        this.router = router;
        this.yScrollStack = [];
        this.location = location;
        this.router.events.subscribe(function (val) {
            _this.URLNav = false;
        });
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        var html = document.getElementsByTagName('html')[0];
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
            html.classList.add('perfect-scrollbar-on');
        }
        else {
            html.classList.add('perfect-scrollbar-off');
        }
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            _this.navbar.sidebarClose();
        });
        this.navItems = [
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarRight,
                title: '',
                iconClass: 'fa fa-bell-o',
                numNotifications: 5,
                dropdownItems: [
                    { title: 'Notification 1' },
                    { title: 'Notification 2' },
                    { title: 'Notification 3' },
                    { title: 'Notification 4' },
                    { title: 'Another Notification' }
                ]
            },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarRight,
                title: '',
                iconClass: 'fa fa-list',
                dropdownItems: [
                    { iconClass: 'pe-7s-mail', title: 'Messages' },
                    { iconClass: 'pe-7s-help1', title: 'Help Center' },
                    { iconClass: 'pe-7s-tools', title: 'Settings' },
                    'separator',
                    { iconClass: 'pe-7s-lock', title: 'Lock Screen' },
                    { iconClass: 'pe-7s-close-circle', title: 'Log Out' }
                ]
            },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft, title: 'Account' },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft,
                title: 'Dropdown',
                dropdownItems: [
                    { title: 'Action' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    'separator',
                    { title: 'Separated link' },
                ]
            },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft, title: 'Log out' }
        ];
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidebar', { static: false }),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], { static: false }),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AdminLayoutComponent.prototype, "navbar", void 0);
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html")).default
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[data-background-color]"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth/auth-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, element) {
        this.router = router;
        this.element = element;
        this.mobile_menu_visible = 0;
        this.sidebarVisible = false;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    };
    AuthLayoutComponent.prototype.sidebarOpen = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        setTimeout(function () {
            $toggle.classList.add('toggled');
        }, 430);
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        if (body.querySelectorAll('.wrapper-full-page')) {
            document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
        }
        else if (body.classList.contains('off-canvas-sidebar')) {
            document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
        }
        setTimeout(function () {
            $layer.classList.add('visible');
        }, 100);
        $layer.onclick = function () {
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            this.sidebarVisible = false;
            $layer.classList.remove('visible');
            setTimeout(function () {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
        }.bind(this);
        body.classList.add('nav-open');
        this.mobile_menu_visible = 1;
        this.sidebarVisible = true;
    };
    ;
    AuthLayoutComponent.prototype.sidebarClose = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
        // $('html').removeClass('nav-open');
        body.classList.remove('nav-open');
        if ($layer) {
            $layer.remove();
        }
        setTimeout(function () {
            $toggle.classList.remove('toggled');
        }, 400);
        this.mobile_menu_visible = 0;
    };
    ;
    AuthLayoutComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/md/md-chart/md-chart.component.css":
/*!****************************************************!*\
  !*** ./src/app/md/md-chart/md-chart.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21kL21kLWNoYXJ0L21kLWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/md/md-chart/md-chart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/md/md-chart/md-chart.component.ts ***!
  \***************************************************/
/*! exports provided: ChartType, MdChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartType", function() { return ChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChartComponent", function() { return MdChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
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


var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType || (ChartType = {}));
var MdChartComponent = /** @class */ (function () {
    function MdChartComponent() {
    }
    MdChartComponent_1 = MdChartComponent;
    MdChartComponent.prototype.ngOnInit = function () {
        this.chartId = "md-chart-" + MdChartComponent_1.currentId++;
    };
    MdChartComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                new chartist__WEBPACK_IMPORTED_MODULE_1__["Pie"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                new chartist__WEBPACK_IMPORTED_MODULE_1__["Line"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                new chartist__WEBPACK_IMPORTED_MODULE_1__["Bar"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    var MdChartComponent_1;
    MdChartComponent.currentId = 1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "chartClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MdChartComponent.prototype, "chartType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "chartResponsive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerIconClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "legendItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MdChartComponent.prototype, "withHr", void 0);
    MdChartComponent = MdChartComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-md-chart',
            template: __importDefault(__webpack_require__(/*! raw-loader!./md-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/md/md-chart/md-chart.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./md-chart.component.css */ "./src/app/md/md-chart/md-chart.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MdChartComponent);
    return MdChartComponent;
}());



/***/ }),

/***/ "./src/app/md/md-table/md-table.component.ts":
/*!***************************************************!*\
  !*** ./src/app/md/md-table/md-table.component.ts ***!
  \***************************************************/
/*! exports provided: MdTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTableComponent", function() { return MdTableComponent; });
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

var MdTableComponent = /** @class */ (function () {
    function MdTableComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "cardClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MdTableComponent.prototype, "data", void 0);
    MdTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-md-table',
            template: __importDefault(__webpack_require__(/*! raw-loader!./md-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/md/md-table/md-table.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], MdTableComponent);
    return MdTableComponent;
}());



/***/ }),

/***/ "./src/app/md/md.module.ts":
/*!*********************************!*\
  !*** ./src/app/md/md.module.ts ***!
  \*********************************/
/*! exports provided: NavItemType, MdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemType", function() { return NavItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdModule", function() { return MdModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./md-table/md-table.component */ "./src/app/md/md-table/md-table.component.ts");
/* harmony import */ var _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./md-chart/md-chart.component */ "./src/app/md/md-chart/md-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var NavItemType;
(function (NavItemType) {
    NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
    NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
    NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType || (NavItemType = {}));
var MdModule = /** @class */ (function () {
    function MdModule() {
    }
    MdModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__["MdTableComponent"],
                _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__["MdChartComponent"]
            ],
            exports: [
                _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__["MdTableComponent"],
                _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__["MdChartComponent"]
            ]
        })
    ], MdModule);
    return MdModule;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9maXhlZHBsdWdpbi9maXhlZHBsdWdpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedpluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedpluginComponent", function() { return FixedpluginComponent; });
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

var md = {
    misc: {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    }
};
var FixedpluginComponent = /** @class */ (function () {
    function FixedpluginComponent() {
    }
    FixedpluginComponent.prototype.ngOnInit = function () {
        // fixed plugin
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        //
        var $full_page = $('.full-page');
        //
        var $sidebar_responsive = $('body > .navbar-collapse');
        var window_width = $(window).width();
        var fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();
        if (window_width > 767 && fixed_plugin_open === 'Dashboard') {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex: if we click on switch, stop propagation of the event,
            // so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($full_page.length !== 0) {
                $full_page.attr('filter-color', new_color);
            }
            if ($sidebar_responsive.length !== 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
            var new_image = $(this).find('img').attr('src');
            if ($sidebar_img_container.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0) {
                var new_image_full_page_1 = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image_full_page_1 + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($('.switch-sidebar-image input:checked').length === 0) {
                new_image = $('.fixed-plugin li.active .img-holder').find('img').attr('src');
                var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
            }
            if ($sidebar_responsive.length !== 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
        $('.switch-sidebar-image input').change(function () {
            var $full_page_background = $('.full-page-background');
            var $input = $(this);
            if ($input.is(':checked')) {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar_img_container.fadeIn('fast');
                    $sidebar.attr('data-image', '#');
                }
                if ($full_page_background.length !== 0) {
                    $full_page_background.fadeIn('fast');
                    $full_page.attr('data-image', '#');
                }
                var background_image = true;
            }
            else {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar.removeAttr('data-image');
                    $sidebar_img_container.fadeOut('fast');
                }
                if ($full_page_background.length !== 0) {
                    $full_page.removeAttr('data-image', '#');
                    $full_page_background.fadeOut('fast');
                }
                var background_image = false;
            }
        });
        $('.switch-sidebar-mini input').change(function () {
            var $body = $('body');
            var $input = $(this);
            if (md.misc.sidebar_mini_active === true) {
                $('body').removeClass('sidebar-mini');
                md.misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    $('.sidebar .collapse').css('height', 'auto');
                    md.misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    FixedpluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fixedplugin',
            template: __importDefault(__webpack_require__(/*! raw-loader!./fixedplugin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./fixedplugin.component.css */ "./src/app/shared/fixedplugin/fixedplugin.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FixedpluginComponent);
    return FixedpluginComponent;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedpluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedpluginModule", function() { return FixedpluginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixedplugin.component */ "./src/app/shared/fixedplugin/fixedplugin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var FixedpluginModule = /** @class */ (function () {
    function FixedpluginModule() {
    }
    FixedpluginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__["FixedpluginComponent"]],
            exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__["FixedpluginComponent"]]
        })
    ], FixedpluginModule);
    return FixedpluginModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.test = new Date();
    }
    FooterComponent.prototype.direccionar = function () {
        this.router.navigate(['/inicio']);
    };
    FooterComponent.prototype.direccionar1 = function () {
        this.router.navigate(['/inicio/conocenos']);
    };
    FooterComponent.prototype.direccionar2 = function () {
        this.router.navigate(['/inicio/contactanos/email']);
    };
    FooterComponent.prototype.direccionar3 = function () {
        this.router.navigate(['/inicio/ubicanos']);
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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




var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element, router) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.isCerradura = false;
    }
    NavbarComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');
                misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.hideSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('sidebar')[0];
        if (misc.hide_sidebar_active === true) {
            setTimeout(function () {
                body.classList.remove('hide-sidebar');
                misc.hide_sidebar_active = false;
            }, 300);
            setTimeout(function () {
                sidebar.classList.remove('animation');
            }, 600);
            sidebar.classList.add('animation');
        }
        else {
            setTimeout(function () {
                body.classList.add('hide-sidebar');
                // $('.sidebar').addClass('animation');
                misc.hide_sidebar_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isCerradura) {
            this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        }
        else {
            this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES2"].filter(function (listTitle) { return listTitle; });
        }
        var navbar = this.element.nativeElement;
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if (body.classList.contains('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    };
    NavbarComponent.prototype.onResize = function (event) {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        setTimeout(function () {
            $toggle.classList.add('toggled');
        }, 430);
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        if (body.querySelectorAll('.main-panel')) {
            document.getElementsByClassName('main-panel')[0].appendChild($layer);
        }
        else if (body.classList.contains('off-canvas-sidebar')) {
            document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
        }
        setTimeout(function () {
            $layer.classList.add('visible');
        }, 100);
        $layer.onclick = function () {
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            this.sidebarVisible = false;
            $layer.classList.remove('visible');
            setTimeout(function () {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
        }.bind(this);
        body.classList.add('nav-open');
        this.mobile_menu_visible = 1;
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
        // $('html').removeClass('nav-open');
        body.classList.remove('nav-open');
        if ($layer) {
            $layer.remove();
        }
        setTimeout(function () {
            $toggle.classList.remove('toggled');
        }, 400);
        this.mobile_menu_visible = 0;
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        if (titlee.includes('detalle')) {
            return 'Detalle';
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        return this.location.prepareExternalUrl(this.location.path());
    };
    NavbarComponent.prototype.facebook = function () {
        window.open("https://www.facebook.com/vittoriavenezuela/", "blank");
    };
    NavbarComponent.prototype.instagram = function () {
        window.open("https://www.instagram.com/vittoriavenezuela/?hl=es", "blank");
    };
    NavbarComponent.prototype.twitter = function () {
        window.open("https://twitter.com/vittoria_ven?lang=es", "blank");
    };
    NavbarComponent.prototype.whatsaap = function () {
        window.open("https://wa.me/584241654663?text=Estoy%20interesado%20en%20tus%20productos", "blank");
    };
    NavbarComponent.prototype.goToCerradura = function () {
        window.open("http://www.serraturevittoria.com/#/inicio", "blank");
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('app-navbar-cmp', { static: false }),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, ROUTES2, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES2", function() { return ROUTES2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
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



//Menu Items
var ROUTES = [{
        path: '/inicio',
        title: 'Inicio',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/inicio/conocenos',
        title: 'Quienes somos',
        type: 'link',
        icontype: 'face'
    }, {
        path: '/inicio/contactanos',
        title: 'Contactanos',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'forms',
        children: [
            { path: 'email', title: 'Correo', ab: 'email' },
            { path: '', title: '@vittoria_ven', ab: 'TW' },
            { path: '', title: '@vittoriavenezuela', ab: 'IG' },
            { path: '', title: '@vittoriavenezuela', ab: 'FB' },
            { path: '', title: '+58424-1654663', ab: 'WS' }
        ]
    }, {
        path: '/inicio/ubicanos',
        title: 'Ubicanos',
        type: 'link',
        icontype: 'place'
    }
];
var ROUTES2 = [{
        path: '/inicio',
        title: 'Inicio',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/inicio/conocenos',
        title: 'Quienes somos',
        type: 'link',
        icontype: 'face'
    }, {
        path: '/inicio/contactanos',
        title: 'Contactanos',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'forms',
        children: [
            { path: 'email', title: 'Correo', ab: 'email' },
            { path: '', title: '@vittoria_ven', ab: 'TW' },
            { path: '', title: '@vittoriavenezuela', ab: 'IG' },
            { path: '', title: '@vittoriavenezuela', ab: 'FB' },
            { path: '', title: '+58424-1654663', ab: 'WS' }
        ]
    }, {
        path: '/inicio/ubicanos',
        title: 'Ubicanos',
        type: 'link',
        icontype: 'place'
    }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
    }
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        this.url = false;
        if (this.url) {
            this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
            if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
                var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
                this.ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"](elemSidebar);
            }
        }
        else {
            this.menuItems = ROUTES2.filter(function (menuItem) { return menuItem; });
            if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
                var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
                this.ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"](elemSidebar);
            }
        }
    };
    SidebarComponent.prototype.updatePS = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            this.ps.update();
        }
    };
    SidebarComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    SidebarComponent.prototype.Prueba = function (ab) {
        switch (ab) {
            case "IG":
                window.open("https://www.instagram.com/vittoriavenezuela/?hl=es", "blank");
                break;
            case "TW":
                window.open("https://twitter.com/vittoria_ven?lang=es", "blank");
                break;
            case "FB":
                window.open("https://www.facebook.com/vittoriavenezuela/", "blank");
                break;
            case "WS":
                window.open("https://wa.me/584241654663?text=Estoy%20interesado%20en%20tus%20productos", "blank");
                break;
            default:
                break;
        }
    };
    SidebarComponent.prototype.goToCerradura = function () {
        window.open("http://www.serraturevittoria.com/#/inicio", "blank");
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

 =========================================================
 * Material Dashboard PRO Angular - v2.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-pro-angular2
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)

 * Coded by Creative Tim

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Backup\Desktop\GUIA_TEMPLATE\Griferias_Vittoria\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map