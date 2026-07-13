import { create } from 'zustand'
import { AuthState } from './type'

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))
