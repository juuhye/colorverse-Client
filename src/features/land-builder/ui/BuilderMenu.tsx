'use client'

import { useState } from 'react'
import { Button } from '@/shared/ui/button'
import { DropdownPanel } from '@/shared/ui/dropdown/DropdownPanel'
import { BUILDER_OPTION, BuilderOption } from '../model/builderOptions'
import { useDropdown } from '@/shared/lib/hooks/useDropdown'
import ArrowIcon from '../assets/arrow-icon.svg'

const OPTION_BUTTON_CLASS =
  'relative flex h-[2.4rem] w-full items-center rounded-6 pr-[3rem] pl-sm hover:bg-brand-primary cursor-pointer'

function BuilderOptionButton({
  option,
  onSelect,
}: {
  option: BuilderOption
  onSelect: (option: BuilderOption) => void
}) {
  return (
    <button
      type='button'
      className={OPTION_BUTTON_CLASS}
      onClick={() => onSelect(option)}>
      <div className='flex items-center gap-[0.9rem] text-white'>
        {option.icon}
        <span className='text-xs whitespace-nowrap'>{option.label}</span>
      </div>
      <ArrowIcon className='absolute right-8 h-8 w-6 -rotate-90 text-white' />
    </button>
  )
}

export function BuilderMenu() {
  const [selected, setSelected] = useState(BUILDER_OPTION[0])
  const { isOpen, close, toggle, ref } = useDropdown<HTMLDivElement>()

  const handleSelect = (option: BuilderOption) => {
    setSelected(option)
    close()
  }

  return (
    <div className='relative' ref={ref}>
      <Button
        color='secondary'
        leftIcon={selected.icon}
        rightIcon={<ArrowIcon className='h-6 w-[0.9rem]' />}
        iconPosition='both'
        className='text-xs'
        aria-expanded={isOpen}
        aria-controls='builder-options'
        onClick={toggle}>
        {selected.label}
      </Button>
      {isOpen && (
        <DropdownPanel arrow='center' offsetY={15} className='p-[0.5rem]'>
          <ul id='builder-options' className='flex flex-col gap-[0.5rem]'>
            {BUILDER_OPTION.map((option) => (
              <li key={option.label}>
                <BuilderOptionButton option={option} onSelect={handleSelect} />
              </li>
            ))}
          </ul>
        </DropdownPanel>
      )}
    </div>
  )
}
