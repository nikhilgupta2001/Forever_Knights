import {React,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import Barchart from './Barchartcomponent'
import axios from 'axios'
import NavBar from '../../components/home/Navbar'
const CompanyStats= () =>{
    // const [data2,setdata2] = useState("");
    // //const [currcred,setcurrcred] = useState(0);
    // // const setcred=()=>{
    // //     setcurrcred(currcred+1);
    // // }
    // const id=localStorage.getItem('id');
    // const details={
    //     id
    // }
    return (
        <div>
            <NavBar />
                 {/* <div className="col-md-12 container-fluid" style={{height:"100%"}}> */}
                 <div className="row"  >
                <div className="contianer-fluid col-md-12 col-sm-12 mt-4 " style={{height:"500px"}}>
                    <Barchart/>
                </div>
               </div>
               {/* </div> */}

        </div>
    )
}

export default CompanyStats;
