import { useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/shared/lib/utils/supabase'
import { useAuthStore } from '@/entities/user'

export function useLogout() {
  const { setUser } = useAuthStore()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    },
    onSuccess: () => {
      setUser(null)
      // 인증된 사용자에 종속된 쿼리는 queryKey를 ['user', ...]로 시작해서 여기서 함께 제거되도록 한다
      queryClient.removeQueries({ queryKey: ['user'] })
    },
  })
}
