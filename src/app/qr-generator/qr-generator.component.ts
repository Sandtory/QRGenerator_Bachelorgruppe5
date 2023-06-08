import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.scss']
})
export class QrGeneratorComponent {
  userUrl = '';

  constructor(private router: Router) {}

  generateQRCode(): void {
    this.router.navigate(['/qr-code'], { queryParams: { data: this.userUrl } });
  }

}
