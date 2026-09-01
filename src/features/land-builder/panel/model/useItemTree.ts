import { useQuery } from '@tanstack/react-query'
import { fetchItemTree } from '../api/itemTreeApi'

export function useItemTree() {
  return useQuery({
    queryKey: ['land-items'],
    queryFn: fetchItemTree,
  })
}
