import { Component, OnInit, NgZone } from '@angular/core';

declare const gapi: any;


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  public auth2: any;

  constructor(private _ngZone: NgZone) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.googleInit();
  }

  public googleInit() {
    this._ngZone.run(() => {
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '1017316307352-iimaptjcr2bmdtgbjq4hbcqamkofap3o.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.attachSignin(document.getElementById('googleBtn'));
      })
    });
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        console.log('User logged');
        let id_token = googleUser.getAuthResponse();
        console.log(id_token);
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  public signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

}
