(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/IOY":
/*!****************************************************!*\
  !*** ./src/app/store/showcase/showcase.actions.ts ***!
  \****************************************************/
/*! exports provided: FETCH_NEWLY_ADDED, FETCH_NEWLY_ADDED_SUCCESS, FETCH_MOST_SELLING, FETCH_MOST_SELLING_SUCCESS, FETCH_INTERESTED, FETCH_INTERESTED_SUCCESS, EMPTY_INTERESTED, SHOWCASE_ERROR, FetchNewlyAdded, FetchNewlyAddedSuccess, FetchMostSelling, FetchMostSellingSuccess, FetchInterested, FetchInterestedSuccess, EmptyInterested, ShowcaseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEWLY_ADDED", function() { return FETCH_NEWLY_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEWLY_ADDED_SUCCESS", function() { return FETCH_NEWLY_ADDED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MOST_SELLING", function() { return FETCH_MOST_SELLING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MOST_SELLING_SUCCESS", function() { return FETCH_MOST_SELLING_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_INTERESTED", function() { return FETCH_INTERESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_INTERESTED_SUCCESS", function() { return FETCH_INTERESTED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_INTERESTED", function() { return EMPTY_INTERESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOWCASE_ERROR", function() { return SHOWCASE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchNewlyAdded", function() { return FetchNewlyAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchNewlyAddedSuccess", function() { return FetchNewlyAddedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchMostSelling", function() { return FetchMostSelling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchMostSellingSuccess", function() { return FetchMostSellingSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchInterested", function() { return FetchInterested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchInterestedSuccess", function() { return FetchInterestedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyInterested", function() { return EmptyInterested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseError", function() { return ShowcaseError; });
const FETCH_NEWLY_ADDED = 'FETCH_NEWLY_ADDED';
const FETCH_NEWLY_ADDED_SUCCESS = 'FETCH_NEWLY_ADDED_SUCCESS';
const FETCH_MOST_SELLING = 'FETCH_MOST_SELLING';
const FETCH_MOST_SELLING_SUCCESS = 'FETCH_MOST_SELLING_SUCCESS';
const FETCH_INTERESTED = 'FETCH_INTERESTED';
const FETCH_INTERESTED_SUCCESS = 'FETCH_INTERESTED_SUCCESS';
const EMPTY_INTERESTED = 'EMPTY_INTERESTED';
const SHOWCASE_ERROR = 'SHOWCASE_ERROR';
class FetchNewlyAdded {
    constructor() {
        this.type = FETCH_NEWLY_ADDED;
    }
}
class FetchNewlyAddedSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_NEWLY_ADDED_SUCCESS;
    }
}
class FetchMostSelling {
    constructor() {
        this.type = FETCH_MOST_SELLING;
    }
}
class FetchMostSellingSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_MOST_SELLING_SUCCESS;
    }
}
class FetchInterested {
    constructor() {
        this.type = FETCH_INTERESTED;
    }
}
class FetchInterestedSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_INTERESTED_SUCCESS;
    }
}
class EmptyInterested {
    constructor() {
        this.type = EMPTY_INTERESTED;
    }
}
class ShowcaseError {
    constructor(payload) {
        this.payload = payload;
        this.type = SHOWCASE_ERROR;
    }
}


/***/ }),

/***/ "/bwF":
/*!************************************************!*\
  !*** ./src/app/store/browse/browse.reducer.ts ***!
  \************************************************/
/*! exports provided: browseReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browseReducer", function() { return browseReducer; });
/* harmony import */ var _browse_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse.actions */ "S+L0");

const initialState = {
    products: [],
    productsCount: 0,
    colors: null,
    categories: [],
    canFetch: true,
    selectedPage: 0,
    selectedSort: 'any',
    selectedCategory: 'any',
    selectedColor: 'any',
    minPrice: '0',
    maxPrice: '0',
    errors: [],
    loading: false
};
function browseReducer(state = initialState, action) {
    switch (action.type) {
        case (_browse_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS_APPEND"]):
        case (_browse_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS"]):
            return Object.assign(Object.assign({}, state), { loading: true });
        case (_browse_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS_SUCCESS"]):
            return Object.assign(Object.assign({}, state), { selectedPage: action.payload.selectedPage, selectedSort: action.payload.selectedSort, selectedCategory: action.payload.selectedCategory, selectedColor: action.payload.selectedColor, minPrice: action.payload.minPrice, maxPrice: action.payload.maxPrice, products: action.payload.res, canFetch: action.payload.res.length !== 0, errors: [...state.errors.filter(error => error.errorEffect !== action.payload.effect)], loading: false });
        case (_browse_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS_APPEND_SUCCESS"]):
            return Object.assign(Object.assign({}, state), { selectedPage: action.payload.selectedPage, selectedSort: action.payload.selectedSort, selectedCategory: action.payload.selectedCategory, selectedColor: action.payload.selectedColor, minPrice: action.payload.minPrice, maxPrice: action.payload.maxPrice, products: [...state.products, ...action.payload.res], canFetch: action.payload.res.length !== 0, errors: [...state.errors.filter(error => error.errorEffect !== action.payload.effect)], loading: false });
        case (_browse_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS_COUNT_SUCCESS"]):
            return Object.assign(Object.assign({}, state), { productsCount: action.payload.res, errors: [...state.errors.filter(error => error.errorEffect !== action.payload.effect)] });
        case (_browse_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORY_SUCCESS"]):
            return Object.assign(Object.assign({}, state), { categories: action.payload.res, errors: [...state.errors.filter(error => error.errorEffect !== action.payload.effect)] });
        case (_browse_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_COLORS_SUCCESS"]):
            return Object.assign(Object.assign({}, state), { colors: action.payload.res, errors: [...state.errors.filter(error => error.errorEffect !== action.payload.effect)] });
        case (_browse_actions__WEBPACK_IMPORTED_MODULE_0__["BROWSE_ERROR"]):
            const errors = [...state.errors];
            const index = errors.findIndex(error => error.errorEffect === action.payload.errorEffect);
            if (index !== -1) {
                errors[index] = action.payload;
            }
            else {
                errors.push(action.payload);
            }
            return Object.assign(Object.assign({}, state), { loading: false, errors });
        default:
            return state;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\highcoder\Latif-app\client\src\main.ts */"zUnb");


/***/ }),

/***/ "1Mtq":
/*!****************************************************!*\
  !*** ./src/app/store/showcase/showcase.effects.ts ***!
  \****************************************************/
/*! exports provided: ShowcaseEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseEffects", function() { return ShowcaseEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _showcase_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showcase.actions */ "/IOY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/product.service */ "Gdn9");









class ShowcaseEffects {
    constructor(actions$, productService) {
        this.actions$ = actions$;
        this.productService = productService;
        this.fetchNewlyAdded = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_showcase_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_NEWLY_ADDED"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((action) => this.productService.getNewlyAdded()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => ({ type: _showcase_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_NEWLY_ADDED_SUCCESS"], payload: { res, effect: _showcase_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_NEWLY_ADDED"] } })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _showcase_actions__WEBPACK_IMPORTED_MODULE_3__["ShowcaseError"]({ error, errorEffect: _showcase_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_NEWLY_ADDED"] }))))));
        this.fetchMostSelling = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_showcase_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_MOST_SELLING"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((action) => this.productService.getMostSelling()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => ({ type: _showcase_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_MOST_SELLING_SUCCESS"], payload: { res, effect: _showcase_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_MOST_SELLING"] } })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _showcase_actions__WEBPACK_IMPORTED_MODULE_3__["ShowcaseError"]({ error, errorEffect: _showcase_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_MOST_SELLING"] }))))));
        this.fetchInterested = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_showcase_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_INTERESTED"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((action) => this.productService.getInterested()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => ({ type: _showcase_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_INTERESTED_SUCCESS"], payload: { res, effect: _showcase_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_INTERESTED"] } }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _showcase_actions__WEBPACK_IMPORTED_MODULE_3__["ShowcaseError"]({ error, errorEffect: _showcase_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_INTERESTED"] })))))));
    }
}
ShowcaseEffects.ɵfac = function ShowcaseEffects_Factory(t) { return new (t || ShowcaseEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"])); };
ShowcaseEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ShowcaseEffects, factory: ShowcaseEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ShowcaseEffects.prototype, "fetchNewlyAdded", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ShowcaseEffects.prototype, "fetchMostSelling", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ShowcaseEffects.prototype, "fetchInterested", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowcaseEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }]; }, { fetchNewlyAdded: [], fetchMostSelling: [], fetchInterested: [] }); })();


/***/ }),

/***/ "2Mpk":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/related/related.component.ts ***!
  \*************************************************************/
/*! exports provided: RelatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedComponent", function() { return RelatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "Gdn9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["relatedCards"];
function RelatedComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} }
function RelatedComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RelatedComponent_div_0_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.scrollLeft(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
function RelatedComponent_div_0_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "related-card-", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/detail/", r_r9.url, "/", r_r9.productVariants[0].id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", r_r9.productVariants[0].thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", r_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, r_r9.productVariants[0].color.hex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", r_r9.productVariants[0].price, " \u20AC");
} }
function RelatedComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RelatedComponent_div_0_div_6_div_2_Template, 12, 10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.relatedProducts);
} }
function RelatedComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RelatedComponent_div_0_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.scrollRight(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RelatedComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Related Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RelatedComponent_div_0_div_4_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RelatedComponent_div_0_div_5_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RelatedComponent_div_0_div_6_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RelatedComponent_div_0_div_7_Template, 1, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.innerLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.innerLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.innerLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.innerLoading);
} }
class RelatedComponent {
    constructor(route, productService) {
        this.route = route;
        this.productService = productService;
        this.fetchError = null;
        this.innerLoading = true;
    }
    ngOnInit() {
        this.paramSubscription = this.route.params.subscribe((params) => {
            this.innerLoading = true;
            this.productUrl = params.productUrl;
            this.productService.getRelatedProducts(this.productUrl)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
                this.fetchError = error;
                this.innerLoading = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }))
                .subscribe((data) => {
                this.relatedProducts = data;
                this.innerLoading = false;
            });
        });
    }
    ngOnDestroy() {
        if (this.paramSubscription) {
            this.paramSubscription.unsubscribe();
        }
    }
    scrollLeft() {
        this.relatedCards.nativeElement.scrollLeft -= 250;
    }
    scrollRight() {
        this.relatedCards.nativeElement.scrollLeft += 250;
    }
}
RelatedComponent.ɵfac = function RelatedComponent_Factory(t) { return new (t || RelatedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"])); };
RelatedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RelatedComponent, selectors: [["app-related"]], viewQuery: function RelatedComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.relatedCards = _t.first);
    } }, decls: 1, vars: 1, consts: [["class", "related", 4, "ngIf"], [1, "related"], [1, "col-md-12"], [1, "title"], ["class", "loader", 4, "ngIf"], ["class", "scroll-left", 3, "click", 4, "ngIf"], ["class", "related-cards", 4, "ngIf"], ["class", "scroll-right", 3, "click", 4, "ngIf"], [1, "loader"], [1, "scroll-left", 3, "click"], [1, "related-cards"], ["relatedCards", ""], ["class", "related-card col-lg-3 col-md-6 col-12", 3, "id", 4, "ngFor", "ngForOf"], [1, "related-card", "col-lg-3", "col-md-6", "col-12", 3, "id"], [3, "routerLink"], [3, "src", "alt"], [1, "product-name"], [1, "row"], [1, "col-md-6"], [1, "product-color", 3, "ngStyle"], [1, "scroll-right", 3, "click"]], template: function RelatedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RelatedComponent_div_0_Template, 8, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fetchError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], styles: [".related[_ngcontent-%COMP%] {\n  position: relative;\n  top: 250px;\n  min-height: 15vh;\n}\n.related[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  font-size: 18px;\n}\n.related[_ngcontent-%COMP%]   .related-cards[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  overflow: auto;\n  white-space: nowrap;\n  text-align: center;\n  padding: 10px;\n}\n.related[_ngcontent-%COMP%]   .related-cards[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 15px;\n}\n.related[_ngcontent-%COMP%]   .related-cards[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  margin: 0;\n  margin-top: 5px;\n}\n.related[_ngcontent-%COMP%]   .related-cards[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.related[_ngcontent-%COMP%]   .related-cards[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-bottom: 5px;\n}\n.related[_ngcontent-%COMP%]   .related-cards[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 12px;\n}\n.related[_ngcontent-%COMP%]   .related-cards[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  text-decoration: none;\n}\n.related[_ngcontent-%COMP%]   .related-cards[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n}\n.related[_ngcontent-%COMP%]   .related-cards[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   .product-color[_ngcontent-%COMP%] {\n  position: relative;\n  top: 5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.related[_ngcontent-%COMP%]   .related-cards[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #292c2f;\n}\n.related[_ngcontent-%COMP%]   .related-cards[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]:hover {\n  border-radius: 10px;\n  box-shadow: 0px 3px 5px 6px rgba(57, 41, 41, 0.1);\n}\n.related[_ngcontent-%COMP%]   .scroll-left[_ngcontent-%COMP%] {\n  background-image: url('left.svg');\n  cursor: pointer;\n  z-index: 9999;\n  position: absolute;\n  top: 40%;\n  display: inline-block;\n  width: 70px;\n  height: 70px;\n  font-size: 34px;\n}\n.related[_ngcontent-%COMP%]   .scroll-right[_ngcontent-%COMP%] {\n  background-image: url('right.svg');\n  cursor: pointer;\n  z-index: 9999;\n  position: absolute;\n  top: 40%;\n  right: 0;\n  display: inline-block;\n  width: 70px;\n  height: 70px;\n  font-size: 34px;\n}\n.related[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcmVsYXRlZC9yZWxhdGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQUk7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUFFTjtBQURNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUdSO0FBRlE7RUFDRSxpQkFBQTtBQUlWO0FBRE07RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFHUjtBQURNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBR1I7QUFETTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUdSO0FBRE07RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUdSO0FBRE07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBR1I7QUFETTtFQUNFLGNBQUE7QUFHUjtBQUNJO0VBQ0UsbUJBQUE7RUFHQSxpREFBQTtBQUNOO0FBR0U7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFESjtBQUlFO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUZKO0FBS0U7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlsL3JlbGF0ZWQvcmVsYXRlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWxhdGVkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyNTBweDtcclxuICBtaW4taGVpZ2h0OiAxNXZoO1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5yZWxhdGVkLWNhcmRzIHtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC5yZWxhdGVkLWNhcmQge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIC5yb3cge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGhyIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzE3YTJiODtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgfVxyXG4gICAgICAucHJvZHVjdC1jb2xvciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgY29sb3I6ICMyOTJjMmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmVsYXRlZC1jYXJkOmhvdmVyIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDVweCA2cHggcmdiYSg1NywgNDEsIDQxLCAwLjEpO1xyXG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDZweCByZ2JhKDU3LCA0MSwgNDEsIDAuMSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IDZweCByZ2JhKDU3LCA0MSwgNDEsIDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2Nyb2xsLWxlZnQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xlZnQuc3ZnXCIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgfVxyXG5cclxuICAuc2Nyb2xsLXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9yaWdodC5zdmdcIik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-related',
                templateUrl: './related.component.html',
                styleUrls: ['./related.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }]; }, { relatedCards: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['relatedCards']
        }] }); })();


/***/ }),

/***/ "5Fl7":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/auth/auth.actions */ "C9XJ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








function SigninComponent_div_11_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bad Credentials");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_div_11_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "401 Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_div_11_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Internal server error! Please contact our support team. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SigninComponent_div_11_div_1_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SigninComponent_div_11_div_1_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SigninComponent_div_11_div_1_div_3_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r4.error.status === 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r4.error.status === 401);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r4.error.status === 500 || e_r4.error.status === 0);
} }
function SigninComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SigninComponent_div_11_div_1_Template, 4, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r4.errorEffect == "SIGN_IN");
} }
function SigninComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 26);
} }
function SigninComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_span_27_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_span_27_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum password length is 6!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SigninComponent_span_27_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SigninComponent_span_27_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.signInForm.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.signInForm.get("password").errors.minlength);
} }
class SigninComponent {
    constructor(store) {
        this.store = store;
        this.emailPattern = '^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$';
    }
    ngOnInit() {
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(52)]),
        });
        this.authState = this.store.select('auth');
    }
    onSubmitted() {
        this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["SignIn"]({
            email: this.signInForm.value.email,
            password: this.signInForm.value.password
        }));
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 45, vars: 14, consts: [[1, "signin", "container"], [1, "title", "row"], [1, "col-md-4"], ["src", "../../../assets/key.png", "alt", "login key"], [1, "col-md-8"], [1, "row"], [1, "col-md-6"], [4, "ngFor", "ngForOf"], [1, "form", "row"], [1, "col-md-12"], ["class", "loader", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "text", "id", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "maxlength"], ["class", "alert-danger", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "formControlName", "password", 1, "form-control", 3, "maxlength"], [4, "ngIf"], [1, "forgot", "row"], ["routerLink", "/forgot-password"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"], [1, "signup", "row"], ["routerLink", "/signup"], ["class", "alert-warning", 4, "ngIf"], [1, "alert-warning"], [1, "loader"], [1, "alert-danger"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome back to Keyist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SigninComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SigninComponent_div_15_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_17_listener() { return ctx.onSubmitted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SigninComponent_span_22_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "PASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SigninComponent_span_27_Template, 3, 2, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sign up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, ctx.authState).errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, ctx.authState).loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxlength", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signInForm.get("email").invalid && ctx.signInForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxlength", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signInForm.get("password").invalid && ctx.signInForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signInForm.invalid || ctx.signInForm.pending || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 12, ctx.authState).loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".signin[_ngcontent-%COMP%] {\n  position: relative;\n  top: 30px;\n  margin: auto;\n  width: 25%;\n  min-height: 70vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.signin[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n  position: relative;\n  left: -15%;\n}\n.signin[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.signin[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n}\n.signin[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: black;\n  margin: 0;\n}\n.signin[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  white-space: nowrap;\n}\n.signin[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  top: 20%;\n}\n.signin[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: gray;\n  font-weight: bold;\n}\n.signin[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .signin[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.signin[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.signin[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.signin[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: gray;\n  text-align: end;\n}\n.signin[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration: underline gray;\n          text-decoration: underline gray;\n}\n.signin[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n}\n.signin[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.signin[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: gray;\n}\n.signin[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #17a2b8;\n  text-decoration: none;\n}\n@media only screen and (max-width: 767px) {\n  .signin[_ngcontent-%COMP%] {\n    position: relative;\n    top: 100px;\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 1440px) and (min-width: 768px) {\n  .signin[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDTjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDTjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDTjtBQUNJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBQ047QUFJSTtFQUNFLFFBQUE7QUFGTjtBQUlJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUZOO0FBS0k7O0VBRUUsbUJBQUE7QUFITjtBQU1JO0VBQ0UsV0FBQTtBQUpOO0FBUU07RUFDRSxxQkFBQTtBQU5SO0FBT1E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFMVjtBQVNNO0VBQ0UsdUNBQUE7VUFBQSwrQkFBQTtBQVBSO0FBV0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBVE47QUFVTTtFQUNFLHFCQUFBO0FBUlI7QUFTUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBUFY7QUFRVTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFOWjtBQWNBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VBWEY7QUFDRjtBQWNBO0VBQ0U7SUFDRSxVQUFBO0VBWkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduaW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDMwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgbWluLWhlaWdodDogNzB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTE1JTtcclxuXHJcbiAgICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogIzE3YTJiODtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtIHtcclxuICAgIC5sb2FkZXIge1xyXG4gICAgICB0b3A6IDIwJTtcclxuICAgIH1cclxuICAgIGxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQsXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3Jnb3Qge1xyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGdyYXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2lnbnVwIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTdhMmI4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnNpZ25pbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNpZ25pbiB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin',
                templateUrl: './signin.component.html',
                styleUrls: ['./signin.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "6hUG":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function() { return ProductDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail.component */ "vR3N");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_detail_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-detail.routes */ "yPKY");
/* harmony import */ var _related_related_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./related/related.component */ "2Mpk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");










