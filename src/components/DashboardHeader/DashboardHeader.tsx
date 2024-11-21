import React from "react";
import "./DashboardHeader.scss";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import tinderLogo from "../../assets/tinder-logo.png";
import ForumIcon from "@mui/icons-material/Forum";
import { useNavigate } from "react-router-dom";

const DashboardHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard_header">
      <IconButton onClick={() => navigate("/onboarding")}>
        <PersonIcon fontSize="large" className="dashboard_header__icon" />
      </IconButton>

      <img className="dashboard_header__logo" src={tinderLogo} alt="tinder-logo" />

      <IconButton onClick={() => navigate("/matches")}>
        <ForumIcon fontSize="large" className="dashboard_header__icon" />
      </IconButton>
    </div>
  );
};

export default DashboardHeader;
