import { cn } from '@/shared/lib/utils/cn'
import { TreeGroupProps } from './type'

export function TreeGroup({ className, children, ...props }: TreeGroupProps) {
  return (
    <div
      className={cn('flex flex-col gap-2 px-2xs py-xs', className)}
      {...props}>
      {children}
    </div>
  )
}
