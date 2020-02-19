import React from 'react'
import { connect } from 'react-redux'
import {
    showAbilityScreen,
    abilityFetchBegin,
    abilityFetchSuccess,
    abilityFetchFailure
} from '../actions/Actions'

let handleClickAbility = async (props, e) => {
    props.dispatch(showAbilityScreen())
    props.dispatch(abilityFetchBegin())
    let response = await fetch(e.target.id)
    let data = await response.json()
    await props.dispatch(abilityFetchSuccess(data))
}

let Abilities = (props) => {
    return (
        <div className="abilities">
            <div>ABILITIES:</div>
            {props.abilities.map(key =>
                <li key={key.ability.name}
                    id={key.ability.url}
                    onClick={(e) => handleClickAbility(props, e).catch(error => props.dispatch(abilityFetchFailure(String(error))))}
                >{key.ability.name.toUpperCase().replace(/-/, ' ')}</li>)}
        </div>)
}

function mapStateToProps(state) {
    return {
        abilities: state.pokemonReducer.pokemon.abilities
    }
}
export default connect(mapStateToProps)(Abilities)
