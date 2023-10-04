
<template>

  <v-row justify="center">
    <v-col cols="6">
      <div class="d-flex pb-4">
        <DatePicker />
      </div>
      <DetailAdder />
    </v-col>
    <v-col cols="6"><DestinationListView :dests="dests"/></v-col>
  </v-row>
</template>

<script>
import DatePicker from '../DatePicker/DatePicker.vue'
import DestinationListView from './DestinationListView.vue'
import DetailAdder from '../TripEditor/DetailAdder.vue'

export default {
  components: {  DestinationListView, DetailAdder, DatePicker },
  props: ['dests']
}
</script>

<style>

</style>
