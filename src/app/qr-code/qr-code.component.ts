import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
const QRCode = require('qrcode');

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {
  qrCodeDataUrl: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      QRCode.toDataURL(params['data'], { errorCorrectionLevel: 'H' }, (err: Error | null, url: string) => {
        this.qrCodeDataUrl = url;
      });
    });
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  printQrCode(): void {
    let newWindow = window.open('', '_blank');
    
    if (newWindow) {
      newWindow.document.write('<html><head><title>Print QR Code</title></head><body><img src="' + this.qrCodeDataUrl + '"></body></html>');
      newWindow.document.close();
  
      setTimeout(() => {
        newWindow?.print();
        newWindow?.close();
      }, 250);
    }
  }
}