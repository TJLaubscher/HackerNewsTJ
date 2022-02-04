import {Injectable} from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { ApiDataService } from 'src/app/Services/apiData.service';
import { getApiData } from '../actions/api.actions';


@Injectable()
export class ApiDataEffects{
    //[API] GetApiData
getApiData$ = createEffect(() => 
this.action$.pipe(
    ofType(getApiData),
    mergeMap(action => {
        return this.apiDataApi.getDataFromApi().pipe(
            map(res => {
                return res.body.value;
            })
        )
    })
    )
    );


constructor(private action$: Actions, private apiDataApi: ApiDataService) {

}
}
