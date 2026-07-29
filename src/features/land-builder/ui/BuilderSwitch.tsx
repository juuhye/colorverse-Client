'use client'

import { useState } from 'react'
import { Switch } from '@/shared/ui/switch'

export function BuilderSwitch() {
  const [isSnapOn, setIsSnapOn] = useState(false)
  const [isGridOn, setIsGridOn] = useState(false)

  return (
    <div className='flex items-center gap-2xs'>
      <div className='flex items-center gap-5'>
        <span className='text-xs text-[#FFFFFF99]'>
          Snap {isSnapOn ? 'On' : 'Off'}
        </span>
        <Switch
          aria-label='Snap'
          checked={isSnapOn}
          onCheckedChange={setIsSnapOn}
        />
      </div>
      <div className='flex items-center gap-5'>
        <span className='text-xs text-[#FFFFFF99]'>
          Grid {isGridOn ? 'On' : 'Off'}
        </span>
        <Switch
          aria-label='Grid'
          checked={isGridOn}
          onCheckedChange={setIsGridOn}
        />
      </div>
    </div>
  )
}
