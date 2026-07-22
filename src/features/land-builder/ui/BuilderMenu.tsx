'use client'

import { cn } from '@/shared/lib/utils/cn'
import { useState } from 'react'
import { Button } from '@/shared/ui/button'
import { DropdownPanel } from '@/shared/ui/dropdown/DropdownPanel'
import { BUILDER_OPTION } from '../model/builderOptions'
import { useDropdown } from '@/shared/lib/hooks/useDropdown'
import ArrowIcon from '../assets/arrow-icon.svg'

export function BuilderMenu() {
  const [selected, setSelected] = useState(BUILDER_OPTION[0])
  const { isOpen, close, toggle, ref } = useDropdown<HTMLDivElement>()

  return (
    <div className='relative' ref={ref}>
      <Button
        color='secondary'
        leftIcon={selected.icon}
        rightIcon={<ArrowIcon />}
        iconPosition='both'
        className='text-xs'
        onClick={toggle}>
        {selected.label}
      </Button>
      {isOpen && (
        <DropdownPanel
          showArrow={true}
          arrow='center'
          offsetY={15}
          className='p-[0.5rem]'>
          <ul className='flex flex-col gap-[0.5rem]'>
            {BUILDER_OPTION.map((option) => (
              <li
                key={option.label}
                className={cn(
                  'relative flex h-[2.4rem] cursor-pointer items-center rounded-6 pr-[3rem] pl-sm',
                  'hover:bg-brand-primary'
                )}
                onClick={() => {
                  setSelected(option)
                  close()
                }}>
                <div className='flex items-center gap-[0.9rem] text-white'>
                  {option.icon}
                  <span className='text-xs whitespace-nowrap'>
                    {option.label}
                  </span>
                </div>
                <ArrowIcon className='absolute right-8 -rotate-90 text-white' />
              </li>
            ))}
          </ul>
        </DropdownPanel>
      )}
    </div>
  )
}
