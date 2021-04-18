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
        <div class="row"  >

          {/* <!-- Grid column --> */}
          <div class="col-md-6 mt-md-0 mt-3">

            {/* <!-- Content --> */}
            <h5 class="text-uppercase"><b>Footer Content</b></h5>
            <p>Here you can use rows and columns to organize your footer content.</p>

          </div>
           


          {/* <!-- Grid column --> */}

          <hr class="clearfix w-100 d-md-none pb-3" />

            {/* <!-- Grid column --> */}
          <div class="col-md-3 mb-md-0 mb-3">

              {/* <!-- Links --> */}
            {/* <h5 class="text-uppercase">Links</h5> */}

              <ul  class="list-unstyled font-weight-bold text-light">
                <li>
                  <Link class=" text-light " to="#!"><b>Home</b></Link>
                </li>
                <li>
                  <Link class=" text-light" to="#!"><b>Contact Us</b></Link>
                </li>
                <li>
                  <Link class=" text-light" to="#!"><b>Our Team</b></Link>
                </li>
                <li>
                  <Link  class=" text-light" to="#!"><b>Feedback</b></Link>
                </li>
              </ul>

            </div>
            {/* <!-- Grid column --> */}

       
          <div class="col-md-3 mb-md-0 mb-3">

              {/* <!-- Links --> */}
            {/* <h5 class="text-uppercase">Links</h5> */}

              <ul class="list-unstyled">
                <li>
                  <Link class=" text-light"  to="/home">Faqs</Link>
                </li>
                <li>
                  <Link class=" text-light"  to="/about"><b>Link 1</b></Link>
                </li>
                <li>
                  <Link class=" text-light"  to="#!"><b>Link2</b></Link>
                </li>
                <li>
                  <Link class=" text-light"  to="#!"><b>Link 3</b></Link>
                </li>
              </ul>

            </div>
            {/* <!-- Grid column --> */}
    
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
      <div class="footer-copyright text-center py-3 justify-content-center" style={{backgroundColor:"white"}}>© 2020 Copyright:
        <a href="https://mdbootstrap.com/" class="" style={{color:"#93329e"}} > Made With Love ❤️ by Team Forever Knights </a>
        </div>

    </footer>
   
      </div>
  )
}
