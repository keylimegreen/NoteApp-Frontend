import { create } from "zustand";
import { type Procedure } from "../types/workup";

interface ProcedureState {
  // Data Fields
  procedureSearch: Procedure;
  selections: (null | number | string)[];

  // Actions (Functions to update the data)
  initSelections: (count:number) => void;
  setProcedureSearch: (procedureSearch: Procedure) => void;
  setSelection: (index:number,value:number|string|null) => void;
}

export const useProcedureStore = create<ProcedureState>((set) => ({
  procedureSearch: "",
  selections: [],
  initSelections: (count) => set({ selections: new Array(count).fill(null) }),
  setProcedureSearch: (procedureSearch: Procedure) => set({ procedureSearch }),
  setSelection: (index, value) => set((state) => {
    const newSelections = [...state.selections];
    newSelections[index] = value;
    return { selections: newSelections };
  }),
resetSelections: () => set({ selections: [] }),
}))


export default useProcedureStore;


