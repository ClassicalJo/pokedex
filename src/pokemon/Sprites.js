import React from 'react';
import { connect } from "react-redux"
import { spriteIncrement, spriteDecrement } from '../actions/Actions';

let handleClickNext = (props) => {
    if (props.currentIndex < 3) props.dispatch(spriteIncrement())
}

let handleClickPrevious = (props) => {
    if (props.currentIndex > 0) props.dispatch(spriteDecrement())
}

let Sprites = (props) => {
    return (
        <div className="sprites">
            <img
                alt={props.name}
                src={props.sprites[props.currentIndex]} />
            <input className="spriteButton" type="button" value="<=" onClick={() => handleClickPrevious(props)}></input>
            <input className="spriteButton" type="button" value="=>" onClick={() => handleClickNext(props)}></input>
        </div>)
}

function mapStateToProps(state) {
    return {
        sprites: state.pokemonReducer.sprites,
        currentIndex: state.pokemonReducer.currentIndex,
        name: state.pokemonReducer.pokemon.name
    }
}
export default connect(mapStateToProps)(Sprites)
