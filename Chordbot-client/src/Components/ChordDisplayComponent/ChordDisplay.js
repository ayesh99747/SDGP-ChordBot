import React, { useState, useEffect } from "react";
import "./ChordDisplay.css";
import MusicPlayer from "react-responsive-music-player"; //music player lib
import playlist from "../../services/shapes/audio/playlist";
import demoSongs from "../../services/shapes/audio/demoSongs";
import queryString from "query-string";
import isEmpty from "lodash/isEmpty";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
const ChordDisplay = ({ location, match, ...props }) => {
  //here we create Chord display as a functional component
  const [chords, setchords] = useState(null);
  const [demoChords, setdemoChords] = useState(null);
  const [selectedTrack, setSelectedtrack] = useState([
    //functions to update selected song track and store data
    {
      url: "",
      cover: "",
      title: "",
      artist: [],
    },
  ]);
  useEffect(() => {
    const search = location ? queryString.parse(location.search) : {}; //ternary to grab song details from url
    if (search.type === "playlist") {
      //condition to check by the song type and run the function
      fetchsongsById(search.id);
      playableSong(playlist, search);
    } else {
      fetchdemosongsById(search.id);
      playableSong(demoSongs, search);
    }
  }, [location, location.pathname]);

  function fetchsongsById(url) {
    const apiURL = `http://localhost:8000/playlistSongs/getChords/${url}`;
    axios.get(apiURL).then((res) => {
      setchords(res.data.message);
    });
  }

  function fetchdemosongsById(urlDemo) {
    const apiURLDemo = `http://localhost:8000/demoSongs/getChords/${urlDemo}`;
    axios.get(apiURLDemo).then((res) => {
      console.log(res.data);
      setdemoChords(res.data.message);
    });
  }

  // New Fuction for Playing the song
  function playableSong(playlist, search) {
    playlist.map((item) => {
      if (item.songID === search.id) {
        setSelectedtrack([
          {
            url: item.url,
            cover: item.cover,
            title: item.title,
            artist: item.artist,
          },
        ]);
      }
      return "";
    });
  }

  // write what should be return when the component is initiate
  return (
    <div className="mp3card">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <div className="test">
        <div className="music-info">
          <MusicPlayer mode="vertical" playlist={selectedTrack} />
        </div>
      </div>
      {chords !== null && !isEmpty(chords) ? ( //use isEmpty to fetch the data is loading and display them
        chords.map((item) => (
          <div className="scrollmenu">
            <p>{item}</p>
          </div>
        ))
      ) : (
        <ReactBootStrap.Spinner className="spinner" animation="border" /> //If data is still loading display a spinner
      )}

      {demoChords !== null && !isEmpty(demoChords) ? ( //use isEmpty to fetch the data is loading and display them
        demoChords.map((item) => (
          <div className="scrollmenu">
            <p>{item}</p>
          </div>
        ))
      ) : (
        <ReactBootStrap.Spinner className="spinner" animation="border" /> //If data is still loading display a spinner
      )}
    </div>
  );
};
export default ChordDisplay;
