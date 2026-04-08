import { Activity } from "lucide-react";
import React from "react";
import { NAVIGATION_HEADERS } from "../types";
import { useUIStore } from "../store/useUIStore";

const Navbar: React.FC = () => {
  const activeTab = useUIStore((state) => state.activeTab);
  const setActiveTab = useUIStore((state) => state.setActiveTab);

  return (
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <Activity size={24} />
      <span>Generative Note</span>
      <nav className="flex gap-2 p-4 bg-slate-900">
        {NAVIGATION_HEADERS.filter((head) => head !== "").map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
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
