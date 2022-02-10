import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as topStoriesReducers from '../reducers/api.topStoriesReducer';

export const selectFeature = createFeatureSelector<topStoriesReducers.ApiState>(topStoriesReducers.apiFeatureKey);

export const selectApiData = createSelector(
  selectFeature,
  (state: topStoriesReducers.ApiState) => state.apiData
);