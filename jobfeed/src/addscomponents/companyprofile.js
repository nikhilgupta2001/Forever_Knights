import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/home/Navbar';
import Video from './CompanyProfile/Video';
import Barchart from './CompanyProfile/Barchartcomponent.js';
import './companyprofile.css';
const Companyprofile = () => {
    // const adds = useSelector(state=>state.adds)
    //
    return (
        <div>
            <NavBar/>
            <div className="row container-fluid mt-2 " style={{height:"100%"}}>
               <div className="col-md-3 shadow" style={{height:"100%",padding:"2rem"}}>
                 <div className="row"> 
                 <h1>Five</h1>
                </div>
                <div className="row" style={{height:"300px"}}>
                    <Barchart/>
                </div>
                <div className="row">
                    <button className="btn btn-primary"><Link className="linkbtn" to="/CompanyUploadVideo" style={{textDecoration:"none",color:"white !important"}}>Upload Video</Link></button>
                </div>
               </div>
               <div className="col-md-1">

               </div>
               <div className="col-md-7 " style={{height:"100%"}}>
                   <div className="row">
                       <h1>Amazon</h1>
                   </div>
                   <div></div>
                   {/* {addadds} */} 
                   <Video />
                   <Video />
                   </div>
            </div>
        </div>
    )
}
export default Companyprofile;