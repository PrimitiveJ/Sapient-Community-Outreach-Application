import React, { useState } from "react"

//REGISTERS A SINGLE USER
function registerUser() {
    
    const [status, setStatus] = useState("Submit");
    
    const [state, setState] = useState({
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
      });
    
      //Handle changes to the state
      const handleChange = e => {
        setState({
          // ...state,
          [e.target.name]: e.target.value,
        })
      }

      //Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");
    }

    //Details variable that store the value of input fields to be posted
      let details= 
      {firstname: fname.value,
      lastname: lname.value,
      username: username.value,
      email: email.value,
      password: password.value
      }


      //BOILERPLATE FOR POSTING TO USER DATABASE
      // let response = await fetch("APP-URL/ENDPOINT/GOES/HERE, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(details),
    // });
    // setStatus("Submit");
    // let result = await response.json();
    // alert(result.status);
    
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
            <button type="submit">{status}</button>
          </form>
          <h5>
            Registering as: Username: {state.username} Email:{state.email}
          </h5>
        </div>
      )
  }

  export default register-user