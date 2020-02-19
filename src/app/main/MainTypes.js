import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { capitalize, fetchMove, fetchMovelist } from './MainMoves'
import {
    listFetchBegin,
    listFetchSuccess,
    listFetchFailure,
    typeFetchBegin,
    typeFetchSuccess,
    typeFetchFailure,
    changeMainScreen,
    typeClear,
    moveFetchFailure
} from "../../actions/Actions"
import { fetchPokemon, fetchPokemonList } from './MainPokemon'
import { fetchPokemonFailure } from '../../actions/PokemonActions'
import Link from "../../pokemon/Link"
import "../../assets/css/MainTypes.css"


function importAll(r) { return r.keys().map(r); }

export let typeImage = {}
const images = importAll(require.context('../../assets/images/', false, /\.(png|jpe?g|svg)$/))
let typeArray = ["bug", 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water', "shadow", "unknown"]

images.forEach((key, index) => {
    let preload = new Image()
    preload.src = key
})

for (let i = 0; i < typeArray.length; i++) typeImage[typeArray[i]] = images[i]

let useMount = fn => useEffect(fn, [])

let fetchTypeList = async props => {
    props.dispatch(listFetchBegin())
    let firstResponse = await fetch("https://pokeapi.co/api/v2/type")
    let firstData = await firstResponse.json()
    let response = await fetch("https://pokeapi.co/api/v2/type?offset=0&limit=" + firstData.count)
    let data = await response.json()
    props.dispatch(listFetchSuccess(data))
}

export let fetchType = async (props, type) => {
    props.dispatch(typeFetchBegin())
    let response = await fetch("https://pokeapi.co/api/v2/type/" + type)
    let data = await response.json()
    props.dispatch(typeFetchSuccess(data))
}

export let changeScreen = {
    pokemon: (props, e) => {
        if (e.target.id) {
            props.dispatch(changeMainScreen("pokemon"))
            fetchPokemonList(props).catch(error => props.dispatch(listFetchFailure(String(error))))
            fetchPokemon(props, e.target.id).catch(error => props.dispatch(fetchPokemonFailure(String(error))))
        }
    },
    move: (props, e) => {
        if (e.target.id) {
            props.dispatch(changeMainScreen("moves"))
            fetchMovelist(props).catch(error => props.dispatch(listFetchFailure(String(error))))
            fetchMove(props, e.target.id).catch(error => props.dispatch(moveFetchFailure(String(error))))
        }
    },
    type: (props, e) => {
        if (e.target.id) {
            props.dispatch(changeMainScreen("types"))
            fetchTypeList(props).catch(error => props.dispatch(listFetchFailure(String(error))))
            fetchType(props, e.target.id).catch(error => props.dispatch(typeFetchFailure(String(error))))
        }
    }
}
let MainTypes = props => {
    let { name, damage_relations, move_damage_class, pokemon, moves } = props.type
    useMount(() => {
        if (name === undefined && !props.isFetching) {
            fetchTypeList(props).catch(error => props.dispatch(listFetchFailure(String(error))))
            fetchType(props, "normal").catch(error => props.dispatch(typeFetchFailure(String(error))))
        }
        return () => props.dispatch(typeClear())
    })
    if (props.error) return (
        <div>
            <p>The following error has been found during the loading of the requested page:</p>
            <p>{props.error}</p>
        </div>
    )
    if (!props.ready) return <div><p>Loading...</p></div>
    return (
        <div className="main-types">
            <img src={typeImage[props.type.name]} alt={props.type.name}></img>
            <div className="type-data" onClick={(e) => { if (e.target.getAttribute("attr")) fetchType(props, e.target.getAttribute("attr")).catch(error => props.dispatch(typeFetchFailure(String(error)))) }}>
                <h2>TYPE NAME: {capitalize(name)}</h2>
                <p>DAMAGE CLASS: {(move_damage_class) ? move_damage_class.name.toUpperCase() : ""}</p>
                <p>2x DAMAGE FROM: {damage_relations.double_damage_from.map((key, index) =>
                    <Link key={index}><span attr={key.name}>{key.name.toUpperCase()}</span></Link>)}</p>
                <p>2x DAMAGE TO: {damage_relations.double_damage_to.map((key, index) =>
                    <Link key={index}><span attr={key.name}>{key.name.toUpperCase()}</span></Link>)}</p>
                <p>1/2 DAMAGE FROM: {damage_relations.half_damage_from.map((key, index) =>
                    <Link key={index}><span attr={key.name}>{key.name.toUpperCase()}</span></Link>)}</p>
                <p>1/2 DAMAGE TO: {damage_relations.half_damage_to.map((key, index) =>
                    <Link key={index}><span attr={key.name}>{key.name.toUpperCase()}</span></Link>)}</p>
                <p>NO DAMAGE FROM: {damage_relations.no_damage_from.map((key, index) =>
                    <Link key={index}><span attr={key.name}>{key.name.toUpperCase()}</span></Link>)}</p>
                <p>NO DAMAGE TO: {damage_relations.no_damage_to.map((key, index) =>
                    <Link key={index}><span attr={key.name}>{key.name.toUpperCase()}</span></Link>)}
                </p>

            </div>

            <div className="type-pokemon">
                <div className="type-lists">
                    <ul onClick={(e) => changeScreen.pokemon(props, e)} className="type-lists-pokemon">
                        <li>{name.toUpperCase()} POKEMON</li>
                        {pokemon.map((key, index) => <li key={key.pokemon.name} id={key.pokemon.name}>{key.pokemon.name.toUpperCase()}</li>)}
                    </ul>
                    <ul onClick={(e) => changeScreen.move(props, e)} className="type-lists-moves">
                        <li>{name.toUpperCase()} MOVES</li>
                        {moves.map((key, index) => <li key={key.name} id={key.name}>{key.name.toUpperCase()}</li>)}
                    </ul>
                </div>
            </div>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        type: state.typeReducer.type,
        ready: state.typeReducer.ready,
        error: state.typeReducer.error,
        isFetching: state.typeReducer.isFetching,
    }
}

export default connect(mapStateToProps)(MainTypes)
