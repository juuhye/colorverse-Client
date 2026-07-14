import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const AUTH_PATHS = ['/login', '/login-form']

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request })
  const { pathname } = request.nextUrl
  const isAuthPage = AUTH_PATHS.some((path) => pathname.startsWith(path))

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach((item) => {
            request.cookies.set(item.name, item.value)
          })
          response = NextResponse.next({ request })
          cookiesToSet.forEach((item) => {
            response.cookies.set(item.name, item.value, item.options)
          })
        },
      },
    }
  )

  // getUser()로 로그인 여부 확인 + /login, /login-form, / 리다이렉트
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url))
  } else if (!user && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return response
}

// 미들웨어 실행 범위 지정
export const config = {
  matcher: ['/', '/login', '/login-form'],
}
