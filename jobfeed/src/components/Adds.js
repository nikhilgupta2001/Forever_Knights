import React from 'react';
import Video from './Video';
import NavBar from './home/Navbar';

const Adds = () => {
    return (
        <div>
            <NavBar />
            <div style={{ backgroundColor: `rgba(159,67,181)` }} >
                <div className="contianer"  style={{padding:"10px"}}>
                    <div className="container">
                <div className="row " style={{width:"100%"}}>
                        <Video/>
                        <Video/>
                        <Video/>
                        <Video/>
                        <Video/>
                        <Video/>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Adds;