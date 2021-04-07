import React, { useState } from 'react';
import NavBar from './home/Navbar';
import Footer from './home/Footer';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { loginUser, registeruser } from '../redux/actions/signin_';
// import M from 'materialize-css'

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [usertype, setUsertype] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const toggle = (e) => {
        console.log(e);
        e.preventDefault();
        console.log(e);

        if (e.target.innerHTML == 'Dont have an acount?') {
            document.getElementById('signin').style.display = "none";
            document.getElementById('signup').style.display = "block";
        }
        else {
            document.getElementById('signup').style.display = "none";
            document.getElementById('signin').style.display = "block";
        }
    }
    function validate() {
        var ddl = document.getElementById("cardtype");
        var selectedValue = ddl.options[ddl.selectedIndex].value;
        console.log(selectedValue);


        if (selectedValue == "User" || selectedValue=="Company") {
            setUsertype(selectedValue)
        }
        else
        {
            alert("Please select a card type");
        }
    }
    const onSubmitsignup = (e) => {
        // console.log(e);
        e.preventDefault();
        const data = {
            name,
            email,
            usertype,
            password
        }
        console.log(data);
        //  dispatch(registeruser(data));
    }
    const onSubmitsignin = (e) => {
        console.log(e);
        e.preventDefault();
        const data = {
            email,
            password
        }
        //  dispatch(loginUser(data));
    }
    const xyz = (e) => {
        console.log(e);
    }

    return (
    
           <div style={{padding:"5.5% 0.5%",backgroundImage:`url("https://i.pinimg.com/474x/6f/78/82/6f788269f05c97b48355ae297d304787.jpg")`}}>
            <div style={{ backgroundColor: "rgb(255,255,255,255)" ,marginRight:"5%",marginLeft:"5%"}} className="shadow-lg " >
                <div className=" container " style={{padding:"45px"}}>
                    <div className="row pd-8">
                        <div data-aos="fade-right" className="col-md-6 col-sm-12">
                            <img className=" " style={{ width: "100%", height: "100%" }} src="/Images/add.jpg" />
                        </div>
                        <div data-aos="fade-left" className="col-md-6 col-sm-12">
                            <div style={{ display: "none" }} id="signup" >
                                <div className="container p-2">
                                    <form>
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">UserName</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setName(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <select class="form-select" id="cardtype" aria-label="Default select example" onChange={validate}>
                                            <option >Select Your Profile</option>
                                            <option >User </option>
                                            <option >Company</option>

                                        </select>


                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                                        </div>
                                        <button onClick={onSubmitsignup} type="submit" className="btn btn-primary">Signup</button>
                                    </form>
                                    <Link onClick={toggle} className="ml-2 form-text" >Already, have an account?</Link>
                                </div>
                            </div>
                            <div id="signin">
                                <div className="container p-2">
                                    <form>
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                        </div>
                                        <button type="submit" onClick={onSubmitsignin} className="btn btn-primary">Signin</button>
                                    </form>
                                </div>
                                <Link onClick={toggle} className="ml-2 form-text" >Dont have an acount?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}



export default SignUp;