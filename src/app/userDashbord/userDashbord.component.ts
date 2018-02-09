import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Rx';
import {HomeServices} from '../service/home.service';
import {PaymentServices} from '../service/payment.service';
import {SpendServices} from '../service/spend.service';
import { Spend } from '../model/spend';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationServices, UserService } from '../service/authentication.Service';

import { ApocUser } from '../model/apocuser';

@Component ({
    selector: 'app-userDashbord',
    templateUrl: './userDashbord.component.html',
    providers:[
      HomeServices,
      PaymentServices,
      SpendServices,
      AuthenticationServices
    ]
})

export class UserDashbordComponent{
  displayedColumns = ['SrNo', 'ImageUrl', 'Name', 'Purpose', 'spend_dt', 'amount'];
  dataSource: MatTableDataSource<SpendData>;
    totalPayments:number;
    totalSpends:number;
    availableAmount:number;
    totalRegUsers:number;
    userDetail: ApocUser;
    userid:string;
    isLoggedIn$: Observable<boolean>;  
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor(
      private homeService : HomeServices,
      private paymentService : PaymentServices,
      private spendService : SpendServices,
      private router: Router,
      private route: ActivatedRoute,
      private authService : AuthenticationServices,
    ) {
      // Create 100 users
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
/**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    let user = this.authService.getCredentials();
    if (user) {
      this.loadExpensives();
    }
    else {
      this.router.navigate(['/login']);
    }
}

openUserDetails(userid:string){
  this.router.navigate(['/userEditProfile/'+userid]);
}

loadExpensives(){
    const spendArray: SpendData[] = [];
    this.spendService.getSpends().subscribe(spends => {

        for (let i = 0; i < spends.length; i++) {
            var cspend = spends[i];
            var spp = new SpendData();
            spp.SrNo = i+1;
            spp.ImageUrl = "../../assets/img/" + cspend.userid + ".jpg";
            spp.Name = cspend.username;
            spp.Purpose = cspend.purpose;
            spp.spend_dt = cspend.added_dt;
            spp.amount = cspend.amount;
            spp._userid = cspend.userid;
            spendArray.push(spp);
        }

        this.dataSource = new MatTableDataSource(spendArray);
    });
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  logOut() {
   this.authService.logout();
   let defUser = new ApocUser();
   this.authService.setCredentials(defUser);
   this.router.navigate(['/login']);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
    export class SpendData {
      SrNo: number;
    ImageUrl: string;
    Name: string;
    Purpose: string;
    spend_dt: string;
    amount: string;
    _userid:string;
  }
  