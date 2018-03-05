import { Component, OnInit } from '@angular/core';
import { ClientsService, IResponseObject, IClient, CountryService, StorageService, ICasino, CasinoService, MessageService } from '../../shared/index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-clients-clientform',
    templateUrl: './clientform.component.html',
    styleUrls: ['./clientform.component.scss']
})

export class ClientFormComponent implements OnInit {
    constructor(private clientsService: ClientsService, 
                private casinoService: CasinoService, 
                private router: Router, 
                private countryService: CountryService,
                private messageService: MessageService, 
                private storageService: StorageService) { }


    public clientForm = true;
    public casinoForm = false;

    public newcasinoform: FormGroup;
    // public bussinessName: FormControl;
    public casinoName: FormControl;
    public clientName: FormControl;
    public casinoAddressLine1: FormControl;
    public casinoAddressLine2: FormControl;
    public casinoCityId: FormControl;
    public casinoCountryId: FormControl;


    /* Variables for client form */
    public newclientform: FormGroup;
    public bussinessName: FormControl;
    public taxationId: FormControl;
    public addressLine1: FormControl;
    public addressLine2: FormControl;
    public cityId: FormControl;
    public countryId: FormControl;

    public countriesList: {};
    public countriesIdList: string[];

    public temp_citylist: {};
    public temp_cityIdList: string[];

    public temp_client: IClient;

    ngOnInit() {
        this.createFormControlsClient();
        // this.createFormControlsCasino();
        this.createFormClient();
        // this.createFormCasino();
        this.countriesList = this.countryService.countriesCode;
        this.countriesIdList = Object.keys(this.countriesList);
        // console.log('this is for testing ',this.countryService.countriesCode);
        // console.log(Object.keys(this.countriesList));
        // console.log('this are the keys',this.countriesList.keys());
    }

    public createFormControlsClient() {
        this.bussinessName = new FormControl('', Validators.required);
        this.taxationId = new FormControl('', Validators.required);
        this.addressLine1 = new FormControl('', Validators.required);
        this.addressLine2 = new FormControl('');
        this.cityId = new FormControl('', Validators.required);
        this.countryId = new FormControl('', Validators.required);
    }

    public createFormClient() {
        this.newclientform = new FormGroup({
            bussinessName: this.bussinessName,
            taxationId: this.taxationId,
            addressLine1: this.addressLine1,
            addressLine2: this.addressLine2,
            cityId: this.cityId,
            countryId: this.countryId
        });
    }


    public createFormControlsCasino() {
        this.casinoName = new FormControl('', Validators.required);
        this.clientName = new FormControl({ value: this.temp_client.bussinessName, disabled: true })
        this.casinoAddressLine1 = new FormControl('', Validators.required);
        this.casinoAddressLine2 = new FormControl('');
        this.casinoCityId = new FormControl('', Validators.required);
        this.casinoCountryId = new FormControl('', Validators.required);
    }

    public createFormCasino() {
        this.newcasinoform = new FormGroup({
            casinoName: this.casinoName,
            clientName: this.clientName,
            casinoAddressLine1: this.casinoAddressLine1,
            casinoAddressLine2: this.casinoAddressLine2,
            casinoCityId: this.casinoCityId,
            casinoCountryId: this.casinoCountryId
        });
    }



    public onCountrySelect(id: string) {
        // console.log(id);
        this.temp_citylist = this.countryService.getCitiesByCountryId(id);
        this.temp_cityIdList = Object.keys(this.temp_citylist);
        // console.log(s);
    }

    public saveClientLocally() {
        // this.onClientSubmit('local');
        let client: IClient = this.newclientform.value;
        this.temp_client = client;
        this.createFormControlsCasino();
        this.createFormCasino();
        console.log(client);
        this.clientForm = false;
        this.casinoForm = true;
    }

    public onStepBackToClientForm() {
        this.clientForm = true;
        this.casinoForm = false;
    }

    public onExit() {
        this.router.navigateByUrl('/clients');
    }

    public onCasinoSubmit() {
        let casino: ICasino = this.newcasinoform.value;
        console.log(casino);

        // this.casinoService.addCasino(casino).subscribe(
        //     (res:any)=>{
        //         if(res.success){
        //             this.router.navigateByUrl('/clients');
        //         }
        //     },
        //     (rej:any)=>{

        //     }
        // )
    }

    public onClientSubmit(value: string) {
        // console.log(this.newclientform.value);
        let client: IClient = this.newclientform.value;
        this.clientsService.addClient(client).subscribe(
            (res: any) => {
                // console.log('this is the result from the client submit',res);
                if (res.success) {
                    if (value == 'submit') {
                        this.router.navigateByUrl('/clients');
                    } else {
                        this.messageService.showSuccessMessage(res.message);
                    }
                }
            },
            (rej: any) => {
                this.messageService.showFailureMessage(rej);
            }
        )
    }
}
