import { cn } from "../../lib/utils";
import GroupComponents from "../general/Group";

const DispoComponent = () => {
  return (
    <div className=" p-3">
<label>Dispo</label>
        <div className="grid grid-cols-5"><GroupComponents collectionName={"disposition"} /></div>
      </div>
   
  );
};

export default DispoComponent;
