import NavButton from "../mdm/NavButton"
import PatientTabs from "../mdm/PatientTabs"
import Results from "../results/Results"


const ViewResult:React.FC = () => {
    return (
        <div>
            <Results/>
            <PatientTabs/>
            <NavButton targetView="mdm" label="Return to template"/>
        </div>
    )
}

export default ViewResult