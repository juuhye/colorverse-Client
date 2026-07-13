export type User = {
  id: string
  email: string
}

export type AuthState = {
  user: User | null
  setUser: (user: User | null) => void
}
