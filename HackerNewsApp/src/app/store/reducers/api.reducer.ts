import * as fromApi from '../actions/api.actions'
import { ApiData } from "src/app/model/ApiData";

export interface ApiState{
    data: ApiData,
    loaded: boolean,
    laoding: boolean
}


export const initialState: ApiState = {
data: {idArray: ['123','456','789']},
loaded: false,
laoding: false
};

export function reducer(
   state = initialState,
   action:  fromApi.ApiAction
   ): ApiState{
       switch(action.type)
       {
           case fromApi.LOAD_API_VALUES: {
               return {...state, 
                laoding: true
                };
           } 

           case fromApi.LOAD_API_VALUES_SUCCESS: {
            return {...state, 
             laoding: false,
             loaded: true
             };
        } 

        case fromApi.LOAD_API_VALUES_FAIL: {
            return {...state, 
             laoding: false,
             loaded: false
             };
        } 
       }
       return state;
    }