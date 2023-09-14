<template>
    <v-sheet width="300" class="mx-auto">
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
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { ref, computed } from 'vue'
import { auth } from '../stores/index'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default {
    setup() {
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
            this.$router.push('/home')
          })
          .catch(err => {
            console.log(err.message)
          })

      }

      return { email, password, confirmPassword, comparePasswords, onSignup }
    }
}
</script>

<style>
/* .app-name {
    font-size: 5rem;
    margin-bottom: 3rem;
    text-align: center;
    font-family: 'Fruktur', cursive;
} */
</style>
