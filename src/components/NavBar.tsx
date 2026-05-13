import { Activity } from "lucide-react";
import React from "react";
import { NAVIGATION_HEADERS } from "../types/mdm";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Navbar: React.FC = () => {
  const token = useAuthStore((s) => s.token)
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <Activity size={24} />
      <span>Generative Note</span>
      <nav className="flex gap-2">
        {NAVIGATION_HEADERS.filter((tab:NavigationType) => tab !== (token ? "login" : "logout")).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              navigate(`/${tab}`);
            }}
            className={`px-4 py-2 rounded ${
              location.pathname === `/${tab}`
                ? "bg-blue-400 text-white"
                : "text-slate-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
