<template>
    <v-virtual-scroll
  :height="620"
  :items="dests"
>
  <template v-slot:default="{ item }">
    <SingleDestination :dest="dest">
        <h3>{{ item.city }} , {{ item.state }}</h3>
        <br>
        <p>Arrival Date: {{ item.arrival_date }}</p>
        <p>Arrival Time:{{ item.arrival_time }}</p>
        <br>
        <p>Departure Date: {{ item.departure_date }}</p>
        <p>Departure Time: {{ item.departure_time }}</p>
        <br>
    </SingleDestination>
  </template>
</v-virtual-scroll>
</template>


<script>
import SingleDestination from './SingleDestination.vue'


export default {
    name: 'DestinationListView',
    components: { SingleDestination },
    props: [ 'dests']
}
</script>

<style>

</style>