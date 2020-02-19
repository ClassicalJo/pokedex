import React, { useEffect } from "react"
import { connect } from "react-redux"
import { capitalize } from "./MainMoves"
import {
    listFetchBegin,
    listFetchSuccess,
    itemClear,
    itemFetchBegin,
    itemFetchSuccess,
    itemFetchFailure,
    listFetchFailure
} from "../../actions/Actions"
import Link from "../../pokemon/Link"

let useMount = fn => useEffect(fn, [])

export let fetchItemList = async props => {
    props.dispatch(listFetchBegin())
    let firstResponse = await fetch("https://pokeapi.co/api/v2/item")
    let firstData = await firstResponse.json()
    let response = await fetch("https://pokeapi.co/api/v2/item?offset=0&limit=" + firstData.count)
    let data = await response.json()
    await props.dispatch(listFetchSuccess(data))
}

export let fetchItem = async (props, item) => {
    props.dispatch(itemFetchBegin())
    let response = await fetch("https://pokeapi.co/api/v2/item/" + item)
    let data = await response.json()
    await props.dispatch(itemFetchSuccess(data))
}

export function returnFirstResult(array) {
    let results = array.filter(key => key.language.name === "en" && key.text !== undefined)
    return results[0].text || ""
}

let MainItems = props => {
    let { ready, error, item, isFetching } = props

    useMount(() => {
        if (!isFetching && item.name === undefined) {
            fetchItemList(props).catch(error => props.dispatch(listFetchFailure(String(error))))
            fetchItem(props, "potion").catch(error => props.dispatch(itemFetchFailure(String(error))))
            return () => props.dispatch(itemClear())
        }
    })
    if (error) return (
        <div>
            <p>The following error has been found during the loading of the requested page:</p>
            <p>{error}</p>
        </div>
    )
    if (!ready) return <div><p>Loading...</p></div>
    return (
        <div className="main-item">
            <div className="main-item-data">
                <h2>ITEM NAME: {capitalize(item.name)}</h2>
                <p>ID: {item.id}</p>
                <p>CATEGORY: {capitalize(item.category.name)}</p>
                <p>EFFECT: {item.effect_entries[0].effect}</p>
                <p>DESCRIPTION: {returnFirstResult(item.flavor_text_entries)}</p>
                <p>ATTRIBUTES: {item.attributes.map((key, index) => <Link key={index}><span>{key.name.toUpperCase()}</span></Link>)}</p>

            </div>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        ready: state.itemReducer.ready,
        error: state.itemReducer.error,
        item: state.itemReducer.item,
        isFetching: state.itemReducer.isFetching
    }
}

export default connect(mapStateToProps)(MainItems)
