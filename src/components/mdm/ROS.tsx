
const ROSComponent:React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.keys(ROS_CONFIG).map((category) => (
        <div key={category} className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
          <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">
            {category}
          </h4>
          {ROS_CONFIG[category].map((item) => (
            <RosItem key={item} label={item} category={category} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ROSComponent