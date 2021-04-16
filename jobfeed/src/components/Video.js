import { React, useState, Component } from 'react';
import { withRouter } from 'react-router-dom';
import "../../node_modules/video-react/dist/video-react.css";
import { Player, ControlBar, PlayToggle, VolumeMenuButton, BigPlayButton, LoadingSpinner } from 'video-react';
import axios from 'axios';
var counter=true;
var y = "";
class Video extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        player: '',
        timer: '',
    }
    componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));  
         counter = true;    
    }

    handleStateChange(state, prevState) {
        // copy player state to this component's state
        this.setState({
            player: state,
            currentTime: state.currentTime
        }, () => {
            // console.log(this.state.player) ;
            this.state.timer = this.state.player.currentTime
            // console.log("HELLO", " video.js")
             
            console.log(this.state.player.currentTime);
            console.log(this.state.player.duration);
            if ((this.state.player.currentTime == this.state.player.duration && y != this.state.player.currentSrc) ) {
               
                const currentUrl = (this.state.player.currentSrc);
                y = currentUrl;
                var todayDate = new Date().toISOString().slice(0, 10);
                console.log(y);
                // console.log(todayDate);
                axios.post('http://localhost:5000/profile/credit', {
                    "url": `${currentUrl}`,
                    "userName": window.localStorage.getItem("userName"),
                    "date":todayDate
                })
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => { console.log(err) })
               counter=false;
            }
        });


    }
    render() {
        // console.log(this.handleStateChange);
        // console.log(counter);
        // console.log(y);
        return (
            <div className="">
                <Player data-aos="zoom-in"
                    ref={(player) => { this.player = player }}

                    style={{ width: "100%", objectFit: "fill" }}
                    poster={this.props.url.thumbnailurl}
                    src={this.props.url.videoUrl}
                >
                    <ControlBar autoHide={false} disableDefaultControls={""}>
                        <VolumeMenuButton />
                        <PlayToggle />
                        <LoadingSpinner />
                    </ControlBar>

                    <BigPlayButton position="center" />
                </Player>
                <div className="">
                    <h5 className="">Card title</h5>
                    <button type="button" class="btn">
                        <span class="badge badge-primary  ">{Math.floor(this.state.timer) + "/" + Math.floor(this.state.player.duration)}</span>
                    </button>
                    <p className="">{this.props.url.writeup}</p>
                </div>
            </div >
        )
    }
}
export default (withRouter(Video));



































// const Video = (this.props.url) => {
//     console.log(this.props.url);
//     const [play,setPlay]=useState("")
//     // console.log(document.querySelector("video"))
//     return (

//         <div className="card">
//             <Player data-aos="zoom-in" ref={(player) => { setPlay(player) }}
//                 autoPlay
//                 style={{width:"100%",objectFit: "fill"}}
//                 poster={this.props.url.video[0].thumbnailurl}
//                 src={this.props.url.video[0].videoUrl}
//             >
//                 <ControlBar autoHide={false} disableDefaultControls={true}>
//                     <VolumeMenuButton />
//                     <PlayToggle />
//                     <LoadingSpinner />
//                 </ControlBar>

//                 <BigPlayButton position="center" />

//             </Player>
//             {console.log(play.currentTime)}


//             <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">{this.props.url.writeup}</p>
//             </div>
//         </div >


//     )
// }

// export default Video;






