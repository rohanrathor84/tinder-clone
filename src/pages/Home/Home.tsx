import React, { useState } from "react";
import AuthModal from "../../components/Modals/AuthModal/AuthModal";
import HomeNavBar from "../../components/HomeNavBar/HomeNavBar";
import "./Home.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";

const Home: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, loading] = useAuthState(auth);

  const handleClick = () => {
    setShowAuthModal(true);
    setIsSignUp(true);
  };

  return (
    <div className="overlay">
      <div className="nav__container">
        <HomeNavBar
          setShowAuthModal={setShowAuthModal}
          setIsSignUp={setIsSignUp}
        />
      </div>
      <div className="home">
        <h1 className="swipe__right">Start something epic.</h1>
        <button className="primary__button" onClick={handleClick}>
          {"Create Account"}
        </button>
        {showAuthModal && (
          <AuthModal setShowAuthModal={setShowAuthModal} isSignUp={isSignUp} />
        )}
        {loading && <div>Loading...</div>}
      </div>
      {user && isSignUp ? (
        <Navigate to="/onboarding" replace={true} />
      ) : (
        user && !isSignUp && <Navigate to="/dashboard" replace={true} />
      )}
    </div>
  );
};

export default Home;
