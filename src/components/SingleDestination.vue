<template>
    <v-card
        variant="outlined"
        class="ma-3 pa-5"
    >
        <slot></slot>
        <template v-slot:append>
        </template>
    </v-card>

</template>

<script>
import { doc, deleteDoc } from "firebase/firestore"
import { db } from '../stores/index'

export default {
    name: 'SingleDestination',
    props: [ "dest"],
    // props: ['dest']
    setup() {

        const delete_dest = (id) => {
            deleteDoc(doc(db, "destinations", id))
        }

        return { delete_dest }
    }
}
</script>

<style>

</style>
../store/index