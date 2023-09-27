
<template>

  <v-row>
    <v-col cols="6">
      <v-card class="justify-center">
        <DatePicker />
      </v-card>
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
