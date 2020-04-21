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
    return (
      <div>
        <main>
          <div style={{ marginLeft: "25%",marginTop:'2%' }}>
            <MusicPlayer mode="vertical" playlist={playlist} />
          </div>
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
        </main>
      </div>
    );
  }
export default ChordDisplay;
