import { FirebaseError } from 'firebase/app'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import router from 'next/router'
import * as S from '../Auth.style'
import useFirebaseLogin from '../hooks/useFirebaseLogin'
import { Inputs } from '../model'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useForm, SubmitHandler } from 'react-hook-form'

function SignIn() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const { isLoggedIn } = useFirebaseLogin()

  const authInstance = getAuth()

  const onSubmit: SubmitHandler<Inputs> = async () => {
    const { email, password } = getValues()

    try {
      // login with firebase
      await signInWithEmailAndPassword(authInstance, email, password)
    } catch (e) {
      const errorEvent = e as FirebaseError
      alert(errorEvent.message)
    }
  }

  const onClickGoogleLogin = async () => {
    const googleProvider = new GoogleAuthProvider()
    try {
      await signInWithPopup(authInstance, googleProvider)
    } catch (e) {
      const errorEvent = e as FirebaseError
      alert(errorEvent.message)
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Message>{isLoggedIn ? 'Welcome!' : 'Please provide your email to get access.'}</S.Message>
      <S.AuthFormInput
        isError={errors.email}
        type="text"
        defaultValue=""
        placeholder="your email"
        {...register('email', { required: true })}
      />
      <S.AuthFormInput
        isError={errors.password}
        type="password"
        defaultValue=""
        placeholder="your password"
        {...register('password', { required: true })}
      />
      {errors && <S.Warning>This field is required.</S.Warning>}

      <S.Button type="button" onClick={onClickGoogleLogin}>
        Sign in with Google
      </S.Button>
      <S.Button type="submit">Log in</S.Button>
      <S.Divider />
      <S.Button type="button" onClick={() => router.push('/signup')}>
        Sign up
      </S.Button>
    </S.Form>
  )
}

export default SignIn
