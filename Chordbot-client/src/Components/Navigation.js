import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{
    render(){
        return( 
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/ChordDisplay">View Chords</Nav.Link>
                <Nav.Link href="/SongsLoadPage">Playlist</Nav.Link>
            </Nav>
            
        </Navbar>)
    }
}