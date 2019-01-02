import { Component, enableProdMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularTokenService} from 'angular-token';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = 'app works!';
  books;

  constructor(private http: HttpClient,
              private tokenService: AngularTokenService) {

    // this.tokenService.signIn({ login: 'user@example.com', password: 'monkey67' }).subscribe(
    //   res => {
    //     console.log('auth response:', res);
    //   },
    //   err => {
    //     console.error('auth error: ', err);
    //   }
    // );
    // http.get(environment.serverUrl + '/books.json')
    //   .subscribe(res => {
    //     console.log(res);
    //     this.books = res;
    //   });
  }
}
