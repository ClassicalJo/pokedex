import React from "react"
import { connect } from "react-redux"
import { closeAllScreens, clearAbilityScreen } from "../actions/Actions";

let cleanup = (props) => {
    props.dispatch(closeAllScreens())
    props.dispatch(clearAbilityScreen())
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
            <div className="screen-text">ABILITY NAME: {props.ability.name.toUpperCase().replace(/-/, ' ')} </div>
            <div className="screen-text">ID: {props.ability.id}</div>
            <div className="screen-text">EFFECT: {props.ability.effect_entries[0].effect}</div>
            <div className="screen-text">USERS: {props.ability.pokemon.map((x) => String(x.pokemon.name.toUpperCase()) + " ")}</div>
            <button className="screen-close" onClick={() => cleanup(props)}>Close screen</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ability: state.abilityScreenReducer.ability,
        ready: state.abilityScreenReducer.ready,
        isFetching: state.abilityScreenReducer.isFetching,
        error: state.abilityScreenReducer.error,
    }
}

export default connect(mapStateToProps)(AbilityScreen)
