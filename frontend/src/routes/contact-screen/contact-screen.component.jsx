import React, { useState } from 'react'
import Headings from '../../components/headings/headings.component';
import { Row, Col, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactScreen = () => {
  const headline = 'Talk\n with us';
  const headlineTag = 'Contact';
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage]= useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(email, firstName, lastName, phone, message);

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message
    }

    const response = fetch(`/api/contact/send`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    // const response = await fetch(request);
    console.log(response.status);
  }

  return (
    <div>
      <Container>
        <Row className="bg-light heading-bar"></Row>
        <Row>
          <Headings headline={headline} headlineTag={headlineTag} />
        </Row>
        <Row className="mt-3">
          <Col className="contact-us" sm={12} md={5}>
            <h3>Contact</h3>
            <p>
              Furniture Shop NZ specializes in high-quality solid timber furniture for the
              bedroom, living room, and dining room. Combining timeless design
              with expert craftsmanship, our pieces are built to last and
              elevate any home interior. We pride ourselves on using sustainable
              materials to create elegant, durable, and stylish furniture for
              every space.
            </p>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:furnitureshopnz@gmail.com";
              }}
            >
              <strong>Email: </strong> furnitureshopnz@gmail.com
            </Link>

            <p>For all order and product infomation</p>
            <p>
              <strong>Telephone: </strong> 021 804 922
            </p>
          </Col>
          <Col sm={12} md={7}>
            <Form className='form-control' onSubmit={sendEmail}>
              <div className="d-flex">
                <Col sm={12} md={6}>
                  <Form.Group
                    className="mb-3 me-2"
                    controlId="formGroupFirstName"
                  >
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group
                    className="mb-3 ms-2"
                    controlId="formGroupLastName"
                  >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </div>

              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter Phone Number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text"
                  name="messsage"
                  placeholder="Enter a message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              
              <button type="submit" class="btn btn-primary btn-block mb-4 w-100">Send</button>

            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactScreen;