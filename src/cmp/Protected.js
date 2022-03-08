import React, { Component } from 'react';

import {
    Navigate
  } from "react-router-dom";

// class Protected extends Component{
//     render(){
//         return(
//             <div>
//                 Protected Component
//             </div>
//         );
//     }
// }

function Protected(props)
{
    const Cmp = props.Cmp
    var auth = JSON.parse(localStorage.getItem('auth'))
    console.warn(auth)

    return <div>{auth ? <Cmp /> : <Navigate to="login" ></Navigate> }  </div>
}

export default Protected;