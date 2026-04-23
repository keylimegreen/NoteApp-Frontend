import cn from "../../lib/utils";
import GroupComponents from "../general/Group";

const RiskComponent: React.FC = () => {
  return (
    <div className="flex p-1">
      <h3 className={cn("text-header")}>
        Risk
      </h3>
      <div className="pl-2 grid grid-cols-3">
        <GroupComponents collectionName={"risk"} />
      </div>
    </div>
  );
};

export default RiskComponent;
