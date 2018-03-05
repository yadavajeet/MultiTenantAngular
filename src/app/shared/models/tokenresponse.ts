import { IUser } from "./user";

export interface ITokenResponseObject {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    // authorities: Object[];
    user:IUser;
}

export class TokenResponseObject implements ITokenResponseObject {

    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    user:IUser;
    // authorities: Object[];

    constructor(res:any){
        this.access_token = res.access_token;
        this.refresh_token = res.refresh_token;
        this.token_type = res.token_type;
        this.expires_in = res.expires_in;
        this.scope = res.scope;
        this.user = res.user;
        // this.authorities = res.authorities;
    }
}