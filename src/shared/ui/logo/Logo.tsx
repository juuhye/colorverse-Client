import MainLogo from '@/shared/assets/main-logo.svg'
import ShortLogo from '@/shared/assets/short-logo.svg'
import { cn } from '@/shared/lib/utils/cn'

interface LogoProps {
  variant?: 'main' | 'short'
  className?: string
}

export const Logo = ({ variant = 'main', className }: LogoProps) => {
  return (
    <>
      {variant === 'main' ? (
        <MainLogo
          className={cn(
            'aspect-[178/43] h-[4.3rem] w-auto text-black',
            className
          )}
        />
      ) : (
        <ShortLogo className={cn('text-black', className)} />
      )}
      <span className='sr-only'>colorverse</span>
    </>
  )
}
