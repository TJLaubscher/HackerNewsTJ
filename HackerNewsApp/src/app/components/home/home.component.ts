import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  res: any;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://hacker-news.firebaseio.com/v0/topstories.json').subscribe(data => {
      this.res = data;
    })
  }

}
