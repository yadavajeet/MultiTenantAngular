import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// const Rx = require('rxjs');
import 'rxjs/add/operator/map';

import { IResponseObject, IUser } from '../models/index'
import { environment } from '../../../environments/environment';
import { BaseService } from './base.service';

/**
 * Represents a user service
 * Deals with all api related to user
 * @Class 
 */

@Injectable()
export class InviteService extends BaseService {

    private host = environment.API_HOST;

    constructor(protected http: HttpClient) {
        super(http);
    }

    /**
     * add user by token
     */

    public addUserByToken(token: string) {
        let path = "oauth/newuser/verify";
        return this.http.get(this.host + path + '/' + token)
            .map(this.handleMap)
            .catch(this.handleError);
    }

    public handleInvite(res: any) {
        let tempres: any = {};
        tempres.success = res.success;
        tempres.status = res.status;
        tempres.data = {};
        tempres.data['sentInvites'] = res.sentInvites;
        tempres.data['unsentInvites'] = res.unsentInvites;
        return tempres;
    }

    public invite(users: string[]) {
        console.log(users);
        const invitelist = {
            'invitees': users
        }
        let path = '/invite'
        return this.http.post(this.host + path, invitelist)
            .map(this.handleInvite)
            .map(this.handleMap)
            .catch(this.handleError)
    }

    public inviteUserCheck(token:string){
        console.log(token);
        let path = '/invite';
        return this.http.get(this.host + path + '/' + token)
            .map(this.handleMap)
            .catch(this.handleError)
    }

    public invitedAddUser(token:string,user: IUser) {
        let obj:any  = {};
        obj.activation_token = token;
        obj.user = user;
        let path = "/invite/add";
        return this.http.post(this.host + path, obj)
            .map(this.handleMap)
            .catch(this.handleError);
    }
}