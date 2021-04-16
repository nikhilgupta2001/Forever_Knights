import React from 'react';
import Piechart from './Piechart';

const Video = (props) => {
    console.log(props);
    return (
        <div className="conatiner">
        <div  className="row shadow-lg p-4 " style={{ backgroundColor: "#ffffff",height:""}} >
            <div className="col-md-4">
                <video style={{ width: "100%" }} height=""
                    id="my-video"
                    class="video-js"
                    controls
                    preload="auto"
                    // width="100%
                    // height="200px"
                     poster={props.props.thumbnailurl}
                    data-setup=" "
                >
                    <source src={props.props.videoUrl} type="video/mp4" />
                    <source src="MY_VIDEO.webm" type="video/webm" />
                    <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider upgrading to a
                        web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
                        >supports HTML5 video</a
                        >
                    </p>
                </video>
            </div>
            <div className="col-md-3 col-sm-12 text-center shadow-sm border p-2" style={{fontStyle:"italic",borderRadius:"10%"}}>
                 {props.props.writeup}
                {/* standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, */}
            </div>
            <div className="col-md-5 col-sm-12 shadow-sm border" style={{fontStyle:"italic",borderRadius:"10%"}}>
                {/* <canvas className="canvas"></canvas>
        {appendchart}
            </div> */}
                <Piechart views={props.props.views} req={props.props.requiredviews} />
            </div>
        </div>
        </div>
    )
};

{/* estimated={url.estimated} */}
export default Video;

