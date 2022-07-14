import React, { useState } from "react"
import RegisterUser from "./register-user"

function RegisterSelect(props) {
    const [state,  setState] = useState({
        userIsChecked: false,
        organizerIsChecked: false,
        businessIsChecked: false,
        registerType : "user",
        isLoggedIn: true,
      });
      
      const handleUserChange = () => {
        setState({ ...state, userIsChecked: !state.userIsChecked});
        console.log(state.userIsChecked);
        // if (e.target.checked===true) {
        //     setState({
        //         registerType: userType,
        //     })    
        // } else 
        //  setState({
        //     ...state,
        //     registerType: ""
        //  })
      }

      const renderPage = () => {
        switch (state.userIsChecked) {
            case true:
            return <RegisterUser everystate={props.everystate} />;
            default: return ''
            // case organizer: 
            // return <RegisterOrganizer />;
            // case business:  
            // return <RegisterBusiness />;
          }    
    };

    return (
        <div>
            <form>
                <div className="form-group">
            <h1>Register as a User, Participant, or Business Sponsor!</h1>
            <label>
        <input
          type="checkbox"
          name="userIsChecked"
          checked={state.userIsChecked}
          onChange={handleUserChange}
        />
{" "}
        User
      </label>
      </div>
      
    </form>
    {renderPage()}
    </div>
           
        
       
    )
   
}


export default RegisterSelect