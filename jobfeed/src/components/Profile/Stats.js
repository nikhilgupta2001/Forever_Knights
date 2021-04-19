import {React,useState,useEffect} from 'react';
import NavBar from '../home/Navbar';
import Chart from './profilebarchart';
import Profilenav from './Profilenav';
import CreditChart from './creditchart';
import  {useSelector,} from 'react-redux';
// import {useSpring, animated} from 'react-spring';
import {useTransition, animated,useSpring} from 'react-spring'
import axios from 'axios';
import Footer from '../home/Footer';
import history from '../../redux/actions/history';

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

const Stats  = () => {
    const temp=useSelector(state=>state.getProfile.profile.data);
    // console.log(temp)
    if(temp==null)
    {
        history.push('/profile');
      
        window.location.reload(true);
        // toast.error("");
    }
    const Barchart=useSelector(state=>state.getProfile.profile.data.videoWatched);
    const credit=useSelector(state=>state.getProfile.profile.data.credits)
    const props = useSpring({ number: credit, from: { number: 0 } })
    
        
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
                    <div className="col-md-6 col-sm-6">
                  <img src="/Images/Rupee.jpg" style={{maxWidth:"15rem",maxHeight:"15rem"}}/>
                  </div>
                  <div className="col-md-6 col-sm-6 ">
                  <h1><animated.span>{props.number}</animated.span></h1>
                </div>
                </div>
            </div>
         
        </div>
        <Footer />
        </div>
    )
};



export default Stats ;