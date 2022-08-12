import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import emailjs from "@emailjs/browser";

function ContactForm() {
  // set default values of state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const [errorMessage, setErrorMessage] = useState("");

  // destructure the formState object into its named properties
  const { name, email, message } = formState;
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Your email is invalid");
      // return;
    } else {
      setErrorMessage("");
    }

    emailjs
      .sendForm(
        "service_jmi1pjf",
        "template_nj1l7vl",
        form.current,
        "zjPqHUjwZH_jK8ifi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setFormState({ name: "", email: "", message: "" });
      });
  };

  // sync state
  const handleChange = (e) => {
    if (!e.target.value.length) {
      setErrorMessage(
        `${e.target.name} is required. Press any key to close message.`
      );
    } else {
      setErrorMessage("");
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      // console.log("Handle Form", formState);
    }
  };

  return (
    <Container className="w-75">
      <h1 data-testid="h1tag">Contact me</h1>
      <Form id="contact-form" ref={form} onSubmit={sendEmail}>
        <Row>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </Row>
        <Row>
          <label htmlFor="email">Email address:</label>
          <input name="email" value={email} onChange={handleChange} />
        </Row>
        <Row>
          <label htmlFor="message">Message:</label>
          <textarea
            className="mb-2"
            name="message"
            rows="5"
            value={message}
            onChange={handleChange}
          />
        </Row>
        {errorMessage && (
          <Row className="error-container mb-2">
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
