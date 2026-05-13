import useDischargeStore from "../../store/useDischargeStore"

export const DischargeNoteResponse = () => {
    // By calling the hook, React watches this value for changes
    const response = useDischargeStore((state) => state.response);

    return (
        <div className="mt-4">
            <textarea 
                className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md text-slate-100 min-h-[200px]"
                value={response ?? ""} 
                readOnly // Since it's a generator output, usually you want readOnly or a change handler
                placeholder="Discharge note will appear here..."
            />
        </div>
    );
};

export default DischargeNoteResponse;