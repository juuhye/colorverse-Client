import { Button } from '@/shared/ui/button'
import SquareIcon from '@/shared/assets/3dSquare-icon.svg'
import ExportIcon from '@/shared/assets/export-icon.svg'
import AssetIcon from '@/shared/assets/asset-icon.svg'

export function HeaderActions() {
  return (
    <div className='flex items-center gap-10'>
      <Button
        shape='circle'
        iconPosition='right'
        rightIcon={<SquareIcon className='size-[1.9rem]' />}
        className='text-xs font-semibold'>
        저장
      </Button>
      <Button
        shape='circle'
        iconPosition='right'
        rightIcon={<ExportIcon className='size-[1.5rem]' />}
        className='text-xs font-semibold'>
        게시
      </Button>
      <Button
        shape='circle'
        color='gradientPrimary'
        iconPosition='only'
        leftIcon={<AssetIcon className='size-[1.6rem]' />}
        aria-label='에셋'
        className='p-8'
      />
    </div>
  )
}
