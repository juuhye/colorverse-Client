import { Button } from '@/shared/ui/button'
import SettingIcon from '@/shared/assets/setting-icon.svg'

const UTIL_ITEMS = ['단축키', '이용 가이드']

export function HeaderUtils() {
  return (
    <div className='flex gap-10'>
      <ul className='flex items-center'>
        {UTIL_ITEMS.map((item) => (
          <li
            key={item}
            className='relative cursor-pointer px-14 py-[0.9rem] text-button-secondary-outlined after:absolute after:top-1/2 after:right-0 after:h-12 after:w-1 after:-translate-y-1/2 after:bg-button-secondary-outlined last:after:hidden hover:text-white'>
            {item}
          </li>
        ))}
      </ul>
      <Button
        color='icon'
        iconPosition='only'
        shape='circle'
        size='sm'
        leftIcon={<SettingIcon className='size-xs' />}
      />
    </div>
  )
}
