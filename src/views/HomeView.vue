<template>
  <!-- <v-app>
    <NavDrawer />
    <v-main>
      hello
    </v-main> -->

    <v-app class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Trips" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <DestinationView :dests="dests"/>
   
    </v-main>
  </v-app>
      

</template>

<script>
import { ref } from 'vue'
import DestinationView from '../components/DestinationView.vue'

export default {
  name: 'HomeView',
  components: { DestinationView },
  setup() {
    const dests = ref([])  
    const error = ref(null)

    const load = async () => {
      try {
        const data = await fetch('http://localhost:3000/destinations')

        if (!data.ok) {
          console.log('no data available');
        }

        dests.value = await data.json()
        console.log(dests);

      } catch(err) {
        error.value = err.message
        console.log(err.message);
      }
    }

    load()

    return { dests, error }
  } 

}

</script>
