import { defineStore } from 'pinia'

export const useFirebaseStore = defineStore('firebaseStore', {
  state: () => ({
    destinations: []
  }),
  actions: {
    getDests() {
      console.log('getDests working')
    }
  }
})
