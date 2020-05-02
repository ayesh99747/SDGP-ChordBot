import React, { useState, useEffect } from "react"; //how it would be converted to a functional component with hooks
import queryString from "query-string";
import isEmpty from "lodash/isEmpty"; //lodash library
import { Row, Col, Image, Card, ListGroup, Container } from "react-bootstrap";
import axios from "axios"; //connecting apis using axios library
import "./Home.css";
const Home = (props) => {
  //create home functional component
  const [playListSongs, setPlayListsonglist] = useState([]); //function to update playlist songs and store it in an array
  const [demoSongs, setDemoSongs] = useState([]); //function to update demo songs and store it in an array
  useEffect(() => {
    //calling functions of APIs
    fetchPlayListSongs();
    fetchDemoSongs();
  }, []);
  async function fetchPlayListSongs() {
    const apiURL = "http://localhost:8000/playlistSongs/getSongs"; //url to get the playlist song detail
    const response = await axios.get(apiURL); //append details by getting from the data list
    setPlayListsonglist(response.data);
  }
  async function fetchDemoSongs() {
    const apiURL = "http://localhost:8000/demoSongs/getSongs";
    const response = await axios.get(apiURL);
    setDemoSongs(response.data);
  }
  return (
    <div>
      <div id="background">
        <div id="background-overlay">
          <div className="container-fluid">
            <div className="song-card">
              <div className="song-cont">
                <img
                  alt="img"
                  src="https://s3.envato.com/files/80988932-1e08-46dd-ba12-17feef229434/inline_image_preview.jpg"
                  frameborder="0"
                />
                <p>
                  Are you a novice player? Pick one of these easy-to-play songs
                  and start jamming! These songs are hand picked to start your
                  journey as a guitar player.Get used to new chords and riffs to
                  advance your skills.
                </p>
              </div>
              <div className="song-desc">
                <h2>Playlist</h2>
                {!isEmpty(playListSongs) //Check if value is not empty.
                  ? playListSongs.map((item) => {
                      //we gonna map the card blocks it is like a for loop
                      return (
                        //here we call the song by id when user clicks on the url it will get the song by songid
                        <Card
                          style={{ width: "100%" }}
                          onClick={() =>
                            props.history.push(
                              //redirecting the user to another route chord display page
                              `/ChordDisplay/?${queryString.stringify({
                                //Serialize an object to a query string
                                id: item.songID, //assign song id and song type to it
                                type: "playlist",
                              })}`
                            )
                          }
                        >
                          <ListGroup variant="flush">
                            <Container>
                              <Row md={4}>
                                <Col xs={2} md={2}>
                                  <Image
                                    src={
                                      "https://www.pinclipart.com/picdir/middle/493-4936384_free-png-colorful-music-note-png-png-image.png"
                                    }
                                    style={{ height: "60px", width: "60px" }}
                                    rounded
                                  />
                                </Col>
                                <Col xs={4} md={4}>
                                  {item.songName}
                                </Col>
                                <Col>{item.artist}</Col>
                                <Col xs={4} md={4}>
                                  {item.genre}
                                </Col>
                              </Row>
                            </Container>
                          </ListGroup>
                        </Card>
                      );
                    })
                  : "Cannot Load playlist songs!!"}
              </div>
            </div>
          </div>

          <div className="container-fluid-two">
            <div className="song-card">
              <div className="song-desc">
                <h2>Demo Songs</h2>
                {!isEmpty(demoSongs)
                  ? demoSongs.map((item) => {
                      //we gonna map the card blocks it is like a for loop
                      return (
                        //here we call the song by id when user clicks on the url it will get the demo song by songid
                        <Card
                          style={{ width: "100%" }}
                          onClick={() =>
                            props.history.push(
                              `/ChordDisplay/?${queryString.stringify({
                                id: item.songID,
                              })}`
                            )
                          }
                        >
                          <ListGroup variant="flush">
                            <Container>
                              <Row md={4}>
                                <Col xs={2} md={2}>
                                  <Image
                                    src={
                                      "https://www.pinclipart.com/picdir/middle/493-4936384_free-png-colorful-music-note-png-png-image.png"
                                    }
                                    style={{ height: "60px", width: "60px" }}
                                    rounded
                                  />
                                </Col>
                                <Col xs={3} md={3}>
                                  {item.songName}
                                </Col>
                                <Col>{item.artist}</Col>
                                <Col>{item.genre}</Col>
                              </Row>
                            </Container>
                          </ListGroup>
                        </Card>
                      );
                    })
                  : "Cannot Load demo songs!!"}
              </div>
              <div className="song-cont">
                <img
                  alt="img"
                  src="https://learnenglishteens.britishcouncil.org/sites/teens/files/field/image/istock_000016090616small_0.jpg"
                  frameborder="0"
                />
                <p>
                  When the world is struggling, there is always the love of
                  music to lift our spirits and to keep us connected and
                  relaxed. Here are some tracks to enhance our sense of
                  togetherness, without physically being together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
