import React from 'react'
import Searcher from './sidebar/Searcher'
import List from './sidebar/List'

let Sidebar = () => {
    return (
        <div className="sidebar">
            <List />
            <Searcher />
        </div>
    )
}

export default Sidebar
