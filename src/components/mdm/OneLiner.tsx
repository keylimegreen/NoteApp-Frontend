import useNoteStore from "../../store/useNoteStore";

const OneLinerComponent: React.FC = () => {
  const oneLiner = useNoteStore((state) => state.oneLiner);
  const setOneLiner = useNoteStore((state) => state.setOneLiner);
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
        Clinical One Liner
      </label>
      <textarea
        className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        rows={1}
        value={oneLiner}
        onChange={(e) => setOneLiner(e.target.value)}
      />
    </div>
  );
};

export default OneLinerComponent;
