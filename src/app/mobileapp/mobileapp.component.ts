import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.scss']
})
export class MobileappComponent {
  isLoggedIn = false;
  isEquipmentRegistered: boolean = false;
  equipmentId: string = '';
  equipmentName: string = '';
  foundEquipment: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    ){}
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      const id = params['id'] || "noId";  // Provide a default value if no data is passed
      this.equipmentId = id;
      
    });
  }
  login() {
    this.isLoggedIn = true;
    
    if(this.dataService.GetName(this.equipmentId) != "noId"){
      this.equipmentName = this.dataService.GetName(this.equipmentId);
      this.foundEquipment = true;
    }
  }
  
  logout() {
    this.isLoggedIn = false;
    this.isEquipmentRegistered = false;
  }
  registerEquipment() {
    this.isEquipmentRegistered = true;
  }
  
}
