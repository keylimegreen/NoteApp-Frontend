export const DISCHARGE_ADD_ONS = ["Abnormal_Labs","Abnormal_Imaging","Custom"] as const

export type Discharge_addons_type = typeof DISCHARGE_ADD_ONS[number]