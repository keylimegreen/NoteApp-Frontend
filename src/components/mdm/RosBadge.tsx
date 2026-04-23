import cn from "../../lib/utils";
import useNoteStore, { useActivePatientData } from "../../store/useNoteStore";
import type { AllRosItems, RosCategory } from "../../types/ros";

export const RosBadge = ({ item, category }: { item: AllRosItems, category: RosCategory }) => {
  const ros = useActivePatientData((p) => p.ros);
  const categoryData = ros[category as unknown as RosCategory];
  const status = categoryData[item];
  const setRos = useNoteStore((s) => s.setRosStatus);

  const handleCycle = () => {
    if (status === null) setRos(category, item, 'neg');
    else if (status === 'neg') setRos(category, item, 'pos');
    else setRos(category, item, null);
  };

  const stateClass = status === 'pos' ? 'ros-badge-pos' : status === 'neg' ? 'ros-badge-neg' : 'ros-badge-null';

  return (
    <div onClick={handleCycle} className={cn("ros-badge", stateClass)}>
      {status === 'pos' && <span className="mr-1">+</span>}
      {status === 'neg' && <span className="mr-1">-</span>}
      {item}
    </div>
  );
};

export default RosBadge