import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {select, Store} from '@ngrx/store';
import {ApiDataService} from '../../Services/apiData.service';
import {getGetApiData} from "../../store/actions/api.actions";
import {selectApiData} from "../../store/Selectors/api.selectors";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  res: number[] | undefined;

  constructor(private http : HttpClient, public apiStore: Store<any>, public apiService: ApiDataService) { }

  ngOnInit(): void {
    this.apiStore.dispatch(getGetApiData());
    this.apiStore.pipe(select(selectApiData)).subscribe(i => this.res = i);
    debugger
  }

}
