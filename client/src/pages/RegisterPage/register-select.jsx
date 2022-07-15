import React, {useState} from "react"
import RegisterUser from "./register-user"
import RegisterBusiness from "./register-business"
import RegisterOrganizer from "./register-organizer"

function RegisterSelect(props) {
    const [state, setState] = useState({
        userIsChecked: false,
        organizerIsChecked: false,
        businessIsChecked: false,
        registerType: "user",
        isLoggedIn: true,
    });

    const handleUserChange = () => {
        setState({
            ...state,
            userIsChecked: !state.userIsChecked,
        });
        console.log(state.userIsChecked);
    }
    
    const handleBusChange = () => {
        setState({
            ...state,
            businessIsChecked: !state.businessIsChecked,
        });
        console.log(state.businessIsChecked);
    }

    const handleOrgChange = () => {
        setState({
            ...state,
            organizerIsChecked: !state.organizerIsChecked,
        });
        console.log(state.organizerIsChecked);
    }

    const renderPage = () => {
        switch (state.userIsChecked) {
            case true:
                return <RegisterUser everystate={
                    props.everystate
                }/>;
            default:
                return ''   
        }
    };

    const renderBusiness= () => {
        switch (state.businessIsChecked) {
            case true: 
            return <RegisterBusiness everystate={props.everystate}/>;
            default: return ''
        }
    }

    const renderOrg = () => {
        switch (state.organizerIsChecked) {
            case true: 
            return <RegisterOrganizer everystate={props.everystate}/>;
            default: return ''
        }
    }

    return (
        
        <div className="container">
            <div className="row-sm-12">
            <form className="form" id="form">
                <div className="form-group row-sm-4">
                    <p>Register as a User
                        <label>
                            <input type="checkbox" name="userIsChecked"
                                checked={
                                    state.userIsChecked
                                }
                                onChange={handleUserChange}/> {" "} 
                        </label>            
                    </p>
                </div>
            </form>
            <form className="form" id="form">
                <div className="form-group row-sm-4">
                    <p>Register as a Business Sponsor
                        <label>
                            <input type="checkbox" name="businessIsChecked"
                                checked={
                                    state.businessIsChecked
                                }
                                onChange={handleBusChange}/> {" "} 
                        </label>            
                    </p>
                </div>
            </form>
            <form className="form" id="form">
                <div className="form-group row-sm-4">
                    <p>Register as an Event Organizer
                        <label>
                            <input type="checkbox" name="organizerIsChecked"
                                checked={
                                    state.organizerIsChecked
                                }
                                onChange={handleOrgChange}/> {" "} 
                        </label>            
                    </p>
                </div>
            </form>
            {renderPage()} 
            {renderBusiness()}
            {renderOrg()}
        </div>
        </div>
    )

}


export default RegisterSelect