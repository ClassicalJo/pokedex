import React from 'react'
import { connect } from 'react-redux'
import { showTypeScreen, fetchTypeBegin, fetchTypeSuccess, fetchTypeFailure } from "../actions/Actions"

let handleClickType = async (props, e) => {
    props.dispatch(fetchTypeBegin())
    props.dispatch(showTypeScreen())
    let response = await fetch(e.target.id)
    let data = await response.json()
    await props.dispatch(fetchTypeSuccess(data))
}

let Types = (props) => {
    return (    
        <div className="types">
            <div >TYPES:</div>
            {props.types.map(key => <li
                key={key.type.name}
                id={key.type.url}
                onClick={(e) => handleClickType(props, e).catch(error => props.dispatch(fetchTypeFailure(String(error))))}>
                {key.type.name.toUpperCase()}</li>)}
        </div>)
}

let mapStateToProps = (state) => {
    return {
        types: state.pokemonReducer.pokemon.types
    }
}

export default connect(mapStateToProps)(Types)
