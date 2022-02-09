import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import {ApiDataService} from '../../Services/apiData.service';
import {getGetJobStoriesData} from '../../store/actions/api.actions';
import { selectJobStoriesApiData } from 'src/app/store/Selectors/api.selectors';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
   idArray: number[] | undefined;

  constructor(private route: ActivatedRoute, private http : HttpClient, private apiStore: Store<any>, private apiDataService: ApiDataService) { }

  ngOnInit(): void {
      this.apiStore.dispatch(getGetJobStoriesData());
      this.apiStore.pipe(select(selectJobStoriesApiData)).subscribe(i => this.idArray = i);
  }

}
