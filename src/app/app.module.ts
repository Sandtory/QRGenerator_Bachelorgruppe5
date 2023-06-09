import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';
import { UtstyrInfoComponent } from './utstyr-info/utstyr-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    QrCodeComponent,
    NavbarComponent,
    MobileappComponent,
    QrGeneratorComponent,
    UtstyrInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
