<template>
    
    <v-sheet width="300" class="mx-auto">
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
        <router-link to="/signup">Create Account</router-link>
      </div>
     
    </v-form>
  </v-sheet>
</template>

<script>
import { ref } from 'vue'
import { auth } from '../stores/index'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

export default {
    setup() {
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

      return { email, password, errMsg, onSignIn }
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
.create {
  text-align: center;
  margin: 2rem;
}

</style>
