import projectAtom from '@atoms/Projects'
import userAtom from '@atoms/User'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { githubLink, linkedInLink, projectList } from '../data'

function useMainInitialLoad(delayTime?: number) {
  const [isDelayed, setIsDelayed] = useState(false)

  const setUser = useSetRecoilState(userAtom)
  const setProject = useSetRecoilState(projectAtom)

  // delay event depending on the needs (ex. for ui interaction & effects)

  useEffect(() => {
    if (!isDelayed) return

    const delayedEvent = window.setTimeout(() => setIsDelayed(!isDelayed), delayTime ?? 0)

    return () => clearTimeout(delayedEvent)
  }, [])

  // set user recoil state

  useEffect(() => {
    setUser((prev) => ({ ...prev, githubProfile: githubLink, linkedInProfile: linkedInLink }))
    setProject(projectList)
  }, [])

  return { isDelayed }
}

export default useMainInitialLoad
