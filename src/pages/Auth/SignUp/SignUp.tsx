import { authService, authUser } from '@firebase/clientApp'
import { fb } from '@firebase/firebase.utils'
import { FirebaseError } from 'firebase/app'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as S from '../Auth.style'
import { Inputs } from '../model'

function SignUp() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<Inputs> = async () => {
    const { email, password, nickname } = getValues()

    try {
      // create user with firebase
      await authService.createUserWithEmailAndPassword(authUser, email, password)

      // create firebase user document
      fb.user.setUserInfo({ email, nickname })
    } catch (e) {
      // firebase error message
      const errorEvent = e as FirebaseError
      console.error(errorEvent)
      alert(errorEvent.message)
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Message>Create account</S.Message>
      <S.AuthFormInput
        isError={errors.email}
        type="text"
        defaultValue=""
        placeholder="your email"
        {...register('email', { required: true })}
      />
      <S.AuthFormInput
        isError={errors.nickname}
        type="text"
        defaultValue=""
        placeholder="your nickname"
        {...register('nickname', { required: true })}
      />
      <S.AuthFormInput
        isError={errors.password}
        type="password"
        defaultValue=""
        placeholder="your password"
        {...register('password', { required: true })}
      />

      {errors && <S.Warning>This field is required.</S.Warning>}

      <S.Button type="submit">Sign up </S.Button>
    </S.Form>
  )
}

export default SignUp
