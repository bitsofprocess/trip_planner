<template>
  <div class="text-center">
    <v-btn icon="mdi-pencil" class="mx-2">
        <v-icon icon="mdi-pencil"></v-icon>

      <v-dialog
        v-model="dialog"
        activator="parent"
        width="1024"
        class="pt-5"
      >
        <v-card>
            <div class="d-flex justify-end mb-6 pa-4">
                <v-btn @click="dialog = false" icon="$close" color="red"></v-btn>
            </div>

        <form @submit.prevent="submit">
            <v-sheet width="300" class="mx-auto">

                <v-text-field
                v-model="current_dest.name"
                label="Destination Name"
                ></v-text-field>

                <v-text-field
                v-model="current_dest.city"
                label="City"
                ></v-text-field>

                <v-text-field
                v-model="current_dest.state"
                label="State"
                ></v-text-field>

                Arrival Date:
                <v-text-field
                v-model="current_dest.arrival_date"
                type="date">
                </v-text-field>

                Arrival Time:
                <v-text-field
                v-model="current_dest.arrival_time"
                type="time">
                </v-text-field>

                Departure Date:
                <v-text-field
                v-model="current_dest.departure_date"
                type="date">
                </v-text-field>

                Arrival Time:
                <v-text-field
                v-model="current_dest.departure_time"
                type="time">
                </v-text-field>

                <v-btn
                    type="submit"
                    block
                    class="mt-2"
                    text="Save"
                    color="green"
                    @click="update_dest(dest.id)"
                ></v-btn>
            </v-sheet>
        </form>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>

<script>
import { ref, toRef } from 'vue'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '@/stores/index'

export default {
    props: [ 'toggleEditModal', 'dest'],
    components: { },
    setup(props) {

        const curr_dest = toRef(props, 'dest')

        let dialog = ref(false)
        const current_dest = ref({
        name: curr_dest.value.name,
        city: curr_dest.value.city,
        state: curr_dest.value.state,
        arrival_date: curr_dest.value.arrival_date,
        arrival_time: curr_dest.value.arrival_time,
        departure_date: curr_dest.value.departure_date,
        departure_time: curr_dest.value.departure_time

        });

        const update_dest = (id) => {

        const updated_dest = {
            "name": current_dest.value.name,
            "city": current_dest.value.city,
            "state": current_dest.value.state,
            "arrival_date": current_dest.value.arrival_date,
            "arrival_time": current_dest.value.arrival_time,
            "departure_date": current_dest.value.departure_date,
            "departure_time": current_dest.value.departure_time

          }


        updateDoc(doc(db, "destinations", id), updated_dest)

        // updated_dest.value = {
        // city: '',
        // state: '',
        // arrival_date: '',
        // arrival_time: '',
        // departure_date: '',
        // departure_time: ''

        // }
        dialog.value = false
        }
        return { dialog, current_dest, update_dest }
    }
}
</script>

<style>

</style>
../store