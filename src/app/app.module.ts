import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    QrCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
