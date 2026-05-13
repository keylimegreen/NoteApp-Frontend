import { create } from "zustand";
import type { Discharge_addons_type } from "../types/discharge";

interface DischargeState {
  // Data Fields
  dischargeSearchList: string[];
  Abnormal_Labs: boolean;
  Abnormal_Imaging: boolean;
  Custom: boolean;
  response: string|null;
  responseTime: number|null;
  pending: boolean;
  // Actions (Functions to update the data)
  removeDischargeSearch: (discharge: string) => void;
  addDischargeSearch: (discharge: string) => void;
  clearDischargeSearch: () => void;
  setAbnormalLab: (flag: boolean) => void;
  setAbnormalImaging: (flag: boolean) => void;
  setCustom: (flag: boolean) => void;
  setResponse: (response: string, responseTime: number ) => void;
  toggleDischargeState: (target: Discharge_addons_type) => void;
  setPending: (pending: boolean) => void;
}

export const useDischargeStore = create<DischargeState>((set) => ({
  dischargeSearchList: [],
  Abnormal_Labs: false,
  Abnormal_Imaging: false,
  Custom: false,
  response: null,
  responseTime: null,
  pending: false,
  // Corrected: Uses filter to return a new array without the target term
  removeDischargeSearch: (discharge) =>
    set((state) => ({
      dischargeSearchList: state.dischargeSearchList.filter(
        (term) => term !== discharge,
      ),
    })),

  // Corrected: Creates a Set to ensure uniqueness, then spreads back into an Array
  addDischargeSearch: (discharge) =>
    set((state) => ({
      dischargeSearchList: Array.from(
        new Set([...state.dischargeSearchList, discharge]),
      ),
    })),

  setAbnormalLab: (flag) => set({ Abnormal_Labs: flag }),
  setAbnormalImaging: (flag) => set({ Abnormal_Imaging: flag }),
  setCustom: (flag) => set({ Custom: flag }),

  toggleDischargeState: (target) =>
    set((state) => ({ [target]: !state[target] })),
  setResponse: (response, responseTime, pending = false) => set({response,responseTime,pending}),
  // Optional: Clear all search terms
  clearDischargeSearch: () =>
    set({
      dischargeSearchList: [],
      Abnormal_Labs: false,
      Abnormal_Imaging: false,
      Custom: false,
    }),

  setPending: (pending: boolean) => set({pending}),
}));

export default useDischargeStore;
