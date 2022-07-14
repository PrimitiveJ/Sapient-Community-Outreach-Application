import React, { useState } from "react"

//REGISTERS A SINGLE USER
function registerUser() {
    const [state, setState] = useState({
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
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
                required
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
              User Name:{" "}
              <input
                type="text"
                name="username"
                value={state.username}
                onChange={handleChange}
                required
              />
            </label>
            <label>
                Email:{" "}
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
                Password:{" "}
              <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                required
              />
            </label>
          </form>
          <h5>
            Registering as: Username: {state.username} Email:{state.email}
          </h5>
        </div>
      )
  }

  export default register-user