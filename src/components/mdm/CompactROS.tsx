import useNoteStore from "../../store/useNoteStore";
import { ROS_OPTIONS, type AllRosItems, type RosCategory } from "../../types/ros";
import { RosBadge } from "./RosBadge";

export const CompactRos = () => {
  const setRosStatus = useNoteStore((s) => s.setRosStatus);

  const bulkUpdate = (category: RosCategory, status: "neg" | null) => {
    ROS_OPTIONS[category].forEach((item) => {
      setRosStatus(category, item as AllRosItems, status);
    });
  };

  return (
    <div className="w-full p-1.5 rounded-md border border-slate-800">
      <h3>Review of Systems</h3>
      <div className="flex flex-col gap-2">
        {Object.entries(ROS_OPTIONS).map(([category, items]) => (
          <div key={category} className="group">
            {/* Category Header with Action Buttons */}
            <div className="flex items-center justify-between mb-1 border-b border-slate-800/50 pb-0.5">
              <span className="text-[8px] uppercase font-black text-slate-500 tracking-tighter">
                {category}
              </span>
              
              <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => bulkUpdate(category as RosCategory, "neg")}
                  className="text-[9px] text-green-500/70 hover:text-green-400 font-bold"
                  title="All Negative"
                >
                  NEG
                </button>
                <button
                  onClick={() => bulkUpdate(category as RosCategory, null)}
                  className="text-[9px] text-slate-600 hover:text-slate-400 font-bold"
                  title="Clear All"
                >
                  CLR
                </button>
              </div>
            </div>

            {/* Tight Wrapping Badge Cloud */}
            <div className="flex flex-wrap gap-0.5">
              {items.map((item) => (
                <RosBadge 
                  key={item} 
                  item={item as AllRosItems} 
                  category={category as RosCategory} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompactRos