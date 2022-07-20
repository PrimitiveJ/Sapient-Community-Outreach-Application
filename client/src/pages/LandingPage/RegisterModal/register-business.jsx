import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegisterBusiness(props) {
    return (
        <Form>
            <h1>Business Sponsor Registration</h1>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Business Address</Form.Label>
            <Form.Control type="address" placeholder="Address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="city" placeholder="City" />
          </Form.Group>

          <Form.Select aria-label="State Select">
            <option>Select your State</option>
            {props.everystate.map(state => {return <option>{state}</option>})}
          </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicZipCode">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="zipcode" placeholder="Zip Code" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Register as business with this username" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
}

export default RegisterBusiness