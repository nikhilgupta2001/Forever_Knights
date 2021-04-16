import {React,useState,useEffect} from 'react';
import NavBar from '../home/Navbar';
import Chart from './profilebarchart';
import Profilenav from './Profilenav';
import CreditChart from './creditchart';
import  {useSelector,} from 'react-redux';
import axios from 'axios';
const Stats  = () => {
    const Barchart=useSelector(state=>state.getProfile.profile.data.videoWatched);
    const credit=useSelector(state=>state.getProfile.profile.data.credits)
    
   
    return (
        <div className="">
            <NavBar/>
        <div className="row" style={{height:"100%"}} >
            <div className="col-md-4">
                <Profilenav/>
            </div>
            <div className="col-md-8">
                <div className="row" style={{height:"250px"}}>
                <Chart info={Barchart}/>
                </div>
                <div className="row text-center fontA" style={{height:"250px"}}>
                  <h1>Credit : {credit}</h1>
                </div>
            </div>
         
        </div>
        </div>
    )
};



export default Stats ;