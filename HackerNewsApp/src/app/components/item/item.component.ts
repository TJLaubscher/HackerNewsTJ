import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
   id: any;
   itemRes: any;
  constructor(private route: ActivatedRoute, private http : HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');

    window.location.href = 'https://news.ycombinator.com/item?id=' + this.id;
  }

}
