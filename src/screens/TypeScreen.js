import React from "react"
import { connect } from "react-redux"
import { closeAllScreens, typeClear, typeFetchFailure } from "../actions/Actions"
import { fetchType } from "../app/main/MainTypes"
import Link from "../pokemon/Link"

let cleanup = (props) => {
    props.dispatch(closeAllScreens())
    props.dispatch(typeClear())
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
        <div className="screen" onClick={(e) => { if (e.target.getAttribute("attr")) fetchType(props, e.target.getAttribute("attr")).catch(error => props.dispatch(typeFetchFailure(String(error)))) }}>
            <p className="screen-text" attr={props.type.name}>TYPE NAME: {props.type.name.toUpperCase()}</p>
            <p className="screen-text">ID: {props.type.id}</p>
            <p className="screen-text">2x DAMAGE FROM: {props.type.damage_relations.double_damage_from.map((key, index) =>
                <Link key={index}><span attr={key.name}>{key.name.toUpperCase()}</span></Link>)}</p>
            <p className="screen-text">2x DAMAGE TO: {props.type.damage_relations.double_damage_to.map((key, index) =>
                <Link key={index}><span attr={key.name}>{key.name.toUpperCase()}</span></Link>)}</p>
            <p className="screen-text">1/2 DAMAGE FROM: {props.type.damage_relations.half_damage_from.map((key, index) =>
                <Link key={index}><span attr={key.name}>{key.name.toUpperCase()}</span></Link>)}</p>
            <p className="screen-text">1/2 DAMAGE TO: {props.type.damage_relations.half_damage_to.map((key, index) =>
                <Link key={index}><span attr={key.name}>{key.name.toUpperCase()}</span></Link>)}</p>
            <p className="screen-text">NO DAMAGE FROM: {props.type.damage_relations.no_damage_from.map((key, index) =>
                <Link key={index}><span attr={key.name}>{key.name.toUpperCase()}</span></Link>)}</p>
            <p className="screen-text">NO DAMAGE TO: {props.type.damage_relations.no_damage_to.map((key, index) =>
                <Link key={index}><span attr={key.name}>{key.name.toUpperCase()}</span></Link>)}</p>
            <p onClick={() => cleanup(props)} className="screen-close">Close screen</p>
        </div >
    )
}

function mapStateToProps(state) {
    return {
        type: state.typeReducer.type,
        ready: state.typeReducer.ready,
        isFetching: state.typeReducer.isFetching,
        error: state.typeReducer.error,
    }
}
export default connect(mapStateToProps)(TypeScreen)
