import {Component, ViewChild, Inject,ElementRef} from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs/Rx';
import {HomeServices} from '../service/home.service';
import {PaymentServices} from '../service/payment.service';
import {SpendServices} from '../service/spend.service';
import { Spend } from '../model/spend';
import { AuthenticationServices } from '../service/authentication.Service'

@Component ({
    selector: 'app-expensive',
    templateUrl: './expensive.component.html',
    providers:[
        HomeServices,
        PaymentServices,
        SpendServices,
        AuthenticationServices
      ]
})

export class ExpensiveComponent{
    displayedColumns = ['SrNo', 'ImageUrl', 'Name', 'Purpose', 'spend_dt', 'amount'];
    dataSource: MatTableDataSource<SpendData>;
    isLoggedIn:boolean = false;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor(public dialog: MatDialog,
        private router: Router,
        private homeService : HomeServices,
        private paymentService : PaymentServices,
        private spendService : SpendServices,
        private authService: AuthenticationServices) {
      // Create 100 users

      

      
  
      // Assign the data to the data source for the table to render
      
}

ngOnInit() {
    let user = this.authService.getCredentials();
    if (user)
      this.isLoggedIn = true;
    
    this.loadExpensives();
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
            spendArray.push(spp);
        }

        this.dataSource = new MatTableDataSource(spendArray);
    });
}

openDialog() {
  this.dialog.open(ExpensiveDetailsComponent, {
    data: {
      animal: 'panda'
    }
  });
}

saveExpensive(){
    alert('hu');
}

openExpensive() {
    let dialogRef = this.dialog.open(CreateExpensiveComponent, {
      data: {
        animal: 'panda'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        //this.dialogResult = result;
        this.loadExpensives();
      });
  }

/**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
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

export class SpendData {
    SrNo: number;
  ImageUrl: string;
  Name: string;
  Purpose: string;
  spend_dt: string;
  amount: string;
}

@Component({
  selector: 'app-expensiveDetails',
  templateUrl: 'expensiveDetails.Component.html',
})
export class ExpensiveDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  saveme(){
    alert('huuuuuu');
}
}
@Component({
    selector: 'app-createExpensive',
    templateUrl: 'createExpensive.Component.html',
    providers:[
        SpendServices
      ]
  })
export class CreateExpensiveComponent {
    @ViewChild('closeBtn') closeBtn: ElementRef;
    constructor( @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<CreateExpensiveComponent>,
        private spendService: SpendServices,
        private router: Router, ) { }
    FullName: string;
    ApocId: string;
    ExpAmount: number;
    Purpose: string;

    onClose(): void {
        console.log(this.dialogRef.disableClose); // Returns false
        this.dialogRef.close(); // does not close the dialog
    }
    saveExpensive() {
        let spend = new Spend();

        spend.ApocId = this.ApocId.toUpperCase();
        spend.amount = this.ExpAmount;

        spend.added_dt = Date.now();
        spend.purpose = this.Purpose;
        // userid:string;
        spend.username = this.FullName;
        this.spendService.saveSpend(spend).subscribe(spends => {
            console.log(spends);
            this.router.navigate(['/expensive']);
            this.onClose();
        })
    }
}