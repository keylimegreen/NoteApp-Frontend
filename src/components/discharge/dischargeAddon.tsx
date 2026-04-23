import useDischargeStore from "../../store/useDischargeStore";
import { DISCHARGE_ADD_ONS } from "../../types/discharge";

export const DischargeAddon = () => {
  const toggleDischargeState = useDischargeStore(
    (state) => state.toggleDischargeState,
  );
  const Abnormal_Labs = useDischargeStore((state) => state.Abnormal_Labs);
  const Abnormal_Imaging = useDischargeStore((state) => state.Abnormal_Imaging);
  const Custom = useDischargeStore((state) => state.Custom);
  const lookup = { Abnormal_Labs, Abnormal_Imaging, Custom };
  return (
    <div className="flex flex-row p-4 justify-around">
      {DISCHARGE_ADD_ONS.map((addon) => (
        <label key={addon} className="flex items-center gap-2">
          <input
            type="checkbox"
            // lookup["Abnormal_Labs"] returns the boolean value of the state variable
            checked={!!lookup[addon]}
            onChange={() => toggleDischargeState(addon)}
          />
          {addon.replace("_", " ")}{" "}
          {/* Optional: makes "Abnormal_Labs" look like "Abnormal Labs" */}
        </label>
      ))}
    </div>
  );
};

export default DischargeAddon;
