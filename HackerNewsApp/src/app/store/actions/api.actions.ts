import { Action } from "@ngrx/store";
import {ApiDataService} from '../../Services/apiData.service';


export enum ApiActionTypes{
    SuccessCall = 'SuccessCall',
    FailCall = 'FailCall'
}

export class AddApiData implements Action {
    readonly type = ApiActionTypes.SuccessCall
    constructor(public payload: any, public aspiService: ApiDataService){

        payload = this.aspiService.getDataFromApi();

    }
}

export class RemoveApiData implements Action {
    readonly type = ApiActionTypes.FailCall
    constructor(public payload: any){}
}

export type APIActions = AddApiData | RemoveApiData