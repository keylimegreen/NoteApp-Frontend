import { X } from "lucide-react";
import useNoteStore from "../store/useNoteStore";
import useUIStore from "../store/useUIStore";
import type {
  AllWorkupValues,
  WorkupListCategory,
  Consult,
  Ct_exam,
  Mri_exam,
  Pocus_exam,
  Procedure,
  Us_exam,
  Workup,
  Xray_exam,
} from "../types/workup";
import { WORKUP_OPTIONS } from "../types/workup";
import { useEffect } from "react";

const PopupModal = () => {
  const { activeCheckbox, setActiveCheckbox } = useUIStore();
  const {
    workup,
    toggleWorkupItem,
    setCustomValue,
    customXray,
    customCt,
    customMri,
    customPocus,
    customUs,
    customConsult,
    customProcedure,
  } = useNoteStore();
  if (!activeCheckbox) return null;
  const options =
    WORKUP_OPTIONS[activeCheckbox as keyof typeof WORKUP_OPTIONS] || [];
  
  if (options.length === 0) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => setActiveCheckbox(null)} // Close on click outside
    >
      <div
        className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-blue-400">{activeCheckbox}</h3>
          <button
            onClick={() => setActiveCheckbox(null)}
            className="text-slate-500 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-2 mb-4">
          {options.map((item) => {
            const currentSelected = workup[activeCheckbox];
            if (Array.isArray(currentSelected)) {
              const isActive = currentSelected.includes(item);
              return (
                <label
                  key={item}
                  className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700"
                >
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => toggleWorkupItem(item, activeCheckbox)}
                    className="w-4 h-4 accent-blue-500"
                  />
                  <span className="text-slate-200">{item}</span>
                </label>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
