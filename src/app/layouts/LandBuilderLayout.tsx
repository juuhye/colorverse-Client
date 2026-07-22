import { HeaderBottom, HeaderTop } from '@/widgets/land-builder/header'

export function LandBuilderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen w-screen'>
      <header>
        <HeaderTop />
        <HeaderBottom />
      </header>
      {children}
    </div>
  )
}
