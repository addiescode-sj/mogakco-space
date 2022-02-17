import modalAtom from '@atoms/Modals'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

function useDimdModal() {
  const setDimdModal = useSetRecoilState(modalAtom)

  useEffect(() => {
    setDimdModal((prev) => ({ ...prev, dimd: true }))
  }, [])
}

export default useDimdModal
