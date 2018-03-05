import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';


@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(){}
  
  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{

    // let loginUrl = "http://54.244.59.11:8080/apis/oauth/token";
    let loginUrl = environment.API_HOST+'/oauth/token';
    let countriesUrl = '';
    
    // console.log("intercepted request...");
    
    if(req.url == loginUrl){
      
      //send the newly created request
      console.log("no header added cause this is token auth call");
      return next.handle(req);
    }

    //send the newly created request
    // console.log("Sending request with new header now ...");

   
    // TODO: ADD this code when the login backend is done

    // let access_token = localStorage.getItem('access_token');             // TODO: Add storage service here to get access_token

    // let authorizationHeader = "Bearer " + access_token
    // req = req.clone({setHeaders:{"Authorization":authorizationHeader}});

    return next.handle(req)
  }
}