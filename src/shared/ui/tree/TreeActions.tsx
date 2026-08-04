import { useState } from 'react'
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
  className,
}: TreeActionsProps) {
  const [isVisible, setIsVisible] = useState(!!visible)
  const [isLocked, setIsLocked] = useState(!!locked)
  const [isSelected, setIsSelected] = useState(!!selected)

  return (
    <div className={cn('flex items-center gap-4', className)}>
      <IconToggle
        aria-label={isVisible ? '숨기기' : '보이기'}
        size='xs'
        defaultPressed={visible}
        onPressedChange={setIsVisible}
        icon={isVisible ? <VisibleOnIcon /> : <VisibleOffIcon />}
      />
      <IconToggle
        aria-label={isLocked ? '잠금 해제' : '잠금'}
        size='xs'
        defaultPressed={locked}
        onPressedChange={setIsLocked}
        icon={isLocked ? <LockOnIcon /> : <LockOffIcon />}
      />
      <IconToggle
        aria-label='상세 보기'
        size='xs'
        defaultPressed={selected}
        onPressedChange={setIsSelected}
        icon={<SearchIcon />}
      />
    </div>
  )
}
