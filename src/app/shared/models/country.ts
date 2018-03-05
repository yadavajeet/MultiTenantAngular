export interface ICityModel {
    id?: number;
    name?: string;
    district?: string;
    country_code?: string;
}

export interface ICountryModel {
    code?: string;
    name?: string;
    cities?: ICityModel[];
    localName?: string;
    code2?: string;
}
