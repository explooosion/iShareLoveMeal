import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreLoginComponent } from './container/store-login/store-login.component';
import { ChildLoginComponent } from './container/child-login/child-login.component';
import { ChildCheckComponent } from './container/child-check/child-check.component';
import { QrcodeComponent } from './container/qrcode/qrcode.component';
import { ErrorComponent } from './container/error/error.component';

const routes: Routes = [
  { path: 'storelogin', component: StoreLoginComponent },
  { path: 'childlogin', component: ChildLoginComponent },
  { path: 'childcheck', component: ChildCheckComponent },
  { path: 'qrcode', component: QrcodeComponent },
  { path: 'qrcode/:id', component: QrcodeComponent },
  { path: '', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
