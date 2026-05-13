import React from "react";
import { Share2 } from "lucide-react";
import { CONFIG } from "../../config/config";
import cn from "../../lib/utils";
import useUIStore from "../../store/useUIStore";
import useDischargeStore from "../../store/useDischargeStore";

const DischargeSubmitButton: React.FC = () => {
  const response = useDischargeStore((s) => s.response);
  const setAlert = useUIStore((s) => s.setAlert);
  const dischargeSearchList = useDischargeStore((s) => s.dischargeSearchList);
  const responseTime = useDischargeStore((s) => s.responseTime);
  const setResponse = useDischargeStore((s) => s.setResponse);
  const pending = useDischargeStore((s) => s.pending);
  const setPending = useDischargeStore((s) => s.setPending);

  //SENT TO SERVER
  const body = {
    diagnosis_list: dischargeSearchList,
  };

  const handleSubmit = async () => {
    if (!dischargeSearchList.length)
      setAlert("Need to enter at least one discharge diagnosis.", "error");
    else {
      try {
        const startTime = performance.now();
        setPending(true);
        const res = await fetch(`${CONFIG.BASE_URL}/api/prompt/discharge`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(body),
        });
        if (!res.body) {
          setAlert("Failed to read response stream", "error");
          setPending(false);
          return;
        }
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedText = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          accumulatedText += chunk;
          const endTime = performance.now()
          const seconds =  (endTime - startTime)/1000
          setResponse(accumulatedText, Number(seconds));
        }
      } catch {
        setAlert("Submission failed", "error");
        setPending(false);
      }
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response ?? "");
    setAlert("Note copied!", "alert");
  };
  return (
    <div>
      <div className="flex justify-center pt-4 pb-4">
        {pending ? (
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
        <button
          onClick={copyToClipboard}
          className={cn("baseStyles", "primaryBtn")}
        >
          Copy
        </button>
      </div>
      {responseTime ? `Generated in ${responseTime} seconds` : null}
    </div>
  );
};
export default DischargeSubmitButton;
