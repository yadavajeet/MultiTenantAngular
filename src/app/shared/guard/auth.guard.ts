import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UserAuthService } from '../services/user-auth.service';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private activatedRoute: ActivatedRoute,private userauthService:UserAuthService,private storageService:StorageService) {
        this.activatedRoute.params.subscribe(res => {
        })
    }

    canActivate() {

        // TODO: Please comment the below code snippt if the login route is working properly

        console.log('this is from localstorage in auth guard',this.storageService.getTokenByKey('isLoggedIn'))

        this.storageService.getTokenByKey('isLoggesIn')

        if (!this.storageService.getTokenByKey('isLoggedIn')) {
            this.router.navigate(['/login']);
            return false;
        }

        if(this.storageService.getTokenByKey('isLoggedIn').length === 4){

        // Please uncomment this code : If :- This code will use when the login route working properly

            // this.userauthService.tokenRefresher(localStorage.getItem('refresh_token')).subscribe((res:any) => {
            //     // Storage Service If we want to use them directly or we can create other service for data layer
            //     localStorage.setItem('access_token',res.access_token);
            //     localStorage.setItem('refresh_token',res.refresh_token);
            //     return true;
            // },
            // (rej:any) => {
            //     //    TODO: I'll think what to do when we get error
            // })
            return true;
        }

        this.router.navigate(['/login'])
        return false;

    }
}
