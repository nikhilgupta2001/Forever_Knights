import React, { useState, useEffect } from 'react';
import './mainbody.css';
import { Link } from 'react-router-dom';
import { Parallax, Background } from "react-parallax";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// import { ToastContainer, toast } from 'react-toastify';
// import image from 'image.jpg';
import 'materialize-css/dist/css/materialize.min.css';


const handleDragStart = (e) => e.preventDefault();






const image1 =
    "https://media.istockphoto.com/vectors/earn-money-on-video-content-laptop-computer-with-videoclip-on-screen-vector-id1227002397?k=6&m=1227002397&s=612x612&w=0&h=4R6tyW2KExBmM2HJQJ4j1f9mSU3ww3cTXPAXzdDs4nU=";



const items = [
    <img src={image1} onDragStart={handleDragStart} autoPlay={true} />,
    <img src={image1} onDragStart={handleDragStart} autoPlay={true} />,
    <img src={image1} onDragStart={handleDragStart} autoPlay={true} />,
];

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};
const MainBody = () => {

    // document.addEventListener('DOMContentLoaded', function() {
    //     var elems = document.querySelectorAll('.carousel');
    //     var instances = M.Carousel.init(elems, {
    //         numVisible:5,
    //         shift:30,
    //         padding:30
    //     });
    //   });




    return (
        // <div style={{display:"inline-flex"}}>
        //     <div style={{width:"65%" }}><img style={{width:"100%"}} src="/Images/image.jpg" /></div>
        //     <div style={{width:"30%" ,marginLeft:"-10%",border:"2px solid blue"}} ></div>
        // </div>
        <div className="container-fluid">
            {/* Mobile view */}
            {/* Visible only on sm*/}
            <div className="row " >
                <div className="col-sm-12 col-md-9 " style={{ Index: "0" }}  >
                    <img style={{ width: "100%", height: "110%", marginTop: "-12%" }} src="/Images/add2.jpg" />

                </div>
                <div className="col-sm-12 col-md-3 fontA">
                    <h2>Branding has never been so easy and efficient</h2>
                    <div className="row border-success">
                        {/* <div className="col-md-6 col-sm-12 border-success">
                          <span>Easy to feature your product and lure your target audience</span>
                       </div> */}

                    </div>
                </div>


            </div>
            {/* Mobile up view */}
            {/* Hidden only on sm */}
            {/* <div className="row ">
              
                <div className="col-md-7 col-lg-7" >
                    <img  style={{ width: "130%", height: "700px", marginTop: "-150px", marginLeft: "" }} src="/Images/add2.jpg" />
                </div>
                <div className="col-md-5 border border-success">
                    Get ready to feature your brands and products, let goooo.
                </div>

                
            
            </div> */}
            {/* ---------------Dialog box--------------------------------*/}
            <div className="row " style={{ marginTop: "-12%" }}  >
                <div className="col-md-2">
                </div>
                <div className="d-flex col-sm-12 col-md-8 " >
                    <div data-aos="flip-up" className="fontB text-dark card  shadow-lg " >
                        <div className="card-body">
                            <h5 className="card-title">The Need For Such a Platform...</h5>
                            <p className="card-text" style={{ fontSize: "1.5rem" }}>
                                Branding or advertisement of product has allways been a task of importance for companies whether it be
                                a popular multinational or a startUp . Every companies expects the users to complete advertisement to lure
                                the target audience to their product . But due to recent development in technologies and indefinite infinite
                                novelty people have succumed to short attention span . This not only reduces the add play time but also hurts
                                the companies marketing strategy.Our platform rewards every time a user watchs a full add making sure its a win win
                                for both the parties .People use their liesure time to earn fortune while the company spread its product worldwide.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                </div>

            </div>

            <div className="container-fluid ">
                {/* style={{marginTop:"5%"}} */}
                {/* Adding Mid div after mid card */}
                <div className="row"  >
                    <div className="col-sm-12 col-md-6">
                        {/* data-aos="fade-right" */}
                        <img src="/Images/MidImage.jpg" style={{ width: "100%" }} />
                    </div>
                    <div className="col-sm-12 col-md-6">

                        {/* ROW 1 */}
                        <div className="card mt-5 shadow-none border-0">
                            <div className="row ">
                                <div className="col-md-12 col-sm-12 border-success fontD">
                                    <span><h3>Easy for users to span along their liesure time</h3></span>
                                </div>
                            </div>
                            <div className="row border-success mt-5 card-body shadow" data-aos="zoom-in">
                                <div className="col-md-6 col-sm-6 border-success fontB">
                                    <span><h5>Assured views for some strong public foundation</h5></span>
                                </div>
                                <div className="col-md-6 col-sm-6 border-success fontB">
                                    <span><h5>visualised status to ease up the montitoring </h5></span>
                                </div>
                                <div className="col-md-6 col-sm-6 border-success fontB mt-2">
                                    <span><h5>visualised status to ease up the montitoring </h5></span>
                                </div>
                                <div className="col-md-6 col-sm-6 border-success fontB mt-2">
                                    <span><h5>visualised status to ease up the montitoring </h5></span>
                                </div>
                            </div>
                        </div>
                        {/* ROW 2  */}
                    </div>

                </div>

                {/* start earning by watching */}

                <Parallax bgImage={image1} blur={{ min: -1, max: 3 }} strength={300}>
                    <div style={{ height: 200 }}>
                        {/* <h1 style={{textAlign:"center"}}>Earn Via Watching</h1> */}
                    </div>

                </Parallax>
                <div className="row container ">
                    <div className="col-12">

                        <img style={{ width: "100%", height: "100%" }} src="/Images/8432.jpg" />
                    </div>
                </div>
                {/* new row....................ADDED  */}

                <div className="row "  >

                    <div className="col-sm-12 col-md-6">

                        {/* ROW 1 */}
                        <div className="card mt-5 shadow-none border-0">
                            <div className="row ">
                                <div className="col-md-12 col-sm-12 border-success fontD">
                                    <span><h3>Easy for users to span along their liesure time</h3></span>
                                </div>
                            </div>
                            <div className="row border-success mt-5 card-body shadow" data-aos="zoom-in">
                                <div className="col-md-6 col-sm-6 border-success fontB">
                                    <span><h5>Assured views for some strong public foundation</h5></span>
                                </div>
                                <div className="col-md-6 col-sm-6 border-success fontB">
                                    <span><h5>visualised status to ease up the montitoring </h5></span>
                                </div>
                                <div className="col-md-6 col-sm-6 border-success fontB mt-2">
                                    <span><h5>visualised status to ease up the montitoring </h5></span>
                                </div>
                                <div className="col-md-6 col-sm-6 border-success fontB mt-2">
                                    <span><h5>visualised status to ease up the montitoring </h5></span>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2  */}

                    </div>
                    <div className="col-sm-12 col-md-6">
                        {/*  data-aos="fade-left" */}
                        <img src="/Images/Cheerful.jpg" style={{ width: "100%" }} />
                    </div>

                </div>

                {/* END */}


                <AliceCarousel mouseTracking items={items} />

            </div>
        </div>

    );
};


export default MainBody;