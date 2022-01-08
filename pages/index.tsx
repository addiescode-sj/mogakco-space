import { useRouter } from 'next/router'
import { useEffect } from 'react'

function Root() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/main')
  }, [])

  return null
}

export default Root
