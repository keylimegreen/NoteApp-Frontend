import DischargeAddon from "../discharge/dischargeAddon"
import DischargeListBar from "../discharge/dischargeListBar"
import DischargeNote, { DischargeNoteResponse } from "../discharge/dischargeNote"
import DischargeSearch from "../discharge/dischargeSearch"
import DischargeSubmitButton from "../discharge/dischargeSubmit"

const DischargeViewer: React.FC = () => {
    return (<div>
        <DischargeListBar/>
        <DischargeSearch/>
        <DischargeAddon/>
        <DischargeNoteResponse />
        <DischargeSubmitButton/>
        </div>
    )
}

export default DischargeViewer