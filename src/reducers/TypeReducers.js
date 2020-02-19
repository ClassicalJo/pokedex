import {
    TYPE_FETCH_BEGIN,
    TYPE_FETCH_SUCCESS,
    TYPE_FETCH_FAILURE,
    TYPE_CLEAR,
} from "../actions/Actions"


let initialState = {
    isFetching: false,
    ready: false,
    error: null,
    type: {}
}

export let typeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE_FETCH_BEGIN:
            return {
                ...state,
                isFetching: true,
            }
        case TYPE_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ready: true,
                type: action.payload,
                error: null,
            }
        case TYPE_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                ready: false,
                error: action.payload.error
            }
        case TYPE_CLEAR:
            return initialState
        default: return state
    }
}
