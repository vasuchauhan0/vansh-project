import { Routes, Route } from "react-router-dom";

import FrontendLayout from "./Layout/FrontendLayout";
import AdminLayout from "./Layout/AdminLayout";

// Frontend Pages
import Homepage from "./Page/homepage";
import Skill from "./Page/Skill";
import Contact from "./Page/Contact";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Project from "./Page/Project";
import NotFound from "./Page/NotFound";

// Admin Pages
import Dashboard from "./admin/Dashboard";
import ManageMessagesPage from "./admin/Messages";
import Projects from "./admin/Project_management";
import AdminSkills from "./admin/Skills_management";

const App = () => {
  return (
    <Routes>

      {/* ================= FRONTEND ROUTES ================= */}
      <Route element={<FrontendLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ================= AUTH ROUTES (NO HEADER / FOOTER) ================= */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      

      {/* ================= ADMIN ROUTES ================= */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects_management" element={<Projects />} />
        <Route path="messages" element={<ManageMessagesPage />} />
        <Route path="skills" element={<AdminSkills />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default App;
