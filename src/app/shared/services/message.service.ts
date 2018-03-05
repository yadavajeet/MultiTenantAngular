import { Injectable } from "@angular/core";
import { FlashMessagesService } from 'angular2-flash-messages';
import { ITokenResponseObject } from '../models/index';

@Injectable()
export class MessageService {

    constructor(private flashMessage: FlashMessagesService) { }

    public showSuccessMessage(msg:string){
        this.flashMessage.show(msg,{ cssClass: 'alert-success',timeout:3000 })
    }

    public showFailureMessage(msg:string){
        this.flashMessage.show(msg,{cssClass:'alert-danger',timeout:3000 })
    }

}