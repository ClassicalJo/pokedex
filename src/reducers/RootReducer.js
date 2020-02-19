import { combineReducers } from "redux"
import {
    CHANGE_MAIN_SCREEN,
    MOVE_SCREEN_SHOW,
    ABILITY_SCREEN_SHOW,
    TYPE_SCREEN_SHOW,
    CLOSE_ALL_SCREENS,

    LIST_FETCH_BEGIN,
    LIST_FETCH_SUCCESS,
    LIST_FETCH_FAILURE,

    LIST_FILTER,
    LIST_ADD_FILTER,
} from "../actions/Actions"

import { pokemonSpeciesReducer, pokemonReducer } from "./PokemonReducers"
import { moveReducer } from "./MoveReducers"
import { abilityReducer } from './AbilityReducers'
import { typeReducer } from "./TypeReducers"
import { itemReducer } from "./ItemReducers"


let listInitialState = {
    ready: false,
    error: null,
    isFetching: false,
    list: {},
    filter: null,
    filteredList: null,
}

export let listReducer = (state = listInitialState, action) => {
    switch (action.type) {
        case LIST_FETCH_BEGIN:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case LIST_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ready: true,
                list: action.payload
            }
        case LIST_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                ready: false,
                pokemonList: {},
                error: action.payload.error
            }
        case LIST_ADD_FILTER:
            return {
                ...state,
                filter: action.payload,
            }
        case LIST_FILTER:
            return {
                ...state,
                filteredList: action.payload
            }
        default:
            return state
    }
}

let UIInitialState = {
    mainScreen: "home",
    showMoveScreen: false,
    showAbilityScreen: false,
    showTypeScreen: false,
}

let UIReducer = (state = UIInitialState, action) => {
    switch (action.type) {
        case CHANGE_MAIN_SCREEN:
            return {
                ...state,
                mainScreen: action.payload
            }
        case MOVE_SCREEN_SHOW:
            return {
                ...state,
                showMoveScreen: true,
            }
        case ABILITY_SCREEN_SHOW:
            return {
                ...state,
                showAbilityScreen: true
            }
        case TYPE_SCREEN_SHOW:
            return {
                ...state,
                showTypeScreen: true
            }
        case CLOSE_ALL_SCREENS:
            return {
                ...state,
                showAbilityScreen: false,
                showMoveScreen: false,
                showTypeScreen: false,
            }
        default: return state;
    }
}

let rootReducer = combineReducers({
    listReducer,
    pokemonReducer,
    pokemonSpeciesReducer,
    abilityReducer,
    typeReducer,
    moveReducer,
    itemReducer,
    UIReducer
})

export default rootReducer