class ProductDetailModule {
}
ProductDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductDetailModule });
ProductDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductDetailModule_Factory(t) { return new (t || ProductDetailModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_product_detail_routes__WEBPACK_IMPORTED_MODULE_4__["ProductDetailRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductDetailModule, { declarations: [_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"], _related_related_component__WEBPACK_IMPORTED_MODULE_5__["RelatedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_product_detail_routes__WEBPACK_IMPORTED_MODULE_4__["ProductDetailRoutes"]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
                ],
                declarations: [_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"], _related_related_component__WEBPACK_IMPORTED_MODULE_5__["RelatedComponent"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "7coM":
/*!**********************************************!*\
  !*** ./src/app/store/order/order.reducer.ts ***!
  \**********************************************/
/*! exports provided: orderReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderReducer", function() { return orderReducer; });
/* harmony import */ var _order_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.actions */ "mq5w");

const initialState = {
    personal: null,
    shipping: null,
    payment: null,
    checkoutStep: 0,
    isCheckoutActive: false,
    errors: []
};
function orderReducer(state = initialState, action) {
    switch (action.type) {
        case (_order_actions__WEBPACK_IMPORTED_MODULE_0__["POST_PERSONAL"]):
            return Object.assign(Object.assign({}, state), { personal: action.payload, errors: [] });
        case (_order_actions__WEBPACK_IMPORTED_MODULE_0__["POST_SHIPPING"]):
            return Object.assign(Object.assign({}, state), { shipping: action.payload, errors: [] });
        case (_order_actions__WEBPACK_IMPORTED_MODULE_0__["POST_PAYMENT"]):
            return Object.assign(Object.assign({}, state), { payment: action.payload, errors: [] });
        case (_order_actions__WEBPACK_IMPORTED_MODULE_0__["SET_CHECKOUT_STEP"]):
            return Object.assign(Object.assign({}, state), { checkoutStep: action.payload });
        case (_order_actions__WEBPACK_IMPORTED_MODULE_0__["IS_CHECKOUT_ACTIVE"]):
            if (action.payload) {
                return Object.assign(Object.assign({}, initialState), { isCheckoutActive: action.payload });
            }
            return Object.assign(Object.assign({}, initialState), { isCheckoutActive: false });
        case (_order_actions__WEBPACK_IMPORTED_MODULE_0__["ORDER_ERROR"]):
            const errors = [...state.errors];
            const index = errors.findIndex(error => error.errorEffect === action.payload.errorEffect);
            if (index !== -1) {
                errors[index] = action.payload;
            }
            else {
                errors.push(action.payload);
            }
            return Object.assign(Object.assign({}, state), { loading: false, errors });
        case (_order_actions__WEBPACK_IMPORTED_MODULE_0__["EMPTY_ORDER"]):
            return Object.assign(Object.assign({}, initialState), { isCheckoutActive: state.isCheckoutActive });
        default:
            return state;
    }
}


/***/ }),

/***/ "7fMG":
/*!*************************************************************!*\
  !*** ./src/app/home/image-slider/image-slider.component.ts ***!
  \*************************************************************/
/*! exports provided: ImageSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSliderComponent", function() { return ImageSliderComponent; });
/* harmony import */ var _config_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../config/local */ "fxxc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ImageSliderComponent_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", c_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", c_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r2.text);
} }
function ImageSliderComponent_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ImageSliderComponent_ngb_carousel_1_1_ng_template_0_Template, 6, 4, "ng-template", 3);
} }
function ImageSliderComponent_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImageSliderComponent_ngb_carousel_1_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.carausel);
} }
class ImageSliderComponent {
    constructor(config) {
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = false;
    }
    ngOnInit() {
        this.carausel = _config_local__WEBPACK_IMPORTED_MODULE_0__["config"].carausel;
    }
}
ImageSliderComponent.ɵfac = function ImageSliderComponent_Factory(t) { return new (t || ImageSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"])); };
ImageSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImageSliderComponent, selectors: [["app-image-slider"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]])], decls: 2, vars: 1, consts: [[1, "carausel"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "src", "alt"], [1, "carousel-caption"]], template: function ImageSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImageSliderComponent_ngb_carousel_1_Template, 2, 1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carausel && ctx.carausel.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]], styles: [".carausel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 85vh;\n}\n.carausel[_ngcontent-%COMP%]   ngb-carousel[_ngcontent-%COMP%] {\n  outline: none;\n}\n@media only screen and (max-width: 767px) {\n  .carausel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 450px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9pbWFnZS1zbGlkZXIvaW1hZ2Utc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBSUU7RUFDRTtJQUNFLGFBQUE7RUFGSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9pbWFnZS1zbGlkZXIvaW1hZ2Utc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmF1c2VsIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgfVxyXG5cclxuICBuZ2ItY2Fyb3VzZWwge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-image-slider',
                templateUrl: './image-slider.component.html',
                styleUrls: ['./image-slider.component.scss'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]]
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-slider/image-slider.component */ "7fMG");
/* harmony import */ var _newly_added_newly_added_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newly-added/newly-added.component */ "UJwj");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner/banner.component */ "fEaK");
/* harmony import */ var _most_selling_most_selling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./most-selling/most-selling.component */ "WjNg");






class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[1, "home"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-newly-added");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-most-selling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_1__["ImageSliderComponent"], _newly_added_newly_added_component__WEBPACK_IMPORTED_MODULE_2__["NewlyAddedComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], _most_selling_most_selling_component__WEBPACK_IMPORTED_MODULE_4__["MostSellingComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Au18":
/*!*********************************************************************************!*\
  !*** ./src/app/verification/email-verification/email-verification.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EmailVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationComponent", function() { return EmailVerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/auth/auth.actions */ "C9XJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function EmailVerificationComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "login.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmailVerificationComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your account is successfully verified. Start shopping now!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailVerificationComponent_div_4_div_4_Template, 4, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Homepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggedIn);
} }
function EmailVerificationComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sending request...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmailVerificationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cannot activate at the moment. Please contact our support team.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EmailVerificationComponent {
    constructor(route, accountService, store) {
        this.route = route;
        this.accountService = accountService;
        this.store = store;
        this.isVerified = null;
        this.isError = null;
        this.isLoggedIn = null;
    }
    ngOnInit() {
        const verificationToken = this.route.snapshot.queryParams.token;
        this.accountService.verifyEmail(verificationToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            this.isVerified = false;
            this.isError = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        })).subscribe((data) => {
            this.isVerified = true;
            this.store.select('auth').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(data => {
                if (data.authenticated) {
                    this.isLoggedIn = true;
                    this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["FetchVerificationStatus"]());
                }
                else {
                    this.isLoggedIn = false;
                }
            });
        });
    }
}
EmailVerificationComponent.ɵfac = function EmailVerificationComponent_Factory(t) { return new (t || EmailVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
EmailVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailVerificationComponent, selectors: [["app-email-verification"]], decls: 7, vars: 6, consts: [[1, "email-verification", "container"], [1, "row"], [1, "col-md-12", "col-12", "text-center"], ["class", "row", 4, "ngIf"], [1, "col-md-12", "col-12"], [4, "ngIf"], ["routerLink", "/", 1, "btn", "home"], ["routerLink", "/account/browse", 1, "btn", "products"], ["routerLink", "/login"]], template: function EmailVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailVerificationComponent_div_4_Template, 9, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailVerificationComponent_div_5_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailVerificationComponent_div_6_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa ", ctx.isError ? "fa-exclamation-triangle" : "fa-check", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVerified && !ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isVerified && !ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".email-verification[_ngcontent-%COMP%] {\n  position: relative;\n  top: 250px;\n  min-height: 50vh;\n}\n.email-verification[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10em;\n}\n.email-verification[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n}\n.email-verification[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%], .email-verification[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  width: 50%;\n}\n.email-verification[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  background-color: #17a2b8;\n  color: white;\n  border-radius: 10px;\n}\n.email-verification[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background-color: white;\n  color: #17a2b8;\n  border: 1px solid #17a2b8;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9uL2VtYWlsLXZlcmlmaWNhdGlvbi9lbWFpbC12ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0FBRUo7QUFBRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFFOztFQUVFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUVKO0FBQUU7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZpY2F0aW9uL2VtYWlsLXZlcmlmaWNhdGlvbi9lbWFpbC12ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1haWwtdmVyaWZpY2F0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyNTBweDtcclxuICBtaW4taGVpZ2h0OiA1MHZoO1xyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMGVtO1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5ob21lLFxyXG4gIC5wcm9kdWN0cyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5ob21lIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgLnByb2R1Y3RzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMTdhMmI4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE3YTJiODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailVerificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email-verification',
                templateUrl: './email-verification.component.html',
                styleUrls: ['./email-verification.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C9XJ":
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.actions.ts ***!
  \********************************************/
/*! exports provided: SIGN_UP, SIGN_UP_SUCCESS, SIGN_IN, SIGN_IN_SUCCESS, SIGN_OUT, SIGN_OUT_SUCCESS, CHECK_IF_LOGGED_IN, FETCH_VERIFICATION_STATUS, FETCH_VERIFICATION_STATUS_SUCCESS, AUTH_ERROR, SignUp, SignUpSuccess, SignIn, SignInSuccess, SignOut, SignOutSuccess, CheckIfLoggedIn, AuthError, FetchVerificationStatus, FetchVerificationStatusSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP", function() { return SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN", function() { return SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_SUCCESS", function() { return SIGN_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT", function() { return SIGN_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_SUCCESS", function() { return SIGN_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_IF_LOGGED_IN", function() { return CHECK_IF_LOGGED_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VERIFICATION_STATUS", function() { return FETCH_VERIFICATION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VERIFICATION_STATUS_SUCCESS", function() { return FETCH_VERIFICATION_STATUS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpSuccess", function() { return SignUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return SignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInSuccess", function() { return SignInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOut", function() { return SignOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOutSuccess", function() { return SignOutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckIfLoggedIn", function() { return CheckIfLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthError", function() { return AuthError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchVerificationStatus", function() { return FetchVerificationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchVerificationStatusSuccess", function() { return FetchVerificationStatusSuccess; });
const SIGN_UP = 'SIGN_UP';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_IN = 'SIGN_IN';
const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
const SIGN_OUT = 'SIGN_OUT';
const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
const CHECK_IF_LOGGED_IN = 'CHECK_IF_LOGGED_IN';
const FETCH_VERIFICATION_STATUS = 'FETCH_VERIFICATION_STATUS';
const FETCH_VERIFICATION_STATUS_SUCCESS = 'FETCH_VERIFICATION_STATUS_SUCCESS';
const AUTH_ERROR = 'AUTH_ERROR';
class SignUp {
    constructor(payload) {
        this.payload = payload;
        this.type = SIGN_UP;
    }
}
class SignUpSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = SIGN_UP_SUCCESS;
    }
}
class SignIn {
    constructor(payload) {
        this.payload = payload;
        this.type = SIGN_IN;
    }
}
class SignInSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = SIGN_IN_SUCCESS;
    }
}
class SignOut {
    constructor() {
        this.type = SIGN_OUT;
    }
}
class SignOutSuccess {
    constructor() {
        this.type = SIGN_OUT_SUCCESS;
    }
}
class CheckIfLoggedIn {
    constructor() {
        this.type = CHECK_IF_LOGGED_IN;
    }
}
class AuthError {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTH_ERROR;
    }
}
class FetchVerificationStatus {
    constructor() {
        this.type = FETCH_VERIFICATION_STATUS;
    }
}
class FetchVerificationStatusSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_VERIFICATION_STATUS_SUCCESS;
    }
}


/***/ }),

/***/ "CrSf":
/*!****************************************************!*\
  !*** ./src/app/store/showcase/showcase.reducer.ts ***!
  \****************************************************/
/*! exports provided: showcaseReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showcaseReducer", function() { return showcaseReducer; });
/* harmony import */ var _showcase_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showcase.actions */ "/IOY");

const initialState = {
    newlyAdded: [],
    mostSelling: [],
    interested: [],
    errors: [],
    loading: []
};
function showcaseReducer(state = initialState, action) {
    switch (action.type) {
        case (_showcase_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_NEWLY_ADDED"]):
            const newlyAddedLoad = [...state.loading];
            newlyAddedLoad.push(_showcase_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_NEWLY_ADDED"]);
            return Object.assign(Object.assign({}, state), { loading: newlyAddedLoad });
        case (_showcase_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_MOST_SELLING"]):
            const mostSellingLoad = [...state.loading];
            mostSellingLoad.push(_showcase_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_MOST_SELLING"]);
            return Object.assign(Object.assign({}, state), { loading: mostSellingLoad });
        case (_showcase_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_INTERESTED"]):
            const interestedLoad = [...state.loading];
            interestedLoad.push(_showcase_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_INTERESTED"]);
            return Object.assign(Object.assign({}, state), { loading: interestedLoad });
        case (_showcase_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_NEWLY_ADDED_SUCCESS"]):
            return Object.assign(Object.assign({}, state), { newlyAdded: action.payload.res, errors: [...state.errors.filter(error => error.errorEffect !== action.payload.effect)], loading: [...state.loading.filter(loaded => loaded !== action.payload.effect)] });
        case (_showcase_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_MOST_SELLING_SUCCESS"]):
            return Object.assign(Object.assign({}, state), { mostSelling: action.payload.res, errors: [...state.errors.filter(error => error.errorEffect !== action.payload.effect)], loading: [...state.loading.filter(loaded => loaded !== action.payload.effect)] });
        case (_showcase_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_INTERESTED_SUCCESS"]):
            return Object.assign(Object.assign({}, state), { interested: action.payload.res, errors: [...state.errors.filter(error => error.errorEffect !== action.payload.effect)], loading: [...state.loading.filter(loaded => loaded !== action.payload.effect)] });
        case (_showcase_actions__WEBPACK_IMPORTED_MODULE_0__["SHOWCASE_ERROR"]):
            const errors = [...state.errors];
            const index = errors.findIndex(error => error.errorEffect === action.payload.errorEffect);
            if (index !== -1) {
                errors[index] = action.payload;
            }
            else {
                errors.push(action.payload);
            }
            return Object.assign(Object.assign({}, state), { loading: [...state.loading.filter(loaded => loaded !== action.payload.errorEffect)], errors });
        case (_showcase_actions__WEBPACK_IMPORTED_MODULE_0__["EMPTY_INTERESTED"]):
            return Object.assign(Object.assign({}, state), { interested: [] });
        default:
            return state;
    }
}


/***/ }),

/***/ "FR+V":
/*!***************************************!*\
  !*** ./src/app/store/app.reducers.ts ***!
  \***************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _store_cart_cart_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/cart/cart.reducer */ "cJXK");
/* harmony import */ var _store_order_order_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/order/order.reducer */ "7coM");
/* harmony import */ var _store_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/auth/auth.reducer */ "pja6");
/* harmony import */ var _store_showcase_showcase_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/showcase/showcase.reducer */ "CrSf");
/* harmony import */ var _store_browse_browse_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/browse/browse.reducer */ "/bwF");





const reducers = {
    cart: _store_cart_cart_reducer__WEBPACK_IMPORTED_MODULE_0__["cartReducer"],
    order: _store_order_order_reducer__WEBPACK_IMPORTED_MODULE_1__["orderReducer"],
    auth: _store_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["authReducer"],
    showcase: _store_showcase_showcase_reducer__WEBPACK_IMPORTED_MODULE_3__["showcaseReducer"],
    browse: _store_browse_browse_reducer__WEBPACK_IMPORTED_MODULE_4__["browseReducer"]
};


/***/ }),

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/local */ "fxxc");





class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.publicUrl = `${_config_local__WEBPACK_IMPORTED_MODULE_2__["config"].apiUrl}/api/public/product`;
        this.categoryUrl = `${_config_local__WEBPACK_IMPORTED_MODULE_2__["config"].apiUrl}/api/public/category`;
        this.colorUrl = `${_config_local__WEBPACK_IMPORTED_MODULE_2__["config"].apiUrl}/api/public/colors`;
        this.browsePageSize = 20;
        this.searchPageSize = 10;
    }
    getProducts(page, sort, category, color, minPrice, maxPrice) {
        if (page === undefined && page === null && page < 0) {
            return;
        }
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.set('page', page.toString());
        params = params.set('size', this.browsePageSize.toString());
        if (sort !== undefined && sort !== null && sort !== 'any') {
            params = params.set('sort', sort);
        }
        if (category && category !== 'any') {
            params = params.set('category', category);
        }
        if (color && color !== 'any') {
            params = params.set('color', color);
        }
        if (minPrice && minPrice !== '0') {
            params = params.set('minPrice', minPrice);
        }
        if (maxPrice && maxPrice !== '0') {
            params = params.set('maxPrice', maxPrice);
        }
        return this.httpClient.get(this.publicUrl, {
            params
        });
    }
    getProductsCount(category, color, minPrice, maxPrice) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (category && category !== 'any') {
            params = params.set('category', category);
        }
        if (color && color !== 'any') {
            params = params.set('color', color);
        }
        if (minPrice && minPrice !== '0') {
            params = params.set('minPrice', minPrice);
        }
        if (maxPrice && maxPrice !== '0') {
            params = params.set('maxPrice', maxPrice);
        }
        return this.httpClient.get(`${this.publicUrl}/count`, {
            params
        });
    }
    getFullProduct(productUrl) {
        return this.httpClient.get(`${this.publicUrl}/${productUrl}`);
    }
    getRelatedProducts(productUrl) {
        return this.httpClient.get(`${this.publicUrl}/related/${productUrl}`);
    }
    getNewlyAdded() {
        return this.httpClient.get(this.publicUrl + '/recent');
    }
    getMostSelling() {
        return this.httpClient.get(this.publicUrl + '/mostselling');
    }
    getInterested() {
        return this.httpClient.get(this.publicUrl + '/interested');
    }
    searchProduct(page, keyword) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('page', page.toString());
        params = params.append('keyword', keyword);
        params = params.set('size', this.searchPageSize.toString());
        return this.httpClient.get(this.publicUrl + '/search', {
            params
        });
    }
    getCategory() {
        return this.httpClient.get(this.categoryUrl);
    }
    getColors() {
        return this.httpClient.get(this.colorUrl);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "H6Li":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
                ],
                declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
                exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "J8Cg":
/*!*************************************!*\
  !*** ./src/app/home/home.routes.ts ***!
  \*************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "9vUh");

const HomeRoutes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], pathMatch: 'full' }
];


/***/ }),

/***/ "Kw+X":
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.module.ts ***!
  \*****************************************************/
