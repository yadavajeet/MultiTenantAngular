import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { StorageService } from '../services/storage.service';

@Injectable()

export class LoggedInGuard implements CanActivate {
    constructor(private router: Router, private activatedRoute: ActivatedRoute,private storageService:StorageService) {
        // console.log(this.activatedRoute);
        this.activatedRoute.params.subscribe(res => {
            // console.log(res);
        })

        // console.log(this.router.routerState);
        // console.log(this.router.url)
        console.log('loggedin.guard    .........')

    }

    canActivate() {

        if(!this.storageService.getTokenByKey('isLoggedIn')){
            return true;
        }

        if(this.storageService.getTokenByKey('isLoggedIn').length === 4){
            this.router.navigate(['/dashboard']);
            return false;
        }

        return true;
    }
}
