import React,{Component}from 'react';
import './Login.css';
import{Button,Form,FormGroup,Label,Input} from 'react-bootstrap';
export class Login extends Component{
    render(){
        return(
        <div className="wrap">
            <form className="login-form">
                <h1 className="text-center" id="font">
                    <span  className="font-weight-bold">User Login</span>
                </h1>
                <FormGroup>
                    <input type="username" placeholder="Username"/>
                </FormGroup>
                <FormGroup>
                    <input type="password" placeholder="Password"/>
                </FormGroup>
                <Button id="btn" className="btn-lg btn-dark btn-block">Log in</Button>
                <div id="signcss"className="text-center">
                    <a href="/Signup">Sign up</a>
                </div>
            </form>
        </div>
        )
    }

}