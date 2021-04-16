import React from 'react'
import {Link} from 'react-router-dom'
export default function Profilenav() {
    {
        // if(window.outerWidth>=768)
        // {
            return(
                <div className="shadow-lg" style={{backgroundColor:"#ffe268"}} >
             <div className="" >
                        <div className="row"    >
                            {/* <div className="card">
                                <div className="card-body">
                                <Link to="/Edit" className="" >Edit Profile</Link>
                                </div>
                            </div> */}
                            <div className="card text-light bg-danger mb-1 col-md-12" >
                            <div className="card-header">GoTo</div>
                            <div className="card-body ">
                                <Link to="/profile" style={{color:"white"}}><h5 className="card-title ">Edit Profile</h5></Link>
                                <p className="card-text">Some quick edits to your ever shining profile.</p>
                            </div>
                            </div>
                            
                        </div>
                        <div className="row"  >
                            <div className="card text-light bg-success mb-1 col-md-12" >
                                <div className="card-header">GoTo</div>
                                <div className="card-body ">
                                    <Link to="/stats" style={{color:"white"}}><h5 className="card-title">Stats</h5></Link>
                                    <p className="card-text">Some quick reference to all intriging math with a innovative view.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row"  > 
                            <div className="card text-light bg-primary mb-1 col-md-12" >
                                    <div className="card-header">GoTo</div>
                                    <div className="card-body ">
                                        <Link to="/bankingdetails" style={{color:"white"}}><h5 className="card-title ">Banking Details</h5></Link>
                                        <p className="card-text">Give Your details to make ur transactions faster.</p>
                                    </div>
                            </div>
                        </div>
                        
                    </div>
        </div>
            )
        }
        // else{
            return(
            <div className="row">
                <div class="col-xs-3">
                    <Link to="/State"/> 
                </div>
                <div class="col-xs-3">
                    <Link to="/Edit"/> 
                </div>
                <div class="col-xs-3">
                    <Link to="/Banking"/> 
                </div>

            </div>
            )
        // }

    // }
    
}
