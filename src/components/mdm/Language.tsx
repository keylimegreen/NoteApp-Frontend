import cn from "../../lib/utils";
import useNoteStore from "../../store/useNoteStore";
import { DropdownSelector } from "../general/Dropdown";

const LanguageComponent: React.FC = () => {
  const onClickFn = useNoteStore((s) => s.setLanguage);
  return (
    <div className="flex p-1">
      <h3 className={cn("text-header", "header-border-r")}>
        Language
      </h3>
      <div className="grid grid-cols-3 gap-2 pl-2">
        <DropdownSelector collectionName={"language"} onSelect={ onClickFn} />
      </div>
    </div>
  );
};

export default LanguageComponent;
