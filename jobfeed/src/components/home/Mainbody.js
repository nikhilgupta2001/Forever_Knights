import React, { useState, useEffect, useRef, useCallback } from 'react';
import './mainbody.css';
import { Link } from 'react-router-dom';
import { Parallax, Background } from "react-parallax";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useDispatch, useSelector } from 'react-redux'
import { useTransition, animated, useSpring } from 'react-spring'
import Typed from 'react-typed';

// import { ToastContainer, toast } from 'react-toastify';
// import image from 'image.jpg';
import 'materialize-css/dist/css/materialize.min.css';
import Footer from './Footer';

const handleDragStart = (e) => e.preventDefault();


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const image1 =
    "https://wallpapercave.com/wp/wp3422169.jpg";



// const items = [
//     <img src={image1} onDragStart={handleDragStart} autoPlay={true} />,
//     <img src={image1} onDragStart={handleDragStart} autoPlay={true} />,
//     <img src={image1} onDragStart={handleDragStart} autoPlay={true} />,
// ];

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
    const isAuth = useSelector(state => state.authReducer.isAuthenticated);
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const ref = useRef([])
    const [items, setitems] = useState([])

    useEffect(() => { }, [])



    return (

        <div>
            <div className="" >
                {/* Mobile view */}
                {/* Visible only on sm*/}
                <div className="row container-fluid  " >
                    <div className="col-sm-12 col-md-9 " style={{ Index: "0" }}  >
                        <img className="shadowNew" style={{ width: "100%", height: "110  %", marginTop: "-12%" }} src="/Images/add2.jpg" />
                    </div>
                    <div className="col-sm-12 col-md-3 fontA" style={{ color: "#763857" }}>
                        <h2>
                            <Typed
                                strings={['Branding has never been so easy and efficient.....']}
                                typeSpeed={60}
                                backSpeed={60}
                                loop
                            />
                            {/* Branding has never been so easy and efficient */}
                        </h2>
                        <div className="row container-fluid border-success">
                            {/* <div className="col-md-6 col-sm-12 border-success">
                          <span>Easy to feature your product and lure your target audience</span>
                       </div> */}

                        </div>
                    </div>


                </div>
                <div className="  ">
                    <Parallax bgImage={image1} blur={{ max: 3 }} strength={400}>
                        <div style={{ height: 200 }}>
                            {/* <h1 style={{textAlign:"center"}}>Earn Via Watching</h1> */}
                        </div>
                    </Parallax>
                </div>
                {/* Mobile up view */}
                {/* Hidden only on sm */}
                {/* <div className="row container-fluid ">
              
                <div className="col-md-7 col-lg-7" >
                    <img  style={{ width: "130%", height: "700px", marginTop: "-150px", marginLeft: "" }} src="/Images/add2.jpg" />
                </div>
                <div className="col-md-5 border border-success">
                    Get ready to feature your brands and products, let goooo.
                </div>

                
            
            </div> */}
                {/* ---------------Dialog box--------------------------------*/}
                <div className="row container-fluid   " style={{ marginTop: "-12%", }}  >
                    <div className="col-md-2">
                    </div>
                    <div className="d-flex col-sm-12 col-md-8 " >
                        <div data-aos="flip-up" className="fontB text-dark card  shadow-lg " style={{ backgroundColor: " white", boxShadow: "0px 0px 10px #FFF inset" }} >
                            <div className="card-body" style={{ backgroundColor: "" }}>
                                <animated.div
                                    class="card p-4"
                                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                    style={{ transform: props.xys.interpolate(trans) }}
                                >
                                    <h5 className="card-title fontA" style={{color:"#fb3640"}}>
                                        <Typed
                                            strings={['The Need For Such a Platform........']}
                                            typeSpeed={40}
                                            backSpeed={40}
                                            loop
                                        />
                                  </h5>
                                    <p className="card-text" style={{ fontSize: "2rem" }}>

                                        Branding or advertisement of product has allways been a task of importance for companies whether it be
                                        a popular multinational or a startUp . Every companies expects the users to complete advertisement to lure
                                        the target audience to their product . But due to recent development in technologies and indefinite infinite
                                        novelty people have succumed to short attention span .
                                    {/* This not only reduces the add play time but also hurts
                                    the companies marketing strategy.Our platform rewards every time a user watchs a full add making sure its a win win
                                    for both the parties .People use their liesure time to earn fortune while the company spread its product worldwide. */}

                                    </p>
                                </animated.div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>

                </div>


                <div className=" ">
                    {/* style={{marginTop:"5%"}} */}
                    {/* Adding Mid div after mid card */}
                    <div className="row container-fluid   container-fluid "  >
                        <div className="col-sm-12 col-md-6">

                            <div >
                                <img className="shadowNew" src="/Images/MidImage.jpg" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">

                            {/* ROW 1 */}
                            <div className="card mt-5 shadow-none border-0">
                                <div className="row container-fluid ">
                                    <div className="col-md-12 col-sm-12 border-success fontB">
                                        <span><h3>Company needs to have such a platform..</h3></span>
                                    </div>
                                </div>
                                <div className="row container-fluid border-success mt-5 card-body shadow" data-aos="zoom-in">
                                    <div className="col-md-6 col-sm-6 border-success fontB">
                                        <span><h5>To ensure ample publicity for their specific tailored project</h5></span>
                                    </div>
                                    <div className="col-md-6 col-sm-6 border-success fontB">
                                        <span><h5>To ensure huge viewer base to satify the very motive</h5></span>
                                    </div>
                                    <div className="col-md-6 col-sm-6 border-success fontB mt-2">
                                        <span><h5>Easy monitoring of adds status and views</h5></span>
                                    </div>
                                    <div className="col-md-6 col-sm-6 border-success fontB mt-2">
                                        <span><h5>Ensured returns for some certain good relationship</h5></span>
                                    </div>
                                </div>
                            </div>
                            {/* ROW 2  */}
                        </div>

                    </div>

                    {/* start earning by watching */}
                    <div className="    ">
                        <Parallax bgImage={image1} blur={{ max: 3 }} strength={400}>
                            <div style={{ height: 200 }}>
                                {/* <h1 style={{textAlign:"center"}}>Earn Via Watching</h1> */}
                            </div>
                        </Parallax>
                    </div>
                    <div className="row container-fluid  ">
                        <div className="col-6 ">
                            <div className="shadowNew p-4  pr-0" >
                                <img style={{ width: "100%", height: "100%", transform: "rotate(5deg) " }} src="Images/bee.jpg" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="shadowNew p-4 p" >
                                <img style={{ width: "100%", height: "100%", transform: "rotate(-5deg)" }} src="Images/bee.jpg" />
                            </div>
                        </div>
                    </div>
                    {/* new row container-fluid....................ADDED  */}

                    <div className="row container-fluid  container-fluid "  >

                        <div className="col-sm-12 col-md-6">

                            {/* ROW 1 */}
                            <div className="card mt-5 shadow-none border-0">
                                <div className="row container-fluid  container-fluid ">
                                    <div className="col-md-12 col-sm-12 border-success fontD">
                                        <span><h3>Easy for users to span along their liesure time</h3></span>
                                    </div>
                                </div>
                                <div className="row container-fluid border-success mt-5 card-body shadow" data-aos="zoom-in">
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
                            <div className="shadowNew">
                                <img src="/Images/Cheerful.jpg" style={{ width: "100%" }} />
                            </div>
                        </div>

                    </div>

                    {/* END */}


                    {/* <AliceCarousel mouseTracking items={items} /> */}

                </div>
            </div>

        </div>
    );
};


export default MainBody;