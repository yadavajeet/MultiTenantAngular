import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { IClient } from '../models/index';
import { BaseService } from "./base.service";
import { Response } from '@angular/http';

/**
 * Represents a Clients service
 * Deals with all api related to user
 * @Class 
 */

@Injectable()
export class ClientsService extends BaseService {

    private host = environment.API_HOST;

    constructor(protected http: HttpClient) {
        super(http);
        console.log('this is from clients service',this.host);
    }

    public getAllClients() {
        let path = "/client/list";
        return this.http.get(this.host + path)
            .map(this.handleMap)
            .catch(this.handleError);
    }

    public addClient(client: IClient) {
        let path = "/client/add";
        return this.http.post(this.host + path, client)
            .map(this.handleMap)
            .catch(this.handleError);
    }

    public deleteClient(clientId: number) {
        let path = "/client/delete";
        return this.http.delete(this.host + path + '/' + clientId)
            .map(this.handleMap)
            .catch(this.handleError);
    }
}