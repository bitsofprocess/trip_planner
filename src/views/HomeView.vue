<template>

    <v-app class="rounded rounded-md">
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
