import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { IconToggleProps } from './type'

export const iconToggleVariants = cva(
  'flex cursor-pointer items-center justify-center',
  {
    variants: {
      size: {
        sm: [
          // size
          'h-[2.2rem] w-[2.2rem]',
          // default style
          'rounded-6 border border-button-primary-outlined bg-white text-icon-tertiary-outlined',
          // hover, active style
          'hover:text-icon-secondary-outlined active:text-icon-secondary-outlined',
        ],
        md: [
          // size
          'h-[3.4rem] w-[3.4rem]',
          // default style
          'rounded-8 bg-button-toggle-primary-filled text-button-secondary-outlined',
          // hover, active style
          'hover:bg-white hover:text-brand-primary active:border active:border-brand-primary active:bg-white active:text-brand-primary',
        ],
        lg: [
          // size
          'h-3xl w-[6.8rem]',
          // default style
          'rounded-12 bg-white text-button-secondary-outlined shadow-[0_2px_6px_0_rgba(13,13,13,0.04)]',
          // hover, active style
          'active:border active:border-brand-primary active:text-brand-primary',
        ],
      },
    },

    defaultVariants: {
      size: 'sm',
    },
  }
)

export const IconToggle = ({
  icon,
  size,
  className,
  ...props
}: IconToggleProps) => {
  return (
    <button
      className={cn(
        iconToggleVariants({
          size,
          className,
        })
      )}
      {...props}>
      <span
        aria-hidden='true'
        className='flex shrink-0 items-center justify-center'>
        {icon}
      </span>
    </button>
  )
}
