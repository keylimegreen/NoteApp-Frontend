import { create } from "zustand";
import type { NavigationHeaders, View } from "../types";
import type { WorkupListCategory } from "../types/workup";


interface UIState {
  // Data Fields
  activeTab: NavigationHeaders;
  activeView: View;
  activeCheckbox: WorkupListCategory | null;

  // Actions (Functions to update the data)
  setActiveTab: (activeTab: NavigationHeaders) => void;
  setActiveView: (activeView: View) => void;
  setActiveCheckbox: (activeCheckbox: WorkupListCategory | null) => void;
}

const initialUIState = {
  activeTab: "mdm" as NavigationHeaders,
  activeView: "mdm" as View,
  activeCheckbox: null
  //user
};

export const useUIStore = create<UIState>((set) => ({
  ...initialUIState,
  setActiveTab: (activeTab: NavigationHeaders) => set({ activeTab }),
  setActiveView: (activeView: View) => set({activeView}),
  setActiveCheckbox: (activeCheckbox: WorkupListCategory | null) => set({activeCheckbox})

}));

export default useUIStore