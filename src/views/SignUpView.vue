<template>
    <v-app class="rounded rounded-md">

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <SignUp />

    </v-main>
  </v-app>
</template>

<script>
import SignUp from "@/components/Login/SignUp.vue";
export default {
  name: 'SignUpView',
  components: { SignUp },
  component: { SignUp }
}
</script>

<style>

</style>
