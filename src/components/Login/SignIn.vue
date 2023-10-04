<template>

    <v-sheet class="mx-auto pa-16" elevation="4" border>
      <div class="app-name">ROAMER</div>
      <v-form fast-fail @submit.prevent="onSignIn">
        <v-text-field
          v-model="email"
          label="email address"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="password"
          type="password"
        ></v-text-field>

        <v-btn type="submit" block variant="outlined" class="mt-2 rounded-pill" color="#3F51B5">Submit</v-btn>
        <h4 v-if="errMsg" class="text-red">{{ errMsg }}</h4>
        <div class="create">

          <div class="google-btn">
            <v-btn @click="signInWithGoogle" prepend-icon="mdi-google">Sign In With Google</v-btn>
          </div>

          <router-link to="/signup">Create Account</router-link>
        </div>

      </v-form>
  </v-sheet>
</template>

<script>
import { ref } from 'vue'
import { auth } from '@/stores/index'
import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { useRouter } from 'vue-router'
// import { useFirebaseStore } from '@/stores/FirebaseStore'

export default {
    setup() {
      // const fbStore = useFirebaseStore()

      const router = useRouter()
      const email = ref('')
      const password = ref('')
      let errMsg = ref('')

      const onSignIn = () => {
        // console.log({email: email.value, password: password.value, confirmPassword: confirmPassword.value})

        signInWithEmailAndPassword(auth, email.value, password.value)
          .then(() => {

            router.push('/home')
          })
          .catch(err => {
            errMsg.value = err.message
            console.log(err.message)
          })

      }
      const signInWithGoogle = () => {
        console.log('google sign in')
        const provider = new GoogleAuthProvider()
        signInWithPopup(getAuth(), provider)
          .then((result) => {
            console.log(result.user)
            router.push('/home')
          })
          .catch((error) => {
            console.log(error)
          })
      }

      // USING PINIA ACTIONS

      // const onSignIn = fbStore.onSignIn(email.value, password.value)

      // const signInWithGoogle = fbStore.signInWithGoogle() 

      return { email, password, errMsg, onSignIn, signInWithGoogle }
    }
}
</script>

<style>
.app-name {
  color: #FF6E40;
}
.create {
  text-align: center;
  margin: 2rem;
}
.google-btn {
  text-align: center;
  margin: 2rem;
}

</style>