/*! exports provided: VerificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationModule", function() { return VerificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _verification_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verification.routes */ "Zbnx");
/* harmony import */ var _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-verification/email-verification.component */ "Au18");
/* harmony import */ var _password_forgot_verification_password_forgot_verification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-forgot-verification/password-forgot-verification.component */ "xYIu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class VerificationModule {
}
VerificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VerificationModule });
VerificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VerificationModule_Factory(t) { return new (t || VerificationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_verification_routes__WEBPACK_IMPORTED_MODULE_3__["VerificationRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VerificationModule, { declarations: [_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_4__["EmailVerificationComponent"], _password_forgot_verification_password_forgot_verification_component__WEBPACK_IMPORTED_MODULE_5__["PasswordForgotVerificationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_verification_routes__WEBPACK_IMPORTED_MODULE_3__["VerificationRoutes"]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                ],
                declarations: [_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_4__["EmailVerificationComponent"], _password_forgot_verification_password_forgot_verification_component__WEBPACK_IMPORTED_MODULE_5__["PasswordForgotVerificationComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthGuardService {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    canActivate(route, state) {
        return this.store.select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((authState) => {
            if (!authState.authenticated) {
                this.router.navigate(['/login']);
            }
            return authState.authenticated;
        }));
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "NBep":
/*!*****************************************!*\
  !*** ./src/app/browse/browse.module.ts ***!
  \*****************************************/
/*! exports provided: BrowseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseModule", function() { return BrowseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browse.component */ "Sika");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _browse_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browse.routes */ "kWa9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class BrowseModule {
}
BrowseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BrowseModule });
BrowseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BrowseModule_Factory(t) { return new (t || BrowseModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_browse_routes__WEBPACK_IMPORTED_MODULE_4__["BrowseRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BrowseModule, { declarations: [_browse_component__WEBPACK_IMPORTED_MODULE_2__["BrowseComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_browse_routes__WEBPACK_IMPORTED_MODULE_4__["BrowseRoutes"])
                ],
                declarations: [_browse_component__WEBPACK_IMPORTED_MODULE_2__["BrowseComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "NEkq":
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ForgotPasswordComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
} }
function ForgotPasswordComponent_div_6_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ForgotPasswordComponent_div_6_Template_form_submit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onForgotPasswordFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ForgotPasswordComponent_div_6_span_6_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.forgotPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxlength", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.forgotPasswordForm.get("email").invalid && ctx_r1.forgotPasswordForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.forgotPasswordForm.invalid || ctx_r1.forgotPasswordForm.pending);
} }
class ForgotPasswordComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.emailPattern = '^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$';
        this.innerLoading = false;
    }
    ngOnInit() {
        this.forgotPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)])
        });
    }
    onForgotPasswordFormSubmit() {
        this.innerLoading = true;
        this.accountService.forgotPasswordRequest(this.forgotPasswordForm.value.email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            this.innerLoading = false;
            alert('An error occurred. Please try again.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }))
            .subscribe(res => {
            this.innerLoading = false;
            this.forgotPasswordForm.reset();
            alert('Success! A verification link has been sent if an account exists with this email.');
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 7, vars: 2, consts: [[1, "forgot-password", "container"], [1, "row", "title"], ["class", "loader", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "loader"], [1, "row"], [1, "col-md-6"], [3, "formGroup", "submit"], [1, "form-group"], ["for", "email"], ["type", "text", "id", "email", "name", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", 3, "maxlength"], ["class", "alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"], [1, "alert-danger"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please enter your email associated with your account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ForgotPasswordComponent_div_5_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ForgotPasswordComponent_div_6_Template, 9, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.innerLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.innerLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: [".forgot-password[_ngcontent-%COMP%] {\n  position: relative;\n  top: 150px;\n  min-height: 50vh;\n}\n.forgot-password[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: bold;\n  color: gray;\n  font-size: 14px;\n}\n.forgot-password[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSjtBQUVFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jnb3QtcGFzc3dvcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDE1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-password',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.scss']
            }]
    }], function () { return [{ type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "PpLr":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "fp1T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                declarations: [
                    _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
                ],
                exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "RUEf":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _g_page_not_found_g_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./g-page-not-found/g-page-not-found.component */ "etpQ");

const AppRoutes = [
    { path: 'not-found', component: _g_page_not_found_g_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["GPageNotFoundComponent"], data: { message: 'Page not found!' } },
    { path: 'account', loadChildren: './account/account.module#AccountModule' },
    { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
    { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
    { path: 'faq', loadChildren: './faq/faq.module#FaqModule' },
    { path: '**', redirectTo: '/not-found' }
];


/***/ }),

/***/ "RmqX":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ "tq2C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.routes */ "qGZU");







class SearchModule {
}
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_search_routes__WEBPACK_IMPORTED_MODULE_4__["SearchRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_search_routes__WEBPACK_IMPORTED_MODULE_4__["SearchRoutes"])
                ],
                declarations: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "S+L0":
/*!************************************************!*\
  !*** ./src/app/store/browse/browse.actions.ts ***!
  \************************************************/
/*! exports provided: FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_APPEND, FETCH_PRODUCTS_APPEND_SUCCESS, FETCH_PRODUCTS_COUNT, FETCH_PRODUCTS_COUNT_SUCCESS, FETCH_CATEGORY, FETCH_CATEGORY_SUCCESS, FETCH_COLORS, FETCH_COLORS_SUCCESS, BROWSE_ERROR, FetchProducts, FetchProductsSuccess, FetchProductsAppend, FetchProductAppendSuccess, FetchProductsCount, FetchProductsCountSuccess, FetchCategory, FetchCategorySuccess, FetchColors, FetchColorsSuccess, BrowseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS", function() { return FETCH_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_SUCCESS", function() { return FETCH_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_APPEND", function() { return FETCH_PRODUCTS_APPEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_APPEND_SUCCESS", function() { return FETCH_PRODUCTS_APPEND_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_COUNT", function() { return FETCH_PRODUCTS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_COUNT_SUCCESS", function() { return FETCH_PRODUCTS_COUNT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORY", function() { return FETCH_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORY_SUCCESS", function() { return FETCH_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COLORS", function() { return FETCH_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COLORS_SUCCESS", function() { return FETCH_COLORS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSE_ERROR", function() { return BROWSE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchProducts", function() { return FetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchProductsSuccess", function() { return FetchProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchProductsAppend", function() { return FetchProductsAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchProductAppendSuccess", function() { return FetchProductAppendSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchProductsCount", function() { return FetchProductsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchProductsCountSuccess", function() { return FetchProductsCountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchCategory", function() { return FetchCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchCategorySuccess", function() { return FetchCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchColors", function() { return FetchColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchColorsSuccess", function() { return FetchColorsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseError", function() { return BrowseError; });
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_APPEND = 'FETCH_PRODUCTS_APPEND';
const FETCH_PRODUCTS_APPEND_SUCCESS = 'FETCH_PRODUCTS_APPEND_SUCCESS';
const FETCH_PRODUCTS_COUNT = 'FETCH_PRODUCTS_COUNT';
const FETCH_PRODUCTS_COUNT_SUCCESS = 'FETCH_PRODUCTS_COUNT_SUCCESS';
const FETCH_CATEGORY = 'FETCH_CATEGORY';
const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
const FETCH_COLORS = 'FETCH_COLORS';
const FETCH_COLORS_SUCCESS = 'FETCH_COLORS_SUCCESS';
const BROWSE_ERROR = 'BROWSE_ERROR';
class FetchProducts {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_PRODUCTS;
    }
}
class FetchProductsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_PRODUCTS_SUCCESS;
    }
}
class FetchProductsAppend {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_PRODUCTS_APPEND;
    }
}
class FetchProductAppendSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_PRODUCTS_APPEND_SUCCESS;
    }
}
class FetchProductsCount {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_PRODUCTS_COUNT;
    }
}
class FetchProductsCountSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_PRODUCTS_COUNT_SUCCESS;
    }
}
class FetchCategory {
    constructor() {
        this.type = FETCH_CATEGORY;
    }
}
class FetchCategorySuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_CATEGORY_SUCCESS;
    }
}
class FetchColors {
    constructor() {
        this.type = FETCH_COLORS;
    }
}
class FetchColorsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_COLORS_SUCCESS;
    }
}
class BrowseError {
    constructor(payload) {
        this.payload = payload;
        this.type = BROWSE_ERROR;
    }
}


/***/ }),

/***/ "SBxm":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/auth/auth.actions */ "C9XJ");
/* harmony import */ var _utils_validators_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils//validators/password.validator */ "ok48");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









function SignupComponent_div_11_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bad Credentials");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_11_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "401 Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_11_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Internal server error! Please contact our support team. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_11_div_1_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_11_div_1_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_div_11_div_1_div_3_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r6.error.status === 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r6.error.status === 401);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r6.error.status === 500 || e_r6.error.status === 0);
} }
function SignupComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_11_div_1_Template, 4, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r6.errorEffect == "SIGN_IN");
} }
function SignupComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 27);
} }
function SignupComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_28_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_28_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The password should at least be 6 digits!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_span_28_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_span_28_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.signUpForm.get("passwordGroup.newPassword").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.signUpForm.get("passwordGroup.newPassword").errors["minlength"]);
} }
function SignupComponent_span_33_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_span_33_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.signUpForm.get("passwordGroup.newPasswordConfirm").errors["required"]);
} }
function SignupComponent_span_34_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your passwords must match!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_span_34_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.signUpForm.get("passwordGroup").errors != null && ctx_r5.signUpForm.get("passwordGroup").errors["noMatch"]);
} }
class SignupComponent {
    constructor(store) {
        this.store = store;
        this.emailPattern = '^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$';
    }
    ngOnInit() {
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)]),
            passwordGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(52)]),
                newPasswordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(52)]),
            }, _utils_validators_password_validator__WEBPACK_IMPORTED_MODULE_3__["passwordMatchCheckValidator"].bind(this))
        });
        this.authState = this.store.select('auth');
    }
    onSubmitted() {
        this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["SignUp"]({
            email: this.signUpForm.value.email,
            password: this.signUpForm.value.passwordGroup.newPassword,
            passwordRepeat: this.signUpForm.value.passwordGroup.newPasswordConfirm
        }));
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 47, vars: 17, consts: [[1, "signup", "container"], [1, "title", "row"], [1, "col-md-4"], ["src", "../../../assets/key.png", "alt", "login key"], [1, "col-md-8"], [1, "row"], [1, "col-md-6"], [4, "ngFor", "ngForOf"], [1, "form", "row"], [1, "col-md-12"], ["class", "loader", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "text", "id", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "maxlength"], ["class", "alert-danger", 4, "ngIf"], ["formGroupName", "passwordGroup"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "name", "newPassword", "formControlName", "newPassword", 1, "form-control", 3, "maxlength"], [4, "ngIf"], ["for", "newPasswordConfirm"], ["type", "password", "id", "newPasswordConfirm", "name", "newPasswordConfirm", "formControlName", "newPasswordConfirm", 1, "form-control", 3, "maxlength"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"], [1, "signin", "row"], ["routerLink", "/login"], ["class", "alert-warning", 4, "ngIf"], [1, "alert-warning"], [1, "loader"], [1, "alert-danger"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome back to Keyist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignupComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_div_15_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_17_listener() { return ctx.onSubmitted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignupComponent_span_22_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "PASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SignupComponent_span_28_Template, 3, 2, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "PASSWORD REPEAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SignupComponent_span_33_Template, 2, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SignupComponent_span_34_Template, 2, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Login!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, ctx.authState).errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, ctx.authState).loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxlength", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && ctx.signUpForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxlength", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("passwordGroup.newPassword").invalid && ctx.signUpForm.get("passwordGroup.newPassword").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxlength", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("passwordGroup.newPasswordConfirm").invalid && ctx.signUpForm.get("passwordGroup.newPasswordConfirm").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("passwordGroup").invalid && ctx.signUpForm.get("passwordGroup").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signUpForm.invalid || ctx.signUpForm.pending || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 15, ctx.authState).loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".signup[_ngcontent-%COMP%] {\n  position: relative;\n  top: 50px;\n  margin: auto;\n  width: 25%;\n  min-height: 70vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.signup[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n  position: relative;\n  left: -15%;\n}\n.signup[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.signup[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n}\n.signup[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: black;\n  margin: 0;\n}\n.signup[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  white-space: nowrap;\n}\n.signup[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  top: 20%;\n}\n.signup[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: gray;\n  font-weight: bold;\n}\n.signup[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .signup[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.signup[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.signup[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.signup[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: gray;\n  text-align: end;\n}\n.signup[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration: underline gray;\n          text-decoration: underline gray;\n}\n.signup[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .signin[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n}\n.signup[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .signin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.signup[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .signin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: gray;\n}\n.signup[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .signin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #17a2b8;\n  text-decoration: none;\n}\n@media only screen and (max-width: 767px) {\n  .signup[_ngcontent-%COMP%] {\n    position: relative;\n    top: 100px;\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 1440px) and (min-width: 768px) {\n  .signup[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDTjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDTjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDTjtBQUNJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBQ047QUFJSTtFQUNFLFFBQUE7QUFGTjtBQUlJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUZOO0FBS0k7O0VBRUUsbUJBQUE7QUFITjtBQU1JO0VBQ0UsV0FBQTtBQUpOO0FBUU07RUFDRSxxQkFBQTtBQU5SO0FBT1E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFMVjtBQVNNO0VBQ0UsdUNBQUE7VUFBQSwrQkFBQTtBQVBSO0FBV0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBVE47QUFVTTtFQUNFLHFCQUFBO0FBUlI7QUFTUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBUFY7QUFRVTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFOWjtBQWNBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VBWEY7QUFDRjtBQWNBO0VBQ0U7SUFDRSxVQUFBO0VBWkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgbWluLWhlaWdodDogNzB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTE1JTtcclxuXHJcbiAgICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogIzE3YTJiODtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtIHtcclxuICAgIC5sb2FkZXIge1xyXG4gICAgICB0b3A6IDIwJTtcclxuICAgIH1cclxuICAgIGxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQsXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3Jnb3Qge1xyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGdyYXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2lnbmluIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTdhMmI4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnNpZ251cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNpZ251cCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "Sika":
/*!********************************************!*\
  !*** ./src/app/browse/browse.component.ts ***!
  \********************************************/
/*! exports provided: BrowseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function() { return BrowseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_browse_browse_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/browse/browse.actions */ "S+L0");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function BrowseComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrowseComponent_p_6_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.clearCategory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BrowseComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrowseComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const c_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.selectCategory(c_r14.category.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("category ", ctx_r1.selectedCategory === c_r14.category.name ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r14.category.name, " ");
} }
function BrowseComponent_div_9_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Problem loading categories...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BrowseComponent_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Internal server error! Please contact our support team. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BrowseComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BrowseComponent_div_9_div_1_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BrowseComponent_div_9_div_1_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r17.error.status === 400 || e_r17.error.status === 401);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r17.error.status === 500 || e_r17.error.status === 0);
} }
function BrowseComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BrowseComponent_div_9_div_1_Template, 3, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r17.errorEffect == "FETCH_CATEGORY");
} }
function BrowseComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrowseComponent_p_14_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.clearPrice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BrowseComponent_p_28_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrowseComponent_p_28_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.clearColor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function BrowseComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrowseComponent_div_30_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const color_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.selectColor(color_r26.color.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r26 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.selectedColor === color_r26.color.name ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, color_r26.color.hex));
} }
function BrowseComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
} }
function BrowseComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r29 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r29.value)("selected", s_r29.value === ctx_r7.selectedSort ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r29.display, "");
} }
function BrowseComponent_div_44_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Problem loading products...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BrowseComponent_div_44_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Internal server error! Please contact our support team. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BrowseComponent_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BrowseComponent_div_44_div_1_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BrowseComponent_div_44_div_1_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r30.error.status === 400 || e_r30.error.status === 401);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r30.error.status === 500 || e_r30.error.status === 0);
} }
function BrowseComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BrowseComponent_div_44_div_1_Template, 3, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r30.errorEffect == "FETCH_PRODUCTS" || e_r30.errorEffect == "FETCH_PRODUCTS_APPEND");
} }
const _c1 = function (a0) { return { "gray": a0 }; };
function BrowseComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r35 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/detail/", product_r35.url, "/", product_r35.productVariant.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r35.productVariant.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r9.browseState).loading));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r35.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, product_r35.productVariant.color.hex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r35.productVariant.price, " \u20AC");
} }
function BrowseComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ":(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sorry, no product found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Try searching again!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BrowseComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BrowseComponent {
    constructor(store) {
        this.store = store;
        this.sortBy = [
            {
                display: 'Any',
                value: 'any'
            },
            {
                display: 'Lowest Price',
                value: 'lowest'
            },
            {
                display: 'Highest Price',
                value: 'highest'
            }
        ];
        this.canFetch = false;
        this.selectedPage = 0;
        this.selectedSort = 'any';
        this.selectedCategory = 'any';
        this.selectedColor = 'any';
        this.minPrice = '0';
        this.maxPrice = '0';
    }
    ngOnInit() {
        this.browseState = this.store.select('browse');
        this.canFetchSubscription = this.browseState.subscribe(data => {
            this.canFetch = data.canFetch;
        });
        this.browseState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(data => {
            this.selectedPage = data.selectedPage;
            this.selectedSort = data.selectedSort;
            this.selectedCategory = data.selectedCategory;
            this.selectedColor = data.selectedColor;
            this.minPrice = data.minPrice;
            this.maxPrice = data.maxPrice;
            if (data.categories.length === 0) {
                this.store.dispatch(new _store_browse_browse_actions__WEBPACK_IMPORTED_MODULE_1__["FetchCategory"]());
            }
            if (!data.colors || data.colors.length === 0) {
                this.store.dispatch(new _store_browse_browse_actions__WEBPACK_IMPORTED_MODULE_1__["FetchColors"]());
            }
            if (data.products.length === 0) {
                this.getProducts();
            }
        });
    }
    ngOnDestroy() {
        if (this.canFetchSubscription) {
            this.canFetchSubscription.unsubscribe();
        }
    }
    onScroll($event) {
        if ((window.innerHeight + window.scrollY + 400) >= document.body.offsetHeight) {
            if (this.canFetch) {
                this.getProductsAppend();
            }
        }
    }
    selectMin(minPrice) {
        this.minPrice = minPrice.trim().length === 0 ? '0' : minPrice.trim();
        this.getProducts();
    }
    selectMax(maxPrice) {
        this.maxPrice = maxPrice.trim().length === 0 ? '0' : maxPrice.trim();
        this.getProducts();
    }
    selectCategory(category) {
        this.selectedCategory = category;
        this.getProducts();
    }
    selectColor(color) {
        this.selectedColor = color;
        this.getProducts();
    }
    selectSort(sort) {
        this.selectedSort = sort;
        this.getProducts();
    }
    clearCategory() {
        this.selectedCategory = 'any';
        this.getProducts();
    }
    clearPrice() {
        this.minPrice = '0';
        this.maxPrice = '0';
        this.getProducts();
    }
    clearColor() {
        this.selectedColor = 'any';
        this.getProducts();
    }
    getProducts() {
        this.selectedPage = 0;
        this.store.dispatch(new _store_browse_browse_actions__WEBPACK_IMPORTED_MODULE_1__["FetchProducts"]({ page: this.selectedPage, sort: this.selectedSort, category: this.selectedCategory, color: this.selectedColor, minPrice: this.minPrice, maxPrice: this.maxPrice }));
        this.getProductsCount();
        this.selectedPage++;
    }
    getProductsCount() {
        this.store.dispatch(new _store_browse_browse_actions__WEBPACK_IMPORTED_MODULE_1__["FetchProductsCount"]({ category: this.selectedCategory, color: this.selectedColor, minPrice: this.minPrice, maxPrice: this.maxPrice }));
    }
    getProductsAppend() {
        this.store.dispatch(new _store_browse_browse_actions__WEBPACK_IMPORTED_MODULE_1__["FetchProductsAppend"]({ page: this.selectedPage, sort: this.selectedSort, category: this.selectedCategory, color: this.selectedColor, minPrice: this.minPrice, maxPrice: this.maxPrice }));
        this.selectedPage++;
    }
}
BrowseComponent.ɵfac = function BrowseComponent_Factory(t) { return new (t || BrowseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
BrowseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrowseComponent, selectors: [["app-browse"]], hostBindings: function BrowseComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function BrowseComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 54, vars: 33, consts: [[1, "browse", "container"], [1, "row"], [1, "filters", "col-md-3"], [1, "categories"], ["class", "remove", 3, "click", 4, "ngIf"], [3, "class", "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "price"], [1, "min", "col-md-4"], ["type", "number", 3, "value", "change"], [1, "max", "col-md-4"], [1, "col-md-2"], [1, "color"], [3, "ngStyle", "class", "click", 4, "ngFor", "ngForOf"], [1, "browse-content", "col-md-9"], ["class", "loader", 4, "ngIf"], [1, "col-md-6"], [1, "product-count"], [1, "sort"], ["name", "sortBy", "id", "sortBy", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "product", "row"], ["class", "product-card col-lg-3 col-md-6 col-12", 4, "ngFor", "ngForOf"], ["class", "product-not-found", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "remove", 3, "click"], [3, "click"], ["class", "alert-warning", 4, "ngIf"], [1, "alert-warning"], [4, "ngIf"], [3, "ngStyle", "click"], [1, "loader"], [3, "value", "selected"], ["class", "alert-warning col-md-12", 4, "ngIf"], [1, "alert-warning", "col-md-12"], [1, "product-card", "col-lg-3", "col-md-6", "col-12"], [3, "routerLink"], ["alt", "product image", 3, "src", "ngClass"], [1, "product-name"], [1, "product-color", 3, "ngStyle"], [1, "product-not-found"], [1, "col-md-12", "col-12"]], template: function BrowseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BrowseComponent_p_6_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BrowseComponent_div_7_Template, 2, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BrowseComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BrowseComponent_p_14_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Min Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BrowseComponent_Template_input_change_19_listener($event) { return ctx.selectMin($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Max Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BrowseComponent_Template_input_change_23_listener($event) { return ctx.selectMax($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BrowseComponent_p_28_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BrowseComponent_div_30_Template, 1, 6, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BrowseComponent_div_33_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BrowseComponent_Template_select_change_42_listener($event) { return ctx.selectSort($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, BrowseComponent_option_43_Template, 2, 3, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, BrowseComponent_div_44_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, BrowseComponent_div_48_Template, 13, 13, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, BrowseComponent_div_50_Template, 7, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, BrowseComponent_div_53_Template, 3, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCategory !== "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 15, ctx.browseState).categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 17, ctx.browseState).errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.minPrice !== "0" || ctx.maxPrice !== "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.minPrice !== "0" ? ctx.minPrice : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.maxPrice !== "0" ? ctx.maxPrice : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedColor !== "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 19, ctx.browseState).colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 21, ctx.browseState).loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 23, ctx.browseState).productsCount, " Product Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 25, ctx.browseState).errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 27, ctx.browseState).products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 29, ctx.browseState).productsCount === 0 && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 31, ctx.browseState).loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.canFetch);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".browse[_ngcontent-%COMP%] {\n  position: relative;\n  top: 150px;\n  min-height: 90vh;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25px;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%] {\n  max-height: 20vh;\n  overflow-y: scroll;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n  display: inline-block;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   p.remove[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  margin-left: 5px;\n  cursor: pointer;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: #292c2f;\n  cursor: pointer;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .category.active[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]:hover {\n  color: #17a2b8;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 10px;\n  font-weight: bold;\n  color: black;\n  display: inline-block;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   p.remove[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  margin-left: 5px;\n  cursor: pointer;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .min[_ngcontent-%COMP%], .browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .max[_ngcontent-%COMP%] {\n  padding: 0;\n  color: #292c2f;\n  font-size: 14px;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .min[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .max[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  margin: 0;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .min[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .max[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: -5px;\n  font-size: 14px;\n  width: 90%;\n  border: 1px solid gray;\n  color: gray;\n  border-radius: 20px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .min[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .max[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n  margin-bottom: 5px;\n  display: inline-block;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   p.remove[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  margin-left: 5px;\n  cursor: pointer;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.browse[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 5px;\n}\n.browse[_ngcontent-%COMP%]   .browse-content[_ngcontent-%COMP%] {\n  position: relative;\n}\n.browse[_ngcontent-%COMP%]   .browse-content[_ngcontent-%COMP%]   .product-count[_ngcontent-%COMP%] {\n  margin: 0;\n  color: gray;\n  position: absolute;\n  top: 100%;\n  transform: translateY(-50%);\n}\n.browse[_ngcontent-%COMP%]   .browse-content[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.browse[_ngcontent-%COMP%]   .browse-content[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: gray;\n  padding: 8px;\n  padding-left: 15px;\n  padding-right: 15px;\n  border: 1px solid gray;\n  border-radius: 10px;\n}\n.browse[_ngcontent-%COMP%]   .browse-content[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.browse[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n}\n.browse[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.browse[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  margin: 0;\n  margin-top: 5px;\n}\n.browse[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.browse[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-bottom: 5px;\n}\n.browse[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 12px;\n}\n.browse[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  text-decoration: none;\n}\n.browse[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n}\n.browse[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-color[_ngcontent-%COMP%] {\n  position: relative;\n  top: 5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.browse[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #292c2f;\n}\n.browse[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover {\n  border-radius: 10px;\n  box-shadow: 0px 3px 5px 6px rgba(57, 41, 41, 0.1);\n}\n.browse[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product-not-found[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15vh;\n  text-align: center;\n}\np[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.gray[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUNKO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQ047QUFBTTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBRVI7QUFEUTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHVjtBQUFNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFFUjtBQUFRO0VBQ0UsY0FBQTtBQUVWO0FBRU07RUFDRSxjQUFBO0FBQVI7QUFJSTtFQUNFLGdCQUFBO0FBRk47QUFHTTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBRFI7QUFFUTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBVjtBQUlNO0VBQ0UsU0FBQTtBQUZSO0FBS007O0VBRUUsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSFI7QUFJUTs7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFEVjtBQUdROztFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBVjtBQUVROztFQUNFLGFBQUE7QUFDVjtBQUlJO0VBQ0UsZ0JBQUE7QUFGTjtBQUdNO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQURSO0FBRVE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQVY7QUFHTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURSO0FBRVE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBVjtBQUdRO0VBQ0UsY0FBQTtBQURWO0FBSVE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFGVjtBQVFFO0VBQ0Usa0JBQUE7QUFOSjtBQU9JO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUxOO0FBT0k7RUFDRSxlQUFBO0FBTE47QUFNTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSlI7QUFNTTtFQUNFLGFBQUE7QUFKUjtBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQVBKO0FBUUk7RUFDRSxhQUFBO0FBTk47QUFPTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFMUjtBQU1RO0VBQ0UsaUJBQUE7QUFKVjtBQU9NO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBTFI7QUFPTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUxSO0FBT007RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFMUjtBQU9NO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFMUjtBQU9NO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUxSO0FBT007RUFDRSxjQUFBO0FBTFI7QUFTSTtFQUNFLG1CQUFBO0VBR0EsaURBQUE7QUFQTjtBQVVJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVJOO0FBYUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFWRjtBQWFBO0VBQ0UsdUJBQUE7QUFWRiIsImZpbGUiOiJzcmMvYXBwL2Jyb3dzZS9icm93c2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJvd3NlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxNTBweDtcclxuICBtaW4taGVpZ2h0OiA5MHZoO1xyXG5cclxuICAuZmlsdGVycyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDI1cHg7XHJcblxyXG4gICAgLmNhdGVnb3JpZXMge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAyMHZoO1xyXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgJi5yZW1vdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgIGNvbG9yOiAjMjkyYzJmO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnk6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMTdhMmI4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByaWNlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAmLnJlbW92ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzE3YTJiODtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucm93IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5taW4sXHJcbiAgICAgIC5tYXgge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgY29sb3I6ICMyOTJjMmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbG9yIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgJi5yZW1vdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJyb3dzZS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5wcm9kdWN0LWNvdW50IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDEwMCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxuICAgIC5zb3J0IHtcclxuICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICBzZWxlY3Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdDpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC5wcm9kdWN0LWNhcmQge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAucm93IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBociB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2R1Y3QtY29sb3Ige1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgIGNvbG9yOiAjMjkyYzJmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3QtY2FyZDpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA1cHggNnB4IHJnYmEoNTcsIDQxLCA0MSwgMC4xKTtcclxuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDVweCA2cHggcmdiYSg1NywgNDEsIDQxLCAwLjEpO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCA2cHggcmdiYSg1NywgNDEsIDQxLCAwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0LW5vdC1mb3VuZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNXZoO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5wIHtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ncmF5IHtcclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-browse',
                templateUrl: './browse.component.html',
                styleUrls: ['./browse.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/auth/auth.actions */ "C9XJ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");







class AppComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__["CheckIfLoggedIn"]());
    }
    onActivate($event) {
        window.scroll(0, 0);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[3, "activate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "router-outlet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_1_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "UJwj":
/*!***********************************************************!*\
  !*** ./src/app/home/newly-added/newly-added.component.ts ***!
  \***********************************************************/
/*! exports provided: NewlyAddedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewlyAddedComponent", function() { return NewlyAddedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_showcase_showcase_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/showcase/showcase.actions */ "/IOY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function NewlyAddedComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function NewlyAddedComponent_div_0_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const n_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", n_r4.url, "/0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", n_r4.productVariants[0].thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", n_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, n_r4.productVariants[0].color.hex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", n_r4.productVariants[0].price, " \u20AC");
} }
function NewlyAddedComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewlyAddedComponent_div_0_div_6_div_1_Template, 12, 8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.showcaseState).newlyAdded);
} }
function NewlyAddedComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewlyAddedComponent_div_0_div_4_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NewlyAddedComponent_div_0_div_6_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r0.showcaseState).loading.includes("FETCH_NEWLY_ADDED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r0.showcaseState).loading.includes("FETCH_NEWLY_ADDED"));
} }
class NewlyAddedComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.showcaseState = this.store.select('showcase');
        this.showcaseState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(data => {
            if (data.newlyAdded.length === 0) {
                this.store.dispatch(new _store_showcase_showcase_actions__WEBPACK_IMPORTED_MODULE_1__["FetchNewlyAdded"]());
            }
        });
    }
}
NewlyAddedComponent.ɵfac = function NewlyAddedComponent_Factory(t) { return new (t || NewlyAddedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
NewlyAddedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewlyAddedComponent, selectors: [["app-newly-added"]], decls: 2, vars: 3, consts: [["class", "newly-added container", 4, "ngIf"], [1, "newly-added", "container"], [1, "col-md-12"], [1, "title"], ["class", "loader", 4, "ngIf"], ["class", "row new-cards", 4, "ngIf"], [1, "loader"], [1, "row", "new-cards"], ["class", "new-card col-lg-3 col-md-6 col-12", 4, "ngFor", "ngForOf"], [1, "new-card", "col-lg-3", "col-md-6", "col-12"], [3, "routerLink"], [3, "src", "alt"], [1, "product-name"], [1, "row"], [1, "col-md-6"], [1, "product-color", 3, "ngStyle"]], template: function NewlyAddedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewlyAddedComponent_div_0_Template, 8, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.showcaseState).errors.includes("FETCH_NEWLY_ADDED"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".newly-added[_ngcontent-%COMP%] {\n  position: relative;\n  top: 50px;\n  min-height: 15vh;\n}\n.newly-added[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  font-size: 18px;\n}\n.newly-added[_ngcontent-%COMP%]   .new-cards[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-align: center;\n  padding: 10px;\n}\n.newly-added[_ngcontent-%COMP%]   .new-cards[_ngcontent-%COMP%]   .new-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 15px;\n}\n.newly-added[_ngcontent-%COMP%]   .new-cards[_ngcontent-%COMP%]   .new-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  margin: 0;\n  margin-top: 5px;\n}\n.newly-added[_ngcontent-%COMP%]   .new-cards[_ngcontent-%COMP%]   .new-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.newly-added[_ngcontent-%COMP%]   .new-cards[_ngcontent-%COMP%]   .new-card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-bottom: 5px;\n}\n.newly-added[_ngcontent-%COMP%]   .new-cards[_ngcontent-%COMP%]   .new-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 12px;\n}\n.newly-added[_ngcontent-%COMP%]   .new-cards[_ngcontent-%COMP%]   .new-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  text-decoration: none;\n}\n.newly-added[_ngcontent-%COMP%]   .new-cards[_ngcontent-%COMP%]   .new-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n}\n.newly-added[_ngcontent-%COMP%]   .new-cards[_ngcontent-%COMP%]   .new-card[_ngcontent-%COMP%]   .product-color[_ngcontent-%COMP%] {\n  position: relative;\n  top: 5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.newly-added[_ngcontent-%COMP%]   .new-cards[_ngcontent-%COMP%]   .new-card[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #292c2f;\n}\n.newly-added[_ngcontent-%COMP%]   .new-cards[_ngcontent-%COMP%]   .new-card[_ngcontent-%COMP%]:hover {\n  border-radius: 10px;\n  box-shadow: 0px 3px 5px 6px rgba(57, 41, 41, 0.1);\n}\n.newly-added[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9uZXdseS1hZGRlZC9uZXdseS1hZGRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFSjtBQUFFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFFSjtBQURJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBR047QUFGTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFJUjtBQUhRO0VBQ0UsaUJBQUE7QUFLVjtBQUZNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBSVI7QUFGTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUlSO0FBRk07RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFJUjtBQUZNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFJUjtBQUZNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUlSO0FBRk07RUFDRSxjQUFBO0FBSVI7QUFBSTtFQUNFLG1CQUFBO0VBR0EsaURBQUE7QUFFTjtBQUVFO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL25ld2x5LWFkZGVkL25ld2x5LWFkZGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld2x5LWFkZGVkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE1dmg7XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAubmV3LWNhcmRzIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLm5ldy1jYXJkIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAucm93IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBociB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2R1Y3QtY29sb3Ige1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgIGNvbG9yOiAjMjkyYzJmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5ldy1jYXJkOmhvdmVyIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDVweCA2cHggcmdiYSg1NywgNDEsIDQxLCAwLjEpO1xyXG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDZweCByZ2JhKDU3LCA0MSwgNDEsIDAuMSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IDZweCByZ2JhKDU3LCA0MSwgNDEsIDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewlyAddedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newly-added',
                templateUrl: './newly-added.component.html',
                styleUrls: ['./newly-added.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "WjNg":
/*!*************************************************************!*\
  !*** ./src/app/home/most-selling/most-selling.component.ts ***!
  \*************************************************************/
/*! exports provided: MostSellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostSellingComponent", function() { return MostSellingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_showcase_showcase_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/showcase/showcase.actions */ "/IOY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["mostCards"];
function MostSellingComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} }
function MostSellingComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MostSellingComponent_div_0_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.scrollLeft(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
function MostSellingComponent_div_0_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/detail/", m_r9.url, "/", m_r9.productVariant.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", m_r9.productVariant.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", m_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, m_r9.productVariant.color.hex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", m_r9.productVariant.price, " \u20AC");
} }
function MostSellingComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MostSellingComponent_div_0_div_8_div_2_Template, 12, 9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r3.showcaseState).mostSelling);
} }
function MostSellingComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MostSellingComponent_div_0_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.scrollRight(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MostSellingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Most Selling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MostSellingComponent_div_0_div_4_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MostSellingComponent_div_0_div_6_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MostSellingComponent_div_0_div_8_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MostSellingComponent_div_0_div_10_Template, 1, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx_r0.showcaseState).loading.includes("FETCH_NEWLY_ADDED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx_r0.showcaseState).loading.includes("FETCH_NEWLY_ADDED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, ctx_r0.showcaseState).loading.includes("FETCH_NEWLY_ADDED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, ctx_r0.showcaseState).loading.includes("FETCH_NEWLY_ADDED"));
} }
class MostSellingComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.showcaseState = this.store.select('showcase');
        this.showcaseState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(data => {
            if (data.mostSelling.length === 0) {
                this.store.dispatch(new _store_showcase_showcase_actions__WEBPACK_IMPORTED_MODULE_1__["FetchMostSelling"]());
            }
        });
    }
    scrollLeft() {
        this.mostCards.nativeElement.scrollLeft -= 250;
    }
    scrollRight() {
        this.mostCards.nativeElement.scrollLeft += 250;
    }
}
MostSellingComponent.ɵfac = function MostSellingComponent_Factory(t) { return new (t || MostSellingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
MostSellingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MostSellingComponent, selectors: [["app-most-selling"]], viewQuery: function MostSellingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mostCards = _t.first);
    } }, decls: 2, vars: 3, consts: [["class", "most-selling container", 4, "ngIf"], [1, "most-selling", "container"], [1, "col-md-12"], [1, "title"], ["class", "loader", 4, "ngIf"], ["class", "scroll-left", 3, "click", 4, "ngIf"], ["class", "most-cards", 4, "ngIf"], ["class", "scroll-right", 3, "click", 4, "ngIf"], [1, "loader"], [1, "scroll-left", 3, "click"], [1, "most-cards"], ["mostCards", ""], ["class", "most-card col-lg-3 col-md-6 col-12", 4, "ngFor", "ngForOf"], [1, "most-card", "col-lg-3", "col-md-6", "col-12"], [3, "routerLink"], [3, "src", "alt"], [1, "product-name"], [1, "row"], [1, "col-md-6"], [1, "product-color", 3, "ngStyle"], [1, "scroll-right", 3, "click"]], template: function MostSellingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MostSellingComponent_div_0_Template, 12, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.showcaseState).errors.includes("FETCH_NEWLY_ADDED"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".most-selling[_ngcontent-%COMP%] {\n  position: relative;\n  top: 150px;\n  min-height: 15vh;\n}\n.most-selling[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  font-size: 18px;\n}\n.most-selling[_ngcontent-%COMP%]   .most-cards[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  overflow: auto;\n  white-space: nowrap;\n  text-align: center;\n  padding: 10px;\n}\n.most-selling[_ngcontent-%COMP%]   .most-cards[_ngcontent-%COMP%]   .most-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 15px;\n}\n.most-selling[_ngcontent-%COMP%]   .most-cards[_ngcontent-%COMP%]   .most-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  margin: 0;\n  margin-top: 5px;\n}\n.most-selling[_ngcontent-%COMP%]   .most-cards[_ngcontent-%COMP%]   .most-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.most-selling[_ngcontent-%COMP%]   .most-cards[_ngcontent-%COMP%]   .most-card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-bottom: 5px;\n}\n.most-selling[_ngcontent-%COMP%]   .most-cards[_ngcontent-%COMP%]   .most-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 12px;\n}\n.most-selling[_ngcontent-%COMP%]   .most-cards[_ngcontent-%COMP%]   .most-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  text-decoration: none;\n}\n.most-selling[_ngcontent-%COMP%]   .most-cards[_ngcontent-%COMP%]   .most-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n}\n.most-selling[_ngcontent-%COMP%]   .most-cards[_ngcontent-%COMP%]   .most-card[_ngcontent-%COMP%]   .product-color[_ngcontent-%COMP%] {\n  position: relative;\n  top: 5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.most-selling[_ngcontent-%COMP%]   .most-cards[_ngcontent-%COMP%]   .most-card[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #292c2f;\n}\n.most-selling[_ngcontent-%COMP%]   .most-cards[_ngcontent-%COMP%]   .most-card[_ngcontent-%COMP%]:hover {\n  border-radius: 10px;\n  box-shadow: 0px 3px 5px 6px rgba(57, 41, 41, 0.1);\n}\n.most-selling[_ngcontent-%COMP%]   .scroll-left[_ngcontent-%COMP%] {\n  background-image: url('left.svg');\n  cursor: pointer;\n  z-index: 9999;\n  position: absolute;\n  top: 40%;\n  display: inline-block;\n  width: 70px;\n  height: 70px;\n  font-size: 34px;\n}\n.most-selling[_ngcontent-%COMP%]   .scroll-right[_ngcontent-%COMP%] {\n  background-image: url('right.svg');\n  cursor: pointer;\n  z-index: 9999;\n  position: absolute;\n  top: 40%;\n  right: 0;\n  display: inline-block;\n  width: 70px;\n  height: 70px;\n  font-size: 34px;\n}\n.most-selling[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tb3N0LXNlbGxpbmcvbW9zdC1zZWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUFFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQUU7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUVKO0FBREk7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUFHTjtBQUZNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUlSO0FBSFE7RUFDRSxpQkFBQTtBQUtWO0FBRk07RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFJUjtBQUZNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBSVI7QUFGTTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUlSO0FBRk07RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUlSO0FBRk07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSVI7QUFGTTtFQUNFLGNBQUE7QUFJUjtBQUFJO0VBQ0UsbUJBQUE7RUFHQSxpREFBQTtBQUVOO0FBRUU7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbW9zdC1zZWxsaW5nL21vc3Qtc2VsbGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3N0LXNlbGxpbmcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDE1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE1dmg7XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAubW9zdC1jYXJkcyB7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAubW9zdC1jYXJkIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAucm93IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBociB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2R1Y3QtY29sb3Ige1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgIGNvbG9yOiAjMjkyYzJmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1vc3QtY2FyZDpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA1cHggNnB4IHJnYmEoNTcsIDQxLCA0MSwgMC4xKTtcclxuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDVweCA2cHggcmdiYSg1NywgNDEsIDQxLCAwLjEpO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCA2cHggcmdiYSg1NywgNDEsIDQxLCAwLjEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNjcm9sbC1sZWZ0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sZWZ0LnN2Z1wiKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gIH1cclxuXHJcbiAgLnNjcm9sbC1yaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcmlnaHQuc3ZnXCIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MostSellingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-most-selling',
                templateUrl: './most-selling.component.html',
                styleUrls: ['./most-selling.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, { mostCards: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mostCards']
        }] }); })();


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "SBxm");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "5Fl7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.routes */ "xS/P");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "NEkq");











