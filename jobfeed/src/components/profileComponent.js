import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './home/Navbar';
import './profile.css';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import Profilenav from './Profile/Profilenav';
import Spinner from './Spinner';
import { getprofile } from '../redux/actions/getprofile';
import Footer from './home/Footer';
import 'react-tagsinput/react-tagsinput.css'
import Autosuggest from 'react-autosuggest';
import TagsInput from './Tagsinput';

// import { WithContext as ReactTags } from 'react-tag-input';

const Profile = (history) => {
    var arr = [];
    const [edit, setEdit] = useState("false")
    //var edit = "false";
    const dispatch = useDispatch();
    const loading = useSelector(state => state.getProfile.loading);
    const data = useSelector(state => state.getProfile.profile.data)

    // const userName=window.localStorage.getItem('userName');
    //         console.log(userName);
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('email')
    useEffect(() => {
        console.log(Interests);

        const userName = window.localStorage.getItem('userName');
        console.log(userName);

        dispatch(getprofile(userName));

    }, [dispatch])

     
    
    const [image, setImage] = useState("");
    
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const handleChange=() =>{
    //     console.log(tags,'42')
    //     setTags(tags)
    //   }

    const [Interests, setInterests] = useState([]);
    
    
    const [ImageUrl, setImageUrl] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg");
    
    const postDetails = (e) => {

        // if(!(window.event && window.event.keyCode == 13)){
            
        // }
        localStorage.setItem('Interests', Interests)
        // window.localStorage.setItem(arr);
        console.log(e);
        console.log(image)
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
    
    const selectedTags = tags => {
		console.log(tags);
        
        arr.push(tags)
        setInterests(arr)
	};

    console.log(Interests,"line 99")

    return (
        <div>
            { loading ? (
                <Spinner />
            ) : (
                <div className="" style={{}}>
                    <NavBar />
                    <div className="row" style={{ backgroundColor: "#" }}>
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
                                            <div>
                                                <div class="file-field input-field">
                                                    <div class="btn">
                                                        <span>File</span>
                                                        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                                                    </div>
                                                    <div class="file-path-wrapper">
                                                        <input class="file-path validate" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text"></p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-8 ">
                                        <div className="row text-light">
                                            <div className="col-md-12">
                                                <form onsubmit="return false">
                                                    <div className="mb-3">
                                                        <label for="first_name">User Name</label>
                                                        <div class="input-field col s12">

                                                            <input value={name} id="first_name" type="text" class="validate" />

                                                        </div>
                                                        {/* <label for="exampleInputEmail1" className="form-label">UserName</label> */}
                                                        {/* <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  /> */}
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="first_name">Email</label>
                                                        <div class="input-field col s12">

                                                            <input value={email} id="first_name" type="text" class="validate" />

                                                        </div>

                                                        {/* <label for="exampleInputEmail1" className="form-label">Email</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} /> */}
                                                    </div>
                                                    <div className="mb-3 text-dark">
                                                        <label for="first_name">Interests</label>

                                                        {/* <div class="input-field col s12">
                                                            <input onChange={e => setInterests(e.target.value)} id="first_name" type="text" class="validate" />
                                                        </div> */}
                                                          <TagsInput selectedTags={selectedTags}  tags={[]}/>
                                                          {/* <input type="text"/> */}
                                                     
                                                           
                                                        {/* <label for="exampleInputEmail1" className="form-label">Interests</label>
                                                <input type="text" data-role="tagsinput" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setInterests(e.target.value)} /> */}
                                                    </div>
                                                    {/* <div className="mb-3">

                                                        <div class="input-field col s12">
                                                            <input placeholder="Placeholder" onChange={e => setInterests(e.target.value)} id="first_name" type="text" class="validate" />
                                                            <label for="first_name"></label>
                                                        </div> */}


                                                        {/* <label for="exampleInputEmail1" className="form-label"></label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                                                    {/* </div> */}
                                                </form>
                                                <button onClick={postDetails}  className="btn btn-primary">Save Changes</button>
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
            <Footer />
        </div>
    )

}

export default Profile;



