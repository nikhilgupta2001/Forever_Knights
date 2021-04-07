import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CompanyUploadVideo = (history) => {
    // https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg
    const [ImageUrl, setImageUrl] = useState("https://milemir.com/wp-content/uploads/2020/11/film-and-vid.jpg");
    const [VideoUrl, setVideoUrl] = useState("video.mp4")
    const [video, setVideo] = useState("");
    const [image, setImage] = useState("");
    const [writeup, setWriteup] = useState("")
    const postDetails = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append("file", image)

        data.append("upload_preset", "Adds_Upload")
        data.append("cloud_name", "addsapp")
        fetch("https://api.cloudinary.com/v1_1/addsapp/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setImageUrl(data.secure_url);
            })
            .catch(err => {
                console.log(err);
            })



        const viddata = new FormData()
        viddata.append("file", video)

        viddata.append("upload_preset", "videoupload")
        viddata.append("cloud_name", "instacloudnikhil")
        fetch("https://api.cloudinary.com/v1_1/instacloudnikhil/video/upload", {
            method: "post",
            body: viddata
        })
            .then(res => res.json())
            .then(viddata => {
                console.log(viddata);
                setVideoUrl(viddata.secure_url);
                console.log(writeup);
                const personData = {
                    ImageUrl,
                    VideoUrl,
                    writeup
                }
                axios.post('http://localhost:5000/companyProfile/savevideo', personData)
                    .then(res => history.push('/'))
                    .catch(err => { console.log("Server fucked you") }
                    );
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div style={{backgroundColor:""}}s>
            <div  class="jumbotron jumbotron-fluid " style={{backgroundColor:"#b4aee8"}}>
                <div class="container">
                    <h1 class="display-4 pt-4 ">Upload Video</h1>
                    <p class="lead pt-4 " style={{margin:"20px",paddingLeft:"20px"}} >Upload the video and  thumbnails that you want to feature in your ADDs.</p>
                </div>
            </div>

            {/* Container */}
            <div className="container"  >
                <div className="row container-fluid">
                    <div className="col-md-7 col-sm-12 border-success">
                        <div className="row">

                            {VideoUrl != "video.mp4" ? <div>

                                <video
                                    id="my-video"
                                    class="video-js"
                                    controls
                                    preload="auto"
                                    width="640"
                                    height="264"
                                    poster={ImageUrl}
                                    data-setup="{}"
                                >

                                    <source src={VideoUrl} type="video/mp4" />
                                    <source src="MY_VIDEO.webm" type="video/webm" />
                                    <p class="vjs-no-js">
                                        To view this video please enable JavaScript, and consider upgrading to a
                                        web browser that
                            <a href="https://videojs.com/html5-video-support/" target="_blank"
                                        >supports HTML5 video</a>
                                    </p>
                                </video>




                            </div>
                                : <div> {VideoUrl == "video.mp4" ? <div>
                                   
                                    <img style={{ width: "300px", height: "300px" }} src={ImageUrl} />
                                </div> 
                                : 
                                <div>
                                    <div class="spinner-grow text-primary" role="status">
                                        <span class="sr-only m-5"></span>
                                    </div>
                                    <div class="spinner-grow text-secondary" role="status">
                                        <span class="sr-only m-5"></span>
                                    </div>
                                    <div class="spinner-grow text-success" role="status">
                                        <span class="sr-only m-5"></span>
                                    </div>
                                    <div class="spinner-grow text-danger" role="status">
                                        <span class="sr-only m-5"></span>
                                    </div>
                                    <div class="spinner-grow text-warning" role="status">
                                        <span class="sr-only m-5"></span>
                                    </div>
                                    <div class="spinner-grow text-info" role="status">
                                        <span class="sr-only m-5"></span>
                                    </div>
                                    <div class="spinner-grow text-light" role="status">
                                        <span class="sr-only m-5"></span>
                                    </div>
                                    <div class="spinner-grow text-dark" role="status">
                                        <span class="sr-only m-5"></span>
                                    </div>

                                </div>

                                }
                                </div>

                            }



                        </div>
                        <div className="row">
                            <input type="file" onChange={(e) => setVideo(e.target.files[0])} class="custom-file-input" id="inputGroupFile01" />
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-1  border-success ">
                        <div className="row card">
                            <img src={ImageUrl} />
                        </div>
                        <div className="row ">
                            <input onChange={(e) => setImage(e.target.files[0])} type="file" class="custom-file-input" id="inputGroupFile01" />
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2 col-sm-12">
                    </div>
                    <div style={{ width: "100%" }} className=" col-md-8 col-sm-12">
                        <div class="form-group border border-dark">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => { setWriteup(e.target.value) }}></textarea>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <button className="btn btn-success btn-block" onClick={postDetails}>Upload</button>
            </div>
        </div>
    )
}

export default CompanyUploadVideo;
