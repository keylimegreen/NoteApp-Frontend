import { PROCEDURES } from "../assets/procedures";

export const WORKUP = ['Labs', 'EKG', 'Xray', 'US', 'POCUS','CT', 'MRI', 'Procedures','Consults'] as const;
export type Workup = typeof WORKUP[number];

export const ALL_XRAY_EXAMS = [
  "Soft tissue neck",
  "C-Spine", "T-Spine", "L-Spine", "Sacrum/Coccyx", 
  "Chest", "Ribs", "Sternum",  "Abdomen",
  "Shoulder", "Clavicle", "Humerus", "Elbow", 
  "Forearm", "Wrist", "Hand", "Finger", 
  "Pelvis", "Hip", "Femur", "Knee", "Tibia/Fibula", 
  "Ankle", "Foot", "Toes",
] as const;

export type Xray_exam = typeof ALL_XRAY_EXAMS[number];

export const ALL_MRI_EXAMS = [
  "Brain (nc)", "Brain (c)", "Brain (angio)","Brain (veno)",
  "C-Spine", "T-Spine", "L-Spine","MRCP"
];

export type Mri_exam = typeof ALL_MRI_EXAMS[number];

export const ALL_CT_EXAMS = [
  "Brain (nc)", "Brain(c)","Brain (v)", "Head/Neck (angio)",
  "Maxillofacial", "Orbits", "ST Neck",
  "C-Spine", "T-Spine", "L-Spine",
  "Chest (nc)", "Chest (c)","PE", "Aorta",
  "Abd/Pelvis (nc)", "Abd/Pelvis (c)",
  "Ext (nc)","Ext (c)","Ext (angio)", 
];

export type Ct_exam = typeof ALL_CT_EXAMS[number];

export const ALL_POCUS_EXAMS = [
  "FAST (Trauma)", "RUSH (Shock)", "Aorta (AAA)", "Echo (Focused)",
  "Gallbladder (RUQ)", "Abdomen (Complete)", "Renal",
  "Bladder",
  "DVT Upper Extremity", "DVT Lower Extremity", 
  "Soft Tissue (Abscess/Cellulitis/FB)", "Ocular (Eye)"
];

export type Pocus_exam = typeof ALL_POCUS_EXAMS[number];

export const ALL_US_EXAMS = [
  "Echo",
  "Gallbladder (RUQ)", "Appendix (RLQ)", "Abdomen (Complete)", "Renal",
  "Bladder", "Scrotal/Testicular", "Transvaginal (OB/GYN)", "Pelvic (Transabdominal)",
  "DVT Upper Extremity", "DVT Lower Extremity",
  "Soft Tissue (Abscess/Cellulitis)"
];

export type Us_exam = typeof ALL_US_EXAMS[number];

export const ALL_PROCEDURES = [...Object.keys(PROCEDURES)] as const;

export type Procedure = typeof ALL_PROCEDURES[number];

export const ALL_CONSULTS = [
  "Cardiology", "Neurology", "Gastroenterology (GI)", "Pulmonology", 
  "Nephrology", "Infectious Disease (ID)", "Endocrinology", "Heme/Onc",
  "General Surgery", "Ortho", "Neurosurgery", "Trauma", 
  "Urology", "Vascular", "OB/GYN", "Ophthalmology", "ENT",
  "Psych", "Social Work", "Case Management", "PT/OT", "Wound care","Palliative Care"
] as const;

export type Consult = typeof ALL_CONSULTS[number];

export const WORKUP_OPTIONS = {
    'Xray': ALL_XRAY_EXAMS,
    'US': ALL_US_EXAMS,
    'POCUS': ALL_POCUS_EXAMS,
    'CT': ALL_CT_EXAMS,
    'MRI': ALL_MRI_EXAMS,
    'Procedures': ALL_PROCEDURES,
    'Consults': ALL_CONSULTS
}


export type WorkupOptions = typeof WORKUP_OPTIONS;
export type WorkupListCategory = keyof WorkupOptions;
export type AllWorkupValues = WorkupOptions[WorkupListCategory][number];