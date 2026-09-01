'use client'

import { useState } from 'react'
import {
  TreeList,
  TreeHeader,
  TreeGroup,
  TreeItem,
  TreeIndent,
  TreeActions,
} from '@/shared/ui/tree'
import { useItemTree } from '../model/useItemTree'
import { useTreeStore } from '../model/useTreeStore'
import { itemTreeGroups } from '../mock/itemTreeGroups'
import { LandTreeItem } from '../model/type'

function ItemTreeRow({ item, depth }: { item: LandTreeItem; depth: number }) {
  const expandedIds = useTreeStore((state) => state.expandedIds)
  const toggleExpanded = useTreeStore((state) => state.toggleExpanded)
  const visibleOverrides = useTreeStore((state) => state.visibleOverrides)
  const lockedOverrides = useTreeStore((state) => state.lockedOverrides)
  const selectedId = useTreeStore((state) => state.selectedId)
  const setVisible = useTreeStore((state) => state.setVisible)
  const setLocked = useTreeStore((state) => state.setLocked)
  const selectItem = useTreeStore((state) => state.selectItem)
  const hasChildren = !!item.children?.length
  const expanded = expandedIds.has(item.id)
  const visible = visibleOverrides[item.id] ?? item.visible
  const locked = lockedOverrides[item.id] ?? item.locked
  const selected = selectedId === item.id

  return (
    <>
      <TreeItem
        selected={selected}
        className='cursor-pointer'
        onClick={() => selectItem(item.id)}>
        <TreeIndent
          depth={depth}
          hasChildren={hasChildren}
          expanded={expanded}
          selected={selected}
          aria-label={item.label}
          onClick={(e) => {
            e.stopPropagation()
            toggleExpanded(item.id)
          }}
        />
        <span className='min-w-0 flex-1 truncate'>{item.label}</span>
        <TreeActions
          visible={visible}
          locked={locked}
          selected={selected}
          onVisibleChange={(value) => setVisible(item.id, value)}
          onLockedChange={(value) => setLocked(item.id, value)}
        />
      </TreeItem>
      {hasChildren &&
        expanded &&
        item.children!.map((child) => (
          <ItemTreeRow key={child.id} item={child} depth={depth + 1} />
        ))}
    </>
  )
}

export function ItemTreeList() {
  const { data, isError } = useItemTree()
  const groups = data && !isError && data.length > 0 ? data : itemTreeGroups
  const [openGroupIds, setOpenGroupIds] = useState<Set<string>>(
    () =>
      new Set(
        itemTreeGroups.filter((group) => group.open).map((group) => group.id)
      )
  )

  const toggleGroup = (id: string) =>
    setOpenGroupIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })

  return (
    <TreeList className='h-full'>
      {groups.map((group) => {
        const isOpen = openGroupIds.has(group.id)
        return (
          <div key={group.id}>
            <TreeHeader
              label={group.label}
              open={isOpen}
              onClick={() => toggleGroup(group.id)}
            />
            {isOpen && group.items.length > 0 && (
              <TreeGroup>
                {group.items.map((item) => (
                  <ItemTreeRow key={item.id} item={item} depth={0} />
                ))}
              </TreeGroup>
            )}
          </div>
        )
      })}
    </TreeList>
  )
}
