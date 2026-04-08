import OneLinerComponent from "../mdm/OneLiner";
import AgeComponent from "../mdm/Age";
import GenderComponent from "../mdm/Gender";
import PresentationTypeComponent from "../mdm/PresentationType";
import WorkupComponent from "../mdm/Workup";
import ROSComponent from "../mdm/ROS";
import SubmitButton from "../mdm/SubmitButton";
import NavButton from "../mdm/NavButton";
import PopupModal from "../PopupModal";
import DiagnosisSearch from "../mdm/DiagnosisSearch";

const MdmViewer: React.FC = () => {
  return (
    <div>
      <OneLinerComponent />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <AgeComponent />
        <GenderComponent />
        <PresentationTypeComponent />
      </div>
      <ROSComponent />
      <WorkupComponent />
      <DiagnosisSearch />
      <div className="flex">
        <SubmitButton />
        <NavButton targetView="result" label="See results"/>
      </div>
      <PopupModal/>
    </div>
  );
};

export default MdmViewer;
