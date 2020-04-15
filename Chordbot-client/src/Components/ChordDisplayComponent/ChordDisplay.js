import React,{useState} from 'react';
//import {musicTest} from './music/chordtest'
//import './SongLoadPage.css';
const ChordDisplay = propps => {
    const [testone,settestone]=useState("imanthi")
    const changeText=()=>{settestone("changed one")}   
    return(
    <div>
        <h1 id="text">You clicked {testone} times</h1>
       <button onClick={changeText}></button>
    </div>
    )
}
export default ChordDisplay;
