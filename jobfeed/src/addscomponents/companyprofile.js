import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/home/Navbar';
import Video from './CompanyProfile/Video';
import './companyprofile.css';
import axios from 'axios';
import { Parallax, Background } from "react-parallax";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

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
           axios.post('http://localhost:5000/companyProfile/getcompanyvideos',details)
           .then((res)=>{
               if(res.data.length==0)
               {
                 toast.info("You dont have any addvertisement to show");
                 
               }
               setData(res.data)
           })
     },[])

    return (
        <div style={{height:"100%"}}>
            <NavBar />
            <Parallax style={{background: "linear-gradient(to right, #20002c, #cbb4d4)"}}  strength={400}>
                     
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