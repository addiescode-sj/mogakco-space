import { atom } from 'recoil'
import { User } from './model'

const userAtom = atom<User>({
  key: 'user',
  default: {
    email: '',
    name: '',
    githubProfile: '',
    linkedInProfile: '',
  },
})

export default userAtom
