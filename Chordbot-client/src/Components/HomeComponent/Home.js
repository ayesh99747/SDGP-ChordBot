import React,{useState} from 'react';
import {Jumbotron,Grid,Row,Col,Image,Button,Card,ListGroup} from 'react-bootstrap';
import './Home.css';
const Home = propps => {//here we try to create home component 
        return(
            <div>
                <div id="background">
                    <div id="background-overlay">
                        <div class="container-fluid">
                            <div class="song-card">
                                <div class="song-cont">
                                    <iframe width="100%" height="400px" img src="https://images.freeimages.com/images/premium/small-comps/1304/13048661-flamenco-guitar-player.jpg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="song-desc">
                                    <h2>Playlist</h2> 
                                    <Card style={{ width: '100%' }}>
                                        <ListGroup variant="flush">                
                                            <ListGroup.Item>Song one</ListGroup.Item>          
                                        </ListGroup>
                                    </Card>   
                                </div>
                            </div>
                        </div>

                        <div class="container-fluid-two">
                            <div class="song-card">
                                <div class="song-cont">
                                    <iframe width="100%" height="400px" img src="https://images.freeimages.com/images/premium/small-comps/1304/13048661-flamenco-guitar-player.jpg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="song-desc">
                                    <h2>Demo Songs</h2> 
                                    <Card style={{ width: '100%' }}>
                                        <ListGroup variant="flush">                
                                            <ListGroup.Item>Song one</ListGroup.Item>          
                                        </ListGroup>
                                    </Card>   
                                </div>
                            </div>
                        </div>
                        

                    {/* <div className="iconsLinks">
                    <a href="/SongLoadPage">
                    <img className="links" src="https://cdn1.iconfinder.com/data/icons/audio-2/512/musicfile-512.png" alt="chord display page" />
                    <p id="name">Playlist</p>
                    </a>

                    <a href="/RecommendSongs">
                    <img className="links" src="https://www.lakedistrictlodgeholidays.co.uk/wp-content/uploads/2020/01/icon-recommend.png" alt="Recommended song page" />
                    <p id="name">Recommended Songs</p>
                    </a>

                    <a href="/DemoSong">
                    <img className="links" src="https://eversity.edu/sites/default/files/content/paragraphs/text-graphic/checklist.png" alt="Demo song page" />
                    <p id="name">Demo Songs</p>
                    </a>

                    <a href="/FavouritesSong">
                    <img className="links" src="https://img.icons8.com/cotton/2x/like--v3.png" alt="Favourite page" />
                    <p id="name">View Favourites</p>
                    </a>
                    </div> */}
                   {/*  <footer className="footer"> 
                        <p className="footer-text">
                            Copyright 2020 Chordbot.All rights reserved
                        </p>     
                    </footer> */}
                </div>
            </div>
        </div>     
        );
    }
export default Home;