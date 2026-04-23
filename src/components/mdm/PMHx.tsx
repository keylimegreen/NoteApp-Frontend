import useNoteStore from "../../store/useNoteStore";
import cn from "../../lib/utils";
import GroupComponents from "../general/Group";

const PmhxComponent: React.FC = () => {
  const {clearPmh } = useNoteStore();

  return (
    <div className="flex p-1">
      <h3 className={cn("text-header", "header-border-r", "header-vertical")}>
        PMHx
      </h3>
      <div className="grid grid-cols-6 gap-2 pl-2">
        <GroupComponents collectionName={"pmh"} />
        <div onClick={clearPmh} className="ros-badge">Clear</div>
      </div>
    </div>
  );
};

export default PmhxComponent;
