import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {
  constructor() {}

  generateQrCode(url: string): string {
    return url;  // we just return the url since the QR Code library takes care of the rest
  }
}
