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
                <Nav.Link className="text-white text-uppercase ml-4 " href="/">Discover</Nav.Link>
                <Nav.Link className="text-white text-uppercase ml-4" href="/Signup">Create Account</Nav.Link>
                
                <Nav.Link className="text-white text-uppercase ml-4" href="/Login">Log in</Nav.Link>
            </Nav>
        </Navbar>
        )
    }
}