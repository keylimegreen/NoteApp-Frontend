import cn from "../../lib/utils";
import GroupComponents from "../general/Group";

const PresentationTypeComponent: React.FC = () => {
  return (
    <div className="flex">
      <h3 className={cn("text-header", "header-border-r", "header-vertical")}>
        Type
      </h3>
      <div className="flex pl-2">
        <GroupComponents collectionName={"presentationType"} />
      </div>
    </div>
  );
};

export default PresentationTypeComponent;
