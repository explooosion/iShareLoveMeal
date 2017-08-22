import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreLoginComponent } from './container/store-login/store-login.component';
import { ChildLoginComponent } from './container/child-login/child-login.component';
import { ChildCheckComponent } from './container/child-check/child-check.component';
import { ExchangeResultComponent } from './container/exchange-result/exchange-result.component';
import { ErrorComponent } from './container/error/error.component';
const routes: Routes = [
  { path: 'storelogin', component: StoreLoginComponent },
  { path: 'childlogin', component: ChildLoginComponent },
  { path: 'childcheck', component: ChildCheckComponent },
  { path: 'exchangeresult', component: ExchangeResultComponent },
  { path: '', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
