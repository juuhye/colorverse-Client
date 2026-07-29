'use client'

import { Button } from '@/shared/ui/button'
import { IconToggle, IconToggleGroup } from '@/shared/ui/icon-toggle'
import { CANVAS_TOOL_OPTION, CanvasToolId } from '../model/canvasToolOptions'
import ArrowIcon from '../assets/arrow-icon.svg'
import MarkIcon from '../assets/mark-icon.svg'
import { useState } from 'react'

export function CanvasToolbar() {
  const [selectedTool, setSelectedTool] = useState<CanvasToolId[]>(['cursor'])

  return (
    <div className='flex items-center gap-18'>
      <div className='flex items-center gap-10'>
        <Button
          color='icon'
          iconPosition='only'
          shape='circle'
          size='md'
          aria-label='Undo'
          disabled
          leftIcon={<ArrowIcon className='h-6 w-10 rotate-90' />}
          className='w-[3.4rem] border border-basic-gray-60 text-basic-gray-60'
        />
        <Button
          color='icon'
          iconPosition='only'
          shape='circle'
          size='md'
          aria-label='Redo'
          disabled
          leftIcon={<ArrowIcon className='h-6 w-10 -rotate-90' />}
          className='w-[3.4rem] border border-basic-gray-60 text-basic-gray-60'
        />
      </div>
      <IconToggleGroup
        type='single'
        className='gap-[2.5rem]'
        value={selectedTool}
        onValueChange={(value) => setSelectedTool(value as CanvasToolId[])}>
        {CANVAS_TOOL_OPTION.map((tool) => (
          <div key={tool.id} className='relative'>
            <IconToggle
              value={tool.id}
              aria-label={`${tool.label}`}
              icon={tool.icon}
              size='md'
            />
            {selectedTool.includes(tool.id) && (
              <MarkIcon className='absolute bottom-[-1.35rem] left-1/2 -translate-x-1/2' />
            )}
          </div>
        ))}
      </IconToggleGroup>
    </div>
  )
}
