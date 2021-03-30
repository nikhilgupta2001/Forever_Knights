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
            <div className="row d-block d-sm-none">
                <div className=" col-sm-12" >
                    <img  style={{ width: "100%", height: "300px" }} src="/Images/add2.jpg" />
                    
                </div>
                <div className="col-sm-12">
                    Get ready to feature your brands and products, let goooo.
                </div>

                
            </div> 
            {/* Mobile up view */}
            {/* Hidden only on sm */}
            <div className="row d-none d-sm-block">
              
                <div className="col-md-7 col-lg-7" >
                    <img  style={{ width: "130%", height: "700px", marginTop: "-150px", marginLeft: "" }} src="/Images/add2.jpg" />
                </div>

                <div className="col-md-5 col-lg-5 col-xl-5 ">
                    Get ready to feature your brands and products, let goooo.
                </div>
            
            </div>

            <div className="row  bg-light justify-content-center" >
                <div className="d-flex  col-sm-12 col-md-12 " >
                    <div className="card border border-primary shadow-lg " style={{ width: "100%" }}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};


export default MainBody;