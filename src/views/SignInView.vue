<template>
    <v-app class="rounded rounded-md">

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <SignIn />

    </v-main>
  </v-app>
</template>

<script>
import SignIn from "@/components/SignIn";

export default {
  name: 'SignInView',
  components: { SignIn },
  component: { SignIn }
}
</script>

<style>

</style>
