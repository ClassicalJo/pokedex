import {
    FETCH_POKEMON_BEGIN,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAILURE,

    SPRITE_INCREMENT,
    SPRITE_DECREMENT,

    FETCH_POKEMON_SPECIES_BEGIN,
    FETCH_POKEMON_SPECIES_SUCCESS,
    FETCH_POKEMON_SPECIES_FAILURE,

    POKEMON_CLEAR,
    POKEMON_SPECIES_CLEAR
} from "../actions/PokemonActions"

let pokemonInitialState = {
    pokemon: {},
    isFetching: false,
    sprites: [],
    currentIndex: 0,
    ready: false,
    error: null,
}

export let pokemonReducer = (state = pokemonInitialState, action) => {
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
                error: null,
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
        case POKEMON_CLEAR:
            return pokemonInitialState
        default:
            return state
    }
}

let speciesInitialState = {
    species: {},
    isFetching: false,
    ready: false,
    error: null,
}

export let pokemonSpeciesReducer = (state = speciesInitialState, action) => {
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
                species: action.payload,
                error: null,
            }
        case FETCH_POKEMON_SPECIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                ready: false,
                error: action.payload.error
            }
        case POKEMON_SPECIES_CLEAR:
            return speciesInitialState
        default:
            return state
    }

}
