import React, {Route,useState,useEffect} from "react";
import "./ChordDisplay.css";
import MusicPlayer from "react-responsive-music-player";
import {Jumbotron,Grid,Row,Col,Image,Button,Card,ListGroup,Container} from 'react-bootstrap';
import playlist from "./playlist";
import queryString from 'query-string';
import axios from 'axios';
const ChordDisplay = ({location, match, ...props})=> {
  //here we try to create Chord display as a functional component 
    /*const [chordOne,setchordOne]=useState()
    const [chordTwo,setchordTwo]=useState()
    const [chordThree,setchordThree]=useState()
    const [chordFour,setchordFour]=useState()
    const [chordFive,setchordFive]=useState()*/
    useEffect(() =>{ 
      console.log(location)
      const search = location ? queryString.parse(location.search) : {};
      fetchsongsById(search.id)
      const {songid} =match.params;
    },[location.pathname]);  
    function fetchsongsById(url){
      const apiURL=`http://localhost:8000/playlistSongs/getChords/${url}`
      //fetch(apiURL)
         // .then(res => res.json())
          //.then(data=>{
              //console.log(data);
          //})
          alert('fetchsongs');
          axios.get(apiURL)
          .then(res => {
              debugger;
              var data = res.data;
              console.log(res.data)
          });
  };
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
