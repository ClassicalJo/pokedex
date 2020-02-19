import React from "react"
import { connect } from "react-redux"
import { closeAllScreens, changeMainScreen, moveFetchFailure, listFetchFailure } from "../actions/Actions"
import { fetchMove, fetchMovelist } from "../app/main/MainMoves"
import Link from "../pokemon/Link"

function bubbleSort(list) {
    let swapped
    let n = list.length - 1
    do {
        swapped = false
        for (let i = 0; i < n; i++) {
            // compare pairs of elements
            // if left element > right element, swap
            if (list[i][0] > list[i + 1][0]) {
                const temp = list[i]
                list[i] = list[i + 1]
                list[i + 1] = temp
                swapped = true
            }
        }
    }
    // continue swapping until sorted
    while (swapped)

    return list
}

function levelsFirstSort(list) {
    let len = list.length
    let cut = 0
    for (let i = 0; i < len; i++) {
        if (list[i][0] === 0) { cut++ }
    }
    let temp = list.splice(0, cut)
    list = list.concat(temp)
    return list

}

let handleClick = (props, e) => {
    props.dispatch(closeAllScreens())
    props.dispatch(changeMainScreen("moves"))
    fetchMove(props, e.target.id).catch(error => props.dispatch(moveFetchFailure(String(error))))
    fetchMovelist(props).catch(error => props.dispatch(listFetchFailure(String(error))))
}

let MoveScreen = (props) => {
    let movesArray = []
    props.moves.map((x) => movesArray.push([x.version_group_details[0].level_learned_at, x.move.name]))
    bubbleSort(movesArray)
    levelsFirstSort(movesArray)
    return (
        <div className="screen">
            {movesArray.map(key => <p key={key[1]}> <Link><span id={key[1]} key={key[1]} onClick={(e) => handleClick(props, e)}>{key[1].toUpperCase()}</span></Link>learned at: {key[0]}</p>)}
            <p onClick={() => props.dispatch(closeAllScreens())} className="screen-close" > Close screen</p>
        </div >
    )

}

function mapStateToProps(state) {
    return {
        moves: state.pokemonReducer.pokemon.moves
    }
}
export default connect(mapStateToProps)(MoveScreen)

