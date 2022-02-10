import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as jobStoriesReducers from '../reducers/api.jobStoriesReducer';


export const selectJobStoriesFeature = createFeatureSelector<jobStoriesReducers.JobStoriesApiState>(jobStoriesReducers.apiJobStoriesFeatureKey);

export const selectJobStoriesApiData = createSelector(
  selectJobStoriesFeature,
  (state: jobStoriesReducers.JobStoriesApiState) => state.jobStoryData
);