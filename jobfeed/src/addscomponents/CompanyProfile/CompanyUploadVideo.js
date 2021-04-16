import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/home/Navbar'
const CompanyUploadVideo = (history) => {
    // https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg
    const [ImageUrl, setImageUrl] = useState("https://d30y9cdsu7xlg0.cloudfront.net/png/140281-200.png");
    const [VideoUrl, setVideoUrl] = useState("")
    const [video, setVideo] = useState("");
    const [image, setImage] = useState("");
    const [writeup, setWriteup] = useState("")
    const [category, setCategory] = useState("")
    const [requiredviews,setrequiredviews] = useState("")
    useEffect(() => {
        // console.log(ImageUrl);
        // console.log(VideoUrl);
        if (ImageUrl != "" && VideoUrl != "") {
            const userName=localStorage.getItem('userName');
            const personData = {
                ImageUrl,
                VideoUrl,
                writeup,
                interest: category,
                userName,
                requiredviews
            }
            console.log(personData);
            axios.post('http://localhost:5000/companyProfile/savevideo', personData)
                .then(res => { console.log(res)})
                .catch(err => { console.log(err) }
                );
        }
    }, [ImageUrl, VideoUrl])
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
                setImageUrl(data.secure_url)
            })
            .catch(err => {
                console.log(err);
            })
        const viddata = new FormData()
        viddata.append("file", video)
            console.log(video);
        viddata.append("upload_preset", "videoupload")
        viddata.append("cloud_name", "instacloudnikhil")
        console.log(viddata)
        fetch("https://api.cloudinary.com/v1_1/instacloudnikhil/video/upload", {
            method: "post",
            body: viddata
        })
        .then(res => res.json()) 
            .then(viddata => {
                console.log(viddata)
                setVideoUrl(viddata.url)
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div >
            <NavBar/>
            <div class="jumbotron container-fluid jumbotron-fluid" style={{ backgroundColor: "#f8f5f1" }}>
                <div className="row">
                    <div className="col-md-5 text-right" >
                        
                        <img src="https://th.bing.com/th/id/OIP.Q2RFfE6JaFd3DwJWlsKyNAHaEK?pid=ImgDet&rs=1" style={{ clipPath: "circle()", maxHeight: "400px",width:"100%" }} />
                    </div>
                    <div className="col-md-7">
                        <h1 class="display-4 text-center ">Upload Video</h1>
                        <p class="lead text-center">Upload your video to showcase your awesome products to capture the world with your insight.</p>
                    </div>
                </div>
            </div>

            {/* Container */}
            <div className="row container-fluid">
                <div className="col-md-6 col-sm-12 border-success">
                    {VideoUrl != "" ?
                    <div style={{ objectFit: "fill" }}>
                        <video style={{ width: "100%", height: "300px" }}
                            id="my-video"
                            class="video-js"
                            controls
                            preload="auto"
                            width="640"
                            height="264"
                            poster={ImageUrl} data-setup="{}"
                            data-setup=" "

                        >
                            {console.log(VideoUrl)}
                            <source src={VideoUrl}  />
                            <source src="MY_VIDEO.webm" type="video/webm" />
                            <p class="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a
                                web browser that
                                    <a href="https://videojs.com/html5-video-support/" target="_blank"
                                >supports HTML5 video</a>
                            </p>
                        </video>
                    </div>
                    :<div className="border shadow-lg"style={{height:"300px",width:"100%"}}>

                    </div>}


                    <div class="file-field input-field">
                        <div class="btn">
                            <span>File</span>
                            <input type="file" onChange={(e) => setVideo(e.target.files[0])} />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" />
                        </div>
                    </div>
                </div>

                <div className="col-md-6  col-sm-12 ">

                    <img src={ImageUrl} className="border shadow-lg" style={{ width: "100%", height: "300px",  }} />
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>File</span>
                            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" />
                        </div>
                        {/* <input  type="file" class="custom-file-input" id="inputGroupFile01" /> */}
                    </div>

                </div>
            </div>

            <div className="row container-fluid">
                {/* <div className="col-md-2 col-sm-12">
                    </div> */}
                <div className="col-md-12 col-sm-12">
                    <div class="form-group ">
                        <label for="exampleFormControlTextarea1">Description Of Video</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => { setWriteup(e.target.value) }}></textarea>
                    </div>
                </div>
                {/* <div className="col-md-2">
                    </div> */}
            </div>
            <div className="row container-fluid">
                {/* <div className="col-md-2 col-sm-12">
                    </div> */}
                <div className=" col-md-12 col-sm-12">
                    <div class="form-group ">
                        <label for="exampleFormControlTextarea1">Category</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => { setCategory(e.target.value) }}></textarea>
                    </div>
                </div>



                
                {/* <div className="col-md-2 col-sm-12">
                    </div> */}
                <div className="col-md-12 col-sm-12">
                    <div class="form-group ">
                        <label for="exampleFormControlTextarea1">Expected views</label>
                        <input type="number"  onChange={(e)=>{setrequiredviews(e.target.value)}}/>
                    </div>
                </div>
                {/* <div className="col-md-2">
                    </div> */}
         
                {/* <div className="col-md-2">
                    </div> */}
                    <div className="col-md-12 col-sm-12 mt-2">
                    <button className="btn btn-success btn-block" onClick={postDetails} style={{width:"100%"}}>Upload</button>
                    </div>
            </div>
            


        </div>
    )
}

export default CompanyUploadVideo;
