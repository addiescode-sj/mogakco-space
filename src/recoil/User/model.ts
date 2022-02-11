export interface User {
  email: string | null | undefined
  name?: string
  githubProfile?: string
}

export type UserList = User[]
