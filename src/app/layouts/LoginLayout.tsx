import type { Metadata } from 'next'
import { LoginPage } from '@/pages/login'
import LoginBg from '@/shared/assets/login-bg.jpg'

export const metadata: Metadata = {
  title: 'colorverse',
  description: 'colorverse: Web Builder',
}

export default function LoginLayout() {
  return <LoginPage />
}
