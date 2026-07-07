import MainLogo from '@/shared/assets/main-logo.svg'
import ShortLogo from '@/shared/assets/short-logo.svg'

interface LogoProps {
  variant?: 'main' | 'short'
}

export const Logo = ({ variant = 'main' }: LogoProps) => {
  return (
    <>
      {variant === 'main' ? <MainLogo /> : <ShortLogo />}
      <span className='sr-only'>colorverse</span>
    </>
  )
}
