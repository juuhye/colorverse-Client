import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils/cn'
import { SearchBarProps } from './type'
import SearchIcon from '../../assets/search-icon.svg?react'
import { Button } from '../button'

export const SearchBarVariants = cva(
  'w-full border border-search-outlined bg-search-filled pr-[5rem] font-medium text-[#716F87] outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2',
  {
    variants: {
      size: {
        lg: 'rounded-8 rounded-tr-[2rem] p-xs text-xs placeholder:text-[rgba(0,0,0,0.2)]',
        md: 'rounded-10 p-2xs pr-2xl text-[1.1rem]',
      },
    },

    defaultVariants: {
      size: 'md',
    },
  }
)

export const SearchBar = ({
  size,
  className,
  type = 'text',
  ...props
}: SearchBarProps) => {
  return (
    <div className='relative'>
      <input
        className={cn(SearchBarVariants({ size }), className)}
        type={type}
        {...props}
      />
      {size === 'lg' ? (
        <Button
          color='gradientPrimary'
          iconPosition='only'
          shape='circle'
          size='sm'
          leftIcon={<SearchIcon className='size-16' />}
          className='absolute top-1/2 right-6 -translate-y-1/2'
        />
      ) : (
        <Button
          color='icon'
          iconPosition='only'
          shape='circle'
          size='sm'
          leftIcon={
            <SearchIcon className='size-20 text-icon-secondary-filled' />
          }
          className='absolute top-1/2 right-8 -translate-y-1/2 p-0'
        />
      )}
    </div>
  )
}
