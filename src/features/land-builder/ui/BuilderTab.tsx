'use client'
import { cn } from '@/shared/lib/utils/cn'
import { useState } from 'react'

const BUILDER_TABS = ['아이템 에디터', '아이템 매니저', '아이템 크리에이터']

export function BuilderTab() {
  const [activeTab, setActiveTab] = useState<string>(BUILDER_TABS[0])

  return (
    <ul className='flex items-center'>
      {BUILDER_TABS.map((tab) => (
        <li
          key={tab}
          className='relative after:absolute after:top-1/2 after:right-0 after:h-12 after:w-1 after:-translate-y-1/2 after:bg-button-secondary-outlined after:content-[""] last:after:hidden'>
          <button
            type='button'
            aria-pressed={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'relative px-sm py-10 text-sm font-semibold',
              activeTab === tab
                ? 'text-white'
                : 'text-button-secondary-outlined'
            )}>
            {tab}
          </button>
        </li>
      ))}
    </ul>
  )
}
