import useNoteStore from "../../store/useNoteStore";

export const RosItem = ({ label, category, item }: { label: string, category: string, item: string }) => {
  const status = useNoteStore((s) => s.ros[category][item]);
  const setRos = useNoteStore((s) => s.setRosStatus);

  return (
    <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50 last:border-0">
      <span className="text-xs text-slate-400">{label}</span>
      
      <div className="flex w-24 overflow-hidden border border-slate-700 rounded-md bg-slate-900">
        <button 
          onClick={() => setRos(category, item, 'neg')}
          data-state={status === 'neg' ? 'active' : 'inactive'}
          className="ros-btn ros-btn-neg"
        >—</button>
        
        <button 
          onClick={() => setRos(category, item, null)}
          data-state={status === null ? 'active' : 'inactive'}
          className="ros-btn ros-btn-null"
        >Ø</button>
        
        <button 
          onClick={() => setRos(category, item, 'pos')}
          data-state={status === 'pos' ? 'active' : 'inactive'}
          className="ros-btn ros-btn-pos"
        >+</button>
      </div>
    </div>
  );
};