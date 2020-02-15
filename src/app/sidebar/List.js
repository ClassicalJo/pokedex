import React from 'react'
import { connect } from "react-redux"
import {
    fetchPokemonBegin,
    fetchPokemonSuccess,
    fetchPokemonSpeciesBegin,
    fetchPokemonSpeciesSuccess,
    fetchPokemonFailure,
    fetchPokemonSpeciesFailure,
} from "../../actions/Actions"

let generateDatabase = (results) => {
    let allPokemon = {}
    let allPokemonLetters = {}
    results.map(key => allPokemon[key.name] = new Set(key.name.split("")))
    Object.keys(allPokemon).forEach(key => Array.from(allPokemon[key]).map(letter => {
        if (allPokemonLetters[letter] === undefined) allPokemonLetters[letter] = []
        allPokemonLetters[letter].push(key)
    }))
    let db = { pokemon: allPokemon, letters: allPokemonLetters }
    return db
}

let generateFilteredPokemonList = (filters, db) => {
    let pokemonList = []

    // First tries to find perfect match
    if (db.pokemon[filters.join("")] !== undefined) return [filters.join("")]

    // Else, counts how many times every character appears in each pokemon name and assigns it a value, returning only those in which the value is equal or bigger than the amount of filters applied.
    filters.forEach(key => { if (db.letters[key] !== undefined) db.letters[key].forEach(pokemon => pokemonList.push(pokemon)) })
    let filteredPokemon = {}
    for (let i = 0; i < pokemonList.length; i++) {
        filteredPokemon[pokemonList[i]] === undefined ? filteredPokemon[pokemonList[i]] = 1 : filteredPokemon[pokemonList[i]]++
    }
    let filteredPokemonList = Object.keys(filteredPokemon).filter(key => filteredPokemon[key] >= filters.length)
    return filteredPokemonList
}

let filterResults = (results, filters, db) => {
    let pokemonList = generateFilteredPokemonList(filters, db)
    let filteredResults = Object.keys(results).filter(key => pokemonList.indexOf(results[key].name) !== -1)
    let filteredList = []
    filteredResults.forEach(key => filteredList.push(results[key]))
    return filteredList
}

let handleClickPokemon = async (props, e) => {
    props.dispatch(fetchPokemonBegin())
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + e.target.id)
    let data = await response.json()
    await props.dispatch(fetchPokemonSuccess(data))
    props.dispatch(fetchPokemonSpeciesBegin())
    let species = await fetch(data.species.url)
    let speciesData = await species.json()
    await props.dispatch(fetchPokemonSpeciesSuccess(speciesData))
}

let handleError = (props, error) => {
    props.dispatch(fetchPokemonFailure(String(error)))
    props.dispatch(fetchPokemonSpeciesFailure(String(error)))
}

let List = (props) => {
    if (!props.ready) return <p> Loading...</p>
    let db = generateDatabase(props.pokemonList.results, props)
    let results = (props.filter !== null) ? filterResults(props.pokemonList.results, props.filter, db) : props.pokemonList.results
    if (results.length < 1) return <div className="pokemon-list"><p>No results found!</p></div>
    return (
        <div className="pokemon-list">
            {results.map(key =>
                <input
                    readOnly={true}
                    key={key.name}
                    value={key.name.toUpperCase()}
                    id={key.name}
                    className="pokemonButton"
                    onClick={(e) => handleClickPokemon(props, e).catch(error => handleError(props, error))}
                />)}
        </div>
    )
}
function mapStateToProps(state) {
    return {
        pokemonList: state.pokemonListReducer.pokemonList,
        ready: state.pokemonListReducer.ready,
        filter: state.pokemonListReducer.filter,
        results: state.pokemonListReducer.pokemonList.results
    }
}
export default connect(mapStateToProps)(List)
