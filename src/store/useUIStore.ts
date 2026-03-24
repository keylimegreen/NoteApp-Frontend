import { create } from 'zustand';
import type {NavigationHeaders} from '../types'

interface UIState {
  // Data Fields
  activeTab: NavigationHeaders;

  // Actions (Functions to update the data)
  setActiveTab:(activeTab:NavigationHeaders)=> void;

}

const initialUIState = {
    activeTab: 'MDM' as NavigationHeaders,
    //user
  };

export const useUIStore = create<UIState>((set) => ({
  ...initialUIState,
  setActiveTab: (activeTab: NavigationHeaders) => set({ activeTab })
}));
  