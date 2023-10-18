<!-- https://vcalendar.io/ -->

<template>

  <div width="510px" class="text-center mx-auto">
    <VDatePicker v-model.range="range" @click="updateStore" />

  </div>
</template>

<script>
import { ref } from 'vue'
import { useTripDataStore } from '@/stores/TripDataStore'
export default {
props: [],
setup() {
  const store = useTripDataStore()

  const range = ref({ start: new Date(), end: new Date() })

  const updateStore = () => {
    store.dateRange = range
    store.createDateArray(range.value.start, range.value.end)
    console.log(store.dateRange);
  }

  return { range, updateStore, store }
}
}

</script>
