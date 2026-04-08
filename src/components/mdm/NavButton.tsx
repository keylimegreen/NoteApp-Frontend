import React from "react";
import useUIStore from "../../store/useUIStore";
import type { View } from "../../types";

interface NavButtonProps {
  targetView: View
  label: string;
  variant?: 'primary' | 'secondary';
}

export const NavButton: React.FC<NavButtonProps> = ({ targetView, label, variant = 'primary' }) => {
  const setActiveView = useUIStore((state) => state.setActiveView);

  const baseStyles = "px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-md";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-blue-900/20",
    secondary: "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700"
  };

  return (
    <button
      onClick={() => setActiveView(targetView)}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {label}
    </button>
  );
};

export default NavButton