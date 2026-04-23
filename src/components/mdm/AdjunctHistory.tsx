import cn from "../../lib/utils";
import GroupComponents from "../general/Group";

const AdjunctHistoryComponent: React.FC = () => {
  return (
    <div className="flex p-1">
      <h3 className={cn("text-header", "header-border-r", "header-vertical")}>
        Collateral
      </h3>
      <div className="grid grid-cols-4 gap-2 pl-2">
        <GroupComponents collectionName={"adjunctHistory"} />
      </div>
    </div>
  );
};

export default AdjunctHistoryComponent;
