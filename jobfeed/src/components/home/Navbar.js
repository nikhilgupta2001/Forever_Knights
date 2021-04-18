
// export default NavBar;
import React, { useState } from 'react';

import { Link, Redirect } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const usertype = localStorage.getItem('usertype');
    const token = localStorage.getItem('token')
    const [login, setlogin] = useState(true)
    const [antifix,setantifix]=useState(false);
    console.log(usertype);
    const logout = () => {
        console.log("HELLO");
        localStorage.clear();
        setlogin(false);
    }
    var x;
    if (usertype == "Company") {
        x = true;
    }
    else {
        x = false;
    }
    
    var init = 750;
    
    window.addEventListener('scroll', (event) => {
       
        if(window.pageYOffset>window.innerHeight && init < window.innerheight )
        {
               setantifix(true) ;
               init = window.pageYoffset
             
            
        }
        else if(window.pageYOffset<window.innerHeight && init > window.innerheight){
                setantifix(false);
                init = window.pageYoffset;
        }
      });


     
    return (

        <div>
            { x ? ( 
                 
                // <Navbarfirst antifix={antifix}/>
                // <Navbar light expand="md" style={{ opacity: "0.6", zIndex: "100", backgroundColor: "#93329e" ,position:"fixed"}}></Navbar>
                    
                 <Navbar light expand="md" style={{ opacity: "0.6", backgroundColor: "#93329e" }}>
                

            
                  <NavbarBrand ><a style={{ textDecoration: "none", color: "lead" }} href="/home">Home</a></NavbarBrand>
                    <NavbarToggler style={{ text: "black", backgroundColor: "black" }} onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink ><a style={{ text: "black" }} href="/"><b>SignIn</b></a></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><a style={{ text: "black" }} href="/getaddsfeatured"><b>Live Adds</b></a>

                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink ><a style={{ text: "black" }} href="/companystats"><b>Stats</b></a></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink ><a style={{ text: "black" }} href="/companyuploadvideo"><b>Upload Video</b></a></NavLink>
                            </NavItem>
                            
                            <NavItem>
                            {
                                login ? (<a className="waves-effect waves-light btn  active " style={{ position: "absolute", right: "10px", bottom: "20px", }} onClick={logout}>Logout</a>
                                ) : <div><Redirect to="/"></Redirect></div>
                            }
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                // --------------------
                )
                :

                (
                    <Navbar light expand="md" style={{ opacity: "0.6", backgroundColor: "#93329e"}}>
                        <NavbarBrand href="/home" style={{ text: "black" }}>Home</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink ><a style={{ text: "black" }} href="/"><b>SignIn</b></a></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink ><a style={{ text: "black" }} href="/Adds"><b>See Adds</b></a></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink ><a style={{ text: "black" }} href="/profile"><b>My Profile</b></a></NavLink>
            
                            </NavItem>
                            {
                                login ? (<a className="waves-effect waves-light float-right btn-small font-weight-bold nav-item  active" style={{ position: "absolute", right: "10px", bottom: "20px", }} onClick={logout}>Logout</a>
                                ) : <div><Redirect to="/"></Redirect></div>
                            }
                            </Nav>

                        </Collapse>
                    </Navbar>)
            }
        </div>

    )
}
export default NavBar;




