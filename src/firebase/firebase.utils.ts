import { doc, getDoc, setDoc } from 'firebase/firestore'
import { databaseInstance } from './clientApp'
import { UserInfo } from './firebase.model'

const setUserInfo = async ({ email, nickname }: UserInfo) => {
  await setDoc(doc(databaseInstance, 'users/', email), {
    email,
    nickname,
  })
}

const getUserInfo = async (email: string) => {
  const docRef = doc(databaseInstance, 'users/', email)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.error('No such document')
    return
  }
}

export const fb = {
  user: {
    setUserInfo,
    getUserInfo,
  },
} as const
