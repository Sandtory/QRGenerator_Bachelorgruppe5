import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'qr-code', component: QrCodeComponent },
  { path: 'mobileapp', component: MobileappComponent },
  { path: 'qr-generator', component: QrGeneratorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
