import { createAction, props} from "@ngrx/store";

export const getGetApiData = createAction(
  'GetApiData',
);

export const getGetApiDataComplete = createAction(
  'GetApiDataComplete',
  props<{ data: number[] }>()
);


export const getGetJobStoriesData = createAction(
  'GetJobStoriesData'
);

export const getGetJobStoriesDataComplete = createAction(
  'GetJobStoriesDataComplete',
  props<{jobStoryId: number[]}>()
  );