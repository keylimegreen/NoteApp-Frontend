export const ROS_GENERAL = ["Fever", "Chills", "Fatigue", "Rash"] as const;

export type ROS_general = (typeof ROS_GENERAL)[number];

export const ROS_CVS = [
  "Chest pain",
  "Palpitations",
  "Syncope",
  "Leg swelling",
] as const;

export type ROS_cvs = (typeof ROS_CVS)[number];

export const ROS_RESP = ["Shortness of breath", "Cough", "Hemoptysis"] as const;

export type ROS_resp = (typeof ROS_RESP)[number];

export const ROS_GI = [
  "Abdominal pain",
  "Nausea/Vomiting",
  "Diarrhea",
  "Constipation",
] as const;

export type ROS_gi = (typeof ROS_GI)[number];

export const ROS_NEURO = [
  "Headache",
  "Dizziness",
  "Weakness",
  "Numbness",
  "Unsteadiness",
  "Confusion",
] as const;

export type ROS_neuro = (typeof ROS_NEURO)[number];

export const ROS_GU = [
  "Dysuria",
  "Hematuria",
  "Urinary retention",
  "Incontinence","Flank pain",
] as const;

export type ROS_gu = (typeof ROS_GU)[number];

export const ROS_MSK = ["Neck pain","Back pain", "Joint pain", "Extremity pain"] as const;

export type ROS_msk = (typeof ROS_MSK)[number];

export const ROS_OPTIONS = {
  General: ROS_GENERAL,
  Cardiovascular: ROS_CVS,
  Respiratory: ROS_RESP,
  Gastrointestinal: ROS_GI,
  Neurologic: ROS_NEURO,
  Genitourinary: ROS_GU,
  Musculoskeletal: ROS_MSK,
} as const;

export type AllRosItems =
  | ROS_general
  | ROS_cvs
  | ROS_resp
  | ROS_gi
  | ROS_neuro
  | ROS_gu
  | ROS_msk;

export type RosCategory = keyof typeof ROS_OPTIONS;
