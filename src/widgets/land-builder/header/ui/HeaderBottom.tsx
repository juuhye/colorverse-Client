import {
  BuilderHamburgerMenu,
  BuilderTab,
  CanvasToolbar,
  BuilderSwitch,
} from '@/features/land-builder/header'
import { HeaderActions } from './HeaderActions'
import { Button } from '@/shared/ui/button'
import PlayIcon from '@/shared/assets/play-icon.svg'

export function HeaderBottom() {
  return (
    <div className='flex w-full items-center justify-between bg-background-secondary-builder px-sm py-[0.7rem]'>
      <div className='flex items-center gap-20'>
        <div className='flex items-center gap-10'>
          <BuilderHamburgerMenu />
          <BuilderTab />
          <Button
            color='gradientPrimary'
            iconPosition='right'
            shape='circle'
            size='md'
            rightIcon={<PlayIcon className='size-20' />}>
            플레이
          </Button>
        </div>
        <CanvasToolbar />
      </div>
      <div className='flex items-center gap-lg'>
        <BuilderSwitch />
        <HeaderActions />
      </div>
    </div>
  )
}
