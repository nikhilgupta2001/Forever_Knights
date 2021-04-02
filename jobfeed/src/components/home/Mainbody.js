import React from 'react';
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
                <div className="col-sm-12 col-md-9"  >
                    <img style={{ width: "100%", height: "110%", marginTop: "-12%" }} src="/Images/add2.jpg" />

                </div>
                <div className="col-sm-12 col-md-3">
                    Get ready to feature your brands and products, let goooo.
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
                    <div data-aos="flip-up" className=" bg-info text-dark card border border-primary shadow-lg " >
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                <img  data-aos="fade-right" src="/Images/MidImage.jpg" style={{width:"100%"}} />
                </div>
                <div className="col-sm-12 col-md-6">

                      {/* ROW 1 */}
                    <div className="row">

                        <div className="col-sm-12 col-md-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        </div>
                        <div className="col-sm-12 col-md-6">
                            
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 

                        </div>

                    </div>

                    {/* ROW 2  */}
                    
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

                        <div className="col-sm-12 col-md-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        </div>
                        <div className="col-sm-12 col-md-6">
                            
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 

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
                <img  data-aos="fade-left" src="/Images/Cheerful.jpg" style={{width:"100%"}} />
                </div>
              
            </div>

           {/* END */}
           </div>
        </div>

    );
};


export default MainBody;