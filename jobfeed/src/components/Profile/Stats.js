import React from 'react';
import NavBar from '../home/Navbar';
import Chart from './profilebarchart';
import Profilenav from './Profilenav';
import CreditChart from './creditchart';
const Stats  = () => {
   
    return (
        <div>
            <NavBar/>
        <div className="row container" >
            <div className="col-md-4">
                <Profilenav/>
            </div>
            <div className="col-md-8">
                <div className="row" style={{height:"250px"}}>
                <Chart/>
                </div>
                <div className="row" style={{height:"250px"}}>
                <CreditChart/>
                </div>
            </div>
         
        </div>
        </div>
    )
};



export default Stats ;