<<<<<<< HEAD
import React, {Route,useState,useEffect} from "react";
import "./ChordDisplay.css";
import MusicPlayer from "react-responsive-music-player";
import {Jumbotron,Grid,Row,Col,Image,Button,Card,ListGroup,Container} from 'react-bootstrap';
import playlist from "./playlist";
const ChordDisplay = (props)=> {
  //here we try to create Chord display as a functional component 
    /*const [chordOne,setchordOne]=useState()
    const [chordTwo,setchordTwo]=useState()
    const [chordThree,setchordThree]=useState()
    const [chordFour,setchordFour]=useState()
    const [chordFive,setchordFive]=useState()*/
    useEffect(() =>{ 
      const {songid} =props.match.params;
      console.log("id",songid);
    },[props.location.pathname]);  
    

    //here we write what should be return when the component is initiate
=======
import React, { Component } from "react";
import "./ChordDisplay.css";
import MusicPlayer from "react-responsive-music-player";
import playlist from "./playlist";

export class ChordDisplay extends Component {
  //here we try to create home component as a class
  render() {
    //here we write what should be render when the component is initiate
>>>>>>> 4be99ac2adc8e618cbe0ed5a03d76ed0f3196527
    return (
      <div>
        <main>
          <div style={{ marginLeft: "25%",marginTop:'2%' }}>
            <MusicPlayer mode="vertical" playlist={playlist} />
          </div>
<<<<<<< HEAD
          <div style={{width: "50%", border: " 5px solid #fff" ,padding: "30px",marginLeft: "25%",marginTop:'3%'}}>
                {/* <h1 style={{ textAlign: "left", marginLeft: "20px" }}>Chords</h1>  */}
                <Card style={{ width: '100%',height:'50px' }}>  
                    <ListGroup variant="flush">                
                        <Container>                    
                            <Row md={4}>   
                                <Col>h</Col>
                                <Col>hl</Col>
                                <Col>h</Col>
                                <Col>h</Col>
                                <Col>h</Col>
                            </Row>
                        </Container>         
                    </ListGroup>
                </Card>   
          </div>
=======
          <div
            style={{
              width: "50%", 
              border: " 5px solid #fff" ,
              padding: "30px",
              marginLeft: "25%",
              marginTop:'3%'
            }}
          >
            <h1 style={{ textAlign: "left", marginLeft: "20px" }}>Chords</h1>
            <label style={{ textAlign: "justify", marginLeft: "20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </label>
            <br></br>
            <div style={{ flexDirection: "row", }}>
              <button style={{marginLeft:'30%',marginTop:'5%',}}>PIANO</button>
              <button style={{marginLeft:'30%'}}>GUITAR</button>
            </div>
          </div>
       
>>>>>>> 4be99ac2adc8e618cbe0ed5a03d76ed0f3196527
        </main>
      </div>
    );
  }
<<<<<<< HEAD
export default ChordDisplay;
=======
}
>>>>>>> 4be99ac2adc8e618cbe0ed5a03d76ed0f3196527
