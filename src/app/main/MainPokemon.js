import React, { useEffect } from "react"
import Sprites from "../../pokemon/Sprites";
import Abilities from "../../pokemon/Abilities"
import Types from "../../pokemon/Types"
import Stats from "../../pokemon/Stats"
import AbilityScreen from '../../screens/AbilityScreen';
import TypeScreen from '../../screens/TypeScreen';
import MovesScreen from "../../screens/MoveScreen"
import { connect } from 'react-redux'
import { showMoveScreen } from "../../actions/Actions"
import {
    listFetchBegin,
    listFetchSuccess,
    listFetchFailure,
} from '../../actions/Actions'

import {
    fetchPokemonBegin,
    fetchPokemonSuccess,
    fetchPokemonFailure,
    fetchPokemonSpeciesBegin,
    fetchPokemonSpeciesSuccess,
    fetchPokemonSpeciesFailure,
    pokemonClear,
    pokemonSpeciesClear,
} from "../../actions/PokemonActions"
import Description from "../../pokemon/Description";

function fixed(number) {
    let value = String(number)
    while (value.length < 3) { value = "0" + value }
    return value
}

export let fetchPokemonList = async props => {
    props.dispatch(listFetchBegin());
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=964")
    let data = await response.json()
    props.dispatch(listFetchSuccess(data))
}

export let fetchPokemon = async (props, number) => {
    props.dispatch(fetchPokemonBegin())
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + number)
    let data = await response.json()
    await props.dispatch(fetchPokemonSuccess(data))
    props.dispatch(fetchPokemonSpeciesBegin())
    let species = await fetch(data.species.url)
    let speciesData = await species.json()
    await props.dispatch(fetchPokemonSpeciesSuccess(speciesData))
}

let useMount = fn => useEffect(fn, [])

let MainPokemon = props => {
    useMount(() => {
        if (props.pokemon.name === undefined && !props.isFetching) {
            fetchPokemonList(props).catch(error => props.dispatch(listFetchFailure(String(error))))
            fetchPokemon(props, 1).catch(error => {
                props.dispatch(fetchPokemonFailure(String(error)))
                props.dispatch(fetchPokemonSpeciesFailure(String(error)))
            })
        }
        return () => {
            props.dispatch(pokemonClear())
            props.dispatch(pokemonSpeciesClear())
        }
    })
    if (props.pokemonError || props.speciesError) return (
        <div>
            <p>The following errors have been found during the loading of the requested page:</p>
            <p>{props.pokemonError}</p>
            <p>{props.speciesError}</p>
        </div>
    )
    if (!props.pokemonIsReady || !props.speciesIsReady) return <div>Loading...</div>
    return (
        <div className="main">
            <Sprites />
            <p className="height">HEIGHT: {props.pokemon.height / 10} METRE</p>
            <p className="weight">WEIGHT: {props.pokemon.weight / 10} KG.</p>
            <p className="number">No. {fixed(props.pokemon.id)}: {props.pokemon.name.toUpperCase()}</p>
            <Types />
            <Abilities />
            <p className="moves" onClick={() => props.dispatch(showMoveScreen())}>MOVELIST</p>
            <Stats />
            <Description />
            {(props.UIReducer.showTypeScreen) && <TypeScreen />}
            {(props.UIReducer.showAbilityScreen) && <AbilityScreen />}
            {(props.UIReducer.showMoveScreen) && <MovesScreen />}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        pokemon: state.pokemonReducer.pokemon,
        isFetching: state.pokemonReducer.isFetching,
        pokemonIsReady: state.pokemonReducer.ready,
        speciesIsReady: state.pokemonSpeciesReducer.ready,
        pokemonError: state.pokemonReducer.error,
        speciesError: state.pokemonSpeciesReducer.error,
        UIReducer: state.UIReducer
    }
}

export default connect(mapStateToProps)(MainPokemon)
