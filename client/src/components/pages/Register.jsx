import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/features/auth/authSlice";

function Register() {
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

    dispatch(register(userData))
      .unwrap()
      .then((user) => {
        toast.success(`Registered new user - ${user.name}`);
        navigate("/");
      })
      .catch(toast.error);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <section className="heading">
        <p>Sign up an account</p>
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
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <p className="password">Password</p>
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
            <button className="btn btn-block btn-primary">
              Create Account
            </button>
          </div>
        </form>
      </section>
      <form>
        <div className="form-group">
          <div className="modal-button">
            <p>
              Already have an account <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
