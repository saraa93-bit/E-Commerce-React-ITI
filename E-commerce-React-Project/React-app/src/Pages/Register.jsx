import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Register.css";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.emailOrPhone) {
      newErrors.emailOrPhone = "Email or Phone is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailOrPhone) && 
      !/^\d{10}$/.test(formData.emailOrPhone)
    ) {
      newErrors.emailOrPhone = "Invalid email or phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:3000/users", formData);
        console.log("User registered successfully:", response.data);
        setShowSuccessModal(true);
      } catch (error) {
        console.error("Error registering user:", error);
      }
    } else {
      console.log("Form has errors");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="row h-100">
        <div className="col-md-6 d-none d-md-block h-100">
          <img
            src="/images/logo/dl.beatsnoop 1.png"
            alt="Side Image"
            className="img-fluid h-75 mt-5 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center h-100">
          <div className="card border-0 shadow-none w-100 max-width-form mb-5 mt-0">
            <div className="card-body">
              <h2 className="card-title text-center mb-2">Create an account</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-1">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Enter Your Name"
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="mb-1">
                  <label htmlFor="emailOrPhone" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.emailOrPhone ? "is-invalid" : ""
                    }`}
                    id="emailOrPhone"
                    name="emailOrPhone"
                    value={formData.emailOrPhone}
                    placeholder="Enter Your Email"
                    onChange={handleChange}
                  />
                  {errors.emailOrPhone && (
                    <div className="invalid-feedback">
                      {errors.emailOrPhone}
                    </div>
                  )}
                </div>

                <div className="mb-1">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    id="password"
                    name="password"
                    placeholder="Enter your Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>

                <div className="d-flex justify-content-center mt-2">
                  <button type="submit" className="btn btn-primary w-50">
                    Create Account
                  </button>
                </div>
              </form>

              <div className="text-center mt-2">
                <p>Or sign up with Google</p>
                <button className="btn btn-outline-danger w-75 d-flex align-items-center justify-content-center">
                  <FcGoogle className="me-2" />
                  Sign up with Google
                </button>
              </div>

              <div className="text-center mt-2">
                <p>
                  Already have an account? <Link to="/Login">Log in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
        <Modal.Header closeButton>
          <Modal.Title>User registered successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>you will redirect to home page now</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={handleCloseSuccessModal}>
            ok
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Register;