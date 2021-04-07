import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './home/Navbar';
import './profile.css';
import TagsInput from 'react-tagsinput'
import axios from 'axios';
import Profilenav from './Profile/Profilenav';

const Profile = (history) => {
    const [edit ,setEdit] =useState("false")
    //var edit = "false";

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Interests, setInterests] = useState("");
    const [ImageUrl, setImageUrl] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg");
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
                // set profile
                const personData = {
                    name,
                    email,
                    Interests,
                    ImageUrl
                }
                axios.post('http://localhost:5000/profile', personData)
                    .then(res => history.push('/'))
                    .catch(err => { console.log("Server fucked you") }
                    );
                //   END
            })
            .catch(err => {
                console.log(err);
            })

        //

    }

    const editDetails  =(e)=>{

        e.preventDefault();
        setEdit("true");
    }

    const onsaveChange = (e) => {

        e.preventDefault();

    }
    return (
        <div>
            <NavBar />
            <div className="row container-fluid mt-2" style={{ height: "100%" }}>
                <div className="col-md-4 "style={{ height: "100%" }} >
                   <Profilenav />
                </div>
                <div className="col-md-8 ">
                    {/* <div className="border border-success " style={{ height: "10%" }}>
                        
                    </div> */}
                    <div>
                        <div className="header">
                            <small>Overview</small>
                            <br />
                            <h3>User Profile</h3>
                        </div>
                        <br />
                        <br />
                        <div className="row leftcol">

                            <div className="col-md-4 leftcol">
                                <div className="card" style={{ width: "18rem;" }}>

                                    {console.log(ImageUrl)}
                                    <img className="card-img-top" src={ImageUrl} />
                                    {ImageUrl == "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                                        ? <span>Upload Image</span> : <span></span>}

                                        {ImageUrl == "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"?
                                 <div> <input type="file" onChange={(e) => setImage(e.target.files[0])} /></div> :
                                  <div>
                                      {edit =="false" ?
                                       <div>
                                           <button onClick={editDetails=>{
                                               setEdit("false")
                                           }} type="submit" className="btn btn-primary">Edit Image</button>
                                           </div> :
                                           <div>
                                               <div> <input type="file" onChange={(e) => setImage(e.target.files[0])} /></div>
                                           </div>
                                      }
                                     </div>}


                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-8 leftcol">
                                <div className="row">
                                    <div className="col-md-12">
                                        <form>
                                            <div className="mb-3">
                                                <label for="exampleInputEmail1" className="form-label">UserName</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setName(e.target.value)} />
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} />
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputEmail1" className="form-label">Interests</label>
                                                <input type="text" data-role="tagsinput" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setInterests(e.target.value)} />
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputEmail1" className="form-label"></label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <button onClick={postDetails} type="submit" className="btn btn-primary">Save Changes</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;