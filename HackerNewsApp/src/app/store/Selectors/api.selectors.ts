import { createFeatureSelector, createSelector } from '@ngrx/store';
import {apiFeatureKey, ApiState, apiJobStoriesFeatureKey, JobStoriesApiState} from "../reducers/api.reducer";

export const selectFeature = createFeatureSelector<ApiState>(apiFeatureKey);

export const selectApiData = createSelector(
  selectFeature,
  (state: ApiState) => state.apiData
);


export const selectJobStoriesFeature = createFeatureSelector<JobStoriesApiState>(apiJobStoriesFeatureKey);

export const selectJobStoriesApiData = createSelector(
  selectJobStoriesFeature,
  (state: JobStoriesApiState) => state.jobStoryData
);