import { Activity } from "lucide-react";
import React from "react";
import { NAVIGATION_HEADERS } from "../types/mdm";
import { useUIStore } from "../store/useUIStore";

const Navbar: React.FC = () => {
  const {activeTab, activeView, setActiveTab, setActiveView} = useUIStore();

  return (
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <Activity size={24} />
      <span>Generative Note: {activeView}</span>
      <nav className="flex gap-2">
        {NAVIGATION_HEADERS.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
              setActiveView(tab)
            }}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-blue-400 text-white" : "text-slate-400"
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
