import React from 'react'
import { connect } from "react-redux"
import {
    moveFetchSuccess,
    moveFetchBegin,
    abilityFetchBegin,
    abilityFetchSuccess,
    typeFetchBegin,
    typeFetchSuccess,
    moveFetchFailure,
    abilityFetchFailure,
    typeFetchFailure,
    itemFetchBegin,
    itemFetchSuccess,
    itemFetchFailure,
} from "../../actions/Actions"
import {
    fetchPokemonBegin,
    fetchPokemonSuccess,
    fetchPokemonFailure,
    fetchPokemonSpeciesBegin,
    fetchPokemonSpeciesSuccess,
    fetchPokemonSpeciesFailure,
} from "../../actions/PokemonActions"

let generateDatabase = (results) => {
    let allPokemon = {}
    let allPokemonLetters = {}
    results.map(key => allPokemon[key.name] = new Set(key.name.split("")))
    Object.keys(allPokemon).forEach(key => Array.from(allPokemon[key]).forEach(letter => {
        if (allPokemonLetters[letter] === undefined) allPokemonLetters[letter] = []
        allPokemonLetters[letter].push(key)
    }))
    let db = { pokemon: allPokemon, letters: allPokemonLetters }
    return db
}

let generateFilteredPokemonList = (filters, db) => {
    let list = []

    // First tries to find perfect match
    if (db.pokemon[filters.join("")] !== undefined) return [filters.join("")]

    // Else, counts how many times every character appears in each pokemon name and assigns it a value, returning only those in which the value is equal or bigger than the amount of filters applied.
    filters.forEach(key => { if (db.letters[key] !== undefined) db.letters[key].forEach(pokemon => list.push(pokemon)) })
    let filteredPokemon = {}
    for (let i = 0; i < list.length; i++) {
        filteredPokemon[list[i]] === undefined ? filteredPokemon[list[i]] = 1 : filteredPokemon[list[i]]++
    }
    let filteredPokemonList = Object.keys(filteredPokemon).filter(key => filteredPokemon[key] >= filters.length)
    return filteredPokemonList
}

let filterResults = (results, filters, db) => {
    let list = generateFilteredPokemonList(filters, db)
    let filteredResults = Object.keys(results).filter(key => list.indexOf(results[key].name) !== -1)
    let filteredList = []
    filteredResults.forEach(key => filteredList.push(results[key]))
    return filteredList
}

let handleClick = {
    pokemon: async (props, e) => {
        if (e.target.id) {
            props.dispatch(fetchPokemonBegin())
            let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + e.target.id)
            let data = await response.json()
            await props.dispatch(fetchPokemonSuccess(data))
            props.dispatch(fetchPokemonSpeciesBegin())
            let species = await fetch(data.species.url)
            let speciesData = await species.json()
            await props.dispatch(fetchPokemonSpeciesSuccess(speciesData))
        }
    },
    moves: async (props, e) => {
        if (e.target.id) {
            props.dispatch(moveFetchBegin())
            let response = await fetch("https://pokeapi.co/api/v2/move/" + e.target.id)
            let data = await response.json()
            await props.dispatch(moveFetchSuccess(data))
        }
    },
    abilities: async (props, e) => {
        if (e.target.id) {
            props.dispatch(abilityFetchBegin())
            let response = await fetch("https://pokeapi.co/api/v2/ability/" + e.target.id)
            let data = await response.json()
            await props.dispatch(abilityFetchSuccess(data))
        }
    },
    types: async (props, e) => {
        if (e.target.id) {
            props.dispatch(typeFetchBegin())
            let response = await fetch("https://pokeapi.co/api/v2/type/" + e.target.id)
            let data = await response.json()
            await props.dispatch(typeFetchSuccess(data))
        }
    },
    items: async (props, e) => {
        if (e.target.id) {
            props.dispatch(itemFetchBegin())
            let response = await fetch("https://pokeapi.co/api/v2/item/" + e.target.id)
            let data = await response.json()
            await props.dispatch(itemFetchSuccess(data))
        }
    }
}

let handleError = {
    pokemon: (props, error) => {
        props.dispatch(fetchPokemonFailure(String(error)))
        props.dispatch(fetchPokemonSpeciesFailure(String(error)))
    },
    moves: (props, error) => {
        props.dispatch(moveFetchFailure(String(error)))
    },
    abilities: (props, error) => {
        props.dispatch(abilityFetchFailure(String(error)))
    },
    types: (props, error) => {
        props.dispatch(typeFetchFailure(String(error)))
    },
    items: async (props, error) => {
        props.dispatch(itemFetchFailure(String(error)))
    }
}

let List = (props) => {
    if (props.mainScreen === "home") return <div className="list"><p></p></div>
    if (!props.ready) return <div className="list"><p> Loading...</p></div>
    let db = generateDatabase(props.list.results, props)
    let results = (props.filter !== null) ? filterResults(props.list.results, props.filter, db) : props.list.results
    if (results.length < 1) return <div className="list"><p>No results found!</p></div>
    return (
        <div
            className="list"
            onClick={(e) => handleClick[props.mainScreen](props, e).catch(error => handleError[props.mainScreen](props, error))}>
            {results.map(key =>
                <input
                    readOnly={true}
                    key={key.name}
                    value={key.name.toUpperCase()}
                    id={key.name}
                    className="pokemonButton"

                />)}
        </div>
    )
}
function mapStateToProps(state) {
    return {
        list: state.listReducer.list,
        ready: state.listReducer.ready,
        filter: state.listReducer.filter,
        results: state.listReducer.list.results,
        mainScreen: state.UIReducer.mainScreen,
    }
}
export default connect(mapStateToProps)(List)
