import { PRESENTATION_OPTIONS } from "../../types";
import type { PresentationType } from "../../types";
import useNoteStore from "../../store/useNoteStore";

const PresentationTypeComponent: React.FC = () => {
  const presentationType = useNoteStore((state) => state.presentationType);
  const setPresentationType = useNoteStore(
    (state) => state.setPresentationType,
  );

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="font-bold text-slate-700 mb-3 border-b pb-2">
        Presentation
      </h3>
      <div className="space-y-2">
        {PRESENTATION_OPTIONS.filter((type) => type !== "").map((type) => (
          <label
            key={type}
            className="flex items-center space-x-3 cursor-pointer text-sm font-medium"
          >
            <input
              type="checkbox"
              name="presentation"
              checked={presentationType === type}
              onChange={() => setPresentationType(type as PresentationType)}
              className="h-4 w-4"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PresentationTypeComponent;
