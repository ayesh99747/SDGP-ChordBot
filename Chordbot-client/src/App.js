import React from 'react';
import './App.css';
import {Home}from './Components/HomeComponent/Home'
import {ChordDisplay}from './Components/ChordDisplayComponent/ChordDisplay'
import {SongLoadPage}from './Components/SongLoadComponent/SongLoadPage'
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
