import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {FullUserComponent} from './components/full-user/full-user.component';

@NgModule({
  declarations: [AppComponent, UserComponent, HomeComponent, UsersComponent, FullUserComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'link/home', component: HomeComponent
      },
      {
        path: 'link/users', component: UsersComponent, children: [
          {path: ':id', component: FullUserComponent}
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
