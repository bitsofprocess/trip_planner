import { defineStore } from 'pinia'
import { auth } from './index'
import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { useRouter } from 'vue-router'


export const useFirebaseStore = defineStore('firebaseStore', {
  state: () => ({
    destinations: []
  }),
  actions: {
    onSignIn(email, password) {
      // console.log({email: email.value, password: password.value, confirmPassword: confirmPassword.value})

      signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {

          useRouter().push('/home')
        })
        .catch(err => {
          // errMsg.value = err.message
          // console.log(err.message)
          return err.message
        })

    },
    signInWithGoogle() {
      console.log('google sign in')
      const provider = new GoogleAuthProvider()
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result.user)
          useRouter().push('/home')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})
