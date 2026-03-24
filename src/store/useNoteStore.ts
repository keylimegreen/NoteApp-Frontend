import { create } from "zustand";
import type {
  Gender,
  AgeGroup,
  PresentationType,
} from "../types";
// Define what our Store looks like
interface NoteState {
  // Data Fields
  oneLiner: string;
  gender: Gender;
  ageGroup: AgeGroup;
  presentation: PresentationType;

  // Actions (Functions to update the data)
  setOneLiner: (text: string) => void;
  setGender: (gender: Gender) => void;
  resetForm: () => void;
}

const initialNoteState = {
  oneLiner: "",
  gender: "" as Gender,
  ageGroup: "" as AgeGroup,
  presentation: "" as PresentationType,
  ros: {},
};

export const useNoteStore = create<NoteState>((set) => ({
  ...initialNoteState,
  setOneLiner: (text) => set({ oneLiner: text }),
  setGender: (gender) => set({ gender }),
  resetForm: () => set(initialNoteState),
}));

export default useNoteStore
