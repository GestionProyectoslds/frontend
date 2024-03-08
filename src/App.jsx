import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
//import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ContributePage from "./pages/ContributePage";
import SolutionsPage from "./pages/SolutionsPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPassword from './pages/ForgotPassword';
import AppsPage from "./pages/AppsPage";
import ExpertPage from "./pages/ExpertPage";
import CustomerPage from "./pages/CustomerPage";
import ProjectsPage from "./pages/ProjectsPage";
import TaskPage from "./pages/TaskPage";
import TaskBoardPage from "./pages/TaskBoardPage";
import PreDiagnosisPage from "./pages/PreDiagnosisPage";
import BillingPage from "./pages/BillingPage";
import ReportsPage from "./pages/ReportsPage";
import Projectmenu from "./pages/Projectmenu";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/ContributePage" element={<ContributePage />} />
          <Route path="/SolutionsPage" element={<SolutionsPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/DashboardPage" element={<DashboardPage />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />}  />
          <Route path="/AppsPage" element={<AppsPage />}  />
          <Route path="/ExpertPage" element={<ExpertPage />}  />
          <Route path="/CustomerPage" element={<CustomerPage />}  />
          <Route path="/ProjectsPage" element={<ProjectsPage />}  />
          <Route path="/TaskPage" element={<TaskPage />}  />
          <Route path="/TaskBoardPage" element={<TaskBoardPage />}  />
          <Route path="/PreDiagnosisPage" element={<PreDiagnosisPage />}  />
          <Route path="/BillingPage" element={<BillingPage />}  />
          <Route path="/ReportsPage" element={<ReportsPage />}  />
          <Route path="/Projectmenu" element={<Projectmenu />}  />
          {/* ... Otras rutas ... */}
        </Routes>
      </Router>
    </div>
  );
};
export default App;
