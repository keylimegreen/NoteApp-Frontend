export type Gender = 'Male'|'Female' | '';
export type AgeGroup = 'Neonate' | 'Infant' | 'Child' | 'Adolescent' | 'Adult' | 'Elderly' | '';
export type PresentationType = 'Medical' | 'Trauma' | 'Both'| '';
export type ROSSystem = 'General' | 'Neuro' | 'HEENT' | 'Respiratory' | 'Cardiac' | 'GI' | 'GU' | 'Skin' | 'MSK' | '';

export const NAVIGATION_HEADERS = ['MDM','Calculator','Procedure Note','Transfer','Discharge', ''] as const;
export type NavigationHeaders = typeof NAVIGATION_HEADERS[number];

export interface ROSState {
  [key: string]: { pos: boolean; neg: boolean };
}
