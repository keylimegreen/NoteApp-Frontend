import React from "react";
import { Share2 } from "lucide-react";
import useNoteStore from "../../store/useNoteStore";
import { CONFIG } from "../../config/config";
import cn from "../../lib/utils";
import useUIStore from "../../store/useUIStore";

const SubmitButton: React.FC = () => {
  const setAlert = useUIStore((s) => s.setAlert);
  const activePatient = useNoteStore((s) => s.returnActivePatient());
  const setIsGenerating = useNoteStore((s) => s.setIsGenerating);
  const isGenerating = activePatient.isGenerating;
  const setResponseTime = useNoteStore((s) => s.setResponseTime)
  const updateSection = useNoteStore((s) => s.updatePatientSection); // You'll need this in your store

  //SENT TO SERVER
  const body = {
    age: activePatient.age.join(""),
    gender: activePatient.gender.join(""),
    one_liner: activePatient.oneLiner,
    category: activePatient.presentationType.join(""),
    diagnosis_list: activePatient.diagnosisList,
    clinical_risk: activePatient.risk.join(""),
  };


  const handleSubmit = async () => {
    const targetPatientId = activePatient.id;
    if (!activePatient.oneLiner) {
      setAlert("One liner cannot be empty", "error");
      return;
    }

    try {
      const startTime = performance.now();
      setIsGenerating(targetPatientId, true);

      const res = await fetch(`${CONFIG.BASE_URL}/api/prompt/mdm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      if (!res.body) throw new Error("Failed to read response stream");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const cleanLine = line.trim();
          if (!cleanLine || !cleanLine.startsWith("data: ")) continue;

          try {
            const jsonString = cleanLine.replace("data: ", "");
            const { section, token, error } = JSON.parse(jsonString);

            if (error) {
              console.error(`Error in ${section}:`, error);
              continue;
            }

            if (token) {
              // CRITICAL: Call the store action to trigger a re-render
              updateSection(targetPatientId, section, token);
            }
          } catch (e) {
            console.error("Error parsing SSE chunk", e);
          }
        }
      }

      const endTime = performance.now();
      const duration = ((endTime - startTime) / 1000).toFixed(2);
      // Assuming you have a setter for responseTime
      setResponseTime(targetPatientId, duration); 
      
    } catch (e) {
      setAlert(e.message, "error");
    } finally {
      setIsGenerating(targetPatientId, false);
    }
  };

  return (
    <div>
      <div className="flex justify-center pt-4 pb-4">
        {isGenerating ? (
          <div className="px-5">
            <div className="spinner"></div>
          </div>
        ) : (
          <div>
            <button
              onClick={handleSubmit}
              className={cn("baseStyles", "primaryBtn")}
            >
              <Share2 size={20} />
              <span>Process Note</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default SubmitButton;
