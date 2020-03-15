<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
function Navigation() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
            <li className="nav-item active">
                <a className="nav-link text-white text-uppercase ml-5" href="/">Home&nbsp;<i class="fas fa-home"></i> <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white text-uppercase ml-5" href="/SongsLoadPage">Playlist</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white text-uppercase ml-5" href="/ChordDisplay">View Chords</a>
            </li>
            
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    );
}
export default  Navigation;
=======
=======
>>>>>>> 59e12b118eada73dd05dd4de5d799aee01c7dd14
import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import './Navigation.css';
export class Navigation extends Component{
    render(){
        return( 
<<<<<<< HEAD
        <Navbar bg="" variant="dark" className="contain">
            <Navbar.Brand > Chord-bot</Navbar.Brand>
=======
        <Navbar bg="dark" variant="dark" className="contain">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
>>>>>>> 59e12b118eada73dd05dd4de5d799aee01c7dd14
            <Nav className="ml-auto ">
                <Nav.Link className="text-white text-uppercase ml-4 " href="/">Home</Nav.Link>
                <Nav.Link className="text-white text-uppercase ml-4" href="/ChordDisplay">View Chords</Nav.Link>
                <Nav.Link className="text-white text-uppercase ml-4" href="/SongsLoadPage">Playlist</Nav.Link>
            </Nav>
        </Navbar>
        )
    }
<<<<<<< HEAD
}
>>>>>>> bd620e0b02a0ad892d4ce1a25cab92a52a42580c
=======
}
>>>>>>> 59e12b118eada73dd05dd4de5d799aee01c7dd14
