import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {ApiResponse, ApiValue} from '../store/Selectors/api.model';

@Injectable({
    providedIn: 'root'
  })

  export class ApiDataService {
    constructor(private http: HttpClient) {}


    getDataFromApi(){
      let res = this.http.get<any>('https://hacker-news.firebaseio.com/v0/topstories.json', {observe: 'response'}).subscribe(res => res.body.value);
debugger;
      return res;
    }
  }