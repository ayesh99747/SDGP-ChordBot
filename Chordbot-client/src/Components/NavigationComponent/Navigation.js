import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import './Navigation.css';
export class Navigation extends Component{
    render(){
        return( 
        <Navbar variant="dark" className="contain">
            <Navbar.Brand > Chord-bot</Navbar.Brand>
            <Nav className="ml-auto ">
                <Nav.Link className="text-white text-uppercase ml-4 " href="/">Home</Nav.Link>
                <Nav.Link className="text-white text-uppercase ml-4" href="/SongLoadPage">Playlist</Nav.Link>
                <Nav.Link className="text-white text-uppercase ml-4" href="/ChordDisplay">View Chords</Nav.Link>
                
            </Nav>
        </Navbar>
        )
    }
}