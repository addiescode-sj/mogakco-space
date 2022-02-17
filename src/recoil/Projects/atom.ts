import { atom } from 'recoil'
import { Project } from './model'

const projectAtom = atom<Project[]>({
  key: 'project',
  default: [],
})

export default projectAtom
