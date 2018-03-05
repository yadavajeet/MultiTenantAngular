import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { environment } from '../../../environments/environment'
import { IResponseObject } from '../models/index';
import { BaseService } from './base.service';
// import { ICasino } from '../models/response/index';

/**
 * Represents a Casino service
 * Deals with all api related to user
 * @Class 
 */

@Injectable()
export class CasinoService extends BaseService {

    private host = environment.API_HOST;
    
    constructor(protected http: HttpClient) {
        super(http);
        // console.log('this is from casino service',this.host);
    }

    public getAllCasinos() {
        let path = "/casino/list";
        return this.http.get(this.host + path)
            .map(this.handleMap)
            .catch(this.handleError);
    }


    /**
     * TODO: Add model for casino parameter
     * @param casino 
     */

    public addCasino(casino: any) {
        let path = "/casino/add";
        return this.http.post(this.host + path, casino)
            .map(this.handleMap)
            .catch(this.handleError);
    }

    public deleteCasino(casinoId: number) {
        let path = "/casino/delete";
        return this.http.delete(this.host + path + '/' + casinoId)
            .map(this.handleMap)
            .catch(this.handleError);
    }
}