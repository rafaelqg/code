File: register-form.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToRegisterFormComponent(){
    this.router.navigate(['/register'])
  }

  ngOnInit() {}

}

File: login-form.component.html
<ion-header>
  <ion-navbar>
    <ion-title>Authentication</ion-title>
</ion-navbar>
</ion-header>
<ion-input placeholder="Enter your login"></ion-input>
<ion-input placeholder="Enter your password"></ion-input>
<ion-button fill="outline">Authenticate</ion-button>
<ion-button [routerLink]="['register']">Create an Account</ion-button>
<ion-button (click)="navigateToRegisterFormComponent()">Create an Account / Programatically</ion-button>
