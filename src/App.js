import React from 'react';
import MainPokemon from './app/MainPokemon'
import Sidebar from './app/Sidebar'
import { connect } from "react-redux"
import {
      fetchPokemonListBegin,
      fetchPokemonListSuccess,
      fetchPokemonListFailure,
      fetchPokemonBegin,
      fetchPokemonSuccess,
      fetchPokemonFailure,
      fetchPokemonSpeciesBegin,
      fetchPokemonSpeciesSuccess,
      fetchPokemonSpeciesFailure,

} from './actions/Actions'
import './css/App.css';


class App extends React.Component {
      constructor(props) {
            super(props);
            this.state = {}
      }

      componentDidMount = (props) => {
            this.fetchPokemonAPI().catch(error => props.dispatch(fetchPokemonListFailure(String(error))))
      }

      fetchPokemonAPI = async () => {
            this.props.dispatch(fetchPokemonListBegin());
            let response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=964")
            let data = await response.json()
            await this.props.dispatch(fetchPokemonListSuccess(data))
            await this.fetchPokemon(1).catch(error => {
                  this.props.dispatch(fetchPokemonFailure(String(error)))
                  this.props.dispatch(fetchPokemonSpeciesFailure(String(error)))
            })
      }

      fetchPokemon = async number => {
            this.props.dispatch(fetchPokemonBegin())
            let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + number)
            let data = await response.json()
            await this.props.dispatch(fetchPokemonSuccess(data))
            this.props.dispatch(fetchPokemonSpeciesBegin())
            let species = await fetch(data.species.url)
            let speciesData = await species.json()
            await this.props.dispatch(fetchPokemonSpeciesSuccess(speciesData))
      }

      render() {
            if (this.props.error.filter(key => key !== null).length > 0) {
                  return (
                        <div>
                              <p>The following errors were found:</p>
                              {this.props.error.map(key => {
                                    return key !== null ? <p key={key}>{key}</p> : null
                              })}
                        </div>
                  )
            }
            if (this.props.ready.filter(key => key !== true).length > 0) { return <div><p>Loading...</p></div> }

            return (
                  <div className="container">
                        <div className="logo"><a href="https://pokeapi.co">PokéAPI</a></div>
                        <div className="header"><h1>POKéDEX</h1></div>
                        <Sidebar />
                        <MainPokemon />
                  </div>
            )
      }
}

function mapStateToProps(state) {
      return {
            pokemonList: state.pokemonListReducer.pokemonList,
            ready: [state.pokemonListReducer.ready, state.pokemonReducer.ready, state.pokemonSpeciesReducer.ready],
            error: [state.pokemonListReducer.error, state.pokemonReducer.error, state.pokemonSpeciesReducer.error],
            screen: state.UIReducer.screen,
      }
}
export default connect(mapStateToProps)(App)
