import { Component, OnInit, AfterContentInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService, IUser, InviteService, MessageService, StorageService } from '../../shared/index';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-users-newuser',
	templateUrl: './userform.component.html',
	styleUrls: ['./userform.component.css']
})
export class UserFormComponent implements OnInit, AfterContentInit, DoCheck {

	public myform: FormGroup;
	public firstname: FormControl;
	public lastname: FormControl;
	public email: FormControl;
	public username: FormControl;
	public password: FormControl;
	// public usergroup_id: FormControl;

	/* variable to get mail */
	public token: string;
	// public token_email: string = "amit.agarwal@gmail.com";

	/* page control */
	public successMessage: boolean = false;
	public user_id: number;

	public user_firstname;
	public user_lastname;
	public user_email;

	constructor(private userService: UserService, private router: Router, private activeRoute: ActivatedRoute, private inviteService: InviteService, private messageService: MessageService, private storageService:StorageService) {
	
	this.user_firstname = this.storageService.getTokenByKey('firstname');
	this.user_lastname = this.storageService.getTokenByKey('lastname');
	this.user_email = this.storageService.getTokenByKey('email');

	}

	ngAfterContentInit() {
		// console.log('this ng after content init works')
	}

	ngDoCheck() {
		// console.log('this is from do check')
		// console.log('do check')
		// if (this.user_email) {
		// 	// console.log(this.email);
		// 	this.email.patchValue(this.user_email);
		// }
	}

	ngOnInit() {
		// this.activeRoute.params.subscribe(
		// 	(res) => {
		// 		this.token = res.id;
		// 		this.inviteService.inviteUserCheck(this.token).subscribe(
		// 			(res: any) => {
		// 				console.log('this is from userform', res);
		// 				if (res.data) {
		// 					console.log('this is email', res.data.email);
		// 					this.token_email = res.data.email;
		// 					return 1;
		// 				}
		// 			},
		// 			(rej: any) => {
		// 				console.log('i am error from userform ', rej);
		// 			}
		// 		)
		// 		console.log('i am res from userform component', res);
		// 	},
		// 	(rej) => {
		// 		console.log('this is the error of token not found');
		// 	})
		this.createFormControls();
		this.createForm();
	}

	public updateFormControl() {
		this.email = new FormControl({ value: this.user_email, disabled: true });
	}

	public createFormControls() {
		console.log('thse are valued',this.user_firstname,this.user_lastname,this.user_email);
		this.firstname = new FormControl({value: this.user_firstname,disabled:false}, Validators.required);
		this.lastname = new FormControl({value: this.user_lastname,disabled:false}, Validators.required);
		this.email = new FormControl({ value: this.user_email, disabled: true }, [
			Validators.required,
			Validators.pattern('[^@]*@[^@]*')
		]);
		// this.password = new FormControl('', [
		// 	Validators.required,
		// 	Validators.minLength(8)
		// ]);
		// this.usergroup_id = new FormControl('', Validators.required);
		// this.username = new FormControl('', Validators.required);
	}

	public createForm() {
		this.myform = new FormGroup({
			firstname: this.firstname,
			lastname: this.lastname,
			email: this.email
		});
		// password: this.password,
		// usergroup_id: this.usergroup_id
		// username: this.username,		// 

	}

	public createValue(value:any){
		let tempuser = value;
		let user:any = {};
		user.firstName = tempuser.firstname;
		user.lastName = tempuser.lastname;
		return user;
	}

	public onSubmit() {
		let user: any = this.createValue(this.myform.value);
		// user.usergroup_id = 1;  // TODO: Add the value here for usergroud_id
		user.email = this.user_email;
		user.id = this.storageService.getTokenByKey('user_id');
		user.password = this.storageService.getTokenByKey('password');
		
		// TODO: Ask which API Point to use for adding user.

		// this.userService.addUser(this.token, user).subscribe((res: any) => {
		// 	if (res.status) {
		// 		this.messageService.showSuccessMessage('User Added Successfully');
		// 		this.myform.reset();
		// 		this.successMessage = true;
		// 		// this.router.navigateByUrl('/login');
		// 	}
		// 	if (!res) {
		// 		this.messageService.showFailureMessage('Not Able to AddUser');
		// 		// TODO : Add the error message here
		// 	}
		// }, (rej: any) => {
		// 	// console.log('this is rej object',rej);
		// 	this.messageService.showFailureMessage(rej);
		// })

		// console.log(user);

		this.userService.updateUser(user).subscribe(
			(res:any)=>{
				console.log('successfully update',res);
				this.messageService.showSuccessMessage('Successfully Updated');
				this.storageService.setTokenByKey('firstname',user.firstName);
				this.storageService.setTokenByKey('lastname',user.lastName);
				this.router.navigateByUrl('/dashboard');
			},
			(rej:any)=>{
				console.log('error in update',rej);
				this.messageService.showFailureMessage('Unable to update');
			}
		)


		// this.inviteService.invitedAddUser(this.token, user).subscribe((res: any) => {
		// 	if (res.status) {
		// 		this.messageService.showSuccessMessage('User Added Successfully');
		// 		this.myform.reset();
		// 		this.successMessage = true;
		// 		// this.router.navigateByUrl('/login');
		// 	}
		// 	if (!res) {
		// 		this.messageService.showFailureMessage('Not Able to AddUser');
		// 		// TODO : Add the error message here
		// 	}
		// }, (rej: any) => {
		// 	// console.log('this is rej object',rej);
		// 	this.messageService.showFailureMessage(rej);
		// })

		console.log('This is UserFormComponent onSubmit Method')
	}
}
