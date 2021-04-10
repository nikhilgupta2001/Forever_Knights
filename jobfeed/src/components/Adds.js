import React,{useState,useEffect} from 'react';
import Video from './Video';
import NavBar from './home/Navbar';
import axios from 'axios';
import { getalladds } from '../redux/actions/getdata';
// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from './Spinner';
const Adds = () => {
    var t = false;
    const dispatch = useDispatch();
    var arr = [];
    //const [video, setVideo] = useState("");
    const getAdds = useSelector(state => state.getAdds.adds);
    const loading=useSelector(state=>state.getAdds.loading)
   useEffect(()=>{
       dispatch(getalladds());
   },[dispatch])
    
    return (
        <div>
            <NavBar />
            <div style={{ backgroundColor: `rgba(159,67,181)` }} >
                <div className="contianer"  style={{padding:"10px"}}>
                    <div className="container">
                <div className="row " style={{width:"100%"}}>
                {
                    loading? (
                    <Spinner/>
                    ):(
                           
                            getAdds[0].map((e)=>{
                                // console.log(e.video[0].videoUrl);
                                return(
                                    <Video url={e.video[0]}/>
                                )
                            })
                           
                    )
                 }
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Adds;