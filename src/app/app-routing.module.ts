import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarPageComponent } from './components/pages/car-page/car-page.component';
import { CarsPageComponent } from './components/pages/cars-page/cars-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { CustomersComponent } from './components/pages/customers/customers.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { RentalsComponent } from './components/pages/rentals/rentals.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path: 'brand/:brandName',pathMatch: 'full',component: HomepageComponent,},
  {path: 'cars',pathMatch: 'full',component: CarsPageComponent,},
  {path: 'car/:carId',pathMatch: 'full',component: CarPageComponent,},
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'customers', component: CustomersComponent }, 
  { path: 'rentals', component: RentalsComponent }, 
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404 Not Faund' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
