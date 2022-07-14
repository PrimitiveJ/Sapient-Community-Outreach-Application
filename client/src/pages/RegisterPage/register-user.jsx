import React, {useState} from "react"

import RegisterBusiness from './register-business'
import RegisterOrganizer from './register-organizer'

// REGISTERS A SINGLE USER
function RegisterUser(props) { // const [status, setStatus] = useState("Submit");

    const [state, setState] = useState({
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
        extensions: {
            organizer: false,
            business: false
        }
    });

    // Handle changes to the state
    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    };

    // Handle form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus("Submitting...");
    // }

    const handleChangeUserExt = (e, userExt) => {
        const stateCopy = {
            ...state
        };
        stateCopy.extensions[userExt] = !state.extensions[userExt];
        setState(stateCopy);
    }

    const renderOrganizerForm = () => {
        switch (state.extensions.organizer) {
            case true:
                return <RegisterOrganizer everystate={
                    props.everystate
                }/>
            case false:
                return ''
            default:
                return false
        }
    };

    const renderBusinessForm = () => {
        switch (state.extensions.business) {
            case true:
                return <RegisterBusiness everystate={
                    props.everystate
                }/>
            case false:
                return ''
            default:
                return false
        }
    };


    return (
        <span className="border border-primary">
            <form>
                <div className="block-example border border-dark">
                    <h1>User Registration Form</h1>
                    <div className="col-sm-2">
                        <div className="card bg-secondary">
                            <label>
                                First Name:{" "}
                                <input type="text" className="form-control" name="fname"
                                    value={
                                        state.fname
                                    }
                                    onChange={handleChange}
                                    required/>
                            </label>
                            {" "}
                            <label>
                                Last Name:{" "}
                                <input type="text" name="lname" className="form-control"
                                    value={
                                        state.lname
                                    }
                                    onChange={handleChange}/>
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card bg-secondary">
                            <label>
                                User Name:{" "}
                                <input type="text" name="username" className="form-control"
                                    value={
                                        state.username
                                    }
                                    onChange={handleChange}
                                    required/>
                            </label>

                            <label>
                                Email:{" "}
                                <input type="email" name="email" className="form-control"
                                    value={
                                        state.email
                                    }
                                    onChange={handleChange}
                                    required/>
                            </label>
                            <label>
                                Password:{" "}
                                <input type="password" name="password" className="form-control"
                                    value={
                                        state.password
                                    }
                                    onChange={handleChange}
                                    required/>
                            </label>
                          
                            <div className="col-sm-12 card bg-secondary">
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label for="inputCity">City</label>
                                        <input type="text" className="form-control" id="inputCity" required/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label for="inputState" required>State</label>
                                        <select id="inputState" className="form-control" required>
                                            <option selected>Choose...</option>
                                            {
                                            props.everystate.map(state => {
                                                return <option>{state}</option>

                                        })
                                        } </select>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label for="inputZip">Zip</label>
                                        <input type="text" className="form-control" id="inputZip" required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>

                        <h5>
                            Registering as: Username: {
                            state.username
                        }
                            Email:{
                            state.email
                        } </h5>
                    </div>
                </div>
                <div className="form-group">
                    <h1>Register as a Participant, or Business Sponsor!</h1>
                    <label>
                        <input type="checkbox" name="businessIsChecked"
                            checked={
                                state.extensions.business
                            }
                            onChange={
                                e => handleChangeUserExt(e, 'business')
                            }/> {" "}
                        Business
                        <input type="checkbox" name="organizerIsChecked"
                            checked={
                                state.extensions.organizer
                            }
                            onChange={
                                e => handleChangeUserExt(e, 'organizer')
                            }/> {" "}
                        Organizer
                    </label>
                </div>
                {
                renderOrganizerForm()
            }
                {
                renderBusinessForm()
            } </form>
        </span>

    )


    // Details variable that store the value of input fields to be posted

    // let details=
    // {firstname: fname.value,
    // lastname: lname.value,
    // username: username.value,
    // email: email.value,
    // password: password.value
    // }


    // BOILERPLATE FOR POSTING TO USER DATABASE
    // let response = await fetch("API-URL/ENDPOINT/GOES/HERE, {
    // method: "POST",
    // headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    // },
    // body: JSON.stringify(details),
    // });
    // setStatus("Submit");
    // let result = await response.json();
    // alert(result.status);
}
export default RegisterUser
