
import type { ToggleableDataType } from "../../store/useNoteStore";
import { MDM_PARTS, type All_mdm_type } from "../../types/mdm";
import BadgeBasic from "./Badge";

interface CheckboxProps {
  collectionName: ToggleableDataType;
}


export const GroupComponents = ({ collectionName }: CheckboxProps) => {
  const items = MDM_PARTS[collectionName];
  return (
    <>
      {items.map((item) => (
        <BadgeBasic collectionName={collectionName} item={item as All_mdm_type} /> 
      ))}
    </>
  );
};

export default GroupComponents;
