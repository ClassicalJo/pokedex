import React from "react"
import { connect } from "react-redux"
import { closeAllScreens } from "../actions/Actions"

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


let MoveScreen = (props) => {
    let movesArray = []
    props.moves.map((x) => movesArray.push([x.version_group_details[0].level_learned_at, x.move.name]))
    bubbleSort(movesArray)
    levelsFirstSort(movesArray)
    return (
        <div className="screen">
            {movesArray.map((x) => (<div key={x[1]}> {x[1].toUpperCase().replace(/-/, ' ')} learned at: {x[0]}</div>))}
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

