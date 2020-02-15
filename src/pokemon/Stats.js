import React from 'react'
import { connect } from 'react-redux'
let Stats = (props) => {
    return (
        <div className="stats">
            <div>HP: {props.stats[5].base_stat}</div>
            <div>ATTACK: {props.stats[4].base_stat}</div>
            <div>DEFENSE: {props.stats[3].base_stat}</div>
            <div>SPECIAL ATTACK: {props.stats[2].base_stat}</div>
            <div>SPECIAL DEFENSE: {props.stats[1].base_stat}</div>
            <div>SPEED: {props.stats[0].base_stat}</div>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        stats: state.pokemonReducer.pokemon.stats
    }
}
export default connect(mapStateToProps)(Stats)
