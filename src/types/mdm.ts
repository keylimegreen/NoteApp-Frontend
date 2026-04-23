// Gender
export const GENDER_OPTIONS = ["Male", "Female"] as const;
export type Gender = (typeof GENDER_OPTIONS)[number];

// Age Group
export const AGE_GROUP_OPTIONS = [
  "Neonate",
  "Infant",
  "Child",
  "Adolescent",
  "Adult",
  "Elderly",
] as const;
export type AgeGroup = (typeof AGE_GROUP_OPTIONS)[number];

// Presentation
export const PRESENTATION_OPTIONS = ["Medical", "Trauma", "Both"] as const;
export type PresentationType = (typeof PRESENTATION_OPTIONS)[number];

// Past Medical History
export const PMH = [
  "HTN",
  "DM",
  "HLD",
  "CAD",
  "CHF",
  "AFib",
  "VTE",
  "Asthma",
  "COPD",
  "CKD",
  "Cancer",
] as const;

export type Pmh = (typeof PMH)[number];

// Navigation
export const NAVIGATION_HEADERS = [
  "MDM",
  "Discharge",
  "Procedure",
  "Transfer",
  "Calculator",
  "Login",
] as const;
export type NavigationHeaders = (typeof NAVIGATION_HEADERS)[number];

export type View =
  | "Login"
  | "MDM"
  | "Result"
  | "Calculator"
  | "Procedure"
  | "Transfer"
  | "Discharge";

export const DISPOSITION = [
  "Adm",
  "OR",
  "Trsfr",
  "BH Obs",
  "PT/CM",
  "Handover",
  "Discharge",
  "In progress",
  "AMA",
  "Eloped",
] as const;

export type DispositionType = (typeof DISPOSITION)[number];

export const ADJUNCT_HISTORY = [
  "EMS",
  "Family",
  "Partner",
  "Outpatient provider",
];
export type AdjunctHistoryType = (typeof ADJUNCT_HISTORY)[number];

export const DATA_REVIEWED = ["Labs", "Notes", "Ekg", "Imaging"] as const;
export type DataReviewedType = (typeof DATA_REVIEWED)[number];

export const RISK = ["Low", "Mod", "High"] as const;
export type RiskType = (typeof RISK)[number];

export const LANGUAGES = [
  "English",
  "Spanish",
  "Portuguese",
  "Haitian Creole",
  "Arabic",
  "Chinese",
  "Vietnamese",
  "Other",
] as const;

export type LanguageType = (typeof LANGUAGES)[number];

export const criticalCare = ["critical care"] as const;
export type criticalCareType = typeof criticalCare[number]

export const MDM_PARTS = {
  gender: GENDER_OPTIONS,
  age: AGE_GROUP_OPTIONS,
  pmh: PMH,
  presentationType: PRESENTATION_OPTIONS,
  adjunctHistory: ADJUNCT_HISTORY,
  dataReviewed: DATA_REVIEWED,
  risk: RISK,
  disposition: DISPOSITION,
  language: LANGUAGES,
  criticalCare:criticalCare,
} as const;

export type Mdm_parts_type = keyof typeof MDM_PARTS;

export type All_mdm_type = keyof (typeof MDM_PARTS)[Mdm_parts_type][number];



