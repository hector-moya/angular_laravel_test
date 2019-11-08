import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';

// Left Menu

import { ProfileCardComponent } from './components/profile-card/profile-card.component'
import { FindProductComponent } from './components/find-product/find-product.component';
import { ProductCharacteristicsComponent } from './components/product-characteristics/product-characteristics.component';
import { PriceComparisonComponent } from './components/price-comparison/price-comparison.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SearchComponent } from './components/search/search.component';

// Top Menu

import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { ManageStoreComponent } from './components/manage-store/manage-store.component';


import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';

export function onAuthRequired({ oktaAuth, router }) {
  router.navigate(['/login']);
}
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'hero-home',
    component: HeroHomeComponent
  },
  {
    path: 'profile-card',
    component: ProfileCardComponent
  },
  {
    path: 'find-product',
    component: FindProductComponent
  },
  {
    path: 'product-characteristics',
    component: ProductCharacteristicsComponent
  },
  {
    path: 'price-comparison',
    component: PriceComparisonComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'user-menu',
    component: UserMenuComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired }
  },
  {
    path: 'new-user',
    component: NewUserComponent,
  },
  {
    path: 'user-info',
    component: UserInfoComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired }
  },
  {
    path: 'manage-product',
    component: ManageProductComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired }
  },
  {
    path: 'manage-store',
    component: ManageStoreComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired }
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  // Fallback Route
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
