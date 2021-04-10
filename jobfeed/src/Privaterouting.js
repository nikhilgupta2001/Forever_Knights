import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// {component:Component}
function PrivateRouting(props) {
    const authToken = useSelector((state) => state.authReducer.isAuthenticated);
    // console.log(Component)
    console.log(authToken);
    // var authToken = localStorage.getItem('jwtToken');
    const { children, ...others } = props;
    // children

    return (
        <Route
            {...others}
            // {...rest}
            render={() =>
                !authToken ? (
        
                     <Redirect to="/"/>
                ) : (
                //    <Component {...props}/>
                // <Redirect to="/home" />
                children
                )
                
            }
        />
    );
}

export default PrivateRouting;