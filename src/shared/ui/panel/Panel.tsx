'use client'

import { cn } from '@/shared/lib/utils/cn'
import { Button } from '../button'
import { Resizable } from 're-resizable'
import { useControllableState } from '@/shared/lib/hooks/useControllableState'
import { PanelProps, PanelSide } from './type'
import TriggerIcon from '@/shared/assets/trigger-icon.svg?react'

const WRAPPER_CLASS: Record<PanelSide, string> = {
  bottom: 'relative mx-0 mb-0',
  left: 'absolute top-sm bottom-sm left-0',
  right: 'absolute top-sm bottom-sm right-0',
}

const WRAPPER_CLOSED_CLASS: Record<PanelSide, string> = {
  bottom: '',
  left: '-left-[36rem]',
  right: '-right-[36rem]',
}

const TRIGGER_POSITION_CLASS: Record<PanelSide, string> = {
  bottom: '-top-[5.8rem] left-1/2',
  left: 'top-[5.4rem] -right-[5.8rem]',
  right: 'top-[5.4rem] -left-[5.8rem]',
}

const TRIGGER_ROTATE_CLASS: Record<PanelSide, string> = {
  bottom: '-rotate-90',
  left: 'rotate-0',
  right: 'rotate-180',
}

const TRIGGER_ROTATE_OPEN_CLASS: Record<PanelSide, string> = {
  bottom: 'rotate-90',
  left: 'rotate-180',
  right: 'rotate-0',
}

const PANEL_CLASS: Record<PanelSide, string> = {
  bottom: 'w-full',
  left: 'w-[34rem] h-full',
  right: 'w-[34rem] h-full',
}

const SIDE_LABEL: Record<PanelSide, string> = {
  bottom: '하단',
  left: '좌측',
  right: '우측',
}

export function Panel({
  side,
  className,
  children,
  open,
  defaultOpen,
  onOpenChange,
}: PanelProps) {
  const [isOpen, setIsOpen] = useControllableState({
    prop: open,
    defaultProp: defaultOpen ?? true,
    onChange: onOpenChange,
  })

  return (
    <div
      className={cn(
        'duration-300',
        WRAPPER_CLASS[side],
        !isOpen && WRAPPER_CLOSED_CLASS[side],
        className
      )}>
      <Button
        color='icon'
        iconPosition='only'
        leftIcon={<TriggerIcon className='h-[5.8rem] w-[3.8rem]' />}
        className={cn(
          'absolute transition-transform duration-300',
          TRIGGER_POSITION_CLASS[side],
          isOpen ? TRIGGER_ROTATE_OPEN_CLASS[side] : TRIGGER_ROTATE_CLASS[side]
        )}
        aria-label={`${SIDE_LABEL[side]} 패널 ${isOpen ? '닫기' : '열기'}`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />

      {side === 'bottom' ? (
        isOpen && (
          <Resizable
            className={cn('rounded-36 bg-white', PANEL_CLASS[side])}
            defaultSize={{ width: '100%', height: 200 }}
            maxHeight={600}
            minHeight={200}
            enable={{
              top: true,
              right: false,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}>
            {children}
          </Resizable>
        )
      ) : (
        <div className={cn('rounded-36 bg-white', PANEL_CLASS[side])}>
          {children}
        </div>
      )}
    </div>
  )
}
