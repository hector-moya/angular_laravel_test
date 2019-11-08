import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { GlobalPipesModule } from './pipes/global-pipes.module';

import { HeaderComponent } from './_layouts/header/header.component';
import { FooterComponent } from './_layouts/footer/footer.component';
import { NgxFoundationModule } from './shared/ngx-foundation.module';
import { DialogBodyComponent } from './shared/dialog-body/dialog-body.component';
import { MessageService } from './services/message.service';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';

import { FlexLayoutModule } from "@angular/flex-layout";

import { HttpModule } from '@angular/http';


import {
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatChipsModule,
  MatRadioModule,
  MatOptionModule
} from '@angular/material';


import {
  AccordionModule,
  AlertModule,        // Foundation Callouts
  ButtonsModule,
  CarouselModule,     // Foundation Orbit
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
  ModalModule,        // Foundation Reveal
  OffcanvasModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ngx-foundation';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//My components
import { TopBarComponent } from './top-bar/top-bar.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { FindProductComponent } from './components/find-product/find-product.component';
import { ProductCharacteristicsComponent } from './components/product-characteristics/product-characteristics.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ManageStoreComponent } from './components/manage-store/manage-store.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { PriceComparisonComponent } from './components/price-comparison/price-comparison.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SearchComponent } from './components/search/search.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

const oktaConfig = {
  issuer: 'https://dev-981066.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa1ohgyshJJi2B1U357'
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DemoComponent,
    HomeComponent,
    DialogBodyComponent,
    TopBarComponent,
    CalculatorComponent,
    LoginComponent,
    HeroHomeComponent,
    ProfileCardComponent,
    FindProductComponent,
    ProductCharacteristicsComponent,
    NewUserComponent,
    UserInfoComponent,
    ManageStoreComponent,
    ManageProductComponent,
    PriceComparisonComponent,
    AboutUsComponent,
    ContactUsComponent,
    SearchComponent,
    UserMenuComponent,
  ],
  imports: [
    OktaAuthModule.initAuth(oktaConfig),
    BrowserModule,
    HttpModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatRadioModule,
    MatOptionModule,
    GlobalPipesModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AccordionModule,
    AlertModule.forRoot(),        // Foundation Callouts
    ButtonsModule,
    CarouselModule,     // Foundation Orbit
    CollapseModule,
    BsDatepickerModule,
    BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
    ModalModule,        // Foundation Reveal
    OffcanvasModule.forRoot(),
    PaginationModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule,
    NgxFoundationModule,
    BrowserAnimationsModule
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogBodyComponent,
  ]
})
export class AppModule { 

}
