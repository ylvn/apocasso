import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Spend } from '../model/spend';
import {AppSettings} from '../app.settings';
@Injectable()
export class SpendServices{
    constructor(private http:Http){
        console.log('Task Service Initialized..');
    }

    getSpends(){
        return this.http.get(AppSettings.API_ENDPOINT + '/spends')
        .map(res=>res.json());
    }

    getSpend(spendid){
        return this.http.get(AppSettings.API_ENDPOINT + '/spend/'+spendid)
        .map(res=>res.json());
    }

    getTotalSpends(){
        return this.http.get(AppSettings.API_ENDPOINT + '/gettotalspend')
        .map(res=>res.json());
    }


    saveSpend(Spend){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        Spend.added_dt = Date.now();
        return this.http.post(AppSettings.API_ENDPOINT + '/spend',JSON.stringify(Spend), {headers:headers})
        .map(res=>res.json());
    };
}