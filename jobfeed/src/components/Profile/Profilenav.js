import React from 'react'
import {Link} from 'react-router-dom'
export default function Profilenav() {
    return (
        <div>
             <div className="list-group " >
                        <div className="row" >
                            <div className="col-12">
                                <Link className="list-group-item list-group-item-action active">
                                    Edit Profile
                            </Link>
                            </div>
                        </div>
                        <div style={{height:"100%"}}>
                        <div className="row" style={{height:"20%"}} >
                            <div className="col-12" style={{height:"100%"}}>
                                <Link to="/Stats" className="list-group-item list-group-item-action " style={{height:"20%",justifyContent:"center"}}>Stats</Link>
                            </div>
                        </div>
                        {/* <div className="row" style={{height:"20%"}}  >
                            <div className="col-12" style={{height:"100%"}} >
                                <Link to="/Money Earned" className="list-group-item list-group-item-action " style={{height:"20%",justifyContent:"center"}}>Money Earned</Link>
                            </div>
                        </div> */}
                        <div className="row" style={{height:"20%"}} > 
                            <div className="col-12" style={{height:"100%"}}>
                                <Link to="/BankDetails" className="list-group-item list-group-item-action disabled" style={{height:"20%",justifyContent:"center"}}>BankDetails</Link>
                            </div>
                        </div>
                        </div>
                    </div>
        </div>
    )
}