class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_auth_routes__WEBPACK_IMPORTED_MODULE_5__["AuthRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_auth_routes__WEBPACK_IMPORTED_MODULE_5__["AuthRoutes"]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
                ],
                declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.module */ "H6Li");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.module */ "PpLr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "RUEf");
/* harmony import */ var _g_page_not_found_g_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./g-page-not-found/g-page-not-found.component */ "etpQ");
/* harmony import */ var _browse_browse_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./browse/browse.module */ "NBep");
/* harmony import */ var _product_detail_product_detail_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-detail/product-detail.module */ "6hUG");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search/search.module */ "RmqX");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/product.service */ "Gdn9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_app_reducers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/app.reducers */ "FR+V");
/* harmony import */ var _store_cart_cart_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/cart/cart.effects */ "tekD");
/* harmony import */ var _store_order_order_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/order/order.effects */ "aHbt");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/cart.service */ "c14U");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/order.service */ "kVqo");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/token.service */ "rj1t");
/* harmony import */ var _store_auth_auth_effects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./store/auth/auth.effects */ "nMA2");
/* harmony import */ var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/token.interceptor */ "mBnW");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");
/* harmony import */ var _store_showcase_showcase_effects__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./store/showcase/showcase.effects */ "1Mtq");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/account.service */ "flj8");
/* harmony import */ var _store_browse_browse_effects__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./store/browse/browse.effects */ "t6E7");
/* harmony import */ var _verification_verification_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./verification/verification.module */ "Kw+X");
/* harmony import */ var _services_non_auth_guard_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/non-auth-guard.service */ "iGlx");




































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_13__["ProductService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_20__["CartService"], _services_order_service__WEBPACK_IMPORTED_MODULE_22__["OrderService"], _services_token_service__WEBPACK_IMPORTED_MODULE_23__["TokenService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_26__["AuthGuardService"], _services_non_auth_guard_service__WEBPACK_IMPORTED_MODULE_31__["NonAuthGuardService"], _services_account_service__WEBPACK_IMPORTED_MODULE_28__["AccountService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_25__["TokenInterceptor"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
            _browse_browse_module__WEBPACK_IMPORTED_MODULE_10__["BrowseModule"],
            _product_detail_product_detail_module__WEBPACK_IMPORTED_MODULE_11__["ProductDetailModule"],
            // CartModule, lazy loaded module not imported here
            // CheckoutModule, lazy loaded module not imported here
            // AccountModule, lazy loaded module not imported here
            _verification_verification_module__WEBPACK_IMPORTED_MODULE_30__["VerificationModule"],
            _search_search_module__WEBPACK_IMPORTED_MODULE_12__["SearchModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
            // FaqModule, lazy loaded module not imported here
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot(_store_app_reducers__WEBPACK_IMPORTED_MODULE_17__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsModule"].forRoot([_store_cart_cart_effects__WEBPACK_IMPORTED_MODULE_18__["CartEffects"], _store_order_order_effects__WEBPACK_IMPORTED_MODULE_19__["OrderEffects"], _store_auth_auth_effects__WEBPACK_IMPORTED_MODULE_24__["AuthEffects"], _store_showcase_showcase_effects__WEBPACK_IMPORTED_MODULE_27__["ShowcaseEffects"], _store_browse_browse_effects__WEBPACK_IMPORTED_MODULE_29__["BrowseEffects"]]),
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["AppRoutes"], { useHash: false, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_7__["PreloadAllModules"] })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _g_page_not_found_g_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["GPageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
        _browse_browse_module__WEBPACK_IMPORTED_MODULE_10__["BrowseModule"],
        _product_detail_product_detail_module__WEBPACK_IMPORTED_MODULE_11__["ProductDetailModule"],
        // CartModule, lazy loaded module not imported here
        // CheckoutModule, lazy loaded module not imported here
        // AccountModule, lazy loaded module not imported here
        _verification_verification_module__WEBPACK_IMPORTED_MODULE_30__["VerificationModule"],
        _search_search_module__WEBPACK_IMPORTED_MODULE_12__["SearchModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
        // FaqModule, lazy loaded module not imported here
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsRootModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _g_page_not_found_g_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["GPageNotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
                    _browse_browse_module__WEBPACK_IMPORTED_MODULE_10__["BrowseModule"],
                    _product_detail_product_detail_module__WEBPACK_IMPORTED_MODULE_11__["ProductDetailModule"],
                    // CartModule, lazy loaded module not imported here
                    // CheckoutModule, lazy loaded module not imported here
                    // AccountModule, lazy loaded module not imported here
                    _verification_verification_module__WEBPACK_IMPORTED_MODULE_30__["VerificationModule"],
                    _search_search_module__WEBPACK_IMPORTED_MODULE_12__["SearchModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
                    // FaqModule, lazy loaded module not imported here
                    _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot(_store_app_reducers__WEBPACK_IMPORTED_MODULE_17__["reducers"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsModule"].forRoot([_store_cart_cart_effects__WEBPACK_IMPORTED_MODULE_18__["CartEffects"], _store_order_order_effects__WEBPACK_IMPORTED_MODULE_19__["OrderEffects"], _store_auth_auth_effects__WEBPACK_IMPORTED_MODULE_24__["AuthEffects"], _store_showcase_showcase_effects__WEBPACK_IMPORTED_MODULE_27__["ShowcaseEffects"], _store_browse_browse_effects__WEBPACK_IMPORTED_MODULE_29__["BrowseEffects"]]),
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["AppRoutes"], { useHash: false, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_7__["PreloadAllModules"] })
                ],
                providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_13__["ProductService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_20__["CartService"], _services_order_service__WEBPACK_IMPORTED_MODULE_22__["OrderService"], _services_token_service__WEBPACK_IMPORTED_MODULE_23__["TokenService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_26__["AuthGuardService"], _services_non_auth_guard_service__WEBPACK_IMPORTED_MODULE_31__["NonAuthGuardService"], _services_account_service__WEBPACK_IMPORTED_MODULE_28__["AccountService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                        useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_25__["TokenInterceptor"],
                        multi: true
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zbnx":
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.routes.ts ***!
  \*****************************************************/
/*! exports provided: VerificationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationRoutes", function() { return VerificationRoutes; });
/* harmony import */ var _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-verification/email-verification.component */ "Au18");
/* harmony import */ var _password_forgot_verification_password_forgot_verification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-forgot-verification/password-forgot-verification.component */ "xYIu");


const VerificationRoutes = [
    { path: 'registrationConfirm', component: _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_0__["EmailVerificationComponent"] },
    { path: 'passwordResetConfirm', component: _password_forgot_verification_password_forgot_verification_component__WEBPACK_IMPORTED_MODULE_1__["PasswordForgotVerificationComponent"] }
];


/***/ }),

/***/ "ZzUz":
/*!********************************************!*\
  !*** ./src/app/store/cart/cart.actions.ts ***!
  \********************************************/
/*! exports provided: ADD_TO_CART, INCREMENT_CART, DECREMENT_CART, REMOVE_FROM_CART, EMPTY_CART, EMPTY_CART_SUCCESS, FETCH_CART, FETCH_CART_SUCCESS, APPLY_DISCOUNT, APPLY_DISCOUNT_SUCCESS, SET_CART, CART_ERROR, AddToCart, IncrementCart, DecrementCart, SetCart, RemoveFromCart, EmptyCart, EmptyCartSuccess, FetchCart, FetchCartSuccess, ApplyDiscount, ApplyDiscountSuccess, CartError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_CART", function() { return INCREMENT_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_CART", function() { return DECREMENT_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_CART", function() { return REMOVE_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_CART", function() { return EMPTY_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_CART_SUCCESS", function() { return EMPTY_CART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CART", function() { return FETCH_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CART_SUCCESS", function() { return FETCH_CART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLY_DISCOUNT", function() { return APPLY_DISCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLY_DISCOUNT_SUCCESS", function() { return APPLY_DISCOUNT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CART", function() { return SET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_ERROR", function() { return CART_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCart", function() { return AddToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementCart", function() { return IncrementCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecrementCart", function() { return DecrementCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCart", function() { return SetCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFromCart", function() { return RemoveFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyCart", function() { return EmptyCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyCartSuccess", function() { return EmptyCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchCart", function() { return FetchCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchCartSuccess", function() { return FetchCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyDiscount", function() { return ApplyDiscount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyDiscountSuccess", function() { return ApplyDiscountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartError", function() { return CartError; });
const ADD_TO_CART = 'ADD_TO_CART';
const INCREMENT_CART = 'INCREMENT_CART';
const DECREMENT_CART = 'DECREMENT_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const EMPTY_CART = 'EMPTY_CART';
const EMPTY_CART_SUCCESS = 'EMPTY_CART_SUCCESS';
const FETCH_CART = 'FETCH_CART';
const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
const APPLY_DISCOUNT = 'APPLY_DISCOUNT';
const APPLY_DISCOUNT_SUCCESS = 'APPLY_DISCOUNT_SUCCESS';
const SET_CART = 'SET_CART';
const CART_ERROR = 'CART_ERROR';
class AddToCart {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TO_CART;
    }
}
class IncrementCart {
    constructor(payload) {
        this.payload = payload;
        this.type = INCREMENT_CART;
    }
}
class DecrementCart {
    constructor(payload) {
        this.payload = payload;
        this.type = DECREMENT_CART;
    }
}
class SetCart {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_CART;
    }
}
class RemoveFromCart {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_FROM_CART;
    } // index of the product in the list to be deleted
}
class EmptyCart {
    constructor() {
        this.type = EMPTY_CART;
    }
}
class EmptyCartSuccess {
    constructor() {
        this.type = EMPTY_CART_SUCCESS;
    }
}
class FetchCart {
    constructor() {
        this.type = FETCH_CART;
    }
}
class FetchCartSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_CART_SUCCESS;
    }
}
class ApplyDiscount {
    constructor(payload) {
        this.payload = payload;
        this.type = APPLY_DISCOUNT;
    }
}
class ApplyDiscountSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = APPLY_DISCOUNT_SUCCESS;
    }
}
class CartError {
    constructor(payload) {
        this.payload = payload;
        this.type = CART_ERROR;
    }
}


/***/ }),

/***/ "aHbt":
/*!**********************************************!*\
  !*** ./src/app/store/order/order.effects.ts ***!
  \**********************************************/
/*! exports provided: OrderEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEffects", function() { return OrderEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _order_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.actions */ "mq5w");
/* harmony import */ var _cart_cart_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart/cart.actions */ "ZzUz");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/order.service */ "kVqo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");











