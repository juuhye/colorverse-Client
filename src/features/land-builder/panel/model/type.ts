export type TreeState = {
  expandedIds: Set<string>
  toggleExpanded: (id: string) => void
  visibleOverrides: Record<string, boolean>
  lockedOverrides: Record<string, boolean>
  setVisible: (id: string, visible: boolean) => void
  setLocked: (id: string, locked: boolean) => void
  selectedId: string | null
  selectItem: (id: string) => void
}

export type LandTreeItem = {
  id: string
  label: string
  visible: boolean
  locked: boolean
  selected: boolean
  children?: LandTreeItem[]
}

export type LandTreeGroup = {
  id: string
  label: string
  open?: boolean
  items: LandTreeItem[]
}
