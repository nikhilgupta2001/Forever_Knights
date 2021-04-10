import React from 'react';

const Video = (url) => {
    console.log(url);
    return (
       
        <div className="card">
            
            <video data-aos="zoom-in" style={{width:"100%",objectFit: "fill"}}
                id="my-video"
                className="video-js"
                controls
                preload="auto"
                width=""
                height="300px"
                poster={url.url.thumbnailurl}
                data-setup=" "
            >
                <source src={url.url.videoUrl} type="video/mp4" />
                <source src="MY_VIDEO.webm" type="video/webm" />
            </video>
          
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{url.url.writeup}</p>
            </div>
        </div >


    )
}

export default Video;


