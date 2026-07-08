'use client'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input/Input'
import IdIcon from '@/shared/assets/id-icon.svg'
import PwIcon from '@/shared/assets/pw-icon.svg'

export function LoginFormCard() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className='flex w-[53.5rem] flex-col gap-[4rem] rounded-28 bg-white p-[10rem] py-[7rem] shadow-[0_18px_30px_rgba(119,71,255,0.1)]'>
        {/* ID, PW 입력란 */}
        <div className='flex w-full flex-col gap-10'>
          <Input
            aria-label='아이디'
            placeholder='아이디를 입력해 주세요'
            icon={<IdIcon />}
          />
          <Input
            type='password'
            aria-label='비밀번호'
            placeholder='비밀번호를 입력해 주세요'
            icon={<PwIcon />}
          />
        </div>
        {/* 로그인 버튼 */}
        <Button
          size='xl'
          shape='circle'
          color='secondary'
          iconPosition='none'
          type='submit'
          className='text-md font-bold'>
          로그인
        </Button>
      </div>
    </form>
  )
}
