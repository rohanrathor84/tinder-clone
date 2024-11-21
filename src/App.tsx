import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Onboarding from "./pages/Onboarding/Onboarding";
import Matches from "./pages/Matches/Matches";
import ChatBox from "./pages/ChatBox/ChatBox";

const App: React.FC = () => {
  return (
    // BEM class naming convension
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/chatBox" element={<ChatBox />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
