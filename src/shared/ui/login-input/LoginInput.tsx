import { cn } from '@/shared/lib/utils/cn'
import { LoginInputProps } from './type'

export const LoginInput = ({
  icon,
  className,
  type = 'text',
  ...props
}: LoginInputProps) => {
  return (
    <div className='relative w-full'>
      <input
        className={cn(
          'w-full rounded-full border border-gray-200 p-lg py-xs text-sm font-medium text-gray-900 placeholder:text-gray-200 focus:ring focus:ring-brand-primary focus:ring-offset-2',
          icon && 'pl-[5.4rem]',
          className
        )}
        type={type}
        {...props}
      />
      {icon && (
        <span className='absolute top-1/2 left-lg -translate-y-1/2'>
          {icon}
        </span>
      )}
    </div>
  )
}
