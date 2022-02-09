import * as apiActions from '../actions/api.actions';
import {
  Action,
  createReducer,
  on
} from '@ngrx/store';
import { state } from '@angular/animations';


// TODO: 1 - Go from Effects to the reducer and insert data into the state
// TODO: 2 - Display data from state on the component

export const apiFeatureKey = 'api';
export const apiJobStoriesFeatureKey = 'jobstoriesapi';

export interface ApiState {
  apiData: number[];
}

export interface JobStoriesApiState {
  jobStoryData: number[];
}

export const initialState: ApiState = {
    apiData: []
}

export const initialJobStoriesState:JobStoriesApiState = {
  jobStoryData: []
} 

const apiReducer = createReducer(
    initialState,
    on(apiActions.getGetApiDataComplete, (state, {data}) => ({
        ...state,
        apiData: data
    }))
);


export function reducer(state: ApiState | undefined, action: Action) {
  return apiReducer(state, action);
}


const jobStoriesApiReducer = createReducer(
  initialJobStoriesState,
  on(apiActions.getGetJobStoriesDataComplete, (state, {jobStoryId}) => ({
    ...state,
    jobStoryData: jobStoryId
  }))
);

export function jobStoriesReducer(state: JobStoriesApiState | undefined, action: Action){
  return jobStoriesApiReducer(state, action);
}
