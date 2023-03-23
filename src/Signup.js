import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [matchError, setMatchError] = useState({});
  const [showModal, setShowModal] = useState(false);

  function validate() {
    let errors = {};
    let matchErrors ={};

    if (!name.trim()) {
      errors.name = "Name is Required";
    }
    if (!email.trim()) {
      errors.email = "Email is Required";
    } else if (!email.includes("@")) {
      errors.email = "Invalid email";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is Required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Password do not Match";
    } else {
      matchError.confirmPassword = "Password Match";
    }
    setErrors(errors);
    setMatchError(matchError);
    return Object.keys(errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isValid = validate();

    if (isValid) {
      // alert("Register Successfully!")
      setShowModal(true);
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Password: ", password);
      console.log("ConfirmPassword: ", confirmPassword);
    }
  }
  return (
    // {/* Sign UpForm */}
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 col-md-6 mt-3">
          <h1 className=" text-center fw-bold mb-5 mt-2">Signup Panel</h1>
          <form onSubmit={Signup && handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                placeholder="Enter your name"
                type="text"
                className="form-control mt-1"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="sm" style={{ color: "red" }}>{errors.name}</div>
            </div>
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
              <div className="sm" style={{ color: "red" }}>{errors.email}</div>
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
              <div className="sm" style={{ color: "red" }}>{errors.password}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Confirm Password:
              </label>
              <input
                type="password"
                placeholder="Enter your confirm password"
                className="form-control mt-1"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="sm" style={{ color: "red" }}>{errors.confirmPassword}</div>
              <div className="sm" style={{ color: "Green" }}>{matchError.confirmPassword}</div>
            </div>
            {/* Button */}
            <button
              className="btn btn-outline-secondary mt-3"
              onClick={() => props.onFormSwitch("login")}
            >
              Do you have an account? Login here!
            </button>
            <br />
            <button className="btn btn-dark mt-3" type="submit">
              Submit
            </button>
            {/* Modal Feature */}
            <div>
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Registered Successful!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Congratulation, You have successfully registered your account.
                </Modal.Body>
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
