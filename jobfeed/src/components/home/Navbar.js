
// export default NavBar;
import React, { useState } from 'react';
import './navbar.css';
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
    const [antifix, setantifix] = useState(false);
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
        if (window.pageYOffset > window.innerHeight && init < window.innerheight) {
            setantifix(true);
            init = window.pageYoffset


        }
        else if (window.pageYOffset < window.innerHeight && init > window.innerheight) {
            setantifix(false);
            init = window.pageYoffset;
        }
    });



    return (

        <div>
            { x ? (

                // <Navbarfirst antifix={antifix}/>
                // <Navbar light expand="md" style={{ opacity: "0.6", zIndex: "100", backgroundColor: "#93329e" ,position:"fixed"}}></Navbar>

                <Navbar light expand="md" style={{ opacity: "0.8",height:"80px",backgroundColor:"#93329e"}}>



                    <NavbarBrand >
            
                    <NavbarBrand className="navbar-brand"  >
                            
                            <a href="/home"><img className="" style={{ height: "80px", width: "100px",position:"absolute",left: "0px", top: "0px" }} src="/Images/logofinal.jpeg" /></a>
                           
                        </NavbarBrand>


                    </NavbarBrand>
                    <NavbarToggler style={{zIndex:"100" ,border:"1px solid black",backgroundColor:"#93329e",color:'black'}} onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar style={{backgroundColor:"#93329e" }}>
                        <Nav  className="mr-auto" navbar>
                             
                              {/* <NavItem>
                            <NavLink><b style={{ color: "white" }}>{' '}Addstube</b></NavLink>
                            </NavItem> */}
                            <NavItem className="show">
                                    <NavLink><div className="linkk" style={{color:"#93329e"}}href="/adds"><b>kllllllll</b></div></NavLink>
                                </NavItem >
                            <NavItem>
                                <NavLink><a className="linkk" href="/companyprofile"><b>Live Adds</b></a></NavLink>
                            </NavItem>
                            <NavItem className="show">
                                <NavLink ><a className="linkk" href="/companystats"><b>Stats</b></a></NavLink>
                            </NavItem>
                            <NavItem className="show">
                                <NavLink ><a className="linkk" href="/companyuploadvideo"><b>Upload Video</b></a></NavLink>
                            </NavItem>
                            {
                                login ? (<NavItem className="show"><NavLink ><a className="linkk waves-effect waves-light float-right btn-small font-weight-bold nav-item  active" onClick={logout}>Logout</a></NavLink></NavItem>
                                ) : <div><Redirect to="/"></Redirect></div>
                            }
                            {/* style={{  right: "10px", bottom: "20px", }} */}
                        </Nav>
                    </Collapse>
                </Navbar>

                // --------------------
            )
                :

                (
                    // style={{height:"63px" ,width:"",marginTop:"0px",marginLeft:"0px",}}
                    <Navbar  expand="md" style={{ opacity: "0.8",height:"80px",backgroundColor:"#93329e",color:'black'}}>

                        <NavbarBrand className="navbar-brand"  >
                            
                            <a href="/home"><img className="" style={{ height: "80px", width: "100px",position:"absolute",left: "0px", top: "0px" }} src="/Images/logofinal.jpeg" /></a>
                           
                        </NavbarBrand>
                        <NavbarToggler  style={{zIndex:"100" ,border:"1px solid black",backgroundColor:"#93329e",color:'black'}} onClick={toggle}  />
                        <Collapse  isOpen={isOpen} navbar style={{backgroundColor:"#93329e" }} >
                            <Nav  className=" mr-auto" navbar >
                            {/* <NavItem>
                            <NavLink><b style={{ color: "white" }}>{' '}Addstube</b></NavLink>
                            </NavItem> */}
                                <NavItem className="show">
                                    <NavLink><div className="linkk" style={{color:"#93329e"}}href="/adds"><b>kllllllllll</b></div></NavLink>
                                </NavItem >
                                <NavItem className="show">
                                    <NavLink ><a className="linkk" href="/adds"><b>{' '} Watch Adds</b></a></NavLink>
                                </NavItem >
                                <NavItem   className="show">
                                    <NavLink ><a className="linkk" href="/profile"><b>My Profile</b></a></NavLink>
                                </NavItem >
                                {
                                    login ? (<NavItem   className="show"><NavLink ><a className="waves-effect waves-light btn-small font-weight-bold nav-item  active float-right" onClick={logout}>Logout</a></NavLink></NavItem>
                                    ) : <div><Redirect to="/"></Redirect></div>
                                }
                            </Nav>

                        </Collapse>
                    </Navbar>)
            }
        </div>

    )
}


export default NavBar

