<template>
  <v-card width="510px" height="500px" class="mx-auto">
    <v-tabs
     centered
     stacked
     v-model="tab"

    >
        <v-tab :value="transport">
            <v-icon>mdi-airplane</v-icon>
            transport
        </v-tab>

      <v-tab :value="lodging">
            <v-icon>mdi-bed</v-icon>
            Lodging
        </v-tab>

        <!-- <v-tab :value="rentals">
            <v-icon>mdi-car</v-icon>
            Rentals
        </v-tab>

        <v-tab :value="food">
            <v-icon>mdi-food-fork-drink</v-icon>
            Food
        </v-tab>

        <v-tab :value="places">
            <v-icon>mdi-map-marker</v-icon>
            Places
        </v-tab> -->
    </v-tabs>

    <v-window v-model="tab">
        <v-window-item 
            v-model="tab"
            value="transport"
        >
            <v-card>
                <v-card-text>transport</v-card-text>
            </v-card>
        </v-window-item>

        <v-window-item 
            v-model="tab"
            value="lodging"
        >
            <v-card>
                <v-card-text>lodging</v-card-text>
            </v-card>
        </v-window-item>

        <!-- <v-window-item 
            v-model="tab"
            :value="rentals"
        >
            <v-card>
                <v-card-text>rentals</v-card-text>
            </v-card>
        </v-window-item>

        <v-window-item 
            v-model="tab"
            :value="food"
        >
            <v-card>
                <v-card-text>food</v-card-text>
            </v-card>
        </v-window-item>

        <v-window-item 
            v-model="tab"
            :value="places"
        >
            <v-card>
                <v-card-text>places</v-card-text>
            </v-card>
        </v-window-item> -->



    </v-window>

  </v-card>
</template>

<script>
export default {
setup () {
    const tab = ''
    const transport = ''
    const lodging = ''

    return { tab, transport, lodging }
}
}
</script>

<style>

</style>