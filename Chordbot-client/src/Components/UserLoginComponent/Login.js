import React,{useState} from 'react';
import './Login.css';
import{Button,Form,FormGroup,Label,Input} from 'react-bootstrap';
import { Route } from 'react-router-dom';
const Login = propps => {
        const [username,setusername]=useState("Harry")
        const [password,setpassword]=useState("1234")
        const [usernameTwo,setusernameTwo]=useState(null)
        const [passwordTwo,setpasswordTwo]=useState(null)
        const [IsCredentialmatch,setIsCredentialmatch]=useState(false)//to show the error message
        const login=()=>{//method check pw and username
        if(usernameTwo===username && passwordTwo===password){
            propps.history.push("/Home")//route change when no event
        }else
            setIsCredentialmatch(true)//if not matching
        } 
        console.log(usernameTwo)
        console.log(passwordTwo)
        return(
        <div className="wrap">
            <Form className="login-form">
                <h1 className="text-center" id="font">
                    <span  className="font-weight-bold">User Login</span>

                </h1>
                <FormGroup>
                    <input onBlur={(e)=>{setusernameTwo(e.target.value);
                        setIsCredentialmatch(false);}
                        } type="username" placeholder="Username"/>
                </FormGroup>
                <FormGroup>
                    <input onBlur={(e)=>{setpasswordTwo(e.target.value);
                        setIsCredentialmatch(false);}
                        } type="password" placeholder="Password"/>
                </FormGroup>
                <Button id="btn" className="btn-lg btn-dark btn-block"  onClick={login}>Log in</Button>
                <div id="signcss"className="text-center">
                    <a href="/Signup">Sign up</a>
                </div>
                {IsCredentialmatch &&
                    <h4>Wrong username or password</h4>
                }
            </Form>
                   
                    <h1> <span  className="font-weight-bold">User Login{usernameTwo}{passwordTwo}</span></h1>
        </div>
        )
    }

export default Login;