import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../modal/modal.css";
import { FaMailBulk } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { userApi } from "../../api";
import { useNavigate } from "react-router-dom";

import { userValSchema } from "../validations/UserValidation";
import { register } from "../redux/features/auth/authSlice";

function MyModal({
  showModel,
  setShowModal,
  showSignUp,
  setShowSignUp,
  showUpdatePassword,
  setShowUpdatePassword,
  showUpdateSent,
  setShowUpdateSent,
  modalTitle,
  modalButton,
}) {
  const handleClose = () => setShowModal(false);

  const handleSignUp = () => {
    setShowSignUp(true);
  };

  const handleSignIn = () => {
    setShowModal(true);
    setShowSignUp(false);
  };

  const handleUpdatePassword = () => {
    setShowUpdatePassword(true);
    setShowSignUp(false);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const userData = {
      email,
      password,
    };

    // dispatch(register(userData));

    return (
      <>
        <Modal
          show={showModel}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
          onHide={handleClose}
        >
          {showUpdateSent ? (
            <Modal.Header closeButton>
              <FaMailBulk />
            </Modal.Header>
          ) : (
            <Modal.Header closeButton className="px-4">
              <Modal.Title className="ms-auto">{modalTitle}</Modal.Title>
            </Modal.Header>
          )}
          <Modal.Body>
            {showUpdatePassword ? (
              showUpdateSent ? (
                <p>
                  We have sent the update password link to your email, please
                  check that!
                </p>
              ) : (
                <p>Enter your email link, we will send you the recovery link</p>
              )
            ) : (
              () => {}
            )}
            {showUpdateSent ? (
              () => {}
            ) : (
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    onChange={onChange}
                    type="email"
                    placeholder="you@example.com"
                    autoFocus
                    value={email}
                    id="email"
                    name="email"
                    required
                  />
                </Form.Group>
                {showUpdatePassword ? (
                  () => {}
                ) : (
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onChange={onChange}
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      required
                    />
                  </Form.Group>
                )}
              </Form>
            )}
          </Modal.Body>
          {showUpdateSent ? (
            () => {}
          ) : (
            <Modal.Footer>
              <Button
                onClick={
                  showUpdatePassword
                    ? () => {
                        setShowUpdateSent(true);
                      }
                    : onSubmit
                }
                variant="primary"
                size="lg"
                className="modal-button"
              >
                {modalButton}
              </Button>
            </Modal.Footer>
          )}

          {showUpdatePassword ? (
            () => {}
          ) : showSignUp ? (
            <div className="modal-footer">
              Already have an account?{" "}
              <a
                onClick={() => {
                  handleSignIn();
                }}
                className="modal-link"
              >
                Sign in
              </a>
            </div>
          ) : (
            <div className="modal-footer">
              <div>
                Don't have an account?{" "}
                <a
                  className="modal-link"
                  onClick={() => {
                    handleSignUp();
                  }}
                >
                  Sign Up
                </a>
              </div>
              <div>
                <a
                  className="modal-link"
                  onClick={() => {
                    handleUpdatePassword();
                  }}
                >
                  Forget password?
                </a>
              </div>
            </div>
          )}
          {}
        </Modal>
      </>
    );
  };
}

export default MyModal;
