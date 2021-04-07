import React from 'react';
import './mainbody.css';
// import image from 'image.jpg';
const MainBody = () => {
    return (
        // <div style={{display:"inline-flex"}}>
        //     <div style={{width:"65%" }}><img style={{width:"100%"}} src="/Images/image.jpg" /></div>
        //     <div style={{width:"30%" ,marginLeft:"-10%",border:"2px solid blue"}} ></div>
        // </div>
        <div className="container-fluid">

            {/* Mobile view */}
            {/* Visible only on sm*/}
            <div className="row " >
                <div className="col-sm-12 col-md-9 " style={{Index:"0"}}  >
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
                            <p className="card-text">
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

<div className="container ">
  
            {/* Adding Mid div after mid card */}
            <div className="row" style={{marginTop:"5%"}} >
            <div className="col-sm-12 col-md-6">
                {/* data-aos="fade-right" */}
                <img   src="/Images/MidImage.jpg" style={{width:"100%"}} />
                </div>
                <div className="col-sm-12 col-md-6">

                      {/* ROW 1 */}
                    <div className="row">
                    <div className="col-md-6 col-sm-12 border-success">
                          <span>Easy for users to span along their liesure time</span>
                       </div>
                    </div>
                    <div className="row border-success">
                    <div className="col-md-6 col-sm-12 border-success">
                         <span>Assured views for some strong public foundation</span> 
                    </div>
                    <div className="col-md-6 col-sm-12 border-success">
                         <span>visualised status to ease up the montitoring process</span> 
                    </div>

                    </div>

                    {/* ROW 2  */}
                    <div className="row">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src="/Images/2.jpg" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="/Images/2.jpg" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="/Images/2.jpg" alt="Third slide"/>
                        </div>
                    </div>
</div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                          
                         hello3
                        
                        </div>
                        <div className="col-sm-12 col-md-6">

                         hello4

                          
                        </div>

                    </div>

                </div>
              
            </div>
           
           {/* start earning by watching */}
           <div className="row container ">
               <div className="col-12">
                <h1 style={{textAlign:"center"}}>Earn Via Watching</h1>
               <img style={{ width: "100%", height: "70%" }} src="/Images/8432.jpg" /> 
           </div>
           </div>
           {/* new row....................ADDED  */}
           
           <div className="row " style={{marginTop:"5%"}} >
            
                <div className="col-sm-12 col-md-6">

                      {/* ROW 1 */}
                    <div className="row container">

                    <div className="col-md-6 col-sm-12 border-success">
                          <span>Easy for users to span along their liesure time</span>
                       </div>
                    </div>
                    <div className="row border-success">
                    <div className="col-md-6 col-sm-12 border-success">
                         <span>Assured views for some strong public foundation</span> 
                    </div>
                    <div className="col-md-6 col-sm-12 border-success">
                         <span>visualised status to ease up the montitoring process</span> 
                    </div>

                    </div>

                    {/* ROW 2  */}
                    
                    <div className="row container">
                        <div className="col-sm-12 col-md-6">
                          
                         hello3
                        
                        </div>
                        <div className="col-sm-12 col-md-6">

                         hello4

                          
                        </div>

                    </div>

                </div>
                <div className="col-sm-12 col-md-6">
                    {/*  data-aos="fade-left" */}
                <img  src="/Images/Cheerful.jpg" style={{width:"100%"}} />
                </div>
              
            </div>

           {/* END */}
           </div>
        </div>

    );
};


export default MainBody;