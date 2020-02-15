import React from 'react'
import { connect } from 'react-redux'
import {
    showAbilityScreen,
    fetchAbilityBegin,
    fetchAbilitySuccess,
    fetchAbilityFailure
} from '../actions/Actions'

let handleClickAbility = async (props, e) => {
    props.dispatch(showAbilityScreen())
    props.dispatch(fetchAbilityBegin())
    let response = await fetch(e.target.id)
    let data = await response.json()
    await props.dispatch(fetchAbilitySuccess(data))
}

let handleError = fn => (props, e) => fn(props, e).catch(error => props.dispatch(fetchAbilityFailure(String(error))))
let safeHandleClickAbility = handleError(handleClickAbility)

let Abilities = (props) => {
    return (
        <div className="abilities">
            <div>ABILITIES:</div>
            {props.abilities.map(key =>
                <li key={key.ability.name}
                    id={key.ability.url}
                    onClick={(e) => safeHandleClickAbility(props, e)}
                >{key.ability.name.toUpperCase().replace(/-/, ' ')}</li>)}
        </div>)
}

function mapStateToProps(state) {
    return {
        abilities: state.pokemonReducer.pokemon.abilities
    }
}
export default connect(mapStateToProps)(Abilities)
