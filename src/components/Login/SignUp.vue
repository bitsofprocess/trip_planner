<template>
    <v-sheet class="mx-auto pa-16" elevation="4" border>
    <div class="app-name">ROAMER</div>
    <v-form fast-fail @submit.prevent="onSignup">
      <v-text-field
        v-model="email"
        label="email address"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="password"
        type="password"
      ></v-text-field>

      <v-text-field
        v-model="confirmPassword"
        label="confirm password"
        type="password"
        :rules="[comparePasswords]"
        validate-on="submit"
      ></v-text-field>
      <v-btn type="submit" block variant="outlined" class="mt-2 rounded-pill" color="#3F51B5">Submit</v-btn>

      <div class="google-btn">
        <v-btn @click="signInWithGoogle" prepend-icon="mdi-google">Sign Up With Google</v-btn>
      </div>

      <div class="sign-in">
        <router-link to="/">Sign In</router-link>
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
import { ref, computed } from 'vue'
import { auth } from '@/stores/index'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { useRouter } from 'vue-router'
export default {
    setup() {
      const router = useRouter()
      const email = ref('')
      const password = ref('')
      const confirmPassword = ref('')

      const comparePasswords = computed(() => {
        return password.value !== confirmPassword.value ? 'Passwords do not match' : ''
      })

      const onSignup = () => {
        // console.log({email: email.value, password: password.value, confirmPassword: confirmPassword.value})

        createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((cred) => {
            console.log('user created: ', cred.user)
            router.push('/home')
          })
          .catch(err => {
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


      return { email, password, confirmPassword, comparePasswords, onSignup, signInWithGoogle }
    }
}
</script>

<style>
.sign-in {
  text-align: center;
  margin: 2rem;
}
.google-btn {
  text-align: center;
  margin: 2rem;
}
</style>
