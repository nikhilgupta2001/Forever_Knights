import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
function PrivateRouting({component:Component}) {
    // const authToken = useSelector((state) => state.user.authToken);
    console.log(Component)
    var authToken = localStorage.getItem('jwtToken');
    // const { children, ...others } = props;
    // children
    
    return (
        <Route
            // {...others}
            // {...rest}
            render={(props) =>
                !authToken ? (
        
                     <Redirect to="/signin"/>
                ) : (
                   <Component {...props}/>
                )
                
            }
        />
    );
}

export default PrivateRouting;