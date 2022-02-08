import { createAction, props} from "@ngrx/store";

export const getGetApiData = createAction(
  'GetApiData',
);

export const getGetApiDataComplete = createAction(
  'GetApiDataComplete',
  props<{ data: number[] }>()
);
