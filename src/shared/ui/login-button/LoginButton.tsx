import { cn } from '@/shared/lib/utils'
import { LoginButtonProps } from './type'

export function LoginButton({
  icon,
  label,
  // onClick,
  className,
}: LoginButtonProps) {
  return (
    <button
      className={cn(
        'felx relative h-[5.2rem] w-full items-center rounded-full border border-gray-300 bg-white px-20 text-center text-base font-medium',
        className
      )}>
      {icon && (
        <span className='absolute top-1/2 left-20 -translate-y-1/2'>
          {icon}
        </span>
      )}
      {label}
    </button>
  )
}
