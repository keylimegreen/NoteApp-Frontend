import React, { useEffect, useState } from 'react';
import useUIStore from '../../store/useUIStore';


export const GlobalAlert = () => {
  const { alertMsg, type, setAlert } = useUIStore();

  useEffect(() => {
    if (alertMsg) {
      const timer = setTimeout(() => {
        setAlert(null, null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [alertMsg, setAlert]);

  const styleMap = {
    error: "bg-red-600 text-white border-red-400",
    alert: "bg-emerald-500 text-slate-900 border-emerald-400",
  };

  if (!alertMsg) return null;

  // Select style or fallback to a default
  const activeStyle = styleMap[type as keyof typeof styleMap] || "bg-slate-700 text-white";

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4 animate-in fade-in slide-in-from-top-4 duration-300">
      {/* FIXED: Using backticks for template literals and using activeStyle variable */}
      <div className={`${activeStyle} px-6 py-4 rounded-lg shadow-2xl flex items-center justify-between border`}>
        <div className="flex items-center gap-3">
          <span className="text-xl">{type === "error" ? "⚠️" : "✅"}</span>
          <p className="font-medium">{alertMsg}</p>
        </div>
        
        <button 
          onClick={() => setAlert(null, null)}
          className="ml-4 hover:bg-black/10 p-1 rounded-full transition-colors"
          aria-label="Close alert"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};