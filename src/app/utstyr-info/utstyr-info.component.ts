import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-utstyr-info',
  templateUrl: './utstyr-info.component.html',
  styleUrls: ['./utstyr-info.component.scss']
})
export class UtstyrInfoComponent {
  utstyrId!: string;
  utstyrName!: string;
  utstyrMade: boolean = false;
  


  constructor(private dataService: DataService,private router: Router){}
  UtstyrInfo(){
    this.dataService.SetUtstyrInfo(this.utstyrId,this.utstyrName);
    if(this.dataService.GetName(this.utstyrId) != 'noId')
      {
        this.utstyrMade = true;
      }
  }

  RouteApp(): void {
    this.router.navigate(['/qr-code'], { queryParams: { data: this.utstyrId } });
  }

}
