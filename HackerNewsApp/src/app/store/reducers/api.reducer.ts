import * as ApiActionsTs from "../actions/api.actions";

export let initialState = []

export function reducer(state= initialState, action: ApiActionsTs.APIActions){
switch(action.type){
    case ApiActionsTs.ApiActionTypes.SuccessCall:
        return [...state, action.payload]
        case ApiActionsTs.ApiActionTypes.FailCall:
        return [...state, action.payload]
        default:
            return state
}
}