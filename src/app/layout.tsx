import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import '@/app/style/globals.css'
import { QueryProvider } from '@/app/providers/QueryProvider'
import { AuthInitializer } from '@/entities/user'

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
})

export const metadata: Metadata = {
  title: 'colorverse',
  description: 'colorverse: Web Builder',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko' className={`${notoSansKr.variable} h-full antialiased`}>
      <body className='flex min-h-full flex-col'>
        <QueryProvider>
          <AuthInitializer />
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
