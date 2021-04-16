import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/home/Navbar';
import Video from './CompanyProfile/Video';
import './companyprofile.css';
import axios from 'axios';
import { Parallax, Background } from "react-parallax";


const image1 =
    "https://wallpapercave.com/wp/wp3422169.jpg";


const Companyprofile=() => {
    // const adds = useSelector(state=>state.adds)
    //
    const [data,setData]=useState([]);
    const id=localStorage.getItem('id');
    const companyname=localStorage.getItem('userName');
    const details={
        id
    }
  console.log(id);
  useEffect(()=>{
           axios.post('http://localhost:5000/companyProfile/getcompanyvideos',details).then((res)=>{
               setData(res.data)
           })
     },[])

    return (
        <div>
            <NavBar />
            <Parallax bgImage={image1}  strength={400}>
                     
            <div className="row container-fluid  " style={{ height: "100%", }}>
                <div className="col-md-12 col-sm-12 " style={{ height: "100%" }}>
                    <div className="row">
                        <h1><span className="fontA text-light">{companyname}</span></h1>
                    </div>
                    {/* {addadds} */}
                    <div >
                        {
                            data.map((res)=>{
                                return (
                               <Video props={res} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
          </Parallax>
          </div>
    )
}
export default Companyprofile;