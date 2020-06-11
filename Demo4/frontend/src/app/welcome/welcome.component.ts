import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.html',
  styles: []
})
export class WelcomeComponent implements OnInit {
  greeting: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  fnClick()
  {
    this.http.get("http://localhost:4000/api/greeting/Guest").subscribe(data => {
      class response {
        message: string
      };
      let responseData:any = new response();
      responseData = data;
        console.log(data);
        this.greeting = responseData.message;
      }
    )
  }
}
