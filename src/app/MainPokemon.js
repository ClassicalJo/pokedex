import React from "react"
import Sprites from "../pokemon/Sprites";
import Abilities from "../pokemon/Abilities"
import Types from "../pokemon/Types"
import Stats from "../pokemon/Stats"
import AbilityScreen from '../screens/AbilityScreen';
import TypeScreen from '../screens/TypeScreen';
import MovesScreen from "../screens/MoveScreen"
import { connect } from 'react-redux'
import { showMoveScreen } from "../actions/Actions"
import Description from "../pokemon/Description";

function fixed(number) {
    let value = String(number)
    while (value.length < 3) { value = "0" + value }
    return value
}

let MainPokemon = (props) => {
    if (!props.pokemonIsReady || !props.speciesIsReady) return <div>Loading...</div>
    return (
        <div className="app">
            <div className="main">
                <Sprites />
                <div className="name" id="name">{props.pokemon.name.toUpperCase()}</div>
                <div className="height">HEIGHT: {props.pokemon.height / 10} METRE</div>
                <div className="weight">WEIGHT: {props.pokemon.weight / 10} KG.</div>
                <div className="number">No. {fixed(props.pokemon.id)}</div>
                <Types />
                <Abilities />
                <div className="moves" onClick={() => props.dispatch(showMoveScreen())}>MOVELIST</div>
                <Stats />
                <Description />
                {(props.UIReducer.showTypeScreen) && <TypeScreen />}
                {(props.UIReducer.showAbilityScreen) && <AbilityScreen />}
                {(props.UIReducer.showMoveScreen) && <MovesScreen />}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        pokemon: state.pokemonReducer.pokemon,
        pokemonIsReady: state.pokemonReducer.ready,
        speciesIsReady: state.pokemonSpeciesReducer.ready,
        error: state.error,
        UIReducer: state.UIReducer
    }
}

export default connect(mapStateToProps)(MainPokemon)
