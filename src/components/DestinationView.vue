
<template>
  <v-row>
    <v-col cols="6" class="mt-16"><DestinationEditor /></v-col>
    <v-col cols="6"><DestinationList :dests="dests"/></v-col>
  </v-row>
</template>

<script>
import DestinationList from './DestinationListView.vue'
import DestinationEditor from '../components/DestinationEditor.vue'

export default {
  components: { DestinationList, DestinationEditor},
  props: ['dests']
}
</script>

<style>

</style>