export interface IResponseObject {
    data?: any;
    message?: string;
    status: number;
    success: boolean;
}

export class ResponseObject {
    data?: any;
    messsage?: string;
    status: number;
    success: boolean;

    constructor(res: any) {
        this.data = res.data;
        this.messsage = res.message;
        this.status = res.status;
        this.success = res.success;
    }

}