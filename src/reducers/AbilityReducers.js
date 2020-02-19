import {
    ABILITY_FETCH_BEGIN,
    ABILITY_FETCH_SUCCESS,
    ABILITY_FETCH_FAILURE,
    ABILITY_CLEAR,
} from "../actions/Actions"

let initialState = {
    isFetching: false,
    ready: false,
    error: null,
    ability: {}
}

export let abilityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ABILITY_FETCH_BEGIN:
            return {
                ...state,
                isFetching: true,
            }
        case ABILITY_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ready: true,
                ability: action.payload,
                error: null,
            }
        case ABILITY_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                ready: false,
                error: action.payload.error
            }
        case ABILITY_CLEAR:
            return initialState
        default: return state;
    }
}
