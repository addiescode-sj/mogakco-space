export type UserFbStore = Record<'user', UserFbData>;
export type UserFbData = { userInfo: UserInfo };

export interface UserInfo {
  email: string;
  nickname: string;
}
