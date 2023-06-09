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
  qrParse: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const data = params['data'] || "https://defaultUrl.com";  // Provide a default value if no data is passed
      this.qrParse = data;
      QRCode.toDataURL(data, { errorCorrectionLevel: 'H' }, (err: Error | null, url: string) => {
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
      newWindow.document.write(`
        <html>
          <head>
            <title>Print QR Code</title>
            <style>
              body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;

              }
              img {
                width: 60%;
                height: auto;
              }
            </style>
          </head>
          <body>
            <img src="${this.qrCodeDataUrl}">
          </body>
        </html>
      `);
      newWindow.document.close();
  
      setTimeout(() => {
        newWindow?.print();
        newWindow?.close();
      }, 250);
    }
  }
  navigateToMobileApp() {
    this.router.navigate(['/mobileapp'], { queryParams: { id: this.qrParse } });
  }
  
  
  
}
