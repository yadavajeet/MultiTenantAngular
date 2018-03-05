import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

// Import Containers
import {
	FullLayoutComponent,
	SimpleLayoutComponent
} from './containers';

import {
	LoggedInGuard,
	AuthGuard
} from './shared';

import { UserFormComponent } from './forms/userform/userform.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{
		path: '', component: SimpleLayoutComponent,
		children: [
			{
				path: 'login',
				component: LoginComponent
			}
		],
		canActivate: [LoggedInGuard]
	},
	{
		path: '', component: FullLayoutComponent, data: { title: 'Home' },
		children: [
			{
				path: 'dashboard',
				loadChildren: './dashboard/dashboard.module#DashboardModule'
			},
			{
				path: 'forms',
				component: UserFormComponent
			}
		],
		canActivate: [AuthGuard]
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
