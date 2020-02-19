import React from "react"
import { connect } from "react-redux"
import { closeAllScreens, abilityClear } from "../actions/Actions";
import Link from "../pokemon/Link"
import { fetchPokemon } from "../app/main/MainPokemon";
import { fetchPokemonFailure, fetchPokemonSpeciesFailure } from "../actions/PokemonActions";

let cleanup = (props) => {
    props.dispatch(closeAllScreens())
    props.dispatch(abilityClear())
}

let changePokemon = (props, e) => {
    cleanup(props)
    fetchPokemon(props, e.target.id).catch(error => {
        props.dispatch(fetchPokemonSpeciesFailure(String(error)))
        props.dispatch(fetchPokemonFailure(String(error)))
    })
}

let AbilityScreen = props => {
    if (props.error !== null)
        return (
            <div className="screen">
                <p>The following error was found during loading:</p>
                <p>{props.error}</p>
                <p className="screen-close" onClick={() => cleanup(props)}>Close screen</p>
            </div>)

    if (!props.ready)
        return (
            <div className="screen">
                <p>Loading...</p>
                <p className="screen-close" onClick={() => cleanup(props)}>Close screen</p>
            </div>)

    return (
        <div className="screen">
            <p className="screen-text">ABILITY NAME: {props.ability.name.toUpperCase().replace(/-/, ' ')} </p>
            <p className="screen-text">ID: {props.ability.id}</p>
            <p className="screen-text">EFFECT: {props.ability.effect_entries[0].effect}</p>
            <p className="screen-text" onClick={(e) => changePokemon(props, e)}>USERS: {props.ability.pokemon.map((key, index) => <Link key={index}><span key={key.pokemon.name} id={key.pokemon.name}>{key.pokemon.name.toUpperCase()}</span></Link>)}</p>
            <button className="screen-close" onClick={() => cleanup(props)}>Close screen</button>
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

export default connect(mapStateToProps)(AbilityScreen)
