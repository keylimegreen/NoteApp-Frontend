
import useNoteStore from "../../store/useNoteStore";
import useDischargeStore from "../../store/useDischargeStore";

export const DischargeListBar = () => {
  const { patients } = useNoteStore();
  const { addDischargeSearch } = useDischargeStore();

  const discharges = Array.from(
    new Set(Object.values(patients).flatMap((p) => p.diagnosisList || [])),
  );

  return (
    <div className="flex flex-wrap gap-2 p-2">
      {discharges.length > 0 ? (
        discharges.map(
          (
            dx,
            index,
          ) => (
            <button
              key={`${dx}-${index}`}
              onClick={() => addDischargeSearch(dx)}
              className="px-3 py-1 text-sm bg-slate-800 hover:bg-blue-600 text-white rounded-full transition-colors border border-slate-700"
            >
              {dx}
            </button>
          ),
        )
      ) : (
        <span className="text-slate-500 text-sm">No diagnoses found...</span>
      )}
    </div>
  );
};

export default DischargeListBar;
