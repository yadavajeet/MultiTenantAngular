import { Injectable } from "@angular/core";
// import { Http, Response } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

import { IResponseObject, ResponseObject } from "../models/index";

@Injectable()
export class BaseService {

    constructor(protected http: HttpClient) { }

    protected handleMap(response: Response) {
    	// console.log('i am from base service',response);
    	return new ResponseObject(response);
        // console.log(JSON.parse(response._body));
        // return new ResponseOject(JSON.parse(response._body));
    }

    protected handleError(error: Response) {
    	// console.log('i am from base service error',error);
        return Observable.throw(error.statusText);
    }
}