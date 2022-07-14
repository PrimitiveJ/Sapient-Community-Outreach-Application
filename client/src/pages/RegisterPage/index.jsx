import React, { useState } from "react"
import "./style.css"
import Register-Select from "./register-select"
import Register-User from "./register-user"
/*

    Page: Register Page

    Purpose: Provides components which are responsible for allowing the
    user to create/login to an account, and also includes conditional 
    rendering for different types of registry, such as:
        * Normal User 
        * Organizer 
        * Business 

*/




function registerUser() {
      return (
        <Register-Select/>
      )
  }


  export default RegisterPage
