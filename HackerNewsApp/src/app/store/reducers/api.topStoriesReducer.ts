import * as apiActions from '../actions/api.actions';
import {
  Action,
  createReducer,
  on
} from '@ngrx/store';
import { state } from '@angular/animations';

export const apiFeatureKey = 'topStoriesApi';

export interface ApiState {
    apiData: number[];
}

export const initialState: ApiState = {
    apiData: []
}

const topStoryApiReducer = createReducer(
    initialState,
    on(apiActions.getGetApiDataComplete, (state, {data}) => ({
        ...state,
        apiData: data
    }))
);

export function topStoryreducer(state: ApiState | undefined, action: Action) {
    return topStoryApiReducer(state, action);
  }