import React,{useState} from 'react';
import './Signup.css';
import{Button,Form,FormGroup,Label,Input} from 'react-bootstrap';
const Signup = propps => {
        const [name,setname]=useState("Harry")
        const [username,setusername]=useState("black")
        const [email,setemail]=useState("harry@gmail.com")
        const [password,setpassword]=useState("12345")
        return(
        <div className="pic">
        <div className="pic-overlay">
        <div className="wrap">
            <form className="Signup-form">
                <h1 className="text-center" id="font">
                    <span  className="login-name">Sign up</span>
                </h1>
                <FormGroup>
                    <input type="name" placeholder="Name"/>
                </FormGroup>
                <FormGroup>
                    <input type="username" placeholder="Username"/>
                </FormGroup>
                <FormGroup>
                    <input type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <input type="password" placeholder="Password"/>
                </FormGroup>
                <Button id="btn" className="btn-lg btn-dark btn-block" >Sign up</Button>
                
            </form>
        </div>
        </div>
        </div>
        )
    }

export default Signup;