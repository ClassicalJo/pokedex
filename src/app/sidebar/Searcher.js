import React from 'react'
import { connect } from 'react-redux'
import { listAddFilter } from '../../actions/Actions'

let handleChange = (props, e) => {
    if (e.target.value === "") props.dispatch(listAddFilter(null))
    else props.dispatch(listAddFilter(e.target.value.toLowerCase().split("")))
}

let Searcher = (props) => {
    if (props.mainScreen === "home") return <div className="searcher"></div>
    return (
        <div className="searcher">
            <input
                id="page-searcher"
                type="text"
                defaultValue="Filter by name:"
                onClick={(e)=> e.target.value = ""}
                onChange={(e) => handleChange(props, e)} />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        results: state.listReducer.list.results,
        mainScreen: state.UIReducer.mainScreen
    }
}

export default connect(mapStateToProps)(Searcher)
