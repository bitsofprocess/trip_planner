<template>
  <form @submit.prevent="submit">
    <v-sheet width="300" class="mx-auto">
        
        <v-text-field
          v-model="loc_name"
          :rules="rules"
          label="Destination Name"
        ></v-text-field>

        <v-text-field
        v-model="city"
        :rules="rules"
        label="City"
      ></v-text-field>

        <v-text-field
        v-model="state"
        :rules="rules"
        label="State"
      ></v-text-field>

      Arrival Date/Time:
      <VueDatePicker v-model="arrival_date"></VueDatePicker>
      <br>
      Departure Date/Time:
      <VueDatePicker v-model="departure_date"></VueDatePicker>

      <v-btn
        :loading="loading"
        type="submit"
        block
        class="mt-2"
        text="Submit"
      ></v-btn>

    </v-sheet>
  </form>
</template>


<script>
import { ref } from 'vue';
// https://vue3datepicker.com/installation/
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: { VueDatePicker },
  setup() {
    const date = ref();

    return {
      date
    }
  }
}

</script>

<style>

</style>