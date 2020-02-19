import React from 'react'
import Navbar from './header/Navbar'
import "../assets/css/Header.css"

let Header = () => {
    return (
        <div className="header">
            <div className="title-wrapper">
                <h1>POKéDEX</h1>
            </div>
            <Navbar />
        </div>
    )
}

export default Header
