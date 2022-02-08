import * as apiActions from '../actions/api.actions';
import {
    createReducer,
    on
  } from '@ngrx/store';
import { ApiResponse } from '../Selectors/api.model';


// TODO: 1 - Go from Effects to the reducer and insert data into the state
// TODO: 2 - Display data from state on the component



export const initialState: ApiResponse = {
    apiData: []
}

const apiReducer = createReducer(
    initialState,
    on(apiActions.getGetApiDataComplete, (state, {data}) => ({
        ...state, 
        apiData: data
    }))
);


