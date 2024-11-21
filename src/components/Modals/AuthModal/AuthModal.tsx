import React, { useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import IconButton from "@mui/material/IconButton";
import "./AuthModal.scss";
import tinderLogo from "../../../assets/tinder-logo.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase";

interface IAuthModalProps {
  setShowAuthModal: Function;
  isSignUp: boolean;
}

const AuthModal: React.FC<IAuthModalProps> = ({
  setShowAuthModal,
  isSignUp,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<object>({});

  const cancelButton = () => {
    setShowAuthModal(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp && password !== confirmPassword) {
        setError("The password doesn't match!");
      } else if (isSignUp && password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((value) => {
            setUser(value.user);
          })
          .catch(() => {
            setError("Failed to sign up");
          });
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((value) => {
            setUser(value.user);
          })
          .catch(() => {
            setError("Invalid login credentials");
          });
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error: " + err);
      }
    }
  };

  return (
    <div className="container">
      <div className="auth__modal">
        <div className="cancel__icon">
          <IconButton onClick={cancelButton}>
            <CancelOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="secondry__container">
          <img src={tinderLogo} className="logo_style" alt="logo" />
          <h2>{isSignUp ? "GET STARTED" : "WELCOME BACK"}</h2>
          <p>
            By clicking Log In, you agree to our <u>Terms</u>. Learn how we
            process your data in our <u>Privacy Policy</u> and{" "}
            <u>Cookie Policy</u>.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />

            {isSignUp && (
              <input
                type="password"
                id="password-check"
                name="password-check"
                placeholder="Confirm password"
                required={true}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}

            <input className="secondary__button" type="submit" />
            <p className="auth-error">{error}</p>
          </form>
          <hr />
          <h2 className="get_the_app">GET THE APP!</h2>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