class OrderEffects {
    constructor(actions$, orderService, router) {
        this.actions$ = actions$;
        this.orderService = orderService;
        this.router = router;
        this.postOrder = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_order_actions__WEBPACK_IMPORTED_MODULE_3__["POST_ORDER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((data) => {
            return this.orderService.postOrder(data)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(res => {
                this.router.navigate(['/checkout/success']);
                return [
                    { type: _order_actions__WEBPACK_IMPORTED_MODULE_3__["EMPTY_ORDER"] },
                    { type: _cart_cart_actions__WEBPACK_IMPORTED_MODULE_4__["EMPTY_CART_SUCCESS"] }
                ];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _order_actions__WEBPACK_IMPORTED_MODULE_3__["OrderError"]({ error, errorEffect: _order_actions__WEBPACK_IMPORTED_MODULE_3__["POST_ORDER"] }));
            }));
        }));
    }
}
OrderEffects.ɵfac = function OrderEffects_Factory(t) { return new (t || OrderEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
OrderEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderEffects, factory: OrderEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], OrderEffects.prototype, "postOrder", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { postOrder: [] }); })();


/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/local */ "fxxc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CartService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = `${_config_local__WEBPACK_IMPORTED_MODULE_1__["config"].apiUrl}/api/cart`;
    }
    getCart() {
        return this.httpClient.get(this.url);
    }
    postCart(productVariantId, amount) {
        return this.httpClient.post(this.url, {
            productVariantId,
            amount
        });
    }
    incrementCartItem(cartItemId, amount) {
        return this.httpClient.post(`${this.url}/increment`, {
            cartItemId,
            amount: Number(amount)
        });
    }
    decrementCartItem(cartItemId, amount) {
        return this.httpClient.post(`${this.url}/decrement`, {
            cartItemId,
            amount: Number(amount)
        });
    }
    removeFromCart(id) {
        return this.httpClient.post(this.url + '/remove', {
            cartItemId: id
        });
    }
    confirmCart(cart) {
        return this.httpClient.post(this.url + '/confirm', cart);
    }
    applyDiscount(code) {
        return this.httpClient.post(`${this.url}/discount`, {
            code
        });
    }
    emptyCart() {
        return this.httpClient.delete(this.url);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "cJXK":
/*!********************************************!*\
  !*** ./src/app/store/cart/cart.reducer.ts ***!
  \********************************************/
/*! exports provided: cartReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartReducer", function() { return cartReducer; });
/* harmony import */ var _cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.actions */ "ZzUz");

