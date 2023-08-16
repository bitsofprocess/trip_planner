
<template>
        <v-list
        v-for="dest in dests"
        :key="dest.id">
            <SingleDestination :dest="dest">
                <h3>{{ dest.city }} , {{ dest.state }}</h3>
                <br>
                <p>Arrival Date: {{ dest.arrival_date }}</p>
                <p>Arrival Time:{{ dest.arrival_time }}</p>
                <br>
                <p>Departure Date: {{ dest.departure_date }}</p>
                <p>Departure Time: {{ dest.departure_time }}</p>
                <br>
            </SingleDestination>
        </v-list>
</template>

<!-- <template>
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
</template> -->

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