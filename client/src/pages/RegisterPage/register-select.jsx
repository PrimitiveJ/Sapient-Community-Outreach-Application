import React, { useState } from "react"
import Register-User from "./register-user"
function registerSwitch() {
    const [currentPage, handlePageChange] = useState('register-select');
    return (
        <div>
            <h1>Register as a User, Participant, or Business Sponsor!</h1>
            <input type="checkbox" name="User" id="user" value= "user" />
            {/* Insert Ifloggedin===true */}
            {/* <input type="checkbox" name="Organizer" id="organizer" value= "organizer" />
            <input type="checkbox" name="Business" id="business" value= "business" /> */}
        </div>
    )

    const renderPage = () => {
        switch (currentPage) {
            case user === true: 
            return <Register-User />,
            // case organizer === true:  
            // return <Register-Organizer />;
            // case business === true:  
            // return <Register-Business />,
          }    
};
}
export default register-select