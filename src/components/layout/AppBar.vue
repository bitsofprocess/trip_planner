<template>
    <v-layout>
        <v-app-bar>
            <v-img
                class="mx-2"
                src="https://i.imgur.com/qgGY4tB.png"
                max-height="40"
                max-width="40"
                contain
            ></v-img>
            <!-- <v-avatar :tile="true">
                <img :src="require('@/assets/roamer.jpg')" alt="logo">
            </v-avatar> -->
            <template v-slot:append>
                <v-btn icon="mdi-logout" @click="handleSignOut">
                    
                </v-btn>
            </template>
        </v-app-bar>
    </v-layout>
</template>

<script>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

export default {
setup() {
    let auth;
    const router = useRouter()
    const isLoggedIn = ref('')

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
.small-name {
    /* font-size: 1rem; */
    /* margin-bottom: 3rem;
    text-align: center; */
    font-family: 'Fruktur', cursive;
}
</style>