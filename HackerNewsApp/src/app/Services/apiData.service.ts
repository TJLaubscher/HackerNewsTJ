import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiDataService {
  constructor(private http: HttpClient) {
  }

  getDataFromApi() {
    return this.http.get<any>('https://hacker-news.firebaseio.com/v0/topstories.json', {observe: 'response'});
  }
}
