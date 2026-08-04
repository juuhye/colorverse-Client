import { Panel } from '@/shared/ui/panel'
import { LeftPanel } from '@/widgets/land-builder/panel'

export function LandBuilderPage() {
  return (
    <div className='absolute top-0 left-0 flex h-full w-full flex-col overflow-hidden p-sm'>
      <div className='relative flex-1'>
        <LeftPanel />

        <Panel side='right'>{/* TODO: content 추가 예정  */}</Panel>
      </div>

      <Panel side='bottom'>{/* TODO: content 추가 예정  */}</Panel>
    </div>
  )
}
