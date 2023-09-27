<template>
  <VDatePicker v-model="range" is-range/>
  <slot></slot>
</template>

<script setup>
import { ref } from 'vue'
// const startDate = ref(new Date())
// const endDate = ref(new Date())
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate()

const range = ref({start: new Date(), end: Date() });

// const attributes = ref([
//   {
//     hightlight: 'red',
//     dates: [[new Date(2023, 8, 20), new Date(2023, 8, 24)]],
//   }
// ])

</script>
