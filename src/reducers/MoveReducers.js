import {
    MOVE_FETCH_BEGIN,
    MOVE_FETCH_SUCCESS,
    MOVE_FETCH_FAILURE,
    MOVE_CLEAR,
} from "../actions/Actions"

let initialState = {
    isFetching: false,
    ready: false,
    move: {},
    error: null,
}

export let moveReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVE_FETCH_BEGIN:
            return {
                ...state,
                isFetching: true,
            }
        case MOVE_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ready: true,
                move: action.payload,
                error: null,
            }
        case MOVE_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                ready: false,
                error: action.payload.error
            }
        case MOVE_CLEAR:
            return initialState;
        default:
            return state
    }
}
