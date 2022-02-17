import { atom } from 'recoil'
import { Modal } from './model'

const modalAtom = atom<Modal>({
  key: 'modal',
  default: {
    dimd: false,
  },
})

export default modalAtom
