import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
//import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPassword from './pages/ForgotPassword';
import UsedPage from "./pages/UsedPage";
import NewCarsPage from "./pages/NewCarsPage";
import AboutCar from "./pages/AboutCar";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />+
          <Route path="/NewCarsPage" element={<NewCarsPage />} />
          <Route path="/UsedPage" element={<UsedPage />} />
          <Route path="/AboutCar" element={<AboutCar />} />
          {/* ... Otras rutas ... */}
        </Routes>
      </Router>
    </div>
  );
};
export default App;
