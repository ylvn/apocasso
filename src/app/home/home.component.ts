import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HomeServices } from '../service/home.service'
import { PaymentServices } from '../service/payment.service'

import 'rxjs/add/operator/map';
import { ApocUser } from '../model/apocuser';
import { AppSettings } from '../app.settings';
import { stringify } from '@angular/core/src/util';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [HomeServices, PaymentServices]
})

export class HomeComponent {
  title = 'app';
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  response: string;
  headers: Headers;
  options: RequestOptions;
  fullName: string;
  fatherName: string;
  userName: string;
  password: string;
  aadharNo: string;
  DOB: string;
  Gender: string;
  addr1: string;
  addr2: string;
  dist: string;
  state: string;
  pin: number;
  mobile: number;
  referenceId: string;
  CurrentFile: File;
  ImageSource: string;
  filesToUpload: Array<File>;
  Cast: string;
  message: string;
  mkey: string;
  productInfo: string;
  txnid: string;
  amount: string
  id: string;
  email: string;
  phone: string;
  lastName: string;
  firstName: string;
  surl: string;
  hash: string;
  url: string;
  apocid: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private _formBuilder: FormBuilder,
    private http: Http,
    private homeService: HomeServices,
    private paymentService: PaymentServices
  ) {
    this.filesToUpload = [];
    AppSettings.isUser = true;
    AppSettings.isAdmin = false;
    this.homeService.getUsers()
      .subscribe(users => {
        console.log(users);
      });
    this.apocid = 'APOC0000001';
    this.homeService.getApocID()
      .subscribe(res => {
        this.apocid = res.ApocID;
      });


  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      address: this._formBuilder.group({
        street: [],
        fullname: [null, [Validators.required]],
        fatherName: [null, [Validators.required]],
        emailFormControl: [null, [Validators.required]],
        password: [null, [Validators.required]],
        aadhar: [null, [Validators.required]],
        dob: [null, [Validators.required]],
      }),

    });

    this.secondFormGroup = this._formBuilder.group({
      address2: this._formBuilder.group({
        addr1: [null, [Validators.required]],
        addr2: [null, [Validators.required]],
        dist: [null, [Validators.required]],
        state: [null, [Validators.required]],
        pin: [null, [Validators.required]],
        mobile: [null, [Validators.required]],
        refId: [null, [Validators.required]],
        marker: [null, [Validators.required]],
      }),


    });

    this.thirdFormGroup = this._formBuilder.group({
      payment: this._formBuilder.group({
        marker: [null, [Validators.required]]
      }),

    });
  }


  public upload(filename: string) {
    //this.makePayment();
    var formData = new FormData();
    var files: Array<File> = this.filesToUpload;
    var extention = this.filesToUpload[0]['name'].split('.')[1];
    formData.append("uploads[]", files[0], (filename + "." + extention));
    //this.filesToUpload[0]['name'] = filename
    this.http.post(AppSettings.Server + 'upload', formData)
      //.map(files => files.json())
      .subscribe(files => {
        this.filesToUpload = null;
        console.log('files', files);
        this.makePayment(filename);
      }
      );
  }

  public saveUser() {
    event.stopPropagation();
    let apocuser = new ApocUser();

    apocuser.FullName = this.fullName;
    apocuser.FatherName = this.fatherName;
    apocuser.EmainID = this.userName;
    apocuser.Password = this.password;
    apocuser.AadharCardNum = this.aadharNo;
    apocuser.DOB = this.DOB.toString();
    apocuser.Gender = this.Gender;
    apocuser.Addr1 = this.addr1;
    apocuser.Addr2 = this.addr2;
    apocuser.Distict = this.dist;
    apocuser.State = this.state;
    apocuser.PostalCode = this.pin;
    apocuser.Telephone = this.mobile;
    apocuser.RefID = this.referenceId;
    apocuser.isPaymentMade = false;
    apocuser.URefID = this.makeid(9);
    apocuser.ApocID = this.apocid;
    apocuser.Cast = this.Cast;
    this.homeService.saveUser(apocuser).subscribe(users => {
      console.log(users);
      if (this.filesToUpload) {
        this.upload(users._id);
      }

    });

  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;

    this.CurrentFile = fileInput.target.files[0];

    let reader = new FileReader();
    reader.onload = () => {
      this.ImageSource = reader.result;
    };
    reader.readAsDataURL(this.CurrentFile);
    //this.product.photo = this.filesToUpload[0]['name'];
  }

  makePayment(userid: string) {

    this.mkey = 'aKfpHyXk';
    this.productInfo = 'APOC';
    this.txnid = userid;
    this.amount = '650';
    this.id = '6019692';
    this.email = this.userName
    this.phone = this.phone;
    this.lastName = this.fullName.split(' ')[1];
    this.firstName = this.fullName.split(' ')[0];
    this.surl = AppSettings.API_ENDPOINT + "/paymentstatus";
    this.hash = '';
    //aKfpHyXk|303c4fc75ab0cd76a809|200|test|tset|test@tset.com|test|test|test|test|test||||||
    var data = { preHashString: this.mkey + '|' + this.txnid + '|' + this.amount + '|' + this.productInfo + '|' + this.firstName + '|' + this.email + '|' + this.id + '||||||||||' };
    //var data = { preHashString:  'aKfpHyXk|303c4fc75ab0cd76a809|200|test|tset|test@tset.com|test|test|test|test|test||||||'};
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.paymentService.makePayment(data)
      .subscribe(files => {
        this.hash = files.hash;
        console.log(files);
      })
  }

  makeid(count: number) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < count; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}