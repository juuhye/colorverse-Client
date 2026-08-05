import { cn } from '@/shared/lib/utils/cn'
import { TreeListProps } from './type'

export function TreeList({ className, children, ...props }: TreeListProps) {
  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-8 border border-search-outlined bg-[#F5F8FB]',
        className
      )}
      {...props}>
      {children}
    </div>
  )
}
