import React, { useState } from "react"
import "./style.css"
/*

    Page: Register Page

    Purpose: Provides components which are responsible for allowing the
    user to create/login to an account, and also includes conditional 
    rendering for different types of registry, such as:
        * Normal User 
        * Organizer 
        * Business 

*/
const regOptions = ['User', 'Organizer', 'Business'];

function registerPage() {
    const [state, setState] = useState({
        fname: "",
        lname: "",
        email: "",
      })
    
      const handleChange = e => {
        setState({
          // ...state,
          [e.target.name]: e.target.value,
        })
      }
    
      return (
        <div>
          <h1>Register to get access to Sapient!</h1>
          <form>
            <label>
              First Name:{" "}
              <input
                type="text"
                name="fname"
                value={state.fname}
                onChange={handleChange}
              />
            </label>{" "}
            <label>
              Last Name:{" "}
              <input
                type="text"
                name="lname"
                value={state.lname}
                onChange={handleChange}
              />
            </label>
            <label>
                Email:{" "}
              <input
                type="text"
                name="email"
                value={state.lname}
                onChange={handleChange}
              />
            </label>
          </form>
          <h5>
            Name: {state.fname} {state.lname}
          </h5>
        </div>
      )
  }


  export default RegisterPage
