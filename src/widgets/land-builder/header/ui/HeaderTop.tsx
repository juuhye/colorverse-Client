import { Logo } from '@/shared/ui/logo'

export function HeaderTop() {
  return (
    <div className='w-full bg-background-primary-builder p-sm py-4'>
      {/* logo + intro */}
      <div className='flex items-center gap-md'>
        <h1>
          <Logo className='text-white' />
        </h1>
        <p className='text-xs font-medium text-brand-tertiary opacity-60'>
          안녕하세요. {'천억부자'}님의 랜드 빌더 입니다.
        </p>
      </div>
    </div>
  )
}
