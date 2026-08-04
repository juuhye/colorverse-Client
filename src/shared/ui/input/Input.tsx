import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils/cn'
import { InputProps } from './type'

export const inputVariants = cva(
  'w-full rounded-4 border bg-white p-10 text-2xs font-medium outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2',
  {
    variants: {
      state: {
        default: [
          'border-basic-gray-20 text-button-secondary-filled',
          'hover:border-brand-primary hover:bg-icon-primary-filled-pressed hover:text-brand-primary',
        ],
        error:
          'border-new-point-color-02 text-new-point-color-02 aria-[invalid=true]:border-new-point-color-02',
        active: 'border-button-secondary-filled text-icon-secondary-outlined',
      },
    },

    defaultVariants: {
      state: 'default',
    },
  }
)

export const Input = ({ state, className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      role='textbox'
      aria-invalid={state === 'error'}
      className={cn(inputVariants({ state }), className)}
      type='text'></input>
  )
}
