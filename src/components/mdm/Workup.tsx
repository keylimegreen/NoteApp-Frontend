import { WORKUP } from "../../types/workup";
import useNoteStore, {
  returnWorkup,
  useActivePatientData,
} from "../../store/useNoteStore";
import useUIStore from "../../store/useUIStore";
import type { WorkupListCategory } from "../../types/workup";
import { cn } from "../../lib/utils";

const WorkupComponent: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { clearWorkup, toggleWorkupItem } = useNoteStore();
  const setActiveCheckbox = useUIStore((state) => state.setActiveCheckbox);
  const workup = useActivePatientData((p) => p.workup);
  const summary = useNoteStore(returnWorkup);

  return (
    <div>
      <div
        className={cn("text-header", "header-border-b", "flex justify-between")}
      >
        <h3>
          Workup
        </h3>
        <div onClick={() => clearWorkup()} className={cn("text-basic")}>
          Clear
        </div>
      </div>

      <div className="space-y-2 grid grid-cols-2">
        {WORKUP.map((category) => {
          const isActive = Array.isArray(workup[category])
            ? workup[category].length > 0
            : workup[category] === true;
          return (
            <label
              key={category}
              className="flex items-center space-x-3 cursor-pointer text-sm font-medium text-slate-500"
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
      </div>
      <div className="grid">
        <h3 className={cn("text-basic")}>{summary || "No selections made"}</h3>
      </div>
    </div>
  );
};

export default WorkupComponent;
