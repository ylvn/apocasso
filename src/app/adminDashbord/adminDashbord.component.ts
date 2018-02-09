import {Component, ViewChild} from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs/Rx';
import {HomeServices} from '../service/home.service';
import {PaymentServices} from '../service/payment.service';
import {SpendServices} from '../service/spend.service';
import { AuthenticationServices } from '../service/authentication.Service'

import 'rxjs/add/operator/map';
import { ApocUser } from '../model/apocuser';
import { forEach } from '@angular/router/src/utils/collection';
import { AppSettings } from '../app.settings';
@Component ({
    selector: 'app-admin',
    templateUrl: './adminDashbord.component.html',
    providers:[
      HomeServices,
      PaymentServices,
      SpendServices,
      AuthenticationServices
    ]
})

export class AdminDashbordComponent{
    displayedColumns = ['ID','ImageUrl','FullName', 'AadharCardNum', 'Telephone', 'JionDate', 'Status'];
    dataSource: MatTableDataSource<UserData>;
    totalPayments:number;
    totalSpends:number;
    availableAmount:number;
    totalRegUsers:number;
    userName: string;
    password: string;
    isLoggedIn:boolean = false;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor(
      private router: Router,
      private homeService : HomeServices,
      private paymentService : PaymentServices,
      private spendService : SpendServices,
      private authService: AuthenticationServices
    ) {
      AppSettings.isAdmin = true;
      AppSettings.isUser = false;
      this.paymentService.getTotalPayments()
        .subscribe(tot => {
          this.totalPayments = tot.totalAmount;
          console.log(tot);
          this.spendService.getTotalSpends()
            .subscribe(tot => {
              this.totalSpends = tot[0].total;
              this.availableAmount = this.totalPayments - this.totalSpends;
            });
        });
  
        this.homeService.getUsersCount()
        .subscribe(tot=>{
         this.totalRegUsers = tot;
        });

        this.homeService.getUsers()
        .subscribe(users=>{
          const _userdata: UserData[] = [];
          for (var i = 0; i < users.length; i++) {
           
            var data = new UserData();
            data.ID = i + 1;
            data.ImageUrl = "../../assets/img/"+users[i]._id+".jpg";//"../../uploads/" + users[i]._id + ".jpg";
            data.FullName = users[i].FullName;
            data.AadharCardNum = users[i].AadharCardNum;
            data.JoinDate = users[i].Added_Dt;
            data.Telephone = users[i].Telephone;
            data.Status = users[i].Status;
            data.isPaymentMade = users[i].isPaymentMade;
            data.ApocID = users[i].ApocID;
            data._userid = users[i]._id;
            _userdata.push(data);
          }
    
    
          this.dataSource = new MatTableDataSource(_userdata);
        });
    
        
    }
/**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  openUserDetails(userid:string){
    this.router.navigate(['/userEditProfile/'+userid]);
  }

  ngOnInit() {
    let user = this.authService.getCredentials();
    if (user)
      this.isLoggedIn = true;
  }


  login(){
    this.homeService.checkAdminCredantials(this.userName, this.password).subscribe(res => {
      console.log(res);
      if(res[0]){
        this.isLoggedIn = true;
        res[0].IsAdmin = true;
        this.authService.setCredentials(res[0]);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export class UserData {
  ID: number;
  ImageUrl: string;
  FullName: string;
  AadharCardNum: string;
  Telephone:number;
  JoinDate:Date;
  Status:string;
  ApocID:string;
  isPaymentMade:boolean;
  _userid:string;
}