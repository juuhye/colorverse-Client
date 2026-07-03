import type { Metadata } from 'next'
import { LoginPage } from '@/pages/login'

export const metadata: Metadata = {
  title: 'colorverse',
  description: 'colorverse: Web Builder',
}

export default function LoginLayout() {
  return <LoginPage />
}
