import React,{useState} from 'react';
import './Login.css';
import{Button,Form,FormGroup,Label,Input} from 'react-bootstrap';
import { Route } from 'react-router-dom';
const Login = propps => {
        const [username,setusername]=useState("Harry")
        const [password,setpassword]=useState("1234")
        const [usernameTwo,setusernameTwo]=useState(null)
        const [passwordTwo,setpasswordTwo]=useState(null)
        const [IsCredentialmatch,setIsCredentialmatch]=useState(false)//to show an error message
        const login=()=>{//method check pw and username
        if(usernameTwo===username && passwordTwo===password){
            propps.history.push('/')//route change when no event
        }else
            setIsCredentialmatch(true)//if the user name or password doen not match assign to true
        } 
        
        return(
        <div className="pic">
            <div className="pic-overlay">
            <div className="wrap" >
                <Form className="login-form">
                    <h1 className="text-center" id="font">
                        <span  className="login-name">User Login</span>
                    </h1>
                    <FormGroup>
                        <input onBlur={(event)=>{setusernameTwo(event.target.value);//onBlur use when we take the cursor out from the text box
                            setIsCredentialmatch(false);}
                            } type="username" placeholder="Username"/>
                    </FormGroup>
                    <FormGroup>
                        <input onBlur={(event)=>{setpasswordTwo(event.target.value);
                            setIsCredentialmatch(false);}
                            } type="password" placeholder="Password"/>
                    </FormGroup>
                    <Button id="btn" className="btn-lg btn-dark btn-block"  onClick={login}>Log in</Button>
                
                    
                    <div id="signcss"className="text-center">
                        <p id="account">I don't have an account </p>
                        <a href="/Signup">Sign up</a>
                    </div>
                    {IsCredentialmatch &&
                        <h4 id="errmsg">Wrong username or password</h4>//when the username or pw are not matching with the previous once it will display an error
                    }
                </Form> 
                        {/* <h1> <span  className="font-weight-bold">User Login{usernameTwo}{passwordTwo}</span></h1> */}
            </div>
            </div>
        </div>
        )
    }

export default Login;