'use client'

import { cn } from '@/shared/lib/utils/cn'
import { Button } from '../button'
import { Resizable } from 're-resizable'
import { useControllableState } from '@/shared/lib/hooks/useControllableState'
import { PanelProps, PanelSide } from './type'
import TriggerIcon from '@/shared/assets/trigger-icon.svg'

const WRAPPER_CLASS: Record<PanelSide, string> = {
  bottom: 'relative mx-sm mb-sm',
  left: 'absolute top-sm bottom-sm left-sm',
  right: 'absolute top-sm bottom-sm right-sm',
}

const WRAPPER_ISOPEN_CLASS: Record<PanelSide, string> = {
  bottom: 'relative mx-sm mb-sm',
  left: 'absolute top-sm bottom-sm -left-[34rem]',
  right: 'absolute top-sm bottom-sm -right-[34rem]',
}

const TRIGGER_CLASS: Record<PanelSide, string> = {
  bottom: '-top-[5.8rem] left-1/2 -rotate-90',
  left: 'top-[5.4rem] -right-[5.8rem] rotate-0',
  right: 'top-[5.4rem] -left-[5.8rem] rotate-180 ',
}

const PANEL_CLASS: Record<PanelSide, string> = {
  bottom: 'w-full',
  left: 'w-[34rem] h-full ',
  right: 'w-[34rem] h-full',
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
        isOpen && WRAPPER_CLASS[side],
        !isOpen && WRAPPER_ISOPEN_CLASS[side],
        className
      )}>
      <Button
        color='icon'
        iconPosition='only'
        leftIcon={<TriggerIcon className='h-[5.8rem] w-[3.8rem]' />}
        className={cn('absolute', TRIGGER_CLASS[side])}
        onClick={() => setIsOpen(!isOpen)}
      />

      {side === 'bottom' ? (
        <div
          className={cn(
            'overflow-hidden duration-300',
            isOpen ? 'max-h-[60rem]' : 'max-h-0',
          )}>
          <Resizable
            className={cn('rounded-36 bg-white', PANEL_CLASS[side])}
            defaultSize={{
              width: '100%',
              height: 200,
            }}
            maxHeight={600}
            minHeight={200}>
            {children}
          </Resizable>
        </div>
      ) : (
        <div className={cn('rounded-36 bg-white', PANEL_CLASS[side])}>
          {children}
        </div>
      )}
    </div>
  )
}
