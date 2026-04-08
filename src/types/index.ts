// 1. Gender
export const GENDER_OPTIONS = ['Male', 'Female', ''] as const;
export type Gender = typeof GENDER_OPTIONS[number];

// 2. Age Group
export const AGE_GROUP_OPTIONS = ['Neonate', 'Infant', 'Child', 'Adolescent', 'Adult', 'Elderly', ''] as const;
export type AgeGroup = typeof AGE_GROUP_OPTIONS[number];

// 3. Presentation
export const PRESENTATION_OPTIONS = ['Medical', 'Trauma', 'Both', ''] as const;
export type PresentationType = typeof PRESENTATION_OPTIONS[number];

// 4. ROS Systems
export const ROS_SYSTEM_OPTIONS = ['General', 'Neuro', 'HEENT', 'Respiratory', 'Cardiac', 'GI', 'GU', 'Skin', 'MSK', ''] as const;
export type ROSSystem = typeof ROS_SYSTEM_OPTIONS[number];

// 5. Navigation
export const NAVIGATION_HEADERS = ['MDM', 'Calculator', 'Procedure Note', 'Transfer', 'Discharge', "Login",''] as const;
export type NavigationHeaders = typeof NAVIGATION_HEADERS[number];

// 6. Review of Systems State Interface
export interface ROSState {
  [key: string]: { pos: boolean; neg: boolean };
}

//Workup


export type View = 'login'|'mdm'|'result'|'calculator'|'procedure'|'transfer'|'discharge'
