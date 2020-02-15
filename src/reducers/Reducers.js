import { combineReducers } from "redux"
import {
    FETCH_POKEMON_LIST_BEGIN,
    FETCH_POKEMON_LIST_SUCCESS,
    FETCH_POKEMON_LIST_FAILURE,

    POKEMON_LIST_FILTER,
    POKEMON_LIST_ADD_FILTER,

    MOVE_SCREEN_SHOW,

    ABILITY_SCREEN_SHOW,
    ABILITY_SCREEN_CLEAR,

    TYPE_SCREEN_SHOW,
    TYPE_SCREEN_CLEAR,

    CLOSE_ALL_SCREENS,

    FETCH_POKEMON_BEGIN,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAILURE,

    SPRITE_INCREMENT,
    SPRITE_DECREMENT,

    FETCH_POKEMON_SPECIES_BEGIN,
    FETCH_POKEMON_SPECIES_SUCCESS,
    FETCH_POKEMON_SPECIES_FAILURE,

    FETCH_ABILITY_BEGIN,
    FETCH_ABILITY_SUCCESS,
    FETCH_ABILITY_FAILURE,

    FETCH_TYPE_BEGIN,
    FETCH_TYPE_SUCCESS,
    FETCH_TYPE_FAILURE,


} from "../actions/Actions"

let UIInitialState = {
    showMoveScreen: false,
    showAbilityScreen: false,
    showTypeScreen: false,
}

let listInitialState = {
    ready: false,
    error: null,
    isFetching: false,
    pokemonList: {},
    filter: null,
    filteredList: null,
}

let pokemonInitialState = {
    pokemon: {},
    isFetching: false,
    sprites: [],
    currentIndex: 0,
    ready: false,
    error: null,
}

let speciesInitialState = {
    species: {},
    isFetching: false,
    ready: false,
    error: null,
}

let pokemonListReducer = (state = listInitialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_LIST_BEGIN:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case FETCH_POKEMON_LIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ready: true,
                pokemonList: action.payload
            }
        case FETCH_POKEMON_LIST_FAILURE:
            return {
                ...state,
                isFetching: false,
                ready: false,
                pokemonList: {},
                error: action.payload.error
            }
        case POKEMON_LIST_ADD_FILTER:
            return {
                ...state,
                filter: action.payload,
            }
        case POKEMON_LIST_FILTER:
            return {
                ...state,
                filteredList: action.payload
            }
        default:
            return state
    }
}

let pokemonReducer = (state = pokemonInitialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_BEGIN:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: action.payload,
                isFetching: false,
                sprites: [action.payload.sprites.front_default, action.payload.sprites.back_default, action.payload.sprites.front_shiny, action.payload.sprites.back_shiny],
                currentIndex: 0,
                ready: true,
            }
        case FETCH_POKEMON_FAILURE:
            return {
                ...state,
                isFetching: false,
                ready: false,
                error: action.payload
            }
        case SPRITE_INCREMENT:
            return {
                ...state,
                currentIndex: state.currentIndex + 1
            }
        case SPRITE_DECREMENT:
            return {
                ...state,
                currentIndex: state.currentIndex - 1
            }
        default:
            return state
    }
}

let pokemonSpeciesReducer = (state = speciesInitialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_SPECIES_BEGIN:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_POKEMON_SPECIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ready: true,
                species: action.payload
            }
        case FETCH_POKEMON_SPECIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                ready: false,
                error: action.payload.error
            }
        default:
            return state
    }

}


let UIReducer = (state = UIInitialState, action) => {
    switch (action.type) {
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

let abilityScreenInitialState = {
    isFetching: false,
    ready: false,
    error: null,
    ability: {}
}

let abilityScreenReducer = (state = abilityScreenInitialState, action) => {
    switch (action.type) {
        case FETCH_ABILITY_BEGIN:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_ABILITY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ready: true,
                ability: action.payload
            }
        case FETCH_ABILITY_FAILURE:
            return {
                ...state,
                isFetching: false,
                ready: false,
                error: action.payload.error
            }
        case ABILITY_SCREEN_CLEAR:
            return abilityScreenInitialState
        default: return state;
    }
}

let typeScreenInitialState = {
    isFetching: false,
    ready: false,
    error: null,
    type: {}
}

let typeScreenReducer = (state = typeScreenInitialState, action) => {
    switch (action.type) {
        case FETCH_TYPE_BEGIN:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_TYPE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ready: true,
                type: action.payload
            }
        case FETCH_TYPE_FAILURE:
            return {
                ...state,
                isFetching: false,
                ready: false,
                error: action.payload.error
            }
        case TYPE_SCREEN_CLEAR:
            return typeScreenInitialState
        default: return state
    }
}

let rootReducer = combineReducers({
    pokemonListReducer,
    pokemonReducer,
    pokemonSpeciesReducer,
    abilityScreenReducer,
    typeScreenReducer,
    UIReducer
})

export default rootReducer
