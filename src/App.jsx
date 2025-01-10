import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Pnf from "./pages/Pnf";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UpdatePage from "./pages/UpdatePage";
import Messages from "./pages/Messages";
import EditSkills from "./pages/EditSkills";
import ProtectedRoute from "./contexts/ProtectedContex";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/updatepage"
          element={
            <ProtectedRoute>
              <UpdatePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/skills"
          element={
            <ProtectedRoute>
              <EditSkills />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Pnf />} />
      </Routes>
    </>
  );
}

export default App;
