import React from 'react';
import {Link} from 'react-router-dom'
const NavBar  = () => {
    // const dispatch=useDispatch();
    return (
        // <div style={{opacity:"0.4"}}>
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{opacity:"0.4"}}>
                <a class="navbar-brand m-1" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="font-weight-bold  nav-item nav-link active "  to="/">Home <span class="sr-only"></span></Link>
                        <Link class="font-weight-bold nav-item nav-link" to="/signup">Signup</Link>
                        <Link class="font-weight-bold nav-item nav-link" to="/signin">Signin</Link>
                        <Link class="font-weight-bold nav-item nav-link" to="/getaddsfeatured">Get Your add Featured</Link>
                        <Link class="font-weight-bold nav-item nav-link disabled" to="/" tabindex="-1" aria-disabled="true"></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};



export default NavBar ;