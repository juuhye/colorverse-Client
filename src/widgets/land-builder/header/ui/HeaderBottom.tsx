import {
  BuilderHamburgerMenu,
  BuilderTab,
  CanvasToolbar,
  BuilderSwitch,
} from '@/features/land-builder'
import { HeaderActions } from './HeaderActions'

export function HeaderBottom() {
  return (
    <div className='flex w-full items-center justify-between bg-background-secondary-builder px-sm py-[0.7rem]'>
      <div className='flex items-center gap-10'>
        <BuilderHamburgerMenu />
        <BuilderTab />
        <CanvasToolbar />
      </div>
      <div className='flex items-center gap-lg'>
        <BuilderSwitch />
        <HeaderActions />
      </div>
    </div>
  )
}
