'use client'

import { cn } from '@/shared/lib/utils/cn'
import { Button } from '../button'
import { Resizable } from 're-resizable'
import { useControllableState } from '@/shared/lib/hooks/useControllableState'
import { PanelProps, PanelSide } from './type'
import TriggerIcon from '@/shared/assets/trigger-icon.svg'

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

const TRIGGER_CLASS: Record<PanelSide, string> = {
  bottom: '-top-[5.8rem] left-1/2 -rotate-90',
  left: 'top-[5.4rem] -right-[5.8rem] rotate-0',
  right: 'top-[5.4rem] -left-[5.8rem] rotate-180',
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
        className={cn('absolute', TRIGGER_CLASS[side])}
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
