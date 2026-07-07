import { Logo } from '@/shared/ui/logo'
import { LoginFormCard } from '@/widgets/login-card'

export function LoginFormPage() {
  return (
    <>
      <div className='flex flex-col items-center gap-xs'>
        <Logo variant='main' />
        {/* 로그인 상단 슬로우건 */}
        <h3 className='bg-gradient-new-20 bg-clip-text text-xl font-bold text-transparent filter'>
          내부 테스트 로그인
        </h3>
      </div>

      {/* 로그인 입력 폼 영역 */}
      <LoginFormCard />
    </>
  )
}
