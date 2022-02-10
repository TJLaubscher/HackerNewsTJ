import * as apiActions from '../actions/api.actions';
import {
  Action,
  createReducer,
  on
} from '@ngrx/store';
import { state } from '@angular/animations';

export const apiJobStoriesFeatureKey = 'jobstoriesapi';

export interface JobStoriesApiState {
    jobStoryData: number[];
}

export const initialJobStoriesState:JobStoriesApiState = {
    jobStoryData: []
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