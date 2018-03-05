import { Component } from '@angular/core';
import { StorageService } from '../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls:['./app-header.component.css']
})
export class AppHeaderComponent {

  constructor(private storageService: StorageService, private router: Router) { }

  onLogOut() {
    this.storageService.setTokenByKey('isLoggedIn', 'false');
    console.log('logout called ');
    this.router.navigateByUrl('/login');
    // console.log('navigated by url');
  }

  onProfileUpdate(){
    this.router.navigateByUrl('/forms');
  }

}
