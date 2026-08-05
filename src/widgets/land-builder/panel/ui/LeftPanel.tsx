import { Panel } from '@/shared/ui/panel'
import { CheckBox } from '@/shared/ui/check-box'
import { SearchBar } from '@/shared/ui/search-bar'

export function LeftPanel() {
  return (
    <Panel side='left' defaultOpen={true}>
      <div className='flex flex-col gap-10 p-sm px-xs pb-56'>
        <div className='flex flex-col gap-sm'>
          {/* 상단 제목 + CheckBox */}
          <div className='flex items-center justify-between'>
            <h4 className='text-md font-semibold'>아이템 트리</h4>
            <div className='flex gap-xs'>
              <CheckBox label='Lock' />
              <CheckBox label='Hide' />
            </div>
          </div>
          {/* 아이템 검색 */}
          <SearchBar
            size='lg'
            aria-label='아이템 검색'
            placeholder='원하시는 아이템을 찾아보세요'
          />
        </div>
        {/* 아이템 리스트 */}
        {/* TODO: 아이템 리스트 추가예정 */}
      </div>
    </Panel>
  )
}
