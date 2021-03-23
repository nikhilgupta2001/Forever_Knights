import React from 'react';
// import image from 'image.jpg';
const MainBody = () => {
    return (
        // <div style={{display:"inline-flex"}}>
        //     <div style={{width:"65%" }}><img style={{width:"100%"}} src="/Images/image.jpg" /></div>
        //     <div style={{width:"30%" ,marginLeft:"-10%",border:"2px solid blue"}} ></div>
        // </div>
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-8 col-sm-12">
               <img style={{width:"100%", height:"500px"}}  src="/Images/image.jpg" />
                </div>
                <div className="  col-md-4 col-sm-12 ">
                    Hello 
                    </div>
                   </div>
            </div>
    );
};


export default MainBody ;