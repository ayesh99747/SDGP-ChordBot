import React, { Component } from "react";
import "./ChordDisplay.css";
import MusicPlayer from "react-responsive-music-player";
import playlist from "./playlist";

export class ChordDisplay extends Component {
  //here we try to create home component as a class
  render() {
    //here we write what should be render when the component is initiate
    return (
      <div>
        <main>
          <div style={{ marginLeft: "25%",marginTop:'2%' }}>
            <MusicPlayer mode="vertical" playlist={playlist} />
          </div>
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
       
        </main>
      </div>
    );
  }
}
