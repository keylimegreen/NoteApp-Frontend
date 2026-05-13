import { useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export const LogoutViewer = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((s)=> s.logout)

  useEffect(() => {
    const performLogout = () => {
      logout();           // 1. Wipe the token/state
      navigate('/login'); // 2. Send them away
    };

    const timer = setTimeout(performLogout, 1000);
    
    return () => clearTimeout(timer); // Cleanup if component unmounts
  }, [logout, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center">
        {/* Maybe add a little spinner here? */}
        <h1 className="text-xl font-semibold text-slate-600">Logging out...</h1>
      </div>
    </div>
  );
};