import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConsumirJson';
  banderas = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://restcountries.eu/rest/v2/all")
      .subscribe(
        result => {
          this.banderas = result;
        },
        error => {
          console.log('problemas');
        }
      );
  }

}