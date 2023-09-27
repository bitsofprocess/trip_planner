<template>
  <v-app>
    <div>
      <v-app-bar color="deep-orange-accent-2">
          <div class="small-logo" v-if="isLoggedIn">
            roamer
          </div>
        <template v-slot:append>
            <v-btn @click="handleSignOut" v-if="isLoggedIn">
                <v-icon>mdi-logout</v-icon>
            </v-btn>

        </template>
      </v-app-bar>
    </div>
    <v-main>
        <router-view />
    </v-main>
  </v-app>

</template>

<script>
// import AppBar from './components/layout/AppBar.vue'
//  export default {
//     components: { AppBar }
//  }

import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

export default {
setup() {
    let auth;
    const router = useRouter()
    const isLoggedIn = ref(false)

    onMounted(() => {
        auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                isLoggedIn.value =  true
            } else {
                isLoggedIn.value = false
            }
        })
    })

    const handleSignOut = () => {
        signOut(auth).then(() => {
            router.push('/')
        })
    }

    return { isLoggedIn, handleSignOut }
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fruktur:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto');

.app-name {
    font-size: 5rem;
    margin-bottom: 3rem;
    text-align: center;
    font-family: 'Fruktur', cursive;
}
.small-logo {
    font-size: 3rem;
    margin-left: 3rem;
    text-align: center;
    font-family: 'Fruktur', cursive;
}
</style>
