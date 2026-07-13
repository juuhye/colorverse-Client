'use client'

import { useEffect } from 'react'
import { useAuthStore } from './useAuthStore'
import { supabase } from '@/shared/lib/utils/supabase'

export function useAuthInit() {
  const setUser = useAuthStore((state) => state.setUser)

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession()
      const user = data.session?.user
      setUser(user ? { id: user.id, email: user.email! } : null)
    }
    init()

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const user = session?.user
        setUser(user ? { id: user.id, email: user.email! } : null)
      }
    )

    return () => listener.subscription.unsubscribe()
  }, [setUser])
}
