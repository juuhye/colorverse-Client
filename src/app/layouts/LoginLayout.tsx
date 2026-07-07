import type { Metadata } from 'next'
import { LoginPage } from '@/pages/login'
import LoginBg from '@/pages/login/assets/login-bg.jpg'

export const metadata: Metadata = {
  title: 'colorverse',
  description: 'colorverse: Web Builder',
}

export default function LoginLayout() {
  return (
    <div className='h-screen w-screen overflow-hidden bg-background-secondary-builder p-20'>
      <div
        style={{ backgroundImage: `url(${LoginBg.src})` }}
        className='h-full w-full rounded-[5rem] bg-cover bg-center'>
        <LoginPage />
      </div>
    </div>
  )
}
