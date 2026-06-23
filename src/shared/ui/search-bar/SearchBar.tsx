import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { SearchBarProps } from './type'

export const searchBarVariants = cva(
  'w-fit rounded-4 border bg-white p-10 text-2xs font-medium outline-none',
  {
    variants: {
      state: {
        default: [
          'border-basic-gray-20 text-button-secondary-filled',
          'hover:border-brand-primary hover:bg-icon-primary-filled-pressed hover:text-brand-primary',
        ],
        error: 'border-new-point-color-02 text-new-point-color-02',
        active: 'border-button-secondary-filled text-icon-secondary-outlined',
      },
    },

    defaultVariants: {
      state: 'default',
    },
  }
)

export const SearchBar = ({ state, ...props }: SearchBarProps) => {
  return (
    <input
      type='text'
      className={cn(
        searchBarVariants({
          state,
        })
      )}
      {...props}></input>
  )
}
