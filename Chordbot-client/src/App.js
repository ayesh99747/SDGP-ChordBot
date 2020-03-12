import React from 'react';
import './App.css';
import {Home}from './Components/Home'
<<<<<<< HEAD
import {ChordDisplay}from './Components/ChordDisplayComponent/ChordDisplay'
import {SongLoadPage}from './Components/SongsLoadComponent/SongsLoadPage'
import {Navigation} from './Components/NavigationComponent/Navigation'
=======
import {ChordDisplay}from './Components/ChordDisplay'
import {SongLoadPage}from './Components/SongsLoadPage'
import {Navigation} from './Components/Navigation'
>>>>>>> bd620e0b02a0ad892d4ce1a25cab92a52a42580c
import{BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <div>
=======
      <div className="container">
>>>>>>> bd620e0b02a0ad892d4ce1a25cab92a52a42580c
        <Navigation/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/ChordDisplay' component={ChordDisplay}/>
          <Route path='/SongLoadPage' component={SongLoadPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
