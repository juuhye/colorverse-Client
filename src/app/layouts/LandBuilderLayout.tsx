import Image from 'next/image'
import { HeaderBottom, HeaderTop } from '@/widgets/land-builder/header'
import MainMockImg from '@/shared/assets/mainMock-img.jpg'

export function LandBuilderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen w-screen flex-col bg-background-secondary-builder'>
      <header>
        <HeaderTop />
        <HeaderBottom />
      </header>
      <div className='w-full flex-1 overflow-hidden p-sm pt-0'>
        <div className='h-full w-full overflow-hidden rounded-[5rem]'>
          {/* 랜드 빌더 영역 - 임시 이미지*/}
          <Image
            src={MainMockImg}
            alt='랜드 빌더 배경이미지'
            className='h-full w-full object-cover'
          />
        </div>
        {children}
      </div>
    </div>
  )
}
