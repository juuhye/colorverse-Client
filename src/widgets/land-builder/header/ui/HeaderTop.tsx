import { Logo } from '@/shared/ui/logo'
import { BuilderMenu } from '@/features/land-builder/header'
import { HeaderUtils } from './HeaderUtils'
import { HeaderProfile } from './HeaderProfile'

export function HeaderTop() {
  return (
    <div className='relative flex w-full items-center justify-between bg-background-primary-builder p-sm py-4'>
      {/* logo + intro */}
      <div className='flex items-center gap-md'>
        <h1>
          <Logo className='aspect-[178/43] h-[2.329rem] w-auto text-white' />
        </h1>
        <HeaderProfile />
      </div>

      {/* BuilderMenu - Dropdown menu */}
      <div className='absolute left-1/2 z-20 -translate-x-1/2'>
        <BuilderMenu />
      </div>

      {/* 단축키 / 이용 가이드 + 설정 버튼 */}
      <HeaderUtils />
    </div>
  )
}
