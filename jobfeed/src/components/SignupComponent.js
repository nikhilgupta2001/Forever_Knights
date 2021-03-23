import React from 'react';
import NavBar from './home/Navbar';
import Footer from './home/Footer';
import { Link } from "react-router-dom";
function SignUp() {
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
    return (
        <div style={{ backgroundColor: "#f7f7f7" }}>
            <NavBar />
            <div className="d-none d-sm-block container mt-4">
                <div className="row">
                    <div data-aos="fade-right" className="col-md-6 col-sm-12">
                        <img className=" " style={{ width: "100%", height: "100%" }} src="/Images/2.jpg" />
                    </div>
                    <div data-aos="fade-left" className="col-md-6 col-sm-12">
                        <div style={{ display: "none" }} id="signup" >
                            <div className="container p-2">
                                <form>
                                <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">UserName</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Signup</button>
                                    </form>
                                    <Link onClick={toggle} className="ml-2 form-text" >Already, have an account?</Link>
                                
                            </div>

                        </div>
                        <div id="signin">
                            <div className="container p-2">
                                <form>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Signin</button>
                                </form>
                            </div>
                            <Link onClick={toggle} className="ml-2 form-text" >Dont have an acount?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default SignUp;