import React from "react";

export default class FetchSongs extends React.Component{
    async componentDidMount(){
        const url = "http://localhost:8000/playlistSongs/getSongs";
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }

    render(){
        return(
            <div></div>
        )
    }
}