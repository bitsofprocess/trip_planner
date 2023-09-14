
<template>
  <v-row>
    <v-col cols="6"><DetailAdder /></v-col> 
    <!-- <v-col cols="6"><DestinationEditor /></v-col>  -->
    <v-col cols="6"><DestinationListView :dests="dests"/></v-col> 
  </v-row>
</template>

<script>
import DestinationListView from '../components/DestinationListView.vue'
// import DestinationEditor from '../components/DestinationEditor.vue'
import DetailAdder from '../components/DetailAdder.vue'

export default {
  components: {  DestinationListView, DetailAdder },
  props: ['dests']
}
</script>

<style>

</style>