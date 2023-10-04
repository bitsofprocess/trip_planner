<template>
  test view
 <!-- <v-container class="justify-center">
    <v-row no-gutters>
      <v-col>
        <v-sheet>
          <v-card 
            width="510px"   
            class="text-center mx-auto pa-6" 
            :title="`Trip Dates: `"
          >
            <div class="text-center">
            <v-btn
              color="amber-lighten-1"
              @click="dialog = true"
            >
              Change Dates
            </v-btn>
            <p>{{ store.format }}</p>
            <v-dialog
              v-model="dialog"
              width="auto"
            >
              <v-card
                class="text-center"
                :title="`${newStart} - ${newEnd}`"
              >
                <DatePicker @set-date-range="saveChange" class="pa-6" />
             
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                   color="primary" 
                   @click="saveChange"
                   class="text-none"
                   min-width="92"
                   rounded
                   variant="outlined"
                >
                   Save Change</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
          </v-card>
          
        </v-sheet>
        <v-spacer></v-spacer>
        <v-sheet class="pa-2 ma-2">
          <DetailAdder />
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <TripExpand :dates="dates"></TripExpand>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script>
import { useTripDataStore } from '../stores/TripDataStore'
import { ref } from 'vue'
import { format } from 'date-fns'
// import { getDates } from '../services/DateHandlers'
// import { storeToRefs } from 'pinia'
// import DatePicker from '../components/DatePicker/DatePicker.vue'
// import DetailAdder from '../components/TripEditor/DetailAdder.vue'
// import TripExpand from '../components/TripDetails/TripExpand.vue'


export default {
  // components: { DatePicker, DetailAdder, TripExpand },
  setup() {
    const store = useTripDataStore()
    const dialog = ref(false)
    // const { dateRange } = storeToRefs(store)
    // let currStart = ref(format(store.dateRange.start, 'MM/dd/yyyy'))
    // let currEnd = ref(format(store.dateRange.end, 'MM/dd/yyyy'))
    let newStart = ref('')
    let newEnd = ref('')
    let dates = ref('')

    const saveChange = () => {
      
   
      newStart.value = format(store.dateRange.start, 'MM/dd/yyyy')
      newEnd.value = format(store.dateRange.end, 'MM/dd/yyyy')
    
      store.createDateArray(store.dateRange.start, store.dateRange.end)
      dates.value = store.format


      dialog.value = false
    
    }

    return { dialog, saveChange, newStart, newEnd, store, dates }
  }
}
</script>

<style>

</style>
