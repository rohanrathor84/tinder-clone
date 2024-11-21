import React from "react";
import "./Dashboard.scss"
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import SwipeButtons from "../../components/SwipeButtons/SwipeButtons";
import TinderCards from "../../components/TinderCards/TinderCards";

const Dashboard: React.FC = () => {
  return (
    <div>
      {/* DashboardHeader */}
      <DashboardHeader />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  );
};

export default Dashboard;
