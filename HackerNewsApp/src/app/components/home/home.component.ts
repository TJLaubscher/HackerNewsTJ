import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { getApiData } from 'src/app/store/actions/api.actions';
import { Store } from '@ngrx/store';
import { observable } from 'rxjs';
import { ApiState } from 'src/app/store/reducers/api.reducer';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  res: any;

  constructor(private http : HttpClient, public apiStore: Store<ApiState>) { }

  ngOnInit(): void {
    this.apiStore.dispatch(getApiData());

    // this.apiStore.select<any>('idArray').subscribe(state => {console.log(state);})
  }

}
