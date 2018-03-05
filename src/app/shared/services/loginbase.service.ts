import { Injectable } from "@angular/core";
// import { Http, Response } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

import { ITokenResponseObject, TokenResponseObject } from "../models/index";

@Injectable()
export class LoginBaseService {

    constructor(protected http: HttpClient) { }

    protected handleMap(response: Response) {
    	// console.log('i am from login base service',response);
        // return new ResponseObject(response);
        // console.log(JSON.parse(response._body));
        // return new ResponseOject(JSON.parse(response._body));
        // console.log(res);
        return new TokenResponseObject(response);

    }

    protected handleError(error: Response) {
    	// console.log('i am from login base service error',error);
        return Observable.throw(error);
    }
}