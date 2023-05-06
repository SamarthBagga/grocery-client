import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import firebaseConfig from "../firebase";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { useState } from "react";
import { signInWithPhoneNumber } from "firebase/auth";

export default function login() {
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState("");

  const setUpRecaptcha = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          console.log("Captcha Resolved");
          onSignInSubmit();
        },
      },
      auth
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const phoneNumber = "+91" + phone;
    console.log(phoneNumber);
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          console.log("Captcha Resolved");
        },
      },
      auth
    );
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmitOtp = (e) => {
    e.preventDefault();
    const otpInput = otp;
    // console.log(codee);
    confirmationResult
      .confirm(otpInput)
      .then((result) => {
        const user = result.user;
        console.log("correct otp")
      })
      .catch((error) => {
        console.log(error);
        alert("Incorrect OTP");
      });
  };

  {
    return (
      <div>
        <Container fluid="sm" className="mt-3">
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={5}>
              <h2 className="mb-3">Login</h2>
              <Form className="form" onSubmit={onSignInSubmit}>
                <div id="recaptcha-container"></div>
                <Form.Group>
                  <Form.Control
                    type="number"
                    name="mobile"
                    placeholder="Mobile Number"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </Form.Group>
                <button id="sign-in-button" type="submit">
                  Submit
                </button>
              </Form>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={5}>
              <h2 className="mb-3">Enter OTP</h2>
              <Form className="form" onSubmit={onSubmitOtp}>
                <Form.Group>
                  <Form.Control
                    id="otp"
                    type="number"
                    name="otp"
                    placeholder="OTP"
                    onChange={(e) => setOTP(e.target.value)}
                  />
                </Form.Group>
                <button type="submit">Submit</button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
