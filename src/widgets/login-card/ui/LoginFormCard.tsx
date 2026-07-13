'use client'

import { useState } from 'react'
import { cn } from '@/shared/lib/utils/cn'
import { useRouter } from 'next/navigation'
import { useLogin } from '@/features/login/model/useLogin'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input/Input'
import IdIcon from '@/shared/assets/id-icon.svg'
import PwIcon from '@/shared/assets/pw-icon.svg'

export function LoginFormCard() {
  const router = useRouter()
  const { mutate, error, isPending } = useLogin()
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    mutate({ id, password }, { onSuccess: () => router.push('/') })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={cn(
          'flex w-[53.5rem] flex-col rounded-28 bg-white p-[10rem] py-[7rem] shadow-[0_18px_30px_rgba(119,71,255,0.1)]',
          error ? 'gap-[2.2rem]' : 'gap-[4rem]'
        )}>
        {/* ID, PW 입력란 */}
        <div className='relative flex w-full flex-col gap-10'>
          <Input
            aria-label='아이디'
            placeholder='아이디를 입력해 주세요'
            icon={<IdIcon />}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            type='password'
            aria-label='비밀번호'
            placeholder='비밀번호를 입력해 주세요'
            icon={<PwIcon />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p role='alert' className='px-md text-sm text-brand-secondary'>
              아이디 또는 비밀번호를 잘못 입력했습니다.
              <br />
              입력하신 내용을 다시 확인해 주세요.
            </p>
          )}
        </div>
        {/* 로그인 버튼 */}
        <Button
          size='xl'
          shape='circle'
          color='secondary'
          iconPosition='none'
          type='submit'
          disabled={isPending}
          className='text-md font-bold'>
          {isPending ? '로그인 중..' : '로그인'}
        </Button>
      </div>
    </form>
  )
}
