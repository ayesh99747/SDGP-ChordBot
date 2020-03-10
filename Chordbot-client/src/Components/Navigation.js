import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{
    render(){
        return( 
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ml-auto ">
                <Nav.Link className="text-white text-uppercase ml-4 " href="/">Home</Nav.Link>
                <Nav.Link className="text-white text-uppercase ml-4" href="/ChordDisplay">View Chords</Nav.Link>
                <Nav.Link className="text-white text-uppercase ml-4" href="/SongsLoadPage">Playlist</Nav.Link>
            </Nav>
            
        </Navbar>)
    }
}