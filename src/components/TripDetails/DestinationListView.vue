<template>
    <v-virtual-scroll
  :height="800"
  :width="500"
  :items="dests"
>
  <template v-slot:default="{ item }">
    <SingleDestination>
        <div class="d-flex justify-end mb-6">

          <!-- <v-btn icon="mdi-pencil" class="mx-2" @click="toggleEditModal"></v-btn> -->
          <EditModal :dest="item"></EditModal>
          <v-btn @click="delete_dest(item.id)" icon="$close" color="red"></v-btn>
        </div>
        <h2>{{ item.name }}</h2>
        <h3>{{ item.city }} , {{ item.state }}</h3>
        <br>
        <p>Arrival Date: {{ item.arrival_date }}</p>
        <p>Arrival Time:{{ item.arrival_time }}</p>
        <br>
        <p>Departure Date: {{ item.departure_date }}</p>
        <p>Departure Time: {{ item.departure_time }}</p>
        <br>
    </SingleDestination>
  </template>
</v-virtual-scroll>
</template>


<script>
import SingleDestination from '../TripDetails/SingleDestination.vue'
import { doc, deleteDoc } from "firebase/firestore"
import { db } from '@/stores/index'
import EditModal from '../TripEditor/EditModal.vue'
import { ref } from 'vue'

export default {
    name: 'DestinationListView',
    components: { SingleDestination, EditModal },
    props: [ 'dests' ],
    setup() {

    let modalOpen = ref(false)
    const delete_dest = (id) => {
      deleteDoc(doc(db, "destinations", id));
    }

    const toggleEditModal = () => {
      modalOpen.value = !modalOpen.value
    }

    return { delete_dest, modalOpen, toggleEditModal }
    }
  }
</script>

<style>

</style>
../store/index