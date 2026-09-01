import type { Metadata } from 'next'
import Image from 'next/image'
import LoginBg from '@/pages/login/assets/login-bg.jpg'
import LoginItem from '@/pages/login/assets/login-item.png'

export const metadata: Metadata = {
  title: 'colorverse | LOGIN',
  description: 'colorverse에 로그인하고 나만의 웹을 만들어보세요',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-screen w-screen overflow-hidden bg-background-secondary-builder p-20'>
      <div
        style={{ backgroundImage: `url(${LoginBg.src})` }}
        className='h-full w-full rounded-[5rem] bg-cover bg-center'>
        <div className='flex h-full w-full flex-col items-center justify-center'>
          <div className='relative flex flex-col items-center gap-2xl'>
            {children}
            <div className='absolute -right-[22.2rem] bottom-0'>
              <Image
                src={LoginItem.src}
                alt='colorverse login item'
                width={172}
                height={235}
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
