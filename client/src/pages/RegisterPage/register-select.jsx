import React, { useState } from "react"
import Register-User from "./register-user"
function registerSwitch() {
    const [currentPage, handlePageChange] = useState('register-select');
    return (
        <div>
            <h1>Register as a User, Participant, or Business Sponsor!</h1>
            <input type="checkbox" name="User" id="user" value= "user" />
            <input type="checkbox" name="Organizer" id="organizer" value= "organizer" />
            <input type="checkbox" name="Business" id="business" value= "business" />
        </div>
    )

    const renderPage = () => {
        switch (currentPage) {
            case "user": 
            return <Register-User />,
            case "business": 
            return <Register-User />,
            case "organizer": 
            return <Register-User />;
          }    
};
}
export default register-select