const initialState = {
    cart: null,
    errors: [],
    loading: false,
    fetchLoading: false
};
function cartReducer(state = initialState, action) {
    switch (action.type) {
        case (_cart_actions__WEBPACK_IMPORTED_MODULE_0__["SET_CART"]):
            return {
                cart: action.payload.cart,
                errors: [...state.errors.filter(error => error.errorEffect !== action.payload.effect)],
                loading: false,
                fetchLoading: state.fetchLoading
            };
        case (_cart_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_CART"]):
            return Object.assign(Object.assign({}, state), { fetchLoading: true });
        case (_cart_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_CART_SUCCESS"]):
            return {
                cart: action.payload.cart,
                errors: [...state.errors.filter(error => error.errorEffect !== action.payload.effect)],
                loading: false,
                fetchLoading: false
            };
        case (_cart_actions__WEBPACK_IMPORTED_MODULE_0__["APPLY_DISCOUNT_SUCCESS"]):
            return Object.assign(Object.assign({}, state), { errors: [...state.errors.filter(error => error.errorEffect !== action.payload.effect)], loading: false });
        case (_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"]):
        case (_cart_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FROM_CART"]):
        case (_cart_actions__WEBPACK_IMPORTED_MODULE_0__["APPLY_DISCOUNT"]):
        case (_cart_actions__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_CART"]):
        case (_cart_actions__WEBPACK_IMPORTED_MODULE_0__["DECREMENT_CART"]):
            return Object.assign(Object.assign({}, state), { loading: true });
        case (_cart_actions__WEBPACK_IMPORTED_MODULE_0__["CART_ERROR"]):
            const errors = [...state.errors];
            const index = errors.findIndex(error => error.errorEffect === action.payload.errorEffect);
            if (index !== -1) {
                errors[index] = action.payload;
            }
            else {
                errors.push(action.payload);
            }
            return Object.assign(Object.assign({}, state), { loading: false, errors });
        case (_cart_actions__WEBPACK_IMPORTED_MODULE_0__["EMPTY_CART_SUCCESS"]):
            return initialState;
        default:
            return state;
    }
}


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner/banner.component */ "fEaK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.routes */ "J8Cg");
/* harmony import */ var _newly_added_newly_added_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newly-added/newly-added.component */ "UJwj");
/* harmony import */ var _most_selling_most_selling_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./most-selling/most-selling.component */ "WjNg");
/* harmony import */ var _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image-slider/image-slider.component */ "7fMG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");












class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_home_routes__WEBPACK_IMPORTED_MODULE_5__["HomeRoutes"]),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _newly_added_newly_added_component__WEBPACK_IMPORTED_MODULE_6__["NewlyAddedComponent"],
        _most_selling_most_selling_component__WEBPACK_IMPORTED_MODULE_7__["MostSellingComponent"],
        _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_8__["ImageSliderComponent"],
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_0__["BannerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_home_routes__WEBPACK_IMPORTED_MODULE_5__["HomeRoutes"]),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
                ],
                declarations: [
                    _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _newly_added_newly_added_component__WEBPACK_IMPORTED_MODULE_6__["NewlyAddedComponent"],
                    _most_selling_most_selling_component__WEBPACK_IMPORTED_MODULE_7__["MostSellingComponent"],
                    _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_8__["ImageSliderComponent"],
                    _banner_banner_component__WEBPACK_IMPORTED_MODULE_0__["BannerComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "etpQ":
/*!****************************************************************!*\
  !*** ./src/app/g-page-not-found/g-page-not-found.component.ts ***!
  \****************************************************************/
/*! exports provided: GPageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GPageNotFoundComponent", function() { return GPageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class GPageNotFoundComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        // this.errorMessage = this.route.snapshot.data['message'];
        this.route.data.subscribe((data) => this.errorMessage = data.message);
    }
}
GPageNotFoundComponent.ɵfac = function GPageNotFoundComponent_Factory(t) { return new (t || GPageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
GPageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GPageNotFoundComponent, selectors: [["app-g-page-not-found"]], decls: 8, vars: 0, consts: [[1, "back"], [1, "container"], [1, "p-5", "pb-0", "row"], [1, "col-md-12", "col-12", "text-center"]], template: function GPageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "OOPS!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "404 Page not found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".back[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  padding-top: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZy1wYWdlLW5vdC1mb3VuZC9nLXBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZy1wYWdlLW5vdC1mb3VuZC9nLXBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xyXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GPageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-g-page-not-found',
                templateUrl: './g-page-not-found.component.html',
                styleUrls: ['./g-page-not-found.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_cart_cart_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/cart/cart.actions */ "ZzUz");
/* harmony import */ var _store_order_order_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/order/order.actions */ "mq5w");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/auth/auth.actions */ "C9XJ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function HeaderComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Help");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_29_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.userSignOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_31_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_31_div_1_div_1_Template, 3, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r11.errorEffect == "FETCH_CART");
} }
function HeaderComponent_div_31_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 48);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function HeaderComponent_div_31_div_5_div_6_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cartItem_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", cartItem_r16.url, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, cartItem_r16.color.hex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cartItem_r16.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", cartItem_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cartItem_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cartItem_r16.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cartItem_r16.price, " \u20AC");
} }
function HeaderComponent_div_31_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_31_div_5_div_6_a_2_Template, 18, 9, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_31_div_5_div_6_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.activatePurchase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r13.cartState).cart.cartItems);
} }
function HeaderComponent_div_31_div_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your cart is empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_31_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_31_div_5_div_6_Template, 12, 3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_div_31_div_5_div_9_Template, 3, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.cartItemCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx_r10.cartState).cart && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx_r10.cartState).cart.cartItems.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx_r10.cartState).cart || !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, ctx_r10.cartState).cart.cartItems.length);
} }
function HeaderComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_31_div_1_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_31_div_3_Template, 1, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_31_div_5_Template, 12, 11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r4.cartState).errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx_r4.cartState).fetchLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, ctx_r4.cartState).fetchLoading);
} }
function HeaderComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Welcome to Keyist! Your account is inactive. Please check your email and activate! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { exact: true }; };
class HeaderComponent {
    constructor(store, router, route, dropdownConfig) {
        this.store = store;
        this.router = router;
        this.route = route;
        this.dropdownConfig = dropdownConfig;
        this.cartItemCount = 0;
        this.isCollapsed = true;
        dropdownConfig.placement = 'bottom-right';
    }
    ngOnInit() {
        this.authState = this.store.select('auth');
        this.cartState = this.store.select('cart');
        this.authStateSubscription = this.authState
            .subscribe((data) => {
            if (data.authenticated) {
                this.store.dispatch(new _store_cart_cart_actions__WEBPACK_IMPORTED_MODULE_1__["FetchCart"]());
                this.cartItemCountSubscription = this.cartState.subscribe(data => {
                    if (data.cart && data.cart.cartItems.length) {
                        this.cartItemCount = data.cart.cartItems.reduce((total, cartItem) => total + cartItem.amount, 0);
                    }
                    else {
                        this.cartItemCount = 0;
                    }
                });
            }
            else {
                if (this.cartItemCountSubscription) {
                    this.cartItemCountSubscription.unsubscribe();
                }
            }
        });
    }
    ngOnDestroy() {
        if (this.authStateSubscription) {
            this.authStateSubscription.unsubscribe();
        }
        if (this.cartItemCountSubscription) {
            this.cartItemCountSubscription.unsubscribe();
        }
    }
    userSignOut() {
        this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SignOut"]());
        this.router.navigate(['/']);
    }
    searchProduct(search) {
        if (search.value.trim().length) {
            const url = '/search/' + search.value;
            this.router.navigate([url]);
        }
    }
    activatePurchase() {
        this.store.select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(data => {
            if (data.isActive) {
                this.store.dispatch(new _store_order_order_actions__WEBPACK_IMPORTED_MODULE_2__["IsCheckoutActive"](true));
                this.router.navigate(['/checkout/personal'], { relativeTo: this.route });
            }
            else {
                alert('Your account is inactive. You must activate your account in order to purchase.\nPlease check your email.');
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]])], decls: 36, vars: 27, consts: [[1, "header", "fixed-top"], [1, "navbar", "navbar-expand-lg", "navbar-light"], ["routerLink", "/", 1, "logo", "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "pages", "navbar-nav"], [1, "home"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], ["routerLinkActive", "active", "routerLink", "/", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "products"], ["routerLinkActive", "active", "routerLink", "/browse", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "about"], ["routerLinkActive", "active", "routerLink", "/faq", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "search", "navbar-nav"], [1, "form-inline", "search"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", 3, "keyup.enter"], ["search", ""], [1, "end", "navbar-nav"], ["class", "login", 4, "ngIf"], ["class", "register", 4, "ngIf"], ["class", "user", 4, "ngIf"], ["class", "cart navbar-nav", 4, "ngIf"], ["class", "user-warning alert-warning", 4, "ngIf"], [1, "login"], ["routerLink", "/login", 1, "nav-link"], [1, "register"], ["routerLink", "/signup", 1, "nav-link", "btn"], [1, "user"], ["ngbDropdown", "", "display", "dynamic", "placement", "bottom", "autoClose", "true"], ["id", "dropdownAccount", "ngbDropdownToggle", "", 1, "nav-link"], [1, "fa", "fa-user"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownAccount", 1, "user-dropdown"], ["routerLink", "/account/information", "routerLinkActive", "active"], ["aria-hidden", "true", 1, "fa", "fa-user-o"], ["routerLink", "/account/orders", "routerLinkActive", "active"], ["aria-hidden", "true", 1, "fa", "fa-archive"], ["routerLink", "/account/address", "routerLinkActive", "active"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["routerLink", "/account/help", "routerLinkActive", "active"], ["aria-hidden", "true", 1, "fa", "fa-question-circle-o"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa", "fa-sign-out"], [1, "cart", "navbar-nav"], [4, "ngFor", "ngForOf"], ["class", "loader", 4, "ngIf"], ["ngbDropdown", "", "display", "dynamic", "placement", "bottom", "autoClose", "true", 4, "ngIf"], [4, "ngIf"], [1, "alert-danger"], [1, "loader"], ["id", "dropdownCart nav-link", "ngbDropdownToggle", ""], [1, "fa", "fa-shopping-cart"], [1, "item-count"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownCart", 1, "cart-inside"], ["class", "list-group", 4, "ngIf"], ["class", "empty-cart", 4, "ngIf"], [1, "list-group"], [1, "product"], ["class", "row", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "controls"], [1, "row"], [1, "col-md-6"], ["routerLink", "/cart", 1, "btn"], [1, "btn", "btn-info", 3, "click"], [1, "row", 3, "routerLink"], [1, "col-md-4"], [1, "color", 3, "ngStyle"], [3, "src", "alt"], [1, "col-md-8", "details"], [1, "col-md-12"], [1, "product-name"], [1, "amount"], [1, "price"], [1, "empty-cart"], [1, "user-warning", "alert-warning"], [1, "p-0", "m-0"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Keyist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_4_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function HeaderComponent_Template_input_keyup_enter_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx.searchProduct(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeaderComponent_div_25_Template, 4, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HeaderComponent_div_27_Template, 4, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HeaderComponent_div_29_Template, 30, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HeaderComponent_div_31_Template, 7, 9, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HeaderComponent_div_33_Template, 4, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 12, ctx.authState).authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 14, ctx.authState).authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 16, ctx.authState).authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 18, ctx.authState).authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 20, ctx.authState).authenticated && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 22, ctx.authState).isActive == false);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  background-color: white;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: center;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  flex-grow: 3;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%] {\n  justify-content: center;\n  flex-grow: 3;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background-color: #17a2b8;\n  border-radius: 10px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 24px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 20vw;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline;\n  margin: 0;\n  color: gray;\n  margin-left: 5px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1px;\n  color: gray;\n  font-size: 20px;\n  align-content: center;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-archive[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-user-o[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 2px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 6px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .item-count[_ngcontent-%COMP%] {\n  position: relative;\n  top: -6px;\n  left: -9px;\n  text-align: center;\n  border-radius: 50%;\n  width: 14px;\n  height: 14px;\n  font-size: 10px;\n  vertical-align: super;\n  display: inline-block;\n  background-color: #17a2b8;\n  color: white;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 20vw;\n  max-height: 400px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  padding: 20px;\n  padding-top: 0;\n  max-height: 25vh;\n  overflow: hidden;\n  overflow-y: scroll;\n  border-bottom: 1px solid #e1e8ee;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 75px;\n  width: 75px;\n  margin-left: 15px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  position: relative;\n  top: 50%;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  color: #333333;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: gray;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  font-weight: bold;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 80%;\n  color: #17a2b8;\n  border: 1px solid #17a2b8;\n  border-radius: 10px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 80%;\n  border-radius: 10px;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .cart-inside[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px;\n  font-size: 14px;\n  color: #17a2b8;\n  font-weight: bold;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.header[_ngcontent-%COMP%]   .user-warning[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  text-align: center;\n}\n.header[_ngcontent-%COMP%]   .user-warning[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  font-weight: bold;\n}\n.header[_ngcontent-%COMP%]   .user-warning[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUVJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQU47QUFHSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0FBRk47QUFJUTtFQUNFLGNBQUE7QUFGVjtBQU9JO0VBQ0UsWUFBQTtBQUxOO0FBTU07O0VBRUUsV0FBQTtBQUpSO0FBTU07RUFDRSxtQkFBQTtBQUpSO0FBUUk7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFOTjtBQVFNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQU5SO0FBT1E7RUFDRSxTQUFBO0FBTFY7QUFRTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQU9RO0VBQ0UsU0FBQTtFQUNBLFlBQUE7QUFMVjtBQVNNOztFQUVFLGtCQUFBO0FBUFI7QUFRUTs7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFMVjtBQVNNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVBSO0FBU1E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQVBWO0FBUVU7RUFDRSxZQUFBO0FBTlo7QUFRVTtFQUNFLGVBQUE7QUFOWjtBQVNVO0VBQ0UsZUFBQTtFQW9CQSxxQkFBQTtBQTFCWjtBQU9ZO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFMZDtBQU9ZO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUxkO0FBT2M7RUFFRSxlQUFBO0VBQ0EsaUJBQUE7QUFOaEI7QUFZYzs7RUFFRSxjQUFBO0FBVmhCO0FBaUJNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBZlI7QUFpQlE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFmVjtBQWtCUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQWhCVjtBQW1CUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBakJWO0FBbUJZO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQWpCZDtBQWtCYztFQUNFLHFCQUFBO0FBaEJoQjtBQWtCYztFQUNFLFNBQUE7RUFDQSxlQUFBO0FBaEJoQjtBQWtCYztFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFoQmhCO0FBbUJjO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWpCaEI7QUFvQmM7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQWxCaEI7QUFtQmdCO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBakJsQjtBQW1CZ0I7RUFDRSxjQUFBO0FBakJsQjtBQWtCa0I7RUFDRSxXQUFBO0FBaEJwQjtBQW9CZ0I7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFsQmxCO0FBdUJZO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBckJkO0FBdUJnQjtFQUNFLFVBQUE7QUFyQmxCO0FBd0JjO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBdEJoQjtBQXdCYztFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQXRCaEI7QUE0Qlk7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUExQmQ7QUFnQ007RUFDRSxhQUFBO0FBOUJSO0FBbUNFO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFqQ0o7QUFrQ0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFoQ047QUFtQ0k7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQWpDTiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBuYXYge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2VzIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMTdhMmI4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gge1xyXG4gICAgICBmbGV4LWdyb3c6IDM7XHJcbiAgICAgIGRpdixcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmVuZCB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWdyb3c6IDM7XHJcblxyXG4gICAgICAubG9naW4ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucmVnaXN0ZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnVzZXIsXHJcbiAgICAgIC5jYXJ0IHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnVzZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAudXNlci1kcm9wZG93biB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDIwdnc7XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgJi5mYS1hcmNoaXZlLFxyXG4gICAgICAgICAgICAgICYuZmEtdXNlci1vIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgcCxcclxuICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTdhMmI4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcnQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgIC5sb2FkZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbS1jb3VudCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0b3A6IC02cHg7XHJcbiAgICAgICAgICBsZWZ0OiAtOXB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcnQtaW5zaWRlIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMjB2dztcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNXZoO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlOGVlO1xyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuY29sb3Ige1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdC1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbW91bnQge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzE3YTJiODtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udHJvbHMge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE3YTJiODtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxN2EyYjg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmVtcHR5LWNhcnQge1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXNlci13YXJuaW5nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIGhyIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]]
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"] }]; }, null); })();


/***/ }),

/***/ "fEaK":
/*!*************************************************!*\
  !*** ./src/app/home/banner/banner.component.ts ***!
  \*************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _config_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../config/local */ "fxxc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BannerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.bannerUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class BannerComponent {
    constructor() {
    }
    ngOnInit() {
        this.bannerUrl = _config_local__WEBPACK_IMPORTED_MODULE_0__["config"].bannerUrl;
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 1, vars: 1, consts: [["class", "banner row", 4, "ngIf"], [1, "banner", "row"], [1, "col-md-12"], ["alt", "banner", 3, "src"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BannerComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bannerUrl && ctx.bannerUrl.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".banner[_ngcontent-%COMP%] {\n  position: relative;\n  top: 100px;\n  justify-content: center;\n}\n.banner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 75%;\n  max-width: 75%;\n}\n.banner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUFFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFFSjtBQURJO0VBQ0UsV0FBQTtBQUdOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGl2IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXgtd2lkdGg6IDc1JTtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "flj8":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/local */ "fxxc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AccountService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.publicUrl = `${_config_local__WEBPACK_IMPORTED_MODULE_1__["config"].apiUrl}/api/public/account`;
        this.url = `${_config_local__WEBPACK_IMPORTED_MODULE_1__["config"].apiUrl}/api/account`;
    }
    createAccount(email, password, passwordRepeat) {
        return this.httpClient.post(this.publicUrl + '/registration', {
            email,
            password,
            passwordRepeat
        }, { headers: { 'Content-type': 'application/json; charset=utf-8' } });
    }
    getUser() {
        return this.httpClient.get(this.url);
    }
    updateUser(user) {
        return this.httpClient.put(this.url, user);
    }
    updateUserAddress(user) {
        return this.httpClient.put(`${this.url}/address`, user);
    }
    verifyEmail(verificationToken) {
        return this.httpClient.post(this.publicUrl + '/registration/validate', {
            token: verificationToken
        });
    }
    forgotPasswordRequest(email) {
        return this.httpClient.post(this.publicUrl + '/password/forgot', {
            email
        });
    }
    forgotPasswordConfirm(passwordForgotToken) {
        return this.httpClient.post(this.publicUrl + '/password/forgot/confirm', {
            token: passwordForgotToken
        });
    }
    forgotPasswordReset(passwordForgotToken, newPassword, newPasswordConfirm) {
        return this.httpClient.post(this.publicUrl + '/password/forgot/validate', {
            token: passwordForgotToken,
            newPassword,
            newPasswordConfirm
        });
    }
    resetPassword(oldPassword, newPassword, newPasswordConfirm) {
        return this.httpClient.post(this.url + '/password/reset', {
            oldPassword,
            newPassword,
            newPasswordConfirm
        });
    }
    getVerificationStatus() {
        return this.httpClient.get(this.url + '/status');
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class FooterComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.authState = this.store.select('auth');
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 41, vars: 0, consts: [[1, "footer-distributed"], [1, "footer-left"], [1, "footer-links"], ["routerLink", "/"], ["routerLink", "/browse"], ["routerLink", "/faq"], [1, "footer-company-name"], ["action", "https://www.paypal.com/cgi-bin/webscr", "method", "post", "target", "_top", 1, "paypal"], ["type", "hidden", "name", "cmd", "value", "_s-xclick"], ["type", "hidden", "name", "hosted_button_id", "value", "T4ANFNRUMHH74"], ["type", "image", "src", "https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif", "border", "0", "name", "submit", "title", "PayPal - The safer, easier way to pay online!", "alt", "Donate with PayPal button"], [1, "footer-center"], [1, "fa", "fa-user"], [1, "fa", "fa-envelope"], ["href", "mailto:antkaynak1@gmail.com"], [1, "footer-right"], [1, "footer-company-about"], [1, "footer-icons"], ["href", "https://www.instagram.com/antkaynak/", "rel", "noopener noreferrer", "target", "_blank"], [1, "fa", "fa-instagram"], ["href", "https://www.linkedin.com/in/ant-kaynak/", "rel", "noopener noreferrer", "target", "_blank"], [1, "fa", "fa-linkedin"], ["href", "https://github.com/antkaynak", "rel", "noopener noreferrer", "target", "_blank"], [1, "fa", "fa-github"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Keyist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ant Kaynak \u00A9 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ant Kaynak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "antkaynak1@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "About Keyist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Keyist is a demo website to demonstrate a custom ecommerce flow. Listed products are not real and we do not collect any payment information. You are advised to not use your real personal or payment information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".footer-distributed[_ngcontent-%COMP%] {\n  position: relative;\n  top: 500px;\n  background-color: #292c2f;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  width: 100%;\n  text-align: left;\n  font: bold 16px sans-serif;\n  padding: 55px 50px;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin: 20px 0 12px;\n  padding: 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 1.8;\n  text-decoration: none;\n  color: inherit;\n  margin-right: 15px;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]   .footer-company-name[_ngcontent-%COMP%] {\n  color: #8f9296;\n  font-size: 14px;\n  font-weight: normal;\n  margin: 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]   .paypal[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.footer-distributed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 36px;\n  margin: 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #33383b;\n  color: #ffffff;\n  font-size: 25px;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 42px;\n  margin: 10px 15px;\n  vertical-align: middle;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   i.fa-envelope[_ngcontent-%COMP%] {\n  font-size: 17px;\n  line-height: 38px;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #ffffff;\n  vertical-align: middle;\n  margin: 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 2;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  text-decoration: none;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   .footer-company-about[_ngcontent-%COMP%] {\n  line-height: 20px;\n  color: #92999f;\n  font-size: 13px;\n  font-weight: normal;\n  margin: 0;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   .footer-company-about[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  background-color: #33383b;\n  border-radius: 2px;\n  font-size: 20px;\n  color: #ffffff;\n  text-align: center;\n  line-height: 35px;\n  margin-right: 3px;\n  margin-bottom: 5px;\n}\n@media (max-width: 880px) {\n  .footer-distributed[_ngcontent-%COMP%]   .footer-distributed[_ngcontent-%COMP%] {\n    font: bold 14px sans-serif;\n  }\n  .footer-distributed[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%], .footer-distributed[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin-bottom: 40px;\n    text-align: center;\n  }\n  .footer-distributed[_ngcontent-%COMP%]   .footer-center[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFOzs7RUFHRSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLFVBQUE7QUFBSjtBQUVJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUFOO0FBQ007RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUdJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFETjtBQUlJO0VBQ0UsZ0JBQUE7QUFGTjtBQU1FO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBSko7QUFLSTtFQUNFLGNBQUE7QUFITjtBQU9FO0VBQ0UsVUFBQTtBQUxKO0FBTUk7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBSk47QUFNSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUpOO0FBT0k7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFMTjtBQU1NO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFKUjtBQU1NO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBSlI7QUFTRTtFQUNFLFVBQUE7QUFQSjtBQVFJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQU5OO0FBT007RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFRSTtFQUNFLGdCQUFBO0FBTk47QUFPTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVlFO0VBQ0U7SUFDRSwwQkFBQTtFQVZKO0VBYUU7OztJQUdFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQVhKO0VBY0U7SUFDRSxjQUFBO0VBWko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWRpc3RyaWJ1dGVkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyYzJmO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQ6IGJvbGQgMTZweCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6IDU1cHggNTBweDtcclxuXHJcbiAgLmZvb3Rlci1sZWZ0LFxyXG4gIC5mb290ZXItY2VudGVyLFxyXG4gIC5mb290ZXItcmlnaHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcblxyXG4gIC5mb290ZXItbGVmdCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG5cclxuICAgIC5mb290ZXItbGlua3Mge1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgbWFyZ2luOiAyMHB4IDAgMTJweDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItY29tcGFueS1uYW1lIHtcclxuICAgICAgY29sb3I6ICM4ZjkyOTY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXlwYWwge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWNlbnRlciB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM4M2I7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICBpLmZhLWVudmVsb3BlIHtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzE3YTJiODtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb290ZXItcmlnaHQge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIC5mb290ZXItY29tcGFueS1hYm91dCB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzkyOTk5ZjtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWljb25zIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzgzYjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcblxyXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcbiAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIHtcclxuICAgICAgZm9udDogYm9sZCAxNHB4IHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1sZWZ0LFxyXG4gICAgLmZvb3Rlci1jZW50ZXIsXHJcbiAgICAuZm9vdGVyLXJpZ2h0IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1jZW50ZXIgaSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "fxxc":
/*!*****************************!*\
  !*** ./src/config/local.ts ***!
  \*****************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
    apiUrl: 'http://localhost:8080',
    authUrl: 'http://localhost:8081',
    clientId: 'test',
    clientSecret: 'test',
    carausel: [
        {
            title: 'Title',
            text: 'Text',
            imageUrl: ''
        },
        {
            title: 'Title',
            text: 'Text',
            imageUrl: ''
        },
        {
            title: 'Title',
            text: 'Text',
            imageUrl: ''
        }
    ],
    bannerUrl: ''
};


/***/ }),

/***/ "iGlx":
/*!****************************************************!*\
  !*** ./src/app/services/non-auth-guard.service.ts ***!
  \****************************************************/
/*! exports provided: NonAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonAuthGuardService", function() { return NonAuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class NonAuthGuardService {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    canActivate(route, state) {
        return this.store.select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((authState) => {
            if (authState.authenticated) {
                this.router.navigate(['/']);
            }
            return !authState.authenticated;
        }));
    }
}
NonAuthGuardService.ɵfac = function NonAuthGuardService_Factory(t) { return new (t || NonAuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NonAuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NonAuthGuardService, factory: NonAuthGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonAuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "kVqo":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/local */ "fxxc");





class OrderService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = `${_config_local__WEBPACK_IMPORTED_MODULE_2__["config"].apiUrl}/api/order`;
        this.pageSize = 3;
    }
    getAllOrdersCount() {
        return this.httpClient.get(this.url + '/count');
    }
    getAllOrders(page) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.set('page', page.toString());
        params = params.set('size', this.pageSize.toString());
        return this.httpClient.get(this.url, {
            params
        });
    }
    postOrder(data) {
        return this.httpClient.post(this.url, data);
    }
    getPageSize() {
        return this.pageSize;
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kWa9":
/*!*****************************************!*\
  !*** ./src/app/browse/browse.routes.ts ***!
  \*****************************************/
/*! exports provided: BrowseRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseRoutes", function() { return BrowseRoutes; });
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse.component */ "Sika");

const BrowseRoutes = [
    { path: 'browse', component: _browse_component__WEBPACK_IMPORTED_MODULE_0__["BrowseComponent"] }
];


/***/ }),

