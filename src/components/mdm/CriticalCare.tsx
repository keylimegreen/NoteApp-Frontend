import cn from "../../lib/utils";
import GroupComponents from "../general/Group";

const CriticalCareComponent: React.FC = () => {
  return (
    <div className="flex p-1">  
      <div className="grid grid-cols-3 gap-2 pl-2">
        <GroupComponents collectionName={"criticalCare"} />
      </div>
    </div>
  );
};

export default CriticalCareComponent;
