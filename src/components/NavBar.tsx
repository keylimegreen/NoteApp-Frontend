import { Activity } from "lucide-react";
import React from "react";
import { NAVIGATION_HEADERS, type NavigationHeaders } from "../types";
import { useUIStore } from '../store/useUIStore';

const Navbar: React.FC = () => {
  const activeTab = useUIStore((state) => state.activeTab);
  const setActiveTab = useUIStore((state) => state.setActiveTab);
  return (
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2 font-bold text-xl text-blue-400">
          <Activity size={24} />
          <span>Generative Note</span>
        </div>
        <nav className="flex gap-2 p-4 bg-slate-900">
      {NAVIGATION_HEADERS.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded ${
            activeTab === tab ? 'bg-blue-600 text-white' : 'text-slate-400'
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
