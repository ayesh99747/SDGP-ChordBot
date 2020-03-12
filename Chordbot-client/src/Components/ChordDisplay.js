import React,{Component} from 'react';
<<<<<<< HEAD

export default class ChordDisplay extends Component{ //here we try to create home component as a class
    render(){//here we write what should be render when the component is initiate
        return(
            <div>
                Chord display page
=======
export class ChordDisplay extends Component{ //here we try to create home component as a class
    render(){//here we write what should be render when the component is initiate
        return(
            <div className="mt-5 d-flex justify-content-left">
                <h3>This is the Chord display page</h3>
>>>>>>> bd620e0b02a0ad892d4ce1a25cab92a52a42580c
            </div>
        )
    }
}