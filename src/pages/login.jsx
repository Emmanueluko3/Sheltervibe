import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

function Login({ showState }) {
  const [show, setShow] = useState(showState ?? false);
  const [launchCount, setLaunchCount] = useState(0);
  const [authType, setAuthType] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (launchCount > 0) {
      toggleShow();
    }
    setLaunchCount(launchCount + 1);
    console.log("use effect");
  }, [showState]);

  return (
    <>
      <Modal
        show={show}
        onHide={toggleShow}
        backdrop="static"
        keyboard={false}
        centered
        className="bg-gradient border border-0"
        size="md"
      >
        <Modal.Header className="border-0 mb-0" closeButton>
          {/* <Modal.Title>Login</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {authType ? (
            <Form>
              <div className="w-100 mt-0 d-flex justify-content-center">
                <h2 className="cus-text-1 fw-bold fs-2">Sign Up</h2>
              </div>
              <div className="my-">
                <Button
                  variant="white"
                  className="w-100 mt-3 fw-semibold border"
                >
                  Continue with Google
                </Button>
              </div>
              <div className="my-1 w-100 d-flex justify-content-center">
                <h2 className="cus-text-1 fw-semibold fs-4">Or</h2>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                      autoComplete="on"
                      type="text"
                      placeholder="E.g Emmanuel"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-6">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                      autoComplete="on"
                      type="text"
                      placeholder="E.g Stephen"
                    />
                  </Form.Group>
                </div>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  autoComplete="on"
                  type="email"
                  placeholder="E.g Steve@email.com"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control
                  autoComplete="on"
                  type="number"
                  placeholder="E.g +0123456789"
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  autoComplete="off"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="secondary"
                className="w-100 mt-3 fw-semibold"
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          ) : (
            <Form>
              <div className="w-100 mt-0 d-flex justify-content-center">
                <h2 className="cus-text-1 fw-bold fs-2">Login</h2>
              </div>
              <div className="my-">
                <Button
                  variant="white"
                  className="w-100 mt-3 fw-semibold border"
                >
                  Continue with Google
                </Button>
              </div>
              <div className="my-1 w-100 d-flex justify-content-center">
                <h2 className="cus-text-1 fw-semibold fs-4">Or</h2>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  autoComplete="on"
                  type="email"
                  placeholder="E.g Steve@email.com"
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  autoComplete="off"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Text role="button" className="text-danger fw-semibold">
                Forgot password?
              </Form.Text>

              <Button
                variant="secondary"
                className="w-100 mt-3 fw-semibold"
                type="submit"
              >
                Login
              </Button>
            </Form>
          )}

          <h5 className="my-3 fs-6 fw-semibold">
            {authType ? "Already have an account? " : "Don’t have an account? "}
            <span
              onClick={() => {
                setAuthType(!authType);
              }}
              className="text-primary pointer"
              role="button"
            >
              {authType ? "Log In " : "Sign Up"}
            </span>
          </h5>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
