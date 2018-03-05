import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService, InviteService } from '../../shared/index';

@Component({
	selector: 'app-pageform',
	templateUrl: './pageform.component.html',
	styleUrls: ['./pageform.component.scss']
})
export class PageformComponent implements OnInit {

	constructor(private router: Router, private activatedRoute: ActivatedRoute, private userAuthService: UserAuthService, private inviteService: InviteService) { }

	public token;
	public tokenexpiredpage: boolean = false;

	ngOnInit() {
		// console.log(this.router.url);
		this.activatedRoute.params.subscribe(res => {
			this.token = res.id;
			this.activatedRoute.params.subscribe(
				(res) => {
					this.token = res.id;
					this.inviteService.inviteUserCheck(this.token).subscribe(
						(res: any) => {
							// console.log('this is from userform', res);
							if (res.data) {
								this.router.navigateByUrl('/invite/user/create/' + this.token);
								return 1;
							} else {
								this.tokenexpiredpage = true;
								return 0;
							}
						},
						(rej: any) => {
							console.log('i am error from userform ', rej);
						}
					)
				},
				(rej) => {
					console.log('this is the error of token not found');
				}
			)
		}
		)
	}

	// public formSubmit() {
	// 	// this.inviteService.addUserByToken(this.token).subscribe(res=>{
	// 	// 	if(res.status){
	// 	// 		this.router.navigateByUrl('/users/create',this.token)
	// 	// 	}
	// 	// },(rej:any)=>{
	// 	// 	this.tokenexpiredpage = true;	
	// 	// })


	// 	// setTimeout(this.callback,1000);

	// 	let res: any = {};
	// 	res.status = false;
	// 	if (res.status) {
	// 		this.router.navigateByUrl('/user/create/' + this.token)
	// 	} else {
	// 		this.tokenexpiredpage = true;
	// 	}
	// }


}
