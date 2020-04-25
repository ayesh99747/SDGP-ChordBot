import React, {useState, useEffect} from "react";
import "./ChordDisplay.css";
import MusicPlayer from "react-responsive-music-player";
import playlist from "../../services/shapes/audio/playlist";
import queryString from "query-string";
import axios from "axios";
const ChordDisplay = ({ location, match, ...props }) => {
  //here we create Chord display as a functional component 
  const [chords,setchords]=useState(null)
  const [demoChords, setdemoChords] = useState(null);
  const [selectedTrack, setSelectedtrack] = useState([
    {
      url: "",
      cover: "",
      title: "",
      artist: [],
    },
  ]);
  useEffect(() => {
    const search = location ? queryString.parse(location.search) : {};
    if (search.type === "playlist") {//check by the song type and run the function
      fetchsongsById(search.id);
    } else {
      fetchdemosongsById(search.id);
    }
    playableSong(playlist, search);
  },[location.pathname]);

  function fetchsongsById(url) {
    const apiURL = `http://localhost:8000/playlistSongs/getChords/${url}`
    axios.get(apiURL).then((res) => {
      //var data = res.data;
      setchords (res.data.message);
    });
  }

  function fetchdemosongsById(urlDemo) {
    const apiURLDemo = `http://localhost:8000/demoSongs/getChords/${urlDemo}`;
    axios.get(apiURLDemo).then((res) => {
      //var data = res.data;
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
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <div className= "test">
            <div className="music-info">
              <MusicPlayer mode="vertical" playlist={selectedTrack} />
            </div>
          </div>
            {chords!==null  && chords.length> 0 && chords.map((item) => 
            
              <div className="scrollmenu">
                <p>{item}</p>
              </div>  
              
            )}
            {demoChords!==null  && demoChords.length> 0 && demoChords.map((item) => 
              <div className="scrollmenu">
                <p>{item}</p>
              </div>     
            )}  
      </div>
   
  );
};
export default ChordDisplay;
