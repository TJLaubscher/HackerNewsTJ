import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Store } from '@ngrx/store';
import {ApiResponse, ApiValue} from '../../store/Selectors/api.model';
import * as ApiActions from "../../store/actions/api.actions";
import {ApiDataService} from '../../Services/apiData.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  res!: ApiResponse;
  resArray!: ApiValue;

  constructor(private http : HttpClient, public apiStore: Store<any>, public apiService: ApiDataService) { }

  ngOnInit(): void {
    this.res = new ApiResponse();
    this.apiStore.dispatch(new ApiActions.AddApiData(this.res, this.apiService))
  }

}
