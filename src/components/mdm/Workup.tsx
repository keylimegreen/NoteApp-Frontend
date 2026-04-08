import { WORKUP } from "../../types/workup";
import useNoteStore, { returnWorkup } from "../../store/useNoteStore";
import useUIStore from "../../store/useUIStore";
import type { WorkupListCategory } from "../../types/workup";
import { STYLES } from "../constants/styles";
import { cn } from "../../lib/utils";

const WorkupComponent: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { workup, clearWorkup, toggleWorkupItem } = useNoteStore();
  const setActiveCheckbox = useUIStore((state) => state.setActiveCheckbox);

  const summary = useNoteStore(returnWorkup);

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="font-bold text-slate-700 mb-3 border-b pb-2">Workup</h3>
      <div className="space-y-2">
        {WORKUP.map((category) => {
          const isActive = Array.isArray(workup[category])
            ? workup[category].length > 0
            : workup[category] === true;
          return (
            <label
              key={category}
              className="flex items-center space-x-3 cursor-pointer text-sm font-medium text-slate-900"
            >
              <input
                type="checkbox"
                checked={isActive}
                onChange={() => {
                  if (category !== "Labs" && category !== "EKG") {
                    setActiveCheckbox(category as WorkupListCategory);
                  } else {
                    toggleWorkupItem("", category as "Labs" | "EKG");
                  }
                }}
                className="h-4 w-4"
              />
              <span>{category}</span>
            </label>
          );
        })}
        ;
      </div>
      <div className="grid">
        <h3 className={cn(STYLES.TEXT_NORM)}>
          {summary || "No selections made"}
        </h3>
        <button
          onClick={() => clearWorkup()}
          className={cn(STYLES.TEXT_NORM, "hover:text-red-400")}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default WorkupComponent;
