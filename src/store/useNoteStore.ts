/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import type {
  Gender,
  AgeGroup,
  PresentationType,
  Pmh,
  RiskType,
  DispositionType,
  AdjunctHistoryType,
  DataReviewedType,
  LanguageType,
} from "../types/mdm";
import { WORKUP, type Workup } from "../types/workup";
import type {
  AllRosItems,
  ROS_cvs,
  ROS_general,
  ROS_gi,
  ROS_gu,
  ROS_msk,
  ROS_neuro,
  ROS_resp,
  RosCategory,
} from "../types/ros";
import { ROS_OPTIONS } from "../types/ros";
import { CONFIG } from "../config/config";

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

interface CustomWorkup {
  customXray: string | null;
  customCt: string | null;
  customMri: string | null;
  customUs: string | null;
  customPocus: string | null;
  customProcedure: string | null;
  customConsult: string | null;
}

export type RosStatus = "pos" | "neg" | null;

interface RosState {
  General: { [K in ROS_general]: RosStatus };
  Cardiovascular: { [K in ROS_cvs]: RosStatus };
  Respiratory: { [K in ROS_resp]: RosStatus };
  Gastrointestinal: { [K in ROS_gi]: RosStatus };
  Neurologic: { [K in ROS_neuro]: RosStatus };
  Genitourinary: { [K in ROS_gu]: RosStatus };
  Musculoskeletal: { [K in ROS_msk]: RosStatus };
}

export interface PatientData {
  id: number;
  name: string;

  //intro
  oneLiner: string;
  physicalExam: string;
  //demographics
  gender: Gender[];
  age: AgeGroup[];
  presentationType: PresentationType[];
  language: LanguageType | string;
  //review
  pmh: Pmh[];
  adjunctHistory: AdjunctHistoryType[];
  dataReviewed: DataReviewedType[];
  //ros
  ros: RosState;
  //workup
  workup: WorkupState;
  customWorkup: CustomWorkup;
  diagnosisList: string[];
  //etc
  disposition: DispositionType[];
  risk: RiskType[];
  criticalCare: boolean[];

  isGenerating: boolean;
  response: string;
}

export const TOGGLERABLE_DATA = [
  "gender",
  "ageGroup",
  "presentationType",
  "pmhList",
  "adjunctHistory",
  "dataReviewed",
  "disposition",
  "risk",
  "criticalCare",
];

export type ToggleableDataType = (typeof TOGGLERABLE_DATA)[number];

export const multiDataGroup = [
  "adjunctHistory",
  "dataReviewed",
  "pmhList",
  "adjunctHistory",
  "dataReviewed",
];

// Define what our Store looks like
interface NoteState {
  activePatientId: number;
  activePatientName: string;
  patients: Record<number, PatientData>;

  setActivePatient: (id: number) => void;
  // Actions (Functions to update the data)
  setName: (name: string) => void;
  setOneLiner: (text: string) => void;
  setPhysicalExam: (physical: string) => void;
  setLanguage: (lang: string) => void;
  toggleData: (collection: ToggleableDataType, item: any) => void;

  clearPmh: () => void;

  returnActivePatient: () => PatientData;

