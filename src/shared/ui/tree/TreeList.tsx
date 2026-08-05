import { cn } from '@/shared/lib/utils/cn'
import { TreeListProps } from './type'

export function TreeList({ className, children, ...props }: TreeListProps) {
  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-16 bg-background-tertiary',
        className
      )}
      {...props}>
      {children}
    </div>
  )
}
