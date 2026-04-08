import { create } from "zustand";
import type { Gender, AgeGroup, PresentationType } from "../types";
import { WORKUP, type Workup } from "../types/workup";
import type { AllRosItems, ROS_cvs, ROS_general, ROS_gi, ROS_gu, ROS_msk, ROS_neuro, ROS_OPTIONS, ROS_resp } from "../types/ros";

interface WorkupState {
  Labs: boolean;
  EKG: boolean;
  Xray: string[];
  US: string[];
  POCUS: string[];
  CT: string[];
  MRI: string[];
  Procedures: string[];
  Consults: string[];
  [key: string]: boolean | string[];
}

export type RosStatus = "pos" | "neg" | null;

interface RosState {
  ros: {
    General: { [K in ROS_general]: RosStatus };
    Cardiovascular: { [K in ROS_cvs]: RosStatus };
    Respiratory: { [K in ROS_resp]: RosStatus };
    Gastrointestinal: { [K in ROS_gi]: RosStatus };
    Neurologic: { [K in ROS_neuro]: RosStatus };
    Genitourinary: { [K in ROS_gu]: RosStatus };
    Musculoskeletal: { [K in ROS_msk]: RosStatus };
  };
  
}

// Define what our Store looks like
interface NoteState {
  // Data Fields
  oneLiner: string;
  gender: Gender;
  ageGroup: AgeGroup;
  presentationType: PresentationType;
  workup: WorkupState;
  ros: RosState;
  diagnosisList: string[];



  //Flags NEEDS TO BE ADDED
  adjunctHistory: string[]; //EMS, family, partner, outpatient providers
  dataReviewed: string[]; // labs, notes, imaging
  risk: string[]; //low, moderate, high  
  critCare: boolean;
  


  customXray: string | null;
  customCt: string | null;
  customMri: string | null;
  customUs: string | null;
  customPocus: string | null;
  customProcedure: string | null;
  customConsult: string | null;

  // Actions (Functions to update the data)
  setOneLiner: (text: string) => void;
  setGender: (gender: Gender) => void;
  setAgeGroup: (ageGroup: AgeGroup) => void;
  setPresentationType: (presentationType: PresentationType) => void;

// Action to update the state
  setRosStatus: (
    category: keyof typeof ROS_OPTIONS, 
    item: AllRosItems, 
    status: RosStatus
  ) => void;
  resetRos: () => void;


  addWorkup: (item: string, category: keyof Workup) => void;
  removeWorkup: (item: string, category: Workup) => void;
  toggleWorkupItem: (item: string, category: Workup) => void;
  clearWorkup: () => void;

  setCustomValue: (field: string, value: string) => void;

  addDiagnosis: (val: string) => void;
  removeDiagnosis: (val: string) => void;
  clearDiagnoses: () => void;

  /* NEEDS TO BE ADDED
  setCustomXray: (text: string) => void;
  setCustomCt: (text: string) => void;
  setCustomMri: (text: string) => void;
  setCustomUs: (text: string) => void;
  setCustomPocus: (text: string) => void;
  setCustomProcedure: (text: string) => void;
  setCustomConsult: (text: string) => void;*/

  resetForm: () => void;
}

const initialNoteState = {
  oneLiner: "",
  gender: "" as Gender,
  ageGroup: "" as AgeGroup,
  presentationType: "" as PresentationType,
  diagnosisList: [],
  workup: {
    Labs: false,
    EKG: false,
    Xray: [],
    US: [],
    POCUS: [],
    CT: [],
    MRI: [],
    Procedures: [],
    Consults: [],
  },

  customXray: null,
  customCt: null,
  customMri: null,
  customUs: null,
  customPocus: null,
  customProcedure: null,
  customConsult: null,
};

export const useNoteStore = create<NoteState>((set) => ({
  ...initialNoteState,
  setOneLiner: (oneLiner) => set({ oneLiner }),
  setGender: (gender) => set({ gender }),
  setAgeGroup: (ageGroup) => set({ ageGroup }),
  setPresentationType: (presentationType) => set({ presentationType }),
  resetForm: () => set({initialNoteState}),
  setCustomValue: (field: string, value: string) => set({ [field]: value }),

  addWorkup: (item: string, category: keyof WorkupState) => {
    set((state) => {
      // 1. Get the current value for this category
      const currentVal = state.workup[category];
      
      return {
        workup: {
          ...state.workup,
          [category]: Array.isArray(currentVal) ? [...currentVal, item] : true,
        } as WorkupState
      };
    });
  },
  removeWorkup: (item: string, category: keyof WorkupState) => {
    set((state) => {
      const currentCategory = state.workup[category];

      return {
        workup: {
          ...state.workup,
          [category]: Array.isArray(currentCategory)
            ? currentCategory.filter((wk) => wk !== item)
            : false, // Reset boolean categories to false
        } as WorkupState, // Casting here satisfies the IDE
      };
    });
  },

  toggleWorkupItem: (item: string, category: Workup) =>
    set((state) => {
      const currentWorkup = state.workup;
      const list = currentWorkup[category];
      
      if (Array.isArray(list)) {
        console.log("toggle item: "+item+" category: " + category)
        console.log("list: ", list)
        const isAlreadySelected = list.includes(item);
        return {
          workup: {
            ...currentWorkup,
            [category]: isAlreadySelected
              ? list.filter((wk) => wk !== item)
              : [...list, item],
          } as WorkupState,
        };
      }
      return {
        workup: {
          ...currentWorkup,
          [category]: !list,
        } as WorkupState,
      };
    }),

  
  clearWorkup: () =>
    set({
      workup: {
    Labs: false,
    EKG: false,
    Xray: [],
    US: [],
    Pocus: [],
    CT: [],
    MRI: [],
    Procedures: [],
    Consults: [],
  }
    }),

  //DIAGNOSIS LIST
  addDiagnosis: (val) =>
    set((state) => ({
      diagnosisList: state.diagnosisList.includes(val)
        ? state.diagnosisList
        : [...state.diagnosisList, val],
    })),

  removeDiagnosis: (val) =>
    set((state) => ({
      diagnosisList: state.diagnosisList.filter((d) => d !== val),
    })),

  clearDiagnoses: () => set({ diagnosisList: [] }),

  /*setCustomXray: (customXray:string|null) => set({customXray}),
  setCustomCt: (customCt:string|null) => set({customCt}),
  setCustomMri: (customMri:string|null) => set({customMri}),
  setCustomUs: (customUs:string|null) => set({customUs}),
  setCustomPocus: (customPocus:string|null) => set({customPocus}),
  setCustomProcedure: (customProcedure:string|null) => set({customProcedure}),
  setCustomConsult: (customConsult:string|null) => set({customConsult}),*/

}));

export const returnWorkup =  (state:NoteState) => {
    const { workup } = state;
    return WORKUP
    .map((key: Workup) => {
      const value = workup[key];
      const hasData = Array.isArray(value) ? value.length > 0 : value === true;
      if (!hasData) return null;
      return Array.isArray(value) 
        ? `${key}: ${value.join(', ')}` 
        : key;
    })
    // 3. Filter out the 'null' entries (categories with no data)
    .filter(Boolean) 
    .join(' | ');
  }


export default useNoteStore;
