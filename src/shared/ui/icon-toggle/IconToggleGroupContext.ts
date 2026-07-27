import { createContext } from 'react'
import { IconToggleGroupContextValue } from './type'

export const IconToggleGroupContext =
  createContext<IconToggleGroupContextValue | null>(null)
