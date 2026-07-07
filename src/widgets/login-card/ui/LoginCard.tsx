import { LoginButton } from '@/shared/ui/login-button'
import GoogleIcon from '@/shared/assets/goggle-icon.svg'
import AppleIcon from '@/shared/assets/apple-icon.svg'
import KakaoIcon from '@/shared/assets/kakao-icon.svg'
import ColorverseIcon from '@/shared/assets/short-logo.svg'

export function LoginCard() {
  return (
    <div className='flex w-[53.5rem] flex-col gap-[4rem] rounded-28 bg-white p-[10rem] py-[4rem] shadow-[0_18px_30px_rgba(119,71,255,0.1)]'>
      <div className='flex flex-col gap-2xs'>
        <LoginButton label='Google로 로그인' icon={<GoogleIcon />} />
        <LoginButton label='Apple로 로그인' icon={<AppleIcon />} />
        <LoginButton
          label='카카오 로그인'
          icon={<KakaoIcon />}
          className='border-0 bg-[#FEE500]'
        />
      </div>
      <div className='flex w-full flex-col items-center gap-2xs'>
        <span className='text-sm text-brand-secondary'>
          ⓘ 컬러버스에 가입되어 있는 계정으로 로그인해 주세요.
        </span>
        <LoginButton label='내부 테스트용 로그인' icon={<ColorverseIcon />} />
      </div>
    </div>
  )
}
