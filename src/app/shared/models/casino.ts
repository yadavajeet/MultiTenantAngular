import { IClient } from './client';

export interface ICasino {
    name: string;
    executiveId: number;
    clientsId: number;
    client: IClient;
    addressLine1: string;
    addressLine2?: string;
    cityId: number;
    countryId: string;
    id?: number;
    createdOn?: Date;
    lastModified?: Date;

}

// export class Client implements IClient {
//     id: number;
//     bussinessName: string;
//     taxationId: number;
//     addressLine1: string;
//     addressLine2?: string;
//     cityId: number;
//     countryId: string;

//     constructor(client) {
//         this.id = client.id;
//         this.bussinessName = client.bussinessName;
//         this.taxationId = client.taxationId;
//         this.addressLine1 = client.addressLine1;
//         this.addressLine2 = client.addressLine2;
//         this.cityId = client.cityId;
//         this.countryId = client.countryId;
//     }
// }