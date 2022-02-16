import { atom } from 'recoil'
import { SkillSet } from './model'

const skillsAtom = atom<SkillSet>({
  key: 'skills',
  default: [],
})

export default skillsAtom
