import React from 'react'
import { connect } from 'react-redux'
import { pokemonListAddFilter } from '../../actions/Actions'

let handleChange = (props, e) => {
    if (e.target.value === "") props.dispatch(pokemonListAddFilter(null))
    else props.dispatch(pokemonListAddFilter(e.target.value.toLowerCase().split("")))
}

let Searcher = (props) => {
    return (
        <div className="searcher">
            <input
                id="page-searcher"
                type="text"
                defaultValue="Filter by name:"
                onClick={(e)=> e.target.value = ""}
                onChange={(e) => handleChange(props, e)} />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        results: state.pokemonListReducer.pokemonList.results
    }
}

export default connect(mapStateToProps)(Searcher)
