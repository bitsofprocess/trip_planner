<template>

  <form @submit.prevent="submit">
    <v-sheet width="300" class="mx-auto">

      <v-text-field
        v-model="new_dest.name"
        label="Destination Name"
      ></v-text-field>

      <v-text-field
        v-model="new_dest.city"
        label="City"
      ></v-text-field>

      <v-text-field
      v-model="new_dest.state"
      label="State"
    ></v-text-field>

      Arrival Date:
      <v-text-field
      v-model="new_dest.arrival_date"
      type="date">
      </v-text-field>

      Arrival Time:
      <v-text-field
      v-model="new_dest.arrival_time"
      type="time">
      </v-text-field>

      Departure Date:
      <v-text-field
      v-model="new_dest.departure_date"
      type="date">
      </v-text-field>

      Arrival Time:
      <v-text-field
      v-model="new_dest.departure_time"
      type="time">
      </v-text-field>

      <v-btn
        type="submit"
        block
        class="mt-2"
        text="Submit"
        color="green"
        @click="add_dest"
      ></v-btn>
    </v-sheet>
  </form>
</template>


<script>
import { ref } from 'vue';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../stores/index'

export default {
  components: { },
  setup() {

    const date = ref();
    const new_dest = ref({
      city: '',
      state: '',
      arrival_date: '',
      arrival_time: '',
      departure_date: '',
      departure_time: ''

    });

    const add_dest = async () => {
      const submitted_dest = {
            "name": new_dest.value.name,
            "city": new_dest.value.city,
            "state": new_dest.value.state,
            "arrival_date": new_dest.value.arrival_date,
            "arrival_time": new_dest.value.arrival_time,
            "departure_date": new_dest.value.departure_date,
            "departure_time": new_dest.value.departure_time

          }

      // const response = await fetch('http://localhost:3000/destinations', {
      //   method: 'POST',
      //   body: JSON.stringify(submitted_dest),
      //   headers: {
      //     "Content-type": "application/json"
      //   }
      // })

      addDoc(collection(db, "destinations"), submitted_dest);
      console.log(submitted_dest);

      new_dest.value = {
      city: '',
      state: '',
      arrival_date: '',
      arrival_time: '',
      departure_date: '',
      departure_time: ''

    }
    }

    return {
      date,
      new_dest,
      add_dest
    }
  }
}

</script>

<style>

</style>
