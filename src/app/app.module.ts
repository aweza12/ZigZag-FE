import { AuthGuard } from './guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { BottomComponent } from './pages/shared/footer/bottom.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/shared/menu/menu.component';
import { LotsComponent } from './pages/lots/lots.component';
import { YourProfileComponent } from './pages/userPages/your-profile/your-profile.component';
import { YourBidsComponent } from './pages/userPages/your-bids/your-bids.component';
import { YourLotsComponent } from './pages/userPages/your-lots/your-lots.component';
import { YourProductsComponent } from './pages/userPages/your-products/your-products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LotComponent } from './pages/lot/lot.component';
import { CreateBidComponent } from './pages/create-bid/create-bid.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { LotCreateComponent } from './pages/lot-create/lot-create.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BottomComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    LotsComponent,
    YourProfileComponent,
    YourBidsComponent,
    YourLotsComponent,
    YourProductsComponent,
    ProfileComponent,
    LotComponent,
    CreateBidComponent,
    ProductCreateComponent,
    LotCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5000"],
        disallowedRoutes: []
      }
    }),
    NgbModule,
    ReactiveFormsModule      
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
