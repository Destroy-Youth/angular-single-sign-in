import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
