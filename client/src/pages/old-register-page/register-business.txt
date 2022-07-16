import React from 'react'

let businessStyle = {};

function RegisterBusiness(props) {
    console.log(props)
    return (
        <div className="block-example border border-dark bg-light"
            style={businessStyle}>
            <h1>Register as a Business Sponsor</h1>
            <div className="form-group">
                <label for="inputAddress">Business Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Number and Street"/>
            </div>
            <div className="form-group">
                <label for="inputAddress2">Business Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Suite, Studio, or Building Number "/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        {
                        props.everystate.map(state => {
                            return <option>{state}</option>

                    })
                    } </select>
                </div>
                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Make my Business Visible to Others
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    )
}

export default RegisterBusiness
