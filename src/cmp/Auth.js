import React, { Component } from 'react';

class Auth extends Component{

    login(){
        console.warn("state", this.state)
        fetch('http://localhost:8080/api1/login',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);

            })

        })

        //alert("login called")
    }


    render(){
        return(
            <div>
                <div> 
                   <input type="text" 
                   onChange={(e)=>{this.setState({name:e.target.value})}}  /><br /><br />
                   <input type="text"
                   onChange={(e)=>{this.setState({password:e.target.value})}} /><br /><br />
                   <button onClick={()=>this.login()}>Login</button>

                </div>
            </div>
        );
    }
}

export default Auth;