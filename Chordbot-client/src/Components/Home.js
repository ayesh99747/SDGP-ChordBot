import React,{Component} from 'react';
import {Jumbotron,Grid,Row,Col,Image,Button} from 'react-bootstrap';
import './Home.css';
export class Home extends Component{ //here we try to create home component as a class
    render(){ //here we write what should be render when the component is initiate
        return(
            <div >
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
                <div className="iconsLinks">
                    <a href="ChordDisplay.js">
                    <img className="links" src="https://image.flaticon.com/icons/svg/1419/1419500.svg" alt="chord display page" />
                    </a>

                    <a href="RecommendSongs.js">
                    <img className="links" src="https://www.lakedistrictlodgeholidays.co.uk/wp-content/uploads/2020/01/icon-recommend.png" alt="chord display page" />
                    </a>

                    <a href="DemoSongs.js">
                    <img className="links" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHuZGrFlqI-kXg0hr_PuHyDeMkNc4Ccd9CG2CZvDzLComjb-Qe" alt="chord display page" />
                    </a>

                    <a href="FavouritesSong.js">
                    <img className="links" src="https://img.icons8.com/cotton/2x/like--v3.png" alt="chord display page" />
                    </a>
                </div>
            </div>
            
        )
    }
}