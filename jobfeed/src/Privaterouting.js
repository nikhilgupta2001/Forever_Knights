import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// {component:Component}
function PrivateRouting({component:Component,...rest}) {
    const authToken = localStorage.getItem('jwtToken');
     console.log(authToken);
    // const { children, ...others } = props;
    {console.log("Private Router")}
    return (
   
        <Route
            {...rest}
            render={ props =>
                !authToken ? (
        
                     <Redirect to="/"/>
                ) : (
             
                    <Component {...props}/>
                   
                )
                
            }
        />
    );
}
export default PrivateRouting;
