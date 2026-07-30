import { Panel } from '@/shared/ui/panel'

export function LandBuilderPage() {
  return (
    <div className='absolute top-0 left-0 flex h-full w-full flex-col'>
      <div className='relative flex-1'>
        <Panel side='left'>{/* TODO: content 추가 예정  */}</Panel>

        <Panel side='right'>{/* TODO: content 추가 예정  */}</Panel>
      </div>

      <Panel side='bottom'>{/* TODO: content 추가 예정  */}</Panel>
    </div>
  )
}
