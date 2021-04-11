import React, { Component } from 'react';



 class Spinner extends Component {
    render() {
        return (
            <div className="col-md-4 offset-4">
               <img style={{height:'100px',margin:'auto',display:'block'}} src="spinner.gif" alt="Laoding..."/>
            </div>
        )
    }
}
export default Spinner;