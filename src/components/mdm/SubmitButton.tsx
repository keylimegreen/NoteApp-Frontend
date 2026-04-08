import React from "react";
import { Share2 } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import useNoteStore from "../../store/useNoteStore";

const SubmitButton: React.FC = () => {
  const { ageGroup, gender, presentationType, oneLiner } = useNoteStore(
    useShallow((state) => ({
      ageGroup: state.ageGroup,
      gender: state.gender,
      presentationType: state.presentationType,
      oneLiner: state.oneLiner,
    })),
  );
  const submitToBackend = () => {
    const payload = { oneLiner, gender, ageGroup, presentationType };
    console.log("Sending to Backend:", payload);
    alert("Note data sent to generative backend!");
  };
  return (
    <div className="flex justify-center pt-6 pb-12">
      <button
        onClick={submitToBackend}
        className="default-button"
      >
        <Share2 size={20} />
        <span>Process Note</span>
      </button>
    </div>
  );
};
export default SubmitButton;
