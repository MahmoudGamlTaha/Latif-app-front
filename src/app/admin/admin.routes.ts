import { RouterModule, Routes } from '@angular/router';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { BlogsComponent } from './blogs/blogs.component';
import { OrdersComponent } from './orders/orders.component';
import { PetCategoriesComponent } from './pet-categories/pet-categories.component';
import { PetsComponent } from './pets/pets.component';
import { RolesComponent } from './roles/roles.component';
import { ShopsComponent } from './shops/shops.component';
import { SubscriptionComponent } from './subscription/subscription.component';
export const ADMIN_ROUTES: Routes = [
    { path:'blogs', component:BlogsComponent},
    { path:'blog-categories', component:BlogCategoriesComponent},
    { path:'orders', component:OrdersComponent},
    { path:'pets', component:PetsComponent},
    { path:'pet-categories', component:PetCategoriesComponent},
    { path:'roles', component:RolesComponent},
    { path:'subscription', component:SubscriptionComponent},
    { path:'shops', component:ShopsComponent },

];