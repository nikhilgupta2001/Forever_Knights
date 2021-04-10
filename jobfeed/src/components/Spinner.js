import React, { Component } from 'react';



 class Spinner extends Component {
    render() {
        return (
            <div>
               <img style={{width:'100px',height:'100px',margin:'auto',display:'block'}} src="spinner.gif" alt="Laoding..."/>
            </div>
        )
    }
}
export default Spinner;