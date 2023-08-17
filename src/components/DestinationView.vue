
<template>
  <v-row>
    <v-col cols="6"><DestinationEditor /></v-col> 
    <v-col cols="6"><DestinationListView :dests="dests"/></v-col> 
  </v-row>
</template>

<script>
import DestinationListView from '../components/DestinationListView.vue'
import DestinationEditor from '../components/DestinationEditor.vue'

export default {
  components: {  DestinationEditor, DestinationListView },
  props: ['dests']
}
</script>

<style>

</style>