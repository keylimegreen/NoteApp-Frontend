import React from "react";
import { Share2 } from "lucide-react";
import useNoteStore from "../../store/useNoteStore";
import { CONFIG } from "../../config/config";
import cn from "../../lib/utils";

const SubmitButton: React.FC = () => {
  const setResponse = useNoteStore((s) => s.setResponse)
  const returnActivePatient = useNoteStore((s) => s.returnActivePatient)
  const activePatient = returnActivePatient()
  
  //SENT TO SERVER
  const body = {
    age: activePatient.age,
    gender: activePatient.gender,
    oneLiner: activePatient.oneLiner,
    diagnosisList: activePatient.diagnosisList,
    risk:activePatient.risk
  }

  const handleSubmit = async () => {
    try {
      
      const targetPatientId = activePatient.id;
      const response = await fetch(`${CONFIG.BASE_URL}/api/submit-note`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const textData = await response.text();
      setResponse(targetPatientId,textData)
    } catch (err) {
      console.error("Submission failed", err);
    }
  };
  return (
    <div className="flex justify-center pt-4 pb-4">
      <button
        onClick={handleSubmit}
        className={cn("baseStyles","primaryBtn")}
      >
        <Share2 size={20} />
        <span>Process Note</span>
      </button>
    </div>
  );
};
export default SubmitButton;
