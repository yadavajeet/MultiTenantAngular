import { Component, OnInit } from '@angular/core';
import { ClientsService, IResponseObject, IClient, CountryService, ICasino } from '../../shared/index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormArray } from '@angular/forms/src/model';

@Component({
    selector: 'app-casinos-casinoform',
    templateUrl: './casinoform.component.html',
    styleUrls: ['./casinoform.component.scss']
})

export class CasinoFormComponent implements OnInit {
    constructor(private clientsService: ClientsService, private router: Router, private countryService: CountryService) { }


    public newcasinoform: FormGroup;
    public bussinessName: FormControl;
    public casinoName: FormControl;
    public casinoAddressLine1: FormControl;
    public casinoAddressLine2: FormControl;
    public casinoCityId: FormControl;
    public casinoCountryId: FormControl;

    public casinoForm:boolean = true;

    public countriesList: {};
    public countriesIdList: string[];

    public temp_citylist : {};
    public temp_cityIdList: string[];

    ngOnInit() {
        this.createFormControls();
        this.createForm();
        this.countriesList = this.countryService.countriesCode;
        this.countriesIdList = Object.keys(this.countriesList);
        // console.log('this is for testing ',this.countryService.countriesCode);
        // console.log(Object.keys(this.countriesList));
        // console.log('this are the keys',this.countriesList.keys());
    }

    public createFormControls() {
        this.casinoName = new FormControl('', Validators.required);
        this.casinoAddressLine1 = new FormControl('', Validators.required);
        this.casinoAddressLine2 = new FormControl('');
        this.casinoCityId = new FormControl('', Validators.required);
        this.casinoCountryId = new FormControl('', Validators.required);
    }

    public createForm() {
        this.newcasinoform = new FormGroup({
            casinoName: this.casinoName,
            casinoAddressLine1: this.casinoAddressLine1,
            casinoAddressLine2: this.casinoAddressLine2,
            casinoCityId: this.casinoCityId,
            casinoCountryId: this.casinoCountryId
        });
    }

    public onCountrySelect(id:string){
        this.temp_citylist = this.countryService.getCitiesByCountryId(id);
        this.temp_cityIdList = Object.keys(this.temp_citylist);
    }

    public createCasinoRequest(formvalues:any){
        let temp:any = {};
        temp.name = this.newcasinoform.value.casinoName;
        temp.addressLine1 = this.newcasinoform.value.casinoAddressLine1;
        temp.addressLine2 = this.newcasinoform.value.casinoAddressLine2;
        temp.countryId = this.newcasinoform.value.casinoCountryId;
        temp.cityId = this.newcasinoform.value.casinoCityId;
        return temp;
    }

    public onSubmit() {
        let casino:ICasino = this.createCasinoRequest(this.newcasinoform.value);
        console.log(casino);
        // let client: IClient = this.newcasinoform.value;
        // this.clientsService.addClient(client).subscribe((res: boolean) => {
        //     if (res) {
        //         this.router.navigateByUrl('/clients');
        //     }
        // }, rej => { })
        
    }
}
