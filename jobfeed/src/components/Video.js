import React from 'react';

const Video = (url) => {
    console.log(url );
    return (
        <div className="col-md-4 mt-2 ">
            <video data-aos="zoom-in" style={{ width: "100%" }}
                id="my-video"
                class="video-js"
                controls
                preload="auto"
                width="500px"
                height="300px"
                poster={url.url.thumbnailurl}
                data-setup=" "
            >
                <source src={url.url.videoUrl} type="video/mp4" />
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

    )
}

export default Video;