import React from "react";
import tinderLogoName from "../../assets/tinder-logo-with-name.png";
import "./HomeNavBar.scss";

interface IHomeNavBarProps {
  setShowAuthModal: Function,
  setIsSignUp: Function
}

const HomeNavBar: React.FC<IHomeNavBarProps> = ({ setShowAuthModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowAuthModal(true);
    setIsSignUp(false);
  };
  return (
    <nav className="main__container">
      <div className="logo__container">
        <img className="logo" src={tinderLogoName} alt="tinder logo" />
      </div>
      <button
        className="nav__button"
        onClick={handleClick}
      >
        Log in
      </button>
    </nav>
  );
};

export default HomeNavBar;
