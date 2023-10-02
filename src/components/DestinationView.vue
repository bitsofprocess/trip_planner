
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
import DatePicker from '../components/DatePicker.vue'
import DestinationListView from '../components/DestinationListView.vue'
import DetailAdder from '../components/DetailAdder.vue'

export default {
  components: {  DestinationListView, DetailAdder, DatePicker },
  props: ['dests']
}
</script>

<style>

</style>
