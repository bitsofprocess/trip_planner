<template>
    <v-card
        variant="outlined"
        class="ma-3 pa-5"
    >
        <slot></slot>
    </v-card>

</template>

<script>
export default {
    name: 'SingleDestination',
    props: ['dest']
}
</script>

<style>

</style>