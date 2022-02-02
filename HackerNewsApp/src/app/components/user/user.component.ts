import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: any;
  itemRes: any;
 constructor(private route: ActivatedRoute, private http : HttpClient) { }

 ngOnInit(): void {
   this.id = this.route.snapshot.queryParamMap.get('id');

   window.location.href = 'https://news.ycombinator.com/user?id=' + this.id;
 }

}
