import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExternalLayout from "./layout/externalLayout/ExternalLayout";
import InternalLayout from "./layout/internalLayout/InternalLayout";
import SignUp from "./pages/authWorld/signUpPage/SignUp";
import SignIn from "./pages/authWorld/signInPage/SignIn";
import LandingHome from "./pages/externalWorld/landingPage/LandingHome";
import Community from "./pages/externalWorld/communityPage/Community";
import FindTalent from "./pages/externalWorld/findTalentPage/FindTalent";
import JobPosting from "./pages/externalWorld/jobPostingPage/JobPosting";
import JobAlert from "./pages/externalWorld/jobAlertPage/JobAlert";
import ErrorPage from "./pages/errorPage/ErrorPage";
import InCommunityPage from "./pages/internalWorld/inCommunityPage/InCommunityPage";
import DashboardPage from "./pages/internalWorld/dashboardPage/DashboardPage";
import InJobAlertPage from "./pages/internalWorld/inJobAlertPage/InJobAlertPage";
import ProfilePage from "./pages/internalWorld/profilePage/ProfilePage";
import ProjectPage from "./pages/internalWorld/projectPage/ProjectPage";
import SettingsPage from "./pages/internalWorld/settingsPage/SettingsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route element={<ExternalLayout />}>
            <Route path="/" element={<LandingHome />} />
            <Route path="/community" element={<Community />} />
            <Route path="/find_talent" element={<FindTalent />} />
            <Route path="/job_alert" element={<JobAlert />} />
          </Route>

          <Route path="/job_posting" element={<JobPosting />} />

          <Route element={<InternalLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/incommunity" element={<InCommunityPage />} />
            <Route path="/injobalert" element={<InJobAlertPage />} />
            <Route path="/profilepage" element={<ProfilePage />} />
            <Route path="/projectpage" element={<ProjectPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
