export interface User {
  email: string | null | undefined;
  nickname?: string;
}

export type UserList = User[];
