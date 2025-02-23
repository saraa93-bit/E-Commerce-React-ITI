import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Login.css"; 

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!emailOrPhone) {
      newErrors.emailOrPhone = "Email or Phone Number is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.get("http://localhost:3000/users");
        const users = response.data;

        const user = users.find(
          (u) =>
            (u.email === emailOrPhone || u.phone === emailOrPhone) &&
            u.password === password
        );

        if (user) {
          console.log("Login successful!");

          if (user.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/Home");
          }
        } else {
          setErrors({ general: "Invalid email/phone or password" });
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setErrors({ general: "Server error. Please try again later." });
      }
    }
  };

  return (
    <div className="login-container">
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
          <div className="card border-0 shadow-none w-100 max-width-form">
            <div className="card-body">
              <h2 className="card-title text-center mb-2">Log in to Exclusive</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="emailOrPhone" className="form-label">
                    Email or Phone Number
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.emailOrPhone ? "is-invalid" : ""}`}
                    id="emailOrPhone"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    placeholder="Enter Your Email or Phone"
                  />
                  {errors.emailOrPhone && (
                    <div className="invalid-feedback">{errors.emailOrPhone}</div>
                  )}
                </div>

                <div className="mb-1">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>

                {errors.general && (
                  <div className="text-danger text-center">{errors.general}</div>
                )}

                <div className="d-flex justify-content-center mt-2">
                  <button type="submit" className="btn btn-primary w-50">
                    Log In
                  </button>
                </div>

                <p className="text-center">
                  <Link to="/forgot-password" className="text-decoration-none">
                    Forget Password?
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
