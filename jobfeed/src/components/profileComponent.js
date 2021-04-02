import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './home/Navbar';
import './profile.css';

const Profile = () => {
    return (
        <div>
            <NavBar />
            <div className="row container-fluid mt-2" style={{height:"100%"}}>
                <div className="col-md-4 " >
                <div className="list-group " >
                        <div className="row">
                     <div className="col-12">
                            <Link className="list-group-item list-group-item-action active">
                                Edit Profile
                            </Link>
                        </div>
                        </div>
                        <div className="row">
                     <div className="col-12">
                           <Link to="/Stats" className="list-group-item list-group-item-action "> Stats</Link>
                        </div>
                        </div>
                        <div className="row">
                     <div className="col-12">
                            <Link to="/Money Earned" className="list-group-item list-group-item-action ">Money Earned</Link>
                        </div>
                        </div>
                        <div className="row">
                     <div className="col-12">
                             <Link to="/BankDetails" className="list-group-item list-group-item-action disabled">BankDetails</Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 ">
                    <div className="border border-success " style={{ height: "10%" }}>
                        
                    </div>
                    <div>
                        <div className="header">
                            <small>Overview</small>
                            <br />
                            <h3>User Profile</h3>
                        </div>
                        <br/>
                        <br/>
                        <div className="row leftcol">
        
                            <div className="col-md-4 leftcol">
                                <div className="card" style={{ width: "18rem;" }}>
                                    <img className="card-img-top" src="Images/2.jpg" />

                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
        
                                </div>
                            </div>

                            <div className="col-md-8 leftcol">
                               <div className="row">
                                   <div className="col-md-12">
                                   <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">UserName</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Pincode</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label"></label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    
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