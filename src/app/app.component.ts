import { Component, enableProdMode } from '@angular/core';
import {HttpClient} from '@angular/common/http';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  books;

  constructor(private http: HttpClient) {
    // http.get('http://fenix:3000/books')
    //   .subscribe(res => {
    //     console.log(res);
    //     this.books = res;
    //   });
  }
}
