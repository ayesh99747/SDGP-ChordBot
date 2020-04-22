import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import {Jumbotron,Grid,Row,Col,Image,Button,Card,ListGroup,Container} from 'react-bootstrap';
import axios from 'axios';
import './Home.css';
const Home = (props) => {//create home component 
        const songlist= 
         [
             {songid:"5e975ac65be3535ce474e007",songName:"Johnny B. Goode",imageName:"src/assets/images/jbgoode.jpg",artist:"Chuck Berry",genre:"Rock"},
             {songid:"5e975ac65be3535ce474e008",songName:"Blowin In The Wind",imageName:"src/assets/images/inTheWind.jpg",artist:"Bob Dylan",genre:"Folk/Pop"},
             {songid:"5e975ac65be3535ce474e009",songName:"Stairway To Heaven",imageName:"src/assets/images/stairwayToHeaven.jpg",artist:"Led Zeppelin",genre:"Rock/Hard Rock"},
             {songid:"5e975ac65be3535ce474e00a",songName:"All Along The Watchtower",imageName:"src/assets/images/watchtowerHendrix.jpg",artist:"Jimi Hendrix",genre:"Classic Rock/Psychedelic Rock"},
             {songid:"5e975ac65be3535ce474e00b",songName:"What A Wonderful World",imageName:"src/assets/images/wonderfulWorld.jpg",artist:"Louis Armstrong",genre:"Pop"}
         ]
         const songDemolist= 
         [
             {songid:"5e975ac35be3535ce474e002",songName:"Imagine",imageName:"src/assets/images/imagine.jpg",artist:"John Lennon",genre:"Rock/Pop"},
             {songid:"5e975ac55be3535ce474e003",songName:"Hey Jude",imageName:"src/assets/images/heyJude.jpg",artist:"The Beatles",genre:"Country Music"},
             {songid:"5e975ac55be3535ce474e004",songName:"(I Can’t Get No) Satisfaction",imageName:"src/assets/images/satisfaction.jpg",artist:"The Rolling Stones",genre:"Rock"},
             {songid:"5e975ac55be3535ce474e005",songName:"Good Vibrations",imageName:"src/assets/images/goodVibrations.jpg",artist:"The Beach Boys",genre:"Pop"},
             {songid:"5e975ac65be3535ce474e006",songName:"Smells Like Teen Spirit",imageName:"src/assets/images/teenSpirit.jpg",artist:"Nirvana",genre:"Rock/Alternative"}
         ]
         useEffect(() => {
            fetchsongs();
        });
 
        function App(){
            const[songlist,setsonglist]=useState(null)  
        }    
        function fetchsongs(){
            const apiURL='http://localhost:8000/playlistSongs/getSongs'
            const apiDemoURL='http://localhost:8000/playlistSongs/getSongs'
            //fetch(apiURL)
               // .then(res => res.json())
                //.then(data=>{
                    //console.log(data);
                //})
                //alert('fetchsongs');

                axios.get(apiURL)
                axios.get(apiDemoURL)
                .then(res => {
                    debugger;
                    var data = res.data;
                    console.log(res.data)
                });
        };
        
        return(
            <div>
                 <div id="background">
                    <div id="background-overlay">
                        <div class="container-fluid">
                            <div class="song-card">
                                <div class="song-cont">
                                    < img src="https://chordify.net/img/channels/getting-started.jpg" frameborder="0"/>
                                    <p>Are you a novice player? Pick one of these easy-to-play songs and start jamming! These songs are hand picked to start your journey as a guitar player.Get used to new chords and riffs to advance your skills.</p>                              
                                </div> 
                                <div class="song-desc">
                                    <h2>Playlist</h2> 
                                    {
                                      songlist.map(item =>{//we gonna map the card blocks it is like a for loop
                                        return(
                                             //here we call the song by id when user clicks on the url it will get the song by songid
                                         <Card style={{ width: '100%' }} onClick={()=>props.history.push(`/ChordDisplay/?id=${item.songid}`)}>
                                            <ListGroup variant="flush">                
                                            <Container> 
                                                    <Row md={4}>
                                                        <Col xs={6} md={4}> <Image src={item.imageName} rounded /></Col>
                                                        <Col>{item.songName}</Col>
                                                        <Col>{item.artist}</Col>
                                                        <Col>{item.genre}</Col>
                                                    </Row>
                                            </Container>         
                                            </ListGroup>
                                        </Card>   
                                    )
                                    })
                                    }
                                </div>
                            </div>
                        </div>

                        <div class="container-fluid-two">
                            <div class="song-card">
                                <div class="song-desc">
                                    <h2>Demo Songs</h2> 
                                    {
                                      songDemolist.map(item =>{//we gonna map the card blocks it is like a for loop
                                        return(
                                             //here we call the song by id when user clicks on the url it will get the song by songid
                                         <Card style={{ width: '100%' }} onClick={()=>props.history.push(`/ChordDisplay/?${queryString.stringify({
                                           id: item.songid
                                          })}`)}>  
                                            <ListGroup variant="flush">                
                                            <Container>
                                                    <Row md={4}>
                                                        <Col xs={6} md={4}> <Image src="item.imageName" rounded /></Col>
                                                        <Col>{item.songName}</Col>
                                                        <Col>{item.artist}</Col>
                                                        <Col>{item.genre}</Col>
                                                    </Row>
                                            </Container>         
                                            </ListGroup>
                                        </Card>   
                                    )})
                                    }
                                </div>
                                <div class="song-cont">
                                    <img src="https://learnenglishteens.britishcouncil.org/sites/teens/files/field/image/istock_000016090616small_0.jpg" frameborder="0"/>
                                    <p>When the world is struggling, there is always the love of music to lift our spirits and to keep us connected and relaxed. Here are some tracks to enhance our sense of togetherness, without physically being together.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>     
        );
    }
export default Home;

                    