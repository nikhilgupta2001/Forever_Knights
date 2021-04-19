import React from 'react'
import {Link} from "react-router-dom"
export default function Footer() {
  return (
    
 <div className="font">
    
   
    {/* // < !--Footer -- > */}
    <footer class="page-footer font-small  pt-4" style={{backgroundColor:"#93329e",text:"white"}}>

      {/* <!-- Footer Links --> */}
      <div class="container-fluid text-center text-md-left" >

        {/* <!-- Grid row --> */}
        <div class="row" >

          {/* <!-- Grid column --> */}
          <div class="col-md-6 mt-md-0 mt-3">

            {/* <!-- Content --> */}
          
          
           
               <img style={{clipPath:"circle()"}} src="/Images/logofinal.jpeg"/>
            

          
              <h5 class="text-uppercase"><b>Forever Knights</b></h5>
           

           

            {/* Added */}
            <div className="row">
              <div className="col-md-2 ">
                </div>
                <div className="col-md-8 col-sm-12">
                
            <p>Passion has always been a part and parcel of any success story .We been here 
              to prove its very truth </p>

              </div>
              <div className="col-md-2 ">
                </div>
             </div>

               {/* End */}

          </div>
           


          {/* <!-- Grid column --> */}

          <hr class="clearfix w-100 d-md-none pb-3" />

            {/* <!-- Grid column --> */}
           
            <div class="col-md-6 ">
              <div className="row mt-4 ">
                {/* For spacing */}
                  <div className="col-md-2">
                    </div>
          <div class="col-md-4 mr-2 ml-2">

              {/* <!-- Links --> */}
            {/* <h5 class="text-uppercase">Links</h5> */}
              <ul style={{fontSize:"1.2rem"}} class="list-unstyled font-weight-bold text-light ">
                <li class="p-2">
                  <Link class=" text-light" to="/home"><b>Home</b></Link>
                </li>
                <li class="p-2">
                  <Link class=" text-light " to="/contact"><b>Contact Us</b></Link>
                </li>
                <li class="p-2">
                  <Link class=" text-light " to="/ourteam"><b>Our Team</b></Link>
                </li>
                <li class="p-2">
                  <Link  class=" text-light " to="/feedback"><b>Feedback</b></Link>
                </li>
              </ul>
        
            </div>
            {/* <!-- Grid column --> */}

          
          <div class="col-md-4   mr-2 ml-2">

              {/* <!-- Links --> */}
            {/* <h5 class="text-uppercase">Links</h5> */}

              <ul style={{fontSize:"1.2rem"}} class="list-unstyled">
                <li className="p-2">
                  <Link class="  text-light"  to="/home"><b>Faqs</b></Link>
                </li>
                <li  className="p-2">
                  <Link class=" text-light "  to="/about"><b>Feedback</b></Link>
                </li>
                <li  className="p-2">
                  <Link class=" text-light "  to="#!"><b>Join us</b></Link>
                </li>
                <li  className="p-2">
                  <Link class=" text-light "  to="#!"><b>Gift us a cup of coffee</b></Link>
                </li>
              </ul>

            </div>
            {/* <!-- Grid column --> */}
            </div>
            <div className="col-md-2">
                    </div>
                    
            </div>
        </div>
        
       
          {/* <!-- Grid row --> */}

      </div>
        {/* <!-- Footer Links --> */}





{/* Social Media */}



<div class="">

    {/* <!-- Social buttons --> */}
    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mr-1">
          <i class="fab fa-facebook-f"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mr-1">
          <i class="fab fa-twitter"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mr-1">
          <i class="fab fa-google-plus-g"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mr-1">
          <i class="fab fa-linkedin-in"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mr-1">
          <i class="fab fa-dribbble"> </i>
        </a>
      </li>
    </ul>
    {/* <!-- Social buttons --> */}

  </div>

{/* END */}


      {/* <!-- Copyright --> */}
      <div class="footer-copyright text-center py-3 justify-content-center" style={{backgroundColor:"white",textAlign:"center",color:"black"}}>
        © 2021 Copyright: Made With Love ❤️ by Team {' '} <b>Forever Knights</b> 
        </div>

    </footer>
   
      </div>
  )
}
