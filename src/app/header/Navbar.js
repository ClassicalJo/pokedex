import React from "react"
import { connect } from "react-redux"
import { changeMainScreen } from "../../actions/Actions"

let Navbar = (props) => {
    return (
        <ul className="navbar">
            <li onClick={() => props.dispatch(changeMainScreen("home"))}>Home</li>
            <li onClick={() => props.dispatch(changeMainScreen("pokemon"))}>Pokemon</li>
            <li onClick={() => props.dispatch(changeMainScreen("moves"))}>Moves</li>
            <li onClick={() => props.dispatch(changeMainScreen("abilities"))}>Abilities</li>
            <li onClick={() => props.dispatch(changeMainScreen("types"))}>Types</li>
            <li onClick={() => props.dispatch(changeMainScreen("items"))}>Items</li>
        </ul>
    )
}

export default connect()(Navbar)
