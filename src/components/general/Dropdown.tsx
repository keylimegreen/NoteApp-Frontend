import useNoteStore from "../../store/useNoteStore";
import {
  MDM_PARTS,
  type Mdm_parts_type,
  type All_mdm_type,
} from "../../types/mdm";

interface DropdownSelectorProps {
  collectionName: Mdm_parts_type;
  onSelect: (newValue:string) => void;
}

export const DropdownSelector = ({
  collectionName,
  onSelect,
}: DropdownSelectorProps) => {
  const options = MDM_PARTS[collectionName];
  const currentValue = useNoteStore((state) => {
    const activePatient = state.patients[state.activePatientId];
    return activePatient ? activePatient[collectionName] : "";
  });

  const isPredefined = options.includes(currentValue as All_mdm_type);
  return (
    <div className="grid grid-col-2 w-full max-w-xs">
      <select
        value={isPredefined ? currentValue : "Other"}
        onChange={(e) => {
            console.log(e.target.value)
            onSelect( e.target.value)
            }}
        className="block w-full px-3 py-2 bg-white border border-slate-300 text-slate-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {/* 3. Logic: Show text input if "Other" is picked OR if a custom string is already saved */}
      {(currentValue === "Other" || (!isPredefined && currentValue !== "")) && (
        <input
          type="text"
          placeholder={`Specify ${collectionName}...`}
          // If the state is literally "Other", show empty box. If it's "Russian", show "Russian".
          value={currentValue === "Other" ? "" : currentValue}
          onChange={(e) => onSelect(e.target.value)}
          className="mt-2 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          autoFocus={currentValue === "Other"}
        />
      )}
    </div>
  );
};