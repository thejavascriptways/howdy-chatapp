import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule, Routes} from "@angular/router";
import {AF} from "../providers/af";
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule} from "@angular/forms";
import { RegistrationPageComponent } from './registration-page/registration-page.component';

export const firebaseConfig = {

    apiKey: "AIzaSyDMkhqM9Qc5YXEFMSsbccrhPz-mUdA1tt8",
    authDomain: "howdy-chatapp-5c1a9.firebaseapp.com",
    databaseURL: "https://howdy-chatapp-5c1a9.firebaseio.com",
    projectId: "howdy-chatapp-5c1a9",
    storageBucket: "howdy-chatapp-5c1a9.appspot.com",
    messagingSenderId: "26795758109"
  };


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [ AppComponent, LoginPageComponent, HomePageComponent, RegistrationPageComponent ],
  bootstrap: [ AppComponent ],
  providers: [AF]
})
export class AppModule {}
