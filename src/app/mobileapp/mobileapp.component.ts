import { Component } from '@angular/core';

@Component({
  selector: 'app-mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.scss']
})
export class MobileappComponent {
  isLoggedIn = false;
  isEquipmentRegistered: boolean = false;

  login() {
    this.isLoggedIn = true;
  }
  
  logout() {
    this.isLoggedIn = false;
    this.isEquipmentRegistered = false;
  }
  registerEquipment() {
    this.isEquipmentRegistered = true;
  }
  
}
