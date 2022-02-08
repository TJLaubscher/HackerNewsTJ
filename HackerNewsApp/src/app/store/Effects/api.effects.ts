import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, EMPTY, map, mergeMap} from "rxjs";
import {getGetApiData, getGetApiDataComplete} from "../actions/api.actions";
import {ApiDataService} from "../../Services/apiData.service";


@Injectable()
export class ApiEffects {
  constructor(private actions$: Actions, private apiDataService: ApiDataService) {
  }

  // 'GetGetApiData'
  getGetApiData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getGetApiData),
      mergeMap(action =>
        this.apiDataService.getDataFromApi().pipe(
          map(response => {
            debugger
            return getGetApiDataComplete({data: response.body as number []});
          }),
          catchError(err => {
            console.error(err);
            return EMPTY;
          })
        )
      )));
}
