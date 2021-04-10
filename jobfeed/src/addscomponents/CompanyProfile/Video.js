import React from 'react';
import Piechart from './Piechart';

const Video = (url) => {

    return (
        <div className="row">
            <div className="col-md-4">
                <video style={{width:"100%"}}
                    id="my-video"
                    class="video-js"
                    controls
                    preload="auto"
                    width="100%"
                    height="200px"
                    // poster="https://lyricsraag.com/wp-content/uploads/2021/03/Tujhe-Bhoolna-Toh-Chaaha-Jubin-lyrics-English.jpg"
                    data-setup=" "
                >
                    <source  type="video/mp4" />
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
            <div className="col-md-3 col-sm-12  ">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                {/* standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, */}
            </div>
            <div className="col-md-5 col-sm-12">
                {/* <canvas className="canvas"></canvas>
        {appendchart}
            </div> */}
                <Piechart views ={url.views} estimated = {url.estimated}/>
            </div>
        </div>
    )
};


export default Video;

