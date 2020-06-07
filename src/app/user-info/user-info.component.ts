import { Component, OnInit } from '@angular/core';

declare const gapi: any;

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.googleInit()
  }

  public auth2: any;
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '1017316307352-iimaptjcr2bmdtgbjq4hbcqamkofap3o.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
    });
  }

  public checkUserInfo() {
    if (this.auth2.isSignedIn.get()) {
      var profile = this.auth2.currentUser.get().getBasicProfile();
      console.log('ID: ' + profile.getId());
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    } else {
      console.log('No user is logged');

    }
  }

}
