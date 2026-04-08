import { GENDER_OPTIONS } from "../../types";
import type { Gender } from "../../types";
import useNoteStore from "../../store/useNoteStore";

const GenderComponent: React.FC = () => {
  const gender = useNoteStore((state) => state.gender);
  const setGender = useNoteStore((state) => state.setGender);

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="font-bold text-slate-700 mb-3 border-b pb-2">Gender</h3>
      <div className="space-y-2">
        {GENDER_OPTIONS.filter((g) => g !== "").map((g) => (
          <label
            key={g}
            className="flex items-center space-x-3 cursor-pointer p-1 hover:bg-slate-50 rounded"
          >
            <input
              type="checkbox"
              name="gender"
              checked={gender === g}
              onChange={() => setGender(g as Gender)}
              className="text-blue-600 focus:ring-blue-500 h-4 w-4"
            />
            <span className="text-sm font-medium">{g}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default GenderComponent;