/***/ "mBnW":
/*!***********************************************!*\
  !*** ./src/app/services/token.interceptor.ts ***!
  \***********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/auth/auth.actions */ "C9XJ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token.service */ "rj1t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class TokenInterceptor {
    constructor(store, tokenService, router) {
        this.store = store;
        this.tokenService = tokenService;
        this.router = router;
        this.isRefreshingToken = false;
        this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    addTokenToHeader(request, token) {
        return request.clone({ setHeaders: { Authorization: `Bearer ${token ? token : this.tokenService.getToken()}` } });
    }
    intercept(request, next) {
        if (!request.url.includes('/public/') && !request.url.includes('oauth')) {
            return next.handle(this.addTokenToHeader(request, null)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
                if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
                    // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
                    this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SignOut"]());
                }
                if (error && error.status === 401 && error.error && error.error.error === 'invalid_token') {
                    return this.handle401Error(request, next);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
        }
        else {
            return next.handle(request);
        }
    }
    handle401Error(request, next) {
        if (!this.isRefreshingToken) {
            this.isRefreshingToken = true;
            this.tokenSubject.next(null);
            return this.tokenService.obtainAccessTokenWithRefreshToken(this.tokenService.getRefreshToken())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((newToken) => {
                if (newToken) {
                    if (!this.tokenService.checkIfTokenExists()) { // If user logs out while we are obtaining token
                        this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SignOut"]());
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
                    }
                    this.tokenService.saveToken(newToken);
                    this.tokenSubject.next(newToken);
                    return next.handle(this.addTokenToHeader(request, newToken));
                }
                this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SignOut"]());
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(); // if code gets here the effect that dispatches it becomes inactive.
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
                this.router.navigate(['/login']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SignOut"]());
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                this.isRefreshingToken = false;
            }));
        }
        else {
            return this.tokenSubject
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(newToken => newToken !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(newToken => {
                return next.handle(this.addTokenToHeader(request, newToken));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
                this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SignOut"]());
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }));
        }
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "mq5w":
/*!**********************************************!*\
  !*** ./src/app/store/order/order.actions.ts ***!
  \**********************************************/
/*! exports provided: IS_CHECKOUT_ACTIVE, SET_CHECKOUT_STEP, POST_PERSONAL, POST_SHIPPING, POST_PAYMENT, POST_ORDER, EMPTY_ORDER, ORDER_ERROR, IsCheckoutActive, SetCheckoutStep, PostOrder, PostPersonal, PostShipping, PostPayment, EmptyOrder, OrderError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_CHECKOUT_ACTIVE", function() { return IS_CHECKOUT_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHECKOUT_STEP", function() { return SET_CHECKOUT_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_PERSONAL", function() { return POST_PERSONAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_SHIPPING", function() { return POST_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_PAYMENT", function() { return POST_PAYMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ORDER", function() { return POST_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_ORDER", function() { return EMPTY_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_ERROR", function() { return ORDER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsCheckoutActive", function() { return IsCheckoutActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCheckoutStep", function() { return SetCheckoutStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostOrder", function() { return PostOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPersonal", function() { return PostPersonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostShipping", function() { return PostShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPayment", function() { return PostPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyOrder", function() { return EmptyOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderError", function() { return OrderError; });
const IS_CHECKOUT_ACTIVE = 'IS_CHECKOUT_ACTIVE';
const SET_CHECKOUT_STEP = 'SET_CHECKOUT_STEP';
const POST_PERSONAL = 'POST_PERSONAL';
const POST_SHIPPING = 'POST_SHIPPING';
const POST_PAYMENT = 'POST_PAYMENT';
const POST_ORDER = 'POST_ORDER';
const EMPTY_ORDER = 'EMPTY_ORDER';
const ORDER_ERROR = 'ORDER_ERROR';
class IsCheckoutActive {
    constructor(payload) {
        this.payload = payload;
        this.type = IS_CHECKOUT_ACTIVE;
    }
}
class SetCheckoutStep {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_CHECKOUT_STEP;
    }
}
class PostOrder {
    constructor(payload) {
        this.payload = payload;
        this.type = POST_ORDER;
    }
}
class PostPersonal {
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PERSONAL;
    }
}
class PostShipping {
    constructor(payload) {
        this.payload = payload;
        this.type = POST_SHIPPING;
    }
}
class PostPayment {
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PAYMENT;
    }
}
class EmptyOrder {
    constructor() {
        this.type = EMPTY_ORDER;
    }
}
class OrderError {
    constructor(payload) {
        this.payload = payload;
        this.type = ORDER_ERROR;
    }
}


/***/ }),

/***/ "nMA2":
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.actions */ "C9XJ");
/* harmony import */ var _cart_cart_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart/cart.actions */ "ZzUz");
/* harmony import */ var _order_order_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order/order.actions */ "mq5w");
/* harmony import */ var _showcase_showcase_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../showcase/showcase.actions */ "/IOY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/token.service */ "rj1t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/account.service */ "flj8");














class AuthEffects {
    constructor(actions$, tokenService, router, accountService) {
        this.actions$ = actions$;
        this.tokenService = tokenService;
        this.router = router;
        this.accountService = accountService;
        this.signUp = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((credentials) => {
            return this.accountService.createAccount(credentials.email, credentials.password, credentials.passwordRepeat)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(res => {
                return [
                    {
                        type: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_SUCCESS"], payload: { effect: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP"] }
                    },
                    {
                        type: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN"],
                        payload: { email: credentials.email, password: credentials.password }
                    }
                ];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthError"]({ error, errorEffect: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP"] }))));
        }));
        this.signIn = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((credentials) => {
            return this.tokenService.obtainAccessToken(credentials.email, credentials.password)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(res => {
                this.tokenService.saveToken(res);
                this.router.navigate(['/']);
                return [
                    { type: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN_SUCCESS"], payload: { effect: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN"] } },
                    { type: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_VERIFICATION_STATUS"] }
                ];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthError"]({ error, errorEffect: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN"] }))));
        }));
        this.signOut = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_OUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((action) => {
            this.tokenService.removeToken();
            return [
                {
                    type: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_OUT_SUCCESS"]
                },
                {
                    type: _cart_cart_actions__WEBPACK_IMPORTED_MODULE_4__["EMPTY_CART_SUCCESS"] // clearing memory
                },
                {
                    type: _order_order_actions__WEBPACK_IMPORTED_MODULE_5__["EMPTY_ORDER"] // clearing memory
                },
                {
                    type: _showcase_showcase_actions__WEBPACK_IMPORTED_MODULE_6__["EMPTY_INTERESTED"] // clearing memory
                }
            ];
        }));
        this.checkIfLoggedIn = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["CHECK_IF_LOGGED_IN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((action) => {
            if (this.tokenService.checkIfTokenExists()) {
                return [
                    {
                        type: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN_SUCCESS"], payload: { effect: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN_SUCCESS"] }
                    },
                    {
                        type: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_VERIFICATION_STATUS"]
                    }
                ];
            }
            return [{
                    type: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_OUT_SUCCESS"], payload: { effect: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_OUT"] }
                }];
        }));
        this.fetchVerificationStatus = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_VERIFICATION_STATUS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((action) => {
            return this.accountService.getVerificationStatus()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(res => {
                return {
                    type: _auth_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_VERIFICATION_STATUS_SUCCESS"], payload: res
                };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["SignOut"]())));
        }));
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_11__["AccountService"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffects.prototype, "signUp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffects.prototype, "signIn", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffects.prototype, "signOut", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffects.prototype, "checkIfLoggedIn", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffects.prototype, "fetchVerificationStatus", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _services_account_service__WEBPACK_IMPORTED_MODULE_11__["AccountService"] }]; }, { signUp: [], signIn: [], signOut: [], checkIfLoggedIn: [], fetchVerificationStatus: [] }); })();


/***/ }),

/***/ "ok48":
/*!****************************************************!*\
  !*** ./src/utils/validators/password.validator.ts ***!
  \****************************************************/
/*! exports provided: passwordMatchCheckValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordMatchCheckValidator", function() { return passwordMatchCheckValidator; });
function passwordMatchCheckValidator(control) {
    if (control.value.newPassword !== control.value.newPasswordConfirm) {
        return { noMatch: true };
    }
    return null;
}


/***/ }),

/***/ "pja6":
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "C9XJ");

const initialState = {
    authenticated: false,
    isActive: null,
    errors: [],
    loading: false
};
function authReducer(state = initialState, action) {
    switch (action.type) {
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN"]):
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_OUT"]):
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP"]):
            return Object.assign(Object.assign({}, state), { loading: true });
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_SUCCESS"]):
            return Object.assign(Object.assign({}, state), { errors: [...state.errors.filter(error => error.errorEffect !== action.payload.effect)], loading: false });
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_SUCCESS"]):
            return Object.assign(Object.assign({}, state), { authenticated: true, errors: [...state.errors.filter(error => error.errorEffect !== action.payload.effect)], loading: false });
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AUTH_ERROR"]):
            const errors = [...state.errors];
            const index = errors.findIndex(error => error.errorEffect === action.payload.errorEffect);
            if (index !== -1) {
                errors[index] = action.payload;
            }
            else {
                errors.push(action.payload);
            }
            return Object.assign(Object.assign({}, state), { loading: false, errors });
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_OUT_SUCCESS"]):
            return initialState;
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_VERIFICATION_STATUS_SUCCESS"]):
            return Object.assign(Object.assign({}, state), { isActive: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "qGZU":
/*!*****************************************!*\
  !*** ./src/app/search/search.routes.ts ***!
  \*****************************************/
/*! exports provided: SearchRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutes", function() { return SearchRoutes; });
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component */ "tq2C");

const SearchRoutes = [
    { path: 'search/:keyword', component: _search_component__WEBPACK_IMPORTED_MODULE_0__["SearchComponent"] }
];


/***/ }),

/***/ "rj1t":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/local */ "fxxc");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "p46w");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);






class TokenService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = `${_config_local__WEBPACK_IMPORTED_MODULE_2__["config"].authUrl}/oauth/token`;
    }
    obtainAccessToken(email, password) {
        let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        body = body.append('username', email);
        body = body.append('password', password);
        body = body.append('scope', 'read write');
        body = body.append('grant_type', 'password');
        body = body.append('client_id', _config_local__WEBPACK_IMPORTED_MODULE_2__["config"].clientId);
        return this.httpClient.post(this.url, body, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
                Authorization: 'Basic '
                    + btoa(`${_config_local__WEBPACK_IMPORTED_MODULE_2__["config"].clientId}:${_config_local__WEBPACK_IMPORTED_MODULE_2__["config"].clientSecret}`)
            }
        });
    }
    obtainAccessTokenWithRefreshToken(refreshToken) {
        let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        body = body.append('refresh_token', refreshToken);
        body = body.append('grant_type', 'refresh_token');
        return this.httpClient.post(this.url, body, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
                Authorization: 'Basic '
                    + btoa(`${_config_local__WEBPACK_IMPORTED_MODULE_2__["config"].clientId}:${_config_local__WEBPACK_IMPORTED_MODULE_2__["config"].clientSecret}`)
            }
        });
    }
    saveToken(token) {
        js_cookie__WEBPACK_IMPORTED_MODULE_3__["set"]('usr', JSON.stringify(token), { expires: 365 });
    }
    removeToken() {
        js_cookie__WEBPACK_IMPORTED_MODULE_3__["remove"]('usr');
    }
    getToken() {
        const token = js_cookie__WEBPACK_IMPORTED_MODULE_3__["get"]('usr');
        if (!token) {
            return '';
        }
        return JSON.parse(token).access_token;
    }
    getRefreshToken() {
        const token = js_cookie__WEBPACK_IMPORTED_MODULE_3__["get"]('usr');
        if (!token) {
            return '';
        }
        return JSON.parse(token).refresh_token;
    }
    checkIfTokenExists() {
        const token = js_cookie__WEBPACK_IMPORTED_MODULE_3__["get"]('usr');
        if (!token) {
            return false;
        }
        return JSON.parse(token).access_token && JSON.parse(token).access_token.length;
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rwfU":
/*!*************************************************!*\
  !*** ./src/utils/validators/blank.validator.ts ***!
  \*************************************************/
/*! exports provided: checkIfBlankValidator, notBlankValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfBlankValidator", function() { return checkIfBlankValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notBlankValidator", function() { return notBlankValidator; });
function checkIfBlankValidator(control) {
    if (control.value !== null && control.value.trim() !== control.value && control.value.trim() === '') {
        return { blank: true };
    }
    return null;
}
function notBlankValidator(control) {
    // checks if the field is null or has an empty value in it.
    if (control.value === null || control.value.trim() === '') {
        return { blank: true };
    }
    return null;
}


/***/ }),

/***/ "t6E7":
/*!************************************************!*\
  !*** ./src/app/store/browse/browse.effects.ts ***!
  \************************************************/
/*! exports provided: BrowseEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseEffects", function() { return BrowseEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _browse_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browse.actions */ "S+L0");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/product.service */ "Gdn9");









class BrowseEffects {
    constructor(actions$, productService) {
        this.actions$ = actions$;
        this.productService = productService;
        this.fetchProducts = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUCTS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((params) => {
            return this.productService.getProducts(params.page, params.sort, params.category, params.color, params.minPrice, params.maxPrice)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
                return {
                    type: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUCTS_SUCCESS"],
                    payload: {
                        res,
                        effect: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUCTS"],
                        selectedPage: params.page + 1,
                        selectedSort: params.sort,
                        selectedCategory: params.category,
                        selectedColor: params.color,
                        minPrice: params.minPrice,
                        maxPrice: params.maxPrice
                    }
                };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _browse_actions__WEBPACK_IMPORTED_MODULE_3__["BrowseError"]({ error, errorEffect: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUCTS"] }))));
        }));
        this.fetchProductsAppend = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUCTS_APPEND"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((params) => {
            return this.productService.getProducts(params.page, params.sort, params.category, params.color, params.minPrice, params.maxPrice)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
                return {
                    type: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUCTS_APPEND_SUCCESS"],
                    payload: {
                        res,
                        effect: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUCTS_APPEND"],
                        selectedPage: params.page + 1,
                        selectedSort: params.sort,
                        selectedCategory: params.category,
                        selectedColor: params.color,
                        minPrice: params.minPrice,
                        maxPrice: params.maxPrice
                    }
                };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _browse_actions__WEBPACK_IMPORTED_MODULE_3__["BrowseError"]({ error, errorEffect: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUCTS_APPEND"] }))));
        }));
        this.fetchProductsCount = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUCTS_COUNT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((params) => {
            return this.productService.getProductsCount(params.category, params.color, params.minPrice, params.maxPrice)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
                return {
                    type: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUCTS_COUNT_SUCCESS"],
                    payload: {
                        res,
                        effect: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUCTS_COUNT"]
                    }
                };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _browse_actions__WEBPACK_IMPORTED_MODULE_3__["BrowseError"]({ error, errorEffect: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUCTS_COUNT"] }))));
        }));
        this.fetchCategory = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_CATEGORY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((action) => {
            return this.productService.getCategory()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
                return { type: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_CATEGORY_SUCCESS"], payload: { res, effect: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_CATEGORY"] } };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _browse_actions__WEBPACK_IMPORTED_MODULE_3__["BrowseError"]({ error, errorEffect: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_CATEGORY"] }))));
        }));
        this.fetchColor = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_COLORS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((action) => {
            return this.productService.getColors()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
                return { type: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_COLORS_SUCCESS"], payload: { res, effect: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_COLORS"] } };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _browse_actions__WEBPACK_IMPORTED_MODULE_3__["BrowseError"]({ error, errorEffect: _browse_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_COLORS"] }))));
        }));
    }
}
BrowseEffects.ɵfac = function BrowseEffects_Factory(t) { return new (t || BrowseEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"])); };
BrowseEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrowseEffects, factory: BrowseEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], BrowseEffects.prototype, "fetchProducts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], BrowseEffects.prototype, "fetchProductsAppend", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], BrowseEffects.prototype, "fetchProductsCount", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], BrowseEffects.prototype, "fetchCategory", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], BrowseEffects.prototype, "fetchColor", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowseEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }]; }, { fetchProducts: [], fetchProductsAppend: [], fetchProductsCount: [], fetchCategory: [], fetchColor: [] }); })();


/***/ }),

/***/ "tekD":
/*!********************************************!*\
  !*** ./src/app/store/cart/cart.effects.ts ***!
  \********************************************/
/*! exports provided: CartEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartEffects", function() { return CartEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.actions */ "ZzUz");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cart.service */ "c14U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










