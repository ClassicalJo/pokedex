import React, { useEffect } from "react"
import { connect } from "react-redux"
import {
    listFetchBegin,
    listFetchSuccess,
    listFetchFailure,
    abilityFetchBegin,
    abilityFetchSuccess,
    abilityFetchFailure,
    abilityClear,
    changeMainScreen,
} from "../../actions/Actions"

import { fetchPokemonFailure } from "../../actions/PokemonActions"
import {
    fetchPokemonList,
    fetchPokemon,
} from "./MainPokemon"

import Link from "../../pokemon/Link"
import { returnFirstResult } from "../../pokemon/Description"
import { capitalize } from "./MainMoves"

let useMount = fn => useEffect(fn, [])

let fetchAbilityList = async props => {
    props.dispatch(listFetchBegin())
    let firstResponse = await fetch("https://pokeapi.co/api/v2/ability")
    let firstData = await firstResponse.json()
    let response = await fetch("https://pokeapi.co/api/v2/ability?offset=0&limit=" + firstData.count)
    let data = await response.json()
    await props.dispatch(listFetchSuccess(data))
}

let fetchAbility = async (props, ability) => {
    props.dispatch(abilityFetchBegin())
    let response = await fetch("https://pokeapi.co/api/v2/ability/" + ability)
    let data = await response.json()
    await props.dispatch(abilityFetchSuccess(data))
}

let handleClickPokemon = async (props, e) => {
    if (e.target.id) {
        props.dispatch(changeMainScreen("pokemon"))
        fetchPokemonList(props).catch(error => props.dispatch(listFetchFailure(String(error))))
        fetchPokemon(props, e.target.id).catch(error => props.dispatch(fetchPokemonFailure(String(error))))
    }
}

let MainAbilities = props => {
    useMount(() => {
        if (props.ability.name === undefined && !props.isFetching) {
            fetchAbilityList(props).catch(error => props.dispatch(listFetchFailure(String(error))))
            fetchAbility(props, "healer").catch(error => props.dispatch(abilityFetchFailure(String(error))))
        }
        return () => props.dispatch(abilityClear())
    })
    if (props.error) return (
        <div>
            <p>The following error has been found during the loading of the requested page:</p>
            <p>{props.error}</p>
        </div>
    )
    if (!props.ready) return <div className="main-abilities"><p>Loading...</p></div>
    let { name, id, effect_entries, flavor_text_entries, pokemon } = props.ability
    return (
        <div className="main-abilities">
            <div className='main-ability-data'>
                <h2>ABILITY NAME: {capitalize(name)}</h2>
                <p>ID: {id}</p>
            </div>
            <div className='main-ability-description'>
                <p>EFFECT: {effect_entries[0].effect}</p>
                <p>DESCRIPTION: {returnFirstResult(flavor_text_entries)}</p>
            </div>

            <div className='main-ability-pokemon'>
                <p onClick={(e) => handleClickPokemon(props, e)}>POKEMON USERS: {pokemon.map(key => <Link key={key.pokemon.name}><span id={key.pokemon.name}>{key.pokemon.name.toUpperCase()}</span></Link>)}</p>
            </div>


        </div>
    )
}

function mapStateToProps(state) {
    return {
        ability: state.abilityReducer.ability,
        ready: state.abilityReducer.ready,
        isFetching: state.abilityReducer.isFetching,
        error: state.abilityReducer.error,
    }
}

export default connect(mapStateToProps)(MainAbilities)
