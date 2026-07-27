'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/shared/ui/button'
import { DropdownPanel } from '@/shared/ui/dropdown/DropdownPanel'
import { useDropdown } from '@/shared/lib/hooks/useDropdown'
import { useLogout } from '@/entities/auth'

import HamburgerIcon from '../assets/hamburger-Icon.svg'
import TextLogo from '@/shared/assets/text-logo.svg'
import LogoutIcon from '@/shared/assets/logout-icon.svg'

import { SHORTCUTKEY_OPTIONS } from '../model/shortcutKeyOptions'

const OPTION_BUTTON_CLASS =
  'cursor-pointer text-[#FFFFFF99] relative flex justify-between h-[2.4rem] w-full items-center rounded-4 p-10 py-4 font-medium hover:bg-brand-primary hover:text-white'

export function ShortcutKeyMenu() {
  const router = useRouter()
  const { mutate: logout, isPending } = useLogout()
  const { isOpen, close, toggle, ref } = useDropdown<HTMLDivElement>()
  return (
    <div className='relative' ref={ref}>
      <Button
        color='icon'
        iconPosition='only'
        shape='circle'
        size='md'
        leftIcon={<HamburgerIcon className='h-xs w-sm' />}
        aria-expanded={isOpen}
        aria-controls='shortkey-options'
        onClick={toggle}
      />
      {isOpen && (
        <DropdownPanel arrow='left' offsetX='left' className='min-w-[23rem]'>
          <>
            {/* 상단 로그아웃 영역 */}
            <div className='flex justify-between border-b-1 border-[#FFFFFF1A] py-10 pr-14 pl-sm'>
              <div className='flex items-center gap-4 font-medium text-white'>
                <TextLogo className='h-[1.3rem] w-[7.7rem]' />
                빌더 홈
              </div>
              <Button
                color='icon'
                iconPosition='only'
                shape='circle'
                size='sm'
                leftIcon={<LogoutIcon className='size-14' />}
                disabled={isPending}
                onClick={() =>
                  logout(undefined, {
                    onSuccess: () => {
                      router.push('/login')
                      router.refresh()
                    },
                  })
                }
              />
            </div>
            {/* 하단 단축키 영역 */}
            <ul id='shortkey-options' className='p-10 pb-sm'>
              {SHORTCUTKEY_OPTIONS.map((option) => (
                <li key={option.label}>
                  <button
                    type='button'
                    className={OPTION_BUTTON_CLASS}
                    onClick={() => close()}>
                    <span>{option.label}</span>
                    <span>{option.shortcut}</span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        </DropdownPanel>
      )}
    </div>
  )
}
