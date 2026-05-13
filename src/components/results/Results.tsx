import cn from "../../lib/utils";
import useNoteStore from "../../store/useNoteStore";
import useUIStore from "../../store/useUIStore";

const Results = () => {
  const activePatient = useNoteStore((s) => s.returnActivePatient());
  const hpi_pe = activePatient.hpi_pe;
  const mdm = activePatient.mdm;
  const time = activePatient.responseTime;
  const setAlert = useUIStore((s) => s.setAlert);

  const copyToClipboard = (target: string) => {
    if (target === "mdm") {
      setAlert("Note copied!", "alert");
      return () => navigator.clipboard.writeText(mdm);
    } else if (target === "hpi_pe") {
      setAlert("Note copied!", "alert");
      return () => navigator.clipboard.writeText(hpi_pe);
    }
  };

  return (
    <div>
      <h1>Hpi and PE</h1>
      <textarea
        className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md text-slate-100 min-h-[200px]"
        value={hpi_pe ?? ""}
        readOnly // Since it's a generator output, usually you want readOnly or a change handler
        placeholder="Hpi/pe note will appear here..."
      />

      <button
        onClick={copyToClipboard("hpi_pe")}
        className={cn("baseStyles", "primaryBtn")}
      >
        Copy
      </button>
      <h1>Mdm</h1>
      <textarea
        className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md text-slate-100 min-h-[200px]"
        value={mdm ?? ""}
        readOnly // Since it's a generator output, usually you want readOnly or a change handler
        placeholder="MDM note will appear here..."
      />

      <button
        onClick={copyToClipboard("mdm")}
        className={cn("baseStyles", "primaryBtn")}
      >
        Copy
      </button>
      <div>{`Time to generate response: ${time} seconds.`}</div>
    </div>
  );
};

export default Results;
