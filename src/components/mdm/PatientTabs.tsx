import cn from "../../lib/utils";
import useNoteStore from "../../store/useNoteStore";

const PatientTabs = () => {
  const { patients, activePatientId, setActivePatient, setName } = useNoteStore();
  const slots = Object.keys(patients).map((id) => parseInt(id));
  return (
    <div className="flex gap-1 mb-4">
      {slots.map((id) => (
        <button
          key={id}
          onClick={() => setActivePatient(id)}
          className={cn(
            "px-3 py-1 text-[10px] rounded border",
            activePatientId === id
              ? "bg-blue-600 border-blue-400"
              : "bg-slate-900 border-slate-800",
          )}
        >
          <span>{id}. </span>
          <input key={id}
          value={patients[id].name}
          placeholder="patient"
          onChange={(e) => setName(e.target.value)}></input>
        </button>
      ))}
    </div>
  );
};

export default PatientTabs;
