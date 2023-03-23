import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showModal, setShowModal] = useState(false);

  function validate() {
    let emailError = "";
    let passwordError = "";

    if (!email.includes("@")) {
      emailError = "Invalid email";
    }

    if (password.length < 8) {
      passwordError = "Password must be at least 8 characters";
    }

    setEmailError(emailError);
    setPasswordError(passwordError);

    if (emailError || passwordError) {
      return false;
    }

    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isValid = validate();

    if (isValid) {
      setShowModal(true);
      console.log("Email: ", email);
      console.log("Password: ", password);
    }
  }

  return (
    // {/* Login Form */}
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 col-md-6 mt-3">
          <h1 className=" text-center fw-bold mb-5 mt-2">Login Panel</h1>
          {/* Bootstrap Alert */}
          {emailError || passwordError ? (
            <div className="alert alert-danger" role="alert">
              {emailError && <p>{emailError}</p>}
              {passwordError && <p>{passwordError}</p>}
            </div>
          ) : null}

          <form onSubmit={Login && handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control mt-1"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                placeholder="Enter your password"
                type="password"
                className="form-control mt-1"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Button */}
            <button
              className="btn btn-outline-secondary mt-3"
              onClick={() => props.onFormSwitch("signup")}
            >
              Don't have an account? Register here!
            </button>
            {/* <a href="/#" onClick={() => props.onFormSwitch("signup")}>
              Don't have an account? Register here!
            </a> */}
            <br />
            <button className="btn btn-dark mt-3" type="submit">
              Submit
            </button>
            {/* Modal Feature */}
            <div>
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Login Successfully!</Modal.Title>
                </Modal.Header>
                <Modal.Body>You have successfully logged in.</Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}
