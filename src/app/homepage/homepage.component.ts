import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QrCodeService } from '../qr-code.service';





@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  userUrl = '';

  constructor(
    private router: Router,
    private qrCodeService: QrCodeService,
    ) { }

    generateQRCode(): void {
      this.router.navigate(['/qr-code'], { queryParams: { data: this.userUrl } });
    }
  
  

}
