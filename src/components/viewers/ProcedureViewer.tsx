import { PROCEDURES } from "../../assets/procedures";
import useProcedureStore from "../../store/useProcedureStore";
import type { Procedure } from "../../types/workup";
import ProcedureListBar from "../procedure/ProcedureListBar";
import ProcedureNoteGenerator from "../procedure/ProcedureNoteGenerator";
import ProcedureNoteSearch from "../procedure/Search";

const ProcedureViewer: React.FC = () => {
    const {procedureSearch} = useProcedureStore()
   const template:string = PROCEDURES[procedureSearch] 
  return (
    <div >
    <ProcedureListBar/>
      <ProcedureNoteSearch />
      <div className="p-2 text-center">{procedureSearch}</div>
      <ProcedureNoteGenerator template={template}/>
    </div>
  );
};

export default ProcedureViewer;
