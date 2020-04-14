import React,{Component}from 'react';
import './Signup.css';
import{Button,Form,FormGroup,Label,Input} from 'react-bootstrap';
export class Signup extends Component{
    render(){
        return(
        <div className="wrap">
            <form className="Signup-form">
                <h1 className="text-center" id="font">
                    <span  className="font-weight-bold">Sign up</span>
                </h1>
                <FormGroup>
                    <input type="username" placeholder="Name"/>
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
                <Button id="btn" className="btn-lg btn-dark btn-block">Sign up</Button>
                
            </form>
        </div>
         
        )
    }

}