import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angular2-qrcode';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { NotificationComponent } from './notifications/notifications.component';
import { UserDashbordComponent } from './userDashbord/userDashbord.component';
import { LoginComponent } from './login/login.component';
import { AdminDashbordComponent } from './adminDashbord/adminDashbord.component';
import { PaymentsuccesseComponent } from './common/paymentsuccess.component'
import { EditUserProfileComponent } from './editUserProfile/editUserProfile.component';
import { ExpensiveComponent } from './expensive/expensive.component';
import { ExpensiveDetailsComponent } from './expensive/expensive.component';
import { CreateExpensiveComponent } from './expensive/expensive.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    FaqComponent,
    NotificationComponent,
    UserDashbordComponent,
    LoginComponent,
    AdminDashbordComponent,
    PaymentsuccesseComponent,
    EditUserProfileComponent,
    ExpensiveComponent,
    ExpensiveDetailsComponent,
    CreateExpensiveComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    QRCodeModule,
    RouterModule.forRoot([{ path: 'contact', component: ContactComponent },
    { path: 'home', component: HomeComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'notifications', component: NotificationComponent},
    { path: 'user/:id', component: UserDashbordComponent},
    { path: 'login', component: LoginComponent},
    { path: 'admin', component: AdminDashbordComponent},
    { path: 'success/:id', component: PaymentsuccesseComponent},
    { path: 'userEditProfile/:id', component: EditUserProfileComponent },
    { path: 'expensive', component: ExpensiveComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
  ]),
  ],
  entryComponents: [AdminDashbordComponent, ExpensiveComponent, ExpensiveDetailsComponent, CreateExpensiveComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
