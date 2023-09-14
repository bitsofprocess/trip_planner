<template>

    <v-app class="rounded rounded-md">
    <!-- <v-app-bar title="Application bar">
      <template v-slot:append>
        <v-btn icon="mdi-logout"></v-btn>
    
      </template>
    </v-app-bar> -->

    <!-- <v-navigation-drawer
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
      </v-navigation-drawer> -->

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <DestinationView :dests="dests"/>
    </v-main>
  </v-app>


</template>

<script>
import { ref, onMounted } from 'vue'
// import { collection, getDocs } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore"
import { db } from '../stores/index'
import DestinationView from '../components/DestinationView.vue'

export default {
  name: 'HomeView',
  components: { DestinationView },
  setup() {
    const dests = ref([])
    const error = ref(null)

    onMounted(() => {

      onSnapshot(collection(db, "destinations"), (querySnapshot) => {
        const destArray = [];
        querySnapshot.forEach((doc) => {
          const dest = {
            id: doc.id,
            name: doc.data().name,
            city: doc.data().city,
            state: doc.data().state,
            arrival_date: doc.data().arrival_date,
            arrival_time: doc.data().arrival_time,
            departure_date: doc.data().departure_date,
            departure_time: doc.data().departure_time,
        }

          destArray.push(dest)
        });
        dests.value = destArray
      });
    })

    return { dests, error }
  }

}

</script>
../stores/index