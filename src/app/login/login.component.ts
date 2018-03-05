import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  ILoginUser,
  LoginUser,
  UserService,
  UserAuthService,
  StorageService,
  MessageService,
  AppdataService,
  ITokenResponseObject
} from '../shared';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  constructor(public router: Router,
    private userService: UserService,
    private userAuthService: UserAuthService,
    private storageService: StorageService,
    private messageService: MessageService,
    private appdata: AppdataService) { }

  public loginuser: ILoginUser = new LoginUser();

  onSubmit() {
    // console.log('this is username password', this.username, this.password);
    console.log(this.loginuser);
    this.userAuthService.login(this.loginuser).subscribe((res: any) => {
        console.log('this is  login form component', res)
        // this.storageService.setAccess(res)
        // this.appdata.setUser(res.user);
        this.storageService.setTokenByKey('isLoggedIn', 'true');
        
        this.storageService.setTokenByKey('user_id',res.data.id);
        this.storageService.setTokenByKey('firstname',res.data.firstName);
        this.storageService.setTokenByKey('lastname',res.data.lastName);
        this.storageService.setTokenByKey('email',res.data.email);
        this.storageService.setTokenByKey('password',res.data.password);

        this.router.navigateByUrl('/dashboard');
        // this.userService.getUserByEmail(this.loginuser.email).subscribe(
        //     (res: any) => {
        //         console.log('this is the IUSER',res);
        //         this.appdata.setUser(res);
        //     }
        // )
        // console.log(this.appdata.getUser());
      }, (rej: any) => {
        // console.log('this is from component error', rej)
        if (rej.status === 401) {
          this.messageService.showFailureMessage('User does not exist. Check your email id.')
          return 1;
        }
        if (rej.status === 400) {
          this.messageService.showFailureMessage('Email Password not match. Check your password.');
          return 1;
        }
        this.messageService.showFailureMessage('Something went wrong. Please Try again later');
      })
  }
}
