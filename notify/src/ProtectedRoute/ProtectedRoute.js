import React, { Component } from 'react'
import {Route,Redirect} from 'react-router-dom'
import jwt from 'jsonwebtoken'

var cookie ;

export default function ProtectedRoute({component:Component,...rest}) {

    if (document.cookie.split(';').some((item) => item.trim().startsWith('loginToken='))) {
        
    
        cookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('loginToken='))
        .split('=')[1];
    
    }
    

    var auth = false;
    if (cookie) {
      jwt.verify(cookie,"somerandomjwtkeyfromthebackend",(err,decoded) => {
          if (err) {
              console.log("jwt not authorized");
              auth = false;
          } else {
              console.log("jwt authorized");
              auth = true;
          }
      })
    }else{
        console.log("no cookie exist ");
        auth = false;
    }  
        
    return (

        <Route {...rest} render = {(props) => {                           
            if (auth) {
                return <Component {...props} />
            }else{
                return <Redirect to ={{pathname:'/login',state : props.location}} />
            }
        }}
        />
    )  
        
}

