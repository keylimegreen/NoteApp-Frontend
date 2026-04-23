import cn from "../../lib/utils";
import GroupComponents from "../general/Group";

const DataReviewedComponent: React.FC = () => {
  return (
    <div className="flex p-1">
      <h3 className={cn("text-header", "header-border-r", "header-vertical")}>
        Data 
        Review
      </h3>
      <div className="grid grid-cols-4 gap-2 pl-2">
        <GroupComponents collectionName={"dataReviewed"} />
      </div>
    </div>
  );
};

export default DataReviewedComponent;
