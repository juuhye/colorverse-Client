import { http, HttpResponse } from 'msw'
import { itemTreeGroups } from '@/features/land-builder/panel'

export const handlers = [
  http.get('/api/land-items', () => HttpResponse.json(itemTreeGroups)),
]
