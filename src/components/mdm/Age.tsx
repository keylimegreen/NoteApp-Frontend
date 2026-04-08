import { AGE_GROUP_OPTIONS } from "../../types";
import type { AgeGroup } from "../../types";
import useNoteStore from "../../store/useNoteStore";

const AgeComponent: React.FC = () => {
  const ageGroup = useNoteStore((state) => state.ageGroup);
  const setAgeGroup = useNoteStore((state) => state.setAgeGroup);

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="font-bold text-slate-700 mb-3 border-b pb-2">Age Group</h3>
      <div className="grid grid-cols-2 gap-2">
        {AGE_GROUP_OPTIONS.filter((header) => header !== "").map((age) => (
          <label
            key={age}
            className="flex items-center space-x-2 text-sm cursor-pointer hover:text-blue-600"
          >
            <input
              type="radio"
              name="age"
              checked={ageGroup === age}
              onChange={() => setAgeGroup(age as AgeGroup)}
              className="h-3 w-3"
            />
            <span>{age}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AgeComponent;
