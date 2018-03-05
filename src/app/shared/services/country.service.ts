import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from 'underscore';

import { environment } from '../../../environments/environment';
import { IResponseObject } from '../models/index';
import { ICountryModel } from '../index';

/**
 * Represents a Casino service
 * Deals with all api related to user
 * @Class 
 */

@Injectable()
export class CountryService {
    private host = environment.API_HOST;

    public countries: ICountryModel[];
    // public countries: any[];
    public countriesCode = {};

    constructor(private http: HttpClient) {
        this.getCountries().subscribe((res: ICountryModel[]) => {
            this.countries = res;
            this.getCountriesList();
        })
        console.log('this is from country service', this.host);
    }

    private getCountries() {
        return this.http.get<IResponseObject>('../../assets/data/countries.json').map(res => {
            if (res.success) {
                return res.data;
            }
        })
    }

    private getCountriesList() {
        let countriesList = {};
        _.map(this.countries, function (item) {
            // return new Object(item.code,item.name};
            // let obj = {};
            // obj[item.code] = item.name;
            // return obj;
            countriesList[item.code] = item.name;
        });
        this.countriesCode = countriesList;
        // return countriesList;
        // console.log(countriesList);
        // console.log(this.countries);
        // this.countriesCodeArray = countriesList;
    }

    public getCitiesByCountryId(id: string) {
        let country: ICountryModel[];
        let citiesList = {};
        country = _.filter(this.countries, function (item) {
            return item.code == id;
        })
        // console.log(country)
        // return cities.map(item => item.cities);
        country.map(function (city) {
            city.cities.map(function (item) {
                // citiesList[item.id] = item.name;
                citiesList[item.id] = item.name;
                // console.log('this is the item',item);
            })
        })
        // console.log(citiesList);
        return citiesList;
    }
}
