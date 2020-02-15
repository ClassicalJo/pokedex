export const FETCH_POKEMON_LIST_BEGIN = "FETCH_POKEMON_LIST_BEGIN"
export const FETCH_POKEMON_LIST_SUCCESS = "FETCH_POKEMON_LIST_SUCCESS"
export const FETCH_POKEMON_LIST_FAILURE = "FETCH_POKEMON_LIST_FAILURE"

export const POKEMON_LIST_ADD_FILTER = "POKEMON_LIST_ADD_FILTER"
export const POKEMON_LIST_FILTER = "POKEMON_LIST_FILTER"

export const ABILITY_SCREEN_SHOW = "ABILITY_SCREEN_SHOW"
export const ABILITY_SCREEN_CLEAR = "ABILITY_SCREEN_CLEAR"

export const TYPE_SCREEN_SHOW = "TYPE_SCREEN_SHOW"
export const TYPE_SCREEN_CLEAR = "TYPE_SCREEN_CLEAR"

export const MOVE_SCREEN_SHOW = "MOVE_SCREEN_SHOW"
export const CLOSE_ALL_SCREENS = "CLOSE_ALL_SCREENS"


export const FETCH_POKEMON_BEGIN = 'FETCH_POKEMON_BEGIN'
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS"
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE"

export const SPRITE_INCREMENT = "SPRITE_INCREMENT"
export const SPRITE_DECREMENT = "SPRITE_DECREMENT"

export const FETCH_POKEMON_SPECIES_BEGIN = "FETCH_POKEMON_SPECIES_BEGIN"
export const FETCH_POKEMON_SPECIES_SUCCESS = "FETCH_POKEMON_SPECIES_SUCCESS"
export const FETCH_POKEMON_SPECIES_FAILURE = "FETCH_POKEMON_SPECIES_FAILURE"

export const FETCH_ABILITY_BEGIN = "FETCH_ABILITY_BEGIN"
export const FETCH_ABILITY_SUCCESS = "FETCH_ABILITY_SUCCESS"
export const FETCH_ABILITY_FAILURE = "FETCH_ABILITY_FAILURE"

export const FETCH_TYPE_BEGIN = "FETCH_TYPE_BEGIN"
export const FETCH_TYPE_SUCCESS = "FETCH_TYPE_SUCCESS"
export const FETCH_TYPE_FAILURE = "FETCH_TYPE_FAILURE"

export const fetchPokemonListBegin = () => {
    return {
        type: FETCH_POKEMON_LIST_BEGIN
    }
}
export const fetchPokemonListSuccess = data => {
    return {
        type: FETCH_POKEMON_LIST_SUCCESS,
        payload: data
    }
}

export const fetchPokemonListFailure = error => {
    return {
        type: FETCH_POKEMON_LIST_FAILURE,
        payload: { error }
    }
}

export const pokemonListAddFilter = characters => {
    return {
        type: POKEMON_LIST_ADD_FILTER,
        payload: characters
    }
}

export const pokemonListFilter = list => {
    return {
        type: POKEMON_LIST_FILTER,
        payload: list
    }
}

export const fetchPokemonBegin = () => {
    return {
        type: FETCH_POKEMON_BEGIN
    }
}

export const fetchPokemonSuccess = pokemon => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemon
    }
}

export const fetchPokemonFailure = error => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}

export const spriteIncrement = () => {
    return {
        type: SPRITE_INCREMENT
    }
}

export const spriteDecrement =()=> {
    return {
        type: SPRITE_DECREMENT
    }
}

export const fetchPokemonSpeciesBegin = () => {
    return {
        type: FETCH_POKEMON_SPECIES_BEGIN,
    }
}

export const fetchPokemonSpeciesSuccess = species => {
    return {
        type: FETCH_POKEMON_SPECIES_SUCCESS,
        payload: species
    }
}

export const fetchPokemonSpeciesFailure = error => {
    return {
        type: FETCH_POKEMON_SPECIES_FAILURE,
        payload: { error }
    }
}

export const showAbilityScreen = () => {
    return {
        type: ABILITY_SCREEN_SHOW,
    }
}

export const clearAbilityScreen = () => {
    return {
        type: ABILITY_SCREEN_CLEAR
    }
}

export const showMoveScreen = () => {
    return {
        type: MOVE_SCREEN_SHOW,
    }
}

export const showTypeScreen = () => {
    return {
        type: TYPE_SCREEN_SHOW,
    }
}

export const clearTypeScreen = () => {
    return {
        type: TYPE_SCREEN_CLEAR
    }
}

export const closeAllScreens = () => {
    return {
        type: CLOSE_ALL_SCREENS
    }
}

export const fetchAbilityBegin = () => {
    return {
        type: FETCH_ABILITY_BEGIN
    }
}

export const fetchAbilitySuccess = data => {
    return {
        type: FETCH_ABILITY_SUCCESS,
        payload: data
    }
}

export const fetchAbilityFailure = error => {
    return {
        type: FETCH_ABILITY_FAILURE,
        payload: { error }
    }
}

export const fetchTypeBegin = () => {
    return {
        type: FETCH_TYPE_BEGIN
    }
}

export const fetchTypeSuccess = data => {
    return {
        type: FETCH_TYPE_SUCCESS,
        payload: data
    }
}

export const fetchTypeFailure = error => {
    return {
        type: FETCH_TYPE_FAILURE,
        payload: { error }
    }
}
