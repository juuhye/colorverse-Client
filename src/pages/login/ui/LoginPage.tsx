import Image from 'next/image'
import { Logo } from '@/shared/ui/logo'
import Qrcode from '../assets/qrcode.png'
import LoginItem from '../assets/login-item.png'
import { LoginCard } from '@/widgets/login-card'

export function LoginPage() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='relative flex flex-col items-center gap-2xl'>
        {/* 로그인 상단 슬로우건 */}
        <h3 className='bg-gradient-new-20 bg-clip-text text-xl font-bold text-transparent filter'>
          컬러버스 빌더에 로그인하세요!
        </h3>

        {/* 로그인 버튼 영역 */}
        <LoginCard />

        {/* 로그인 하단 영역 */}
        <div className='flex flex-col items-center gap-40'>
          <div className='flex flex-col items-center gap-20'>
            {/* 로고 */}
            <Logo variant='main' />
            <p className='text-md text-basic-gray-50'>
              아직 컬러버스 회원이 아니라면 앱에서 계정을 생성하세요!
            </p>
          </div>
          {/* QR 이미지 */}
          <Image
            src={Qrcode.src}
            alt='colorverse 계정 생성 qr code'
            width={80}
            height={80}
            className='object-contain'
          />
        </div>
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
  )
}
