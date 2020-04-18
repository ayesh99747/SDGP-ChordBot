import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import './Navigation.css';
export class Navigation extends Component{
    render(){
        return( 
        <Navbar variant="dark" className="contain">
            <Navbar.Brand > Chord-Bot</Navbar.Brand>
            <Nav className="ml-auto ">
<<<<<<< HEAD
                <Nav.Link className="text-white text-uppercase ml-4 " href="/">Home</Nav.Link>
                <Nav.Link className="text-white text-uppercase ml-4" href="/SongLoadPage">Playlist</Nav.Link>
                <Nav.Link className="text-white text-uppercase ml-4" href="/ChordDisplay">View Chords</Nav.Link>
                <Nav.Link className="text-white text-uppercase ml-4" href="/Login">Register</Nav.Link>
                               
=======
                <Nav.Link className="text-white text-uppercase ml-4 " href="/">Discover</Nav.Link>
                <Nav.Link className="text-white text-uppercase ml-4" href="/Signup">Create Account</Nav.Link>
                
                <Nav.Link className="text-white text-uppercase ml-4" href="/Login">Log in</Nav.Link>
>>>>>>> 0f616a32838aebb284b6676e1d5569c5b2a197b3
            </Nav>
        </Navbar>
        )
    }
}