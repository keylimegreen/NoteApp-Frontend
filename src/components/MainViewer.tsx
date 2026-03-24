import React from "react"
import MdmViewer from './MdmViewer'
import CalculatorViewer from './CalculatorViewer'
import ProcedureViewer from './ProcedureViewer'
import TransferViewer from './TransferViewer'
import DischargeViewer from './DischargeViewer'

const MainViewer: React.FC = () => {
    return (<div>
        <MdmViewer/>
        <CalculatorViewer/>
        <ProcedureViewer/>
        <TransferViewer/>
        <DischargeViewer/>
        </div>
    )
}

export default MainViewer