import React from 'react';
import './App.css';
import Home from './Components/HomeComponent/Home'
import ChordDisplay from './Components/ChordDisplayComponent/ChordDisplay'
import {Navigation} from './Components/NavigationComponent/Navigation'
import Login from './Components/UserLoginComponent/Login'
import Signup from './Components/SignupComponent/Signup'
import{BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/ChordDisplay' component={ChordDisplay}/>
          <Route path='/Signup' component={Signup}/>
          <Route path='/Login' component={Login}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
