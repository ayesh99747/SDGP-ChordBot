import React from 'react';
import './App.css';
import {Home}from './Components/HomeComponent/Home'
import {ChordDisplay}from './Components/ChordDisplayComponent/ChordDisplay'
import {SongLoadPage}from './Components/SongLoadComponent/SongLoadPage'
import {Navigation} from './Components/NavigationComponent/Navigation'
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import {ChordDisplay}from './Components/ChordDisplayComponent/ChordDisplay'
import {SongLoadPage}from './Components/SongsLoadComponent/SongsLoadPage'
import {Navigation} from './Components/NavigationComponent/Navigation'
=======
import {ChordDisplay}from './Components/ChordDisplay'
import {SongLoadPage}from './Components/SongsLoadPage'
import {Navigation} from './Components/Navigation'
>>>>>>> bd620e0b02a0ad892d4ce1a25cab92a52a42580c
>>>>>>> 59e12b118eada73dd05dd4de5d799aee01c7dd14
>>>>>>> b72eb91f995e2d2fa7ed05933370bb703ef9fa08
import{BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
      <div>
=======
      <div className="container">
>>>>>>> bd620e0b02a0ad892d4ce1a25cab92a52a42580c
>>>>>>> 59e12b118eada73dd05dd4de5d799aee01c7dd14
>>>>>>> b72eb91f995e2d2fa7ed05933370bb703ef9fa08
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
