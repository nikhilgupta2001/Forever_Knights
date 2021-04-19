import React from 'react';
import NavBar from './home/Navbar';
import MainBody from './home/Mainbody';
import Footer from './home/Footer';
function Home(){
    return(
        <div >
            {/* <div className=" row">
                <div className="col-12"> */}
            <NavBar/>
            {/* </div>
          </div> */}
            <MainBody/>
           <Footer />

        </div>
    )
}

export default Home;