import { useMutation } from '@tanstack/react-query'
import { supabase } from '@/shared/lib/utils/supabase'
import { useAuthStore } from '@/entities/user'
import { UserInfo } from './type'

export function useLogin() {
  const { setUser } = useAuthStore()

  return useMutation({
    mutationFn: async ({ id, password }: UserInfo) => {
      const email = `${id}@colorverse.local`

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error

      return data
    },
    onSuccess: (data) => {
      setUser({ id: data.user.id, email: data.user.email! })
    },
  })
}
