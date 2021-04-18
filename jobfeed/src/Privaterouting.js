import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// {component:Component}
function PrivateRouting(props) {
    const authToken = localStorage.getItem('jwtToken');
    console.log(authToken);
    const { children, ...others } = props;

    return (
        <Route
            {...others}
            render={() =>
                !authToken ? (
        
                     <Redirect to="/"/>
                ) : (
                //    <Component {...props}/>
                <div>
                    
                </div>
                )
                
            }
        />
    );
}
export default PrivateRouting;
