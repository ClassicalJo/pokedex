import React from 'react'
import { connect } from "react-redux"

function returnFirstResult(array) {
    let results = array.filter(key => key.language.name === "en" && key.flavor_text !== undefined)
    return results[0].flavor_text
}

let Description = (props) => {
    return (
        <div className="description">{returnFirstResult(props.species.flavor_text_entries)}</div>
    )
}

function mapStateToProps(state) {
    return {
        species: state.pokemonSpeciesReducer.species
    }
}

export default connect(mapStateToProps)(Description)
