import React from "react";
import useUIStore from "../../store/useUIStore";
import type { View } from "../../types/mdm";
import cn from "../../lib/utils";

interface NavButtonProps {
  targetView: View
  label: string;
  variant?: 'primary' | 'secondary';
}

export const NavButton: React.FC<NavButtonProps> = ({ targetView, label, variant = 'primary' }) => {
  const setActiveView = useUIStore((state) => state.setActiveView);

  

  return (
    <button
      onClick={() => setActiveView(targetView)}
      className={cn("baseStyles" ,"primaryBtn")}
    >
      {label}
    </button>
  );
};

export default NavButton