import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './userform/userform.component';
import { ClientFormComponent } from './clientform/clientform.component';
import { PageformComponent } from './pageform/pageform.component';
import { CasinoFormComponent } from './casinoform/casinoform.component';
// import { } from './casinoform/casinoform.component';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// import { UsersRoutingModule } from './users-routing.module';
// import { UsersComponent } from './users.component';
// import { PageHeaderModule } from './../shared';
// import { AllUsersComponent } from './allusers/allusers.component';
// import { NewUserComponent } from './newuser/newuser.component';
// import { SingleUserComponent } from './singleuser/singleuser.component';
// import { UpdateUserComponent } from './updateuser/updateuser.component';
// import { AppModule } from '../app.module';
// import { UserFormComponent } from '../forms/userform/userform.component'; // now in app module
// import { MultiEmailDirective } from '../shared/index';

// @NgModule({
//     imports: [CommonModule, UsersRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule],
//     declarations: [UsersComponent, AllUsersComponent, NewUserComponent, SingleUserComponent, UpdateUserComponent, MultiEmailDirective]
// })

// export class UsersModule { }

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule],
    declarations: [UserFormComponent, ClientFormComponent, PageformComponent,CasinoFormComponent]
})

export class GameFormsModule { }
