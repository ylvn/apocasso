import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HomeServices } from '../service/home.service'
import { PaymentServices } from '../service/payment.service'

import 'rxjs/add/operator/map';
import { ApocUser } from '../model/apocuser';


@Component({
    selector: 'app-paymentsuccess',
    templateUrl: './success.component.html',
    providers: [HomeServices]
  })


  export class PaymentsuccesseComponent {
    userid:string;
    userDetail:ApocUser;
    constructor(private _formBuilder: FormBuilder,
      private http: Http,
      private homeService: HomeServices,
      private router: Router,
        private route: ActivatedRoute,
      
    ) {
      
      let id = this.route.params.subscribe((params: Params) => {
        this.userid = params['id'];
        console.log(this.userid);
        this.homeService.getUser(this.userid)
            .subscribe(user => {
                console.log(user);
                this.userDetail = user;
            });
    });
  
    }

  }