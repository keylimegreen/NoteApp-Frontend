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
  const activeView = useUIStore((state) => state.activeView);
  switch (activeView) {
    case "login":
      return <LoginViewer />;
    case "result":
      return <ResultViewer />;
    case "mdm":
      return <MdmViewer />;
    case "calculator":
      return <CalculatorViewer />;
    case "procedure":
      return <ProcedureViewer />;
    case "transfer":
      return <TransferViewer />;
    case "discharge":
      return <DischargeViewer />;
    default:
      return <LoginViewer />; // Fallback if something goes wrong
  }
};

export default MainViewer;
