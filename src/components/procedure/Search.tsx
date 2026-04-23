import { PROCEDURES } from "../../assets/procedures";
import useNoteStore from "../../store/useNoteStore";
import Fuse from "fuse.js";
import React, { useState, useMemo } from "react";
import useProcedureStore from "../../store/useProcedureStore";

const ProcedureTag = ({ label, addProcedure }: { label: string; addProcedure: () => void }) => (
  <span className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-medium animate-in fade-in zoom-in duration-200">
    {label}
    <button 
      onClick={() => addProcedure(label)}
    >
     +
    </button>
  </span>
);

const ProcedureNoteSearch = () => { 
  const {patients} = useNoteStore();
  const { setProcedureSearch} = useProcedureStore()
  const proceduresFromPatientList = Object.values(patients).flatMap(patient => 
    patient.workup?.Procedures || []
);
const uniqueProcedures = [...new Set(proceduresFromPatientList)];
const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(''); // Initialize with store value
const procedureList = Object.keys(PROCEDURES)
  const fuse = useMemo(() => new Fuse(procedureList, { threshold: 0.3 }), []);

  const suggestions = useMemo(() => {
    if (query.length < 1) return [];
    return fuse
      .search(query)
      .map((res) => res.item)
      .slice(0, 8);
  }, [query,fuse]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // If the user presses Backspace and the input is empty, delete the last diagnosis
    if (e.key === 'Backspace' && query === '') {
      setProcedureSearch("");
    }
    
    // Quick select first suggestion on Enter
    if (e.key === 'Enter' && suggestions.length > 0) {
      setProcedureSearch(suggestions[0]);
      setQuery('');
      setIsOpen(false);
    }
  };


  return (
    <div className="w-full p-4 bg-slate-900 rounded-xl border border-slate-800 focus-within:border-blue-500 transition-all shadow-inner">
      {uniqueProcedures.map((procedure) => ProcedureTag(procedure))}
      <div className="flex flex-wrap gap-2 items-center">
        <input
          type="text"
          value={query}
          onKeyDown={handleKeyDown}
          onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search procedure..."
          className="flex-1 min-w-[150px] bg-transparent text-white outline-none placeholder:text-slate-600 py-1"
        />
        <button 
              onClick={() => setProcedureSearch("")}
              className="hover:text-red-400 transition-colors"
            >
              ✕
        </button>
      </div>

      {/* Suggestion Dropdown (Absolute positioned below the box) */}
      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full left-0 mt-4 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto">
          {suggestions.map((item) => (
            <li
              key={item}
              onClick={() => { setProcedureSearch(item); setQuery(''); setIsOpen(false); }}
              className="p-3 hover:bg-blue-600/20 hover:text-blue-400 text-slate-300 cursor-pointer text-sm border-b border-slate-800 last:border-none transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProcedureNoteSearch;
