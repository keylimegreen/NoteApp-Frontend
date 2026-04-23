import React from "react";
import useProcedureStore from "../../store/useProcedureStore";
import useNoteStore from "../../store/useNoteStore";

const AutoProcedureDisplay: React.FC = () => {
  const { patients } = useNoteStore();
  const { setProcedureSearch } = useProcedureStore();

  const procedures = Array.from(new Set(
    Object.values(patients).flatMap(p => p.workup?.Procedures || [])
  ));

  return (
    <div className="flex flex-wrap gap-2 p-2">
      {/* 2. Wrap the logic in curly braces */}
      {procedures.length > 0 ? (
        procedures.map((proc, index) => ( // 3. Implicit return using ( )
          <button 
            key={`${proc}-${index}`} 
            onClick={() => setProcedureSearch(proc)}
            className="px-3 py-1 text-sm bg-slate-800 hover:bg-blue-600 text-white rounded-full transition-colors border border-slate-700"
          >
            {proc}
          </button>
        ))
      ) : (
        <span className="text-slate-500 text-sm">No procedures found...</span>
      )}
    </div>
  );
};

export default AutoProcedureDisplay;