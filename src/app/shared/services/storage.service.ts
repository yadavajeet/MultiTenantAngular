import { Injectable } from "@angular/core";
import { ITokenResponseObject } from '../models/index';

@Injectable()
export class StorageService {

    constructor() { }

    public setAccess(obj:ITokenResponseObject) {
         localStorage.setItem('access_token',obj.access_token);   // Access Token 
         localStorage.setItem('token_type',obj.token_type);     // Token Type information
         localStorage.setItem('refresh_token',obj.refresh_token);  // Refresh Token: if the access expires
         localStorage.setItem('scope',obj.scope);          // Scope : "read write trust"
        //  localStorage.setItem('authorities',obj.authorities.toString());    // Authorities: Array of authorities object
     }

     public  updateAccess(obj:any){
         localStorage.setItem('access_token',obj.access_token);
         localStorage.setItem('refresh_token',obj.refresh_token);
     }

     public  removeAccess(){
         localStorage.clear();
     }

     public  getAccess(){}

     public  getTokenByKey(key:string){
         return localStorage.getItem(key);
     }

     public  setTokenByKey(key:string,value:string){
         // console.log('this is key value pair',key+' '+value);
         localStorage.setItem(key,value);
     }

 }