class CartEffects {
    constructor(actions$, cartService, router) {
        this.actions$ = actions$;
        this.cartService = cartService;
        this.router = router;
        this.fetchCart = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cart_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_CART"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((action) => {
            return this.cartService.getCart()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => ({
                type: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_CART_SUCCESS"], payload: { cart: res, effect: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_CART"] }
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartError"]({ error, errorEffect: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_CART"] }))));
        }));
        this.addToCart = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_TO_CART"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((payload) => {
            return this.cartService.postCart(payload.id, payload.amount)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
                this.router.navigate(['/cart']);
                return { type: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["SET_CART"], payload: { cart: res, effect: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_TO_CART"] } };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartError"]({ error, errorEffect: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_TO_CART"] }))));
        }));
        this.incrementCart = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cart_actions__WEBPACK_IMPORTED_MODULE_3__["INCREMENT_CART"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((payload) => {
            return this.cartService.incrementCartItem(payload.id, payload.amount)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => ({ type: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["SET_CART"], payload: { cart: res, effect: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["INCREMENT_CART"] } })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartError"]({ error, errorEffect: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["INCREMENT_CART"] }))));
        }));
        this.decrementCart = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cart_actions__WEBPACK_IMPORTED_MODULE_3__["DECREMENT_CART"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((payload) => {
            return this.cartService.decrementCartItem(payload.id, payload.amount)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => ({ type: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["SET_CART"], payload: { cart: res, effect: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["DECREMENT_CART"] } })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartError"]({ error, errorEffect: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["DECREMENT_CART"] }))));
        }));
        this.removeFromCart = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cart_actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FROM_CART"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((id) => {
            return this.cartService.removeFromCart(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => ({ type: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["SET_CART"], payload: { cart: res, effect: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FROM_CART"] } })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartError"]({ error, errorEffect: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FROM_CART"] }))));
        }));
        this.applyDiscountCode = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cart_actions__WEBPACK_IMPORTED_MODULE_3__["APPLY_DISCOUNT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((code) => {
            return this.cartService.applyDiscount(code)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(res => ([
                {
                    type: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["APPLY_DISCOUNT_SUCCESS"], payload: { effect: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["APPLY_DISCOUNT"] }
                },
                { type: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_CART"] }
            ])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartError"]({ error, errorEffect: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["APPLY_DISCOUNT"] }))));
        }));
        this.emptyCart = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cart_actions__WEBPACK_IMPORTED_MODULE_3__["EMPTY_CART"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((action) => {
            return this.cartService.emptyCart()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => ({ type: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["EMPTY_CART_SUCCESS"], payload: res })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartError"]({ error, errorEffect: _cart_actions__WEBPACK_IMPORTED_MODULE_3__["EMPTY_CART"] }))));
        }));
    }
}
CartEffects.ɵfac = function CartEffects_Factory(t) { return new (t || CartEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
CartEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartEffects, factory: CartEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], CartEffects.prototype, "fetchCart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], CartEffects.prototype, "addToCart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], CartEffects.prototype, "incrementCart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], CartEffects.prototype, "decrementCart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], CartEffects.prototype, "removeFromCart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], CartEffects.prototype, "applyDiscountCode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], CartEffects.prototype, "emptyCart", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { fetchCart: [], addToCart: [], incrementCart: [], decrementCart: [], removeFromCart: [], applyDiscountCode: [], emptyCart: [] }); })();


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SearchComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function SearchComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", product_r3.url, "/0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r3.productVariants[0].thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, product_r3.productVariants[0].color.hex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r3.productVariants[0].price, "");
} }
function SearchComponent_hr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
class SearchComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        this.page = 0;
        this.canFetch = false;
        this.products = [];
    }
    ngOnInit() {
        this.querySubscribe = this.route.params.subscribe((params) => {
            this.canFetch = false;
            this.keyword = params.keyword;
            this.page = 0;
            this.productService.searchProduct(this.page, this.keyword)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
                this.canFetch = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }))
                .subscribe(data => {
                this.products = data;
                this.page++;
                this.canFetch = true;
                if (data.length !== 0) {
                    this.canFetch = true;
                }
            });
        });
    }
    onScroll($event) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && this.canFetch) {
            this.canFetch = false;
            if (this.canFetch) {
                this.productService.searchProduct(this.page, this.keyword)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
                    this.canFetch = false;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
                }))
                    .subscribe(data => {
                    this.products.push(...data);
                    this.page++;
                    this.canFetch = true;
                    if (data.length === 0) {
                        this.canFetch = false;
                    }
                });
            }
        }
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], hostBindings: function SearchComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SearchComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 15, vars: 5, consts: [[1, "search", "container"], [1, "title"], [1, "highlight"], [4, "ngIf"], [1, "col-12", "col-sm-6", "col-md-12"], ["class", "search-result row", 4, "ngFor", "ngForOf"], [1, "search-result", "row"], [1, "search-card", "col-md-3"], [3, "routerLink"], [3, "src", "alt"], [1, "product-name"], [1, "row"], [1, "col-md-6"], [1, "product-color", 3, "ngStyle"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchComponent_span_8_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " found for the search for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SearchComponent_div_13_Template, 13, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SearchComponent_hr_14_Template, 1, 0, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.keyword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.canFetch);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], styles: [".search[_ngcontent-%COMP%] {\n  position: relative;\n  top: 150px;\n  min-height: 50vh;\n}\n.search[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span.highlight[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #17a2b8;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-align: center;\n  padding: 10px;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 15px;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  margin: 0;\n  margin-top: 5px;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-bottom: 5px;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 12px;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  text-decoration: none;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   .product-color[_ngcontent-%COMP%] {\n  position: relative;\n  top: 5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #292c2f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUFOO0FBSUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUZKO0FBSUk7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUFGTjtBQUdNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQURSO0FBRVE7RUFDRSxpQkFBQTtBQUFWO0FBR007RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUdNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBRFI7QUFHTTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQURSO0FBR007RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQURSO0FBR007RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRFI7QUFHTTtFQUNFLGNBQUE7QUFEUiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxNTBweDtcclxuICBtaW4taGVpZ2h0OiA1MHZoO1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgc3Bhbi5oaWdobGlnaHQge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLXJlc3VsdCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAuc2VhcmNoLWNhcmQge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIC5yb3cge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGhyIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzE3YTJiODtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgfVxyXG4gICAgICAucHJvZHVjdC1jb2xvciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgY29sb3I6ICMyOTJjMmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "vR3N":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _store_cart_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/cart/cart.actions */ "ZzUz");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _related_related_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./related/related.component */ "2Mpk");











function ProductDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Problem loading products...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} }
function ProductDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
} }
function ProductDetailComponent_div_4_div_23_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Could not add item.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_4_div_23_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select a proper amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_4_div_23_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Internal server error. Please contact our support team. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_4_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_4_div_23_div_1_div_2_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_div_4_div_23_div_1_div_3_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailComponent_div_4_div_23_div_1_div_4_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r12.error.status === 400 || e_r12.error.status === 401);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r12.error.status === 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r12.error.status === 500 || e_r12.error.status === 0);
} }
function ProductDetailComponent_div_4_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_4_div_23_div_1_Template, 5, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r12.errorEffect == "ADD_TO_CART");
} }
function ProductDetailComponent_div_4_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 32);
} }
function ProductDetailComponent_div_4_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_4_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.addToCart(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add to cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r7.cartState).loading ? "none" : "inline-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r7.cartState).loading);
} }
function ProductDetailComponent_div_4_button_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Out Of Stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r8.cartState).loading ? "none" : "inline-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r8.cartState).loading);
} }
function ProductDetailComponent_div_4_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_4_div_41_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const v_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.setActiveVariant(v_r21.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-md-4 ", v_r21.id === ctx_r20.activeProductVariant.id ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", v_r21.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", v_r21.color.name);
} }
function ProductDetailComponent_div_4_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_4_div_41_div_1_Template, 2, 5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.product.productVariantDetails);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function ProductDetailComponent_div_4_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "COLOR:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "WIDTH:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "HEIGHT:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "COMPOSITION:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r10.activeProductVariant.color.hex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.activeProductVariant.color.name.toLocaleUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.activeProductVariant.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.activeProductVariant.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.activeProductVariant.composition);
} }
function ProductDetailComponent_div_4_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CARGO PRICE:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Orders go out in 1 business day or less.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "We ship internationally, to most countries.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "International customers: you will be responsible for paying any CUSTOMS and DUTIES on your order.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "This is a demo site. Products listed here are only for demonstration purposes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.activeProductVariant.cargoPrice, " \u20AC");
} }
function ProductDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProductDetailComponent_div_4_div_23_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProductDetailComponent_div_4_div_26_Template, 1, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProductDetailComponent_div_4_button_28_Template, 4, 7, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProductDetailComponent_div_4_button_29_Template, 4, 7, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_4_Template_div_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.setActiveTab(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Variants");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_4_Template_div_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.setActiveTab(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_4_Template_div_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.setActiveTab(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ProductDetailComponent_div_4_div_41_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProductDetailComponent_div_4_div_42_Template, 22, 7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ProductDetailComponent_div_4_div_43_Template, 18, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.activeProductVariant.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r3.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.product.category.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.product.longDesc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.activeProductVariant.price, " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 22, ctx_r3.cartState).errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 24, ctx_r3.cartState).loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.activeProductVariant.stock > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.activeProductVariant.stock === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("variant-title col-md-4 ", ctx_r3.activeTab === 0 ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("product-detail-title col-md-4 ", ctx_r3.activeTab === 1 ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("delivery-title col-md-4 ", ctx_r3.activeTab === 2 ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.activeTab === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.activeTab === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.activeTab === 2);
} }
class ProductDetailComponent {
    constructor(router, route, locStrat, productService, store) {
        this.router = router;
        this.route = route;
        this.locStrat = locStrat;
        this.productService = productService;
        this.store = store;
        this.innerLoading = true;
        this.isPopState = false;
        this.fetchError = null;
        this.activeTab = 0;
    }
    ngOnInit() {
        this.locStrat.onPopState(() => {
            this.isPopState = true;
        });
        this.routerSubscription = this.router.events.subscribe(event => {
            // Scroll to top if accessing a page, not via browser history stack
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && !this.isPopState) {
                window.scrollTo(0, 0);
                this.isPopState = false;
            }
            // Ensures that isPopState is reset
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.isPopState = false;
            }
        });
        this.cartState = this.store.select('cart');
        this.paramSubscription = this.route.params.subscribe((params) => {
            this.productUrl = params.productUrl;
            this.innerLoading = true;
            this.productService.getFullProduct(this.productUrl)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
                this.fetchError = error;
                this.innerLoading = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }))
                .subscribe((data) => {
                this.product = data;
                this.variant = params.variant ? params.variant : this.product.productVariantDetails[0].id;
                this.activeProductVariant = data.productVariantDetails.find(p => p.id === Number(this.variant));
                if (!this.activeProductVariant) {
                    this.activeProductVariant = data.productVariantDetails[0];
                }
                this.innerLoading = false;
            });
        });
    }
    ngOnDestroy() {
        if (this.paramSubscription) {
            this.paramSubscription.unsubscribe();
        }
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }
    setActiveTab(tab) {
        this.activeTab = tab;
    }
    setActiveVariant(variantId) {
        this.router.navigate(['/detail/', this.productUrl, variantId]);
    }
    addToCart(amountElement) {
        const amount = amountElement.value;
        const reg = new RegExp('^[0-9]+$');
        if (!reg.test(amount) || parseInt(amount) === 0) {
            alert('Please enter a valid amount.');
            return;
        }
        this.store.select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(data => {
            if (data.authenticated) {
                this.store.dispatch(new _store_cart_cart_actions__WEBPACK_IMPORTED_MODULE_2__["AddToCart"]({ id: this.activeProductVariant.id, amount }));
            }
            else {
                this.router.navigate(['/login']);
            }
        });
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 6, vars: 4, consts: [[1, "product-detail", "container"], [4, "ngIf"], ["class", "loader", 4, "ngIf"], ["style", "min-height: 50vh", 4, "ngIf"], ["class", "row pt-5", 4, "ngIf"], [1, "alert-warning"], [1, "loader"], [2, "min-height", "50vh"], [1, "row", "pt-5"], [1, "col-md-7"], [1, "product-img", "img-responsive", 3, "src", "alt"], [1, "col-md-4", "mr-auto"], [1, "product-description"], [1, "category"], [1, "name"], [1, "description"], [1, "row"], [1, "amount", "col-md-6"], ["type", "number", "placeholder", "-", "min", "1", "value", "1"], ["amount", ""], [1, "price", "col-md-6"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "add", "col-md-12"], ["class", "loader", "style", "top:0; left: 25%", 4, "ngIf"], ["class", "btn btn-info", 3, "disabled", "display", "click", 4, "ngIf"], ["class", "btn out-stock", 3, "disabled", "display", 4, "ngIf"], [3, "click"], ["class", "variant-info col-md-12", 4, "ngIf"], ["class", "product-detail-info col-md-12", 4, "ngIf"], ["class", "delivery-info col-md-12", 4, "ngIf"], [1, "col-md-12"], ["class", "alert-warning", 4, "ngIf"], [1, "loader", 2, "top", "0", "left", "25%"], [1, "btn", "btn-info", 3, "disabled", "click"], [1, "btn", "out-stock", 3, "disabled"], [1, "variant-info", "col-md-12"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "src", "alt"], [1, "product-detail-info", "col-md-12"], [1, "color", 3, "ngStyle"], [1, "delivery-info", "col-md-12"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_2_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_div_3_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailComponent_div_4_Template, 44, 26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-related");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fetchError != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.innerLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.innerLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product != null && ctx.innerLoading == false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _related_related_component__WEBPACK_IMPORTED_MODULE_8__["RelatedComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".product-detail[_ngcontent-%COMP%] {\n  position: relative;\n  top: 150px;\n}\n.product-detail[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 450px;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: gray;\n  background-color: #e1e8ee;\n  border-radius: 8px;\n  padding: 5px;\n  padding-left: 8px;\n  padding-right: 8px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-weight: 300;\n  font-size: 28px;\n  color: #43484d;\n  letter-spacing: -2px;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  min-height: 8vh;\n  font-size: 14px;\n  font-weight: 300;\n  color: #86939e;\n  line-height: 24px;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: gray;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  text-align: center;\n  width: 60%;\n  border: 2px solid #e1e8ee;\n  border-radius: 10px;\n  font-size: 14px;\n  color: #5e6977;\n  background-color: #fff;\n  cursor: pointer;\n  transition: all 0.5s;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   .out-stock[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  color: gray;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 100%;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .variant-title[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-detail-title[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .delivery-title[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0;\n  margin-top: 15px;\n  color: gray;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .variant-title.active[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-detail-title.active[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .delivery-title.active[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: underline;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .delivery-info[_ngcontent-%COMP%] {\n  height: 15vh;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .delivery-info[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .delivery-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .delivery-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .delivery-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .delivery-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .delivery-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: gray;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-detail-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .delivery-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .variant-info[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  overflow-x: scroll;\n  cursor: pointer;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .variant-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .variant-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .variant-info[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.product-detail[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .delivery-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:first-child)   span[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFFSjtBQUNFO0VBQ0UsbUJBQUE7QUFDSjtBQUFJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFFTjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDTjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFOO0FBSU07RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRlI7QUFJTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBRlI7QUFJTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUZSO0FBS007RUFDRSxhQUFBO0FBSFI7QUFPSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUxOO0FBTU07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBSlI7QUFRSTtFQUNFLGdCQUFBO0FBTk47QUFPTTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQUxSO0FBT007RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFMUjtBQVNJOzs7RUFHRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFQTjtBQVNNOzs7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7QUFMUjtBQVNJOztFQUVFLFlBQUE7QUFQTjtBQVFNOztFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTFI7QUFPTTs7OztFQUVFLFNBQUE7RUFDQSxlQUFBO0FBSFI7QUFNUTs7OztFQUVFLGVBQUE7QUFGVjtBQUlROztFQUNFLFdBQUE7QUFEVjtBQUdROztFQUNFLGdCQUFBO0FBQVY7QUFLSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSE47QUFLTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBSFI7QUFLTTtFQUNFLHFCQUFBO0FBSFI7QUFJUTtFQUNFLG1CQUFBO0VBQ0Esb0NBQUE7QUFGVjtBQVNRO0VBQ0UsU0FBQTtBQVBWIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1kZXRhaWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDE1MHB4O1xyXG4gIC5wcm9kdWN0LWltZyB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWU4ZWU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIGNvbG9yOiAjNDM0ODRkO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBtaW4taGVpZ2h0OiA4dmg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgY29sb3I6ICM4NjkzOWU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbW91bnQge1xyXG4gICAgICBkaXYge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMWU4ZWU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICM1ZTY5Nzc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByaWNlIHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hZGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAub3V0LXN0b2NrIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC52YXJpYW50LXRpdGxlLFxyXG4gICAgLnByb2R1Y3QtZGV0YWlsLXRpdGxlLFxyXG4gICAgLmRlbGl2ZXJ5LXRpdGxlIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgY29sb3I6IGdyYXk7XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3QtZGV0YWlsLWluZm8sXHJcbiAgICAuZGVsaXZlcnktaW5mbyB7XHJcbiAgICAgIGhlaWdodDogMTV2aDtcclxuICAgICAgLmNvbG9yIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICAgIHAsXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgZGl2IHtcclxuICAgICAgICBwLFxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZhcmlhbnQtaW5mbyB7XHJcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGVsaXZlcnktaW5mbyB7XHJcbiAgICAgIGRpdjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-detail',
                templateUrl: './product-detail.component.html',
                styleUrls: ['./product-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }]; }, null); })();


/***/ }),

/***/ "xS/P":
/*!*************************************!*\
  !*** ./src/app/auth/auth.routes.ts ***!
  \*************************************/
/*! exports provided: AuthRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutes", function() { return AuthRoutes; });
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin/signin.component */ "5Fl7");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ "SBxm");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "NEkq");
/* harmony import */ var _services_non_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/non-auth-guard.service */ "iGlx");




const AuthRoutes = [
    { path: 'login', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__["SigninComponent"], canActivate: [_services_non_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["NonAuthGuardService"]] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"], canActivate: [_services_non_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["NonAuthGuardService"]] },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"], canActivate: [_services_non_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["NonAuthGuardService"]] }
];


/***/ }),

/***/ "xYIu":
/*!*****************************************************************************************************!*\
  !*** ./src/app/verification/password-forgot-verification/password-forgot-verification.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PasswordForgotVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordForgotVerificationComponent", function() { return PasswordForgotVerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _utils_validators_blank_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils//validators/blank.validator */ "rwfU");
/* harmony import */ var _utils_validators_password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/validators/password.validator */ "ok48");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/auth/auth.actions */ "C9XJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/account.service */ "flj8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");













function PasswordForgotVerificationComponent_div_2_span_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PasswordForgotVerificationComponent_div_2_span_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The password should at least be 6 digits!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PasswordForgotVerificationComponent_div_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PasswordForgotVerificationComponent_div_2_span_8_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PasswordForgotVerificationComponent_div_2_span_8_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.forgotPasswordResetForm.get("newPasswordGroup.newPassword").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.forgotPasswordResetForm.get("newPasswordGroup.newPassword").errors["minlength"]);
} }
function PasswordForgotVerificationComponent_div_2_span_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PasswordForgotVerificationComponent_div_2_span_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The password should at least be 6 digits!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PasswordForgotVerificationComponent_div_2_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PasswordForgotVerificationComponent_div_2_span_12_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PasswordForgotVerificationComponent_div_2_span_12_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.forgotPasswordResetForm.get("newPasswordGroup.newPasswordConfirm").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.forgotPasswordResetForm.get("newPasswordGroup.newPasswordConfirm").errors["minlength"]);
} }
function PasswordForgotVerificationComponent_div_2_span_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The passwords must match!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PasswordForgotVerificationComponent_div_2_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PasswordForgotVerificationComponent_div_2_span_13_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.forgotPasswordResetForm.get("newPasswordGroup").errors != null && ctx_r4.forgotPasswordResetForm.get("newPasswordGroup").errors["noMatch"]);
} }
function PasswordForgotVerificationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create a new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PasswordForgotVerificationComponent_div_2_Template_form_submit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onForgotPasswordResetFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PasswordForgotVerificationComponent_div_2_span_8_Template, 3, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PasswordForgotVerificationComponent_div_2_span_12_Template, 3, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PasswordForgotVerificationComponent_div_2_span_13_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.forgotPasswordResetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxlength", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.forgotPasswordResetForm.get("newPasswordGroup.newPassword").invalid && ctx_r0.forgotPasswordResetForm.get("newPasswordGroup.newPassword").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxlength", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.forgotPasswordResetForm.get("newPasswordGroup.newPasswordConfirm").invalid && ctx_r0.forgotPasswordResetForm.get("newPasswordGroup.newPasswordConfirm").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.forgotPasswordResetForm.get("newPasswordGroup").invalid && ctx_r0.forgotPasswordResetForm.get("newPasswordGroup").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.forgotPasswordResetForm.invalid || ctx_r0.forgotPasswordResetForm.pending);
} }
function PasswordForgotVerificationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " An error occurred. Check if your link is valid and try again. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PasswordForgotVerificationComponent {
    constructor(store, route, router, accountService) {
        this.store = store;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
    }
    ngOnInit() {
        this.authSubscription = this.store.select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(data => data.authenticated))
            .subscribe(data => {
            this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_5__["SignOut"]());
        });
        this.forgotPasswordResetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            newPasswordGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _utils_validators_blank_validator__WEBPACK_IMPORTED_MODULE_3__["checkIfBlankValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
                newPasswordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _utils_validators_blank_validator__WEBPACK_IMPORTED_MODULE_3__["checkIfBlankValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
            }, _utils_validators_password_validator__WEBPACK_IMPORTED_MODULE_4__["passwordMatchCheckValidator"]),
        });
        this.passwordForgotToken = this.route.snapshot.queryParams.token;
        this.accountService.forgotPasswordConfirm(this.passwordForgotToken)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => {
            this.isVerified = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        })).subscribe((data) => {
            this.isVerified = true;
        });
    }
    ngOnDestroy() {
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
        }
    }
    onForgotPasswordResetFormSubmit() {
        this.accountService.forgotPasswordReset(this.passwordForgotToken, this.forgotPasswordResetForm.value.newPasswordGroup.newPassword, this.forgotPasswordResetForm.value.newPasswordGroup.newPasswordConfirm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => {
            alert('An error occurred. Please try again.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }))
            .subscribe(res => {
            alert('Success! \nYou have changed your password. Please login.');
            this.router.navigate(['/login']);
        });
    }
}
PasswordForgotVerificationComponent.ɵfac = function PasswordForgotVerificationComponent_Factory(t) { return new (t || PasswordForgotVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"])); };
PasswordForgotVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordForgotVerificationComponent, selectors: [["app-password-forgot-verification"]], decls: 4, vars: 2, consts: [[1, "password-forgot-verification", "container"], [1, "row"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-6"], [1, "title"], [1, "p-2", "pb-4", 3, "formGroup", "submit"], ["formGroupName", "newPasswordGroup"], [1, "form-group"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "name", "newPassword", "placeholder", "New Password", "formControlName", "newPassword", 1, "form-control", 3, "maxlength"], [4, "ngIf"], ["for", "newPasswordConfirm"], ["type", "password", "id", "newPasswordConfirm", "name", "newPasswordConfirm", "placeholder", "New Password Again", "formControlName", "newPasswordConfirm", 1, "form-control", 3, "maxlength"], ["type", "submit", 1, "btn", "btn-info", 2, "width", "50%", 3, "disabled"], ["class", "alert-danger", 4, "ngIf"], [1, "alert-danger"]], template: function PasswordForgotVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PasswordForgotVerificationComponent_div_2_Template, 16, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PasswordForgotVerificationComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVerified == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVerified == false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: [".password-forgot-verification[_ngcontent-%COMP%] {\n  position: relative;\n  top: 150px;\n}\n.password-forgot-verification[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid #e1e8ee;\n  padding: 20px 30px;\n  color: #5e6977;\n  font-size: 18px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9uL3Bhc3N3b3JkLWZvcmdvdC12ZXJpZmljYXRpb24vcGFzc3dvcmQtZm9yZ290LXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbi9wYXNzd29yZC1mb3Jnb3QtdmVyaWZpY2F0aW9uL3Bhc3N3b3JkLWZvcmdvdC12ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmQtZm9yZ290LXZlcmlmaWNhdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTUwcHg7XHJcbiAgLnRpdGxlIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlOGVlO1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgY29sb3I6ICM1ZTY5Nzc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordForgotVerificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-password-forgot-verification',
                templateUrl: './password-forgot-verification.component.html',
                styleUrls: ['./password-forgot-verification.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "yPKY":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.routes.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailRoutes", function() { return ProductDetailRoutes; });
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail.component */ "vR3N");

const ProductDetailRoutes = [
    { path: 'detail/:productUrl', component: _product_detail_component__WEBPACK_IMPORTED_MODULE_0__["ProductDetailComponent"] },
    { path: 'detail/:productUrl/:variant', component: _product_detail_component__WEBPACK_IMPORTED_MODULE_0__["ProductDetailComponent"] }
];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account/account.module": [
		"jcJX",
		"account-account-module"
	],
	"./cart/cart.module": [
		"v35Q",
		"cart-cart-module"
	],
	"./checkout/checkout.module": [
		"8y03",
		"checkout-checkout-module"
	],
	"./faq/faq.module": [
		"/6n6",
		"faq-faq-module"
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
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map