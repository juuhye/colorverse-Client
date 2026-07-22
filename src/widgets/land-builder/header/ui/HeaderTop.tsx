import { BuilderMenu } from '@/features/land-builder/ui/BuilderMenu'
import { Logo } from '@/shared/ui/logo'

export function HeaderTop() {
  return (
    <div className='flex w-full items-center justify-between bg-background-primary-builder p-sm py-4'>
      {/* logo + intro */}
      <div className='flex items-center gap-md'>
        <h1>
          <Logo className='text-white' />
        </h1>
        <p className='text-xs font-medium text-white opacity-60'>
          안녕하세요. {'천억부자'}님의 랜드 빌더 입니다.
        </p>
      </div>
      <BuilderMenu />
      <div>{/* TODO: utils / setting 메뉴 추가 예정 */}</div>
    </div>
  )
}
