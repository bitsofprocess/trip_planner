<template>
   <v-list lines="three" class="w-25">
    <v-list-item
        class="mb-4"
        v-for="dest in dests"
        :border="true"
        :title="`${dest.city}, ${dest.state}`"
        :key="dest.city"
        >
        <br>
        <p>Arrival Date: {{ dest.arrival_date }}</p>
        <p>Arrival Time:{{ dest.arrival_time }}</p>
        <br>
        <p>Departure Date: {{ dest.departure_date }}</p>
        <p>Departure Time: {{ dest.departure_time }}</p>
        <br>
        <v-btn>DETAILS</v-btn>
    </v-list-item>
    </v-list>
</template>

<script>
// import SingleDestination from './SingleDestination.vue'

export default {
    name: 'DestinationList',
    components: { },
    props: [ 'dests']
}
</script>

<style>

</style>