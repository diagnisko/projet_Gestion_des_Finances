import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";

// Placeholders — à remplacer par les vraies pages de l'équipe
const LoginPage = () => (
  <div className="min-h-screen bg-[#080d1a] flex items-center justify-center text-white font-body">
    <p className="text-[#8899bb]">Page Login — Membre 2 (feature/auth)</p>
  </div>
);
const RegisterPage = () => (
  <div className="min-h-screen bg-[#080d1a] flex items-center justify-center text-white font-body">
    <p className="text-[#8899bb]">Page Inscription — Membre 2 (feature/auth)</p>
  </div>
);
const DashboardPage = () => (
  <div className="min-h-screen bg-[#080d1a] flex items-center justify-center text-white font-body">
    <p className="text-[#8899bb]">Dashboard — Membres 3 & toi (feature/dashboard-ui + feature/dashboard-logic)</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;