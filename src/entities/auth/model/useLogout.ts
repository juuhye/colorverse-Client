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
      queryClient.removeQueries({ queryKey: ['user'] })
    },
  })
}
