import { useQuery } from '@tanstack/react-query'

export function useItemTree() {
  return useQuery({
    queryKey: ['land-items'],
    queryFn: () => fetch('/api/land-items').then,
  })
}
