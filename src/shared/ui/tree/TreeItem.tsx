import { cn } from '@/shared/lib/utils/cn'
import { TreeItemProps } from './type'

export function TreeItem({
  selected,
  className,
  children,
  ...props
}: TreeItemProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-8 rounded-8 p-5 text-xs font-medium',
        selected
          ? 'border border-brand-primary bg-white text-brand-primary'
          : 'hover:bg-white',
        className
      )}
      {...props}>
      {children}
    </div>
  )
}
