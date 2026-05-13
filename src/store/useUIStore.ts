import { create } from "zustand";
import type { NavigationHeaders } from "../types/mdm";
import type { WorkupListCategory } from "../types/workup";

type alertType = "alert" | "error" | null

interface UIState {
  // Data Fields
  activeTab: NavigationHeaders;
  activeCheckbox: WorkupListCategory | null;
  alertMsg: string| null;
  type: alertType;

  // Actions (Functions to update the data)
  setActiveTab: (activeTab: NavigationHeaders) => void;
  setActiveCheckbox: (activeCheckbox: WorkupListCategory | null) => void;
  setAlert: (alertMsg: string|null, type: alertType) => void;
}

const initialUIState = {
  activeTab: "MDM" as NavigationHeaders,
  activeCheckbox: null,

  alertMsg: null,
  type: null
};

export const useUIStore = create<UIState>((set) => ({
  ...initialUIState,
  setActiveTab: (activeTab: NavigationHeaders) => set({ activeTab }),
  setActiveCheckbox: (activeCheckbox: WorkupListCategory | null) =>
    set({ activeCheckbox }),
 
  setAlert: (alertMsg: string|null,type:alertType) => set({ alertMsg, type }),
}));

export default useUIStore;
