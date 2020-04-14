import React,{Component} from 'react';
import {Jumbotron,Grid,Row,Col,Image,Button} from 'react-bootstrap';
import './Home.css';
<<<<<<< HEAD
export class Home extends Component{ //here we try to create home component as a classt
=======
export class Home extends Component{ //here we try to create home component as a class
>>>>>>> b50318839ca0696eb00319f3af3cbb780446bf49
    render(){ //here we write what should be render when the component is initiate

        return(
            <div>
                <div id="background">
                    <div id="background-overlay">
                    <div className="iconsLinks">
                    <a href="/SongLoadPage">
                    <img className="links" src="https://cdn1.iconfinder.com/data/icons/audio-2/512/musicfile-512.png" alt="chord display page" />
                    <p id="name"> View Chords</p>
                    </a>

                    <a href="/RecommendSongs">
                    <img className="links" src="https://www.lakedistrictlodgeholidays.co.uk/wp-content/uploads/2020/01/icon-recommend.png" alt="Recommended song page" />
                    <p id="name">Recommended Songs</p>
                    </a>

<<<<<<< HEAD
                    <a href="/DemoSong">
=======
                    <a href="/DemoSongs">
>>>>>>> b50318839ca0696eb00319f3af3cbb780446bf49
                    <img className="links" src="https://eversity.edu/sites/default/files/content/paragraphs/text-graphic/checklist.png" alt="Demo song page" />
                    <p id="name">Demo Songs</p>
                    </a>

                    <a href="/FavouritesSong">
                    <img className="links" src="https://img.icons8.com/cotton/2x/like--v3.png" alt="Favourite page" />
                    <p id="name">View Favourites</p>
                    </a>
                    </div>
<<<<<<< HEAD
                    <footer className="footer"> 
                        <p className="footer-text">
                            Copyright 2020 Chordbot.All rights reserved
                        </p>     
                    </footer>
                </div>
            </div>
        </div>     
=======
                    <footer className="footer">
                            <p className="footer-text">
                                Copyright 2020 Chordbot.All rights reserved
                            </p>      
                    </footer>
                </div>
            </div>
        </div>
            
>>>>>>> b50318839ca0696eb00319f3af3cbb780446bf49
        );
    }
}