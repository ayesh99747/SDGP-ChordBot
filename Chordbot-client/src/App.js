import React from 'react';
import './App.css';
import {Home}from './Components/HomeComponent/Home'
import {ChordDisplay}from './Components/ChordDisplayComponent/ChordDisplay'
import {SongLoadPage}from './Components/SongLoadComponent/SongLoadPage'
import {Navigation} from './Components/NavigationComponent/Navigation'
<<<<<<< HEAD
import{DemoSong}from './Components/DemoSongComponent/DemoSong'
import{Login}from './Components/UserLoginComponent/Login'
import{Signup}from './Components/SignupComponent/Signup'
=======
>>>>>>> b50318839ca0696eb00319f3af3cbb780446bf49
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
          <Route path='/DemoSong' component={DemoSong}/>
          <Route path='/Signup' component={Signup}/>
          <Route path='/Login' component={Login}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
