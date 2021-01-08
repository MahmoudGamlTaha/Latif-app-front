import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { FooterModule } from './footer/footer.module';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { GPageNotFoundComponent } from './g-page-not-found/g-page-not-found.component';
import { BrowseModule } from './browse/browse.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { SearchModule } from './search/search.module';
import { ProductService } from './services/product.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { CartEffects } from './store/cart/cart.effects';
import { OrderEffects } from './store/order/order.effects';
import { CartService } from './services/cart.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from './services/order.service';
import { TokenService } from './services/token.service';
import { AuthEffects } from './store/auth/auth.effects';
import { TokenInterceptor } from './services/token.interceptor';
import { AuthGuardService } from './services/auth-guard.service';
import { ShowcaseEffects } from './store/showcase/showcase.effects';
import { AccountService } from './services/account.service';
import { BrowseEffects } from './store/browse/browse.effects';
import { VerificationModule } from './verification/verification.module';
import { NonAuthGuardService } from './services/non-auth-guard.service';
import { UsersComponent } from './admin/users/users.component';
import { PetsComponent } from './admin/pets/pets.component';
import { ShopsComponent } from './admin/shops/shops.component';
import { BlogsComponent } from './admin/blogs/blogs.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { SubscriptionComponent } from './admin/subscription/subscription.component';
import { BlogCategoriesComponent } from './admin/blog-categories/blog-categories.component';
import { PetCategoriesComponent } from './admin/pet-categories/pet-categories.component';
import { RolesComponent } from './admin/roles/roles.component';
import { UserRolesComponent } from './admin/user-roles/user-roles.component';
import { AdminLayoutComponent } from './layout/admin/adminLayout.component';
import { FrontLayoutComponent } from './layout/front/frontLayout.component';


@NgModule({
  declarations: [
    AppComponent,
    GPageNotFoundComponent,
    UsersComponent,
    PetsComponent,
    ShopsComponent,
    BlogsComponent,
    OrdersComponent,
    SubscriptionComponent,
    BlogCategoriesComponent,
    PetCategoriesComponent,
    RolesComponent,
    UserRolesComponent,
    AdminLayoutComponent,
    FrontLayoutComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HomeModule,
    BrowseModule,
    ProductDetailModule,
    // CartModule, lazy loaded module not imported here
    // CheckoutModule, lazy loaded module not imported here
    // AccountModule, lazy loaded module not imported here
    VerificationModule,
    SearchModule,
    AuthModule,
    // FaqModule, lazy loaded module not imported here
    FooterModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CartEffects, OrderEffects, AuthEffects, ShowcaseEffects, BrowseEffects]),
    RouterModule.forRoot(AppRoutes, { useHash: false, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ProductService, CartService, OrderService, TokenService, AuthGuardService, NonAuthGuardService, AccountService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
