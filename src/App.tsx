import React, { useEffect, useRef } from "react";
import Navbar from "./components/NavBar";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { GlobalAlert } from "./components/general/GlobalAlert";
import MdmViewer from "./components/viewers/MdmViewer";
import ProcedureViewer from "./components/viewers/ProcedureViewer";
import TransferViewer from "./components/viewers/TransferViewer";
import DischargeViewer from "./components/viewers/DischargeViewer";
import ViewResult from "./components/viewers/ResultViewer";
import { LoginViewer } from "./components/login/Login";
import { LogoutViewer } from "./components/login/Logout";
import { ProtectedRoute } from "./components/security/ProtectedRoute";
import { useAuthStore } from "./store/useAuthStore";
import { CONFIG } from "./config/config";
import useUIStore from "./store/useUIStore";
import EtcViewer from "./components/viewers/EtcViewer";


const IDLE_TIME_LIMIT = CONFIG.IDLE_TIME_LIMIT; // 15 minutes in milliseconds

export const IdleTimer = () => {
  const logout = useAuthStore((s) => s.logout);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const setAlert = useUIStore((s) => s.setAlert)

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    
    timerRef.current = setTimeout(() => {
      setAlert("User idle for too long. Logging out...", "alert");
      logout();
      window.location.href = '/login?reason=idle';
    }, IDLE_TIME_LIMIT);
  };

  useEffect(() => {
    // Events that count as "Activity"
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];

    // Add listeners
    events.forEach(event => window.addEventListener(event, resetTimer));
    
    // Start the initial timer
    resetTimer();

    // Cleanup on unmount
    return () => {
      events.forEach(event => window.removeEventListener(event, resetTimer));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return null; // This component doesn't render anything
};

const AppLayout = () => (
  <div className="relative min-h-screen bg-slate-900 text-slate-100 p-5">
    <Navbar />
    <GlobalAlert />
    <IdleTimer />
    <main className="mt-4">
      <Outlet /> 
    </main>
  </div>
);
const EmergencyNoteApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default path redirects to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Map your views to URLs */}
        <Route path="/login" element={<LoginViewer />} />
        <Route path="/logout" element={<LogoutViewer />} />
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/results" element={<ViewResult />} />
          <Route path="/mdm" element={<MdmViewer />} />
          <Route path="/etc" element={<EtcViewer />} />
          <Route path="/procedure" element={<ProcedureViewer />} />
          <Route path="/transfer" element={<TransferViewer />} />
          <Route path="/discharge" element={<DischargeViewer />} />
        </Route>
        {/* Catch-all for 404s */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EmergencyNoteApp;
