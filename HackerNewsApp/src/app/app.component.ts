import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  title = 'app';
  NumberOfIds!: Array<any>

  constructor(private store: Store<any>) {}

  ngOnInit() {
  }
}
