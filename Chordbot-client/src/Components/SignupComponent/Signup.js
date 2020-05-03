import React,{useState} from 'react';
import './Signup.css';
import axios from 'axios';
import{Button,Form,FormGroup,Label,Input} from 'react-bootstrap';
const Signup = propps => {
        const [state, setState] = useState({
            name: 'Harry',
            userName:'black',
            email: 'harry@gmail.com',
            password: '12345'
        })

        const handleChange = e => {
            const { name, value } = e.target
            setState({ ...state, [name]: value })
        }
        
        const handleSubmit = () => {
            axios.post('http://localhost:8000/users/addUser', {
                customerName: state.name, 
                emailAddress: state.email, 
                username: state.userName,
                password: state.password
            })
            .then(res => alert(res.data.message))
            .catch(() => alert('Error'))
        }

        
        
        
        return(
        <div className="pic">
        <div className="pic-overlay">
        <div className="wrap">
            <form className="Signup-form">
                <h1 className="text-center" id="font">
                    <span  className="login-name">Sign up</span>
                </h1>
                <FormGroup>
                    <input name="name" type="name" placeholder="name" onChange={handleChange}/>

                </FormGroup>
                <FormGroup>
                    <input name="userName" type="username" placeholder="Username" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <input name="email" type="email" placeholder="Email" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <input name="password" type="password" placeholder="Password" onChange={handleChange}/>
                </FormGroup>
                <Button id="btn" className="btn-lg btn-dark btn-block" onClick={handleSubmit}>Sign up</Button>
                
            </form>
        </div>
        </div>
        </div>
        )
    }

export default Signup;