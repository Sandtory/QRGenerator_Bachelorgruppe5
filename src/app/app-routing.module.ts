import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { QrCodeComponent } from './qr-code/qr-code.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'qr-code', component: QrCodeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
