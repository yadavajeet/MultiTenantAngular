export interface ILoginUser {
    email: string;
    password: string;
}

export class LoginUser implements ILoginUser {
    email: string;
    password: string;

    constructor(){};
}

// export class User implements IUser {
//     id: number;
//     firstname: string;
//     lastname?: string;
//     username: string;
//     email: string;
//     usergroup: any;
//     usergroup_id: number;
//     active: boolean;

//     constructor(user: IUser) {
//         this.id = user.id;
//         this.firstname = user.firstname;
//         this.lastname = user.lastname;
//         this.username = user.username;
//         this.email = user.email;
//         this.username = user.username;
//         this.usergroup_id = user.usergroup_id;
//         this.active = user.active;
//     }
// }