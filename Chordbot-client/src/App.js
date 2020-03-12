import React from 'react';
import './App.css';
import {Home}from './Components/Home'
import {ChordDisplay}from './Components/ChordDisplayComponent/ChordDisplay'
import {SongLoadPage}from './Components/SongsLoadComponent/SongsLoadPage'
import {Navigation} from './Components/NavigationComponent/Navigation'
import{BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
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
