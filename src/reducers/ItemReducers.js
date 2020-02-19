import {
    ITEM_FETCH_BEGIN,
    ITEM_FETCH_SUCCESS,
    ITEM_FETCH_FAILURE,
    ITEM_CLEAR
} from "../actions/Actions"

let initialState = {
    isFetching: false,
    ready: false,
    error: null,
    item: {}
}

export let itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEM_FETCH_BEGIN:
            return {
                ...state,
                isFetching: true,
            }
        case ITEM_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                ready: true,
                item: action.payload
            }
        case ITEM_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error,
                ready: false,
            }
        case ITEM_CLEAR:
            return initialState
        default: return state
    }
}
