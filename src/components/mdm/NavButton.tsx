import React from "react";
import type { NavigationHeaders } from "../../types/mdm";
import cn from "../../lib/utils";
import { useNavigate } from "react-router-dom";

interface NavButtonProps {
  targetView: NavigationHeaders
  label: string;
  variant?: 'primaryBtn' | 'secondary';
}

export const NavButton: React.FC<NavButtonProps> = ({ targetView, label, variant = 'primaryBtn' }) => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(`/${targetView}`)}
      className={cn("baseStyles" ,variant)}
    >
      {label}
    </button>
  );
};

export default NavButton