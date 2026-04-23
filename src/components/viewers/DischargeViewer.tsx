import DischargeAddon from "../discharge/dischargeAddon"
import DischargeListBar from "../discharge/dischargeListBar"
import DischargeNote from "../discharge/dischargeNote"
import DischargeSearch from "../discharge/dischargeSearch"

const DischargeViewer: React.FC = () => {
    return (<div>
        <DischargeListBar/>
        <DischargeSearch/>
        <DischargeAddon/>
        <DischargeNote />
        </div>
    )
}

export default DischargeViewer