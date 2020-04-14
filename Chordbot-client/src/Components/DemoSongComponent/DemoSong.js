import React,{Component} from 'react';
import './DemoSong.css';
export class DemoSong extends Component{ //here we try to create home component as a class
    render(){//here we write what should be render when the component is initiate
        return(
            <div id="background-song">
                <div className="songload-layer">
                 

                </div>
            </div>
        );
    }
}