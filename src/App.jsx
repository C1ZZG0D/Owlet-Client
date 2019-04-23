import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Movies from './components/Movies/Movies';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {
  state = {
    sessionToken: undefined
  }

viewConductor = () => {
return this.state.sessionToken !== undefined ? <Movies token = {this.state.sessionToken} /> :  <Auth tokenHandler = {this.storeSessionToken}/> }

storeSessionToken = (token) => {
  console.log('TOKEN',token)
  this.setState({
    sessionToken: token

  }, console.log(this.state)
  )
}

  render() {
    return (
      <div className = "app"> 
      <Navbar/>
      <Sidebar/>
       {this.viewConductor ()} 
      </div>
    );
  }
}

export default App;


/*
class App extends Component {
  constructor() {
    super();
    console.log('[App.js] Inside the constructor()');

    this.state = {
      name: 'Calcifer',
      ghibliFIlms: []
    }
  }

componentDidMount = () => {
  fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => response.json())
  .then(filmData => {
    this.setState({
      ghibliFilms: filmData
    }, ()=> console.log(this.state))
  })

.catch(err => console.log(err))
}

changeName = () => {
  let newName = this.state.name === 'Calcifer' ? 'Cat Bus' : 'Calcifer'

  this.setState({
    name: newName
  })
}

  render() {
    console.log('[App.js] Inside the render()');
    return (
      <div className = "app"> 
        <button onClick={this.changeName}>{this.state.name}</button>
      </div>
    );
  }
}
 */