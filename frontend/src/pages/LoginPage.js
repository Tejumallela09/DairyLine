import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const LoginPage = () => {
  const [farmerPhoneNumber, setFarmerPhoneNumber] = useState("");
   const [farmerPassword, setFarmerPassword] = useState('');
   const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");

  const [customerPassword, setCustomerPassword] = useState('');

  const handleFarmerSubmit = (e) => {
    e.preventDefault();
    // Handle farmer login logic here
  };

  const handleCustomerSubmit = (e) => {
    e.preventDefault();
    // Handle customer login logic here
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h1>Login Page</h1>
        </div>
        <div className="col-md-6">
          <Card className="w-95" style={{ width: '400px' ,height:"300px"}}>
            <Card.Body>
              <Card.Title>Farmer Login</Card.Title>
              <Form onSubmit={handleFarmerSubmit}>
              <Form.Group controlId="farmerPhoneNumber">
  <Form.Label>Phone Number</Form.Label>
  <Form.Control
    type="text"
    placeholder="Enter phone number"
    value={farmerPhoneNumber}
    onChange={(e) => setFarmerPhoneNumber(e.target.value)}
  />
</Form.Group>

                <Form.Group controlId="farmerPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={farmerPassword}
                    onChange={(e) => setFarmerPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6">
          <Card className="w-95" style={{ width: '400px' ,height:"300px"}}>
            <Card.Body>
              <Card.Title>Customer Login</Card.Title>
              <Form onSubmit={handleCustomerSubmit}>
              <Form.Group controlId="customerPhoneNumber">
  <Form.Label>Phone Number</Form.Label>
  <Form.Control
    type="text"
    placeholder="Enter phone number"
    value={customerPhoneNumber}
    onChange={(e) => setCustomerPhoneNumber(e.target.value)}
  />
</Form.Group>

                <Form.Group controlId="customerPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={customerPassword}
                    onChange={(e) => setCustomerPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
