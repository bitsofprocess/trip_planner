<template>
<div class="text-center d-flex pb-4">
      <v-btn class="ma-2" @click="all">
        All
      </v-btn>
      <v-btn class="ma-2" @click="none">
        None
      </v-btn>

    </div>
  <div>
    <v-expansion-panels variant="popout">
      <v-expansion-panel
        v-for="date in dates"
        :key="date"
        bg-color="teal-lighten-5"
      >
      <v-expansion-panel-title>{{ date }}</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-card class="mb-4">
            card 1
          </v-card>
          <v-spacer></v-spacer>
          <v-card>
            card 2
          </v-card>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { useTripDataStore } from '@/stores/TripDataStore'
import { storeToRefs } from 'pinia'
// import { ref } from 'vue'

export default {
  props: [ "dates" ],
  setup() {

    const store = useTripDataStore()
    const { format } = storeToRefs(store)
    // const dates = ref(store.dateArray)
 
 

    return { store, format }
  }

}
</script>