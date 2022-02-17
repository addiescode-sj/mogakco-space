export interface User {
  email: string | null | undefined
  name?: string
  githubProfile?: string
  linkedInProfile?: string
}

export type UserList = User[]
