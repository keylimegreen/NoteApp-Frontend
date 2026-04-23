import cn from "../../lib/utils";
import useNoteStore from "../../store/useNoteStore";
import { type All_mdm_type, type Mdm_parts_type } from "../../types/mdm";

const BadgeBasic = ({
  collectionName,
  item,
}: {
  collectionName: Mdm_parts_type;
  item: All_mdm_type;
}) => {
  const activePatient = useNoteStore((state) => state.returnActivePatient());
  const toggleFn = useNoteStore((state) => state.toggleData);
  const stateClass = activePatient[collectionName].includes(item)
    ? "badge-pos"
    : "badge-null";

  return (
    <div
      key={`${collectionName}-${item}`}
      onClick={() => toggleFn(collectionName as Mdm_parts_type, item)}
      className={cn("badge", stateClass)}
    >
      {item}
    </div>
  );
};

export default BadgeBasic;
