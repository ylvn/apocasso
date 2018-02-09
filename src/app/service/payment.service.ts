import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Payment } from '../model/payment';
import {AppSettings} from '../app.settings';
@Injectable()
export class PaymentServices{
    constructor(private http:Http){
        console.log('Task Service Initialized..');
    }

    getPayments(){
        return this.http.get(AppSettings.API_ENDPOINT + '/payments')
        .map(res=>res.json());
    }

    getPayment(paymentid){
        return this.http.get(AppSettings.API_ENDPOINT + '/payment/'+paymentid)
        .map(res=>res.json());
    }

    getTotalPayments(){
        return this.http.get(AppSettings.API_ENDPOINT + '/gettotalpayment')
        .map(res=>res.json());
    }


    savePayment(Payment){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        Payment.added_dt = Date.now();
        return this.http.post(AppSettings.API_ENDPOINT + '/payment',JSON.stringify(Payment), {headers:headers})
        .map(res=>res.json());
    };

    
    makePayment(data){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppSettings.API_ENDPOINT + '/makepayment',JSON.stringify(data), {headers:headers})
        .map(res=>res.json());
    };

    paymentstatus(data){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppSettings.API_ENDPOINT + '/paymentstatus',JSON.stringify(data), {headers:headers})
        .map(res=>res.json());
    };
}