  setRosStatus: (
    category: keyof typeof ROS_OPTIONS,
    item: AllRosItems,
    status: RosStatus,
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

  setResponse: (activePatient: number, response: string) => void;
  resetForm: () => void;
}

const createInitialRos = () => {
  const initial = {};

  // Loop through your categories (General, Cardiovascular, etc.)
  Object.entries(ROS_OPTIONS).forEach(([category, items]) => {
    // Cast to any briefly to allow dynamic key assignment during creation
    const cat = category as RosCategory;
    const itemArray = items as readonly AllRosItems[];
    initial[cat] = itemArray.reduce(
      (acc, item) => {
        acc[item] = null;
        return acc;
      },
      {} as Record<string, RosStatus>,
    );
  });

  return initial as RosState;
};

const initialPatient = {
  id: null,
  name: "",
  patientName: null,
  oneLiner: "",
  gender: [],
  age: [],
  presentationType: [],
  pmh: [],
  language: "English",
  ros: createInitialRos(),
  adjunctHistory: [],
  dataReviewed: [],
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

  diagnosisList: [],
  disposition: [],
  criticalCare: [],
  risk: [],

  customXray: null,
  customCt: null,
  customMri: null,
  customUs: null,
  customPocus: null,
  customProcedure: null,
  customConsult: null,

  isGenerating: false,
  response: "",
};

const initialPatients = Array.from({ length: CONFIG.NUM_PATIENTS }).reduce(
  (acc, _, i) => {
    const id = i + 1;
    (acc as any)[id] = {
      ...initialPatient,
      id: id,
    };
    return acc;
  },
  {} as Record<string, PatientData>,
);

export const useNoteStore = create<NoteState>((set, get) => ({
  activePatientId: 1,
  num_patients: CONFIG.NUM_PATIENTS,
  patients: initialPatients as PatientData[],
  setActivePatient: (id: number) => set({ activePatientId: id }),

  returnActivePatient: () => {
    const state = get();
    return state.patients[state.activePatientId];
  },

  setOneLiner: (oneLiner) =>
    set((state) => ({
      patients: {
        ...state.patients,
        [state.activePatientId]: {
          ...state.patients[state.activePatientId],
          oneLiner,
        },
      },
    })),

  setPhysicalExam: (physical) =>
    set((state) => ({
      patients: {
        ...state.patients,
        [state.activePatientId]: {
          ...state.patients[state.activePatientId],
          physical,
        },
      },
    })),

  setName: (name: string) =>
    set((state) => ({
      patients: {
        ...state.patients,
        [state.activePatientId]: {
          ...state.patients[state.activePatientId],
          name,
        },
      },
    })),

  setRosStatus: (category, item, status) =>
    set((state) => {
      const id = state.activePatientId;
      const patientRos = state.patients[id].ros;

      return {
        patients: {
          ...state.patients,
          [id]: {
            ...state.patients[id],
            ros: {
              ...patientRos,
              [category]: {
                ...(patientRos[category] as any),
                [item]: status,
              },
            },
          },
        },
      };
    }),

  setLanguage: (lang: string) => {
    set((state) => ({
      patients: {
        ...state.patients,
        [state.activePatientId]: {
          ...state.patients[state.activePatientId],
          lang,
        },
      },
    }));
  },

  toggleWorkupItem: (item: string, category: keyof WorkupState) =>
    set((state) => {
      const id = state.activePatientId;
      const currentWorkup = state.patients[id].workup;
      const list = currentWorkup[category];

      let updatedCategory;
      if (Array.isArray(list)) {
        updatedCategory = list.includes(item)
          ? list.filter((wk) => wk !== item)
          : [...list, item];
      } else {
        updatedCategory = !list;
      }

      return {
        patients: {
          ...state.patients,
          [id]: {
            ...state.patients[id],
            workup: { ...currentWorkup, [category]: updatedCategory },
          },
        },
      };
    }),

  // RESET FORM: Only resets the CURRENT patient
  resetForm: () =>
    set((state) => {
      const id = state.activePatientId;
      if (!id) return state;
      return {
        patients: {
          ...state.patients,
          [id]: { ...initialPatient },
        },
      };
    }),

  // DIAGNOSIS LIST: Scoped to active patient
  addDiagnosis: (val) =>
    set((state) => {
      const id = state.activePatientId;
      const currentList = state.patients[id].diagnosisList;

      if (currentList.includes(val)) return state;

      return {
        patients: {
          ...state.patients,
          [id]: {
            ...state.patients[id],
            diagnosisList: [...currentList, val],
          },
        },
      };
    }),

  removeDiagnosis: (val) =>
    set((state) => {
      const id = state.activePatientId;
      return {
        patients: {
          ...state.patients,
          [id]: {
            ...state.patients[id],
            diagnosisList: state.patients[id].diagnosisList.filter(
              (d) => d !== val,
            ),
          },
        },
      };
    }),

  clearDiagnoses: () =>
    set((state) => ({
      patients: {
        ...state.patients,
        [state.activePatientId]: {
          ...state.patients[state.activePatientId],
          diagnosisList: [],
        },
      },
    })),

  toggleData: (collection, item) => {
    const { activePatientId, patients } = get();
    if (!activePatientId || !patients[activePatientId]) return;

    const isMultiSelect = multiDataGroup.includes(collection);
    const currentCollection = patients[activePatientId][collection];

    if (isMultiSelect) {
      const isIncluded = currentCollection.includes(item);
      const updatedList = isIncluded
        ? currentCollection.filter((i) => i !== item) // Remove
        : [...currentCollection, item]; // Add

      set((state) => ({
        patients: {
          ...state.patients,
          [activePatientId]: {
            ...state.patients[activePatientId],
            [collection]: updatedList,
          },
        },
      }));
    } else {
      const isIncluded = currentCollection.includes(item);
      const updatedList = isIncluded
        ? currentCollection.filter((i) => i !== item) // Remove
        : [item]; // Add
      set((state) => ({
        patients: {
          ...state.patients,
          [activePatientId]: {
            ...state.patients[activePatientId],
            [collection]: updatedList,
          },
        },
      }));
    }
  },

  // WORKUP CLEAR: Resets workup for the ACTIVE patient only
  clearWorkup: () =>
    set((state) => ({
      patients: {
        ...state.patients,
        [state.activePatientId]: {
          ...state.patients[state.activePatientId],
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
        },
      },
    })),

  clearPmh: () =>
    set((state) => ({
      patients: {
        ...state.patients,
        [state.activePatientId]: {
          ...state.patients[state.activePatientId],
          pmh: [],
        },
      },
    })),

  // ROS

  resetRos: () =>
    set((state) => ({
      patients: {
        ...state.patients,
        [state.activePatientId]: {
          ...state.patients[`${state.activePatientId}`],
          ros: createInitialRos(),
        },
      },
    })),

  // Workup
  setCustomValue: (field: string, value: string) =>
    set((state) => ({
      patients: {
        ...state.patients,
        [state.activePatientId]: {
          ...state.patients[state.activePatientId],
          [field]: value,
        },
      },
    })),

  addWorkup: (item: string, category: keyof WorkupState) =>
    set((state) => {
      const id = state.activePatientId;
      const currentWorkup = state.patients[id].workup;
      const currentVal = currentWorkup[category];

      return {
        patients: {
          ...state.patients,
          [id]: {
            ...state.patients[id],
            workup: {
              ...currentWorkup,
              [category]: Array.isArray(currentVal)
                ? [...currentVal, item]
                : true,
            } as WorkupState,
          },
        },
      };
    }),

  removeWorkup: (item: string, category: keyof WorkupState) =>
    set((state) => {
      const id = state.activePatientId;
      const currentWorkup = state.patients[id].workup;
      const currentCategory = currentWorkup[category];

      return {
        patients: {
          ...state.patients,
          [id]: {
            ...state.patients[id],
            workup: {
              ...currentWorkup,
              [category]: Array.isArray(currentCategory)
                ? currentCategory.filter((wk) => wk !== item)
                : false,
            } as WorkupState,
          },
        },
      };
    }),

  setMdmResponse: (activePatient: number, response: string) => {
    set((state) => ({
      patients: {
        ...state.patients,
        [activePatient]: {
          ...state.patients[activePatient],
          response: response,
        },
      },
    }));
  },
}));
/*setCustomXray: (customXray:string|null) => set({customXray}),
  setCustomCt: (customCt:string|null) => set({customCt}),
  setCustomMri: (customMri:string|null) => set({customMri}),
  setCustomUs: (customUs:string|null) => set({customUs}),
  setCustomPocus: (customPocus:string|null) => set({customPocus}),
  setCustomProcedure: (customProcedure:string|null) => set({customProcedure}),
  setCustomConsult: (customConsult:string|null) => set({customConsult}),*/

export const returnWorkup = (state: NoteState) => {
  const { workup } = state.patients[state.activePatientId];
  return WORKUP.map((key: Workup) => {
    const value = workup[key];
    const hasData = Array.isArray(value) ? value.length > 0 : value === true;
    if (!hasData) return null;
    return Array.isArray(value) ? `${key}: ${value.join(", ")}` : key;
  })
    .filter(Boolean)
    .join(" | ");
};
export const useActivePatientData = <T>(
  selector: (patient: PatientData) => T,
): T => {
  const activeId = useNoteStore((s) => s.activePatientId);
  return useNoteStore((s) => selector(s.patients[activeId]));
};

export default useNoteStore;
