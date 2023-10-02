import { defineStore } from 'pinia'

export const useTripDataStore = defineStore('TripDataStore', {
    state: () => ({
        dateRange: [{start: null, end: null}], 
        dateArray: []
    }),
    getters: {
        // favs() {
        //     return this.tasks.filter(t => t.isFav)
        // },
        // favCount() {
        //     return this.tasks.reduce((p, c) => {
        //         return c.isFav ? p + 1 : p
        //     }, 0)
        // },
        // totalCount: (state) => {
        //     return state.tasks.length
        // }
    },
    actions: {
        async getDateRange(startDate, endDate) {
            const dates = []
            let currentDate = startDate
            const addDays = function (days) {
              const date = new Date(this.valueOf())
              date.setDate(date.getDate() + days)
              return date
            }
            while (currentDate <= endDate) {
              dates.push(currentDate)
              currentDate = addDays.call(currentDate, 1)
            }
            return this.dateArray = dates
        }
        // async getTasks() {
        //     this.loading = true
        //     const res = await fetch('http://localhost:3000/tasks')
        //     const data = await res.json()

        //     this.tasks = data
        //     this.loading = false
        // },
        // async addTask(task) {
        //     this.tasks.push(task)

        //     const res = await fetch('http://localhost:3000/tasks', {
        //         method: 'POST',
        //         body: JSON.stringify(task),
        //         headers: {'Content-Type': 'application/json'}
        //     })

        //     if (res.error) {
        //         console.log(res.error);
        //     }
        // },
        // async deleteTask(id) {
        //     this.tasks = this.tasks.filter(t => {
        //         return t.id !== id
        //     })

        //     const res = await fetch('http://localhost:3000/tasks/' + id, {
        //         method: 'DELETE'
        //     })

        //     if (res.error) {
        //         console.log(res.error);
        //     }
        // },
        // async toggleFav(id) {
        //     const task = this.tasks.find(t => t.id === id)
        //     task.isFav = !task.isFav

        //     const res = await fetch('http://localhost:3000/tasks/' + id, {
        //         method: 'PATCH',
        //         body: JSON.stringify({isFav: task.isFav}),
        //         headers: {'Content-Type': 'application/json'}
        //     })

        //     if (res.error) {
        //         console.log(res.error);
        //     }
        // }
    }
})