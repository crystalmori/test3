import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/features/auth/authSlice";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import MyModal from "../modal/modal";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData))
      .unwrap()
      .then((user) => {
        navigate("/");
      });
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <section className="heading">
        <p>Sign in to your account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <p className="s-heading">Email</p>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-group">
            <p className="s-heading">Password</p>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter password"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block btn-primary ">Sign In</button>
          </div>
          <div className="modal-button">
            <div>
              <p>
                Don't have an account? <Link to="/register">Sign Up</Link>
              </p>
            </div>
            <div>
              <p>Forget password?</p>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
