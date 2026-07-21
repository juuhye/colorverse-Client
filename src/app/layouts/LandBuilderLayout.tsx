import { HeaderBottom, HeaderTop } from '@/widgets/land-builder/header'
import React from 'react'

export function LandBuilderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-dvh w-dvw'>
      <header>
        <HeaderTop />
        <HeaderBottom />
      </header>
      {children}
    </div>
  )
}
