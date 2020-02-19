import React from 'react';
import MainHome from "./app/main/MainHome"
import MainPokemon from './app/main/MainPokemon'
import MainMoves from './app/main/MainMoves';
import MainAbilities from './app/main/MainAbilities';
import MainTypes from './app/main/MainTypes';
import MainItems from './app/main/MainItems';
import Sidebar from './app/Sidebar'
import Header from './app/Header'
import { connect } from "react-redux"
import './assets/css/App.css';

let App = props => {
      return (
            <div className="container">
                  <div className="logo"><a href="https://pokeapi.co">PokéAPI</a></div>
                  <Header />
                  <Sidebar />
                  <div className="app">
                        {props.mainScreen === "home" && <MainHome />}
                        {props.mainScreen === "pokemon" && <MainPokemon />}
                        {props.mainScreen === "moves" && <MainMoves />}
                        {props.mainScreen === "abilities" && <MainAbilities />}
                        {props.mainScreen === "types" && <MainTypes />}
                        {props.mainScreen === "items" && <MainItems />}
                  </div>
            </div>
      )
}

function mapStateToProps(state) {
      return {
            mainScreen: state.UIReducer.mainScreen
      }
}
export default connect(mapStateToProps)(App)
