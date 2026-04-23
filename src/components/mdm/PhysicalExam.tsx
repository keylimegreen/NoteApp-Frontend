import useNoteStore, { useActivePatientData } from "../../store/useNoteStore";

const PhysicalExamComponent: React.FC = () => {
  const physicalExam = useActivePatientData((p) => p.physicalExam);
  const setphysicalExam = useNoteStore((state) => state.setPhysicalExam);
  return (
    <div className="p-2 bg-slate-300 rounded-xl shadow-sm border border-slate-200 flex">
      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
        Exam
      </label>
      <textarea
        className="w-full p-2 border text-slate-700 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        rows={1}
        value={physicalExam}
        onChange={(e) => setphysicalExam(e.target.value)}
      />
    </div>
  );
};

export default PhysicalExamComponent;
