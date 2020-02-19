import React, { useEffect } from "react"
import { connect } from "react-redux"
import { typeImage, changeScreen } from "./MainTypes"
import {
    listFetchBegin,
    listFetchSuccess,
    moveFetchBegin,
    moveFetchSuccess,
    moveFetchFailure,
    moveClear,
    listFetchFailure,
} from "../../actions/Actions"
import "./../../assets/css/MainMoves.css"
let useMount = fn => useEffect(fn, [])

export let fetchMovelist = async props => {
    await props.dispatch(listFetchBegin())
    let firstFetch = await fetch("https://pokeapi.co/api/v2/move")
    let firstResponse = await firstFetch.json()
    let completeFetch = await fetch("https://pokeapi.co/api/v2/move?offset=0&limit=" + firstResponse.count)
    let response = await completeFetch.json()
    await props.dispatch(listFetchSuccess(response))
}

export let fetchMove = async (props, move) => {
    props.dispatch(moveFetchBegin())
    let response = await fetch("https://pokeapi.co/api/v2/move/" + move)
    let data = await response.json()
    await props.dispatch(moveFetchSuccess(data))
}

export let capitalize = string => {
    let array = string.split("")
    array[0] = array[0].toUpperCase()
    return array.join("")
}

let addEffectChance = (string, chance) => {
    if (/\$effect_chance%/.test(string)) {
        let newString = string.replace(/\$effect_chance%/, String(chance + "%"))
        return newString
    }
    return string
}

let MainMoves = props => {
    useMount(() => {
        if (props.move.name === undefined && !props.isFetching) {
            fetchMovelist(props).catch(error => props.dispatch(listFetchFailure(String(error))))
            fetchMove(props, "tackle").catch(error => props.dispatch(moveFetchFailure(String(error))))
        }
        return () => props.dispatch(moveClear())
    })
    if (props.error) return (
        <div>
            <p>The following error has been found during the loading of the requested page:</p>
            <p>{props.error}</p>
        </div>
    )
    if (!props.ready) return <div className="moves">Loading...</div>
    let { id, name, accuracy, type, power, pp, priority, damage_class, effect_chance, effect_entries, machines } = props.move
    return (
        <div className="main-moves">
            <img src={typeImage[type.name]} alt={type.name}></img>
            <div className="moves-data">
                <h2>MOVE NAME: {capitalize(name)}</h2>
                <div className="moves-stats">
                    <p>ID: {id}</p>
                    <p>Move Type: <span onClick={(e) => changeScreen["type"](props, e)} id={type.name}>{type.name.toUpperCase()}</span></p>
                    <p>Damage Class: {damage_class.name.toUpperCase()}</p>
                    <p>Base power: {power}</p>
                    <p>Accuracy: {accuracy}</p>
                    <p>Priority: {priority} </p>
                    <p>Base PP: {pp}</p>
                    <p>Effect chance: {(effect_chance) ? effect_chance + "%" : ""}</p>
                </div>
                <div className="moves-description">
                    <p>{addEffectChance(effect_entries[0].effect, effect_chance)}</p>
                </div>
                {(machines.length !== 0 &&
                    <div className="moves-machines">
                        <p>Learned by movement machine in: </p>
                        {machines.map((key, index) => <p key={index}>{key.version_group.name.toUpperCase()}</p>)}
                    </div>)}
            </div>
        </div >
    )
}

function mapStateToProps(state) {
    return {
        ready: state.moveReducer.ready,
        move: state.moveReducer.move,
        isFetching: state.moveReducer.isFetching,
        error: state.moveReducer.error
    }
}
export default connect(mapStateToProps)(MainMoves)
