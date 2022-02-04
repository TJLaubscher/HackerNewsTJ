import { Action } from "@ngrx/store";
import { createAction, props } from "@ngrx/store";
import { ApiData } from "src/app/model/ApiData";

//load Values

export const LOAD_API_VALUES = '[API] GetApiData';
export const LOAD_API_VALUES_FAIL = '[API] GetApiData Failed';
export const LOAD_API_VALUES_SUCCESS = '[API] GetApiData Success';


export class GetApiData implements Action{
readonly type = LOAD_API_VALUES;

}

export class GetApiDataFail implements Action{
    readonly type = LOAD_API_VALUES_FAIL;
    constructor(public payload:any) {}
}

export class GetApiDataSuccess implements Action{
    readonly type = LOAD_API_VALUES_SUCCESS;
    constructor(public payload:ApiData) {}
}


//export action types
export type ApiAction = GetApiData | GetApiDataFail | GetApiDataSuccess;

export const getApiData = createAction(
    '[API] GetApiData'
);