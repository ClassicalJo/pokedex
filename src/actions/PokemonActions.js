export const FETCH_POKEMON_BEGIN = 'FETCH_POKEMON_BEGIN'
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS"
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE"

export const SPRITE_INCREMENT = "SPRITE_INCREMENT"
export const SPRITE_DECREMENT = "SPRITE_DECREMENT"

export const FETCH_POKEMON_SPECIES_BEGIN = "FETCH_POKEMON_SPECIES_BEGIN"
export const FETCH_POKEMON_SPECIES_SUCCESS = "FETCH_POKEMON_SPECIES_SUCCESS"
export const FETCH_POKEMON_SPECIES_FAILURE = "FETCH_POKEMON_SPECIES_FAILURE"

export const POKEMON_CLEAR = "POKEMON_CLEAR"
export const POKEMON_SPECIES_CLEAR = "POKEMON_SPECIES_CLEAR"

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

export const spriteDecrement = () => {
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

export const pokemonClear = () => {
    return {
        type: POKEMON_CLEAR
    }
}

export const pokemonSpeciesClear = () => {
    return {
        type: POKEMON_SPECIES_CLEAR
    }
}
