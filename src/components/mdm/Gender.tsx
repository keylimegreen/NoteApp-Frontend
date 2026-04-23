import cn from "../../lib/utils";
import GroupComponents from "../general/Group";

const GenderComponent: React.FC = () => {
  return (
    <div className="flex p-1">
      <h3 className={cn("text-header", "header-border-r", "header-vertical")}>
        Sex
      </h3>
      <div className="pl-2 grid grid-cols-3">
        <GroupComponents collectionName={"gender"} />
      </div>
    </div>
  );
};

export default GenderComponent;
