import React from "react";
import MdmViewer from "./MdmViewer";
import CalculatorViewer from "./CalculatorViewer";
import ProcedureViewer from "./ProcedureViewer";
import TransferViewer from "./TransferViewer";
import DischargeViewer from "./DischargeViewer";
import ResultViewer from "./ResultViewer";
import LoginViewer from "./LoginViewer";
import useUIStore from "../../store/useUIStore";

const MainViewer: React.FC = () => {
  const {activeView} = useUIStore();
  switch (activeView) {
    case "Login":
      return <LoginViewer />;
    case "Result":
      return <ResultViewer />;
    case "MDM":
      return <MdmViewer />;
    case "Calculator":
      return <CalculatorViewer />;
    case "Procedure":
      return <ProcedureViewer />;
    case "Transfer":
      return <TransferViewer />;
    case "Discharge":
      return <DischargeViewer />;
    default:
      return <LoginViewer />; // Fallback if something goes wrong
  }
};

export default MainViewer;
