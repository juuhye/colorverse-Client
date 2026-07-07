import MainLogo from '@/shared/assets/main-logo.svg'
import ShortLogo from '@/shared/assets/short-logo.svg'

import { cn } from '@/shared/lib/utils'

interface LogoProps {
  variant?: 'main' | 'short'
  className?: string
}

export const Logo = ({ variant = 'main', className }: LogoProps) => {
  return (
    <h1 className={cn(className)}>
      {variant === 'main' ? <MainLogo /> : <ShortLogo />}
      <span className='sr-only'>colorverse</span>
    </h1>
  )
}
