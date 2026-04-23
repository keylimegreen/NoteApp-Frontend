import { useState, useEffect, useMemo } from "react";
import { useProcedureStore } from "../../store/useProcedureStore";

// Utility to parse [Option 1; Option 2]
const parseOptions = (part: string) => {
  return part
    .slice(1, -1)
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);
};

const ProcedureNoteGenerator = ({ template }) => {
  const { selections, initSelections, setSelection } = useProcedureStore();
  const [finalNote, setFinalNote] = useState("");
  const [copied, setCopied] = useState(false);
  const parts: string[] = useMemo(() => {
    if (!template) return [];
    return template.split(/(\[.*?\]|\{.*?\})/g).filter(Boolean);
  }, [template]);

  // 1. Initialize the store slots
  useEffect(() => {
    if (parts) {
      const slotCount = parts.filter(
        (p) => p.startsWith("[") && p.endsWith("]"),
      ).length;
      initSelections(slotCount);
    }
  }, [parts, initSelections]);

  // 2. Rounding Date Logic
  const getRoundedTime = () => {
    const now = new Date();
    const minutes = now.getMinutes();
    const rounded = Math.round(minutes / 5) * 5;
    now.setMinutes(rounded);
    now.setSeconds(0, 0);
    return now.toLocaleString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // 3. Compile the note
  const handleFlatten = () => {
    let slotPointer = 0;
    const compiled = parts
      .map((part) => {
        if (part.startsWith("{") && part.endsWith("}")) {
          return part.includes("datetime") ? getRoundedTime() : part;
        }
        if (part.startsWith("[") && part.endsWith("]")) {
          const choice = selections[slotPointer];
          slotPointer++;
          return choice || "___";
        }
        return part;
      })
      .join("");

    setFinalNote(compiled);
  };

  // 4. Clipboard Logic
  const copyToClipboard = async () => {
    if (!finalNote) return;
    await navigator.clipboard.writeText(finalNote);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  let renderSlotIndex = 0;

  return (
    <div className="flex flex-col gap-6 p-6 bg-slate-900 min-h-screen text-slate-200">
      {/* Selection Area */}
      <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 shadow-xl">
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
          Template Inputs
        </h2>
        <div className="leading-relaxed">
          {parts
            ? parts.map((part, index) => {
                if (part.startsWith("[") && part.endsWith("]")) {
                  const currentSlot = renderSlotIndex++;
                  const options = parseOptions(part);
                  const currentSelection = selections[currentSlot];
                  const isPredefined = options.includes(currentSelection);
                  const inputValue = isPredefined ? "" : currentSelection || "";
                  return (
                    <div
                      key={index}
                      className="inline-flex flex-wrap gap-1 mx-1 my-2 p-1 bg-slate-900 rounded border border-slate-800"
                    >
                      {options.map((opt, i) =>
                        opt !== "other" ? (
                          <button
                            key={i}
                            onClick={() => setSelection(currentSlot, opt)}
                            className={`px-3 py-1 rounded text-xs transition-all border ${
                              selections[currentSlot] === opt
                                ? "bg-indigo-600 border-indigo-400 text-white"
                                : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500"
                            }`}
                          >
                            {opt}
                          </button>
                        ) : (
                          <input
                            key={i}
                            placeholder="Other..."
                            value={inputValue}
                            onChange={(e) =>
                              setSelection(currentSlot, e.target.value)
                            }
                            className={`px-3 py-1 rounded text-xs transition-all border outline-none ${
                              !isPredefined && currentSelection
                                ? "bg-indigo-600 border-indigo-400 text-white" // Highlight if custom text exists
                                : "bg-slate-800 border-slate-700 text-slate-400"
                            }`}
                          />
                        ),
                      )}
                    </div>
                  );
                }
                return (
                  <span key={index} className="whitespace-pre-wrap">
                    {part}
                  </span>
                );
              })
            : null}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleFlatten}
          className="flex-1 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-transform active:scale-95"
        >
          Generate Final Note
        </button>

        {finalNote && (
          <button
            onClick={copyToClipboard}
            className={`flex-1 py-4 font-bold rounded-lg transition-all border-2 ${
              copied
                ? "bg-emerald-600 border-emerald-400 text-white"
                : "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
            }`}
          >
            {copied ? "✓ Copied!" : "Copy for EMR"}
          </button>
        )}
      </div>

      {/* Final Review Area */}
      {finalNote && (
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase ml-1">
            Final Edit
          </label>
          <textarea
            className="w-full h-64 p-5 bg-slate-950 text-slate-100 border border-slate-800 rounded-xl font-mono text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            value={finalNote}
            onChange={(e) => setFinalNote(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default ProcedureNoteGenerator;
