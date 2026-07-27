import {
  ShortcutKeyMenu,
  BuilderTab,
  CanvasToolbar,
} from '@/features/land-builder'

export function HeaderBottom() {
  return (
    <div className='w-full bg-background-secondary-builder px-sm py-[0.7rem]'>
      <div className='flex items-center gap-10'>
        <ShortcutKeyMenu />
        <BuilderTab />
        <CanvasToolbar />
      </div>
    </div>
  )
}
