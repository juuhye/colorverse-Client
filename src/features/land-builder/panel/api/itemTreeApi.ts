import { apiClient } from '@/shared/api/client'
import { LandTreeGroup } from '../model/type'

export const fetchItemTree = async () => {
  const { data } = await apiClient.get<LandTreeGroup[]>('/api/land-items')
  return data
}
