import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './home/Navbar';
import './profile.css';
import { useDispatch, useSelector } from 'react-redux'
import TagsInput from 'react-tagsinput'
import axios from 'axios';
import Profilenav from './Profile/Profilenav';
import Spinner from './Spinner';
import { getprofile } from '../redux/actions/getprofile';

const Profile = (history) => {
    const [edit, setEdit] = useState("false")
    //var edit = "false";
    const dispatch = useDispatch();
    const loading = useSelector(state => state.getProfile.loading);
    const data=useSelector(state=>state.getProfile.profile.data)
    
    // const userName=window.localStorage.getItem('userName');
    //         console.log(userName);

    useEffect(() => {

        const userName = window.localStorage.getItem('userName');
        console.log(userName);

        dispatch(getprofile(userName));

    }, [dispatch])
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
        }

        //
    const editDetails = (e) => {

        e.preventDefault();
        setEdit("true");
    }

    const onsaveChange = (e) => {

        e.preventDefault();

    }
    return (
           <div>
            { loading ? (
                <Spinner />   
            ) : (
                <div className="" style={{}}>
                    <NavBar />
                    <div className="row" style={{backgroundColor:"#"}}>
                        <div className="col-md-3" >
                            <Profilenav />
                        </div>
                        <div className="col-md-9" >
                            {/* <div className="border border-success " style={{ height: "10%" }}>
                    </div> */}
                            <div>
                                <div className="row">

                                    <div className="col-md-4 " style={{ padding: "4px" }}>
                                        <div className="card" style={{}}>
                                            {console.log(ImageUrl)}
                                            <img className="card-img-top" src={ImageUrl} />
                                            {ImageUrl == "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                                                ? <span style={{ textAlign: "center" }} className="fontA">Upload Image</span> : <span></span>}

                                            {ImageUrl == "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" ?
                                                <div>
                                                    <div class="file-field input-field">
                                                        <div class="btn">
                                                            <span>File</span>
                                                            <input type="file" />
                                                        </div>
                                                        <div class="file-path-wrapper">
                                                            <input class="file-path validate" type="text" />
                                                        </div>
                                                    </div>


                                                </div> :
                                                <div>
                                                    {edit == "false" ?
                                                        <div>
                                                            <button onClick={editDetails => {
                                                                setEdit("false")
                                                            }} type="submit" className="btn btn-primary">Edit Image</button>
                                                        </div> :
                                                        <div>
                                                            <div> <input type="file" onChange={(e) => setImage(e.target.files[0])} /></div>
                                                        </div>
                                                    }
                                                </div>}


                                            <div className="card-body">
                                                <p className="card-text"></p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-8 ">
                                        <div className="row text-light">
                                            <div className="col-md-12">
                                                <form>
                                                    <div className="mb-3">
                                                    <label for="first_name">User Name</label>
                                                        <div class="input-field col s12">
                                                       
                                                            <input  onChange={e => setName(e.target.value)} id="first_name" type="text" class="validate" />
                                                          
                                                        </div>
                                                        {/* <label for="exampleInputEmail1" className="form-label">UserName</label> */}
                                                        {/* <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  /> */}
                                                    </div>
                                                    <div className="mb-3">
                                                    <label for="first_name">Email</label>
                                                        <div class="input-field col s12">
                                                        
                                                            <input  onChange={e => setEmail(e.target.value)} id="first_name" type="text" class="validate"/>
                                                            
                                                        </div>

                                                        {/* <label for="exampleInputEmail1" className="form-label">Email</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} /> */}
                                                    </div>
                                                    <div className="mb-3">
                                                    <label for="first_name">Interests</label>

                                                        <div class="input-field col s12">
                                                            <input  onChange={e => setInterests(e.target.value)} id="first_name" type="text" class="validate"/>
                                                     
                                                        </div>


                                                        {/* <label for="exampleInputEmail1" className="form-label">Interests</label>
                                                <input type="text" data-role="tagsinput" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setInterests(e.target.value)} /> */}
                                                    </div>
                                                    <div className="mb-3">

                                                        <div class="input-field col s12">
                                                            <input placeholder="Placeholder" onChange={e => setInterests(e.target.value)} id="first_name" type="text" class="validate" />
                                                            <label for="first_name"></label>
                                                        </div>


                                                        {/* <label for="exampleInputEmail1" className="form-label"></label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
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
            </div> 
    )

}

export default Profile;



