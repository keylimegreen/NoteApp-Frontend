import { create } from "zustand";
import type { NavigationHeaders, View } from "../types/mdm";
import type { WorkupListCategory } from "../types/workup";

interface UIState {
  // Data Fields
  activeTab: NavigationHeaders;
  activeView: View;
  activeCheckbox: WorkupListCategory | null;
  error: string;

  // Actions (Functions to update the data)
  setActiveTab: (activeTab: NavigationHeaders) => void;
  setActiveView: (activeView: View) => void;
  setActiveCheckbox: (activeCheckbox: WorkupListCategory | null) => void;
  setError: (error: string) => void;
}

const initialUIState = {
  activeTab: "MDM" as NavigationHeaders,
  activeView: "MDM" as View,
  activeCheckbox: null,
  //user

  error: "",
};

export const useUIStore = create<UIState>((set) => ({
  ...initialUIState,
  setActiveTab: (activeTab: NavigationHeaders) => set({ activeTab }),
  setActiveView: (activeView: View) => set({ activeView }),
  setActiveCheckbox: (activeCheckbox: WorkupListCategory | null) =>
    set({ activeCheckbox }),
 
  setError: (error: string) => set({ error }),
}));

export default useUIStore;
