import OneLinerComponent from "../mdm/OneLiner";
import AgeComponent from "../mdm/Age";
import GenderComponent from "../mdm/Gender";
import PresentationTypeComponent from "../mdm/PresentationType";
import WorkupComponent from "../mdm/Workup";
import ROSComponent from "../mdm/CompactROS";
import SubmitButton from "../mdm/SubmitButton";
import NavButton from "../mdm/NavButton";
import PopupModal from "../PopupModal";
import DiagnosisSearch from "../mdm/DiagnosisSearch";
import PmhxComponent from "../mdm/PMHx";
import PatientTabs from "../mdm/PatientTabs";
import PhysicalExamComponent from "../mdm/PhysicalExam";
import DispoComponent from "../mdm/Disposition";
import DataReviewedComponent from "../mdm/DataReviewed";
import AdjunctHistoryComponent from "../mdm/AdjunctHistory";
import LanguageComponent from "../mdm/Language";
import CriticalCareComponent from "../mdm/CriticalCare";
import Risk from "../mdm/Risk";

const MdmViewer: React.FC = () => {
  return (
    <div>
      <OneLinerComponent />
      <div className="grid grid-cols-3">
        <div className="grid grid-cols-1 items-start">
          <AgeComponent />
          <GenderComponent />
          <PresentationTypeComponent />
          <PmhxComponent />
          <AdjunctHistoryComponent />
          <DataReviewedComponent />
        </div>
        <ROSComponent />
        <div>
          <WorkupComponent />
          <LanguageComponent />

          <DiagnosisSearch />
          <DispoComponent />
          <div className="flex justify-end">
            <Risk />
            <CriticalCareComponent />
          </div>
        </div>
      </div>

      <div className="flex">
        <PatientTabs />
        <div className="flex px-10">
        <SubmitButton />
        <NavButton targetView="Result" label="See results" />
        </div>
      </div>
      <PopupModal />
    </div>
  );
};

export default MdmViewer;
