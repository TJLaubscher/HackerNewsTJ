import { createFeatureSelector, createSelector } from '@ngrx/store';
import {apiFeatureKey, ApiState} from "../reducers/api.reducer";

export const selectFeature = createFeatureSelector<ApiState>(apiFeatureKey);

export const selectApiData = createSelector(
  selectFeature,
  (state: ApiState) => state.apiData
);
