import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// const Rx = require('rxjs');
import 'rxjs/add/operator/map';

import { IResponseObject, IUser,ILoginUser } from '../models/index'
import { environment } from '../../../environments/environment';
import { LoginBaseService } from './loginbase.service';

/**
 * Represents a user service
 * Deals with all api related to user
 * @Class 
 */

 @Injectable()
 export class UserAuthService extends LoginBaseService {

     private host = environment.API_HOST;

     constructor(protected http: HttpClient) {
         super(http);
     }

    /**
     * user login function
     * use to login 
     * @function
     */

     public login(user: ILoginUser) {
         // console.log('this is user form auth service', user);
         // let authuser = environment.AUTH_USER;
         // let authpass = environment.AUTH_PASS;
         let path = "/v1/login";
         // let token = btoa(authuser + ":" + authpass);
         const httpOptions = {
             headers: new HttpHeaders({
                 'Content-Type': 'application/json',
                 'X-TenantID':'TenantOne'
             })
         };
         // let payload = {
         //     "username": user.email,
         //     "password": user.password,
         //     "grant_type": "password"
         // }
         // console.log('this is login call',httpOptions,user);
         return this.http.post(this.host + path,user,httpOptions)
         .map((res:any)=>{return res;})
         .catch(this.handleError);
     }

    /**
     * token refresh function : Assuming there will be new route for token refreshing
     */

     public tokenRefresher(refresh_token:string){
         console.log('this is tokenRefresher from auth service',refresh_token);

         let path = "/oauth/refresh";

         let authuser = environment.AUTH_USER;
         let authpass = environment.AUTH_PASS;
         let token = btoa(authuser + ":" + authpass);

         const httpOptions = {
             headers: new HttpHeaders({
                 'Content-Type': 'application/json',
                 'Authorization': "Basic " + token
             })
         };

         return this.http.post(this.host + path,refresh_token,httpOptions)
         .map(this.handleMap)
         .catch(this.handleError)
     }
 }