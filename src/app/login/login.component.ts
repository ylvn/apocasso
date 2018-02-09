import { Component ,Input,Output, EventEmitter} from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { HomeServices } from '../service/home.service'
import { AuthenticationServices, UserService } from '../service/authentication.Service'
import { Console } from '@angular/core/src/console';
import { UserData } from '../adminDashbord/adminDashbord.component';
import { ChangeDetectorRef } from '@angular/core';
import { AppSettings } from '../app.settings';
import {DataService} from '../service/dataService';
import { ApocUser } from '../model/apocuser';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [HomeServices, AuthenticationServices,DataService]
})

export class LoginComponent{

    @Output() messageEvent = new EventEmitter<string>();
    Username:string;
    Password:string;
    rememberME:boolean;
    firstFormGroup: FormGroup;
    message:string = "test this asshole"
    constructor( 
        private router: Router,
        private _formBuilder: FormBuilder,
        private http: Http,
        private homeService: HomeServices,
        private authService : AuthenticationServices,
        private ref: ChangeDetectorRef,
        private _dataservice: DataService
    ) {
      
       
        
    }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
          address: this._formBuilder.group({
            Username: [null, [Validators.required]],
            Password: [null, [Validators.required]],
          }),
    
        });

        this._dataservice.currentMessage.subscribe(messgae => this.message = messgae);
    }
    
    setUser = () => {
       // this.authService.changeUser("true");
    }

    newMessage(){
        this._dataservice.changeMessage("from login");
    }

    login() {
        
     //   this.newMessage();
      
     //   this.messageEvent.emit(this.message);
        this.homeService.checkUserCredantials(this.Username, this.Password).subscribe(res => {
            console.log(res);
            if(res[0]){
               // this.setUser();
                //this.ref.detectChanges()
                let uservice = new ApocUser();
                uservice = res[0];
                // uservice.UserName=this.Username;
                // uservice.IsAdmin=false;
                // uservice.IsAuthenticated=true;
                // uservice.IsUser= true;
                this.authService.setCredentials(uservice);
                AppSettings.isAdmin = false;
                AppSettings.isUser = true;
              //  this.ref.markForCheck();
                this.authService.login();
                this.router.navigate(['/user/'+res[0]._id]);

            }
            else
            {
                alert("Invalid UserName or Password");
            }
        });
    }
}