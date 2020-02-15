import React from "react"
import { connect } from "react-redux"
import { closeAllScreens, clearTypeScreen } from "../actions/Actions"

let cleanup = (props) => {
    props.dispatch(closeAllScreens())
    props.dispatch(clearTypeScreen())
}

let TypeScreen = props => {
    if (props.error !== null)
        return (
            <div className="screen">
                <p>The following error was found during loading:</p>
                <p>{props.error}</p>
                <p className="screen-close" onClick={() => cleanup(props)}>Close screen</p>
            </div>
        )
    if (!props.ready)
        return (
            <div className="screen">
                <p>Loading...</p>
                <p onClick={() => cleanup(props)} className="screen-close">Close screen</p>
            </div>)
    return (
        <div className="screen">
            <div className="screen-text">TYPE NAME: {props.type.name.toUpperCase()}</div>
            <div className="screen-text">ID: {props.type.id}</div>
            <div className="screen-text">
                2x DAMAGE FROM: {props.type.damage_relations.double_damage_from.map((x) => String(x.name.toUpperCase()) + " ")}<br />
                2x DAMAGE TO: {props.type.damage_relations.double_damage_to.map((x) => String(x.name.toUpperCase()) + " ")}</div>
            <div className="screen-text">
                1/2 DAMAGE FROM: {props.type.damage_relations.half_damage_from.map((x) => String(x.name.toUpperCase()) + " ")}<br />
                1/2 DAMAGE TO: {props.type.damage_relations.half_damage_to.map((x) => String(x.name.toUpperCase()) + " ")}</div>
            <div className="screen-text">
                NO DAMAGE FROM: {props.type.damage_relations.no_damage_from.map((x) => String(x.name.toUpperCase()) + " ")}<br />
                NO DAMAGE TO: {props.type.damage_relations.no_damage_to.map((x) => String(x.name.toUpperCase()) + " ")}</div>
            <p onClick={() => cleanup(props)} className="screen-close">Close screen</p>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        type: state.typeScreenReducer.type,
        ready: state.typeScreenReducer.ready,
        isFetching: state.typeScreenReducer.isFetching,
        error: state.typeScreenReducer.error,
    }
}
export default connect(mapStateToProps)(TypeScreen)
