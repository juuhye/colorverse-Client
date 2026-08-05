'use client'

import { cn } from '@/shared/lib/utils/cn'
import { IconToggle } from '../icon-toggle'
import { TreeActionsProps } from './type'
import VisibleOnIcon from '../../assets/visible-on-icon.svg?react'
import VisibleOffIcon from '../../assets/visible-off-icon.svg?react'
import LockOnIcon from '../../assets/lock-on-icon.svg?react'
import LockOffIcon from '../../assets/lock-off-icon.svg?react'
import SearchIcon from '@/shared/assets/search-icon.svg?react'

export function TreeActions({
  visible,
  locked,
  selected,
  onVisibleChange,
  onLockedChange,
  onSelectedChange,
  className,
}: TreeActionsProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <IconToggle
        aria-label={visible ? '숨기기' : '보이기'}
        size='xs'
        pressed={visible}
        onPressedChange={onVisibleChange}
        icon={
          visible ? (
            <VisibleOnIcon className='h-2xs w-[1.5rem]' />
          ) : (
            <VisibleOffIcon className='h-2xs w-[1.5rem]' />
          )
        }
      />

      <IconToggle
        aria-label={locked ? '잠금 해제' : '잠금'}
        size='xs'
        pressed={locked}
        onPressedChange={onLockedChange}
        icon={
          locked ? (
            <LockOnIcon className='h-[1.5rem] w-2xs' />
          ) : (
            <LockOffIcon className='h-[1.5rem] w-2xs' />
          )
        }
      />

      <IconToggle
        aria-label='상세 보기'
        size='xs'
        pressed={selected}
        onPressedChange={onSelectedChange}
        icon={<SearchIcon className='size-2xs' />}
      />
    </div>
  )
}
