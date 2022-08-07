import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ContactForm() {
  // set default values of state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  // sync state
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <Container className="w-75">
      <h1 data-testid="h1tag">Contact me</h1>
      <Form id="contact-form" onSubmit={handleSubmit}>
        <Row>
          <label column sm={2} htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </Row>
        <Row>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </Row>
        <Row>
          <label htmlFor="message">Message:</label>
          <textarea
            className="mb-2"
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </Row>
        {errorMessage && (
          <Row>
            <p className="error-text">{errorMessage}</p>
          </Row>
        )}
        <Button data-testid="button" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
