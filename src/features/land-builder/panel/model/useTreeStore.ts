import { create } from 'zustand'
import { TreeState } from './type'

export const useTreeStore = create<TreeState>((set) => ({
  expandedIds: new Set(),
  toggleExpanded: (id) =>
    set((state) => {
      const expandedIds = new Set(state.expandedIds)
      if (expandedIds.has(id)) {
        expandedIds.delete(id)
      } else {
        expandedIds.add(id)
      }
      return { expandedIds }
    }),
  visibleOverrides: {},
  lockedOverrides: {},
  setVisible: (id, visible) =>
    set((state) => ({
      visibleOverrides: { ...state.visibleOverrides, [id]: visible },
    })),
  setLocked: (id, locked) =>
    set((state) => ({
      lockedOverrides: { ...state.lockedOverrides, [id]: locked },
    })),
  selectedId: null,
  selectItem: (id) => set({ selectedId: id }),
}))
